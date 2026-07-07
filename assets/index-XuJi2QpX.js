(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zl="184",Xn={ROTATE:0,DOLLY:1,PAN:2},Zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wu=0,Ic=1,Xu=2,ba=1,Yu=2,Cr=3,Zi=0,An=1,Tn=2,wi=0,Js=1,Ua=2,Uc=3,Nc=4,qu=5,cs=100,ju=101,Zu=102,Ku=103,$u=104,Ju=200,Qu=201,td=202,ed=203,qo=204,jo=205,nd=206,id=207,sd=208,rd=209,ad=210,od=211,ld=212,cd=213,hd=214,Zo=0,Ko=1,$o=2,nr=3,Jo=4,Qo=5,tl=6,el=7,Kl=0,ud=1,dd=2,di=0,Yh=1,qh=2,jh=3,Zh=4,Kh=5,$h=6,Jh=7,Qh=300,_s=301,ir=302,so=303,ro=304,ja=306,nl=1e3,ci=1001,il=1002,dn=1003,fd=1004,Xr=1005,ln=1006,ao=1007,qi=1008,Gn=1009,tu=1010,eu=1011,Nr=1012,$l=1013,fi=1014,hi=1015,pi=1016,Jl=1017,Ql=1018,Fr=1020,nu=35902,iu=35899,su=1021,ru=1022,Qn=1023,Pi=1026,ds=1027,au=1028,tc=1029,gs=1030,ec=1031,nc=1033,Ta=33776,Aa=33777,wa=33778,Ra=33779,sl=35840,rl=35841,al=35842,ol=35843,ll=36196,cl=37492,hl=37496,ul=37488,dl=37489,Na=37490,fl=37491,pl=37808,ml=37809,_l=37810,gl=37811,xl=37812,vl=37813,Ml=37814,Sl=37815,yl=37816,El=37817,bl=37818,Tl=37819,Al=37820,wl=37821,Rl=36492,Cl=36494,Pl=36495,Dl=36283,Ll=36284,Fa=36285,Il=36286,pd=3200,Ul=0,md=1,Xi="",Bn="srgb",Oa="srgb-linear",Ba="linear",ve="srgb",Rs=7680,Fc=519,_d=512,gd=513,xd=514,ic=515,vd=516,Md=517,sc=518,Sd=519,Nl=35044,Oc="300 es",ui=2e3,Or=2001;function yd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ed(){const n=Br("canvas");return n.style.display="block",n}const Bc={};function za(...n){const t="THREE."+n.shift();console.log(t,...n)}function ou(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function It(...n){n=ou(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ie(...n){n=ou(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Fl(...n){const t=n.join(" ");t in Bc||(Bc[t]=!0,It(...n))}function bd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Td={[Zo]:Ko,[$o]:tl,[Jo]:el,[nr]:Qo,[Ko]:Zo,[tl]:$o,[el]:Jo,[Qo]:nr};class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zc=1234567;const Dr=Math.PI/180,zr=180/Math.PI;function Ri(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]).toLowerCase()}function $t(n,t,e){return Math.max(t,Math.min(e,n))}function rc(n,t){return(n%t+t)%t}function Ad(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function wd(n,t,e){return n!==t?(e-n)/(t-n):0}function Lr(n,t,e){return(1-e)*n+e*t}function Rd(n,t,e,i){return Lr(n,t,1-Math.exp(-e*i))}function Cd(n,t=1){return t-Math.abs(rc(n,t*2)-t)}function Pd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Dd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ld(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Id(n,t){return n+Math.random()*(t-n)}function Ud(n){return n*(.5-Math.random())}function Nd(n){n!==void 0&&(zc=n);let t=zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fd(n){return n*Dr}function Od(n){return n*zr}function Bd(n){return(n&n-1)===0&&n!==0}function zd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function kd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gd(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),h=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ol={DEG2RAD:Dr,RAD2DEG:zr,generateUUID:Ri,clamp:$t,euclideanModulo:rc,mapLinear:Ad,inverseLerp:wd,lerp:Lr,damp:Rd,pingpong:Cd,smoothstep:Pd,smootherstep:Dd,randInt:Ld,randFloat:Id,randFloatSpread:Ud,seededRandom:Nd,degToRad:Fd,radToDeg:Od,isPowerOfTwo:Bd,ceilPowerOfTwo:zd,floorPowerOfTwo:kd,setQuaternionFromProperEuler:Gd,normalize:Me,denormalize:Jn},Sc=class Sc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sc.prototype.isVector2=!0;let Tt=Sc;class Di{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*y;m<0&&(h=-h,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),A=Math.sin(M);p=Math.sin(p*M)/A,o=Math.sin(o*M)/A,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+y*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+y*o;const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-o*f,t[e+2]=c*g+u*f+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yc=class yc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oo.copy(this).projectOnVector(t),this.sub(oo)}reflect(t){return this.sub(oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos($t(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yc.prototype.isVector3=!0;let L=yc;const oo=new L,kc=new Di,Ec=class Ec{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],M=s[1],A=s[4],E=s[7],R=s[2],b=s[5],w=s[8];return r[0]=a*y+o*M+l*R,r[3]=a*m+o*A+l*b,r[6]=a*p+o*E+l*w,r[1]=c*y+u*M+d*R,r[4]=c*m+u*A+d*b,r[7]=c*p+u*E+d*w,r[2]=h*y+f*M+g*R,r[5]=h*m+f*A+g*b,r[8]=h*p+f*E+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=d*y,t[1]=(s*c-u*i)*y,t[2]=(o*i-s*a)*y,t[3]=h*y,t[4]=(u*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(lo.makeScale(t,e)),this}rotate(t){return this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ec.prototype.isMatrix3=!0;let Gt=Ec;const lo=new Gt,Gc=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hd(){const n={enabled:!0,workingColorSpace:Oa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ve&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ve&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?Ba:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Oa]:{primaries:t,whitePoint:i,transfer:Ba,toXYZ:Gc,fromXYZ:Hc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:Gc,fromXYZ:Hc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),n}const ee=Hd();function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Cs;class Vd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Cs===void 0&&(Cs=Br("canvas")),Cs.width=t.width,Cs.height=t.height;const s=Cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Cs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Br("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ci(e[i]/255)*255):e[i]=Ci(e[i]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wd=0;class ac{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(co(s[a].image)):r.push(co(s[a]))}else r=co(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function co(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let Xd=0;const ho=new L;class fn extends ts{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,i=ci,s=ci,r=ln,a=qi,o=Qn,l=Gn,c=fn.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ri(),this.name="",this.source=new ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ho).x}get height(){return this.source.getSize(ho).y}get depth(){return this.source.getSize(ho).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nl:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nl:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Qh;fn.DEFAULT_ANISOTROPY=1;const bc=class bc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,E=(f+1)/2,R=(p+1)/2,b=(u+h)/4,w=(d+y)/4,x=(g+m)/4;return A>E&&A>R?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=b/i,r=w/i):E>R?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=b/s,r=x/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=w/r,s=x/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-y)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar($t(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bc.prototype.isVector4=!0;let Pe=bc;class Yd extends ts{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new fn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ac(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends Yd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class lu extends fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qd extends fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qa=class qa{constructor(t,e,i,s,r,a,o,l,c,u,d,h,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,d,h,f,g,y,m)}set(t,e,i,s,r,a,o,l,c,u,d,h,f,g,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),a=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,g=o*u,y=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-y*c,e[9]=-o*l,e[2]=y-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,g=c*u,y=c*d;e[0]=h+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=y+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,g=c*u,y=c*d;e[0]=h-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,f=a*d,g=o*u,y=o*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+y,e[1]=l*d,e[5]=y*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=y-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-y*d}else if(t.order==="XZY"){const h=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+y,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=y*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jd,t,Zd)}lookAt(t,e,i){const s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Bi.crossVectors(i,Fn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Bi.crossVectors(i,Fn)),Bi.normalize(),Yr.crossVectors(Fn,Bi),s[0]=Bi.x,s[4]=Yr.x,s[8]=Fn.x,s[1]=Bi.y,s[5]=Yr.y,s[9]=Fn.y,s[2]=Bi.z,s[6]=Yr.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],M=i[3],A=i[7],E=i[11],R=i[15],b=s[0],w=s[4],x=s[8],T=s[12],D=s[1],C=s[5],I=s[9],V=s[13],q=s[2],F=s[6],H=s[10],k=s[14],Q=s[3],et=s[7],ut=s[11],yt=s[15];return r[0]=a*b+o*D+l*q+c*Q,r[4]=a*w+o*C+l*F+c*et,r[8]=a*x+o*I+l*H+c*ut,r[12]=a*T+o*V+l*k+c*yt,r[1]=u*b+d*D+h*q+f*Q,r[5]=u*w+d*C+h*F+f*et,r[9]=u*x+d*I+h*H+f*ut,r[13]=u*T+d*V+h*k+f*yt,r[2]=g*b+y*D+m*q+p*Q,r[6]=g*w+y*C+m*F+p*et,r[10]=g*x+y*I+m*H+p*ut,r[14]=g*T+y*V+m*k+p*yt,r[3]=M*b+A*D+E*q+R*Q,r[7]=M*w+A*C+E*F+R*et,r[11]=M*x+A*I+E*H+R*ut,r[15]=M*T+A*V+E*k+R*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],M=l*f-c*h,A=o*f-c*d,E=o*h-l*d,R=a*f-c*u,b=a*h-l*u,w=a*d-o*u;return e*(y*M-m*A+p*E)-i*(g*M-m*R+p*b)+s*(g*A-y*R+p*w)-r*(g*E-y*b+m*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],M=e*o-i*a,A=e*l-s*a,E=e*c-r*a,R=i*l-s*o,b=i*c-r*o,w=s*c-r*l,x=u*y-d*g,T=u*m-h*g,D=u*p-f*g,C=d*m-h*y,I=d*p-f*y,V=h*p-f*m,q=M*V-A*I+E*C+R*D-b*T+w*x;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/q;return t[0]=(o*V-l*I+c*C)*F,t[1]=(s*I-i*V-r*C)*F,t[2]=(y*w-m*b+p*R)*F,t[3]=(h*b-d*w-f*R)*F,t[4]=(l*D-a*V-c*T)*F,t[5]=(e*V-s*D+r*T)*F,t[6]=(m*E-g*w-p*A)*F,t[7]=(u*w-h*E+f*A)*F,t[8]=(a*I-o*D+c*x)*F,t[9]=(i*D-e*I-r*x)*F,t[10]=(g*b-y*E+p*M)*F,t[11]=(d*E-u*b-f*M)*F,t[12]=(o*T-a*C-l*x)*F,t[13]=(e*C-i*T+s*x)*F,t[14]=(y*A-g*R-m*M)*F,t[15]=(u*R-d*A+h*M)*F,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,y=a*u,m=a*d,p=o*d,M=l*c,A=l*u,E=l*d,R=i.x,b=i.y,w=i.z;return s[0]=(1-(y+p))*R,s[1]=(f+E)*R,s[2]=(g-A)*R,s[3]=0,s[4]=(f-E)*b,s[5]=(1-(h+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+A)*w,s[9]=(m-M)*w,s[10]=(1-(h+y))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Ps.set(s[0],s[1],s[2]).length();const o=Ps.set(s[4],s[5],s[6]).length(),l=Ps.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);const c=1/a,u=1/o,d=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,e.setFromRotationMatrix(Zn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=ui,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===ui)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Or)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=ui,l=!1){const c=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===ui)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Or)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};qa.prototype.isMatrix4=!0;let we=qa;const Ps=new L,Zn=new we,jd=new L(0,0,0),Zd=new L(1,1,1),Bi=new L,Yr=new L,Fn=new L,Vc=new we,Wc=new Di;class Ki{constructor(t=0,e=0,i=0,s=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class cu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kd=0;const Xc=new L,Ds=new Di,Si=new we,qr=new L,vr=new L,$d=new L,Jd=new Di,Yc=new L(1,0,0),qc=new L(0,1,0),jc=new L(0,0,1),Zc={type:"added"},Qd={type:"removed"},Ls={type:"childadded",child:null},uo={type:"childremoved",child:null};class tn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new L,e=new Ki,i=new Di,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new Gt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(qc,t)}rotateZ(t){return this.rotateOnAxis(jc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(qc,t)}translateZ(t){return this.translateOnAxis(jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qr.copy(t):qr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(vr,qr,this.up):Si.lookAt(qr,vr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(Si),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zc),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qd),uo.child=t,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zc),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,$d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}tn.DEFAULT_UP=new L(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fs extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tf={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new fs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function po(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Mt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ee.workingColorSpace){if(t=rc(t,1),e=$t(e,0,1),i=$t(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=po(a,r,t+1/3),this.g=po(a,r,t),this.b=po(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Bn){function i(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bn){const i=hu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return ee.workingToColorSpace(_n.copy(this),t),Math.round($t(_n.r*255,0,255))*65536+Math.round($t(_n.g*255,0,255))*256+Math.round($t(_n.b*255,0,255))}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(_n.copy(this),e);const i=_n.r,s=_n.g,r=_n.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=Bn){ee.workingToColorSpace(_n.copy(this),t);const e=_n.r,i=_n.g,s=_n.b;return t!==Bn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(jr);const i=Lr(zi.h,jr.h,e),s=Lr(zi.s,jr.s,e),r=Lr(zi.l,jr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Mt;Mt.NAMES=hu;class ef extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Kn=new L,yi=new L,mo=new L,Ei=new L,Is=new L,Us=new L,Kc=new L,_o=new L,go=new L,xo=new L,vo=new Pe,Mo=new Pe,So=new Pe;class Wn{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Kn.subVectors(t,e),s.cross(Kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Kn.subVectors(s,e),yi.subVectors(i,e),mo.subVectors(t,e);const a=Kn.dot(Kn),o=Kn.dot(yi),l=Kn.dot(mo),c=yi.dot(yi),u=yi.dot(mo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return vo.setScalar(0),Mo.setScalar(0),So.setScalar(0),vo.fromBufferAttribute(t,e),Mo.fromBufferAttribute(t,i),So.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(vo,r.x),a.addScaledVector(Mo,r.y),a.addScaledVector(So,r.z),a}static isFrontFacing(t,e,i,s){return Kn.subVectors(i,e),yi.subVectors(t,e),Kn.cross(yi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Kn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Wn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Is.subVectors(s,i),Us.subVectors(r,i),_o.subVectors(t,i);const l=Is.dot(_o),c=Us.dot(_o);if(l<=0&&c<=0)return e.copy(i);go.subVectors(t,s);const u=Is.dot(go),d=Us.dot(go);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Is,a);xo.subVectors(t,r);const f=Is.dot(xo),g=Us.dot(xo);if(g>=0&&f<=g)return e.copy(r);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Us,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Kc.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Kc,o);const p=1/(m+y+h);return a=y*p,o=h*p,e.copy(i).addScaledVector(Is,a).addScaledVector(Us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Hr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),Kr.subVectors(this.max,Mr),Ns.subVectors(t.a,Mr),Fs.subVectors(t.b,Mr),Os.subVectors(t.c,Mr),ki.subVectors(Fs,Ns),Gi.subVectors(Os,Fs),rs.subVectors(Ns,Os);let e=[0,-ki.z,ki.y,0,-Gi.z,Gi.y,0,-rs.z,rs.y,ki.z,0,-ki.x,Gi.z,0,-Gi.x,rs.z,0,-rs.x,-ki.y,ki.x,0,-Gi.y,Gi.x,0,-rs.y,rs.x,0];return!yo(e,Ns,Fs,Os,Kr)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,Ns,Fs,Os,Kr))?!1:($r.crossVectors(ki,Gi),e=[$r.x,$r.y,$r.z],yo(e,Ns,Fs,Os,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const bi=[new L,new L,new L,new L,new L,new L,new L,new L],$n=new L,Zr=new Hr,Ns=new L,Fs=new L,Os=new L,ki=new L,Gi=new L,rs=new L,Mr=new L,Kr=new L,$r=new L,as=new L;function yo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){as.fromArray(n,r);const o=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=t.dot(as),c=e.dot(as),u=i.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const je=new L,Jr=new Tt;let nf=0;class Ne extends ts{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Nl,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class uu extends Ne{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class du extends Ne{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Oe extends Ne{constructor(t,e,i){super(new Float32Array(t),e,i)}}const sf=new Hr,Sr=new L,Eo=new L;class Za{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):sf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Eo)),this.expandByPoint(Sr.copy(t.center).sub(Eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let rf=0;const Vn=new we,bo=new tn,Bs=new L,On=new Hr,yr=new Hr,an=new L;class Qe extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yd(t)?du:uu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Oe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Za);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(On.min,yr.min),On.expandByPoint(an),an.addVectors(On.max,yr.max),On.expandByPoint(an)):(On.expandByPoint(yr.min),On.expandByPoint(yr.max))}On.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)an.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(an));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)an.fromBufferAttribute(o,c),l&&(Bs.fromBufferAttribute(t,c),an.add(Bs)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new L,l[x]=new L;const c=new L,u=new L,d=new L,h=new Tt,f=new Tt,g=new Tt,y=new L,m=new L;function p(x,T,D){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,D),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,D),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),o[x].add(y),o[T].add(y),o[D].add(y),l[x].add(m),l[T].add(m),l[D].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,T=M.length;x<T;++x){const D=M[x],C=D.start,I=D.count;for(let V=C,q=C+I;V<q;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const A=new L,E=new L,R=new L,b=new L;function w(x){R.fromBufferAttribute(s,x),b.copy(R);const T=o[x];A.copy(T),A.sub(R.multiplyScalar(R.dot(T))).normalize(),E.crossVectors(b,T);const C=E.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,C)}for(let x=0,T=M.length;x<T;++x){const D=M[x],C=D.start,I=D.count;for(let V=C,q=C+I;V<q;V+=3)w(t.getX(V+0)),w(t.getX(V+1)),w(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,d=new L;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Ne(h,u,d)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class af{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nl,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yn=new L;class ka{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix4(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)yn.fromBufferAttribute(this,e),yn.applyNormalMatrix(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)yn.fromBufferAttribute(this,e),yn.transformDirection(t),this.setXYZ(e,yn.x,yn.y,yn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Jn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){za("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ka(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){za("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let of=0;class vs extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Js,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=jo,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qo&&(i.blendSrc=this.blendSrc),this.blendDst!==jo&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ca extends vs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zs;const Er=new L,ks=new L,Gs=new L,Hs=new Tt,br=new Tt,fu=new we,Qr=new L,Tr=new L,ta=new L,$c=new Tt,To=new Tt,Jc=new Tt;class Ao extends tn{constructor(t=new Ca){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new Qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new af(e,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new ka(i,3,0,!1)),zs.setAttribute("uv",new ka(i,2,3,!1))}this.geometry=zs,this.material=t,this.center=new Tt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Gs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;ea(Qr.set(-.5,-.5,0),Gs,a,ks,s,r),ea(Tr.set(.5,-.5,0),Gs,a,ks,s,r),ea(ta.set(.5,.5,0),Gs,a,ks,s,r),$c.set(0,0),To.set(1,0),Jc.set(1,1);let o=t.ray.intersectTriangle(Qr,Tr,ta,!1,Er);if(o===null&&(ea(Tr.set(-.5,.5,0),Gs,a,ks,s,r),To.set(0,1),o=t.ray.intersectTriangle(Qr,ta,Tr,!1,Er),o===null))return;const l=t.ray.origin.distanceTo(Er);l<t.near||l>t.far||e.push({distance:l,point:Er.clone(),uv:Wn.getInterpolation(Er,Qr,Tr,ta,$c,To,Jc,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ea(n,t,e,i,s,r){Hs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(br.x=r*Hs.x-s*Hs.y,br.y=s*Hs.x+r*Hs.y):br.copy(Hs),n.copy(t),n.x+=br.x,n.y+=br.y,n.applyMatrix4(fu)}const Ti=new L,wo=new L,na=new L,Hi=new L,Ro=new L,ia=new L,Co=new L;class oc{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){wo.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(wo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(na),o=Hi.dot(this.direction),l=-Hi.dot(na),c=Hi.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(wo).addScaledVector(na,h),f}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);const i=Ti.dot(this.direction),s=Ti.dot(Ti)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,i,s,r){Ro.subVectors(e,t),ia.subVectors(i,t),Co.crossVectors(Ro,ia);let a=this.direction.dot(Co),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,t);const l=o*this.direction.dot(ia.crossVectors(Hi,ia));if(l<0)return null;const c=o*this.direction.dot(Ro.cross(Hi));if(c<0||l+c>a)return null;const u=-o*Hi.dot(Co);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ga extends vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qc=new we,os=new oc,sa=new Za,th=new L,ra=new L,aa=new L,oa=new L,Po=new L,la=new L,eh=new L,ca=new L;class Fe extends tn{constructor(t=new Qe,e=new Ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(Po.fromBufferAttribute(d,t),a?la.addScaledVector(Po,u):la.addScaledVector(Po.sub(e),u))}e.add(la)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(sa.containsPoint(os.origin)===!1&&(os.intersectSphere(sa,th)===null||os.origin.distanceToSquared(th)>(t.far-t.near)**2))&&(Qc.copy(r).invert(),os.copy(t.ray).applyMatrix4(Qc),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=M,R=A;E<R;E+=3){const b=o.getX(E),w=o.getX(E+1),x=o.getX(E+2);s=ha(this,p,t,i,c,u,d,b,w,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const M=o.getX(m),A=o.getX(m+1),E=o.getX(m+2);s=ha(this,a,t,i,c,u,d,M,A,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=M,R=A;E<R;E+=3){const b=E,w=E+1,x=E+2;s=ha(this,p,t,i,c,u,d,b,w,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const M=m,A=m+1,E=m+2;s=ha(this,a,t,i,c,u,d,M,A,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function lf(n,t,e,i,s,r,a,o){let l;if(t.side===An?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Zi,o),l===null)return null;ca.copy(o),ca.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ca);return c<e.near||c>e.far?null:{distance:c,point:ca.clone(),object:n}}function ha(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,ra),n.getVertexPosition(l,aa),n.getVertexPosition(c,oa);const u=lf(n,t,e,i,ra,aa,oa,eh);if(u){const d=new L;Wn.getBarycoord(eh,ra,aa,oa,d),s&&(u.uv=Wn.getInterpolatedAttribute(s,o,l,c,d,new Tt)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,o,l,c,d,new Tt)),a&&(u.normal=Wn.getInterpolatedAttribute(a,o,l,c,d,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new L,materialIndex:0};Wn.getNormal(ra,aa,oa,h.normal),u.face=h,u.barycoord=d}return u}class cf extends fn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=dn,u=dn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Do=new L,hf=new L,uf=new Gt;class Ai{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Do.subVectors(i,e).cross(hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Do),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||uf.getNormalMatrix(t),s=this.coplanarPoint(Do).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Za,df=new Tt(.5,.5),ua=new L;class lc{constructor(t=new Ai,e=new Ai,i=new Ai,s=new Ai,r=new Ai,a=new Ai){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ui,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],M=r[12],A=r[13],E=r[14],R=r[15];if(s[0].setComponents(c-a,f-u,p-g,R-M).normalize(),s[1].setComponents(c+a,f+u,p+g,R+M).normalize(),s[2].setComponents(c+o,f+d,p+y,R+A).normalize(),s[3].setComponents(c-o,f-d,p-y,R-A).normalize(),i)s[4].setComponents(l,h,m,E).normalize(),s[5].setComponents(c-l,f-h,p-m,R-E).normalize();else if(s[4].setComponents(c-l,f-h,p-m,R-E).normalize(),e===ui)s[5].setComponents(c+l,f+h,p+m,R+E).normalize();else if(e===Or)s[5].setComponents(l,h,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){ls.center.set(0,0,0);const e=df.distanceTo(t.center);return ls.radius=.7071067811865476+e,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ua.x=s.normal.x>0?t.max.x:t.min.x,ua.y=s.normal.y>0?t.max.y:t.min.y,ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ff extends vs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nh=new we,Bl=new oc,da=new Za,fa=new L;class Lo extends tn{constructor(t=new Qe,e=new ff){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;nh.copy(s).invert(),Bl.copy(t.ray).applyMatrix4(nh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,y=f;g<y;g++){const m=c.getX(g);fa.fromBufferAttribute(d,m),ih(fa,m,l,s,t,e,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,y=f;g<y;g++)fa.fromBufferAttribute(d,g),ih(fa,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ih(n,t,e,i,s,r,a){const o=Bl.distanceSqToPoint(n);if(o<e){const l=new L;Bl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class pu extends fn{constructor(t=[],e=_s,i,s,r,a,o,l,c,u){super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kr extends fn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sr extends fn{constructor(t,e,i=fi,s,r,a,o=dn,l=dn,c,u=Pi,d=1){if(u!==Pi&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class pf extends sr{constructor(t,e=fi,i=_s,s,r,a=dn,o=dn,l,c=Pi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class mu extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ms extends Qe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Oe(c,3)),this.setAttribute("normal",new Oe(u,3)),this.setAttribute("uv",new Oe(d,2));function g(y,m,p,M,A,E,R,b,w,x,T){const D=E/w,C=R/x,I=E/2,V=R/2,q=b/2,F=w+1,H=x+1;let k=0,Q=0;const et=new L;for(let ut=0;ut<H;ut++){const yt=ut*C-V;for(let Rt=0;Rt<F;Rt++){const te=Rt*D-I;et[y]=te*M,et[m]=yt*A,et[p]=q,c.push(et.x,et.y,et.z),et[y]=0,et[m]=0,et[p]=b>0?1:-1,u.push(et.x,et.y,et.z),d.push(Rt/w),d.push(1-ut/x),k+=1}}for(let ut=0;ut<x;ut++)for(let yt=0;yt<w;yt++){const Rt=h+yt+F*ut,te=h+yt+F*(ut+1),ue=h+(yt+1)+F*(ut+1),Bt=h+(yt+1)+F*ut;l.push(Rt,te,Bt),l.push(te,ue,Bt),Q+=6}o.addGroup(f,Q,T),f+=Q,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class cc extends Qe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new L,u=new Tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Oe(a,3)),this.setAttribute("normal",new Oe(o,3)),this.setAttribute("uv",new Oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ks extends Qe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const y=[],m=i/2;let p=0;M(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Oe(d,3)),this.setAttribute("normal",new Oe(h,3)),this.setAttribute("uv",new Oe(f,2));function M(){const E=new L,R=new L;let b=0;const w=(e-t)/i;for(let x=0;x<=r;x++){const T=[],D=x/r,C=D*(e-t)+t;for(let I=0;I<=s;I++){const V=I/s,q=V*l+o,F=Math.sin(q),H=Math.cos(q);R.x=C*F,R.y=-D*i+m,R.z=C*H,d.push(R.x,R.y,R.z),E.set(F,w,H).normalize(),h.push(E.x,E.y,E.z),f.push(V,1-D),T.push(g++)}y.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){const D=y[T][x],C=y[T+1][x],I=y[T+1][x+1],V=y[T][x+1];(t>0||T!==0)&&(u.push(D,C,V),b+=3),(e>0||T!==r-1)&&(u.push(C,I,V),b+=3)}c.addGroup(p,b,0),p+=b}function A(E){const R=g,b=new Tt,w=new L;let x=0;const T=E===!0?t:e,D=E===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*D,0),h.push(0,D,0),f.push(.5,.5),g++;const C=g;for(let I=0;I<=s;I++){const q=I/s*l+o,F=Math.cos(q),H=Math.sin(q);w.x=T*H,w.y=m*D,w.z=T*F,d.push(w.x,w.y,w.z),h.push(0,D,0),b.x=F*.5+.5,b.y=H*.5*D+.5,f.push(b.x,b.y),g++}for(let I=0;I<s;I++){const V=R+I,q=C+I;E===!0?u.push(q,q+1,V):u.push(q+1,q,V),x+=3}c.addGroup(p,x,E===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vr extends Qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const M=p*h-a;for(let A=0;A<c;A++){const E=A*d-r;g.push(E,-M,0),y.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const A=M+c*p,E=M+c*(p+1),R=M+1+c*(p+1),b=M+1+c*p;f.push(A,E,b),f.push(E,R,b)}this.setIndex(f),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.width,t.height,t.widthSegments,t.heightSegments)}}class hc extends Qe{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=t;const h=(e-t)/s,f=new L,g=new Tt;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let y=0;y<s;y++){const m=y*(i+1);for(let p=0;p<i;p++){const M=p+m,A=M,E=M+i+1,R=M+i+2,b=M+1;o.push(A,E,b),o.push(E,R,b)}}this.setIndex(o),this.setAttribute("position",new Oe(l,3)),this.setAttribute("normal",new Oe(c,3)),this.setAttribute("uv",new Oe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ha extends Qe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new L,h=new L,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){const M=[],A=p/i;let E=0;p===0&&a===0?E=.5/e:p===i&&l===Math.PI&&(E=-.5/e);for(let R=0;R<=e;R++){const b=R/e;d.x=-t*Math.cos(s+b*r)*Math.sin(a+A*o),d.y=t*Math.cos(a+A*o),d.z=t*Math.sin(s+b*r)*Math.sin(a+A*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(b+E,1-A),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const A=u[p][M+1],E=u[p][M],R=u[p+1][M],b=u[p+1][M+1];(p!==0||a>0)&&f.push(A,E,b),(p!==i-1||l<Math.PI)&&f.push(E,R,b)}this.setIndex(f),this.setAttribute("position",new Oe(g,3)),this.setAttribute("normal",new Oe(y,3)),this.setAttribute("uv",new Oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function rr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(sh(s))s.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(sh(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function En(n){const t={};for(let e=0;e<n.length;e++){const i=rr(n[e]);for(const s in i)t[s]=i[s]}return t}function sh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function mf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function _u(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const gu={clone:rr,merge:En};var _f=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_f,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class xf extends wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vs extends vs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Kl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vf extends vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mf extends vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Io={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(rh(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!rh(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function rh(n){try{const t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Sf{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yf=new Sf;class uc{constructor(t){this.manager=t!==void 0?t:yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}uc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ws=new WeakMap;class Ef extends uc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Io.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Ws.get(a);d===void 0&&(d=[],Ws.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=Br("img");function l(){u(),e&&e(this);const d=Ws.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Ws.delete(this),r.manager.itemEnd(t)}function c(d){u(),s&&s(d),Io.remove(`image:${t}`);const h=Ws.get(this)||[];for(let f=0;f<h.length;f++){const g=h[f];g.onError&&g.onError(d)}Ws.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Io.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class bf extends uc{constructor(t){super(t)}load(t,e,i,s){const r=new fn,a=new Ef(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class dc extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Tf extends dc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Uo=new we,ah=new L,oh=new L;class xu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lc,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(ah),oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oh),e.updateMatrixWorld(),Uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Or||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pa=new L,ma=new Di,ri=new L;class vu extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pa,ma,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,ri.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(pa,ma,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new L,lh=new Tt,ch=new Tt;class zn extends vu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-t/Vi.z)}getViewSize(t,e){return this.getViewBounds(t,lh,ch),e.subVectors(ch,lh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Dr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Af extends xu{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}}class wf extends dc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Af}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class fc extends vu{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Rf extends xu{constructor(){super(new fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hh extends dc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Rf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Xs=-90,Ys=1;class Mu extends tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zn(Xs,Ys,t,e);s.layers=this.layers,this.add(s);const r=new zn(Xs,Ys,t,e);r.layers=this.layers,this.add(r);const a=new zn(Xs,Ys,t,e);a.layers=this.layers,this.add(a);const o=new zn(Xs,Ys,t,e);o.layers=this.layers,this.add(o);const l=new zn(Xs,Ys,t,e);l.layers=this.layers,this.add(l);const c=new zn(Xs,Ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Or)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cf extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Pf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Df.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Df(){this._document.hidden===!1&&this.reset()}class uh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Tc=class Tc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Tc.prototype.isMatrix2=!0;let dh=Tc;class Su extends ts{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){It("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function fh(n,t,e,i){const s=Lf(i);switch(e){case su:return n*t;case au:return n*t/s.components*s.byteLength;case tc:return n*t/s.components*s.byteLength;case gs:return n*t*2/s.components*s.byteLength;case ec:return n*t*2/s.components*s.byteLength;case ru:return n*t*3/s.components*s.byteLength;case Qn:return n*t*4/s.components*s.byteLength;case nc:return n*t*4/s.components*s.byteLength;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wa:case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rl:case ol:return Math.max(n,16)*Math.max(t,8)/4;case sl:case al:return Math.max(n,8)*Math.max(t,8)/2;case ll:case cl:case ul:case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case hl:case Na:case fl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Rl:case Cl:case Pl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Dl:case Ll:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Fa:case Il:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lf(n){switch(n){case Gn:case tu:return{byteLength:1,components:1};case Nr:case eu:case pi:return{byteLength:2,components:1};case Jl:case Ql:return{byteLength:2,components:4};case fi:case $l:case hi:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zl}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yu(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function If(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const y=d[f];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nf=`#ifdef USE_ALPHAHASH
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
#endif`,Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
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
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf=`#ifdef USE_BATCHING
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
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qf=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ip=`#define PI 3.141592653589793
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
} // validated`,sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rp=`vec3 transformedNormal = objectNormal;
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
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
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
}`,yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ap=`#ifdef USE_ENVMAP
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
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
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
#endif`,Lp=`uniform sampler2D dfgLUT;
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
}`,Ip=`
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
#endif`,Up=`#if defined( RE_IndirectDiffuse )
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
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wp=`#if defined( USE_POINTS_UV )
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
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`#ifdef USE_MORPHTARGETS
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
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,im=`#ifdef USE_NORMALMAP
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
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vm=`float getShadowMask() {
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
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
}`,Gm=`#if DEPTH_PACKING == 3200
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
}`,Hm=`#define DISTANCE
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
}`,Vm=`#define DISTANCE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`uniform float scale;
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
}`,qm=`uniform vec3 diffuse;
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
}`,jm=`#include <common>
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Km=`#define LAMBERT
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
}`,$m=`#define LAMBERT
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
}`,Jm=`#define MATCAP
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
}`,Qm=`#define MATCAP
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
}`,t0=`#define NORMAL
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
}`,e0=`#define NORMAL
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
}`,n0=`#define PHONG
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
}`,i0=`#define PHONG
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
}`,s0=`#define STANDARD
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
}`,r0=`#define STANDARD
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
}`,a0=`#define TOON
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
}`,o0=`#define TOON
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
}`,l0=`uniform float size;
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
}`,c0=`uniform vec3 diffuse;
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
}`,h0=`#include <common>
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
}`,u0=`uniform vec3 color;
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
}`,d0=`uniform float rotation;
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
}`,f0=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Uf,alphahash_pars_fragment:Nf,alphamap_fragment:Ff,alphamap_pars_fragment:Of,alphatest_fragment:Bf,alphatest_pars_fragment:zf,aomap_fragment:kf,aomap_pars_fragment:Gf,batching_pars_vertex:Hf,batching_vertex:Vf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:Yf,iridescence_fragment:qf,bumpmap_pars_fragment:jf,clipping_planes_fragment:Zf,clipping_planes_pars_fragment:Kf,clipping_planes_pars_vertex:$f,clipping_planes_vertex:Jf,color_fragment:Qf,color_pars_fragment:tp,color_pars_vertex:ep,color_vertex:np,common:ip,cube_uv_reflection_fragment:sp,defaultnormal_vertex:rp,displacementmap_pars_vertex:ap,displacementmap_vertex:op,emissivemap_fragment:lp,emissivemap_pars_fragment:cp,colorspace_fragment:hp,colorspace_pars_fragment:up,envmap_fragment:dp,envmap_common_pars_fragment:fp,envmap_pars_fragment:pp,envmap_pars_vertex:mp,envmap_physical_pars_fragment:Ap,envmap_vertex:_p,fog_vertex:gp,fog_pars_vertex:xp,fog_fragment:vp,fog_pars_fragment:Mp,gradientmap_pars_fragment:Sp,lightmap_pars_fragment:yp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:bp,lights_pars_begin:Tp,lights_toon_fragment:wp,lights_toon_pars_fragment:Rp,lights_phong_fragment:Cp,lights_phong_pars_fragment:Pp,lights_physical_fragment:Dp,lights_physical_pars_fragment:Lp,lights_fragment_begin:Ip,lights_fragment_maps:Up,lights_fragment_end:Np,lightprobes_pars_fragment:Fp,logdepthbuf_fragment:Op,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:zp,logdepthbuf_vertex:kp,map_fragment:Gp,map_pars_fragment:Hp,map_particle_fragment:Vp,map_particle_pars_fragment:Wp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:Yp,morphinstance_vertex:qp,morphcolor_vertex:jp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Kp,morphtarget_vertex:$p,normal_fragment_begin:Jp,normal_fragment_maps:Qp,normal_pars_fragment:tm,normal_pars_vertex:em,normal_vertex:nm,normalmap_pars_fragment:im,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:am,iridescence_pars_fragment:om,opaque_fragment:lm,packing:cm,premultiplied_alpha_fragment:hm,project_vertex:um,dithering_fragment:dm,dithering_pars_fragment:fm,roughnessmap_fragment:pm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:gm,shadowmap_vertex:xm,shadowmask_pars_fragment:vm,skinbase_vertex:Mm,skinning_pars_vertex:Sm,skinning_vertex:ym,skinnormal_vertex:Em,specularmap_fragment:bm,specularmap_pars_fragment:Tm,tonemapping_fragment:Am,tonemapping_pars_fragment:wm,transmission_fragment:Rm,transmission_pars_fragment:Cm,uv_pars_fragment:Pm,uv_pars_vertex:Dm,uv_vertex:Lm,worldpos_vertex:Im,background_vert:Um,background_frag:Nm,backgroundCube_vert:Fm,backgroundCube_frag:Om,cube_vert:Bm,cube_frag:zm,depth_vert:km,depth_frag:Gm,distance_vert:Hm,distance_frag:Vm,equirect_vert:Wm,equirect_frag:Xm,linedashed_vert:Ym,linedashed_frag:qm,meshbasic_vert:jm,meshbasic_frag:Zm,meshlambert_vert:Km,meshlambert_frag:$m,meshmatcap_vert:Jm,meshmatcap_frag:Qm,meshnormal_vert:t0,meshnormal_frag:e0,meshphong_vert:n0,meshphong_frag:i0,meshphysical_vert:s0,meshphysical_frag:r0,meshtoon_vert:a0,meshtoon_frag:o0,points_vert:l0,points_frag:c0,shadow_vert:h0,shadow_frag:u0,sprite_vert:d0,sprite_frag:f0},pt={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},li={basic:{uniforms:En([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:En([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:En([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:En([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:En([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:En([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:En([pt.points,pt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:En([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:En([pt.common,pt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:En([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:En([pt.sprite,pt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:En([pt.common,pt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:En([pt.lights,pt.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};li.physical={uniforms:En([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const _a={r:0,b:0,g:0},p0=new we,Eu=new Gt;Eu.set(-1,0,0,0,1,0,0,0,1);function m0(n,t,e,i,s,r){const a=new Mt(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const E=M.backgroundBlurriness>0;A=t.get(A,E)}return A}function g(M){let A=!1;const E=f(M);E===null?m(a,o):E&&E.isColor&&(m(E,1),A=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(M,A){const E=f(A);E&&(E.isCubeTexture||E.mapping===ja)?(c===void 0&&(c=new Fe(new Ms(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:rr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(p0.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Eu),c.material.toneMapped=ee.getTransfer(E.colorSpace)!==ve,(u!==E||d!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Fe(new Vr(2,2),new wn({name:"BackgroundMaterial",uniforms:rr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ee.getTransfer(E.colorSpace)!==ve,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,A){M.getRGB(_a,_u(n)),e.buffers.color.setClear(_a.r,_a.g,_a.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:y,dispose:p}}function _0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(C,I,V,q,F){let H=!1;const k=d(C,q,V,I);r!==k&&(r=k,c(r.object)),H=f(C,q,V,F),H&&g(C,q,V,F),F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,E(C,I,V,q),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function d(C,I,V,q){const F=q.wireframe===!0;let H=i[I.id];H===void 0&&(H={},i[I.id]=H);const k=C.isInstancedMesh===!0?C.id:0;let Q=H[k];Q===void 0&&(Q={},H[k]=Q);let et=Q[V.id];et===void 0&&(et={},Q[V.id]=et);let ut=et[F];return ut===void 0&&(ut=h(l()),et[F]=ut),ut}function h(C){const I=[],V=[],q=[];for(let F=0;F<e;F++)I[F]=0,V[F]=0,q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:q,object:C,attributes:{},index:null}}function f(C,I,V,q){const F=r.attributes,H=I.attributes;let k=0;const Q=V.getAttributes();for(const et in Q)if(Q[et].location>=0){const yt=F[et];let Rt=H[et];if(Rt===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(Rt=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(Rt=C.instanceColor)),yt===void 0||yt.attribute!==Rt||Rt&&yt.data!==Rt.data)return!0;k++}return r.attributesNum!==k||r.index!==q}function g(C,I,V,q){const F={},H=I.attributes;let k=0;const Q=V.getAttributes();for(const et in Q)if(Q[et].location>=0){let yt=H[et];yt===void 0&&(et==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),et==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const Rt={};Rt.attribute=yt,yt&&yt.data&&(Rt.data=yt.data),F[et]=Rt,k++}r.attributes=F,r.attributesNum=k,r.index=q}function y(){const C=r.newAttributes;for(let I=0,V=C.length;I<V;I++)C[I]=0}function m(C){p(C,0)}function p(C,I){const V=r.newAttributes,q=r.enabledAttributes,F=r.attributeDivisors;V[C]=1,q[C]===0&&(n.enableVertexAttribArray(C),q[C]=1),F[C]!==I&&(n.vertexAttribDivisor(C,I),F[C]=I)}function M(){const C=r.newAttributes,I=r.enabledAttributes;for(let V=0,q=I.length;V<q;V++)I[V]!==C[V]&&(n.disableVertexAttribArray(V),I[V]=0)}function A(C,I,V,q,F,H,k){k===!0?n.vertexAttribIPointer(C,I,V,F,H):n.vertexAttribPointer(C,I,V,q,F,H)}function E(C,I,V,q){y();const F=q.attributes,H=V.getAttributes(),k=I.defaultAttributeValues;for(const Q in H){const et=H[Q];if(et.location>=0){let ut=F[Q];if(ut===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(ut=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(ut=C.instanceColor)),ut!==void 0){const yt=ut.normalized,Rt=ut.itemSize,te=t.get(ut);if(te===void 0)continue;const ue=te.buffer,Bt=te.type,K=te.bytesPerElement,mt=Bt===n.INT||Bt===n.UNSIGNED_INT||ut.gpuType===$l;if(ut.isInterleavedBufferAttribute){const ot=ut.data,Dt=ot.stride,Ut=ut.offset;if(ot.isInstancedInterleavedBuffer){for(let Ct=0;Ct<et.locationSize;Ct++)p(et.location+Ct,ot.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ct=0;Ct<et.locationSize;Ct++)m(et.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let Ct=0;Ct<et.locationSize;Ct++)A(et.location+Ct,Rt/et.locationSize,Bt,yt,Dt*K,(Ut+Rt/et.locationSize*Ct)*K,mt)}else{if(ut.isInstancedBufferAttribute){for(let ot=0;ot<et.locationSize;ot++)p(et.location+ot,ut.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ot=0;ot<et.locationSize;ot++)m(et.location+ot);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let ot=0;ot<et.locationSize;ot++)A(et.location+ot,Rt/et.locationSize,Bt,yt,Rt*K,Rt/et.locationSize*ot*K,mt)}}else if(k!==void 0){const yt=k[Q];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv(et.location,yt);break;case 3:n.vertexAttrib3fv(et.location,yt);break;case 4:n.vertexAttrib4fv(et.location,yt);break;default:n.vertexAttrib1fv(et.location,yt)}}}}M()}function R(){T();for(const C in i){const I=i[C];for(const V in I){const q=I[V];for(const F in q){const H=q[F];for(const k in H)u(H[k].object),delete H[k];delete q[F]}}delete i[C]}}function b(C){if(i[C.id]===void 0)return;const I=i[C.id];for(const V in I){const q=I[V];for(const F in q){const H=q[F];for(const k in H)u(H[k].object),delete H[k];delete q[F]}}delete i[C.id]}function w(C){for(const I in i){const V=i[I];for(const q in V){const F=V[q];if(F[C.id]===void 0)continue;const H=F[C.id];for(const k in H)u(H[k].object),delete H[k];delete F[C.id]}}}function x(C){for(const I in i){const V=i[I],q=C.isInstancedMesh===!0?C.id:0,F=V[q];if(F!==void 0){for(const H in F){const k=F[H];for(const Q in k)u(k[Q].object),delete k[Q];delete F[H]}delete V[q],Object.keys(V).length===0&&delete i[I]}}}function T(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:D,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function g0(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function x0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Qn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Gn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==hi&&!x)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(It("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:E,maxSamples:R,samples:b}}function v0(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Ai,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:i,A=M*4;let E=p.clippingState||null;l.value=E,E=u(g,h,A,f);for(let R=0;R!==A;++R)E[R]=e[R];p.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const p=f+y*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,E=f;A!==y;++A,E+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}const ji=4,ph=[.125,.215,.35,.446,.526,.582],hs=20,M0=256,Ar=new fc,mh=new Mt;let No=null,Fo=0,Oo=0,Bo=!1;const S0=new L;class _h{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=S0}=r;No=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(No,Fo,Oo),this._renderer.xr.enabled=Bo,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),No=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:pi,format:Qn,colorSpace:Oa,depthBuffer:!1},s=gh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=y0(r)),this._blurMaterial=b0(r,t,e),this._ggxMaterial=E0(r,t,e)}return s}_compileMaterial(t){const e=new Fe(new Qe,t);this._renderer.compile(e,Ar)}_sceneToCubeUV(t,e,i,s,r){const l=new zn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(mh),d.toneMapping=di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new Ms,new Ga({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(mh),p=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):E===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const R=this._cubeSize;qs(s,E*R,A>2?R:0,R,R),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===_s||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;qs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ar)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-ji?i-g+ji:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,qs(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Ar),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,qs(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,Ar)}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ie("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hs-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):hs;m>hs&&It(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);const p=[];let M=0;for(let w=0;w<hs;++w){const x=w/y,T=Math.exp(-x*x/2);p.push(T),w===0?M+=T:w<m&&(M+=2*T)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-i;const E=this._sizeLods[s],R=3*E*(s>A-ji?s-A+ji:0),b=4*(this._cubeSize-E);qs(e,R,b,3*E,2*E),l.setRenderTarget(e),l.render(d,Ar)}}function y0(n){const t=[],e=[],i=[];let s=n;const r=n-ji+1+ph.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-ji?l=ph[a-n+ji-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,y=3,m=2,p=1,M=new Float32Array(y*g*f),A=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let b=0;b<f;b++){const w=b%3*2/3-1,x=b>2?0:-1,T=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];M.set(T,y*g*b),A.set(h,m*g*b);const D=[b,b,b,b,b,b];E.set(D,p*g*b)}const R=new Qe;R.setAttribute("position",new Ne(M,y)),R.setAttribute("uv",new Ne(A,m)),R.setAttribute("faceIndex",new Ne(E,p)),i.push(new Fe(R,null)),s>ji&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function gh(n,t,e){const i=new ti(n,t,e);return i.texture.mapping=ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function E0(n,t,e){return new wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:M0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function b0(n,t,e){const i=new Float32Array(hs),s=new L(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function xh(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function vh(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Ka(){return`

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
	`}class pc extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new pu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ms(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:wi});r.uniforms.tEquirect.value=e;const a=new Fe(s,r),o=e.minFilter;return e.minFilter===qi&&(e.minFilter=ln),new Mu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function T0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===so||f===ro)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const y=new pc(g.height);return y.fromEquirectangularTexture(n,h),t.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===so||f===ro,y=f===_s||f===ir;if(g||y){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new _h(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||y&&M&&l(M)?(i===null&&(i=new _h(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===so?h.mapping=_s:f===ro&&(h.mapping=ir),h}function l(h){let f=0;const g=6;for(let y=0;y<g;y++)h[y]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function A0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Fl("WebGLRenderer: "+i+" extension not supported."),s}}}function w0(n,t,e,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let y=0;if(g===void 0)return;if(f!==null){const M=f.array;y=f.version;for(let A=0,E=M.length;A<E;A+=3){const R=M[A+0],b=M[A+1],w=M[A+2];h.push(R,b,b,w,w,R)}}else{const M=g.array;y=g.version;for(let A=0,E=M.length/3-1;A<E;A+=3){const R=A+0,b=A+1,w=A+2;h.push(R,b,b,w,w,R)}}const m=new(g.count>=65535?du:uu)(h,1);m.version=y;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function R0(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),e.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function C0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function P0(n,t,e){const i=new WeakMap,s=new Pe;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let D=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",D)};var f=D;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let R=o.attributes.position.count*E,b=1;R>t.maxTextureSize&&(b=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const w=new Float32Array(R*b*4*d),x=new lu(w,R,b,d);x.type=hi,x.needsUpdate=!0;const T=E*4;for(let C=0;C<d;C++){const I=p[C],V=M[C],q=A[C],F=R*b*4*C;for(let H=0;H<I.count;H++){const k=H*T;g===!0&&(s.fromBufferAttribute(I,H),w[F+k+0]=s.x,w[F+k+1]=s.y,w[F+k+2]=s.z,w[F+k+3]=0),y===!0&&(s.fromBufferAttribute(V,H),w[F+k+4]=s.x,w[F+k+5]=s.y,w[F+k+6]=s.z,w[F+k+7]=0),m===!0&&(s.fromBufferAttribute(q,H),w[F+k+8]=s.x,w[F+k+9]=s.y,w[F+k+10]=s.z,w[F+k+11]=q.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new Tt(R,b)},i.set(o,h),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function D0(n,t,e,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const L0={[Yh]:"LINEAR_TONE_MAPPING",[qh]:"REINHARD_TONE_MAPPING",[jh]:"CINEON_TONE_MAPPING",[Zh]:"ACES_FILMIC_TONE_MAPPING",[$h]:"AGX_TONE_MAPPING",[Jh]:"NEUTRAL_TONE_MAPPING",[Kh]:"CUSTOM_TONE_MAPPING"};function I0(n,t,e,i,s){const r=new ti(t,e,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new sr(t,e):void 0}),a=new ti(t,e,{type:pi,depthBuffer:!1,stencilBuffer:!1}),o=new Qe;o.setAttribute("position",new Oe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Oe([0,2,0,0,2,0],2));const l=new xf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Fe(o,l),u=new fc(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,y=null,m=[],p=!1;this.setSize=function(M,A){r.setSize(M,A),a.setSize(M,A);for(let E=0;E<m.length;E++){const R=m[E];R.setSize&&R.setSize(M,A)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const A=r.width,E=r.height;for(let R=0;R<m.length;R++){const b=m[R];b.setSize&&b.setSize(A,E)}},this.begin=function(M,A){if(f||M.toneMapping===di&&m.length===0)return!1;if(y=A,A!==null){const E=A.width,R=A.height;(r.width!==E||r.height!==R)&&this.setSize(E,R)}return p===!1&&M.setRenderTarget(r),g=M.toneMapping,M.toneMapping=di,!0},this.hasRenderPass=function(){return p},this.end=function(M,A){M.toneMapping=g,f=!0;let E=r,R=a;for(let b=0;b<m.length;b++){const w=m[b];if(w.enabled!==!1&&(w.render(M,R,E,A),w.needsSwap!==!1)){const x=E;E=R,R=x}}if(d!==M.outputColorSpace||h!==M.toneMapping){d=M.outputColorSpace,h=M.toneMapping,l.defines={},ee.getTransfer(d)===ve&&(l.defines.SRGB_TRANSFER="");const b=L0[h];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(y),M.render(c,u),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const bu=new fn,zl=new sr(1,1),Tu=new lu,Au=new qd,wu=new pu,Mh=[],Sh=[],yh=new Float32Array(16),Eh=new Float32Array(9),bh=new Float32Array(4);function or(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Mh[s];if(r===void 0&&(r=new Float32Array(s),Mh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function en(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function nn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function $a(n,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function U0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function N0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2fv(this.addr,t),nn(e,t)}}function F0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;n.uniform3fv(this.addr,t),nn(e,t)}}function O0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4fv(this.addr,t),nn(e,t)}}function B0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;bh.set(i),n.uniformMatrix2fv(this.addr,!1,bh),nn(e,i)}}function z0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;Eh.set(i),n.uniformMatrix3fv(this.addr,!1,Eh),nn(e,i)}}function k0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;yh.set(i),n.uniformMatrix4fv(this.addr,!1,yh),nn(e,i)}}function G0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function H0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2iv(this.addr,t),nn(e,t)}}function V0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3iv(this.addr,t),nn(e,t)}}function W0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4iv(this.addr,t),nn(e,t)}}function X0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2uiv(this.addr,t),nn(e,t)}}function q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3uiv(this.addr,t),nn(e,t)}}function j0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4uiv(this.addr,t),nn(e,t)}}function Z0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zl.compareFunction=e.isReversedDepthBuffer()?sc:ic,r=zl):r=bu,e.setTexture2D(t||r,s)}function K0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Au,s)}function $0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||wu,s)}function J0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Tu,s)}function Q0(n){switch(n){case 5126:return U0;case 35664:return N0;case 35665:return F0;case 35666:return O0;case 35674:return B0;case 35675:return z0;case 35676:return k0;case 5124:case 35670:return G0;case 35667:case 35671:return H0;case 35668:case 35672:return V0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return Y0;case 36295:return q0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return J0}}function t_(n,t){n.uniform1fv(this.addr,t)}function e_(n,t){const e=or(t,this.size,2);n.uniform2fv(this.addr,e)}function n_(n,t){const e=or(t,this.size,3);n.uniform3fv(this.addr,e)}function i_(n,t){const e=or(t,this.size,4);n.uniform4fv(this.addr,e)}function s_(n,t){const e=or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function r_(n,t){const e=or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function a_(n,t){const e=or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function o_(n,t){n.uniform1iv(this.addr,t)}function l_(n,t){n.uniform2iv(this.addr,t)}function c_(n,t){n.uniform3iv(this.addr,t)}function h_(n,t){n.uniform4iv(this.addr,t)}function u_(n,t){n.uniform1uiv(this.addr,t)}function d_(n,t){n.uniform2uiv(this.addr,t)}function f_(n,t){n.uniform3uiv(this.addr,t)}function p_(n,t){n.uniform4uiv(this.addr,t)}function m_(n,t,e){const i=this.cache,s=t.length,r=$a(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=zl:a=bu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function __(n,t,e){const i=this.cache,s=t.length,r=$a(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Au,r[a])}function g_(n,t,e){const i=this.cache,s=t.length,r=$a(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wu,r[a])}function x_(n,t,e){const i=this.cache,s=t.length,r=$a(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Tu,r[a])}function v_(n){switch(n){case 5126:return t_;case 35664:return e_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return a_;case 5124:case 35670:return o_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return d_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return x_}}class M_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Q0(e.type)}}class S_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v_(e.type)}}class y_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function Th(n,t){n.seq.push(t),n.map[t.id]=t}function E_(n,t,e){const i=n.name,s=i.length;for(zo.lastIndex=0;;){const r=zo.exec(i),a=zo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Th(e,c===void 0?new M_(o,n,t):new S_(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new y_(o),Th(e,d)),e=d}}}class Pa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);E_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Ah(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const b_=37297;let T_=0;function A_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const wh=new Gt;function w_(n){ee._getMatrix(wh,ee.workingColorSpace,n);const t=`mat3( ${wh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(n)){case Ba:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Rh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+A_(n.getShaderSource(t),o)}else return r}function R_(n,t){const e=w_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const C_={[Yh]:"Linear",[qh]:"Reinhard",[jh]:"Cineon",[Zh]:"ACESFilmic",[$h]:"AgX",[Jh]:"Neutral",[Kh]:"Custom"};function P_(n,t){const e=C_[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ga=new L;function D_(){ee.getLuminanceCoefficients(ga);const n=ga.x.toFixed(4),t=ga.y.toFixed(4),e=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function I_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function U_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Pr(n){return n!==""}function Ch(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ph(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N_=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(N_,O_)}const F_=new Map;function O_(n,t){let e=Yt[t];if(e===void 0){const i=F_.get(t);if(i!==void 0)e=Yt[i],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kl(e)}const B_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(n){return n.replace(B_,z_)}function z_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const k_={[ba]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function G_(n){return k_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const H_={[_s]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};function V_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":H_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const W_={[ir]:"ENVMAP_MODE_REFRACTION"};function X_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":W_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Y_={[Kl]:"ENVMAP_BLENDING_MULTIPLY",[ud]:"ENVMAP_BLENDING_MIX",[dd]:"ENVMAP_BLENDING_ADD"};function q_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Y_[n.combine]||"ENVMAP_BLENDING_NONE"}function j_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Z_(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=G_(e),c=V_(e),u=X_(e),d=q_(e),h=j_(e),f=L_(e),g=I_(r),y=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Pr).join(`
`),p.length>0&&(p+=`
`)):(m=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),p=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Yt.tonemapping_pars_fragment:"",e.toneMapping!==di?P_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,R_("linearToOutputTexel",e.outputColorSpace),D_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pr).join(`
`)),a=kl(a),a=Ch(a,e),a=Ph(a,e),o=kl(o),o=Ch(o,e),o=Ph(o,e),a=Dh(a),o=Dh(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=M+m+a,E=M+p+o,R=Ah(s,s.VERTEX_SHADER,A),b=Ah(s,s.FRAGMENT_SHADER,E);s.attachShader(y,R),s.attachShader(y,b),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function w(C){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(y)||"",V=s.getShaderInfoLog(R)||"",q=s.getShaderInfoLog(b)||"",F=I.trim(),H=V.trim(),k=q.trim();let Q=!0,et=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,R,b);else{const ut=Rh(s,R,"vertex"),yt=Rh(s,b,"fragment");ie("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+ut+`
`+yt)}else F!==""?It("WebGLProgram: Program Info Log:",F):(H===""||k==="")&&(et=!1);et&&(C.diagnostics={runnable:Q,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(R),s.deleteShader(b),x=new Pa(s,y),T=U_(s,y)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(y,b_)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=T_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=b,this}let K_=0;class $_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new J_(t),e.set(t,i)),i}}class J_{constructor(t){this.id=K_++,this.code=t,this.usedTimes=0}}function Q_(n){return n===gs||n===Na||n===Fa}function tg(n,t,e,i,s,r){const a=new cu,o=new $_,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,T,D,C,I,V){const q=C.fog,F=I.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=t.get(x.envMap||H,k),et=Q&&Q.mapping===ja?Q.image.height:null,ut=f[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&It("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const yt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Rt=yt!==void 0?yt.length:0;let te=0;F.morphAttributes.position!==void 0&&(te=1),F.morphAttributes.normal!==void 0&&(te=2),F.morphAttributes.color!==void 0&&(te=3);let ue,Bt,K,mt;if(ut){const Lt=li[ut];ue=Lt.vertexShader,Bt=Lt.fragmentShader}else ue=x.vertexShader,Bt=x.fragmentShader,o.update(x),K=o.getVertexShaderID(x),mt=o.getFragmentShaderID(x);const ot=n.getRenderTarget(),Dt=n.state.buffers.depth.getReversed(),Ut=I.isInstancedMesh===!0,Ct=I.isBatchedMesh===!0,Te=!!x.map,qt=!!x.matcap,de=!!Q,Ee=!!x.aoMap,jt=!!x.lightMap,Be=!!x.bumpMap,le=!!x.normalMap,gn=!!x.displacementMap,U=!!x.emissiveMap,ze=!!x.metalnessMap,Zt=!!x.roughnessMap,me=x.anisotropy>0,ct=x.clearcoat>0,Ae=x.dispersion>0,S=x.iridescence>0,_=x.sheen>0,O=x.transmission>0,Z=me&&!!x.anisotropyMap,J=ct&&!!x.clearcoatMap,st=ct&&!!x.clearcoatNormalMap,lt=ct&&!!x.clearcoatRoughnessMap,W=S&&!!x.iridescenceMap,j=S&&!!x.iridescenceThicknessMap,ht=_&&!!x.sheenColorMap,xt=_&&!!x.sheenRoughnessMap,at=!!x.specularMap,nt=!!x.specularColorMap,Nt=!!x.specularIntensityMap,zt=O&&!!x.transmissionMap,ne=O&&!!x.thicknessMap,P=!!x.gradientMap,it=!!x.alphaMap,Y=x.alphaTest>0,_t=!!x.alphaHash,rt=!!x.extensions;let $=di;x.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&($=n.toneMapping);const bt={shaderID:ut,shaderType:x.type,shaderName:x.name,vertexShader:ue,fragmentShader:Bt,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:mt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ct,batchingColor:Ct&&I._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&I.instanceColor!==null,instancingMorph:Ut&&I.morphTexture!==null,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Te,matcap:qt,envMap:de,envMapMode:de&&Q.mapping,envMapCubeUVHeight:et,aoMap:Ee,lightMap:jt,bumpMap:Be,normalMap:le,displacementMap:gn,emissiveMap:U,normalMapObjectSpace:le&&x.normalMapType===md,normalMapTangentSpace:le&&x.normalMapType===Ul,packedNormalMap:le&&x.normalMapType===Ul&&Q_(x.normalMap.format),metalnessMap:ze,roughnessMap:Zt,anisotropy:me,anisotropyMap:Z,clearcoat:ct,clearcoatMap:J,clearcoatNormalMap:st,clearcoatRoughnessMap:lt,dispersion:Ae,iridescence:S,iridescenceMap:W,iridescenceThicknessMap:j,sheen:_,sheenColorMap:ht,sheenRoughnessMap:xt,specularMap:at,specularColorMap:nt,specularIntensityMap:Nt,transmission:O,transmissionMap:zt,thicknessMap:ne,gradientMap:P,opaque:x.transparent===!1&&x.blending===Js&&x.alphaToCoverage===!1,alphaMap:it,alphaTest:Y,alphaHash:_t,combine:x.combine,mapUv:Te&&g(x.map.channel),aoMapUv:Ee&&g(x.aoMap.channel),lightMapUv:jt&&g(x.lightMap.channel),bumpMapUv:Be&&g(x.bumpMap.channel),normalMapUv:le&&g(x.normalMap.channel),displacementMapUv:gn&&g(x.displacementMap.channel),emissiveMapUv:U&&g(x.emissiveMap.channel),metalnessMapUv:ze&&g(x.metalnessMap.channel),roughnessMapUv:Zt&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:J&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(x.sheenRoughnessMap.channel),specularMapUv:at&&g(x.specularMap.channel),specularColorMapUv:nt&&g(x.specularColorMap.channel),specularIntensityMapUv:Nt&&g(x.specularIntensityMap.channel),transmissionMapUv:zt&&g(x.transmissionMap.channel),thicknessMapUv:ne&&g(x.thicknessMap.channel),alphaMapUv:it&&g(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(le||me),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Te||it),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&le===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Dt,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:$,decodeVideoTexture:Te&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===ve,decodeVideoTextureEmissive:U&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===ve,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tn,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)T.push(D),T.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(p(T,x),M(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function A(x){const T=f[x.type];let D;if(T){const C=li[T];D=gu.clone(C.uniforms)}else D=x.uniforms;return D}function E(x,T){let D=u.get(T);return D!==void 0?++D.usedTimes:(D=new Z_(n,T,x,s),c.push(D),u.set(T,D)),D}function R(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function w(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:E,releaseProgram:R,releaseShaderCache:b,programs:c,dispose:w}}function eg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ng(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ih(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Uh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,y,m,p){let M=n[t];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},n[t]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=y,M.renderOrder=h.renderOrder,M.z=m,M.group=p),t++,M}function l(h,f,g,y,m,p){const M=o(h,f,g,y,m,p);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):e.push(M)}function c(h,f,g,y,m,p){const M=o(h,f,g,y,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function u(h,f){e.length>1&&e.sort(h||ng),i.length>1&&i.sort(f||Ih),s.length>1&&s.sort(f||Ih)}function d(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function ig(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Uh,n.set(i,[a])):s>=r.length?(a=new Uh,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function sg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Mt};break;case"SpotLight":e={position:new L,direction:new L,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function rg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ag=0;function og(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function lg(n){const t=new sg,e=rg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,r=new we,a=new we;function o(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,A=0,E=0,R=0,b=0,w=0;c.sort(og);for(let T=0,D=c.length;T<D;T++){const C=c[T],I=C.color,V=C.intensity,q=C.distance;let F=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===gs?F=C.shadow.map.texture:F=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=I.r*V,d+=I.g*V,h+=I.b*V;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],V);w++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const k=C.shadow,Q=e.get(C);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,i.directionalShadow[f]=Q,i.directionalShadowMap[f]=F,i.directionalShadowMatrix[f]=C.shadow.matrix,M++}i.directional[f]=H,f++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(I).multiplyScalar(V),H.distance=q,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[y]=H;const k=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,k.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[y]=k.matrix,C.castShadow){const Q=e.get(C);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,i.spotShadow[y]=Q,i.spotShadowMap[y]=F,E++}y++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(I).multiplyScalar(V),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const k=C.shadow,Q=e.get(C);Q.shadowIntensity=k.intensity,Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,Q.shadowCameraNear=k.camera.near,Q.shadowCameraFar=k.camera.far,i.pointShadow[g]=Q,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=C.shadow.matrix,A++}i.point[g]=H,g++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(V),H.groundColor.copy(C.groundColor).multiplyScalar(V),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==M||x.numPointShadows!==A||x.numSpotShadows!==E||x.numSpotMaps!==R||x.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=E+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,x.directionalLength=f,x.pointLength=g,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=M,x.numPointShadows=A,x.numSpotShadows=E,x.numSpotMaps=R,x.numLightProbes=w,i.version=ag++)}function l(c,u){let d=0,h=0,f=0,g=0,y=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const A=c[p];if(A.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(A.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(A.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(A.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(A.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Nh(n){const t=new lg(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function cg(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Nh(n),t.set(s,[o])):r>=a.length?(o=new Nh(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ug=`uniform sampler2D shadow_pass;
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
}`,dg=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],fg=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Fh=new we,wr=new L,ko=new L;function pg(n,t,e){let i=new lc;const s=new Tt,r=new Tt,a=new Pe,o=new vf,l=new Mf,c={},u=e.maxTextureSize,d={[Zi]:An,[An]:Zi,[Tn]:Tn},h=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:hg,fragmentShader:ug}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Qe;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Fe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let p=this.type;this.render=function(b,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Yu&&(It("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ba);const T=n.getRenderTarget(),D=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(wi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const V=p!==this.type;V&&w.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(F=>F.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,F=b.length;q<F;q++){const H=b[q],k=H.shadow;if(k===void 0){It("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const Q=k.getFrameExtents();s.multiply(Q),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,k.mapSize.y=r.y));const et=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=et,k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Cr){if(H.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ti(s.x,s.y,{format:gs,type:pi,minFilter:ln,magFilter:ln,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new sr(s.x,s.y,hi),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=Pi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn}else H.isPointLight?(k.map=new pc(s.x),k.map.depthTexture=new pf(s.x,fi)):(k.map=new ti(s.x,s.y),k.map.depthTexture=new sr(s.x,s.y,fi)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=Pi,this.type===ba?(k.map.depthTexture.compareFunction=et?sc:ic,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn);k.camera.updateProjectionMatrix()}const ut=k.map.isWebGLCubeRenderTarget?6:1;for(let yt=0;yt<ut;yt++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,yt),n.clear();else{yt===0&&(n.setRenderTarget(k.map),n.clear());const Rt=k.getViewport(yt);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),I.viewport(a)}if(H.isPointLight){const Rt=k.camera,te=k.matrix,ue=H.distance||Rt.far;ue!==Rt.far&&(Rt.far=ue,Rt.updateProjectionMatrix()),wr.setFromMatrixPosition(H.matrixWorld),Rt.position.copy(wr),ko.copy(Rt.position),ko.add(dg[yt]),Rt.up.copy(fg[yt]),Rt.lookAt(ko),Rt.updateMatrixWorld(),te.makeTranslation(-wr.x,-wr.y,-wr.z),Fh.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Fh,Rt.coordinateSystem,Rt.reversedDepth)}else k.updateMatrices(H);i=k.getFrustum(),E(w,x,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===Cr&&M(k,x),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,D,C)};function M(b,w){const x=t.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ti(s.x,s.y,{format:gs,type:pi})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(w,null,x,h,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(w,null,x,f,y,null)}function A(b,w,x,T){let D=null;const C=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)D=C;else if(D=x.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=D.uuid,V=w.uuid;let q=c[I];q===void 0&&(q={},c[I]=q);let F=q[V];F===void 0&&(F=D.clone(),q[V]=F,w.addEventListener("dispose",R)),D=F}if(D.visible=w.visible,D.wireframe=w.wireframe,T===Cr?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:d[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const I=n.properties.get(D);I.light=x}return D}function E(b,w,x,T,D){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Cr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const V=t.update(b),q=b.material;if(Array.isArray(q)){const F=V.groups;for(let H=0,k=F.length;H<k;H++){const Q=F[H],et=q[Q.materialIndex];if(et&&et.visible){const ut=A(b,et,T,D);b.onBeforeShadow(n,b,w,x,V,ut,Q),n.renderBufferDirect(x,null,V,ut,b,Q),b.onAfterShadow(n,b,w,x,V,ut,Q)}}}else if(q.visible){const F=A(b,q,T,D);b.onBeforeShadow(n,b,w,x,V,F,null),n.renderBufferDirect(x,null,V,F,b,null),b.onAfterShadow(n,b,w,x,V,F,null)}}const I=b.children;for(let V=0,q=I.length;V<q;V++)E(I[V],w,x,T,D)}function R(b){b.target.removeEventListener("dispose",R);for(const x in c){const T=c[x],D=b.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function mg(n,t){function e(){let P=!1;const it=new Pe;let Y=null;const _t=new Pe(0,0,0,0);return{setMask:function(rt){Y!==rt&&!P&&(n.colorMask(rt,rt,rt,rt),Y=rt)},setLocked:function(rt){P=rt},setClear:function(rt,$,bt,Lt,De){De===!0&&(rt*=Lt,$*=Lt,bt*=Lt),it.set(rt,$,bt,Lt),_t.equals(it)===!1&&(n.clearColor(rt,$,bt,Lt),_t.copy(it))},reset:function(){P=!1,Y=null,_t.set(-1,0,0,0)}}}function i(){let P=!1,it=!1,Y=null,_t=null,rt=null;return{setReversed:function($){if(it!==$){const bt=t.get("EXT_clip_control");$?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),it=$;const Lt=rt;rt=null,this.setClear(Lt)}},getReversed:function(){return it},setTest:function($){$?ot(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function($){Y!==$&&!P&&(n.depthMask($),Y=$)},setFunc:function($){if(it&&($=Td[$]),_t!==$){switch($){case Zo:n.depthFunc(n.NEVER);break;case Ko:n.depthFunc(n.ALWAYS);break;case $o:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case Jo:n.depthFunc(n.EQUAL);break;case Qo:n.depthFunc(n.GEQUAL);break;case tl:n.depthFunc(n.GREATER);break;case el:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=$}},setLocked:function($){P=$},setClear:function($){rt!==$&&(rt=$,it&&($=1-$),n.clearDepth($))},reset:function(){P=!1,Y=null,_t=null,rt=null,it=!1}}}function s(){let P=!1,it=null,Y=null,_t=null,rt=null,$=null,bt=null,Lt=null,De=null;return{setTest:function(re){P||(re?ot(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(re){it!==re&&!P&&(n.stencilMask(re),it=re)},setFunc:function(re,cn,In){(Y!==re||_t!==cn||rt!==In)&&(n.stencilFunc(re,cn,In),Y=re,_t=cn,rt=In)},setOp:function(re,cn,In){($!==re||bt!==cn||Lt!==In)&&(n.stencilOp(re,cn,In),$=re,bt=cn,Lt=In)},setLocked:function(re){P=re},setClear:function(re){De!==re&&(n.clearStencil(re),De=re)},reset:function(){P=!1,it=null,Y=null,_t=null,rt=null,$=null,bt=null,Lt=null,De=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,A=null,E=null,R=null,b=null,w=null,x=new Mt(0,0,0),T=0,D=!1,C=null,I=null,V=null,q=null,F=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Q=0;const et=n.getParameter(n.VERSION);et.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(et)[1]),k=Q>=1):et.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),k=Q>=2);let ut=null,yt={};const Rt=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),ue=new Pe().fromArray(Rt),Bt=new Pe().fromArray(te);function K(P,it,Y,_t){const rt=new Uint8Array(4),$=n.createTexture();n.bindTexture(P,$),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let bt=0;bt<Y;bt++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(it+bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return $}const mt={};mt[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),mt[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),mt[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(n.DEPTH_TEST),a.setFunc(nr),Be(!1),le(Ic),ot(n.CULL_FACE),Ee(wi);function ot(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function Dt(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function Ut(P,it){return h[P]!==it?(n.bindFramebuffer(P,it),h[P]=it,P===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=it),P===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=it),!0):!1}function Ct(P,it){let Y=g,_t=!1;if(P){Y=f.get(it),Y===void 0&&(Y=[],f.set(it,Y));const rt=P.textures;if(Y.length!==rt.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let $=0,bt=rt.length;$<bt;$++)Y[$]=n.COLOR_ATTACHMENT0+$;Y.length=rt.length,_t=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,_t=!0);_t&&n.drawBuffers(Y)}function Te(P){return y!==P?(n.useProgram(P),y=P,!0):!1}const qt={[cs]:n.FUNC_ADD,[ju]:n.FUNC_SUBTRACT,[Zu]:n.FUNC_REVERSE_SUBTRACT};qt[Ku]=n.MIN,qt[$u]=n.MAX;const de={[Ju]:n.ZERO,[Qu]:n.ONE,[td]:n.SRC_COLOR,[qo]:n.SRC_ALPHA,[ad]:n.SRC_ALPHA_SATURATE,[sd]:n.DST_COLOR,[nd]:n.DST_ALPHA,[ed]:n.ONE_MINUS_SRC_COLOR,[jo]:n.ONE_MINUS_SRC_ALPHA,[rd]:n.ONE_MINUS_DST_COLOR,[id]:n.ONE_MINUS_DST_ALPHA,[od]:n.CONSTANT_COLOR,[ld]:n.ONE_MINUS_CONSTANT_COLOR,[cd]:n.CONSTANT_ALPHA,[hd]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(P,it,Y,_t,rt,$,bt,Lt,De,re){if(P===wi){m===!0&&(Dt(n.BLEND),m=!1);return}if(m===!1&&(ot(n.BLEND),m=!0),P!==qu){if(P!==p||re!==D){if((M!==cs||R!==cs)&&(n.blendEquation(n.FUNC_ADD),M=cs,R=cs),re)switch(P){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ua:n.blendFunc(n.ONE,n.ONE);break;case Uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ie("WebGLState: Invalid blending: ",P);break}else switch(P){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Uc:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",P);break}A=null,E=null,b=null,w=null,x.set(0,0,0),T=0,p=P,D=re}return}rt=rt||it,$=$||Y,bt=bt||_t,(it!==M||rt!==R)&&(n.blendEquationSeparate(qt[it],qt[rt]),M=it,R=rt),(Y!==A||_t!==E||$!==b||bt!==w)&&(n.blendFuncSeparate(de[Y],de[_t],de[$],de[bt]),A=Y,E=_t,b=$,w=bt),(Lt.equals(x)===!1||De!==T)&&(n.blendColor(Lt.r,Lt.g,Lt.b,De),x.copy(Lt),T=De),p=P,D=!1}function jt(P,it){P.side===Tn?Dt(n.CULL_FACE):ot(n.CULL_FACE);let Y=P.side===An;it&&(Y=!Y),Be(Y),P.blending===Js&&P.transparent===!1?Ee(wi):Ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const _t=P.stencilWrite;o.setTest(_t),_t&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),U(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(P){C!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),C=P)}function le(P){P!==Wu?(ot(n.CULL_FACE),P!==I&&(P===Ic?n.cullFace(n.BACK):P===Xu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),I=P}function gn(P){P!==V&&(k&&n.lineWidth(P),V=P)}function U(P,it,Y){P?(ot(n.POLYGON_OFFSET_FILL),(q!==it||F!==Y)&&(q=it,F=Y,a.getReversed()&&(it=-it),n.polygonOffset(it,Y))):Dt(n.POLYGON_OFFSET_FILL)}function ze(P){P?ot(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function Zt(P){P===void 0&&(P=n.TEXTURE0+H-1),ut!==P&&(n.activeTexture(P),ut=P)}function me(P,it,Y){Y===void 0&&(ut===null?Y=n.TEXTURE0+H-1:Y=ut);let _t=yt[Y];_t===void 0&&(_t={type:void 0,texture:void 0},yt[Y]=_t),(_t.type!==P||_t.texture!==it)&&(ut!==Y&&(n.activeTexture(Y),ut=Y),n.bindTexture(P,it||mt[P]),_t.type=P,_t.texture=it)}function ct(){const P=yt[ut];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ae(){try{n.compressedTexImage2D(...arguments)}catch(P){ie("WebGLState:",P)}}function S(){try{n.compressedTexImage3D(...arguments)}catch(P){ie("WebGLState:",P)}}function _(){try{n.texSubImage2D(...arguments)}catch(P){ie("WebGLState:",P)}}function O(){try{n.texSubImage3D(...arguments)}catch(P){ie("WebGLState:",P)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(P){ie("WebGLState:",P)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(P){ie("WebGLState:",P)}}function st(){try{n.texStorage2D(...arguments)}catch(P){ie("WebGLState:",P)}}function lt(){try{n.texStorage3D(...arguments)}catch(P){ie("WebGLState:",P)}}function W(){try{n.texImage2D(...arguments)}catch(P){ie("WebGLState:",P)}}function j(){try{n.texImage3D(...arguments)}catch(P){ie("WebGLState:",P)}}function ht(P){return d[P]!==void 0?d[P]:n.getParameter(P)}function xt(P,it){d[P]!==it&&(n.pixelStorei(P,it),d[P]=it)}function at(P){ue.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ue.copy(P))}function nt(P){Bt.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Bt.copy(P))}function Nt(P,it){let Y=c.get(it);Y===void 0&&(Y=new WeakMap,c.set(it,Y));let _t=Y.get(P);_t===void 0&&(_t=n.getUniformBlockIndex(it,P.name),Y.set(P,_t))}function zt(P,it){const _t=c.get(it).get(P);l.get(it)!==_t&&(n.uniformBlockBinding(it,_t,P.__bindingPointIndex),l.set(it,_t))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},ut=null,yt={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,M=null,A=null,E=null,R=null,b=null,w=null,x=new Mt(0,0,0),T=0,D=!1,C=null,I=null,V=null,q=null,F=null,ue.set(0,0,n.canvas.width,n.canvas.height),Bt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:Dt,bindFramebuffer:Ut,drawBuffers:Ct,useProgram:Te,setBlending:Ee,setMaterial:jt,setFlipSided:Be,setCullFace:le,setLineWidth:gn,setPolygonOffset:U,setScissorTest:ze,activeTexture:Zt,bindTexture:me,unbindTexture:ct,compressedTexImage2D:Ae,compressedTexImage3D:S,texImage2D:W,texImage3D:j,pixelStorei:xt,getParameter:ht,updateUBOMapping:Nt,uniformBlockBinding:zt,texStorage2D:st,texStorage3D:lt,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:Z,compressedTexSubImage3D:J,scissor:at,viewport:nt,reset:ne}}function _g(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(S,_){return g?new OffscreenCanvas(S,_):Br("canvas")}function m(S,_,O){let Z=1;const J=Ae(S);if((J.width>O||J.height>O)&&(Z=O/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const st=Math.floor(Z*J.width),lt=Math.floor(Z*J.height);h===void 0&&(h=y(st,lt));const W=_?y(st,lt):h;return W.width=st,W.height=lt,W.getContext("2d").drawImage(S,0,0,st,lt),It("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+st+"x"+lt+")."),W}else return"data"in S&&It("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),S;return S}function p(S){return S.generateMipmaps}function M(S){n.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(S,_,O,Z,J,st=!1){if(S!==null){if(n[S]!==void 0)return n[S];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let lt;Z&&(lt=t.get("EXT_texture_norm16"),lt||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=_;if(_===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8),O===n.UNSIGNED_SHORT&&lt&&(W=lt.R16_EXT),O===n.SHORT&&lt&&(W=lt.R16_SNORM_EXT)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),_===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8),O===n.UNSIGNED_SHORT&&lt&&(W=lt.RG16_EXT),O===n.SHORT&&lt&&(W=lt.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_SHORT&&lt&&(W=lt.RGB16_EXT),O===n.SHORT&&lt&&(W=lt.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(W=n.R11F_G11F_B10F)),_===n.RGBA){const j=st?Ba:ee.getTransfer(J);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=j===ve?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&lt&&(W=lt.RGBA16_EXT),O===n.SHORT&&lt&&(W=lt.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function R(S,_){let O;return S?_===null||_===fi||_===Fr?O=n.DEPTH24_STENCIL8:_===hi?O=n.DEPTH32F_STENCIL8:_===Nr&&(O=n.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===fi||_===Fr?O=n.DEPTH_COMPONENT24:_===hi?O=n.DEPTH_COMPONENT32F:_===Nr&&(O=n.DEPTH_COMPONENT16),O}function b(S,_){return p(S)===!0||S.isFramebufferTexture&&S.minFilter!==dn&&S.minFilter!==ln?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function w(S){const _=S.target;_.removeEventListener("dispose",w),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(S){const _=S.target;_.removeEventListener("dispose",x),C(_)}function T(S){const _=i.get(S);if(_.__webglInit===void 0)return;const O=S.source,Z=f.get(O);if(Z){const J=Z[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(S),Object.keys(Z).length===0&&f.delete(O)}i.remove(S)}function D(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const O=S.source,Z=f.get(O);delete Z[_.__cacheKey],a.memory.textures--}function C(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let J=0;J<_.__webglFramebuffer[Z].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[Z][J]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=S.textures;for(let Z=0,J=O.length;Z<J;Z++){const st=i.get(O[Z]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),a.memory.textures--),i.remove(O[Z])}i.remove(S)}let I=0;function V(){I=0}function q(){return I}function F(S){I=S}function H(){const S=I;return S>=s.maxTextures&&It("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),I+=1,S}function k(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function Q(S,_){const O=i.get(S);if(S.isVideoTexture&&me(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&O.__version!==S.version){const Z=S.image;if(Z===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(O,S,_);return}}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function et(S,_){const O=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){Dt(O,S,_);return}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function ut(S,_){const O=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){Dt(O,S,_);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function yt(S,_){const O=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&O.__version!==S.version){Ut(O,S,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const Rt={[nl]:n.REPEAT,[ci]:n.CLAMP_TO_EDGE,[il]:n.MIRRORED_REPEAT},te={[dn]:n.NEAREST,[fd]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[ao]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},ue={[_d]:n.NEVER,[Sd]:n.ALWAYS,[gd]:n.LESS,[ic]:n.LEQUAL,[xd]:n.EQUAL,[sc]:n.GEQUAL,[vd]:n.GREATER,[Md]:n.NOTEQUAL};function Bt(S,_){if(_.type===hi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ln||_.magFilter===ao||_.magFilter===Xr||_.magFilter===qi||_.minFilter===ln||_.minFilter===ao||_.minFilter===Xr||_.minFilter===qi)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,Rt[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Rt[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Rt[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,te[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,te[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ue[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===dn||_.minFilter!==Xr&&_.minFilter!==qi||_.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function K(S,_){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",w));const Z=_.source;let J=f.get(Z);J===void 0&&(J={},f.set(Z,J));const st=k(_);if(st!==S.__cacheKey){J[st]===void 0&&(J[st]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[st].usedTimes++;const lt=J[S.__cacheKey];lt!==void 0&&(J[S.__cacheKey].usedTimes--,lt.usedTimes===0&&D(_)),S.__cacheKey=st,S.__webglTexture=J[st].texture}return O}function mt(S,_,O){return Math.floor(Math.floor(S/O)/_)}function ot(S,_,O,Z){const st=S.updateRanges;if(st.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,Z,_.data);else{st.sort((xt,at)=>xt.start-at.start);let lt=0;for(let xt=1;xt<st.length;xt++){const at=st[lt],nt=st[xt],Nt=at.start+at.count,zt=mt(nt.start,_.width,4),ne=mt(at.start,_.width,4);nt.start<=Nt+1&&zt===ne&&mt(nt.start+nt.count-1,_.width,4)===zt?at.count=Math.max(at.count,nt.start+nt.count-at.start):(++lt,st[lt]=nt)}st.length=lt+1;const W=e.getParameter(n.UNPACK_ROW_LENGTH),j=e.getParameter(n.UNPACK_SKIP_PIXELS),ht=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let xt=0,at=st.length;xt<at;xt++){const nt=st[xt],Nt=Math.floor(nt.start/4),zt=Math.ceil(nt.count/4),ne=Nt%_.width,P=Math.floor(Nt/_.width),it=zt,Y=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),e.pixelStorei(n.UNPACK_SKIP_ROWS,P),e.texSubImage2D(n.TEXTURE_2D,0,ne,P,it,Y,O,Z,_.data)}S.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,W),e.pixelStorei(n.UNPACK_SKIP_PIXELS,j),e.pixelStorei(n.UNPACK_SKIP_ROWS,ht)}}function Dt(S,_,O){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);const J=K(S,_),st=_.source;e.bindTexture(Z,S.__webglTexture,n.TEXTURE0+O);const lt=i.get(st);if(st.version!==lt.__version||J===!0){if(e.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Y=ee.getPrimaries(ee.workingColorSpace),_t=_.colorSpace===Xi?null:ee.getPrimaries(_.colorSpace),rt=_.colorSpace===Xi||Y===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let j=m(_.image,!1,s.maxTextureSize);j=ct(_,j);const ht=r.convert(_.format,_.colorSpace),xt=r.convert(_.type);let at=E(_.internalFormat,ht,xt,_.normalized,_.colorSpace,_.isVideoTexture);Bt(Z,_);let nt;const Nt=_.mipmaps,zt=_.isVideoTexture!==!0,ne=lt.__version===void 0||J===!0,P=st.dataReady,it=b(_,j);if(_.isDepthTexture)at=R(_.format===ds,_.type),ne&&(zt?e.texStorage2D(n.TEXTURE_2D,1,at,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,at,j.width,j.height,0,ht,xt,null));else if(_.isDataTexture)if(Nt.length>0){zt&&ne&&e.texStorage2D(n.TEXTURE_2D,it,at,Nt[0].width,Nt[0].height);for(let Y=0,_t=Nt.length;Y<_t;Y++)nt=Nt[Y],zt?P&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,nt.width,nt.height,ht,xt,nt.data):e.texImage2D(n.TEXTURE_2D,Y,at,nt.width,nt.height,0,ht,xt,nt.data);_.generateMipmaps=!1}else zt?(ne&&e.texStorage2D(n.TEXTURE_2D,it,at,j.width,j.height),P&&ot(_,j,ht,xt)):e.texImage2D(n.TEXTURE_2D,0,at,j.width,j.height,0,ht,xt,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){zt&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,at,Nt[0].width,Nt[0].height,j.depth);for(let Y=0,_t=Nt.length;Y<_t;Y++)if(nt=Nt[Y],_.format!==Qn)if(ht!==null)if(zt){if(P)if(_.layerUpdates.size>0){const rt=fh(nt.width,nt.height,_.format,_.type);for(const $ of _.layerUpdates){const bt=nt.data.subarray($*rt/nt.data.BYTES_PER_ELEMENT,($+1)*rt/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,$,nt.width,nt.height,1,ht,bt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,nt.width,nt.height,j.depth,ht,nt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,at,nt.width,nt.height,j.depth,0,nt.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?P&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,nt.width,nt.height,j.depth,ht,xt,nt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,at,nt.width,nt.height,j.depth,0,ht,xt,nt.data)}else{zt&&ne&&e.texStorage2D(n.TEXTURE_2D,it,at,Nt[0].width,Nt[0].height);for(let Y=0,_t=Nt.length;Y<_t;Y++)nt=Nt[Y],_.format!==Qn?ht!==null?zt?P&&e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,nt.width,nt.height,ht,nt.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,at,nt.width,nt.height,0,nt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?P&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,nt.width,nt.height,ht,xt,nt.data):e.texImage2D(n.TEXTURE_2D,Y,at,nt.width,nt.height,0,ht,xt,nt.data)}else if(_.isDataArrayTexture)if(zt){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,it,at,j.width,j.height,j.depth),P)if(_.layerUpdates.size>0){const Y=fh(j.width,j.height,_.format,_.type);for(const _t of _.layerUpdates){const rt=j.data.subarray(_t*Y/j.data.BYTES_PER_ELEMENT,(_t+1)*Y/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,j.width,j.height,1,ht,xt,rt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ht,xt,j.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,at,j.width,j.height,j.depth,0,ht,xt,j.data);else if(_.isData3DTexture)zt?(ne&&e.texStorage3D(n.TEXTURE_3D,it,at,j.width,j.height,j.depth),P&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ht,xt,j.data)):e.texImage3D(n.TEXTURE_3D,0,at,j.width,j.height,j.depth,0,ht,xt,j.data);else if(_.isFramebufferTexture){if(ne)if(zt)e.texStorage2D(n.TEXTURE_2D,it,at,j.width,j.height);else{let Y=j.width,_t=j.height;for(let rt=0;rt<it;rt++)e.texImage2D(n.TEXTURE_2D,rt,at,Y,_t,0,ht,xt,null),Y>>=1,_t>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const Y=n.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),j.parentNode!==Y){Y.appendChild(j),d.add(_),Y.onpaint=Lt=>{const De=Lt.changedElements;for(const re of d)De.includes(re.image)&&(re.needsUpdate=!0)},Y.requestPaint();return}const _t=0,rt=n.RGBA,$=n.RGBA,bt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,_t,rt,$,bt,j),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(zt&&ne){const Y=Ae(Nt[0]);e.texStorage2D(n.TEXTURE_2D,it,at,Y.width,Y.height)}for(let Y=0,_t=Nt.length;Y<_t;Y++)nt=Nt[Y],zt?P&&e.texSubImage2D(n.TEXTURE_2D,Y,0,0,ht,xt,nt):e.texImage2D(n.TEXTURE_2D,Y,at,ht,xt,nt);_.generateMipmaps=!1}else if(zt){if(ne){const Y=Ae(j);e.texStorage2D(n.TEXTURE_2D,it,at,Y.width,Y.height)}P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht,xt,j)}else e.texImage2D(n.TEXTURE_2D,0,at,ht,xt,j);p(_)&&M(Z),lt.__version=st.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Ut(S,_,O){if(_.image.length!==6)return;const Z=K(S,_),J=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);const st=i.get(J);if(J.version!==st.__version||Z===!0){e.activeTexture(n.TEXTURE0+O);const lt=ee.getPrimaries(ee.workingColorSpace),W=_.colorSpace===Xi?null:ee.getPrimaries(_.colorSpace),j=_.colorSpace===Xi||lt===W?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ht=_.isCompressedTexture||_.image[0].isCompressedTexture,xt=_.image[0]&&_.image[0].isDataTexture,at=[];for(let $=0;$<6;$++)!ht&&!xt?at[$]=m(_.image[$],!0,s.maxCubemapSize):at[$]=xt?_.image[$].image:_.image[$],at[$]=ct(_,at[$]);const nt=at[0],Nt=r.convert(_.format,_.colorSpace),zt=r.convert(_.type),ne=E(_.internalFormat,Nt,zt,_.normalized,_.colorSpace),P=_.isVideoTexture!==!0,it=st.__version===void 0||Z===!0,Y=J.dataReady;let _t=b(_,nt);Bt(n.TEXTURE_CUBE_MAP,_);let rt;if(ht){P&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,ne,nt.width,nt.height);for(let $=0;$<6;$++){rt=at[$].mipmaps;for(let bt=0;bt<rt.length;bt++){const Lt=rt[bt];_.format!==Qn?Nt!==null?P?Y&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt,0,0,Lt.width,Lt.height,Nt,Lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt,ne,Lt.width,Lt.height,0,Lt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt,0,0,Lt.width,Lt.height,Nt,zt,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt,ne,Lt.width,Lt.height,0,Nt,zt,Lt.data)}}}else{if(rt=_.mipmaps,P&&it){rt.length>0&&_t++;const $=Ae(at[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,ne,$.width,$.height)}for(let $=0;$<6;$++)if(xt){P?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,at[$].width,at[$].height,Nt,zt,at[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ne,at[$].width,at[$].height,0,Nt,zt,at[$].data);for(let bt=0;bt<rt.length;bt++){const De=rt[bt].image[$].image;P?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt+1,0,0,De.width,De.height,Nt,zt,De.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt+1,ne,De.width,De.height,0,Nt,zt,De.data)}}else{P?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Nt,zt,at[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ne,Nt,zt,at[$]);for(let bt=0;bt<rt.length;bt++){const Lt=rt[bt];P?Y&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt+1,0,0,Nt,zt,Lt.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,bt+1,ne,Nt,zt,Lt.image[$])}}}p(_)&&M(n.TEXTURE_CUBE_MAP),st.__version=J.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Ct(S,_,O,Z,J,st){const lt=r.convert(O.format,O.colorSpace),W=r.convert(O.type),j=E(O.internalFormat,lt,W,O.normalized,O.colorSpace),ht=i.get(_),xt=i.get(O);if(xt.__renderTarget=_,!ht.__hasExternalTextures){const at=Math.max(1,_.width>>st),nt=Math.max(1,_.height>>st);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,st,j,at,nt,_.depth,0,lt,W,null):e.texImage2D(J,st,j,at,nt,0,lt,W,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),Zt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,xt.__webglTexture,0,ze(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,xt.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(S,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const Z=_.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,st=R(_.stencilBuffer,J),lt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Zt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze(_),st,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze(_),st,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,st,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,S)}else{const Z=_.textures;for(let J=0;J<Z.length;J++){const st=Z[J],lt=r.convert(st.format,st.colorSpace),W=r.convert(st.type),j=E(st.internalFormat,lt,W,st.normalized,st.colorSpace);Zt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze(_),j,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze(_),j,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,j,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qt(S,_,O){const Z=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,_.depthTexture);const ht=r.convert(_.depthTexture.format),xt=r.convert(_.depthTexture.type);let at;_.depthTexture.format===Pi?at=n.DEPTH_COMPONENT24:_.depthTexture.format===ds&&(at=n.DEPTH24_STENCIL8);for(let nt=0;nt<6;nt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,at,_.width,_.height,0,ht,xt,null)}}else Q(_.depthTexture,0);const st=J.__webglTexture,lt=ze(_),W=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,j=_.depthTexture.format===ds?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Pi)Zt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,W,st,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,j,W,st,0);else if(_.depthTexture.format===ds)Zt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,W,st,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,j,W,st,0);else throw new Error("Unknown depthTexture format")}function de(S){const _=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const Z=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=Z}if(S.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let Z=0;Z<6;Z++)qt(_.__webglFramebuffer[Z],S,Z);else{const Z=S.texture.mipmaps;Z&&Z.length>0?qt(_.__webglFramebuffer[0],S,0):qt(_.__webglFramebuffer,S,0)}else if(O){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=n.createRenderbuffer(),Te(_.__webglDepthbuffer[Z],S,!1);else{const J=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,st)}}else{const Z=S.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Te(_.__webglDepthbuffer,S,!1);else{const J=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,st)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(S,_,O){const Z=i.get(S);_!==void 0&&Ct(Z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&de(S)}function jt(S){const _=S.texture,O=i.get(S),Z=i.get(_);S.addEventListener("dispose",x);const J=S.textures,st=S.isWebGLCubeRenderTarget===!0,lt=J.length>1;if(lt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,a.memory.textures++),st){O.__webglFramebuffer=[];for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[W]=[];for(let j=0;j<_.mipmaps.length;j++)O.__webglFramebuffer[W][j]=n.createFramebuffer()}else O.__webglFramebuffer[W]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let W=0;W<_.mipmaps.length;W++)O.__webglFramebuffer[W]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(lt)for(let W=0,j=J.length;W<j;W++){const ht=i.get(J[W]);ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture(),a.memory.textures++)}if(S.samples>0&&Zt(S)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let W=0;W<J.length;W++){const j=J[W];O.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[W]);const ht=r.convert(j.format,j.colorSpace),xt=r.convert(j.type),at=E(j.internalFormat,ht,xt,j.normalized,j.colorSpace,S.isXRRenderTarget===!0),nt=ze(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,at,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,O.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(O.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,_);for(let W=0;W<6;W++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Ct(O.__webglFramebuffer[W][j],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,j);else Ct(O.__webglFramebuffer[W],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);p(_)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let W=0,j=J.length;W<j;W++){const ht=J[W],xt=i.get(ht);let at=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(at=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,xt.__webglTexture),Bt(at,ht),Ct(O.__webglFramebuffer,S,ht,n.COLOR_ATTACHMENT0+W,at,0),p(ht)&&M(at)}e.unbindTexture()}else{let W=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(W=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(W,Z.__webglTexture),Bt(W,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)Ct(O.__webglFramebuffer[j],S,_,n.COLOR_ATTACHMENT0,W,j);else Ct(O.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,W,0);p(_)&&M(W),e.unbindTexture()}S.depthBuffer&&de(S)}function Be(S){const _=S.textures;for(let O=0,Z=_.length;O<Z;O++){const J=_[O];if(p(J)){const st=A(S),lt=i.get(J).__webglTexture;e.bindTexture(st,lt),M(st),e.unbindTexture()}}}const le=[],gn=[];function U(S){if(S.samples>0){if(Zt(S)===!1){const _=S.textures,O=S.width,Z=S.height;let J=n.COLOR_BUFFER_BIT;const st=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=i.get(S),W=_.length>1;if(W)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const j=S.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),W){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);const xt=i.get(_[ht]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xt,0)}n.blitFramebuffer(0,0,O,Z,0,0,O,Z,J,n.NEAREST),l===!0&&(le.length=0,gn.length=0,le.push(n.COLOR_ATTACHMENT0+ht),S.depthBuffer&&S.resolveDepthBuffer===!1&&(le.push(st),gn.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,gn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);const xt=i.get(_[ht]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ze(S){return Math.min(s.maxSamples,S.samples)}function Zt(S){const _=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function me(S){const _=a.render.frame;u.get(S)!==_&&(u.set(S,_),S.update())}function ct(S,_){const O=S.colorSpace,Z=S.format,J=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==Oa&&O!==Xi&&(ee.getTransfer(O)===ve?(Z!==Qn||J!==Gn)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",O)),_}function Ae(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.getTextureUnits=q,this.setTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=et,this.setTexture3D=ut,this.setTextureCube=yt,this.rebindTextures=Ee,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function gg(n,t){function e(i,s=Xi){let r;const a=ee.getTransfer(s);if(i===Gn)return n.UNSIGNED_BYTE;if(i===Jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===iu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===tu)return n.BYTE;if(i===eu)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===$l)return n.INT;if(i===fi)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===pi)return n.HALF_FLOAT;if(i===su)return n.ALPHA;if(i===ru)return n.RGB;if(i===Qn)return n.RGBA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===au)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===gs)return n.RG;if(i===ec)return n.RG_INTEGER;if(i===nc)return n.RGBA_INTEGER;if(i===Ta||i===Aa||i===wa||i===Ra)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sl||i===rl||i===al||i===ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ll||i===cl||i===hl||i===ul||i===dl||i===Na||i===fl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ll||i===cl)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ul)return r.COMPRESSED_R11_EAC;if(i===dl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Na)return r.COMPRESSED_RG11_EAC;if(i===fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pl||i===ml||i===_l||i===gl||i===xl||i===vl||i===Ml||i===Sl||i===yl||i===El||i===bl||i===Tl||i===Al||i===wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ml)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_l)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ml)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===El)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Al)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wl)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===Cl||i===Pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Rl)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dl||i===Ll||i===Fa||i===Il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
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

}`;class Mg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new mu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new wn({vertexShader:xg,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fe(new Vr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sg extends ts{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",m=new Mg,p={},M=e.getContextAttributes();let A=null,E=null;const R=[],b=[],w=new Tt;let x=null;const T=new zn;T.viewport=new Pe;const D=new zn;D.viewport=new Pe;const C=[T,D],I=new Cf;let V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let mt=R[K];return mt===void 0&&(mt=new fo,R[K]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(K){let mt=R[K];return mt===void 0&&(mt=new fo,R[K]=mt),mt.getGripSpace()},this.getHand=function(K){let mt=R[K];return mt===void 0&&(mt=new fo,R[K]=mt),mt.getHandSpace()};function F(K){const mt=b.indexOf(K.inputSource);if(mt===-1)return;const ot=R[mt];ot!==void 0&&(ot.update(K.inputSource,K.frame,c||a),ot.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",k);for(let K=0;K<R.length;K++){const mt=b[K];mt!==null&&(b[K]=null,R[K].disconnect(mt))}V=null,q=null,m.reset();for(const K in p)delete p[K];t.setRenderTarget(A),f=null,h=null,d=null,s=null,E=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Dt=null,Ut=null;M.depth&&(Ut=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=M.stencil?ds:Pi,Dt=M.stencil?Fr:fi);const Ct={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ct),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),E=new ti(h.textureWidth,h.textureHeight,{format:Qn,type:Gn,depthTexture:new sr(h.textureWidth,h.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ot={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ti(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(K){for(let mt=0;mt<K.removed.length;mt++){const ot=K.removed[mt],Dt=b.indexOf(ot);Dt>=0&&(b[Dt]=null,R[Dt].disconnect(ot))}for(let mt=0;mt<K.added.length;mt++){const ot=K.added[mt];let Dt=b.indexOf(ot);if(Dt===-1){for(let Ct=0;Ct<R.length;Ct++)if(Ct>=b.length){b.push(ot),Dt=Ct;break}else if(b[Ct]===null){b[Ct]=ot,Dt=Ct;break}if(Dt===-1)break}const Ut=R[Dt];Ut&&Ut.connect(ot)}}const Q=new L,et=new L;function ut(K,mt,ot){Q.setFromMatrixPosition(mt.matrixWorld),et.setFromMatrixPosition(ot.matrixWorld);const Dt=Q.distanceTo(et),Ut=mt.projectionMatrix.elements,Ct=ot.projectionMatrix.elements,Te=Ut[14]/(Ut[10]-1),qt=Ut[14]/(Ut[10]+1),de=(Ut[9]+1)/Ut[5],Ee=(Ut[9]-1)/Ut[5],jt=(Ut[8]-1)/Ut[0],Be=(Ct[8]+1)/Ct[0],le=Te*jt,gn=Te*Be,U=Dt/(-jt+Be),ze=U*-jt;if(mt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ze),K.translateZ(U),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ut[10]===-1)K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Zt=Te+U,me=qt+U,ct=le-ze,Ae=gn+(Dt-ze),S=de*qt/me*Zt,_=Ee*qt/me*Zt;K.projectionMatrix.makePerspective(ct,Ae,S,_,Zt,me),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function yt(K,mt){mt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(mt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let mt=K.near,ot=K.far;m.texture!==null&&(m.depthNear>0&&(mt=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),I.near=D.near=T.near=mt,I.far=D.far=T.far=ot,(V!==I.near||q!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),V=I.near,q=I.far),I.layers.mask=K.layers.mask|6,T.layers.mask=I.layers.mask&-5,D.layers.mask=I.layers.mask&-3;const Dt=K.parent,Ut=I.cameras;yt(I,Dt);for(let Ct=0;Ct<Ut.length;Ct++)yt(Ut[Ct],Dt);Ut.length===2?ut(I,T,D):I.projectionMatrix.copy(T.projectionMatrix),Rt(K,I,Dt)};function Rt(K,mt,ot){ot===null?K.matrix.copy(mt.matrixWorld):(K.matrix.copy(ot.matrixWorld),K.matrix.invert(),K.matrix.multiply(mt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(mt.projectionMatrix),K.projectionMatrixInverse.copy(mt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=zr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(K){return p[K]};let te=null;function ue(K,mt){if(u=mt.getViewerPose(c||a),g=mt,u!==null){const ot=u.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let Dt=!1;ot.length!==I.cameras.length&&(I.cameras.length=0,Dt=!0);for(let qt=0;qt<ot.length;qt++){const de=ot[qt];let Ee=null;if(f!==null)Ee=f.getViewport(de);else{const Be=d.getViewSubImage(h,de);Ee=Be.viewport,qt===0&&(t.setRenderTargetTextures(E,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(E))}let jt=C[qt];jt===void 0&&(jt=new zn,jt.layers.enable(qt),jt.viewport=new Pe,C[qt]=jt),jt.matrix.fromArray(de.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(de.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),qt===0&&(I.matrix.copy(jt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Dt===!0&&I.cameras.push(jt)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const qt=d.getDepthInformation(ot[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,s.renderState)}if(Ut&&Ut.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let qt=0;qt<ot.length;qt++){const de=ot[qt].camera;if(de){let Ee=p[de];Ee||(Ee=new mu,p[de]=Ee);const jt=d.getCameraImage(de);Ee.sourceTexture=jt}}}}for(let ot=0;ot<R.length;ot++){const Dt=b[ot],Ut=R[ot];Dt!==null&&Ut!==void 0&&Ut.update(Dt,mt,c||a)}te&&te(K,mt),mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:mt}),g=null}const Bt=new yu;Bt.setAnimationLoop(ue),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}}const yg=new we,Ru=new Gt;Ru.set(-1,0,0,0,1,0,0,0,1);function Eg(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,_u(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,A,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),A=M.envMap,E=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(yg.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ru),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bg(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const E=A.program;i.uniformBlockBinding(M,E)}function c(M,A){let E=s[M.id];E===void 0&&(g(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",m));const R=A.program;i.updateUBOMapping(M,R);const b=t.render.frame;r[M.id]!==b&&(h(M),r[M.id]=b)}function u(M){const A=d();M.__bindingPointIndex=A;const E=n.createBuffer(),R=M.__size,b=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const A=s[M.id],E=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let b=0,w=E.length;b<w;b++){const x=Array.isArray(E[b])?E[b]:[E[b]];for(let T=0,D=x.length;T<D;T++){const C=x[T];if(f(C,b,T,R)===!0){const I=C.__offset,V=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let F=0;F<V.length;F++){const H=V[F],k=y(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,I+q,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):ArrayBuffer.isView(H)?C.__data.set(new H.constructor(H.buffer,H.byteOffset,C.__data.length)):(H.toArray(C.__data,q),q+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,A,E,R){const b=M.value,w=A+"_"+E;if(R[w]===void 0)return typeof b=="number"||typeof b=="boolean"?R[w]=b:ArrayBuffer.isView(b)?R[w]=b.slice():R[w]=b.clone(),!0;{const x=R[w];if(typeof b=="number"||typeof b=="boolean"){if(x!==b)return R[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(x.equals(b)===!1)return x.copy(b),!0}}return!1}function g(M){const A=M.uniforms;let E=0;const R=16;for(let w=0,x=A.length;w<x;w++){const T=Array.isArray(A[w])?A[w]:[A[w]];for(let D=0,C=T.length;D<C;D++){const I=T[D],V=Array.isArray(I.value)?I.value:[I.value];for(let q=0,F=V.length;q<F;q++){const H=V[q],k=y(H),Q=E%R,et=Q%k.boundary,ut=Q+et;E+=et,ut!==0&&R-ut<k.storage&&(E+=R-ut),I.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=k.storage}}}const b=E%R;return b>0&&(E+=R-b),M.__size=E,M.__cache={},this}function y(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):It("WebGLRenderer: Unsupported uniform value type.",M),A}function m(M){const A=M.target;A.removeEventListener("dispose",m);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Tg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function Ag(){return ai===null&&(ai=new cf(Tg,16,16,gs,pi),ai.name="DFG_LUT",ai.minFilter=ln,ai.magFilter=ln,ai.wrapS=ci,ai.wrapT=ci,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class wg{constructor(t={}){const{canvas:e=Ed(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Gn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const y=f,m=new Set([nc,ec,tc]),p=new Set([Gn,fi,Nr,Fr,Jl,Ql]),M=new Uint32Array(4),A=new Int32Array(4),E=new L;let R=null,b=null;const w=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let C=!1,I=null;this._outputColorSpace=Bn;let V=0,q=0,F=null,H=-1,k=null;const Q=new Pe,et=new Pe;let ut=null;const yt=new Mt(0);let Rt=0,te=e.width,ue=e.height,Bt=1,K=null,mt=null;const ot=new Pe(0,0,te,ue),Dt=new Pe(0,0,te,ue);let Ut=!1;const Ct=new lc;let Te=!1,qt=!1;const de=new we,Ee=new L,jt=new Pe,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function gn(){return F===null?Bt:1}let U=i;function ze(v,N){return e.getContext(v,N)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zl}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),U===null){const N="webgl2";if(U=ze(N,v),U===null)throw ze(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw ie("WebGLRenderer: "+v.message),v}let Zt,me,ct,Ae,S,_,O,Z,J,st,lt,W,j,ht,xt,at,nt,Nt,zt,ne,P,it,Y;function _t(){Zt=new A0(U),Zt.init(),P=new gg(U,Zt),me=new x0(U,Zt,t,P),ct=new mg(U,Zt),me.reversedDepthBuffer&&h&&ct.buffers.depth.setReversed(!0),Ae=new C0(U),S=new eg,_=new _g(U,Zt,ct,S,me,P,Ae),O=new T0(D),Z=new If(U),it=new _0(U,Z),J=new w0(U,Z,Ae,it),st=new D0(U,J,Z,it,Ae),Nt=new P0(U,me,_),xt=new v0(S),lt=new tg(D,O,Zt,me,it,xt),W=new Eg(D,S),j=new ig,ht=new cg(Zt),nt=new m0(D,O,ct,st,g,l),at=new pg(D,st,me),Y=new bg(U,Ae,me,ct),zt=new g0(U,Zt,Ae),ne=new R0(U,Zt,Ae),Ae.programs=lt.programs,D.capabilities=me,D.extensions=Zt,D.properties=S,D.renderLists=j,D.shadowMap=at,D.state=ct,D.info=Ae}_t(),y!==Gn&&(T=new I0(y,e.width,e.height,s,r));const rt=new Sg(D,U);this.xr=rt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=Zt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Zt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Bt},this.setPixelRatio=function(v){v!==void 0&&(Bt=v,this.setSize(te,ue,!1))},this.getSize=function(v){return v.set(te,ue)},this.setSize=function(v,N,G=!0){if(rt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}te=v,ue=N,e.width=Math.floor(v*Bt),e.height=Math.floor(N*Bt),G===!0&&(e.style.width=v+"px",e.style.height=N+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(te*Bt,ue*Bt).floor()},this.setDrawingBufferSize=function(v,N,G){te=v,ue=N,Bt=G,e.width=Math.floor(v*G),e.height=Math.floor(N*G),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(y===Gn){ie("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){It("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Q)},this.getViewport=function(v){return v.copy(ot)},this.setViewport=function(v,N,G,z){v.isVector4?ot.set(v.x,v.y,v.z,v.w):ot.set(v,N,G,z),ct.viewport(Q.copy(ot).multiplyScalar(Bt).round())},this.getScissor=function(v){return v.copy(Dt)},this.setScissor=function(v,N,G,z){v.isVector4?Dt.set(v.x,v.y,v.z,v.w):Dt.set(v,N,G,z),ct.scissor(et.copy(Dt).multiplyScalar(Bt).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(v){ct.setScissorTest(Ut=v)},this.setOpaqueSort=function(v){K=v},this.setTransparentSort=function(v){mt=v},this.getClearColor=function(v){return v.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,G=!0){let z=0;if(v){let B=!1;if(F!==null){const dt=F.texture.format;B=m.has(dt)}if(B){const dt=F.texture.type,vt=p.has(dt),ft=nt.getClearColor(),St=nt.getClearAlpha(),Et=ft.r,Ft=ft.g,Pt=ft.b;vt?(M[0]=Et,M[1]=Ft,M[2]=Pt,M[3]=St,U.clearBufferuiv(U.COLOR,0,M)):(A[0]=Et,A[1]=Ft,A[2]=Pt,A[3]=St,U.clearBufferiv(U.COLOR,0,A))}else z|=U.COLOR_BUFFER_BIT}N&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),I=v},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),nt.dispose(),j.dispose(),ht.dispose(),S.dispose(),O.dispose(),st.dispose(),it.dispose(),Y.dispose(),lt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",hr),rt.removeEventListener("sessionend",es),Rn.stop()};function $(v){v.preventDefault(),za("WebGLRenderer: Context Lost."),C=!0}function bt(){za("WebGLRenderer: Context Restored."),C=!1;const v=Ae.autoReset,N=at.enabled,G=at.autoUpdate,z=at.needsUpdate,B=at.type;_t(),Ae.autoReset=v,at.enabled=N,at.autoUpdate=G,at.needsUpdate=z,at.type=B}function Lt(v){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function De(v){const N=v.target;N.removeEventListener("dispose",De),re(N)}function re(v){cn(v),S.remove(v)}function cn(v){const N=S.get(v).programs;N!==void 0&&(N.forEach(function(G){lt.releaseProgram(G)}),v.isShaderMaterial&&lt.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,G,z,B,dt){N===null&&(N=Be);const vt=B.isMesh&&B.matrixWorld.determinant()<0,ft=Ts(v,N,G,z,B);ct.setMaterial(z,vt);let St=G.index,Et=1;if(z.wireframe===!0){if(St=J.getWireframeAttribute(G),St===void 0)return;Et=2}const Ft=G.drawRange,Pt=G.attributes.position;let At=Ft.start*Et,ae=(Ft.start+Ft.count)*Et;dt!==null&&(At=Math.max(At,dt.start*Et),ae=Math.min(ae,(dt.start+dt.count)*Et)),St!==null?(At=Math.max(At,0),ae=Math.min(ae,St.count)):Pt!=null&&(At=Math.max(At,0),ae=Math.min(ae,Pt.count));const Jt=ae-At;if(Jt<0||Jt===1/0)return;it.setup(B,z,ft,G,St);let Re,fe=zt;if(St!==null&&(Re=Z.get(St),fe=ne,fe.setIndex(Re)),B.isMesh)z.wireframe===!0?(ct.setLineWidth(z.wireframeLinewidth*gn()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(B.isLine){let Ze=z.linewidth;Ze===void 0&&(Ze=1),ct.setLineWidth(Ze*gn()),B.isLineSegments?fe.setMode(U.LINES):B.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else B.isPoints?fe.setMode(U.POINTS):B.isSprite&&fe.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(Zt.get("WEBGL_multi_draw"))fe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ze=B._multiDrawStarts,gt=B._multiDrawCounts,sn=B._multiDrawCount,Qt=St?Z.get(St).bytesPerElement:1,xn=S.get(z).currentProgram.getUniforms();for(let Un=0;Un<sn;Un++)xn.setValue(U,"_gl_DrawID",Un),fe.render(Ze[Un]/Qt,gt[Un])}else if(B.isInstancedMesh)fe.renderInstances(At,Jt,B.count);else if(G.isInstancedBufferGeometry){const Ze=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gt=Math.min(G.instanceCount,Ze);fe.renderInstances(At,Jt,gt)}else fe.render(At,Jt)};function In(v,N,G){v.transparent===!0&&v.side===Tn&&v.forceSinglePass===!1?(v.side=An,v.needsUpdate=!0,is(v,N,G),v.side=Zi,v.needsUpdate=!0,is(v,N,G),v.side=Tn):is(v,N,G)}this.compile=function(v,N,G=null){G===null&&(G=v),b=ht.get(G),b.init(N),x.push(b),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),v!==G&&v.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights();const z=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const dt=B.material;if(dt)if(Array.isArray(dt))for(let vt=0;vt<dt.length;vt++){const ft=dt[vt];In(ft,G,B),z.add(ft)}else In(dt,G,B),z.add(dt)}),b=x.pop(),z},this.compileAsync=function(v,N,G=null){const z=this.compile(v,N,G);return new Promise(B=>{function dt(){if(z.forEach(function(vt){S.get(vt).currentProgram.isReady()&&z.delete(vt)}),z.size===0){B(v);return}setTimeout(dt,10)}Zt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ss=null;function ys(v){Ss&&Ss(v)}function hr(){Rn.stop()}function es(){Rn.start()}const Rn=new yu;Rn.setAnimationLoop(ys),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(v){Ss=v,rt.setAnimationLoop(v),v===null?Rn.stop():Rn.start()},rt.addEventListener("sessionstart",hr),rt.addEventListener("sessionend",es),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;I!==null&&I.renderStart(v,N);const G=rt.enabled===!0&&rt.isPresenting===!0,z=T!==null&&(F===null||G)&&T.begin(D,F);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),v.isScene===!0&&v.onBeforeRender(D,v,N,F),b=ht.get(v,x.length),b.init(N),b.state.textureUnits=_.getTextureUnits(),x.push(b),de.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ct.setFromProjectionMatrix(de,ui,N.reversedDepth),qt=this.localClippingEnabled,Te=xt.init(this.clippingPlanes,qt),R=j.get(v,w.length),R.init(),w.push(R),rt.enabled===!0&&rt.isPresenting===!0){const vt=D.xr.getDepthSensingMesh();vt!==null&&Li(vt,N,-1/0,D.sortObjects)}Li(v,N,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(K,mt),le=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,le&&nt.addToRenderList(R,v),this.info.render.frame++,Te===!0&&xt.beginShadows();const B=b.state.shadowsArray;if(at.render(B,v,N),Te===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&T.hasRenderPass())===!1){const vt=R.opaque,ft=R.transmissive;if(b.setupLights(),N.isArrayCamera){const St=N.cameras;if(ft.length>0)for(let Et=0,Ft=St.length;Et<Ft;Et++){const Pt=St[Et];hn(vt,ft,v,Pt)}le&&nt.render(v);for(let Et=0,Ft=St.length;Et<Ft;Et++){const Pt=St[Et];Es(R,v,Pt,Pt.viewport)}}else ft.length>0&&hn(vt,ft,v,N),le&&nt.render(v),Es(R,v,N)}F!==null&&q===0&&(_.updateMultisampleRenderTarget(F),_.updateRenderTargetMipmap(F)),z&&T.end(D),v.isScene===!0&&v.onAfterRender(D,v,N),it.resetDefaultState(),H=-1,k=null,x.pop(),x.length>0?(b=x[x.length-1],_.setTextureUnits(b.state.textureUnits),Te===!0&&xt.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?R=w[w.length-1]:R=null,I!==null&&I.renderEnd()};function Li(v,N,G,z){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Ct.intersectsSprite(v)){z&&jt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(de);const vt=st.update(v),ft=v.material;ft.visible&&R.push(v,vt,ft,G,jt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Ct.intersectsObject(v))){const vt=st.update(v),ft=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),jt.copy(v.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),jt.copy(vt.boundingSphere.center)),jt.applyMatrix4(v.matrixWorld).applyMatrix4(de)),Array.isArray(ft)){const St=vt.groups;for(let Et=0,Ft=St.length;Et<Ft;Et++){const Pt=St[Et],At=ft[Pt.materialIndex];At&&At.visible&&R.push(v,vt,At,G,jt.z,Pt)}}else ft.visible&&R.push(v,vt,ft,G,jt.z,null)}}const dt=v.children;for(let vt=0,ft=dt.length;vt<ft;vt++)Li(dt[vt],N,G,z)}function Es(v,N,G,z){const{opaque:B,transmissive:dt,transparent:vt}=v;b.setupLightsView(G),Te===!0&&xt.setGlobalState(D.clippingPlanes,G),z&&ct.viewport(Q.copy(z)),B.length>0&&ns(B,N,G),dt.length>0&&ns(dt,N,G),vt.length>0&&ns(vt,N,G),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function hn(v,N,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){const At=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new ti(1,1,{generateMipmaps:!0,type:At?pi:Gn,minFilter:qi,samples:Math.max(4,me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const dt=b.state.transmissionRenderTarget[z.id],vt=z.viewport||Q;dt.setSize(vt.z*D.transmissionResolutionScale,vt.w*D.transmissionResolutionScale);const ft=D.getRenderTarget(),St=D.getActiveCubeFace(),Et=D.getActiveMipmapLevel();D.setRenderTarget(dt),D.getClearColor(yt),Rt=D.getClearAlpha(),Rt<1&&D.setClearColor(16777215,.5),D.clear(),le&&nt.render(G);const Ft=D.toneMapping;D.toneMapping=di;const Pt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),Te===!0&&xt.setGlobalState(D.clippingPlanes,z),ns(v,G,z),_.updateMultisampleRenderTarget(dt),_.updateRenderTargetMipmap(dt),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let ae=0,Jt=N.length;ae<Jt;ae++){const Re=N[ae],{object:fe,geometry:Ze,material:gt,group:sn}=Re;if(gt.side===Tn&&fe.layers.test(z.layers)){const Qt=gt.side;gt.side=An,gt.needsUpdate=!0,ur(fe,G,z,Ze,gt,sn),gt.side=Qt,gt.needsUpdate=!0,At=!0}}At===!0&&(_.updateMultisampleRenderTarget(dt),_.updateRenderTargetMipmap(dt))}D.setRenderTarget(ft,St,Et),D.setClearColor(yt,Rt),Pt!==void 0&&(z.viewport=Pt),D.toneMapping=Ft}function ns(v,N,G){const z=N.isScene===!0?N.overrideMaterial:null;for(let B=0,dt=v.length;B<dt;B++){const vt=v[B],{object:ft,geometry:St,group:Et}=vt;let Ft=vt.material;Ft.allowOverride===!0&&z!==null&&(Ft=z),ft.layers.test(G.layers)&&ur(ft,N,G,St,Ft,Et)}}function ur(v,N,G,z,B,dt){v.onBeforeRender(D,N,G,z,B,dt),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(D,N,G,z,v,dt),B.transparent===!0&&B.side===Tn&&B.forceSinglePass===!1?(B.side=An,B.needsUpdate=!0,D.renderBufferDirect(G,N,z,B,v,dt),B.side=Zi,B.needsUpdate=!0,D.renderBufferDirect(G,N,z,B,v,dt),B.side=Tn):D.renderBufferDirect(G,N,z,B,v,dt),v.onAfterRender(D,N,G,z,B,dt)}function is(v,N,G){N.isScene!==!0&&(N=Be);const z=S.get(v),B=b.state.lights,dt=b.state.shadowsArray,vt=B.state.version,ft=lt.getParameters(v,B.state,dt,N,G,b.state.lightProbeGridArray),St=lt.getProgramCacheKey(ft);let Et=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;const Ft=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=O.get(v.envMap||z.environment,Ft),z.envMapRotation=z.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Et===void 0&&(v.addEventListener("dispose",De),Et=new Map,z.programs=Et);let Pt=Et.get(St);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===vt)return fr(v,ft),Pt}else ft.uniforms=lt.getUniforms(v),I!==null&&v.isNodeMaterial&&I.build(v,G,ft),v.onBeforeCompile(ft,D),Pt=lt.acquireProgram(ft,St),Et.set(St,Pt),z.uniforms=ft.uniforms;const At=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(At.clippingPlanes=xt.uniform),fr(v,ft),z.needsLights=Wr(v),z.lightsStateVersion=vt,z.needsLights&&(At.ambientLightColor.value=B.state.ambient,At.lightProbe.value=B.state.probe,At.directionalLights.value=B.state.directional,At.directionalLightShadows.value=B.state.directionalShadow,At.spotLights.value=B.state.spot,At.spotLightShadows.value=B.state.spotShadow,At.rectAreaLights.value=B.state.rectArea,At.ltc_1.value=B.state.rectAreaLTC1,At.ltc_2.value=B.state.rectAreaLTC2,At.pointLights.value=B.state.point,At.pointLightShadows.value=B.state.pointShadow,At.hemisphereLights.value=B.state.hemi,At.directionalShadowMatrix.value=B.state.directionalShadowMatrix,At.spotLightMatrix.value=B.state.spotLightMatrix,At.spotLightMap.value=B.state.spotLightMap,At.pointShadowMatrix.value=B.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=Pt,z.uniformsList=null,Pt}function dr(v){if(v.uniformsList===null){const N=v.currentProgram.getUniforms();v.uniformsList=Pa.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function fr(v,N){const G=S.get(v);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function bs(v,N){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;E.setFromMatrixPosition(N.matrixWorld);for(let G=0,z=v.length;G<z;G++){const B=v[G];if(B.texture!==null&&B.boundingBox.containsPoint(E))return B}return null}function Ts(v,N,G,z,B){N.isScene!==!0&&(N=Be),_.resetTextureUnits();const dt=N.fog,vt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,ft=F===null?D.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ee.workingColorSpace,St=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Et=O.get(z.envMap||vt,St),Ft=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pt=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),At=!!G.morphAttributes.position,ae=!!G.morphAttributes.normal,Jt=!!G.morphAttributes.color;let Re=di;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Re=D.toneMapping);const fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ze=fe!==void 0?fe.length:0,gt=S.get(z),sn=b.state.lights;if(Te===!0&&(qt===!0||v!==k)){const ce=v===k&&z.id===H;xt.setState(z,v,ce)}let Qt=!1;z.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==sn.state.version||gt.outputColorSpace!==ft||B.isBatchedMesh&&gt.batching===!1||!B.isBatchedMesh&&gt.batching===!0||B.isBatchedMesh&&gt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&gt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&gt.instancing===!1||!B.isInstancedMesh&&gt.instancing===!0||B.isSkinnedMesh&&gt.skinning===!1||!B.isSkinnedMesh&&gt.skinning===!0||B.isInstancedMesh&&gt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&gt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&gt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&gt.instancingMorph===!1&&B.morphTexture!==null||gt.envMap!==Et||z.fog===!0&&gt.fog!==dt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==xt.numPlanes||gt.numIntersection!==xt.numIntersection)||gt.vertexAlphas!==Ft||gt.vertexTangents!==Pt||gt.morphTargets!==At||gt.morphNormals!==ae||gt.morphColors!==Jt||gt.toneMapping!==Re||gt.morphTargetsCount!==Ze||!!gt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Qt=!0):(Qt=!0,gt.__version=z.version);let xn=gt.currentProgram;Qt===!0&&(xn=is(z,N,B),I&&z.isNodeMaterial&&I.onUpdateProgram(z,xn,gt));let Un=!1,Cn=!1,mi=!1;const pe=xn.getUniforms(),_e=gt.uniforms;if(ct.useProgram(xn.program)&&(Un=!0,Cn=!0,mi=!0),z.id!==H&&(H=z.id,Cn=!0),gt.needsLights){const ce=bs(b.state.lightProbeGridArray,B);gt.lightProbeGrid!==ce&&(gt.lightProbeGrid=ce,Cn=!0)}if(Un||k!==v){ct.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pe.setValue(U,"projectionMatrix",v.projectionMatrix),pe.setValue(U,"viewMatrix",v.matrixWorldInverse);const Hn=pe.map.cameraPosition;Hn!==void 0&&Hn.setValue(U,Ee.setFromMatrixPosition(v.matrixWorld)),me.logarithmicDepthBuffer&&pe.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&pe.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),k!==v&&(k=v,Cn=!0,mi=!0)}if(gt.needsLights&&(sn.state.directionalShadowMap.length>0&&pe.setValue(U,"directionalShadowMap",sn.state.directionalShadowMap,_),sn.state.spotShadowMap.length>0&&pe.setValue(U,"spotShadowMap",sn.state.spotShadowMap,_),sn.state.pointShadowMap.length>0&&pe.setValue(U,"pointShadowMap",sn.state.pointShadowMap,_)),B.isSkinnedMesh){pe.setOptional(U,B,"bindMatrix"),pe.setOptional(U,B,"bindMatrixInverse");const ce=B.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),pe.setValue(U,"boneTexture",ce.boneTexture,_))}B.isBatchedMesh&&(pe.setOptional(U,B,"batchingTexture"),pe.setValue(U,"batchingTexture",B._matricesTexture,_),pe.setOptional(U,B,"batchingIdTexture"),pe.setValue(U,"batchingIdTexture",B._indirectTexture,_),pe.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&pe.setValue(U,"batchingColorTexture",B._colorsTexture,_));const rn=G.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Nt.update(B,G,xn),(Cn||gt.receiveShadow!==B.receiveShadow)&&(gt.receiveShadow=B.receiveShadow,pe.setValue(U,"receiveShadow",B.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(_e.envMapIntensity.value=N.environmentIntensity),_e.dfgLUT!==void 0&&(_e.dfgLUT.value=Ag()),Cn){if(pe.setValue(U,"toneMappingExposure",D.toneMappingExposure),gt.needsLights&&Ii(_e,mi),dt&&z.fog===!0&&W.refreshFogUniforms(_e,dt),W.refreshMaterialUniforms(_e,z,Bt,ue,b.state.transmissionRenderTarget[v.id]),gt.needsLights&&gt.lightProbeGrid){const ce=gt.lightProbeGrid;_e.probesSH.value=ce.texture,_e.probesMin.value.copy(ce.boundingBox.min),_e.probesMax.value.copy(ce.boundingBox.max),_e.probesResolution.value.copy(ce.resolution)}Pa.upload(U,dr(gt),_e,_)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Pa.upload(U,dr(gt),_e,_),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&pe.setValue(U,"center",B.center),pe.setValue(U,"modelViewMatrix",B.modelViewMatrix),pe.setValue(U,"normalMatrix",B.normalMatrix),pe.setValue(U,"modelMatrix",B.matrixWorld),z.uniformsGroups!==void 0){const ce=z.uniformsGroups;for(let Hn=0,ei=ce.length;Hn<ei;Hn++){const _i=ce[Hn];Y.update(_i,xn),Y.bind(_i,xn)}}return xn}function Ii(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function Wr(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,N,G){const z=S.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),S.get(v.texture).__webglTexture=N,S.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){const G=S.get(v);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const pr=U.createFramebuffer();this.setRenderTarget=function(v,N=0,G=0){F=v,V=N,q=G;let z=null,B=!1,dt=!1;if(v){const ft=S.get(v);if(ft.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(U.FRAMEBUFFER,ft.__webglFramebuffer),Q.copy(v.viewport),et.copy(v.scissor),ut=v.scissorTest,ct.viewport(Q),ct.scissor(et),ct.setScissorTest(ut),H=-1;return}else if(ft.__webglFramebuffer===void 0)_.setupRenderTarget(v);else if(ft.__hasExternalTextures)_.rebindTextures(v,S.get(v.texture).__webglTexture,S.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ft=v.depthTexture;if(ft.__boundDepthTexture!==Ft){if(Ft!==null&&S.has(Ft)&&(v.width!==Ft.image.width||v.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(v)}}const St=v.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(dt=!0);const Et=S.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Et[N])?z=Et[N][G]:z=Et[N],B=!0):v.samples>0&&_.useMultisampledRTT(v)===!1?z=S.get(v).__webglMultisampledFramebuffer:Array.isArray(Et)?z=Et[G]:z=Et,Q.copy(v.viewport),et.copy(v.scissor),ut=v.scissorTest}else Q.copy(ot).multiplyScalar(Bt).floor(),et.copy(Dt).multiplyScalar(Bt).floor(),ut=Ut;if(G!==0&&(z=pr),ct.bindFramebuffer(U.FRAMEBUFFER,z)&&ct.drawBuffers(v,z),ct.viewport(Q),ct.scissor(et),ct.setScissorTest(ut),B){const ft=S.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft.__webglTexture,G)}else if(dt){const ft=N;for(let St=0;St<v.textures.length;St++){const Et=S.get(v.textures[St]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+St,Et.__webglTexture,G,ft)}}else if(v!==null&&G!==0){const ft=S.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,G)}H=-1},this.readRenderTargetPixels=function(v,N,G,z,B,dt,vt,ft=0){if(!(v&&v.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=S.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){ct.bindFramebuffer(U.FRAMEBUFFER,St);try{const Et=v.textures[ft],Ft=Et.format,Pt=Et.type;if(v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft),!me.textureFormatReadable(Ft)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(Pt)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-z&&G>=0&&G<=v.height-B&&U.readPixels(N,G,z,B,P.convert(Ft),P.convert(Pt),dt)}finally{const Et=F!==null?S.get(F).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(v,N,G,z,B,dt,vt,ft=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=S.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St)if(N>=0&&N<=v.width-z&&G>=0&&G<=v.height-B){ct.bindFramebuffer(U.FRAMEBUFFER,St);const Et=v.textures[ft],Ft=Et.format,Pt=Et.type;if(v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft),!me.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),U.readPixels(N,G,z,B,P.convert(Ft),P.convert(Pt),0);const ae=F!==null?S.get(F).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,ae);const Jt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await bd(U,Jt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,At),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.deleteBuffer(At),U.deleteSync(Jt),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,G=0){const z=Math.pow(2,-G),B=Math.floor(v.image.width*z),dt=Math.floor(v.image.height*z),vt=N!==null?N.x:0,ft=N!==null?N.y:0;_.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,vt,ft,B,dt),ct.unbindTexture()};const As=U.createFramebuffer(),mr=U.createFramebuffer();this.copyTextureToTexture=function(v,N,G=null,z=null,B=0,dt=0){let vt,ft,St,Et,Ft,Pt,At,ae,Jt;const Re=v.isCompressedTexture?v.mipmaps[dt]:v.image;if(G!==null)vt=G.max.x-G.min.x,ft=G.max.y-G.min.y,St=G.isBox3?G.max.z-G.min.z:1,Et=G.min.x,Ft=G.min.y,Pt=G.isBox3?G.min.z:0;else{const _e=Math.pow(2,-B);vt=Math.floor(Re.width*_e),ft=Math.floor(Re.height*_e),v.isDataArrayTexture?St=Re.depth:v.isData3DTexture?St=Math.floor(Re.depth*_e):St=1,Et=0,Ft=0,Pt=0}z!==null?(At=z.x,ae=z.y,Jt=z.z):(At=0,ae=0,Jt=0);const fe=P.convert(N.format),Ze=P.convert(N.type);let gt;N.isData3DTexture?(_.setTexture3D(N,0),gt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(_.setTexture2DArray(N,0),gt=U.TEXTURE_2D_ARRAY):(_.setTexture2D(N,0),gt=U.TEXTURE_2D),ct.activeTexture(U.TEXTURE0),ct.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),ct.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ct.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const sn=ct.getParameter(U.UNPACK_ROW_LENGTH),Qt=ct.getParameter(U.UNPACK_IMAGE_HEIGHT),xn=ct.getParameter(U.UNPACK_SKIP_PIXELS),Un=ct.getParameter(U.UNPACK_SKIP_ROWS),Cn=ct.getParameter(U.UNPACK_SKIP_IMAGES);ct.pixelStorei(U.UNPACK_ROW_LENGTH,Re.width),ct.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Re.height),ct.pixelStorei(U.UNPACK_SKIP_PIXELS,Et),ct.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),ct.pixelStorei(U.UNPACK_SKIP_IMAGES,Pt);const mi=v.isDataArrayTexture||v.isData3DTexture,pe=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){const _e=S.get(v),rn=S.get(N),ce=S.get(_e.__renderTarget),Hn=S.get(rn.__renderTarget);ct.bindFramebuffer(U.READ_FRAMEBUFFER,ce.__webglFramebuffer),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let ei=0;ei<St;ei++)mi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,S.get(v).__webglTexture,B,Pt+ei),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,S.get(N).__webglTexture,dt,Jt+ei)),U.blitFramebuffer(Et,Ft,vt,ft,At,ae,vt,ft,U.DEPTH_BUFFER_BIT,U.NEAREST);ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||S.has(v)){const _e=S.get(v),rn=S.get(N);ct.bindFramebuffer(U.READ_FRAMEBUFFER,As),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,mr);for(let ce=0;ce<St;ce++)mi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_e.__webglTexture,B,Pt+ce):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,B),pe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,rn.__webglTexture,dt,Jt+ce):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,rn.__webglTexture,dt),B!==0?U.blitFramebuffer(Et,Ft,vt,ft,At,ae,vt,ft,U.COLOR_BUFFER_BIT,U.NEAREST):pe?U.copyTexSubImage3D(gt,dt,At,ae,Jt+ce,Et,Ft,vt,ft):U.copyTexSubImage2D(gt,dt,At,ae,Et,Ft,vt,ft);ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else pe?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(gt,dt,At,ae,Jt,vt,ft,St,fe,Ze,Re.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(gt,dt,At,ae,Jt,vt,ft,St,fe,Re.data):U.texSubImage3D(gt,dt,At,ae,Jt,vt,ft,St,fe,Ze,Re):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,At,ae,vt,ft,fe,Ze,Re.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,At,ae,Re.width,Re.height,fe,Re.data):U.texSubImage2D(U.TEXTURE_2D,dt,At,ae,vt,ft,fe,Ze,Re);ct.pixelStorei(U.UNPACK_ROW_LENGTH,sn),ct.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),ct.pixelStorei(U.UNPACK_SKIP_PIXELS,xn),ct.pixelStorei(U.UNPACK_SKIP_ROWS,Un),ct.pixelStorei(U.UNPACK_SKIP_IMAGES,Cn),dt===0&&N.generateMipmaps&&U.generateMipmap(gt),ct.unbindTexture()},this.initRenderTarget=function(v){S.get(v).__webglFramebuffer===void 0&&_.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?_.setTextureCube(v,0):v.isData3DTexture?_.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?_.setTexture2DArray(v,0):_.setTexture2D(v,0),ct.unbindTexture()},this.resetState=function(){V=0,q=0,F=null,ct.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Oh={type:"change"},mc={type:"start"},Cu={type:"end"},xa=new oc,Bh=new Ai,Rg=Math.cos(70*Ol.DEG2RAD),$e=new L,Dn=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Go=1e-6;class Cg extends Su{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xn.ROTATE,MIDDLE:Xn.DOLLY,RIGHT:Xn.PAN},this.touches={ONE:Zs.ROTATE,TWO:Zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Di,this._lastTargetPosition=new L,this._quat=new Di().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uh,this._sphericalDelta=new uh,this._scale=1,this._panOffset=new L,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new L,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dg.bind(this),this._onPointerDown=Pg.bind(this),this._onPointerUp=Lg.bind(this),this._onContextMenu=zg.bind(this),this._onMouseWheel=Ng.bind(this),this._onKeyDown=Fg.bind(this),this._onTouchStart=Og.bind(this),this._onTouchMove=Bg.bind(this),this._onMouseDown=Ig.bind(this),this._onMouseMove=Ug.bind(this),this._interceptControlDown=kg.bind(this),this._interceptControlUp=Gg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Oh),this.update(),this.state=ye.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;$e.copy(e).sub(this.target),$e.applyQuaternion(this._quat),this._spherical.setFromVector3($e),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Dn:i>Math.PI&&(i-=Dn),s<-Math.PI?s+=Dn:s>Math.PI&&(s-=Dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if($e.setFromSpherical(this._spherical),$e.applyQuaternion(this._quatInverse),e.copy(this.target).add($e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=$e.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=$e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xa.origin.copy(this.object.position),xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xa.direction))<Rg?this.object.lookAt(this.target):(Bh.setFromNormalAndCoplanarPoint(this.object.up,this.target),xa.intersectPlane(Bh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Go||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Go||this._lastTargetPosition.distanceToSquared(this.target)>Go?(this.dispatchEvent(Oh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Dn/60*this.autoRotateSpeed*t:Dn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){$e.setFromMatrixColumn(e,0),$e.multiplyScalar(-t),this._panOffset.add($e)}_panUp(t,e){this.screenSpacePanning===!0?$e.setFromMatrixColumn(e,1):($e.setFromMatrixColumn(e,0),$e.crossVectors(this.object.up,$e)),$e.multiplyScalar(t),this._panOffset.add($e)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;$e.copy(s).sub(this.target);let r=$e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Pg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Dg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Lg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cu),this.state=ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ig(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ye.DOLLY;break;case Xn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ye.ROTATE}break;case Xn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(mc)}function Ug(n){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Ng(n){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(n.preventDefault(),this.dispatchEvent(mc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Cu))}function Fg(n){this.enabled!==!1&&this._handleKeyDown(n)}function Og(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Zs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ye.TOUCH_ROTATE;break;case Zs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case Zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ye.TOUCH_DOLLY_PAN;break;case Zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(mc)}function Bg(n){switch(this._trackPointer(n),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ye.NONE}}function zg(n){this.enabled!==!1&&n.preventDefault()}function kg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ho={type:"change"},_c={type:"start"},gc={type:"end"},zh=1e-6,he={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},va=new Tt,Wi=new Tt,Hg=new L,Ma=new L,Vo=new L,js=new Di,kh=new L,Sa=new L,Wo=new L,ya=new L;class Vg extends Su{constructor(t,e=null){super(t,e),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Xn.ROTATE,MIDDLE:Xn.DOLLY,RIGHT:Xn.PAN},this.target=new L,this.state=he.NONE,this.keyState=he.NONE,this._lastPosition=new L,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new L,this._movePrev=new Tt,this._moveCurr=new Tt,this._lastAxis=new L,this._zoomStart=new Tt,this._zoomEnd=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._pointers=[],this._pointerPositions={},this._onPointerMove=Xg.bind(this),this._onPointerDown=Wg.bind(this),this._onPointerUp=Yg.bind(this),this._onPointerCancel=qg.bind(this),this._onContextMenu=tx.bind(this),this._onMouseWheel=Qg.bind(this),this._onKeyDown=Zg.bind(this),this._onKeyUp=jg.bind(this),this._onTouchStart=ex.bind(this),this._onTouchMove=nx.bind(this),this._onTouchEnd=ix.bind(this),this._onMouseDown=Kg.bind(this),this._onMouseMove=$g.bind(this),this._onMouseUp=Jg.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,e!==null&&(this.connect(e),this.handleResize()),this.update()}connect(t){super.connect(t),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction=""}dispose(){this.disconnect()}handleResize(){const t=this.domElement.getBoundingClientRect(),e=this.domElement.ownerDocument.documentElement;this.screen.left=t.left+window.pageXOffset-e.clientLeft,this.screen.top=t.top+window.pageYOffset-e.clientTop,this.screen.width=t.width,this.screen.height=t.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>zh&&(this.dispatchEvent(Ho),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>zh||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(Ho),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=he.NONE,this.keyState=he.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(Ho),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(Wi.copy(this._panEnd).sub(this._panStart),Wi.lengthSq()){if(this.object.isOrthographicCamera){const t=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,e=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;Wi.x*=t,Wi.y*=e}Wi.multiplyScalar(this._eye.length()*this.panSpeed),Ma.copy(this._eye).cross(this.object.up).setLength(Wi.x),Ma.add(Hg.copy(this.object.up).setLength(Wi.y)),this.object.position.add(Ma),this.target.add(Ma),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(Wi.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){ya.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let t=ya.length();t?(this._eye.copy(this.object.position).sub(this.target),kh.copy(this._eye).normalize(),Sa.copy(this.object.up).normalize(),Wo.crossVectors(Sa,kh).normalize(),Sa.setLength(this._moveCurr.y-this._movePrev.y),Wo.setLength(this._moveCurr.x-this._movePrev.x),ya.copy(Sa.add(Wo)),Vo.crossVectors(ya,this._eye).normalize(),t*=this.rotateSpeed,js.setFromAxisAngle(Vo,t),this._eye.applyQuaternion(js),this.object.up.applyQuaternion(js),this._lastAxis.copy(Vo),this._lastAngle=t):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),js.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(js),this.object.up.applyQuaternion(js)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let t;this.state===he.TOUCH_ZOOM_PAN?(t=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=Ol.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,t!==1&&t>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=Ol.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(t,e){return va.set((t-this.screen.left)/this.screen.width,(e-this.screen.top)/this.screen.height),va}_getMouseOnCircle(t,e){return va.set((t-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-e))/this.screen.width),va}_addPointer(t){this._pointers.push(t)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId==t.pointerId){this._pointers.splice(e,1);return}}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[e.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function Wg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n))}function Xg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Yg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchEnd(n):this._onMouseUp(),this._removePointer(n),this._pointers.length===0&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp)))}function qg(n){this._removePointer(n)}function jg(){this.enabled!==!1&&(this.keyState=he.NONE,window.addEventListener("keydown",this._onKeyDown))}function Zg(n){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===he.NONE&&(n.code===this.keys[he.ROTATE]&&!this.noRotate?this.keyState=he.ROTATE:n.code===this.keys[he.ZOOM]&&!this.noZoom?this.keyState=he.ZOOM:n.code===this.keys[he.PAN]&&!this.noPan&&(this.keyState=he.PAN)))}function Kg(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xn.DOLLY:this.state=he.ZOOM;break;case Xn.ROTATE:this.state=he.ROTATE;break;case Xn.PAN:this.state=he.PAN;break;default:this.state=he.NONE}const e=this.keyState!==he.NONE?this.keyState:this.state;e===he.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY)),this._movePrev.copy(this._moveCurr)):e===he.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(n.pageX,n.pageY)),this._zoomEnd.copy(this._zoomStart)):e===he.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(n.pageX,n.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(_c)}function $g(n){const t=this.keyState!==he.NONE?this.keyState:this.state;t===he.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY))):t===he.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(n.pageX,n.pageY)):t===he.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(n.pageX,n.pageY))}function Jg(){this.state=he.NONE,this.dispatchEvent(gc)}function Qg(n){if(this.enabled!==!1&&this.noZoom!==!0){switch(n.preventDefault(),n.deltaMode){case 2:this._zoomStart.y-=n.deltaY*.025;break;case 1:this._zoomStart.y-=n.deltaY*.01;break;default:this._zoomStart.y-=n.deltaY*25e-5;break}this.dispatchEvent(_c),this.dispatchEvent(gc)}}function tx(n){this.enabled!==!1&&n.preventDefault()}function ex(n){switch(this._trackPointer(n),this._pointers.length){case 1:this.state=he.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=he.TOUCH_ZOOM_PAN;const t=this._pointers[0].pageX-this._pointers[1].pageX,e=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(t*t+e*e);const i=(this._pointers[0].pageX+this._pointers[1].pageX)/2,s=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(i,s)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(_c)}function nx(n){switch(this._trackPointer(n),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY));break;default:const t=this._getSecondPointerPosition(n),e=n.pageX-t.x,i=n.pageY-t.y;this._touchZoomDistanceEnd=Math.sqrt(e*e+i*i);const s=(n.pageX+t.x)/2,r=(n.pageY+t.y)/2;this._panEnd.copy(this._getMouseOnScreen(s,r));break}}function ix(n){switch(this._pointers.length){case 0:this.state=he.NONE;break;case 1:this.state=he.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(n.pageX,n.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=he.TOUCH_ZOOM_PAN;for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId!==n.pointerId){const e=this._pointerPositions[this._pointers[t].pointerId];this._moveCurr.copy(this._getMouseOnCircle(e.x,e.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(gc)}const se=n=>Math.floor(Math.random()*n),We=n=>n[se(n.length)],lr=n=>"#"+n.toString(16).padStart(6,"0");function xc(n,t,e){const i=n>>16&255,s=n>>8&255,r=n&255,a=t>>16&255,o=t>>8&255,l=t&255,c=Math.round(i+(a-i)*e),u=Math.round(s+(o-s)*e),d=Math.round(r+(l-r)*e);return c<<16|u<<8|d}const cr=1447446,$i=16250868,Pu=16052712,sx={agamograph:[15022389,16635957,4431943,2001125,9315498],nightRainbow:[14100029,16015414,16765503,1402304,8072383],dizengoff:[14100029,16765503,2390944,3065014,6966419],highContrast:[16717636,51283,2718207,16748800,16771584,11141375],spectrumBand:[15022389,16485376,16635957,4431943,2001125,9315498]},Du=[$i,$i,Pu],rx=[$i,cr],ar=n=>{const t=(n>>16&255)/255,e=(n>>8&255)/255,i=(n&255)/255,s=Math.max(t,e,i),r=Math.min(t,e,i),a=s-r;if(!a)return 0;let o;return s===t?o=(e-i)/a%6:s===e?o=(i-t)/a+2:o=(t-e)/a+4,(o*60+360)%360},Gl=Object.values(sx);let ps=Gl[0],vc=[...ps,cr],Da=[...ps].sort((n,t)=>ar(n)-ar(t));function Lu(n){let t=Gl.filter(e=>e!==ps);t.length||(t=Gl),ps=t[Math.floor(Math.random()*t.length)],vc=[...ps,cr],Da=[...ps].sort((e,i)=>ar(e)-ar(i))}Lu();function xs(n,t){const e=[...n].sort((a,o)=>ar(a)-ar(o)),i=e.length,s=Math.min(t,i),r=se(i);return Array.from({length:s},(a,o)=>e[(r+o)%i])}const ax=n=>n?rx:vc,ox=n=>n?$i:We(Du),kn=20,Se=51;function Iu(n,t){const e=Array(n).fill(Math.floor(t/n));let i=t-e.reduce((s,r)=>s+r,0);for(let s=0;i>0;s=(s+1)%n)e[s]++,i--;for(let s=0;s<n;s++){const r=se(n),a=se(n);r!==a&&e[r]>3&&(e[r]--,e[a]++)}return e}function Uu(n,t,e,i){n.fillStyle=lr(i),n.fillRect(t*Se,e*Se,Se+.6,Se+.6)}function bn(n,t,e,i,s){for(let r=0;r<i;r++)for(let a=0;a<e;a++)Uu(n,t+a,r,s(a,r))}const Nu=n=>()=>n;function Va(n,t,e){return(i,s)=>(Math.floor(i/e)+Math.floor(s/e))%2===0?n:t}function $s(n,t,e){return(i,s)=>n[Math.floor((e?s:i)/t)%n.length]}function Hl(n,t,e,i,s){const r=(t-1)/2,a=(e-1)/2;return(o,l)=>{const c=Math.abs(o-r)/Math.max(1,t/2),u=Math.abs(l-a)/Math.max(1,e/2),d=s?(c+u)/2:Math.max(c,u);return n[Math.floor(Math.min(.999,d)*i)%n.length]}}function tr(n,t,e){const i=xs(e,2+se(2)),s=i[1]??e[(e.indexOf(i[0])+1)%e.length];switch(We(["checker","stripesV","stripesH","diamond","rect","halves","halves"])){case"checker":return Va(i[0],s,1+se(3));case"stripesV":return $s(i,1+se(2),!1);case"stripesH":return $s(i,1+se(2),!0);case"diamond":return Hl(i,n,t,4+se(4),!0);case"rect":return Hl(i,n,t,4+se(4),!1);default:{if(Math.random()<.6){const a=1+se(Math.max(1,t-1));return(o,l)=>l<a?i[0]:s}const r=1+se(Math.max(1,n-1));return a=>a<r?i[0]:s}}}function lx(n,t,e,i,s,r){const a=(i-1)/2,o=(s-1)/2;return(l,c)=>{const u=Math.abs(l-a)/Math.max(1,i/2)+Math.abs(c-o)/Math.max(1,s/2);return u>1?t(l,c):r&&u>=.74?e:n(l,c)}}function Fu(n,t,e){const i=(n-1)/2,s=(t-1)/2,r=Math.max(1,Math.floor((n-1)/2)),a=Math.max(1,Math.floor((t-1)/2));let o=1+se(r),l=1+se(a);Math.random()<.5&&(l=Math.min(o,a)),o=Math.min(o,r),l=Math.min(l,a);const c=tr(n,t,xs(e,2+se(2))),u=Math.random()<.5?Nu(We(e)):tr(n,t,xs(e,2)),d=We(e),h=We(e),f=We(["full","hollow","center"]);return(g,y)=>{const m=Math.abs(g-i),p=Math.abs(y-s);if(m>o||p>l)return c(g,y);const M=m>o-1||p>l-1;return f==="hollow"?M?d:c(g,y):f==="center"?M?d:m<=o*.4&&p<=l*.4?h:u(g,y):u(g,y)}}function cx(n,t,e,i){const s=t*Se,r=e*Se,a=i*Se,o=3+se(3),l=se(Da.length),c=Array.from({length:o},(h,f)=>Da[(l+f)%Da.length]);Math.random()<.5&&c.reverse();const d=Math.random()<.6?n.createLinearGradient(0,0,0,a):n.createLinearGradient(s,0,s+r,0);c.forEach((h,f)=>d.addColorStop(f/(c.length-1),lr(h))),n.fillStyle=d,n.fillRect(s,0,r,a)}function hx(n,t,e,i,s){bn(n,t,e,i,tr(e,i,xs(s,2+se(2))));const r=t*Se,o=Math.max(3,Math.min(e,i)-se(2))*Se/2,l=r+e/2*Se,c=i/2*Se;n.beginPath(),n.arc(l,c,o,0,Math.PI*2),n.fillStyle=lr(We(s)),n.fill()}function ux(n,t,e,i,s,r){if(r&&Math.random()<.18){cx(n,t,e,i);return}switch(We(["rhombus","rect","pattern","pattern"])){case"rhombus":{const a=Math.random()<.5,o=Math.random()<.5?Nu(We(s)):tr(e,i,xs(s,2+se(2))),l=tr(e,i,xs(s,2+se(2)));bn(n,t,e,i,lx(o,l,We(s),e,i,a));break}case"rect":bn(n,t,e,i,Fu(e,i,s));break;default:bn(n,t,e,i,tr(e,i,s))}}function dx(n,t,e,i,s,r){const a=ax(i);n.fillStyle=lr(ox(i)),n.fillRect(0,0,t*Se,e*Se);const o=3+se(3),l=Iu(o,t);let c=-1;if(s){c=0;for(let d=1;d<o;d++)l[d]>l[c]&&(c=d)}let u=0;for(let d=0;d<o;d++){const h=l[d];n.save(),n.beginPath(),n.rect(u*Se,0,h*Se,e*Se),n.clip(),d===c?hx(n,u,h,e,a):ux(n,u,h,e,a,!i),n.restore(),u+=h}}const Xo=["0001111000011110000","0111111100111111100","0111111111111111100","1111111111111111110","1111111111111111110","1111111111111111110","1111111111111111110","0111111111111111100","0011111111111111000","0001111111111110000","0000111111111100000","0000011111111000000","0000001111110000000","0000000111100000000","0000000011000000000"];function fx(n,t){var o,l,c,u;const e=t?16777215:We(Du),i=t?1118481:We(vc.filter(d=>d!==e)),s=Array.from({length:kn},()=>Array(kn).fill(!1)),r=1,a=2;for(let d=0;d<Xo.length;d++)for(let h=0;h<Xo[d].length;h++)if(Xo[d][h]==="1"){const f=a+d,g=r+h;f<kn&&g<kn&&(s[f][g]=!0)}for(let d=0;d<kn;d++)for(let h=0;h<kn;h++){let f=e;s[d][h]?f=i:((o=s[d])!=null&&o[h+1]||(l=s[d])!=null&&l[h-1]||(c=s[d+1])!=null&&c[h]||(u=s[d-1])!=null&&u[h])&&(f=cr),Uu(n,h,d,f)}}const px=(()=>{let n=null;return()=>{if(n)return n;n=document.createElement("canvas");const t=64;n.width=n.height=t;const e=n.getContext("2d"),i=e.createImageData(t,t);for(let s=0;s<i.data.length;s+=4){const r=118+Math.random()*20;i.data[s]=i.data[s+1]=i.data[s+2]=r,i.data[s+3]=255}return e.putImageData(i,0,0),n}})();function mx(n){const t=n.getContext("2d");t.save(),t.globalAlpha=.14,t.globalCompositeOperation="overlay",t.fillStyle=t.createPattern(px(),"repeat"),t.fillRect(0,0,n.width,n.height),t.restore()}function Ou(n){mx(n);const t=new kr(n);return t.colorSpace=Bn,t.generateMipmaps=!0,t.minFilter=qi,t.magFilter=ln,t.anisotropy=8,t}function _x(n,t,e){const i=document.createElement("canvas");i.width=i.height=kn*Se;const s=i.getContext("2d");return n?fx(s,t):dx(s,kn,kn,t,e),Ou(i)}const gx=[16777215,15657179,15788761],Gr=(n,t)=>xc(n,$i,t),Bu=(n,t)=>xc(n,1450556,t);function xx(n,t){const e=[];for(let i=0;i<t;i++)e.push(xc(Bu(n,.3),Gr(n,.5),t===1?.5:i/(t-1)));return e}function vx(n,t,e,i,s,r){if(s){const u=$i,d=cr;switch(We(["checker","stripesV","stripesH","halves"])){case"checker":bn(n,t,e,i,Va(u,d,1+se(3)));break;case"stripesV":bn(n,t,e,i,$s([u,d],1+se(2),!1));break;case"stripesH":bn(n,t,e,i,$s([u,d],1+se(2),!0));break;default:{const h=1+se(Math.max(1,i-1));bn(n,t,e,i,(f,g)=>g<h?u:d)}}return}const a=Math.random()<.6?We(r):Gr(We(r),.12+Math.random()*.12),o=We(gx),l=Math.random()<.5?Gr(a,.45):Bu(a,.22),c=Math.random()<.4?o:l;switch(We(["checker","stripesV","stripesH","rings","halves","rect"])){case"checker":bn(n,t,e,i,Va(a,c,1+se(3)));break;case"stripesV":bn(n,t,e,i,$s([a,l,o],1+se(2),!1));break;case"stripesH":bn(n,t,e,i,$s([a,l,o],1+se(2),!0));break;case"rings":{const u=xx(a,3+se(2));bn(n,t,e,i,Hl(u,e,i,u.length,Math.random()<.5));break}case"halves":{const u=1+se(Math.max(1,i-1));bn(n,t,e,i,(d,h)=>h<u?a:c);break}default:bn(n,t,e,i,Fu(e,i,[a,l,o]))}}function Mx(n,t,e,i,s,r){const a=We(r),o=s?$i:Gr(a,.55),l=s?$i:Gr(a,.68);bn(n,t,e,i,Va(o,l,2));const c=t*Se,d=Math.max(3,Math.min(e,i)-se(2))*Se/2,h=c+e/2*Se,f=i/2*Se;n.beginPath(),n.arc(h,f,d,0,Math.PI*2),n.fillStyle=lr(s?cr:We(r)),n.fill()}function Sx(n,t,e,i,s){n.fillStyle=lr(i?16777215:15920866),n.fillRect(0,0,t*Se,e*Se);const r=xs(ps,2+se(2)),a=3+se(3),o=Iu(a,t);let l=-1;if(s){l=0;for(let u=1;u<a;u++)o[u]>o[l]&&(l=u)}let c=0;for(let u=0;u<a;u++){const d=o[u];n.save(),n.beginPath(),n.rect(c*Se,0,d*Se,e*Se),n.clip(),u===l?Mx(n,c,d,e,i,r):vx(n,c,d,e,i,r),n.restore(),c+=d}}function Ea(n,t,e,i){const s=document.createElement("canvas");s.width=n*Se,s.height=t*Se;const r=s.getContext("2d");Sx(r,n,t,e,i);const a=r.getImageData(0,Math.floor(s.height/2),s.width,1).data,o=[];for(let l=0;l<n;l++){const u=Math.min(s.width-1,Math.floor((l+.5)*Se))*4;o.push(a[u]<<16|a[u+1]<<8|a[u+2])}return{texture:Ou(s),colors:o}}function yx(){const n=new fs,t=We([0,1]),e=t===0?1:0,i=We([0,1,2,3]),s=[];for(let u=0;u<4;u++)s[u]=new Ga({map:_x(u===t,u===i,u===e)});const r=new Ga({color:Pu}),a=[];for(let u=-10;u<10;u++)for(let d=-10;d<10;d++){const h=new Ms,f=h.attributes.uv,g=u+10,y=d+10,m=y/kn,p=(y+1)/kn,M=g/kn,A=(g+1)/kn;f.setXY(0,p,A),f.setXY(1,m,A),f.setXY(2,p,M),f.setXY(3,m,M),f.setXY(4,m,A),f.setXY(5,p,A),f.setXY(6,m,M),f.setXY(7,p,M),f.setXY(8,M,m),f.setXY(9,A,m),f.setXY(10,M,p),f.setXY(11,A,p),f.setXY(12,M,p),f.setXY(13,A,p),f.setXY(14,M,m),f.setXY(15,A,m),f.needsUpdate=!0;const E=new Fe(h,[s[0],s[1],s[2],s[3],r,r]);E.position.set(u,u+1-6,d+.5),a.push({mesh:E,ty:u+1,delay:Math.hypot(u+.5,d+.5)*.045+Math.random()*.12,phase:(u+d)*.35}),n.add(E)}let o,l=null,c=0;return{name:"Agamograph",group:n,camera:[-47,47,0],update:(u,d)=>{const h=Math.min(.05,Math.max(0,u-c));c=u,d&&(n.rotation.y+=.018*h),l===null&&(l=u);const f=u-l;for(const g of a){const y=Math.min(1,Math.max(0,(f-g.delay)/.9)),m=1-Math.pow(1-y,3),p=.04*Math.sin(u*.6+g.phase)*y;g.mesh.position.y=g.ty-6*(1-m)+p}},dispose:()=>o==null?void 0:o.remove()}}class Ja extends Fe{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;const i=this,s=e.color!==void 0?new Mt(e.color):new Mt(8355711),r=e.textureWidth||512,a=e.textureHeight||512,o=e.clipBias||0,l=e.shader||Ja.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new Ai,d=new L,h=new L,f=new L,g=new we,y=new L(0,0,-1),m=new Pe,p=new L,M=new L,A=new Pe,E=new we,R=new ti(r,a,{samples:c,type:pi}),b=new wn({name:l.name!==void 0?l.name:"unspecified",uniforms:gu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});b.uniforms.tDiffuse.value=R.texture,b.uniforms.color.value=s,b.uniforms.textureMatrix.value=E,this.material=b,this.onBeforeRender=function(w,x,T){const D=this._getReflectionCamera(T);if(h.setFromMatrixPosition(i.matrixWorld),f.setFromMatrixPosition(T.matrixWorld),g.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(g),p.subVectors(h,f),p.dot(d)>0===!0&&this.forceUpdate===!1)return;p.reflect(d).negate(),p.add(h),g.extractRotation(T.matrixWorld),y.set(0,0,-1),y.applyMatrix4(g),y.add(f),M.subVectors(h,y),M.reflect(d).negate(),M.add(h),D.position.copy(p),D.up.set(0,1,0),D.up.applyMatrix4(g),D.up.reflect(d),D.lookAt(M),D.far=T.far,D.updateMatrixWorld(),D.projectionMatrix.copy(T.projectionMatrix),E.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),E.multiply(D.projectionMatrix),E.multiply(D.matrixWorldInverse),E.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,h),u.applyMatrix4(D.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const I=D.projectionMatrix;D.isOrthographicCamera?(A.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],A.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],A.z=-T.far,A.w=1):(A.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],A.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],A.z=-1,A.w=(1+I.elements[10])/I.elements[14]),m.multiplyScalar(2/m.dot(A)),I.elements[2]=m.x,I.elements[6]=m.y,D.isOrthographicCamera?(I.elements[10]=m.z-o,I.elements[14]=m.w-1):(I.elements[10]=m.z+1-o,I.elements[14]=m.w),i.visible=!1;const V=w.getRenderTarget(),q=w.xr.enabled,F=w.shadowMap.autoUpdate;w.xr.enabled=!1,w.shadowMap.autoUpdate=!1,w.setRenderTarget(R),w.state.buffers.depth.setMask(!0),w.autoClear===!1&&w.clear(),w.render(x,D),w.xr.enabled=q,w.shadowMap.autoUpdate=F,w.setRenderTarget(V);const H=T.viewport;H!==void 0&&w.state.viewport(H),i.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return R},this.dispose=function(){R.dispose(),i.material.dispose()},this._getReflectionCamera=function(w){let x=this._reflectionCameras.get(w);return x===void 0&&(x=w.clone(),this._reflectionCameras.set(w,x)),x}}}Ja.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};const Ex=typeof navigator<"u"&&(/iP(hone|ad|od)/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);function bx(){let n,t,e,i,s=0;const r=[0,2,4,7,9],a=261.63,o=u=>a*Math.pow(2,u/12);function l(u,d,h,f,g){if(!n)return;const y=n.createOscillator();y.type=g,y.frequency.value=d;const m=n.createGain();m.gain.setValueAtTime(1e-4,u),m.gain.exponentialRampToValueAtTime(f,u+.03),m.gain.exponentialRampToValueAtTime(1e-4,u+h),y.connect(m),m.connect(t),y.start(u),y.stop(u+h+.05)}function c(){if(!n)return;const u=n.currentTime+.05,d=r[Math.floor(Math.random()*r.length)]+(Math.random()<.4?12:0);l(u,o(d),.6,.14,"triangle"),Math.random()<.5&&l(u+.12,o(d+12),.5,.06,"sine"),s%4===0&&l(u,o(r[0]-12),1.4,.1,"sine"),s++}return{start(){if(!n){n=new(window.AudioContext||window.webkitAudioContext),t=n.createGain(),t.gain.value=.2;const d=n.createDelay();d.delayTime.value=.28;const h=n.createGain();h.gain.value=.3;let f=n.destination;if(Ex){const g=n.createMediaStreamDestination();e=document.createElement("audio"),e.playsInline=!0,e.srcObject=g.stream,f=g}t.connect(f),t.connect(d),d.connect(h),h.connect(d),d.connect(f)}n.resume(),e==null||e.play().catch(()=>{});const u=n.createBufferSource();u.buffer=n.createBuffer(1,1,22050),u.connect(n.destination),u.start(0),c(),i===void 0&&(i=window.setInterval(c,360))},stop(){i!==void 0&&(clearInterval(i),i=void 0),e==null||e.pause(),n==null||n.suspend()}}}const Tx=`
  varying vec3 vWorldPos;
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
  }
`,Ax=`
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
`;function wx(n,t){n.magFilter=n.minFilter=ln,n.wrapS=n.wrapT=ci;const e=new wn({defines:{ITERATIONS:"20",OCTIVES:"3"},uniforms:{fireTex:{value:n},color:{value:new Mt(15658734)},time:{value:0},seed:{value:Math.random()*19.19},invModelMatrix:{value:new we},scale:{value:new L(1,1,1)},noiseScale:{value:new Pe(1,2,1,.3)},magnitude:{value:1.3},lacunarity:{value:2},gain:{value:.5},uIntensity:{value:1}},vertexShader:Tx,fragmentShader:Ax,transparent:!0,depthWrite:!1,depthTest:!0}),i=new Fe(new Ms(1,1,1),e);return i.updateFire=(s,r)=>{i.updateMatrixWorld(),e.uniforms.invModelMatrix.value.copy(i.matrixWorld).invert(),e.uniforms.time.value=s,e.uniforms.scale.value=i.scale,e.uniforms.uIntensity.value=r},i}function Rx(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.4,"rgba(255,255,255,0.55)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64),new kr(t)}function Cx(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),i=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.55,"rgba(255,255,255,0.95)"),i.addColorStop(.78,"rgba(255,255,255,0.3)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64),new kr(t)}function Yo(n){return new wn({uniforms:{uMap:{value:n},uOpacity:{value:1},uScale:{value:800},uTint:{value:new Mt(1,1,1)}},transparent:!0,depthWrite:!1,vertexShader:`
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
    `})}const Mc=()=>({crisp:!0});function Px(n=Mc(),t=!1){const e=new fs,i=[7,12,16,10.5,6.5],s=[3,3.6,6.5,4,3],r=i.length,a=.3,o=s.reduce((X,Ht)=>X+Ht,0)+a*(r-1),l=.9,c=2*l/Math.sin(Math.PI/3),u=t?!1:Math.random()<.25,d=13422288,h=Math.max(...i),f=n.crisp,g=[];let y=-o/2;for(let X=0;X<r;X++)g[X]=y+s[X]/2,y+=s[X]+a;const m=-o/2-.5,p=new Tf(16777215,13617339,1.9),M=new hh(16773856,4.5);M.position.set(60,90,40);const A=new hh(14674175,.3);A.position.set(-50,40,-60),e.add(p,M,A);const E=27,R=620,b=32*Math.PI/180,x=(X=>{const wt=document.createElement("canvas");wt.width=wt.height=128;const Vt=wt.getContext("2d"),Xt=Vt.createImageData(128,128),Ue=Array.from({length:26},()=>{const ge=Math.random()*Math.PI*2,ke=Math.sqrt(Math.random()),Ge=ke*Math.cos(ge),He=ke*Math.sin(ge);return{x:Ge,y:He,z:Math.sqrt(Math.max(0,1-Ge*Ge-He*He)),r:.06+Math.random()*.17,d:.05+Math.random()*.09}});for(let ge=0;ge<128;ge++)for(let ke=0;ke<128;ke++){const Ge=ke/127*2-1,He=1-ge/127*2,Ke=Ge*Ge+He*He,Ie=(ge*128+ke)*4;if(Ke>=1){Xt.data[Ie+3]=0;continue}const Xe=Math.sqrt(1-Ke),vn=Math.sqrt(Ke),Mn=.55+.45*Xe,gi=Math.min(1,(1-vn)*22);let Ve=1;for(const Ye of Ue){const Sn=Math.hypot(Ge-Ye.x,He-Ye.y,Xe-Ye.z);Sn<Ye.r&&(Ve-=Ye.d*(1-Sn/Ye.r))}Xt.data[Ie]=Math.round(255*Mn*Math.pow(Ve,.4)),Xt.data[Ie+1]=Math.round((252+3*Xe)*Mn*Math.pow(Ve,.8)),Xt.data[Ie+2]=Math.round((210+45*Xe)*Mn*Math.pow(Ve,1.6)),Xt.data[Ie+3]=Math.round(255*gi)}Vt.putImageData(Xt,0,0);const be=Vt.createRadialGradient(128/2,128/2,128*.46,128/2,128/2,128/2);be.addColorStop(0,"rgba(255,235,160,0.3)"),be.addColorStop(1,"rgba(255,235,160,0)"),Vt.fillStyle=be,Vt.fillRect(0,0,128,128);const Le=new Ao(new Ca({map:new kr(wt),transparent:!0,depthWrite:!1}));return Le.scale.set(X,X,1),Le})(50),T=X=>{const wt=document.createElement("canvas");wt.width=wt.height=128;const Vt=wt.getContext("2d"),Xt=Vt.createImageData(128,128),Ue=He=>{const Ke=Math.random()*Math.PI*2,Ie=Math.sqrt(Math.random())*He,Xe=Ie*Math.cos(Ke),vn=Ie*Math.sin(Ke);return{x:Xe,y:vn,z:Math.sqrt(Math.max(0,1-Xe*Xe-vn*vn))}},be=Array.from({length:10},()=>({...Ue(.85),r:.16+Math.random()*.26,d:.12+Math.random()*.18})),Le=Array.from({length:9},()=>({...Ue(.9),r:.035+Math.random()*.07})),ge=Math.sin(X),ke=-Math.cos(X);for(let He=0;He<128;He++)for(let Ke=0;Ke<128;Ke++){const Ie=Ke/127*2-1,Xe=1-He/127*2,vn=Ie*Ie+Xe*Xe;if(vn>1)continue;const Mn=Math.sqrt(1-vn),gi=Ie*ge+Mn*ke,Ve=Math.min(1,Math.max(0,.5+gi/.16));let Ye=1;for(const oe of be){const qe=Math.hypot(Ie-oe.x,Xe-oe.y,Mn-oe.z);qe<oe.r&&(Ye-=oe.d*(1-qe/oe.r))}for(const oe of Le){const qe=Math.hypot(Ie-oe.x,Xe-oe.y,Mn-oe.z);if(qe<oe.r){const un=qe/oe.r;Ye+=un>.66?.22*(un-.66)/.34:-.1*(1-un/.66)}}const Sn=Ve*Math.max(0,Ye)*(.55+.45*Mn),qn=(He*128+Ke)*4;Xt.data[qn]=Math.min(255,235*Sn+26),Xt.data[qn+1]=Math.min(255,238*Sn+30),Xt.data[qn+2]=Math.min(255,246*Sn+42),Xt.data[qn+3]=Math.round(255*Math.min(1,(1-Math.sqrt(vn))*14))}Vt.putImageData(Xt,0,0);const Ge=new Ao(new Ca({map:new kr(wt),transparent:!0,depthWrite:!1}));return Ge.scale.set(38,38,1),Ge},D=Math.PI,C=1,I=T(D);e.add(x,I);const V=Math.random(),q=4+Math.random()*1.2,F=1.6+Math.random()*.9,H=new Mt(12113128),k=new Mt(5396582),Q=new Mt().lerpColors(new Mt(14659722),new Mt(16736304),V),et=new Mt(16773856),ut=new Mt(16752478),yt=new Mt(16777215),Rt=new Mt(9674944),te=new Mt(11577496),ue=new Mt(4869981),Bt=new Mt(14674175),K=new Mt(12175598),mt=new Mt().lerpColors(new Mt(16764826),new Mt(16748624),V),ot=new Mt(16774088),Dt=new Mt(16754788),Ut=new Mt;let Ct=10,Te=0,qt=!1;const de=new Mt(3043e3),Ee=new Mt(2436157),jt=new Mt().lerpColors(new Mt(7895208),new Mt(6301066),V),Be=new Mt,le={uZenith:{value:new Mt(3043e3)},uHorizon:{value:new Mt(12113128)},uNight:{value:0},uTime:{value:0},uSunDir:{value:new L(0,1,0)},uGlow:{value:0}},gn=new wn({uniforms:le,side:An,depthWrite:!1,vertexShader:`
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
    `}),U=new Fe(new Ha(R*2.6,48,32),gn);U.renderOrder=-1,U.frustumCulled=!1,e.add(U);const ze=320,Zt=new Vs({color:9078144,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,dithering:!0}),me=new Fe(new Ha(ze,160,112),Zt);me.position.y=m-ze-.6,e.add(me);const ct=new Vs({color:7301726,transparent:!0,opacity:.55,depthWrite:!1,side:Tn,dithering:!0}),Ae=new pc(512),S=new Mu(.5,2e3,Ae);S.position.y=m+.5,e.add(S);const _=[],O={uTime:{value:0},envMap:{value:Ae.texture}},Z=new wn({uniforms:O,side:Tn,vertexShader:`
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
    `}),J=g[r-1]-s[r-1]/2,st=J-m,lt=new Fe(new Ks(3.5,3.5,st,32),ct);lt.position.y=(J+m)/2,e.add(lt);const W=new cc(h+l+6,96);let j;if(f){const X={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uImpactR:{value:new L(.5,.55,.6)},uImpactA:{value:new L(0,0,0)},uNight:{value:0},uSky:{value:new Mt(13422288)}},vertexShader:`
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
      `};j=new Ja(W,{textureWidth:1024,textureHeight:1024,clipBias:.003,shader:X})}else j=new Fe(W,Z);j.rotation.x=-Math.PI/2,j.position.y=m,e.add(j),_.push(j);{const X=h+l+6,Ht=1.7,wt=m+.6,Vt=m-2.6,Xt=new Vs({color:10130570,side:Tn,dithering:!0}),Ue=new Fe(new Ks(X+Ht,X+Ht,wt-Vt,96,1,!0),Xt);Ue.position.y=(wt+Vt)/2;const be=new Fe(new Ks(X,X,wt-(m-1),96,1,!0),Xt);be.position.y=(wt+m-1)/2;const Le=new Fe(new hc(X,X+Ht,96),Xt);Le.rotation.x=-Math.PI/2,Le.position.y=wt,e.add(Ue,be,Le)}const ht=[],xt=[];for(let X=0;X<r;X++){const Ht=new fs,wt=i[X],Vt=s[X],Xt=g[X],Ue=u,be=wt+l,Le=wt-l,ge=Math.max(8,Math.round(Math.PI/Math.asin(Math.min(.99,c/(2*Le))))),ke=2*ge,Ge=Math.max(5,Math.round(Vt*1.4)),He=Ea(ge,Ge,Ue,Math.random()<.6),Ke=Ea(ge,Ge,Ue,Math.random()<.6),Ie=new Vs({map:He.texture,side:Tn}),Xe=new Vs({map:Ke.texture,side:Tn}),vn=oe=>{const qe=oe*Math.PI/ge,un=oe%2===0?be:Le;return new L(un*Math.cos(qe),Xt,un*Math.sin(qe))},Mn=new Fe(new Ks(Le-.05,Le-.05,Vt-.1,Math.max(32,ge)),ct);Mn.position.set(0,Xt,0),Ht.add(Mn);for(let oe=0;oe<ke;oe++){const qe=vn(oe),un=vn(oe+1),jn=un.x-qe.x,Pn=un.z-qe.z,xi=Math.hypot(jn,Pn),ii=Math.floor(oe/2),Ni=ii/ge,vi=(ii+1)/ge,Mi=new Vr(xi,Vt),si=Mi.attributes.uv;si.setXY(0,Ni,1),si.setXY(1,vi,1),si.setXY(2,Ni,0),si.setXY(3,vi,0),si.needsUpdate=!0;const Fi=new Fe(Mi,oe%2===0?Ie:Xe);Fi.position.set((qe.x+un.x)/2,Xt,(qe.z+un.z)/2),Fi.rotation.y=Math.atan2(-Pn,jn),Ht.add(Fi)}const gi=new Vs({vertexColors:!0,side:Tn}),Ve=Math.max(.3,Le-.1),Ye=oe=>{const qe=[],un=[];for(let Pn=0;Pn<ke;Pn++){const xi=Pn*Math.PI/ge,ii=(Pn+1)*Math.PI/ge,Ni=Pn%2===0?be:Le,vi=(Pn+1)%2===0?be:Le,Mi=Ni*Math.cos(xi),si=Ni*Math.sin(xi),Fi=vi*Math.cos(ii),io=vi*Math.sin(ii),xr=Ve*Math.cos(xi),tt=Ve*Math.sin(xi),kt=Ve*Math.cos(ii),Ot=Ve*Math.sin(ii);qe.push(Mi,oe,si,Fi,oe,io,kt,oe,Ot),qe.push(Mi,oe,si,kt,oe,Ot,xr,oe,tt);const Wt=(Pn%2===0?He.colors:Ke.colors)[Math.floor(Pn/2)]??8947848,pn=(Wt>>16&255)/255,Ce=(Wt>>8&255)/255,ws=(Wt&255)/255;for(let Nn=0;Nn<6;Nn++)un.push(pn,Ce,ws)}const jn=new Qe;return jn.setAttribute("position",new Oe(qe,3)),jn.setAttribute("color",new Oe(un,3)),jn.computeVertexNormals(),jn},Sn=Ye(Xt+Vt/2),qn=Ye(Xt-Vt/2);Ht.add(new Fe(Sn,gi)),Ht.add(new Fe(qn,gi)),e.add(Ht),ht.push(Ht),xt.push({P:ge,rows:Ge,N:ke,matA:Ie,matB:Xe,capGeos:[Sn,qn]})}const at=()=>(Math.random()<.5?1:-1)*(.036+Math.random()*.072),nt=ht.map(at),Nt=nt.slice(),zt=X=>{const Ht=document.createElement("canvas");return Ht.width=X.width,Ht.height=X.height,Ht.getContext("2d").drawImage(X,0,0),Ht},ne=(X,Ht,wt)=>{const Vt=[];for(let Xt=0;Xt<wt;Xt++){const Ue=(Xt%2===0?X:Ht)[Math.floor(Xt/2)]??8947848,be=(Ue>>16&255)/255,Le=(Ue>>8&255)/255,ge=(Ue&255)/255;for(let ke=0;ke<6;ke++)Vt.push(be,Le,ge)}return new Float32Array(Vt)};let P=null,it=!1;const Y=22,_t=[2,3,4],rt=[];_t.forEach((X,Ht)=>{const wt=i[X]+l,Vt=g[X]+s[X]/2,Xt=Math.max(12,Math.round(2*Math.PI*wt/3)),Ue=26;for(let be=0;be<Xt;be++){const Le=be/Xt*Math.PI*2,ge=Math.cos(Le),ke=Math.sin(Le),Ge=1.5+Math.random()*.3,He=7+Math.random()*2,Ke=4+Math.random()*1.5;for(let Ie=0;Ie<Ue;Ie++)rt.push({ox:wt*ge,oy:Vt,oz:wt*ke,cx:ge,cz:ke,ph:Ie/Ue*Ge,life:Ge,up:He,out:Ke,grp:Ht})}});const $=g[r-1]+s[r-1]/2,bt=10;for(let X=0;X<bt;X++){const Ht=X/bt*Math.PI*2+Math.random()*.3,wt=2.8+Math.random()*.8,Vt=20+Math.random()*5,Xt=4+Math.random()*2.5,Ue=84;for(let be=0;be<Ue;be++)rt.push({ox:0,oy:$,oz:0,cx:Math.cos(Ht),cz:Math.sin(Ht),ph:be/Ue*wt,life:wt,up:Vt,out:Xt,grp:3})}const Lt=rt.length,De=Rx(),re=Cx(),cn=new Float32Array(Lt*3),In=new Float32Array(Lt),Ss=new Float32Array(Lt),ys=new Float32Array(Lt*3),hr=new Float32Array(Lt),es=.35;for(let X=0;X<Lt;X++){cn[X*3+1]=-9999,hr[X]=(Math.random()-.5)*.5,In[X]=.3+Math.random()*.22,Ss[X]=.7+Math.random()*.3;const Ht=Math.random()*.3;ys[X*3]=.25+Ht*.5,ys[X*3+1]=.6+Ht*.35,ys[X*3+2]=.84+Ht*.16}const Rn=new Qe;Rn.setAttribute("position",new Ne(cn,3)),Rn.setAttribute("aSize",new Ne(In,1)),Rn.setAttribute("aAlpha",new Ne(Ss,1)),Rn.setAttribute("aColor",new Ne(ys,3));const Li=Yo(re),Es=new Lo(Rn,Li);e.add(Es);const hn=420,ns=new Float32Array(hn),ur=new Float32Array(hn),is=new Float32Array(hn),dr=new Float32Array(hn),fr=new Float32Array(hn),bs=new Float32Array(hn).fill(9),Ts=new Float32Array(hn).fill(1),Ii=new Float32Array(hn*3),Wr=new Float32Array(hn),pr=new Float32Array(hn),As=new Float32Array(hn*3);for(let X=0;X<hn;X++)Ii[X*3+1]=-9999,As[X*3]=.62,As[X*3+1]=.82,As[X*3+2]=.95;let mr=0;const v=(X,Ht)=>{const wt=mr;mr=(mr+1)%hn,ns[wt]=X,ur[wt]=Ht;const Vt=Math.random()*Math.PI*2,Xt=.4+Math.random()*1.1;is[wt]=Math.cos(Vt)*Xt,fr[wt]=Math.sin(Vt)*Xt,dr[wt]=2+Math.random()*3,bs[wt]=0,Ts[wt]=.3+Math.random()*.3,Wr[wt]=.22+Math.random()*.2},N=new Qe;N.setAttribute("position",new Ne(Ii,3)),N.setAttribute("aSize",new Ne(Wr,1)),N.setAttribute("aAlpha",new Ne(pr,1)),N.setAttribute("aColor",new Ne(As,3));const G=Yo(re),z=new Lo(N,G);e.add(z);const B=new Uint8Array(Lt),dt=(X,Ht)=>{const wt=Math.sin(X*.22+Ht);return wt>.55?1+(wt-.55)/.45*2.6:1},vt=(X,Ht)=>{const Vt=((X+Ht*2.3)%7+7)%7/7;return(.2+.8*(Vt<.75?Vt/.75:1-(Vt-.75)/.25))*dt(X,Ht*1.7)},ft=X=>{const wt=(X%13+13)%13/13;let Vt;if(wt<.5)Vt=.2+.8*(wt/.5);else if(wt<.65)Vt=1-(wt-.5)/.15;else return 0;return Vt*Math.min(1.4,dt(X,4))},St=$+.2,Et=3.2,Ft=19,Pt=wx(new bf().load("fire-lut.png"));Pt.scale.set(Et,Ft,Et),Pt.position.set(0,St+Ft/2,0);const At=Pt.material;At.uniforms.magnitude.value=2.1,At.uniforms.lacunarity.value=2.6,At.uniforms.noiseScale.value.set(1,2,1,.55),e.add(Pt);const ae=X=>.55+.3*Math.sin(X*1.7)+.15*Math.sin(X*5.3),Jt=26,Re=new Float32Array(Jt),fe=new Float32Array(Jt),Ze=new Float32Array(Jt),gt=new Float32Array(Jt),sn=new Float32Array(Jt),Qt=new Float32Array(Jt),xn=new Float32Array(Jt),Un=new Float32Array(Jt),Cn=new Float32Array(Jt*3),mi=new Float32Array(Jt),pe=new Float32Array(Jt),_e=new Float32Array(Jt*3);for(let X=0;X<Jt;X++)Re[X]=Math.random()*Math.PI*2,fe[X]=.2+Math.random()*.9,Ze[X]=St+1+Math.random()*4,gt[X]=3.5+Math.random()*3,sn[X]=1.1+Math.random()*1.3,Qt[X]=Math.random()*sn[X],xn[X]=(Math.random()-.5)*3,Un[X]=.2+Math.random()*.2,Cn[X*3+1]=-9999;const rn=new Qe;rn.setAttribute("position",new Ne(Cn,3)),rn.setAttribute("aSize",new Ne(mi,1)),rn.setAttribute("aAlpha",new Ne(pe,1)),rn.setAttribute("aColor",new Ne(_e,3));const ce=Yo(re);ce.blending=Ua;const Hn=new Lo(rn,ce);e.add(Hn);const ei=new wf(16747068,0,60,2);ei.position.set(0,St+4,0),e.add(ei);const _i=new Ao(new Ca({map:De,color:16749888,transparent:!0,opacity:0,blending:Ua,depthWrite:!1}));_i.scale.set(11,14,1),_i.position.set(0,St+6,0),e.add(_i);let Ac=!0,wc=!0,Ui=1,ni=1,Rc=0,_r=0,to=0,gr=0,eo=0,Cc=!1;const no=bx();return{name:"Fountain",group:e,background:d,camera:[113,20,113],status:()=>{const X=Math.floor(Ct),Ht=Math.floor(Ct%1*60);return`${String(X).padStart(2,"0")}:${String(Ht).padStart(2,"0")}`},dayCount:()=>Te,recolor:()=>{it=!0},toggles:[{label:"fire",initial:!0,set:X=>{Ac=X}},{label:"water",initial:!0,set:X=>{wc=X}},{label:"sound",initial:!1,set:X=>X?no.start():no.stop()}],dispose:()=>{var X;no.stop(),(X=Pt.material.uniforms.fireTex.value)==null||X.dispose(),f&&j.dispose(),Ae.dispose(),De.dispose(),re.dispose()},update:(X,Ht,wt)=>{const Vt=Math.min(.05,Math.max(0,X-Rc));if(Rc=X,Ht){(wt==null?void 0:wt.spinGroup)!==!1&&(e.rotation.y+=.006*Vt);for(let tt=0;tt<ht.length;tt++){const kt=.084*Vt;nt[tt]+=Math.max(-kt,Math.min(kt,Nt[tt]-nt[tt])),ht[tt].rotation.y+=nt[tt]*Vt}}if(wt){const tt=wt.renderer.domElement.height;Li.uniforms.uScale.value=tt,G.uniforms.uScale.value=tt,ce.uniforms.uScale.value=tt}if(it){it=!1;const tt=Math.random()<.25,kt=[],Ot=[];for(const Wt of xt){const pn=Ea(Wt.P,Wt.rows,tt,Math.random()<.6),Ce=Ea(Wt.P,Wt.rows,tt,Math.random()<.6);for(const[Nn,Oi]of[[Wt.matA,pn],[Wt.matB,Ce]]){const ss=Nn.map.image;kt.push({mat:Nn,from:zt(ss),to:Oi.texture.image,live:ss})}const ws=ne(pn.colors,Ce.colors,Wt.N);for(const Nn of Wt.capGeos){const Oi=Nn.getAttribute("color");Ot.push({geo:Nn,from:Float32Array.from(Oi.array),to:ws})}}P={t0:X,dur:6,items:kt,caps:Ot};for(let Wt=0;Wt<Nt.length;Wt++)Nt[Wt]=at()}if(P){const tt=Math.min(1,(X-P.t0)/P.dur),kt=tt*tt*(3-2*tt);for(const Ot of P.items){const Wt=Ot.live.getContext("2d");Wt.globalAlpha=1,Wt.drawImage(Ot.from,0,0),Wt.globalAlpha=kt,Wt.drawImage(Ot.to,0,0),Wt.globalAlpha=1,Ot.mat.map.needsUpdate=!0}for(const Ot of P.caps){const Wt=Ot.geo.getAttribute("color"),pn=Wt.array;for(let Ce=0;Ce<pn.length;Ce++)pn[Ce]=Ot.from[Ce]+(Ot.to[Ce]-Ot.from[Ce])*kt;Wt.needsUpdate=!0}tt>=1&&(P=null)}const Xt=(wt==null?void 0:wt.skyTime)??X,Ue=Xt/E*Math.PI*2+1.1,be=Ue-Math.PI/2,Le=-Math.sin(be),ge=Math.cos(b)*Math.cos(be),ke=Math.sin(b)*Math.cos(be),Ge=ge,He=Le*R,Ke=ge*R,Ie=ke*R;x.position.set(He,Ke,Ie);const Xe=be-D,vn=-Math.sin(Xe),Mn=Math.cos(b)*Math.cos(Xe),gi=Math.sin(b)*Math.cos(Xe);I.position.set(vn*R,Mn*R,gi*R);const Ve=Math.min(1,Math.max(0,(Ge+.06)/.24)),Ye=1-Ve,Sn=Math.max(0,1-Math.abs(Ge)/.25),qn=x.material,oe=I.material;qn.opacity=1,oe.opacity=1,qn.rotation=Xt*.02,oe.rotation=-Xt*.013;const qe=Math.max(0,Math.min(1,(Mn*R+6)/18));qn.color.lerpColors(Dt,ot,Math.min(1,Math.max(0,Ge/.45)));const un=50*(1+.1*Sn);x.scale.set(un,un,1),M.position.set(He,Math.max(Ke,8),Ie),M.intensity=q*Ve,M.color.lerpColors(ut,et,Math.min(1,Math.max(0,Ge/.55))),A.position.set(vn*R,Math.max(Mn*R,12),gi*R),A.intensity=.3*Ve+F*Ye*qe*(.35+.65*C);const jn=.4+.6*Ve+.32*Ye*qe*C,Pn=Li.uniforms.uTint.value;Pn.setRGB(jn*(1-.14*Ye),jn*(1-.06*Ye),jn),G.uniforms.uTint.value.copy(Pn),A.color.lerpColors(K,Bt,Ve),p.intensity=.5+1.4*Ve,p.color.lerpColors(Rt,yt,Ve).lerp(mt,Sn*.4),p.groundColor.lerpColors(ue,te,Ve),Ut.lerpColors(k,H,Ve).lerp(Q,Sn*.6),wt==null||wt.renderer.setClearColor(Ut),Be.lerpColors(Ee,de,Ve).lerp(jt,Sn*.45),le.uHorizon.value.copy(Ut),le.uZenith.value.copy(Be),le.uNight.value=Ye,le.uTime.value=X,le.uSunDir.value.set(Le,ge,ke),le.uGlow.value=Sn,Ct=(((Ue-Math.PI/2)/(Math.PI*2)*24+12)%24+24)%24;const xi=Ct<.6||Ct>23.4;if(xi&&!qt&&Te++,qt=xi,j.material.uniforms.uTime.value=X,wt&&!f){for(const tt of _)tt.visible=!1;S.update(wt.renderer,wt.scene);for(const tt of _)tt.visible=!0}const ii=.35+.35*Math.sin(X*.11+2.1)+.2*Math.sin(X*.031),Ni=X*.05,vi=Math.cos(Ni)*ii,Mi=Math.sin(Ni)*ii;Cc||(to=X+35+Math.random()*35,eo=X+28+Math.random()*32,Cc=!0),_r?X>=_r&&(_r=0,to=X+35+Math.random()*35):X>=to&&(_r=X+5+Math.random()*5),gr?X>=gr&&(gr=0,eo=X+28+Math.random()*32):X>=eo&&(gr=X+4+Math.random()*4);const si=1.3,Fi=(tt,kt)=>{const Ot=Vt/si,Wt=kt?1:0;return tt<Wt?Math.min(Wt,tt+Ot):Math.max(Wt,tt-Ot)};if(ni=Fi(ni,wc&&!_r),Ui=Fi(Ui,Ac&&!gr),f){const tt=j.material.uniforms;tt.uNight.value=Ye,tt.uSky.value.copy(Ut);const kt=h+l+6;for(let Ot=0;Ot<_t.length;Ot++){const Wt=_t[Ot],pn=Math.min(1,vt(X,Ot)),Ce=8*pn*ni,ws=4.75*(1-.7*pn)*ni,Nn=g[Wt]+s[Wt]/2-m,Oi=(Ce+Math.sqrt(Ce*Ce+2*Y*Nn))/Y,ss=ws/es*(1-Math.exp(-es*Oi));tt.uImpactR.value.setComponent(Ot,Math.min(.96,(i[Wt]+l+ss)/kt)),tt.uImpactA.value.setComponent(Ot,.12*pn*ni)}}Es.visible=ni>.001;const io=ni>.25;if(Es.visible){Li.uniforms.uOpacity.value=.95*Math.min(1,ni*1.6);for(let tt=0;tt<Lt;tt++){const kt=rt[tt],Ot=(X+kt.ph)%kt.life,Wt=kt.grp===3?ft(X-Ot):vt(X-Ot,kt.grp);if(Wt<.04){cn[tt*3+1]=-9999,B[tt]=0;continue}const pn=Wt>1?1:Wt,Ce=kt.up*Wt*ni,Nn=kt.out*(1-.7*pn)*ni/es*(1-Math.exp(-es*Ot)),Oi=hr[tt]*Ot*Ot,ss=.35*Ot*Ot,Pc=kt.oy+Ce*Ot-.5*Y*Ot*Ot,Dc=kt.ox+kt.cx*Nn-kt.cz*Oi+vi*ss,Lc=kt.oz+kt.cz*Nn+kt.cx*Oi+Mi*ss;if(Pc<m-.3){B[tt]&&io&&Math.random()<.3&&v(Dc,Lc),B[tt]=0,cn[tt*3+1]=-9999;continue}cn[tt*3]=Dc,cn[tt*3+1]=Pc,cn[tt*3+2]=Lc,B[tt]=1}Rn.attributes.position.needsUpdate=!0}let xr=!1;for(let tt=0;tt<hn;tt++){bs[tt]<Ts[tt]&&(bs[tt]+=Vt);const kt=bs[tt];if(kt>=Ts[tt]){Ii[tt*3+1]=-9999,pr[tt]=0;continue}xr=!0,Ii[tt*3]=ns[tt]+is[tt]*kt,Ii[tt*3+1]=m+.1+dr[tt]*kt-.5*Y*kt*kt,Ii[tt*3+2]=ur[tt]+fr[tt]*kt,pr[tt]=.85*(1-kt/Ts[tt])}if(z.visible=xr,xr&&(N.attributes.position.needsUpdate=!0,N.attributes.aAlpha.needsUpdate=!0),Pt.visible=Ui>.001,Pt.visible){const tt=.85+.3*(ae(X)-.55);Pt.scale.set(Et,Ft*tt,Et),Pt.position.y=St+Ft*tt/2,Pt.rotation.x=Mi*.07,Pt.rotation.z=-vi*.07,Pt.updateFire(X,Math.min(1,Ui*1.5))}if(_i.visible=Pt.visible,_i.visible&&(_i.material.opacity=.12*Ui*(.7+.6*ae(X))),ei.intensity=Ui*(26+30*(ae(X)-.55)),Hn.visible=Ui>.01,Hn.visible){ce.uniforms.uOpacity.value=.9*Ui;for(let tt=0;tt<Jt;tt++){const kt=(X+Qt[tt])%sn[tt],Ot=kt/sn[tt],Wt=Re[tt]+xn[tt]*kt,pn=fe[tt]+.6*Ot;if(Cn[tt*3]=Math.cos(Wt)*pn+vi*1.6*kt,Cn[tt*3+1]=Ze[tt]+gt[tt]*kt,Cn[tt*3+2]=Math.sin(Wt)*pn+Mi*1.6*kt,Ot<.45){const Ce=Ot/.45;_e[tt*3]=1-.02*Ce,_e[tt*3+1]=.9-.42*Ce,_e[tt*3+2]=.35-.22*Ce}else{const Ce=(Ot-.45)/.55;_e[tt*3]=.98-.43*Ce,_e[tt*3+1]=.48+.07*Ce,_e[tt*3+2]=.13+.42*Ce}pe[tt]=Math.min(1,Ot/.12)*Math.max(0,1-Math.max(0,(Ot-.55)/.45)),mi[tt]=Un[tt]*(1-.4*Ot)}rn.attributes.position.needsUpdate=!0,rn.attributes.aColor.needsUpdate=!0,rn.attributes.aAlpha.needsUpdate=!0,rn.attributes.aSize.needsUpdate=!0}}}}const Wa=new ef,Je=new zn(52,window.innerWidth/window.innerHeight);Je.far=4e3;Je.updateProjectionMatrix();const Ji=new URLSearchParams(location.search).has("auto"),on=new wg({antialias:!0});on.setClearColor(new Mt(16052712));on.setPixelRatio(Ji?Math.min(window.devicePixelRatio,1.75):window.devicePixelRatio);on.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(on.domElement);Ji||window.addEventListener("resize",()=>{Je.aspect=window.innerWidth/window.innerHeight,Je.updateProjectionMatrix(),on.setSize(window.innerWidth,window.innerHeight),Yn.handleResize()});const Ln=new Cg(Je,on.domElement);Ln.enableDamping=!0;Ln.dampingFactor=.08;Ln.enablePan=!1;Ln.minPolarAngle=.18;Ln.maxPolarAngle=1.95;Ln.minDistance=32;Ln.maxDistance=1e3;Ln.enabled=!Ji;const Yn=new Vg(Je,on.domElement);Yn.rotateSpeed=3;Yn.zoomSpeed=1.4;Yn.panSpeed=.6;Yn.dynamicDampingFactor=.12;Yn.minDistance=6;Yn.maxDistance=400;Yn.enabled=!1;function Dx(n){const t=n==="surface"&&!Ji;Yn.enabled=t,Ln.enabled=!t&&!Ji,t&&Yn.target.set(0,0,0)}on.domElement.addEventListener("dblclick",n=>n.preventDefault());const us=new URLSearchParams(location.search).has("thumb"),oi=document.createElement("div");oi.id="ui-bar";oi.style.cssText="position:fixed;top:14px;left:14px;z-index:9999;display:flex;gap:4px;align-items:center;background:rgba(246,244,238,.8);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:12px;padding:4px 8px;box-shadow:0 1px 8px rgba(0,0,0,.14);";const Qi=document.createElement("div");Qi.style.cssText="font-family:'Helvetica Neue',Arial,sans-serif;letter-spacing:.2em;font-variant-numeric:tabular-nums;font-weight:200;color:rgba(255,255,255,.22);text-shadow:0 1px 18px rgba(0,0,0,.6),0 0 4px rgba(0,0,0,.35);line-height:1;user-select:none;display:none;";if(!us&&!Ji){document.body.appendChild(oi);const n=ku();n.style.position="fixed",n.style.right="14px",n.style.bottom="12px",n.style.zIndex="9999",document.body.appendChild(n),Qi.style.cssText+="position:fixed;left:20px;bottom:18px;z-index:9999;font-size:clamp(22px,3.8vh,40px);",document.body.appendChild(Qi)}const Lx={grid:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',fountain:'<circle cx="12" cy="4" r="1.3"/><path d="M12 5.3v6.7"/><path d="M12 7c-2.6.5-4.2 2.6-4.7 5M12 7c2.6.5 4.2 2.6 4.7 5"/><path d="M4 14q8 3.6 16 0"/>',refresh:'<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v5h-5"/>',orbit:'<ellipse cx="12" cy="12" rx="9.5" ry="4"/><circle cx="12" cy="12" r="2.3"/>',flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',droplets:'<path d="M7 16.3a4 4 0 0 0 4-4c0-1.2-.6-2.3-1.7-3.2S7.3 6.8 7 5.3c-.3 1.5-1.1 2.8-2.3 3.8S3 11.1 3 12.3a4 4 0 0 0 4 4z"/><path d="M12.6 6.6A11 11 0 0 0 14 3c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 0 1-11.9 5"/>',sound:'<path d="M11 4.7 6.5 8.3H3v7.4h3.5L11 19.3z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.8 5.2a9 9 0 0 1 0 13.6"/>',play:'<path d="M7 4.5 19 12 7 19.5z"/>'};function zu(n){return'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+Lx[n]+"</svg>"}function er(n,t){n.style.color=t?"#1d1d1f":"#6b6e72",n.style.opacity=t?"1":".8"}function Vl(n,t){const e=document.createElement("button");return e.innerHTML=zu(n),e.title=t,e.setAttribute("aria-label",t),e.style.cssText="border:none;background:none;cursor:pointer;padding:5px;display:inline-flex;line-height:0;",e}function Ix(n,t){const e=document.createElement("button"),i=document.createElement("img");return i.src=n,i.alt=t,i.width=23,i.height=23,i.style.display="block",e.appendChild(i),e.title=t,e.setAttribute("aria-label",t),e.style.cssText="border:none;background:none;cursor:pointer;padding:3px;display:inline-flex;line-height:0;",e}function Ux(n,t){n.firstElementChild.style.filter=t?"none":"grayscale(1)",n.style.opacity=t?"1":".5"}function ku(){const n=document.createElement("a");return n.href="https://ayal.github.io/AGAM",n.target="_blank",n.rel="noopener",n.innerHTML='<span class="credit-full">Homage to Yaacov Agam&rsquo;s <span style="font-style:italic">Fire &amp; Water Fountain</span> &middot; by Ayal Gelles</span><span class="credit-short">by Ayal Gelles</span><span class="credit-url">ayal.github.io/AGAM</span>',n.style.cssText="display:inline-block;text-align:right;line-height:1.45;font:12px 'Helvetica Neue',Arial,sans-serif;letter-spacing:.04em;color:#3c3f42;text-decoration:none;background:rgba(246,244,238,.7);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-radius:8px;padding:3px 9px;",n}const Gu=document.createElement("style");Gu.textContent=".credit-full,.credit-short,.credit-url{white-space:nowrap}.credit-url{display:block;opacity:.72;letter-spacing:.09em;font-size:.92em}.credit-short{display:none}#ui-bar a,#ui-bar button{-webkit-tap-highlight-color:transparent}@media (max-width:640px){  #ui-bar{gap:6px;left:8px;top:8px;flex-wrap:wrap}  .credit-full{display:none}.credit-short{display:inline}}";document.head.appendChild(Gu);function Gh(n,t,e,i){const s=Vl(n,t);let r=e;return er(s,r),s.onclick=()=>{r=!r,er(s,r),i(r)},s.setOn=a=>{r=a,er(s,r)},s}let Kt=null,Xa="",Qa=!0,La=null,Ir=!1,ms=null,Ia=null,Wl=null,Xl=null,Yi=null,Hh=us?{crisp:!0}:Mc();function Nx(n){n.traverse(t=>{var s,r;const e=t;e.geometry&&e.geometry.dispose();const i=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(const a of i)(r=(s=a.map)==null?void 0:s.dispose)==null||r.call(s),a.dispose()})}function Fx(n){var t;Qa=n,(t=Yi==null?void 0:Yi.setOn)==null||t.call(Yi,n)}const Ox={fire:"flame",water:"droplets",sound:"sound"},Vh=n=>Xl?Xl(n):n();function Bx(n){oi.replaceChildren();for(const i of["surface","fountain"]){const s=i===n;let r;i==="fountain"?(r=Ix("favicon.svg",i),Ux(r,s)):(r=Vl("grid",i),er(r,s)),r.onclick=()=>{i===Xa&&(Kt!=null&&Kt.recolor)?Kt.recolor():Vh(()=>Yl(i,i===Xa))},oi.appendChild(r)}const t=Vl("refresh","new render");er(t,!1),t.onclick=()=>Vh(()=>Yl(n,!1)),oi.appendChild(t);const e=document.createElement("a");if(e.innerHTML=zu("play"),e.href="?auto",e.title="fullscreen kiosk mode (camera glides, self-updates)",e.setAttribute("aria-label","auto / kiosk mode"),e.style.cssText="display:inline-flex;line-height:0;padding:5px;text-decoration:none;",er(e,!1),oi.appendChild(e),Kt!=null&&Kt.toggles){const i=document.createElement("span");i.style.cssText="width:1px;height:16px;background:#b9bbbd;margin:0 3px;",oi.appendChild(i),Yi=Gh("orbit","spin",Qa,Fx),oi.appendChild(Yi);for(const s of Kt.toggles)s.set(s.initial),oi.appendChild(Gh(Ox[s.label]??"play",s.label,s.initial,s.set))}else Yi=null}function Yl(n,t=!1,e=!1){var i;Kt&&(Wa.remove(Kt.group),(i=Kt.dispose)==null||i.call(Kt),Nx(Kt.group)),!t&&!us&&(Hh=Mc()),Lu(),Kt=n==="surface"?yx():Px(Hh,us),on.setClearColor(new Mt(Kt.background??16052712)),Wa.add(Kt.group),!t&&!e&&(Qa=!us,Je.up.set(0,1,0),Je.position.set(...Kt.camera),us&&Je.position.multiplyScalar(.62),Ln.target.set(0,0,0),Ln.update()),Xa=n,Dx(n),Bx(n),!t&&!us&&!Ir&&n==="fountain"&&(ms==null||ms())}Yl("fountain");const Ya=new Pf;let Hu=0;const xe=(n,t)=>n+Math.random()*(t-n),Rr=(n,t,e)=>n+(t-n)*e,zx=n=>n*n*(3-2*n);if(Ji){const n=document.createElement("div");n.style.cssText="position:fixed;inset:0;z-index:1;";const t=document.createElement("div");t.style.cssText="position:relative;overflow:hidden;background:#ccced0;",on.domElement.style.cssText="display:block;width:100%;height:100%;",t.appendChild(on.domElement);const e=ku();e.style.position="absolute",e.style.right="2.4%",e.style.bottom="3%",e.style.zIndex="3",e.style.background="none",e.style.backdropFilter="none",e.style.webkitBackdropFilter="none",e.style.color="rgba(255,255,255,.32)",e.style.textShadow="0 1px 10px rgba(0,0,0,.5)",t.appendChild(e),n.appendChild(t),document.body.appendChild(n),Wl=t,Je.fov=52;const i=()=>{const d=window.innerWidth,h=window.innerHeight;t.style.width=`${d}px`,t.style.height=`${h}px`,on.setSize(d,h,!1),Je.aspect=d/h,Je.updateProjectionMatrix(),e.style.fontSize=`${Math.max(11,Math.round(Math.min(h*.014,d*.022)))}px`};i(),window.addEventListener("resize",i);const s=document.createElement("div");s.style.cssText="position:fixed;inset:0;background:#101012;opacity:0;pointer-events:none;z-index:50;transition:opacity 450ms ease;",document.body.appendChild(s);let r=!1;const a=()=>{r||(r=!0,s.style.opacity="1",setTimeout(()=>location.reload(),500))},o=/assets\/index-[\w-]+\.js/,l=[...document.querySelectorAll("script")].map(d=>d.src).find(d=>o.test(d))??"";let c="";setInterval(async()=>{try{const d=await fetch(`${location.pathname}?_=${Date.now()}`,{cache:"no-store"});if(!d.ok)return;const h=(await d.text()).match(o);if(!h||!l)return;const f=h[0];if(l.includes(f)){c="";return}f===c?a():c=f}catch{}},6e4),on.domElement.addEventListener("webglcontextlost",d=>d.preventDefault()),on.domElement.addEventListener("webglcontextrestored",a),setTimeout(a,6*60*60*1e3)}{const n=Math.PI/180,t=[58,122],e=[-1,5],i=-10,s={az:0,el:.3,dist:100,lookY:2,roll:0};let r={...s},a={...s},o=0,l=.001,c=0,u=!0;ms=()=>{const E=Je.position,R=Math.max(1,E.length());s.az=Math.atan2(E.z,E.x),s.el=Math.asin(Math.max(-1,Math.min(1,E.y/R))),s.dist=R,s.lookY=Ln.target.y||2,s.roll=0,r={...s},a={...s},u=!0,c=0};const d=E=>{r={...s};const R=Math.random()<.5?1:-1,b=Math.random()<.25,w=s.az+R*(b?xe(320*n,520*n):xe(60*n,220*n)),x=Math.random();let T,D,C,I;x<.12?(T=xe(8*n,22*n),D=xe(58,80),C=xe(0,7),I=xe(7,11)):x<.3?(T=xe(48*n,76*n),D=xe(78,116),C=xe(-3,2),I=xe(7,11)):x<.66?(T=xe(-18*n,6*n),D=xe(54,78),C=xe(3,11),I=xe(11,17)):x<.84?(T=xe(12*n,40*n),D=xe(t[0],t[1]),C=xe(e[0],e[1]),I=xe(9,14)):x<.95?(T=xe(2*n,20*n),D=xe(150,250),C=xe(8,24),I=xe(12,18)):(T=xe(4*n,18*n),D=xe(300,550),C=xe(0,16),I=xe(16,24)),T=Math.max(T,Math.asin(i/D)),b&&(I=Math.max(I,xe(20,30)));const V=Math.random()<.3?(Math.random()<.5?1:-1)*xe(7*n,18*n):0;a={az:w,el:T,dist:D,lookY:C,roll:V},o=E,l=I,u=!1},h=()=>{const E=Math.cos(s.el);Je.up.set(0,1,0),Je.position.set(s.dist*E*Math.cos(s.az),s.dist*Math.sin(s.el),s.dist*E*Math.sin(s.az)),Je.lookAt(0,s.lookY,0),s.roll&&Je.rotateZ(s.roll)},f=document.createElement("div");Wl?(f.style.cssText="position:absolute;inset:0;background:#ccced0;opacity:0;pointer-events:none;z-index:2;transition:opacity 280ms ease;",Wl.appendChild(f)):(f.style.cssText="position:fixed;inset:0;background:#ccced0;opacity:0;pointer-events:none;z-index:9998;transition:opacity 280ms ease;",document.body.appendChild(f));let g=!1;Xl=E=>{g||(g=!0,f.style.background="#"+on.getClearColor(new Mt).getHexString(),f.style.opacity="1",setTimeout(()=>{E(),f.style.opacity="0",setTimeout(()=>{g=!1},300)},300))};let m=1,p=0;const M=4;let A=0;if(La=E=>{var w,x;const R=Math.min(.1,Math.max(0,E-p));if(p=E,E>=o+l)u?E>=c?d(E):s.az+=m*.7*n*R:(s.az=a.az,s.el=a.el,s.dist=a.dist,s.lookY=a.lookY,s.roll=a.roll,m=Math.sign(a.az-r.az)||1,u=!0,c=E+xe(.6,4.5));else{const T=zx((E-o)/l);s.az=Rr(r.az,a.az,T),s.el=Rr(r.el,a.el,T),s.dist=Rr(r.dist,a.dist,T),s.lookY=Rr(r.lookY,a.lookY,T),s.roll=Rr(r.roll,a.roll,T)}h();const b=((w=Kt==null?void 0:Kt.dayCount)==null?void 0:w.call(Kt))??0;b-A>=M&&(A=b,(x=Kt==null?void 0:Kt.recolor)==null||x.call(Kt))},!Ji){let R=0,b=!1;const w=()=>{R=Hu},x=()=>{Ir=!0,Ln.target.set(0,s.lookY,0),w()},T=on.domElement;T.addEventListener("pointerdown",()=>{b=!0,x()}),T.addEventListener("wheel",()=>x(),{passive:!0}),T.addEventListener("touchstart",()=>{b=!0,x()},{passive:!0}),window.addEventListener("pointerup",()=>{b&&(b=!1,w())}),window.addEventListener("touchend",()=>{b&&(b=!1,w())}),Ia=D=>{Ir&&!b&&D-R>22&&(Ir=!1)}}}let Wh=!1,Xh="",Ur=!1,ql=0,jl=0;Qi.style.cursor="pointer";Qi.title="Click to pause / resume time";Qi.addEventListener("click",()=>{Ur=!Ur,Ur?ql=Ya.getElapsed():jl+=Ya.getElapsed()-ql});const Vu=()=>{var a,o;requestAnimationFrame(Vu),Ya.update();const n=Ya.getElapsed(),t=Hu=n,e=Ur?ql-jl:n-jl,i=((a=Kt==null?void 0:Kt.status)==null?void 0:a.call(Kt))??"",s=i?Ur?i+" ⏸":i:"";s!==Xh&&(Qi.textContent=s,Qi.style.display=s?"inline-block":"none",Xh=s);const r=!Ir&&Xa==="fountain";r&&!Wh&&(ms==null||ms()),r?La==null||La(t):Yn.enabled?Yn.update():Ln.update(),Ia==null||Ia(t),(o=Kt==null?void 0:Kt.update)==null||o.call(Kt,t,Qa,{renderer:on,scene:Wa,camera:Je,skyTime:e,spinGroup:!r}),on.render(Wa,Je),Wh=r};Vu();
