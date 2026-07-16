(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yl="184",Nn={ROTATE:0,DOLLY:1,PAN:2},Vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ju=0,Pc=1,Zu=2,Ta=1,Ku=2,Ar=3,Vi=0,gn=1,mn=2,bi=0,Ys=1,Na=2,Dc=3,Lc=4,$u=5,os=100,Ju=101,Qu=102,td=103,ed=104,nd=200,id=201,sd=202,rd=203,Xo=204,Yo=205,ad=206,od=207,ld=208,cd=209,hd=210,ud=211,dd=212,fd=213,pd=214,qo=0,jo=1,Zo=2,Ks=3,Ko=4,$o=5,Jo=6,Qo=7,ql=0,md=1,gd=2,si=0,jh=1,Zh=2,Kh=3,$h=4,Jh=5,Qh=6,tu=7,eu=300,ds=301,$s=302,so=303,ro=304,qa=306,tl=1e3,ei=1001,el=1002,Je=1003,_d=1004,Xr=1005,$e=1006,ao=1007,ki=1008,Cn=1009,nu=1010,iu=1011,Lr=1012,jl=1013,ri=1014,ni=1015,ai=1016,Zl=1017,Kl=1018,Ir=1020,su=35902,ru=35899,au=1021,ou=1022,Yn=1023,Ai=1026,cs=1027,lu=1028,$l=1029,fs=1030,Jl=1031,Ql=1033,Aa=33776,wa=33777,Ra=33778,Ca=33779,nl=35840,il=35841,sl=35842,rl=35843,al=36196,ol=37492,ll=37496,cl=37488,hl=37489,Fa=37490,ul=37491,dl=37808,fl=37809,pl=37810,ml=37811,gl=37812,_l=37813,xl=37814,vl=37815,Ml=37816,Sl=37817,yl=37818,bl=37819,El=37820,Tl=37821,Al=36492,wl=36494,Rl=36495,Cl=36283,Pl=36284,Oa=36285,Dl=36286,xd=3200,Ll=0,vd=1,Oi="",An="srgb",Ba="srgb-linear",za="linear",fe="srgb",bs=7680,Ic=519,Md=512,Sd=513,yd=514,tc=515,bd=516,Ed=517,ec=518,Td=519,Il=35044,Uc="300 es",ii=2e3,Ur=2001;function Ad(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wd(){const n=Nr("canvas");return n.style.display="block",n}const Nc={};function ka(...n){const t="THREE."+n.shift();console.log(t,...n)}function cu(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ft(...n){n=cu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ee(...n){n=cu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ul(...n){const t=n.join(" ");t in Nc||(Nc[t]=!0,Ft(...n))}function Rd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Cd={[qo]:jo,[Zo]:Jo,[Ko]:Qo,[Ks]:$o,[jo]:qo,[Jo]:Zo,[Qo]:Ko,[$o]:Ks};class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fc=1234567;const Rr=Math.PI/180,Fr=180/Math.PI;function Ei(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function nc(n,t){return(n%t+t)%t}function Pd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Dd(n,t,e){return n!==t?(e-n)/(t-n):0}function Cr(n,t,e){return(1-e)*n+e*t}function Ld(n,t,e,i){return Cr(n,t,1-Math.exp(-e*i))}function Id(n,t=1){return t-Math.abs(nc(n,t*2)-t)}function Ud(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Nd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Fd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Od(n,t){return n+Math.random()*(t-n)}function Bd(n){return n*(.5-Math.random())}function zd(n){n!==void 0&&(Fc=n);let t=Fc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kd(n){return n*Rr}function Gd(n){return n*Fr}function Hd(n){return(n&n-1)===0&&n!==0}function Vd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Wd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xd(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),h=a((t-i)/2),p=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*p,o*u,o*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Nl={DEG2RAD:Rr,RAD2DEG:Fr,generateUUID:Ei,clamp:$t,euclideanModulo:nc,mapLinear:Pd,inverseLerp:Dd,lerp:Cr,damp:Ld,pingpong:Id,smoothstep:Ud,smootherstep:Nd,randInt:Fd,randFloat:Od,randFloatSpread:Bd,seededRandom:zd,degToRad:kd,radToDeg:Gd,isPowerOfTwo:Hd,ceilPowerOfTwo:Vd,floorPowerOfTwo:Wd,setQuaternionFromProperEuler:Xd,normalize:pe,denormalize:Xn},Mc=class Mc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mc.prototype.isVector2=!0;let Ct=Mc;class wi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||l!==h||c!==p||u!==_){let f=l*h+c*p+u*_+d*S;f<0&&(h=-h,p=-p,_=-_,S=-S,f=-f);let m=1-o;if(f<.9995){const M=Math.acos(f),A=Math.sin(M);m=Math.sin(m*M)/A,o=Math.sin(o*M)/A,l=l*m+h*o,c=c*m+p*o,u=u*m+_*o,d=d*m+S*o}else{l=l*m+h*o,c=c*m+p*o,u=u*m+_*o,d=d*m+S*o;const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*d+l*p-c*h,t[e+1]=l*_+u*h+c*d-o*p,t[e+2]=c*_+u*p+o*h-l*d,t[e+3]=u*_-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Sc=class Sc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oo.copy(this).projectOnVector(t),this.sub(oo)}reflect(t){return this.sub(oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sc.prototype.isVector3=!0;let D=Sc;const oo=new D,Oc=new wi,yc=class yc{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],_=i[8],S=s[0],f=s[3],m=s[6],M=s[1],A=s[4],T=s[7],C=s[2],E=s[5],R=s[8];return r[0]=a*S+o*M+l*C,r[3]=a*f+o*A+l*E,r[6]=a*m+o*T+l*R,r[1]=c*S+u*M+d*C,r[4]=c*f+u*A+d*E,r[7]=c*m+u*T+d*R,r[2]=h*S+p*M+_*C,r[5]=h*f+p*A+_*E,r[8]=h*m+p*T+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,_=e*d+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return t[0]=d*S,t[1]=(s*c-u*i)*S,t[2]=(o*i-s*a)*S,t[3]=h*S,t[4]=(u*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=p*S,t[7]=(i*l-c*e)*S,t[8]=(a*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(lo.makeScale(t,e)),this}rotate(t){return this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};yc.prototype.isMatrix3=!0;let Ht=yc;const lo=new Ht,Bc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){const n={enabled:!0,workingColorSpace:Ba,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?za:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ul("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ul("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ba]:{primaries:t,whitePoint:i,transfer:za,toXYZ:Bc,fromXYZ:zc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:Bc,fromXYZ:zc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),n}const te=Yd();function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Es;class qd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Es===void 0&&(Es=Nr("canvas")),Es.width=t.width,Es.height=t.height;const s=Es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Es}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ti(e[i]/255)*255):e[i]=Ti(e[i]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jd=0;class ic{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(co(s[a].image)):r.push(co(s[a]))}else r=co(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function co(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let Zd=0;const ho=new D;class Qe extends ji{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,i=ei,s=ei,r=$e,a=ki,o=Yn,l=Cn,c=Qe.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Ei(),this.name="",this.source=new ic(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tl:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case el:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tl:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case el:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=eu;Qe.DEFAULT_ANISOTROPY=1;const bc=class bc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],S=l[2],f=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,T=(p+1)/2,C=(m+1)/2,E=(u+h)/4,R=(d+S)/4,x=(_+f)/4;return A>T&&A>C?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=E/i,r=R/i):T>C?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=E/s,r=x/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=x/r),this.set(i,s,r,e),this}let M=Math.sqrt((f-_)*(f-_)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(d-S)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bc.prototype.isVector4=!0;let Ae=bc;class Kd extends ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new Qe(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ic(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Kd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class hu extends Qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends Qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ya=class Ya{constructor(t,e,i,s,r,a,o,l,c,u,d,h,p,_,S,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,d,h,p,_,S,f)}set(t,e,i,s,r,a,o,l,c,u,d,h,p,_,S,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=p,m[7]=_,m[11]=S,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ya().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),a=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,p=a*d,_=o*u,S=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+_*c,e[5]=h-S*c,e[9]=-o*l,e[2]=S-h*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,p=l*d,_=c*u,S=c*d;e[0]=h+S*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=S+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,p=l*d,_=c*u,S=c*d;e[0]=h-S*o,e[4]=-a*d,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,p=a*d,_=o*u,S=o*d;e[0]=l*u,e[4]=_*c-p,e[8]=h*c+S,e[1]=l*d,e[5]=S*c+h,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,p=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=S-h*d,e[8]=_*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+_,e[10]=h-S*d}else if(t.order==="XZY"){const h=a*l,p=a*c,_=o*l,S=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+S,e[5]=a*u,e[9]=p*d-_,e[2]=_*d-p,e[6]=o*u,e[10]=S*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jd,t,Qd)}lookAt(t,e,i){const s=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),Pi.crossVectors(i,En),Pi.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Pi.crossVectors(i,En)),Pi.normalize(),Yr.crossVectors(En,Pi),s[0]=Pi.x,s[4]=Yr.x,s[8]=En.x,s[1]=Pi.y,s[5]=Yr.y,s[9]=En.y,s[2]=Pi.z,s[6]=Yr.z,s[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],_=i[2],S=i[6],f=i[10],m=i[14],M=i[3],A=i[7],T=i[11],C=i[15],E=s[0],R=s[4],x=s[8],b=s[12],P=s[1],w=s[5],I=s[9],V=s[13],W=s[2],U=s[6],G=s[10],z=s[14],tt=s[3],it=s[7],ct=s[11],Tt=s[15];return r[0]=a*E+o*P+l*W+c*tt,r[4]=a*R+o*w+l*U+c*it,r[8]=a*x+o*I+l*G+c*ct,r[12]=a*b+o*V+l*z+c*Tt,r[1]=u*E+d*P+h*W+p*tt,r[5]=u*R+d*w+h*U+p*it,r[9]=u*x+d*I+h*G+p*ct,r[13]=u*b+d*V+h*z+p*Tt,r[2]=_*E+S*P+f*W+m*tt,r[6]=_*R+S*w+f*U+m*it,r[10]=_*x+S*I+f*G+m*ct,r[14]=_*b+S*V+f*z+m*Tt,r[3]=M*E+A*P+T*W+C*tt,r[7]=M*R+A*w+T*U+C*it,r[11]=M*x+A*I+T*G+C*ct,r[15]=M*b+A*V+T*z+C*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],_=t[3],S=t[7],f=t[11],m=t[15],M=l*p-c*h,A=o*p-c*d,T=o*h-l*d,C=a*p-c*u,E=a*h-l*u,R=a*d-o*u;return e*(S*M-f*A+m*T)-i*(_*M-f*C+m*E)+s*(_*A-S*C+m*R)-r*(_*T-S*E+f*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],_=t[12],S=t[13],f=t[14],m=t[15],M=e*o-i*a,A=e*l-s*a,T=e*c-r*a,C=i*l-s*o,E=i*c-r*o,R=s*c-r*l,x=u*S-d*_,b=u*f-h*_,P=u*m-p*_,w=d*f-h*S,I=d*m-p*S,V=h*m-p*f,W=M*V-A*I+T*w+C*P-E*b+R*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/W;return t[0]=(o*V-l*I+c*w)*U,t[1]=(s*I-i*V-r*w)*U,t[2]=(S*R-f*E+m*C)*U,t[3]=(h*E-d*R-p*C)*U,t[4]=(l*P-a*V-c*b)*U,t[5]=(e*V-s*P+r*b)*U,t[6]=(f*T-_*R-m*A)*U,t[7]=(u*R-h*T+p*A)*U,t[8]=(a*I-o*P+c*x)*U,t[9]=(i*P-e*I-r*x)*U,t[10]=(_*E-S*T+m*M)*U,t[11]=(d*T-u*E-p*M)*U,t[12]=(o*b-a*w-l*x)*U,t[13]=(e*w-i*b+s*x)*U,t[14]=(S*A-_*C-f*M)*U,t[15]=(u*C-d*A+h*M)*U,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,_=r*d,S=a*u,f=a*d,m=o*d,M=l*c,A=l*u,T=l*d,C=i.x,E=i.y,R=i.z;return s[0]=(1-(S+m))*C,s[1]=(p+T)*C,s[2]=(_-A)*C,s[3]=0,s[4]=(p-T)*E,s[5]=(1-(h+m))*E,s[6]=(f+M)*E,s[7]=0,s[8]=(_+A)*R,s[9]=(f-M)*R,s[10]=(1-(h+S))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),l=Ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Hn.copy(this);const c=1/a,u=1/o,d=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,e.setFromRotationMatrix(Hn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=ii,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),p=(i+s)/(i-s);let _,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===ii)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Ur)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ii,l=!1){const c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),p=-(i+s)/(i-s);let _,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===ii)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Ur)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ya.prototype.isMatrix4=!0;let Me=Ya;const Ts=new D,Hn=new Me,Jd=new D(0,0,0),Qd=new D(1,1,1),Pi=new D,Yr=new D,En=new D,kc=new Me,Gc=new wi;class Wi{constructor(t=0,e=0,i=0,s=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class uu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tf=0;const Hc=new D,As=new wi,_i=new Me,qr=new D,gr=new D,ef=new D,nf=new wi,Vc=new D(1,0,0),Wc=new D(0,1,0),Xc=new D(0,0,1),Yc={type:"added"},sf={type:"removed"},ws={type:"childadded",child:null},uo={type:"childremoved",child:null};class We extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new D,e=new Wi,i=new wi,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new Ht}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.multiply(As),this}rotateOnWorldAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.premultiply(As),this}rotateX(t){return this.rotateOnAxis(Vc,t)}rotateY(t){return this.rotateOnAxis(Wc,t)}rotateZ(t){return this.rotateOnAxis(Xc,t)}translateOnAxis(t,e){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vc,t)}translateY(t){return this.translateOnAxis(Wc,t)}translateZ(t){return this.translateOnAxis(Xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qr.copy(t):qr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(gr,qr,this.up):_i.lookAt(qr,gr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),As.setFromRotationMatrix(_i),this.quaternion.premultiply(As.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),ws.child=t,this.dispatchEvent(ws),ws.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sf),uo.child=t,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}We.DEFAULT_UP=new D(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gi extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rf={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const f=e.getJointPose(S,i),m=this._getHandJoint(c,S);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Gi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},jr={h:0,s:0,l:0};function po(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class _t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=nc(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=po(a,r,t+1/3),this.g=po(a,r,t),this.b=po(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=An){function i(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){const i=du[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return te.workingToColorSpace(an.copy(this),t),Math.round($t(an.r*255,0,255))*65536+Math.round($t(an.g*255,0,255))*256+Math.round($t(an.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(an.copy(this),e);const i=an.r,s=an.g,r=an.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=An){te.workingToColorSpace(an.copy(this),t);const e=an.r,i=an.g,s=an.b;return t!==An?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(jr);const i=Cr(Di.h,jr.h,e),s=Cr(Di.s,jr.s,e),r=Cr(Di.l,jr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new _t;_t.NAMES=du;class af extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Vn=new D,xi=new D,mo=new D,vi=new D,Rs=new D,Cs=new D,qc=new D,go=new D,_o=new D,xo=new D,vo=new Ae,Mo=new Ae,So=new Ae;class Un{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Vn.subVectors(t,e),s.cross(Vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Vn.subVectors(s,e),xi.subVectors(i,e),mo.subVectors(t,e);const a=Vn.dot(Vn),o=Vn.dot(xi),l=Vn.dot(mo),c=xi.dot(xi),u=xi.dot(mo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return vo.setScalar(0),Mo.setScalar(0),So.setScalar(0),vo.fromBufferAttribute(t,e),Mo.fromBufferAttribute(t,i),So.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(vo,r.x),a.addScaledVector(Mo,r.y),a.addScaledVector(So,r.z),a}static isFrontFacing(t,e,i,s){return Vn.subVectors(i,e),xi.subVectors(t,e),Vn.cross(xi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Vn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Un.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Rs.subVectors(s,i),Cs.subVectors(r,i),go.subVectors(t,i);const l=Rs.dot(go),c=Cs.dot(go);if(l<=0&&c<=0)return e.copy(i);_o.subVectors(t,s);const u=Rs.dot(_o),d=Cs.dot(_o);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Rs,a);xo.subVectors(t,r);const p=Rs.dot(xo),_=Cs.dot(xo);if(_>=0&&p<=_)return e.copy(r);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Cs,o);const f=u*_-p*d;if(f<=0&&d-u>=0&&p-_>=0)return qc.subVectors(r,s),o=(d-u)/(d-u+(p-_)),e.copy(s).addScaledVector(qc,o);const m=1/(f+S+h);return a=S*m,o=h*m,e.copy(i).addScaledVector(Rs,a).addScaledVector(Cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class kr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),Kr.subVectors(this.max,_r),Ps.subVectors(t.a,_r),Ds.subVectors(t.b,_r),Ls.subVectors(t.c,_r),Li.subVectors(Ds,Ps),Ii.subVectors(Ls,Ds),is.subVectors(Ps,Ls);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-is.z,is.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,is.z,0,-is.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-is.y,is.x,0];return!yo(e,Ps,Ds,Ls,Kr)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,Ps,Ds,Ls,Kr))?!1:($r.crossVectors(Li,Ii),e=[$r.x,$r.y,$r.z],yo(e,Ps,Ds,Ls,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mi=[new D,new D,new D,new D,new D,new D,new D,new D],Wn=new D,Zr=new kr,Ps=new D,Ds=new D,Ls=new D,Li=new D,Ii=new D,is=new D,_r=new D,Kr=new D,$r=new D,ss=new D;function yo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ss.fromArray(n,r);const o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),l=t.dot(ss),c=e.dot(ss),u=i.dot(ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Oe=new D,Jr=new Ct;let of=0;class Te extends ji{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:of++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Il,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Il&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class fu extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class pu extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Se extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}}const lf=new kr,xr=new D,bo=new D;class ja{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):lf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(xr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(bo)),this.expandByPoint(xr.copy(t.center).sub(bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let cf=0;const In=new Me,Eo=new We,Is=new D,Tn=new kr,vr=new kr,Ze=new D;class Be extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ad(t)?pu:fu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,i){return In.makeTranslation(t,e,i),this.applyMatrix4(In),this}scale(t,e,i){return In.makeScale(t,e,i),this.applyMatrix4(In),this}lookAt(t){return Eo.lookAt(t),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(Tn.min,vr.min),Tn.expandByPoint(Ze),Ze.addVectors(Tn.max,vr.max),Tn.expandByPoint(Ze)):(Tn.expandByPoint(vr.min),Tn.expandByPoint(vr.max))}Tn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ze.fromBufferAttribute(o,c),l&&(Is.fromBufferAttribute(t,c),Ze.add(Is)),s=Math.max(s,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new D,l[x]=new D;const c=new D,u=new D,d=new D,h=new Ct,p=new Ct,_=new Ct,S=new D,f=new D;function m(x,b,P){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,P),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,P),u.sub(c),d.sub(c),p.sub(h),_.sub(h);const w=1/(p.x*_.y-_.x*p.y);isFinite(w)&&(S.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(w),f.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(w),o[x].add(S),o[b].add(S),o[P].add(S),l[x].add(f),l[b].add(f),l[P].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,b=M.length;x<b;++x){const P=M[x],w=P.start,I=P.count;for(let V=w,W=w+I;V<W;V+=3)m(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const A=new D,T=new D,C=new D,E=new D;function R(x){C.fromBufferAttribute(s,x),E.copy(C);const b=o[x];A.copy(b),A.sub(C.multiplyScalar(C.dot(b))).normalize(),T.crossVectors(E,b);const w=T.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,w)}for(let x=0,b=M.length;x<b;++x){const P=M[x],w=P.start,I=P.count;for(let V=w,W=w+I;V<W;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,d=new D;if(t)for(let h=0,p=t.count;h<p;h+=3){const _=t.getX(h+0),S=t.getX(h+1),f=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,f),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,f),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let S=0,f=l.length;S<f;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let m=0;m<u;m++)h[_++]=c[p++]}return new Te(h,u,d)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=t(h,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Il,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new D;class Ga{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ka("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ga(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ka("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let uf=0;class ms extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Ys,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=Yo,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xo&&(i.blendSrc=this.blendSrc),this.blendDst!==Yo&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sc extends ms{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Us;const Mr=new D,Ns=new D,Fs=new D,Os=new Ct,Sr=new Ct,mu=new Me,Qr=new D,yr=new D,ta=new D,jc=new Ct,To=new Ct,Zc=new Ct;class gu extends We{constructor(t=new sc){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hf(e,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new Ga(i,3,0,!1)),Us.setAttribute("uv",new Ga(i,2,3,!1))}this.geometry=Us,this.material=t,this.center=new Ct(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),mu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Fs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;ea(Qr.set(-.5,-.5,0),Fs,a,Ns,s,r),ea(yr.set(.5,-.5,0),Fs,a,Ns,s,r),ea(ta.set(.5,.5,0),Fs,a,Ns,s,r),jc.set(0,0),To.set(1,0),Zc.set(1,1);let o=t.ray.intersectTriangle(Qr,yr,ta,!1,Mr);if(o===null&&(ea(yr.set(-.5,.5,0),Fs,a,Ns,s,r),To.set(0,1),o=t.ray.intersectTriangle(Qr,ta,yr,!1,Mr),o===null))return;const l=t.ray.origin.distanceTo(Mr);l<t.near||l>t.far||e.push({distance:l,point:Mr.clone(),uv:Un.getInterpolation(Mr,Qr,yr,ta,jc,To,Zc,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ea(n,t,e,i,s,r){Os.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Sr.x=r*Os.x-s*Os.y,Sr.y=s*Os.x+r*Os.y):Sr.copy(Os),n.copy(t),n.x+=Sr.x,n.y+=Sr.y,n.applyMatrix4(mu)}const Si=new D,Ao=new D,na=new D,Ui=new D,wo=new D,ia=new D,Ro=new D;class rc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ao.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),Ui.copy(this.origin).sub(Ao);const r=t.distanceTo(e)*.5,a=-this.direction.dot(na),o=Ui.dot(this.direction),l=-Ui.dot(na),c=Ui.lengthSq(),u=Math.abs(1-a*a);let d,h,p,_;if(u>0)if(d=a*l-o,h=a*o-l,_=r*u,d>=0)if(h>=-_)if(h<=_){const S=1/u;d*=S,h*=S,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ao).addScaledVector(na,h),p}intersectSphere(t,e){Si.subVectors(t.center,this.origin);const i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,i,s,r){wo.subVectors(e,t),ia.subVectors(i,t),Ro.crossVectors(wo,ia);let a=this.direction.dot(Ro),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,t);const l=o*this.direction.dot(ia.crossVectors(Ui,ia));if(l<0)return null;const c=o*this.direction.dot(wo.cross(Ui));if(c<0||l+c>a)return null;const u=-o*Ui.dot(Ro);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Or extends ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kc=new Me,rs=new rc,sa=new ja,$c=new D,ra=new D,aa=new D,oa=new D,Co=new D,la=new D,Jc=new D,ca=new D;class Pe extends We{constructor(t=new Be,e=new Or){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Co.fromBufferAttribute(d,t),a?la.addScaledVector(Co,u):la.addScaledVector(Co.sub(e),u))}e.add(la)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(sa.containsPoint(rs.origin)===!1&&(rs.intersectSphere(sa,$c)===null||rs.origin.distanceToSquared($c)>(t.far-t.near)**2))&&(Kc.copy(r).invert(),rs.copy(t.ray).applyMatrix4(Kc),!(i.boundingBox!==null&&rs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const f=h[_],m=a[f.materialIndex],M=Math.max(f.start,p.start),A=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let T=M,C=A;T<C;T+=3){const E=o.getX(T),R=o.getX(T+1),x=o.getX(T+2);s=ha(this,m,t,i,c,u,d,E,R,x),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let f=_,m=S;f<m;f+=3){const M=o.getX(f),A=o.getX(f+1),T=o.getX(f+2);s=ha(this,a,t,i,c,u,d,M,A,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const f=h[_],m=a[f.materialIndex],M=Math.max(f.start,p.start),A=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let T=M,C=A;T<C;T+=3){const E=T,R=T+1,x=T+2;s=ha(this,m,t,i,c,u,d,E,R,x),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let f=_,m=S;f<m;f+=3){const M=f,A=f+1,T=f+2;s=ha(this,a,t,i,c,u,d,M,A,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function df(n,t,e,i,s,r,a,o){let l;if(t.side===gn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Vi,o),l===null)return null;ca.copy(o),ca.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ca);return c<e.near||c>e.far?null:{distance:c,point:ca.clone(),object:n}}function ha(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,ra),n.getVertexPosition(l,aa),n.getVertexPosition(c,oa);const u=df(n,t,e,i,ra,aa,oa,Jc);if(u){const d=new D;Un.getBarycoord(Jc,ra,aa,oa,d),s&&(u.uv=Un.getInterpolatedAttribute(s,o,l,c,d,new Ct)),r&&(u.uv1=Un.getInterpolatedAttribute(r,o,l,c,d,new Ct)),a&&(u.normal=Un.getInterpolatedAttribute(a,o,l,c,d,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new D,materialIndex:0};Un.getNormal(ra,aa,oa,h.normal),u.face=h,u.barycoord=d}return u}class ff extends Qe{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Je,u=Je,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Po=new D,pf=new D,mf=new Ht;class yi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Po.subVectors(i,e).cross(pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Po),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||mf.getNormalMatrix(t),s=this.coplanarPoint(Po).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new ja,gf=new Ct(.5,.5),ua=new D;class ac{constructor(t=new yi,e=new yi,i=new yi,s=new yi,r=new yi,a=new yi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ii,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],_=r[8],S=r[9],f=r[10],m=r[11],M=r[12],A=r[13],T=r[14],C=r[15];if(s[0].setComponents(c-a,p-u,m-_,C-M).normalize(),s[1].setComponents(c+a,p+u,m+_,C+M).normalize(),s[2].setComponents(c+o,p+d,m+S,C+A).normalize(),s[3].setComponents(c-o,p-d,m-S,C-A).normalize(),i)s[4].setComponents(l,h,f,T).normalize(),s[5].setComponents(c-l,p-h,m-f,C-T).normalize();else if(s[4].setComponents(c-l,p-h,m-f,C-T).normalize(),e===ii)s[5].setComponents(c+l,p+h,m+f,C+T).normalize();else if(e===Ur)s[5].setComponents(l,h,f,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);const e=gf.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ua.x=s.normal.x>0?t.max.x:t.min.x,ua.y=s.normal.y>0?t.max.y:t.min.y,ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _f extends ms{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qc=new Me,Fl=new rc,da=new ja,fa=new D;class Pa extends We{constructor(t=new Be,e=new _f){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;Qc.copy(s).invert(),Fl.copy(t.ray).applyMatrix4(Qc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=h,S=p;_<S;_++){const f=c.getX(_);fa.fromBufferAttribute(d,f),th(fa,f,l,s,t,e,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=h,S=p;_<S;_++)fa.fromBufferAttribute(d,_),th(fa,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function th(n,t,e,i,s,r,a){const o=Fl.distanceSqToPoint(n);if(o<e){const l=new D;Fl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class _u extends Qe{constructor(t=[],e=ds,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Za extends Qe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends Qe{constructor(t,e,i=ri,s,r,a,o=Je,l=Je,c,u=Ai,d=1){if(u!==Ai&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ic(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class xf extends Js{constructor(t,e=ri,i=ds,s,r,a=Je,o=Je,l,c=Ai){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class xu extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gs extends Be{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(d,2));function _(S,f,m,M,A,T,C,E,R,x,b){const P=T/R,w=C/x,I=T/2,V=C/2,W=E/2,U=R+1,G=x+1;let z=0,tt=0;const it=new D;for(let ct=0;ct<G;ct++){const Tt=ct*w-V;for(let X=0;X<U;X++){const J=X*P-I;it[S]=J*M,it[f]=Tt*A,it[m]=W,c.push(it.x,it.y,it.z),it[S]=0,it[f]=0,it[m]=E>0?1:-1,u.push(it.x,it.y,it.z),d.push(X/R),d.push(1-ct/x),z+=1}}for(let ct=0;ct<x;ct++)for(let Tt=0;Tt<R;Tt++){const X=h+Tt+U*ct,J=h+Tt+U*(ct+1),St=h+(Tt+1)+U*(ct+1),wt=h+(Tt+1)+U*ct;l.push(X,J,wt),l.push(J,St,wt),tt+=6}o.addGroup(p,tt,b),p+=tt,h+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class oc extends Be{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new D,u=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const p=i+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qs extends Be{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let _=0;const S=[],f=i/2;let m=0;M(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(p,2));function M(){const T=new D,C=new D;let E=0;const R=(e-t)/i;for(let x=0;x<=r;x++){const b=[],P=x/r,w=P*(e-t)+t;for(let I=0;I<=s;I++){const V=I/s,W=V*l+o,U=Math.sin(W),G=Math.cos(W);C.x=w*U,C.y=-P*i+f,C.z=w*G,d.push(C.x,C.y,C.z),T.set(U,R,G).normalize(),h.push(T.x,T.y,T.z),p.push(V,1-P),b.push(_++)}S.push(b)}for(let x=0;x<s;x++)for(let b=0;b<r;b++){const P=S[b][x],w=S[b+1][x],I=S[b+1][x+1],V=S[b][x+1];(t>0||b!==0)&&(u.push(P,w,V),E+=3),(e>0||b!==r-1)&&(u.push(w,I,V),E+=3)}c.addGroup(m,E,0),m+=E}function A(T){const C=_,E=new Ct,R=new D;let x=0;const b=T===!0?t:e,P=T===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,f*P,0),h.push(0,P,0),p.push(.5,.5),_++;const w=_;for(let I=0;I<=s;I++){const W=I/s*l+o,U=Math.cos(W),G=Math.sin(W);R.x=b*G,R.y=f*P,R.z=b*U,d.push(R.x,R.y,R.z),h.push(0,P,0),E.x=U*.5+.5,E.y=G*.5*P+.5,p.push(E.x,E.y),_++}for(let I=0;I<s;I++){const V=C+I,W=w+I;T===!0?u.push(W,W+1,V):u.push(W+1,W,V),x+=3}c.addGroup(m,x,T===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gr extends Be{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,p=[],_=[],S=[],f=[];for(let m=0;m<u;m++){const M=m*h-a;for(let A=0;A<c;A++){const T=A*d-r;_.push(T,-M,0),S.push(0,0,1),f.push(A/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const A=M+c*m,T=M+c*(m+1),C=M+1+c*(m+1),E=M+1+c*m;p.push(A,T,E),p.push(T,C,E)}this.setIndex(p),this.setAttribute("position",new Se(_,3)),this.setAttribute("normal",new Se(S,3)),this.setAttribute("uv",new Se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.width,t.height,t.widthSegments,t.heightSegments)}}class lc extends Be{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=t;const h=(e-t)/s,p=new D,_=new Ct;for(let S=0;S<=s;S++){for(let f=0;f<=i;f++){const m=r+f/i*a;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,u.push(_.x,_.y)}d+=h}for(let S=0;S<s;S++){const f=S*(i+1);for(let m=0;m<i;m++){const M=m+f,A=M,T=M+i+1,C=M+i+2,E=M+1;o.push(A,T,E),o.push(T,C,E)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Hr extends Be{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new D,h=new D,p=[],_=[],S=[],f=[];for(let m=0;m<=i;m++){const M=[],A=m/i;let T=0;m===0&&a===0?T=.5/e:m===i&&l===Math.PI&&(T=-.5/e);for(let C=0;C<=e;C++){const E=C/e;d.x=-t*Math.cos(s+E*r)*Math.sin(a+A*o),d.y=t*Math.cos(a+A*o),d.z=t*Math.sin(s+E*r)*Math.sin(a+A*o),_.push(d.x,d.y,d.z),h.copy(d).normalize(),S.push(h.x,h.y,h.z),f.push(E+T,1-A),M.push(c++)}u.push(M)}for(let m=0;m<i;m++)for(let M=0;M<e;M++){const A=u[m][M+1],T=u[m][M],C=u[m+1][M],E=u[m+1][M+1];(m!==0||a>0)&&p.push(A,T,E),(m!==i-1||l<Math.PI)&&p.push(T,C,E)}this.setIndex(p),this.setAttribute("position",new Se(_,3)),this.setAttribute("normal",new Se(S,3)),this.setAttribute("uv",new Se(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function tr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(eh(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(eh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function fn(n){const t={};for(let e=0;e<n.length;e++){const i=tr(n[e]);for(const s in i)t[s]=i[s]}return t}function eh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function vf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Mu={clone:tr,merge:fn};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class yf extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ws extends ms{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ll,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=ql,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bf extends ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ef extends ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Do={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(nh(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!nh(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function nh(n){try{const t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Tf{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Af=new Tf;class cc{constructor(t){this.manager=t!==void 0?t:Af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}cc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bs=new WeakMap;class wf extends cc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Do.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Bs.get(a);d===void 0&&(d=[],Bs.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=Nr("img");function l(){u(),e&&e(this);const d=Bs.get(this)||[];for(let h=0;h<d.length;h++){const p=d[h];p.onLoad&&p.onLoad(this)}Bs.delete(this),r.manager.itemEnd(t)}function c(d){u(),s&&s(d),Do.remove(`image:${t}`);const h=Bs.get(this)||[];for(let p=0;p<h.length;p++){const _=h[p];_.onError&&_.onError(d)}Bs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Do.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Su extends cc{constructor(t){super(t)}load(t,e,i,s){const r=new Qe,a=new wf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class hc extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Rf extends hc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Lo=new Me,ih=new D,sh=new D;class yu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(ih),sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sh),e.updateMatrixWorld(),Lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ur||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pa=new D,ma=new wi,$n=new D;class bu extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pa,ma,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(pa,ma,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new D,rh=new Ct,ah=new Ct;class wn extends bu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,rh,ah),e.subVectors(ah,rh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Cf extends yu{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0}}class Pf extends hc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Cf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class uc extends bu{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Df extends yu{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oh extends hc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Df}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const zs=-90,ks=1;class Eu extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(zs,ks,t,e);s.layers=this.layers,this.add(s);const r=new wn(zs,ks,t,e);r.layers=this.layers,this.add(r);const a=new wn(zs,ks,t,e);a.layers=this.layers,this.add(a);const o=new wn(zs,ks,t,e);o.layers=this.layers,this.add(o);const l=new wn(zs,ks,t,e);l.layers=this.layers,this.add(l);const c=new wn(zs,ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Lf extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class If{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Uf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Uf(){this._document.hidden===!1&&this.reset()}class lh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ec=class Ec{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ec.prototype.isMatrix2=!0;let ch=Ec;class Tu extends ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ft("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function hh(n,t,e,i){const s=Nf(i);switch(e){case au:return n*t;case lu:return n*t/s.components*s.byteLength;case $l:return n*t/s.components*s.byteLength;case fs:return n*t*2/s.components*s.byteLength;case Jl:return n*t*2/s.components*s.byteLength;case ou:return n*t*3/s.components*s.byteLength;case Yn:return n*t*4/s.components*s.byteLength;case Ql:return n*t*4/s.components*s.byteLength;case Aa:case wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ra:case Ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case il:case rl:return Math.max(n,16)*Math.max(t,8)/4;case nl:case sl:return Math.max(n,8)*Math.max(t,8)/2;case al:case ol:case cl:case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ll:case Fa:case ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Al:case wl:case Rl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Cl:case Pl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Oa:case Dl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nf(n){switch(n){case Cn:case nu:return{byteLength:1,components:1};case Lr:case iu:case ai:return{byteLength:2,components:1};case Zl:case Kl:return{byteLength:2,components:4};case ri:case jl:case ni:return{byteLength:4,components:1};case su:case ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Au(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ff(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){const _=d[h],S=d[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){const S=d[p];n.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Of=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
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
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf=`#ifdef USE_BATCHING
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
#endif`,Yf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
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
#endif`,$f=`#ifdef USE_BUMPMAP
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ap=`#define PI 3.141592653589793
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
} // validated`,op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lp=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ep=`#ifdef USE_GRADIENTMAP
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
}`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,Np=`uniform sampler2D dfgLUT;
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
}`,Fp=`
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ym=`float getShadowMask() {
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
}`,bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Wm=`#if DEPTH_PACKING == 3200
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
}`,Xm=`#define DISTANCE
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
}`,Ym=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
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
}`,Km=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Qm=`#define LAMBERT
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
}`,t0=`#define LAMBERT
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
}`,e0=`#define MATCAP
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
}`,n0=`#define MATCAP
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
}`,i0=`#define NORMAL
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
}`,s0=`#define NORMAL
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
}`,r0=`#define PHONG
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
}`,a0=`#define PHONG
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
}`,o0=`#define STANDARD
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
}`,l0=`#define STANDARD
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
}`,c0=`#define TOON
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
}`,h0=`#define TOON
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
}`,u0=`uniform float size;
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,p0=`uniform vec3 color;
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
}`,m0=`uniform float rotation;
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
}`,g0=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Of,alphahash_pars_fragment:Bf,alphamap_fragment:zf,alphamap_pars_fragment:kf,alphatest_fragment:Gf,alphatest_pars_fragment:Hf,aomap_fragment:Vf,aomap_pars_fragment:Wf,batching_pars_vertex:Xf,batching_vertex:Yf,begin_vertex:qf,beginnormal_vertex:jf,bsdfs:Zf,iridescence_fragment:Kf,bumpmap_pars_fragment:$f,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:tp,clipping_planes_vertex:ep,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:rp,common:ap,cube_uv_reflection_fragment:op,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:hp,emissivemap_fragment:up,emissivemap_pars_fragment:dp,colorspace_fragment:fp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:_p,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Cp,envmap_vertex:vp,fog_vertex:Mp,fog_pars_vertex:Sp,fog_fragment:yp,fog_pars_fragment:bp,gradientmap_pars_fragment:Ep,lightmap_pars_fragment:Tp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:wp,lights_pars_begin:Rp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Lp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Up,lights_physical_pars_fragment:Np,lights_fragment_begin:Fp,lights_fragment_maps:Op,lights_fragment_end:Bp,lightprobes_pars_fragment:zp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:Vp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:Yp,map_particle_pars_fragment:qp,metalnessmap_fragment:jp,metalnessmap_pars_fragment:Zp,morphinstance_vertex:Kp,morphcolor_vertex:$p,morphnormal_vertex:Jp,morphtarget_pars_vertex:Qp,morphtarget_vertex:tm,normal_fragment_begin:em,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:sm,normal_vertex:rm,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:um,packing:dm,premultiplied_alpha_fragment:fm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:Mm,shadowmap_vertex:Sm,shadowmask_pars_fragment:ym,skinbase_vertex:bm,skinning_pars_vertex:Em,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:wm,specularmap_pars_fragment:Rm,tonemapping_fragment:Cm,tonemapping_pars_fragment:Pm,transmission_fragment:Dm,transmission_pars_fragment:Lm,uv_pars_fragment:Im,uv_pars_vertex:Um,uv_vertex:Nm,worldpos_vertex:Fm,background_vert:Om,background_frag:Bm,backgroundCube_vert:zm,backgroundCube_frag:km,cube_vert:Gm,cube_frag:Hm,depth_vert:Vm,depth_frag:Wm,distance_vert:Xm,distance_frag:Ym,equirect_vert:qm,equirect_frag:jm,linedashed_vert:Zm,linedashed_frag:Km,meshbasic_vert:$m,meshbasic_frag:Jm,meshlambert_vert:Qm,meshlambert_frag:t0,meshmatcap_vert:e0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:s0,meshphong_vert:r0,meshphong_frag:a0,meshphysical_vert:o0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:h0,points_vert:u0,points_frag:d0,shadow_vert:f0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},xt={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},ti={basic:{uniforms:fn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:fn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:fn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:fn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:fn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new _t(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:fn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:fn([xt.points,xt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:fn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:fn([xt.common,xt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:fn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:fn([xt.sprite,xt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:fn([xt.common,xt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:fn([xt.lights,xt.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};ti.physical={uniforms:fn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const ga={r:0,b:0,g:0},_0=new Me,wu=new Ht;wu.set(-1,0,0,0,1,0,0,0,1);function x0(n,t,e,i,s,r){const a=new _t(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const T=M.backgroundBlurriness>0;A=t.get(A,T)}return A}function _(M){let A=!1;const T=p(M);T===null?f(a,o):T&&T.isColor&&(f(T,1),A=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(M,A){const T=p(A);T&&(T.isCubeTexture||T.mapping===qa)?(c===void 0&&(c=new Pe(new gs(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:tr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(A.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wu),c.material.toneMapped=te.getTransfer(T.colorSpace)!==fe,(u!==T||d!==T.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Pe(new Gr(2,2),new on({name:"BackgroundMaterial",uniforms:tr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=te.getTransfer(T.colorSpace)!==fe,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,A){M.getRGB(ga,vu(n)),e.buffers.color.setClear(ga.r,ga.g,ga.b,A,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,f(a,o)},render:_,addToRenderList:S,dispose:m}}function v0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(w,I,V,W,U){let G=!1;const z=d(w,W,V,I);r!==z&&(r=z,c(r.object)),G=p(w,W,V,U),G&&_(w,W,V,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,T(w,I,V,W),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,I,V,W){const U=W.wireframe===!0;let G=i[I.id];G===void 0&&(G={},i[I.id]=G);const z=w.isInstancedMesh===!0?w.id:0;let tt=G[z];tt===void 0&&(tt={},G[z]=tt);let it=tt[V.id];it===void 0&&(it={},tt[V.id]=it);let ct=it[U];return ct===void 0&&(ct=h(l()),it[U]=ct),ct}function h(w){const I=[],V=[],W=[];for(let U=0;U<e;U++)I[U]=0,V[U]=0,W[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:W,object:w,attributes:{},index:null}}function p(w,I,V,W){const U=r.attributes,G=I.attributes;let z=0;const tt=V.getAttributes();for(const it in tt)if(tt[it].location>=0){const Tt=U[it];let X=G[it];if(X===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(X=w.instanceColor)),Tt===void 0||Tt.attribute!==X||X&&Tt.data!==X.data)return!0;z++}return r.attributesNum!==z||r.index!==W}function _(w,I,V,W){const U={},G=I.attributes;let z=0;const tt=V.getAttributes();for(const it in tt)if(tt[it].location>=0){let Tt=G[it];Tt===void 0&&(it==="instanceMatrix"&&w.instanceMatrix&&(Tt=w.instanceMatrix),it==="instanceColor"&&w.instanceColor&&(Tt=w.instanceColor));const X={};X.attribute=Tt,Tt&&Tt.data&&(X.data=Tt.data),U[it]=X,z++}r.attributes=U,r.attributesNum=z,r.index=W}function S(){const w=r.newAttributes;for(let I=0,V=w.length;I<V;I++)w[I]=0}function f(w){m(w,0)}function m(w,I){const V=r.newAttributes,W=r.enabledAttributes,U=r.attributeDivisors;V[w]=1,W[w]===0&&(n.enableVertexAttribArray(w),W[w]=1),U[w]!==I&&(n.vertexAttribDivisor(w,I),U[w]=I)}function M(){const w=r.newAttributes,I=r.enabledAttributes;for(let V=0,W=I.length;V<W;V++)I[V]!==w[V]&&(n.disableVertexAttribArray(V),I[V]=0)}function A(w,I,V,W,U,G,z){z===!0?n.vertexAttribIPointer(w,I,V,U,G):n.vertexAttribPointer(w,I,V,W,U,G)}function T(w,I,V,W){S();const U=W.attributes,G=V.getAttributes(),z=I.defaultAttributeValues;for(const tt in G){const it=G[tt];if(it.location>=0){let ct=U[tt];if(ct===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(ct=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(ct=w.instanceColor)),ct!==void 0){const Tt=ct.normalized,X=ct.itemSize,J=t.get(ct);if(J===void 0)continue;const St=J.buffer,wt=J.type,j=J.bytesPerElement,pt=wt===n.INT||wt===n.UNSIGNED_INT||ct.gpuType===jl;if(ct.isInterleavedBufferAttribute){const ht=ct.data,Ut=ht.stride,Ot=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let Dt=0;Dt<it.locationSize;Dt++)m(it.location+Dt,ht.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Dt=0;Dt<it.locationSize;Dt++)f(it.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,St);for(let Dt=0;Dt<it.locationSize;Dt++)A(it.location+Dt,X/it.locationSize,wt,Tt,Ut*j,(Ot+X/it.locationSize*Dt)*j,pt)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<it.locationSize;ht++)m(it.location+ht,ct.meshPerAttribute);w.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<it.locationSize;ht++)f(it.location+ht);n.bindBuffer(n.ARRAY_BUFFER,St);for(let ht=0;ht<it.locationSize;ht++)A(it.location+ht,X/it.locationSize,wt,Tt,X*j,X/it.locationSize*ht*j,pt)}}else if(z!==void 0){const Tt=z[tt];if(Tt!==void 0)switch(Tt.length){case 2:n.vertexAttrib2fv(it.location,Tt);break;case 3:n.vertexAttrib3fv(it.location,Tt);break;case 4:n.vertexAttrib4fv(it.location,Tt);break;default:n.vertexAttrib1fv(it.location,Tt)}}}}M()}function C(){b();for(const w in i){const I=i[w];for(const V in I){const W=I[V];for(const U in W){const G=W[U];for(const z in G)u(G[z].object),delete G[z];delete W[U]}}delete i[w]}}function E(w){if(i[w.id]===void 0)return;const I=i[w.id];for(const V in I){const W=I[V];for(const U in W){const G=W[U];for(const z in G)u(G[z].object),delete G[z];delete W[U]}}delete i[w.id]}function R(w){for(const I in i){const V=i[I];for(const W in V){const U=V[W];if(U[w.id]===void 0)continue;const G=U[w.id];for(const z in G)u(G[z].object),delete G[z];delete U[w.id]}}}function x(w){for(const I in i){const V=i[I],W=w.isInstancedMesh===!0?w.id:0,U=V[W];if(U!==void 0){for(const G in U){const z=U[G];for(const tt in z)u(z[tt].object),delete z[tt];delete U[G]}delete V[W],Object.keys(V).length===0&&delete i[I]}}}function b(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:f,disableUnusedAttributes:M}}function M0(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function S0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Yn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ni&&!x)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Ft("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:T,maxSamples:C,samples:E}}function y0(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new yi,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,S=d.clipIntersection,f=d.clipShadows,m=n.get(d);if(!s||_===null||_.length===0||r&&!f)r?u(null):c();else{const M=r?0:i,A=M*4;let T=m.clippingState||null;l.value=T,T=u(_,h,A,p);for(let C=0;C!==A;++C)T[C]=e[C];m.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,p,_){const S=d!==null?d.length:0;let f=null;if(S!==0){if(f=l.value,_!==!0||f===null){const m=p+S*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<m)&&(f=new Float32Array(m));for(let A=0,T=p;A!==S;++A,T+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(f,T),f[T+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,f}}const Hi=4,uh=[.125,.215,.35,.446,.526,.582],ls=20,b0=256,br=new uc,dh=new _t;let Io=null,Uo=0,No=0,Fo=!1;const E0=new D;class fh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=E0}=r;Io=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Io,Uo,No),this._renderer.xr.enabled=Fo,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Io=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:ai,format:Yn,colorSpace:Ba,depthBuffer:!1},s=ph(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=T0(r)),this._blurMaterial=w0(r,t,e),this._ggxMaterial=A0(r,t,e)}return s}_compileMaterial(t){const e=new Pe(new Be,t);this._renderer.compile(e,br)}_sceneToCubeUV(t,e,i,s,r){const l=new wn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(dh),d.toneMapping=si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new gs,new Or({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,f=S.material;let m=!1;const M=t.background;M?M.isColor&&(f.color.copy(M),t.background=null,m=!0):(f.color.copy(dh),m=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):T===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const C=this._cubeSize;Gs(s,T*C,A>2?C:0,C,C),d.setRenderTarget(s),m&&d.render(S,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ds||t.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Gs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,br)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:_}=this,S=this._sizeLods[i],f=3*S*(i>_-Hi?i-_+Hi:0),m=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-e,Gs(r,f,m,3*S,2*S),s.setRenderTarget(r),s.render(o,br),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Gs(t,f,m,3*S,2*S),s.setRenderTarget(t),s.render(o,br)}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ee("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ls-1),S=r/_,f=isFinite(r)?1+Math.floor(u*S):ls;f>ls&&Ft(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${ls}`);const m=[];let M=0;for(let R=0;R<ls;++R){const x=R/S,b=Math.exp(-x*x/2);m.push(b),R===0?M+=b:R<f&&(M+=2*b)}for(let R=0;R<m.length;R++)m[R]=m[R]/M;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-i;const T=this._sizeLods[s],C=3*T*(s>A-Hi?s-A+Hi:0),E=4*(this._cubeSize-T);Gs(e,C,E,3*T,2*T),l.setRenderTarget(e),l.render(d,br)}}function T0(n){const t=[],e=[],i=[];let s=n;const r=n-Hi+1+uh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Hi?l=uh[a-n+Hi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,S=3,f=2,m=1,M=new Float32Array(S*_*p),A=new Float32Array(f*_*p),T=new Float32Array(m*_*p);for(let E=0;E<p;E++){const R=E%3*2/3-1,x=E>2?0:-1,b=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];M.set(b,S*_*E),A.set(h,f*_*E);const P=[E,E,E,E,E,E];T.set(P,m*_*E)}const C=new Be;C.setAttribute("position",new Te(M,S)),C.setAttribute("uv",new Te(A,f)),C.setAttribute("faceIndex",new Te(T,m)),i.push(new Pe(C,null)),s>Hi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function ph(n,t,e){const i=new qn(n,t,e);return i.texture.mapping=qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function A0(n,t,e){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function w0(n,t,e){const i=new Float32Array(ls),s=new D(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function mh(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function gh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Ka(){return`

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
	`}class dc extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new _u(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gs(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:bi});r.uniforms.tEquirect.value=e;const a=new Pe(s,r),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=$e),new Eu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function R0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===so||p===ro)if(t.has(h)){const _=t.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const S=new dc(_.height);return S.fromEquirectangularTexture(n,h),t.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,_=p===so||p===ro,S=p===ds||p===$s;if(_||S){let f=e.get(h);const m=f!==void 0?f.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new fh(n)),f=_?i.fromEquirectangular(h,f):i.fromCubemap(h,f),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),f.texture;if(f!==void 0)return f.texture;{const M=h.image;return _&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new fh(n)),f=_?i.fromEquirectangular(h):i.fromCubemap(h),f.texture.pmremVersion=h.pmremVersion,e.set(h,f),h.addEventListener("dispose",u),f.texture):null}}}return h}function o(h,p){return p===so?h.mapping=ds:p===ro&&(h.mapping=$s),h}function l(h){let p=0;const _=6;for(let S=0;S<_;S++)h[S]!==void 0&&p++;return p===_}function c(h){const p=h.target;p.removeEventListener("dispose",c);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function C0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ul("WebGLRenderer: "+i+" extension not supported."),s}}}function P0(n,t,e,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(t.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)t.update(h[p],n.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,_=d.attributes.position;let S=0;if(_===void 0)return;if(p!==null){const M=p.array;S=p.version;for(let A=0,T=M.length;A<T;A+=3){const C=M[A+0],E=M[A+1],R=M[A+2];h.push(C,E,E,R,R,C)}}else{const M=_.array;S=_.version;for(let A=0,T=M.length/3-1;A<T;A+=3){const C=A+0,E=A+1,R=A+2;h.push(C,E,E,R,R,C)}}const f=new(_.count>=65535?pu:fu)(h,1);f.version=S;const m=r.get(d);m&&t.remove(m),r.set(d,f)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function D0(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),e.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,d*a,p),e.update(h,i,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let S=0;for(let f=0;f<p;f++)S+=h[f];e.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function L0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function I0(n,t,e){const i=new WeakMap,s=new Ae;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),S===!0&&(T=2),f===!0&&(T=3);let C=o.attributes.position.count*T,E=1;C>t.maxTextureSize&&(E=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*E*4*d),x=new hu(R,C,E,d);x.type=ni,x.needsUpdate=!0;const b=T*4;for(let w=0;w<d;w++){const I=m[w],V=M[w],W=A[w],U=C*E*4*w;for(let G=0;G<I.count;G++){const z=G*b;_===!0&&(s.fromBufferAttribute(I,G),R[U+z+0]=s.x,R[U+z+1]=s.y,R[U+z+2]=s.z,R[U+z+3]=0),S===!0&&(s.fromBufferAttribute(V,G),R[U+z+4]=s.x,R[U+z+5]=s.y,R[U+z+6]=s.z,R[U+z+7]=0),f===!0&&(s.fromBufferAttribute(W,G),R[U+z+8]=s.x,R[U+z+9]=s.y,R[U+z+10]=s.z,R[U+z+11]=W.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new Ct(C,E)},i.set(o,h),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let f=0;f<c.length;f++)_+=c[f];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function U0(n,t,e,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const N0={[jh]:"LINEAR_TONE_MAPPING",[Zh]:"REINHARD_TONE_MAPPING",[Kh]:"CINEON_TONE_MAPPING",[$h]:"ACES_FILMIC_TONE_MAPPING",[Qh]:"AGX_TONE_MAPPING",[tu]:"NEUTRAL_TONE_MAPPING",[Jh]:"CUSTOM_TONE_MAPPING"};function F0(n,t,e,i,s){const r=new qn(t,e,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Js(t,e):void 0}),a=new qn(t,e,{type:ai,depthBuffer:!1,stencilBuffer:!1}),o=new Be;o.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Se([0,2,0,0,2,0],2));const l=new yf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Pe(o,l),u=new uc(-1,1,1,-1,0,1);let d=null,h=null,p=!1,_,S=null,f=[],m=!1;this.setSize=function(M,A){r.setSize(M,A),a.setSize(M,A);for(let T=0;T<f.length;T++){const C=f[T];C.setSize&&C.setSize(M,A)}},this.setEffects=function(M){f=M,m=f.length>0&&f[0].isRenderPass===!0;const A=r.width,T=r.height;for(let C=0;C<f.length;C++){const E=f[C];E.setSize&&E.setSize(A,T)}},this.begin=function(M,A){if(p||M.toneMapping===si&&f.length===0)return!1;if(S=A,A!==null){const T=A.width,C=A.height;(r.width!==T||r.height!==C)&&this.setSize(T,C)}return m===!1&&M.setRenderTarget(r),_=M.toneMapping,M.toneMapping=si,!0},this.hasRenderPass=function(){return m},this.end=function(M,A){M.toneMapping=_,p=!0;let T=r,C=a;for(let E=0;E<f.length;E++){const R=f[E];if(R.enabled!==!1&&(R.render(M,C,T,A),R.needsSwap!==!1)){const x=T;T=C,C=x}}if(d!==M.outputColorSpace||h!==M.toneMapping){d=M.outputColorSpace,h=M.toneMapping,l.defines={},te.getTransfer(d)===fe&&(l.defines.SRGB_TRANSFER="");const E=N0[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(S),M.render(c,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ru=new Qe,Ol=new Js(1,1),Cu=new hu,Pu=new $d,Du=new _u,_h=[],xh=[],vh=new Float32Array(16),Mh=new Float32Array(9),Sh=new Float32Array(4);function nr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=_h[s];if(r===void 0&&(r=new Float32Array(s),_h[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function $a(n,t){let e=xh[t];e===void 0&&(e=new Int32Array(t),xh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function O0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function B0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2fv(this.addr,t),Ye(e,t)}}function z0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;n.uniform3fv(this.addr,t),Ye(e,t)}}function k0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4fv(this.addr,t),Ye(e,t)}}function G0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,i))return;Sh.set(i),n.uniformMatrix2fv(this.addr,!1,Sh),Ye(e,i)}}function H0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,i))return;Mh.set(i),n.uniformMatrix3fv(this.addr,!1,Mh),Ye(e,i)}}function V0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,i))return;vh.set(i),n.uniformMatrix4fv(this.addr,!1,vh),Ye(e,i)}}function W0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function X0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2iv(this.addr,t),Ye(e,t)}}function Y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3iv(this.addr,t),Ye(e,t)}}function q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4iv(this.addr,t),Ye(e,t)}}function j0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Z0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2uiv(this.addr,t),Ye(e,t)}}function K0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3uiv(this.addr,t),Ye(e,t)}}function $0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4uiv(this.addr,t),Ye(e,t)}}function J0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ol.compareFunction=e.isReversedDepthBuffer()?ec:tc,r=Ol):r=Ru,e.setTexture2D(t||r,s)}function Q0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Pu,s)}function tg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Du,s)}function eg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Cu,s)}function ng(n){switch(n){case 5126:return O0;case 35664:return B0;case 35665:return z0;case 35666:return k0;case 35674:return G0;case 35675:return H0;case 35676:return V0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return Y0;case 35669:case 35673:return q0;case 5125:return j0;case 36294:return Z0;case 36295:return K0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return eg}}function ig(n,t){n.uniform1fv(this.addr,t)}function sg(n,t){const e=nr(t,this.size,2);n.uniform2fv(this.addr,e)}function rg(n,t){const e=nr(t,this.size,3);n.uniform3fv(this.addr,e)}function ag(n,t){const e=nr(t,this.size,4);n.uniform4fv(this.addr,e)}function og(n,t){const e=nr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function lg(n,t){const e=nr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function cg(n,t){const e=nr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function hg(n,t){n.uniform1iv(this.addr,t)}function ug(n,t){n.uniform2iv(this.addr,t)}function dg(n,t){n.uniform3iv(this.addr,t)}function fg(n,t){n.uniform4iv(this.addr,t)}function pg(n,t){n.uniform1uiv(this.addr,t)}function mg(n,t){n.uniform2uiv(this.addr,t)}function gg(n,t){n.uniform3uiv(this.addr,t)}function _g(n,t){n.uniform4uiv(this.addr,t)}function xg(n,t,e){const i=this.cache,s=t.length,r=$a(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ol:a=Ru;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function vg(n,t,e){const i=this.cache,s=t.length,r=$a(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Pu,r[a])}function Mg(n,t,e){const i=this.cache,s=t.length,r=$a(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Du,r[a])}function Sg(n,t,e){const i=this.cache,s=t.length,r=$a(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Cu,r[a])}function yg(n){switch(n){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return ag;case 35674:return og;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Sg}}class bg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ng(e.type)}}class Eg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yg(e.type)}}class Tg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function yh(n,t){n.seq.push(t),n.map[t.id]=t}function Ag(n,t,e){const i=n.name,s=i.length;for(Oo.lastIndex=0;;){const r=Oo.exec(i),a=Oo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yh(e,c===void 0?new bg(o,n,t):new Eg(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Tg(o),yh(e,d)),e=d}}}class Da{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ag(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function bh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const wg=37297;let Rg=0;function Cg(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Eh=new Ht;function Pg(n){te._getMatrix(Eh,te.workingColorSpace,n);const t=`mat3( ${Eh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case za:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Th(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Cg(n.getShaderSource(t),o)}else return r}function Dg(n,t){const e=Pg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Lg={[jh]:"Linear",[Zh]:"Reinhard",[Kh]:"Cineon",[$h]:"ACESFilmic",[Qh]:"AgX",[tu]:"Neutral",[Jh]:"Custom"};function Ig(n,t){const e=Lg[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _a=new D;function Ug(){te.getLuminanceCoefficients(_a);const n=_a.x.toFixed(4),t=_a.y.toFixed(4),e=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function Fg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Og(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function wr(n){return n!==""}function Ah(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(n){return n.replace(Bg,kg)}const zg=new Map;function kg(n,t){let e=Yt[t];if(e===void 0){const i=zg.get(t);if(i!==void 0)e=Yt[i],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Bl(e)}const Gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(n){return n.replace(Gg,Hg)}function Hg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ch(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Vg={[Ta]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function Wg(n){return Vg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xg={[ds]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[qa]:"ENVMAP_TYPE_CUBE_UV"};function Yg(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Xg[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const qg={[$s]:"ENVMAP_MODE_REFRACTION"};function jg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":qg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zg={[ql]:"ENVMAP_BLENDING_MULTIPLY",[md]:"ENVMAP_BLENDING_MIX",[gd]:"ENVMAP_BLENDING_ADD"};function Kg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Zg[n.combine]||"ENVMAP_BLENDING_NONE"}function $g(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Jg(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Wg(e),c=Yg(e),u=jg(e),d=Kg(e),h=$g(e),p=Ng(e),_=Fg(r),S=s.createProgram();let f,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wr).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wr).join(`
`),m.length>0&&(m+=`
`)):(f=[Ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),m=[Ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Yt.tonemapping_pars_fragment:"",e.toneMapping!==si?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Dg("linearToOutputTexel",e.outputColorSpace),Ug(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wr).join(`
`)),a=Bl(a),a=Ah(a,e),a=wh(a,e),o=Bl(o),o=Ah(o,e),o=wh(o,e),a=Rh(a),o=Rh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=M+f+a,T=M+m+o,C=bh(s,s.VERTEX_SHADER,A),E=bh(s,s.FRAGMENT_SHADER,T);s.attachShader(S,C),s.attachShader(S,E),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(w){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(S)||"",V=s.getShaderInfoLog(C)||"",W=s.getShaderInfoLog(E)||"",U=I.trim(),G=V.trim(),z=W.trim();let tt=!0,it=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,C,E);else{const ct=Th(s,C,"vertex"),Tt=Th(s,E,"fragment");ee("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+U+`
`+ct+`
`+Tt)}else U!==""?Ft("WebGLProgram: Program Info Log:",U):(G===""||z==="")&&(it=!1);it&&(w.diagnostics={runnable:tt,programLog:U,vertexShader:{log:G,prefix:f},fragmentShader:{log:z,prefix:m}})}s.deleteShader(C),s.deleteShader(E),x=new Da(s,S),b=Og(s,S)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,wg)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rg++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=E,this}let Qg=0;class t_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new e_(t),e.set(t,i)),i}}class e_{constructor(t){this.id=Qg++,this.code=t,this.usedTimes=0}}function n_(n){return n===fs||n===Fa||n===Oa}function i_(n,t,e,i,s,r){const a=new uu,o=new t_,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,b,P,w,I,V){const W=w.fog,U=I.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,tt=t.get(x.envMap||G,z),it=tt&&tt.mapping===qa?tt.image.height:null,ct=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ft("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const Tt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,X=Tt!==void 0?Tt.length:0;let J=0;U.morphAttributes.position!==void 0&&(J=1),U.morphAttributes.normal!==void 0&&(J=2),U.morphAttributes.color!==void 0&&(J=3);let St,wt,j,pt;if(ct){const Nt=ti[ct];St=Nt.vertexShader,wt=Nt.fragmentShader}else St=x.vertexShader,wt=x.fragmentShader,o.update(x),j=o.getVertexShaderID(x),pt=o.getFragmentShaderID(x);const ht=n.getRenderTarget(),Ut=n.state.buffers.depth.getReversed(),Ot=I.isInstancedMesh===!0,Dt=I.isBatchedMesh===!0,xe=!!x.map,qt=!!x.matcap,ce=!!tt,_e=!!x.aoMap,jt=!!x.lightMap,Le=!!x.bumpMap,ve=!!x.normalMap,Fe=!!x.displacementMap,N=!!x.emissiveMap,Ue=!!x.metalnessMap,Wt=!!x.roughnessMap,ue=x.anisotropy>0,mt=x.clearcoat>0,we=x.dispersion>0,y=x.iridescence>0,g=x.sheen>0,O=x.transmission>0,Z=ue&&!!x.anisotropyMap,et=mt&&!!x.clearcoatMap,at=mt&&!!x.clearcoatNormalMap,lt=mt&&!!x.clearcoatRoughnessMap,Y=y&&!!x.iridescenceMap,K=y&&!!x.iridescenceThicknessMap,gt=g&&!!x.sheenColorMap,bt=g&&!!x.sheenRoughnessMap,ut=!!x.specularMap,ot=!!x.specularColorMap,It=!!x.specularIntensityMap,kt=O&&!!x.transmissionMap,Jt=O&&!!x.thicknessMap,L=!!x.gradientMap,rt=!!x.alphaMap,q=x.alphaTest>0,Mt=!!x.alphaHash,st=!!x.extensions;let Q=si;x.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Q=n.toneMapping);const At={shaderID:ct,shaderType:x.type,shaderName:x.name,vertexShader:St,fragmentShader:wt,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:pt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Dt,batchingColor:Dt&&I._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&I.instanceColor!==null,instancingMorph:Ot&&I.morphTexture!==null,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:xe,matcap:qt,envMap:ce,envMapMode:ce&&tt.mapping,envMapCubeUVHeight:it,aoMap:_e,lightMap:jt,bumpMap:Le,normalMap:ve,displacementMap:Fe,emissiveMap:N,normalMapObjectSpace:ve&&x.normalMapType===vd,normalMapTangentSpace:ve&&x.normalMapType===Ll,packedNormalMap:ve&&x.normalMapType===Ll&&n_(x.normalMap.format),metalnessMap:Ue,roughnessMap:Wt,anisotropy:ue,anisotropyMap:Z,clearcoat:mt,clearcoatMap:et,clearcoatNormalMap:at,clearcoatRoughnessMap:lt,dispersion:we,iridescence:y,iridescenceMap:Y,iridescenceThicknessMap:K,sheen:g,sheenColorMap:gt,sheenRoughnessMap:bt,specularMap:ut,specularColorMap:ot,specularIntensityMap:It,transmission:O,transmissionMap:kt,thicknessMap:Jt,gradientMap:L,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:rt,alphaTest:q,alphaHash:Mt,combine:x.combine,mapUv:xe&&_(x.map.channel),aoMapUv:_e&&_(x.aoMap.channel),lightMapUv:jt&&_(x.lightMap.channel),bumpMapUv:Le&&_(x.bumpMap.channel),normalMapUv:ve&&_(x.normalMap.channel),displacementMapUv:Fe&&_(x.displacementMap.channel),emissiveMapUv:N&&_(x.emissiveMap.channel),metalnessMapUv:Ue&&_(x.metalnessMap.channel),roughnessMapUv:Wt&&_(x.roughnessMap.channel),anisotropyMapUv:Z&&_(x.anisotropyMap.channel),clearcoatMapUv:et&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(x.sheenRoughnessMap.channel),specularMapUv:ut&&_(x.specularMap.channel),specularColorMapUv:ot&&_(x.specularColorMap.channel),specularIntensityMapUv:It&&_(x.specularIntensityMap.channel),transmissionMapUv:kt&&_(x.transmissionMap.channel),thicknessMapUv:Jt&&_(x.thicknessMap.channel),alphaMapUv:rt&&_(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ve||ue),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!U.attributes.uv&&(xe||rt),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ut,skinning:I.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Q,decodeVideoTexture:xe&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===fe,decodeVideoTextureEmissive:N&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===fe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mn,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function f(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(b,x),M(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function A(x){const b=p[x.type];let P;if(b){const w=ti[b];P=Mu.clone(w.uniforms)}else P=x.uniforms;return P}function T(x,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new Jg(n,b,x,s),c.push(P),u.set(b,P)),P}function C(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:f,getUniforms:A,acquireProgram:T,releaseProgram:C,releaseShaderCache:E,programs:c,dispose:R}}function s_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function r_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ph(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Dh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,_,S,f,m){let M=n[t];return M===void 0?(M={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:f,group:m},n[t]=M):(M.id=h.id,M.object=h,M.geometry=p,M.material=_,M.materialVariant=a(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=f,M.group=m),t++,M}function l(h,p,_,S,f,m){const M=o(h,p,_,S,f,m);_.transmission>0?i.push(M):_.transparent===!0?s.push(M):e.push(M)}function c(h,p,_,S,f,m){const M=o(h,p,_,S,f,m);_.transmission>0?i.unshift(M):_.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,p){e.length>1&&e.sort(h||r_),i.length>1&&i.sort(p||Ph),s.length>1&&s.sort(p||Ph)}function d(){for(let h=t,p=n.length;h<p;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function a_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Dh,n.set(i,[a])):s>=r.length?(a=new Dh,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function o_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new _t};break;case"SpotLight":e={position:new D,direction:new D,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function l_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let c_=0;function h_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function u_(n){const t=new o_,e=l_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new Me,a=new Me;function o(c){let u=0,d=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,S=0,f=0,m=0,M=0,A=0,T=0,C=0,E=0,R=0;c.sort(h_);for(let b=0,P=c.length;b<P;b++){const w=c[b],I=w.color,V=w.intensity,W=w.distance;let U=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===fs?U=w.shadow.map.texture:U=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=I.r*V,d+=I.g*V,h+=I.b*V;else if(w.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(w.sh.coefficients[G],V);R++}else if(w.isDirectionalLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const z=w.shadow,tt=e.get(w);tt.shadowIntensity=z.intensity,tt.shadowBias=z.bias,tt.shadowNormalBias=z.normalBias,tt.shadowRadius=z.radius,tt.shadowMapSize=z.mapSize,i.directionalShadow[p]=tt,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=w.shadow.matrix,M++}i.directional[p]=G,p++}else if(w.isSpotLight){const G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(I).multiplyScalar(V),G.distance=W,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,i.spot[S]=G;const z=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,z.updateMatrices(w),w.castShadow&&E++),i.spotLightMatrix[S]=z.matrix,w.castShadow){const tt=e.get(w);tt.shadowIntensity=z.intensity,tt.shadowBias=z.bias,tt.shadowNormalBias=z.normalBias,tt.shadowRadius=z.radius,tt.shadowMapSize=z.mapSize,i.spotShadow[S]=tt,i.spotShadowMap[S]=U,T++}S++}else if(w.isRectAreaLight){const G=t.get(w);G.color.copy(I).multiplyScalar(V),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),i.rectArea[f]=G,f++}else if(w.isPointLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const z=w.shadow,tt=e.get(w);tt.shadowIntensity=z.intensity,tt.shadowBias=z.bias,tt.shadowNormalBias=z.normalBias,tt.shadowRadius=z.radius,tt.shadowMapSize=z.mapSize,tt.shadowCameraNear=z.camera.near,tt.shadowCameraFar=z.camera.far,i.pointShadow[_]=tt,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=w.shadow.matrix,A++}i.point[_]=G,_++}else if(w.isHemisphereLight){const G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(V),G.groundColor.copy(w.groundColor).multiplyScalar(V),i.hemi[m]=G,m++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==S||x.rectAreaLength!==f||x.hemiLength!==m||x.numDirectionalShadows!==M||x.numPointShadows!==A||x.numSpotShadows!==T||x.numSpotMaps!==C||x.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=f,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=T+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=R,x.directionalLength=p,x.pointLength=_,x.spotLength=S,x.rectAreaLength=f,x.hemiLength=m,x.numDirectionalShadows=M,x.numPointShadows=A,x.numSpotShadows=T,x.numSpotMaps=C,x.numLightProbes=R,i.version=c_++)}function l(c,u){let d=0,h=0,p=0,_=0,S=0;const f=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const A=c[m];if(A.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),d++}else if(A.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),p++}else if(A.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(f),a.identity(),r.copy(A.matrixWorld),r.premultiply(f),a.extractRotation(r),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(A.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(f),h++}else if(A.isHemisphereLight){const T=i.hemi[S];T.direction.setFromMatrixPosition(A.matrixWorld),T.direction.transformDirection(f),S++}}}return{setup:o,setupView:l,state:i}}function Lh(n){const t=new u_(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function d_(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Lh(n),t.set(s,[o])):r>=a.length?(o=new Lh(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
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
}`,m_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],g_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Ih=new Me,Er=new D,Bo=new D;function __(n,t,e){let i=new ac;const s=new Ct,r=new Ct,a=new Ae,o=new bf,l=new Ef,c={},u=e.maxTextureSize,d={[Vi]:gn,[gn]:Vi,[mn]:mn},h=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:f_,fragmentShader:p_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Be;_.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Pe(_,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ta;let m=this.type;this.render=function(E,R,x){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;this.type===Ku&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ta);const b=n.getRenderTarget(),P=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),I=n.state;I.setBlending(bi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const V=m!==this.type;V&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(U=>U.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,U=E.length;W<U;W++){const G=E[W],z=G.shadow;if(z===void 0){Ft("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const tt=z.getFrameExtents();s.multiply(tt),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/tt.x),s.x=r.x*tt.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/tt.y),s.y=r.y*tt.y,z.mapSize.y=r.y));const it=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=it,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ar){if(G.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new qn(s.x,s.y,{format:fs,type:ai,minFilter:$e,magFilter:$e,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new Js(s.x,s.y,ni),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=Ai,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Je,z.map.depthTexture.magFilter=Je}else G.isPointLight?(z.map=new dc(s.x),z.map.depthTexture=new xf(s.x,ri)):(z.map=new qn(s.x,s.y),z.map.depthTexture=new Js(s.x,s.y,ri)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=Ai,this.type===Ta?(z.map.depthTexture.compareFunction=it?ec:tc,z.map.depthTexture.minFilter=$e,z.map.depthTexture.magFilter=$e):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Je,z.map.depthTexture.magFilter=Je);z.camera.updateProjectionMatrix()}const ct=z.map.isWebGLCubeRenderTarget?6:1;for(let Tt=0;Tt<ct;Tt++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,Tt),n.clear();else{Tt===0&&(n.setRenderTarget(z.map),n.clear());const X=z.getViewport(Tt);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),I.viewport(a)}if(G.isPointLight){const X=z.camera,J=z.matrix,St=G.distance||X.far;St!==X.far&&(X.far=St,X.updateProjectionMatrix()),Er.setFromMatrixPosition(G.matrixWorld),X.position.copy(Er),Bo.copy(X.position),Bo.add(m_[Tt]),X.up.copy(g_[Tt]),X.lookAt(Bo),X.updateMatrixWorld(),J.makeTranslation(-Er.x,-Er.y,-Er.z),Ih.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ih,X.coordinateSystem,X.reversedDepth)}else z.updateMatrices(G);i=z.getFrustum(),T(R,x,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Ar&&M(z,x),z.needsUpdate=!1}m=this.type,f.needsUpdate=!1,n.setRenderTarget(b,P,w)};function M(E,R){const x=t.update(S);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qn(s.x,s.y,{format:fs,type:ai})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,x,h,S,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,x,p,S,null)}function A(E,R,x,b){let P=null;const w=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)P=w;else if(P=x.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=P.uuid,V=R.uuid;let W=c[I];W===void 0&&(W={},c[I]=W);let U=W[V];U===void 0&&(U=P.clone(),W[V]=U,R.addEventListener("dispose",C)),P=U}if(P.visible=R.visible,P.wireframe=R.wireframe,b===Ar?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const I=n.properties.get(P);I.light=x}return P}function T(E,R,x,b,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Ar)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const V=t.update(E),W=E.material;if(Array.isArray(W)){const U=V.groups;for(let G=0,z=U.length;G<z;G++){const tt=U[G],it=W[tt.materialIndex];if(it&&it.visible){const ct=A(E,it,b,P);E.onBeforeShadow(n,E,R,x,V,ct,tt),n.renderBufferDirect(x,null,V,ct,E,tt),E.onAfterShadow(n,E,R,x,V,ct,tt)}}}else if(W.visible){const U=A(E,W,b,P);E.onBeforeShadow(n,E,R,x,V,U,null),n.renderBufferDirect(x,null,V,U,E,null),E.onAfterShadow(n,E,R,x,V,U,null)}}const I=E.children;for(let V=0,W=I.length;V<W;V++)T(I[V],R,x,b,P)}function C(E){E.target.removeEventListener("dispose",C);for(const x in c){const b=c[x],P=E.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function x_(n,t){function e(){let L=!1;const rt=new Ae;let q=null;const Mt=new Ae(0,0,0,0);return{setMask:function(st){q!==st&&!L&&(n.colorMask(st,st,st,st),q=st)},setLocked:function(st){L=st},setClear:function(st,Q,At,Nt,Re){Re===!0&&(st*=Nt,Q*=Nt,At*=Nt),rt.set(st,Q,At,Nt),Mt.equals(rt)===!1&&(n.clearColor(st,Q,At,Nt),Mt.copy(rt))},reset:function(){L=!1,q=null,Mt.set(-1,0,0,0)}}}function i(){let L=!1,rt=!1,q=null,Mt=null,st=null;return{setReversed:function(Q){if(rt!==Q){const At=t.get("EXT_clip_control");Q?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),rt=Q;const Nt=st;st=null,this.setClear(Nt)}},getReversed:function(){return rt},setTest:function(Q){Q?ht(n.DEPTH_TEST):Ut(n.DEPTH_TEST)},setMask:function(Q){q!==Q&&!L&&(n.depthMask(Q),q=Q)},setFunc:function(Q){if(rt&&(Q=Cd[Q]),Mt!==Q){switch(Q){case qo:n.depthFunc(n.NEVER);break;case jo:n.depthFunc(n.ALWAYS);break;case Zo:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case Ko:n.depthFunc(n.EQUAL);break;case $o:n.depthFunc(n.GEQUAL);break;case Jo:n.depthFunc(n.GREATER);break;case Qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=Q}},setLocked:function(Q){L=Q},setClear:function(Q){st!==Q&&(st=Q,rt&&(Q=1-Q),n.clearDepth(Q))},reset:function(){L=!1,q=null,Mt=null,st=null,rt=!1}}}function s(){let L=!1,rt=null,q=null,Mt=null,st=null,Q=null,At=null,Nt=null,Re=null;return{setTest:function(ae){L||(ae?ht(n.STENCIL_TEST):Ut(n.STENCIL_TEST))},setMask:function(ae){rt!==ae&&!L&&(n.stencilMask(ae),rt=ae)},setFunc:function(ae,_n,yn){(q!==ae||Mt!==_n||st!==yn)&&(n.stencilFunc(ae,_n,yn),q=ae,Mt=_n,st=yn)},setOp:function(ae,_n,yn){(Q!==ae||At!==_n||Nt!==yn)&&(n.stencilOp(ae,_n,yn),Q=ae,At=_n,Nt=yn)},setLocked:function(ae){L=ae},setClear:function(ae){Re!==ae&&(n.clearStencil(ae),Re=ae)},reset:function(){L=!1,rt=null,q=null,Mt=null,st=null,Q=null,At=null,Nt=null,Re=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},p=new WeakMap,_=[],S=null,f=!1,m=null,M=null,A=null,T=null,C=null,E=null,R=null,x=new _t(0,0,0),b=0,P=!1,w=null,I=null,V=null,W=null,U=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,tt=0;const it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(it)[1]),z=tt>=1):it.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),z=tt>=2);let ct=null,Tt={};const X=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),St=new Ae().fromArray(X),wt=new Ae().fromArray(J);function j(L,rt,q,Mt){const st=new Uint8Array(4),Q=n.createTexture();n.bindTexture(L,Q),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let At=0;At<q;At++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(rt,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,st):n.texImage2D(rt+At,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,st);return Q}const pt={};pt[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),pt[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pt[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(n.DEPTH_TEST),a.setFunc(Ks),Le(!1),ve(Pc),ht(n.CULL_FACE),_e(bi);function ht(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Ut(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ot(L,rt){return h[L]!==rt?(n.bindFramebuffer(L,rt),h[L]=rt,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=rt),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=rt),!0):!1}function Dt(L,rt){let q=_,Mt=!1;if(L){q=p.get(rt),q===void 0&&(q=[],p.set(rt,q));const st=L.textures;if(q.length!==st.length||q[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,At=st.length;Q<At;Q++)q[Q]=n.COLOR_ATTACHMENT0+Q;q.length=st.length,Mt=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(q)}function xe(L){return S!==L?(n.useProgram(L),S=L,!0):!1}const qt={[os]:n.FUNC_ADD,[Ju]:n.FUNC_SUBTRACT,[Qu]:n.FUNC_REVERSE_SUBTRACT};qt[td]=n.MIN,qt[ed]=n.MAX;const ce={[nd]:n.ZERO,[id]:n.ONE,[sd]:n.SRC_COLOR,[Xo]:n.SRC_ALPHA,[hd]:n.SRC_ALPHA_SATURATE,[ld]:n.DST_COLOR,[ad]:n.DST_ALPHA,[rd]:n.ONE_MINUS_SRC_COLOR,[Yo]:n.ONE_MINUS_SRC_ALPHA,[cd]:n.ONE_MINUS_DST_COLOR,[od]:n.ONE_MINUS_DST_ALPHA,[ud]:n.CONSTANT_COLOR,[dd]:n.ONE_MINUS_CONSTANT_COLOR,[fd]:n.CONSTANT_ALPHA,[pd]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(L,rt,q,Mt,st,Q,At,Nt,Re,ae){if(L===bi){f===!0&&(Ut(n.BLEND),f=!1);return}if(f===!1&&(ht(n.BLEND),f=!0),L!==$u){if(L!==m||ae!==P){if((M!==os||C!==os)&&(n.blendEquation(n.FUNC_ADD),M=os,C=os),ae)switch(L){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Na:n.blendFunc(n.ONE,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ee("WebGLState: Invalid blending: ",L);break}else switch(L){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Na:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Dc:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",L);break}A=null,T=null,E=null,R=null,x.set(0,0,0),b=0,m=L,P=ae}return}st=st||rt,Q=Q||q,At=At||Mt,(rt!==M||st!==C)&&(n.blendEquationSeparate(qt[rt],qt[st]),M=rt,C=st),(q!==A||Mt!==T||Q!==E||At!==R)&&(n.blendFuncSeparate(ce[q],ce[Mt],ce[Q],ce[At]),A=q,T=Mt,E=Q,R=At),(Nt.equals(x)===!1||Re!==b)&&(n.blendColor(Nt.r,Nt.g,Nt.b,Re),x.copy(Nt),b=Re),m=L,P=!1}function jt(L,rt){L.side===mn?Ut(n.CULL_FACE):ht(n.CULL_FACE);let q=L.side===gn;rt&&(q=!q),Le(q),L.blending===Ys&&L.transparent===!1?_e(bi):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const Mt=L.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),N(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):Ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(L){w!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),w=L)}function ve(L){L!==ju?(ht(n.CULL_FACE),L!==I&&(L===Pc?n.cullFace(n.BACK):L===Zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ut(n.CULL_FACE),I=L}function Fe(L){L!==V&&(z&&n.lineWidth(L),V=L)}function N(L,rt,q){L?(ht(n.POLYGON_OFFSET_FILL),(W!==rt||U!==q)&&(W=rt,U=q,a.getReversed()&&(rt=-rt),n.polygonOffset(rt,q))):Ut(n.POLYGON_OFFSET_FILL)}function Ue(L){L?ht(n.SCISSOR_TEST):Ut(n.SCISSOR_TEST)}function Wt(L){L===void 0&&(L=n.TEXTURE0+G-1),ct!==L&&(n.activeTexture(L),ct=L)}function ue(L,rt,q){q===void 0&&(ct===null?q=n.TEXTURE0+G-1:q=ct);let Mt=Tt[q];Mt===void 0&&(Mt={type:void 0,texture:void 0},Tt[q]=Mt),(Mt.type!==L||Mt.texture!==rt)&&(ct!==q&&(n.activeTexture(q),ct=q),n.bindTexture(L,rt||pt[L]),Mt.type=L,Mt.texture=rt)}function mt(){const L=Tt[ct];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function we(){try{n.compressedTexImage2D(...arguments)}catch(L){ee("WebGLState:",L)}}function y(){try{n.compressedTexImage3D(...arguments)}catch(L){ee("WebGLState:",L)}}function g(){try{n.texSubImage2D(...arguments)}catch(L){ee("WebGLState:",L)}}function O(){try{n.texSubImage3D(...arguments)}catch(L){ee("WebGLState:",L)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(L){ee("WebGLState:",L)}}function et(){try{n.compressedTexSubImage3D(...arguments)}catch(L){ee("WebGLState:",L)}}function at(){try{n.texStorage2D(...arguments)}catch(L){ee("WebGLState:",L)}}function lt(){try{n.texStorage3D(...arguments)}catch(L){ee("WebGLState:",L)}}function Y(){try{n.texImage2D(...arguments)}catch(L){ee("WebGLState:",L)}}function K(){try{n.texImage3D(...arguments)}catch(L){ee("WebGLState:",L)}}function gt(L){return d[L]!==void 0?d[L]:n.getParameter(L)}function bt(L,rt){d[L]!==rt&&(n.pixelStorei(L,rt),d[L]=rt)}function ut(L){St.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),St.copy(L))}function ot(L){wt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),wt.copy(L))}function It(L,rt){let q=c.get(rt);q===void 0&&(q=new WeakMap,c.set(rt,q));let Mt=q.get(L);Mt===void 0&&(Mt=n.getUniformBlockIndex(rt,L.name),q.set(L,Mt))}function kt(L,rt){const Mt=c.get(rt).get(L);l.get(rt)!==Mt&&(n.uniformBlockBinding(rt,Mt,L.__bindingPointIndex),l.set(rt,Mt))}function Jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ct=null,Tt={},h={},p=new WeakMap,_=[],S=null,f=!1,m=null,M=null,A=null,T=null,C=null,E=null,R=null,x=new _t(0,0,0),b=0,P=!1,w=null,I=null,V=null,W=null,U=null,St.set(0,0,n.canvas.width,n.canvas.height),wt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:Ut,bindFramebuffer:Ot,drawBuffers:Dt,useProgram:xe,setBlending:_e,setMaterial:jt,setFlipSided:Le,setCullFace:ve,setLineWidth:Fe,setPolygonOffset:N,setScissorTest:Ue,activeTexture:Wt,bindTexture:ue,unbindTexture:mt,compressedTexImage2D:we,compressedTexImage3D:y,texImage2D:Y,texImage3D:K,pixelStorei:bt,getParameter:gt,updateUBOMapping:It,uniformBlockBinding:kt,texStorage2D:at,texStorage3D:lt,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:Z,compressedTexSubImage3D:et,scissor:ut,viewport:ot,reset:Jt}}function v_(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,g){return _?new OffscreenCanvas(y,g):Nr("canvas")}function f(y,g,O){let Z=1;const et=we(y);if((et.width>O||et.height>O)&&(Z=O/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const at=Math.floor(Z*et.width),lt=Math.floor(Z*et.height);h===void 0&&(h=S(at,lt));const Y=g?S(at,lt):h;return Y.width=at,Y.height=lt,Y.getContext("2d").drawImage(y,0,0,at,lt),Ft("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+at+"x"+lt+")."),Y}else return"data"in y&&Ft("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),y;return y}function m(y){return y.generateMipmaps}function M(y){n.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(y,g,O,Z,et,at=!1){if(y!==null){if(n[y]!==void 0)return n[y];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let lt;Z&&(lt=t.get("EXT_texture_norm16"),lt||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=g;if(g===n.RED&&(O===n.FLOAT&&(Y=n.R32F),O===n.HALF_FLOAT&&(Y=n.R16F),O===n.UNSIGNED_BYTE&&(Y=n.R8),O===n.UNSIGNED_SHORT&&lt&&(Y=lt.R16_EXT),O===n.SHORT&&lt&&(Y=lt.R16_SNORM_EXT)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.R8UI),O===n.UNSIGNED_SHORT&&(Y=n.R16UI),O===n.UNSIGNED_INT&&(Y=n.R32UI),O===n.BYTE&&(Y=n.R8I),O===n.SHORT&&(Y=n.R16I),O===n.INT&&(Y=n.R32I)),g===n.RG&&(O===n.FLOAT&&(Y=n.RG32F),O===n.HALF_FLOAT&&(Y=n.RG16F),O===n.UNSIGNED_BYTE&&(Y=n.RG8),O===n.UNSIGNED_SHORT&&lt&&(Y=lt.RG16_EXT),O===n.SHORT&&lt&&(Y=lt.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RG8UI),O===n.UNSIGNED_SHORT&&(Y=n.RG16UI),O===n.UNSIGNED_INT&&(Y=n.RG32UI),O===n.BYTE&&(Y=n.RG8I),O===n.SHORT&&(Y=n.RG16I),O===n.INT&&(Y=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),O===n.UNSIGNED_INT&&(Y=n.RGB32UI),O===n.BYTE&&(Y=n.RGB8I),O===n.SHORT&&(Y=n.RGB16I),O===n.INT&&(Y=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),O===n.UNSIGNED_INT&&(Y=n.RGBA32UI),O===n.BYTE&&(Y=n.RGBA8I),O===n.SHORT&&(Y=n.RGBA16I),O===n.INT&&(Y=n.RGBA32I)),g===n.RGB&&(O===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGB16_EXT),O===n.SHORT&&lt&&(Y=lt.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),g===n.RGBA){const K=at?za:te.getTransfer(et);O===n.FLOAT&&(Y=n.RGBA32F),O===n.HALF_FLOAT&&(Y=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Y=K===fe?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&lt&&(Y=lt.RGBA16_EXT),O===n.SHORT&&lt&&(Y=lt.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function C(y,g){let O;return y?g===null||g===ri||g===Ir?O=n.DEPTH24_STENCIL8:g===ni?O=n.DEPTH32F_STENCIL8:g===Lr&&(O=n.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ri||g===Ir?O=n.DEPTH_COMPONENT24:g===ni?O=n.DEPTH_COMPONENT32F:g===Lr&&(O=n.DEPTH_COMPONENT16),O}function E(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Je&&y.minFilter!==$e?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function R(y){const g=y.target;g.removeEventListener("dispose",R),b(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&d.delete(g)}function x(y){const g=y.target;g.removeEventListener("dispose",x),w(g)}function b(y){const g=i.get(y);if(g.__webglInit===void 0)return;const O=y.source,Z=p.get(O);if(Z){const et=Z[g.__cacheKey];et.usedTimes--,et.usedTimes===0&&P(y),Object.keys(Z).length===0&&p.delete(O)}i.remove(y)}function P(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const O=y.source,Z=p.get(O);delete Z[g.__cacheKey],a.memory.textures--}function w(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let et=0;et<g.__webglFramebuffer[Z].length;et++)n.deleteFramebuffer(g.__webglFramebuffer[Z][et]);else n.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[Z]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=y.textures;for(let Z=0,et=O.length;Z<et;Z++){const at=i.get(O[Z]);at.__webglTexture&&(n.deleteTexture(at.__webglTexture),a.memory.textures--),i.remove(O[Z])}i.remove(y)}let I=0;function V(){I=0}function W(){return I}function U(y){I=y}function G(){const y=I;return y>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),I+=1,y}function z(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function tt(y,g){const O=i.get(y);if(y.isVideoTexture&&ue(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&O.__version!==y.version){const Z=y.image;if(Z===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(O,y,g);return}}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function it(y,g){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){Ut(O,y,g);return}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function ct(y,g){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){Ut(O,y,g);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function Tt(y,g){const O=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&O.__version!==y.version){Ot(O,y,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const X={[tl]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},J={[Je]:n.NEAREST,[_d]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[$e]:n.LINEAR,[ao]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},St={[Md]:n.NEVER,[Td]:n.ALWAYS,[Sd]:n.LESS,[tc]:n.LEQUAL,[yd]:n.EQUAL,[ec]:n.GEQUAL,[bd]:n.GREATER,[Ed]:n.NOTEQUAL};function wt(y,g){if(g.type===ni&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===$e||g.magFilter===ao||g.magFilter===Xr||g.magFilter===ki||g.minFilter===$e||g.minFilter===ao||g.minFilter===Xr||g.minFilter===ki)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,X[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,X[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,X[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,J[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,J[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,St[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Je||g.minFilter!==Xr&&g.minFilter!==ki||g.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function j(y,g){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",R));const Z=g.source;let et=p.get(Z);et===void 0&&(et={},p.set(Z,et));const at=z(g);if(at!==y.__cacheKey){et[at]===void 0&&(et[at]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),et[at].usedTimes++;const lt=et[y.__cacheKey];lt!==void 0&&(et[y.__cacheKey].usedTimes--,lt.usedTimes===0&&P(g)),y.__cacheKey=at,y.__webglTexture=et[at].texture}return O}function pt(y,g,O){return Math.floor(Math.floor(y/O)/g)}function ht(y,g,O,Z){const at=y.updateRanges;if(at.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,O,Z,g.data);else{at.sort((bt,ut)=>bt.start-ut.start);let lt=0;for(let bt=1;bt<at.length;bt++){const ut=at[lt],ot=at[bt],It=ut.start+ut.count,kt=pt(ot.start,g.width,4),Jt=pt(ut.start,g.width,4);ot.start<=It+1&&kt===Jt&&pt(ot.start+ot.count-1,g.width,4)===kt?ut.count=Math.max(ut.count,ot.start+ot.count-ut.start):(++lt,at[lt]=ot)}at.length=lt+1;const Y=e.getParameter(n.UNPACK_ROW_LENGTH),K=e.getParameter(n.UNPACK_SKIP_PIXELS),gt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let bt=0,ut=at.length;bt<ut;bt++){const ot=at[bt],It=Math.floor(ot.start/4),kt=Math.ceil(ot.count/4),Jt=It%g.width,L=Math.floor(It/g.width),rt=kt,q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(n.UNPACK_SKIP_ROWS,L),e.texSubImage2D(n.TEXTURE_2D,0,Jt,L,rt,q,O,Z,g.data)}y.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Y),e.pixelStorei(n.UNPACK_SKIP_PIXELS,K),e.pixelStorei(n.UNPACK_SKIP_ROWS,gt)}}function Ut(y,g,O){let Z=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=n.TEXTURE_3D);const et=j(y,g),at=g.source;e.bindTexture(Z,y.__webglTexture,n.TEXTURE0+O);const lt=i.get(at);if(at.version!==lt.__version||et===!0){if(e.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const q=te.getPrimaries(te.workingColorSpace),Mt=g.colorSpace===Oi?null:te.getPrimaries(g.colorSpace),st=g.colorSpace===Oi||q===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let K=f(g.image,!1,s.maxTextureSize);K=mt(g,K);const gt=r.convert(g.format,g.colorSpace),bt=r.convert(g.type);let ut=T(g.internalFormat,gt,bt,g.normalized,g.colorSpace,g.isVideoTexture);wt(Z,g);let ot;const It=g.mipmaps,kt=g.isVideoTexture!==!0,Jt=lt.__version===void 0||et===!0,L=at.dataReady,rt=E(g,K);if(g.isDepthTexture)ut=C(g.format===cs,g.type),Jt&&(kt?e.texStorage2D(n.TEXTURE_2D,1,ut,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,ut,K.width,K.height,0,gt,bt,null));else if(g.isDataTexture)if(It.length>0){kt&&Jt&&e.texStorage2D(n.TEXTURE_2D,rt,ut,It[0].width,It[0].height);for(let q=0,Mt=It.length;q<Mt;q++)ot=It[q],kt?L&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,ot.width,ot.height,gt,bt,ot.data):e.texImage2D(n.TEXTURE_2D,q,ut,ot.width,ot.height,0,gt,bt,ot.data);g.generateMipmaps=!1}else kt?(Jt&&e.texStorage2D(n.TEXTURE_2D,rt,ut,K.width,K.height),L&&ht(g,K,gt,bt)):e.texImage2D(n.TEXTURE_2D,0,ut,K.width,K.height,0,gt,bt,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){kt&&Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,ut,It[0].width,It[0].height,K.depth);for(let q=0,Mt=It.length;q<Mt;q++)if(ot=It[q],g.format!==Yn)if(gt!==null)if(kt){if(L)if(g.layerUpdates.size>0){const st=hh(ot.width,ot.height,g.format,g.type);for(const Q of g.layerUpdates){const At=ot.data.subarray(Q*st/ot.data.BYTES_PER_ELEMENT,(Q+1)*st/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,Q,ot.width,ot.height,1,gt,At)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ot.width,ot.height,K.depth,gt,ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,ut,ot.width,ot.height,K.depth,0,ot.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,ot.width,ot.height,K.depth,gt,bt,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,ut,ot.width,ot.height,K.depth,0,gt,bt,ot.data)}else{kt&&Jt&&e.texStorage2D(n.TEXTURE_2D,rt,ut,It[0].width,It[0].height);for(let q=0,Mt=It.length;q<Mt;q++)ot=It[q],g.format!==Yn?gt!==null?kt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,ot.width,ot.height,gt,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,q,ut,ot.width,ot.height,0,ot.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?L&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,ot.width,ot.height,gt,bt,ot.data):e.texImage2D(n.TEXTURE_2D,q,ut,ot.width,ot.height,0,gt,bt,ot.data)}else if(g.isDataArrayTexture)if(kt){if(Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,rt,ut,K.width,K.height,K.depth),L)if(g.layerUpdates.size>0){const q=hh(K.width,K.height,g.format,g.type);for(const Mt of g.layerUpdates){const st=K.data.subarray(Mt*q/K.data.BYTES_PER_ELEMENT,(Mt+1)*q/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Mt,K.width,K.height,1,gt,bt,st)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,gt,bt,K.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ut,K.width,K.height,K.depth,0,gt,bt,K.data);else if(g.isData3DTexture)kt?(Jt&&e.texStorage3D(n.TEXTURE_3D,rt,ut,K.width,K.height,K.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,gt,bt,K.data)):e.texImage3D(n.TEXTURE_3D,0,ut,K.width,K.height,K.depth,0,gt,bt,K.data);else if(g.isFramebufferTexture){if(Jt)if(kt)e.texStorage2D(n.TEXTURE_2D,rt,ut,K.width,K.height);else{let q=K.width,Mt=K.height;for(let st=0;st<rt;st++)e.texImage2D(n.TEXTURE_2D,st,ut,q,Mt,0,gt,bt,null),q>>=1,Mt>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const q=n.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),K.parentNode!==q){q.appendChild(K),d.add(g),q.onpaint=Nt=>{const Re=Nt.changedElements;for(const ae of d)Re.includes(ae.image)&&(ae.needsUpdate=!0)},q.requestPaint();return}const Mt=0,st=n.RGBA,Q=n.RGBA,At=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Mt,st,Q,At,K),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(It.length>0){if(kt&&Jt){const q=we(It[0]);e.texStorage2D(n.TEXTURE_2D,rt,ut,q.width,q.height)}for(let q=0,Mt=It.length;q<Mt;q++)ot=It[q],kt?L&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,gt,bt,ot):e.texImage2D(n.TEXTURE_2D,q,ut,gt,bt,ot);g.generateMipmaps=!1}else if(kt){if(Jt){const q=we(K);e.texStorage2D(n.TEXTURE_2D,rt,ut,q.width,q.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,bt,K)}else e.texImage2D(n.TEXTURE_2D,0,ut,gt,bt,K);m(g)&&M(Z),lt.__version=at.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ot(y,g,O){if(g.image.length!==6)return;const Z=j(y,g),et=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+O);const at=i.get(et);if(et.version!==at.__version||Z===!0){e.activeTexture(n.TEXTURE0+O);const lt=te.getPrimaries(te.workingColorSpace),Y=g.colorSpace===Oi?null:te.getPrimaries(g.colorSpace),K=g.colorSpace===Oi||lt===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const gt=g.isCompressedTexture||g.image[0].isCompressedTexture,bt=g.image[0]&&g.image[0].isDataTexture,ut=[];for(let Q=0;Q<6;Q++)!gt&&!bt?ut[Q]=f(g.image[Q],!0,s.maxCubemapSize):ut[Q]=bt?g.image[Q].image:g.image[Q],ut[Q]=mt(g,ut[Q]);const ot=ut[0],It=r.convert(g.format,g.colorSpace),kt=r.convert(g.type),Jt=T(g.internalFormat,It,kt,g.normalized,g.colorSpace),L=g.isVideoTexture!==!0,rt=at.__version===void 0||Z===!0,q=et.dataReady;let Mt=E(g,ot);wt(n.TEXTURE_CUBE_MAP,g);let st;if(gt){L&&rt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Jt,ot.width,ot.height);for(let Q=0;Q<6;Q++){st=ut[Q].mipmaps;for(let At=0;At<st.length;At++){const Nt=st[At];g.format!==Yn?It!==null?L?q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,0,0,Nt.width,Nt.height,It,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,Jt,Nt.width,Nt.height,0,Nt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,0,0,Nt.width,Nt.height,It,kt,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,Jt,Nt.width,Nt.height,0,It,kt,Nt.data)}}}else{if(st=g.mipmaps,L&&rt){st.length>0&&Mt++;const Q=we(ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(bt){L?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ut[Q].width,ut[Q].height,It,kt,ut[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,ut[Q].width,ut[Q].height,0,It,kt,ut[Q].data);for(let At=0;At<st.length;At++){const Re=st[At].image[Q].image;L?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,0,0,Re.width,Re.height,It,kt,Re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,Jt,Re.width,Re.height,0,It,kt,Re.data)}}else{L?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,It,kt,ut[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,It,kt,ut[Q]);for(let At=0;At<st.length;At++){const Nt=st[At];L?q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,0,0,It,kt,Nt.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,Jt,It,kt,Nt.image[Q])}}}m(g)&&M(n.TEXTURE_CUBE_MAP),at.__version=et.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Dt(y,g,O,Z,et,at){const lt=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),K=T(O.internalFormat,lt,Y,O.normalized,O.colorSpace),gt=i.get(g),bt=i.get(O);if(bt.__renderTarget=g,!gt.__hasExternalTextures){const ut=Math.max(1,g.width>>at),ot=Math.max(1,g.height>>at);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,at,K,ut,ot,g.depth,0,lt,Y,null):e.texImage2D(et,at,K,ut,ot,0,lt,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),Wt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,et,bt.__webglTexture,0,Ue(g)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,et,bt.__webglTexture,at),e.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(y,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const Z=g.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,at=C(g.stencilBuffer,et),lt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Wt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue(g),at,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue(g),at,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,at,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,y)}else{const Z=g.textures;for(let et=0;et<Z.length;et++){const at=Z[et],lt=r.convert(at.format,at.colorSpace),Y=r.convert(at.type),K=T(at.internalFormat,lt,Y,at.normalized,at.colorSpace);Wt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue(g),K,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue(g),K,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,K,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qt(y,g,O){const Z=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=i.get(g.depthTexture);if(et.__renderTarget=g,(!et.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z){if(et.__webglInit===void 0&&(et.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),et.__webglTexture===void 0){et.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),wt(n.TEXTURE_CUBE_MAP,g.depthTexture);const gt=r.convert(g.depthTexture.format),bt=r.convert(g.depthTexture.type);let ut;g.depthTexture.format===Ai?ut=n.DEPTH_COMPONENT24:g.depthTexture.format===cs&&(ut=n.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ut,g.width,g.height,0,gt,bt,null)}}else tt(g.depthTexture,0);const at=et.__webglTexture,lt=Ue(g),Y=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,K=g.depthTexture.format===cs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Ai)Wt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Y,at,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,K,Y,at,0);else if(g.depthTexture.format===cs)Wt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Y,at,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,K,Y,at,0);else throw new Error("Unknown depthTexture format")}function ce(y){const g=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const Z=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){const et=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),g.__depthDisposeCallback=et}g.__boundDepthTexture=Z}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let Z=0;Z<6;Z++)qt(g.__webglFramebuffer[Z],y,Z);else{const Z=y.texture.mipmaps;Z&&Z.length>0?qt(g.__webglFramebuffer[0],y,0):qt(g.__webglFramebuffer,y,0)}else if(O){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=n.createRenderbuffer(),xe(g.__webglDepthbuffer[Z],y,!1);else{const et=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=g.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,at)}}else{const Z=y.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),xe(g.__webglDepthbuffer,y,!1);else{const et=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,at)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(y,g,O){const Z=i.get(y);g!==void 0&&Dt(Z.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ce(y)}function jt(y){const g=y.texture,O=i.get(y),Z=i.get(g);y.addEventListener("dispose",x);const et=y.textures,at=y.isWebGLCubeRenderTarget===!0,lt=et.length>1;if(lt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=g.version,a.memory.textures++),at){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let K=0;K<g.mipmaps.length;K++)O.__webglFramebuffer[Y][K]=n.createFramebuffer()}else O.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<g.mipmaps.length;Y++)O.__webglFramebuffer[Y]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(lt)for(let Y=0,K=et.length;Y<K;Y++){const gt=i.get(et[Y]);gt.__webglTexture===void 0&&(gt.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&Wt(y)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<et.length;Y++){const K=et[Y];O.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const gt=r.convert(K.format,K.colorSpace),bt=r.convert(K.type),ut=T(K.internalFormat,gt,bt,K.normalized,K.colorSpace,y.isXRRenderTarget===!0),ot=Ue(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,ut,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(O.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),wt(n.TEXTURE_CUBE_MAP,g);for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Dt(O.__webglFramebuffer[Y][K],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else Dt(O.__webglFramebuffer[Y],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);m(g)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Y=0,K=et.length;Y<K;Y++){const gt=et[Y],bt=i.get(gt);let ut=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ut=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,bt.__webglTexture),wt(ut,gt),Dt(O.__webglFramebuffer,y,gt,n.COLOR_ATTACHMENT0+Y,ut,0),m(gt)&&M(ut)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Y=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,Z.__webglTexture),wt(Y,g),g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Dt(O.__webglFramebuffer[K],y,g,n.COLOR_ATTACHMENT0,Y,K);else Dt(O.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,Y,0);m(g)&&M(Y),e.unbindTexture()}y.depthBuffer&&ce(y)}function Le(y){const g=y.textures;for(let O=0,Z=g.length;O<Z;O++){const et=g[O];if(m(et)){const at=A(y),lt=i.get(et).__webglTexture;e.bindTexture(at,lt),M(at),e.unbindTexture()}}}const ve=[],Fe=[];function N(y){if(y.samples>0){if(Wt(y)===!1){const g=y.textures,O=y.width,Z=y.height;let et=n.COLOR_BUFFER_BIT;const at=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(y),Y=g.length>1;if(Y)for(let gt=0;gt<g.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const K=y.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let gt=0;gt<g.length;gt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[gt]);const bt=i.get(g[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,bt,0)}n.blitFramebuffer(0,0,O,Z,0,0,O,Z,et,n.NEAREST),l===!0&&(ve.length=0,Fe.length=0,ve.push(n.COLOR_ATTACHMENT0+gt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ve.push(at),Fe.push(at),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let gt=0;gt<g.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,lt.__webglColorRenderbuffer[gt]);const bt=i.get(g[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Ue(y){return Math.min(s.maxSamples,y.samples)}function Wt(y){const g=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ue(y){const g=a.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function mt(y,g){const O=y.colorSpace,Z=y.format,et=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==Ba&&O!==Oi&&(te.getTransfer(O)===fe?(Z!==Yn||et!==Cn)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",O)),g}function we(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.getTextureUnits=W,this.setTextureUnits=U,this.setTexture2D=tt,this.setTexture2DArray=it,this.setTexture3D=ct,this.setTextureCube=Tt,this.rebindTextures=_e,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function M_(n,t){function e(i,s=Oi){let r;const a=te.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===Zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===su)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ru)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===nu)return n.BYTE;if(i===iu)return n.SHORT;if(i===Lr)return n.UNSIGNED_SHORT;if(i===jl)return n.INT;if(i===ri)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===au)return n.ALPHA;if(i===ou)return n.RGB;if(i===Yn)return n.RGBA;if(i===Ai)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===lu)return n.RED;if(i===$l)return n.RED_INTEGER;if(i===fs)return n.RG;if(i===Jl)return n.RG_INTEGER;if(i===Ql)return n.RGBA_INTEGER;if(i===Aa||i===wa||i===Ra||i===Ca)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nl||i===il||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===al||i===ol||i===ll||i===cl||i===hl||i===Fa||i===ul)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===al||i===ol)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ll)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===cl)return r.COMPRESSED_R11_EAC;if(i===hl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Fa)return r.COMPRESSED_RG11_EAC;if(i===ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dl||i===fl||i===pl||i===ml||i===gl||i===_l||i===xl||i===vl||i===Ml||i===Sl||i===yl||i===bl||i===El||i===Tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ml)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_l)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ml)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===El)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tl)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===wl||i===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Al)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cl||i===Pl||i===Oa||i===Dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const S_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y_=`
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

}`;class b_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new xu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new on({vertexShader:S_,fragmentShader:y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new Gr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E_ extends ji{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null;const S=typeof XRWebGLBinding<"u",f=new b_,m={},M=e.getContextAttributes();let A=null,T=null;const C=[],E=[],R=new Ct;let x=null;const b=new wn;b.viewport=new Ae;const P=new wn;P.viewport=new Ae;const w=[b,P],I=new Lf;let V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let pt=C[j];return pt===void 0&&(pt=new fo,C[j]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(j){let pt=C[j];return pt===void 0&&(pt=new fo,C[j]=pt),pt.getGripSpace()},this.getHand=function(j){let pt=C[j];return pt===void 0&&(pt=new fo,C[j]=pt),pt.getHandSpace()};function U(j){const pt=E.indexOf(j.inputSource);if(pt===-1)return;const ht=C[pt];ht!==void 0&&(ht.update(j.inputSource,j.frame,c||a),ht.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",z);for(let j=0;j<C.length;j++){const pt=E[j];pt!==null&&(E[j]=null,C[j].disconnect(pt))}V=null,W=null,f.reset();for(const j in m)delete m[j];t.setRenderTarget(A),p=null,h=null,d=null,s=null,T=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",G),s.addEventListener("inputsourceschange",z),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Ut=null,Ot=null;M.depth&&(Ot=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=M.stencil?cs:Ai,Ut=M.stencil?Ir:ri);const Dt={colorFormat:e.RGBA8,depthFormat:Ot,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Dt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),T=new qn(h.textureWidth,h.textureHeight,{format:Yn,type:Cn,depthTexture:new Js(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ht={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new qn(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),wt.setContext(s),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function z(j){for(let pt=0;pt<j.removed.length;pt++){const ht=j.removed[pt],Ut=E.indexOf(ht);Ut>=0&&(E[Ut]=null,C[Ut].disconnect(ht))}for(let pt=0;pt<j.added.length;pt++){const ht=j.added[pt];let Ut=E.indexOf(ht);if(Ut===-1){for(let Dt=0;Dt<C.length;Dt++)if(Dt>=E.length){E.push(ht),Ut=Dt;break}else if(E[Dt]===null){E[Dt]=ht,Ut=Dt;break}if(Ut===-1)break}const Ot=C[Ut];Ot&&Ot.connect(ht)}}const tt=new D,it=new D;function ct(j,pt,ht){tt.setFromMatrixPosition(pt.matrixWorld),it.setFromMatrixPosition(ht.matrixWorld);const Ut=tt.distanceTo(it),Ot=pt.projectionMatrix.elements,Dt=ht.projectionMatrix.elements,xe=Ot[14]/(Ot[10]-1),qt=Ot[14]/(Ot[10]+1),ce=(Ot[9]+1)/Ot[5],_e=(Ot[9]-1)/Ot[5],jt=(Ot[8]-1)/Ot[0],Le=(Dt[8]+1)/Dt[0],ve=xe*jt,Fe=xe*Le,N=Ut/(-jt+Le),Ue=N*-jt;if(pt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ue),j.translateZ(N),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ot[10]===-1)j.projectionMatrix.copy(pt.projectionMatrix),j.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Wt=xe+N,ue=qt+N,mt=ve-Ue,we=Fe+(Ut-Ue),y=ce*qt/ue*Wt,g=_e*qt/ue*Wt;j.projectionMatrix.makePerspective(mt,we,y,g,Wt,ue),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Tt(j,pt){pt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(pt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let pt=j.near,ht=j.far;f.texture!==null&&(f.depthNear>0&&(pt=f.depthNear),f.depthFar>0&&(ht=f.depthFar)),I.near=P.near=b.near=pt,I.far=P.far=b.far=ht,(V!==I.near||W!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),V=I.near,W=I.far),I.layers.mask=j.layers.mask|6,b.layers.mask=I.layers.mask&-5,P.layers.mask=I.layers.mask&-3;const Ut=j.parent,Ot=I.cameras;Tt(I,Ut);for(let Dt=0;Dt<Ot.length;Dt++)Tt(Ot[Dt],Ut);Ot.length===2?ct(I,b,P):I.projectionMatrix.copy(b.projectionMatrix),X(j,I,Ut)};function X(j,pt,ht){ht===null?j.matrix.copy(pt.matrixWorld):(j.matrix.copy(ht.matrixWorld),j.matrix.invert(),j.matrix.multiply(pt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(pt.projectionMatrix),j.projectionMatrixInverse.copy(pt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Fr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(I)},this.getCameraTexture=function(j){return m[j]};let J=null;function St(j,pt){if(u=pt.getViewerPose(c||a),_=pt,u!==null){const ht=u.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let Ut=!1;ht.length!==I.cameras.length&&(I.cameras.length=0,Ut=!0);for(let qt=0;qt<ht.length;qt++){const ce=ht[qt];let _e=null;if(p!==null)_e=p.getViewport(ce);else{const Le=d.getViewSubImage(h,ce);_e=Le.viewport,qt===0&&(t.setRenderTargetTextures(T,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(T))}let jt=w[qt];jt===void 0&&(jt=new wn,jt.layers.enable(qt),jt.viewport=new Ae,w[qt]=jt),jt.matrix.fromArray(ce.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(ce.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(_e.x,_e.y,_e.width,_e.height),qt===0&&(I.matrix.copy(jt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ut===!0&&I.cameras.push(jt)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const qt=d.getDepthInformation(ht[0]);qt&&qt.isValid&&qt.texture&&f.init(qt,s.renderState)}if(Ot&&Ot.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let qt=0;qt<ht.length;qt++){const ce=ht[qt].camera;if(ce){let _e=m[ce];_e||(_e=new xu,m[ce]=_e);const jt=d.getCameraImage(ce);_e.sourceTexture=jt}}}}for(let ht=0;ht<C.length;ht++){const Ut=E[ht],Ot=C[ht];Ut!==null&&Ot!==void 0&&Ot.update(Ut,pt,c||a)}J&&J(j,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),_=null}const wt=new Au;wt.setAnimationLoop(St),this.setAnimationLoop=function(j){J=j},this.dispose=function(){}}}const T_=new Me,Lu=new Ht;Lu.set(-1,0,0,0,1,0,0,0,1);function A_(n,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function i(f,m){m.color.getRGB(f.fogColor.value,vu(n)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,M,A,T){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(f,m):m.isMeshLambertMaterial?(r(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(f,m),d(f,m)):m.isMeshPhongMaterial?(r(f,m),u(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(f,m),h(f,m),m.isMeshPhysicalMaterial&&p(f,m,T)):m.isMeshMatcapMaterial?(r(f,m),_(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),S(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,M,A):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===gn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===gn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const M=t.get(m),A=M.envMap,T=M.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(T)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Lu),f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,M,A){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*M,f.scale.value=A*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function d(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function h(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,M){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gn&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,m){m.matcap&&(f.matcap.value=m.matcap)}function S(f,m){const M=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function w_(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const T=A.program;i.uniformBlockBinding(M,T)}function c(M,A){let T=s[M.id];T===void 0&&(_(M),T=u(M),s[M.id]=T,M.addEventListener("dispose",f));const C=A.program;i.updateUBOMapping(M,C);const E=t.render.frame;r[M.id]!==E&&(h(M),r[M.id]=E)}function u(M){const A=d();M.__bindingPointIndex=A;const T=n.createBuffer(),C=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,T),T}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const A=s[M.id],T=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let E=0,R=T.length;E<R;E++){const x=Array.isArray(T[E])?T[E]:[T[E]];for(let b=0,P=x.length;b<P;b++){const w=x[b];if(p(w,E,b,C)===!0){const I=w.__offset,V=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let U=0;U<V.length;U++){const G=V[U],z=S(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,I+W,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):ArrayBuffer.isView(G)?w.__data.set(new G.constructor(G.buffer,G.byteOffset,w.__data.length)):(G.toArray(w.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,A,T,C){const E=M.value,R=A+"_"+T;if(C[R]===void 0)return typeof E=="number"||typeof E=="boolean"?C[R]=E:ArrayBuffer.isView(E)?C[R]=E.slice():C[R]=E.clone(),!0;{const x=C[R];if(typeof E=="number"||typeof E=="boolean"){if(x!==E)return C[R]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(x.equals(E)===!1)return x.copy(E),!0}}return!1}function _(M){const A=M.uniforms;let T=0;const C=16;for(let R=0,x=A.length;R<x;R++){const b=Array.isArray(A[R])?A[R]:[A[R]];for(let P=0,w=b.length;P<w;P++){const I=b[P],V=Array.isArray(I.value)?I.value:[I.value];for(let W=0,U=V.length;W<U;W++){const G=V[W],z=S(G),tt=T%C,it=tt%z.boundary,ct=tt+it;T+=it,ct!==0&&C-ct<z.storage&&(T+=C-ct),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=z.storage}}}const E=T%C;return E>0&&(T+=C-E),M.__size=T,M.__cache={},this}function S(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",M),A}function f(M){const A=M.target;A.removeEventListener("dispose",f);const T=a.indexOf(A.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function m(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}const R_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function C_(){return Jn===null&&(Jn=new ff(R_,16,16,fs,ai),Jn.name="DFG_LUT",Jn.minFilter=$e,Jn.magFilter=$e,Jn.wrapS=ei,Jn.wrapT=ei,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class P_{constructor(t={}){const{canvas:e=wd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Cn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=p,f=new Set([Ql,Jl,$l]),m=new Set([Cn,ri,Lr,Ir,Zl,Kl]),M=new Uint32Array(4),A=new Int32Array(4),T=new D;let C=null,E=null;const R=[],x=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let w=!1,I=null;this._outputColorSpace=An;let V=0,W=0,U=null,G=-1,z=null;const tt=new Ae,it=new Ae;let ct=null;const Tt=new _t(0);let X=0,J=e.width,St=e.height,wt=1,j=null,pt=null;const ht=new Ae(0,0,J,St),Ut=new Ae(0,0,J,St);let Ot=!1;const Dt=new ac;let xe=!1,qt=!1;const ce=new Me,_e=new D,jt=new Ae,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Fe(){return U===null?wt:1}let N=i;function Ue(v,F){return e.getContext(v,F)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yl}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),N===null){const F="webgl2";if(N=Ue(F,v),N===null)throw Ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw ee("WebGLRenderer: "+v.message),v}let Wt,ue,mt,we,y,g,O,Z,et,at,lt,Y,K,gt,bt,ut,ot,It,kt,Jt,L,rt,q;function Mt(){Wt=new C0(N),Wt.init(),L=new M_(N,Wt),ue=new S0(N,Wt,t,L),mt=new x_(N,Wt),ue.reversedDepthBuffer&&h&&mt.buffers.depth.setReversed(!0),we=new L0(N),y=new s_,g=new v_(N,Wt,mt,y,ue,L,we),O=new R0(P),Z=new Ff(N),rt=new v0(N,Z),et=new P0(N,Z,we,rt),at=new U0(N,et,Z,rt,we),It=new I0(N,ue,g),bt=new y0(y),lt=new i_(P,O,Wt,ue,rt,bt),Y=new A_(P,y),K=new a_,gt=new d_(Wt),ot=new x0(P,O,mt,at,_,l),ut=new __(P,at,ue),q=new w_(N,we,ue,mt),kt=new M0(N,Wt,we),Jt=new D0(N,Wt,we),we.programs=lt.programs,P.capabilities=ue,P.extensions=Wt,P.properties=y,P.renderLists=K,P.shadowMap=ut,P.state=mt,P.info=we}Mt(),S!==Cn&&(b=new F0(S,e.width,e.height,s,r));const st=new E_(P,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const v=Wt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Wt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return wt},this.setPixelRatio=function(v){v!==void 0&&(wt=v,this.setSize(J,St,!1))},this.getSize=function(v){return v.set(J,St)},this.setSize=function(v,F,H=!0){if(st.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}J=v,St=F,e.width=Math.floor(v*wt),e.height=Math.floor(F*wt),H===!0&&(e.style.width=v+"px",e.style.height=F+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(J*wt,St*wt).floor()},this.setDrawingBufferSize=function(v,F,H){J=v,St=F,wt=H,e.width=Math.floor(v*H),e.height=Math.floor(F*H),this.setViewport(0,0,v,F)},this.setEffects=function(v){if(S===Cn){ee("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let F=0;F<v.length;F++)if(v[F].isOutputPass===!0){Ft("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(tt)},this.getViewport=function(v){return v.copy(ht)},this.setViewport=function(v,F,H,B){v.isVector4?ht.set(v.x,v.y,v.z,v.w):ht.set(v,F,H,B),mt.viewport(tt.copy(ht).multiplyScalar(wt).round())},this.getScissor=function(v){return v.copy(Ut)},this.setScissor=function(v,F,H,B){v.isVector4?Ut.set(v.x,v.y,v.z,v.w):Ut.set(v,F,H,B),mt.scissor(it.copy(Ut).multiplyScalar(wt).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(v){mt.setScissorTest(Ot=v)},this.setOpaqueSort=function(v){j=v},this.setTransparentSort=function(v){pt=v},this.getClearColor=function(v){return v.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,H=!0){let B=0;if(v){let k=!1;if(U!==null){const dt=U.texture.format;k=f.has(dt)}if(k){const dt=U.texture.type,yt=m.has(dt),ft=ot.getClearColor(),vt=ot.getClearAlpha(),Rt=ft.r,Bt=ft.g,Lt=ft.b;yt?(M[0]=Rt,M[1]=Bt,M[2]=Lt,M[3]=vt,N.clearBufferuiv(N.COLOR,0,M)):(A[0]=Rt,A[1]=Bt,A[2]=Lt,A[3]=vt,N.clearBufferiv(N.COLOR,0,A))}else B|=N.COLOR_BUFFER_BIT}F&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),I=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),ot.dispose(),K.dispose(),gt.dispose(),y.dispose(),O.dispose(),at.dispose(),rt.dispose(),q.dispose(),lt.dispose(),st.dispose(),st.removeEventListener("sessionstart",Zi),st.removeEventListener("sessionend",_s),Ie.stop()};function Q(v){v.preventDefault(),ka("WebGLRenderer: Context Lost."),w=!0}function At(){ka("WebGLRenderer: Context Restored."),w=!1;const v=we.autoReset,F=ut.enabled,H=ut.autoUpdate,B=ut.needsUpdate,k=ut.type;Mt(),we.autoReset=v,ut.enabled=F,ut.autoUpdate=H,ut.needsUpdate=B,ut.type=k}function Nt(v){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Re(v){const F=v.target;F.removeEventListener("dispose",Re),ae(F)}function ae(v){_n(v),y.remove(v)}function _n(v){const F=y.get(v).programs;F!==void 0&&(F.forEach(function(H){lt.releaseProgram(H)}),v.isShaderMaterial&&lt.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,H,B,k,dt){F===null&&(F=Le);const yt=k.isMesh&&k.matrixWorld.determinant()<0,ft=lr(v,F,H,B,k);mt.setMaterial(B,yt);let vt=H.index,Rt=1;if(B.wireframe===!0){if(vt=et.getWireframeAttribute(H),vt===void 0)return;Rt=2}const Bt=H.drawRange,Lt=H.attributes.position;let Pt=Bt.start*Rt,oe=(Bt.start+Bt.count)*Rt;dt!==null&&(Pt=Math.max(Pt,dt.start*Rt),oe=Math.min(oe,(dt.start+dt.count)*Rt)),vt!==null?(Pt=Math.max(Pt,0),oe=Math.min(oe,vt.count)):Lt!=null&&(Pt=Math.max(Pt,0),oe=Math.min(oe,Lt.count));const Ce=oe-Pt;if(Ce<0||Ce===1/0)return;rt.setup(k,B,ft,H,vt);let ye,se=kt;if(vt!==null&&(ye=Z.get(vt),se=Jt,se.setIndex(ye)),k.isMesh)B.wireframe===!0?(mt.setLineWidth(B.wireframeLinewidth*Fe()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(k.isLine){let ze=B.linewidth;ze===void 0&&(ze=1),mt.setLineWidth(ze*Fe()),k.isLineSegments?se.setMode(N.LINES):k.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else k.isPoints?se.setMode(N.POINTS):k.isSprite&&se.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ze=k._multiDrawStarts,Et=k._multiDrawCounts,tn=k._multiDrawCount,Zt=vt?Z.get(vt).bytesPerElement:1,ln=y.get(B).currentProgram.getUniforms();for(let bn=0;bn<tn;bn++)ln.setValue(N,"_gl_DrawID",bn),se.render(ze[bn]/Zt,Et[bn])}else if(k.isInstancedMesh)se.renderInstances(Pt,Ce,k.count);else if(H.isInstancedBufferGeometry){const ze=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Et=Math.min(H.instanceCount,ze);se.renderInstances(Pt,Ce,Et)}else se.render(Pt,Ce)};function yn(v,F,H){v.transparent===!0&&v.side===mn&&v.forceSinglePass===!1?(v.side=gn,v.needsUpdate=!0,oi(v,F,H),v.side=Vi,v.needsUpdate=!0,oi(v,F,H),v.side=mn):oi(v,F,H)}this.compile=function(v,F,H=null){H===null&&(H=v),E=gt.get(H),E.init(F),x.push(E),H.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),v!==H&&v.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights();const B=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const dt=k.material;if(dt)if(Array.isArray(dt))for(let yt=0;yt<dt.length;yt++){const ft=dt[yt];yn(ft,H,k),B.add(ft)}else yn(dt,H,k),B.add(dt)}),E=x.pop(),B},this.compileAsync=function(v,F,H=null){const B=this.compile(v,F,H);return new Promise(k=>{function dt(){if(B.forEach(function(yt){y.get(yt).currentProgram.isReady()&&B.delete(yt)}),B.size===0){k(v);return}setTimeout(dt,10)}Wt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ri=null;function Ci(v){Ri&&Ri(v)}function Zi(){Ie.stop()}function _s(){Ie.start()}const Ie=new Au;Ie.setAnimationLoop(Ci),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(v){Ri=v,st.setAnimationLoop(v),v===null?Ie.stop():Ie.start()},st.addEventListener("sessionstart",Zi),st.addEventListener("sessionend",_s),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;I!==null&&I.renderStart(v,F);const H=st.enabled===!0&&st.isPresenting===!0,B=b!==null&&(U===null||H)&&b.begin(P,U);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(F),F=st.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,F,U),E=gt.get(v,x.length),E.init(F),E.state.textureUnits=g.getTextureUnits(),x.push(E),ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Dt.setFromProjectionMatrix(ce,ii,F.reversedDepth),qt=this.localClippingEnabled,xe=bt.init(this.clippingPlanes,qt),C=K.get(v,R.length),C.init(),R.push(C),st.enabled===!0&&st.isPresenting===!0){const yt=P.xr.getDepthSensingMesh();yt!==null&&xs(yt,F,-1/0,P.sortObjects)}xs(v,F,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(j,pt),ve=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ve&&ot.addToRenderList(C,v),this.info.render.frame++,xe===!0&&bt.beginShadows();const k=E.state.shadowsArray;if(ut.render(k,v,F),xe===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&b.hasRenderPass())===!1){const yt=C.opaque,ft=C.transmissive;if(E.setupLights(),F.isArrayCamera){const vt=F.cameras;if(ft.length>0)for(let Rt=0,Bt=vt.length;Rt<Bt;Rt++){const Lt=vt[Rt];ar(yt,ft,v,Lt)}ve&&ot.render(v);for(let Rt=0,Bt=vt.length;Rt<Bt;Rt++){const Lt=vt[Rt];rr(C,v,Lt,Lt.viewport)}}else ft.length>0&&ar(yt,ft,v,F),ve&&ot.render(v),rr(C,v,F)}U!==null&&W===0&&(g.updateMultisampleRenderTarget(U),g.updateRenderTargetMipmap(U)),B&&b.end(P),v.isScene===!0&&v.onAfterRender(P,v,F),rt.resetDefaultState(),G=-1,z=null,x.pop(),x.length>0?(E=x[x.length-1],g.setTextureUnits(E.state.textureUnits),xe===!0&&bt.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,I!==null&&I.renderEnd()};function xs(v,F,H,B){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Dt.intersectsSprite(v)){B&&jt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ce);const yt=at.update(v),ft=v.material;ft.visible&&C.push(v,yt,ft,H,jt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Dt.intersectsObject(v))){const yt=at.update(v),ft=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),jt.copy(v.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),jt.copy(yt.boundingSphere.center)),jt.applyMatrix4(v.matrixWorld).applyMatrix4(ce)),Array.isArray(ft)){const vt=yt.groups;for(let Rt=0,Bt=vt.length;Rt<Bt;Rt++){const Lt=vt[Rt],Pt=ft[Lt.materialIndex];Pt&&Pt.visible&&C.push(v,yt,Pt,H,jt.z,Lt)}}else ft.visible&&C.push(v,yt,ft,H,jt.z,null)}}const dt=v.children;for(let yt=0,ft=dt.length;yt<ft;yt++)xs(dt[yt],F,H,B)}function rr(v,F,H,B){const{opaque:k,transmissive:dt,transparent:yt}=v;E.setupLightsView(H),xe===!0&&bt.setGlobalState(P.clippingPlanes,H),B&&mt.viewport(tt.copy(B)),k.length>0&&Ki(k,F,H),dt.length>0&&Ki(dt,F,H),yt.length>0&&Ki(yt,F,H),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function ar(v,F,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){const Pt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new qn(1,1,{generateMipmaps:!0,type:Pt?ai:Cn,minFilter:ki,samples:Math.max(4,ue.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}const dt=E.state.transmissionRenderTarget[B.id],yt=B.viewport||tt;dt.setSize(yt.z*P.transmissionResolutionScale,yt.w*P.transmissionResolutionScale);const ft=P.getRenderTarget(),vt=P.getActiveCubeFace(),Rt=P.getActiveMipmapLevel();P.setRenderTarget(dt),P.getClearColor(Tt),X=P.getClearAlpha(),X<1&&P.setClearColor(16777215,.5),P.clear(),ve&&ot.render(H);const Bt=P.toneMapping;P.toneMapping=si;const Lt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),xe===!0&&bt.setGlobalState(P.clippingPlanes,B),Ki(v,H,B),g.updateMultisampleRenderTarget(dt),g.updateRenderTargetMipmap(dt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let oe=0,Ce=F.length;oe<Ce;oe++){const ye=F[oe],{object:se,geometry:ze,material:Et,group:tn}=ye;if(Et.side===mn&&se.layers.test(B.layers)){const Zt=Et.side;Et.side=gn,Et.needsUpdate=!0,or(se,H,B,ze,Et,tn),Et.side=Zt,Et.needsUpdate=!0,Pt=!0}}Pt===!0&&(g.updateMultisampleRenderTarget(dt),g.updateRenderTargetMipmap(dt))}P.setRenderTarget(ft,vt,Rt),P.setClearColor(Tt,X),Lt!==void 0&&(B.viewport=Lt),P.toneMapping=Bt}function Ki(v,F,H){const B=F.isScene===!0?F.overrideMaterial:null;for(let k=0,dt=v.length;k<dt;k++){const yt=v[k],{object:ft,geometry:vt,group:Rt}=yt;let Bt=yt.material;Bt.allowOverride===!0&&B!==null&&(Bt=B),ft.layers.test(H.layers)&&or(ft,F,H,vt,Bt,Rt)}}function or(v,F,H,B,k,dt){v.onBeforeRender(P,F,H,B,k,dt),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(P,F,H,B,v,dt),k.transparent===!0&&k.side===mn&&k.forceSinglePass===!1?(k.side=gn,k.needsUpdate=!0,P.renderBufferDirect(H,F,B,k,v,dt),k.side=Vi,k.needsUpdate=!0,P.renderBufferDirect(H,F,B,k,v,dt),k.side=mn):P.renderBufferDirect(H,F,B,k,v,dt),v.onAfterRender(P,F,H,B,k,dt)}function oi(v,F,H){F.isScene!==!0&&(F=Le);const B=y.get(v),k=E.state.lights,dt=E.state.shadowsArray,yt=k.state.version,ft=lt.getParameters(v,k.state,dt,F,H,E.state.lightProbeGridArray),vt=lt.getProgramCacheKey(ft);let Rt=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,B.fog=F.fog;const Bt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=O.get(v.envMap||B.environment,Bt),B.envMapRotation=B.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,Rt===void 0&&(v.addEventListener("dispose",Re),Rt=new Map,B.programs=Rt);let Lt=Rt.get(vt);if(Lt!==void 0){if(B.currentProgram===Lt&&B.lightsStateVersion===yt)return li(v,ft),Lt}else ft.uniforms=lt.getUniforms(v),I!==null&&v.isNodeMaterial&&I.build(v,H,ft),v.onBeforeCompile(ft,P),Lt=lt.acquireProgram(ft,vt),Rt.set(vt,Lt),B.uniforms=ft.uniforms;const Pt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Pt.clippingPlanes=bt.uniform),li(v,ft),B.needsLights=cr(v),B.lightsStateVersion=yt,B.needsLights&&(Pt.ambientLightColor.value=k.state.ambient,Pt.lightProbe.value=k.state.probe,Pt.directionalLights.value=k.state.directional,Pt.directionalLightShadows.value=k.state.directionalShadow,Pt.spotLights.value=k.state.spot,Pt.spotLightShadows.value=k.state.spotShadow,Pt.rectAreaLights.value=k.state.rectArea,Pt.ltc_1.value=k.state.rectAreaLTC1,Pt.ltc_2.value=k.state.rectAreaLTC2,Pt.pointLights.value=k.state.point,Pt.pointLightShadows.value=k.state.pointShadow,Pt.hemisphereLights.value=k.state.hemi,Pt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pt.spotLightMatrix.value=k.state.spotLightMatrix,Pt.spotLightMap.value=k.state.spotLightMap,Pt.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=Lt,B.uniformsList=null,Lt}function $i(v){if(v.uniformsList===null){const F=v.currentProgram.getUniforms();v.uniformsList=Da.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function li(v,F){const H=y.get(v);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Vr(v,F){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;T.setFromMatrixPosition(F.matrixWorld);for(let H=0,B=v.length;H<B;H++){const k=v[H];if(k.texture!==null&&k.boundingBox.containsPoint(T))return k}return null}function lr(v,F,H,B,k){F.isScene!==!0&&(F=Le),g.resetTextureUnits();const dt=F.fog,yt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?F.environment:null,ft=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:te.workingColorSpace,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Rt=O.get(B.envMap||yt,vt),Bt=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Lt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pt=!!H.morphAttributes.position,oe=!!H.morphAttributes.normal,Ce=!!H.morphAttributes.color;let ye=si;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ye=P.toneMapping);const se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ze=se!==void 0?se.length:0,Et=y.get(B),tn=E.state.lights;if(xe===!0&&(qt===!0||v!==z)){const ie=v===z&&B.id===G;bt.setState(B,v,ie)}let Zt=!1;B.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==tn.state.version||Et.outputColorSpace!==ft||k.isBatchedMesh&&Et.batching===!1||!k.isBatchedMesh&&Et.batching===!0||k.isBatchedMesh&&Et.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Et.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Et.instancing===!1||!k.isInstancedMesh&&Et.instancing===!0||k.isSkinnedMesh&&Et.skinning===!1||!k.isSkinnedMesh&&Et.skinning===!0||k.isInstancedMesh&&Et.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Et.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Et.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Et.instancingMorph===!1&&k.morphTexture!==null||Et.envMap!==Rt||B.fog===!0&&Et.fog!==dt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==bt.numPlanes||Et.numIntersection!==bt.numIntersection)||Et.vertexAlphas!==Bt||Et.vertexTangents!==Lt||Et.morphTargets!==Pt||Et.morphNormals!==oe||Et.morphColors!==Ce||Et.toneMapping!==ye||Et.morphTargetsCount!==ze||!!Et.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Zt=!0):(Zt=!0,Et.__version=B.version);let ln=Et.currentProgram;Zt===!0&&(ln=oi(B,F,k),I&&B.isNodeMaterial&&I.onUpdateProgram(B,ln,Et));let bn=!1,en=!1,nn=!1;const re=ln.getUniforms(),be=Et.uniforms;if(mt.useProgram(ln.program)&&(bn=!0,en=!0,nn=!0),B.id!==G&&(G=B.id,en=!0),Et.needsLights){const ie=Vr(E.state.lightProbeGridArray,k);Et.lightProbeGrid!==ie&&(Et.lightProbeGrid=ie,en=!0)}if(bn||z!==v){mt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),re.setValue(N,"projectionMatrix",v.projectionMatrix),re.setValue(N,"viewMatrix",v.matrixWorldInverse);const On=re.map.cameraPosition;On!==void 0&&On.setValue(N,_e.setFromMatrixPosition(v.matrixWorld)),ue.logarithmicDepthBuffer&&re.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&re.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),z!==v&&(z=v,en=!0,nn=!0)}if(Et.needsLights&&(tn.state.directionalShadowMap.length>0&&re.setValue(N,"directionalShadowMap",tn.state.directionalShadowMap,g),tn.state.spotShadowMap.length>0&&re.setValue(N,"spotShadowMap",tn.state.spotShadowMap,g),tn.state.pointShadowMap.length>0&&re.setValue(N,"pointShadowMap",tn.state.pointShadowMap,g)),k.isSkinnedMesh){re.setOptional(N,k,"bindMatrix"),re.setOptional(N,k,"bindMatrixInverse");const ie=k.skeleton;ie&&(ie.boneTexture===null&&ie.computeBoneTexture(),re.setValue(N,"boneTexture",ie.boneTexture,g))}k.isBatchedMesh&&(re.setOptional(N,k,"batchingTexture"),re.setValue(N,"batchingTexture",k._matricesTexture,g),re.setOptional(N,k,"batchingIdTexture"),re.setValue(N,"batchingIdTexture",k._indirectTexture,g),re.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&re.setValue(N,"batchingColorTexture",k._colorsTexture,g));const Pn=H.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&It.update(k,H,ln),(en||Et.receiveShadow!==k.receiveShadow)&&(Et.receiveShadow=k.receiveShadow,re.setValue(N,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&F.environment!==null&&(be.envMapIntensity.value=F.environmentIntensity),be.dfgLUT!==void 0&&(be.dfgLUT.value=C_()),en){if(re.setValue(N,"toneMappingExposure",P.toneMappingExposure),Et.needsLights&&vs(be,nn),dt&&B.fog===!0&&Y.refreshFogUniforms(be,dt),Y.refreshMaterialUniforms(be,B,wt,St,E.state.transmissionRenderTarget[v.id]),Et.needsLights&&Et.lightProbeGrid){const ie=Et.lightProbeGrid;be.probesSH.value=ie.texture,be.probesMin.value.copy(ie.boundingBox.min),be.probesMax.value.copy(ie.boundingBox.max),be.probesResolution.value.copy(ie.resolution)}Da.upload(N,$i(Et),be,g)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Da.upload(N,$i(Et),be,g),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&re.setValue(N,"center",k.center),re.setValue(N,"modelViewMatrix",k.modelViewMatrix),re.setValue(N,"normalMatrix",k.normalMatrix),re.setValue(N,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){const ie=B.uniformsGroups;for(let On=0,hi=ie.length;On<hi;On++){const Bn=ie[On];q.update(Bn,ln),q.bind(Bn,ln)}}return ln}function vs(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function cr(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,F,H){const B=y.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),y.get(v.texture).__webglTexture=F,y.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){const H=y.get(v);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const to=N.createFramebuffer();this.setRenderTarget=function(v,F=0,H=0){U=v,V=F,W=H;let B=null,k=!1,dt=!1;if(v){const ft=y.get(v);if(ft.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(N.FRAMEBUFFER,ft.__webglFramebuffer),tt.copy(v.viewport),it.copy(v.scissor),ct=v.scissorTest,mt.viewport(tt),mt.scissor(it),mt.setScissorTest(ct),G=-1;return}else if(ft.__webglFramebuffer===void 0)g.setupRenderTarget(v);else if(ft.__hasExternalTextures)g.rebindTextures(v,y.get(v.texture).__webglTexture,y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Bt=v.depthTexture;if(ft.__boundDepthTexture!==Bt){if(Bt!==null&&y.has(Bt)&&(v.width!==Bt.image.width||v.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(v)}}const vt=v.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(dt=!0);const Rt=y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Rt[F])?B=Rt[F][H]:B=Rt[F],k=!0):v.samples>0&&g.useMultisampledRTT(v)===!1?B=y.get(v).__webglMultisampledFramebuffer:Array.isArray(Rt)?B=Rt[H]:B=Rt,tt.copy(v.viewport),it.copy(v.scissor),ct=v.scissorTest}else tt.copy(ht).multiplyScalar(wt).floor(),it.copy(Ut).multiplyScalar(wt).floor(),ct=Ot;if(H!==0&&(B=to),mt.bindFramebuffer(N.FRAMEBUFFER,B)&&mt.drawBuffers(v,B),mt.viewport(tt),mt.scissor(it),mt.setScissorTest(ct),k){const ft=y.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,ft.__webglTexture,H)}else if(dt){const ft=F;for(let vt=0;vt<v.textures.length;vt++){const Rt=y.get(v.textures[vt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+vt,Rt.__webglTexture,H,ft)}}else if(v!==null&&H!==0){const ft=y.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ft.__webglTexture,H)}G=-1},this.readRenderTargetPixels=function(v,F,H,B,k,dt,yt,ft=0){if(!(v&&v.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&yt!==void 0&&(vt=vt[yt]),vt){mt.bindFramebuffer(N.FRAMEBUFFER,vt);try{const Rt=v.textures[ft],Bt=Rt.format,Lt=Rt.type;if(v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ft),!ue.textureFormatReadable(Bt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Lt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-B&&H>=0&&H<=v.height-k&&N.readPixels(F,H,B,k,L.convert(Bt),L.convert(Lt),dt)}finally{const Rt=U!==null?y.get(U).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(v,F,H,B,k,dt,yt,ft=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&yt!==void 0&&(vt=vt[yt]),vt)if(F>=0&&F<=v.width-B&&H>=0&&H<=v.height-k){mt.bindFramebuffer(N.FRAMEBUFFER,vt);const Rt=v.textures[ft],Bt=Rt.format,Lt=Rt.type;if(v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ft),!ue.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.bufferData(N.PIXEL_PACK_BUFFER,dt.byteLength,N.STREAM_READ),N.readPixels(F,H,B,k,L.convert(Bt),L.convert(Lt),0);const oe=U!==null?y.get(U).__webglFramebuffer:null;mt.bindFramebuffer(N.FRAMEBUFFER,oe);const Ce=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Rd(N,Ce,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Pt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,dt),N.deleteBuffer(Pt),N.deleteSync(Ce),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,H=0){const B=Math.pow(2,-H),k=Math.floor(v.image.width*B),dt=Math.floor(v.image.height*B),yt=F!==null?F.x:0,ft=F!==null?F.y:0;g.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,yt,ft,k,dt),mt.unbindTexture()};const ci=N.createFramebuffer(),hr=N.createFramebuffer();this.copyTextureToTexture=function(v,F,H=null,B=null,k=0,dt=0){let yt,ft,vt,Rt,Bt,Lt,Pt,oe,Ce;const ye=v.isCompressedTexture?v.mipmaps[dt]:v.image;if(H!==null)yt=H.max.x-H.min.x,ft=H.max.y-H.min.y,vt=H.isBox3?H.max.z-H.min.z:1,Rt=H.min.x,Bt=H.min.y,Lt=H.isBox3?H.min.z:0;else{const be=Math.pow(2,-k);yt=Math.floor(ye.width*be),ft=Math.floor(ye.height*be),v.isDataArrayTexture?vt=ye.depth:v.isData3DTexture?vt=Math.floor(ye.depth*be):vt=1,Rt=0,Bt=0,Lt=0}B!==null?(Pt=B.x,oe=B.y,Ce=B.z):(Pt=0,oe=0,Ce=0);const se=L.convert(F.format),ze=L.convert(F.type);let Et;F.isData3DTexture?(g.setTexture3D(F,0),Et=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(g.setTexture2DArray(F,0),Et=N.TEXTURE_2D_ARRAY):(g.setTexture2D(F,0),Et=N.TEXTURE_2D),mt.activeTexture(N.TEXTURE0),mt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),mt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),mt.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const tn=mt.getParameter(N.UNPACK_ROW_LENGTH),Zt=mt.getParameter(N.UNPACK_IMAGE_HEIGHT),ln=mt.getParameter(N.UNPACK_SKIP_PIXELS),bn=mt.getParameter(N.UNPACK_SKIP_ROWS),en=mt.getParameter(N.UNPACK_SKIP_IMAGES);mt.pixelStorei(N.UNPACK_ROW_LENGTH,ye.width),mt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye.height),mt.pixelStorei(N.UNPACK_SKIP_PIXELS,Rt),mt.pixelStorei(N.UNPACK_SKIP_ROWS,Bt),mt.pixelStorei(N.UNPACK_SKIP_IMAGES,Lt);const nn=v.isDataArrayTexture||v.isData3DTexture,re=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){const be=y.get(v),Pn=y.get(F),ie=y.get(be.__renderTarget),On=y.get(Pn.__renderTarget);mt.bindFramebuffer(N.READ_FRAMEBUFFER,ie.__webglFramebuffer),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let hi=0;hi<vt;hi++)nn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,y.get(v).__webglTexture,k,Lt+hi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,y.get(F).__webglTexture,dt,Ce+hi)),N.blitFramebuffer(Rt,Bt,yt,ft,Pt,oe,yt,ft,N.DEPTH_BUFFER_BIT,N.NEAREST);mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||y.has(v)){const be=y.get(v),Pn=y.get(F);mt.bindFramebuffer(N.READ_FRAMEBUFFER,ci),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,hr);for(let ie=0;ie<vt;ie++)nn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.__webglTexture,k,Lt+ie):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,be.__webglTexture,k),re?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pn.__webglTexture,dt,Ce+ie):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pn.__webglTexture,dt),k!==0?N.blitFramebuffer(Rt,Bt,yt,ft,Pt,oe,yt,ft,N.COLOR_BUFFER_BIT,N.NEAREST):re?N.copyTexSubImage3D(Et,dt,Pt,oe,Ce+ie,Rt,Bt,yt,ft):N.copyTexSubImage2D(Et,dt,Pt,oe,Rt,Bt,yt,ft);mt.bindFramebuffer(N.READ_FRAMEBUFFER,null),mt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else re?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Et,dt,Pt,oe,Ce,yt,ft,vt,se,ze,ye.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,dt,Pt,oe,Ce,yt,ft,vt,se,ye.data):N.texSubImage3D(Et,dt,Pt,oe,Ce,yt,ft,vt,se,ze,ye):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,dt,Pt,oe,yt,ft,se,ze,ye.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,dt,Pt,oe,ye.width,ye.height,se,ye.data):N.texSubImage2D(N.TEXTURE_2D,dt,Pt,oe,yt,ft,se,ze,ye);mt.pixelStorei(N.UNPACK_ROW_LENGTH,tn),mt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),mt.pixelStorei(N.UNPACK_SKIP_PIXELS,ln),mt.pixelStorei(N.UNPACK_SKIP_ROWS,bn),mt.pixelStorei(N.UNPACK_SKIP_IMAGES,en),dt===0&&F.generateMipmaps&&N.generateMipmap(Et),mt.unbindTexture()},this.initRenderTarget=function(v){y.get(v).__webglFramebuffer===void 0&&g.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?g.setTextureCube(v,0):v.isData3DTexture?g.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?g.setTexture2DArray(v,0):g.setTexture2D(v,0),mt.unbindTexture()},this.resetState=function(){V=0,W=0,U=null,mt.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const Uh={type:"change"},fc={type:"start"},Iu={type:"end"},xa=new rc,Nh=new yi,D_=Math.cos(70*Nl.DEG2RAD),He=new D,Mn=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zo=1e-6;class L_ extends Tu{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.touches={ONE:Vs.ROTATE,TWO:Vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new wi,this._lastTargetPosition=new D,this._quat=new wi().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lh,this._sphericalDelta=new lh,this._scale=1,this._panOffset=new D,this._rotateStart=new Ct,this._rotateEnd=new Ct,this._rotateDelta=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._panDelta=new Ct,this._dollyStart=new Ct,this._dollyEnd=new Ct,this._dollyDelta=new Ct,this._dollyDirection=new D,this._mouse=new Ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=U_.bind(this),this._onPointerDown=I_.bind(this),this._onPointerUp=N_.bind(this),this._onContextMenu=H_.bind(this),this._onMouseWheel=B_.bind(this),this._onKeyDown=z_.bind(this),this._onTouchStart=k_.bind(this),this._onTouchMove=G_.bind(this),this._onMouseDown=F_.bind(this),this._onMouseMove=O_.bind(this),this._interceptControlDown=V_.bind(this),this._interceptControlUp=W_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uh),this.update(),this.state=ge.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;He.copy(e).sub(this.target),He.applyQuaternion(this._quat),this._spherical.setFromVector3(He),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Mn:i>Math.PI&&(i-=Mn),s<-Math.PI?s+=Mn:s>Math.PI&&(s-=Mn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(He.setFromSpherical(this._spherical),He.applyQuaternion(this._quatInverse),e.copy(this.target).add(He),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=He.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=He.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xa.origin.copy(this.object.position),xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xa.direction))<D_?this.object.lookAt(this.target):(Nh.setFromNormalAndCoplanarPoint(this.object.up,this.target),xa.intersectPlane(Nh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zo||this._lastTargetPosition.distanceToSquared(this.target)>zo?(this.dispatchEvent(Uh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Mn/60*this.autoRotateSpeed*t:Mn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){He.setFromMatrixColumn(e,0),He.multiplyScalar(-t),this._panOffset.add(He)}_panUp(t,e){this.screenSpacePanning===!0?He.setFromMatrixColumn(e,1):(He.setFromMatrixColumn(e,0),He.crossVectors(this.object.up,He)),He.multiplyScalar(t),this._panOffset.add(He)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;He.copy(s).sub(this.target);let r=He.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function I_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function U_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function N_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Iu),this.state=ge.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function F_(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Nn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ge.DOLLY;break;case Nn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ge.ROTATE}break;case Nn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(fc)}function O_(n){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function B_(n){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(n.preventDefault(),this.dispatchEvent(fc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Iu))}function z_(n){this.enabled!==!1&&this._handleKeyDown(n)}function k_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Vs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ge.TOUCH_ROTATE;break;case Vs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case Vs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ge.TOUCH_DOLLY_PAN;break;case Vs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(fc)}function G_(n){switch(this._trackPointer(n),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ge.NONE}}function H_(n){this.enabled!==!1&&n.preventDefault()}function V_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function W_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ko={type:"change"},pc={type:"start"},mc={type:"end"},Fh=1e-6,le={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},va=new Ct,Fi=new Ct,X_=new D,Ma=new D,Go=new D,Hs=new wi,Oh=new D,Sa=new D,Ho=new D,ya=new D;class Y_ extends Tu{constructor(t,e=null){super(t,e),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.target=new D,this.state=le.NONE,this.keyState=le.NONE,this._lastPosition=new D,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new D,this._movePrev=new Ct,this._moveCurr=new Ct,this._lastAxis=new D,this._zoomStart=new Ct,this._zoomEnd=new Ct,this._panStart=new Ct,this._panEnd=new Ct,this._pointers=[],this._pointerPositions={},this._onPointerMove=j_.bind(this),this._onPointerDown=q_.bind(this),this._onPointerUp=Z_.bind(this),this._onPointerCancel=K_.bind(this),this._onContextMenu=ix.bind(this),this._onMouseWheel=nx.bind(this),this._onKeyDown=J_.bind(this),this._onKeyUp=$_.bind(this),this._onTouchStart=sx.bind(this),this._onTouchMove=rx.bind(this),this._onTouchEnd=ax.bind(this),this._onMouseDown=Q_.bind(this),this._onMouseMove=tx.bind(this),this._onMouseUp=ex.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,e!==null&&(this.connect(e),this.handleResize()),this.update()}connect(t){super.connect(t),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction=""}dispose(){this.disconnect()}handleResize(){const t=this.domElement.getBoundingClientRect(),e=this.domElement.ownerDocument.documentElement;this.screen.left=t.left+window.pageXOffset-e.clientLeft,this.screen.top=t.top+window.pageYOffset-e.clientTop,this.screen.width=t.width,this.screen.height=t.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>Fh&&(this.dispatchEvent(ko),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>Fh||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(ko),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=le.NONE,this.keyState=le.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(ko),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(Fi.copy(this._panEnd).sub(this._panStart),Fi.lengthSq()){if(this.object.isOrthographicCamera){const t=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,e=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;Fi.x*=t,Fi.y*=e}Fi.multiplyScalar(this._eye.length()*this.panSpeed),Ma.copy(this._eye).cross(this.object.up).setLength(Fi.x),Ma.add(X_.copy(this.object.up).setLength(Fi.y)),this.object.position.add(Ma),this.target.add(Ma),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(Fi.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){ya.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let t=ya.length();t?(this._eye.copy(this.object.position).sub(this.target),Oh.copy(this._eye).normalize(),Sa.copy(this.object.up).normalize(),Ho.crossVectors(Sa,Oh).normalize(),Sa.setLength(this._moveCurr.y-this._movePrev.y),Ho.setLength(this._moveCurr.x-this._movePrev.x),ya.copy(Sa.add(Ho)),Go.crossVectors(ya,this._eye).normalize(),t*=this.rotateSpeed,Hs.setFromAxisAngle(Go,t),this._eye.applyQuaternion(Hs),this.object.up.applyQuaternion(Hs),this._lastAxis.copy(Go),this._lastAngle=t):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),Hs.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(Hs),this.object.up.applyQuaternion(Hs)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let t;this.state===le.TOUCH_ZOOM_PAN?(t=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=Nl.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,t!==1&&t>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=Nl.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(t,e){return va.set((t-this.screen.left)/this.screen.width,(e-this.screen.top)/this.screen.height),va}_getMouseOnCircle(t,e){return va.set((t-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-e))/this.screen.width),va}_addPointer(t){this._pointers.push(t)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId==t.pointerId){this._pointers.splice(e,1);return}}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[e.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function q_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n))}function j_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Z_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchEnd(n):this._onMouseUp(),this._removePointer(n),this._pointers.length===0&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp)))}function K_(n){this._removePointer(n)}function $_(){this.enabled!==!1&&(this.keyState=le.NONE,window.addEventListener("keydown",this._onKeyDown))}function J_(n){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===le.NONE&&(n.code===this.keys[le.ROTATE]&&!this.noRotate?this.keyState=le.ROTATE:n.code===this.keys[le.ZOOM]&&!this.noZoom?this.keyState=le.ZOOM:n.code===this.keys[le.PAN]&&!this.noPan&&(this.keyState=le.PAN)))}function Q_(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Nn.DOLLY:this.state=le.ZOOM;break;case Nn.ROTATE:this.state=le.ROTATE;break;case Nn.PAN:this.state=le.PAN;break;default:this.state=le.NONE}const e=this.keyState!==le.NONE?this.keyState:this.state;e===le.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY)),this._movePrev.copy(this._moveCurr)):e===le.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(n.pageX,n.pageY)),this._zoomEnd.copy(this._zoomStart)):e===le.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(n.pageX,n.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(pc)}function tx(n){const t=this.keyState!==le.NONE?this.keyState:this.state;t===le.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY))):t===le.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(n.pageX,n.pageY)):t===le.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(n.pageX,n.pageY))}function ex(){this.state=le.NONE,this.dispatchEvent(mc)}function nx(n){if(this.enabled!==!1&&this.noZoom!==!0){switch(n.preventDefault(),n.deltaMode){case 2:this._zoomStart.y-=n.deltaY*.025;break;case 1:this._zoomStart.y-=n.deltaY*.01;break;default:this._zoomStart.y-=n.deltaY*25e-5;break}this.dispatchEvent(pc),this.dispatchEvent(mc)}}function ix(n){this.enabled!==!1&&n.preventDefault()}function sx(n){switch(this._trackPointer(n),this._pointers.length){case 1:this.state=le.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=le.TOUCH_ZOOM_PAN;const t=this._pointers[0].pageX-this._pointers[1].pageX,e=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(t*t+e*e);const i=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(i,s)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(pc)}function rx(n){switch(this._trackPointer(n),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY));break;default:const t=this._getSecondPointerPosition(n),e=n.pageX-t.x,i=n.pageY-t.y;this._touchZoomDistanceEnd=Math.sqrt(e*e+i*i);const s=(n.pageX+t.x)/2,r=(n.pageY+t.y)/2;this._panEnd.copy(this._getMouseOnScreen(s,r));break}}function ax(n){switch(this._pointers.length){case 0:this.state=le.NONE;break;case 1:this.state=le.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=le.TOUCH_ZOOM_PAN;for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId!==n.pointerId){const e=this._pointerPositions[this._pointers[t].pointerId];this._moveCurr.copy(this._getMouseOnCircle(e.x,e.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(mc)}const ne=n=>Math.floor(Math.random()*n),Ne=n=>n[ne(n.length)],ir=n=>"#"+n.toString(16).padStart(6,"0");function gc(n,t,e){const i=n>>16&255,s=n>>8&255,r=n&255,a=t>>16&255,o=t>>8&255,l=t&255,c=Math.round(i+(a-i)*e),u=Math.round(s+(o-s)*e),d=Math.round(r+(l-r)*e);return c<<16|u<<8|d}const sr=1447446,Xi=16250868,Uu=16052712,ox={agamograph:[15022389,16635957,4431943,2001125,9315498],nightRainbow:[14100029,16015414,16765503,1402304,8072383],dizengoff:[14100029,16765503,2390944,3065014,6966419],highContrast:[16717636,51283,2718207,16748800,16771584,11141375],spectrumBand:[15022389,16485376,16635957,4431943,2001125,9315498]},Nu=[Xi,Xi,Uu],lx=[Xi,sr],er=n=>{const t=(n>>16&255)/255,e=(n>>8&255)/255,i=(n&255)/255,s=Math.max(t,e,i),r=Math.min(t,e,i),a=s-r;if(!a)return 0;let o;return s===t?o=(e-i)/a%6:s===e?o=(i-t)/a+2:o=(t-e)/a+4,(o*60+360)%360},zl=Object.values(ox);let hs=zl[0],_c=[...hs,sr],La=[...hs].sort((n,t)=>er(n)-er(t));function xc(n){let t=zl.filter(e=>e!==hs);t.length||(t=zl),hs=t[Math.floor(Math.random()*t.length)],_c=[...hs,sr],La=[...hs].sort((e,i)=>er(e)-er(i))}xc();function ps(n,t){const e=[...n].sort((a,o)=>er(a)-er(o)),i=e.length,s=Math.min(t,i),r=ne(i);return Array.from({length:s},(a,o)=>e[(r+o)%i])}const cx=n=>n?lx:_c,hx=n=>n?Xi:Ne(Nu),Rn=20,me=51;function Fu(n,t){const e=Array(n).fill(Math.floor(t/n));let i=t-e.reduce((s,r)=>s+r,0);for(let s=0;i>0;s=(s+1)%n)e[s]++,i--;for(let s=0;s<n;s++){const r=ne(n),a=ne(n);r!==a&&e[r]>3&&(e[r]--,e[a]++)}return e}function Ou(n,t,e,i){n.fillStyle=ir(i),n.fillRect(t*me,e*me,me+.6,me+.6)}function pn(n,t,e,i,s){for(let r=0;r<i;r++)for(let a=0;a<e;a++)Ou(n,t+a,r,s(a,r))}const Bu=n=>()=>n;function Ha(n,t,e){return(i,s)=>(Math.floor(i/e)+Math.floor(s/e))%2===0?n:t}function Xs(n,t,e){return(i,s)=>n[Math.floor((e?s:i)/t)%n.length]}function kl(n,t,e,i,s){const r=(t-1)/2,a=(e-1)/2;return(o,l)=>{const c=Math.abs(o-r)/Math.max(1,t/2),u=Math.abs(l-a)/Math.max(1,e/2),d=s?(c+u)/2:Math.max(c,u);return n[Math.floor(Math.min(.999,d)*i)%n.length]}}function js(n,t,e){const i=ps(e,2+ne(2)),s=i[1]??e[(e.indexOf(i[0])+1)%e.length];switch(Ne(["checker","stripesV","stripesH","diamond","rect","halves","halves"])){case"checker":return Ha(i[0],s,1+ne(3));case"stripesV":return Xs(i,1+ne(2),!1);case"stripesH":return Xs(i,1+ne(2),!0);case"diamond":return kl(i,n,t,4+ne(4),!0);case"rect":return kl(i,n,t,4+ne(4),!1);default:{if(Math.random()<.6){const a=1+ne(Math.max(1,t-1));return(o,l)=>l<a?i[0]:s}const r=1+ne(Math.max(1,n-1));return a=>a<r?i[0]:s}}}function ux(n,t,e,i,s,r){const a=(i-1)/2,o=(s-1)/2;return(l,c)=>{const u=Math.abs(l-a)/Math.max(1,i/2)+Math.abs(c-o)/Math.max(1,s/2);return u>1?t(l,c):r&&u>=.74?e:n(l,c)}}function zu(n,t,e){const i=(n-1)/2,s=(t-1)/2,r=Math.max(1,Math.floor((n-1)/2)),a=Math.max(1,Math.floor((t-1)/2));let o=1+ne(r),l=1+ne(a);Math.random()<.5&&(l=Math.min(o,a)),o=Math.min(o,r),l=Math.min(l,a);const c=js(n,t,ps(e,2+ne(2))),u=Math.random()<.5?Bu(Ne(e)):js(n,t,ps(e,2)),d=Ne(e),h=Ne(e),p=Ne(["full","hollow","center"]);return(_,S)=>{const f=Math.abs(_-i),m=Math.abs(S-s);if(f>o||m>l)return c(_,S);const M=f>o-1||m>l-1;return p==="hollow"?M?d:c(_,S):p==="center"?M?d:f<=o*.4&&m<=l*.4?h:u(_,S):u(_,S)}}function dx(n,t,e,i){const s=t*me,r=e*me,a=i*me,o=3+ne(3),l=ne(La.length),c=Array.from({length:o},(h,p)=>La[(l+p)%La.length]);Math.random()<.5&&c.reverse();const d=Math.random()<.6?n.createLinearGradient(0,0,0,a):n.createLinearGradient(s,0,s+r,0);c.forEach((h,p)=>d.addColorStop(p/(c.length-1),ir(h))),n.fillStyle=d,n.fillRect(s,0,r,a)}function fx(n,t,e,i,s){pn(n,t,e,i,js(e,i,ps(s,2+ne(2))));const r=t*me,o=Math.max(3,Math.min(e,i)-ne(2))*me/2,l=r+e/2*me,c=i/2*me;n.beginPath(),n.arc(l,c,o,0,Math.PI*2),n.fillStyle=ir(Ne(s)),n.fill()}function px(n,t,e,i,s,r){if(r&&Math.random()<.18){dx(n,t,e,i);return}switch(Ne(["rhombus","rect","pattern","pattern"])){case"rhombus":{const a=Math.random()<.5,o=Math.random()<.5?Bu(Ne(s)):js(e,i,ps(s,2+ne(2))),l=js(e,i,ps(s,2+ne(2)));pn(n,t,e,i,ux(o,l,Ne(s),e,i,a));break}case"rect":pn(n,t,e,i,zu(e,i,s));break;default:pn(n,t,e,i,js(e,i,s))}}function mx(n,t,e,i,s,r){const a=cx(i);n.fillStyle=ir(hx(i)),n.fillRect(0,0,t*me,e*me);const o=3+ne(3),l=Fu(o,t);let c=-1;if(s){c=0;for(let d=1;d<o;d++)l[d]>l[c]&&(c=d)}let u=0;for(let d=0;d<o;d++){const h=l[d];n.save(),n.beginPath(),n.rect(u*me,0,h*me,e*me),n.clip(),d===c?fx(n,u,h,e,a):px(n,u,h,e,a,!i),n.restore(),u+=h}}const Vo=["0001111000011110000","0111111100111111100","0111111111111111100","1111111111111111110","1111111111111111110","1111111111111111110","1111111111111111110","0111111111111111100","0011111111111111000","0001111111111110000","0000111111111100000","0000011111111000000","0000001111110000000","0000000111100000000","0000000011000000000"];function gx(n,t){var o,l,c,u;const e=t?16777215:Ne(Nu),i=t?1118481:Ne(_c.filter(d=>d!==e)),s=Array.from({length:Rn},()=>Array(Rn).fill(!1)),r=1,a=2;for(let d=0;d<Vo.length;d++)for(let h=0;h<Vo[d].length;h++)if(Vo[d][h]==="1"){const p=a+d,_=r+h;p<Rn&&_<Rn&&(s[p][_]=!0)}for(let d=0;d<Rn;d++)for(let h=0;h<Rn;h++){let p=e;s[d][h]?p=i:((o=s[d])!=null&&o[h+1]||(l=s[d])!=null&&l[h-1]||(c=s[d+1])!=null&&c[h]||(u=s[d-1])!=null&&u[h])&&(p=sr),Ou(n,h,d,p)}}const _x=(()=>{let n=null;return()=>{if(n)return n;n=document.createElement("canvas");const t=64;n.width=n.height=t;const e=n.getContext("2d"),i=e.createImageData(t,t);for(let s=0;s<i.data.length;s+=4){const r=118+Math.random()*20;i.data[s]=i.data[s+1]=i.data[s+2]=r,i.data[s+3]=255}return e.putImageData(i,0,0),n}})();function xx(n){const t=n.getContext("2d");t.save(),t.globalAlpha=.14,t.globalCompositeOperation="overlay",t.fillStyle=t.createPattern(_x(),"repeat"),t.fillRect(0,0,n.width,n.height),t.restore()}function ku(n){xx(n);const t=new Za(n);return t.colorSpace=An,t.generateMipmaps=!0,t.minFilter=ki,t.magFilter=$e,t.anisotropy=8,t}function vx(n,t,e){const i=document.createElement("canvas");i.width=i.height=Rn*me;const s=i.getContext("2d");return n?gx(s,t):mx(s,Rn,Rn,t,e),ku(i)}const Mx=[16777215,15657179,15788761],Br=(n,t)=>gc(n,Xi,t),Gu=(n,t)=>gc(n,1450556,t);function Sx(n,t){const e=[];for(let i=0;i<t;i++)e.push(gc(Gu(n,.3),Br(n,.5),t===1?.5:i/(t-1)));return e}function yx(n,t,e,i,s,r){if(s){const u=Xi,d=sr;switch(Ne(["checker","stripesV","stripesH","halves"])){case"checker":pn(n,t,e,i,Ha(u,d,1+ne(3)));break;case"stripesV":pn(n,t,e,i,Xs([u,d],1+ne(2),!1));break;case"stripesH":pn(n,t,e,i,Xs([u,d],1+ne(2),!0));break;default:{const h=1+ne(Math.max(1,i-1));pn(n,t,e,i,(p,_)=>_<h?u:d)}}return}const a=Math.random()<.6?Ne(r):Br(Ne(r),.12+Math.random()*.12),o=Ne(Mx),l=Math.random()<.5?Br(a,.45):Gu(a,.22),c=Math.random()<.4?o:l;switch(Ne(["checker","stripesV","stripesH","rings","halves","rect"])){case"checker":pn(n,t,e,i,Ha(a,c,1+ne(3)));break;case"stripesV":pn(n,t,e,i,Xs([a,l,o],1+ne(2),!1));break;case"stripesH":pn(n,t,e,i,Xs([a,l,o],1+ne(2),!0));break;case"rings":{const u=Sx(a,3+ne(2));pn(n,t,e,i,kl(u,e,i,u.length,Math.random()<.5));break}case"halves":{const u=1+ne(Math.max(1,i-1));pn(n,t,e,i,(d,h)=>h<u?a:c);break}default:pn(n,t,e,i,zu(e,i,[a,l,o]))}}function bx(n,t,e,i,s,r){const a=Ne(r),o=s?Xi:Br(a,.55),l=s?Xi:Br(a,.68);pn(n,t,e,i,Ha(o,l,2));const c=t*me,d=Math.max(3,Math.min(e,i)-ne(2))*me/2,h=c+e/2*me,p=i/2*me;n.beginPath(),n.arc(h,p,d,0,Math.PI*2),n.fillStyle=ir(s?sr:Ne(r)),n.fill()}function Ex(n,t,e,i,s){n.fillStyle=ir(i?16777215:15920866),n.fillRect(0,0,t*me,e*me);const r=ps(hs,2+ne(2)),a=3+ne(3),o=Fu(a,t);let l=-1;if(s){l=0;for(let u=1;u<a;u++)o[u]>o[l]&&(l=u)}let c=0;for(let u=0;u<a;u++){const d=o[u];n.save(),n.beginPath(),n.rect(c*me,0,d*me,e*me),n.clip(),u===l?bx(n,c,d,e,i,r):yx(n,c,d,e,i,r),n.restore(),c+=d}}function ba(n,t,e,i){const s=document.createElement("canvas");s.width=n*me,s.height=t*me;const r=s.getContext("2d");Ex(r,n,t,e,i);const a=r.getImageData(0,Math.floor(s.height/2),s.width,1).data,o=[];for(let l=0;l<n;l++){const u=Math.min(s.width-1,Math.floor((l+.5)*me))*4;o.push(a[u]<<16|a[u+1]<<8|a[u+2])}return{texture:ku(s),colors:o}}function Tx(){const n=new Gi,t=Ne([0,1]),e=t===0?1:0,i=Ne([0,1,2,3]),s=[];for(let u=0;u<4;u++)s[u]=new Or({map:vx(u===t,u===i,u===e)});const r=new Or({color:Uu}),a=[];for(let u=-10;u<10;u++)for(let d=-10;d<10;d++){const h=new gs,p=h.attributes.uv,_=u+10,S=d+10,f=S/Rn,m=(S+1)/Rn,M=_/Rn,A=(_+1)/Rn;p.setXY(0,m,A),p.setXY(1,f,A),p.setXY(2,m,M),p.setXY(3,f,M),p.setXY(4,f,A),p.setXY(5,m,A),p.setXY(6,f,M),p.setXY(7,m,M),p.setXY(8,M,f),p.setXY(9,A,f),p.setXY(10,M,m),p.setXY(11,A,m),p.setXY(12,M,m),p.setXY(13,A,m),p.setXY(14,M,f),p.setXY(15,A,f),p.needsUpdate=!0;const T=new Pe(h,[s[0],s[1],s[2],s[3],r,r]);T.position.set(u,u+1-6,d+.5),a.push({mesh:T,ty:u+1,delay:Math.hypot(u+.5,d+.5)*.045+Math.random()*.12,phase:(u+d)*.35}),n.add(T)}let o,l=null,c=0;return{name:"Agamograph",group:n,camera:[-47,47,0],update:(u,d)=>{const h=Math.min(.05,Math.max(0,u-c));c=u,d&&(n.rotation.y+=.018*h),l===null&&(l=u);const p=u-l;for(const _ of a){const S=Math.min(1,Math.max(0,(p-_.delay)/.9)),f=1-Math.pow(1-S,3),m=.04*Math.sin(u*.6+_.phase)*S;_.mesh.position.y=_.ty-6*(1-f)+m}},dispose:()=>o==null?void 0:o.remove()}}const Ax=typeof navigator<"u"&&(/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);function wx(){let n,t,e,i,s=0;const r=[0,2,4,7,9],a=261.63,o=u=>a*Math.pow(2,u/12);function l(u,d,h,p,_){if(!n)return;const S=n.createOscillator();S.type=_,S.frequency.value=d;const f=n.createGain();f.gain.setValueAtTime(1e-4,u),f.gain.exponentialRampToValueAtTime(p,u+.03),f.gain.exponentialRampToValueAtTime(1e-4,u+h),S.connect(f),f.connect(t),S.start(u),S.stop(u+h+.05)}function c(){if(!n)return;const u=n.currentTime+.05,d=r[Math.floor(Math.random()*r.length)]+(Math.random()<.4?12:0);l(u,o(d),.6,.14,"triangle"),Math.random()<.5&&l(u+.12,o(d+12),.5,.06,"sine"),s%4===0&&l(u,o(r[0]-12),1.4,.1,"sine"),s++}return{start(){if(!n){n=new(window.AudioContext||window.webkitAudioContext),t=n.createGain(),t.gain.value=.2;const d=n.createDelay();d.delayTime.value=.28;const h=n.createGain();h.gain.value=.3;let p=n.destination;if(Ax){const _=n.createMediaStreamDestination();e=document.createElement("audio"),e.playsInline=!0,e.srcObject=_.stream,p=_}t.connect(p),t.connect(d),d.connect(h),h.connect(d),d.connect(p)}n.resume(),e==null||e.play().catch(()=>{});const u=n.createBufferSource();u.buffer=n.createBuffer(1,1,22050),u.connect(n.destination),u.start(0),c(),i===void 0&&(i=window.setInterval(c,360))},stop(){i!==void 0&&(clearInterval(i),i=void 0),e==null||e.pause(),n==null||n.suspend()}}}const Rx=`
  varying vec3 vWorldPos;
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  }
`,Cx=`
  uniform vec3 color;
  uniform float time;
  uniform float seed;
  uniform mat4 invModelMatrix;
  uniform vec3 scale;
  uniform vec4 noiseScale;
  uniform float magnitude;
  uniform float lacunarity;
  uniform float gain;
  uniform float uIntensity;
  uniform sampler2D fireTex;
  varying vec3 vWorldPos;

  vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  float turbulence(vec3 p){
    float sum = 0.0; float freq = 1.0; float amp = 1.0;
    for(int i = 0; i < OCTIVES; i++){
      sum += abs(snoise(p * freq)) * amp;
      freq *= lacunarity;
      amp *= gain;
    }
    return sum;
  }

  vec4 samplerFire(vec3 p, vec4 scl){
    vec2 st = vec2(sqrt(dot(p.xz, p.xz)), p.y);
    if(st.x <= 0.0 || st.x >= 1.0 || st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
    p.y -= (seed + time) * scl.w;
    p *= scl.xyz;
    st.y += sqrt(st.y) * magnitude * turbulence(p);
    if(st.y <= 0.0 || st.y >= 1.0) return vec4(0.0);
    return texture2D(fireTex, st);
  }

  vec3 localize(vec3 p){ return (invModelMatrix * vec4(p, 1.0)).xyz; }

  void main(){
    vec3 rayPos = vWorldPos;
    vec3 rayDir = normalize(rayPos - cameraPosition);
    float rayLen = 0.0288 * length(scale.xyz);
    vec4 col = vec4(0.0);
    for(int i = 0; i < ITERATIONS; i++){
      rayPos += rayDir * rayLen;
      vec3 lp = localize(rayPos);
      lp.y += 0.5;
      lp.xz *= 2.0;
      col += samplerFire(lp, noiseScale);
    }
    col.a = col.r;
    gl_FragColor = col * uIntensity;
  }
`;function Px(n,t){n.magFilter=n.minFilter=$e,n.wrapS=n.wrapT=ei;const e=new on({defines:{ITERATIONS:"20",OCTIVES:"3"},uniforms:{fireTex:{value:n},color:{value:new _t(15658734)},time:{value:0},seed:{value:Math.random()*19.19},invModelMatrix:{value:new Me},scale:{value:new D(1,1,1)},noiseScale:{value:new Ae(1,2,1,.3)},magnitude:{value:1.3},lacunarity:{value:2},gain:{value:.5},uIntensity:{value:1}},vertexShader:Rx,fragmentShader:Cx,transparent:!0,depthWrite:!1,depthTest:!0}),i=new Pe(new gs(1,1,1),e);return i.updateFire=(s,r)=>{i.updateMatrixWorld(),e.uniforms.invModelMatrix.value.copy(i.matrixWorld).invert(),e.uniforms.time.value=s,e.uniforms.scale.value=i.scale,e.uniforms.uIntensity.value=r},i}function Dx(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.4,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64),new Za(t)}function Lx(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.55,"rgba(255,255,255,0.95)"),i.addColorStop(.78,"rgba(255,255,255,0.3)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64),new Za(t)}function Wo(n){return new on({uniforms:{uMap:{value:n},uOpacity:{value:1},uScale:{value:800},uTint:{value:new _t(1,1,1)}},transparent:!0,depthWrite:!1,vertexShader:`
      attribute float aSize;
      attribute float aAlpha;
      attribute vec3 aColor;
      uniform float uScale;
      varying float vAlpha;
      varying vec3 vColor;
      void main(){
        vAlpha = aAlpha;
        vColor = aColor;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uScale / max(0.1, -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform sampler2D uMap;
      uniform float uOpacity;
      uniform vec3 uTint;
      varying float vAlpha;
      varying vec3 vColor;
      void main(){
        float a = texture2D(uMap, gl_PointCoord).a;
        if (a < 0.01) discard;
        gl_FragColor = vec4(vColor * uTint, a * vAlpha * uOpacity);
      }
    `})}function Ix(n=Math.random()*1e3){const t=(o,l,c)=>{const u=Math.sin(o*127.1+l*311.7+c*74.7+n)*43758.5453;return u-Math.floor(u)},e=o=>o*o*o*(o*(o*6-15)+10),i=(o,l,c)=>o+(l-o)*c,s=(o,l,c)=>{const u=Math.floor(o),d=Math.floor(l),h=Math.floor(c),p=e(o-u),_=e(l-d),S=e(c-h);return i(i(i(t(u,d,h),t(u+1,d,h),p),i(t(u,d+1,h),t(u+1,d+1,h),p),_),i(i(t(u,d,h+1),t(u+1,d,h+1),p),i(t(u,d+1,h+1),t(u+1,d+1,h+1),p),_),S)};return{fbm:(o,l,c)=>{let u=0,d=.5,h=1;for(let p=0;p<4;p++)u+=d*s(o*h,l*h,c*h),d*=.5,h*=2.03;return u},sstep:(o,l,c)=>{const u=Math.min(1,Math.max(0,(c-o)/(l-o)));return u*u*(3-2*u)}}}const Ux=(n,t)=>{n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("void main() {",`varying vec3 vOrbN;
varying vec3 vOrbP;
void main() {`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOrbN = normalize(normalMatrix * normal);
vOrbP = (modelViewMatrix * vec4(position, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("void main() {",`varying vec3 vOrbN;
varying vec3 vOrbP;
void main() {`).replace("#include <opaque_fragment>",`outgoingLight *= ${(1-t).toFixed(2)} + ${t.toFixed(2)} * abs(dot(normalize(vOrbN), normalize(-vOrbP)));
#include <opaque_fragment>`)}},Hu=(n,t)=>{const e=new Hr(n,64,44),i=e.attributes.position,s=new Float32Array(i.count*3),r=new D,a=new _t;for(let l=0;l<i.count;l++){r.fromBufferAttribute(i,l);const c=t(r,a);if(c){const u=(n+c)/n;i.setXYZ(l,r.x*u,r.y*u,r.z*u)}s[l*3]=a.r,s[l*3+1]=a.g,s[l*3+2]=a.b}e.setAttribute("color",new Te(s,3)),e.computeVertexNormals();const o=new Or({vertexColors:!0});return Ux(o,.45),new Pe(e,o)};function Nx(n){const t=Hu(25,(e,i)=>{const s=n.fbm(e.x*.14,e.y*.14,e.z*.14),r=Math.min(1,Math.max(.55,.78+.5*(s-.5)));return i.setRGB(Math.pow(r,.4),.99*Math.pow(r,.8),.84*Math.pow(r,1.6)),0});{const i=document.createElement("canvas");i.width=i.height=128;const s=i.getContext("2d"),r=s.createRadialGradient(128/2,128/2,128*.3,128/2,128/2,128/2);r.addColorStop(0,"rgba(255,235,160,0.32)"),r.addColorStop(1,"rgba(255,235,160,0)"),s.fillStyle=r,s.fillRect(0,0,128,128);const a=new gu(new sc({map:new Za(i),transparent:!0,depthWrite:!1}));a.scale.set(80,80,1),t.add(a)}return t}function Fx(n){return Hu(19,(t,e)=>{const i=n.fbm(t.x*.045,t.y*.045,t.z*.045),s=n.fbm(t.x*.3+40,t.y*.3,t.z*.3),r=Math.min(1,Math.max(.35,.88+.22*(s-.5)-.34*n.sstep(.52,.72,i)));return e.setRGB(Math.min(1,.92*r+.1),Math.min(1,.93*r+.12),Math.min(1,.96*r+.16)),(s-.5)*.9})}function Ox(n,t,e){const i=new Ws({color:16777215,vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,dithering:!0}),s=new Hr(t,160,112),r=s.attributes.position,a=new Float32Array(r.count*3),o=new _t(7038298),l=new _t(9078144),c=new _t(11050895),u=new _t(9078144),d=new _t;for(let p=0;p<r.count;p++){const _=r.getX(p),S=r.getY(p),f=r.getZ(p),m=n.fbm(_*.011,S*.011,f*.011),M=t*Math.acos(Math.min(1,Math.max(-1,S/t))),A=n.sstep(40,120,M),T=(m-.5)*22*A,C=(t+T)/t;r.setXYZ(p,_*C,S*C,f*C),m<.5?d.lerpColors(o,l,m*2):d.lerpColors(l,c,(m-.5)*2),d.lerp(u,1-A),a[p*3]=d.r,a[p*3+1]=d.g,a[p*3+2]=d.b}s.setAttribute("color",new Te(a,3)),s.computeVertexNormals();const h=new Pe(s,i);return h.position.y=e-t-.6,h}const Bx=`
  vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
  float simplex3(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;function zx(n,t){const e=new Su().load("cloud.png"),i=new on({uniforms:{uMap:{value:e},uScale:{value:800},uSun:{value:new D(0,1,0)},uSunCol:{value:new _t(1,1,1)},uSunI:{value:1},uCenter:{value:new D},uDay:{value:1},uDusk:{value:0},uTime:{value:0}},transparent:!0,depthWrite:!1,vertexShader:`
      attribute float aSize;
      attribute float aRot;
      uniform float uScale;
      uniform vec3 uSun;
      uniform vec3 uSunCol;
      uniform float uSunI;
      uniform vec3 uCenter;
      uniform float uDay;
      uniform float uDusk;
      uniform float uTime;
      varying float vAlpha;
      varying vec3 vColor;
      varying float vRot;
      varying float vSeed;
      ${Bx}
      void main(){
        vec3 world = (modelMatrix * vec4(position, 1.0)).xyz;
        vec3 rel = world - uCenter;
        // ONE broad noise octave; alpha is just clamp(n) — a soft 0..1 ramp
        // over the whole amplitude (a steep smoothstep gate here made
        // crisp-edged "systems" that read as popcorn instead of mist)
        float n = simplex3(rel / 130.0 + uTime * 0.02);
        vAlpha = 0.38 * clamp(n, 0.0, 1.0);
        vRot = aRot + n * 2.0; // the field also twists the sprite — free variety
        vSeed = aRot; // STATIC per-sprite dither seed — see the fragment shader
        float sunL = max(0.0, dot(normalize(rel), uSun));
        // pow lifts mid angles (most of the day side reads bright, not just
        // the subsolar point); uSunI kills the term at night — without it the
        // whole night veil glowed amber, since clouds ignore key.intensity
        float lit = pow(sunL, 0.6) * uSunI;
        float floorL = 0.22 + 0.48 * uDay; // never black, but a faint gray at night
        // lit ridges overshoot past 1 so the texture's dense cores clip to
        // actual white (a hard cap left even noon clouds a dirty gray)
        float bright = floorL + (1.3 - floorL) * lit;
        // ambient part stays neutral; the SUN part carries the key colour
        // (warm white at noon, amber near the horizon) deepened toward true
        // sunset orange as duskL peaks — so the sun-facing veil catches fire
        vec3 tint = uSunCol * mix(vec3(1.0), vec3(1.15, 0.62, 0.34), uDusk);
        vColor = min(vec3(1.0), vec3(floorL) + (bright - floorL) * tint);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = vAlpha < 0.01 ? 0.0 : aSize * uScale / max(0.1, -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform sampler2D uMap;
      varying float vAlpha;
      varying vec3 vColor;
      varying float vRot;
      varying float vSeed;
      void main(){
        vec2 uv = gl_PointCoord - 0.5;
        uv = vec2(uv.x * cos(vRot) - uv.y * sin(vRot), uv.x * sin(vRot) + uv.y * cos(vRot)) + 0.5;
        float a = texture2D(uMap, uv).a;
        float alpha = a * vAlpha;
        if (alpha < 0.01) discard;
        // dither colour AND alpha, seeded per-sprite rather than just
        // per-pixel: a screen-only hash gives every stacked sprite layer at a
        // pixel the SAME offset, so the quantization error correlates across
        // layers instead of cancelling — the veil's smooth optical depth
        // gradient toward the limb terraces into rings that crawl as the
        // field drifts. The seed must be the STATIC aRot (via vSeed), never
        // the drifting vRot: the hash is chaotic, so a seed that moves with
        // the weather field re-rolls every sprite's noise pattern every
        // frame — ~30 stacked re-rolling layers read as full-veil shimmer.
        float dn = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + vSeed * 39.347) * 43758.5453);
        gl_FragColor = vec4(vColor + (dn - 0.5) * (2.0 / 255.0), alpha + (dn - 0.5) * (1.5 / 255.0));
      }
    `}),s=[],r=[],a=[];let o=0;for(;o<3e3;){const d=new D(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1),h=d.length();h>1||h<1e-4||(d.divideScalar(h),!(d.y>.85)&&(d.multiplyScalar(n+6+Math.pow(Math.random(),2)*34),s.push(d.x,d.y,d.z),r.push(90+Math.random()*80),a.push(Math.random()*Math.PI*2),o++))}const l=new Be;l.setAttribute("position",new Se(s,3)),l.setAttribute("aSize",new Se(r,1)),l.setAttribute("aRot",new Se(a,1));const c=new Pa(l,i);c.renderOrder=2,c.position.y=t-n-.6;const u=new D;return{points:c,update:(d,h,p,_,S,f)=>{i.uniforms.uScale.value=d.domElement.height,i.uniforms.uSun.value.copy(S),i.uniforms.uSunCol.value.copy(h.color),i.uniforms.uSunI.value=Math.max(p,_),c.getWorldPosition(u),i.uniforms.uCenter.value.copy(u),i.uniforms.uDay.value=p,i.uniforms.uDusk.value=_,i.uniforms.uTime.value+=f,c.rotation.y+=.006*f},dispose:()=>{e.dispose(),i.dispose()}}}function kx(n){const t={uZenith:{value:new _t(3043e3)},uHorizon:{value:new _t(12113128)},uNight:{value:0},uTime:{value:0},uSunDir:{value:new D(0,1,0)},uGlow:{value:0}},e=new on({uniforms:t,side:gn,depthWrite:!1,vertexShader:`
      varying vec3 vDir;
      void main(){
        vDir = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uZenith, uHorizon;
      uniform float uNight, uTime, uGlow;
      uniform vec3 uSunDir;
      varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);
        // full-sphere gradient, mirrored below the equator: haze band at the
        // middle fading to zenith toward BOTH poles. The old clamp(d.y)+pow
        // version was flat below y=0 and had infinite slope at y=0, which drew
        // a visible "second horizon" line in the sky above the planet's limb.
        // smoothstep(h)^0.75 keeps zero slope at the equator — no crease.
        float h = abs(d.y);
        float t = pow(h * h * (3.0 - 2.0 * h), 0.75);
        vec3 sky = mix(uHorizon, uZenith, t);
        // golden-hour glow pooled around the sun's azimuth
        float sunAmt = max(dot(d, uSunDir), 0.0);
        sky += uGlow * vec3(1.0, 0.48, 0.18) * pow(sunAmt, 5.0) * (1.0 - h * 0.8) * 0.65;
        // stars: a uniform 3D cell hash over the whole celestial sphere — no
        // atan seam, no pinching at the zenith, and identical density in every
        // direction; the opaque planet simply hides the ones behind its limb
        if (uNight > 0.02) {
          vec3 sc = d * 22.0;
          vec3 cell = floor(sc);
          float hs = fract(sin(dot(cell, vec3(127.1, 311.7, 74.7))) * 43758.5453);
          if (hs > 0.88) {
            vec3 sp = vec3(
              fract(sin(dot(cell + 7.0,  vec3(269.5, 183.3, 246.1))) * 43758.5453),
              fract(sin(dot(cell + 13.0, vec3(113.5, 271.9, 124.6))) * 43758.5453),
              fract(sin(dot(cell + 31.0, vec3(419.2, 371.9, 168.2))) * 43758.5453)
            ) * 0.6 + 0.2;
            float sd = length(fract(sc) - sp);
            float tw = 0.7 + 0.3 * sin(uTime * (2.0 + 4.0 * hs) + hs * 40.0);
            sky += smoothstep(0.10, 0.0, sd) * tw * uNight * (0.5 + 0.5 * hs) * vec3(0.85, 0.88, 0.95);
          }
        }
        // dither: ±1 LSB of screen-space noise breaks up 8-bit banding in the
        // smooth gradient — without it, dark dusk/night skies show visible
        // stepped bands (worst on OLED, and AirPlay compression amplifies them
        // into crawling blocks)
        float dn = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
        sky += (dn - 0.5) / 160.0;
        gl_FragColor = vec4(sky, 1.0);
      }
    `}),i=new Pe(new Hr(n*3.2,48,32),e);return i.renderOrder=-1,i.frustumCulled=!1,{mesh:i,uniforms:t}}class Ja extends Pe{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;const i=this,s=e.color!==void 0?new _t(e.color):new _t(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||Ja.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new yi,d=new D,h=new D,p=new D,_=new Me,S=new D(0,0,-1),f=new Ae,m=new D,M=new D,A=new Ae,T=new Me,C=new qn(r,a,{samples:c,type:ai}),E=new on({name:l.name!==void 0?l.name:"unspecified",uniforms:Mu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=C.texture,E.uniforms.color.value=s,E.uniforms.textureMatrix.value=T,this.material=E,this.onBeforeRender=function(R,x,b){const P=this._getReflectionCamera(b);if(h.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(b.matrixWorld),_.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(_),m.subVectors(h,p),m.dot(d)>0===!0&&this.forceUpdate===!1)return;m.reflect(d).negate(),m.add(h),_.extractRotation(b.matrixWorld),S.set(0,0,-1),S.applyMatrix4(_),S.add(p),M.subVectors(h,S),M.reflect(d).negate(),M.add(h),P.position.copy(m),P.up.set(0,1,0),P.up.applyMatrix4(_),P.up.reflect(d),P.lookAt(M),P.far=b.far,P.updateMatrixWorld(),P.projectionMatrix.copy(b.projectionMatrix),T.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),T.multiply(P.projectionMatrix),T.multiply(P.matrixWorldInverse),T.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,h),u.applyMatrix4(P.matrixWorldInverse),f.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const I=P.projectionMatrix;P.isOrthographicCamera?(A.x=(Math.sign(f.x)+I.elements[8])/I.elements[0],A.y=(Math.sign(f.y)+I.elements[9])/I.elements[5],A.z=-b.far,A.w=1):(A.x=(Math.sign(f.x)+I.elements[8])/I.elements[0],A.y=(Math.sign(f.y)+I.elements[9])/I.elements[5],A.z=-1,A.w=(1+I.elements[10])/I.elements[14]),f.multiplyScalar(2/f.dot(A)),I.elements[2]=f.x,I.elements[6]=f.y,P.isOrthographicCamera?(I.elements[10]=f.z-o,I.elements[14]=f.w-1):(I.elements[10]=f.z+1-o,I.elements[14]=f.w),i.visible=!1;const V=R.getRenderTarget(),W=R.xr.enabled,U=R.shadowMap.autoUpdate;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(C),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(x,P),R.xr.enabled=W,R.shadowMap.autoUpdate=U,R.setRenderTarget(V);const G=b.viewport;G!==void 0&&R.state.viewport(G),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),i.material.dispose()},this._getReflectionCamera=function(R){let x=this._reflectionCameras.get(R);return x===void 0&&(x=R.clone(),this._reflectionCameras.set(R,x)),x}}}Ja.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function Gx(n,t,e){const i=new dc(512),s=new Eu(.5,2e3,i);s.position.y=t+.5;const r=[],a=new on({uniforms:{uTime:{value:0},envMap:{value:i.texture}},side:mn,vertexShader:`
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
        float fres = 0.5 + 0.18 * pow(1.0 - abs(dot(N, -V)), 3.0); // stronger, more visible
        vec3 col = mix(water, env, fres);
        // anti-banding dither (dark water gradients step visibly on OLED)
        col += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 160.0;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),o=new oc(n,96);let l;if(e){const u={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uImpactR:{value:new D(.5,.55,.6)},uImpactA:{value:new D(0,0,0)},uNight:{value:0},uSky:{value:new _t(13422288)}},vertexShader:`
        uniform mat4 textureMatrix;
        varying vec4 vUv;     // projective coords into the reflection texture
        varying vec2 vLocal;  // disc-local uv for the water ripple
        varying vec3 vWorldPos; // for the Fresnel view angle
        void main() {
          vLocal = uv;
          vUv = textureMatrix * vec4(position, 1.0);
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform vec3 uImpactR;
        uniform vec3 uImpactA;
        uniform float uNight;
        uniform vec3 uSky;
        varying vec4 vUv;
        varying vec2 vLocal;
        varying vec3 vWorldPos;
        void main() {
          // summed directional ripples (no multiplicative blobs) → smooth
          // flowing water rather than isolated spots; low amplitude = subtle
          float w = sin(vLocal.x * 7.0 + uTime * 0.5)
                  + sin(vLocal.y * 9.0 - uTime * 0.45)
                  + 0.7 * sin((vLocal.x + vLocal.y) * 13.0 + uTime * 0.65)
                  + 0.5 * sin((vLocal.x - vLocal.y) * 17.0 - uTime * 0.6);
          // expanding rings around each jet-ring's landing radius, so the pool
          // visibly reacts where the falling water actually meets it
          float dc = length(vLocal - vec2(0.5)) * 2.0;
          float rings =
              uImpactA.x * exp(-24.0 * abs(dc - uImpactR.x)) * sin((dc - uImpactR.x) * 80.0 - uTime * 7.0)
            + uImpactA.y * exp(-24.0 * abs(dc - uImpactR.y)) * sin((dc - uImpactR.y) * 80.0 - uTime * 7.4)
            + uImpactA.z * exp(-24.0 * abs(dc - uImpactR.z)) * sin((dc - uImpactR.z) * 80.0 - uTime * 6.6);
          float m = clamp(0.5 + 0.1 * w + rings, 0.0, 1.0);
          vec3 deep  = vec3(0.12, 0.36, 0.62);
          vec3 light = vec3(0.34, 0.66, 0.88);
          // water takes the sky's tint (golden at dusk, blue-gray at night) and
          // darkens after dark — open water is mostly reflected sky
          vec3 water = mix(deep, light, m) * mix(1.0, 0.5, uNight);
          water = mix(water, uSky * 0.55, 0.22);
          vec2 ripple = vec2(sin(vLocal.y * 28.0 + uTime * 1.3),
                             cos(vLocal.x * 28.0 - uTime * 1.1)) * 0.006
                      + vec2(rings * 0.01);
          vec4 refl = texture2DProj(tDiffuse, vUv + vec4(ripple, 0.0, 0.0));
          // Fresnel: near-vertical views see into the water (deep colour),
          // grazing views become mostly mirror — like a real pool
          vec3 V = normalize(cameraPosition - vWorldPos);
          float fres = 0.18 + 0.55 * pow(1.0 - max(V.y, 0.0), 2.5);
          // contact shading: the water darkens toward the tower base, which
          // grounds the sculpture in the pool instead of floating on a disc
          float ao = 1.0 - 0.22 * smoothstep(0.95, 0.55, dc);
          vec3 col = mix(water, refl.rgb, fres) * ao;
          // anti-banding dither (dark water gradients step visibly on OLED)
          col += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) / 160.0;
          gl_FragColor = vec4(col, 1.0);
        }
      `};l=new Ja(o,{textureWidth:1024,textureHeight:1024,clipBias:.003,shader:u})}else l=new Pe(o,a);l.rotation.x=-Math.PI/2,l.position.y=t,r.push(l);const c=new Gi;{const d=t+.6,h=t-2.6,p=new Ws({color:10130570,side:mn,dithering:!0}),_=new Pe(new Qs(n+1.7,n+1.7,d-h,96,1,!0),p);_.position.y=(d+h)/2;const S=new Pe(new Qs(n,n,d-(t-1),96,1,!0),p);S.position.y=(d+t-1)/2;const f=new Pe(new lc(n,n+1.7,96),p);f.rotation.x=-Math.PI/2,f.position.y=d,c.add(_,S,f)}return{pool:l,crisp:e,cubeCam:s,cubeRT:i,waterMeshes:r,basin:c}}const Bh=.08,vc=()=>({crisp:!0});function Hx(n=vc(),t=!1){const e=new Gi,i=[7,12,16,10.5,6.5],s=[3,3.6,6.5,4,3],r=i.length,a=.3,o=s.reduce(($,Qt)=>$+Qt,0)+a*(r-1),l=.9,c=2*l/Math.sin(Math.PI/3),u=t?!1:Math.random()<Bh,d=13422288,h=Math.max(...i),p=n.crisp,_=[];let S=-o/2;for(let $=0;$<r;$++)_[$]=S+s[$]/2,S+=s[$]+a;const f=-o/2-.5,m=new Rf(16777215,13617339,1.1),M=new oh(16773856,4.5);M.position.set(60,90,40);const A=new oh(14674175,.2);A.position.set(-50,40,-60),e.add(m,M,A);const T=27,C=620,E=32*Math.PI/180,R=Ix(),x=Nx(R),b=Fx(R),P=Math.PI,w=1;e.add(x,b);const I=new D,V=Math.random(),W=4+Math.random()*1.2,U=1.1+Math.random()*.3,G=new _t(12113128),z=new _t(5396582),tt=new _t().lerpColors(new _t(14659722),new _t(16736304),V),it=new _t(16773856),ct=new _t(16752478),Tt=new _t(16777215),X=new _t(9674944),J=new _t(11577496),St=new _t(4869981),wt=new _t(14674175),j=new _t(12175598),pt=new _t().lerpColors(new _t(16764826),new _t(16748624),V),ht=new _t(16774088),Ut=new _t(16754788),Ot=new _t;let Dt=10,xe=0,qt=!1;const ce=new _t(3043e3),_e=new _t(2436157),jt=new _t().lerpColors(new _t(7895208),new _t(6301066),V),Le=new _t,ve=kx(C),Fe=ve.uniforms;e.add(ve.mesh);const N=320,Ue=Ox(R,N,f);e.add(Ue);const Wt=zx(N,f);e.add(Wt.points);const ue=new Ws({color:7301726,transparent:!0,opacity:.55,depthWrite:!1,side:mn,dithering:!0}),mt=_[r-1]-s[r-1]/2,we=mt-f,y=new Pe(new Qs(3.5,3.5,we,32),ue);y.position.y=(mt+f)/2,e.add(y);const{pool:g,cubeCam:O,cubeRT:Z,waterMeshes:et,basin:at}=Gx(h+l+6,f,p);e.add(g,O,at);const lt=[],Y=[];for(let $=0;$<r;$++){const Qt=new Gi,zt=i[$],he=s[$],De=_[$],cn=u,qe=zt+l,hn=zt-l,ke=Math.max(8,Math.round(Math.PI/Math.asin(Math.min(.99,c/(2*hn))))),Dn=2*ke,zn=Math.max(5,Math.round(he*1.4)),Ji=ba(ke,zn,cn,Math.random()<.6),Qi=ba(ke,zn,cn,Math.random()<.6),ui=new Ws({map:Ji.texture,side:mn}),Ms=new Ws({map:Qi.texture,side:mn}),fr=Ge=>{const un=Ge*Math.PI/ke,xn=Ge%2===0?qe:hn;return new D(xn*Math.cos(un),De,xn*Math.sin(un))},Ss=new Pe(new Qs(hn-.05,hn-.05,he-.1,Math.max(32,ke)),ue);Ss.position.set(0,De,0),Qt.add(Ss);for(let Ge=0;Ge<Dn;Ge++){const un=fr(Ge),xn=fr(Ge+1),Zn=xn.x-un.x,vn=xn.z-un.z,pi=Math.hypot(Zn,vn),Kn=Math.floor(Ge/2),mi=Kn/ke,gi=(Kn+1)/ke,ts=new Gr(pi,he),kn=ts.attributes.uv;kn.setXY(0,mi,1),kn.setXY(1,gi,1),kn.setXY(2,mi,0),kn.setXY(3,gi,0),kn.needsUpdate=!0;const es=new Pe(ts,Ge%2===0?ui:Ms);es.position.set((un.x+xn.x)/2,De,(un.z+xn.z)/2),es.rotation.y=Math.atan2(-vn,Zn),Qt.add(es)}const pr=new Ws({vertexColors:!0,side:mn}),sn=Math.max(.3,hn-.1),di=Ge=>{const un=[],xn=[];for(let vn=0;vn<Dn;vn++){const pi=vn*Math.PI/ke,Kn=(vn+1)*Math.PI/ke,mi=vn%2===0?qe:hn,gi=(vn+1)%2===0?qe:hn,ts=mi*Math.cos(pi),kn=mi*Math.sin(pi),es=gi*Math.cos(Kn),mr=gi*Math.sin(Kn),nt=sn*Math.cos(pi),Vt=sn*Math.sin(pi),Gt=sn*Math.cos(Kn),Xt=sn*Math.sin(Kn);un.push(ts,Ge,kn,es,Ge,mr,Gt,Ge,Xt),un.push(ts,Ge,kn,Gt,Ge,Xt,nt,Ge,Vt);const je=(vn%2===0?Ji.colors:Qi.colors)[Math.floor(vn/2)]??8947848,Ee=(je>>16&255)/255,ys=(je>>8&255)/255,Ln=(je&255)/255;for(let Gn=0;Gn<6;Gn++)xn.push(Ee,ys,Ln)}const Zn=new Be;return Zn.setAttribute("position",new Se(un,3)),Zn.setAttribute("color",new Se(xn,3)),Zn.computeVertexNormals(),Zn},fi=di(De+he/2),Wr=di(De-he/2);Qt.add(new Pe(fi,pr)),Qt.add(new Pe(Wr,pr)),e.add(Qt),lt.push(Qt),Y.push({P:ke,rows:zn,N:Dn,matA:ui,matB:Ms,capGeos:[fi,Wr]})}const K=()=>(Math.random()<.5?1:-1)*(.036+Math.random()*.072),gt=lt.map(K),bt=gt.slice(),ut=$=>{const Qt=document.createElement("canvas");return Qt.width=$.width,Qt.height=$.height,Qt.getContext("2d").drawImage($,0,0),Qt},ot=($,Qt,zt)=>{const he=[];for(let De=0;De<zt;De++){const cn=(De%2===0?$:Qt)[Math.floor(De/2)]??8947848,qe=(cn>>16&255)/255,hn=(cn>>8&255)/255,ke=(cn&255)/255;for(let Dn=0;Dn<6;Dn++)he.push(qe,hn,ke)}return new Float32Array(he)};let It=null,kt=!1;const Jt=22,L=[2,3,4],rt=[];L.forEach(($,Qt)=>{const zt=i[$]+l,he=_[$]+s[$]/2,De=Math.max(12,Math.round(2*Math.PI*zt/3)),cn=26;for(let qe=0;qe<De;qe++){const hn=qe/De*Math.PI*2,ke=Math.cos(hn),Dn=Math.sin(hn),zn=1.5+Math.random()*.3,Ji=7+Math.random()*2,Qi=4+Math.random()*1.5;for(let ui=0;ui<cn;ui++)rt.push({ox:zt*ke,oy:he,oz:zt*Dn,cx:ke,cz:Dn,ph:ui/cn*zn,life:zn,up:Ji,out:Qi,grp:Qt})}});const q=_[r-1]+s[r-1]/2,Mt=10;for(let $=0;$<Mt;$++){const Qt=$/Mt*Math.PI*2+Math.random()*.3,zt=2.8+Math.random()*.8,he=20+Math.random()*5,De=4+Math.random()*2.5,cn=84;for(let qe=0;qe<cn;qe++)rt.push({ox:0,oy:q,oz:0,cx:Math.cos(Qt),cz:Math.sin(Qt),ph:qe/cn*zt,life:zt,up:he,out:De,grp:3})}const st=rt.length,Q=Dx(),At=Lx(),Nt=new Float32Array(st*3),Re=new Float32Array(st),ae=new Float32Array(st),_n=new Float32Array(st*3),yn=new Float32Array(st),Ri=.35;for(let $=0;$<st;$++){Nt[$*3+1]=-9999,yn[$]=(Math.random()-.5)*.5,Re[$]=.3+Math.random()*.22,ae[$]=.7+Math.random()*.3;const Qt=Math.random()*.3;_n[$*3]=.25+Qt*.5,_n[$*3+1]=.6+Qt*.35,_n[$*3+2]=.84+Qt*.16}const Ci=new Be;Ci.setAttribute("position",new Te(Nt,3)),Ci.setAttribute("aSize",new Te(Re,1)),Ci.setAttribute("aAlpha",new Te(ae,1)),Ci.setAttribute("aColor",new Te(_n,3));const Zi=Wo(At),_s=new Pa(Ci,Zi);e.add(_s);const Ie=420,xs=new Float32Array(Ie),rr=new Float32Array(Ie),ar=new Float32Array(Ie),Ki=new Float32Array(Ie),or=new Float32Array(Ie),oi=new Float32Array(Ie).fill(9),$i=new Float32Array(Ie).fill(1),li=new Float32Array(Ie*3),Vr=new Float32Array(Ie),lr=new Float32Array(Ie),vs=new Float32Array(Ie*3);for(let $=0;$<Ie;$++)li[$*3+1]=-9999,vs[$*3]=.62,vs[$*3+1]=.82,vs[$*3+2]=.95;let cr=0;const to=($,Qt)=>{const zt=cr;cr=(cr+1)%Ie,xs[zt]=$,rr[zt]=Qt;const he=Math.random()*Math.PI*2,De=.4+Math.random()*1.1;ar[zt]=Math.cos(he)*De,or[zt]=Math.sin(he)*De,Ki[zt]=2+Math.random()*3,oi[zt]=0,$i[zt]=.3+Math.random()*.3,Vr[zt]=.22+Math.random()*.2},ci=new Be;ci.setAttribute("position",new Te(li,3)),ci.setAttribute("aSize",new Te(Vr,1)),ci.setAttribute("aAlpha",new Te(lr,1)),ci.setAttribute("aColor",new Te(vs,3));const hr=Wo(At),v=new Pa(ci,hr);e.add(v);const F=new Uint8Array(st),H=($,Qt)=>{const zt=Math.sin($*.22+Qt);return zt>.55?1+(zt-.55)/.45*2.6:1},B=($,Qt)=>{const he=(($+Qt*2.3)%7+7)%7/7;return(.2+.8*(he<.75?he/.75:1-(he-.75)/.25))*H($,Qt*1.7)},k=$=>{const zt=($%13+13)%13/13;let he;if(zt<.5)he=.2+.8*(zt/.5);else if(zt<.65)he=1-(zt-.5)/.15;else return 0;return he*Math.min(1.4,H($,4))},dt=q+.2,yt=3.2,ft=19,vt=Px(new Su().load("fire-lut.png"));vt.scale.set(yt,ft,yt),vt.position.set(0,dt+ft/2,0);const Rt=vt.material;Rt.uniforms.magnitude.value=2.1,Rt.uniforms.lacunarity.value=2.6,Rt.uniforms.noiseScale.value.set(1,2,1,.55),e.add(vt);const Bt=$=>.55+.3*Math.sin($*1.7)+.15*Math.sin($*5.3),Lt=26,Pt=new Float32Array(Lt),oe=new Float32Array(Lt),Ce=new Float32Array(Lt),ye=new Float32Array(Lt),se=new Float32Array(Lt),ze=new Float32Array(Lt),Et=new Float32Array(Lt),tn=new Float32Array(Lt),Zt=new Float32Array(Lt*3),ln=new Float32Array(Lt),bn=new Float32Array(Lt),en=new Float32Array(Lt*3);for(let $=0;$<Lt;$++)Pt[$]=Math.random()*Math.PI*2,oe[$]=.2+Math.random()*.9,Ce[$]=dt+1+Math.random()*4,ye[$]=3.5+Math.random()*3,se[$]=1.1+Math.random()*1.3,ze[$]=Math.random()*se[$],Et[$]=(Math.random()-.5)*3,tn[$]=.2+Math.random()*.2,Zt[$*3+1]=-9999;const nn=new Be;nn.setAttribute("position",new Te(Zt,3)),nn.setAttribute("aSize",new Te(ln,1)),nn.setAttribute("aAlpha",new Te(bn,1)),nn.setAttribute("aColor",new Te(en,3));const re=Wo(At);re.blending=Na;const be=new Pa(nn,re);e.add(be);const Pn=new Pf(16747068,0,60,2);Pn.position.set(0,dt+4,0),e.add(Pn);const ie=new gu(new sc({map:Q,color:16749888,transparent:!0,opacity:0,blending:Na,depthWrite:!1}));ie.scale.set(11,14,1),ie.position.set(0,dt+6,0),e.add(ie);let On=!0,hi=!0,Bn=1,jn=1,Tc=0,ur=0,eo=0,dr=0,no=0,Ac=!1;const io=wx();return{name:"Fountain",group:e,background:d,camera:[113,20,113],status:()=>{const $=Math.floor(Dt),Qt=Math.floor(Dt%1*60);return`${String($).padStart(2,"0")}:${String(Qt).padStart(2,"0")}`},dayCount:()=>xe,recolor:()=>{kt=!0},toggles:[{label:"fire",initial:!0,set:$=>{On=$}},{label:"water",initial:!0,set:$=>{hi=$}},{label:"sound",initial:!1,set:$=>$?io.start():io.stop()}],dispose:()=>{var $;io.stop(),($=vt.material.uniforms.fireTex.value)==null||$.dispose(),p&&g.dispose(),Z.dispose(),Q.dispose(),At.dispose(),Wt.dispose()},update:($,Qt,zt)=>{const he=Math.min(.05,Math.max(0,$-Tc));if(Tc=$,Qt){(zt==null?void 0:zt.spinGroup)!==!1&&(e.rotation.y+=.006*he);for(let nt=0;nt<lt.length;nt++){const Vt=.084*he;gt[nt]+=Math.max(-Vt,Math.min(Vt,bt[nt]-gt[nt])),lt[nt].rotation.y+=gt[nt]*he}}if(zt){const nt=zt.renderer.domElement.height;Zi.uniforms.uScale.value=nt,hr.uniforms.uScale.value=nt,re.uniforms.uScale.value=nt}if(kt){kt=!1,xc();const nt=Math.random()<Bh,Vt=[],Gt=[];for(const Xt of Y){const je=ba(Xt.P,Xt.rows,nt,Math.random()<.6),Ee=ba(Xt.P,Xt.rows,nt,Math.random()<.6);for(const[Ln,Gn]of[[Xt.matA,je],[Xt.matB,Ee]]){const ns=Ln.map.image;Vt.push({mat:Ln,from:ut(ns),to:Gn.texture.image,live:ns})}const ys=ot(je.colors,Ee.colors,Xt.N);for(const Ln of Xt.capGeos){const Gn=Ln.getAttribute("color");Gt.push({geo:Ln,from:Float32Array.from(Gn.array),to:ys})}}It={t0:$,dur:6,items:Vt,caps:Gt};for(let Xt=0;Xt<bt.length;Xt++)bt[Xt]=K()}if(It){const nt=Math.min(1,($-It.t0)/It.dur),Vt=nt*nt*(3-2*nt);for(const Gt of It.items){const Xt=Gt.live.getContext("2d");Xt.globalAlpha=1,Xt.drawImage(Gt.from,0,0),Xt.globalAlpha=Vt,Xt.drawImage(Gt.to,0,0),Xt.globalAlpha=1,Gt.mat.map.needsUpdate=!0}for(const Gt of It.caps){const Xt=Gt.geo.getAttribute("color"),je=Xt.array;for(let Ee=0;Ee<je.length;Ee++)je[Ee]=Gt.from[Ee]+(Gt.to[Ee]-Gt.from[Ee])*Vt;Xt.needsUpdate=!0}nt>=1&&(It=null)}const De=(zt==null?void 0:zt.skyTime)??$,cn=De/T*Math.PI*2+1.1,qe=cn-Math.PI/2,hn=-Math.sin(qe),ke=Math.cos(E)*Math.cos(qe),Dn=Math.sin(E)*Math.cos(qe),zn=ke,Ji=hn*C,Qi=ke*C,ui=Dn*C;x.position.set(Ji,Qi,ui);const Ms=qe-P,fr=-Math.sin(Ms),Ss=Math.cos(E)*Math.cos(Ms),pr=Math.sin(E)*Math.cos(Ms);b.position.set(fr*C,Ss*C,pr*C);const sn=Math.min(1,Math.max(0,(zn+.06)/.24)),di=1-sn,fi=Math.max(0,1-Math.abs(zn)/.25),Wr=x.material;x.rotation.y=De*.1,b.rotation.y=-De*.06;const Ge=Math.max(0,Math.min(1,(Ss*C+6)/18));Wr.color.lerpColors(Ut,ht,Math.min(1,Math.max(0,zn/.45)));const un=1+.1*fi;x.scale.set(un,un,un),M.position.set(Ji,Math.max(Qi,8),ui),M.intensity=W*sn,M.color.lerpColors(ct,it,Math.min(1,Math.max(0,zn/.55))),zt&&Wt.update(zt.renderer,M,sn,fi,x.getWorldPosition(I).normalize(),he),A.position.set(fr*C,Math.max(Ss*C,12),pr*C),A.intensity=.2*sn+U*di*Ge*(.35+.65*w);const xn=.4+.6*sn+.32*di*Ge*w,Zn=Zi.uniforms.uTint.value;Zn.setRGB(xn*(1-.14*di),xn*(1-.06*di),xn),hr.uniforms.uTint.value.copy(Zn),A.color.lerpColors(j,wt,sn),m.intensity=.5+.6*sn,m.color.lerpColors(X,Tt,sn).lerp(pt,fi*.4),m.groundColor.lerpColors(St,J,sn),Ot.lerpColors(z,G,sn).lerp(tt,fi*.6),zt==null||zt.renderer.setClearColor(Ot),Le.lerpColors(_e,ce,sn).lerp(jt,fi*.45),Fe.uHorizon.value.copy(Ot),Fe.uZenith.value.copy(Le),Fe.uNight.value=di,Fe.uTime.value=$,Fe.uSunDir.value.set(hn,ke,Dn),Fe.uGlow.value=fi,Dt=(((cn-Math.PI/2)/(Math.PI*2)*24+12)%24+24)%24;const vn=Dt<.6||Dt>23.4;if(vn&&!qt&&xe++,qt=vn,g.material.uniforms.uTime.value=$,zt&&!p){for(const nt of et)nt.visible=!1;O.update(zt.renderer,zt.scene);for(const nt of et)nt.visible=!0}const pi=.35+.35*Math.sin($*.11+2.1)+.2*Math.sin($*.031),Kn=$*.05,mi=Math.cos(Kn)*pi,gi=Math.sin(Kn)*pi;Ac||(eo=$+35+Math.random()*35,no=$+28+Math.random()*32,Ac=!0),ur?$>=ur&&(ur=0,eo=$+35+Math.random()*35):$>=eo&&(ur=$+5+Math.random()*5),dr?$>=dr&&(dr=0,no=$+28+Math.random()*32):$>=no&&(dr=$+4+Math.random()*4);const ts=1.3,kn=(nt,Vt)=>{const Gt=he/ts,Xt=Vt?1:0;return nt<Xt?Math.min(Xt,nt+Gt):Math.max(Xt,nt-Gt)};if(jn=kn(jn,hi&&!ur),Bn=kn(Bn,On&&!dr),p){const nt=g.material.uniforms;nt.uNight.value=di,nt.uSky.value.copy(Ot);const Vt=h+l+6;for(let Gt=0;Gt<L.length;Gt++){const Xt=L[Gt],je=Math.min(1,B($,Gt)),Ee=8*je*jn,ys=4.75*(1-.7*je)*jn,Ln=_[Xt]+s[Xt]/2-f,Gn=(Ee+Math.sqrt(Ee*Ee+2*Jt*Ln))/Jt,ns=ys/Ri*(1-Math.exp(-Ri*Gn));nt.uImpactR.value.setComponent(Gt,Math.min(.96,(i[Xt]+l+ns)/Vt)),nt.uImpactA.value.setComponent(Gt,.12*je*jn)}}_s.visible=jn>.001;const es=jn>.25;if(_s.visible){Zi.uniforms.uOpacity.value=.95*Math.min(1,jn*1.6);for(let nt=0;nt<st;nt++){const Vt=rt[nt],Gt=($+Vt.ph)%Vt.life,Xt=Vt.grp===3?k($-Gt):B($-Gt,Vt.grp);if(Xt<.04){Nt[nt*3+1]=-9999,F[nt]=0;continue}const je=Xt>1?1:Xt,Ee=Vt.up*Xt*jn,Ln=Vt.out*(1-.7*je)*jn/Ri*(1-Math.exp(-Ri*Gt)),Gn=yn[nt]*Gt*Gt,ns=.35*Gt*Gt,wc=Vt.oy+Ee*Gt-.5*Jt*Gt*Gt,Rc=Vt.ox+Vt.cx*Ln-Vt.cz*Gn+mi*ns,Cc=Vt.oz+Vt.cz*Ln+Vt.cx*Gn+gi*ns;if(wc<f-.3){F[nt]&&es&&Math.random()<.3&&to(Rc,Cc),F[nt]=0,Nt[nt*3+1]=-9999;continue}Nt[nt*3]=Rc,Nt[nt*3+1]=wc,Nt[nt*3+2]=Cc,F[nt]=1}Ci.attributes.position.needsUpdate=!0}let mr=!1;for(let nt=0;nt<Ie;nt++){oi[nt]<$i[nt]&&(oi[nt]+=he);const Vt=oi[nt];if(Vt>=$i[nt]){li[nt*3+1]=-9999,lr[nt]=0;continue}mr=!0,li[nt*3]=xs[nt]+ar[nt]*Vt,li[nt*3+1]=f+.1+Ki[nt]*Vt-.5*Jt*Vt*Vt,li[nt*3+2]=rr[nt]+or[nt]*Vt,lr[nt]=.85*(1-Vt/$i[nt])}if(v.visible=mr,mr&&(ci.attributes.position.needsUpdate=!0,ci.attributes.aAlpha.needsUpdate=!0),vt.visible=Bn>.001,vt.visible){const nt=.85+.3*(Bt($)-.55);vt.scale.set(yt,ft*nt,yt),vt.position.y=dt+ft*nt/2,vt.rotation.x=gi*.07,vt.rotation.z=-mi*.07,vt.updateFire($,Math.min(1,Bn*1.5))}if(ie.visible=vt.visible,ie.visible&&(ie.material.opacity=.12*Bn*(.7+.6*Bt($))),Pn.intensity=Bn*(26+30*(Bt($)-.55)),be.visible=Bn>.01,be.visible){re.uniforms.uOpacity.value=.9*Bn;for(let nt=0;nt<Lt;nt++){const Vt=($+ze[nt])%se[nt],Gt=Vt/se[nt],Xt=Pt[nt]+Et[nt]*Vt,je=oe[nt]+.6*Gt;if(Zt[nt*3]=Math.cos(Xt)*je+mi*1.6*Vt,Zt[nt*3+1]=Ce[nt]+ye[nt]*Vt,Zt[nt*3+2]=Math.sin(Xt)*je+gi*1.6*Vt,Gt<.45){const Ee=Gt/.45;en[nt*3]=1-.02*Ee,en[nt*3+1]=.9-.42*Ee,en[nt*3+2]=.35-.22*Ee}else{const Ee=(Gt-.45)/.55;en[nt*3]=.98-.43*Ee,en[nt*3+1]=.48+.07*Ee,en[nt*3+2]=.13+.42*Ee}bn[nt]=Math.min(1,Gt/.12)*Math.max(0,1-Math.max(0,(Gt-.55)/.45)),ln[nt]=tn[nt]*(1-.4*Gt)}nn.attributes.position.needsUpdate=!0,nn.attributes.aColor.needsUpdate=!0,nn.attributes.aAlpha.needsUpdate=!0,nn.attributes.aSize.needsUpdate=!0}}}}const zh="Yaacov Agam",kh="Fire and Water",Gh="1928–2026",Vx="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cinzel:wght@400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Fraunces:ital,wght@0,300;0,400;1,300&family=Italiana&family=Space+Grotesk:wght@300;400&family=Space+Mono&family=Syne:wght@400;500&display=swap",Hh={serif:"font-family:'Cormorant Garamond',Georgia,'Times New Roman',serif;",fraunces:"font-family:'Fraunces',Georgia,serif;",italiana:"font-family:'Italiana',Georgia,serif;",cinzel:"font-family:'Cinzel',Georgia,serif;",grotesk:"font-family:'Space Grotesk','Helvetica Neue',Arial,sans-serif;",syne:"font-family:'Syne','Helvetica Neue',Arial,sans-serif;",mono:"font-family:'Space Mono',ui-monospace,Menlo,monospace;",poster:"font-family:'Anton',Impact,'Arial Narrow',sans-serif;font-weight:400;",bebas:"font-family:'Bebas Neue',Impact,'Arial Narrow',sans-serif;font-weight:400;"},Ea=["top","topbottom","corners","grotesk","mono","poster","side"];function Wx(n,t,e){const i=document.createElement("link");i.rel="stylesheet",i.href=Vx,document.head.appendChild(i);const s=e.has("design")||e.get("text")==="pick",r=e.get("text")||"top",a={variant:Ea.includes(r)?r:r==="cycle"&&!s?"cycle":"top",font:e.get("tf")||"auto",scale:Number(e.get("ts"))||1,track:e.get("tt")!==null&&!isNaN(Number(e.get("tt")))?Number(e.get("tt")):1,alpha:Number(e.get("to"))||.6,weight:e.get("tw")||"300",tcase:e.get("tc")||"none",tint:e.get("th")||"white",blend:e.get("tb")||"none",shadow:e.get("td")!==null&&!isNaN(Number(e.get("td")))?Number(e.get("td")):1,italic:e.get("ti")||"0",rule:e.get("tr")||"none",name:e.get("name")||zh,work:e.get("work")||kh,years:e.get("years")||Gh},o=t?"max(3%, 60px)":"3%",l=t?"8%":"2.5%",c=(X,J)=>`font-size:max(${Math.round(X*a.scale)}px,${(J*a.scale).toFixed(2)}vh);`,u=X=>`letter-spacing:${(X*a.track).toFixed(3)}em;`,d=X=>`text-indent:${(X*a.track).toFixed(3)}em;`,h=X=>a.font!=="auto"&&Hh[a.font]||Hh[X],p={white:"255,255,255",cream:"246,240,226",gold:"226,196,148",ink:"26,26,28"},_={none:"",lower:"text-transform:lowercase;",upper:"text-transform:uppercase;",smallcaps:"font-variant:small-caps;"},S=(X=1)=>`position:absolute;pointer-events:none;user-select:none;font-weight:${a.weight};line-height:1.25;color:rgba(${p[a.tint]??p.white},${(a.alpha*X).toFixed(3)});`+(a.italic==="1"?"font-style:italic;":"")+(_[a.tcase]??"")+(a.blend!=="none"?`mix-blend-mode:${a.blend};`:"")+(a.shadow>0?`text-shadow:0 1px 18px rgba(0,0,0,${(.6*a.shadow).toFixed(2)}),0 0 4px rgba(0,0,0,${(.35*a.shadow).toFixed(2)});`:""),f=(X,J,St=1)=>{const wt=document.createElement("div");return wt.textContent=X,wt.style.cssText=S(St)+J,wt},m=(X,J)=>{const St=f("",X);for(const wt of J)wt.style.position="static";return St.append(...J),[St]},M=(X=!1)=>{if(a.rule!=="rule")return[];const J=document.createElement("div");return J.style.cssText=`width:2.8em;height:1px;background:rgba(${p[a.tint]??p.white},${(a.alpha*.75).toFixed(3)});margin:.6em ${X?"0":"auto"} .5em;`,[J]},A=()=>{const{name:X,work:J,years:St}=a,[wt,j=""]=St.split(/[–—-]/);return{top:()=>m("top:3.4%;left:0;right:0;text-align:center;",[f(X,h("serif")+u(.1)+c(30,5.4)),f(J,h("serif")+"font-style:italic;"+u(.14)+c(17,2.9),.9),...M(),f(St,h("serif")+u(.3)+c(14,2.3)+"margin-top:.25em;")]),topbottom:()=>[...m("top:3.4%;left:0;right:0;text-align:center;",[f(X,h("serif")+u(.1)+c(26,4.6)),...M(),f(J,h("serif")+"font-style:italic;"+u(.14)+c(16,2.6),.9)]),f(St,h("serif")+"bottom:3.4%;left:0;right:0;text-align:center;"+u(.3)+c(15,2.6))],corners:()=>[f(X,h("serif")+`top:${o};left:2.4%;`+u(.1)+c(22,3.8)),f(J,h("serif")+`top:${o};right:2.4%;font-style:italic;`+u(.12)+c(20,3.4)),f(wt,h("serif")+"bottom:9%;left:2.4%;"+u(.3)+c(16,2.7)),f(j||St,h("serif")+"bottom:9%;right:2.4%;"+u(.3)+c(16,2.7))],grotesk:()=>[f(X,h("grotesk")+"top:4%;left:0;right:0;text-align:center;"+u(.45)+d(.45)+c(15,2.5)),f(`${J} · ${St}`,h("grotesk")+"bottom:4%;left:0;right:0;text-align:center;"+u(.35)+d(.35)+c(12,1.9),.8)],mono:()=>m("bottom:3.6%;left:0;right:0;text-align:center;",[f(X,h("mono")+u(.08)+c(13,2.1)),f(J,h("mono")+u(.14)+c(12,1.9),.85),...M(),f(St,h("mono")+u(.25)+c(11,1.7)+"margin-top:.2em;",.75)]),poster:()=>m(`bottom:${l};left:3%;`,[f(X,h("poster")+u(.03)+"line-height:1;"+c(34,7),.85),...M(!0),f(`${J} · ${St}`,h("grotesk")+u(.3)+c(13,2)+"margin-top:.4em;",.85)]),side:()=>[f(`${X} · ${J}`,h("grotesk")+"left:2%;top:50%;transform:translateY(-50%) rotate(180deg);writing-mode:vertical-rl;white-space:nowrap;"+u(.4)+c(13,2.1)),f(St,h("grotesk")+"right:2%;top:50%;transform:translateY(-50%) rotate(180deg);writing-mode:vertical-rl;white-space:nowrap;"+u(.4)+c(12,1.9),.85)]}},T=X=>{const J=document.createElement("div");J.style.cssText=`position:${t?"fixed":"absolute"};inset:0;pointer-events:none;z-index:${t?9999:3};transition:opacity 1200ms ease;`;for(const St of A()[X]())J.appendChild(St);return n.appendChild(J),J};let C=[];const E=()=>{for(const X of C)X.remove();if(a.variant==="cycle"){C=Ea.map(T),C.forEach((J,St)=>J.style.opacity=St===0?"1":"0");let X=0;setInterval(()=>{C[X].style.opacity="0",X=(X+1)%C.length,C[X].style.opacity="1"},18e3)}else C=[T(a.variant)]};if(E(),!s)return;const R=()=>{const X=new URLSearchParams(location.search),J=(St,wt,j)=>wt===j?X.delete(St):X.set(St,wt);X.set("text",a.variant),J("tf",a.font,"auto"),J("ts",String(a.scale),"1"),J("tt",String(a.track),"1"),J("to",String(a.alpha),"0.6"),J("tw",a.weight,"300"),J("tc",a.tcase,"none"),J("th",a.tint,"white"),J("tb",a.blend,"none"),J("td",String(a.shadow),"1"),J("ti",a.italic,"0"),J("tr",a.rule,"none"),J("name",a.name,zh),J("work",a.work,kh),J("years",a.years,Gh),history.replaceState(null,"","?"+X.toString())};R();const x=document.createElement("style");x.textContent=`
.tdp{width:266px;max-height:calc(100vh - 32px);overflow-y:auto;padding:16px 16px 14px;border-radius:16px;
  color:#ececee;background:rgba(19,19,22,.72);backdrop-filter:blur(24px) saturate(1.4);
  -webkit-backdrop-filter:blur(24px) saturate(1.4);border:1px solid rgba(255,255,255,.09);
  box-shadow:0 12px 40px rgba(0,0,0,.38);pointer-events:auto;
  font:11.5px/1.4 'Space Grotesk','Helvetica Neue',Arial,sans-serif;
  transition:opacity .3s ease;}
.tdp:not(:hover):not(.dragging){opacity:.07;backdrop-filter:none;-webkit-backdrop-filter:none;
  background:none;box-shadow:none;}
.tdp h3{margin:0 0 12px;font-size:10.5px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:#98989f;
  cursor:grab;user-select:none;touch-action:none;}
.tdp h3:active{cursor:grabbing;}
.tdp .grid{display:grid;grid-template-columns:1fr 1fr;gap:9px 8px;}
.tdp label{display:block;color:#84848d;font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;}
.tdp .v{float:right;color:#cfcfd6;font-size:10px;letter-spacing:.04em;}
.tdp select,.tdp input[type=text]{width:100%;box-sizing:border-box;margin-top:4px;padding:6px 9px;
  background:rgba(255,255,255,.07);color:#ececee;border:1px solid rgba(255,255,255,.1);border-radius:8px;
  font:inherit;outline:none;appearance:none;-webkit-appearance:none;}
.tdp select{padding-right:22px;background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5"><path d="M0 0l4 5 4-5z" fill="%23909096"/></svg>');
  background-repeat:no-repeat;background-position:right 9px center;cursor:pointer;}
.tdp option{color:#141417;background:#fff;}
.tdp select:focus,.tdp input[type=text]:focus{border-color:rgba(255,255,255,.32);}
.tdp .sliders{margin-top:11px;}
.tdp .sliders label{margin-top:7px;}
.tdp input[type=range]{width:100%;height:20px;margin:1px 0 0;background:none;appearance:none;-webkit-appearance:none;cursor:pointer;}
.tdp input[type=range]::-webkit-slider-runnable-track{height:2px;border-radius:1px;background:rgba(255,255,255,.2);}
.tdp input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;
  background:#ececee;margin-top:-5px;box-shadow:0 1px 4px rgba(0,0,0,.45);}
.tdp input[type=range]::-moz-range-track{height:2px;background:rgba(255,255,255,.2);}
.tdp input[type=range]::-moz-range-thumb{width:12px;height:12px;border:none;border-radius:50%;background:#ececee;}
.tdp .words{margin-top:11px;display:grid;gap:8px;}
.tdp .actions{display:flex;gap:6px;margin-top:14px;}
.tdp button{border:none;cursor:pointer;border-radius:9px;padding:8px 10px;font:inherit;letter-spacing:.05em;
  transition:filter .15s ease;}
.tdp button:hover{filter:brightness(1.15);}
.tdp .primary{flex:1;background:#ececee;color:#141417;font-weight:500;}
.tdp .ghost{background:rgba(255,255,255,.08);color:#d9d9df;border:1px solid rgba(255,255,255,.13);}
.tdp .hint{margin-top:10px;color:#75757d;font-size:9.5px;line-height:1.55;letter-spacing:.05em;}
.tdp .fold{float:right;background:none;border:none;color:#98989f;cursor:pointer;padding:0 2px;
  margin:-3px -2px 0 0;font:13px/1 inherit;letter-spacing:0;}
.tdp .fold:hover{color:#ececee;}
.tdp-pill{padding:7px 13px;border-radius:999px;cursor:pointer;pointer-events:auto;
  color:#ececee;background:rgba(19,19,22,.72);backdrop-filter:blur(20px) saturate(1.4);
  -webkit-backdrop-filter:blur(20px) saturate(1.4);border:1px solid rgba(255,255,255,.12);
  box-shadow:0 6px 24px rgba(0,0,0,.35);font:12px 'Space Grotesk','Helvetica Neue',Arial,sans-serif;
  letter-spacing:.08em;}
.tdp-pill{transition:opacity .3s ease;}
.tdp-pill:not(:hover){opacity:.12;backdrop-filter:none;-webkit-backdrop-filter:none;
  background:none;box-shadow:none;}
.tdp-pill:hover{filter:brightness(1.2);}`,document.head.appendChild(x);const b=document.createElement("div");b.className="tdp",b.style.cssText=`position:${t?"fixed":"absolute"};top:${t?"14px":"2%"};right:${t?"14px":"2%"};z-index:${t?1e4:5};`;const P=X=>Math.round(X*100)+"%",w=(X,J,St,wt)=>`<label>${X}<select data-k="${J}">`+wt.map(([j,pt])=>`<option value="${j}"${j===St?" selected":""}>${pt}</option>`).join("")+"</select></label>",I=(X,J,St,wt,j,pt)=>`<label>${X}<span class="v" data-v="${J}">${P(St)}</span></label><input data-k="${J}" type="range" min="${wt}" max="${j}" step="${pt}" value="${St*100}">`,V=(X,J,St)=>`<label>${X}<input data-k="${J}" type="text" value="${St}"></label>`;b.innerHTML='<h3>Text design<button class="fold" data-fold title="collapse panel">−</button></h3><div class="grid">'+w("layout","variant",a.variant,Ea.map(X=>[X,X]))+w("font","font",a.font,[["auto","auto"],["serif","Cormorant"],["fraunces","Fraunces"],["italiana","Italiana"],["cinzel","Cinzel"],["grotesk","Grotesk"],["syne","Syne"],["mono","Mono"],["poster","Anton"],["bebas","Bebas"]])+w("weight","weight",a.weight,[["200","extralight"],["300","light"],["400","regular"]])+w("case","tcase",a.tcase,[["none","as written"],["lower","lowercase"],["upper","uppercase"],["smallcaps","small caps"]])+w("color","tint",a.tint,[["white","white"],["cream","cream"],["gold","gold"],["ink","ink"]])+w("blend","blend",a.blend,[["none","none"],["overlay","overlay"],["soft-light","soft light"],["difference","difference"]])+w("style","italic",a.italic,[["0","roman"],["1","italic"]])+w("ornament","rule",a.rule,[["none","none"],["rule","hairline rule"]])+'</div><div class="sliders">'+I("size","scale",a.scale,40,250,5)+I("tracking","track",a.track,0,300,10)+I("opacity","alpha",a.alpha,10,100,5)+I("shadow","shadow",a.shadow,0,100,5)+'</div><div class="words">'+V("name","name",a.name)+V("work","work",a.work)+V("years","years",a.years)+'</div><div class="actions"><button data-copy class="primary">copy design link</button><button data-random class="ghost" title="roll a random design">random</button><button data-reset class="ghost" title="back to defaults">reset</button></div><div class="hint">every change updates the URL — send it to share this exact design</div>',n.appendChild(b);const W=document.createElement("button");W.className="tdp-pill",W.textContent="Aa",W.title="open text design",W.style.cssText=b.style.cssText+"display:none;",n.appendChild(W),b.querySelector("[data-fold]").onclick=()=>{W.style.left=b.style.left,W.style.top=b.style.top,W.style.right=b.style.right,b.style.display="none",W.style.display="block"},W.onclick=()=>{W.style.display="none",b.style.display="block"};const U=b.querySelector("h3");let G=null;const z=()=>t?{left:0,top:0}:n.getBoundingClientRect();U.addEventListener("pointerdown",X=>{if(X.target.hasAttribute("data-fold"))return;const J=b.getBoundingClientRect();G={dx:X.clientX-J.left,dy:X.clientY-J.top},b.classList.add("dragging"),U.setPointerCapture(X.pointerId)}),U.addEventListener("pointermove",X=>{if(!G)return;const J=z();b.style.left=`${X.clientX-G.dx-J.left}px`,b.style.top=`${X.clientY-G.dy-J.top}px`,b.style.right="auto"}),U.addEventListener("pointerup",()=>{G=null,b.classList.remove("dragging")}),b.addEventListener("input",X=>{const J=X.target,St=J.dataset.k;if(St){if(St==="scale"||St==="track"||St==="alpha"||St==="shadow"){a[St]=Number(J.value)/100;const wt=b.querySelector(`[data-v="${St}"]`);wt&&(wt.textContent=P(a[St]))}else a[St]=J.value;E(),R()}});const tt=b.querySelector("[data-copy]");tt.onclick=()=>{var X;(X=navigator.clipboard)==null||X.writeText(location.href),tt.textContent="copied ✓",setTimeout(()=>tt.textContent="copy design link",1400)};const it=()=>{b.querySelectorAll("[data-k]").forEach(X=>{const J=a[X.dataset.k];X.value=typeof J=="number"?String(J*100):J});for(const X of["scale","track","alpha","shadow"]){const J=b.querySelector(`[data-v="${X}"]`);J&&(J.textContent=P(a[X]))}},ct=X=>X[Math.floor(Math.random()*X.length)],Tt=(X,J,St)=>Number((Math.round((X+Math.random()*(J-X))/St)*St).toFixed(2));b.querySelector("[data-random]").onclick=()=>{a.variant=ct(Ea),a.font=ct(["auto","serif","fraunces","italiana","cinzel","grotesk","syne","mono","poster","bebas"]),a.weight=ct(["200","300","400"]),a.tcase=ct(["none","lower","upper","smallcaps"]),a.tint=ct(["white","cream","gold"]),a.blend=ct(["none","none","overlay","soft-light","difference"]),a.italic=ct(["0","0","0","1"]),a.rule=ct(["none","none","rule"]),a.scale=Tt(.7,1.8,.05),a.track=Tt(.2,2.5,.1),a.alpha=Tt(.35,1,.05),a.shadow=Tt(0,1,.05),it(),E(),R()},b.querySelector("[data-reset]").onclick=()=>{const X=new URLSearchParams(location.search);for(const J of["text","tf","ts","tt","to","tw","tc","th","tb","td","ti","tr","name","work","years"])X.delete(J);location.href=location.pathname+"?"+X.toString()}}const Va=new af,Ve=new wn(52,window.innerWidth/window.innerHeight);Ve.far=4e3;Ve.updateProjectionMatrix();const Yi=new URLSearchParams(location.search).has("auto"),Xx=new URLSearchParams(location.search).has("near"),Yx=!!new URLSearchParams(location.search).get("text")||new URLSearchParams(location.search).has("design"),Ke=new P_({antialias:!0});Ke.setClearColor(new _t(16052712));Ke.setPixelRatio(Yi?Math.min(window.devicePixelRatio,1.75):window.devicePixelRatio);Ke.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Ke.domElement);Yi||window.addEventListener("resize",()=>{Ve.aspect=window.innerWidth/window.innerHeight,Ve.updateProjectionMatrix(),Ke.setSize(window.innerWidth,window.innerHeight),Fn.handleResize()});const Sn=new L_(Ve,Ke.domElement);Sn.enableDamping=!0;Sn.dampingFactor=.08;Sn.enablePan=!1;Sn.minPolarAngle=.18;Sn.maxPolarAngle=1.95;Sn.minDistance=32;Sn.maxDistance=1900;Sn.enabled=!Yi;const Fn=new Y_(Ve,Ke.domElement);Fn.rotateSpeed=3;Fn.zoomSpeed=1.4;Fn.panSpeed=.6;Fn.dynamicDampingFactor=.12;Fn.minDistance=6;Fn.maxDistance=400;Fn.enabled=!1;function qx(n){const t=n==="surface"&&!Yi;Fn.enabled=t,Sn.enabled=!t&&!Yi,t&&Fn.target.set(0,0,0)}Ke.domElement.addEventListener("dblclick",n=>n.preventDefault());const Bi=new URLSearchParams(location.search).has("thumb"),Qn=document.createElement("div");Qn.id="ui-bar";Qn.style.cssText="position:fixed;top:14px;left:14px;z-index:9999;display:flex;gap:4px;align-items:center;background:rgba(246,244,238,.8);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:12px;padding:4px 8px;box-shadow:0 1px 8px rgba(0,0,0,.14);";const qi=document.createElement("div");qi.style.cssText="font-family:'Helvetica Neue',Arial,sans-serif;letter-spacing:.2em;font-variant-numeric:tabular-nums;font-weight:200;color:rgba(255,255,255,.22);text-shadow:0 1px 18px rgba(0,0,0,.6),0 0 4px rgba(0,0,0,.35);line-height:1;user-select:none;display:none;";if(!Bi&&!Yi){document.body.appendChild(Qn);const n=Wu();n.style.position="fixed",n.style.right="14px",n.style.bottom="12px",n.style.zIndex="9999",document.body.appendChild(n),qi.style.cssText+="position:fixed;left:20px;bottom:18px;z-index:9999;font-size:clamp(22px,3.8vh,40px);",document.body.appendChild(qi)}const jx={grid:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',fountain:'<circle cx="12" cy="4" r="1.3"/><path d="M12 5.3v6.7"/><path d="M12 7c-2.6.5-4.2 2.6-4.7 5M12 7c2.6.5 4.2 2.6 4.7 5"/><path d="M4 14q8 3.6 16 0"/>',refresh:'<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v5h-5"/>',orbit:'<ellipse cx="12" cy="12" rx="9.5" ry="4"/><circle cx="12" cy="12" r="2.3"/>',flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',droplets:'<path d="M7 16.3a4 4 0 0 0 4-4c0-1.2-.6-2.3-1.7-3.2S7.3 6.8 7 5.3c-.3 1.5-1.1 2.8-2.3 3.8S3 11.1 3 12.3a4 4 0 0 0 4 4z"/><path d="M12.6 6.6A11 11 0 0 0 14 3c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 0 1-11.9 5"/>',sound:'<path d="M11 4.7 6.5 8.3H3v7.4h3.5L11 19.3z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.8 5.2a9 9 0 0 1 0 13.6"/>',play:'<path d="M7 4.5 19 12 7 19.5z"/>'};function Vu(n){return'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+jx[n]+"</svg>"}function Zs(n,t){n.style.color=t?"#1d1d1f":"#6b6e72",n.style.opacity=t?"1":".8"}function Gl(n,t){const e=document.createElement("button");return e.innerHTML=Vu(n),e.title=t,e.setAttribute("aria-label",t),e.style.cssText="border:none;background:none;cursor:pointer;padding:5px;display:inline-flex;line-height:0;",e}function Zx(n,t){const e=document.createElement("button"),i=document.createElement("img");return i.src=n,i.alt=t,i.width=23,i.height=23,i.style.display="block",e.appendChild(i),e.title=t,e.setAttribute("aria-label",t),e.style.cssText="border:none;background:none;cursor:pointer;padding:3px;display:inline-flex;line-height:0;",e}function Kx(n,t){n.firstElementChild.style.filter=t?"none":"grayscale(1)",n.style.opacity=t?"1":".5"}function Wu(){const n=document.createElement("a");return n.href="https://ayal.github.io/AGAM",n.target="_blank",n.rel="noopener",n.innerHTML=Yx?'<span class="credit-url">ayal.github.io/AGAM</span>':'<span class="credit-full">Homage to Yaacov Agam&rsquo;s <span style="font-style:italic">Fire &amp; Water Fountain</span> &middot; by Ayal Gelles</span><span class="credit-short">by Ayal Gelles</span><span class="credit-url">ayal.github.io/AGAM</span>',n.style.cssText="display:inline-block;text-align:right;line-height:1.45;font:12px 'Helvetica Neue',Arial,sans-serif;letter-spacing:.04em;color:rgba(255,255,255,.32);text-decoration:none;text-shadow:0 1px 10px rgba(0,0,0,.5);",n}const Xu=document.createElement("style");Xu.textContent=".credit-full,.credit-short,.credit-url{white-space:nowrap}.credit-url{display:block;opacity:.72;letter-spacing:.09em;font-size:.92em}.credit-short{display:none}#ui-bar a,#ui-bar button{-webkit-tap-highlight-color:transparent}@media (max-width:640px){  #ui-bar{gap:6px;left:8px;top:8px;flex-wrap:wrap}  .credit-full{display:none}.credit-short{display:inline}}";document.head.appendChild(Xu);function Vh(n,t,e,i){const s=Gl(n,t);let r=e;return Zs(s,r),s.onclick=()=>{r=!r,Zs(s,r),i(r)},s.setOn=a=>{r=a,Zs(s,r)},s}let Kt=null,Wa="",Qa=!0,Ia=null,Pr=!1,us=null,Ua=null,zr=null,Hl=null,zi=null,Wh=Bi?{crisp:!0}:vc();function $x(n){n.traverse(t=>{var s,r;const e=t;e.geometry&&e.geometry.dispose();const i=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(const a of i)(r=(s=a.map)==null?void 0:s.dispose)==null||r.call(s),a.dispose()})}function Jx(n){var t;Qa=n,(t=zi==null?void 0:zi.setOn)==null||t.call(zi,n)}const Qx={fire:"flame",water:"droplets",sound:"sound"},Xh=n=>Hl?Hl(n):n();function tv(n){Qn.replaceChildren();for(const i of["surface","fountain"]){const s=i===n;let r;i==="fountain"?(r=Zx("favicon.svg",i),Kx(r,s)):(r=Gl("grid",i),Zs(r,s)),r.onclick=()=>{i===Wa&&(Kt!=null&&Kt.recolor)?Kt.recolor():Xh(()=>Vl(i,i===Wa))},Qn.appendChild(r)}const t=Gl("refresh","new render");Zs(t,!1),t.onclick=()=>Xh(()=>Vl(n,!1)),Qn.appendChild(t);const e=document.createElement("a");if(e.innerHTML=Vu("play"),e.href="?auto",e.title="fullscreen kiosk mode (camera glides, self-updates)",e.setAttribute("aria-label","auto / kiosk mode"),e.style.cssText="display:inline-flex;line-height:0;padding:5px;text-decoration:none;",Zs(e,!1),Qn.appendChild(e),Kt!=null&&Kt.toggles){const i=document.createElement("span");i.style.cssText="width:1px;height:16px;background:#b9bbbd;margin:0 3px;",Qn.appendChild(i),zi=Vh("orbit","spin",Qa,Jx),Qn.appendChild(zi);for(const s of Kt.toggles)s.set(s.initial),Qn.appendChild(Vh(Qx[s.label]??"play",s.label,s.initial,s.set))}else zi=null}function Vl(n,t=!1,e=!1){var i;Kt&&(Va.remove(Kt.group),(i=Kt.dispose)==null||i.call(Kt),$x(Kt.group)),!t&&!Bi&&(Wh=vc()),xc(),Kt=n==="surface"?Tx():Hx(Wh,Bi),Ke.setClearColor(new _t(Kt.background??16052712)),Va.add(Kt.group),!t&&!e&&(Qa=!Bi,Ve.up.set(0,1,0),Ve.position.set(...Kt.camera),Bi&&Ve.position.multiplyScalar(.62),Sn.target.set(0,0,0),Sn.update()),Wa=n,qx(n),tv(n),!t&&!Bi&&!Pr&&n==="fountain"&&(us==null||us())}Vl("fountain");const Xa=new If;let Yu=0;const de=(n,t)=>n+Math.random()*(t-n),Tr=(n,t,e)=>n+(t-n)*e,ev=n=>n*n*(3-2*n);if(Yi){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;z-index:1;";const t=document.createElement("div");t.style.cssText="position:relative;overflow:hidden;background:#ccced0;",Ke.domElement.style.cssText="display:block;width:100%;height:100%;",t.appendChild(Ke.domElement);const e=Wu();e.style.position="absolute",e.style.right="2.4%",e.style.bottom="3%",e.style.zIndex="3",t.appendChild(e),n.appendChild(t),document.body.appendChild(n),zr=t,Ve.fov=52;const i=()=>{const d=window.innerWidth,h=window.innerHeight;t.style.width=`${d}px`,t.style.height=`${h}px`,Ke.setSize(d,h,!1),Ve.aspect=d/h,Ve.updateProjectionMatrix(),e.style.fontSize=`${Math.max(11,Math.round(Math.min(h*.014,d*.022)))}px`};i(),window.addEventListener("resize",i);const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:#101012;opacity:0;pointer-events:none;z-index:50;transition:opacity 450ms ease;",document.body.appendChild(s);let r=!1;const a=()=>{r||(r=!0,s.style.opacity="1",setTimeout(()=>location.reload(),500))},o=/assets\/index-[\w-]+\.js/,l=[...document.querySelectorAll("script")].map(d=>d.src).find(d=>o.test(d))??"";let c="";setInterval(async()=>{try{const d=await fetch(`${location.pathname}?_=${Date.now()}`,{cache:"no-store"});if(!d.ok)return;const h=(await d.text()).match(o);if(!h||!l)return;const p=h[0];if(l.includes(p)){c="";return}p===c?a():c=p}catch{}},6e4),Ke.domElement.addEventListener("webglcontextlost",d=>d.preventDefault()),Ke.domElement.addEventListener("webglcontextrestored",a),setTimeout(a,6*60*60*1e3)}if(!Bi){const n=new URLSearchParams(location.search);(n.get("text")||n.has("design"))&&Wx(zr??document.body,!zr,n)}{const n=Math.PI/180,t=[58,122],e=[-1,5],i=-10,s={az:0,el:.3,dist:100,lookY:2,roll:0};let r={...s},a={...s},o=0,l=.001,c=0,u=!0;us=()=>{const E=Ve.position,R=Math.max(1,E.length());s.az=Math.atan2(E.z,E.x),s.el=Math.asin(Math.max(-1,Math.min(1,E.y/R))),s.dist=R,s.lookY=Sn.target.y||2,s.roll=0,r={...s},a={...s},u=!0,c=0};const d=Xx?{pushIn:.16,below:.44,rise:.58,mid:.86,wide:.96}:{pushIn:.1,below:.34,rise:.48,mid:.7,wide:.88};let h=!1;const p=E=>{r={...s};const R=Math.random()<.5?1:-1,x=Math.random()<.35,b=s.az+R*(x?de(320*n,520*n):de(80*n,240*n));let P=Math.random();h&&(P=d.below+P*(1-d.below)),h=P<d.below;let w,I,V,W;P<d.pushIn?(w=de(8*n,22*n),I=de(58,80),V=de(0,7),W=de(7,11)):P<d.below?(w=de(-18*n,6*n),I=de(56,80),V=de(3,11),W=de(9,14)):P<d.rise?(w=de(48*n,76*n),I=de(78,116),V=de(-3,2),W=de(7,11)):P<d.mid?(w=de(12*n,40*n),I=de(t[0],t[1]),V=de(e[0],e[1]),W=de(9,14)):P<d.wide?(w=de(2*n,20*n),I=de(150,250),V=de(8,24),W=de(12,18)):(w=de(4*n,18*n),I=de(300,550),V=de(0,16),W=de(16,24)),w=Math.max(w,Math.asin(i/I)),x&&(W=Math.max(W,de(20,30)));const U=Math.random()<.3?(Math.random()<.5?1:-1)*de(7*n,18*n):0;a={az:b,el:w,dist:I,lookY:V,roll:U},o=E,l=W,u=!1},_=()=>{const E=Math.cos(s.el);Ve.up.set(0,1,0),Ve.position.set(s.dist*E*Math.cos(s.az),s.dist*Math.sin(s.el),s.dist*E*Math.sin(s.az)),Ve.lookAt(0,s.lookY,0),s.roll&&Ve.rotateZ(s.roll)},S=document.createElement("div");zr?(S.style.cssText="position:absolute;inset:0;background:#ccced0;opacity:0;pointer-events:none;z-index:2;transition:opacity 280ms ease;",zr.appendChild(S)):(S.style.cssText="position:fixed;inset:0;background:#ccced0;opacity:0;pointer-events:none;z-index:9998;transition:opacity 280ms ease;",document.body.appendChild(S));let f=!1;Hl=E=>{f||(f=!0,S.style.background="#"+Ke.getClearColor(new _t).getHexString(),S.style.opacity="1",setTimeout(()=>{E(),S.style.opacity="0",setTimeout(()=>{f=!1},300)},300))};let M=1,A=0;const T=1;let C=0;if(Ia=E=>{var b,P;const R=Math.min(.1,Math.max(0,E-A));if(A=E,E>=o+l)u?E>=c?p(E):s.az+=M*.7*n*R:(s.az=a.az,s.el=a.el,s.dist=a.dist,s.lookY=a.lookY,s.roll=a.roll,M=Math.sign(a.az-r.az)||1,u=!0,c=E+de(.6,4.5));else{const w=ev((E-o)/l);s.az=Tr(r.az,a.az,w),s.el=Tr(r.el,a.el,w),s.dist=Tr(r.dist,a.dist,w),s.lookY=Tr(r.lookY,a.lookY,w),s.roll=Tr(r.roll,a.roll,w)}_();const x=((b=Kt==null?void 0:Kt.dayCount)==null?void 0:b.call(Kt))??0;x-C>=T&&(C=x,(P=Kt==null?void 0:Kt.recolor)==null||P.call(Kt))},!Yi){let R=0,x=!1;const b=()=>{R=Yu},P=()=>{Pr=!0,Sn.target.set(0,s.lookY,0),b()},w=Ke.domElement;w.addEventListener("pointerdown",()=>{x=!0,P()}),w.addEventListener("wheel",()=>P(),{passive:!0}),w.addEventListener("touchstart",()=>{x=!0,P()},{passive:!0}),window.addEventListener("pointerup",()=>{x&&(x=!1,b())}),window.addEventListener("touchend",()=>{x&&(x=!1,b())}),Ua=I=>{Pr&&!x&&I-R>22&&(Pr=!1)}}}let Yh=!1,qh="",Dr=!1,Wl=0,Xl=0;qi.style.cursor="pointer";qi.title="Click to pause / resume time";qi.addEventListener("click",()=>{Dr=!Dr,Dr?Wl=Xa.getElapsed():Xl+=Xa.getElapsed()-Wl});const qu=()=>{var a,o;requestAnimationFrame(qu),Xa.update();const n=Xa.getElapsed(),t=Yu=n,e=Dr?Wl-Xl:n-Xl,i=((a=Kt==null?void 0:Kt.status)==null?void 0:a.call(Kt))??"",s=i?Dr?i+" ⏸":i:"";s!==qh&&(qi.textContent=s,qi.style.display=s?"inline-block":"none",qh=s);const r=!Pr&&Wa==="fountain";r&&!Yh&&(us==null||us()),r?Ia==null||Ia(t):Fn.enabled?Fn.update():Sn.update(),Ua==null||Ua(t),(o=Kt==null?void 0:Kt.update)==null||o.call(Kt,t,Qa,{renderer:Ke,scene:Va,camera:Ve,skyTime:e,spinGroup:!r}),Ke.render(Va,Ve),Yh=r};qu();
