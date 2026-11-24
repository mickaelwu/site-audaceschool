/* Compte les clics sur les liens des partenaires stratégiques (?a=CODE).
   1 clic = 1 visiteur par jour et par code. Le partenaire qui ouvre son propre lien n'est pas compté.
   Les chiffres sont lus par partenaire.html. */
(function(){try{
  var c=(new URLSearchParams(location.search).get('a')||'').toUpperCase().replace(/[^A-Z0-9]/g,'');
  if(!c||c.length<3||c.length>40)return;
  try{var mine=JSON.parse(localStorage.getItem('aud-ambassadeur')||'null');if(mine&&mine.code===c)return}catch(e){}
  var d=new Date(),z=function(n){return ('0'+n).slice(-2)},j=d.getFullYear()+'-'+z(d.getMonth()+1)+'-'+z(d.getDate()),k='aud-clic-'+c;
  try{if(localStorage.getItem(k)===j)return;localStorage.setItem(k,j)}catch(e){}
  var m=j.slice(0,7),u='https://abacus.jasoncameron.dev/hit/audaceschool/';
  fetch(u+'clic-'+c,{keepalive:true}).catch(function(){});
  fetch(u+'clic-'+c+'-'+m,{keepalive:true}).catch(function(){});
}catch(e){}})();
