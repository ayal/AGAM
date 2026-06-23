(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const za="184",Ti={ROTATE:0,DOLLY:1,PAN:2},vl=0,ho=1,Ml=2,zr=1,Sl=2,Zi=3,Hn=0,Ot=1,Ft=2,Sn=0,bi=1,fo=2,po=3,mo=4,El=5,Zn=100,yl=101,Tl=102,bl=103,Al=104,Rl=200,wl=201,Cl=202,Pl=203,Xs=204,Ys=205,Dl=206,Ll=207,Ul=208,Il=209,Nl=210,Fl=211,Ol=212,Bl=213,zl=214,qs=0,Zs=1,Ks=2,wi=3,js=4,$s=5,Js=6,Qs=7,vc=0,Gl=1,Vl=2,hn=0,Mc=1,Sc=2,Ec=3,yc=4,Tc=5,bc=6,Ac=7,Rc=300,Qn=301,Ci=302,ls=303,us=304,ns=306,ea=1e3,Mn=1001,ta=1002,At=1003,Hl=1004,hr=1005,yt=1006,hs=1007,jn=1008,Kt=1009,wc=1010,Cc=1011,Qi=1012,Ga=1013,fn=1014,ln=1015,dn=1016,Va=1017,Ha=1018,er=1020,Pc=35902,Dc=35899,Lc=1021,Uc=1022,nn=1023,yn=1026,$n=1027,Ic=1028,ka=1029,ei=1030,Wa=1031,Xa=1033,Gr=33776,Vr=33777,Hr=33778,kr=33779,na=35840,ia=35841,ra=35842,sa=35843,aa=36196,oa=37492,ca=37496,la=37488,ua=37489,Xr=37490,ha=37491,fa=37808,da=37809,pa=37810,ma=37811,_a=37812,ga=37813,xa=37814,va=37815,Ma=37816,Sa=37817,Ea=37818,ya=37819,Ta=37820,ba=37821,Aa=36492,Ra=36494,wa=36495,Ca=36283,Pa=36284,Yr=36285,Da=36286,kl=3200,_o=0,Wl=1,Bn="",Ht="srgb",qr="srgb-linear",Zr="linear",nt="srgb",oi=7680,go=519,Xl=512,Yl=513,ql=514,Ya=515,Zl=516,Kl=517,qa=518,jl=519,xo=35044,vo="300 es",un=2e3,Kr=2001;function $l(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jl(){const n=jr("canvas");return n.style.display="block",n}const Mo={};function So(...n){const e="THREE."+n.shift();console.log(e,...n)}function Nc(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ce(...n){n=Nc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function $e(...n){n=Nc(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function La(...n){const e=n.join(" ");e in Mo||(Mo[e]=!0,Ce(...n))}function Ql(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const eu={[qs]:Zs,[Ks]:Js,[js]:Qs,[wi]:$s,[Zs]:qs,[Js]:Ks,[Qs]:js,[$s]:wi};class kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eo=1234567;const ji=Math.PI/180,tr=180/Math.PI;function Ui(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function Za(n,e){return(n%e+e)%e}function tu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function nu(n,e,t){return n!==e?(t-n)/(e-n):0}function $i(n,e,t){return(1-t)*n+t*e}function iu(n,e,t,i){return $i(n,e,1-Math.exp(-t*i))}function ru(n,e=1){return e-Math.abs(Za(n,e*2)-e)}function su(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function au(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ou(n,e){return n+Math.floor(Math.random()*(e-n+1))}function cu(n,e){return n+Math.random()*(e-n)}function lu(n){return n*(.5-Math.random())}function uu(n){n!==void 0&&(Eo=n);let e=Eo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hu(n){return n*ji}function fu(n){return n*tr}function du(n){return(n&n-1)===0&&n!==0}function pu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _u(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),f=s((e-i)/2),u=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,c*f,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*f,o*l);break;case"ZXZ":n.set(c*f,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*m,o*h,o*l);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const yo={DEG2RAD:ji,RAD2DEG:tr,generateUUID:Ui,clamp:Xe,euclideanModulo:Za,mapLinear:tu,inverseLerp:nu,lerp:$i,damp:iu,pingpong:ru,smoothstep:su,smootherstep:au,randInt:ou,randFloat:cu,randFloatSpread:lu,seededRandom:uu,degToRad:hu,radToDeg:fu,isPowerOfTwo:du,ceilPowerOfTwo:pu,floorPowerOfTwo:mu,setQuaternionFromProperEuler:_u,normalize:Lt,denormalize:Ei},no=class no{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};no.prototype.isVector2=!0;let ke=no;class ii{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],m=s[a+1],g=s[a+2],S=s[a+3];if(f!==S||c!==u||l!==m||h!==g){let d=c*u+l*m+h*g+f*S;d<0&&(u=-u,m=-m,g=-g,S=-S,d=-d);let p=1-o;if(d<.9995){const E=Math.acos(d),R=Math.sin(E);p=Math.sin(p*E)/R,o=Math.sin(o*E)/R,c=c*p+u*o,l=l*p+m*o,h=h*p+g*o,f=f*p+S*o}else{c=c*p+u*o,l=l*p+m*o,h=h*p+g*o,f=f*p+S*o;const E=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=E,l*=E,h*=E,f*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[a],u=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*f+c*m-l*u,e[t+1]=c*g+h*u+l*f-o*m,e[t+2]=l*g+h*m+o*u-c*f,e[t+3]=h*g-o*f-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),f=o(s/2),u=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*f+l*m*g,this._y=l*m*f-u*h*g,this._z=l*h*g+u*m*f,this._w=l*h*f-u*m*g;break;case"YXZ":this._x=u*h*f+l*m*g,this._y=l*m*f-u*h*g,this._z=l*h*g-u*m*f,this._w=l*h*f+u*m*g;break;case"ZXY":this._x=u*h*f-l*m*g,this._y=l*m*f+u*h*g,this._z=l*h*g+u*m*f,this._w=l*h*f-u*m*g;break;case"ZYX":this._x=u*h*f-l*m*g,this._y=l*m*f+u*h*g,this._z=l*h*g-u*m*f,this._w=l*h*f+u*m*g;break;case"YZX":this._x=u*h*f+l*m*g,this._y=l*m*f+u*h*g,this._z=l*h*g-u*m*f,this._w=l*h*f-u*m*g;break;case"XZY":this._x=u*h*f-l*m*g,this._y=l*m*f-u*h*g,this._z=l*h*g+u*m*f,this._w=l*h*f+u*m*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const io=class io{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(To.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(To.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*h,this.y=i+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fs.copy(this).projectOnVector(e),this.sub(fs)}reflect(e){return this.sub(fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};io.prototype.isVector3=!0;let O=io;const fs=new O,To=new ii,ro=class ro{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],m=i[5],g=i[8],S=r[0],d=r[3],p=r[6],E=r[1],R=r[4],T=r[7],D=r[2],b=r[5],w=r[8];return s[0]=a*S+o*E+c*D,s[3]=a*d+o*R+c*b,s[6]=a*p+o*T+c*w,s[1]=l*S+h*E+f*D,s[4]=l*d+h*R+f*b,s[7]=l*p+h*T+f*w,s[2]=u*S+m*E+g*D,s[5]=u*d+m*R+g*b,s[8]=u*p+m*T+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,u=o*c-h*s,m=l*s-a*c,g=t*f+i*u+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=f*S,e[1]=(r*l-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=u*S,e[4]=(h*t-r*c)*S,e[5]=(r*s-o*t)*S,e[6]=m*S,e[7]=(i*c-l*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ds.makeScale(e,t)),this}rotate(e){return this.premultiply(ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ro.prototype.isMatrix3=!0;let Oe=ro;const ds=new Oe,bo=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ao=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gu(){const n={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=En(r.r),r.g=En(r.g),r.b=En(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Bn?Zr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return La("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return La("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qr]:{primaries:e,whitePoint:i,transfer:Zr,toXYZ:bo,fromXYZ:Ao,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:bo,fromXYZ:Ao,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}const Ye=gu();function En(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ai(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ci;class xu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ci===void 0&&(ci=jr("canvas")),ci.width=e.width,ci.height=e.height;const r=ci.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ci}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=En(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(En(t[i]/255)*255):t[i]=En(t[i]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vu=0;class Ka{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ps(r[a].image)):s.push(ps(r[a]))}else s=ps(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ps(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Mu=0;const ms=new O;class Dt extends kn{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=Mn,r=Mn,s=yt,a=jn,o=nn,c=Kt,l=Dt.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Ui(),this.name="",this.source=new Ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ms).x}get height(){return this.source.getSize(ms).y}get depth(){return this.source.getSize(ms).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ea:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ea:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Rc;Dt.DEFAULT_ANISOTROPY=1;const so=class so{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],m=c[5],g=c[9],S=c[2],d=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,T=(m+1)/2,D=(p+1)/2,b=(h+u)/4,w=(f+S)/4,x=(g+d)/4;return R>T&&R>D?R<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(R),r=b/i,s=w/i):T>D?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=b/r,s=x/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=w/s,r=x/s),this.set(i,r,s,t),this}let E=Math.sqrt((d-g)*(d-g)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(f-S)/E,this.z=(u-h)/E,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};so.prototype.isVector4=!0;let ft=so;class Su extends kn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Dt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ka(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends Su{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fc extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eu extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ts=class ts{constructor(e,t,i,r,s,a,o,c,l,h,f,u,m,g,S,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,h,f,u,m,g,S,d)}set(e,t,i,r,s,a,o,c,l,h,f,u,m,g,S,d){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=m,p[7]=g,p[11]=S,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ts().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/li.setFromMatrixColumn(e,0).length(),s=1/li.setFromMatrixColumn(e,1).length(),a=1/li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=a*h,m=a*f,g=o*h,S=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=u-S*l,t[9]=-o*c,t[2]=S-u*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,m=c*f,g=l*h,S=l*f;t[0]=u+S*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=S+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,m=c*f,g=l*h,S=l*f;t[0]=u-S*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=S-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,m=a*f,g=o*h,S=o*f;t[0]=c*h,t[4]=g*l-m,t[8]=u*l+S,t[1]=c*f,t[5]=S*l+u,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,m=a*l,g=o*c,S=o*l;t[0]=c*h,t[4]=S-u*f,t[8]=g*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*f+g,t[10]=u-S*f}else if(e.order==="XZY"){const u=a*c,m=a*l,g=o*c,S=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+S,t[5]=a*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*h,t[10]=S*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yu,e,Tu)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Cn.crossVectors(i,Gt),Cn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Cn.crossVectors(i,Gt)),Cn.normalize(),fr.crossVectors(Gt,Cn),r[0]=Cn.x,r[4]=fr.x,r[8]=Gt.x,r[1]=Cn.y,r[5]=fr.y,r[9]=Gt.y,r[2]=Cn.z,r[6]=fr.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],m=i[13],g=i[2],S=i[6],d=i[10],p=i[14],E=i[3],R=i[7],T=i[11],D=i[15],b=r[0],w=r[4],x=r[8],y=r[12],L=r[1],C=r[5],U=r[9],k=r[13],Y=r[2],I=r[6],V=r[10],B=r[14],Q=r[3],ee=r[7],ce=r[11],ve=r[15];return s[0]=a*b+o*L+c*Y+l*Q,s[4]=a*w+o*C+c*I+l*ee,s[8]=a*x+o*U+c*V+l*ce,s[12]=a*y+o*k+c*B+l*ve,s[1]=h*b+f*L+u*Y+m*Q,s[5]=h*w+f*C+u*I+m*ee,s[9]=h*x+f*U+u*V+m*ce,s[13]=h*y+f*k+u*B+m*ve,s[2]=g*b+S*L+d*Y+p*Q,s[6]=g*w+S*C+d*I+p*ee,s[10]=g*x+S*U+d*V+p*ce,s[14]=g*y+S*k+d*B+p*ve,s[3]=E*b+R*L+T*Y+D*Q,s[7]=E*w+R*C+T*I+D*ee,s[11]=E*x+R*U+T*V+D*ce,s[15]=E*y+R*k+T*B+D*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],m=e[14],g=e[3],S=e[7],d=e[11],p=e[15],E=c*m-l*u,R=o*m-l*f,T=o*u-c*f,D=a*m-l*h,b=a*u-c*h,w=a*f-o*h;return t*(S*E-d*R+p*T)-i*(g*E-d*D+p*b)+r*(g*R-S*D+p*w)-s*(g*T-S*b+d*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],m=e[11],g=e[12],S=e[13],d=e[14],p=e[15],E=t*o-i*a,R=t*c-r*a,T=t*l-s*a,D=i*c-r*o,b=i*l-s*o,w=r*l-s*c,x=h*S-f*g,y=h*d-u*g,L=h*p-m*g,C=f*d-u*S,U=f*p-m*S,k=u*p-m*d,Y=E*k-R*U+T*C+D*L-b*y+w*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/Y;return e[0]=(o*k-c*U+l*C)*I,e[1]=(r*U-i*k-s*C)*I,e[2]=(S*w-d*b+p*D)*I,e[3]=(u*b-f*w-m*D)*I,e[4]=(c*L-a*k-l*y)*I,e[5]=(t*k-r*L+s*y)*I,e[6]=(d*T-g*w-p*R)*I,e[7]=(h*w-u*T+m*R)*I,e[8]=(a*U-o*L+l*x)*I,e[9]=(i*L-t*U-s*x)*I,e[10]=(g*b-S*T+p*E)*I,e[11]=(f*T-h*b-m*E)*I,e[12]=(o*y-a*C-c*x)*I,e[13]=(t*C-i*y+r*x)*I,e[14]=(S*R-g*D-d*E)*I,e[15]=(h*D-f*R+u*E)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,f=o+o,u=s*l,m=s*h,g=s*f,S=a*h,d=a*f,p=o*f,E=c*l,R=c*h,T=c*f,D=i.x,b=i.y,w=i.z;return r[0]=(1-(S+p))*D,r[1]=(m+T)*D,r[2]=(g-R)*D,r[3]=0,r[4]=(m-T)*b,r[5]=(1-(u+p))*b,r[6]=(d+E)*b,r[7]=0,r[8]=(g+R)*w,r[9]=(d-E)*w,r[10]=(1-(u+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=li.set(r[0],r[1],r[2]).length();const o=li.set(r[4],r[5],r[6]).length(),c=li.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Jt.copy(this);const l=1/a,h=1/o,f=1/c;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=un,c=!1){const l=this.elements,h=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),m=(i+r)/(i-r);let g,S;if(c)g=s/(a-s),S=a*s/(a-s);else if(o===un)g=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Kr)g=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=un,c=!1){const l=this.elements,h=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),m=-(i+r)/(i-r);let g,S;if(c)g=1/(a-s),S=a/(a-s);else if(o===un)g=-2/(a-s),S=-(a+s)/(a-s);else if(o===Kr)g=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ts.prototype.isMatrix4=!0;let mt=ts;const li=new O,Jt=new mt,yu=new O(0,0,0),Tu=new O(1,1,1),Cn=new O,fr=new O,Gt=new O,Ro=new mt,wo=new ii;class ti{constructor(e=0,t=0,i=0,r=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ro,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wo.setFromEuler(this),this.setFromQuaternion(wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Oc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bu=0;const Co=new O,ui=new ii,mn=new mt,dr=new O,Hi=new O,Au=new O,Ru=new ii,Po=new O(1,0,0),Do=new O(0,1,0),Lo=new O(0,0,1),Uo={type:"added"},wu={type:"removed"},hi={type:"childadded",child:null},_s={type:"childremoved",child:null};class Bt extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new O,t=new ti,i=new ii,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Oe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(Po,e)}rotateY(e){return this.rotateOnAxis(Do,e)}rotateZ(e){return this.rotateOnAxis(Lo,e)}translateOnAxis(e,t){return Co.copy(e).applyQuaternion(this.quaternion),this.position.add(Co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Po,e)}translateY(e){return this.translateOnAxis(Do,e)}translateZ(e){return this.translateOnAxis(Lo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dr.copy(e):dr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Hi,dr,this.up):mn.lookAt(dr,Hi,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),ui.setFromRotationMatrix(mn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uo),hi.child=e,this.dispatchEvent(hi),hi.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wu),_s.child=e,this.dispatchEvent(_s),_s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uo),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Au),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new O(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jn extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cu={type:"move"};class gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const d=t.getJointPose(S,i),p=this._getHandJoint(l,S);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cu)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function xs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=Za(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=xs(a,s,e+1/3),this.g=xs(a,s,e),this.b=xs(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=Ht){function i(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const i=Bc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Ye.workingToColorSpace(Pt.copy(this),e),Math.round(Xe(Pt.r*255,0,255))*65536+Math.round(Xe(Pt.g*255,0,255))*256+Math.round(Xe(Pt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Ht){Ye.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(pr);const i=$i(Pn.h,pr.h,t),r=$i(Pn.s,pr.s,t),s=$i(Pn.l,pr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Je;Je.NAMES=Bc;class Pu extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qt=new O,_n=new O,vs=new O,gn=new O,fi=new O,di=new O,Io=new O,Ms=new O,Ss=new O,Es=new O,ys=new ft,Ts=new ft,bs=new ft;class tn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qt.subVectors(r,t),_n.subVectors(i,t),vs.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(_n),c=Qt.dot(vs),l=_n.dot(_n),h=_n.dot(vs),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,m=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(o,gn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return ys.setScalar(0),Ts.setScalar(0),bs.setScalar(0),ys.fromBufferAttribute(e,t),Ts.fromBufferAttribute(e,i),bs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ys,s.x),a.addScaledVector(Ts,s.y),a.addScaledVector(bs,s.z),a}static isFrontFacing(e,t,i,r){return Qt.subVectors(i,t),_n.subVectors(e,t),Qt.cross(_n).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Qt.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;fi.subVectors(r,i),di.subVectors(s,i),Ms.subVectors(e,i);const c=fi.dot(Ms),l=di.dot(Ms);if(c<=0&&l<=0)return t.copy(i);Ss.subVectors(e,r);const h=fi.dot(Ss),f=di.dot(Ss);if(h>=0&&f<=h)return t.copy(r);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(fi,a);Es.subVectors(e,s);const m=fi.dot(Es),g=di.dot(Es);if(g>=0&&m<=g)return t.copy(s);const S=m*l-c*g;if(S<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(di,o);const d=h*g-m*f;if(d<=0&&f-h>=0&&m-g>=0)return Io.subVectors(s,r),o=(f-h)/(f-h+(m-g)),t.copy(r).addScaledVector(Io,o);const p=1/(d+S+u);return a=S*p,o=u*p,t.copy(i).addScaledVector(fi,a).addScaledVector(di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mr.copy(i.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),_r.subVectors(this.max,ki),pi.subVectors(e.a,ki),mi.subVectors(e.b,ki),_i.subVectors(e.c,ki),Dn.subVectors(mi,pi),Ln.subVectors(_i,mi),Wn.subVectors(pi,_i);let t=[0,-Dn.z,Dn.y,0,-Ln.z,Ln.y,0,-Wn.z,Wn.y,Dn.z,0,-Dn.x,Ln.z,0,-Ln.x,Wn.z,0,-Wn.x,-Dn.y,Dn.x,0,-Ln.y,Ln.x,0,-Wn.y,Wn.x,0];return!As(t,pi,mi,_i,_r)||(t=[1,0,0,0,1,0,0,0,1],!As(t,pi,mi,_i,_r))?!1:(gr.crossVectors(Dn,Ln),t=[gr.x,gr.y,gr.z],As(t,pi,mi,_i,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xn=[new O,new O,new O,new O,new O,new O,new O,new O],en=new O,mr=new rr,pi=new O,mi=new O,_i=new O,Dn=new O,Ln=new O,Wn=new O,ki=new O,_r=new O,gr=new O,Xn=new O;function As(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Xn.fromArray(n,s);const o=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),c=e.dot(Xn),l=t.dot(Xn),h=i.dot(Xn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const xt=new O,xr=new ke;let Du=0;class Wt extends kn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Du++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xo,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class zc extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gc extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rt extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Lu=new rr,Wi=new O,Rs=new O;class is{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Lu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Wi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(Rs)),this.expandByPoint(Wi.copy(e.center).sub(Rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Uu=0;const qt=new mt,ws=new Bt,gi=new O,Vt=new rr,Xi=new rr,Et=new O;class Nt extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($l(e)?Gc:zc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return ws.lookAt(e),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Vt.min,Xi.min),Vt.expandByPoint(Et),Et.addVectors(Vt.max,Xi.max),Vt.expandByPoint(Et)):(Vt.expandByPoint(Xi.min),Vt.expandByPoint(Xi.max))}Vt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Et.fromBufferAttribute(o,l),c&&(gi.fromBufferAttribute(e,l),Et.add(gi)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new O,c[x]=new O;const l=new O,h=new O,f=new O,u=new ke,m=new ke,g=new ke,S=new O,d=new O;function p(x,y,L){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,y),f.fromBufferAttribute(i,L),u.fromBufferAttribute(s,x),m.fromBufferAttribute(s,y),g.fromBufferAttribute(s,L),h.sub(l),f.sub(l),m.sub(u),g.sub(u);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(C),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),o[x].add(S),o[y].add(S),o[L].add(S),c[x].add(d),c[y].add(d),c[L].add(d))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,y=E.length;x<y;++x){const L=E[x],C=L.start,U=L.count;for(let k=C,Y=C+U;k<Y;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const R=new O,T=new O,D=new O,b=new O;function w(x){D.fromBufferAttribute(r,x),b.copy(D);const y=o[x];R.copy(y),R.sub(D.multiplyScalar(D.dot(y))).normalize(),T.crossVectors(b,y);const C=T.dot(c[x])<0?-1:1;a.setXYZW(x,R.x,R.y,R.z,C)}for(let x=0,y=E.length;x<y;++x){const L=E[x],C=L.start,U=L.count;for(let k=C,Y=C+U;k<Y;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,h=new O,f=new O;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),S=e.getX(u+1),d=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,d),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,d),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let m=0,g=0;for(let S=0,d=c.length;S<d;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*h;for(let p=0;p<h;p++)u[g++]=l[m++]}return new Wt(u,h,f)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],m=e(u,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Iu=0;class sr extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=bi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xs,this.blendDst=Ys,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(i.blending=this.blending),this.side!==Hn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xs&&(i.blendSrc=this.blendSrc),this.blendDst!==Ys&&(i.blendDst=this.blendDst),this.blendEquation!==Zn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==go&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vn=new O,Cs=new O,vr=new O,Un=new O,Ps=new O,Mr=new O,Ds=new O;class Vc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Cs.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(Cs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(vr),o=Un.dot(this.direction),c=-Un.dot(vr),l=Un.lengthSq(),h=Math.abs(1-a*a);let f,u,m,g;if(h>0)if(f=a*c-o,u=a*o-c,g=s*h,f>=0)if(u>=-g)if(u<=g){const S=1/h;f*=S,u*=S,m=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Cs).addScaledVector(vr,u),m}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const i=vn.dot(this.direction),r=vn.dot(vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,i,r,s){Ps.subVectors(t,e),Mr.subVectors(i,e),Ds.crossVectors(Ps,Mr);let a=this.direction.dot(Ds),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,e);const c=o*this.direction.dot(Mr.crossVectors(Un,Mr));if(c<0)return null;const l=o*this.direction.dot(Ps.cross(Un));if(l<0||c+l>a)return null;const h=-o*Un.dot(Ds);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gn extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const No=new mt,Yn=new Vc,Sr=new is,Fo=new O,Er=new O,yr=new O,Tr=new O,Ls=new O,br=new O,Oo=new O,Ar=new O;class bt extends Bt{constructor(e=new Nt,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){br.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(Ls.fromBufferAttribute(f,e),a?br.addScaledVector(Ls,h):br.addScaledVector(Ls.sub(t),h))}t.add(br)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere),Sr.applyMatrix4(s),Yn.copy(e.ray).recast(e.near),!(Sr.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Sr,Fo)===null||Yn.origin.distanceToSquared(Fo)>(e.far-e.near)**2))&&(No.copy(s).invert(),Yn.copy(e.ray).applyMatrix4(No),!(i.boundingBox!==null&&Yn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const d=u[g],p=a[d.materialIndex],E=Math.max(d.start,m.start),R=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let T=E,D=R;T<D;T+=3){const b=o.getX(T),w=o.getX(T+1),x=o.getX(T+2);r=Rr(this,p,e,i,l,h,f,b,w,x),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let d=g,p=S;d<p;d+=3){const E=o.getX(d),R=o.getX(d+1),T=o.getX(d+2);r=Rr(this,a,e,i,l,h,f,E,R,T),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){const d=u[g],p=a[d.materialIndex],E=Math.max(d.start,m.start),R=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let T=E,D=R;T<D;T+=3){const b=T,w=T+1,x=T+2;r=Rr(this,p,e,i,l,h,f,b,w,x),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let d=g,p=S;d<p;d+=3){const E=d,R=d+1,T=d+2;r=Rr(this,a,e,i,l,h,f,E,R,T),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function Nu(n,e,t,i,r,s,a,o){let c;if(e.side===Ot?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Hn,o),c===null)return null;Ar.copy(o),Ar.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ar);return l<t.near||l>t.far?null:{distance:l,point:Ar.clone(),object:n}}function Rr(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Er),n.getVertexPosition(c,yr),n.getVertexPosition(l,Tr);const h=Nu(n,e,t,i,Er,yr,Tr,Oo);if(h){const f=new O;tn.getBarycoord(Oo,Er,yr,Tr,f),r&&(h.uv=tn.getInterpolatedAttribute(r,o,c,l,f,new ke)),s&&(h.uv1=tn.getInterpolatedAttribute(s,o,c,l,f,new ke)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,c,l,f,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new O,materialIndex:0};tn.getNormal(Er,yr,Tr,u.normal),h.face=u,h.barycoord=f}return h}class Fu extends Dt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=At,h=At,f,u){super(null,a,o,c,l,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Us=new O,Ou=new O,Bu=new Oe;class Fn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Us.subVectors(i,t).cross(Ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Us),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bu.getNormalMatrix(e),r=this.coplanarPoint(Us).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new is,zu=new ke(.5,.5),wr=new O;class Hc{constructor(e=new Fn,t=new Fn,i=new Fn,r=new Fn,s=new Fn,a=new Fn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=un,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],f=s[5],u=s[6],m=s[7],g=s[8],S=s[9],d=s[10],p=s[11],E=s[12],R=s[13],T=s[14],D=s[15];if(r[0].setComponents(l-a,m-h,p-g,D-E).normalize(),r[1].setComponents(l+a,m+h,p+g,D+E).normalize(),r[2].setComponents(l+o,m+f,p+S,D+R).normalize(),r[3].setComponents(l-o,m-f,p-S,D-R).normalize(),i)r[4].setComponents(c,u,d,T).normalize(),r[5].setComponents(l-c,m-u,p-d,D-T).normalize();else if(r[4].setComponents(l-c,m-u,p-d,D-T).normalize(),t===un)r[5].setComponents(l+c,m+u,p+d,D+T).normalize();else if(t===Kr)r[5].setComponents(c,u,d,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){qn.center.set(0,0,0);const t=zu.distanceTo(e.center);return qn.radius=.7071067811865476+t,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(wr.x=r.normal.x>0?e.max.x:e.min.x,wr.y=r.normal.y>0?e.max.y:e.min.y,wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ua extends sr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bo=new mt,Ia=new Vc,Cr=new is,Pr=new O;class zo extends Bt{constructor(e=new Nt,t=new Ua){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(r),Cr.radius+=s,e.ray.intersectsSphere(Cr)===!1)return;Bo.copy(r).invert(),Ia.copy(e.ray).applyMatrix4(Bo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=u,S=m;g<S;g++){const d=l.getX(g);Pr.fromBufferAttribute(f,d),Go(Pr,d,c,r,e,t,this)}}else{const u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=u,S=m;g<S;g++)Pr.fromBufferAttribute(f,g),Go(Pr,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Go(n,e,t,i,r,s,a){const o=Ia.distanceSqToPoint(n);if(o<t){const c=new O;Ia.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class kc extends Dt{constructor(e=[],t=Qn,i,r,s,a,o,c,l,h){super(e,t,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gu extends Dt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pi extends Dt{constructor(e,t,i=fn,r,s,a,o=At,c=At,l,h=yn,f=1){if(h!==yn&&h!==$n)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ka(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vu extends Pi{constructor(e,t=fn,i=Qn,r,s,a=At,o=At,c,l=yn){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wc extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ii extends Nt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2));function g(S,d,p,E,R,T,D,b,w,x,y){const L=T/w,C=D/x,U=T/2,k=D/2,Y=b/2,I=w+1,V=x+1;let B=0,Q=0;const ee=new O;for(let ce=0;ce<V;ce++){const ve=ce*C-k;for(let ye=0;ye<I;ye++){const Ie=ye*L-U;ee[S]=Ie*E,ee[d]=ve*R,ee[p]=Y,l.push(ee.x,ee.y,ee.z),ee[S]=0,ee[d]=0,ee[p]=b>0?1:-1,h.push(ee.x,ee.y,ee.z),f.push(ye/w),f.push(1-ce/x),B+=1}}for(let ce=0;ce<x;ce++)for(let ve=0;ve<w;ve++){const ye=u+ve+I*ce,Ie=u+ve+I*(ce+1),Qe=u+(ve+1)+I*(ce+1),Ne=u+(ve+1)+I*ce;c.push(ye,Ie,Ne),c.push(Ie,Qe,Ne),Q+=6}o.addGroup(m,Q,y),m+=Q,u+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ja extends Nt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new O,h=new ke;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const m=i+f/t*r;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(o,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class $r extends Nt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],m=[];let g=0;const S=[],d=i/2;let p=0;E(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(m,2));function E(){const T=new O,D=new O;let b=0;const w=(t-e)/i;for(let x=0;x<=s;x++){const y=[],L=x/s,C=L*(t-e)+e;for(let U=0;U<=r;U++){const k=U/r,Y=k*c+o,I=Math.sin(Y),V=Math.cos(Y);D.x=C*I,D.y=-L*i+d,D.z=C*V,f.push(D.x,D.y,D.z),T.set(I,w,V).normalize(),u.push(T.x,T.y,T.z),m.push(k,1-L),y.push(g++)}S.push(y)}for(let x=0;x<r;x++)for(let y=0;y<s;y++){const L=S[y][x],C=S[y+1][x],U=S[y+1][x+1],k=S[y][x+1];(e>0||y!==0)&&(h.push(L,C,k),b+=3),(t>0||y!==s-1)&&(h.push(C,U,k),b+=3)}l.addGroup(p,b,0),p+=b}function R(T){const D=g,b=new ke,w=new O;let x=0;const y=T===!0?e:t,L=T===!0?1:-1;for(let U=1;U<=r;U++)f.push(0,d*L,0),u.push(0,L,0),m.push(.5,.5),g++;const C=g;for(let U=0;U<=r;U++){const Y=U/r*c+o,I=Math.cos(Y),V=Math.sin(Y);w.x=y*V,w.y=d*L,w.z=y*I,f.push(w.x,w.y,w.z),u.push(0,L,0),b.x=I*.5+.5,b.y=V*.5*L+.5,m.push(b.x,b.y),g++}for(let U=0;U<r;U++){const k=D+U,Y=C+U;T===!0?h.push(Y,Y+1,k):h.push(Y+1,Y,k),x+=3}l.addGroup(p,x,T===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ar extends Nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,f=e/o,u=t/c,m=[],g=[],S=[],d=[];for(let p=0;p<h;p++){const E=p*u-a;for(let R=0;R<l;R++){const T=R*f-s;g.push(T,-E,0),S.push(0,0,1),d.push(R/o),d.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const R=E+l*p,T=E+l*(p+1),D=E+1+l*(p+1),b=E+1+l*p;m.push(R,T,b),m.push(T,D,b)}this.setIndex(m),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(S,3)),this.setAttribute("uv",new Rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.widthSegments,e.heightSegments)}}function Di(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Vo(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Vo(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=Di(n[t]);for(const r in i)e[r]=i[r]}return e}function Vo(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Hu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Yc={clone:Di,merge:Ut};var ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ku,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=Hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xu extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yu extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qu extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dr=new O,Lr=new ii,an=new O;class qc extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Dr,Lr,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Lr,an.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Dr,Lr,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Lr,an.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const In=new O,Ho=new ke,ko=new ke;class Zt extends qc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(In.x,In.y).multiplyScalar(-e/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(In.x,In.y).multiplyScalar(-e/In.z)}getViewSize(e,t){return this.getViewBounds(e,Ho,ko),t.subVectors(ko,Ho)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ji*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Zc extends qc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=-90,vi=1;class Kc extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zt(xi,vi,e,t);r.layers=this.layers,this.add(r);const s=new Zt(xi,vi,e,t);s.layers=this.layers,this.add(s);const a=new Zt(xi,vi,e,t);a.layers=this.layers,this.add(a);const o=new Zt(xi,vi,e,t);o.layers=this.layers,this.add(o);const c=new Zt(xi,vi,e,t);c.layers=this.layers,this.add(c);const l=new Zt(xi,vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Zu extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ku{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ao=class ao{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};ao.prototype.isMatrix2=!0;let Wo=ao;class ju extends kn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Xo(n,e,t,i){const r=$u(i);switch(t){case Lc:return n*e;case Ic:return n*e/r.components*r.byteLength;case ka:return n*e/r.components*r.byteLength;case ei:return n*e*2/r.components*r.byteLength;case Wa:return n*e*2/r.components*r.byteLength;case Uc:return n*e*3/r.components*r.byteLength;case nn:return n*e*4/r.components*r.byteLength;case Xa:return n*e*4/r.components*r.byteLength;case Gr:case Vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hr:case kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ia:case sa:return Math.max(n,16)*Math.max(e,8)/4;case na:case ra:return Math.max(n,8)*Math.max(e,8)/2;case aa:case oa:case la:case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ca:case Xr:case ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case da:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ma:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _a:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ga:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case va:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ma:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ya:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ta:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ba:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Aa:case Ra:case wa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ca:case Pa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yr:case Da:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $u(n){switch(n){case Kt:case wc:return{byteLength:1,components:1};case Qi:case Cc:case dn:return{byteLength:2,components:1};case Va:case Ha:return{byteLength:2,components:4};case fn:case Ga:case ln:return{byteLength:4,components:1};case Pc:case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ju(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){const g=f[u],S=f[m];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,f[u]=S)}f.length=u+1;for(let m=0,g=f.length;m<g;m++){const S=f[m];n.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eh=`#ifdef USE_ALPHAHASH
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
#endif`,th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sh=`#ifdef USE_AOMAP
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
#endif`,ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oh=`#ifdef USE_BATCHING
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
#endif`,ch=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fh=`#ifdef USE_IRIDESCENCE
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
#endif`,dh=`#ifdef USE_BUMPMAP
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
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Eh=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Th=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gh=`#ifdef USE_GRADIENTMAP
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
}`,Vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wh=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#include <lightprobes_pars_fragment>`,Xh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,$h=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Jh=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uf=`#if defined( USE_POINTS_UV )
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
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
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
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
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
#endif`,Tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,If=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vf=`#ifdef USE_SKINNING
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
#endif`,Hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
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
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zf=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kf=`#ifdef USE_TRANSMISSION
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
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,td=`uniform sampler2D t2D;
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
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`#include <common>
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
}`,od=`#if DEPTH_PACKING == 3200
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
}`,cd=`#define DISTANCE
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
}`,ld=`#define DISTANCE
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
void main () {
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
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`uniform float scale;
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
}`,dd=`uniform vec3 diffuse;
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
}`,pd=`#include <common>
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
}`,md=`uniform vec3 diffuse;
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
}`,_d=`#define LAMBERT
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
}`,gd=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,xd=`#define MATCAP
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
}`,vd=`#define MATCAP
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
}`,Md=`#define NORMAL
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
}`,Sd=`#define NORMAL
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
}`,Ed=`#define PHONG
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
}`,yd=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,Td=`#define STANDARD
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
}`,bd=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <cube_uv_reflection_fragment>
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
}`,Ad=`#define TOON
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
}`,Rd=`#define TOON
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
}`,wd=`uniform float size;
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
}`,Cd=`uniform vec3 diffuse;
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
}`,Pd=`#include <common>
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
}`,Dd=`uniform vec3 color;
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
}`,Ld=`uniform float rotation;
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
}`,Ud=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Qu,alphahash_pars_fragment:eh,alphamap_fragment:th,alphamap_pars_fragment:nh,alphatest_fragment:ih,alphatest_pars_fragment:rh,aomap_fragment:sh,aomap_pars_fragment:ah,batching_pars_vertex:oh,batching_vertex:ch,begin_vertex:lh,beginnormal_vertex:uh,bsdfs:hh,iridescence_fragment:fh,bumpmap_pars_fragment:dh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:mh,clipping_planes_pars_vertex:_h,clipping_planes_vertex:gh,color_fragment:xh,color_pars_fragment:vh,color_pars_vertex:Mh,color_vertex:Sh,common:Eh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:Th,displacementmap_pars_vertex:bh,displacementmap_vertex:Ah,emissivemap_fragment:Rh,emissivemap_pars_fragment:wh,colorspace_fragment:Ch,colorspace_pars_fragment:Ph,envmap_fragment:Dh,envmap_common_pars_fragment:Lh,envmap_pars_fragment:Uh,envmap_pars_vertex:Ih,envmap_physical_pars_fragment:Xh,envmap_vertex:Nh,fog_vertex:Fh,fog_pars_vertex:Oh,fog_fragment:Bh,fog_pars_fragment:zh,gradientmap_pars_fragment:Gh,lightmap_pars_fragment:Vh,lights_lambert_fragment:Hh,lights_lambert_pars_fragment:kh,lights_pars_begin:Wh,lights_toon_fragment:Yh,lights_toon_pars_fragment:qh,lights_phong_fragment:Zh,lights_phong_pars_fragment:Kh,lights_physical_fragment:jh,lights_physical_pars_fragment:$h,lights_fragment_begin:Jh,lights_fragment_maps:Qh,lights_fragment_end:ef,lightprobes_pars_fragment:tf,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:cf,map_particle_fragment:lf,map_particle_pars_fragment:uf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:ff,morphinstance_vertex:df,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:_f,morphtarget_vertex:gf,normal_fragment_begin:xf,normal_fragment_maps:vf,normal_pars_fragment:Mf,normal_pars_vertex:Sf,normal_vertex:Ef,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:Tf,clearcoat_normal_fragment_maps:bf,clearcoat_pars_fragment:Af,iridescence_pars_fragment:Rf,opaque_fragment:wf,packing:Cf,premultiplied_alpha_fragment:Pf,project_vertex:Df,dithering_fragment:Lf,dithering_pars_fragment:Uf,roughnessmap_fragment:If,roughnessmap_pars_fragment:Nf,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Of,shadowmap_vertex:Bf,shadowmask_pars_fragment:zf,skinbase_vertex:Gf,skinning_pars_vertex:Vf,skinning_vertex:Hf,skinnormal_vertex:kf,specularmap_fragment:Wf,specularmap_pars_fragment:Xf,tonemapping_fragment:Yf,tonemapping_pars_fragment:qf,transmission_fragment:Zf,transmission_pars_fragment:Kf,uv_pars_fragment:jf,uv_pars_vertex:$f,uv_vertex:Jf,worldpos_vertex:Qf,background_vert:ed,background_frag:td,backgroundCube_vert:nd,backgroundCube_frag:id,cube_vert:rd,cube_frag:sd,depth_vert:ad,depth_frag:od,distance_vert:cd,distance_frag:ld,equirect_vert:ud,equirect_frag:hd,linedashed_vert:fd,linedashed_frag:dd,meshbasic_vert:pd,meshbasic_frag:md,meshlambert_vert:_d,meshlambert_frag:gd,meshmatcap_vert:xd,meshmatcap_frag:vd,meshnormal_vert:Md,meshnormal_frag:Sd,meshphong_vert:Ed,meshphong_frag:yd,meshphysical_vert:Td,meshphysical_frag:bd,meshtoon_vert:Ad,meshtoon_frag:Rd,points_vert:wd,points_frag:Cd,shadow_vert:Pd,shadow_frag:Dd,sprite_vert:Ld,sprite_frag:Ud},fe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},cn={basic:{uniforms:Ut([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ut([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ut([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ut([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ut([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ut([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ut([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ut([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ut([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ut([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ut([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Ut([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Ut([fe.lights,fe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};cn.physical={uniforms:Ut([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ur={r:0,b:0,g:0},Id=new mt,$c=new Oe;$c.set(-1,0,0,0,1,0,0,0,1);function Nd(n,e,t,i,r,s){const a=new Je(0);let o=r===!0?0:1,c,l,h=null,f=0,u=null;function m(E){let R=E.isScene===!0?E.background:null;if(R&&R.isTexture){const T=E.backgroundBlurriness>0;R=e.get(R,T)}return R}function g(E){let R=!1;const T=m(E);T===null?d(a,o):T&&T.isColor&&(d(T,1),R=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(E,R){const T=m(R);T&&(T.isCubeTexture||T.mapping===ns)?(l===void 0&&(l=new bt(new Ii(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:Di(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(D,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=T,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Id.makeRotationFromEuler(R.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply($c),l.material.toneMapped=Ye.getTransfer(T.colorSpace)!==nt,(h!==T||f!==T.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=T,f=T.version,u=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new bt(new ar(2,2),new jt({name:"BackgroundMaterial",uniforms:Di(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(T.colorSpace)!==nt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,u=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,R){E.getRGB(Ur,Xc(n)),t.buffers.color.setClear(Ur.r,Ur.g,Ur.b,R,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,R=1){a.set(E),o=R,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,d(a,o)},render:g,addToRenderList:S,dispose:p}}function Fd(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(C,U,k,Y,I){let V=!1;const B=f(C,Y,k,U);s!==B&&(s=B,l(s.object)),V=m(C,Y,k,I),V&&g(C,Y,k,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,T(C,U,k,Y),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function f(C,U,k,Y){const I=Y.wireframe===!0;let V=i[U.id];V===void 0&&(V={},i[U.id]=V);const B=C.isInstancedMesh===!0?C.id:0;let Q=V[B];Q===void 0&&(Q={},V[B]=Q);let ee=Q[k.id];ee===void 0&&(ee={},Q[k.id]=ee);let ce=ee[I];return ce===void 0&&(ce=u(c()),ee[I]=ce),ce}function u(C){const U=[],k=[],Y=[];for(let I=0;I<t;I++)U[I]=0,k[I]=0,Y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:Y,object:C,attributes:{},index:null}}function m(C,U,k,Y){const I=s.attributes,V=U.attributes;let B=0;const Q=k.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const ve=I[ee];let ye=V[ee];if(ye===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(ye=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(ye=C.instanceColor)),ve===void 0||ve.attribute!==ye||ye&&ve.data!==ye.data)return!0;B++}return s.attributesNum!==B||s.index!==Y}function g(C,U,k,Y){const I={},V=U.attributes;let B=0;const Q=k.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let ve=V[ee];ve===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor));const ye={};ye.attribute=ve,ve&&ve.data&&(ye.data=ve.data),I[ee]=ye,B++}s.attributes=I,s.attributesNum=B,s.index=Y}function S(){const C=s.newAttributes;for(let U=0,k=C.length;U<k;U++)C[U]=0}function d(C){p(C,0)}function p(C,U){const k=s.newAttributes,Y=s.enabledAttributes,I=s.attributeDivisors;k[C]=1,Y[C]===0&&(n.enableVertexAttribArray(C),Y[C]=1),I[C]!==U&&(n.vertexAttribDivisor(C,U),I[C]=U)}function E(){const C=s.newAttributes,U=s.enabledAttributes;for(let k=0,Y=U.length;k<Y;k++)U[k]!==C[k]&&(n.disableVertexAttribArray(k),U[k]=0)}function R(C,U,k,Y,I,V,B){B===!0?n.vertexAttribIPointer(C,U,k,I,V):n.vertexAttribPointer(C,U,k,Y,I,V)}function T(C,U,k,Y){S();const I=Y.attributes,V=k.getAttributes(),B=U.defaultAttributeValues;for(const Q in V){const ee=V[Q];if(ee.location>=0){let ce=I[Q];if(ce===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const ve=ce.normalized,ye=ce.itemSize,Ie=e.get(ce);if(Ie===void 0)continue;const Qe=Ie.buffer,Ne=Ie.type,j=Ie.bytesPerElement,ue=Ne===n.INT||Ne===n.UNSIGNED_INT||ce.gpuType===Ga;if(ce.isInterleavedBufferAttribute){const se=ce.data,Re=se.stride,Ue=ce.offset;if(se.isInstancedInterleavedBuffer){for(let we=0;we<ee.locationSize;we++)p(ee.location+we,se.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<ee.locationSize;we++)d(ee.location+we);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let we=0;we<ee.locationSize;we++)R(ee.location+we,ye/ee.locationSize,Ne,ve,Re*j,(Ue+ye/ee.locationSize*we)*j,ue)}else{if(ce.isInstancedBufferAttribute){for(let se=0;se<ee.locationSize;se++)p(ee.location+se,ce.meshPerAttribute);C.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let se=0;se<ee.locationSize;se++)d(ee.location+se);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let se=0;se<ee.locationSize;se++)R(ee.location+se,ye/ee.locationSize,Ne,ve,ye*j,ye/ee.locationSize*se*j,ue)}}else if(B!==void 0){const ve=B[Q];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(ee.location,ve);break;case 3:n.vertexAttrib3fv(ee.location,ve);break;case 4:n.vertexAttrib4fv(ee.location,ve);break;default:n.vertexAttrib1fv(ee.location,ve)}}}}E()}function D(){y();for(const C in i){const U=i[C];for(const k in U){const Y=U[k];for(const I in Y){const V=Y[I];for(const B in V)h(V[B].object),delete V[B];delete Y[I]}}delete i[C]}}function b(C){if(i[C.id]===void 0)return;const U=i[C.id];for(const k in U){const Y=U[k];for(const I in Y){const V=Y[I];for(const B in V)h(V[B].object),delete V[B];delete Y[I]}}delete i[C.id]}function w(C){for(const U in i){const k=i[U];for(const Y in k){const I=k[Y];if(I[C.id]===void 0)continue;const V=I[C.id];for(const B in V)h(V[B].object),delete V[B];delete I[C.id]}}}function x(C){for(const U in i){const k=i[U],Y=C.isInstancedMesh===!0?C.id:0,I=k[Y];if(I!==void 0){for(const V in I){const B=I[V];for(const Q in B)h(B[Q].object),delete B[Q];delete I[V]}delete k[Y],Object.keys(k).length===0&&delete i[U]}}}function y(){L(),a=!0,s!==r&&(s=r,l(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:y,resetDefaultState:L,dispose:D,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:d,disableUnusedAttributes:E}}function Od(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let m=0;m<h;m++)u+=l[m];t.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Bd(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==nn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Kt&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ln&&!x)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Ce("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:E,maxVaryings:R,maxFragmentUniforms:T,maxSamples:D,samples:b}}function zd(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Fn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const m=f.length!==0||u||i!==0||r;return r=u,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,m){const g=f.clippingPlanes,S=f.clipIntersection,d=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?h(null):l();else{const E=s?0:i,R=E*4;let T=p.clippingState||null;c.value=T,T=h(g,u,R,m);for(let D=0;D!==R;++D)T[D]=t[D];p.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,m,g){const S=f!==null?f.length:0;let d=null;if(S!==0){if(d=c.value,g!==!0||d===null){const p=m+S*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(d===null||d.length<p)&&(d=new Float32Array(p));for(let R=0,T=m;R!==S;++R,T+=4)a.copy(f[R]).applyMatrix4(E,o),a.normal.toArray(d,T),d[T+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,d}}const Vn=4,Yo=[.125,.215,.35,.446,.526,.582],Kn=20,Gd=256,Yi=new Zc,qo=new Je;let Is=null,Ns=0,Fs=0,Os=!1;const Vd=new O;class Zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Vd}=s;Is=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Is,Ns,Fs),this._renderer.xr.enabled=Os,e.scissorTest=!1,Mi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qn||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Is=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),Os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:dn,format:nn,colorSpace:qr,depthBuffer:!1},r=Ko(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ko(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hd(s)),this._blurMaterial=Wd(s,e,t),this._ggxMaterial=kd(s,e,t)}return r}_compileMaterial(e){const t=new bt(new Nt,e);this._renderer.compile(t,Yi)}_sceneToCubeUV(e,t,i,r,s){const c=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(qo),f.toneMapping=hn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new Ii,new Gn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,d=S.material;let p=!1;const E=e.background;E?E.isColor&&(d.color.copy(E),e.background=null,p=!0):(d.color.copy(qo),p=!0);for(let R=0;R<6;R++){const T=R%3;T===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[R],s.y,s.z)):T===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[R]));const D=this._cubeSize;Mi(r,T*D,R>2?D:0,D,D),f.setRenderTarget(r),p&&f.render(S,c),f.render(e,c)}f.toneMapping=m,f.autoClear=u,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qn||e.mapping===Ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Mi(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Yi)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=0+l*1.25,m=f*u,{_lodMax:g}=this,S=this._sizeLods[i],d=3*S*(i>g-Vn?i-g+Vn:0),p=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-t,Mi(s,d,p,3*S,2*S),r.setRenderTarget(s),r.render(o,Yi),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,Mi(e,d,p,3*S,2*S),r.setRenderTarget(e),r.render(o,Yi)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=l;const u=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),S=s/g,d=isFinite(s)?1+Math.floor(h*S):Kn;d>Kn&&Ce(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Kn}`);const p=[];let E=0;for(let w=0;w<Kn;++w){const x=w/S,y=Math.exp(-x*x/2);p.push(y),w===0?E+=y:w<d&&(E+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/E;u.envMap.value=e.texture,u.samples.value=d,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:R}=this;u.dTheta.value=g,u.mipInt.value=R-i;const T=this._sizeLods[r],D=3*T*(r>R-Vn?r-R+Vn:0),b=4*(this._cubeSize-T);Mi(t,D,b,3*T,2*T),c.setRenderTarget(t),c.render(f,Yi)}}function Hd(n){const e=[],t=[],i=[];let r=n;const s=n-Vn+1+Yo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Vn?c=Yo[a-n+Vn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,S=3,d=2,p=1,E=new Float32Array(S*g*m),R=new Float32Array(d*g*m),T=new Float32Array(p*g*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,x=b>2?0:-1,y=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];E.set(y,S*g*b),R.set(u,d*g*b);const L=[b,b,b,b,b,b];T.set(L,p*g*b)}const D=new Nt;D.setAttribute("position",new Wt(E,S)),D.setAttribute("uv",new Wt(R,d)),D.setAttribute("faceIndex",new Wt(T,p)),i.push(new bt(D,null)),r>Vn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ko(n,e,t){const i=new rn(n,e,t);return i.texture.mapping=ns,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function kd(n,e,t){return new jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Wd(n,e,t){const i=new Float32Array(Kn),r=new O(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function jo(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function $o(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function rs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $a extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new kc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),s=new jt({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Sn});s.uniforms.tEquirect.value=t;const a=new bt(r,s),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=yt),new Kc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function Xd(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===ls||m===us)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const S=new $a(g.height);return S.fromEquirectangularTexture(n,u),e.set(u,S),u.addEventListener("dispose",l),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const m=u.mapping,g=m===ls||m===us,S=m===Qn||m===Ci;if(g||S){let d=t.get(u);const p=d!==void 0?d.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Zo(n)),d=g?i.fromEquirectangular(u,d):i.fromCubemap(u,d),d.texture.pmremVersion=u.pmremVersion,t.set(u,d),d.texture;if(d!==void 0)return d.texture;{const E=u.image;return g&&E&&E.height>0||S&&E&&c(E)?(i===null&&(i=new Zo(n)),d=g?i.fromEquirectangular(u):i.fromCubemap(u),d.texture.pmremVersion=u.pmremVersion,t.set(u,d),u.addEventListener("dispose",h),d.texture):null}}}return u}function o(u,m){return m===ls?u.mapping=Qn:m===us&&(u.mapping=Ci),u}function c(u){let m=0;const g=6;for(let S=0;S<g;S++)u[S]!==void 0&&m++;return m===g}function l(u){const m=u.target;m.removeEventListener("dispose",l);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function h(u){const m=u.target;m.removeEventListener("dispose",h);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Yd(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&La("WebGLRenderer: "+i+" extension not supported."),r}}}function qd(n,e,t,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete r[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const m in u)e.update(u[m],n.ARRAY_BUFFER)}function l(f){const u=[],m=f.index,g=f.attributes.position;let S=0;if(g===void 0)return;if(m!==null){const E=m.array;S=m.version;for(let R=0,T=E.length;R<T;R+=3){const D=E[R+0],b=E[R+1],w=E[R+2];u.push(D,b,b,w,w,D)}}else{const E=g.array;S=g.version;for(let R=0,T=E.length/3-1;R<T;R+=3){const D=R+0,b=R+1,w=R+2;u.push(D,b,b,w,w,D)}}const d=new(g.count>=65535?Gc:zc)(u,1);d.version=S;const p=s.get(f);p&&e.remove(p),s.set(f,d)}function h(f){const u=s.get(f);if(u){const m=f.index;m!==null&&u.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Zd(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,s,f*a),t.update(u,i,1)}function l(f,u,m){m!==0&&(n.drawElementsInstanced(i,u,s,f*a,m),t.update(u,i,m))}function h(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,m);let S=0;for(let d=0;d<m;d++)S+=u[d];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Kd(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jd(n,e,t){const i=new WeakMap,r=new ft;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let L=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var m=L;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let T=0;g===!0&&(T=1),S===!0&&(T=2),d===!0&&(T=3);let D=o.attributes.position.count*T,b=1;D>e.maxTextureSize&&(b=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const w=new Float32Array(D*b*4*f),x=new Fc(w,D,b,f);x.type=ln,x.needsUpdate=!0;const y=T*4;for(let C=0;C<f;C++){const U=p[C],k=E[C],Y=R[C],I=D*b*4*C;for(let V=0;V<U.count;V++){const B=V*y;g===!0&&(r.fromBufferAttribute(U,V),w[I+B+0]=r.x,w[I+B+1]=r.y,w[I+B+2]=r.z,w[I+B+3]=0),S===!0&&(r.fromBufferAttribute(k,V),w[I+B+4]=r.x,w[I+B+5]=r.y,w[I+B+6]=r.z,w[I+B+7]=0),d===!0&&(r.fromBufferAttribute(Y,V),w[I+B+8]=r.x,w[I+B+9]=r.y,w[I+B+10]=r.z,w[I+B+11]=Y.itemSize===4?r.w:1)}}u={count:f,texture:x,size:new ke(D,b)},i.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let d=0;d<l.length;d++)g+=l[d];const S=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function $d(n,e,t,i,r){let s=new WeakMap;function a(l){const h=r.render.frame,f=l.geometry,u=e.get(l,f);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return u}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Jd={[Mc]:"LINEAR_TONE_MAPPING",[Sc]:"REINHARD_TONE_MAPPING",[Ec]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[bc]:"AGX_TONE_MAPPING",[Ac]:"NEUTRAL_TONE_MAPPING",[Tc]:"CUSTOM_TONE_MAPPING"};function Qd(n,e,t,i,r){const s=new rn(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Pi(e,t):void 0}),a=new rn(e,t,{type:dn,depthBuffer:!1,stencilBuffer:!1}),o=new Nt;o.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Rt([0,2,0,0,2,0],2));const c=new Xu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new bt(o,c),h=new Zc(-1,1,1,-1,0,1);let f=null,u=null,m=!1,g,S=null,d=[],p=!1;this.setSize=function(E,R){s.setSize(E,R),a.setSize(E,R);for(let T=0;T<d.length;T++){const D=d[T];D.setSize&&D.setSize(E,R)}},this.setEffects=function(E){d=E,p=d.length>0&&d[0].isRenderPass===!0;const R=s.width,T=s.height;for(let D=0;D<d.length;D++){const b=d[D];b.setSize&&b.setSize(R,T)}},this.begin=function(E,R){if(m||E.toneMapping===hn&&d.length===0)return!1;if(S=R,R!==null){const T=R.width,D=R.height;(s.width!==T||s.height!==D)&&this.setSize(T,D)}return p===!1&&E.setRenderTarget(s),g=E.toneMapping,E.toneMapping=hn,!0},this.hasRenderPass=function(){return p},this.end=function(E,R){E.toneMapping=g,m=!0;let T=s,D=a;for(let b=0;b<d.length;b++){const w=d[b];if(w.enabled!==!1&&(w.render(E,D,T,R),w.needsSwap!==!1)){const x=T;T=D,D=x}}if(f!==E.outputColorSpace||u!==E.toneMapping){f=E.outputColorSpace,u=E.toneMapping,c.defines={},Ye.getTransfer(f)===nt&&(c.defines.SRGB_TRANSFER="");const b=Jd[u];b&&(c.defines[b]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,E.setRenderTarget(S),E.render(l,h),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Jc=new Dt,Na=new Pi(1,1),Qc=new Fc,el=new Eu,tl=new kc,Jo=[],Qo=[],ec=new Float32Array(16),tc=new Float32Array(9),nc=new Float32Array(4);function Ni(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jo[r];if(s===void 0&&(s=new Float32Array(r),Jo[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ss(n,e){let t=Qo[e];t===void 0&&(t=new Int32Array(e),Qo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ep(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function tp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function np(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function ip(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function rp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;nc.set(i),n.uniformMatrix2fv(this.addr,!1,nc),St(t,i)}}function sp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;tc.set(i),n.uniformMatrix3fv(this.addr,!1,tc),St(t,i)}}function ap(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,i))return;ec.set(i),n.uniformMatrix4fv(this.addr,!1,ec),St(t,i)}}function op(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function lp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function up(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function hp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function mp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Na.compareFunction=t.isReversedDepthBuffer()?qa:Ya,s=Na):s=Jc,t.setTexture2D(e||s,r)}function _p(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||el,r)}function gp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tl,r)}function xp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qc,r)}function vp(n){switch(n){case 5126:return ep;case 35664:return tp;case 35665:return np;case 35666:return ip;case 35674:return rp;case 35675:return sp;case 35676:return ap;case 5124:case 35670:return op;case 35667:case 35671:return cp;case 35668:case 35672:return lp;case 35669:case 35673:return up;case 5125:return hp;case 36294:return fp;case 36295:return dp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return xp}}function Mp(n,e){n.uniform1fv(this.addr,e)}function Sp(n,e){const t=Ni(e,this.size,2);n.uniform2fv(this.addr,t)}function Ep(n,e){const t=Ni(e,this.size,3);n.uniform3fv(this.addr,t)}function yp(n,e){const t=Ni(e,this.size,4);n.uniform4fv(this.addr,t)}function Tp(n,e){const t=Ni(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function bp(n,e){const t=Ni(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ap(n,e){const t=Ni(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Rp(n,e){n.uniform1iv(this.addr,e)}function wp(n,e){n.uniform2iv(this.addr,e)}function Cp(n,e){n.uniform3iv(this.addr,e)}function Pp(n,e){n.uniform4iv(this.addr,e)}function Dp(n,e){n.uniform1uiv(this.addr,e)}function Lp(n,e){n.uniform2uiv(this.addr,e)}function Up(n,e){n.uniform3uiv(this.addr,e)}function Ip(n,e){n.uniform4uiv(this.addr,e)}function Np(n,e,t){const i=this.cache,r=e.length,s=ss(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Na:a=Jc;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Fp(n,e,t){const i=this.cache,r=e.length,s=ss(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||el,s[a])}function Op(n,e,t){const i=this.cache,r=e.length,s=ss(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tl,s[a])}function Bp(n,e,t){const i=this.cache,r=e.length,s=ss(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Qc,s[a])}function zp(n){switch(n){case 5126:return Mp;case 35664:return Sp;case 35665:return Ep;case 35666:return yp;case 35674:return Tp;case 35675:return bp;case 35676:return Ap;case 5124:case 35670:return Rp;case 35667:case 35671:return wp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Dp;case 36294:return Lp;case 36295:return Up;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}}class Gp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vp(t.type)}}class Vp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zp(t.type)}}class Hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Bs=/(\w+)(\])?(\[|\.)?/g;function ic(n,e){n.seq.push(e),n.map[e.id]=e}function kp(n,e,t){const i=n.name,r=i.length;for(Bs.lastIndex=0;;){const s=Bs.exec(i),a=Bs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ic(t,l===void 0?new Gp(o,n,e):new Vp(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Hp(o),ic(t,f)),t=f}}}class Wr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);kp(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function rc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Wp=37297;let Xp=0;function Yp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const sc=new Oe;function qp(n){Ye._getMatrix(sc,Ye.workingColorSpace,n);const e=`mat3( ${sc.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Zr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ac(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Yp(n.getShaderSource(e),o)}else return s}function Zp(n,e){const t=qp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Kp={[Mc]:"Linear",[Sc]:"Reinhard",[Ec]:"Cineon",[yc]:"ACESFilmic",[bc]:"AgX",[Ac]:"Neutral",[Tc]:"Custom"};function jp(n,e){const t=Kp[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ir=new O;function $p(){Ye.getLuminanceCoefficients(Ir);const n=Ir.x.toFixed(4),e=Ir.y.toFixed(4),t=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jp(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function Qp(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function em(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ki(n){return n!==""}function oc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(n){return n.replace(tm,im)}const nm=new Map;function im(n,e){let t=Ge[e];if(t===void 0){const i=nm.get(e);if(i!==void 0)t=Ge[i],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fa(t)}const rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(n){return n.replace(rm,sm)}function sm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const am={[zr]:"SHADOWMAP_TYPE_PCF",[Zi]:"SHADOWMAP_TYPE_VSM"};function om(n){return am[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cm={[Qn]:"ENVMAP_TYPE_CUBE",[Ci]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE_UV"};function lm(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cm[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const um={[Ci]:"ENVMAP_MODE_REFRACTION"};function hm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":um[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fm={[vc]:"ENVMAP_BLENDING_MULTIPLY",[Gl]:"ENVMAP_BLENDING_MIX",[Vl]:"ENVMAP_BLENDING_ADD"};function dm(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":fm[n.combine]||"ENVMAP_BLENDING_NONE"}function pm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function mm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=om(t),l=lm(t),h=hm(t),f=dm(t),u=pm(t),m=Jp(t),g=Qp(s),S=r.createProgram();let d,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ki).join(`
`),p.length>0&&(p+=`
`)):(d=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),p=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==hn?jp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Zp("linearToOutputTexel",t.outputColorSpace),$p(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),a=Fa(a),a=oc(a,t),a=cc(a,t),o=Fa(o),o=oc(o,t),o=cc(o,t),a=lc(a),o=lc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",t.glslVersion===vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=E+d+a,T=E+p+o,D=rc(r,r.VERTEX_SHADER,R),b=rc(r,r.FRAGMENT_SHADER,T);r.attachShader(S,D),r.attachShader(S,b),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(C){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(S)||"",k=r.getShaderInfoLog(D)||"",Y=r.getShaderInfoLog(b)||"",I=U.trim(),V=k.trim(),B=Y.trim();let Q=!0,ee=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,D,b);else{const ce=ac(r,D,"vertex"),ve=ac(r,b,"fragment");$e("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+ce+`
`+ve)}else I!==""?Ce("WebGLProgram: Program Info Log:",I):(V===""||B==="")&&(ee=!1);ee&&(C.diagnostics={runnable:Q,programLog:I,vertexShader:{log:V,prefix:d},fragmentShader:{log:B,prefix:p}})}r.deleteShader(D),r.deleteShader(b),x=new Wr(r,S),y=em(r,S)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(S,Wp)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xp++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=D,this.fragmentShader=b,this}let _m=0;class gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xm(e),t.set(e,i)),i}}class xm{constructor(e){this.id=_m++,this.code=e,this.usedTimes=0}}function vm(n){return n===ei||n===Xr||n===Yr}function Mm(n,e,t,i,r,s){const a=new Oc,o=new gm,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,y,L,C,U,k){const Y=C.fog,I=U.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=e.get(x.envMap||V,B),ee=Q&&Q.mapping===ns?Q.image.height:null,ce=m[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ce("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ve=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ye=ve!==void 0?ve.length:0;let Ie=0;I.morphAttributes.position!==void 0&&(Ie=1),I.morphAttributes.normal!==void 0&&(Ie=2),I.morphAttributes.color!==void 0&&(Ie=3);let Qe,Ne,j,ue;if(ce){const Pe=cn[ce];Qe=Pe.vertexShader,Ne=Pe.fragmentShader}else Qe=x.vertexShader,Ne=x.fragmentShader,o.update(x),j=o.getVertexShaderID(x),ue=o.getFragmentShaderID(x);const se=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Ue=U.isInstancedMesh===!0,we=U.isBatchedMesh===!0,rt=!!x.map,We=!!x.matcap,qe=!!Q,st=!!x.aoMap,Ve=!!x.lightMap,ht=!!x.bumpMap,ot=!!x.normalMap,Tt=!!x.displacementMap,A=!!x.emissiveMap,De=!!x.metalnessMap,Me=!!x.roughnessMap,Se=x.anisotropy>0,K=x.clearcoat>0,ze=x.dispersion>0,M=x.iridescence>0,_=x.sheen>0,N=x.transmission>0,q=Se&&!!x.anisotropyMap,$=K&&!!x.clearcoatMap,ne=K&&!!x.clearcoatNormalMap,oe=K&&!!x.clearcoatRoughnessMap,X=M&&!!x.iridescenceMap,Z=M&&!!x.iridescenceThicknessMap,he=_&&!!x.sheenColorMap,me=_&&!!x.sheenRoughnessMap,ae=!!x.specularMap,ie=!!x.specularColorMap,Le=!!x.specularIntensityMap,Te=N&&!!x.transmissionMap,Fe=N&&!!x.thicknessMap,P=!!x.gradientMap,te=!!x.alphaMap,W=x.alphaTest>0,le=!!x.alphaHash,re=!!x.extensions;let J=hn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(J=n.toneMapping);const xe={shaderID:ce,shaderType:x.type,shaderName:x.name,vertexShader:Qe,fragmentShader:Ne,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:we,batchingColor:we&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:rt,matcap:We,envMap:qe,envMapMode:qe&&Q.mapping,envMapCubeUVHeight:ee,aoMap:st,lightMap:Ve,bumpMap:ht,normalMap:ot,displacementMap:Tt,emissiveMap:A,normalMapObjectSpace:ot&&x.normalMapType===Wl,normalMapTangentSpace:ot&&x.normalMapType===_o,packedNormalMap:ot&&x.normalMapType===_o&&vm(x.normalMap.format),metalnessMap:De,roughnessMap:Me,anisotropy:Se,anisotropyMap:q,clearcoat:K,clearcoatMap:$,clearcoatNormalMap:ne,clearcoatRoughnessMap:oe,dispersion:ze,iridescence:M,iridescenceMap:X,iridescenceThicknessMap:Z,sheen:_,sheenColorMap:he,sheenRoughnessMap:me,specularMap:ae,specularColorMap:ie,specularIntensityMap:Le,transmission:N,transmissionMap:Te,thicknessMap:Fe,gradientMap:P,opaque:x.transparent===!1&&x.blending===bi&&x.alphaToCoverage===!1,alphaMap:te,alphaTest:W,alphaHash:le,combine:x.combine,mapUv:rt&&g(x.map.channel),aoMapUv:st&&g(x.aoMap.channel),lightMapUv:Ve&&g(x.lightMap.channel),bumpMapUv:ht&&g(x.bumpMap.channel),normalMapUv:ot&&g(x.normalMap.channel),displacementMapUv:Tt&&g(x.displacementMap.channel),emissiveMapUv:A&&g(x.emissiveMap.channel),metalnessMapUv:De&&g(x.metalnessMap.channel),roughnessMapUv:Me&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:$&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(x.sheenRoughnessMap.channel),specularMapUv:ae&&g(x.specularMap.channel),specularColorMapUv:ie&&g(x.specularColorMap.channel),specularIntensityMapUv:Le&&g(x.specularIntensityMap.channel),transmissionMapUv:Te&&g(x.transmissionMap.channel),thicknessMapUv:Fe&&g(x.thicknessMap.channel),alphaMapUv:te&&g(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ot||Se),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(rt||te),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&ot===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Re,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:J,decodeVideoTexture:rt&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:A&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ft,flipSided:x.side===Ot,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function d(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)y.push(L),y.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(p(y,x),E(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function p(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function R(x){const y=m[x.type];let L;if(y){const C=cn[y];L=Yc.clone(C.uniforms)}else L=x.uniforms;return L}function T(x,y){let L=h.get(y);return L!==void 0?++L.usedTimes:(L=new mm(n,y,x,r),l.push(L),h.set(y,L)),L}function D(x){if(--x.usedTimes===0){const y=l.indexOf(x);l[y]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function w(){o.dispose()}return{getParameters:S,getProgramCacheKey:d,getUniforms:R,acquireProgram:T,releaseProgram:D,releaseShaderCache:b,programs:l,dispose:w}}function Sm(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Em(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function hc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,S,d,p){let E=n[e];return E===void 0?(E={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:d,group:p},n[e]=E):(E.id=u.id,E.object=u,E.geometry=m,E.material=g,E.materialVariant=a(u),E.groupOrder=S,E.renderOrder=u.renderOrder,E.z=d,E.group=p),e++,E}function c(u,m,g,S,d,p){const E=o(u,m,g,S,d,p);g.transmission>0?i.push(E):g.transparent===!0?r.push(E):t.push(E)}function l(u,m,g,S,d,p){const E=o(u,m,g,S,d,p);g.transmission>0?i.unshift(E):g.transparent===!0?r.unshift(E):t.unshift(E)}function h(u,m){t.length>1&&t.sort(u||Em),i.length>1&&i.sort(m||hc),r.length>1&&r.sort(m||hc)}function f(){for(let u=e,m=n.length;u<m;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:h}}function ym(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new fc,n.set(i,[a])):r>=s.length?(a=new fc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Tm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Je};break;case"SpotLight":t={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function bm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Am=0;function Rm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function wm(n){const e=new Tm,t=bm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const r=new O,s=new mt,a=new mt;function o(l){let h=0,f=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,S=0,d=0,p=0,E=0,R=0,T=0,D=0,b=0,w=0;l.sort(Rm);for(let y=0,L=l.length;y<L;y++){const C=l[y],U=C.color,k=C.intensity,Y=C.distance;let I=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ei?I=C.shadow.map.texture:I=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*k,f+=U.g*k,u+=U.b*k;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],k);w++}else if(C.isDirectionalLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,Q=t.get(C);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=I,i.directionalShadowMatrix[m]=C.shadow.matrix,E++}i.directional[m]=V,m++}else if(C.isSpotLight){const V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(U).multiplyScalar(k),V.distance=Y,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[S]=V;const B=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,B.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[S]=B.matrix,C.castShadow){const Q=t.get(C);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,i.spotShadow[S]=Q,i.spotShadowMap[S]=I,T++}S++}else if(C.isRectAreaLight){const V=e.get(C);V.color.copy(U).multiplyScalar(k),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[d]=V,d++}else if(C.isPointLight){const V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const B=C.shadow,Q=t.get(C);Q.shadowIntensity=B.intensity,Q.shadowBias=B.bias,Q.shadowNormalBias=B.normalBias,Q.shadowRadius=B.radius,Q.shadowMapSize=B.mapSize,Q.shadowCameraNear=B.camera.near,Q.shadowCameraFar=B.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=C.shadow.matrix,R++}i.point[g]=V,g++}else if(C.isHemisphereLight){const V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(k),V.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[p]=V,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==m||x.pointLength!==g||x.spotLength!==S||x.rectAreaLength!==d||x.hemiLength!==p||x.numDirectionalShadows!==E||x.numPointShadows!==R||x.numSpotShadows!==T||x.numSpotMaps!==D||x.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=d,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=T+D-b,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,x.directionalLength=m,x.pointLength=g,x.spotLength=S,x.rectAreaLength=d,x.hemiLength=p,x.numDirectionalShadows=E,x.numPointShadows=R,x.numSpotShadows=T,x.numSpotMaps=D,x.numLightProbes=w,i.version=Am++)}function c(l,h){let f=0,u=0,m=0,g=0,S=0;const d=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const R=l[p];if(R.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),f++}else if(R.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),m++}else if(R.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(d),a.identity(),s.copy(R.matrixWorld),s.premultiply(d),a.extractRotation(s),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(R.isPointLight){const T=i.point[u];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(d),u++}else if(R.isHemisphereLight){const T=i.hemi[S];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(d),S++}}}return{setup:o,setupView:c,state:i}}function dc(n){const e=new wm(n),t=[],i=[],r=[];function s(u){f.camera=u,t.length=0,i.length=0,r.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Cm(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new dc(n),e.set(r,[o])):s>=a.length?(o=new dc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dm=`uniform sampler2D shadow_pass;
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
}`,Lm=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Um=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],pc=new mt,qi=new O,zs=new O;function Im(n,e,t){let i=new Hc;const r=new ke,s=new ke,a=new ft,o=new Yu,c=new qu,l={},h=t.maxTextureSize,f={[Hn]:Ot,[Ot]:Hn,[Ft]:Ft},u=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Pm,fragmentShader:Dm}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new bt(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let p=this.type;this.render=function(b,w,x){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;this.type===Sl&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zr);const y=n.getRenderTarget(),L=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Sn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=p!==this.type;k&&w.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(I=>I.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,I=b.length;Y<I;Y++){const V=b[Y],B=V.shadow;if(B===void 0){Ce("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Q=B.getFrameExtents();r.multiply(Q),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Q.x),r.x=s.x*Q.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Q.y),r.y=s.y*Q.y,B.mapSize.y=s.y));const ee=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ee,B.map===null||k===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Zi){if(V.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new rn(r.x,r.y,{format:ei,type:dn,minFilter:yt,magFilter:yt,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new Pi(r.x,r.y,ln),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=yn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=At,B.map.depthTexture.magFilter=At}else V.isPointLight?(B.map=new $a(r.x),B.map.depthTexture=new Vu(r.x,fn)):(B.map=new rn(r.x,r.y),B.map.depthTexture=new Pi(r.x,r.y,fn)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=yn,this.type===zr?(B.map.depthTexture.compareFunction=ee?qa:Ya,B.map.depthTexture.minFilter=yt,B.map.depthTexture.magFilter=yt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=At,B.map.depthTexture.magFilter=At);B.camera.updateProjectionMatrix()}const ce=B.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<ce;ve++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(B.map),n.clear());const ye=B.getViewport(ve);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),U.viewport(a)}if(V.isPointLight){const ye=B.camera,Ie=B.matrix,Qe=V.distance||ye.far;Qe!==ye.far&&(ye.far=Qe,ye.updateProjectionMatrix()),qi.setFromMatrixPosition(V.matrixWorld),ye.position.copy(qi),zs.copy(ye.position),zs.add(Lm[ve]),ye.up.copy(Um[ve]),ye.lookAt(zs),ye.updateMatrixWorld(),Ie.makeTranslation(-qi.x,-qi.y,-qi.z),pc.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),B._frustum.setFromProjectionMatrix(pc,ye.coordinateSystem,ye.reversedDepth)}else B.updateMatrices(V);i=B.getFrustum(),T(w,x,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===Zi&&E(B,x),B.needsUpdate=!1}p=this.type,d.needsUpdate=!1,n.setRenderTarget(y,L,C)};function E(b,w){const x=e.update(S);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new rn(r.x,r.y,{format:ei,type:dn})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(w,null,x,u,S,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(w,null,x,m,S,null)}function R(b,w,x,y){let L=null;const C=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)L=C;else if(L=x.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=L.uuid,k=w.uuid;let Y=l[U];Y===void 0&&(Y={},l[U]=Y);let I=Y[k];I===void 0&&(I=L.clone(),Y[k]=I,w.addEventListener("dispose",D)),L=I}if(L.visible=w.visible,L.wireframe=w.wireframe,y===Zi?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:f[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const U=n.properties.get(L);U.light=x}return L}function T(b,w,x,y,L){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===Zi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const k=e.update(b),Y=b.material;if(Array.isArray(Y)){const I=k.groups;for(let V=0,B=I.length;V<B;V++){const Q=I[V],ee=Y[Q.materialIndex];if(ee&&ee.visible){const ce=R(b,ee,y,L);b.onBeforeShadow(n,b,w,x,k,ce,Q),n.renderBufferDirect(x,null,k,ce,b,Q),b.onAfterShadow(n,b,w,x,k,ce,Q)}}}else if(Y.visible){const I=R(b,Y,y,L);b.onBeforeShadow(n,b,w,x,k,I,null),n.renderBufferDirect(x,null,k,I,b,null),b.onAfterShadow(n,b,w,x,k,I,null)}}const U=b.children;for(let k=0,Y=U.length;k<Y;k++)T(U[k],w,x,y,L)}function D(b){b.target.removeEventListener("dispose",D);for(const x in l){const y=l[x],L=b.target.uuid;L in y&&(y[L].dispose(),delete y[L])}}}function Nm(n,e){function t(){let P=!1;const te=new ft;let W=null;const le=new ft(0,0,0,0);return{setMask:function(re){W!==re&&!P&&(n.colorMask(re,re,re,re),W=re)},setLocked:function(re){P=re},setClear:function(re,J,xe,Pe,tt){tt===!0&&(re*=Pe,J*=Pe,xe*=Pe),te.set(re,J,xe,Pe),le.equals(te)===!1&&(n.clearColor(re,J,xe,Pe),le.copy(te))},reset:function(){P=!1,W=null,le.set(-1,0,0,0)}}}function i(){let P=!1,te=!1,W=null,le=null,re=null;return{setReversed:function(J){if(te!==J){const xe=e.get("EXT_clip_control");J?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),te=J;const Pe=re;re=null,this.setClear(Pe)}},getReversed:function(){return te},setTest:function(J){J?se(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(J){W!==J&&!P&&(n.depthMask(J),W=J)},setFunc:function(J){if(te&&(J=eu[J]),le!==J){switch(J){case qs:n.depthFunc(n.NEVER);break;case Zs:n.depthFunc(n.ALWAYS);break;case Ks:n.depthFunc(n.LESS);break;case wi:n.depthFunc(n.LEQUAL);break;case js:n.depthFunc(n.EQUAL);break;case $s:n.depthFunc(n.GEQUAL);break;case Js:n.depthFunc(n.GREATER);break;case Qs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=J}},setLocked:function(J){P=J},setClear:function(J){re!==J&&(re=J,te&&(J=1-J),n.clearDepth(J))},reset:function(){P=!1,W=null,le=null,re=null,te=!1}}}function r(){let P=!1,te=null,W=null,le=null,re=null,J=null,xe=null,Pe=null,tt=null;return{setTest:function(Ze){P||(Ze?se(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Ze){te!==Ze&&!P&&(n.stencilMask(Ze),te=Ze)},setFunc:function(Ze,$t,Xt){(W!==Ze||le!==$t||re!==Xt)&&(n.stencilFunc(Ze,$t,Xt),W=Ze,le=$t,re=Xt)},setOp:function(Ze,$t,Xt){(J!==Ze||xe!==$t||Pe!==Xt)&&(n.stencilOp(Ze,$t,Xt),J=Ze,xe=$t,Pe=Xt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){tt!==Ze&&(n.clearStencil(Ze),tt=Ze)},reset:function(){P=!1,te=null,W=null,le=null,re=null,J=null,xe=null,Pe=null,tt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},f={},u={},m=new WeakMap,g=[],S=null,d=!1,p=null,E=null,R=null,T=null,D=null,b=null,w=null,x=new Je(0,0,0),y=0,L=!1,C=null,U=null,k=null,Y=null,I=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ee)[1]),B=Q>=1):ee.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),B=Q>=2);let ce=null,ve={};const ye=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Qe=new ft().fromArray(ye),Ne=new ft().fromArray(Ie);function j(P,te,W,le){const re=new Uint8Array(4),J=n.createTexture();n.bindTexture(P,J),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<W;xe++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(te+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return J}const ue={};ue[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(n.DEPTH_TEST),a.setFunc(wi),ht(!1),ot(ho),se(n.CULL_FACE),st(Sn);function se(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Re(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Ue(P,te){return u[P]!==te?(n.bindFramebuffer(P,te),u[P]=te,P===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=te),P===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=te),!0):!1}function we(P,te){let W=g,le=!1;if(P){W=m.get(te),W===void 0&&(W=[],m.set(te,W));const re=P.textures;if(W.length!==re.length||W[0]!==n.COLOR_ATTACHMENT0){for(let J=0,xe=re.length;J<xe;J++)W[J]=n.COLOR_ATTACHMENT0+J;W.length=re.length,le=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,le=!0);le&&n.drawBuffers(W)}function rt(P){return S!==P?(n.useProgram(P),S=P,!0):!1}const We={[Zn]:n.FUNC_ADD,[yl]:n.FUNC_SUBTRACT,[Tl]:n.FUNC_REVERSE_SUBTRACT};We[bl]=n.MIN,We[Al]=n.MAX;const qe={[Rl]:n.ZERO,[wl]:n.ONE,[Cl]:n.SRC_COLOR,[Xs]:n.SRC_ALPHA,[Nl]:n.SRC_ALPHA_SATURATE,[Ul]:n.DST_COLOR,[Dl]:n.DST_ALPHA,[Pl]:n.ONE_MINUS_SRC_COLOR,[Ys]:n.ONE_MINUS_SRC_ALPHA,[Il]:n.ONE_MINUS_DST_COLOR,[Ll]:n.ONE_MINUS_DST_ALPHA,[Fl]:n.CONSTANT_COLOR,[Ol]:n.ONE_MINUS_CONSTANT_COLOR,[Bl]:n.CONSTANT_ALPHA,[zl]:n.ONE_MINUS_CONSTANT_ALPHA};function st(P,te,W,le,re,J,xe,Pe,tt,Ze){if(P===Sn){d===!0&&(Re(n.BLEND),d=!1);return}if(d===!1&&(se(n.BLEND),d=!0),P!==El){if(P!==p||Ze!==L){if((E!==Zn||D!==Zn)&&(n.blendEquation(n.FUNC_ADD),E=Zn,D=Zn),Ze)switch(P){case bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fo:n.blendFunc(n.ONE,n.ONE);break;case po:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$e("WebGLState: Invalid blending: ",P);break}else switch(P){case bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case po:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mo:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",P);break}R=null,T=null,b=null,w=null,x.set(0,0,0),y=0,p=P,L=Ze}return}re=re||te,J=J||W,xe=xe||le,(te!==E||re!==D)&&(n.blendEquationSeparate(We[te],We[re]),E=te,D=re),(W!==R||le!==T||J!==b||xe!==w)&&(n.blendFuncSeparate(qe[W],qe[le],qe[J],qe[xe]),R=W,T=le,b=J,w=xe),(Pe.equals(x)===!1||tt!==y)&&(n.blendColor(Pe.r,Pe.g,Pe.b,tt),x.copy(Pe),y=tt),p=P,L=!1}function Ve(P,te){P.side===Ft?Re(n.CULL_FACE):se(n.CULL_FACE);let W=P.side===Ot;te&&(W=!W),ht(W),P.blending===bi&&P.transparent===!1?st(Sn):st(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const le=P.stencilWrite;o.setTest(le),le&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),A(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(P){C!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),C=P)}function ot(P){P!==vl?(se(n.CULL_FACE),P!==U&&(P===ho?n.cullFace(n.BACK):P===Ml?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),U=P}function Tt(P){P!==k&&(B&&n.lineWidth(P),k=P)}function A(P,te,W){P?(se(n.POLYGON_OFFSET_FILL),(Y!==te||I!==W)&&(Y=te,I=W,a.getReversed()&&(te=-te),n.polygonOffset(te,W))):Re(n.POLYGON_OFFSET_FILL)}function De(P){P?se(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Me(P){P===void 0&&(P=n.TEXTURE0+V-1),ce!==P&&(n.activeTexture(P),ce=P)}function Se(P,te,W){W===void 0&&(ce===null?W=n.TEXTURE0+V-1:W=ce);let le=ve[W];le===void 0&&(le={type:void 0,texture:void 0},ve[W]=le),(le.type!==P||le.texture!==te)&&(ce!==W&&(n.activeTexture(W),ce=W),n.bindTexture(P,te||ue[P]),le.type=P,le.texture=te)}function K(){const P=ve[ce];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ze(){try{n.compressedTexImage2D(...arguments)}catch(P){$e("WebGLState:",P)}}function M(){try{n.compressedTexImage3D(...arguments)}catch(P){$e("WebGLState:",P)}}function _(){try{n.texSubImage2D(...arguments)}catch(P){$e("WebGLState:",P)}}function N(){try{n.texSubImage3D(...arguments)}catch(P){$e("WebGLState:",P)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(P){$e("WebGLState:",P)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(P){$e("WebGLState:",P)}}function ne(){try{n.texStorage2D(...arguments)}catch(P){$e("WebGLState:",P)}}function oe(){try{n.texStorage3D(...arguments)}catch(P){$e("WebGLState:",P)}}function X(){try{n.texImage2D(...arguments)}catch(P){$e("WebGLState:",P)}}function Z(){try{n.texImage3D(...arguments)}catch(P){$e("WebGLState:",P)}}function he(P){return f[P]!==void 0?f[P]:n.getParameter(P)}function me(P,te){f[P]!==te&&(n.pixelStorei(P,te),f[P]=te)}function ae(P){Qe.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Qe.copy(P))}function ie(P){Ne.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Ne.copy(P))}function Le(P,te){let W=l.get(te);W===void 0&&(W=new WeakMap,l.set(te,W));let le=W.get(P);le===void 0&&(le=n.getUniformBlockIndex(te,P.name),W.set(P,le))}function Te(P,te){const le=l.get(te).get(P);c.get(te)!==le&&(n.uniformBlockBinding(te,le,P.__bindingPointIndex),c.set(te,le))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},ce=null,ve={},u={},m=new WeakMap,g=[],S=null,d=!1,p=null,E=null,R=null,T=null,D=null,b=null,w=null,x=new Je(0,0,0),y=0,L=!1,C=null,U=null,k=null,Y=null,I=null,Qe.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Re,bindFramebuffer:Ue,drawBuffers:we,useProgram:rt,setBlending:st,setMaterial:Ve,setFlipSided:ht,setCullFace:ot,setLineWidth:Tt,setPolygonOffset:A,setScissorTest:De,activeTexture:Me,bindTexture:Se,unbindTexture:K,compressedTexImage2D:ze,compressedTexImage3D:M,texImage2D:X,texImage3D:Z,pixelStorei:me,getParameter:he,updateUBOMapping:Le,uniformBlockBinding:Te,texStorage2D:ne,texStorage3D:oe,texSubImage2D:_,texSubImage3D:N,compressedTexSubImage2D:q,compressedTexSubImage3D:$,scissor:ae,viewport:ie,reset:Fe}}function Fm(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,h=new WeakMap,f=new Set;let u;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(M,_){return g?new OffscreenCanvas(M,_):jr("canvas")}function d(M,_,N){let q=1;const $=ze(M);if(($.width>N||$.height>N)&&(q=N/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ne=Math.floor(q*$.width),oe=Math.floor(q*$.height);u===void 0&&(u=S(ne,oe));const X=_?S(ne,oe):u;return X.width=ne,X.height=oe,X.getContext("2d").drawImage(M,0,0,ne,oe),Ce("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ne+"x"+oe+")."),X}else return"data"in M&&Ce("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),M;return M}function p(M){return M.generateMipmaps}function E(M){n.generateMipmap(M)}function R(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(M,_,N,q,$,ne=!1){if(M!==null){if(n[M]!==void 0)return n[M];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let oe;q&&(oe=e.get("EXT_texture_norm16"),oe||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=_;if(_===n.RED&&(N===n.FLOAT&&(X=n.R32F),N===n.HALF_FLOAT&&(X=n.R16F),N===n.UNSIGNED_BYTE&&(X=n.R8),N===n.UNSIGNED_SHORT&&oe&&(X=oe.R16_EXT),N===n.SHORT&&oe&&(X=oe.R16_SNORM_EXT)),_===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.R8UI),N===n.UNSIGNED_SHORT&&(X=n.R16UI),N===n.UNSIGNED_INT&&(X=n.R32UI),N===n.BYTE&&(X=n.R8I),N===n.SHORT&&(X=n.R16I),N===n.INT&&(X=n.R32I)),_===n.RG&&(N===n.FLOAT&&(X=n.RG32F),N===n.HALF_FLOAT&&(X=n.RG16F),N===n.UNSIGNED_BYTE&&(X=n.RG8),N===n.UNSIGNED_SHORT&&oe&&(X=oe.RG16_EXT),N===n.SHORT&&oe&&(X=oe.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RG8UI),N===n.UNSIGNED_SHORT&&(X=n.RG16UI),N===n.UNSIGNED_INT&&(X=n.RG32UI),N===n.BYTE&&(X=n.RG8I),N===n.SHORT&&(X=n.RG16I),N===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGB8UI),N===n.UNSIGNED_SHORT&&(X=n.RGB16UI),N===n.UNSIGNED_INT&&(X=n.RGB32UI),N===n.BYTE&&(X=n.RGB8I),N===n.SHORT&&(X=n.RGB16I),N===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),N===n.UNSIGNED_INT&&(X=n.RGBA32UI),N===n.BYTE&&(X=n.RGBA8I),N===n.SHORT&&(X=n.RGBA16I),N===n.INT&&(X=n.RGBA32I)),_===n.RGB&&(N===n.UNSIGNED_SHORT&&oe&&(X=oe.RGB16_EXT),N===n.SHORT&&oe&&(X=oe.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),_===n.RGBA){const Z=ne?Zr:Ye.getTransfer($);N===n.FLOAT&&(X=n.RGBA32F),N===n.HALF_FLOAT&&(X=n.RGBA16F),N===n.UNSIGNED_BYTE&&(X=Z===nt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&oe&&(X=oe.RGBA16_EXT),N===n.SHORT&&oe&&(X=oe.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function D(M,_){let N;return M?_===null||_===fn||_===er?N=n.DEPTH24_STENCIL8:_===ln?N=n.DEPTH32F_STENCIL8:_===Qi&&(N=n.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fn||_===er?N=n.DEPTH_COMPONENT24:_===ln?N=n.DEPTH_COMPONENT32F:_===Qi&&(N=n.DEPTH_COMPONENT16),N}function b(M,_){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==At&&M.minFilter!==yt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function w(M){const _=M.target;_.removeEventListener("dispose",w),y(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(M){const _=M.target;_.removeEventListener("dispose",x),C(_)}function y(M){const _=i.get(M);if(_.__webglInit===void 0)return;const N=M.source,q=m.get(N);if(q){const $=q[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&L(M),Object.keys(q).length===0&&m.delete(N)}i.remove(M)}function L(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const N=M.source,q=m.get(N);delete q[_.__cacheKey],a.memory.textures--}function C(M){const _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let $=0;$<_.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(_.__webglFramebuffer[q][$]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=M.textures;for(let q=0,$=N.length;q<$;q++){const ne=i.get(N[q]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(N[q])}i.remove(M)}let U=0;function k(){U=0}function Y(){return U}function I(M){U=M}function V(){const M=U;return M>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),U+=1,M}function B(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function Q(M,_){const N=i.get(M);if(M.isVideoTexture&&Se(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&N.__version!==M.version){const q=M.image;if(q===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(N,M,_);return}}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+_)}function ee(M,_){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){Re(N,M,_);return}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+_)}function ce(M,_){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){Re(N,M,_);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+_)}function ve(M,_){const N=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&N.__version!==M.version){Ue(N,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+_)}const ye={[ea]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[ta]:n.MIRRORED_REPEAT},Ie={[At]:n.NEAREST,[Hl]:n.NEAREST_MIPMAP_NEAREST,[hr]:n.NEAREST_MIPMAP_LINEAR,[yt]:n.LINEAR,[hs]:n.LINEAR_MIPMAP_NEAREST,[jn]:n.LINEAR_MIPMAP_LINEAR},Qe={[Xl]:n.NEVER,[jl]:n.ALWAYS,[Yl]:n.LESS,[Ya]:n.LEQUAL,[ql]:n.EQUAL,[qa]:n.GEQUAL,[Zl]:n.GREATER,[Kl]:n.NOTEQUAL};function Ne(M,_){if(_.type===ln&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===yt||_.magFilter===hs||_.magFilter===hr||_.magFilter===jn||_.minFilter===yt||_.minFilter===hs||_.minFilter===hr||_.minFilter===jn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ye[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ye[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ye[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,Ie[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,Ie[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Qe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===At||_.minFilter!==hr&&_.minFilter!==jn||_.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function j(M,_){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",w));const q=_.source;let $=m.get(q);$===void 0&&($={},m.set(q,$));const ne=B(_);if(ne!==M.__cacheKey){$[ne]===void 0&&($[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),$[ne].usedTimes++;const oe=$[M.__cacheKey];oe!==void 0&&($[M.__cacheKey].usedTimes--,oe.usedTimes===0&&L(_)),M.__cacheKey=ne,M.__webglTexture=$[ne].texture}return N}function ue(M,_,N){return Math.floor(Math.floor(M/N)/_)}function se(M,_,N,q){const ne=M.updateRanges;if(ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,N,q,_.data);else{ne.sort((me,ae)=>me.start-ae.start);let oe=0;for(let me=1;me<ne.length;me++){const ae=ne[oe],ie=ne[me],Le=ae.start+ae.count,Te=ue(ie.start,_.width,4),Fe=ue(ae.start,_.width,4);ie.start<=Le+1&&Te===Fe&&ue(ie.start+ie.count-1,_.width,4)===Te?ae.count=Math.max(ae.count,ie.start+ie.count-ae.start):(++oe,ne[oe]=ie)}ne.length=oe+1;const X=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),he=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let me=0,ae=ne.length;me<ae;me++){const ie=ne[me],Le=Math.floor(ie.start/4),Te=Math.ceil(ie.count/4),Fe=Le%_.width,P=Math.floor(Le/_.width),te=Te,W=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,P),t.texSubImage2D(n.TEXTURE_2D,0,Fe,P,te,W,N,q,_.data)}M.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,X),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function Re(M,_,N){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);const $=j(M,_),ne=_.source;t.bindTexture(q,M.__webglTexture,n.TEXTURE0+N);const oe=i.get(ne);if(ne.version!==oe.__version||$===!0){if(t.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const W=Ye.getPrimaries(Ye.workingColorSpace),le=_.colorSpace===Bn?null:Ye.getPrimaries(_.colorSpace),re=_.colorSpace===Bn||W===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let Z=d(_.image,!1,r.maxTextureSize);Z=K(_,Z);const he=s.convert(_.format,_.colorSpace),me=s.convert(_.type);let ae=T(_.internalFormat,he,me,_.normalized,_.colorSpace,_.isVideoTexture);Ne(q,_);let ie;const Le=_.mipmaps,Te=_.isVideoTexture!==!0,Fe=oe.__version===void 0||$===!0,P=ne.dataReady,te=b(_,Z);if(_.isDepthTexture)ae=D(_.format===$n,_.type),Fe&&(Te?t.texStorage2D(n.TEXTURE_2D,1,ae,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,ae,Z.width,Z.height,0,he,me,null));else if(_.isDataTexture)if(Le.length>0){Te&&Fe&&t.texStorage2D(n.TEXTURE_2D,te,ae,Le[0].width,Le[0].height);for(let W=0,le=Le.length;W<le;W++)ie=Le[W],Te?P&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ie.width,ie.height,he,me,ie.data):t.texImage2D(n.TEXTURE_2D,W,ae,ie.width,ie.height,0,he,me,ie.data);_.generateMipmaps=!1}else Te?(Fe&&t.texStorage2D(n.TEXTURE_2D,te,ae,Z.width,Z.height),P&&se(_,Z,he,me)):t.texImage2D(n.TEXTURE_2D,0,ae,Z.width,Z.height,0,he,me,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Te&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,ae,Le[0].width,Le[0].height,Z.depth);for(let W=0,le=Le.length;W<le;W++)if(ie=Le[W],_.format!==nn)if(he!==null)if(Te){if(P)if(_.layerUpdates.size>0){const re=Xo(ie.width,ie.height,_.format,_.type);for(const J of _.layerUpdates){const xe=ie.data.subarray(J*re/ie.data.BYTES_PER_ELEMENT,(J+1)*re/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,J,ie.width,ie.height,1,he,xe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ie.width,ie.height,Z.depth,he,ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,ae,ie.width,ie.height,Z.depth,0,ie.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?P&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ie.width,ie.height,Z.depth,he,me,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,ae,ie.width,ie.height,Z.depth,0,he,me,ie.data)}else{Te&&Fe&&t.texStorage2D(n.TEXTURE_2D,te,ae,Le[0].width,Le[0].height);for(let W=0,le=Le.length;W<le;W++)ie=Le[W],_.format!==nn?he!==null?Te?P&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,ie.width,ie.height,he,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,W,ae,ie.width,ie.height,0,ie.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?P&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ie.width,ie.height,he,me,ie.data):t.texImage2D(n.TEXTURE_2D,W,ae,ie.width,ie.height,0,he,me,ie.data)}else if(_.isDataArrayTexture)if(Te){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,ae,Z.width,Z.height,Z.depth),P)if(_.layerUpdates.size>0){const W=Xo(Z.width,Z.height,_.format,_.type);for(const le of _.layerUpdates){const re=Z.data.subarray(le*W/Z.data.BYTES_PER_ELEMENT,(le+1)*W/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,Z.width,Z.height,1,he,me,re)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,he,me,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,Z.width,Z.height,Z.depth,0,he,me,Z.data);else if(_.isData3DTexture)Te?(Fe&&t.texStorage3D(n.TEXTURE_3D,te,ae,Z.width,Z.height,Z.depth),P&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,he,me,Z.data)):t.texImage3D(n.TEXTURE_3D,0,ae,Z.width,Z.height,Z.depth,0,he,me,Z.data);else if(_.isFramebufferTexture){if(Fe)if(Te)t.texStorage2D(n.TEXTURE_2D,te,ae,Z.width,Z.height);else{let W=Z.width,le=Z.height;for(let re=0;re<te;re++)t.texImage2D(n.TEXTURE_2D,re,ae,W,le,0,he,me,null),W>>=1,le>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const W=n.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),Z.parentNode!==W){W.appendChild(Z),f.add(_),W.onpaint=Pe=>{const tt=Pe.changedElements;for(const Ze of f)tt.includes(Ze.image)&&(Ze.needsUpdate=!0)},W.requestPaint();return}const le=0,re=n.RGBA,J=n.RGBA,xe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,le,re,J,xe,Z),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Te&&Fe){const W=ze(Le[0]);t.texStorage2D(n.TEXTURE_2D,te,ae,W.width,W.height)}for(let W=0,le=Le.length;W<le;W++)ie=Le[W],Te?P&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,he,me,ie):t.texImage2D(n.TEXTURE_2D,W,ae,he,me,ie);_.generateMipmaps=!1}else if(Te){if(Fe){const W=ze(Z);t.texStorage2D(n.TEXTURE_2D,te,ae,W.width,W.height)}P&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,me,Z)}else t.texImage2D(n.TEXTURE_2D,0,ae,he,me,Z);p(_)&&E(q),oe.__version=ne.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Ue(M,_,N){if(_.image.length!==6)return;const q=j(M,_),$=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+N);const ne=i.get($);if($.version!==ne.__version||q===!0){t.activeTexture(n.TEXTURE0+N);const oe=Ye.getPrimaries(Ye.workingColorSpace),X=_.colorSpace===Bn?null:Ye.getPrimaries(_.colorSpace),Z=_.colorSpace===Bn||oe===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const he=_.isCompressedTexture||_.image[0].isCompressedTexture,me=_.image[0]&&_.image[0].isDataTexture,ae=[];for(let J=0;J<6;J++)!he&&!me?ae[J]=d(_.image[J],!0,r.maxCubemapSize):ae[J]=me?_.image[J].image:_.image[J],ae[J]=K(_,ae[J]);const ie=ae[0],Le=s.convert(_.format,_.colorSpace),Te=s.convert(_.type),Fe=T(_.internalFormat,Le,Te,_.normalized,_.colorSpace),P=_.isVideoTexture!==!0,te=ne.__version===void 0||q===!0,W=$.dataReady;let le=b(_,ie);Ne(n.TEXTURE_CUBE_MAP,_);let re;if(he){P&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Fe,ie.width,ie.height);for(let J=0;J<6;J++){re=ae[J].mipmaps;for(let xe=0;xe<re.length;xe++){const Pe=re[xe];_.format!==nn?Le!==null?P?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,0,0,Pe.width,Pe.height,Le,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,Fe,Pe.width,Pe.height,0,Pe.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,0,0,Pe.width,Pe.height,Le,Te,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,Fe,Pe.width,Pe.height,0,Le,Te,Pe.data)}}}else{if(re=_.mipmaps,P&&te){re.length>0&&le++;const J=ze(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Fe,J.width,J.height)}for(let J=0;J<6;J++)if(me){P?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ae[J].width,ae[J].height,Le,Te,ae[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Fe,ae[J].width,ae[J].height,0,Le,Te,ae[J].data);for(let xe=0;xe<re.length;xe++){const tt=re[xe].image[J].image;P?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,0,0,tt.width,tt.height,Le,Te,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,Fe,tt.width,tt.height,0,Le,Te,tt.data)}}else{P?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,Te,ae[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Fe,Le,Te,ae[J]);for(let xe=0;xe<re.length;xe++){const Pe=re[xe];P?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,0,0,Le,Te,Pe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,Fe,Le,Te,Pe.image[J])}}}p(_)&&E(n.TEXTURE_CUBE_MAP),ne.__version=$.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function we(M,_,N,q,$,ne){const oe=s.convert(N.format,N.colorSpace),X=s.convert(N.type),Z=T(N.internalFormat,oe,X,N.normalized,N.colorSpace),he=i.get(_),me=i.get(N);if(me.__renderTarget=_,!he.__hasExternalTextures){const ae=Math.max(1,_.width>>ne),ie=Math.max(1,_.height>>ne);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,ne,Z,ae,ie,_.depth,0,oe,X,null):t.texImage2D($,ne,Z,ae,ie,0,oe,X,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Me(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,me.__webglTexture,0,De(_)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,me.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(M,_,N){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const q=_.depthTexture,$=q&&q.isDepthTexture?q.type:null,ne=D(_.stencilBuffer,$),oe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Me(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(_),ne,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(_),ne,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ne,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,M)}else{const q=_.textures;for(let $=0;$<q.length;$++){const ne=q[$],oe=s.convert(ne.format,ne.colorSpace),X=s.convert(ne.type),Z=T(ne.internalFormat,oe,X,ne.normalized,ne.colorSpace);Me(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De(_),Z,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,De(_),Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(M,_,N){const q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,_.depthTexture);const he=s.convert(_.depthTexture.format),me=s.convert(_.depthTexture.type);let ae;_.depthTexture.format===yn?ae=n.DEPTH_COMPONENT24:_.depthTexture.format===$n&&(ae=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ae,_.width,_.height,0,he,me,null)}}else Q(_.depthTexture,0);const ne=$.__webglTexture,oe=De(_),X=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,Z=_.depthTexture.format===$n?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===yn)Me(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,X,ne,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Z,X,ne,0);else if(_.depthTexture.format===$n)Me(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,X,ne,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Z,X,ne,0);else throw new Error("Unknown depthTexture format")}function qe(M){const _=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const q=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=q}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)We(_.__webglFramebuffer[q],M,q);else{const q=M.texture.mipmaps;q&&q.length>0?We(_.__webglFramebuffer[0],M,0):We(_.__webglFramebuffer,M,0)}else if(N){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),rt(_.__webglDepthbuffer[q],M,!1);else{const $=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ne)}}else{const q=M.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),rt(_.__webglDepthbuffer,M,!1);else{const $=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(M,_,N){const q=i.get(M);_!==void 0&&we(q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&qe(M)}function Ve(M){const _=M.texture,N=i.get(M),q=i.get(_);M.addEventListener("dispose",x);const $=M.textures,ne=M.isWebGLCubeRenderTarget===!0,oe=$.length>1;if(oe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,a.memory.textures++),ne){N.__webglFramebuffer=[];for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[X]=[];for(let Z=0;Z<_.mipmaps.length;Z++)N.__webglFramebuffer[X][Z]=n.createFramebuffer()}else N.__webglFramebuffer[X]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let X=0;X<_.mipmaps.length;X++)N.__webglFramebuffer[X]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(oe)for(let X=0,Z=$.length;X<Z;X++){const he=i.get($[X]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&Me(M)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let X=0;X<$.length;X++){const Z=$[X];N.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[X]);const he=s.convert(Z.format,Z.colorSpace),me=s.convert(Z.type),ae=T(Z.internalFormat,he,me,Z.normalized,Z.colorSpace,M.isXRRenderTarget===!0),ie=De(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ae,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,N.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,_);for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)we(N.__webglFramebuffer[X][Z],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,Z);else we(N.__webglFramebuffer[X],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(_)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let X=0,Z=$.length;X<Z;X++){const he=$[X],me=i.get(he);let ae=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ae=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,me.__webglTexture),Ne(ae,he),we(N.__webglFramebuffer,M,he,n.COLOR_ATTACHMENT0+X,ae,0),p(he)&&E(ae)}t.unbindTexture()}else{let X=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(X=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(X,q.__webglTexture),Ne(X,_),_.mipmaps&&_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)we(N.__webglFramebuffer[Z],M,_,n.COLOR_ATTACHMENT0,X,Z);else we(N.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,X,0);p(_)&&E(X),t.unbindTexture()}M.depthBuffer&&qe(M)}function ht(M){const _=M.textures;for(let N=0,q=_.length;N<q;N++){const $=_[N];if(p($)){const ne=R(M),oe=i.get($).__webglTexture;t.bindTexture(ne,oe),E(ne),t.unbindTexture()}}}const ot=[],Tt=[];function A(M){if(M.samples>0){if(Me(M)===!1){const _=M.textures,N=M.width,q=M.height;let $=n.COLOR_BUFFER_BIT;const ne=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(M),X=_.length>1;if(X)for(let he=0;he<_.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Z=M.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let he=0;he<_.length;he++){if(M.resolveDepthBuffer&&(M.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[he]);const me=i.get(_[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,N,q,0,0,N,q,$,n.NEAREST),c===!0&&(ot.length=0,Tt.length=0,ot.push(n.COLOR_ATTACHMENT0+he),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ot.push(ne),Tt.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Tt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let he=0;he<_.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,oe.__webglColorRenderbuffer[he]);const me=i.get(_[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function De(M){return Math.min(r.maxSamples,M.samples)}function Me(M){const _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Se(M){const _=a.render.frame;h.get(M)!==_&&(h.set(M,_),M.update())}function K(M,_){const N=M.colorSpace,q=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==qr&&N!==Bn&&(Ye.getTransfer(N)===nt?(q!==nn||$!==Kt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",N)),_}function ze(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.getTextureUnits=Y,this.setTextureUnits=I,this.setTexture2D=Q,this.setTexture2DArray=ee,this.setTexture3D=ce,this.setTextureCube=ve,this.rebindTextures=st,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Om(n,e){function t(i,r=Bn){let s;const a=Ye.getTransfer(r);if(i===Kt)return n.UNSIGNED_BYTE;if(i===Va)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ha)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===wc)return n.BYTE;if(i===Cc)return n.SHORT;if(i===Qi)return n.UNSIGNED_SHORT;if(i===Ga)return n.INT;if(i===fn)return n.UNSIGNED_INT;if(i===ln)return n.FLOAT;if(i===dn)return n.HALF_FLOAT;if(i===Lc)return n.ALPHA;if(i===Uc)return n.RGB;if(i===nn)return n.RGBA;if(i===yn)return n.DEPTH_COMPONENT;if(i===$n)return n.DEPTH_STENCIL;if(i===Ic)return n.RED;if(i===ka)return n.RED_INTEGER;if(i===ei)return n.RG;if(i===Wa)return n.RG_INTEGER;if(i===Xa)return n.RGBA_INTEGER;if(i===Gr||i===Vr||i===Hr||i===kr)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===na||i===ia||i===ra||i===sa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ia)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===aa||i===oa||i===ca||i===la||i===ua||i===Xr||i===ha)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===aa||i===oa)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ca)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===la)return s.COMPRESSED_R11_EAC;if(i===ua)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Xr)return s.COMPRESSED_RG11_EAC;if(i===ha)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fa||i===da||i===pa||i===ma||i===_a||i===ga||i===xa||i===va||i===Ma||i===Sa||i===Ea||i===ya||i===Ta||i===ba)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fa)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===da)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pa)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ma)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_a)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ga)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xa)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===va)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ma)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sa)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ea)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ya)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ta)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ba)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Aa||i===Ra||i===wa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Aa)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ra)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ca||i===Pa||i===Yr||i===Da)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ca)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Da)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
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

}`;class Gm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Wc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new jt({vertexShader:Bm,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new ar(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vm extends kn{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,m=null,g=null;const S=typeof XRWebGLBinding<"u",d=new Gm,p={},E=t.getContextAttributes();let R=null,T=null;const D=[],b=[],w=new ke;let x=null;const y=new Zt;y.viewport=new ft;const L=new Zt;L.viewport=new ft;const C=[y,L],U=new Zu;let k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ue=D[j];return ue===void 0&&(ue=new gs,D[j]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(j){let ue=D[j];return ue===void 0&&(ue=new gs,D[j]=ue),ue.getGripSpace()},this.getHand=function(j){let ue=D[j];return ue===void 0&&(ue=new gs,D[j]=ue),ue.getHandSpace()};function I(j){const ue=b.indexOf(j.inputSource);if(ue===-1)return;const se=D[ue];se!==void 0&&(se.update(j.inputSource,j.frame,l||a),se.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",B);for(let j=0;j<D.length;j++){const ue=b[j];ue!==null&&(b[j]=null,D[j].disconnect(ue))}k=null,Y=null,d.reset();for(const j in p)delete p[j];e.setRenderTarget(R),m=null,u=null,f=null,r=null,T=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",V),r.addEventListener("inputsourceschange",B),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Re=null,Ue=null;E.depth&&(Ue=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=E.stencil?$n:yn,Re=E.stencil?er:fn);const we={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(we),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),T=new rn(u.textureWidth,u.textureHeight,{format:nn,type:Kt,depthTexture:new Pi(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new rn(m.framebufferWidth,m.framebufferHeight,{format:nn,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function B(j){for(let ue=0;ue<j.removed.length;ue++){const se=j.removed[ue],Re=b.indexOf(se);Re>=0&&(b[Re]=null,D[Re].disconnect(se))}for(let ue=0;ue<j.added.length;ue++){const se=j.added[ue];let Re=b.indexOf(se);if(Re===-1){for(let we=0;we<D.length;we++)if(we>=b.length){b.push(se),Re=we;break}else if(b[we]===null){b[we]=se,Re=we;break}if(Re===-1)break}const Ue=D[Re];Ue&&Ue.connect(se)}}const Q=new O,ee=new O;function ce(j,ue,se){Q.setFromMatrixPosition(ue.matrixWorld),ee.setFromMatrixPosition(se.matrixWorld);const Re=Q.distanceTo(ee),Ue=ue.projectionMatrix.elements,we=se.projectionMatrix.elements,rt=Ue[14]/(Ue[10]-1),We=Ue[14]/(Ue[10]+1),qe=(Ue[9]+1)/Ue[5],st=(Ue[9]-1)/Ue[5],Ve=(Ue[8]-1)/Ue[0],ht=(we[8]+1)/we[0],ot=rt*Ve,Tt=rt*ht,A=Re/(-Ve+ht),De=A*-Ve;if(ue.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(De),j.translateZ(A),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ue[10]===-1)j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Me=rt+A,Se=We+A,K=ot-De,ze=Tt+(Re-De),M=qe*We/Se*Me,_=st*We/Se*Me;j.projectionMatrix.makePerspective(K,ze,M,_,Me,Se),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ve(j,ue){ue===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ue.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ue=j.near,se=j.far;d.texture!==null&&(d.depthNear>0&&(ue=d.depthNear),d.depthFar>0&&(se=d.depthFar)),U.near=L.near=y.near=ue,U.far=L.far=y.far=se,(k!==U.near||Y!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,Y=U.far),U.layers.mask=j.layers.mask|6,y.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;const Re=j.parent,Ue=U.cameras;ve(U,Re);for(let we=0;we<Ue.length;we++)ve(Ue[we],Re);Ue.length===2?ce(U,y,L):U.projectionMatrix.copy(y.projectionMatrix),ye(j,U,Re)};function ye(j,ue,se){se===null?j.matrix.copy(ue.matrixWorld):(j.matrix.copy(se.matrixWorld),j.matrix.invert(),j.matrix.multiply(ue.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ue.projectionMatrix),j.projectionMatrixInverse.copy(ue.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=tr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(U)},this.getCameraTexture=function(j){return p[j]};let Ie=null;function Qe(j,ue){if(h=ue.getViewerPose(l||a),g=ue,h!==null){const se=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let Re=!1;se.length!==U.cameras.length&&(U.cameras.length=0,Re=!0);for(let We=0;We<se.length;We++){const qe=se[We];let st=null;if(m!==null)st=m.getViewport(qe);else{const ht=f.getViewSubImage(u,qe);st=ht.viewport,We===0&&(e.setRenderTargetTextures(T,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(T))}let Ve=C[We];Ve===void 0&&(Ve=new Zt,Ve.layers.enable(We),Ve.viewport=new ft,C[We]=Ve),Ve.matrix.fromArray(qe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(qe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(st.x,st.y,st.width,st.height),We===0&&(U.matrix.copy(Ve.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Re===!0&&U.cameras.push(Ve)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const We=f.getDepthInformation(se[0]);We&&We.isValid&&We.texture&&d.init(We,r.renderState)}if(Ue&&Ue.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let We=0;We<se.length;We++){const qe=se[We].camera;if(qe){let st=p[qe];st||(st=new Wc,p[qe]=st);const Ve=f.getCameraImage(qe);st.sourceTexture=Ve}}}}for(let se=0;se<D.length;se++){const Re=b[se],Ue=D[se];Re!==null&&Ue!==void 0&&Ue.update(Re,ue,l||a)}Ie&&Ie(j,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const Ne=new jc;Ne.setAnimationLoop(Qe),this.setAnimationLoop=function(j){Ie=j},this.dispose=function(){}}}const Hm=new mt,nl=new Oe;nl.set(-1,0,0,0,1,0,0,0,1);function km(n,e){function t(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function i(d,p){p.color.getRGB(d.fogColor.value,Xc(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,E,R,T){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(d,p):p.isMeshLambertMaterial?(s(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(d,p),f(d,p)):p.isMeshPhongMaterial?(s(d,p),h(d,p),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(d,p),u(d,p),p.isMeshPhysicalMaterial&&m(d,p,T)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),S(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?c(d,p,E,R):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,t(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Ot&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,t(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Ot&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,t(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,t(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const E=e.get(p),R=E.envMap,T=E.envMapRotation;R&&(d.envMap.value=R,d.envMapRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(T)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(nl),d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function c(d,p,E,R){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*E,d.scale.value=R*.5,p.map&&(d.map.value=p.map,t(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,t(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,t(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function u(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,E){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=E.texture,d.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function S(d,p){const E=e.get(p).light;d.referencePosition.value.setFromMatrixPosition(E.matrixWorld),d.nearDistance.value=E.shadow.camera.near,d.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Wm(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,R){const T=R.program;i.uniformBlockBinding(E,T)}function l(E,R){let T=r[E.id];T===void 0&&(g(E),T=h(E),r[E.id]=T,E.addEventListener("dispose",d));const D=R.program;i.updateUBOMapping(E,D);const b=e.render.frame;s[E.id]!==b&&(u(E),s[E.id]=b)}function h(E){const R=f();E.__bindingPointIndex=R;const T=n.createBuffer(),D=E.__size,b=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,D,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,T),T}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const R=r[E.id],T=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let b=0,w=T.length;b<w;b++){const x=Array.isArray(T[b])?T[b]:[T[b]];for(let y=0,L=x.length;y<L;y++){const C=x[y];if(m(C,b,y,D)===!0){const U=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let I=0;I<k.length;I++){const V=k[I],B=S(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,U+Y,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):ArrayBuffer.isView(V)?C.__data.set(new V.constructor(V.buffer,V.byteOffset,C.__data.length)):(V.toArray(C.__data,Y),Y+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,R,T,D){const b=E.value,w=R+"_"+T;if(D[w]===void 0)return typeof b=="number"||typeof b=="boolean"?D[w]=b:ArrayBuffer.isView(b)?D[w]=b.slice():D[w]=b.clone(),!0;{const x=D[w];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return D[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function g(E){const R=E.uniforms;let T=0;const D=16;for(let w=0,x=R.length;w<x;w++){const y=Array.isArray(R[w])?R[w]:[R[w]];for(let L=0,C=y.length;L<C;L++){const U=y[L],k=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,I=k.length;Y<I;Y++){const V=k[Y],B=S(V),Q=T%D,ee=Q%B.boundary,ce=Q+ee;T+=ee,ce!==0&&D-ce<B.storage&&(T+=D-ce),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=B.storage}}}const b=T%D;return b>0&&(T+=D-b),E.__size=T,E.__cache={},this}function S(E){const R={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(R.boundary=4,R.storage=4):E.isVector2?(R.boundary=8,R.storage=8):E.isVector3||E.isColor?(R.boundary=16,R.storage=12):E.isVector4?(R.boundary=16,R.storage=16):E.isMatrix3?(R.boundary=48,R.storage=48):E.isMatrix4?(R.boundary=64,R.storage=64):E.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(R.boundary=16,R.storage=E.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",E),R}function d(E){const R=E.target;R.removeEventListener("dispose",d);const T=a.indexOf(R.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}const Xm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let on=null;function Ym(){return on===null&&(on=new Fu(Xm,16,16,ei,dn),on.name="DFG_LUT",on.minFilter=yt,on.magFilter=yt,on.wrapS=Mn,on.wrapT=Mn,on.generateMipmaps=!1,on.needsUpdate=!0),on}class qm{constructor(e={}){const{canvas:t=Jl(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Kt}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const S=m,d=new Set([Xa,Wa,ka]),p=new Set([Kt,fn,Qi,er,Va,Ha]),E=new Uint32Array(4),R=new Int32Array(4),T=new O;let D=null,b=null;const w=[],x=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let C=!1,U=null;this._outputColorSpace=Ht;let k=0,Y=0,I=null,V=-1,B=null;const Q=new ft,ee=new ft;let ce=null;const ve=new Je(0);let ye=0,Ie=t.width,Qe=t.height,Ne=1,j=null,ue=null;const se=new ft(0,0,Ie,Qe),Re=new ft(0,0,Ie,Qe);let Ue=!1;const we=new Hc;let rt=!1,We=!1;const qe=new mt,st=new O,Ve=new ft,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Tt(){return I===null?Ne:1}let A=i;function De(v,F){return t.getContext(v,F)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${za}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),A===null){const F="webgl2";if(A=De(F,v),A===null)throw De(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw $e("WebGLRenderer: "+v.message),v}let Me,Se,K,ze,M,_,N,q,$,ne,oe,X,Z,he,me,ae,ie,Le,Te,Fe,P,te,W;function le(){Me=new Yd(A),Me.init(),P=new Om(A,Me),Se=new Bd(A,Me,e,P),K=new Nm(A,Me),Se.reversedDepthBuffer&&u&&K.buffers.depth.setReversed(!0),ze=new Kd(A),M=new Sm,_=new Fm(A,Me,K,M,Se,P,ze),N=new Xd(L),q=new Ju(A),te=new Fd(A,q),$=new qd(A,q,ze,te),ne=new $d(A,$,q,te,ze),Le=new jd(A,Se,_),me=new zd(M),oe=new Mm(L,N,Me,Se,te,me),X=new km(L,M),Z=new ym,he=new Cm(Me),ie=new Nd(L,N,K,ne,g,c),ae=new Im(L,ne,Se),W=new Wm(A,ze,Se,K),Te=new Od(A,Me,ze),Fe=new Zd(A,Me,ze),ze.programs=oe.programs,L.capabilities=Se,L.extensions=Me,L.properties=M,L.renderLists=Z,L.shadowMap=ae,L.state=K,L.info=ze}le(),S!==Kt&&(y=new Qd(S,t.width,t.height,r,s));const re=new Vm(L,A);this.xr=re,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=Me.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Me.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(v){v!==void 0&&(Ne=v,this.setSize(Ie,Qe,!1))},this.getSize=function(v){return v.set(Ie,Qe)},this.setSize=function(v,F,H=!0){if(re.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=v,Qe=F,t.width=Math.floor(v*Ne),t.height=Math.floor(F*Ne),H===!0&&(t.style.width=v+"px",t.style.height=F+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(Ie*Ne,Qe*Ne).floor()},this.setDrawingBufferSize=function(v,F,H){Ie=v,Qe=F,Ne=H,t.width=Math.floor(v*H),t.height=Math.floor(F*H),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(S===Kt){$e("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){Ce("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Q)},this.getViewport=function(v){return v.copy(se)},this.setViewport=function(v,F,H,z){v.isVector4?se.set(v.x,v.y,v.z,v.w):se.set(v,F,H,z),K.viewport(Q.copy(se).multiplyScalar(Ne).round())},this.getScissor=function(v){return v.copy(Re)},this.setScissor=function(v,F,H,z){v.isVector4?Re.set(v.x,v.y,v.z,v.w):Re.set(v,F,H,z),K.scissor(ee.copy(Re).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(v){K.setScissorTest(Ue=v)},this.setOpaqueSort=function(v){j=v},this.setTransparentSort=function(v){ue=v},this.getClearColor=function(v){return v.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,H=!0){let z=0;if(v){let G=!1;if(I!==null){const pe=I.texture.format;G=d.has(pe)}if(G){const pe=I.texture.type,ge=p.has(pe),de=ie.getClearColor(),Ee=ie.getClearAlpha(),be=de.r,Be=de.g,He=de.b;ge?(E[0]=be,E[1]=Be,E[2]=He,E[3]=Ee,A.clearBufferuiv(A.COLOR,0,E)):(R[0]=be,R[1]=Be,R[2]=He,R[3]=Ee,A.clearBufferiv(A.COLOR,0,R))}else z|=A.COLOR_BUFFER_BIT}F&&(z|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),ie.dispose(),Z.dispose(),he.dispose(),M.dispose(),N.dispose(),ne.dispose(),te.dispose(),W.dispose(),oe.dispose(),re.dispose(),re.removeEventListener("sessionstart",zi),re.removeEventListener("sessionend",ri),pn.stop()};function J(v){v.preventDefault(),So("WebGLRenderer: Context Lost."),C=!0}function xe(){So("WebGLRenderer: Context Restored."),C=!1;const v=ze.autoReset,F=ae.enabled,H=ae.autoUpdate,z=ae.needsUpdate,G=ae.type;le(),ze.autoReset=v,ae.enabled=F,ae.autoUpdate=H,ae.needsUpdate=z,ae.type=G}function Pe(v){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function tt(v){const F=v.target;F.removeEventListener("dispose",tt),Ze(F)}function Ze(v){$t(v),M.remove(v)}function $t(v){const F=M.get(v).programs;F!==void 0&&(F.forEach(function(H){oe.releaseProgram(H)}),v.isShaderMaterial&&oe.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,H,z,G,pe){F===null&&(F=ht);const ge=G.isMesh&&G.matrixWorld.determinant()<0,de=dl(v,F,H,z,G);K.setMaterial(z,ge);let Ee=H.index,be=1;if(z.wireframe===!0){if(Ee=$.getWireframeAttribute(H),Ee===void 0)return;be=2}const Be=H.drawRange,He=H.attributes.position;let Ae=Be.start*be,at=(Be.start+Be.count)*be;pe!==null&&(Ae=Math.max(Ae,pe.start*be),at=Math.min(at,(pe.start+pe.count)*be)),Ee!==null?(Ae=Math.max(Ae,0),at=Math.min(at,Ee.count)):He!=null&&(Ae=Math.max(Ae,0),at=Math.min(at,He.count));const _t=at-Ae;if(_t<0||_t===1/0)return;te.setup(G,z,de,H,Ee);let dt,ct=Te;if(Ee!==null&&(dt=q.get(Ee),ct=Fe,ct.setIndex(dt)),G.isMesh)z.wireframe===!0?(K.setLineWidth(z.wireframeLinewidth*Tt()),ct.setMode(A.LINES)):ct.setMode(A.TRIANGLES);else if(G.isLine){let wt=z.linewidth;wt===void 0&&(wt=1),K.setLineWidth(wt*Tt()),G.isLineSegments?ct.setMode(A.LINES):G.isLineLoop?ct.setMode(A.LINE_LOOP):ct.setMode(A.LINE_STRIP)}else G.isPoints?ct.setMode(A.POINTS):G.isSprite&&ct.setMode(A.TRIANGLES);if(G.isBatchedMesh)if(Me.get("WEBGL_multi_draw"))ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const wt=G._multiDrawStarts,_e=G._multiDrawCounts,zt=G._multiDrawCount,je=Ee?q.get(Ee).bytesPerElement:1,Yt=M.get(z).currentProgram.getUniforms();for(let sn=0;sn<zt;sn++)Yt.setValue(A,"_gl_DrawID",sn),ct.render(wt[sn]/je,_e[sn])}else if(G.isInstancedMesh)ct.renderInstances(Ae,_t,G.count);else if(H.isInstancedBufferGeometry){const wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_e=Math.min(H.instanceCount,wt);ct.renderInstances(Ae,_t,_e)}else ct.render(Ae,_t)};function Xt(v,F,H){v.transparent===!0&&v.side===Ft&&v.forceSinglePass===!1?(v.side=Ot,v.needsUpdate=!0,ur(v,F,H),v.side=Hn,v.needsUpdate=!0,ur(v,F,H),v.side=Ft):ur(v,F,H)}this.compile=function(v,F,H=null){H===null&&(H=v),b=he.get(H),b.init(F),x.push(b),H.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),v!==H&&v.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights();const z=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let ge=0;ge<pe.length;ge++){const de=pe[ge];Xt(de,H,G),z.add(de)}else Xt(pe,H,G),z.add(pe)}),b=x.pop(),z},this.compileAsync=function(v,F,H=null){const z=this.compile(v,F,H);return new Promise(G=>{function pe(){if(z.forEach(function(ge){M.get(ge).currentProgram.isReady()&&z.delete(ge)}),z.size===0){G(v);return}setTimeout(pe,10)}Me.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Bi=null;function or(v){Bi&&Bi(v)}function zi(){pn.stop()}function ri(){pn.start()}const pn=new jc;pn.setAnimationLoop(or),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(v){Bi=v,re.setAnimationLoop(v),v===null?pn.stop():pn.start()},re.addEventListener("sessionstart",zi),re.addEventListener("sessionend",ri),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;U!==null&&U.renderStart(v,F);const H=re.enabled===!0&&re.isPresenting===!0,z=y!==null&&(I===null||H)&&y.begin(L,I);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),v.isScene===!0&&v.onBeforeRender(L,v,F,I),b=he.get(v,x.length),b.init(F),b.state.textureUnits=_.getTextureUnits(),x.push(b),qe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),we.setFromProjectionMatrix(qe,un,F.reversedDepth),We=this.localClippingEnabled,rt=me.init(this.clippingPlanes,We),D=Z.get(v,w.length),D.init(),w.push(D),re.enabled===!0&&re.isPresenting===!0){const ge=L.xr.getDepthSensingMesh();ge!==null&&Gi(ge,F,-1/0,L.sortObjects)}Gi(v,F,0,L.sortObjects),D.finish(),L.sortObjects===!0&&D.sort(j,ue),ot=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ot&&ie.addToRenderList(D,v),this.info.render.frame++,rt===!0&&me.beginShadows();const G=b.state.shadowsArray;if(ae.render(G,v,F),rt===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&y.hasRenderPass())===!1){const ge=D.opaque,de=D.transmissive;if(b.setupLights(),F.isArrayCamera){const Ee=F.cameras;if(de.length>0)for(let be=0,Be=Ee.length;be<Be;be++){const He=Ee[be];Vi(ge,de,v,He)}ot&&ie.render(v);for(let be=0,Be=Ee.length;be<Be;be++){const He=Ee[be];cr(D,v,He,He.viewport)}}else de.length>0&&Vi(ge,de,v,F),ot&&ie.render(v),cr(D,v,F)}I!==null&&Y===0&&(_.updateMultisampleRenderTarget(I),_.updateRenderTargetMipmap(I)),z&&y.end(L),v.isScene===!0&&v.onAfterRender(L,v,F),te.resetDefaultState(),V=-1,B=null,x.pop(),x.length>0?(b=x[x.length-1],_.setTextureUnits(b.state.textureUnits),rt===!0&&me.setGlobalState(L.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?D=w[w.length-1]:D=null,U!==null&&U.renderEnd()};function Gi(v,F,H,z){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||we.intersectsSprite(v)){z&&Ve.setFromMatrixPosition(v.matrixWorld).applyMatrix4(qe);const ge=ne.update(v),de=v.material;de.visible&&D.push(v,ge,de,H,Ve.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||we.intersectsObject(v))){const ge=ne.update(v),de=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ve.copy(v.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ve.copy(ge.boundingSphere.center)),Ve.applyMatrix4(v.matrixWorld).applyMatrix4(qe)),Array.isArray(de)){const Ee=ge.groups;for(let be=0,Be=Ee.length;be<Be;be++){const He=Ee[be],Ae=de[He.materialIndex];Ae&&Ae.visible&&D.push(v,ge,Ae,H,Ve.z,He)}}else de.visible&&D.push(v,ge,de,H,Ve.z,null)}}const pe=v.children;for(let ge=0,de=pe.length;ge<de;ge++)Gi(pe[ge],F,H,z)}function cr(v,F,H,z){const{opaque:G,transmissive:pe,transparent:ge}=v;b.setupLightsView(H),rt===!0&&me.setGlobalState(L.clippingPlanes,H),z&&K.viewport(Q.copy(z)),G.length>0&&lr(G,F,H),pe.length>0&&lr(pe,F,H),ge.length>0&&lr(ge,F,H),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Vi(v,F,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){const Ae=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new rn(1,1,{generateMipmaps:!0,type:Ae?dn:Kt,minFilter:jn,samples:Math.max(4,Se.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const pe=b.state.transmissionRenderTarget[z.id],ge=z.viewport||Q;pe.setSize(ge.z*L.transmissionResolutionScale,ge.w*L.transmissionResolutionScale);const de=L.getRenderTarget(),Ee=L.getActiveCubeFace(),be=L.getActiveMipmapLevel();L.setRenderTarget(pe),L.getClearColor(ve),ye=L.getClearAlpha(),ye<1&&L.setClearColor(16777215,.5),L.clear(),ot&&ie.render(H);const Be=L.toneMapping;L.toneMapping=hn;const He=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),rt===!0&&me.setGlobalState(L.clippingPlanes,z),lr(v,H,z),_.updateMultisampleRenderTarget(pe),_.updateRenderTargetMipmap(pe),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let at=0,_t=F.length;at<_t;at++){const dt=F[at],{object:ct,geometry:wt,material:_e,group:zt}=dt;if(_e.side===Ft&&ct.layers.test(z.layers)){const je=_e.side;_e.side=Ot,_e.needsUpdate=!0,oo(ct,H,z,wt,_e,zt),_e.side=je,_e.needsUpdate=!0,Ae=!0}}Ae===!0&&(_.updateMultisampleRenderTarget(pe),_.updateRenderTargetMipmap(pe))}L.setRenderTarget(de,Ee,be),L.setClearColor(ve,ye),He!==void 0&&(z.viewport=He),L.toneMapping=Be}function lr(v,F,H){const z=F.isScene===!0?F.overrideMaterial:null;for(let G=0,pe=v.length;G<pe;G++){const ge=v[G],{object:de,geometry:Ee,group:be}=ge;let Be=ge.material;Be.allowOverride===!0&&z!==null&&(Be=z),de.layers.test(H.layers)&&oo(de,F,H,Ee,Be,be)}}function oo(v,F,H,z,G,pe){v.onBeforeRender(L,F,H,z,G,pe),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(L,F,H,z,v,pe),G.transparent===!0&&G.side===Ft&&G.forceSinglePass===!1?(G.side=Ot,G.needsUpdate=!0,L.renderBufferDirect(H,F,z,G,v,pe),G.side=Hn,G.needsUpdate=!0,L.renderBufferDirect(H,F,z,G,v,pe),G.side=Ft):L.renderBufferDirect(H,F,z,G,v,pe),v.onAfterRender(L,F,H,z,G,pe)}function ur(v,F,H){F.isScene!==!0&&(F=ht);const z=M.get(v),G=b.state.lights,pe=b.state.shadowsArray,ge=G.state.version,de=oe.getParameters(v,G.state,pe,F,H,b.state.lightProbeGridArray),Ee=oe.getProgramCacheKey(de);let be=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;const Be=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=N.get(v.envMap||z.environment,Be),z.envMapRotation=z.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",tt),be=new Map,z.programs=be);let He=be.get(Ee);if(He!==void 0){if(z.currentProgram===He&&z.lightsStateVersion===ge)return lo(v,de),He}else de.uniforms=oe.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,H,de),v.onBeforeCompile(de,L),He=oe.acquireProgram(de,Ee),be.set(Ee,He),z.uniforms=de.uniforms;const Ae=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=me.uniform),lo(v,de),z.needsLights=ml(v),z.lightsStateVersion=ge,z.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=He,z.uniformsList=null,He}function co(v){if(v.uniformsList===null){const F=v.currentProgram.getUniforms();v.uniformsList=Wr.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function lo(v,F){const H=M.get(v);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function fl(v,F){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;T.setFromMatrixPosition(F.matrixWorld);for(let H=0,z=v.length;H<z;H++){const G=v[H];if(G.texture!==null&&G.boundingBox.containsPoint(T))return G}return null}function dl(v,F,H,z,G){F.isScene!==!0&&(F=ht),_.resetTextureUnits();const pe=F.fog,ge=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,de=I===null?L.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ye.workingColorSpace,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,be=N.get(z.envMap||ge,Ee),Be=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!H.morphAttributes.position,at=!!H.morphAttributes.normal,_t=!!H.morphAttributes.color;let dt=hn;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(dt=L.toneMapping);const ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,wt=ct!==void 0?ct.length:0,_e=M.get(z),zt=b.state.lights;if(rt===!0&&(We===!0||v!==B)){const ut=v===B&&z.id===V;me.setState(z,v,ut)}let je=!1;z.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==zt.state.version||_e.outputColorSpace!==de||G.isBatchedMesh&&_e.batching===!1||!G.isBatchedMesh&&_e.batching===!0||G.isBatchedMesh&&_e.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&_e.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&_e.instancing===!1||!G.isInstancedMesh&&_e.instancing===!0||G.isSkinnedMesh&&_e.skinning===!1||!G.isSkinnedMesh&&_e.skinning===!0||G.isInstancedMesh&&_e.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&_e.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&_e.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&_e.instancingMorph===!1&&G.morphTexture!==null||_e.envMap!==be||z.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==me.numPlanes||_e.numIntersection!==me.numIntersection)||_e.vertexAlphas!==Be||_e.vertexTangents!==He||_e.morphTargets!==Ae||_e.morphNormals!==at||_e.morphColors!==_t||_e.toneMapping!==dt||_e.morphTargetsCount!==wt||!!_e.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,_e.__version=z.version);let Yt=_e.currentProgram;je===!0&&(Yt=ur(z,F,G),U&&z.isNodeMaterial&&U.onUpdateProgram(z,Yt,_e));let sn=!1,An=!1,si=!1;const lt=Yt.getUniforms(),gt=_e.uniforms;if(K.useProgram(Yt.program)&&(sn=!0,An=!0,si=!0),z.id!==V&&(V=z.id,An=!0),_e.needsLights){const ut=fl(b.state.lightProbeGridArray,G);_e.lightProbeGrid!==ut&&(_e.lightProbeGrid=ut,An=!0)}if(sn||B!==v){K.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),lt.setValue(A,"projectionMatrix",v.projectionMatrix),lt.setValue(A,"viewMatrix",v.matrixWorldInverse);const wn=lt.map.cameraPosition;wn!==void 0&&wn.setValue(A,st.setFromMatrixPosition(v.matrixWorld)),Se.logarithmicDepthBuffer&&lt.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&lt.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),B!==v&&(B=v,An=!0,si=!0)}if(_e.needsLights&&(zt.state.directionalShadowMap.length>0&&lt.setValue(A,"directionalShadowMap",zt.state.directionalShadowMap,_),zt.state.spotShadowMap.length>0&&lt.setValue(A,"spotShadowMap",zt.state.spotShadowMap,_),zt.state.pointShadowMap.length>0&&lt.setValue(A,"pointShadowMap",zt.state.pointShadowMap,_)),G.isSkinnedMesh){lt.setOptional(A,G,"bindMatrix"),lt.setOptional(A,G,"bindMatrixInverse");const ut=G.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),lt.setValue(A,"boneTexture",ut.boneTexture,_))}G.isBatchedMesh&&(lt.setOptional(A,G,"batchingTexture"),lt.setValue(A,"batchingTexture",G._matricesTexture,_),lt.setOptional(A,G,"batchingIdTexture"),lt.setValue(A,"batchingIdTexture",G._indirectTexture,_),lt.setOptional(A,G,"batchingColorTexture"),G._colorsTexture!==null&&lt.setValue(A,"batchingColorTexture",G._colorsTexture,_));const Rn=H.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Le.update(G,H,Yt),(An||_e.receiveShadow!==G.receiveShadow)&&(_e.receiveShadow=G.receiveShadow,lt.setValue(A,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(gt.envMapIntensity.value=F.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=Ym()),An){if(lt.setValue(A,"toneMappingExposure",L.toneMappingExposure),_e.needsLights&&pl(gt,si),pe&&z.fog===!0&&X.refreshFogUniforms(gt,pe),X.refreshMaterialUniforms(gt,z,Ne,Qe,b.state.transmissionRenderTarget[v.id]),_e.needsLights&&_e.lightProbeGrid){const ut=_e.lightProbeGrid;gt.probesSH.value=ut.texture,gt.probesMin.value.copy(ut.boundingBox.min),gt.probesMax.value.copy(ut.boundingBox.max),gt.probesResolution.value.copy(ut.resolution)}Wr.upload(A,co(_e),gt,_)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Wr.upload(A,co(_e),gt,_),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&lt.setValue(A,"center",G.center),lt.setValue(A,"modelViewMatrix",G.modelViewMatrix),lt.setValue(A,"normalMatrix",G.normalMatrix),lt.setValue(A,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const ut=z.uniformsGroups;for(let wn=0,ai=ut.length;wn<ai;wn++){const uo=ut[wn];W.update(uo,Yt),W.bind(uo,Yt)}}return Yt}function pl(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function ml(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,F,H){const z=M.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),M.get(v.texture).__webglTexture=F,M.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){const H=M.get(v);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const _l=A.createFramebuffer();this.setRenderTarget=function(v,F=0,H=0){I=v,k=F,Y=H;let z=null,G=!1,pe=!1;if(v){const de=M.get(v);if(de.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(A.FRAMEBUFFER,de.__webglFramebuffer),Q.copy(v.viewport),ee.copy(v.scissor),ce=v.scissorTest,K.viewport(Q),K.scissor(ee),K.setScissorTest(ce),V=-1;return}else if(de.__webglFramebuffer===void 0)_.setupRenderTarget(v);else if(de.__hasExternalTextures)_.rebindTextures(v,M.get(v.texture).__webglTexture,M.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Be=v.depthTexture;if(de.__boundDepthTexture!==Be){if(Be!==null&&M.has(Be)&&(v.width!==Be.image.width||v.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(v)}}const Ee=v.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(pe=!0);const be=M.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(be[F])?z=be[F][H]:z=be[F],G=!0):v.samples>0&&_.useMultisampledRTT(v)===!1?z=M.get(v).__webglMultisampledFramebuffer:Array.isArray(be)?z=be[H]:z=be,Q.copy(v.viewport),ee.copy(v.scissor),ce=v.scissorTest}else Q.copy(se).multiplyScalar(Ne).floor(),ee.copy(Re).multiplyScalar(Ne).floor(),ce=Ue;if(H!==0&&(z=_l),K.bindFramebuffer(A.FRAMEBUFFER,z)&&K.drawBuffers(v,z),K.viewport(Q),K.scissor(ee),K.setScissorTest(ce),G){const de=M.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,H)}else if(pe){const de=F;for(let Ee=0;Ee<v.textures.length;Ee++){const be=M.get(v.textures[Ee]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ee,be.__webglTexture,H,de)}}else if(v!==null&&H!==0){const de=M.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,de.__webglTexture,H)}V=-1},this.readRenderTargetPixels=function(v,F,H,z,G,pe,ge,de=0){if(!(v&&v.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=M.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){K.bindFramebuffer(A.FRAMEBUFFER,Ee);try{const be=v.textures[de],Be=be.format,He=be.type;if(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+de),!Se.textureFormatReadable(Be)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(He)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-z&&H>=0&&H<=v.height-G&&A.readPixels(F,H,z,G,P.convert(Be),P.convert(He),pe)}finally{const be=I!==null?M.get(I).__webglFramebuffer:null;K.bindFramebuffer(A.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,F,H,z,G,pe,ge,de=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=M.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee)if(F>=0&&F<=v.width-z&&H>=0&&H<=v.height-G){K.bindFramebuffer(A.FRAMEBUFFER,Ee);const be=v.textures[de],Be=be.format,He=be.type;if(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+de),!Se.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ae),A.bufferData(A.PIXEL_PACK_BUFFER,pe.byteLength,A.STREAM_READ),A.readPixels(F,H,z,G,P.convert(Be),P.convert(He),0);const at=I!==null?M.get(I).__webglFramebuffer:null;K.bindFramebuffer(A.FRAMEBUFFER,at);const _t=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Ql(A,_t,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ae),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,pe),A.deleteBuffer(Ae),A.deleteSync(_t),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,H=0){const z=Math.pow(2,-H),G=Math.floor(v.image.width*z),pe=Math.floor(v.image.height*z),ge=F!==null?F.x:0,de=F!==null?F.y:0;_.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,H,0,0,ge,de,G,pe),K.unbindTexture()};const gl=A.createFramebuffer(),xl=A.createFramebuffer();this.copyTextureToTexture=function(v,F,H=null,z=null,G=0,pe=0){let ge,de,Ee,be,Be,He,Ae,at,_t;const dt=v.isCompressedTexture?v.mipmaps[pe]:v.image;if(H!==null)ge=H.max.x-H.min.x,de=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,be=H.min.x,Be=H.min.y,He=H.isBox3?H.min.z:0;else{const gt=Math.pow(2,-G);ge=Math.floor(dt.width*gt),de=Math.floor(dt.height*gt),v.isDataArrayTexture?Ee=dt.depth:v.isData3DTexture?Ee=Math.floor(dt.depth*gt):Ee=1,be=0,Be=0,He=0}z!==null?(Ae=z.x,at=z.y,_t=z.z):(Ae=0,at=0,_t=0);const ct=P.convert(F.format),wt=P.convert(F.type);let _e;F.isData3DTexture?(_.setTexture3D(F,0),_e=A.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(_.setTexture2DArray(F,0),_e=A.TEXTURE_2D_ARRAY):(_.setTexture2D(F,0),_e=A.TEXTURE_2D),K.activeTexture(A.TEXTURE0),K.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,F.flipY),K.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),K.pixelStorei(A.UNPACK_ALIGNMENT,F.unpackAlignment);const zt=K.getParameter(A.UNPACK_ROW_LENGTH),je=K.getParameter(A.UNPACK_IMAGE_HEIGHT),Yt=K.getParameter(A.UNPACK_SKIP_PIXELS),sn=K.getParameter(A.UNPACK_SKIP_ROWS),An=K.getParameter(A.UNPACK_SKIP_IMAGES);K.pixelStorei(A.UNPACK_ROW_LENGTH,dt.width),K.pixelStorei(A.UNPACK_IMAGE_HEIGHT,dt.height),K.pixelStorei(A.UNPACK_SKIP_PIXELS,be),K.pixelStorei(A.UNPACK_SKIP_ROWS,Be),K.pixelStorei(A.UNPACK_SKIP_IMAGES,He);const si=v.isDataArrayTexture||v.isData3DTexture,lt=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){const gt=M.get(v),Rn=M.get(F),ut=M.get(gt.__renderTarget),wn=M.get(Rn.__renderTarget);K.bindFramebuffer(A.READ_FRAMEBUFFER,ut.__webglFramebuffer),K.bindFramebuffer(A.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let ai=0;ai<Ee;ai++)si&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,M.get(v).__webglTexture,G,He+ai),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,M.get(F).__webglTexture,pe,_t+ai)),A.blitFramebuffer(be,Be,ge,de,Ae,at,ge,de,A.DEPTH_BUFFER_BIT,A.NEAREST);K.bindFramebuffer(A.READ_FRAMEBUFFER,null),K.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||M.has(v)){const gt=M.get(v),Rn=M.get(F);K.bindFramebuffer(A.READ_FRAMEBUFFER,gl),K.bindFramebuffer(A.DRAW_FRAMEBUFFER,xl);for(let ut=0;ut<Ee;ut++)si?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,gt.__webglTexture,G,He+ut):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,gt.__webglTexture,G),lt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Rn.__webglTexture,pe,_t+ut):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Rn.__webglTexture,pe),G!==0?A.blitFramebuffer(be,Be,ge,de,Ae,at,ge,de,A.COLOR_BUFFER_BIT,A.NEAREST):lt?A.copyTexSubImage3D(_e,pe,Ae,at,_t+ut,be,Be,ge,de):A.copyTexSubImage2D(_e,pe,Ae,at,be,Be,ge,de);K.bindFramebuffer(A.READ_FRAMEBUFFER,null),K.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else lt?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(_e,pe,Ae,at,_t,ge,de,Ee,ct,wt,dt.data):F.isCompressedArrayTexture?A.compressedTexSubImage3D(_e,pe,Ae,at,_t,ge,de,Ee,ct,dt.data):A.texSubImage3D(_e,pe,Ae,at,_t,ge,de,Ee,ct,wt,dt):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,pe,Ae,at,ge,de,ct,wt,dt.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,pe,Ae,at,dt.width,dt.height,ct,dt.data):A.texSubImage2D(A.TEXTURE_2D,pe,Ae,at,ge,de,ct,wt,dt);K.pixelStorei(A.UNPACK_ROW_LENGTH,zt),K.pixelStorei(A.UNPACK_IMAGE_HEIGHT,je),K.pixelStorei(A.UNPACK_SKIP_PIXELS,Yt),K.pixelStorei(A.UNPACK_SKIP_ROWS,sn),K.pixelStorei(A.UNPACK_SKIP_IMAGES,An),pe===0&&F.generateMipmaps&&A.generateMipmap(_e),K.unbindTexture()},this.initRenderTarget=function(v){M.get(v).__webglFramebuffer===void 0&&_.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?_.setTextureCube(v,0):v.isData3DTexture?_.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?_.setTexture2DArray(v,0):_.setTexture2D(v,0),K.unbindTexture()},this.resetState=function(){k=0,Y=0,I=null,K.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const Gs={type:"change"},Ja={type:"start"},Qa={type:"end"},mc=1e-6,et={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},Nr=new ke,Nn=new ke,Zm=new O,Fr=new O,Vs=new O,Si=new ii,_c=new O,Or=new O,Hs=new O,Br=new O;class Km extends ju{constructor(e,t=null){super(e,t),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.target=new O,this.state=et.NONE,this.keyState=et.NONE,this._lastPosition=new O,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new O,this._movePrev=new ke,this._moveCurr=new ke,this._lastAxis=new O,this._zoomStart=new ke,this._zoomEnd=new ke,this._panStart=new ke,this._panEnd=new ke,this._pointers=[],this._pointerPositions={},this._onPointerMove=$m.bind(this),this._onPointerDown=jm.bind(this),this._onPointerUp=Jm.bind(this),this._onPointerCancel=Qm.bind(this),this._onContextMenu=a_.bind(this),this._onMouseWheel=s_.bind(this),this._onKeyDown=t_.bind(this),this._onKeyUp=e_.bind(this),this._onTouchStart=o_.bind(this),this._onTouchMove=c_.bind(this),this._onTouchEnd=l_.bind(this),this._onMouseDown=n_.bind(this),this._onMouseMove=i_.bind(this),this._onMouseUp=r_.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,t!==null&&(this.connect(t),this.handleResize()),this.update()}connect(e){super.connect(e),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction=""}dispose(){this.disconnect()}handleResize(){const e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>mc&&(this.dispatchEvent(Gs),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>mc||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(Gs),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=et.NONE,this.keyState=et.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(Gs),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(Nn.copy(this._panEnd).sub(this._panStart),Nn.lengthSq()){if(this.object.isOrthographicCamera){const e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,t=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;Nn.x*=e,Nn.y*=t}Nn.multiplyScalar(this._eye.length()*this.panSpeed),Fr.copy(this._eye).cross(this.object.up).setLength(Nn.x),Fr.add(Zm.copy(this.object.up).setLength(Nn.y)),this.object.position.add(Fr),this.target.add(Fr),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(Nn.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){Br.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=Br.length();e?(this._eye.copy(this.object.position).sub(this.target),_c.copy(this._eye).normalize(),Or.copy(this.object.up).normalize(),Hs.crossVectors(Or,_c).normalize(),Or.setLength(this._moveCurr.y-this._movePrev.y),Hs.setLength(this._moveCurr.x-this._movePrev.x),Br.copy(Or.add(Hs)),Vs.crossVectors(Br,this._eye).normalize(),e*=this.rotateSpeed,Si.setFromAxisAngle(Vs,e),this._eye.applyQuaternion(Si),this.object.up.applyQuaternion(Si),this._lastAxis.copy(Vs),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),Si.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(Si),this.object.up.applyQuaternion(Si)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let e;this.state===et.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=yo.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=yo.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,t){return Nr.set((e-this.screen.left)/this.screen.width,(t-this.screen.top)/this.screen.height),Nr}_getMouseOnCircle(e,t){return Nr.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-t))/this.screen.width),Nr}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId==e.pointerId){this._pointers.splice(t,1);return}}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[t.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function jm(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n))}function $m(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Jm(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchEnd(n):this._onMouseUp(),this._removePointer(n),this._pointers.length===0&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp)))}function Qm(n){this._removePointer(n)}function e_(){this.enabled!==!1&&(this.keyState=et.NONE,window.addEventListener("keydown",this._onKeyDown))}function t_(n){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===et.NONE&&(n.code===this.keys[et.ROTATE]&&!this.noRotate?this.keyState=et.ROTATE:n.code===this.keys[et.ZOOM]&&!this.noZoom?this.keyState=et.ZOOM:n.code===this.keys[et.PAN]&&!this.noPan&&(this.keyState=et.PAN)))}function n_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ti.DOLLY:this.state=et.ZOOM;break;case Ti.ROTATE:this.state=et.ROTATE;break;case Ti.PAN:this.state=et.PAN;break;default:this.state=et.NONE}const t=this.keyState!==et.NONE?this.keyState:this.state;t===et.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY)),this._movePrev.copy(this._moveCurr)):t===et.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(n.pageX,n.pageY)),this._zoomEnd.copy(this._zoomStart)):t===et.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(n.pageX,n.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(Ja)}function i_(n){const e=this.keyState!==et.NONE?this.keyState:this.state;e===et.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY))):e===et.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(n.pageX,n.pageY)):e===et.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(n.pageX,n.pageY))}function r_(){this.state=et.NONE,this.dispatchEvent(Qa)}function s_(n){if(this.enabled!==!1&&this.noZoom!==!0){switch(n.preventDefault(),n.deltaMode){case 2:this._zoomStart.y-=n.deltaY*.025;break;case 1:this._zoomStart.y-=n.deltaY*.01;break;default:this._zoomStart.y-=n.deltaY*25e-5;break}this.dispatchEvent(Ja),this.dispatchEvent(Qa)}}function a_(n){this.enabled!==!1&&n.preventDefault()}function o_(n){switch(this._trackPointer(n),this._pointers.length){case 1:this.state=et.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=et.TOUCH_ZOOM_PAN;const e=this._pointers[0].pageX-this._pointers[1].pageX,t=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+t*t);const i=(this._pointers[0].pageX+this._pointers[1].pageX)/2,r=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(i,r)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(Ja)}function c_(n){switch(this._trackPointer(n),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY));break;default:const e=this._getSecondPointerPosition(n),t=n.pageX-e.x,i=n.pageY-e.y;this._touchZoomDistanceEnd=Math.sqrt(t*t+i*i);const r=(n.pageX+e.x)/2,s=(n.pageY+e.y)/2;this._panEnd.copy(this._getMouseOnScreen(r,s));break}}function l_(n){switch(this._pointers.length){case 0:this.state=et.NONE;break;case 1:this.state=et.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=et.TOUCH_ZOOM_PAN;for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId!==n.pointerId){const t=this._pointerPositions[this._pointers[e].pointerId];this._moveCurr.copy(this._getMouseOnCircle(t.x,t.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(Qa)}const Ke=n=>Math.floor(Math.random()*n),pt=n=>n[Ke(n.length)],Fi=n=>"#"+n.toString(16).padStart(6,"0");function eo(n,e,t){const i=n>>16&255,r=n>>8&255,s=n&255,a=e>>16&255,o=e>>8&255,c=e&255,l=Math.round(i+(a-i)*t),h=Math.round(r+(o-r)*t),f=Math.round(s+(c-s)*t);return l<<16|h<<8|f}const Oi=1447446,Tn=16250868,to=16052712,u_={agamograph:[15022389,16635957,4431943,2001125,9315498],nightRainbow:[14100029,16015414,16765503,1402304,8072383],dizengoff:[14100029,16765503,2390944,3065014,6966419],highContrast:[16717636,51283,2718207,16748800,16771584,11141375],spectrumBand:[15022389,16485376,16635957,4431943,2001125,9315498]},as=pt(Object.values(u_)),il=[...as,Oi],rl=[Tn,Tn,to],h_=[Tn,Oi];[...as];const Jr=n=>{const e=(n>>16&255)/255,t=(n>>8&255)/255,i=(n&255)/255,r=Math.max(e,t,i),s=Math.min(e,t,i),a=r-s;if(!a)return 0;let o;return r===e?o=(t-i)/a%6:r===t?o=(i-e)/a+2:o=(e-t)/a+4,(o*60+360)%360},ks=[...as].sort((n,e)=>Jr(n)-Jr(e));function ni(n,e){const t=[...n].sort((a,o)=>Jr(a)-Jr(o)),i=t.length,r=Math.min(e,i),s=Ke(i);return Array.from({length:r},(a,o)=>t[(s+o)%i])}const f_=n=>n?h_:il,d_=n=>n?Tn:pt(rl),kt=20,it=51;function sl(n,e){const t=Array(n).fill(Math.floor(e/n));let i=e-t.reduce((r,s)=>r+s,0);for(let r=0;i>0;r=(r+1)%n)t[r]++,i--;for(let r=0;r<n;r++){const s=Ke(n),a=Ke(n);s!==a&&t[s]>3&&(t[s]--,t[a]++)}return t}function al(n,e,t,i){n.fillStyle=Fi(i),n.fillRect(e*it,t*it,it+.6,it+.6)}function It(n,e,t,i,r){for(let s=0;s<i;s++)for(let a=0;a<t;a++)al(n,e+a,s,r(a,s))}const ol=n=>()=>n;function Qr(n,e,t){return(i,r)=>(Math.floor(i/t)+Math.floor(r/t))%2===0?n:e}function yi(n,e,t){return(i,r)=>n[Math.floor((t?r:i)/e)%n.length]}function Oa(n,e,t,i,r){const s=(e-1)/2,a=(t-1)/2;return(o,c)=>{const l=Math.abs(o-s)/Math.max(1,e/2),h=Math.abs(c-a)/Math.max(1,t/2),f=r?(l+h)/2:Math.max(l,h);return n[Math.floor(Math.min(.999,f)*i)%n.length]}}function Ri(n,e,t){const i=ni(t,2+Ke(2)),r=i[1]??t[(t.indexOf(i[0])+1)%t.length];switch(pt(["checker","stripesV","stripesH","diamond","rect","halves","halves"])){case"checker":return Qr(i[0],r,1+Ke(3));case"stripesV":return yi(i,1+Ke(2),!1);case"stripesH":return yi(i,1+Ke(2),!0);case"diamond":return Oa(i,n,e,4+Ke(4),!0);case"rect":return Oa(i,n,e,4+Ke(4),!1);default:{if(Math.random()<.6){const a=1+Ke(Math.max(1,e-1));return(o,c)=>c<a?i[0]:r}const s=1+Ke(Math.max(1,n-1));return a=>a<s?i[0]:r}}}function p_(n,e,t,i,r,s){const a=(i-1)/2,o=(r-1)/2;return(c,l)=>{const h=Math.abs(c-a)/Math.max(1,i/2)+Math.abs(l-o)/Math.max(1,r/2);return h>1?e(c,l):s&&h>=.74?t:n(c,l)}}function cl(n,e,t){const i=(n-1)/2,r=(e-1)/2,s=Math.max(1,Math.floor((n-1)/2)),a=Math.max(1,Math.floor((e-1)/2));let o=1+Ke(s),c=1+Ke(a);Math.random()<.5&&(c=Math.min(o,a)),o=Math.min(o,s),c=Math.min(c,a);const l=Ri(n,e,ni(t,2+Ke(2))),h=Math.random()<.5?ol(pt(t)):Ri(n,e,ni(t,2)),f=pt(t),u=pt(t),m=pt(["full","hollow","center"]);return(g,S)=>{const d=Math.abs(g-i),p=Math.abs(S-r);if(d>o||p>c)return l(g,S);const E=d>o-1||p>c-1;return m==="hollow"?E?f:l(g,S):m==="center"?E?f:d<=o*.4&&p<=c*.4?u:h(g,S):h(g,S)}}function m_(n,e,t,i){const r=e*it,s=t*it,a=i*it,o=3+Ke(3),c=Ke(ks.length),l=Array.from({length:o},(u,m)=>ks[(c+m)%ks.length]);Math.random()<.5&&l.reverse();const f=Math.random()<.6?n.createLinearGradient(0,0,0,a):n.createLinearGradient(r,0,r+s,0);l.forEach((u,m)=>f.addColorStop(m/(l.length-1),Fi(u))),n.fillStyle=f,n.fillRect(r,0,s,a)}function __(n,e,t,i,r){It(n,e,t,i,Ri(t,i,ni(r,2+Ke(2))));const s=e*it,o=Math.max(3,Math.min(t,i)-Ke(2))*it/2,c=s+t/2*it,l=i/2*it;n.beginPath(),n.arc(c,l,o,0,Math.PI*2),n.fillStyle=Fi(pt(r)),n.fill()}function g_(n,e,t,i,r,s){if(s&&Math.random()<.18){m_(n,e,t,i);return}switch(pt(["rhombus","rect","pattern","pattern"])){case"rhombus":{const a=Math.random()<.5,o=Math.random()<.5?ol(pt(r)):Ri(t,i,ni(r,2+Ke(2))),c=Ri(t,i,ni(r,2+Ke(2)));It(n,e,t,i,p_(o,c,pt(r),t,i,a));break}case"rect":It(n,e,t,i,cl(t,i,r));break;default:It(n,e,t,i,Ri(t,i,r))}}function x_(n,e,t,i,r,s){const a=f_(i);n.fillStyle=Fi(d_(i)),n.fillRect(0,0,e*it,t*it);const o=3+Ke(3),c=sl(o,e);let l=-1;if(r){l=0;for(let f=1;f<o;f++)c[f]>c[l]&&(l=f)}let h=0;for(let f=0;f<o;f++){const u=c[f];n.save(),n.beginPath(),n.rect(h*it,0,u*it,t*it),n.clip(),f===l?__(n,h,u,t,a):g_(n,h,u,t,a,!i),n.restore(),h+=u}}const Ws=["0001111000011110000","0111111100111111100","0111111111111111100","1111111111111111110","1111111111111111110","1111111111111111110","1111111111111111110","0111111111111111100","0011111111111111000","0001111111111110000","0000111111111100000","0000011111111000000","0000001111110000000","0000000111100000000","0000000011000000000"];function v_(n,e){var o,c,l,h;const t=e?16777215:pt(rl),i=e?1118481:pt(il.filter(f=>f!==t)),r=Array.from({length:kt},()=>Array(kt).fill(!1)),s=1,a=2;for(let f=0;f<Ws.length;f++)for(let u=0;u<Ws[f].length;u++)if(Ws[f][u]==="1"){const m=a+f,g=s+u;m<kt&&g<kt&&(r[m][g]=!0)}for(let f=0;f<kt;f++)for(let u=0;u<kt;u++){let m=t;r[f][u]?m=i:((o=r[f])!=null&&o[u+1]||(c=r[f])!=null&&c[u-1]||(l=r[f+1])!=null&&l[u]||(h=r[f-1])!=null&&h[u])&&(m=Oi),al(n,u,f,m)}}function ll(n){const e=new Gu(n);return e.colorSpace=Ht,e.generateMipmaps=!1,e.minFilter=yt,e.magFilter=yt,e}function M_(n,e,t){const i=document.createElement("canvas");i.width=i.height=kt*it;const r=i.getContext("2d");return n?v_(r,e):x_(r,kt,kt,e,t),ll(i)}const S_=[16777215,15657179,15788761],nr=(n,e)=>eo(n,Tn,e),ul=(n,e)=>eo(n,1450556,e);function E_(n,e){const t=[];for(let i=0;i<e;i++)t.push(eo(ul(n,.3),nr(n,.5),e===1?.5:i/(e-1)));return t}function y_(n,e,t,i,r,s){if(r){const h=Tn,f=Oi;switch(pt(["checker","stripesV","stripesH","halves"])){case"checker":It(n,e,t,i,Qr(h,f,1+Ke(3)));break;case"stripesV":It(n,e,t,i,yi([h,f],1+Ke(2),!1));break;case"stripesH":It(n,e,t,i,yi([h,f],1+Ke(2),!0));break;default:{const u=1+Ke(Math.max(1,i-1));It(n,e,t,i,(m,g)=>g<u?h:f)}}return}const a=Math.random()<.6?pt(s):nr(pt(s),.12+Math.random()*.12),o=pt(S_),c=Math.random()<.5?nr(a,.45):ul(a,.22),l=Math.random()<.4?o:c;switch(pt(["checker","stripesV","stripesH","rings","halves","rect"])){case"checker":It(n,e,t,i,Qr(a,l,1+Ke(3)));break;case"stripesV":It(n,e,t,i,yi([a,c,o],1+Ke(2),!1));break;case"stripesH":It(n,e,t,i,yi([a,c,o],1+Ke(2),!0));break;case"rings":{const h=E_(a,3+Ke(2));It(n,e,t,i,Oa(h,t,i,h.length,Math.random()<.5));break}case"halves":{const h=1+Ke(Math.max(1,i-1));It(n,e,t,i,(f,u)=>u<h?a:l);break}default:It(n,e,t,i,cl(t,i,[a,c,o]))}}function T_(n,e,t,i,r,s){const a=pt(s),o=r?Tn:nr(a,.55),c=r?Tn:nr(a,.68);It(n,e,t,i,Qr(o,c,2));const l=e*it,f=Math.max(3,Math.min(t,i)-Ke(2))*it/2,u=l+t/2*it,m=i/2*it;n.beginPath(),n.arc(u,m,f,0,Math.PI*2),n.fillStyle=Fi(r?Oi:pt(s)),n.fill()}function b_(n,e,t,i,r){n.fillStyle=Fi(i?16777215:15920866),n.fillRect(0,0,e*it,t*it);const s=ni(as,2+Ke(2)),a=3+Ke(3),o=sl(a,e);let c=-1;if(r){c=0;for(let h=1;h<a;h++)o[h]>o[c]&&(c=h)}let l=0;for(let h=0;h<a;h++){const f=o[h];n.save(),n.beginPath(),n.rect(l*it,0,f*it,t*it),n.clip(),h===c?T_(n,l,f,t,i,s):y_(n,l,f,t,i,s),n.restore(),l+=f}}function gc(n,e,t,i){const r=document.createElement("canvas");r.width=n*it,r.height=e*it;const s=r.getContext("2d");b_(s,n,e,t,i);const a=s.getImageData(0,Math.floor(r.height/2),r.width,1).data,o=[];for(let c=0;c<n;c++){const h=Math.min(r.width-1,Math.floor((c+.5)*it))*4;o.push(a[h]<<16|a[h+1]<<8|a[h+2])}return{texture:ll(r),colors:o}}function A_(){const n=new Jn,e=pt([0,1]),t=e===0?1:0,i=pt([0,1,2,3]),r=[];for(let o=0;o<4;o++)r[o]=new Gn({map:M_(o===e,o===i,o===t)});const s=new Gn({color:to});for(let o=-10;o<10;o++)for(let c=-10;c<10;c++){const l=new Ii,h=l.attributes.uv,f=o+10,u=c+10,m=u/kt,g=(u+1)/kt,S=f/kt,d=(f+1)/kt;h.setXY(0,g,d),h.setXY(1,m,d),h.setXY(2,g,S),h.setXY(3,m,S),h.setXY(4,m,d),h.setXY(5,g,d),h.setXY(6,m,S),h.setXY(7,g,S),h.setXY(8,S,m),h.setXY(9,d,m),h.setXY(10,S,g),h.setXY(11,d,g),h.setXY(12,S,g),h.setXY(13,d,g),h.setXY(14,S,m),h.setXY(15,d,m),h.needsUpdate=!0;const p=new bt(l,[r[0],r[1],r[2],r[3],s,s]);p.position.set(o,o+1,c+.5),n.add(p)}let a;return{name:"Agamograph",group:n,camera:[-30,30,0],update:(o,c)=>{c&&(n.rotation.y+=3e-4)},dispose:()=>a==null?void 0:a.remove()}}class os extends bt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;const i=this,r=t.color!==void 0?new Je(t.color):new Je(8355711),s=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||os.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new Fn,f=new O,u=new O,m=new O,g=new mt,S=new O(0,0,-1),d=new ft,p=new O,E=new O,R=new ft,T=new mt,D=new rn(s,a,{samples:l,type:dn}),b=new jt({name:c.name!==void 0?c.name:"unspecified",uniforms:Yc.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});b.uniforms.tDiffuse.value=D.texture,b.uniforms.color.value=r,b.uniforms.textureMatrix.value=T,this.material=b,this.onBeforeRender=function(w,x,y){const L=this._getReflectionCamera(y);if(u.setFromMatrixPosition(i.matrixWorld),m.setFromMatrixPosition(y.matrixWorld),g.extractRotation(i.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(u,m),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(u),g.extractRotation(y.matrixWorld),S.set(0,0,-1),S.applyMatrix4(g),S.add(m),E.subVectors(u,S),E.reflect(f).negate(),E.add(u),L.position.copy(p),L.up.set(0,1,0),L.up.applyMatrix4(g),L.up.reflect(f),L.lookAt(E),L.far=y.far,L.updateMatrixWorld(),L.projectionMatrix.copy(y.projectionMatrix),T.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),T.multiply(L.projectionMatrix),T.multiply(L.matrixWorldInverse),T.multiply(i.matrixWorld),h.setFromNormalAndCoplanarPoint(f,u),h.applyMatrix4(L.matrixWorldInverse),d.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const U=L.projectionMatrix;L.isOrthographicCamera?(R.x=(Math.sign(d.x)+U.elements[8])/U.elements[0],R.y=(Math.sign(d.y)+U.elements[9])/U.elements[5],R.z=-y.far,R.w=1):(R.x=(Math.sign(d.x)+U.elements[8])/U.elements[0],R.y=(Math.sign(d.y)+U.elements[9])/U.elements[5],R.z=-1,R.w=(1+U.elements[10])/U.elements[14]),d.multiplyScalar(2/d.dot(R)),U.elements[2]=d.x,U.elements[6]=d.y,L.isOrthographicCamera?(U.elements[10]=d.z-o,U.elements[14]=d.w-1):(U.elements[10]=d.z+1-o,U.elements[14]=d.w),i.visible=!1;const k=w.getRenderTarget(),Y=w.xr.enabled,I=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(D),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(x,L),w.xr.enabled=Y,w.shadowMap.autoUpdate=I,w.setRenderTarget(k);const V=y.viewport;V!==void 0&&w.state.viewport(V),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return D},this.dispose=function(){D.dispose(),i.material.dispose()},this._getReflectionCamera=function(w){let x=this._reflectionCameras.get(w);return x===void 0&&(x=w.clone(),this._reflectionCameras.set(w,x)),x}}}os.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const R_=typeof navigator<"u"&&(/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);function w_(){let n,e,t,i,r=0;const s=[0,2,4,7,9],a=261.63,o=h=>a*Math.pow(2,h/12);function c(h,f,u,m,g){if(!n)return;const S=n.createOscillator();S.type=g,S.frequency.value=f;const d=n.createGain();d.gain.setValueAtTime(1e-4,h),d.gain.exponentialRampToValueAtTime(m,h+.03),d.gain.exponentialRampToValueAtTime(1e-4,h+u),S.connect(d),d.connect(e),S.start(h),S.stop(h+u+.05)}function l(){if(!n)return;const h=n.currentTime+.05,f=s[Math.floor(Math.random()*s.length)]+(Math.random()<.4?12:0);c(h,o(f),.6,.14,"triangle"),Math.random()<.5&&c(h+.12,o(f+12),.5,.06,"sine"),r%4===0&&c(h,o(s[0]-12),1.4,.1,"sine"),r++}return{start(){if(!n){n=new(window.AudioContext||window.webkitAudioContext),e=n.createGain(),e.gain.value=.2;const f=n.createDelay();f.delayTime.value=.28;const u=n.createGain();u.gain.value=.3;let m=n.destination;if(R_){const g=n.createMediaStreamDestination();t=document.createElement("audio"),t.playsInline=!0,t.srcObject=g.stream,m=g}e.connect(m),e.connect(f),f.connect(u),u.connect(f),f.connect(m)}n.resume(),t==null||t.play().catch(()=>{});const h=n.createBufferSource();h.buffer=n.createBuffer(1,1,22050),h.connect(n.destination),h.start(0),l(),i===void 0&&(i=window.setInterval(l,360))},stop(){i!==void 0&&(clearInterval(i),i=void 0),t==null||t.pause(),n==null||n.suspend()}}}function C_(){const n=new Jn,e=[7,12,16,10.5,6.5],t=[3,3.6,6.5,4,3],i=e.length,r=.3,s=t.reduce((A,De)=>A+De,0)+r*(i-1),a=.9,o=1.9,c=Math.random()<.25,l=7566971,h=Math.max(...e),f=Math.random()<.5,u=[];let m=-s/2;for(let A=0;A<i;A++)u[A]=m+t[A]/2,m+=t[A]+r;const g=-s/2-.5,S=new Gn({color:7301726,transparent:!0,opacity:.55,depthWrite:!1,side:Ft}),d=new $a(512),p=new Kc(.5,2e3,d);n.add(p);const E=[],R={uTime:{value:0},envMap:{value:d.texture}},T=new jt({uniforms:R,side:Ft,vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main(){
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform samplerCube envMap;
      varying vec2 vUv;
      varying vec3 vWorldPos;
      varying vec3 vWorldNormal;
      void main(){
        // summed directional ripples (no multiplicative blobs) → smooth flowing
        // water rather than isolated spots; low amplitude = subtle shimmer
        float w = sin(vUv.x * 7.0 + uTime * 0.5)
                + sin(vUv.y * 9.0 - uTime * 0.45)
                + 0.7 * sin((vUv.x + vUv.y) * 13.0 + uTime * 0.65)
                + 0.5 * sin((vUv.x - vUv.y) * 17.0 - uTime * 0.6);
        float m = clamp(0.5 + 0.1 * w, 0.0, 1.0);
        vec3 deep  = vec3(0.12, 0.36, 0.62);
        vec3 light = vec3(0.34, 0.66, 0.88);
        vec3 water = mix(deep, light, m);
        vec3 N = normalize(vWorldNormal + 0.012 * vec3(sin(vUv.y*18.0+uTime*1.3), 0.0, cos(vUv.x*18.0-uTime*1.1)));
        vec3 V = normalize(vWorldPos - cameraPosition);
        vec3 R = reflect(V, N);
        vec3 env = textureCube(envMap, R).rgb;
        float fres = 0.30 + 0.06 * pow(1.0 - abs(dot(N, -V)), 3.0);
        gl_FragColor = vec4(mix(water, env, fres), 1.0);
      }
    `}),D=u[i-1]-t[i-1]/2,b=D-g,w=new bt(new $r(3.5,3.5,b,32),S);w.position.y=(D+g)/2,n.add(w);const x=new ja(h+a+6,96);let y;if(f){const A={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0}},vertexShader:`
        uniform mat4 textureMatrix;
        varying vec4 vUv;     // projective coords into the reflection texture
        varying vec2 vLocal;  // disc-local uv for the water ripple
        void main() {
          vLocal = uv;
          vUv = textureMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uTime;
        varying vec4 vUv;
        varying vec2 vLocal;
        void main() {
          // summed directional ripples (no multiplicative blobs) → smooth
          // flowing water rather than isolated spots; low amplitude = subtle
          float w = sin(vLocal.x * 7.0 + uTime * 0.5)
                  + sin(vLocal.y * 9.0 - uTime * 0.45)
                  + 0.7 * sin((vLocal.x + vLocal.y) * 13.0 + uTime * 0.65)
                  + 0.5 * sin((vLocal.x - vLocal.y) * 17.0 - uTime * 0.6);
          float m = clamp(0.5 + 0.1 * w, 0.0, 1.0);
          vec3 deep  = vec3(0.12, 0.36, 0.62);
          vec3 light = vec3(0.34, 0.66, 0.88);
          vec3 water = mix(deep, light, m);
          vec2 ripple = vec2(sin(vLocal.y * 28.0 + uTime * 1.3),
                             cos(vLocal.x * 28.0 - uTime * 1.1)) * 0.006;
          vec4 refl = texture2DProj(tDiffuse, vUv + vec4(ripple, 0.0, 0.0));
          gl_FragColor = vec4(mix(water, refl.rgb, 0.34), 1.0);
        }
      `};y=new os(x,{textureWidth:1024,textureHeight:1024,clipBias:.003,shader:A})}else y=new bt(x,T);y.rotation.x=-Math.PI/2,y.position.y=g,n.add(y),E.push(y);const L=[];for(let A=0;A<i;A++){const De=new Jn,Me=e[A],Se=t[A],K=u[A],ze=c,M=Me+a,_=Me-a,N=Math.max(16,Math.round(2*Math.PI*Me/o)),q=2*N,$=Math.max(5,Math.round(Se*1.4)),ne=gc(N,$,ze,Math.random()<.6),oe=gc(N,$,ze,Math.random()<.6),X=new Gn({map:ne.texture,side:Ft}),Z=new Gn({map:oe.texture,side:Ft}),he=Te=>{const Fe=Te*Math.PI/N,P=Te%2===0?M:_;return new O(P*Math.cos(Fe),K,P*Math.sin(Fe))},me=new bt(new $r(_-.05,_-.05,Se-.1,Math.max(32,N)),S);me.position.set(0,K,0),De.add(me);for(let Te=0;Te<q;Te++){const Fe=he(Te),P=he(Te+1),te=P.x-Fe.x,W=P.z-Fe.z,le=Math.hypot(te,W),re=Math.floor(Te/2),J=re/N,xe=(re+1)/N,Pe=new ar(le,Se),tt=Pe.attributes.uv;tt.setXY(0,J,1),tt.setXY(1,xe,1),tt.setXY(2,J,0),tt.setXY(3,xe,0),tt.needsUpdate=!0;const Ze=new bt(Pe,Te%2===0?X:Z);Ze.position.set((Fe.x+P.x)/2,K,(Fe.z+P.z)/2),Ze.rotation.y=Math.atan2(-W,te),De.add(Ze)}const ae=new Gn({vertexColors:!0,side:Ft}),ie=Math.max(.3,_-.1),Le=Te=>{const Fe=[],P=[];for(let W=0;W<q;W++){const le=W*Math.PI/N,re=(W+1)*Math.PI/N,J=W%2===0?M:_,xe=(W+1)%2===0?M:_,Pe=J*Math.cos(le),tt=J*Math.sin(le),Ze=xe*Math.cos(re),$t=xe*Math.sin(re),Xt=ie*Math.cos(le),Bi=ie*Math.sin(le),or=ie*Math.cos(re),zi=ie*Math.sin(re);Fe.push(Pe,Te,tt,Ze,Te,$t,or,Te,zi),Fe.push(Pe,Te,tt,or,Te,zi,Xt,Te,Bi);const ri=(W%2===0?ne.colors:oe.colors)[Math.floor(W/2)]??8947848,pn=(ri>>16&255)/255,Gi=(ri>>8&255)/255,cr=(ri&255)/255;for(let Vi=0;Vi<6;Vi++)P.push(pn,Gi,cr)}const te=new Nt;return te.setAttribute("position",new Rt(Fe,3)),te.setAttribute("color",new Rt(P,3)),te};De.add(new bt(Le(K+Se/2),ae)),De.add(new bt(Le(K-Se/2),ae)),n.add(De),L.push(De)}const C=L.map((A,De)=>(De%2===0?1:-1)*(7e-4+25e-5*De)),U=22,k=[2,3,4],Y=[];k.forEach((A,De)=>{const Me=e[A]+a,Se=u[A]+t[A]/2,K=Math.max(12,Math.round(2*Math.PI*Me/3));for(let ze=0;ze<K;ze++){const M=ze/K*Math.PI*2,_=Math.cos(M),N=Math.sin(M);for(let q=0;q<6;q++){const $=1.5+Math.random()*.3;Y.push({ox:Me*_,oy:Se,oz:Me*N,cx:_,cz:N,ph:q/6*$+Math.random()*.1,life:$,up:7+Math.random()*2,out:4+Math.random()*1.5,grp:De})}}});const I=u[i-1]+t[i-1]/2;for(let A=0;A<140;A++){const De=Math.random()*Math.PI*2,Me=2+Math.random()*.6;Y.push({ox:0,oy:I,oz:0,cx:Math.cos(De),cz:Math.sin(De),ph:Math.random()*Me,life:Me,up:20+Math.random()*3,out:1.4+Math.random()*1.4,grp:3})}const V=Y.length,B=new Float32Array(V*3),Q=new Nt;Q.setAttribute("position",new Wt(B,3));const ee=new zo(Q,new Ua({color:4168406,size:.55,transparent:!0,opacity:.95,depthWrite:!1}));n.add(ee);const ce=(A,De)=>{const Me=Math.sin(A*.22+De);return Me>.55?1+(Me-.55)/.45*2.6:1},ve=(A,De)=>{const Se=((A+De*2.3)%7+7)%7/7;return(.2+.8*(Se<.75?Se/.75:1-(Se-.75)/.25))*ce(A,De*1.7)},ye=A=>{const Me=(A%13+13)%13/13;let Se;if(Me<.5)Se=.2+.8*(Me/.5);else if(Me<.65)Se=1-(Me-.5)/.15;else return 0;return Se*Math.min(1.4,ce(A,4))},Ie=240,Qe=new Float32Array(Ie),Ne=new Float32Array(Ie),j=new Float32Array(Ie),ue=new Float32Array(Ie),se=new Float32Array(Ie),Re=new Float32Array(Ie),Ue=new Float32Array(Ie),we=new Float32Array(Ie*3),rt=new Float32Array(Ie*3),We=I+.2;for(let A=0;A<Ie;A++){const De=Math.random()*Math.PI*2,Me=Math.random()*2;Qe[A]=Math.cos(De)*Me,Ne[A]=Math.sin(De)*Me,j[A]=5+Math.random()*3.5,ue[A]=(Math.random()-.5)*1.2,se[A]=(Math.random()-.5)*1.2,Re[A]=.9+Math.random()*.7,Ue[A]=Math.random()*Re[A]}const qe=new Nt;qe.setAttribute("position",new Wt(we,3)),qe.setAttribute("color",new Wt(rt,3));const st=new zo(qe,new Ua({size:1.7,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,sizeAttenuation:!0}));n.add(st);const Ve=A=>.55+.3*Math.sin(A*1.7)+.15*Math.sin(A*5.3);let ht=!0,ot=!0;const Tt=w_();return{name:"Fountain",group:n,background:l,camera:[72,13,72],toggles:[{label:"fire",initial:!0,set:A=>{ht=A}},{label:"water",initial:!0,set:A=>{ot=A}},{label:"music",initial:!1,set:A=>A?Tt.start():Tt.stop()}],dispose:()=>{Tt.stop(),f&&y.dispose(),d.dispose()},update:(A,De,Me)=>{if(De){n.rotation.y+=1e-4;for(let Se=0;Se<L.length;Se++)L[Se].rotation.y+=C[Se]}if(y.material.uniforms.uTime.value=A,Me&&!f){for(const Se of E)Se.visible=!1;p.update(Me.renderer,Me.scene);for(const Se of E)Se.visible=!0}if(ee.visible=ot,ot){for(let Se=0;Se<V;Se++){const K=Y[Se],ze=(A+K.ph)%K.life,M=K.grp===3?ye(A):ve(A-ze,K.grp);if(M<.04){B[Se*3+1]=-9999;continue}const _=M>1?1:M,N=K.up*M,$=K.out*(1-.7*_)*ze,ne=K.oy+N*ze-.5*U*ze*ze;if(ne<g-.3){B[Se*3+1]=-9999;continue}B[Se*3]=K.ox+K.cx*$,B[Se*3+1]=ne,B[Se*3+2]=K.oz+K.cz*$}Q.attributes.position.needsUpdate=!0}if(st.visible=ht,ht){const Se=Ve(A);for(let K=0;K<Ie;K++){const ze=(A+Ue[K])%Re[K],M=ze/Re[K];we[K*3]=Qe[K]*(1-.4*M)+ue[K]*ze,we[K*3+1]=We+j[K]*Se*ze,we[K*3+2]=Ne[K]*(1-.4*M)+se[K]*ze;const _=Math.max(0,.5-.46*M),N=M*M;rt[K*3]=1*(1-N)+.957*N,rt[K*3+1]=_*(1-N)+.945*N,rt[K*3+2]=0*(1-N)+.91*N}qe.attributes.position.needsUpdate=!0,qe.attributes.color.needsUpdate=!0}}}}const es=new Pu,Li=new Zt(75,window.innerWidth/window.innerHeight),bn=new qm({antialias:!0});bn.setClearColor(new Je(16052712));bn.setPixelRatio(window.devicePixelRatio);bn.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(bn.domElement);window.addEventListener("resize",()=>{Li.aspect=window.innerWidth/window.innerHeight,Li.updateProjectionMatrix(),bn.setSize(window.innerWidth,window.innerHeight)});const ir=new Km(Li,bn.domElement);ir.dynamicDampingFactor=.12;ir.rotateSpeed=2.2;const P_="border:none;background:none;cursor:pointer;padding:0;font:13px sans-serif;letter-spacing:.02em;",On=document.createElement("div");On.style.cssText="position:fixed;top:14px;left:16px;z-index:9999;display:flex;gap:16px;align-items:center;";document.body.appendChild(On);function Ji(n,e){n.style.cssText=P_+`color:${e?"#111":"#b3aea2"};font-weight:${e?"600":"400"};`}function xc(n,e,t){const i=document.createElement("button");let r=e;return i.textContent=n,Ji(i,r),i.onclick=()=>{r=!r,Ji(i,r),t(r)},i.setOn=s=>{r=s,Ji(i,r)},i}let vt=null,cs=!0,zn=null;function D_(n){n.traverse(e=>{var r,s;const t=e;t.geometry&&t.geometry.dispose();const i=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const a of i)(s=(r=a.map)==null?void 0:r.dispose)==null||s.call(r),a.dispose()})}function L_(n){var e;cs=n,(e=zn==null?void 0:zn.setOn)==null||e.call(zn,n)}function U_(n){On.replaceChildren();for(const t of["surface","fountain"]){const i=document.createElement("button");i.textContent=t,Ji(i,t===n),i.onclick=()=>Ba(t),On.appendChild(i)}const e=document.createElement("button");if(e.textContent="↻",Ji(e,!1),e.style.fontSize="17px",e.style.lineHeight="1",e.title="new render",e.onclick=()=>Ba(n),On.appendChild(e),vt!=null&&vt.toggles){const t=document.createElement("span");t.textContent="·",t.style.cssText="color:#cfcabd;",On.appendChild(t),zn=xc("spin",cs,L_),On.appendChild(zn);for(const i of vt.toggles)i.set(i.initial),On.appendChild(xc(i.label,i.initial,i.set))}else zn=null}function Ba(n){var e;vt&&(es.remove(vt.group),(e=vt.dispose)==null||e.call(vt),D_(vt.group)),cs=!0,vt=n==="surface"?A_():C_(),bn.setClearColor(new Je(vt.background??16052712)),es.add(vt.group),Li.up.set(0,1,0),Li.position.set(...vt.camera),ir.target.set(0,0,0),ir.update(),U_(n)}Ba("fountain");const I_=new Ku,hl=()=>{var n;requestAnimationFrame(hl),(n=vt==null?void 0:vt.update)==null||n.call(vt,I_.getElapsedTime(),cs,{renderer:bn,scene:es}),bn.render(es,Li),ir.update()};hl();
