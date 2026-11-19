#!/usr/bin/env python3
"""Met à jour data/partenaires.json (tableau de bord des partenaires stratégiques).

Entrée : un fichier JSON = liste des fiches leads du CRM (Close Operator, get_lead → "lead"),
pour tous les leads avec utmSource = "ambassadeur". Le code du partenaire est dans utmCampaign.
Usage : python3 _src/maj-partenaires.py /tmp/leads.json
"""
import json, sys, re, datetime
from zoneinfo import ZoneInfo

EXCLUS = {"THOMAS7", "ARTHUR63"}          # codes de test
TEL_TEST = {"+33695739669"}               # numéro de Mickaël (tests)
VENTE = {"WON", "PLAN_IN_PROGRESS", "PLAN_PAID", "PLAN_DEPOSIT_PAID", "PLAN_OVERDUE"}

def gain(n):  # 300 € la 1re vente, 400 € la 2e, puis 500 €
    return 0 if n <= 0 else 300 if n == 1 else 500 * n - 300

def prenom(code):
    p = re.sub(r"\d+$", "", code).capitalize()
    return p or code

tz = ZoneInfo("Europe/Paris")
now = datetime.datetime.now(tz)
mois = now.strftime("%Y-%m")
leads = json.load(open(sys.argv[1], encoding="utf8"))
P = {}
for l in leads:
    l = l.get("lead", l)
    code = (l.get("utmCampaign") or "").strip().upper()
    if not code or code in EXCLUS or l.get("phone") in TEL_TEST:
        continue
    if (l.get("utmSource") or "").lower() != "ambassadeur":
        continue
    p = P.setdefault(code, {"code": code, "prenom": prenom(code), "resa": 0, "resa_mois": 0, "ventes": 0, "ventes_mois": 0})
    st = l.get("effectiveStatus") or l.get("status")
    booked = (l.get("callCount") or 0) > 0 or st not in ("POTENTIAL", "QUALIFIED", "DISQUALIFIED")
    if booked:
        p["resa"] += 1
        if (l.get("createdAt") or "")[:7] == mois:
            p["resa_mois"] += 1
    if st in VENTE or (l.get("dealCount") or 0) > 0:
        p["ventes"] += 1
        d = l.get("closeDate") or l.get("iclosedUpdatedAt") or ""
        if d[:7] == mois:
            p["ventes_mois"] += 1
for p in P.values():
    p["gagne"] = gain(p["ventes"])
out = {"maj": now.isoformat(timespec="minutes"), "mois": mois,
       "partenaires": sorted(P.values(), key=lambda p: (-p["ventes"], -p["resa"], p["code"]))}
json.dump(out, open("data/partenaires.json", "w", encoding="utf8"), ensure_ascii=False, indent=1)
print(f"{len(P)} partenaires, {sum(p['resa'] for p in P.values())} réservations, {sum(p['ventes'] for p in P.values())} ventes")
