var nh=0,fl=1,ih=2;var Qs=1,Eo=2,us=3,yi=0,Ke=1,pn=2,Ni=0,ds=1,pl=2,ml=3,gl=4,sh=5;var Fi=100,rh=101,oh=102,ah=103,lh=104,ch=200,hh=201,uh=202,dh=203,xl=204,_l=205,fh=206,ph=207,mh=208,gh=209,xh=210,_h=211,vh=212,yh=213,Sh=214,Xr=0,Yr=1,Zr=2,ns=3,$r=4,Jr=5,Kr=6,jr=7,vl=0,Mh=1,bh=2,Bn=0,yl=1,Sl=2,Ml=3,bl=4,wl=5,El=6,Al=7;var Tl=300,Di=301,fs=302,Ao=303,To=304,Qr=1e3,Rn=1001,to=1002,Fe=1003,wh=1004;var tr=1005;var ze=1006,Co=1007;var jn=1008;var tn=1009,Cl=1010,Rl=1011,ps=1012,Ro=1013,wn=1014,mn=1015,En=1016,Io=1017,Po=1018,Bi=1020,Il=35902,Pl=35899,Ll=1021,Nl=1022,An=1023,$n=1026,Qn=1027,Lo=1028,No=1029,Si=1030,Fo=1031;var Do=1033,er=33776,nr=33777,ir=33778,sr=33779,Bo=35840,Uo=35841,Oo=35842,zo=35843,Vo=36196,ko=37492,Go=37496,Ho=37488,Wo=37489,rr=37490,qo=37491,Xo=37808,Yo=37809,Zo=37810,$o=37811,Jo=37812,Ko=37813,jo=37814,Qo=37815,ta=37816,ea=37817,na=37818,ia=37819,sa=37820,ra=37821,oa=36492,aa=36494,la=36495,ca=36283,ha=36284,or=36285,ua=36286;var Cs=2300,eo=2301,Hr=2302,ol=2303,al=2400,ll=2401,cl=2402;var Eh=3200;var da=0,Ah=1,ti="",Ce="srgb",Rs="srgb-linear",Is="linear",se="srgb";var Wr=7680;var Th=519,Ch=512,Rh=513,Ih=514,Fl=515,Ph=516,Lh=517,Dl=518,Bl=519,Nh=35044;var Ul="300 es",un=2e3,is=2001;function Zu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function $u(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ss(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Fh(){let r=ss("canvas");return r.style.display="block",r}var Ic={},rs=null;function Ol(...r){let t="THREE."+r.shift();rs?rs("log",t,...r):console.log(t,...r)}function Dh(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ot(...r){r=Dh(r);let t="THREE."+r.shift();if(rs)rs("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function zt(...r){r=Dh(r);let t="THREE."+r.shift();if(rs)rs("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Ts(...r){let t=r.join(" ");t in Ic||(Ic[t]=!0,Ot(...r))}function Bh(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Uh={[Xr]:Xr,[Zr]:Kr,[$r]:$r,[ns]:Jr,[Yr]:Yr,[Kr]:Zr,[jr]:jr,[Jr]:ns},Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oa=Math.PI/180,no=180/Math.PI;function ar(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[r&255]+We[r>>8&255]+We[r>>16&255]+We[r>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Qt(r,t,e){return Math.max(t,Math.min(e,r))}function Ju(r,t){return(r%t+t)%t}function za(r,t,e){return(1-e)*r+e*t}function Oh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function zl(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ku(r,t){if(t.constructor===Float32Array)return r;let e=zl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function ju(r,t){if(t.constructor===Float32Array)return r;let e=zl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var Zt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],h=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(d!==v||c!==h||l!==f||u!==g){let p=c*h+l*f+u*g+d*v;p<0&&(h=-h,f=-f,g=-g,v=-v,p=-p);let m=1-a;if(p<.9995){let x=Math.acos(p),b=Math.sin(x);m=Math.sin(m*x)/b,a=Math.sin(a*x)/b,c=c*m+h*a,l=l*m+f*a,u=u*m+g*a,d=d*m+v*a}else{c=c*m+h*a,l=l*m+f*a,u=u*m+g*a,d=d*m+v*a;let x=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=x,l*=x,u*=x,d*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-a*f,t[e+2]=l*g+u*f+a*h-c*d,t[e+3]=u*g-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(s/2),h=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-s*d,this.z=i+c*d+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Va=new q,Pc=new dn,kt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],v=i[0],p=i[3],m=i[6],x=i[1],b=i[4],y=i[7],T=i[2],E=i[5],_=i[8];return s[0]=o*v+a*x+c*T,s[3]=o*p+a*b+c*E,s[6]=o*m+a*y+c*_,s[1]=l*v+u*x+d*T,s[4]=l*p+u*b+d*E,s[7]=l*m+u*y+d*_,s[2]=h*v+f*x+g*T,s[5]=h*p+f*b+g*E,s[8]=h*m+f*y+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,g=e*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(i*l-u*n)*v,t[2]=(a*n-i*o)*v,t[3]=h*v,t[4]=(u*e-i*c)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ka.makeScale(t,e)),this}rotate(t){return Ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return Ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ka=new kt,Lc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qu(){let r={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===se&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?Is:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Rs]:{primaries:t,whitePoint:n,transfer:Is,toXYZ:Lc,fromXYZ:Nc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:se,toXYZ:Lc,fromXYZ:Nc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),r}var jt=Qu();function Zn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function es(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Vi,io=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vi===void 0&&(Vi=ss("canvas")),Vi.width=t.width,Vi.height=t.height;let i=Vi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ss("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Zn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},td=0,os=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=ar(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ga(i[o].image)):s.push(Ga(i[o]))}else s=Ga(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?io.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var ed=0,Ha=new q,Ve=class r extends Pn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Rn,i=Rn,s=ze,o=jn,a=An,c=tn,l=r.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=ar(),this.name="",this.source=new os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ha).x}get height(){return this.source.getSize(Ha).y}get depth(){return this.source.getSize(Ha).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qr:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qr:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Tl;Ve.DEFAULT_ANISOTROPY=1;var me=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,y=(f+1)/2,T=(m+1)/2,E=(u+h)/4,_=(d+v)/4,M=(g+p)/4;return b>y&&b>T?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=E/n,s=_/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=M/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=_/s,i=M/s),this.set(n,i,s,e),this}let x=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-v)/x,this.z=(h-u)/x,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},so=class extends Pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Ve({width:t,height:e,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new os(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends so{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ps=class extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ro=class extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ce=class r{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,s,o,a,c,l,u,d,h,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,u,d,h,f,g,v,p)}set(t,e,n,i,s,o,a,c,l,u,d,h,f,g,v,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ki.setFromMatrixColumn(t,0).length(),s=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let h=o*u,f=o*d,g=a*u,v=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-v*l,e[9]=-a*c,e[2]=v-h*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,f=c*d,g=l*u,v=l*d;e[0]=h+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=v+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,f=c*d,g=l*u,v=l*d;e[0]=h-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,f=o*d,g=a*u,v=a*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+v,e[1]=c*d,e[5]=v*l+h,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-h*d,e[8]=g*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-v*d}else if(t.order==="XZY"){let h=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+v,e[5]=o*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*u,e[10]=v*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nd,t,id)}lookAt(t,e,n){let i=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ai.crossVectors(n,nn),ai.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ai.crossVectors(n,nn)),ai.normalize(),Mr.crossVectors(nn,ai),i[0]=ai.x,i[4]=Mr.x,i[8]=nn.x,i[1]=ai.y,i[5]=Mr.y,i[9]=nn.y,i[2]=ai.z,i[6]=Mr.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],x=n[3],b=n[7],y=n[11],T=n[15],E=i[0],_=i[4],M=i[8],N=i[12],R=i[1],F=i[5],z=i[9],D=i[13],P=i[2],O=i[6],U=i[10],X=i[14],Q=i[3],W=i[7],nt=i[11],ot=i[15];return s[0]=o*E+a*R+c*P+l*Q,s[4]=o*_+a*F+c*O+l*W,s[8]=o*M+a*z+c*U+l*nt,s[12]=o*N+a*D+c*X+l*ot,s[1]=u*E+d*R+h*P+f*Q,s[5]=u*_+d*F+h*O+f*W,s[9]=u*M+d*z+h*U+f*nt,s[13]=u*N+d*D+h*X+f*ot,s[2]=g*E+v*R+p*P+m*Q,s[6]=g*_+v*F+p*O+m*W,s[10]=g*M+v*z+p*U+m*nt,s[14]=g*N+v*D+p*X+m*ot,s[3]=x*E+b*R+y*P+T*Q,s[7]=x*_+b*F+y*O+T*W,s[11]=x*M+b*z+y*U+T*nt,s[15]=x*N+b*D+y*X+T*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15],x=c*f-l*h,b=a*f-l*d,y=a*h-c*d,T=o*f-l*u,E=o*h-c*u,_=o*d-a*u;return e*(v*x-p*b+m*y)-n*(g*x-p*T+m*E)+i*(g*b-v*T+m*_)-s*(g*y-v*E+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(s*u-a*c)+i*(s*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],x=e*a-n*o,b=e*c-i*o,y=e*l-s*o,T=n*c-i*a,E=n*l-s*a,_=i*l-s*c,M=u*v-d*g,N=u*p-h*g,R=u*m-f*g,F=d*p-h*v,z=d*m-f*v,D=h*m-f*p,P=x*D-b*z+y*F+T*R-E*N+_*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/P;return t[0]=(a*D-c*z+l*F)*O,t[1]=(i*z-n*D-s*F)*O,t[2]=(v*_-p*E+m*T)*O,t[3]=(h*E-d*_-f*T)*O,t[4]=(c*R-o*D-l*N)*O,t[5]=(e*D-i*R+s*N)*O,t[6]=(p*y-g*_-m*b)*O,t[7]=(u*_-h*y+f*b)*O,t[8]=(o*z-a*R+l*M)*O,t[9]=(n*R-e*z-s*M)*O,t[10]=(g*E-v*y+m*x)*O,t[11]=(d*y-u*E-f*x)*O,t[12]=(a*N-o*F-c*M)*O,t[13]=(e*F-n*N+i*M)*O,t[14]=(v*b-g*T-p*x)*O,t[15]=(u*T-d*b+h*x)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,g=s*d,v=o*u,p=o*d,m=a*d,x=c*l,b=c*u,y=c*d,T=n.x,E=n.y,_=n.z;return i[0]=(1-(v+m))*T,i[1]=(f+y)*T,i[2]=(g-b)*T,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(h+m))*E,i[6]=(p+x)*E,i[7]=0,i[8]=(g+b)*_,i[9]=(p-x)*_,i[10]=(1-(h+v))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=ki.set(i[0],i[1],i[2]).length(),a=ki.set(i[4],i[5],i[6]).length(),c=ki.set(i[8],i[9],i[10]).length();s<0&&(o=-o),vn.copy(this);let l=1/o,u=1/a,d=1/c;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,e.setFromRotationMatrix(vn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,s,o,a=un,c=!1){let l=this.elements,u=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i),g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===un)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===is)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=un,c=!1){let l=this.elements,u=2/(e-t),d=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i),g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===un)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===is)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ki=new q,vn=new ce,nd=new q(0,0,0),id=new q(1,1,1),ai=new q,Mr=new q,nn=new q,Fc=new ce,Dc=new dn,Jn=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sd=0,Bc=new q,Gi=new dn,Hn=new ce,br=new q,Ss=new q,rd=new q,od=new dn,Uc=new q(1,0,0),Oc=new q(0,1,0),zc=new q(0,0,1),Vc={type:"added"},ad={type:"removed"},Hi={type:"childadded",child:null},Wa={type:"childremoved",child:null},De=class r extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new q,e=new Jn,n=new dn,i=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new kt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Uc,t)}rotateY(t){return this.rotateOnAxis(Oc,t)}rotateZ(t){return this.rotateOnAxis(zc,t)}translateOnAxis(t,e){return Bc.copy(t).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uc,t)}translateY(t){return this.translateOnAxis(Oc,t)}translateZ(t){return this.translateOnAxis(zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?br.copy(t):br.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ss,br,this.up):Hn.lookAt(br,Ss,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ad),Wa.child=t,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};De.DEFAULT_UP=new q(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},ld={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ld)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new In;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},wr={h:0,s:0,l:0};function qa(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Ju(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=qa(o,s,t+1/3),this.g=qa(o,s,t),this.b=qa(o,s,t-1/3)}return jt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return jt.workingToColorSpace(qe.copy(this),t),Math.round(Qt(qe.r*255,0,255))*65536+Math.round(Qt(qe.g*255,0,255))*256+Math.round(Qt(qe.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(qe.copy(this),e);let n=qe.r,i=qe.g,s=qe.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ce){jt.workingToColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,i=qe.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(wr);let n=za(li.h,wr.h,e),i=za(li.s,wr.s,e),s=za(li.l,wr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Wt;Wt.NAMES=zh;var Ns=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fs=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yn=new q,Wn=new q,Xa=new q,qn=new q,Wi=new q,qi=new q,kc=new q,Ya=new q,Za=new q,$a=new q,Ja=new me,Ka=new me,ja=new me,di=class r{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){yn.subVectors(i,e),Wn.subVectors(n,e),Xa.subVectors(t,e);let o=yn.dot(yn),a=yn.dot(Wn),c=yn.dot(Xa),l=Wn.dot(Wn),u=Wn.dot(Xa),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qn.x),c.addScaledVector(o,qn.y),c.addScaledVector(a,qn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return Ja.setScalar(0),Ka.setScalar(0),ja.setScalar(0),Ja.fromBufferAttribute(t,e),Ka.fromBufferAttribute(t,n),ja.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ja,s.x),o.addScaledVector(Ka,s.y),o.addScaledVector(ja,s.z),o}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Wn.subVectors(t,e),yn.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),yn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Wi.subVectors(i,n),qi.subVectors(s,n),Ya.subVectors(t,n);let c=Wi.dot(Ya),l=qi.dot(Ya);if(c<=0&&l<=0)return e.copy(n);Za.subVectors(t,i);let u=Wi.dot(Za),d=qi.dot(Za);if(u>=0&&d<=u)return e.copy(i);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0&&c-u>0)return o=c/(c-u),e.copy(n).addScaledVector(Wi,o);$a.subVectors(t,s);let f=Wi.dot($a),g=qi.dot($a);if(g>=0&&f<=g)return e.copy(s);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(qi,a);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return kc.subVectors(s,i),a=(d-u)/(d-u+(f-g)),e.copy(i).addScaledVector(kc,a);let m=1/(p+v+h);return o=v*m,a=h*m,e.copy(n).addScaledVector(Wi,o).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ln=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),Ar.subVectors(this.max,Ms),Xi.subVectors(t.a,Ms),Yi.subVectors(t.b,Ms),Zi.subVectors(t.c,Ms),ci.subVectors(Yi,Xi),hi.subVectors(Zi,Yi),Ci.subVectors(Xi,Zi);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ci.z,Ci.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ci.z,0,-Ci.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ci.y,Ci.x,0];return!Qa(e,Xi,Yi,Zi,Ar)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,Xi,Yi,Zi,Ar))?!1:(Tr.crossVectors(ci,hi),e=[Tr.x,Tr.y,Tr.z],Qa(e,Xi,Yi,Zi,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xn=[new q,new q,new q,new q,new q,new q,new q,new q],Sn=new q,Er=new Ln,Xi=new q,Yi=new q,Zi=new q,ci=new q,hi=new q,Ci=new q,Ms=new q,Ar=new q,Tr=new q,Ri=new q;function Qa(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ri.fromArray(r,s);let a=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),c=t.dot(Ri),l=e.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ae=new q,Cr=new Zt,cd=0,bn=class extends Pn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nh,this.updateRanges=[],this.gpuType=mn,this.version=0,this._normalizationScale=t!==void 0?zl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ku(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ju(t,this.array)}};var Ds=class extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Bs=class extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},hd=new Ln,bs=new q,tl=new q,fi=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);let e=bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(tl)),this.expandByPoint(bs.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ud=0,hn=new ce,el=new De,$i=new q,sn=new Ln,ws=new Ln,Ne=new q,fn=class r extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zu(t)?Bs:Ds)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return el.lookAt(t),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(sn.min,ws.min),sn.expandByPoint(Ne),Ne.addVectors(sn.max,ws.max),sn.expandByPoint(Ne)):(sn.expandByPoint(ws.min),sn.expandByPoint(ws.max))}sn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ne.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ne.fromBufferAttribute(a,l),c&&($i.fromBufferAttribute(t,l),Ne.add($i)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let N=0;N<n.count;N++)a[N]=new q,c[N]=new q;let u=new q,d=new q,h=new q,f=new Zt,g=new Zt,v=new Zt,p=new q,m=new q;function x(N,R,F){l[N]=l[R]=l[F]=1,u.fromBufferAttribute(n,N),d.fromBufferAttribute(n,R),h.fromBufferAttribute(n,F),f.fromBufferAttribute(s,N),g.fromBufferAttribute(s,R),v.fromBufferAttribute(s,F),d.sub(u),h.sub(u),g.sub(f),v.sub(f);let z=1/(g.x*v.y-v.x*g.y);isFinite(z)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(h,-g.y).multiplyScalar(z),m.copy(h).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(z),a[N].add(p),a[R].add(p),a[F].add(p),c[N].add(m),c[R].add(m),c[F].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let N=0,R=b.length;N<R;++N){let F=b[N],z=F.start,D=F.count;for(let P=z,O=z+D;P<O;P+=3)x(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let y=new q,T=new q,E=new q,_=new q;function M(N){E.fromBufferAttribute(i,N),_.copy(E);let R=a[N];y.copy(R),y.sub(E.multiplyScalar(E.dot(R))).normalize(),T.crossVectors(_,R);let z=T.dot(c[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,z)}for(let N=0,R=n.count;N<R;++N)l[N]&&M(N);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new q,s=new q,o=new q,a=new q,c=new q,l=new q,u=new q,d=new q;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),v=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let m=0;m<u;m++)h[g++]=l[f++]}return new bn(h,u,d)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(i[c]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(e))}let s=t.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nl=new q,dd=new q,fd=new kt,Mn=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=nl.subVectors(n,e).cross(dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fd.getNormalMatrix(t),i=this.coplanarPoint(nl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pd=0,pi=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=ds,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=_l,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Mn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Yn=new q,il=new q,Rr=new q,Ir=new q,oo=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){il.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),Ir.copy(this.origin).sub(il);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Rr),a=Ir.dot(this.direction),c=-Ir.dot(Rr),l=Ir.lengthSq(),u=Math.abs(1-o*o),d,h,f,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(il).addScaledVector(Rr,h),f}intersectSphere(t,e){if(t.radius<0)return null;Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=t.x-o.x,h=t.y-o.y,f=t.z-o.z,g=e.x-o.x,v=e.y-o.y,p=e.z-o.z,m=n.x-o.x,x=n.y-o.y,b=n.z-o.z,y=Math.abs(c),T=Math.abs(l),E=Math.abs(u),_,M,N,R,F,z,D,P,O,U,X,Q;if(y>=T&&y>=E?(N=c,z=d,O=g,Q=m,c>=0?(_=l,M=u,R=h,F=f,D=v,P=p,U=x,X=b):(_=u,M=l,R=f,F=h,D=p,P=v,U=b,X=x)):T>=E?(N=l,z=h,O=v,Q=x,l>=0?(_=u,M=c,R=f,F=d,D=p,P=g,U=b,X=m):(_=c,M=u,R=d,F=f,D=g,P=p,U=m,X=b)):(N=u,z=f,O=p,Q=b,u>=0?(_=c,M=l,R=d,F=h,D=g,P=v,U=m,X=x):(_=l,M=c,R=h,F=d,D=v,P=g,U=x,X=m)),N===0)return null;let W=_/N,nt=M/N,ot=1/N,at=R-W*z,Dt=F-nt*z,et=D-W*O,yt=P-nt*O,Tt=U-W*Q,Nt=X-nt*Q,St=Tt*yt-Nt*et,Vt=at*Nt-Dt*Tt,ge=et*Dt-yt*at;if(i){if(St<0||Vt<0||ge<0)return null}else if((St<0||Vt<0||ge<0)&&(St>0||Vt>0||ge>0))return null;let Bt=St+Vt+ge;if(Bt===0)return null;let $t=ot*(St*z+Vt*O+ge*Q);return(Bt>0?$t<0:$t>0)?null:this.at($t/Bt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},on=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gc=new ce,Ii=new oo,Pr=new fi,Hc=new q,Lr=new q,Nr=new q,Fr=new q,sl=new q,Dr=new q,Wc=new q,Br=new q,ee=class extends De{constructor(t=new fn,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Dr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(sl.fromBufferAttribute(d,t),o?Dr.addScaledVector(sl,u):Dr.addScaledVector(sl.sub(e),u))}e.add(Dr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Ii.copy(t.ray).recast(t.near),!(Pr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Pr,Hc)===null||Ii.origin.distanceToSquared(Hc)>(t.far-t.near)**2))&&(Gc.copy(s).invert(),Ii.copy(t.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let p=h[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,T=b;y<T;y+=3){let E=a.getX(y),_=a.getX(y+1),M=a.getX(y+2);i=Ur(this,m,t,n,l,u,d,E,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let x=a.getX(p),b=a.getX(p+1),y=a.getX(p+2);i=Ur(this,o,t,n,l,u,d,x,b,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){let p=h[g],m=o[p.materialIndex],x=Math.max(p.start,f.start),b=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,T=b;y<T;y+=3){let E=y,_=y+1,M=y+2;i=Ur(this,m,t,n,l,u,d,E,_,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let x=p,b=p+1,y=p+2;i=Ur(this,o,t,n,l,u,d,x,b,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function md(r,t,e,n,i,s,o,a){let c;if(t.side===Ke?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===yi,a),c===null)return null;Br.copy(a),Br.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(Br);return l<e.near||l>e.far?null:{distance:l,point:Br.clone(),object:r}}function Ur(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,Lr),r.getVertexPosition(c,Nr),r.getVertexPosition(l,Fr);let u=md(r,t,e,n,Lr,Nr,Fr,Wc);if(u){let d=new q;di.getBarycoord(Wc,Lr,Nr,Fr,d),i&&(u.uv=di.getInterpolatedAttribute(i,a,c,l,d,new Zt)),s&&(u.uv1=di.getInterpolatedAttribute(s,a,c,l,d,new Zt)),o&&(u.normal=di.getInterpolatedAttribute(o,a,c,l,d,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new q,materialIndex:0};di.getNormal(Lr,Nr,Fr,h.normal),u.face=h,u.barycoord=d}return u}var Us=class extends Ve{constructor(t=null,e=1,n=1,i,s,o,a,c,l=Fe,u=Fe,d,h){super(null,o,a,c,l,u,i,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=class extends bn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ji=new ce,qc=new ce,Or=[],Xc=new Ln,gd=new ce,Es=new ee,As=new fi,zs=class extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),Xc.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(Xc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),As.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(As)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),t.ray.intersectsSphere(As)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ji),qc.multiplyMatrices(n,Ji),Es.matrixWorld=qc,Es.raycast(t,Or);for(let o=0,a=Or.length;o<a;o++){let c=Or[o];c.instanceId=s,c.object=this,e.push(c)}Or.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Us(new Float32Array(i*this.count),i,this.count,Lo,mn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;return s[c]=a,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Pi=new fi,xd=new Zt(.5,.5),zr=new q,mi=class{constructor(t=new Mn,e=new Mn,n=new Mn,i=new Mn,s=new Mn,o=new Mn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],v=s[9],p=s[10],m=s[11],x=s[12],b=s[13],y=s[14],T=s[15];if(i[0].setComponents(l-o,f-u,m-g,T-x).normalize(),i[1].setComponents(l+o,f+u,m+g,T+x).normalize(),i[2].setComponents(l+a,f+d,m+v,T+b).normalize(),i[3].setComponents(l-a,f-d,m-v,T-b).normalize(),n)i[4].setComponents(c,h,p,y).normalize(),i[5].setComponents(l-c,f-h,m-p,T-y).normalize();else if(i[4].setComponents(l-c,f-h,m-p,T-y).normalize(),e===un)i[5].setComponents(l+c,f+h,m+p,T+y).normalize();else if(e===is)i[5].setComponents(c,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);let e=xd.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(zr.x=i.normal.x>0?t.max.x:t.min.x,zr.y=i.normal.y>0?t.max.y:t.min.y,zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yc=new ce,ao=class r{constructor(){this.coordinateSystem=un,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];Yc.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new mi),n[i].setFromProjectionMatrix(Yc,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new mi),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Vs=class extends Ve{constructor(t,e,n,i,s=ze,o=ze,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let u=this;function d(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}};var ks=class extends Ve{constructor(t=[],e=Di,n,i,s,o,a,c,l,u){super(t,e,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Li=class extends Ve{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Kn=class extends Ve{constructor(t,e,n=wn,i,s,o,a=Fe,c=Fe,l,u=$n,d=1){if(u!==$n&&u!==Qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Gs=class extends Kn{constructor(t,e=wn,n=Di,i,s,o=Fe,a=Fe,c,l=$n){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Hs=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Nn=class r extends fn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(d,2));function g(v,p,m,x,b,y,T,E,_,M,N){let R=y/_,F=T/M,z=y/2,D=T/2,P=E/2,O=_+1,U=M+1,X=0,Q=0,W=new q;for(let nt=0;nt<U;nt++){let ot=nt*F-D;for(let at=0;at<O;at++){let Dt=at*R-z;W[v]=Dt*x,W[p]=ot*b,W[m]=P,l.push(W.x,W.y,W.z),W[v]=0,W[p]=0,W[m]=E>0?1:-1,u.push(W.x,W.y,W.z),d.push(at/_),d.push(1-nt/M),X+=1}}for(let nt=0;nt<M;nt++)for(let ot=0;ot<_;ot++){let at=h+ot+O*nt,Dt=h+ot+O*(nt+1),et=h+(ot+1)+O*(nt+1),yt=h+(ot+1)+O*nt;c.push(at,Dt,yt),c.push(Dt,et,yt),Q+=6}a.addGroup(f,Q,N),f+=Q,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var gi=class r extends fn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let u=[],d=[],h=[],f=[],g=0,v=[],p=n/2,m=0;x(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function x(){let y=new q,T=new q,E=0,_=(e-t)/n;for(let M=0;M<=s;M++){let N=[],R=M/s,F=R*(e-t)+t;for(let z=0;z<=i;z++){let D=z/i,P=D*c+a,O=Math.sin(P),U=Math.cos(P);T.x=F*O,T.y=-R*n+p,T.z=F*U,d.push(T.x,T.y,T.z),y.set(O,_,U).normalize(),h.push(y.x,y.y,y.z),f.push(D,1-R),N.push(g++)}v.push(N)}for(let M=0;M<i;M++)for(let N=0;N<s;N++){let R=v[N][M],F=v[N+1][M],z=v[N+1][M+1],D=v[N][M+1];(t>0||N!==0)&&(u.push(R,F,D),E+=3),(e>0||N!==s-1)&&(u.push(F,z,D),E+=3)}l.addGroup(m,E,0),m+=E}function b(y){let T=g,E=new Zt,_=new q,M=0,N=y===!0?t:e,R=y===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,p*R,0),h.push(0,R,0),f.push(.5,.5),g++;let F=g;for(let z=0;z<=i;z++){let P=z/i*c+a,O=Math.cos(P),U=Math.sin(P);_.x=N*U,_.y=p*R,_.z=N*O,d.push(_.x,_.y,_.z),h.push(0,R,0),E.x=O*.5+.5,E.y=U*.5*R+.5,f.push(E.x,E.y),g++}for(let z=0;z<i;z++){let D=T+z,P=F+z;y===!0?u.push(P,P+1,D):u.push(P+1,P,D),M+=3}l.addGroup(m,M,y===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var lo=class r extends fn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),l(n),u(),this.setAttribute("position",new pe(s,3)),this.setAttribute("normal",new pe(s.slice(),3)),this.setAttribute("uv",new pe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let b=new q,y=new q,T=new q;for(let E=0;E<e.length;E+=3)f(e[E+0],b),f(e[E+1],y),f(e[E+2],T),c(b,y,T,x)}function c(x,b,y,T){let E=T+1,_=[];for(let M=0;M<=E;M++){_[M]=[];let N=x.clone().lerp(y,M/E),R=b.clone().lerp(y,M/E),F=E-M;for(let z=0;z<=F;z++)z===0&&M===E?_[M][z]=N:_[M][z]=N.clone().lerp(R,z/F)}for(let M=0;M<E;M++)for(let N=0;N<2*(E-M)-1;N++){let R=Math.floor(N/2);N%2===0?(h(_[M][R+1]),h(_[M+1][R]),h(_[M][R])):(h(_[M][R+1]),h(_[M+1][R+1]),h(_[M+1][R]))}}function l(x){let b=new q;for(let y=0;y<s.length;y+=3)b.x=s[y+0],b.y=s[y+1],b.z=s[y+2],b.normalize().multiplyScalar(x),s[y+0]=b.x,s[y+1]=b.y,s[y+2]=b.z}function u(){let x=new q;for(let b=0;b<s.length;b+=3){x.x=s[b+0],x.y=s[b+1],x.z=s[b+2];let y=p(x)/2/Math.PI+.5,T=m(x)/Math.PI+.5;o.push(y,1-T)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){let b=o[x+0],y=o[x+2],T=o[x+4],E=Math.max(b,y,T),_=Math.min(b,y,T);E>.9&&_<.1&&(b<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function f(x,b){let y=x*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function g(){let x=new q,b=new q,y=new q,T=new q,E=new Zt,_=new Zt,M=new Zt;for(let N=0,R=0;N<s.length;N+=9,R+=6){x.set(s[N+0],s[N+1],s[N+2]),b.set(s[N+3],s[N+4],s[N+5]),y.set(s[N+6],s[N+7],s[N+8]),E.set(o[R+0],o[R+1]),_.set(o[R+2],o[R+3]),M.set(o[R+4],o[R+5]),T.copy(x).add(b).add(y).divideScalar(3);let F=p(T);v(E,R+0,x,F),v(_,R+2,b,F),v(M,R+4,y,F)}}function v(x,b,y,T){T<0&&x.x===1&&(o[b]=x.x-1),y.x===0&&y.z===0&&(o[b]=T/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var Ws=class r extends lo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Xe=class r extends fn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=t/a,h=e/c,f=[],g=[],v=[],p=[];for(let m=0;m<u;m++){let x=m*h-o;for(let b=0;b<l;b++){let y=b*d-s;g.push(y,-x,0),v.push(0,0,1),p.push(b/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){let b=x+l*m,y=x+l*(m+1),T=x+1+l*(m+1),E=x+1+l*m;f.push(b,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var ls=class r extends fn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new q,h=new q,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let x=[],b=m/n,y=o+b*a,T=t*Math.cos(y),E=Math.sqrt(t*t-T*T),_=0;m===0&&o===0?_=.5/e:m===n&&c===Math.PI&&(_=-.5/e);for(let M=0;M<=e;M++){let N=M/e,R=i+N*s;d.x=-E*Math.cos(R),d.y=T,d.z=E*Math.sin(R),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),p.push(N+_,1-b),x.push(l++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let b=u[m][x+1],y=u[m][x],T=u[m+1][x],E=u[m+1][x+1];(m!==0||o>0)&&f.push(b,y,E),(m!==n-1||c<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var qs=class r extends fn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],u=[],d=[],h=new q,f=new q,g=new q;for(let v=0;v<=n;v++){let p=o+v/n*a;for(let m=0;m<=i;m++){let x=m/i*s;f.x=(t+e*Math.cos(p))*Math.cos(x),f.y=(t+e*Math.cos(p))*Math.sin(x),f.z=e*Math.sin(p),l.push(f.x,f.y,f.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(m/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=i;p++){let m=(i+1)*v+p-1,x=(i+1)*(v-1)+p-1,b=(i+1)*(v-1)+p,y=(i+1)*v+p;c.push(m,x,y),c.push(x,b,y)}this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ui(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(Zc(i))i.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Zc(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Ye(r){let t={};for(let e=0;e<r.length;e++){let n=Ui(r[e]);for(let i in n)t[i]=n[i]}return t}function Zc(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function _d(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Vl(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Vh={clone:Ui,merge:Ye},vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vd,this.fragmentShader=yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=_d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Wt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Zt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new q().fromArray(i.value);break;case"v4":this.uniforms[n].value=new me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ce().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},co=class extends Fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dn=class extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ho=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uo=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ki(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Vr(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var xi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fo=class extends xi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:al,endingEnd:al}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ll:s=t,a=2*e-n;break;case cl:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ll:o=t,c=2*n-e;break;case cl:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),v=g*g,p=v*g,m=-h*p+2*h*v-h*g,x=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*g+1,b=(-1-f)*p+(1.5+f)*v+.5*g,y=f*p-f*v;for(let T=0;T!==a;++T)s[T]=m*o[u+T]+x*o[l+T]+b*o[c+T]+y*o[d+T];return s}},po=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(i-e),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},mo=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},go=class extends xi{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(i-e),v=1-g;for(let p=0;p!==a;++p)s[p]=o[l+p]*v+o[c+p]*g;return s}let h=a*2,f=t-1;for(let g=0;g!==a;++g){let v=o[l+g],p=o[c+g],m=f*h+g*2,x=d[m],b=d[m+1],y=t*h+g*2,T=u[y],E=u[y+1],_=Md(n,e,x,T,i);s[g]=kh(_,v,b,E,p)}return s}};function kh(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function Sd(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function Md(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=kh(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let c=Sd(s,t,e,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-a/c))}return s}var an=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ki(e,this.TimeBufferType),this.values=Ki(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ki(t.times,Array),values:Ki(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Vr(t.settings)&&(n.settings={inTangents:Ki(t.settings.inTangents,Array),outTangents:Ki(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new go(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Cs:e=this.InterpolantFactoryMethodDiscrete;break;case eo:e=this.InterpolantFactoryMethodLinear;break;case Hr:e=this.InterpolantFactoryMethodSmooth;break;case ol:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return eo;case this.InterpolantFactoryMethodSmooth:return Hr;case this.InterpolantFactoryMethodBezier:return ol}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Vr(this.settings)&&($c(this.settings.inTangents,t),$c(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Vr(this.settings)&&(Jc(this.settings.inTangents,t),Jc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){zt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){zt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&$u(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){zt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Hr,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let v=e[d+g];if(v!==e[h+g]||v!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Vr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function $c(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]+=t}function Jc(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=eo;var _i=class extends an{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Cs;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends an{constructor(t,e,n,i){super(t,e,n,i)}};xo.prototype.ValueTypeName="color";var _o=class extends an{constructor(t,e,n,i){super(t,e,n,i)}};_o.prototype.ValueTypeName="number";var vo=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let u=l+a;l!==u;l+=4)dn.slerpFlat(s,0,o,l-a,o,l,c);return s}},Xs=class extends an{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends an{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Cs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends an{constructor(t,e,n,i){super(t,e,n,i)}};yo.prototype.ValueTypeName="vector";var qr={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(Kc(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!Kc(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Kc(r){try{let t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var So=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gh=new So,cs=class{constructor(t){this.manager=t!==void 0?t:Gh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};cs.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji=new WeakMap,Mo=class extends cs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=qr.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let d=ji.get(o);d===void 0&&(d=[],ji.set(o,d)),d.push({onLoad:e,onError:i})}return o}let a=ss("img");function c(){u(),e&&e(this);let d=ji.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}ji.delete(this),s.manager.itemEnd(t)}function l(d){u(),i&&i(d),qr.remove(`image:${t}`);let h=ji.get(this)||[];for(let f=0;f<h.length;f++){let g=h[f];g.onError&&g.onError(d)}ji.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),qr.add(`image:${t}`,a),s.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}};var Ys=class extends cs{constructor(t){super(t)}load(t,e,n,i){let s=new Ve,o=new Mo(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},Zs=class extends De{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},$s=class extends Zs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rl=new ce,jc=new q,Qc=new q,bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mi,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(jc),Qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(rl,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;t.coordinateSystem===is||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},kr=new q,Gr=new dn,Cn=new q,Js=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kr,Gr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Gr,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(kr,Gr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Gr,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ui=new q,th=new Zt,eh=new Zt,Je=class extends Js{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=no*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,th,eh),e.subVectors(eh,th)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Oa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ks=class extends Js{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hl=class extends bo{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},js=class extends Zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new hl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Qi=-90,ts=1,hs=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Je(Qi,ts,t,e);i.layers=this.layers,this.add(i);let s=new Je(Qi,ts,t,e);s.layers=this.layers,this.add(s);let o=new Je(Qi,ts,t,e);o.layers=this.layers,this.add(o);let a=new Je(Qi,ts,t,e);a.layers=this.layers,this.add(a);let c=new Je(Qi,ts,t,e);c.layers=this.layers,this.add(c);let l=new Je(Qi,ts,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wo=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var kl="\\[\\]\\.:\\/",bd=new RegExp("["+kl+"]","g"),Gl="[^"+kl+"]",wd="[^"+kl.replace("\\.","")+"]",Ed=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Ad=/(WCOD+)?/.source.replace("WCOD",wd),Td=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Cd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),Rd=new RegExp("^"+Ed+Ad+Td+Cd+"$"),Id=["material","materials","bones","map"],ul=class{constructor(t,e,n){let i=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bd,"")}static parseTrackName(t){let e=Rd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Id.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=ul;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G_=new Float32Array(1);var dl=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};function Hl(r,t,e,n){let i=Pd(n);switch(e){case Ll:return r*t;case Lo:return r*t/i.components*i.byteLength;case No:return r*t/i.components*i.byteLength;case Si:return r*t*2/i.components*i.byteLength;case Fo:return r*t*2/i.components*i.byteLength;case Nl:return r*t*3/i.components*i.byteLength;case An:return r*t*4/i.components*i.byteLength;case Do:return r*t*4/i.components*i.byteLength;case er:case nr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ir:case sr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Uo:case zo:return Math.max(r,16)*Math.max(t,8)/4;case Bo:case Oo:return Math.max(r,8)*Math.max(t,8)/2;case Vo:case ko:case Ho:case Wo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Go:case rr:case qo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case $o:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case jo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ta:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ea:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case na:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ia:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case sa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ra:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case oa:case aa:case la:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ca:case ha:return Math.ceil(r/4)*Math.ceil(t/4)*8;case or:case ua:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pd(r){switch(r){case tn:case Cl:return{byteLength:1,components:1};case ps:case Rl:case En:return{byteLength:2,components:1};case Io:case Po:return{byteLength:2,components:4};case wn:case Ro:case mn:return{byteLength:4,components:1};case Il:case Pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function hu(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Nd(r){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let u=c.array,d=c.updateRanges;if(r.bindBuffer(l,a),d.length===0)r.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];r.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var Fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Af=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,em=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Fd,alphahash_pars_fragment:Dd,alphamap_fragment:Bd,alphamap_pars_fragment:Ud,alphatest_fragment:Od,alphatest_pars_fragment:zd,aomap_fragment:Vd,aomap_pars_fragment:kd,batching_pars_vertex:Gd,batching_vertex:Hd,begin_vertex:Wd,beginnormal_vertex:qd,bsdfs:Xd,iridescence_fragment:Yd,bumpmap_pars_fragment:Zd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:Kd,clipping_planes_vertex:jd,color_fragment:Qd,color_pars_fragment:tf,color_pars_vertex:ef,color_vertex:nf,common:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:of,displacementmap_vertex:af,emissivemap_fragment:lf,emissivemap_pars_fragment:cf,colorspace_fragment:hf,colorspace_pars_fragment:uf,envmap_fragment:df,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Af,envmap_vertex:gf,fog_vertex:xf,fog_pars_vertex:_f,fog_fragment:vf,fog_pars_fragment:yf,gradientmap_pars_fragment:Sf,lightmap_pars_fragment:Mf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:wf,lights_pars_begin:Ef,lights_toon_fragment:Tf,lights_toon_pars_fragment:Cf,lights_phong_fragment:Rf,lights_phong_pars_fragment:If,lights_physical_fragment:Pf,lights_physical_pars_fragment:Lf,lights_fragment_begin:Nf,lights_fragment_maps:Ff,lights_fragment_end:Df,lightprobes_pars_fragment:Bf,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Vf,map_fragment:kf,map_pars_fragment:Gf,map_particle_fragment:Hf,map_particle_pars_fragment:Wf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:Yf,morphcolor_vertex:Zf,morphnormal_vertex:$f,morphtarget_pars_vertex:Jf,morphtarget_vertex:Kf,normal_fragment_begin:jf,normal_fragment_maps:Qf,normal_pars_fragment:tp,normal_pars_vertex:ep,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:op,iridescence_pars_fragment:ap,opaque_fragment:lp,packing:cp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:dp,dithering_pars_fragment:fp,roughnessmap_fragment:pp,roughnessmap_pars_fragment:mp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:xp,shadowmap_vertex:_p,shadowmask_pars_fragment:vp,skinbase_vertex:yp,skinning_pars_vertex:Sp,skinning_vertex:Mp,skinnormal_vertex:bp,specularmap_fragment:wp,specularmap_pars_fragment:Ep,tonemapping_fragment:Ap,tonemapping_pars_fragment:Tp,transmission_fragment:Cp,transmission_pars_fragment:Rp,uv_pars_fragment:Ip,uv_pars_vertex:Pp,uv_vertex:Lp,worldpos_vertex:Np,background_vert:Fp,background_frag:Dp,backgroundCube_vert:Bp,backgroundCube_frag:Up,cube_vert:Op,cube_frag:zp,depth_vert:Vp,depth_frag:kp,distance_vert:Gp,distance_frag:Hp,equirect_vert:Wp,equirect_frag:qp,linedashed_vert:Xp,linedashed_frag:Yp,meshbasic_vert:Zp,meshbasic_frag:$p,meshlambert_vert:Jp,meshlambert_frag:Kp,meshmatcap_vert:jp,meshmatcap_frag:Qp,meshnormal_vert:tm,meshnormal_frag:em,meshphong_vert:nm,meshphong_frag:im,meshphysical_vert:sm,meshphysical_frag:rm,meshtoon_vert:om,meshtoon_frag:am,points_vert:lm,points_frag:cm,shadow_vert:hm,shadow_frag:um,sprite_vert:dm,sprite_frag:fm},wt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},On={basic:{uniforms:Ye([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ye([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ye([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ye([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ye([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ye([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ye([wt.points,wt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ye([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ye([wt.common,wt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ye([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ye([wt.sprite,wt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Ye([wt.common,wt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Ye([wt.lights,wt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};On.physical={uniforms:Ye([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var fa={r:0,b:0,g:0},pm=new ce,uu=new kt;uu.set(-1,0,0,0,1,0,0,0,1);function mm(r,t,e,n,i,s){let o=new Wt(0),a=i===!0?0:1,c,l,u=null,d=0,h=null;function f(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let y=x.backgroundBlurriness>0;b=t.get(b,y)}return b}function g(x){let b=!1,y=f(x);y===null?p(o,a):y&&y.isColor&&(p(y,1),b=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(x,b){let y=f(b);y&&y.isCubeTexture?(l===void 0&&(l=new ee(new Nn(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ui(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(pm.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(uu),l.material.toneMapped=jt.getTransfer(y.colorSpace)!==se,(u!==y||d!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ee(new Xe(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ui(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=jt.getTransfer(y.colorSpace)!==se,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,b){x.getRGB(fa,Vl(r)),e.buffers.color.setClear(fa.r,fa.g,fa.b,b,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:g,addToRenderList:v,dispose:m}}function gm(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,o=!1;function a(F,z,D,P,O){let U=!1,X=d(F,P,D,z);s!==X&&(s=X,l(s.object)),U=f(F,P,D,O),U&&g(F,P,D,O),O!==null&&t.update(O,r.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,y(F,z,D,P),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return r.createVertexArray()}function l(F){return r.bindVertexArray(F)}function u(F){return r.deleteVertexArray(F)}function d(F,z,D,P){let O=P.wireframe===!0,U=n[z.id];U===void 0&&(U={},n[z.id]=U);let X=F.isInstancedMesh===!0?F.id:0,Q=U[X];Q===void 0&&(Q={},U[X]=Q);let W=Q[D.id];W===void 0&&(W={},Q[D.id]=W);let nt=W[O];return nt===void 0&&(nt=h(c()),W[O]=nt),nt}function h(F){let z=[],D=[],P=[];for(let O=0;O<e;O++)z[O]=0,D[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:D,attributeDivisors:P,object:F,attributes:{},index:null}}function f(F,z,D,P){let O=s.attributes,U=z.attributes,X=0,Q=D.getAttributes();for(let W in Q)if(Q[W].location>=0){let ot=O[W],at=U[W];if(at===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(at=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(at=F.instanceColor)),ot===void 0||ot.attribute!==at||at&&ot.data!==at.data)return!0;X++}return s.attributesNum!==X||s.index!==P}function g(F,z,D,P){let O={},U=z.attributes,X=0,Q=D.getAttributes();for(let W in Q)if(Q[W].location>=0){let ot=U[W];ot===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(ot=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(ot=F.instanceColor));let at={};at.attribute=ot,ot&&ot.data&&(at.data=ot.data),O[W]=at,X++}s.attributes=O,s.attributesNum=X,s.index=P}function v(){let F=s.newAttributes;for(let z=0,D=F.length;z<D;z++)F[z]=0}function p(F){m(F,0)}function m(F,z){let D=s.newAttributes,P=s.enabledAttributes,O=s.attributeDivisors;D[F]=1,P[F]===0&&(r.enableVertexAttribArray(F),P[F]=1),O[F]!==z&&(r.vertexAttribDivisor(F,z),O[F]=z)}function x(){let F=s.newAttributes,z=s.enabledAttributes;for(let D=0,P=z.length;D<P;D++)z[D]!==F[D]&&(r.disableVertexAttribArray(D),z[D]=0)}function b(F,z,D,P,O,U,X){X===!0?r.vertexAttribIPointer(F,z,D,O,U):r.vertexAttribPointer(F,z,D,P,O,U)}function y(F,z,D,P){v();let O=P.attributes,U=D.getAttributes(),X=z.defaultAttributeValues;for(let Q in U){let W=U[Q];if(W.location>=0){let nt=O[Q];if(nt===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(nt=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(nt=F.instanceColor)),nt!==void 0){let ot=nt.normalized,at=nt.itemSize,Dt=t.get(nt);if(Dt===void 0)continue;let et=Dt.buffer,yt=Dt.type,Tt=Dt.bytesPerElement,Nt=yt===r.INT||yt===r.UNSIGNED_INT||nt.gpuType===Ro;if(nt.isInterleavedBufferAttribute){let St=nt.data,Vt=St.isInterleavedBuffer===!0?St.stride:St.itemSize,ge=nt.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let Bt=0;Bt<W.locationSize;Bt++)m(W.location+Bt,St.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Bt=0;Bt<W.locationSize;Bt++)p(W.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,et);for(let Bt=0;Bt<W.locationSize;Bt++)b(W.location+Bt,at/W.locationSize,yt,ot,Vt*Tt,(ge+at/W.locationSize*Bt)*Tt,Nt)}else{if(nt.isInstancedBufferAttribute){for(let St=0;St<W.locationSize;St++)m(W.location+St,nt.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let St=0;St<W.locationSize;St++)p(W.location+St);r.bindBuffer(r.ARRAY_BUFFER,et);for(let St=0;St<W.locationSize;St++)b(W.location+St,at/W.locationSize,yt,ot,at*Tt,at/W.locationSize*St*Tt,Nt)}}else if(X!==void 0){let ot=X[Q];if(ot!==void 0)switch(ot.length){case 2:r.vertexAttrib2fv(W.location,ot);break;case 3:r.vertexAttrib3fv(W.location,ot);break;case 4:r.vertexAttrib4fv(W.location,ot);break;default:r.vertexAttrib1fv(W.location,ot)}}}}x()}function T(){N();for(let F in n){let z=n[F];for(let D in z){let P=z[D];for(let O in P){let U=P[O];for(let X in U)u(U[X].object),delete U[X];delete P[O]}}delete n[F]}}function E(F){if(n[F.id]===void 0)return;let z=n[F.id];for(let D in z){let P=z[D];for(let O in P){let U=P[O];for(let X in U)u(U[X].object),delete U[X];delete P[O]}}delete n[F.id]}function _(F){for(let z in n){let D=n[z];for(let P in D){let O=D[P];if(O[F.id]===void 0)continue;let U=O[F.id];for(let X in U)u(U[X].object),delete U[X];delete O[F.id]}}}function M(F){for(let z in n){let D=n[z],P=F.isInstancedMesh===!0?F.id:0,O=D[P];if(O!==void 0){for(let U in O){let X=O[U];for(let Q in X)u(X[Q].object),delete X[Q];delete O[U]}delete D[P],Object.keys(D).length===0&&delete n[z]}}}function N(){R(),o=!0,s!==i&&(s=i,l(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function xm(r,t,e){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(r.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function _m(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==An&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let M=_===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==tn&&_!==mn&&!M&&n.convert(_)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Ot("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ot("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,maxSamples:T,samples:E}}function vm(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Mn,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):l();else{let x=s?0:n,b=x*4,y=m.clippingState||null;c.value=y,y=u(g,h,b,f);for(let T=0;T!==b;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let m=f+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,y=f;b!==v;++b,y+=4)o.copy(d[b]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}var hr=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ks(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Nn(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Ni});s.uniforms.tEquirect.value=e;let o=new ee(i,s),a=e.minFilter;return e.minFilter===jn&&(e.minFilter=ze),new hs(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Hh=256,ym=3,Sm=20,du=256,fu=16,Mm=3,bm=new q,wm=new Wt,ma=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hs(1,10,null),this._boxMesh=new ee(new Nn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=bm}=s,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,h=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,v=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(t.background=c.getClearColor(wm));let p=new hs(n,i,u);return p.position.copy(a),p.update(c,t),c.autoClear=d,c.autoClearColor=h,c.autoClearDepth=f,c.autoClearStencil=g,t.background=v,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Hh,Oh(t))}_fromTexture(t,e){t.mapping===Di||t.mapping===fs?this._setSize(t.image.length===0?Hh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Wh(t,!1,!1),n=Math.log2(t)-ym;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Wh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=t,s.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),s.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Di||t.mapping===fs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Em(),this._integrationMaterial=Am());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/fu);for(let o=0;o<=n;o++){let a=r.lodToRoughness(o,n);if(o>n-Mm)s.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let c=a>0?Math.log2(e)+.5*Math.log2(6/(du*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=c,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Tm());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(s,0,n)}};function Wh(r,t,e){return new hr(r,{minFilter:jn,generateMipmaps:t,type:En,colorSpace:Rs,depthBuffer:e})}function ur(r,t,e){return new Fn({name:r,uniforms:t,vertexShader:Xt.cube_vert,fragmentShader:e,side:Ke,blending:Ni,depthTest:!1,depthWrite:!1})}function Em(){return ur("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${du}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Am(){return ur("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Tm(){return ur("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Sm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function qh(){return ur("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Xh(){return ur("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cm(r){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===Ao||f===To)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new hr(g.height);return v.fromEquirectangularTexture(r,h),t.set(h,v),h.addEventListener("dispose",l),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,g=f===Ao||f===To,v=f===Di||f===fs;if(g||v){let p=e.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new ma(r)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let x=h.image;return g&&x&&x.height>0||v&&x&&c(x)?(n===null&&(n=new ma(r)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,f){return f===Ao?h.mapping=Di:f===To&&(h.mapping=fs),h}function c(h){let f=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Rm(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ts("WebGLRenderer: "+n+" extension not supported."),i}}}function Im(r,t,e,n){let i={},s=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);let v=s.get(g);v&&(t.remove(v),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function u(g){let v=g.attributes;for(let p in v)t.update(v[p],r.ARRAY_BUFFER)}function d(g){let v=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let x=v!==null?v.array.length:p.array.length/3-1,b=p.count>=65535?Bs:Ds,y=new b(Math.ceil(x/3)*6,1),T=y.array;if(v!==null){let _=v.array;m=v.version;for(let M=0,N=0;M<x;M+=3){let R=_[M+0],F=_[M+1],z=_[M+2];T[N++]=R,T[N++]=F,T[N++]=F,T[N++]=z,T[N++]=z,T[N++]=R}}else{m=p.version;for(let _=0,M=0;_<x;_+=3){let N=_+0,R=_+1,F=_+2;T[M++]=N,T[M++]=R,T[M++]=R,T[M++]=F,T[M++]=F,T[M++]=N}}y.version=m;let E=s.get(g);E&&t.remove(E),s.set(g,y)}function h(g){let v=s.get(g);if(v){let p=g.index;p!==null&&v.version<p.version&&d(g)}else d(g);return s.get(g)}function f(){for(let g in i){let v=i[g].deref();v!==void 0&&c(v)}}return{get:l,update:u,getWireframeAttribute:h,dispose:f}}function Pm(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,h){r.drawElements(n,h,s,d*o),e.update(h,n,1)}function l(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*o,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let v=0;for(let p=0;p<f;p++)v+=h[p];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Lm(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:zt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Nm(r,t,e){let n=new WeakMap,i=new me;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let N=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",N)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let y=a.attributes.position.count*b,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*d),_=new Ps(E,y,T,d);_.type=mn,_.needsUpdate=!0;let M=b*4;for(let R=0;R<d;R++){let F=p[R],z=m[R],D=x[R],P=y*T*4*R;for(let O=0;O<F.count;O++){let U=O*M;f===!0&&(i.fromBufferAttribute(F,O),E[P+U+0]=i.x,E[P+U+1]=i.y,E[P+U+2]=i.z,E[P+U+3]=0),g===!0&&(i.fromBufferAttribute(z,O),E[P+U+4]=i.x,E[P+U+5]=i.y,E[P+U+6]=i.z,E[P+U+7]=0),v===!0&&(i.fromBufferAttribute(D,O),E[P+U+8]=i.x,E[P+U+9]=i.y,E[P+U+10]=i.z,E[P+U+11]=D.itemSize===4?i.w:1)}}h={count:d,texture:_,size:new Zt(y,T)},n.set(a,h),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function Fm(r,t,e,n,i){let s=new WeakMap;function o(l){let u=i.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function a(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Dm={[yl]:"LINEAR_TONE_MAPPING",[Sl]:"REINHARD_TONE_MAPPING",[Ml]:"CINEON_TONE_MAPPING",[bl]:"ACES_FILMIC_TONE_MAPPING",[El]:"AGX_TONE_MAPPING",[Al]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function Bm(r,t,e,n,i,s){let o=new rn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,u=new fn;u.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new pe([0,2,0,0,2,0],2));let d=new co({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ee(u,d),f=new Ks(-1,1,1,-1,0,1),g=null,v=null,p=!1,m,x=null,b=[],y=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),c!==null&&c.setSize(T,E);for(let _=0;_<b.length;_++){let M=b[_];M.setSize&&M.setSize(T,E)}},this.setEffects=function(T){b=T,y=b.length>0&&b[0].isRenderPass===!0;let E=o.width,_=o.height;b.length>0&&a===null&&(a=new rn(E,_,{type:En,depthBuffer:!1,stencilBuffer:!1}),c=new rn(E,_,{type:En,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&b.some(N=>N.needsDepthTexture===!0);M!==(o.depthTexture!==null)&&(M===!0&&l===null&&(l=new Kn(E,_),s===!0&&(l.format=Qn,l.type=Bi)),o.dispose(),o.depthTexture=M?l:null,o.resolveDepthBuffer=M,o.storeMultisampledDepthBuffer=M);for(let N=0;N<b.length;N++){let R=b[N];R.setSize&&R.setSize(E,_),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(T,E){if(p||T.toneMapping===Bn&&b.length===0)return!1;if(x=E,E!==null){let _=E.width,M=E.height;(o.width!==_||o.height!==M)&&this.setSize(_,M)}return y===!1&&T.setRenderTarget(o),m=T.toneMapping,T.toneMapping=Bn,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=m,p=!0;let _=o,M=a;for(let N=0;N<b.length;N++){let R=b[N];R.enabled!==!1&&(R.render(T,M,_,E),R.needsSwap!==!1&&(_=M,M=M===a?c:a))}if(g!==T.outputColorSpace||v!==T.toneMapping){g=T.outputColorSpace,v=T.toneMapping,d.defines={},jt.getTransfer(g)===se&&(d.defines.SRGB_TRANSFER="");let N=Dm[v];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(x),T.render(h,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var pu=new Ve,mu=new Kn(1,1),gu=new Gs(1),xu=new Ps,_u=new ro,vu=new ks,Yh=[],Zh=[],$h=new Float32Array(16),Jh=new Float32Array(9),Kh=new Float32Array(4);function gs(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Yh[i];if(s===void 0&&(s=new Float32Array(i),Yh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Re(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ie(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function xa(r,t){let e=Zh[t];e===void 0&&(e=new Int32Array(t),Zh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Um(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Om(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2fv(this.addr,t),Ie(e,t)}}function zm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;r.uniform3fv(this.addr,t),Ie(e,t)}}function Vm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4fv(this.addr,t),Ie(e,t)}}function km(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,n))return;Kh.set(n),r.uniformMatrix2fv(this.addr,!1,Kh),Ie(e,n)}}function Gm(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,n))return;Jh.set(n),r.uniformMatrix3fv(this.addr,!1,Jh),Ie(e,n)}}function Hm(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Re(e,n))return;$h.set(n),r.uniformMatrix4fv(this.addr,!1,$h),Ie(e,n)}}function Wm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function qm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2iv(this.addr,t),Ie(e,t)}}function Xm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;r.uniform3iv(this.addr,t),Ie(e,t)}}function Ym(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4iv(this.addr,t),Ie(e,t)}}function Zm(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function $m(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2uiv(this.addr,t),Ie(e,t)}}function Jm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;r.uniform3uiv(this.addr,t),Ie(e,t)}}function Km(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4uiv(this.addr,t),Ie(e,t)}}function _a(r){return r.version===0&&(r.compareFunction=Bl,r.needsUpdate=!0),r}function jm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=_a(mu):s=pu,e.setTexture2D(t||s,i)}function Qm(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_u,i)}function tg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=_a(gu):s=vu,e.setTextureCube(t||s,i)}function eg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xu,i)}function ng(r){switch(r){case 5126:return Um;case 35664:return Om;case 35665:return zm;case 35666:return Vm;case 35674:return km;case 35675:return Gm;case 35676:return Hm;case 5124:case 35670:return Wm;case 35667:case 35671:return qm;case 35668:case 35672:return Xm;case 35669:case 35673:return Ym;case 5125:return Zm;case 36294:return $m;case 36295:return Jm;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return eg}}function ig(r,t){r.uniform1fv(this.addr,t)}function sg(r,t){let e=gs(t,this.size,2);r.uniform2fv(this.addr,e)}function rg(r,t){let e=gs(t,this.size,3);r.uniform3fv(this.addr,e)}function og(r,t){let e=gs(t,this.size,4);r.uniform4fv(this.addr,e)}function ag(r,t){let e=gs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function lg(r,t){let e=gs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function cg(r,t){let e=gs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function hg(r,t){r.uniform1iv(this.addr,t)}function ug(r,t){r.uniform2iv(this.addr,t)}function dg(r,t){r.uniform3iv(this.addr,t)}function fg(r,t){r.uniform4iv(this.addr,t)}function pg(r,t){r.uniform1uiv(this.addr,t)}function mg(r,t){r.uniform2uiv(this.addr,t)}function gg(r,t){r.uniform3uiv(this.addr,t)}function xg(r,t){r.uniform4uiv(this.addr,t)}function _g(r,t,e){let n=this.cache,i=t.length,s=xa(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=_a(mu):o=pu;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function vg(r,t,e){let n=this.cache,i=t.length,s=xa(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||_u,s[o])}function yg(r,t,e){let n=this.cache,i=t.length,s=xa(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=_a(gu):o=vu;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,s[a])}function Sg(r,t,e){let n=this.cache,i=t.length,s=xa(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||xu,s[o])}function Mg(r){switch(r){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return og;case 35674:return ag;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Sg}}var Xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ng(e.type)}},Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mg(e.type)}},Zl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Wl=/(\w+)(\])?(\[|\.)?/g;function jh(r,t){r.seq.push(t),r.map[t.id]=t}function bg(r,t,e){let n=r.name,i=n.length;for(Wl.lastIndex=0;;){let s=Wl.exec(n),o=Wl.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){jh(e,l===void 0?new Xl(a,r,t):new Yl(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Zl(a),jh(e,d)),e=d}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);bg(a,c,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Qh(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var wg=37297,Eg=0;function Ag(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var tu=new kt;function Tg(r){jt._getMatrix(tu,jt.workingColorSpace,r);let t=`mat3( ${tu.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(r)){case Is:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function eu(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ag(r.getShaderSource(t),a)}else return s}function Cg(r,t){let e=Tg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Rg={[yl]:"Linear",[Sl]:"Reinhard",[Ml]:"Cineon",[bl]:"ACESFilmic",[El]:"AgX",[Al]:"Neutral",[wl]:"Custom"};function Ig(r,t){let e=Rg[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pa=new q;function Pg(){jt.getLuminanceCoefficients(pa);let r=pa.x.toFixed(4),t=pa.y.toFixed(4),e=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function Ng(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function cr(r){return r!==""}function nu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function iu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(r){return r.replace(Dg,Bg)}function Bg(r,t){let e=Xt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return $l(e)}var Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(r){return r.replace(Ug,Og)}function Og(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ru(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var zg={[Qs]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function Vg(r){return zg[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kg={[fs]:"ENVMAP_MODE_REFRACTION"};function Gg(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":kg[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Hg={[vl]:"ENVMAP_BLENDING_MULTIPLY",[Mh]:"ENVMAP_BLENDING_MIX",[bh]:"ENVMAP_BLENDING_ADD"};function Wg(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Hg[r.combine]||"ENVMAP_BLENDING_NONE"}function qg(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Vg(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Gg(e),d=Wg(e),h=Lg(e),f=Ng(s),g=i.createProgram(),v,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(cr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(cr).join(`
`),p.length>0&&(p+=`
`)):(v=[ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),p=[ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Cg("linearToOutputTexel",e.outputColorSpace),Pg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=$l(o),o=nu(o,e),o=iu(o,e),a=$l(a),a=nu(a,e),a=iu(a,e),o=su(o),a=su(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=m+v+o,b=m+p+a,y=Qh(i,i.VERTEX_SHADER,x),T=Qh(i,i.FRAGMENT_SHADER,b);i.attachShader(g,y),i.attachShader(g,T),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(R){if(r.debug.checkShaderErrors){let F=i.getProgramInfoLog(g)||"",z=i.getShaderInfoLog(y)||"",D=i.getShaderInfoLog(T)||"",P=F.trim(),O=z.trim(),U=D.trim(),X=!0,Q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,y,T);else{let W=eu(i,y,"vertex"),nt=eu(i,T,"fragment");zt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+W+`
`+nt)}else P!==""?Ot("WebGLProgram: Program Info Log:",P):(O===""||U==="")&&(Q=!1);Q&&(R.diagnostics={runnable:X,programLog:P,vertexShader:{log:O,prefix:v},fragmentShader:{log:U,prefix:p}})}i.deleteShader(y),i.deleteShader(T),_=new ms(i,g),M=Fg(i,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(g,wg)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Eg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=T,this}var Xg=0,Jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kl(t),e.set(t,n)),n}},Kl=class{constructor(t){this.id=Xg++,this.code=t,this.usedTimes=0}};function Yg(r){return r===Si||r===rr||r===or}function Zg(r,t,e,n,i,s){let o=new Ls,a=new Jl,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,M,N,R,F,z){let D=R.fog,P=F.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=t.get(_.envMap||O,U),Q=h[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Ot("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let nt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ot=nt!==void 0?nt.length:0,at=0;P.morphAttributes.position!==void 0&&(at=1),P.morphAttributes.normal!==void 0&&(at=2),P.morphAttributes.color!==void 0&&(at=3);let Dt,et,yt,Tt;if(Q){let ht=On[Q];Dt=ht.vertexShader,et=ht.fragmentShader}else{Dt=_.vertexShader,et=_.fragmentShader;let ht=a.getVertexShaderStage(_),ut=a.getFragmentShaderStage(_);a.update(_,ht,ut),yt=ht.id,Tt=ut.id}let Nt=r.getRenderTarget(),St=r.state.buffers.depth.getReversed(),Vt=F.isInstancedMesh===!0,ge=F.isBatchedMesh===!0,Bt=!!_.map,$t=!!_.matcap,ne=!!X,qt=ne&&X.isPMREMTexture===!0,Me=!!_.aoMap,Se=!!_.lightMap,ke=!!_.bumpMap&&_.wireframe===!1,oe=!!_.normalMap,cn=!!_.displacementMap,be=!!_.emissiveMap,Ze=!!_.metalnessMap,Qe=!!_.roughnessMap,Te=_.anisotropy>0,k=_.clearcoat>0,Ue=_.diffuseRoughness>0,ae=_.dispersion>0,he=_.retroreflectivity>0,mt=_.iridescence>0,xe=_.sheen>0,At=_.transmission>0,Ut=Te&&!!_.anisotropyMap,L=k&&!!_.clearcoatMap,S=k&&!!_.clearcoatNormalMap,Y=k&&!!_.clearcoatRoughnessMap,ct=Ue&&!!_.diffuseRoughnessMap,rt=mt&&!!_.iridescenceMap,pt=mt&&!!_.iridescenceThicknessMap,xt=xe&&!!_.sheenColorMap,tt=xe&&!!_.sheenRoughnessMap,it=!!_.specularMap,ft=!!_.specularColorMap,B=!!_.specularIntensityMap,st=At&&!!_.transmissionMap,K=At&&!!_.thicknessMap,gt=!!_.gradientMap,C=!!_.alphaMap,I=_.alphaTest>0,G=!!_.alphaHash,lt=!!_.extensions,H=Bn;_.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(H=r.toneMapping);let j=qt?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,bt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Dt,fragmentShader:et,defines:_.defines,customVertexShaderID:yt,customFragmentShaderID:Tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:ge,batchingColor:ge&&F._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&F.instanceColor!==null,instancingMorph:Vt&&F.morphTexture!==null,outputColorSpace:Nt===null?r.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Bt,matcap:$t,envMap:ne,envMapMode:ne&&X.mapping,envMapPMREM:qt,envMapMaxLod:qt?j.length-1:null,envMapSize:qt?j[0].width:null,aoMap:Me,lightMap:Se,bumpMap:ke,normalMap:oe,displacementMap:cn,emissiveMap:be,normalMapObjectSpace:oe&&_.normalMapType===Ah,normalMapTangentSpace:oe&&_.normalMapType===da,packedNormalMap:oe&&_.normalMapType===da&&Yg(_.normalMap.format),metalnessMap:Ze,roughnessMap:Qe,anisotropy:Te,anisotropyMap:Ut,clearcoat:k,clearcoatMap:L,clearcoatNormalMap:S,clearcoatRoughnessMap:Y,diffuseRoughness:Ue,diffuseRoughnessMap:ct,dispersion:ae,retroreflection:he,iridescence:mt,iridescenceMap:rt,iridescenceThicknessMap:pt,sheen:xe,sheenColorMap:xt,sheenRoughnessMap:tt,specularMap:it,specularColorMap:ft,specularIntensityMap:B,transmission:At,transmissionMap:st,thicknessMap:K,gradientMap:gt,opaque:_.transparent===!1&&_.blending===ds&&_.alphaToCoverage===!1,alphaMap:C,alphaTest:I,alphaHash:G,combine:_.combine,mapUv:Bt&&f(_.map.channel),aoMapUv:Me&&f(_.aoMap.channel),lightMapUv:Se&&f(_.lightMap.channel),bumpMapUv:ke&&f(_.bumpMap.channel),normalMapUv:oe&&f(_.normalMap.channel),displacementMapUv:cn&&f(_.displacementMap.channel),emissiveMapUv:be&&f(_.emissiveMap.channel),metalnessMapUv:Ze&&f(_.metalnessMap.channel),roughnessMapUv:Qe&&f(_.roughnessMap.channel),anisotropyMapUv:Ut&&f(_.anisotropyMap.channel),clearcoatMapUv:L&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:tt&&f(_.sheenRoughnessMap.channel),specularMapUv:it&&f(_.specularMap.channel),specularColorMapUv:ft&&f(_.specularColorMap.channel),specularIntensityMapUv:B&&f(_.specularIntensityMap.channel),transmissionMapUv:st&&f(_.transmissionMap.channel),thicknessMapUv:K&&f(_.thicknessMap.channel),alphaMapUv:C&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(oe||Te),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!P.attributes.uv&&(Bt||C),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&oe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:at,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:z.filter(ht=>ht.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:H,decodeVideoTexture:Bt&&_.map.isVideoTexture===!0&&jt.getTransfer(_.map.colorSpace)===se,decodeVideoTextureEmissive:be&&_.emissiveMap.isVideoTexture===!0&&jt.getTransfer(_.emissiveMap.colorSpace)===se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pn,flipSided:_.side===Ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:lt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&_.extensions.multiDraw===!0||ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function v(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)M.push(N),M.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(M,_),m(M,_),M.push(r.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function m(_,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.diffuseRoughness&&o.enable(25),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function x(_){let M=h[_.type],N;if(M){let R=On[M];N=Vh.clone(R.uniforms)}else N=_.uniforms;return N}function b(_,M){let N=u.get(M);return N!==void 0?++N.usedTimes:(N=new qg(r,M,_,i),l.push(N),u.set(M,N)),N}function y(_){if(--_.usedTimes===0){let M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function E(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:T,programs:l,dispose:E}}function $g(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Jg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function ou(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function au(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,v,p,m){let x=r[t];return x===void 0?(x={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:p,group:m},r[t]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=g,x.materialVariant=o(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=p,x.group=m),t++,x}function c(h,f,g,v,p,m,x){x.reversedDepth===!0&&(p=-p);let b=a(h,f,g,v,p,m);g.transmission>0?n.push(b):g.transparent===!0?i.push(b):e.push(b)}function l(h,f,g,v,p,m){let x=a(h,f,g,v,p,m);g.transmission>0?n.unshift(x):g.transparent===!0?i.unshift(x):e.unshift(x)}function u(h,f){e.length>1&&e.sort(h||Jg),n.length>1&&n.sort(f||ou),i.length>1&&i.sort(f||ou)}function d(){for(let h=t,f=r.length;h<f;h++){let g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:u}}function Kg(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new au,r.set(n,[o])):i>=s.length?(o=new au,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function jg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new Wt};break;case"SpotLight":e={position:new q,direction:new q,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=e,e}}}function Qg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var t0=0;function e0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function n0(r){let t=new jg,e=Qg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);let i=new q,s=new ce,o=new ce;function a(l){let u=0,d=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,x=0,b=0,y=0,T=0,E=0,_=0,M=0,N=0,R=0;l.sort(e0);for(let z=0,D=l.length;z<D;z++){let P=l[z],O=P.color,U=P.intensity,X=P.distance,Q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Si?Q=P.shadow.map.texture:Q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=O.r*U,d+=O.g*U,h+=O.b*U;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],U);R++}else if(P.isSunLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,ot=e.get(P);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[g]=ot,n.sunShadowMap[g]=Q;let at=nt.getViewportCount();for(let Dt=0;Dt<at;Dt++)n.sunShadowMatrix[v+Dt]=nt.getMatrix(Dt),n.sunShadowCascade[v+Dt]=nt._cascadeData[Dt];v+=at,g++}n.sun[f]=W,f++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,ot=e.get(P);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,n.directionalShadow[p]=ot,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=P.shadow.matrix,T++}n.directional[p]=W,p++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(O).multiplyScalar(U),W.distance=X,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[x]=W;let nt=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,nt.updateMatrices(P),P.castShadow&&N++),n.spotLightMatrix[x]=nt.matrix,P.castShadow){let ot=e.get(P);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,n.spotShadow[x]=ot,n.spotShadowMap[x]=Q,_++}x++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(O).multiplyScalar(U),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=W,b++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let nt=P.shadow,ot=e.get(P);ot.shadowIntensity=nt.intensity,ot.shadowBias=nt.bias,ot.shadowNormalBias=nt.normalBias,ot.shadowRadius=nt.radius,ot.shadowMapSize=nt.mapSize,ot.shadowCameraNear=nt.camera.near,ot.shadowCameraFar=nt.camera.far,n.pointShadow[m]=ot,n.pointShadowMap[m]=Q,n.pointShadowMatrix[m]=P.shadow.matrix,E++}n.point[m]=W,m++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(U),W.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[y]=W,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let F=n.hash;(F.sunLength!==f||F.directionalLength!==p||F.pointLength!==m||F.spotLength!==x||F.rectAreaLength!==b||F.hemiLength!==y||F.numSunShadows!==g||F.numDirectionalShadows!==T||F.numPointShadows!==E||F.numSpotShadows!==_||F.numSpotMaps!==M||F.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=x,n.rectArea.length=b,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-N,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=R,F.sunLength=f,F.directionalLength=p,F.pointLength=m,F.spotLength=x,F.rectAreaLength=b,F.hemiLength=y,F.numSunShadows=g,F.numDirectionalShadows=T,F.numPointShadows=E,F.numSpotShadows=_,F.numSpotMaps=M,F.numLightProbes=R,n.version=t0++)}function c(l,u){let d=0,h=0,f=0,g=0,v=0,p=0,m=u.matrixWorldInverse;for(let x=0,b=l.length;x<b;x++){let y=l[x];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let T=n.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),h++}else if(y.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let T=n.rectArea[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function lu(r){let t=new n0(r),e=[],n=[],i=[];function s(d){u.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function c(){t.setup(e),i.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function l(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function i0(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new lu(r),t.set(i,[a])):s>=o.length?(a=new lu(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,o0=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],a0=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],cu=new ce,lr=new q,ql=new q;function l0(r,t,e){let n=new mi,i=new Zt,s=new Zt,o=new me,a=new ho,c=new uo,l={},u=e.maxTextureSize,d={[yi]:Ke,[Ke]:yi,[pn]:pn},h=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:s0,fragmentShader:r0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new fn;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ee(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let m=this.type;this.render=function(E,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Eo&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qs);let N=r.getRenderTarget(),R=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Ni),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let D=m!==this.type;D&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=E.length;P<O;P++){let U=E[P],X=U.shadow;if(X===void 0){Ot("WebGLShadowMap:",U,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let Q=X.getFrameExtents();i.multiply(Q),s.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,X.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,X.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=W,X.map===null||D===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===us){if(U.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new rn(i.x,i.y,{format:Si,type:En,minFilter:ze,magFilter:ze,generateMipmaps:!1}),X.map.texture.name=U.name+".shadowMap",X.map.depthTexture=new Kn(i.x,i.y,mn),X.map.depthTexture.name=U.name+".shadowMapDepth",X.map.depthTexture.format=$n,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Fe,X.map.depthTexture.magFilter=Fe}else U.isPointLight?(X.map=new hr(i.x),X.map.depthTexture=new Gs(i.x,wn)):(X.map=new rn(i.x,i.y),X.map.depthTexture=new Kn(i.x,i.y,wn)),X.map.depthTexture.name=U.name+".shadowMap",X.map.depthTexture.format=$n,this.type===Qs?(X.map.depthTexture.compareFunction=W?Dl:Fl,X.map.depthTexture.minFilter=ze,X.map.depthTexture.magFilter=ze):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Fe,X.map.depthTexture.magFilter=Fe);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);let nt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();U.isPointLight!==!0&&X.updateMatrices(U,M);let ot=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:M.layers;for(let at=0;at<nt;at++){let Dt=X.getCamera(at);if(U.isPointLight){let et=X.camera,yt=X.matrix,Tt=U.distance||et.far;Tt!==et.far&&(et.far=Tt,et.updateProjectionMatrix()),lr.setFromMatrixPosition(U.matrixWorld),et.position.copy(lr),ql.copy(et.position),ql.add(o0[at]),et.up.copy(a0[at]),et.lookAt(ql),et.updateMatrixWorld(),yt.makeTranslation(-lr.x,-lr.y,-lr.z),cu.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),X._frustum.setFromProjectionMatrix(cu,et.coordinateSystem,et.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,at),r.clear();else{at===0&&(r.setRenderTarget(X.map),r.clear());let et=X.getViewport(at);o.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),z.viewport(o)}n=X.getFrustum(at),y(_,M,Dt,U,ot,this.type)}X.isPointLightShadow!==!0&&this.type===us&&x(X,M),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(N,R,F)};function x(E,_){let M=t.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new rn(i.x,i.y,{format:Si,type:En}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(_,null,M,h,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(_,null,M,f,v,null)}function b(E,_,M,N){let R=null,F=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)R=F;else if(R=M.isPointLight===!0?c:a,r.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=R.uuid,D=_.uuid,P=l[z];P===void 0&&(P={},l[z]=P);let O=P[D];O===void 0&&(O=R.clone(),P[D]=O,_.addEventListener("dispose",T)),R=O}if(R.visible=_.visible,R.wireframe=_.wireframe,N===us?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=r.properties.get(R);z.light=M}return R}function y(E,_,M,N,R,F){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&F===us)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let P=t.update(E),O=E.material;if(Array.isArray(O)){let U=P.groups;for(let X=0,Q=U.length;X<Q;X++){let W=U[X],nt=O[W.materialIndex];if(nt&&nt.visible){let ot=b(E,nt,N,F);E.onBeforeShadow(r,E,_,M,P,ot,W),r.renderBufferDirect(M,null,P,ot,E,W),E.onAfterShadow(r,E,_,M,P,ot,W)}}}else if(O.visible){let U=b(E,O,N,F);E.onBeforeShadow(r,E,_,M,P,U,null),r.renderBufferDirect(M,null,P,U,E,null),E.onAfterShadow(r,E,_,M,P,U,null)}}let D=E.children;for(let P=0,O=D.length;P<O;P++)y(D[P],_,M,N,R,F)}function T(E){E.target.removeEventListener("dispose",T);for(let M in l){let N=l[M],R=E.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}function c0(r,t){function e(){let B=!1,st=new me,K=null,gt=new me(0,0,0,0);return{setMask:function(C){K!==C&&!B&&(r.colorMask(C,C,C,C),K=C)},setLocked:function(C){B=C},setClear:function(C,I,G,lt,H){H===!0&&(C*=lt,I*=lt,G*=lt),st.set(C,I,G,lt),gt.equals(st)===!1&&(r.clearColor(C,I,G,lt),gt.copy(st))},reset:function(){B=!1,K=null,gt.set(-1,0,0,0)}}}function n(){let B=!1,st=!1,K=null,gt=null,C=null;return{setReversed:function(I){if(st!==I){let G=t.get("EXT_clip_control");I?G.clipControlEXT(G.LOWER_LEFT_EXT,G.ZERO_TO_ONE_EXT):G.clipControlEXT(G.LOWER_LEFT_EXT,G.NEGATIVE_ONE_TO_ONE_EXT),st=I;let lt=C;C=null,this.setClear(lt)}},getReversed:function(){return st},setTest:function(I){I?St(r.DEPTH_TEST):Vt(r.DEPTH_TEST)},setMask:function(I){K!==I&&!B&&(r.depthMask(I),K=I)},setFunc:function(I){if(st&&(I=Uh[I]),gt!==I){switch(I){case Xr:r.depthFunc(r.NEVER);break;case Yr:r.depthFunc(r.ALWAYS);break;case Zr:r.depthFunc(r.LESS);break;case ns:r.depthFunc(r.LEQUAL);break;case $r:r.depthFunc(r.EQUAL);break;case Jr:r.depthFunc(r.GEQUAL);break;case Kr:r.depthFunc(r.GREATER);break;case jr:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}gt=I}},setLocked:function(I){B=I},setClear:function(I){C!==I&&(C=I,st&&(I=1-I),r.clearDepth(I))},reset:function(){B=!1,K=null,gt=null,C=null,st=!1}}}function i(){let B=!1,st=null,K=null,gt=null,C=null,I=null,G=null,lt=null,H=null;return{setTest:function(j){B||(j?St(r.STENCIL_TEST):Vt(r.STENCIL_TEST))},setMask:function(j){st!==j&&!B&&(r.stencilMask(j),st=j)},setFunc:function(j,bt,ht){(K!==j||gt!==bt||C!==ht)&&(r.stencilFunc(j,bt,ht),K=j,gt=bt,C=ht)},setOp:function(j,bt,ht){(I!==j||G!==bt||lt!==ht)&&(r.stencilOp(j,bt,ht),I=j,G=bt,lt=ht)},setLocked:function(j){B=j},setClear:function(j){H!==j&&(r.clearStencil(j),H=j)},reset:function(){B=!1,st=null,K=null,gt=null,C=null,I=null,G=null,lt=null,H=null}}}let s=new e,o=new n,a=new i,c={},l=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],v=null,p=!1,m=null,x=null,b=null,y=null,T=null,E=null,_=null,M=new Wt(0,0,0),N=0,R=!1,F=null,z=null,D=null,P=null,O=null,U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,Q=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=Q>=2);let nt=null,ot={},at=r.getParameter(r.SCISSOR_BOX),Dt=r.getParameter(r.VIEWPORT),et=new me().fromArray(at),yt=new me().fromArray(Dt);function Tt(B,st,K,gt){let C=new Uint8Array(4),I=r.createTexture();r.bindTexture(B,I),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let G=0;G<K;G++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(st,0,r.RGBA,1,1,gt,0,r.RGBA,r.UNSIGNED_BYTE,C):r.texImage2D(st+G,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,C);return I}let Nt={};Nt[r.TEXTURE_2D]=Tt(r.TEXTURE_2D,r.TEXTURE_2D,1),Nt[r.TEXTURE_CUBE_MAP]=Tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[r.TEXTURE_2D_ARRAY]=Tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Nt[r.TEXTURE_3D]=Tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),St(r.DEPTH_TEST),o.setFunc(ns),ke(!1),oe(fl),St(r.CULL_FACE),Me(Ni);function St(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function Vt(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function ge(B,st){return h[B]!==st?(r.bindFramebuffer(B,st),h[B]=st,B===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=st),B===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=st),!0):!1}function Bt(B,st){let K=g,gt=!1;if(B){K=f.get(st),K===void 0&&(K=[],f.set(st,K));let C=B.textures;if(K.length!==C.length||K[0]!==r.COLOR_ATTACHMENT0){for(let I=0,G=C.length;I<G;I++)K[I]=r.COLOR_ATTACHMENT0+I;K.length=C.length,gt=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,gt=!0);gt&&r.drawBuffers(K)}function $t(B){return v!==B?(r.useProgram(B),v=B,!0):!1}let ne={[Fi]:r.FUNC_ADD,[rh]:r.FUNC_SUBTRACT,[oh]:r.FUNC_REVERSE_SUBTRACT};ne[ah]=r.MIN,ne[lh]=r.MAX;let qt={[ch]:r.ZERO,[hh]:r.ONE,[uh]:r.SRC_COLOR,[xl]:r.SRC_ALPHA,[xh]:r.SRC_ALPHA_SATURATE,[mh]:r.DST_COLOR,[fh]:r.DST_ALPHA,[dh]:r.ONE_MINUS_SRC_COLOR,[_l]:r.ONE_MINUS_SRC_ALPHA,[gh]:r.ONE_MINUS_DST_COLOR,[ph]:r.ONE_MINUS_DST_ALPHA,[_h]:r.CONSTANT_COLOR,[vh]:r.ONE_MINUS_CONSTANT_COLOR,[yh]:r.CONSTANT_ALPHA,[Sh]:r.ONE_MINUS_CONSTANT_ALPHA};function Me(B,st,K,gt,C,I,G,lt,H,j){if(B===Ni){p===!0&&(Vt(r.BLEND),p=!1);return}if(p===!1&&(St(r.BLEND),p=!0),B!==sh){if(B!==m||j!==R){if((x!==Fi||T!==Fi)&&(r.blendEquation(r.FUNC_ADD),x=Fi,T=Fi),j)switch(B){case ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pl:r.blendFunc(r.ONE,r.ONE);break;case ml:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:zt("WebGLState: Invalid blending: ",B);break}else switch(B){case ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ml:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",B);break}b=null,y=null,E=null,_=null,M.set(0,0,0),N=0,m=B,R=j}return}C=C||st,I=I||K,G=G||gt,(st!==x||C!==T)&&(r.blendEquationSeparate(ne[st],ne[C]),x=st,T=C),(K!==b||gt!==y||I!==E||G!==_)&&(r.blendFuncSeparate(qt[K],qt[gt],qt[I],qt[G]),b=K,y=gt,E=I,_=G),(lt.equals(M)===!1||H!==N)&&(r.blendColor(lt.r,lt.g,lt.b,H),M.copy(lt),N=H),m=B,R=!1}function Se(B,st){B.side===pn?Vt(r.CULL_FACE):St(r.CULL_FACE);let K=B.side===Ke;st&&(K=!K),ke(K),B.blending===ds&&B.transparent===!1?Me(Ni):Me(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let gt=B.stencilWrite;a.setTest(gt),gt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),be(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?St(r.SAMPLE_ALPHA_TO_COVERAGE):Vt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ke(B){F!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),F=B)}function oe(B){B!==nh?(St(r.CULL_FACE),B!==z&&(B===fl?r.cullFace(r.BACK):B===ih?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Vt(r.CULL_FACE),z=B}function cn(B){B!==D&&(X&&r.lineWidth(B),D=B)}function be(B,st,K){B?(St(r.POLYGON_OFFSET_FILL),(P!==st||O!==K)&&(P=st,O=K,o.getReversed()&&(st=-st,K=-K),r.polygonOffset(st,K))):Vt(r.POLYGON_OFFSET_FILL)}function Ze(B){B?St(r.SCISSOR_TEST):Vt(r.SCISSOR_TEST)}function Qe(B){B===void 0&&(B=r.TEXTURE0+U-1),nt!==B&&(r.activeTexture(B),nt=B)}function Te(B,st,K){K===void 0&&(nt===null?K=r.TEXTURE0+U-1:K=nt);let gt=ot[K];gt===void 0&&(gt={type:void 0,texture:void 0},ot[K]=gt),(gt.type!==B||gt.texture!==st)&&(nt!==K&&(r.activeTexture(K),nt=K),r.bindTexture(B,st||Nt[B]),gt.type=B,gt.texture=st)}function k(){let B=ot[nt];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ue(){try{r.compressedTexImage2D(...arguments)}catch(B){zt("WebGLState:",B)}}function ae(){try{r.compressedTexImage3D(...arguments)}catch(B){zt("WebGLState:",B)}}function he(){try{r.texSubImage2D(...arguments)}catch(B){zt("WebGLState:",B)}}function mt(){try{r.texSubImage3D(...arguments)}catch(B){zt("WebGLState:",B)}}function xe(){try{r.compressedTexSubImage2D(...arguments)}catch(B){zt("WebGLState:",B)}}function At(){try{r.compressedTexSubImage3D(...arguments)}catch(B){zt("WebGLState:",B)}}function Ut(){try{r.texStorage2D(...arguments)}catch(B){zt("WebGLState:",B)}}function L(){try{r.texStorage3D(...arguments)}catch(B){zt("WebGLState:",B)}}function S(){try{r.texImage2D(...arguments)}catch(B){zt("WebGLState:",B)}}function Y(){try{r.texImage3D(...arguments)}catch(B){zt("WebGLState:",B)}}function ct(B){return d[B]!==void 0?d[B]:r.getParameter(B)}function rt(B,st){d[B]!==st&&(r.pixelStorei(B,st),d[B]=st)}function pt(B){et.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),et.copy(B))}function xt(B){yt.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),yt.copy(B))}function tt(B,st){let K=l.get(st);K===void 0&&(K=new WeakMap,l.set(st,K));let gt=K.get(B);gt===void 0&&(gt=r.getUniformBlockIndex(st,B.name),r.uniformBlockBinding(st,gt,gt),K.set(B,gt))}function it(B,st,K){let C=l.get(st).get(B);c[C]!==K&&(r.bindBufferBase(r.UNIFORM_BUFFER,C,K),c[C]=K)}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},nt=null,ot={},h={},c={},f=new WeakMap,g=[],v=null,p=!1,m=null,x=null,b=null,y=null,T=null,E=null,_=null,M=new Wt(0,0,0),N=0,R=!1,F=null,z=null,D=null,P=null,O=null,et.set(0,0,r.canvas.width,r.canvas.height),yt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:St,disable:Vt,bindFramebuffer:ge,drawBuffers:Bt,useProgram:$t,setBlending:Me,setMaterial:Se,setFlipSided:ke,setCullFace:oe,setLineWidth:cn,setPolygonOffset:be,setScissorTest:Ze,activeTexture:Qe,bindTexture:Te,unbindTexture:k,compressedTexImage2D:Ue,compressedTexImage3D:ae,texImage2D:S,texImage3D:Y,pixelStorei:rt,getParameter:ct,updateUBOMapping:tt,uniformBlockBinding:it,texStorage2D:Ut,texStorage3D:L,texSubImage2D:he,texSubImage3D:mt,compressedTexSubImage2D:xe,compressedTexSubImage3D:At,scissor:pt,viewport:xt,reset:ft}}function h0(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Zt,u=new WeakMap,d=new Set,h,f=new WeakMap,g=new Set,v=new FinalizationRegistry(L=>g.delete(L)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,S){return p?new OffscreenCanvas(L,S):ss("canvas")}function x(L,S,Y){let ct=1,rt=Ut(L);if((rt.width>Y||rt.height>Y)&&(ct=Y/Math.max(rt.width,rt.height)),ct<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let pt=Math.floor(ct*rt.width),xt=Math.floor(ct*rt.height);h===void 0&&(h=m(pt,xt));let tt=S?m(pt,xt):h;return tt.width=pt,tt.height=xt,tt.getContext("2d").drawImage(L,0,0,pt,xt),Ot("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+pt+"x"+xt+")."),tt}else return"data"in L&&Ot("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),L;return L}function b(L){return L.generateMipmaps}function y(L){r.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(L,S,Y,ct,rt,pt=!1){if(L!==null){if(r[L]!==void 0)return r[L];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xt;ct&&(xt=t.get("EXT_texture_norm16"),xt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=S;if(S===r.RED&&(Y===r.FLOAT&&(tt=r.R32F),Y===r.HALF_FLOAT&&(tt=r.R16F),Y===r.UNSIGNED_BYTE&&(tt=r.R8),Y===r.UNSIGNED_SHORT&&xt&&(tt=xt.R16_EXT),Y===r.SHORT&&xt&&(tt=xt.R16_SNORM_EXT)),S===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(tt=r.R8UI),Y===r.UNSIGNED_SHORT&&(tt=r.R16UI),Y===r.UNSIGNED_INT&&(tt=r.R32UI),Y===r.BYTE&&(tt=r.R8I),Y===r.SHORT&&(tt=r.R16I),Y===r.INT&&(tt=r.R32I)),S===r.RG&&(Y===r.FLOAT&&(tt=r.RG32F),Y===r.HALF_FLOAT&&(tt=r.RG16F),Y===r.UNSIGNED_BYTE&&(tt=r.RG8),Y===r.UNSIGNED_SHORT&&xt&&(tt=xt.RG16_EXT),Y===r.SHORT&&xt&&(tt=xt.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(tt=r.RG8UI),Y===r.UNSIGNED_SHORT&&(tt=r.RG16UI),Y===r.UNSIGNED_INT&&(tt=r.RG32UI),Y===r.BYTE&&(tt=r.RG8I),Y===r.SHORT&&(tt=r.RG16I),Y===r.INT&&(tt=r.RG32I)),S===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(tt=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(tt=r.RGB16UI),Y===r.UNSIGNED_INT&&(tt=r.RGB32UI),Y===r.BYTE&&(tt=r.RGB8I),Y===r.SHORT&&(tt=r.RGB16I),Y===r.INT&&(tt=r.RGB32I)),S===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(tt=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(tt=r.RGBA16UI),Y===r.UNSIGNED_INT&&(tt=r.RGBA32UI),Y===r.BYTE&&(tt=r.RGBA8I),Y===r.SHORT&&(tt=r.RGBA16I),Y===r.INT&&(tt=r.RGBA32I)),S===r.RGB&&(Y===r.UNSIGNED_SHORT&&xt&&(tt=xt.RGB16_EXT),Y===r.SHORT&&xt&&(tt=xt.RGB16_SNORM_EXT),Y===r.UNSIGNED_INT_5_9_9_9_REV&&(tt=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(tt=r.R11F_G11F_B10F)),S===r.RGBA){let it=pt?Is:jt.getTransfer(rt);Y===r.FLOAT&&(tt=r.RGBA32F),Y===r.HALF_FLOAT&&(tt=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(tt=it===se?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT&&xt&&(tt=xt.RGBA16_EXT),Y===r.SHORT&&xt&&(tt=xt.RGBA16_SNORM_EXT),Y===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(L,S){let Y;return L?S===null||S===wn||S===Bi?Y=r.DEPTH24_STENCIL8:S===mn?Y=r.DEPTH32F_STENCIL8:S===ps&&(Y=r.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wn||S===Bi?Y=r.DEPTH_COMPONENT24:S===mn?Y=r.DEPTH_COMPONENT32F:S===ps&&(Y=r.DEPTH_COMPONENT16),Y}function M(L,S){return b(L)===!0||L.isFramebufferTexture&&L.minFilter!==Fe&&L.minFilter!==ze?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function N(L){let S=new WeakRef(L);n.get(L).__ref=S,g.add(S),v.register(L,S,S)}function R(L){let S=n.get(L).__ref;S!==void 0&&(g.delete(S),v.unregister(S))}function F(L){D(L.target)}function z(L){P(L.target)}function D(L){L.removeEventListener("dispose",F),R(L),U(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&d.delete(L)}function P(L){L.removeEventListener("dispose",z),R(L),Q(L)}function O(){for(let L of g){let S=L.deref();S!==void 0&&(S.isRenderTarget===!0?P(S):D(S))}g.clear(),d.clear()}function U(L){let S=n.get(L);if(S.__webglInit===void 0)return;let Y=L.source,ct=f.get(Y);if(ct){let rt=ct[S.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&X(L),Object.keys(ct).length===0&&f.delete(Y)}n.remove(L)}function X(L){let S=n.get(L);r.deleteTexture(S.__webglTexture);let Y=L.source,ct=f.get(Y);delete ct[S.__cacheKey],o.memory.textures--}function Q(L){let S=n.get(L);S.__depthDisposeCallback&&S.__depthDisposeCallback();let Y=L.depthTexture;if(Y&&Y.renderTarget===L&&D(Y),L.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(S.__webglFramebuffer[rt]))for(let pt=0;pt<S.__webglFramebuffer[rt].length;pt++)r.deleteFramebuffer(S.__webglFramebuffer[rt][pt]);else r.deleteFramebuffer(S.__webglFramebuffer[rt]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[rt])}else{if(Array.isArray(S.__webglFramebuffer))for(let rt=0;rt<S.__webglFramebuffer.length;rt++)r.deleteFramebuffer(S.__webglFramebuffer[rt]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let rt=0;rt<S.__webglColorRenderbuffer.length;rt++)S.__webglColorRenderbuffer[rt]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[rt]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ct=L.textures;for(let rt=0,pt=ct.length;rt<pt;rt++){let xt=n.get(ct[rt]);xt.__webglTexture&&(r.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(ct[rt])}n.remove(L)}let W=0;function nt(){W=0}function ot(){return W}function at(L){W=L}function Dt(){let L=W;return L>=i.maxTextures&&Ot("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,L}function et(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.mipmapsAutoUpdate),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function yt(L,S){let Y=n.get(L);if(L.isVideoTexture&&xe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){let ct=L.image;if(ct===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(Y,L,S);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+S)}function Tt(L,S){let Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Se(Y,L,S);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+S)}function Nt(L,S){let Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Se(Y,L,S);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+S)}function St(L,S){let Y=n.get(L);if(L.version>0&&Y.__version!==L.version){ke(Y,L,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+S)}let Vt={[Qr]:r.REPEAT,[Rn]:r.CLAMP_TO_EDGE,[to]:r.MIRRORED_REPEAT},ge={[Fe]:r.NEAREST,[wh]:r.NEAREST_MIPMAP_NEAREST,[tr]:r.NEAREST_MIPMAP_LINEAR,[ze]:r.LINEAR,[Co]:r.LINEAR_MIPMAP_NEAREST,[jn]:r.LINEAR_MIPMAP_LINEAR},Bt={[Ch]:r.NEVER,[Bl]:r.ALWAYS,[Rh]:r.LESS,[Fl]:r.LEQUAL,[Ih]:r.EQUAL,[Dl]:r.GEQUAL,[Ph]:r.GREATER,[Lh]:r.NOTEQUAL};function $t(L,S){if(S.type===mn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ze||S.magFilter===Co||S.magFilter===tr||S.magFilter===jn||S.minFilter===ze||S.minFilter===Co||S.minFilter===tr||S.minFilter===jn)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Vt[S.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Vt[S.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Vt[S.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ge[S.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ge[S.minFilter]),S.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Bt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fe||S.minFilter!==tr&&S.minFilter!==jn||S.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ne(L,S){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",F),N(S));let ct=S.source,rt=f.get(ct);rt===void 0&&(rt={},f.set(ct,rt));let pt=et(S);if(pt!==L.__cacheKey){rt[pt]===void 0&&(rt[pt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),rt[pt].usedTimes++;let xt=rt[L.__cacheKey];xt!==void 0&&(rt[L.__cacheKey].usedTimes--,xt.usedTimes===0&&X(S)),L.__cacheKey=pt,L.__webglTexture=rt[pt].texture}return Y}function qt(L,S,Y){return Math.floor(Math.floor(L/Y)/S)}function Me(L,S,Y,ct){let pt=L.updateRanges;if(pt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,Y,ct,S.data);else{pt.sort((B,st)=>B.start-st.start);let xt=0;for(let B=1;B<pt.length;B++){let st=pt[xt],K=pt[B],gt=st.start+st.count,C=qt(K.start,S.width,4),I=qt(st.start,S.width,4);K.start<=gt+1&&C===I&&qt(K.start+K.count-1,S.width,4)===C?st.count=Math.max(st.count,K.start+K.count-st.start):(++xt,pt[xt]=K)}pt.length=xt+1;let tt=e.getParameter(r.UNPACK_ROW_LENGTH),it=e.getParameter(r.UNPACK_SKIP_PIXELS),ft=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let B=0,st=pt.length;B<st;B++){let K=pt[B],gt=Math.floor(K.start/4),C=Math.ceil(K.count/4),I=gt%S.width,G=Math.floor(gt/S.width),lt=C,H=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,I),e.pixelStorei(r.UNPACK_SKIP_ROWS,G),e.texSubImage2D(r.TEXTURE_2D,0,I,G,lt,H,Y,ct,S.data)}L.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,tt),e.pixelStorei(r.UNPACK_SKIP_PIXELS,it),e.pixelStorei(r.UNPACK_SKIP_ROWS,ft)}}function Se(L,S,Y){let ct=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ct=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ct=r.TEXTURE_3D);let rt=ne(L,S),pt=S.source;e.bindTexture(ct,L.__webglTexture,r.TEXTURE0+Y);let xt=n.get(pt);if(pt.version!==xt.__version||rt===!0){if(e.activeTexture(r.TEXTURE0+Y),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let H=jt.getPrimaries(jt.workingColorSpace),j=S.colorSpace===ti?null:jt.getPrimaries(S.colorSpace),bt=S.colorSpace===ti||H===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let it=x(S.image,!1,i.maxTextureSize);it=At(S,it);let ft=s.convert(S.format,S.colorSpace),B=s.convert(S.type),st=E(S.internalFormat,ft,B,S.normalized,S.colorSpace,S.isVideoTexture);$t(ct,S);let K,gt=S.mipmaps,C=S.isVideoTexture!==!0,I=xt.__version===void 0||rt===!0,G=pt.dataReady,lt=M(S,it);if(S.isDepthTexture)st=_(S.format===Qn,S.type),I&&(C?e.texStorage2D(r.TEXTURE_2D,1,st,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,st,it.width,it.height,0,ft,B,null));else if(S.isDataTexture)if(gt.length>0){C&&I&&e.texStorage2D(r.TEXTURE_2D,lt,st,gt[0].width,gt[0].height);for(let H=0,j=gt.length;H<j;H++)K=gt[H],C?G&&e.texSubImage2D(r.TEXTURE_2D,H,0,0,K.width,K.height,ft,B,K.data):e.texImage2D(r.TEXTURE_2D,H,st,K.width,K.height,0,ft,B,K.data);S.generateMipmaps=!1}else C?(I&&e.texStorage2D(r.TEXTURE_2D,lt,st,it.width,it.height),G&&Me(S,it,ft,B)):e.texImage2D(r.TEXTURE_2D,0,st,it.width,it.height,0,ft,B,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){C&&I&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,st,gt[0].width,gt[0].height,it.depth);for(let H=0,j=gt.length;H<j;H++)if(K=gt[H],S.format!==An)if(ft!==null)if(C){if(G)if(S.layerUpdates.size>0){let bt=Hl(K.width,K.height,S.format,S.type);for(let ht of S.layerUpdates){let ut=K.data.subarray(ht*bt/K.data.BYTES_PER_ELEMENT,(ht+1)*bt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,ht,K.width,K.height,1,ft,ut)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,K.width,K.height,it.depth,ft,K.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,st,K.width,K.height,it.depth,0,K.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?G&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,K.width,K.height,it.depth,ft,B,K.data):e.texImage3D(r.TEXTURE_2D_ARRAY,H,st,K.width,K.height,it.depth,0,ft,B,K.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{C&&I&&e.texStorage2D(r.TEXTURE_2D,lt,st,gt[0].width,gt[0].height);for(let H=0,j=gt.length;H<j;H++)K=gt[H],S.format!==An?ft!==null?C?G&&e.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,K.width,K.height,ft,K.data):e.compressedTexImage2D(r.TEXTURE_2D,H,st,K.width,K.height,0,K.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?G&&e.texSubImage2D(r.TEXTURE_2D,H,0,0,K.width,K.height,ft,B,K.data):e.texImage2D(r.TEXTURE_2D,H,st,K.width,K.height,0,ft,B,K.data)}else if(S.isDataArrayTexture)if(C){if(I&&e.texStorage3D(r.TEXTURE_2D_ARRAY,lt,st,it.width,it.height,it.depth),G)if(S.layerUpdates.size>0){let H=Hl(it.width,it.height,S.format,S.type);for(let j of S.layerUpdates){let bt=it.data.subarray(j*H/it.data.BYTES_PER_ELEMENT,(j+1)*H/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,ft,B,bt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,B,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,st,it.width,it.height,it.depth,0,ft,B,it.data);else if(S.isData3DTexture)C?(I&&e.texStorage3D(r.TEXTURE_3D,lt,st,it.width,it.height,it.depth),G&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,B,it.data)):e.texImage3D(r.TEXTURE_3D,0,st,it.width,it.height,it.depth,0,ft,B,it.data);else if(S.isFramebufferTexture){if(I)if(C)e.texStorage2D(r.TEXTURE_2D,lt,st,it.width,it.height);else{let H=it.width,j=it.height;for(let bt=0;bt<lt;bt++)e.texImage2D(r.TEXTURE_2D,bt,st,H,j,0,ft,B,null),H>>=1,j>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){let H=r.canvas;if(H.hasAttribute("layoutsubtree")||H.setAttribute("layoutsubtree","true"),it.parentNode!==H){H.appendChild(it),d.add(S),H.onpaint=j=>{let bt=j.changedElements;for(let ht of d)bt.includes(ht.image)&&(ht.needsUpdate=!0)},H.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,it);else{let bt=r.RGBA,ht=r.RGBA,ut=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,bt,ht,ut,it)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(gt.length>0){if(C&&I){let H=Ut(gt[0]);e.texStorage2D(r.TEXTURE_2D,lt,st,H.width,H.height)}for(let H=0,j=gt.length;H<j;H++)K=gt[H],C?G&&e.texSubImage2D(r.TEXTURE_2D,H,0,0,ft,B,K):e.texImage2D(r.TEXTURE_2D,H,st,ft,B,K);S.generateMipmaps=!1}else if(C){if(I){let H=Ut(it);e.texStorage2D(r.TEXTURE_2D,lt,st,H.width,H.height)}G&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,B,it)}else e.texImage2D(r.TEXTURE_2D,0,st,ft,B,it);b(S)&&S.mipmapsAutoUpdate===!0&&y(ct),xt.__version=pt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ke(L,S,Y){if(S.image.length!==6)return;let ct=ne(L,S),rt=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+Y);let pt=n.get(rt);if(rt.version!==pt.__version||ct===!0){e.activeTexture(r.TEXTURE0+Y);let xt=jt.getPrimaries(jt.workingColorSpace),tt=S.colorSpace===ti?null:jt.getPrimaries(S.colorSpace),it=S.colorSpace===ti||xt===tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ft=S.isCompressedTexture||S.image[0].isCompressedTexture,B=S.image[0]&&S.image[0].isDataTexture,st=[];for(let ht=0;ht<6;ht++)!ft&&!B?st[ht]=x(S.image[ht],!0,i.maxCubemapSize):st[ht]=B?S.image[ht].image:S.image[ht],st[ht]=At(S,st[ht]);let K=st[0],gt=s.convert(S.format,S.colorSpace),C=s.convert(S.type),I=E(S.internalFormat,gt,C,S.normalized,S.colorSpace),G=S.isVideoTexture!==!0,lt=pt.__version===void 0||ct===!0,H=rt.dataReady,j=M(S,K);$t(r.TEXTURE_CUBE_MAP,S);let bt;if(S.isDepthTexture){if(I=_(S.format===Qn,S.type),lt)if(G)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,I,K.width,K.height);else for(let ht=0;ht<6;ht++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,I,K.width,K.height,0,gt,C,null)}else if(ft){G&&lt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,j,I,K.width,K.height);for(let ht=0;ht<6;ht++){bt=st[ht].mipmaps;for(let ut=0;ut<bt.length;ut++){let Mt=bt[ut];S.format!==An?gt!==null?G?H&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut,0,0,Mt.width,Mt.height,gt,Mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut,I,Mt.width,Mt.height,0,Mt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut,0,0,Mt.width,Mt.height,gt,C,Mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut,I,Mt.width,Mt.height,0,gt,C,Mt.data)}}}else{if(bt=S.mipmaps,G&&lt){bt.length>0&&j++;let ht=Ut(st[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,j,I,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(B){G?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,st[ht].width,st[ht].height,gt,C,st[ht].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,I,st[ht].width,st[ht].height,0,gt,C,st[ht].data);for(let ut=0;ut<bt.length;ut++){let Ft=bt[ut].image[ht].image;G?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut+1,0,0,Ft.width,Ft.height,gt,C,Ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut+1,I,Ft.width,Ft.height,0,gt,C,Ft.data)}}else{G?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,gt,C,st[ht]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,I,gt,C,st[ht]);for(let ut=0;ut<bt.length;ut++){let Mt=bt[ut];G?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut+1,0,0,gt,C,Mt.image[ht]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ut+1,I,gt,C,Mt.image[ht])}}}b(S)&&S.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),pt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function oe(L,S,Y,ct,rt,pt){let xt=s.convert(Y.format,Y.colorSpace),tt=s.convert(Y.type),it=E(Y.internalFormat,xt,tt,Y.normalized,Y.colorSpace),ft=n.get(S),B=n.get(Y);if(B.__renderTarget=S,!ft.__hasExternalTextures){let st=Math.max(1,S.width>>pt),K=Math.max(1,S.height>>pt);rt===r.TEXTURE_3D||rt===r.TEXTURE_2D_ARRAY?e.texImage3D(rt,pt,it,st,K,S.depth,0,xt,tt,null):e.texImage2D(rt,pt,it,st,K,0,xt,tt,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),mt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ct,rt,B.__webglTexture,0,he(S)):(rt===r.TEXTURE_2D||rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ct,rt,B.__webglTexture,pt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function cn(L,S,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,L),S.depthBuffer){let ct=S.depthTexture,rt=ct&&ct.isDepthTexture?ct.type:null,pt=_(S.stencilBuffer,rt),xt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;mt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he(S),pt,S.width,S.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,he(S),pt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,pt,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,L)}else{let ct=S.textures;for(let rt=0;rt<ct.length;rt++){let pt=ct[rt],xt=s.convert(pt.format,pt.colorSpace),tt=s.convert(pt.type),it=E(pt.internalFormat,xt,tt,pt.normalized,pt.colorSpace);mt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he(S),it,S.width,S.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,he(S),it,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,it,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(L,S,Y){let ct=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(S.depthTexture);rt.__renderTarget=S;let pt=ct?S.depthTexture.image[0]:S.depthTexture.image;(!rt.__webglTexture||pt.width!==S.width||pt.height!==S.height)&&(pt.width=S.width,pt.height=S.height,S.depthTexture.needsUpdate=!0),ct?St(S.depthTexture,0):yt(S.depthTexture,0);let xt=rt.__webglTexture,tt=he(S),it=ct?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,ft=S.depthTexture.format===Qn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===$n)mt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,it,xt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,ft,it,xt,0);else if(S.depthTexture.format===Qn)mt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,it,xt,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,ft,it,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ze(L){let S=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let ct=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ct){let rt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ct.removeEventListener("dispose",rt)};ct.addEventListener("dispose",rt),S.__depthDisposeCallback=rt}S.__boundDepthTexture=ct}if(L.depthTexture&&!S.__autoAllocateDepthBuffer)if(Y)for(let ct=0;ct<6;ct++)be(S.__webglFramebuffer[ct],L,ct);else L.texture.mipmaps.length>0?be(S.__webglFramebuffer[0],L,0):be(S.__webglFramebuffer,L,0);else if(Y){S.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ct]),S.__webglDepthbuffer[ct]===void 0)S.__webglDepthbuffer[ct]=r.createRenderbuffer(),cn(S.__webglDepthbuffer[ct],L,!1);else{let rt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=S.__webglDepthbuffer[ct];r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,pt)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),cn(S.__webglDepthbuffer,L,!1);else{let rt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pt),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,pt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(L,S,Y){let ct=n.get(L);S!==void 0&&oe(ct.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Ze(L)}function Te(L){let S=L.texture,Y=n.get(L),ct=n.get(S);L.addEventListener("dispose",z),N(L);let rt=L.textures,pt=L.isWebGLCubeRenderTarget===!0,xt=rt.length>1;if(xt||(ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture()),ct.__version=S.version,o.memory.textures++),pt){Y.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(S.mipmaps.length>0){Y.__webglFramebuffer[tt]=[];for(let it=0;it<S.mipmaps.length;it++)Y.__webglFramebuffer[tt][it]=r.createFramebuffer()}else Y.__webglFramebuffer[tt]=r.createFramebuffer()}else{if(S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let tt=0;tt<S.mipmaps.length;tt++)Y.__webglFramebuffer[tt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(xt)for(let tt=0,it=rt.length;tt<it;tt++){let ft=n.get(rt[tt]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&mt(L)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let tt=0;tt<rt.length;tt++){let it=rt[tt];Y.__webglColorRenderbuffer[tt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[tt]);let ft=s.convert(it.format,it.colorSpace),B=s.convert(it.type),st=E(it.internalFormat,ft,B,it.normalized,it.colorSpace,L.isXRRenderTarget===!0),K=he(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,st,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[tt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),cn(Y.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pt){e.bindTexture(r.TEXTURE_CUBE_MAP,ct.__webglTexture),$t(r.TEXTURE_CUBE_MAP,S);for(let tt=0;tt<6;tt++)if(S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)oe(Y.__webglFramebuffer[tt][it],L,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else oe(Y.__webglFramebuffer[tt],L,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);b(S)?y(r.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(xt){for(let tt=0,it=rt.length;tt<it;tt++){let ft=rt[tt],B=n.get(ft),st=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(st=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(st,B.__webglTexture),$t(st,ft),oe(Y.__webglFramebuffer,L,ft,r.COLOR_ATTACHMENT0+tt,st,0),b(ft)&&y(st)}e.unbindTexture()}else{let tt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(tt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(tt,ct.__webglTexture),$t(tt,S),S.mipmaps.length>0)for(let it=0;it<S.mipmaps.length;it++)oe(Y.__webglFramebuffer[it],L,S,r.COLOR_ATTACHMENT0,tt,it);else oe(Y.__webglFramebuffer,L,S,r.COLOR_ATTACHMENT0,tt,0);b(S)?y(tt):S.mipmaps.length>0&&r.texParameteri(tt,r.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&Ze(L)}function k(L){let S=L.textures;for(let Y=0,ct=S.length;Y<ct;Y++){let rt=S[Y];if(b(rt)&&rt.mipmapsAutoUpdate===!0){let pt=T(L),xt=n.get(rt).__webglTexture;e.bindTexture(pt,xt),y(pt),e.unbindTexture()}}}let Ue=[];function ae(L){if(L.samples>0){if(mt(L)===!1){let S=L.textures,Y=L.width,ct=L.height,rt=r.COLOR_BUFFER_BIT,pt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=n.get(L),tt=S.length>1;if(tt)for(let ft=0;ft<S.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(rt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(rt|=r.STENCIL_BUFFER_BIT)),tt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);let B=n.get(S[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,B,0)}r.blitFramebuffer(0,0,Y,ct,0,0,Y,ct,rt,r.NEAREST),c===!0&&(Ue.length=0,Ue.push(r.COLOR_ATTACHMENT0+ft),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Ue.push(pt),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),tt)for(let ft=0;ft<S.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);let B=n.get(S[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,B,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let S=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function he(L){return Math.min(i.maxSamples,L.samples)}function mt(L){let S=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xe(L){let S=o.render.frame;u.get(L)!==S&&(u.set(L,S),L.update())}function At(L,S){let Y=L.colorSpace,ct=L.format,rt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==Rs&&Y!==ti&&(jt.getTransfer(Y)===se?(ct!==An||rt!==tn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",Y)),S}function Ut(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=Dt,this.resetTextureUnits=nt,this.getTextureUnits=ot,this.setTextureUnits=at,this.setTexture2D=yt,this.setTexture2DArray=Tt,this.setTexture3D=Nt,this.setTextureCube=St,this.rebindTextures=Qe,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=mt,this.dispose=O}function u0(r,t){function e(n,i=ti){let s,o=jt.getTransfer(i);if(n===tn)return r.UNSIGNED_BYTE;if(n===Io)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cl)return r.BYTE;if(n===Rl)return r.SHORT;if(n===ps)return r.UNSIGNED_SHORT;if(n===Ro)return r.INT;if(n===wn)return r.UNSIGNED_INT;if(n===mn)return r.FLOAT;if(n===En)return r.HALF_FLOAT;if(n===Ll)return r.ALPHA;if(n===Nl)return r.RGB;if(n===An)return r.RGBA;if(n===$n)return r.DEPTH_COMPONENT;if(n===Qn)return r.DEPTH_STENCIL;if(n===Lo)return r.RED;if(n===No)return r.RED_INTEGER;if(n===Si)return r.RG;if(n===Fo)return r.RG_INTEGER;if(n===Do)return r.RGBA_INTEGER;if(n===er||n===nr||n===ir||n===sr)if(o===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===er)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===er)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bo||n===Uo||n===Oo||n===zo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===ko||n===Go||n===Ho||n===Wo||n===rr||n===qo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vo||n===ko)return o===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Go)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ho)return s.COMPRESSED_R11_EAC;if(n===Wo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===rr)return s.COMPRESSED_RG11_EAC;if(n===qo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xo||n===Yo||n===Zo||n===$o||n===Jo||n===Ko||n===jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Xo)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yo)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jo)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ta)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ea)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===na)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ia)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sa)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ra)return o===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===aa||n===la)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===oa)return o===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===aa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ca||n===ha||n===or||n===ua)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ca)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===or)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ua)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var d0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Hs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fn({vertexShader:d0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new Xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends Pn{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,v=typeof XRWebGLBinding<"u",p=new jl,m={},x=e.getContextAttributes(),b=null,y=null,T=[],E=[],_=new Zt,M=null,N=null,R=new Je;R.viewport=new me;let F=new Je;F.viewport=new me;let z=[R,F],D=new wo,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let yt=T[et];return yt===void 0&&(yt=new as,T[et]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(et){let yt=T[et];return yt===void 0&&(yt=new as,T[et]=yt),yt.getGripSpace()},this.getHand=function(et){let yt=T[et];return yt===void 0&&(yt=new as,T[et]=yt),yt.getHandSpace()};function U(et){let yt=E.indexOf(et.inputSource);if(yt===-1)return;let Tt=T[yt];Tt!==void 0&&(Tt.update(et.inputSource,et.frame,l||o),Tt.dispatchEvent({type:et.type,data:et.inputSource}))}function X(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Q);for(let et=0;et<T.length;et++){let yt=E[et];yt!==null&&(E[et]=null,T[et].disconnect(yt))}P=null,O=null,p.reset();for(let et in m)delete m[et];if(t.setRenderTarget(b),f=null,h=null,d=null,i=null,y=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),N!==null){let et=N.camera;et.fov=N.fov,et.zoom=N.zoom,et.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){s=et,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(et){l=et},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(et){if(i=et,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Nt=null,St=null;x.depth&&(St=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=x.stencil?Qn:$n,Nt=x.stencil?Bi:wn);let Vt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Vt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new rn(h.textureWidth,h.textureHeight,{format:An,type:tn,depthTexture:new Kn(h.textureWidth,h.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Tt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,Tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new rn(f.framebufferWidth,f.framebufferHeight,{format:An,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Dt.setContext(i),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(et){for(let yt=0;yt<et.removed.length;yt++){let Tt=et.removed[yt],Nt=E.indexOf(Tt);Nt>=0&&(E[Nt]=null,T[Nt].disconnect(Tt))}for(let yt=0;yt<et.added.length;yt++){let Tt=et.added[yt],Nt=E.indexOf(Tt);if(Nt===-1){for(let Vt=0;Vt<T.length;Vt++)if(Vt>=E.length){E.push(Tt),Nt=Vt;break}else if(E[Vt]===null){E[Vt]=Tt,Nt=Vt;break}if(Nt===-1)break}let St=T[Nt];St&&St.connect(Tt)}}function W(et,yt){yt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(yt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(i===null)return;let yt=et.near,Tt=et.far;p.texture!==null&&(p.depthNear>0&&(yt=p.depthNear),p.depthFar>0&&(Tt=p.depthFar)),D.near=F.near=R.near=yt,D.far=F.far=R.far=Tt,(P!==D.near||O!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),P=D.near,O=D.far),D.layers.mask=et.layers.mask|6,R.layers.mask=D.layers.mask&-5,F.layers.mask=D.layers.mask&-3;let Nt=et.parent,St=D.cameras;W(D,Nt);for(let Vt=0;Vt<St.length;Vt++)W(St[Vt],Nt);D.projectionMatrix.copy(R.projectionMatrix),D.projectionMatrixInverse.copy(R.projectionMatrixInverse),N===null&&et.isPerspectiveCamera&&(N={camera:et,fov:et.fov,zoom:et.zoom}),nt(et,D,Nt)};function nt(et,yt,Tt){Tt===null?et.matrix.copy(yt.matrixWorld):(et.matrix.copy(Tt.matrixWorld),et.matrix.invert(),et.matrix.multiply(yt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(yt.projectionMatrix),et.projectionMatrixInverse.copy(yt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=no*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(et){c=et,h!==null&&(h.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(et){return m[et]};let ot=null;function at(et,yt){if(u=yt.getViewerPose(l||o),g=yt,u!==null){let Tt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Nt=!1;Tt.length!==D.cameras.length&&(D.cameras.length=0,Nt=!0);for(let Bt=0;Bt<Tt.length;Bt++){let $t=Tt[Bt],ne=null;if(f!==null)ne=f.getViewport($t);else{let Me=d.getViewSubImage(h,$t);ne=Me.viewport,Bt===0&&(t.setRenderTargetTextures(y,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(y))}let qt=z[Bt];qt===void 0&&(qt=new Je,qt.layers.enable(Bt),qt.viewport=new me,z[Bt]=qt),qt.matrix.fromArray($t.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray($t.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ne.x,ne.y,ne.width,ne.height),Bt===0&&(D.matrix.copy(qt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Nt===!0&&D.cameras.push(qt)}let St=i.enabledFeatures;if(St&&St.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Bt=d.getDepthInformation(Tt[0]);Bt&&Bt.isValid&&Bt.texture&&p.init(Bt,i.renderState)}if(St&&St.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let Bt=0;Bt<Tt.length;Bt++){let $t=Tt[Bt].camera;if($t){let ne=m[$t];ne||(ne=new Hs,m[$t]=ne);let qt=d.getCameraImage($t);ne.sourceTexture=qt}}}}for(let Tt=0;Tt<T.length;Tt++){let Nt=E[Tt],St=T[Tt];Nt!==null&&St!==void 0&&St.update(Nt,yt,l||o)}ot&&ot(et,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),g=null}let Dt=new hu;Dt.setAnimationLoop(at),this.setAnimationLoop=function(et){ot=et},this.dispose=function(){}}},p0=new ce,yu=new kt;yu.set(-1,0,0,0,1,0,0,0,1);function m0(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Vl(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,x,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=t.get(m),b=x.envMap,y=x.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(p0.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(yu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ke&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function g0(r,t,e,n){let i={},s={};function o(x,b){let y=b.program;n.uniformBlockBinding(x,y,i[x.id])}function a(x,b){let y=i[x.id];y===void 0&&(g(x),y=c(x),i[x.id]=y,x.addEventListener("dispose",p));let T=b.program;n.updateUBOMapping(x,T);let E=t.render.frame;s[x.id]!==E&&(l(x),s[x.id]=E)}function c(x){let b=r.createBuffer(),y=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),b}function l(x){let b=i[x.id],y=x.uniforms,T=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let E=0,_=y.length;E<_;E++){let M=y[E];if(Array.isArray(M))for(let N=0,R=M.length;N<R;N++)u(M[N],E,N,T);else u(M,E,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(x,b,y,T){if(h(x,b,y,T)===!0){let E=x.__offset,_=x.value;if(Array.isArray(_)){let M=0;for(let N=0;N<_.length;N++){let R=_[N],F=v(R,!0);d(R,x.__data,M),M+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,x.__data)}}function d(x,b,y){typeof x=="number"||typeof x=="boolean"?b[y]=x:x.isMatrix3?(b[y]=x.elements[0],b[y+1]=x.elements[1],b[y+2]=x.elements[2],b[y+3]=0,b[y+4]=x.elements[3],b[y+5]=x.elements[4],b[y+6]=x.elements[5],b[y+7]=0,b[y+8]=x.elements[6],b[y+9]=x.elements[7],b[y+10]=x.elements[8],b[y+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-y),y):x.toArray(b,y)}function h(x,b,y,T){let E=x.value,_=b+"_"+y;if(Array.isArray(E)){T[_]===void 0&&(T[_]=[]);let M=T[_],N=!1;for(let R=0;R<E.length;R++)f(E[R],M,R)===!0&&(N=!0);return N}return f(E,T,_)}function f(x,b,y){if(b[y]===void 0)return typeof x=="number"||typeof x=="boolean"?b[y]=x:ArrayBuffer.isView(x)?b[y]=x.slice():b[y]=x.clone(),!0;{let T=b[y];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return b[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function g(x){let b=x.uniforms,y=0,T=16;for(let _=0,M=b.length;_<M;_++){let N=Array.isArray(b[_])?b[_]:[b[_]];for(let R=0,F=N.length;R<F;R++){let z=N[R],D=Array.isArray(z.value)?z.value:[z.value],P=Array.isArray(b[_])||Array.isArray(z.value),O=y;for(let X=0,Q=D.length;X<Q;X++){let W=D[X],nt=v(W,P),ot=y%T,at=ot%nt.boundary,Dt=ot+at;y+=at,Dt!==0&&T-Dt<nt.storage&&(y+=T-Dt),X===0&&(O=y),y+=nt.storage}let U=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new U((y-O)/Float32Array.BYTES_PER_ELEMENT),z.__offset=O}}let E=y%T;return E>0&&(y+=T-E),x.__size=y,x.__cache={},this}function v(x,b){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(x){let b=x.target;b.removeEventListener("dispose",p),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function m(){for(let x in i)r.deleteBuffer(i[x]);i={},s={}}return{bind:o,update:a,dispose:m}}var x0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;function _0(){return Un===null&&(Un=new Us(x0,16,16,Si,En),Un.name="DFG_LUT",Un.minFilter=ze,Un.magFilter=ze,Un.wrapS=Rn,Un.wrapT=Rn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var ga=class{constructor(t={}){let{canvas:e=Fh(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=tn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let v=f,p=new Set([Do,Fo,No]),m=new Set([tn,wn,ps,Bi,Io,Po]),x=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,_=[],M=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,F=!1,z=null,D=null,P=null,O=null;this._outputColorSpace=Ce;let U=0,X=0,Q=null,W=-1,nt=null,ot=new me,at=new me,Dt=null,et=new Wt(0),yt=0,Tt=e.width,Nt=e.height,St=1,Vt=null,ge=null,Bt=new me(0,0,Tt,Nt),$t=new me(0,0,Tt,Nt),ne=!1,qt=new mi,Me=new ao,Se=!1,ke=!1,oe=new ce,cn=new q,be=new me,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Te(){return Q===null?St:1}let k=n;function Ue(w,V){return e.getContext(w,V)}let ae,he,mt,xe,At,Ut,L,S,Y,ct,rt,pt,xt,tt,it,ft,B,st,K,gt,C,I,G;try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),k===null){let V="webgl2";if(k=Ue(V,w),k===null)throw Ue(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}lt()}catch(w){throw e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),zt("WebGLRenderer: "+w.message),w}function lt(){ae=new Rm(k),ae.init(),C=new u0(k,ae),he=new _m(k,ae,t,C),mt=new c0(k,ae),he.reversedDepthBuffer&&h&&mt.buffers.depth.setReversed(!0),D=k.createFramebuffer(),P=k.createFramebuffer(),O=k.createFramebuffer(),xe=new Lm(k),At=new $g,Ut=new h0(k,ae,mt,At,he,C,xe),L=new Cm(R),S=new Nd(k),I=new gm(k,S),Y=new Im(k,S,xe,I),ct=new Fm(k,Y,S,I,xe),st=new Nm(k,he,Ut),it=new vm(At),rt=new Zg(R,L,ae,he,I,it),pt=new m0(R,At),xt=new Kg,tt=new i0(ae),B=new mm(R,L,mt,ct,g,c),ft=new l0(R,ct,he),G=new g0(k,xe,he,mt),K=new xm(k,ae,xe),gt=new Pm(k,ae,xe),xe.programs=rt.programs,R.capabilities=he,R.extensions=ae,R.properties=At,R.renderLists=xt,R.shadowMap=ft,R.state=mt,R.info=xe}v!==tn&&(N=new Bm(v,e.width,e.height,a,i,s));let H=new Ql(R,k);this.xr=H,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(w){w!==void 0&&(St=w,this.setSize(Tt,Nt,!1))},this.getSize=function(w){return w.set(Tt,Nt)},this.setSize=function(w,V,J=!0){if(H.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=w,Nt=V,e.width=Math.floor(w*St),e.height=Math.floor(V*St),J===!0&&(e.style.width=w+"px",e.style.height=V+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(Tt*St,Nt*St).floor()},this.setDrawingBufferSize=function(w,V,J){Tt=w,Nt=V,St=J,e.width=Math.floor(w*J),e.height=Math.floor(V*J),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(v===tn){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ot)},this.getViewport=function(w){return w.copy(Bt)},this.setViewport=function(w,V,J,Z){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,V,J,Z),mt.viewport(ot.copy(Bt).multiplyScalar(Te()).round())},this.getScissor=function(w){return w.copy($t)},this.setScissor=function(w,V,J,Z){w.isVector4?$t.set(w.x,w.y,w.z,w.w):$t.set(w,V,J,Z),mt.scissor(at.copy($t).multiplyScalar(Te()).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(w){mt.setScissorTest(ne=w)},this.setOpaqueSort=function(w){Vt=w},this.setTransparentSort=function(w){ge=w},this.getClearColor=function(w){return w.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,J=!0){let Z=0;if(w){let $=!1;if(Q!==null){let vt=Q.texture.format;$=p.has(vt)}if($){let vt=Q.texture.type,Rt=m.has(vt),_t=B.getClearColor(),Et=B.getClearAlpha(),Lt=_t.r,Gt=_t.g,Jt=_t.b;Rt?(x[0]=Lt,x[1]=Gt,x[2]=Jt,x[3]=Et,k.clearBufferuiv(k.COLOR,0,x)):(b[0]=Lt,b[1]=Gt,b[2]=Jt,b[3]=Et,k.clearBufferiv(k.COLOR,0,b))}else Z|=k.COLOR_BUFFER_BIT}V&&(Z|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),z=w},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),B.dispose(),xt.dispose(),tt.dispose(),Ut.dispose(),At.dispose(),L.dispose(),ct.dispose(),Y.dispose(),I.dispose(),G.dispose(),rt.dispose(),H.dispose(),H.removeEventListener("sessionstart",yc),H.removeEventListener("sessionend",Sc),Ei.stop()};function j(w){w.preventDefault(),Ol("WebGLRenderer: Context Lost."),F=!0}function bt(){Ol("WebGLRenderer: Context Restored."),F=!1;let w=xe.autoReset,V=ft.enabled,J=ft.autoUpdate,Z=ft.needsUpdate,$=ft.type;lt(),xe.autoReset=w,ft.enabled=V,ft.autoUpdate=J,ft.needsUpdate=Z,ft.type=$}function ht(w){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ut(w){let V=w.target;V.removeEventListener("dispose",ut),Mt(V)}function Mt(w){Ft(w),At.remove(w)}function Ft(w){let V=At.get(w).programs;V!==void 0&&(V.forEach(function(J){rt.releaseProgram(J)}),w.isShaderMaterial&&rt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,J,Z,$,vt){V===null&&(V=Ze);let Rt=$.isMesh&&$.matrixWorld.determinantAffine()<0,_t=qu(w,V,J,Z,$);mt.setMaterial(Z,Rt);let Et=J.index,Lt=1;if(Z.wireframe===!0){if(Et=Y.getWireframeAttribute(J),Et===void 0)return;Lt=2}let Gt=J.drawRange,Jt=J.attributes.position,It=Gt.start*Lt,Kt=(Gt.start+Gt.count)*Lt;vt!==null&&(It=Math.max(It,vt.start*Lt),Kt=Math.min(Kt,(vt.start+vt.count)*Lt)),Et!==null?(It=Math.max(It,0),Kt=Math.min(Kt,Et.count)):Jt!=null&&(It=Math.max(It,0),Kt=Math.min(Kt,Jt.count));let Ee=Kt-It;if(Ee<0||Ee===1/0)return;I.setup($,Z,_t,J,Et);let ue,le=K;if(Et!==null&&(ue=S.get(Et),le=gt,le.setIndex(ue)),$.isMesh)Z.wireframe===!0?(mt.setLineWidth(Z.wireframeLinewidth*Te()),le.setMode(k.LINES)):le.setMode(k.TRIANGLES);else if($.isLine){let Ge=Z.linewidth;Ge===void 0&&(Ge=1),mt.setLineWidth(Ge*Te()),$.isLineSegments?le.setMode(k.LINES):$.isLineLoop?le.setMode(k.LINE_LOOP):le.setMode(k.LINE_STRIP)}else $.isPoints?le.setMode(k.POINTS):$.isSprite&&le.setMode(k.TRIANGLES);if($.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))le.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Ge=$._multiDrawStarts,Pt=$._multiDrawCounts,$e=$._multiDrawCount,ie=Et?S.get(Et).bytesPerElement:1,Ai=At.get(Z).currentProgram.getUniforms();for(let He=0;He<$e;He++)Ai.setValue(k,"_gl_DrawID",He),le.render(Ge[He]/ie,Pt[He])}else if($.isInstancedMesh)le.renderInstances(It,Ee,$.count);else if(J.isInstancedBufferGeometry){let Ge=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Pt=Math.min(J.instanceCount,Ge);le.renderInstances(It,Ee,Pt)}else le.render(It,Ee)};function Yt(w,V,J,Z){z!==null&&w.isNodeMaterial&&z.setObject(Z,w),Se===!0&&it.setState(w,J,!1),w.transparent===!0&&w.side===pn&&w.forceSinglePass===!1?(w.side=Ke,w.needsUpdate=!0,ys(w,V,Z),w.side=yi,w.needsUpdate=!0,ys(w,V,Z),w.side=pn):ys(w,V,Z)}this.compile=function(w,V,J=null){J===null&&(J=w),z!==null&&z.renderStart(w,V,J),E=tt.get(J),E.init(V),M.push(E),J.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),w!==J&&w.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),ke=this.localClippingEnabled,Se=it.init(this.clippingPlanes,ke),Se===!0&&it.setGlobalState(this.clippingPlanes,V),z!==null&&ft.render(E.state.shadowsArray,J,V);let Z=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let vt=$.material;if(vt)if(Array.isArray(vt))for(let Rt=0;Rt<vt.length;Rt++){let _t=vt[Rt];Yt(_t,J,V,$),Z.add(_t)}else Yt(vt,J,V,$),Z.add(vt)}),E=M.pop(),z!==null&&z.renderEnd(),Z},this.compileAsync=function(w,V,J=null){let Z=this.compile(w,V,J);return new Promise($=>{function vt(){if(Z.forEach(function(Rt){let Et=At.get(Rt).currentProgram;(Et===void 0||Et.isReady())&&Z.delete(Rt)}),Z.size===0){$(w);return}setTimeout(vt,10)}ae.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let we=null;function _e(w){we&&we(w)}function yc(){Ei.stop()}function Sc(){Ei.start()}let Ei=new hu;Ei.setAnimationLoop(_e),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(w){we=w,H.setAnimationLoop(w),w===null?Ei.stop():Ei.start()},H.addEventListener("sessionstart",yc),H.addEventListener("sessionend",Sc),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(w,V);let J=H.enabled===!0&&H.isPresenting===!0,Z=N!==null&&(Q===null||J)&&N.begin(R,Q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(H.cameraAutoUpdate===!0&&H.updateCamera(V),V=H.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,V,Q),E=tt.get(w,M.length),E.init(V),E.state.textureUnits=Ut.getTextureUnits(),M.push(E),oe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?Me.setFromArrayCamera(V):qt.setFromProjectionMatrix(oe,un,V.reversedDepth),ke=this.localClippingEnabled,Se=it.init(this.clippingPlanes,ke),T=xt.get(w,_.length),T.init(),_.push(T),this.info.render.frame++,H.enabled===!0&&H.isPresenting===!0){let Rt=R.xr.getDepthSensingMesh();Rt!==null&&Ua(Rt,V,-1/0,R.sortObjects)}Ua(w,V,0,R.sortObjects),T.finish(),z!==null&&z.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(Vt,ge),Qe=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Qe&&B.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),Se===!0&&it.beginShadows();let $=E.state.shadowsArray;if(ft.render($,w,V),Se===!0&&it.endShadows(),(Z&&N.hasRenderPass())===!1){let Rt=T.opaque,_t=T.transmissive;if(E.setupLights(),V.isArrayCamera){let Et=V.cameras;if(_t.length>0)for(let Lt=0,Gt=Et.length;Lt<Gt;Lt++){let Jt=Et[Lt];bc(Rt,_t,w,Jt)}Qe&&B.render(w);for(let Lt=0,Gt=Et.length;Lt<Gt;Lt++){let Jt=Et[Lt];Mc(T,w,Jt,Jt.viewport)}}else _t.length>0&&bc(Rt,_t,w,V),Qe&&B.render(w),Mc(T,w,V)}Q!==null&&X===0&&(Ut.updateMultisampleRenderTarget(Q),Ut.updateRenderTargetMipmap(Q)),Z&&N.end(R),w.isScene===!0&&w.onAfterRender(R,w,V),I.resetDefaultState(),W=-1,nt=null,M.pop(),M.length>0?(E=M[M.length-1],Ut.setTextureUnits(E.state.textureUnits),Se===!0&&it.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,z!==null&&z.renderEnd()};function Ua(w,V,J,Z){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let Rt=V.isArrayCamera?Me:qt;if(!w.frustumCulled||w.intersectsFrustum(Rt)){Z&&be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);let _t=ct.update(w),Et=w.material;Et.visible&&T.push(w,_t,Et,J,be.z,null,V)}}else if(w.isMesh||w.isLine||w.isPoints){let Rt=V.isArrayCamera?Me:qt;if(!w.frustumCulled||w.intersectsFrustum(Rt)){let _t=ct.update(w),Et=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),be.copy(w.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),be.copy(_t.boundingSphere.center)),be.applyMatrix4(w.matrixWorld).applyMatrix4(oe)),Array.isArray(Et)){let Lt=_t.groups;for(let Gt=0,Jt=Lt.length;Gt<Jt;Gt++){let It=Lt[Gt],Kt=Et[It.materialIndex];Kt&&Kt.visible&&T.push(w,_t,Kt,J,be.z,It,V)}}else Et.visible&&T.push(w,_t,Et,J,be.z,null,V)}}}let vt=w.children;for(let Rt=0,_t=vt.length;Rt<_t;Rt++)Ua(vt[Rt],V,J,Z)}function Mc(w,V,J,Z){let{opaque:$,transmissive:vt,transparent:Rt}=w;E.setupLightsView(J),Se===!0&&it.setGlobalState(R.clippingPlanes,J),Z&&mt.viewport(ot.copy(Z)),$.length>0&&yr($,V,J),vt.length>0&&yr(vt,V,J),Rt.length>0&&yr(Rt,V,J),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function bc(w,V,J,Z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Z.id]===void 0){let It=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Z.id]=new rn(1,1,{generateMipmaps:!0,type:It?En:tn,minFilter:jn,samples:Math.max(4,he.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let vt=E.state.transmissionRenderTarget[Z.id],Rt=Z.viewport||ot;vt.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);let _t=R.getRenderTarget(),Et=R.getActiveCubeFace(),Lt=R.getActiveMipmapLevel();R.setRenderTarget(vt),R.getClearColor(et),yt=R.getClearAlpha(),yt<1&&R.setClearColor(16777215,.5),R.clear(),Qe&&B.render(J);let Gt=R.toneMapping;R.toneMapping=Bn;let Jt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),E.setupLightsView(Z),Se===!0&&it.setGlobalState(R.clippingPlanes,Z),yr(w,J,Z),Ut.updateMultisampleRenderTarget(vt),Ut.updateRenderTargetMipmap(vt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Kt=0,Ee=V.length;Kt<Ee;Kt++){let ue=V[Kt],{object:le,geometry:Ge,material:Pt,group:$e}=ue;if(Pt.side===pn&&le.layers.test(Z.layers)){let ie=Pt.side;Pt.side=Ke,Pt.needsUpdate=!0,wc(le,J,Z,Ge,Pt,$e),Pt.side=ie,Pt.needsUpdate=!0,It=!0}}It===!0&&(Ut.updateMultisampleRenderTarget(vt),Ut.updateRenderTargetMipmap(vt))}R.setRenderTarget(_t,Et,Lt),R.setClearColor(et,yt),Jt!==void 0&&(Z.viewport=Jt),R.toneMapping=Gt}function yr(w,V,J){let Z=V.isScene===!0?V.overrideMaterial:null;for(let $=0,vt=w.length;$<vt;$++){let Rt=w[$],{object:_t,geometry:Et,group:Lt}=Rt,Gt=Rt.material;Gt.allowOverride===!0&&Z!==null&&(Gt=Z),_t.layers.test(J.layers)&&wc(_t,V,J,Et,Gt,Lt)}}function wc(w,V,J,Z,$,vt){z!==null&&$.isNodeMaterial&&z.setObject(w,$),w.onBeforeRender(R,V,J,Z,$,vt),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(R,V,J,Z,w,vt),$.transparent===!0&&$.side===pn&&$.forceSinglePass===!1?($.side=Ke,$.needsUpdate=!0,R.renderBufferDirect(J,V,Z,$,w,vt),$.side=yi,$.needsUpdate=!0,R.renderBufferDirect(J,V,Z,$,w,vt),$.side=pn):R.renderBufferDirect(J,V,Z,$,w,vt),w.onAfterRender(R,V,J,Z,$,vt)}function Ec(w){let V=0;for(let J of w)J.texture!==null&&V++;return V}function ys(w,V,J){V.isScene!==!0&&(V=Ze);let Z=At.get(w),$=E.state.lights,vt=E.state.shadowsArray,Rt=$.state.version,_t=rt.getParameters(w,$.state,vt,V,J,E.state.lightProbeGridArray),Et=rt.getProgramCacheKey(_t),Lt=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,Z.fog=V.fog;let Gt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=L.get(w.envMap||Z.environment,Gt),Z.envMapRotation=Z.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",ut),Lt=new Map,Z.programs=Lt,Z.programVariants=new Map);let Jt=Lt.get(Et);if(Jt!==void 0){if(Z.currentProgram===Jt&&Z.lightsStateVersion===Rt)return Tc(w,_t),Jt}else _t.uniforms=rt.getUniforms(w),z!==null&&w.isNodeMaterial&&z.build(w,J,_t),w.onBeforeCompile(_t,R),Jt=rt.acquireProgram(_t,Et),Lt.set(Et,Jt),Z.uniforms=_t.uniforms;let It=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=it.uniform),Tc(w,_t),Z.needsLights=Yu(w),Z.lightsStateVersion=Rt,Z.needsLights&&(It.ambientLightColor.value=$.state.ambient,It.lightProbe.value=$.state.probe,It.sunLights.value=$.state.sun,It.sunLightShadows.value=$.state.sunShadow,It.directionalLights.value=$.state.directional,It.directionalLightShadows.value=$.state.directionalShadow,It.spotLights.value=$.state.spot,It.spotLightShadows.value=$.state.spotShadow,It.rectAreaLights.value=$.state.rectArea,It.ltc_1.value=$.state.rectAreaLTC1,It.ltc_2.value=$.state.rectAreaLTC2,It.pointLights.value=$.state.point,It.pointLightShadows.value=$.state.pointShadow,It.hemisphereLights.value=$.state.hemi,It.sunShadowMatrix.value=$.state.sunShadowMatrix,It.sunShadowCascade.value=$.state.sunShadowCascade,It.directionalShadowMatrix.value=$.state.directionalShadowMatrix,It.spotLightMatrix.value=$.state.spotLightMatrix,It.spotLightMap.value=$.state.spotLightMap,It.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.numLightProbeGrids=Ec(E.state.lightProbeGridArray),Z.currentProgram=Jt,Z.uniformsList=null,Jt}function Wu(w,V,J,Z,$){let vt=At.get(w),Rt=vt.currentProgram.id+","+Z+","+$,_t=vt.programVariants.get(Rt);return _t===void 0?(_t=ys(w,V,J),vt.programVariants.set(Rt,_t)):(vt.currentProgram=_t,vt.uniformsList=null,vt.outputColorSpace=Z,vt.toneMapping=$),_t}function Ac(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=ms.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Tc(w,V){let J=At.get(w);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function qu(w,V,J,Z,$){V.isScene!==!0&&(V=Ze),Ut.resetTextureUnits();let vt=V.fog,Rt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?V.environment:null,_t=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:jt.workingColorSpace,Et=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Lt=L.get(Z.envMap||Rt,Et),Gt=Z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Jt=!!J.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),It=!!J.morphAttributes.position,Kt=!!J.morphAttributes.normal,Ee=!!J.morphAttributes.color,ue=Bn;Z.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ue=R.toneMapping);let le=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ge=le!==void 0?le.length:0,Pt=At.get(Z),$e=E.state.lights;if(Se===!0&&(ke===!0||w!==nt)){let ve=w===nt&&Z.id===W;it.setState(Z,w,ve)}let ie=!1,Ai=!1;Z.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==$e.state.version||$.isBatchedMesh&&Pt.batching===!1||!$.isBatchedMesh&&Pt.batching===!0||$.isBatchedMesh&&Pt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Pt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Pt.instancing===!1||!$.isInstancedMesh&&Pt.instancing===!0||$.isSkinnedMesh&&Pt.skinning===!1||!$.isSkinnedMesh&&Pt.skinning===!0||$.isInstancedMesh&&Pt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Pt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Pt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Pt.instancingMorph===!1&&$.morphTexture!==null||Pt.envMap!==Lt||Z.fog===!0&&Pt.fog!==vt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==Gt||Pt.vertexTangents!==Jt||Pt.morphTargets!==It||Pt.morphNormals!==Kt||Pt.morphColors!==Ee||Pt.morphTargetsCount!==Ge||Pt.numLightProbeGrids!==Ec(E.state.lightProbeGridArray)?ie=!0:(Pt.outputColorSpace!==_t||Pt.toneMapping!==ue)&&(Ai=!0):(ie=!0,Pt.__version=Z.version);let He=Pt.currentProgram;(ie===!0||Ai===!0)&&(He=Ai===!0?Wu(Z,V,$,_t,ue):ys(Z,V,$),z&&Z.isNodeMaterial&&z.onUpdateProgram(Z,He,Pt));let Sr=!1,oi=!1,Ti=!1,te=He.getUniforms(),Oe=Pt.uniforms;if(mt.useProgram(He.program)&&(Sr=!0,oi=!0,Ti=!0),Z.id!==W&&(W=Z.id,oi=!0),Sr||nt!==w){mt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),te.setValue(k,"projectionMatrix",w.projectionMatrix),te.setValue(k,"viewMatrix",w.matrixWorldInverse);let Le=te.map.cameraPosition;Le!==void 0&&Le.setValue(k,cn.setFromMatrixPosition(w.matrixWorld)),he.logarithmicDepthBuffer&&te.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&te.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),nt!==w&&(nt=w,oi=!0,Ti=!0)}if(Pt.needsLights&&($e.state.sunShadowMap.length>0&&te.setValue(k,"sunShadowMap",$e.state.sunShadowMap,Ut),$e.state.directionalShadowMap.length>0&&te.setValue(k,"directionalShadowMap",$e.state.directionalShadowMap,Ut),$e.state.spotShadowMap.length>0&&te.setValue(k,"spotShadowMap",$e.state.spotShadowMap,Ut),$e.state.pointShadowMap.length>0&&te.setValue(k,"pointShadowMap",$e.state.pointShadowMap,Ut)),$.isSkinnedMesh){te.setOptional(k,$,"bindMatrix"),te.setOptional(k,$,"bindMatrixInverse");let ve=$.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),te.setValue(k,"boneTexture",ve.boneTexture,Ut))}$.isBatchedMesh&&(te.setOptional(k,$,"batchingTexture"),te.setValue(k,"batchingTexture",$._matricesTexture,Ut),te.setOptional(k,$,"batchingIdTexture"),te.setValue(k,"batchingIdTexture",$._indirectTexture,Ut),te.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&te.setValue(k,"batchingColorTexture",$._colorsTexture,Ut));let _n=J.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&st.update($,J,He),(oi||Pt.receiveShadow!==$.receiveShadow)&&(Pt.receiveShadow=$.receiveShadow,te.setValue(k,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&V.environment!==null&&(Oe.envMapIntensity.value=V.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=_0()),oi){if(te.setValue(k,"toneMappingExposure",R.toneMappingExposure),Pt.needsLights&&Xu(Oe,Ti),vt&&Z.fog===!0&&pt.refreshFogUniforms(Oe,vt),pt.refreshMaterialUniforms(Oe,Z,St,Nt,E.state.transmissionRenderTarget[w.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){let ve=y,Le=0;for(let Gn of E.state.lightProbeGridArray)Gn.texture!==null&&(ve.textures[Le]=Gn.texture,ve.min[Le]=Gn.boundingBox.min,ve.max[Le]=Gn.boundingBox.max,ve.resolution[Le]=Gn.resolution,Le++);for(let Gn in ve)ve[Gn].length=Le;Oe.probesSH.value=ve.textures,Oe.probesMin.value=ve.min,Oe.probesMax.value=ve.max,Oe.probesResolution.value=ve.resolution}ms.upload(k,Ac(Pt),Oe,Ut)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ms.upload(k,Ac(Pt),Oe,Ut),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&te.setValue(k,"center",$.center),te.setValue(k,"modelViewMatrix",$.modelViewMatrix),te.setValue(k,"normalMatrix",$.normalMatrix),te.setValue(k,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let ve=Z.uniformsGroups;for(let Le=0,Gn=ve.length;Le<Gn;Le++){let Rc=ve[Le];G.update(Rc,He),G.bind(Rc,He)}}return He}function Xu(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Yu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,V,J){let Z=At.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),At.get(w.texture).__webglTexture=V,At.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:J,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let J=At.get(w);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,J=0){Q=w,U=V,X=J;let Z=null,$=!1,vt=!1;if(w){let _t=At.get(w);if(_t.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(k.FRAMEBUFFER,_t.__webglFramebuffer),ot.copy(w.viewport),at.copy(w.scissor),Dt=w.scissorTest,mt.viewport(ot),mt.scissor(at),mt.setScissorTest(Dt),W=-1;return}else if(_t.__webglFramebuffer===void 0)Ut.setupRenderTarget(w);else if(_t.__hasExternalTextures)Ut.rebindTextures(w,At.get(w.texture).__webglTexture,At.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Gt=w.depthTexture;if(_t.__boundDepthTexture!==Gt){if(Gt!==null&&At.has(Gt)&&(w.width!==Gt.image.width||w.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ut.setupDepthRenderbuffer(w)}}let Et=w.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(vt=!0);let Lt=At.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Lt[V])?Z=Lt[V][J]:Z=Lt[V],$=!0):w.samples>0&&Ut.useMultisampledRTT(w)===!1?Z=At.get(w).__webglMultisampledFramebuffer:Array.isArray(Lt)?Z=Lt[J]:Z=Lt,ot.copy(w.viewport),at.copy(w.scissor),Dt=w.scissorTest}else ot.copy(Bt).multiplyScalar(St).floor(),at.copy($t).multiplyScalar(St).floor(),Dt=ne;if(J!==0&&(Z=D),mt.bindFramebuffer(k.FRAMEBUFFER,Z)&&mt.drawBuffers(w,Z),mt.viewport(ot),mt.scissor(at),mt.setScissorTest(Dt),$){let _t=At.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,_t.__webglTexture,J)}else if(vt){let _t=V;for(let Et=0;Et<w.textures.length;Et++){let Lt=At.get(w.textures[Et]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Et,Lt.__webglTexture,J,_t)}}else if(w!==null&&J!==0){let _t=At.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_t.__webglTexture,J)}W=-1};function Cc(w){let V=At.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=he.textureFormatReadable(w.format),V.__typeReadable=he.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,J,Z,$,vt,Rt,_t=0){if(!(w&&w.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt],Array.isArray(Et)&&(Et=Et[0])),Et){mt.bindFramebuffer(k.FRAMEBUFFER,Et);try{let Lt=w.textures[_t],Gt=Lt.format,Jt=Lt.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_t);let It=Cc(Lt);if(It.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Z&&J>=0&&J<=w.height-$&&k.readPixels(V,J,Z,$,C.convert(Gt),C.convert(Jt),vt)}finally{let Lt=Q!==null?At.get(Q).__webglFramebuffer:null;mt.bindFramebuffer(k.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(w,V,J,Z,$,vt,Rt,_t=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Et=Et[Rt],Array.isArray(Et)&&(Et=Et[0])),Et)if(V>=0&&V<=w.width-Z&&J>=0&&J<=w.height-$){mt.bindFramebuffer(k.FRAMEBUFFER,Et);let Lt=w.textures[_t],Gt=Lt.format,Jt=Lt.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_t);let It=Cc(Lt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Kt),k.bufferData(k.PIXEL_PACK_BUFFER,vt.byteLength,k.STREAM_READ),k.readPixels(V,J,Z,$,C.convert(Gt),C.convert(Jt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Ee=Q!==null?At.get(Q).__webglFramebuffer:null;mt.bindFramebuffer(k.FRAMEBUFFER,Ee);let ue=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Bh(k,ue,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Kt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,vt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Kt),k.deleteSync(ue),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,J=0){let Z=Math.pow(2,-J),$=Math.floor(w.image.width*Z),vt=Math.floor(w.image.height*Z),Rt=V!==null?V.x:0,_t=V!==null?V.y:0;Ut.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Rt,_t,$,vt),mt.unbindTexture()},this.copyTextureToTexture=function(w,V,J=null,Z=null,$=0,vt=0){let Rt,_t,Et,Lt,Gt,Jt,It,Kt,Ee,ue=w.isCompressedTexture?w.mipmaps[vt]:w.image;if(J!==null)Rt=J.max.x-J.min.x,_t=J.max.y-J.min.y,Et=J.isBox3?J.max.z-J.min.z:1,Lt=J.min.x,Gt=J.min.y,Jt=J.isBox3?J.min.z:0;else{let te=Math.pow(2,-$);Rt=Math.floor(ue.width*te),_t=Math.floor(ue.height*te),w.isDataArrayTexture?Et=ue.depth:w.isData3DTexture?Et=Math.floor(ue.depth*te):Et=1,Lt=0,Gt=0,Jt=0}Z!==null?(It=Z.x,Kt=Z.y,Ee=Z.z):(It=0,Kt=0,Ee=0);let le=C.convert(V.format),Ge=C.convert(V.type),Pt;V.isData3DTexture?(Ut.setTexture3D(V,0),Pt=k.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ut.setTexture2DArray(V,0),Pt=k.TEXTURE_2D_ARRAY):(Ut.setTexture2D(V,0),Pt=k.TEXTURE_2D),mt.activeTexture(k.TEXTURE0),mt.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),mt.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),mt.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);let $e=mt.getParameter(k.UNPACK_ROW_LENGTH),ie=mt.getParameter(k.UNPACK_IMAGE_HEIGHT),Ai=mt.getParameter(k.UNPACK_SKIP_PIXELS),He=mt.getParameter(k.UNPACK_SKIP_ROWS),Sr=mt.getParameter(k.UNPACK_SKIP_IMAGES);mt.pixelStorei(k.UNPACK_ROW_LENGTH,ue.width),mt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ue.height),mt.pixelStorei(k.UNPACK_SKIP_PIXELS,Lt),mt.pixelStorei(k.UNPACK_SKIP_ROWS,Gt),mt.pixelStorei(k.UNPACK_SKIP_IMAGES,Jt);let oi=w.isDataArrayTexture||w.isData3DTexture,Ti=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let te=At.get(w),Oe=At.get(V),_n=At.get(te.__renderTarget),ve=At.get(Oe.__renderTarget);mt.bindFramebuffer(k.READ_FRAMEBUFFER,_n.__webglFramebuffer),mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Le=0;Le<Et;Le++)oi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,At.get(w).__webglTexture,$,Jt+Le),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,At.get(V).__webglTexture,vt,Ee+Le)),k.blitFramebuffer(Lt,Gt,Lt+Rt,Gt+_t,It,Kt,It+Rt,Kt+_t,k.DEPTH_BUFFER_BIT,k.NEAREST);mt.bindFramebuffer(k.READ_FRAMEBUFFER,null),mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||At.has(w)){let te=At.get(w),Oe=At.get(V);mt.bindFramebuffer(k.READ_FRAMEBUFFER,P),mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,O);for(let _n=0;_n<Et;_n++)oi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,te.__webglTexture,$,Jt+_n):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,te.__webglTexture,$),Ti?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.__webglTexture,vt,Ee+_n):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Oe.__webglTexture,vt),$!==0?k.blitFramebuffer(Lt,Gt,Lt+Rt,Gt+_t,It,Kt,It+Rt,Kt+_t,k.COLOR_BUFFER_BIT,k.NEAREST):Ti?k.copyTexSubImage3D(Pt,vt,It,Kt,Ee+_n,Lt,Gt,Rt,_t):k.copyTexSubImage2D(Pt,vt,It,Kt,Lt,Gt,Rt,_t);mt.bindFramebuffer(k.READ_FRAMEBUFFER,null),mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ti?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Pt,vt,It,Kt,Ee,Rt,_t,Et,le,Ge,ue.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(Pt,vt,It,Kt,Ee,Rt,_t,Et,le,ue.data):k.texSubImage3D(Pt,vt,It,Kt,Ee,Rt,_t,Et,le,Ge,ue):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,vt,It,Kt,Rt,_t,le,Ge,ue.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,vt,It,Kt,ue.width,ue.height,le,ue.data):k.texSubImage2D(k.TEXTURE_2D,vt,It,Kt,Rt,_t,le,Ge,ue);mt.pixelStorei(k.UNPACK_ROW_LENGTH,$e),mt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ie),mt.pixelStorei(k.UNPACK_SKIP_PIXELS,Ai),mt.pixelStorei(k.UNPACK_SKIP_ROWS,He),mt.pixelStorei(k.UNPACK_SKIP_IMAGES,Sr),vt===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&k.generateMipmap(Pt),mt.unbindTexture()},this.initRenderTarget=function(w){At.get(w).__webglFramebuffer===void 0&&Ut.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ut.setTextureCube(w,0):w.isData3DTexture?Ut.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ut.setTexture2DArray(w,0):Ut.setTexture2D(w,0),mt.unbindTexture()},this.resetState=function(){U=0,X=0,Q=null,mt.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var bi=class r{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new A);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new A);let n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new r);let n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],u=n[4],d=n[5],h=n[6],f=n[7],g=n[8],v=i[0],p=i[1],m=i[2],x=i[3],b=i[4],y=i[5],T=i[6],E=i[7],_=i[8];return s[0]=o*v+a*x+c*T,s[1]=o*p+a*b+c*E,s[2]=o*m+a*y+c*_,s[3]=l*v+u*x+d*T,s[4]=l*p+u*b+d*E,s[5]=l*m+u*y+d*_,s[6]=h*v+f*x+g*T,s[7]=h*p+f*b+g*E,s[8]=h*m+f*y+g*_,e}scale(t,e){e===void 0&&(e=new r);let n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new A);let n=3,i=4,s=[],o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3]=t.x,s[7]=t.y,s[11]=t.z;let c=3,l=c,u,d=4,h;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){u=d;do h=d-u,s[h+i*o]+=s[h+i*a];while(--u);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){let f=s[o+i*a]/s[o+i*o];u=d;do h=d-u,s[h+i*a]=h<=o?0:s[h+i*a]-s[h+i*o]*f;while(--u)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new r);let e=3,n=6,i=y0,s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3,c=a,l,u=n,d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=u;do d=u-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){let h=i[s+n*o]/i[s+n*s];l=u;do d=u-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*h;while(--l)}}while(--a);s=2;do{o=s-1;do{let h=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*h;while(--l)}while(o--)}while(--s);s=2;do{let h=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*h;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,u=e*a,d=e*c,h=n*a,f=n*c,g=i*c,v=s*o,p=s*a,m=s*c,x=this.elements;return x[0]=1-(h+g),x[1]=u-m,x[2]=d+p,x[3]=u+m,x[4]=1-(l+g),x[5]=f-v,x[6]=d-p,x[7]=f+v,x[8]=1-(l+h),this}transpose(t){t===void 0&&(t=new r);let e=this.elements,n=t.elements,i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}},y0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],A=class r{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new r);let n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new r(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new r(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new bi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){let s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new r);let e=this.x,n=this.y,i=this.z,s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new r);let n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new r),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new r),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new r),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let i=S0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);let o=M0;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Su),Su.almostEquals(t,e)}clone(){return new r(this.x,this.y,this.z)}};A.ZERO=new A(0,0,0);A.UNIT_X=new A(1,0,0);A.UNIT_Y=new A(0,1,0);A.UNIT_Z=new A(0,0,1);var S0=new A,M0=new A,Su=new A,ln=class r{constructor(t){t===void 0&&(t={}),this.lowerBound=new A,this.upperBound=new A,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){let s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Mu),l=Mu),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new r().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){let l=this.lowerBound,u=this.upperBound;t.copy(l),e.set(u.x,l.y,l.z),n.set(u.x,u.y,l.z),i.set(l.x,u.y,u.z),s.set(u.x,l.y,u.z),o.set(l.x,u.y,l.z),a.set(l.x,l.y,u.z),c.copy(u)}toLocalFrame(t,e){let n=bu,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,u,d);for(let h=0;h!==8;h++){let f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=bu,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,u,d);for(let h=0;h!==8;h++){let f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,u)),Math.max(d,h));return!(g<0||f>g)}},Mu=new A,bu=[new A,new A,new A,new A,new A,new A,new A,new A],wa=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){let s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){let o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},Ea=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}},je=class r{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new A),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=b0,i=w0;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new r);let n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,u=t.w;return e.x=n*u+o*a+i*l-s*c,e.y=i*u+o*c+s*a-n*l,e.z=s*u+o*l+n*c-i*a,e.w=o*u-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new r);let e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);let o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new r),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new A);let n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,u=l*n+a*s-c*i,d=l*i+c*n-o*s,h=l*s+o*i-a*n,f=-o*n-a*i-c*s;return e.x=u*l+f*-o+d*-c-h*-a,e.y=d*l+f*-a+h*-o-u*-c,e.z=h*l+f*-c+u*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s,o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":let u=o*a+c*l;if(u>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){let d=o*o,h=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*h-2*f),i=Math.asin(2*u),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");let s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*u,this.y=s*l*a-c*o*u,this.z=s*o*u+c*l*a,this.w=s*o*a-c*l*u):i==="YXZ"?(this.x=c*o*a+s*l*u,this.y=s*l*a-c*o*u,this.z=s*o*u-c*l*a,this.w=s*o*a+c*l*u):i==="ZXY"?(this.x=c*o*a-s*l*u,this.y=s*l*a+c*o*u,this.z=s*o*u+c*l*a,this.w=s*o*a-c*l*u):i==="ZYX"?(this.x=c*o*a-s*l*u,this.y=s*l*a+c*o*u,this.z=s*o*u-c*l*a,this.w=s*o*a+c*l*u):i==="YZX"?(this.x=c*o*a+s*l*u,this.y=s*l*a+c*o*u,this.z=s*o*u-c*l*a,this.w=s*o*a-c*l*u):i==="XZY"&&(this.x=c*o*a-s*l*u,this.y=s*l*a-c*o*u,this.z=s*o*u+c*l*a,this.w=s*o*a+c*l*u),this}clone(){return new r(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new r);let i=this.x,s=this.y,o=this.z,a=this.w,c=t.x,l=t.y,u=t.z,d=t.w,h,f,g,v,p;return f=i*c+s*l+o*u+a*d,f<0&&(f=-f,c=-c,l=-l,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),g=Math.sin(h),v=Math.sin((1-e)*h)/g,p=Math.sin(e*h)/g):(v=1-e,p=e),n.x=v*i+p*c,n.y=v*s+p*l,n.z=v*o+p*u,n.w=v*a+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new r);let s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(s*d+o*u-a*l),i.y+=h*(o*d+a*c-s*u),i.z+=h*(a*d+s*l-o*c),i.w+=h*(-s*c-o*l-a*u),i}},b0=new A,w0=new A,E0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Ct=class r{constructor(t){t===void 0&&(t={}),this.id=r.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Ct.idCounter=0;Ct.types=E0;var re=class r{constructor(t){t===void 0&&(t={}),this.position=new A,this.quaternion=new je,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return r.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return r.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new A),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new A),n.vsub(t,i),e.conjugate(wu),wu.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new A),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new A),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new A),e.w*=-1,e.vmult(n,i),e.w*=-1,i}},wu=new je,oc=class r extends Ct{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Ct.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let i=new A;for(let s=0;s!==t.length;s++){let o=t[s],a=o.length;for(let c=0;c!==a;c++){let l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);let e=this.faceNormals[t]||new A;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];r.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){let s=new A,o=new A;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){let u=new A,d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),s.vmult(u,u);let v=u.dot(o);v>h&&(h=v,d=g)}let f=[];for(let g=0;g<n.faces[d].length;g++){let v=n.vertices[n.faces[d][g]],p=new A;p.copy(v),s.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){let l=new A,u=new A,d=new A,h=new A,f=new A,g=new A,v=Number.MAX_VALUE,p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],l);let x=p.testSepAxis(l,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(l))}else{let m=a?a.length:p.faces.length;for(let x=0;x<m;x++){let b=a?a[x]:x;l.copy(p.faceNormals[b]),n.vmult(l,l);let y=p.testSepAxis(l,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(l))}}if(t.uniqueAxes)for(let m=0;m!==t.uniqueAxes.length;m++){s.vmult(t.uniqueAxes[m],u);let x=p.testSepAxis(u,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(u))}else{let m=c?c.length:t.faces.length;for(let x=0;x<m;x++){let b=c?c[x]:x;u.copy(t.faceNormals[b]),s.vmult(u,u);let y=p.testSepAxis(u,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(u))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],h);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],f),h.cross(f,g),!g.almostZero()){g.normalize();let b=p.testSepAxis(g,t,e,n,i,s);if(b===!1)return!1;b<v&&(v=b,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){let a=this;r.project(a,t,n,i,tc),r.project(e,t,s,o,ec);let c=tc[0],l=tc[1],u=ec[0],d=ec[1];if(c<d||u<l)return!1;let h=c-d,f=u-l;return h<f?h:f}calculateLocalInertia(t,e){let n=new A,i=new A;this.computeLocalAABB(i,n);let s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){let c=new A,l=new A,u=new A,d=new A,h=new A,f=new A,g=new A,v=new A,p=this,m=[],x=i,b=m,y=-1,T=Number.MAX_VALUE;for(let R=0;R<p.faces.length;R++){c.copy(p.faceNormals[R]),n.vmult(c,c);let F=c.dot(t);F<T&&(T=F,y=R)}if(y<0)return;let E=p.faces[y];E.connectedFaces=[];for(let R=0;R<p.faces.length;R++)for(let F=0;F<p.faces[R].length;F++)E.indexOf(p.faces[R][F])!==-1&&R!==y&&E.connectedFaces.indexOf(R)===-1&&E.connectedFaces.push(R);let _=E.length;for(let R=0;R<_;R++){let F=p.vertices[E[R]],z=p.vertices[E[(R+1)%_]];F.vsub(z,l),u.copy(l),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(F),n.vmult(f,f),e.vadd(f,f);let D=E.connectedFaces[R];g.copy(this.faceNormals[D]);let P=this.getPlaneConstantOfFace(D);v.copy(g),n.vmult(v,v);let O=P-v.dot(e);for(this.clipFaceAgainstPlane(x,b,v,O);x.length;)x.shift();for(;b.length;)x.push(b.shift())}g.copy(this.faceNormals[y]);let M=this.getPlaneConstantOfFace(y);v.copy(g),n.vmult(v,v);let N=M-v.dot(e);for(let R=0;R<x.length;R++){let F=v.dot(x[R])+N;if(F<=s&&(console.log(`clamped: depth=${F} to minDist=${s}`),F=s),F<=o){let z=x[R];if(F<=1e-6){let D={point:z,normal:v,depth:F};a.push(D)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o,a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let u=0;u<a;u++){if(l=t[u],o=n.dot(l)+i,s<0)if(o<0){let d=new A;d.copy(l),e.push(d)}else{let d=new A;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){let d=new A;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new A);let n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new A);let n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){let s=this.vertices,o,a,c,l,u,d,h=new A;for(let f=0;f<s.length;f++){h.copy(s[f]),e.vmult(h,h),t.vadd(h,h);let g=h;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),i.set(l,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new A);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){let o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){let o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){let o=i[s];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new A;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=i[a],l=e[n[a][0]],u=new A;t.vsub(l,u);let d=c.dot(u),h=new A;o.vsub(l,h);let f=c.dot(h);if(d<0&&f>0||d>0&&f<0)return!1}return s?1:-1}static project(t,e,n,i,s){let o=t.vertices.length,a=T0,c=0,l=0,u=C0,d=t.vertices;u.setZero(),re.vectorToLocalFrame(n,i,e,a),re.pointToLocalFrame(n,i,u,u);let h=u.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){let g=d[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=h,c-=h,l>c){let f=l;l=c,c=f}s[0]=c,s[1]=l}},tc=[],ec=[],A0=new A,T0=new A,C0=new A,wi=class r extends Ct{constructor(t){super({type:Ct.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=A,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new oc({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new A),r.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){let n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Mi.set(s[o][0],s[o][1],s[o][2]),e.vmult(Mi,Mi),t.vadd(Mi,Mi),n(Mi.x,Mi.y,Mi.z)}calculateWorldAABB(t,e,n,i){let s=this.halfExtents;zn[0].set(s.x,s.y,s.z),zn[1].set(-s.x,s.y,s.z),zn[2].set(-s.x,-s.y,s.z),zn[3].set(-s.x,-s.y,-s.z),zn[4].set(s.x,-s.y,-s.z),zn[5].set(s.x,s.y,-s.z),zn[6].set(-s.x,s.y,-s.z),zn[7].set(s.x,-s.y,s.z);let o=zn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){let c=zn[a];e.vmult(c,c),t.vadd(c,c);let l=c.x,u=c.y,d=c.z;l>i.x&&(i.x=l),u>i.y&&(i.y=u),d>i.z&&(i.z=d),l<n.x&&(n.x=l),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}},Mi=new A,zn=[new A,new A,new A,new A,new A,new A,new A,new A],xc={DYNAMIC:1,STATIC:2,KINEMATIC:4},_c={AWAKE:0,SLEEPY:1,SLEEPING:2},Ht=class r extends Ea{constructor(t){t===void 0&&(t={}),super(),this.id=r.idCounter++,this.index=-1,this.world=null,this.vlambda=new A,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new A,this.previousPosition=new A,this.interpolatedPosition=new A,this.initPosition=new A,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new A,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new A,this.force=new A;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?r.STATIC:r.DYNAMIC,typeof t.type==typeof r.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=r.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new A,this.quaternion=new je,this.initQuaternion=new je,this.previousQuaternion=new je,this.interpolatedQuaternion=new je,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new A,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new A,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new A,this.invInertia=new A,this.invInertiaWorld=new bi,this.invMassSolve=0,this.invInertiaSolve=new A,this.invInertiaWorldSolve=new bi,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new A(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new A(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new ln,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new A,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=r.AWAKE,this.wakeUpAfterNarrowphase=!1,t===r.SLEEPING&&this.dispatchEvent(r.wakeupEvent)}sleep(){this.sleepState=r.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===r.AWAKE&&n<i?(this.sleepState=r.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(r.sleepyEvent)):e===r.SLEEPY&&n>i?this.wakeUp():e===r.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(r.sleepEvent))}}updateSolveMassProperties(){this.sleepState===r.SLEEPING||this.type===r.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new A),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new A),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new A),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new A),this.quaternion.vmult(t,e),e}addShape(t,e,n){let i=new A,s=new je;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,i=0;for(let s=0;s!==n;s++){let o=t[s];o.updateBoundingSphereRadius();let a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=R0,o=I0,a=this.quaternion,c=this.aabb,l=P0;for(let u=0;u!==i;u++){let d=t[u];a.vmult(e[u],s),s.vadd(this.position,s),a.mult(n[u],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),u===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=L0,i=N0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new A),this.type!==r.DYNAMIC)return;this.sleepState===r.SLEEPING&&this.wakeUp();let n=D0;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new A),this.type!==r.DYNAMIC)return;let n=B0,i=U0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===r.DYNAMIC&&(this.sleepState===r.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new A),this.type!==r.DYNAMIC)return;this.sleepState===r.SLEEPING&&this.wakeUp();let n=e,i=O0;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let s=z0;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new A),this.type!==r.DYNAMIC)return;let n=V0,i=k0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){let t=G0;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),wi.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new A;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===r.DYNAMIC||this.type===r.KINEMATIC)||this.sleepState===r.SLEEPING)return;let i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*t;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;let g=d.elements,v=this.angularFactor,p=c.x*v.x,m=c.y*v.y,x=c.z*v.z;s.x+=t*(g[0]*p+g[1]*m+g[2]*x),s.y+=t*(g[3]*p+g[4]*m+g[5]*x),s.z+=t*(g[6]*p+g[7]*m+g[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};Ht.idCounter=0;Ht.COLLIDE_EVENT_NAME="collide";Ht.DYNAMIC=xc.DYNAMIC;Ht.STATIC=xc.STATIC;Ht.KINEMATIC=xc.KINEMATIC;Ht.AWAKE=_c.AWAKE;Ht.SLEEPY=_c.SLEEPY;Ht.SLEEPING=_c.SLEEPING;Ht.wakeupEvent={type:"wakeup"};Ht.sleepyEvent={type:"sleepy"};Ht.sleepEvent={type:"sleep"};var R0=new A,I0=new je,P0=new ln,L0=new bi,N0=new bi,F0=new bi,D0=new A,B0=new A,U0=new A,O0=new A,z0=new A,V0=new A,k0=new A,G0=new A,ac=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Ht.STATIC)!==0||t.sleepState===Ht.SLEEPING)&&((e.type&Ht.STATIC)!==0||e.sleepState===Ht.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){let s=H0;e.position.vsub(t.position,s);let o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){let n=W0,i=q0,s=X0,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let c=i[a].id,l=s[a].id,u=c<l?`${c},${l}`:`${l},${c}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new A;t.position.vsub(e.position,n);let i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},H0=new A;new A;new je;new A;var W0={keys:[]},q0=[],X0=[];new A;var pM=new A;new A;var lc=class extends ac{constructor(){super()}collisionPairs(t,e,n){let i=t.bodies,s=i.length,o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){let s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}},vs=class{constructor(){this.rayFromWorld=new A,this.rayToWorld=new A,this.hitNormalWorld=new A,this.hitPointWorld=new A,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}},Bu,Uu,Ou,zu,Vu,ku,Gu,vc={CLOSEST:1,ANY:2,ALL:4};Bu=Ct.types.SPHERE;Uu=Ct.types.PLANE;Ou=Ct.types.BOX;zu=Ct.types.CYLINDER;Vu=Ct.types.CONVEXPOLYHEDRON;ku=Ct.types.HEIGHTFIELD;Gu=Ct.types.TRIMESH;var gn=class r{get[Bu](){return this._intersectSphere}get[Uu](){return this._intersectPlane}get[Ou](){return this._intersectBox}get[zu](){return this._intersectConvex}get[Vu](){return this._intersectConvex}get[ku](){return this._intersectHeightfield}get[Gu](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new A),e===void 0&&(e=new A),this.from=t.clone(),this.to=e.clone(),this.direction=new A,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=r.ANY,this.result=new vs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||r.ANY,this.result=e.result||new vs,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Eu),nc.length=0,t.broadphase.aabbQuery(t,Eu,nc),this.intersectBodies(nc),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=Y0,s=Z0;for(let o=0,a=t.shapes.length;o<a;o++){let c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){let s=this.from;if(hx(s,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){let o=this.from,a=this.to,c=this.direction,l=new A(0,0,1);e.vmult(l,l);let u=new A;o.vsub(n,u);let d=u.dot(l);a.vsub(n,u);let h=u.dot(l);if(d*h>0||o.distanceTo(a)<d)return;let f=l.dot(c);if(Math.abs(f)<this.precision)return;let g=new A,v=new A,p=new A;o.vsub(n,g);let m=-l.dot(g)/f;c.scale(m,v),o.vadd(v,p),this.reportIntersection(l,p,s,i,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;let o=$0;o.from.copy(this.from),o.to.copy(this.to),re.pointToLocalFrame(n,e,o.from,o.from),re.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=J0,c,l,u,d;c=l=0,u=d=t.data.length-1;let h=new ln;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<u;f++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),re.pointToWorldFrame(n,e,t.pillarOffset,va),this._intersectConvex(t.pillarConvex,e,va,i,s,Au),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),re.pointToWorldFrame(n,e,t.pillarOffset,va),this._intersectConvex(t.pillarConvex,e,va,i,s,Au)}}}_intersectSphere(t,e,n,i,s){let o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,h=u**2-4*l*d,f=K0,g=j0;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{let v=(-u-Math.sqrt(h))/(2*l),p=(-u+Math.sqrt(h))/(2*l);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){let a=Q0,c=Tu,l=o&&o.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,f=this.direction,g=this.from,v=this.to,p=g.distanceTo(v),m=l?l.length:u.length,x=this.result;for(let b=0;!x.shouldStop&&b<m;b++){let y=l?l[b]:b,T=u[y],E=h[y],_=e,M=n;c.copy(d[T[0]]),_.vmult(c,c),c.vadd(M,c),c.vsub(g,c),_.vmult(E,a);let N=f.dot(a);if(Math.abs(N)<this.precision)continue;let R=a.dot(c)/N;if(!(R<0)){f.scale(R,en),en.vadd(g,en),Tn.copy(d[T[0]]),_.vmult(Tn,Tn),M.vadd(Tn,Tn);for(let F=1;!x.shouldStop&&F<T.length-1;F++){Vn.copy(d[T[F]]),kn.copy(d[T[F+1]]),_.vmult(Vn,Vn),_.vmult(kn,kn),M.vadd(Vn,Vn),M.vadd(kn,kn);let z=en.distanceTo(g);!(r.pointInTriangle(en,Tn,Vn,kn)||r.pointInTriangle(en,Vn,Tn,kn))||z>p||this.reportIntersection(a,en,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){let a=nx,c=lx,l=cx,u=Tu,d=ix,h=sx,f=rx,g=ax,v=ox,p=t.indices;t.vertices;let m=this.from,x=this.to,b=this.direction;l.position.copy(n),l.quaternion.copy(e),re.vectorToLocalFrame(n,e,b,d),re.pointToLocalFrame(n,e,m,h),re.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,d),d.normalize();let y=h.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let T=0,E=c.length;!this.result.shouldStop&&T!==E;T++){let _=c[T];t.getNormal(_,a),t.getVertex(p[_*3],Tn),Tn.vsub(h,u);let M=d.dot(a),N=a.dot(u)/M;if(N<0)continue;d.scale(N,en),en.vadd(h,en),t.getVertex(p[_*3+1],Vn),t.getVertex(p[_*3+2],kn);let R=en.distanceSquared(h);!(r.pointInTriangle(en,Vn,Tn,kn)||r.pointInTriangle(en,Tn,Vn,kn))||R>y||(re.vectorToWorldFrame(e,a,v),re.pointToWorldFrame(n,e,en,g),this.reportIntersection(v,g,s,i,_))}c.length=0}reportIntersection(t,e,n,i,s){let o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case r.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case r.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case r.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,zi),n.vsub(e,dr),t.vsub(e,ic);let s=zi.dot(zi),o=zi.dot(dr),a=zi.dot(ic),c=dr.dot(dr),l=dr.dot(ic),u,d;return(u=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&u+d<s*c-o*o}};gn.CLOSEST=vc.CLOSEST;gn.ANY=vc.ANY;gn.ALL=vc.ALL;var Eu=new ln,nc=[],dr=new A,ic=new A,Y0=new A,Z0=new je,en=new A,Tn=new A,Vn=new A,kn=new A;new A;new vs;var Au={faceList:[0]},va=new A,$0=new gn,J0=[],K0=new A,j0=new A,Q0=new A,tx=new A,ex=new A,Tu=new A,nx=new A,ix=new A,sx=new A,rx=new A,ox=new A,ax=new A;new ln;var lx=[],cx=new re,zi=new A,ya=new A;function hx(r,t,e){e.vsub(r,zi);let n=zi.dot(t);return t.scale(n,ya),ya.vadd(r,ya),e.distanceTo(ya)}var Aa=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},cc=class r{constructor(t,e,n){n===void 0&&(n={}),n=Aa.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=r.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};cc.idCounter=0;var Ta=class{constructor(){this.spatial=new A,this.rotational=new A}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},gr=class r{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=r.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ta,this.jacobianElementB=new Ta,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){let i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,u=i.invMassSolve;return s.scale(l,Cu),a.scale(u,Ru),n.invInertiaWorldSolve.vmult(o,Iu),i.invInertiaWorldSolve.vmult(c,Pu),t.multiplyVectors(Cu,Iu)+e.multiplyVectors(Ru,Pu)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve,l=s+o;return a.vmult(t.rotational,Sa),l+=Sa.dot(t.rotational),c.vmult(e.rotational,Sa),l+=Sa.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=ux;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};gr.idCounter=0;var Cu=new A,Ru=new A,Iu=new A,Pu=new A,Sa=new A,ux=new A,hc=class extends gr{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new A,this.rj=new A,this.ni=new A}computeB(t){let e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=dx,l=fx,u=i.velocity,d=i.angularVelocity;i.force,i.torque;let h=s.velocity,f=s.angularVelocity;s.force,s.torque;let g=px,v=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;o.cross(m,c),a.cross(m,l),m.negate(v.spatial),c.negate(v.rotational),p.spatial.copy(m),p.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);let x=m.dot(g),b=this.restitution+1,y=b*h.dot(m)-b*u.dot(m)+f.dot(l)-d.dot(c),T=this.computeGiMf();return-x*e-y*n-t*T}getImpactVelocityAlongNormal(){let t=mx,e=gx,n=xx,i=_x,s=vx;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}},dx=new A,fx=new A,px=new A,mx=new A,gx=new A,xx=new A,_x=new A,vx=new A;var mM=new A,gM=new A;var xM=new A,_M=new A;new A;new A;var vM=new A,yM=new A;var SM=new A,MM=new A,Ca=class extends gr{constructor(t,e,n){super(t,e,-n,n),this.ri=new A,this.rj=new A,this.t=new A}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,s=yx,o=Sx,a=this.t;n.cross(a,s),i.cross(a,o);let c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);let u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}},yx=new A,Sx=new A,Ra=class r{constructor(t,e,n){n=Aa.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=r.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};Ra.idCounter=0;var Ia=class r{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=r.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};Ia.idCounter=0;var bM=new A,wM=new A,EM=new A,AM=new A,TM=new A,CM=new A,RM=new A,IM=new A,PM=new A,LM=new A,NM=new A;var FM=new A,DM=new A;new A;new A;new A;var BM=new A,UM=new A,OM=new A;new gn;new A;var zM=new A,VM=new A,kM=[new A(1,0,0),new A(0,1,0),new A(0,0,1)],GM=new A;var HM=new A,WM=new A,qM=new A;var XM=new A,YM=new A,ZM=new A,$M=new A;var JM=new A,KM=new A,jM=new A;var Pa=class extends Ct{constructor(t){if(super({type:Ct.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new A);let n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){let s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){let c=o[a];n[c]=t[c]-s,i[c]=t[c]+s}}};var QM=new A,tb=new A;var eb=new A,nb=new A,ib=new A,sb=new A,rb=new A,ob=new A,ab=new A;var La=class extends Ct{constructor(){super({type:Ct.types.PLANE}),this.worldNormal=new A,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){let e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new A),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){ei.set(0,0,1),e.vmult(ei,ei);let s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),ei.x===1?i.x=t.x:ei.x===-1&&(n.x=t.x),ei.y===1?i.y=t.y:ei.y===-1&&(n.y=t.y),ei.z===1?i.z=t.z:ei.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}},ei=new A;var lb=new A,cb=new A,hb=new A,ub=new A,db=new A,fb=new A,pb=new A,mb=new A,gb=new A;var xb=new A,_b=new ln;var vb=new A,yb=new ln,Sb=new A,Mb=new A,bb=new A,wb=new A,Eb=new A,Ab=new A,Tb=new A,Cb=new ln,Rb=new A,Ib=new re,Pb=new ln,uc=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},dc=class extends uc{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,u=t,d,h,f,g,v,p;if(a!==0)for(let y=0;y!==l;y++)c[y].updateSolveMassProperties();let m=bx,x=wx,b=Mx;m.length=a,x.length=a,b.length=a;for(let y=0;y!==a;y++){let T=o[y];b[y]=0,x[y]=T.computeB(u),m[y]=1/T.computeC()}if(a!==0){for(let E=0;E!==l;E++){let _=c[E],M=_.vlambda,N=_.wlambda;M.set(0,0,0),N.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let E=0;E!==a;E++){let _=o[E];d=x[E],h=m[E],p=b[E],v=_.computeGWlambda(),f=h*(d-v-_.eps*p),p+f<_.minForce?f=_.minForce-p:p+f>_.maxForce&&(f=_.maxForce-p),b[E]+=f,g+=f>0?f:-f,_.addToWlambda(f)}if(g*g<s)break}for(let E=0;E!==l;E++){let _=c[E],M=_.velocity,N=_.angularVelocity;_.vlambda.vmul(_.linearFactor,_.vlambda),M.vadd(_.vlambda,M),_.wlambda.vmul(_.angularFactor,_.wlambda),N.vadd(_.wlambda,N)}let y=o.length,T=1/u;for(;y--;)o[y].multiplier=b[y]*T}return n}},Mx=[],bx=[],wx=[];var Lb=Ht.STATIC;var fc=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},pc=class extends fc{constructor(){super(...arguments),this.type=A}constructObject(){return new A}},fe={sphereSphere:Ct.types.SPHERE,spherePlane:Ct.types.SPHERE|Ct.types.PLANE,boxBox:Ct.types.BOX|Ct.types.BOX,sphereBox:Ct.types.SPHERE|Ct.types.BOX,planeBox:Ct.types.PLANE|Ct.types.BOX,convexConvex:Ct.types.CONVEXPOLYHEDRON,sphereConvex:Ct.types.SPHERE|Ct.types.CONVEXPOLYHEDRON,planeConvex:Ct.types.PLANE|Ct.types.CONVEXPOLYHEDRON,boxConvex:Ct.types.BOX|Ct.types.CONVEXPOLYHEDRON,sphereHeightfield:Ct.types.SPHERE|Ct.types.HEIGHTFIELD,boxHeightfield:Ct.types.BOX|Ct.types.HEIGHTFIELD,convexHeightfield:Ct.types.CONVEXPOLYHEDRON|Ct.types.HEIGHTFIELD,sphereParticle:Ct.types.PARTICLE|Ct.types.SPHERE,planeParticle:Ct.types.PLANE|Ct.types.PARTICLE,boxParticle:Ct.types.BOX|Ct.types.PARTICLE,convexParticle:Ct.types.PARTICLE|Ct.types.CONVEXPOLYHEDRON,cylinderCylinder:Ct.types.CYLINDER,sphereCylinder:Ct.types.SPHERE|Ct.types.CYLINDER,planeCylinder:Ct.types.PLANE|Ct.types.CYLINDER,boxCylinder:Ct.types.BOX|Ct.types.CYLINDER,convexCylinder:Ct.types.CONVEXPOLYHEDRON|Ct.types.CYLINDER,heightfieldCylinder:Ct.types.HEIGHTFIELD|Ct.types.CYLINDER,particleCylinder:Ct.types.PARTICLE|Ct.types.CYLINDER,sphereTrimesh:Ct.types.SPHERE|Ct.types.TRIMESH,planeTrimesh:Ct.types.PLANE|Ct.types.TRIMESH},mc=class{get[fe.sphereSphere](){return this.sphereSphere}get[fe.spherePlane](){return this.spherePlane}get[fe.boxBox](){return this.boxBox}get[fe.sphereBox](){return this.sphereBox}get[fe.planeBox](){return this.planeBox}get[fe.convexConvex](){return this.convexConvex}get[fe.sphereConvex](){return this.sphereConvex}get[fe.planeConvex](){return this.planeConvex}get[fe.boxConvex](){return this.boxConvex}get[fe.sphereHeightfield](){return this.sphereHeightfield}get[fe.boxHeightfield](){return this.boxHeightfield}get[fe.convexHeightfield](){return this.convexHeightfield}get[fe.sphereParticle](){return this.sphereParticle}get[fe.planeParticle](){return this.planeParticle}get[fe.boxParticle](){return this.boxParticle}get[fe.convexParticle](){return this.convexParticle}get[fe.cylinderCylinder](){return this.convexConvex}get[fe.sphereCylinder](){return this.sphereConvex}get[fe.planeCylinder](){return this.planeConvex}get[fe.boxCylinder](){return this.boxConvex}get[fe.convexCylinder](){return this.convexConvex}get[fe.heightfieldCylinder](){return this.heightfieldCylinder}get[fe.particleCylinder](){return this.particleCylinder}get[fe.sphereTrimesh](){return this.sphereTrimesh}get[fe.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new pc,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new hc(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,u=i.material||e.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(a.restitution=l.restitution*u.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){let n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,u=s.material||n.material,d=o.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(l=u.friction*d.friction),l>0){let h=l*(a.frictionGravity||a.gravity).length(),f=n.invMass+i.invMass;f>0&&(f=1/f);let g=this.frictionEquationPool,v=g.length?g.pop():new Ca(n,i,h*f),p=g.length?g.pop():new Ca(n,i,h*f);return v.bi=p.bi=n,v.bj=p.bj=i,v.minForce=p.minForce=-h*f,v.maxForce=p.maxForce=h*f,v.ri.copy(t.ri),v.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(v.t,p.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),p.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=p.enabled=t.enabled,e.push(v,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Oi.setZero(),xs.setZero(),_s.setZero();let s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Oi.vadd(e.ni,Oi),xs.vadd(e.ri,xs),_s.vadd(e.rj,_s)):(Oi.vsub(e.ni,Oi),xs.vadd(e.rj,xs),_s.vadd(e.ri,_s));let o=1/t;xs.scale(o,n.ri),_s.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Oi.normalize(),Oi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let c=Tx,l=Cx,u=Ex,d=Ax;for(let h=0,f=t.length;h!==f;h++){let g=t[h],v=e[h],p=null;g.material&&v.material&&(p=n.getContactMaterial(g.material,v.material)||null);let m=g.type&Ht.KINEMATIC&&v.type&Ht.STATIC||g.type&Ht.STATIC&&v.type&Ht.KINEMATIC||g.type&Ht.KINEMATIC&&v.type&Ht.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],c),g.quaternion.vmult(g.shapeOffsets[x],u),u.vadd(g.position,u);let b=g.shapes[x];for(let y=0;y<v.shapes.length;y++){v.quaternion.mult(v.shapeOrientations[y],l),v.quaternion.vmult(v.shapeOffsets[y],d),d.vadd(v.position,d);let T=v.shapes[y];if(!(b.collisionFilterMask&T.collisionFilterGroup&&T.collisionFilterMask&b.collisionFilterGroup)||u.distanceTo(d)>b.boundingSphereRadius+T.boundingSphereRadius)continue;let E=null;b.material&&T.material&&(E=n.getContactMaterial(b.material,T.material)||null),this.currentContactMaterial=E||p||n.defaultContactMaterial;let _=b.type|T.type,M=this[_];if(M){let N=!1;b.type<T.type?N=M.call(this,b,T,u,d,c,l,g,v,b,T,m):N=M.call(this,T,b,d,u,l,c,v,g,b,T,m),N&&m&&(n.shapeOverlapKeeper.set(b.id,T.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;let h=this.createContactEquation(a,c,t,e,l,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,u,d){let h=this.createContactEquation(a,c,t,e,l,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,Ma),h.ni.scale(h.ni.dot(Ma),Lu),Ma.vsub(Lu,h.rj),-Ma.dot(h.ni)<=t.radius){if(d)return!0;let f=h.ri,g=h.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(c.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,u,d){let h=this.v3pool,f=t_;n.vsub(i,ba),e.getSideNormals(f,o);let g=t.radius,v=!1,p=n_,m=i_,x=s_,b=null,y=0,T=0,E=0,_=null;for(let U=0,X=f.length;U!==X&&v===!1;U++){let Q=Kx;Q.copy(f[U]);let W=Q.length();Q.normalize();let nt=ba.dot(Q);if(nt<W+g&&nt>0){let ot=jx,at=Qx;ot.copy(f[(U+1)%3]),at.copy(f[(U+2)%3]);let Dt=ot.length(),et=at.length();ot.normalize(),at.normalize();let yt=ba.dot(ot),Tt=ba.dot(at);if(yt<Dt&&yt>-Dt&&Tt<et&&Tt>-et){let Nt=Math.abs(nt-W-g);if((_===null||Nt<_)&&(_=Nt,T=yt,E=Tt,b=W,p.copy(Q),m.copy(ot),x.copy(at),y++,d))return!0}}}if(y){v=!0;let U=this.createContactEquation(a,c,t,e,l,u);p.scale(-g,U.ri),U.ni.copy(p),U.ni.negate(U.ni),p.scale(b,p),m.scale(T,m),p.vadd(m,p),x.scale(E,x),p.vadd(x,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let M=h.get(),N=e_;for(let U=0;U!==2&&!v;U++)for(let X=0;X!==2&&!v;X++)for(let Q=0;Q!==2&&!v;Q++)if(M.set(0,0,0),U?M.vadd(f[0],M):M.vsub(f[0],M),X?M.vadd(f[1],M):M.vsub(f[1],M),Q?M.vadd(f[2],M):M.vsub(f[2],M),i.vadd(M,N),N.vsub(n,N),N.lengthSquared()<g*g){if(d)return!0;v=!0;let W=this.createContactEquation(a,c,t,e,l,u);W.ri.copy(N),W.ri.normalize(),W.ni.copy(W.ri),W.ri.scale(g,W.ri),W.rj.copy(M),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(c.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}h.release(M),M=null;let R=h.get(),F=h.get(),z=h.get(),D=h.get(),P=h.get(),O=f.length;for(let U=0;U!==O&&!v;U++)for(let X=0;X!==O&&!v;X++)if(U%3!==X%3){f[X].cross(f[U],R),R.normalize(),f[U].vadd(f[X],F),z.copy(n),z.vsub(F,z),z.vsub(i,z);let Q=z.dot(R);R.scale(Q,D);let W=0;for(;W===U%3||W===X%3;)W++;P.copy(n),P.vsub(D,P),P.vsub(F,P),P.vsub(i,P);let nt=Math.abs(Q),ot=P.length();if(nt<f[W].length()&&ot<g){if(d)return!0;v=!0;let at=this.createContactEquation(a,c,t,e,l,u);F.vadd(D,at.rj),at.rj.copy(at.rj),P.negate(at.ni),at.ni.normalize(),at.ri.copy(at.rj),at.ri.vadd(i,at.ri),at.ri.vsub(n,at.ri),at.ri.normalize(),at.ri.scale(g,at.ri),at.ri.vadd(n,at.ri),at.ri.vsub(a.position,at.ri),at.rj.vadd(i,at.rj),at.rj.vsub(c.position,at.rj),this.result.push(at),this.createFrictionEquationsFromContact(at,this.frictionResult)}}h.release(R,F,z,D,P)}planeBox(t,e,n,i,s,o,a,c,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,u,d,h,f){let g=v_;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,h,f)){let v=[],p=y_;t.clipAgainstHull(n,s,e,i,o,g,-100,100,v);let m=0;for(let x=0;x!==v.length;x++){if(d)return!0;let b=this.createContactEquation(a,c,t,e,l,u),y=b.ri,T=b.rj;g.negate(b.ni),v[x].normal.negate(p),p.scale(v[x].depth,p),v[x].point.vadd(p,y),T.copy(v[x].point),y.vsub(n,y),T.vsub(i,T),y.vadd(n,y),y.vsub(a.position,y),T.vadd(i,T),T.vsub(c.position,T),this.result.push(b),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(t,e,n,i,s,o,a,c,l,u,d){let h=this.v3pool;n.vsub(i,r_);let f=e.faceNormals,g=e.faces,v=e.vertices,p=t.radius,m=!1;for(let x=0;x!==v.length;x++){let b=v[x],y=c_;o.vmult(b,y),i.vadd(y,y);let T=l_;if(y.vsub(n,T),T.lengthSquared()<p*p){if(d)return!0;m=!0;let E=this.createContactEquation(a,c,t,e,l,u);E.ri.copy(T),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(p,E.ri),y.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(c.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let x=0,b=g.length;x!==b&&m===!1;x++){let y=f[x],T=g[x],E=h_;o.vmult(y,E);let _=u_;o.vmult(v[T[0]],_),_.vadd(i,_);let M=d_;E.scale(-p,M),n.vadd(M,M);let N=f_;M.vsub(_,N);let R=N.dot(E),F=p_;if(n.vsub(_,F),R<0&&F.dot(E)>0){let z=[];for(let D=0,P=T.length;D!==P;D++){let O=h.get();o.vmult(v[T[D]],O),i.vadd(O,O),z.push(O)}if(Jx(z,E,n)){if(d)return!0;m=!0;let D=this.createContactEquation(a,c,t,e,l,u);E.scale(-p,D.ri),E.negate(D.ni);let P=h.get();E.scale(-R,P);let O=h.get();E.scale(-p,O),n.vsub(i,D.rj),D.rj.vadd(O,D.rj),D.rj.vadd(P,D.rj),D.rj.vadd(i,D.rj),D.rj.vsub(c.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),h.release(P),h.release(O),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let U=0,X=z.length;U!==X;U++)h.release(z[U]);return}else for(let D=0;D!==T.length;D++){let P=h.get(),O=h.get();o.vmult(v[T[(D+1)%T.length]],P),o.vmult(v[T[(D+2)%T.length]],O),i.vadd(P,P),i.vadd(O,O);let U=o_;O.vsub(P,U);let X=a_;U.unit(X);let Q=h.get(),W=h.get();n.vsub(P,W);let nt=W.dot(X);X.scale(nt,Q),Q.vadd(P,Q);let ot=h.get();if(Q.vsub(n,ot),nt>0&&nt*nt<U.lengthSquared()&&ot.lengthSquared()<p*p){if(d)return!0;let at=this.createContactEquation(a,c,t,e,l,u);Q.vsub(i,at.rj),Q.vsub(n,at.ni),at.ni.normalize(),at.ni.scale(p,at.ri),at.rj.vadd(i,at.rj),at.rj.vsub(c.position,at.rj),at.ri.vadd(n,at.ri),at.ri.vsub(a.position,at.ri),this.result.push(at),this.createFrictionEquationsFromContact(at,this.frictionResult);for(let Dt=0,et=z.length;Dt!==et;Dt++)h.release(z[Dt]);h.release(P),h.release(O),h.release(Q),h.release(ot),h.release(W);return}h.release(P),h.release(O),h.release(Q),h.release(ot),h.release(W)}for(let D=0,P=z.length;D!==P;D++)h.release(z[D])}}}planeConvex(t,e,n,i,s,o,a,c,l,u,d){let h=m_,f=g_;f.set(0,0,1),s.vmult(f,f);let g=0,v=x_;for(let p=0;p!==e.vertices.length;p++)if(h.copy(e.vertices[p]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,v),f.dot(v)<=0){if(d)return!0;let x=this.createContactEquation(a,c,t,e,l,u),b=__;f.scale(f.dot(v),b),h.vsub(b,b),b.vsub(n,x.ri),x.ni.copy(f),h.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(c.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,u,d){let h=e.data,f=t.radius,g=e.elementSize,v=L_,p=P_;re.pointToLocalFrame(i,o,n,p);let m=Math.floor((p.x-f)/g)-1,x=Math.ceil((p.x+f)/g)+1,b=Math.floor((p.y-f)/g)-1,y=Math.ceil((p.y+f)/g)+1;if(x<0||y<0||m>h.length||b>h[0].length)return;m<0&&(m=0),x<0&&(x=0),b<0&&(b=0),y<0&&(y=0),m>=h.length&&(m=h.length-1),x>=h.length&&(x=h.length-1),y>=h[0].length&&(y=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);let T=[];e.getRectMinMax(m,b,x,y,T);let E=T[0],_=T[1];if(p.z-f>_||p.z+f<E)return;let M=this.result;for(let N=m;N<x;N++)for(let R=b;R<y;R++){let F=M.length,z=!1;if(e.getConvexTrianglePillar(N,R,!1),re.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&z||(e.getConvexTrianglePillar(N,R,!0),re.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&z))return!0;if(M.length-F>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,u,d){let h=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=R_,p=I_,m=C_;re.pointToLocalFrame(i,o,n,m);let x=Math.floor((m.x-g)/f)-1,b=Math.ceil((m.x+g)/f)+1,y=Math.floor((m.y-g)/f)-1,T=Math.ceil((m.y+g)/f)+1;if(b<0||T<0||x>h.length||y>h[0].length)return;x<0&&(x=0),b<0&&(b=0),y<0&&(y=0),T<0&&(T=0),x>=h.length&&(x=h.length-1),b>=h.length&&(b=h.length-1),T>=h[0].length&&(T=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);let E=[];e.getRectMinMax(x,y,b,T,E);let _=E[0],M=E[1];if(!(m.z-g>M||m.z+g<_))for(let N=x;N<b;N++)for(let R=y;R<T;R++){let F=!1;if(e.getConvexTrianglePillar(N,R,!1),re.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,p,null)),d&&F||(e.getConvexTrianglePillar(N,R,!0),re.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,p,null)),d&&F))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,u,d){let h=w_;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;let g=this.createContactEquation(c,a,e,t,l,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,u,d){let h=S_;h.set(0,0,1),a.quaternion.vmult(h,h);let f=M_;if(i.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;let v=this.createContactEquation(c,a,e,t,l,u);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);let p=b_;h.scale(h.dot(i),p),i.vsub(p,p),v.rj.copy(p),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,u,d){let h=-1,f=A_,g=T_,v=null,p=E_;if(p.copy(i),p.vsub(n,p),s.conjugate(Nu),Nu.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let m=0,x=t.faces.length;m!==x;m++){let b=[t.worldVertices[t.faces[m][0]]],y=t.worldFaceNormals[m];i.vsub(b[0],Fu);let T=-y.dot(Fu);if(v===null||Math.abs(T)<Math.abs(v)){if(d)return!0;v=T,h=m,f.copy(y)}}if(h!==-1){let m=this.createContactEquation(c,a,e,t,l,u);f.scale(v,g),g.vadd(i,g),g.vsub(n,g),m.rj.copy(g),f.negate(m.ni),m.ri.set(0,0,0);let x=m.ri,b=m.rj;x.vadd(i,x),x.vsub(c.position,x),b.vadd(n,b),b.vsub(a.position,b),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,u,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,u,d)}particleCylinder(t,e,n,i,s,o,a,c,l,u,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,u,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,u,d){let h=Bx,f=Ux,g=Ox,v=zx,p=Vx,m=kx,x=qx,b=Dx,y=Nx,T=Xx;re.pointToLocalFrame(i,o,n,p);let E=t.radius;x.lowerBound.set(p.x-E,p.y-E,p.z-E),x.upperBound.set(p.x+E,p.y+E,p.z+E),e.getTrianglesInAABB(x,T);let _=Fx,M=t.radius*t.radius;for(let D=0;D<T.length;D++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[T[D]*3+P],_),_.vsub(p,y),y.lengthSquared()<=M){if(b.copy(_),re.pointToWorldFrame(i,o,b,_),_.vsub(n,y),d)return!0;let O=this.createContactEquation(a,c,t,e,l,u);O.ni.copy(y),O.ni.normalize(),O.ri.copy(O.ni),O.ri.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.copy(_),O.rj.vsub(c.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}for(let D=0;D<T.length;D++)for(let P=0;P<3;P++){e.getVertex(e.indices[T[D]*3+P],h),e.getVertex(e.indices[T[D]*3+(P+1)%3],f),f.vsub(h,g),p.vsub(f,m);let O=m.dot(g);p.vsub(h,m);let U=m.dot(g);if(U>0&&O<0&&(p.vsub(h,m),v.copy(g),v.normalize(),U=m.dot(v),v.scale(U,m),m.vadd(h,m),m.distanceTo(p)<t.radius)){if(d)return!0;let Q=this.createContactEquation(a,c,t,e,l,u);m.vsub(p,Q.ni),Q.ni.normalize(),Q.ni.scale(t.radius,Q.ri),Q.ri.vadd(n,Q.ri),Q.ri.vsub(a.position,Q.ri),re.pointToWorldFrame(i,o,m,m),m.vsub(c.position,Q.rj),re.vectorToWorldFrame(o,Q.ni,Q.ni),re.vectorToWorldFrame(o,Q.ri,Q.ri),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}}let N=Gx,R=Hx,F=Wx,z=Lx;for(let D=0,P=T.length;D!==P;D++){e.getTriangleVertices(T[D],N,R,F),e.getNormal(T[D],z),p.vsub(N,m);let O=m.dot(z);if(z.scale(O,m),p.vsub(m,m),O=m.distanceTo(p),gn.pointInTriangle(m,N,R,F)&&O<t.radius){if(d)return!0;let U=this.createContactEquation(a,c,t,e,l,u);m.vsub(p,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),re.pointToWorldFrame(i,o,m,m),m.vsub(c.position,U.rj),re.vectorToWorldFrame(o,U.ni,U.ni),re.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}T.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,u,d){let h=new A,f=Rx;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);let v=new A;v.copy(h),re.pointToWorldFrame(i,o,v,h);let p=Ix;if(h.vsub(n,p),f.dot(p)<=0){if(d)return!0;let x=this.createContactEquation(a,c,t,e,l,u);x.ni.copy(f);let b=Px;f.scale(p.dot(f),b),h.vsub(b,b),x.ri.copy(b),x.ri.vsub(a.position,x.ri),x.rj.copy(h),x.rj.vsub(c.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}},Oi=new A,xs=new A,_s=new A,Ex=new A,Ax=new A,Tx=new je,Cx=new je,Rx=new A,Ix=new A,Px=new A,Lx=new A,Nx=new A;new A;var Fx=new A,Dx=new A,Bx=new A,Ux=new A,Ox=new A,zx=new A,Vx=new A,kx=new A,Gx=new A,Hx=new A,Wx=new A,qx=new ln,Xx=[],Ma=new A,Lu=new A,Yx=new A,Zx=new A,$x=new A;function Jx(r,t,e){let n=null,i=r.length;for(let s=0;s!==i;s++){let o=r[s],a=Yx;r[(s+1)%i].vsub(o,a);let c=Zx;a.cross(t,c);let l=$x;e.vsub(o,l);let u=c.dot(l);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}var ba=new A,Kx=new A,jx=new A,Qx=new A,t_=[new A,new A,new A,new A,new A,new A],e_=new A,n_=new A,i_=new A,s_=new A,r_=new A,o_=new A,a_=new A,l_=new A,c_=new A,h_=new A,u_=new A,d_=new A,f_=new A,p_=new A;new A;new A;var m_=new A,g_=new A,x_=new A,__=new A,v_=new A,y_=new A,S_=new A,M_=new A,b_=new A,w_=new A,Nu=new je,E_=new A;new A;var A_=new A,Fu=new A,T_=new A,C_=new A,R_=new A,I_=[0],P_=new A,L_=new A,Na=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),i=this.current,s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,i=this.previous,s=n.length,o=i.length,a=0;for(let c=0;c<s;c++){let l=!1,u=n[c];for(;u>i[a];)a++;l=u===i[a],l||Du(t,u)}a=0;for(let c=0;c<o;c++){let l=!1,u=i[c];for(;u>n[a];)a++;l=n[a]===u,l||Du(e,u)}}};function Du(r,t){r.push((t&4294901760)>>16,t&65535)}var sc=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`,gc=class{constructor(){this.data={keys:[]}}get(t,e){let n=sc(t,e);return this.data[n]}set(t,e,n){let i=sc(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){let n=sc(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},Fa=class extends Ea{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new A,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new A,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new lc,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new dc,this.constraints=[],this.narrowphase=new mc(this),this.collisionMatrix=new wa,this.collisionMatrixPrevious=new wa,this.bodyOverlapKeeper=new Na,this.shapeOverlapKeeper=new Na,this.contactmaterials=[],this.contactMaterialTable=new gc,this.defaultMaterial=new Ia("default"),this.defaultContactMaterial=new Ra(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof vs?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=gn.ALL,n.from=t,n.to=e,n.callback=i,rc.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=gn.ANY,n.from=t,n.to=e,n.result=i,rc.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=gn.CLOSEST,n.from=t,n.to=e,n.result=i,rc.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ht&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let i=e[n].shapes;for(let s=0;s<i.length;s++){let o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Pe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let i=Pe.now(),s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Pe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=U_,i=O_,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,u=this.profile,d=Ht.DYNAMIC,h=-1/0,f=this.constraints,g=B_;c.length();let v=c.x,p=c.y,m=c.z,x=0;for(l&&(h=Pe.now()),x=0;x!==s;x++){let D=o[x];if(D.type===d){let P=D.force,O=D.mass;P.x+=O*v,P.y+=O*p,P.z+=O*m}}for(let D=0,P=this.subsystems.length;D!==P;D++)this.subsystems[D].update();l&&(h=Pe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(u.broadphase=Pe.now()-h);let b=f.length;for(x=0;x!==b;x++){let D=f[x];if(!D.collideConnected)for(let P=n.length-1;P>=0;P-=1)(D.bodyA===n[P]&&D.bodyB===i[P]||D.bodyB===n[P]&&D.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),l&&(h=Pe.now());let y=D_,T=e.length;for(x=0;x!==T;x++)y.push(e[x]);e.length=0;let E=this.frictionEquations.length;for(x=0;x!==E;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),l&&(u.narrowphase=Pe.now()-h),l&&(h=Pe.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);let _=e.length;for(let D=0;D!==_;D++){let P=e[D],O=P.bi,U=P.bj,X=P.si,Q=P.sj,W;if(O.material&&U.material?W=this.getContactMaterial(O.material,U.material)||this.defaultContactMaterial:W=this.defaultContactMaterial,W.friction,O.material&&U.material&&(O.material.friction>=0&&U.material.friction>=0&&O.material.friction*U.material.friction,O.material.restitution>=0&&U.material.restitution>=0&&(P.restitution=O.material.restitution*U.material.restitution)),a.addEquation(P),O.allowSleep&&O.type===Ht.DYNAMIC&&O.sleepState===Ht.SLEEPING&&U.sleepState===Ht.AWAKE&&U.type!==Ht.STATIC){let nt=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),ot=U.sleepSpeedLimit**2;nt>=ot*2&&(O.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===Ht.DYNAMIC&&U.sleepState===Ht.SLEEPING&&O.sleepState===Ht.AWAKE&&O.type!==Ht.STATIC){let nt=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),ot=O.sleepSpeedLimit**2;nt>=ot*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(O,U,!0),this.collisionMatrixPrevious.get(O,U)||(fr.body=U,fr.contact=P,O.dispatchEvent(fr),fr.body=O,U.dispatchEvent(fr)),this.bodyOverlapKeeper.set(O.id,U.id),this.shapeOverlapKeeper.set(X.id,Q.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=Pe.now()-h,h=Pe.now()),x=0;x!==s;x++){let D=o[x];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(b=f.length,x=0;x!==b;x++){let D=f[x];D.update();for(let P=0,O=D.equations.length;P!==O;P++){let U=D.equations[P];a.addEquation(U)}}a.solve(t,this),l&&(u.solve=Pe.now()-h),a.removeAllEquations();let M=Math.pow;for(x=0;x!==s;x++){let D=o[x];if(D.type&d){let P=M(1-D.linearDamping,t),O=D.velocity;O.scale(P,O);let U=D.angularVelocity;if(U){let X=M(1-D.angularDamping,t);U.scale(X,U)}}}this.dispatchEvent(F_),l&&(h=Pe.now());let R=this.stepnumber%(this.quatNormalizeSkip+1)===0,F=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(t,R,F);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=Pe.now()-h),this.stepnumber+=1,this.dispatchEvent(N_);let z=!0;if(this.allowSleep)for(z=!1,x=0;x!==s;x++){let D=o[x];D.sleepTick(this.time),D.sleepState!==Ht.SLEEPING&&(z=!0)}this.hasActiveBodies=z}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ni,ii),t){for(let s=0,o=ni.length;s<o;s+=2)pr.bodyA=this.getBodyById(ni[s]),pr.bodyB=this.getBodyById(ni[s+1]),this.dispatchEvent(pr);pr.bodyA=pr.bodyB=null}if(e){for(let s=0,o=ii.length;s<o;s+=2)mr.bodyA=this.getBodyById(ii[s]),mr.bodyB=this.getBodyById(ii[s+1]),this.dispatchEvent(mr);mr.bodyA=mr.bodyB=null}ni.length=ii.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(ni,ii),n){for(let s=0,o=ni.length;s<o;s+=2){let a=this.getShapeById(ni[s]),c=this.getShapeById(ni[s+1]);si.shapeA=a,si.shapeB=c,a&&(si.bodyA=a.body),c&&(si.bodyB=c.body),this.dispatchEvent(si)}si.bodyA=si.bodyB=si.shapeA=si.shapeB=null}if(i){for(let s=0,o=ii.length;s<o;s+=2){let a=this.getShapeById(ii[s]),c=this.getShapeById(ii[s+1]);ri.shapeA=a,ri.shapeB=c,a&&(ri.bodyA=a.body),c&&(ri.bodyB=c.body),this.dispatchEvent(ri)}ri.bodyA=ri.bodyB=ri.shapeA=ri.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new ln;var rc=new gn,Pe=globalThis.performance||{};if(!Pe.now){let r=Date.now();Pe.timing&&Pe.timing.navigationStart&&(r=Pe.timing.navigationStart),Pe.now=()=>Date.now()-r}new A;var N_={type:"postStep"},F_={type:"preStep"},fr={type:Ht.COLLIDE_EVENT_NAME,body:null,contact:null},D_=[],B_=[],U_=[],O_=[],ni=[],ii=[],pr={type:"beginContact",bodyA:null,bodyB:null},mr={type:"endContact",bodyA:null,bodyB:null},si={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ri={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var xr=new q;function xn(r,t,e,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),c=Math.PI/4;xr.copy(t),xr[n]=0,xr.normalize();let l=.5*o/(o+a),u=1-xr.angleTo(r)/c;return Math.sign(xr[e])===1?u*l:a/(o+a)+l+l*(1-u)}var Da=class r extends Nn{constructor(t=1,e=1,n=1,i=2,s=.1){let o=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new q,l=new q,u=new q(t,e,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,v=new q,p=.5/o;for(let m=0,x=0;m<d.length;m+=3,x+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[m+0]=u.x*Math.sign(c.x)+l.x*s,d[m+1]=u.y*Math.sign(c.y)+l.y*s,d[m+2]=u.z*Math.sign(c.z)+l.z*s,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/g)){case 0:v.set(1,0,0),f[x+0]=xn(v,l,"z","y",s,n),f[x+1]=1-xn(v,l,"y","z",s,e);break;case 1:v.set(-1,0,0),f[x+0]=1-xn(v,l,"z","y",s,n),f[x+1]=1-xn(v,l,"y","z",s,e);break;case 2:v.set(0,1,0),f[x+0]=1-xn(v,l,"x","z",s,t),f[x+1]=xn(v,l,"z","x",s,n);break;case 3:v.set(0,-1,0),f[x+0]=1-xn(v,l,"x","z",s,t),f[x+1]=1-xn(v,l,"z","x",s,n);break;case 4:v.set(0,0,1),f[x+0]=1-xn(v,l,"x","y",s,t),f[x+1]=1-xn(v,l,"y","x",s,e);break;case 5:v.set(0,0,-1),f[x+0]=xn(v,l,"x","y",s,t),f[x+1]=1-xn(v,l,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}};var dt={bord:"#8B0A26",dark:"#3D0410",ink:"#2A0A10",rose:"#F6CCD5",pink:"#F2A7B6",cream:"#FBF1EE",ground:"#F4E4DF",white:"#FFFFFF",gold:"#E9B44C"},ye='"Instrument Sans", "Inter", "Helvetica Neue", Arial, sans-serif',Be=r=>document.getElementById(r),Ba=r=>Math.round(r).toLocaleString("fr-FR"),_r=matchMedia("(pointer: coarse)").matches||innerWidth<760,vr=[{z:-13,r:6,k:"Pour qui",t:"Pour ceux qui partent de z\xE9ro.",d:"Lyc\xE9ens, \xE9tudiants, salari\xE9s, parents. Ton coach te suit jusqu'\xE0 5 000 \u20AC de chiffre d'affaires par mois, deux mois de suite."},{z:-28,r:7,k:"La m\xE9thode \xB7 01",t:"Cr\xE9e ton produit.",d:"On part de ce que tu sais d\xE9j\xE0 faire. Ton coach t'aide \xE0 en faire une offre claire, que les gens ont envie d'acheter.",step:1},{z:-50,r:8,k:"La m\xE9thode \xB7 02",t:"Optimise ton profil.",d:"Ton Instagram devient ta vitrine. Photo, bio, offre : en trois secondes, on comprend ce que tu vends.",step:2},{z:-65,r:5,k:"Le mur",t:"Au d\xE9but, personne ne te voit.",d:"Fonce dedans. C'est exactement ce que font tes premi\xE8res vid\xE9os."},{z:-80,r:8,k:"La m\xE9thode \xB7 03",t:"Poste des vid\xE9os virales.",d:"Tu rep\xE8res ce qui marche d\xE9j\xE0, et tu le refais en mieux. Ton coach corrige chaque vid\xE9o avant qu\u2019elle sorte.",step:3},{z:-104,r:8,k:"La m\xE9thode \xB7 04",t:"Tes vues deviennent de l'argent.",d:"Les gens t'\xE9crivent en DM. Tu apprends \xE0 mener la conversation jusqu'\xE0 la vente, avec nos coachs en vente.",step:4},{z:-128,r:10,k:"Tes coachs",t:"Tu n'avances jamais seul.",d:"Chaque coach vit de ce qu'il enseigne. Il te suit, te corrige et te pousse, du premier jour \xE0 ta premi\xE8re vente."},{z:-152,r:9,k:"L'Immersion AUDACE",t:"Ton avenir commence ici.",d:"Ton premier cours est offert : une heure en t\xEAte \xE0 t\xEAte avec un coach, au QG \xE0 Paris ou en visio.",cta:!0}],V_=[["Calvin","Coach",-5.6,-121],["Paul Leteve","Coach",-5.6,-126],["Keran","Coach",-5.6,-131],["Lauriane","Coach",-5.6,-136],["Lilo","Coach en vente",5.6,-122.5],["Lyri","Coach en vente",5.6,-128.5],["Baptiste","Coach",5.6,-134.5]];function Hu(r){let t=Be("fallback");t&&(t.hidden=!1);let e=Be("intro");e&&(e.hidden=!0),console.error(r)}async function k_(){let r=Be("scene"),t;try{t=new ga({canvas:r,antialias:!0,powerPreference:"high-performance"})}catch(C){return Hu(C)}t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Eo;try{await Promise.race([document.fonts.load('600 64px "Instrument Sans"'),new Promise(C=>setTimeout(C,1800))])}catch{}let e=new Fs;e.background=new Wt(dt.ground),e.fog=new Ns(dt.ground,34,78);let n=new Je(42,1,.1,200);e.add(new $s(16777215,15783632,1.25));let i=new js(16777215,1.9);i.castShadow=!0;let s=_r?1024:2048;i.shadow.mapSize.set(s,s),Object.assign(i.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:70}),i.shadow.bias=-6e-4,i.shadow.normalBias=.03,e.add(i,i.target);let o=new Fa({gravity:new A(0,-24,0)});o.allowSleep=!0,o.defaultContactMaterial.friction=.45,o.defaultContactMaterial.restitution=.12;let a=(C,I,G,lt,H,j)=>{let bt=new Ht({mass:0,shape:new La});bt.position.set(C,I,G),bt.quaternion.setFromEuler(lt,H,j),o.addBody(bt)};a(0,0,0,-Math.PI/2,0,0),a(-14,0,0,0,Math.PI/2,0),a(14,0,0,0,-Math.PI/2,0),a(0,0,8,0,Math.PI,0),a(0,0,-156.6,0,0,0);let c=[],l=(C,I={})=>new Dn({color:C,roughness:.6,metalness:0,...I}),u=(C,I,G)=>{let lt=document.createElement("canvas");lt.width=C,lt.height=I;let H=lt.getContext("2d");G(H,C,I);let j=new Li(lt);return j.colorSpace=Ce,j.anisotropy=8,j},d=(C,I,G,lt,H,j)=>{C.beginPath(),C.moveTo(I+j,G),C.arcTo(I+lt,G,I+lt,G+H,j),C.arcTo(I+lt,G+H,I,G+H,j),C.arcTo(I,G+H,I,G,j),C.arcTo(I,G,I+lt,G,j),C.closePath()},h=(C,I,G,lt,H,j,bt=600)=>{C.font=`${bt} ${j}px ${ye}`;let ht=C.measureText(I).width;ht>H&&(C.font=`${bt} ${j*H/ht}px ${ye}`),C.fillText(I,G,lt)},f=(C,I=!0,G=!0)=>(C.castShadow=I,C.receiveShadow=G,C),g=(C,I,G,lt,H=.12,j)=>f(new ee(new Da(C,I,G,3,Math.min(H,C/2,I/2,G/2)),typeof lt=="string"?l(lt,j):lt)),v=(C,I,G,lt)=>{let H=new Ht({mass:0,shape:new wi(new A(I/2,G/2,lt/2))});return H.position.copy(C.position),H.quaternion.copy(C.quaternion),o.addBody(H),H},p=(C,I,G,lt,H)=>{let j=new Ht({mass:H,shape:new wi(new A(I/2,G/2,lt/2)),sleepSpeedLimit:.25,sleepTimeLimit:.5,linearDamping:.05,angularDamping:.08});return j.position.copy(C.position),j.quaternion.copy(C.quaternion),o.addBody(j),c.push([C,j]),j},m=(C,I,G,lt,H,j=1024)=>{let bt=u(j,Math.round(j*lt/G),H),ht=new ee(new Xe(G,lt),new on({map:bt,transparent:!0,depthWrite:!1}));return ht.rotation.x=-Math.PI/2,ht.position.set(C,.03,I),ht.renderOrder=2,e.add(ht),ht},x=(C,I,G)=>m(0,C,7,4.2,(lt,H,j)=>{lt.textAlign="center",lt.font=`600 ${j*.52}px ${ye}`,lt.fillStyle=dt.rose,lt.fillText(I,H/2,j*.5),lt.fillStyle=dt.bord,h(lt,G,H/2,j*.84,H*.94,j*.2)}),b=new ee(new Xe(260,320),l(dt.ground,{roughness:1}));b.rotation.x=-Math.PI/2,b.position.z=-80,b.receiveShadow=!0,e.add(b);let y=new ee(new Xe(8,180),l(dt.white,{roughness:1}));y.rotation.x=-Math.PI/2,y.position.set(0,.012,-79),y.receiveShadow=!0,e.add(y);for(let C of[-4.15,4.15]){let I=new ee(new Xe(.3,180),l(dt.rose,{roughness:1}));I.rotation.x=-Math.PI/2,I.position.set(C,.02,-79),I.receiveShadow=!0,e.add(I)}let T=(()=>{let C=7;return()=>(C=C*16807%2147483647)/2147483647})();for(let C=0;C<46;C++){let I=C%2?1:-1,G=.8+T()*2.6,lt=T()<.5?g(G,G,G,[dt.rose,dt.cream,dt.pink,dt.bord][C%4],.3):f(new ee(new ls(G*.6,24,16),l([dt.rose,dt.white,dt.bord][C%3])));lt.position.set(I*(16.5+T()*16),G*.5,6-T()*172),lt.rotation.y=T()*3,e.add(lt)}let E=u(512,256,(C,I,G)=>{C.fillStyle=dt.bord,C.fillRect(0,0,I,G),C.fillStyle=dt.rose,C.fillRect(0,G*.44,I,G*.12),C.fillStyle=dt.cream,C.font=`700 ${G*.34}px ${ye}`,C.textAlign="center",C.fillText("A",I*.25,G*.36),C.fillText("A",I*.75,G*.36)}),_=.62,M=f(new ee(new ls(_,48,32),new Dn({map:E,roughness:.28,metalness:.05})),!0,!1);e.add(M);let N=new Ht({mass:5,shape:new Pa(_),linearDamping:.32,angularDamping:.4});N.allowSleep=!1,N.position.set(0,_+.4,3.5),o.addBody(N),[..."AUDACE"].forEach((C,I)=>{let G=u(256,256,(H,j,bt)=>{H.fillStyle=I%2?dt.dark:dt.bord,H.fillRect(0,0,j,bt),H.fillStyle=dt.cream,H.font=`700 ${bt*.7}px ${ye}`,H.textAlign="center",H.textBaseline="middle",H.fillText(C,j/2,bt*.54)}),lt=g(1.5,1.5,1.5,new Dn({map:G,roughness:.5}),.16);lt.position.set(-4.25+I*1.7,.75,-5),e.add(lt),p(lt,1.5,1.5,1.5,.5)}),m(0,.6,7,2.6,(C,I,G)=>{C.textAlign="center",C.fillStyle=dt.bord,h(C,_r?"Glisse ton doigt pour rouler":"Fl\xE8ches ou ZQSD pour rouler",I/2,G*.42,I*.94,G*.3),C.fillStyle="#B8959A",h(C,_r?"Fonce dans les lettres":"Espace pour sauter \xB7 fonce dans les lettres",I/2,G*.78,I*.94,G*.2,500)}),m(0,-13,7,4.2,(C,I,G)=>{C.textAlign="center",C.fillStyle=dt.rose,C.font=`600 ${G*.3}px ${ye}`,C.fillText("Pour qui ?",I/2,G*.36),C.fillStyle=dt.bord,C.font=`600 ${G*.15}px ${ye}`,C.fillText("Lyc\xE9ens \xB7 \xC9tudiants",I/2,G*.62),C.fillText("Salari\xE9s \xB7 Parents",I/2,G*.82)}),x(-28,"01","Cr\xE9e ton produit");{let C=g(3.2,3.2,3.2,dt.bord,.3,{roughness:.4});C.position.set(7.4,1.6,-28),C.rotation.y=.5,e.add(C),v(C,3.2,3.2,3.2);let I=g(3.3,3.3,.7,dt.rose,.1);I.position.copy(C.position),I.rotation.y=.5,e.add(I);let G=g(.7,3.3,3.3,dt.rose,.1);G.position.copy(C.position),G.rotation.y=.5,e.add(G);let lt=f(new ee(new qs(.55,.2,14,28),l(dt.rose)));lt.position.set(7.4,3.75,-28),lt.rotation.set(0,.5,0),e.add(lt);let H=0;for(let j=0;j<4;j++)for(let bt=0;bt<4-j;bt++){let ht=g(1,1,1,[dt.cream,dt.rose,dt.white][H++%3],.12);ht.position.set(-7.6+bt*1.06+j*.53,.5+j*1,-28),e.add(ht),p(ht,1,1,1,.35)}}x(-50,"02","Optimise ton profil");let R={t:0,target:0};{let C=new In;C.position.set(5.9,4.5,-52.5),C.rotation.set(-.12,-.5,0),e.add(C);let I=g(4.5,8.8,.5,dt.ink,.45,{roughness:.35});C.add(I),R.canvas=document.createElement("canvas"),R.canvas.width=512,R.canvas.height=1040,R.tex=new Li(R.canvas),R.tex.colorSpace=Ce,R.tex.anisotropy=8;let G=new ee(new Xe(4,8.12),new on({map:R.tex}));G.position.z=.26,C.add(G),C.updateMatrixWorld();let lt=new dn;C.getWorldQuaternion(lt);let H=new Ht({mass:0,shape:new wi(new A(2.25,4.4,.4))});H.position.set(5.9,4.4,-52.5),H.quaternion.copy(lt),o.addBody(H);let j=g(5,.4,2.4,dt.rose,.15);j.position.set(5.9,.2,-52.5),j.rotation.y=-.5,e.add(j)}let F=(C,I,G)=>C+(I-C)*G,z=(C,I,G)=>{let lt=new Wt(C),H=new Wt(I);return"#"+lt.lerp(H,G).getHexString()};function D(C){let I=R.canvas.getContext("2d"),G=512,lt=1040,H=(Ft,Yt)=>Math.min(1,Math.max(0,(C-Ft)/(Yt-Ft)));I.fillStyle="#FFFFFF",I.fillRect(0,0,G,lt),I.fillStyle=dt.ink,I.font=`700 30px ${ye}`,I.textAlign="left",I.fillText(C>.15?"ton.nom":"user_83726",36,78);let j=H(0,.3);I.beginPath(),I.arc(100,190,64,0,7),I.fillStyle=z("#DDD5D3",dt.bord,j),I.fill(),j>.5&&(I.fillStyle=dt.cream,I.font=`700 60px ${ye}`,I.textAlign="center",I.fillText("A",100,211),I.lineWidth=6,I.strokeStyle=dt.pink,I.beginPath(),I.arc(100,190,74,0,7),I.stroke()),[["Posts",F(0,86,H(.2,.9))],["Abonn\xE9s",F(12,12400,H(.3,1)**2)],["Suivis",180]].forEach(([Ft,Yt],we)=>{let _e=240+we*100;I.textAlign="center",I.fillStyle=dt.ink,I.font=`700 30px ${ye}`,I.fillText(Yt>=1e4?(Yt/1e3).toFixed(1).replace(".",",")+" k":Ba(Yt),_e,185),I.fillStyle="#8A6D72",I.font=`500 20px ${ye}`,I.fillText(Ft,_e,216)}),["Coach en ligne","J'aide les \xE9tudiants \xE0 vivre","de leur passion en 90 jours","R\xE9serve ton appel offert \u2193"].forEach((Ft,Yt)=>{let we=320+Yt*44,_e=H(.25+Yt*.1,.5+Yt*.1);_e<1&&(I.globalAlpha=1-_e,I.fillStyle="#E9E1DF",d(I,36,we-22,[220,340,300,260][Yt],22,11),I.fill(),I.globalAlpha=1),_e>0&&(I.globalAlpha=_e,I.textAlign="left",I.fillStyle=Yt===3?dt.bord:dt.ink,I.font=`${Yt===0?700:500} 27px ${ye}`,I.fillText(Ft,36,we),I.globalAlpha=1)});let ut=H(.55,.8);I.fillStyle=z("#E9E1DF",dt.bord,ut),d(I,36,500,440,64,16),I.fill(),I.fillStyle=z("#B8AAA8","#FFFFFF",ut),I.font=`700 26px ${ye}`,I.textAlign="center",I.fillText(ut>.5?"R\xE9server un appel":"Suivre",256,541);for(let Ft=0;Ft<4;Ft++){let Yt=H(.6+Ft*.06,.8+Ft*.06);I.beginPath(),I.arc(84+Ft*115,640,40,0,7),I.fillStyle=z("#EFE8E6",[dt.rose,dt.bord,dt.pink,dt.dark][Ft],Yt),I.fill()}let Mt=[dt.bord,dt.rose,dt.dark,dt.pink,dt.bord,dt.rose,dt.dark,dt.pink,dt.bord];for(let Ft=0;Ft<9;Ft++){let Yt=H(.7+Ft*.03,.9+Ft*.012),we=6+Ft%3*168,_e=720+Math.floor(Ft/3)*106;I.fillStyle=z("#EFE8E6",Mt[Ft],Yt),I.fillRect(we,_e,164,102),Yt>.9&&(I.fillStyle="rgba(255,255,255,.9)",I.beginPath(),I.moveTo(we+72,_e+34),I.lineTo(we+72,_e+68),I.lineTo(we+100,_e+51),I.fill())}R.tex.needsUpdate=!0}D(0),m(0,-60.2,7,2.2,(C,I,G)=>{C.textAlign="center",C.fillStyle=dt.bord,C.font=`600 ${G*.36}px ${ye}`,C.fillText("Casse le mur",I/2,G*.46),C.fillStyle="#B8959A",h(C,"Au d\xE9but, personne ne te voit",I/2,G*.84,I*.94,G*.22,500)});for(let C=0;C<4;C++)for(let I=0;I<7;I++){let G=C%2?.55:0,lt=-3.3+I*1.1+G;if(lt>3.9)continue;let H=g(1.06,.66,.6,(I+C)%3===0?dt.rose:(I+C)%3===1?dt.cream:dt.pink,.08);H.position.set(lt,.33+C*.66,-65),e.add(H),p(H,1.06,.66,.6,.22)}x(-80,"03","Poste des vid\xE9os virales");let P=[];[["mayline",-7.4,-79,.5],["adrien",7.4,-79,-.5],["bobby",-7.4,-88,.5],["antonin",7.4,-88,-.5]].forEach(([C,I,G,lt],H)=>{let j=new In;j.position.set(I,3.6,G),j.rotation.y=lt,e.add(j),j.add(g(3.7,6.3,.4,dt.ink,.3,{roughness:.35}));let bt=new on({color:16777215});new Ys().load(`img/r-${C}.jpg`,_e=>{_e.colorSpace=Ce,bt.map||(bt.map=_e,bt.needsUpdate=!0)});let ht=new ee(new Xe(3.3,5.87),bt);ht.position.z=.21,j.add(ht);let ut=document.createElement("video");Object.assign(ut,{src:`img/r-${C}.mp4`,muted:!0,loop:!0,playsInline:!0,preload:"auto",crossOrigin:"anonymous"}),ut.setAttribute("playsinline",""),ut.setAttribute("muted",""),ut.addEventListener("playing",()=>{let _e=new Vs(ut);_e.colorSpace=Ce,bt.map=_e,bt.needsUpdate=!0},{once:!0});let Mt=document.createElement("canvas");Mt.width=384,Mt.height=96;let Ft=new Li(Mt);Ft.colorSpace=Ce;let Yt=new ee(new Xe(2.6,.65),new on({map:Ft,transparent:!0}));Yt.position.set(0,3.75,.1),j.add(Yt);let we=new Ht({mass:0,shape:new wi(new A(1.85,3.6,.35))});we.position.set(I,3.6,G),we.quaternion.setFromEuler(0,lt,0),o.addBody(we),P.push({v:ut,cc:Mt,ct:Ft,n:0,goal:[124e4,86e4,21e5,54e4][H],shown:-1})});function O(C){let I=Math.round(C.n/1e3);if(I===C.shown)return;C.shown=I;let G=C.cc.getContext("2d");G.clearRect(0,0,384,96),G.fillStyle=dt.bord,d(G,0,0,384,96,48),G.fill(),G.fillStyle="#FFFFFF",G.beginPath(),G.moveTo(44,28),G.lineTo(44,68),G.lineTo(76,48),G.fill(),G.font=`700 44px ${ye}`,G.textAlign="left",G.fillText(C.n>=1e6?(C.n/1e6).toFixed(1).replace(".",",")+" M vues":Ba(C.n/1e3)+" k vues",98,64),C.ct.needsUpdate=!0}P.forEach(O);let U=[],X=new Ws(.34,1),Q=new Dn({color:dt.pink,emissive:dt.bord,emissiveIntensity:.55,roughness:.3});for(let C=-9;C>-100;C-=2.4){if(Math.abs(C+65)<2.5)continue;let I=new ee(X,Q.clone());I.position.set(Math.sin(C*.33)*2.4,.9,C),I.castShadow=!0,e.add(I),U.push({m:I,got:!1,k:1})}x(-99,"04","Tes vues deviennent de l'argent");let W=[];{for(let H of[-4.9,4.9]){let j=g(1.1,7,1.1,dt.bord,.2);j.position.set(H,3.5,-104),e.add(j),v(j,1.1,7,1.1)}let C=g(11.2,1.5,1.2,dt.bord,.25);C.position.set(0,7.2,-104),e.add(C);let I=u(1024,128,(H,j,bt)=>{H.fillStyle=dt.cream,H.font=`700 ${bt*.62}px ${ye}`,H.textAlign="center",H.textBaseline="middle",H.fillText("TES VUES  \u2192  TON ARGENT",j/2,bt*.54)}),G=new ee(new Xe(9,1.125),new on({map:I,transparent:!0}));G.position.set(0,7.2,-103.38),e.add(G),[[-5.9,5.6,"Ton offre m\u2019int\xE9resse",0],[5.9,4.2,"Avec plaisir, je t\u2019explique",1],[-5.9,2.8,"C\u2019est quoi le prix ?",0],[5.9,1.5,"On s\u2019appelle ?",1]].forEach(([H,j,bt,ht],ut)=>{let Mt=u(640,150,(Yt,we,_e)=>{Yt.fillStyle=ht?dt.bord:"#FFFFFF",d(Yt,6,6,we-12,_e-12,60),Yt.fill(),Yt.fillStyle=ht?"#FFFFFF":dt.ink,Yt.font=`600 46px ${ye}`,Yt.textAlign="center",Yt.textBaseline="middle",Yt.fillText(bt,we/2,_e/2+3)}),Ft=new ee(new Xe(4.8,1.125),new on({map:Mt,transparent:!0}));Ft.position.set(H,j,-96-ut*1.2),Ft.rotation.y=H<0?.45:-.45,e.add(Ft),W.push({m:Ft,y:j,p:ut*1.3})})}let nt=[],ot=!1,at=0,Dt=new gi(.46,.46,.14,28),et=new Dn({color:"#F2BE4A",roughness:.35,metalness:.1,emissive:"#7A4A00",emissiveIntensity:.25});function yt(){for(let C=0;C<(_r?18:30);C++){let I=f(new ee(Dt,et));I.position.set((Math.random()-.5)*7,7+Math.random()*9,-107-Math.random()*7),I.rotation.set(Math.random()*3,0,Math.random()*3),e.add(I),p(I,.8,.14,.8,.12).angularVelocity.set(Math.random()*6,0,Math.random()*6),nt.push(I)}}m(0,-117,7,2.6,(C,I,G)=>{C.textAlign="center",C.fillStyle=dt.rose,C.font=`600 ${G*.5}px ${ye}`,C.fillText("Tes coachs",I/2,G*.66)}),V_.forEach(([C,I,G,lt],H)=>{let j=f(new ee(new gi(1,1.15,1.1,40),l(H%2?dt.rose:dt.cream)));j.position.set(G,.55,lt),e.add(j),v(j,1.7,1.1,1.7);let bt=C.split(" ").map(Mt=>Mt[0]).join("").slice(0,2),ht=u(420,560,(Mt,Ft,Yt)=>{Mt.fillStyle="#FFFFFF",d(Mt,0,0,Ft,Yt,44),Mt.fill(),Mt.beginPath(),Mt.arc(Ft/2,190,122,0,7),Mt.fillStyle=I==="Coach"?dt.bord:dt.dark,Mt.fill(),Mt.fillStyle=dt.cream,Mt.font=`700 104px ${ye}`,Mt.textAlign="center",Mt.textBaseline="middle",Mt.fillText(bt,Ft/2,198),Mt.textBaseline="alphabetic",Mt.fillStyle=dt.ink,Mt.font=`700 54px ${ye}`,Mt.fillText(C,Ft/2,410),Mt.fillStyle=dt.bord,Mt.font=`600 34px ${ye}`,Mt.fillText(I,Ft/2,470)});if(C==="Calvin"){let Mt=new Image;Mt.onload=()=>{let Ft=ht.image.getContext("2d");Ft.save(),Ft.beginPath(),Ft.arc(210,190,122,0,7),Ft.clip();let Yt=244/Math.min(Mt.width,Mt.height);Ft.drawImage(Mt,210-Mt.width*Yt/2,190-Mt.height*Yt/2,Mt.width*Yt,Mt.height*Yt),Ft.restore(),ht.needsUpdate=!0},Mt.src="img/c-calvin.jpg"}let ut=f(new ee(new Nn(2.4,3.2,.12),[l(dt.white),l(dt.white),l(dt.white),l(dt.white),new on({map:ht}),l(dt.rose)]),!0,!1);ut.position.set(G,2.9,lt),ut.rotation.y=G<0?.55:-.55,e.add(ut)}),m(0,-145.5,7,2.4,(C,I,G)=>{C.textAlign="center",C.fillStyle=dt.bord,h(C,"Roule sur le bouton",I/2,G*.6,I*.94,G*.4)});let Tt=f(new ee(new gi(3.1,3.1,.12,64),l(dt.cream)));Tt.position.set(0,.06,-152),e.add(Tt);let Nt=u(512,512,(C,I,G)=>{C.fillStyle=dt.bord,C.fillRect(0,0,I,G),C.fillStyle=dt.cream,C.textAlign="center",C.font=`700 64px ${ye}`,C.fillText("IMMERSION",I/2,240),C.font=`600 40px ${ye}`,C.fillStyle=dt.rose,C.fillText("1er cours offert",I/2,304)});Nt.center.set(.5,.5),Nt.rotation=Math.PI/2;let St=f(new ee(new gi(2.5,2.6,.5,64),[l(dt.bord,{roughness:.35}),new Dn({map:Nt,roughness:.35}),l(dt.bord)]));St.position.set(0,.3,-152),e.add(St);for(let C of[-6.5,6.5]){let I=g(1.2,9,1.2,dt.rose,.3);I.position.set(C,4.5,-158),e.add(I),v(I,1.2,9,1.2)}let Vt=g(14.2,1.4,1.2,dt.rose,.3);Vt.position.set(0,9.4,-158),e.add(Vt);let ge=_r?110:200,Bt=new Xe(.22,.34),$t=new zs(Bt,new on({side:pn}),ge);$t.frustumCulled=!1,$t.visible=!1,e.add($t);let ne=[],qt=new De,Me=!1,Se=!1;for(let C=0;C<ge;C++)$t.setColorAt(C,new Wt([dt.bord,dt.rose,dt.pink,dt.gold,dt.white][C%5])),ne.push({p:new q,v:new q,r:Math.random()*6});function ke(){Me=!0,$t.visible=!0,ne.forEach(C=>{C.p.set((Math.random()-.5)*3,.6,-152+(Math.random()-.5)*3),C.v.set((Math.random()-.5)*11,9+Math.random()*12,(Math.random()-.5)*11)})}let oe=Be("hud-v"),cn=Be("hud-e"),be=Be("hud-ew"),Ze=Be("panel"),Qe=[...document.querySelectorAll("#dots i")],Te=0,k=0,Ue=0,ae=-1;function he(C){if(C===ae)return;if(ae=C,C<0){Ze.classList.remove("on");return}let I=vr[C];Be("p-k").textContent=I.k,Be("p-t").textContent=I.t,Be("p-d").textContent=I.d,Be("p-cta").hidden=!I.cta,Ze.classList.add("on"),Qe.forEach((G,lt)=>G.classList.toggle("on",I.step?lt<I.step:C>=6?!0:G.classList.contains("on")))}let mt=new Set,xe=!1,At={on:!1,x:0,y:0,id:null,ox:0,oy:0},Ut={ArrowUp:"u",KeyW:"u",KeyZ:"u",ArrowDown:"d",KeyS:"d",ArrowLeft:"l",KeyA:"l",KeyQ:"l",ArrowRight:"r",KeyD:"r"};addEventListener("keydown",C=>{Ut[C.code]&&(mt.add(Ut[C.code]),C.preventDefault()),C.code==="Space"&&(xe=!0,C.preventDefault())}),addEventListener("keyup",C=>{Ut[C.code]&&mt.delete(Ut[C.code])}),addEventListener("blur",()=>mt.clear());let L=Be("stick"),S=Be("knob");r.addEventListener("pointerdown",C=>{if(!At.on){At.on=!0,At.id=C.pointerId,At.ox=C.clientX,At.oy=C.clientY,At.x=At.y=0,L.style.left=C.clientX+"px",L.style.top=C.clientY+"px",L.classList.add("on"),S.style.transform="translate(-50%,-50%)";try{r.setPointerCapture(C.pointerId)}catch{}}}),r.addEventListener("pointermove",C=>{if(!At.on||C.pointerId!==At.id)return;let I=C.clientX-At.ox,G=C.clientY-At.oy,lt=Math.hypot(I,G),H=56;lt>H&&(I*=H/lt,G*=H/lt),At.x=I/H,At.y=G/H,S.style.transform=`translate(calc(-50% + ${I}px), calc(-50% + ${G}px))`});let Y=C=>{C.pointerId===At.id&&(At.on=!1,At.x=At.y=0,L.classList.remove("on"))};r.addEventListener("pointerup",Y),r.addEventListener("pointercancel",Y);let ct=new q,rt=new q(0,0,0);function pt(){let C=innerWidth,I=innerHeight;t.setSize(C,I,!1),n.aspect=C/I;let G=I>C;n.fov=G?56:42,ct.set(0,G?17:12.5,G?15.5:14.5),n.updateProjectionMatrix()}addEventListener("resize",pt),pt(),n.position.copy(N.position).add(ct);let xt=0,tt=!1,it=performance.now(),ft=0;Be("start").addEventListener("click",()=>{tt=!0,Be("intro").classList.add("off"),document.body.classList.add("play"),P.forEach(C=>{let I=C.v.play();I&&I.catch&&I.catch(()=>{})})});let B=new A,st=1/60,K=0;function gt(C){requestAnimationFrame(gt),xt++;let I=Math.min(.05,(C-it)/1e3);if(it=C,ft+=I,document.hidden)return;let G=0,lt=0;if(tt){G=(mt.has("r")?1:0)-(mt.has("l")?1:0)+At.x,lt=(mt.has("d")?1:0)-(mt.has("u")?1:0)+At.y;let ut=Math.hypot(G,lt);ut>1&&(G/=ut,lt/=ut),xe&&N.position.y<_+.12&&(N.velocity.y=8.5)}xe=!1,K+=I;let H=0;for(;K>=st&&H<4;){B.set(G*105,0,lt*105),N.applyForce(B),o.step(st),K-=st,H++;let ut=N.velocity,Mt=Math.hypot(ut.x,ut.z);Mt>15&&(ut.x*=15/Mt,ut.z*=15/Mt)}H===4&&(K=0),(N.position.y<-3||N.position.y>40)&&(N.position.set(0,2,N.position.z),N.velocity.set(0,0,0)),M.position.copy(N.position),M.quaternion.copy(N.quaternion);for(let[ut,Mt]of c)Mt.sleepState!==Ht.SLEEPING&&(ut.position.copy(Mt.position),ut.quaternion.copy(Mt.quaternion));let j=M.position;for(let ut of U){if(ut.got){ut.k>0&&(ut.k=Math.max(0,ut.k-I*5),ut.m.scale.setScalar(ut.k*1.6),ut.m.position.y+=I*5,ut.k===0&&(ut.m.visible=!1));continue}ut.m.rotation.y+=I*2,ut.m.position.y=.9+Math.sin(ft*3+ut.m.position.z)*.12,Math.abs(ut.m.position.z-j.z)<1.3&&Math.abs(ut.m.position.x-j.x)<1.3&&(ut.got=!0,Te+=28e3+Math.round(Math.random()*14)*1e3,oe.parentElement.classList.remove("pop"),oe.offsetWidth,oe.parentElement.classList.add("pop"))}k!==Te&&(k+=(Te-k)*Math.min(1,I*8),Math.abs(Te-k)<500&&(k=Te),oe.textContent=Ba(k));let bt=-1;for(let ut=0;ut<vr.length;ut++)Math.abs(j.z-vr[ut].z)<vr[ut].r&&(bt=ut);if(tt&&he(bt),j.z<-41&&(R.target=1),R.t<R.target&&(R.t=Math.min(1,R.t+I/1.8),D(R.t)),j.z<-70)for(let ut of P)ut.n<ut.goal&&(ut.n=Math.min(ut.goal,ut.n+ut.goal*I/3.2),O(ut));for(let ut of W)ut.m.position.y=ut.y+Math.sin(ft*1.6+ut.p)*.18;!ot&&j.z<-104.5&&(ot=!0,at=Math.max(1500,Math.round(Te/250/10)*10),be.hidden=!1,be.classList.add("pop"),yt()),ot&&Ue<at&&(Ue=Math.min(at,Ue+at*I/2.4),cn.textContent=Ba(Ue)+" \u20AC");let ht=Math.hypot(j.x,j.z+152)<2.5;if(St.position.y+=((ht?.12:.3)-St.position.y)*Math.min(1,I*14),ht&&!Se&&(Se=!0,ke(),Be("p-cta").classList.add("go")),Me){let ut=!1;ne.forEach((Mt,Ft)=>{Mt.v.y-=16*I,Mt.v.multiplyScalar(1-.6*I),Mt.p.addScaledVector(Mt.v,I),Mt.p.y>-.5&&(ut=!0),qt.position.copy(Mt.p),qt.rotation.set(ft*5+Mt.r,ft*3+Mt.r,Mt.r),qt.updateMatrix(),$t.setMatrixAt(Ft,qt.matrix)}),$t.instanceMatrix.needsUpdate=!0,ut||(Me=!1,$t.visible=!1)}rt.set(j.x*.55,.6,j.z-2.5),n.position.x+=(rt.x+ct.x-n.position.x)*Math.min(1,I*5),n.position.y+=(ct.y-n.position.y)*Math.min(1,I*5),n.position.z+=(rt.z+ct.z-n.position.z)*Math.min(1,I*5),n.lookAt(n.position.x,.6,n.position.z-ct.z),i.position.set(j.x+9,22,j.z+7),i.target.position.set(j.x,0,j.z-4),i.target.updateMatrixWorld(),t.render(e,n)}t.render(e,n),Be("start").disabled=!1,Be("start").textContent="Commencer",window.__audace={ballBody:N,ZONES:vr,get fps(){return xt}},requestAnimationFrame(gt)}k_().catch(Hu);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
