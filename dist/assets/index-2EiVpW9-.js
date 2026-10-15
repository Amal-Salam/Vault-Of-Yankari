(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ah="170",Lm=0,hu=1,Dm=2,yf=1,Mf=2,pi=3,Ti=0,We=1,je=2,Mi=0,xs=1,lr=2,uu=3,du=4,Nm=5,gs=100,Um=101,Om=102,Fm=103,km=104,Bm=200,zm=201,Vm=202,Hm=203,Jc=204,Zc=205,Gm=206,Wm=207,Xm=208,qm=209,Ym=210,jm=211,Km=212,$m=213,Jm=214,Qc=0,tl=1,el=2,hr=3,nl=4,il=5,sl=6,rl=7,Sf=0,Zm=1,Qm=2,Ki=0,bf=1,Tf=2,wf=3,ch=4,t0=5,Ef=6,Af=7,fu="attached",e0="detached",Rf=300,ur=301,dr=302,ol=303,al=304,Pa=306,Ts=1e3,Gi=1001,va=1002,nn=1003,Cf=1004,qr=1005,xn=1006,ca=1007,xi=1008,wi=1009,Pf=1010,If=1011,ao=1012,lh=1013,ws=1014,Vn=1015,Jn=1016,hh=1017,uh=1018,fr=1020,Lf=35902,Df=1021,Nf=1022,Cn=1023,Uf=1024,Of=1025,er=1026,pr=1027,dh=1028,fh=1029,Ff=1030,ph=1031,mh=1033,la=33776,ha=33777,ua=33778,da=33779,cl=35840,ll=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,_l=37810,vl=37811,xl=37812,yl=37813,Ml=37814,Sl=37815,bl=37816,Tl=37817,wl=37818,El=37819,Al=37820,Rl=37821,fa=36492,Cl=36494,Pl=36495,kf=36283,Il=36284,Ll=36285,Dl=36286,gh=2200,_h=2201,n0=2202,co=2300,lo=2301,Ya=2302,$s=2400,Js=2401,xa=2402,vh=2500,i0=2501,s0=0,Bf=1,Nl=2,r0=3200,o0=3201,zf=0,a0=1,vi="",Pe="srgb",sn="srgb-linear",Ia="linear",re="srgb",Ls=7680,pu=519,c0=512,l0=513,h0=514,Vf=515,u0=516,d0=517,f0=518,p0=519,Ul=35044,mu="300 es",yi=2e3,ya=2001;class Cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gu=1234567;const Jr=Math.PI/180,mr=180/Math.PI;function Hn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[r&255]+qe[r>>8&255]+qe[r>>16&255]+qe[r>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Ie(r,t,e){return Math.max(t,Math.min(e,r))}function xh(r,t){return(r%t+t)%t}function m0(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function g0(r,t,e){return r!==t?(e-r)/(t-r):0}function Zr(r,t,e){return(1-e)*r+e*t}function _0(r,t,e,n){return Zr(r,t,1-Math.exp(-e*n))}function v0(r,t=1){return t-Math.abs(xh(r,t*2)-t)}function x0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function y0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function M0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function S0(r,t){return r+Math.random()*(t-r)}function b0(r){return r*(.5-Math.random())}function T0(r){r!==void 0&&(gu=r);let t=gu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function w0(r){return r*Jr}function E0(r){return r*mr}function A0(r){return(r&r-1)===0&&r!==0}function R0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function C0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function P0(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*f,a*l);break;case"YZY":r.set(c*f,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*f,a*h,a*l);break;case"XZX":r.set(a*h,c*p,c*d,a*l);break;case"YXY":r.set(c*d,a*h,c*p,a*l);break;case"ZYZ":r.set(c*p,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Fe={DEG2RAD:Jr,RAD2DEG:mr,generateUUID:Hn,clamp:Ie,euclideanModulo:xh,mapLinear:m0,inverseLerp:g0,lerp:Zr,damp:_0,pingpong:v0,smoothstep:x0,smootherstep:y0,randInt:M0,randFloat:S0,randFloatSpread:b0,seededRandom:T0,degToRad:w0,radToDeg:E0,isPowerOfTwo:A0,ceilPowerOfTwo:R0,floorPowerOfTwo:C0,setQuaternionFromProperEuler:P0,normalize:oe,denormalize:Bn};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,s,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],m=i[0],g=i[3],_=i[6],x=i[1],y=i[4],v=i[7],A=i[2],b=i[5],E=i[8];return s[0]=o*m+a*x+c*A,s[3]=o*g+a*y+c*b,s[6]=o*_+a*v+c*E,s[1]=l*m+h*x+u*A,s[4]=l*g+h*y+u*b,s[7]=l*_+h*v+u*E,s[2]=f*m+d*x+p*A,s[5]=f*g+d*y+p*b,s[8]=f*_+d*v+p*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*s,d=l*s-o*c,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=u*m,t[1]=(i*l-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=f*m,t[4]=(h*e-i*c)*m,t[5]=(i*s-a*e)*m,t[6]=d*m,t[7]=(n*c-l*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ja.makeScale(t,e)),this}rotate(t){return this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new Ot;function Hf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ho(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function I0(){const r=ho("canvas");return r.style.display="block",r}const _u={};function Yr(r){r in _u||(_u[r]=!0,console.warn(r))}function L0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function D0(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function N0(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Vt={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vi?Ia:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Si(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function nr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const vu=[.64,.33,.3,.6,.15,.06],xu=[.2126,.7152,.0722],yu=[.3127,.329],Mu=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Vt.define({[sn]:{primaries:vu,whitePoint:yu,transfer:Ia,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:xu,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:vu,whitePoint:yu,transfer:re,toXYZ:Mu,fromXYZ:Su,luminanceCoefficients:xu,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let Ds;class U0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ds===void 0&&(Ds=ho("canvas")),Ds.width=t.width,Ds.height=t.height;const n=Ds.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ds}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ho("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Si(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let O0=0;class Gf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ka(i[o].image)):s.push(Ka(i[o]))}else s=Ka(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ka(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?U0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let F0=0;class be extends Cs{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Gi,i=Gi,s=xn,o=xi,a=Cn,c=wi,l=be.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Hn(),this.name="",this.source=new Gf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ts:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ts:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Rf;be.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,i=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],m=c[2],g=c[6],_=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(p+g)<.1&&Math.abs(l+d+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(d+1)/2,A=(_+1)/2,b=(h+f)/4,E=(u+m)/4,R=(p+g)/4;return y>v&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=E/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=b/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=E/s,i=R/s),this.set(n,i,s,e),this}let x=Math.sqrt((g-p)*(g-p)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-m)/x,this.z=(f-h)/x,this.w=Math.acos((l+d+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k0 extends Cs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Gf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends k0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wf extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class B0 extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],d=s[o+1],p=s[o+2],m=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=m;return}if(u!==m||c!==f||l!==d||h!==p){let g=1-a;const _=c*f+l*d+h*p+u*m,x=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const A=Math.sqrt(y),b=Math.atan2(A,_*x);g=Math.sin(g*b)/A,a=Math.sin(a*b)/A}const v=a*x;if(c=c*g+f*v,l=l*g+d*v,h=h*g+p*v,u=u*g+m*v,g===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*u+c*d-l*f,t[e+1]=c*p+h*f+l*u-a*d,t[e+2]=l*p+h*d+a*f-c*u,t[e+3]=h*p-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),f=c(n/2),d=c(i/2),p=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new P,bu=new Ln;class ei{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ao.copy(n.boundingBox)),Ao.applyMatrix4(t.matrixWorld),this.union(Ao)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nr),Ro.subVectors(this.max,Nr),Ns.subVectors(t.a,Nr),Us.subVectors(t.b,Nr),Os.subVectors(t.c,Nr),Li.subVectors(Us,Ns),Di.subVectors(Os,Us),ns.subVectors(Ns,Os);let e=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-ns.z,ns.y,Li.z,0,-Li.x,Di.z,0,-Di.x,ns.z,0,-ns.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-ns.y,ns.x,0];return!Ja(e,Ns,Us,Os,Ro)||(e=[1,0,0,0,1,0,0,0,1],!Ja(e,Ns,Us,Os,Ro))?!1:(Co.crossVectors(Li,Di),e=[Co.x,Co.y,Co.z],Ja(e,Ns,Us,Os,Ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ci=[new P,new P,new P,new P,new P,new P,new P,new P],On=new P,Ao=new ei,Ns=new P,Us=new P,Os=new P,Li=new P,Di=new P,ns=new P,Nr=new P,Ro=new P,Co=new P,is=new P;function Ja(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){is.fromArray(r,s);const a=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),c=t.dot(is),l=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const z0=new ei,Ur=new P,Za=new P;class ni{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):z0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);const e=Ur.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(Za)),this.expandByPoint(Ur.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new P,Qa=new P,Po=new P,Ni=new P,tc=new P,Io=new P,ec=new P;class La{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qa.copy(t).add(e).multiplyScalar(.5),Po.copy(e).sub(t).normalize(),Ni.copy(this.origin).sub(Qa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Po),a=Ni.dot(this.direction),c=-Ni.dot(Po),l=Ni.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=s*h,u>=0)if(f>=-p)if(f<=p){const m=1/h;u*=m,f*=m,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qa).addScaledVector(Po,f),d}intersectSphere(t,e){li.subVectors(t.center,this.origin);const n=li.dot(this.direction),i=li.dot(li)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,i,s){tc.subVectors(e,t),Io.subVectors(n,t),ec.crossVectors(tc,Io);let o=this.direction.dot(ec),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,t);const c=a*this.direction.dot(Io.crossVectors(Ni,Io));if(c<0)return null;const l=a*this.direction.dot(tc.cross(Ni));if(l<0||c+l>o)return null;const h=-a*Ni.dot(ec);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(t,e,n,i,s,o,a,c,l,h,u,f,d,p,m,g){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,u,f,d,p,m,g)}set(t,e,n,i,s,o,a,c,l,h,u,f,d,p,m,g){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=h,_[10]=u,_[14]=f,_[3]=d,_[7]=p,_[11]=m,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Fs.setFromMatrixColumn(t,0).length(),s=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,p=a*h,m=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+p*l,e[5]=f-m*l,e[9]=-a*c,e[2]=m-f*l,e[6]=p+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,p=l*h,m=l*u;e[0]=f+m*a,e[4]=p*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=m+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,p=l*h,m=l*u;e[0]=f-m*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=m-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,p=a*h,m=a*u;e[0]=c*h,e[4]=p*l-d,e[8]=f*l+m,e[1]=c*u,e[5]=m*l+f,e[9]=d*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,p=a*c,m=a*l;e[0]=c*h,e[4]=m-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+p,e[10]=f-m*u}else if(t.order==="XZY"){const f=o*c,d=o*l,p=a*c,m=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+m,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=m*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(V0,t,H0)}lookAt(t,e,n){const i=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ui.crossVectors(n,fn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ui.crossVectors(n,fn)),Ui.normalize(),Lo.crossVectors(fn,Ui),i[0]=Ui.x,i[4]=Lo.x,i[8]=fn.x,i[1]=Ui.y,i[5]=Lo.y,i[9]=fn.y,i[2]=Ui.z,i[6]=Lo.z,i[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],m=n[6],g=n[10],_=n[14],x=n[3],y=n[7],v=n[11],A=n[15],b=i[0],E=i[4],R=i[8],M=i[12],S=i[1],I=i[5],D=i[9],O=i[13],H=i[2],q=i[6],z=i[10],$=i[14],G=i[3],st=i[7],ht=i[11],vt=i[15];return s[0]=o*b+a*S+c*H+l*G,s[4]=o*E+a*I+c*q+l*st,s[8]=o*R+a*D+c*z+l*ht,s[12]=o*M+a*O+c*$+l*vt,s[1]=h*b+u*S+f*H+d*G,s[5]=h*E+u*I+f*q+d*st,s[9]=h*R+u*D+f*z+d*ht,s[13]=h*M+u*O+f*$+d*vt,s[2]=p*b+m*S+g*H+_*G,s[6]=p*E+m*I+g*q+_*st,s[10]=p*R+m*D+g*z+_*ht,s[14]=p*M+m*O+g*$+_*vt,s[3]=x*b+y*S+v*H+A*G,s[7]=x*E+y*I+v*q+A*st,s[11]=x*R+y*D+v*z+A*ht,s[15]=x*M+y*O+v*$+A*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],m=t[7],g=t[11],_=t[15];return p*(+s*c*u-i*l*u-s*a*f+n*l*f+i*a*d-n*c*d)+m*(+e*c*d-e*l*f+s*o*f-i*o*d+i*l*h-s*c*h)+g*(+e*l*u-e*a*d-s*o*u+n*o*d+s*a*h-n*l*h)+_*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],m=t[13],g=t[14],_=t[15],x=u*g*l-m*f*l+m*c*d-a*g*d-u*c*_+a*f*_,y=p*f*l-h*g*l-p*c*d+o*g*d+h*c*_-o*f*_,v=h*m*l-p*u*l+p*a*d-o*m*d-h*a*_+o*u*_,A=p*u*c-h*m*c-p*a*f+o*m*f+h*a*g-o*u*g,b=e*x+n*y+i*v+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=x*E,t[1]=(m*f*s-u*g*s-m*i*d+n*g*d+u*i*_-n*f*_)*E,t[2]=(a*g*s-m*c*s+m*i*l-n*g*l-a*i*_+n*c*_)*E,t[3]=(u*c*s-a*f*s-u*i*l+n*f*l+a*i*d-n*c*d)*E,t[4]=y*E,t[5]=(h*g*s-p*f*s+p*i*d-e*g*d-h*i*_+e*f*_)*E,t[6]=(p*c*s-o*g*s-p*i*l+e*g*l+o*i*_-e*c*_)*E,t[7]=(o*f*s-h*c*s+h*i*l-e*f*l-o*i*d+e*c*d)*E,t[8]=v*E,t[9]=(p*u*s-h*m*s-p*n*d+e*m*d+h*n*_-e*u*_)*E,t[10]=(o*m*s-p*a*s+p*n*l-e*m*l-o*n*_+e*a*_)*E,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*d-e*a*d)*E,t[12]=A*E,t[13]=(h*m*i-p*u*i+p*n*f-e*m*f-h*n*g+e*u*g)*E,t[14]=(p*a*i-o*m*i-p*n*c+e*m*c+o*n*g-e*a*g)*E,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,f=s*l,d=s*h,p=s*u,m=o*h,g=o*u,_=a*u,x=c*l,y=c*h,v=c*u,A=n.x,b=n.y,E=n.z;return i[0]=(1-(m+_))*A,i[1]=(d+v)*A,i[2]=(p-y)*A,i[3]=0,i[4]=(d-v)*b,i[5]=(1-(f+_))*b,i[6]=(g+x)*b,i[7]=0,i[8]=(p+y)*E,i[9]=(g-x)*E,i[10]=(1-(f+m))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Fs.set(i[0],i[1],i[2]).length();const o=Fs.set(i[4],i[5],i[6]).length(),a=Fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Fn.copy(this);const l=1/s,h=1/o,u=1/a;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,e.setFromRotationMatrix(Fn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=yi){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,p;if(a===yi)d=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===ya)d=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=yi){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*l,d=(n+i)*h;let p,m;if(a===yi)p=(o+s)*u,m=-2*u;else if(a===ya)p=s*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=m,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fs=new P,Fn=new Lt,V0=new P(0,0,0),H0=new P(1,1,1),Ui=new P,Lo=new P,fn=new P,Tu=new Lt,wu=new Ln;class Gn{constructor(t=0,e=0,n=0,i=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wu.setFromEuler(this),this.setFromQuaternion(wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Xf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let G0=0;const Eu=new P,ks=new Ln,hi=new Lt,Do=new P,Or=new P,W0=new P,X0=new Ln,Au=new P(1,0,0),Ru=new P(0,1,0),Cu=new P(0,0,1),Pu={type:"added"},q0={type:"removed"},Bs={type:"childadded",child:null},nc={type:"childremoved",child:null};class ge extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new P,e=new Gn,n=new Ln,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Ot}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Au,t)}rotateY(t){return this.rotateOnAxis(Ru,t)}rotateZ(t){return this.rotateOnAxis(Cu,t)}translateOnAxis(t,e){return Eu.copy(t).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Au,t)}translateY(t){return this.translateOnAxis(Ru,t)}translateZ(t){return this.translateOnAxis(Cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Do.copy(t):Do.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Or,Do,this.up):hi.lookAt(Do,Or,this.up),this.quaternion.setFromRotationMatrix(hi),i&&(hi.extractRotation(i.matrixWorld),ks.setFromRotationMatrix(hi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(q0),nc.child=t,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pu),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,W0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,X0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new P(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new P,ui=new P,ic=new P,di=new P,zs=new P,Vs=new P,Iu=new P,sc=new P,rc=new P,oc=new P,ac=new Qt,cc=new Qt,lc=new Qt;class zn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),kn.subVectors(t,e),i.cross(kn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){kn.subVectors(i,e),ui.subVectors(n,e),ic.subVectors(t,e);const o=kn.dot(kn),a=kn.dot(ui),c=kn.dot(ic),l=ui.dot(ui),h=ui.dot(ic),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,di)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,di.x),c.addScaledVector(o,di.y),c.addScaledVector(a,di.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return ac.setScalar(0),cc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(t,e),cc.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ac,s.x),o.addScaledVector(cc,s.y),o.addScaledVector(lc,s.z),o}static isFrontFacing(t,e,n,i){return kn.subVectors(n,e),ui.subVectors(t,e),kn.cross(ui).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),kn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return zn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;zs.subVectors(i,n),Vs.subVectors(s,n),sc.subVectors(t,n);const c=zs.dot(sc),l=Vs.dot(sc);if(c<=0&&l<=0)return e.copy(n);rc.subVectors(t,i);const h=zs.dot(rc),u=Vs.dot(rc);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(zs,o);oc.subVectors(t,s);const d=zs.dot(oc),p=Vs.dot(oc);if(p>=0&&d<=p)return e.copy(s);const m=d*l-c*p;if(m<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Vs,a);const g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Iu.subVectors(s,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(Iu,a);const _=1/(g+m+f);return o=m*_,a=f*_,e.copy(n).addScaledVector(zs,o).addScaledVector(Vs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},No={h:0,s:0,l:0};function hc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class at{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Vt.workingColorSpace){if(t=xh(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=hc(o,s,t+1/3),this.g=hc(o,s,t),this.b=hc(o,s,t-1/3)}return Vt.toWorkingColorSpace(this,i),this}setStyle(t,e=Pe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=qf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Vt.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Ie(Ye.r*255,0,255))*65536+Math.round(Ie(Ye.g*255,0,255))*256+Math.round(Ie(Ye.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.fromWorkingColorSpace(Ye.copy(this),e);const n=Ye.r,i=Ye.g,s=Ye.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Pe){Vt.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,i=Ye.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(No);const n=Zr(Oi.h,No.h,e),i=Zr(Oi.s,No.s,e),s=Zr(Oi.l,No.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new at;at.NAMES=qf;let Y0=0;class Zn extends Cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Hn(),this.name="",this.blending=xs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Zc,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jc&&(n.blendSrc=this.blendSrc),this.blendDst!==Zc&&(n.blendDst=this.blendDst),this.blendEquation!==gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ze extends Zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new P,Uo=new it;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ul,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ul&&(t.usage=this.usage),t}}class Yf extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class jf extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gt extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let j0=0;const En=new Lt,uc=new ge,Hs=new P,pn=new ei,Fr=new ei,Oe=new P;class Ee extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hf(t)?jf:Yf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(pn.min,Fr.min),pn.expandByPoint(Oe),Oe.addVectors(pn.max,Fr.max),pn.expandByPoint(Oe)):(pn.expandByPoint(Fr.min),pn.expandByPoint(Fr.max))}pn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Oe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&(Hs.fromBufferAttribute(t,l),Oe.add(Hs)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new P,c[R]=new P;const l=new P,h=new P,u=new P,f=new it,d=new it,p=new it,m=new P,g=new P;function _(R,M,S){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,M),p.fromBufferAttribute(s,S),h.sub(l),u.sub(l),d.sub(f),p.sub(f);const I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),a[R].add(m),a[M].add(m),a[S].add(m),c[R].add(g),c[M].add(g),c[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,M=x.length;R<M;++R){const S=x[R],I=S.start,D=S.count;for(let O=I,H=I+D;O<H;O+=3)_(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new P,v=new P,A=new P,b=new P;function E(R){A.fromBufferAttribute(i,R),b.copy(A);const M=a[R];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(b,M);const I=v.dot(c[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,I)}for(let R=0,M=x.length;R<M;++R){const S=x[R],I=S.start,D=S.count;for(let O=I,H=I+D;O<H;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),m=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,p=0;for(let m=0,g=c.length;m<g;m++){a.isInterleavedBufferAttribute?d=c[m]*a.data.stride+a.offset:d=c[m]*h;for(let _=0;_<h;_++)f[p++]=l[d++]}return new De(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lu=new Lt,ss=new La,Oo=new ni,Du=new P,Fo=new P,ko=new P,Bo=new P,dc=new P,zo=new P,Nu=new P,Vo=new P;class Z extends ge{constructor(t=new Ee,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){zo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(dc.fromBufferAttribute(u,t),o?zo.addScaledVector(dc,h):zo.addScaledVector(dc.sub(e),h))}e.add(zo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),ss.copy(t.ray).recast(t.near),!(Oo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Oo,Du)===null||ss.origin.distanceToSquared(Du)>(t.far-t.near)**2))&&(Lu.copy(s).invert(),ss.copy(t.ray).applyMatrix4(Lu),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){const g=f[p],_=o[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,A=y;v<A;v+=3){const b=a.getX(v),E=a.getX(v+1),R=a.getX(v+2);i=Ho(this,_,t,n,l,h,u,b,E,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let g=p,_=m;g<_;g+=3){const x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=Ho(this,o,t,n,l,h,u,x,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){const g=f[p],_=o[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,A=y;v<A;v+=3){const b=v,E=v+1,R=v+2;i=Ho(this,_,t,n,l,h,u,b,E,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),m=Math.min(c.count,d.start+d.count);for(let g=p,_=m;g<_;g+=3){const x=g,y=g+1,v=g+2;i=Ho(this,o,t,n,l,h,u,x,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function K0(r,t,e,n,i,s,o,a){let c;if(t.side===We?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===Ti,a),c===null)return null;Vo.copy(a),Vo.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Vo);return l<e.near||l>e.far?null:{distance:l,point:Vo.clone(),object:r}}function Ho(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,Fo),r.getVertexPosition(c,ko),r.getVertexPosition(l,Bo);const h=K0(r,t,e,n,Fo,ko,Bo,Nu);if(h){const u=new P;zn.getBarycoord(Nu,Fo,ko,Bo,u),i&&(h.uv=zn.getInterpolatedAttribute(i,a,c,l,u,new it)),s&&(h.uv1=zn.getInterpolatedAttribute(s,a,c,l,u,new it)),o&&(h.normal=zn.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new P,materialIndex:0};zn.getNormal(Fo,ko,Bo,f.normal),h.face=f,h.barycoord=u}return h}class $t extends Ee{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function p(m,g,_,x,y,v,A,b,E,R,M){const S=v/E,I=A/R,D=v/2,O=A/2,H=b/2,q=E+1,z=R+1;let $=0,G=0;const st=new P;for(let ht=0;ht<z;ht++){const vt=ht*I-O;for(let Ct=0;Ct<q;Ct++){const te=Ct*S-D;st[m]=te*x,st[g]=vt*y,st[_]=H,l.push(st.x,st.y,st.z),st[m]=0,st[g]=0,st[_]=b>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ct/E),u.push(1-ht/R),$+=1}}for(let ht=0;ht<R;ht++)for(let vt=0;vt<E;vt++){const Ct=f+vt+q*ht,te=f+vt+q*(ht+1),X=f+(vt+1)+q*(ht+1),Q=f+(vt+1)+q*ht;c.push(Ct,te,Q),c.push(te,X,Q),G+=6}a.addGroup(d,G,M),d+=G,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function tn(r){const t={};for(let e=0;e<r.length;e++){const n=gr(r[e]);for(const i in n)t[i]=n[i]}return t}function $0(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Kf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}const uo={clone:gr,merge:tn};var J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends Zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=Z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gr(t.uniforms),this.uniformsGroups=$0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $f extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new P,Uu=new it,Ou=new it;class Ge extends $f{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Uu,Ou),e.subVectors(Ou,Uu)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gs=-90,Ws=1;class Q0 extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(Gs,Ws,t,e);i.layers=this.layers,this.add(i);const s=new Ge(Gs,Ws,t,e);s.layers=this.layers,this.add(s);const o=new Ge(Gs,Ws,t,e);o.layers=this.layers,this.add(o);const a=new Ge(Gs,Ws,t,e);a.layers=this.layers,this.add(a);const c=new Ge(Gs,Ws,t,e);c.layers=this.layers,this.add(c);const l=new Ge(Gs,Ws,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Jf extends be{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ur,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tg extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Jf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $t(5,5,5),s=new Ve({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Mi});s.uniforms.tEquirect.value=e;const o=new Z(i,s),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=xn),new Q0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const fc=new P,eg=new P,ng=new Ot;class ds{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fc.subVectors(n,e).cross(eg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ng.getNormalMatrix(t),i=this.coplanarPoint(fc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new ni,Go=new P;class yh{constructor(t=new ds,e=new ds,n=new ds,i=new ds,s=new ds,o=new ds){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],m=i[10],g=i[11],_=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(c-s,f-l,g-d,v-_).normalize(),n[1].setComponents(c+s,f+l,g+d,v+_).normalize(),n[2].setComponents(c+o,f+h,g+p,v+x).normalize(),n[3].setComponents(c-o,f-h,g-p,v-x).normalize(),n[4].setComponents(c-a,f-u,g-m,v-y).normalize(),e===yi)n[5].setComponents(c+a,f+u,g+m,v+y).normalize();else if(e===ya)n[5].setComponents(a,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Go.x=i.normal.x>0?t.max.x:t.min.x,Go.y=i.normal.y>0?t.max.y:t.min.y,Go.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zf(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ig(r){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],m=u[d];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++f,u[f]=m)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const m=u[d];r.bufferSubData(l,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class ke extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],p=[],m=[],g=[];for(let _=0;_<h;_++){const x=_*f-o;for(let y=0;y<l;y++){const v=y*u-s;p.push(v,-x,0),m.push(0,0,1),g.push(y/a),g.push(1-_/c)}}for(let _=0;_<c;_++)for(let x=0;x<a;x++){const y=x+l*_,v=x+l*(_+1),A=x+1+l*(_+1),b=x+1+l*_;d.push(y,v,b),d.push(v,A,b)}this.setIndex(d),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(m,3)),this.setAttribute("uv",new Gt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.widthSegments,t.heightSegments)}}var sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rg=`#ifdef USE_ALPHAHASH
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
#endif`,og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
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
#endif`,ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_g=`#ifdef USE_IRIDESCENCE
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
#endif`,vg=`#ifdef USE_BUMPMAP
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ag=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Rg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cg=`vec3 transformedNormal = objectNormal;
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
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Og=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kg=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xg=`#ifdef USE_GRADIENTMAP
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
}`,qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
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
#endif`,$g=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,Jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,n_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,i_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,s_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f_=`#if defined( USE_POINTS_UV )
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
#endif`,p_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,__=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`#ifdef USE_MORPHTARGETS
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
#endif`,y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
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
#endif`,A_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,D_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,H_=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,G_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,X_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,Y_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Z_=`#ifdef USE_TRANSMISSION
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sv=`uniform sampler2D t2D;
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
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`#include <common>
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
}`,hv=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uv=`#define DISTANCE
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
}`,dv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`uniform float scale;
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
}`,gv=`uniform vec3 diffuse;
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
}`,_v=`#include <common>
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
}`,vv=`uniform vec3 diffuse;
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
}`,xv=`#define LAMBERT
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
}`,yv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Mv=`#define MATCAP
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
}`,Sv=`#define MATCAP
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
}`,bv=`#define NORMAL
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
}`,Tv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wv=`#define PHONG
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
}`,Ev=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Av=`#define STANDARD
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
}`,Rv=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Cv=`#define TOON
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
}`,Pv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Iv=`uniform float size;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Dv=`#include <common>
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
}`,Nv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Uv=`uniform float rotation;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:sg,alphahash_pars_fragment:rg,alphamap_fragment:og,alphamap_pars_fragment:ag,alphatest_fragment:cg,alphatest_pars_fragment:lg,aomap_fragment:hg,aomap_pars_fragment:ug,batching_pars_vertex:dg,batching_vertex:fg,begin_vertex:pg,beginnormal_vertex:mg,bsdfs:gg,iridescence_fragment:_g,bumpmap_pars_fragment:vg,clipping_planes_fragment:xg,clipping_planes_pars_fragment:yg,clipping_planes_pars_vertex:Mg,clipping_planes_vertex:Sg,color_fragment:bg,color_pars_fragment:Tg,color_pars_vertex:wg,color_vertex:Eg,common:Ag,cube_uv_reflection_fragment:Rg,defaultnormal_vertex:Cg,displacementmap_pars_vertex:Pg,displacementmap_vertex:Ig,emissivemap_fragment:Lg,emissivemap_pars_fragment:Dg,colorspace_fragment:Ng,colorspace_pars_fragment:Ug,envmap_fragment:Og,envmap_common_pars_fragment:Fg,envmap_pars_fragment:kg,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:$g,envmap_vertex:zg,fog_vertex:Vg,fog_pars_vertex:Hg,fog_fragment:Gg,fog_pars_fragment:Wg,gradientmap_pars_fragment:Xg,lightmap_pars_fragment:qg,lights_lambert_fragment:Yg,lights_lambert_pars_fragment:jg,lights_pars_begin:Kg,lights_toon_fragment:Jg,lights_toon_pars_fragment:Zg,lights_phong_fragment:Qg,lights_phong_pars_fragment:t_,lights_physical_fragment:e_,lights_physical_pars_fragment:n_,lights_fragment_begin:i_,lights_fragment_maps:s_,lights_fragment_end:r_,logdepthbuf_fragment:o_,logdepthbuf_pars_fragment:a_,logdepthbuf_pars_vertex:c_,logdepthbuf_vertex:l_,map_fragment:h_,map_pars_fragment:u_,map_particle_fragment:d_,map_particle_pars_fragment:f_,metalnessmap_fragment:p_,metalnessmap_pars_fragment:m_,morphinstance_vertex:g_,morphcolor_vertex:__,morphnormal_vertex:v_,morphtarget_pars_vertex:x_,morphtarget_vertex:y_,normal_fragment_begin:M_,normal_fragment_maps:S_,normal_pars_fragment:b_,normal_pars_vertex:T_,normal_vertex:w_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:A_,clearcoat_normal_fragment_maps:R_,clearcoat_pars_fragment:C_,iridescence_pars_fragment:P_,opaque_fragment:I_,packing:L_,premultiplied_alpha_fragment:D_,project_vertex:N_,dithering_fragment:U_,dithering_pars_fragment:O_,roughnessmap_fragment:F_,roughnessmap_pars_fragment:k_,shadowmap_pars_fragment:B_,shadowmap_pars_vertex:z_,shadowmap_vertex:V_,shadowmask_pars_fragment:H_,skinbase_vertex:G_,skinning_pars_vertex:W_,skinning_vertex:X_,skinnormal_vertex:q_,specularmap_fragment:Y_,specularmap_pars_fragment:j_,tonemapping_fragment:K_,tonemapping_pars_fragment:$_,transmission_fragment:J_,transmission_pars_fragment:Z_,uv_pars_fragment:Q_,uv_pars_vertex:tv,uv_vertex:ev,worldpos_vertex:nv,background_vert:iv,background_frag:sv,backgroundCube_vert:rv,backgroundCube_frag:ov,cube_vert:av,cube_frag:cv,depth_vert:lv,depth_frag:hv,distanceRGBA_vert:uv,distanceRGBA_frag:dv,equirect_vert:fv,equirect_frag:pv,linedashed_vert:mv,linedashed_frag:gv,meshbasic_vert:_v,meshbasic_frag:vv,meshlambert_vert:xv,meshlambert_frag:yv,meshmatcap_vert:Mv,meshmatcap_frag:Sv,meshnormal_vert:bv,meshnormal_frag:Tv,meshphong_vert:wv,meshphong_frag:Ev,meshphysical_vert:Av,meshphysical_frag:Rv,meshtoon_vert:Cv,meshtoon_frag:Pv,points_vert:Iv,points_frag:Lv,shadow_vert:Dv,shadow_frag:Nv,sprite_vert:Uv,sprite_frag:Ov},rt={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Yn={basic:{uniforms:tn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:tn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new at(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:tn([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:tn([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:tn([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new at(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:tn([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:tn([rt.points,rt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:tn([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:tn([rt.common,rt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:tn([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:tn([rt.sprite,rt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:tn([rt.common,rt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:tn([rt.lights,rt.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Yn.physical={uniforms:tn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Wo={r:0,b:0,g:0},os=new Gn,Fv=new Lt;function kv(r,t,e,n,i,s,o){const a=new at(0);let c=s===!0?0:1,l,h,u=null,f=0,d=null;function p(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function m(x){let y=!1;const v=p(x);v===null?_(a,c):v&&v.isColor&&(_(v,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(x,y){const v=p(y);v&&(v.isCubeTexture||v.mapping===Pa)?(h===void 0&&(h=new Z(new $t(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:gr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),os.copy(y.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(os)),h.material.toneMapped=Vt.getTransfer(v.colorSpace)!==re,(u!==v||f!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Z(new ke(2,2),new Ve({name:"BackgroundMaterial",uniforms:gr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Vt.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function _(x,y){x.getRGB(Wo,Kf(r)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),c=y,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,_(a,c)},render:m,addToRenderList:g}}function Bv(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(S,I,D,O,H){let q=!1;const z=u(O,D,I);s!==z&&(s=z,l(s.object)),q=d(S,O,D,H),q&&p(S,O,D,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(S,I,D,O),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return r.createVertexArray()}function l(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,I,D){const O=D.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let q=H[I.id];q===void 0&&(q={},H[I.id]=q);let z=q[O];return z===void 0&&(z=f(c()),q[O]=z),z}function f(S){const I=[],D=[],O=[];for(let H=0;H<e;H++)I[H]=0,D[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:O,object:S,attributes:{},index:null}}function d(S,I,D,O){const H=s.attributes,q=I.attributes;let z=0;const $=D.getAttributes();for(const G in $)if($[G].location>=0){const ht=H[G];let vt=q[G];if(vt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),ht===void 0||ht.attribute!==vt||vt&&ht.data!==vt.data)return!0;z++}return s.attributesNum!==z||s.index!==O}function p(S,I,D,O){const H={},q=I.attributes;let z=0;const $=D.getAttributes();for(const G in $)if($[G].location>=0){let ht=q[G];ht===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor));const vt={};vt.attribute=ht,ht&&ht.data&&(vt.data=ht.data),H[G]=vt,z++}s.attributes=H,s.attributesNum=z,s.index=O}function m(){const S=s.newAttributes;for(let I=0,D=S.length;I<D;I++)S[I]=0}function g(S){_(S,0)}function _(S,I){const D=s.newAttributes,O=s.enabledAttributes,H=s.attributeDivisors;D[S]=1,O[S]===0&&(r.enableVertexAttribArray(S),O[S]=1),H[S]!==I&&(r.vertexAttribDivisor(S,I),H[S]=I)}function x(){const S=s.newAttributes,I=s.enabledAttributes;for(let D=0,O=I.length;D<O;D++)I[D]!==S[D]&&(r.disableVertexAttribArray(D),I[D]=0)}function y(S,I,D,O,H,q,z){z===!0?r.vertexAttribIPointer(S,I,D,H,q):r.vertexAttribPointer(S,I,D,O,H,q)}function v(S,I,D,O){m();const H=O.attributes,q=D.getAttributes(),z=I.defaultAttributeValues;for(const $ in q){const G=q[$];if(G.location>=0){let st=H[$];if(st===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const ht=st.normalized,vt=st.itemSize,Ct=t.get(st);if(Ct===void 0)continue;const te=Ct.buffer,X=Ct.type,Q=Ct.bytesPerElement,St=X===r.INT||X===r.UNSIGNED_INT||st.gpuType===lh;if(st.isInterleavedBufferAttribute){const ct=st.data,Rt=ct.stride,Dt=st.offset;if(ct.isInstancedInterleavedBuffer){for(let Bt=0;Bt<G.locationSize;Bt++)_(G.location+Bt,ct.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Bt=0;Bt<G.locationSize;Bt++)g(G.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,te);for(let Bt=0;Bt<G.locationSize;Bt++)y(G.location+Bt,vt/G.locationSize,X,ht,Rt*Q,(Dt+vt/G.locationSize*Bt)*Q,St)}else{if(st.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)_(G.location+ct,st.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ct=0;ct<G.locationSize;ct++)g(G.location+ct);r.bindBuffer(r.ARRAY_BUFFER,te);for(let ct=0;ct<G.locationSize;ct++)y(G.location+ct,vt/G.locationSize,X,ht,vt*Q,vt/G.locationSize*ct*Q,St)}}else if(z!==void 0){const ht=z[$];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(G.location,ht);break;case 3:r.vertexAttrib3fv(G.location,ht);break;case 4:r.vertexAttrib4fv(G.location,ht);break;default:r.vertexAttrib1fv(G.location,ht)}}}}x()}function A(){R();for(const S in n){const I=n[S];for(const D in I){const O=I[D];for(const H in O)h(O[H].object),delete O[H];delete I[D]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const D in I){const O=I[D];for(const H in O)h(O[H].object),delete O[H];delete I[D]}delete n[S.id]}function E(S){for(const I in n){const D=n[I];if(D[S.id]===void 0)continue;const O=D[S.id];for(const H in O)h(O[H].object),delete O[H];delete D[S.id]}}function R(){M(),o=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:m,enableAttribute:g,disableUnusedAttributes:x}}function zv(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<l.length;p++)o(l[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m]*f[m];e.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Vv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Cn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===Jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==wi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Vn&&!R)}function c(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:b}}function Hv(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ds,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,_=r.get(u);if(!i||p===null||p.length===0||s&&!g)s?h(null):l();else{const x=s?0:n,y=x*4;let v=_.clippingState||null;c.value=v,v=h(p,f,y,d);for(let A=0;A!==y;++A)v[A]=e[A];_.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){const m=u!==null?u.length:0;let g=null;if(m!==0){if(g=c.value,p!==!0||g===null){const _=d+m*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<_)&&(g=new Float32Array(_));for(let y=0,v=d;y!==m;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,g}}function Gv(r){let t=new WeakMap;function e(o,a){return a===ol?o.mapping=ur:a===al&&(o.mapping=dr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ol||a===al)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new tg(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Da extends $f{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zs=4,Fu=[.125,.215,.35,.446,.526,.582],_s=20,pc=new Da,ku=new at;let mc=null,gc=0,_c=0,vc=!1;const fs=(1+Math.sqrt(5))/2,Xs=1/fs,Bu=[new P(-fs,Xs,0),new P(fs,Xs,0),new P(-Xs,0,fs),new P(Xs,0,fs),new P(0,fs,-Xs),new P(0,fs,Xs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ol{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mc,gc,_c),this._renderer.xr.enabled=vc,t.scissorTest=!1,Xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ur||t.mapping===dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Jn,format:Cn,colorSpace:sn,depthBuffer:!1},i=zu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wv(s)),this._blurMaterial=Xv(s,t,e)}return i}_compileMaterial(t){const e=new Z(this._lodPlanes[0],t);this._renderer.compile(e,pc)}_sceneToCubeUV(t,e,n,i){const a=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ku),h.toneMapping=Ki,h.autoClear=!1;const d=new ze({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),p=new Z(new $t,d);let m=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,m=!0):(d.color.copy(ku),m=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):x===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const y=this._cubeSize;Xo(i,x*y,_>2?y:0,y,y),h.setRenderTarget(i),m&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ur||t.mapping===dr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Z(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Xo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,pc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bu[(i-s-1)%Bu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Z(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*_s-1),m=s/p,g=isFinite(s)?1+Math.floor(h*m):_s;g>_s&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${_s}`);const _=[];let x=0;for(let E=0;E<_s;++E){const R=E/m,M=Math.exp(-R*R/2);_.push(M),E===0?x+=M:E<g&&(x+=2*M)}for(let E=0;E<_.length;E++)_[E]=_[E]/x;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-n;const v=this._sizeLods[i],A=3*v*(i>y-Zs?i-y+Zs:0),b=4*(this._cubeSize-v);Xo(e,A,b,3*v,2*v),c.setRenderTarget(e),c.render(u,pc)}}function Wv(r){const t=[],e=[],n=[];let i=r;const s=r-Zs+1+Fu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Zs?c=Fu[o-r+Zs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,m=3,g=2,_=1,x=new Float32Array(m*p*d),y=new Float32Array(g*p*d),v=new Float32Array(_*p*d);for(let b=0;b<d;b++){const E=b%3*2/3-1,R=b>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];x.set(M,m*p*b),y.set(f,g*p*b);const S=[b,b,b,b,b,b];v.set(S,_*p*b)}const A=new Ee;A.setAttribute("position",new De(x,m)),A.setAttribute("uv",new De(y,g)),A.setAttribute("faceIndex",new De(v,_)),t.push(A),i>Zs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zu(r,t,e){const n=new Mn(r,t,e);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Xv(r,t,e){const n=new Float32Array(_s),i=new P(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Vu(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Hu(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}function qv(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ol||c===al,h=c===ur||c===dr;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ol(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Ol(r)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Yv(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Yr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jv(r,t,e,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);for(const p in f.morphAttributes){const m=f.morphAttributes[p];for(let g=0,_=m.length;g<_;g++)t.remove(m[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)t.update(f[p],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const p in d){const m=d[p];for(let g=0,_=m.length;g<_;g++)t.update(m[g],r.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,p=u.attributes.position;let m=0;if(d!==null){const x=d.array;m=d.version;for(let y=0,v=x.length;y<v;y+=3){const A=x[y+0],b=x[y+1],E=x[y+2];f.push(A,b,b,E,E,A)}}else if(p!==void 0){const x=p.array;m=p.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const A=y+0,b=y+1,E=y+2;f.push(A,b,b,E,E,A)}}else return;const g=new(Hf(f)?jf:Yf)(f,1);g.version=m;const _=s.get(u);_&&t.remove(_),s.set(u,g)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Kv(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function l(f,d,p){p!==0&&(r.drawElementsInstanced(n,d,s,f*o,p),e.update(d,n,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let g=0;for(let _=0;_<p;_++)g+=d[_];e.update(g,n,1)}function u(f,d,p,m){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<f.length;_++)l(f[_]/o,d[_],m[_]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,m,0,p);let _=0;for(let x=0;x<p;x++)_+=d[x]*m[x];e.update(_,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $v(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Jv(r,t,e){const n=new WeakMap,i=new Qt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),p===!0&&(y=2),m===!0&&(y=3);let v=a.attributes.position.count*y,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*A*4*u),E=new Wf(b,v,A,u);E.type=Vn,E.needsUpdate=!0;const R=y*4;for(let S=0;S<u;S++){const I=g[S],D=_[S],O=x[S],H=v*A*4*S;for(let q=0;q<I.count;q++){const z=q*R;d===!0&&(i.fromBufferAttribute(I,q),b[H+z+0]=i.x,b[H+z+1]=i.y,b[H+z+2]=i.z,b[H+z+3]=0),p===!0&&(i.fromBufferAttribute(D,q),b[H+z+4]=i.x,b[H+z+5]=i.y,b[H+z+6]=i.z,b[H+z+7]=0),m===!0&&(i.fromBufferAttribute(O,q),b[H+z+8]=i.x,b[H+z+9]=i.y,b[H+z+10]=i.z,b[H+z+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new it(v,A)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];const p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",p),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Zv(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Qf extends be{constructor(t,e,n,i,s,o,a,c,l,h=er){if(h!==er&&h!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===er&&(n=ws),n===void 0&&h===pr&&(n=fr),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=c!==void 0?c:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tp=new be,Gu=new Qf(1,1),ep=new Wf,np=new B0,ip=new Jf,Wu=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),ju=new Float32Array(4);function Er(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Wu[i];if(s===void 0&&(s=new Float32Array(i),Wu[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ne(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ue(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Na(r,t){let e=Xu[t];e===void 0&&(e=new Int32Array(t),Xu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Qv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function tx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2fv(this.addr,t),Ue(e,t)}}function ex(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;r.uniform3fv(this.addr,t),Ue(e,t)}}function nx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4fv(this.addr,t),Ue(e,t)}}function ix(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;ju.set(n),r.uniformMatrix2fv(this.addr,!1,ju),Ue(e,n)}}function sx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Yu.set(n),r.uniformMatrix3fv(this.addr,!1,Yu),Ue(e,n)}}function rx(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;qu.set(n),r.uniformMatrix4fv(this.addr,!1,qu),Ue(e,n)}}function ox(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ax(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2iv(this.addr,t),Ue(e,t)}}function cx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3iv(this.addr,t),Ue(e,t)}}function lx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4iv(this.addr,t),Ue(e,t)}}function hx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ux(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;r.uniform2uiv(this.addr,t),Ue(e,t)}}function dx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;r.uniform3uiv(this.addr,t),Ue(e,t)}}function fx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;r.uniform4uiv(this.addr,t),Ue(e,t)}}function px(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Gu.compareFunction=Vf,s=Gu):s=tp,e.setTexture2D(t||s,i)}function mx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||np,i)}function gx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ip,i)}function _x(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ep,i)}function vx(r){switch(r){case 5126:return Qv;case 35664:return tx;case 35665:return ex;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ox;case 35667:case 35671:return ax;case 35668:case 35672:return cx;case 35669:case 35673:return lx;case 5125:return hx;case 36294:return ux;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return _x}}function xx(r,t){r.uniform1fv(this.addr,t)}function yx(r,t){const e=Er(t,this.size,2);r.uniform2fv(this.addr,e)}function Mx(r,t){const e=Er(t,this.size,3);r.uniform3fv(this.addr,e)}function Sx(r,t){const e=Er(t,this.size,4);r.uniform4fv(this.addr,e)}function bx(r,t){const e=Er(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Tx(r,t){const e=Er(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function wx(r,t){const e=Er(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ex(r,t){r.uniform1iv(this.addr,t)}function Ax(r,t){r.uniform2iv(this.addr,t)}function Rx(r,t){r.uniform3iv(this.addr,t)}function Cx(r,t){r.uniform4iv(this.addr,t)}function Px(r,t){r.uniform1uiv(this.addr,t)}function Ix(r,t){r.uniform2uiv(this.addr,t)}function Lx(r,t){r.uniform3uiv(this.addr,t)}function Dx(r,t){r.uniform4uiv(this.addr,t)}function Nx(r,t,e){const n=this.cache,i=t.length,s=Na(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||tp,s[o])}function Ux(r,t,e){const n=this.cache,i=t.length,s=Na(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||np,s[o])}function Ox(r,t,e){const n=this.cache,i=t.length,s=Na(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ip,s[o])}function Fx(r,t,e){const n=this.cache,i=t.length,s=Na(e,i);Ne(n,s)||(r.uniform1iv(this.addr,s),Ue(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ep,s[o])}function kx(r){switch(r){case 5126:return xx;case 35664:return yx;case 35665:return Mx;case 35666:return Sx;case 35674:return bx;case 35675:return Tx;case 35676:return wx;case 5124:case 35670:return Ex;case 35667:case 35671:return Ax;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Px;case 36294:return Ix;case 36295:return Lx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Fx}}class Bx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vx(e.type)}}class zx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kx(e.type)}}class Vx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function Ku(r,t){r.seq.push(t),r.map[t.id]=t}function Hx(r,t,e){const n=r.name,i=n.length;for(xc.lastIndex=0;;){const s=xc.exec(n),o=xc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ku(e,l===void 0?new Bx(a,r,t):new zx(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Vx(a),Ku(e,u)),e=u}}}class pa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Hx(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function $u(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Gx=37297;let Wx=0;function Xx(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ju=new Ot;function qx(r){Vt._getMatrix(Ju,Vt.workingColorSpace,r);const t=`mat3( ${Ju.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(r)){case Ia:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Zu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Xx(r.getShaderSource(t),o)}else return i}function Yx(r,t){const e=qx(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jx(r,t){let e;switch(t){case bf:e="Linear";break;case Tf:e="Reinhard";break;case wf:e="Cineon";break;case ch:e="ACESFilmic";break;case Ef:e="AgX";break;case Af:e="Neutral";break;case t0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qo=new P;function Kx(){Vt.getLuminanceCoefficients(qo);const r=qo.x.toFixed(4),t=qo.y.toFixed(4),e=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function Jx(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zx(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function jr(r){return r!==""}function Qu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function td(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(r){return r.replace(Qx,ey)}const ty=new Map;function ey(r,t){let e=kt[t];if(e===void 0){const n=ty.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fl(e)}const ny=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(r){return r.replace(ny,iy)}function iy(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nd(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function sy(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yf?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function ry(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ur:case dr:t="ENVMAP_TYPE_CUBE";break;case Pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oy(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case dr:t="ENVMAP_MODE_REFRACTION";break}return t}function ay(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Sf:t="ENVMAP_BLENDING_MULTIPLY";break;case Zm:t="ENVMAP_BLENDING_MIX";break;case Qm:t="ENVMAP_BLENDING_ADD";break}return t}function cy(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ly(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=sy(e),l=ry(e),h=oy(e),u=ay(e),f=cy(e),d=$x(e),p=Jx(s),m=i.createProgram();let g,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(jr).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(jr).join(`
`),_.length>0&&(_+=`
`)):(g=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),_=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?kt.tonemapping_pars_fragment:"",e.toneMapping!==Ki?jx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Yx("linearToOutputTexel",e.outputColorSpace),Kx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jr).join(`
`)),o=Fl(o),o=Qu(o,e),o=td(o,e),a=Fl(a),a=Qu(a,e),a=td(a,e),o=ed(o),a=ed(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",e.glslVersion===mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=x+g+o,v=x+_+a,A=$u(i,i.VERTEX_SHADER,y),b=$u(i,i.FRAGMENT_SHADER,v);i.attachShader(m,A),i.attachShader(m,b),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(I){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(m).trim(),O=i.getShaderInfoLog(A).trim(),H=i.getShaderInfoLog(b).trim();let q=!0,z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,A,b);else{const $=Zu(i,A,"vertex"),G=Zu(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+$+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||H==="")&&(z=!1);z&&(I.diagnostics={runnable:q,programLog:D,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:_}})}i.deleteShader(A),i.deleteShader(b),R=new pa(i,m),M=Zx(i,m)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(m,Gx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=b,this}let hy=0;class uy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dy(t),e.set(t,n)),n}}class dy{constructor(t){this.id=hy++,this.code=t,this.usedTimes=0}}function fy(r,t,e,n,i,s,o){const a=new Xf,c=new uy,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,S,I,D,O){const H=D.fog,q=O.geometry,z=M.isMeshStandardMaterial?D.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),G=$&&$.mapping===Pa?$.image.height:null,st=p[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=ht!==void 0?ht.length:0;let Ct=0;q.morphAttributes.position!==void 0&&(Ct=1),q.morphAttributes.normal!==void 0&&(Ct=2),q.morphAttributes.color!==void 0&&(Ct=3);let te,X,Q,St;if(st){const se=Yn[st];te=se.vertexShader,X=se.fragmentShader}else te=M.vertexShader,X=M.fragmentShader,c.update(M),Q=c.getVertexShaderID(M),St=c.getFragmentShaderID(M);const ct=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),Dt=O.isInstancedMesh===!0,Bt=O.isBatchedMesh===!0,ve=!!M.map,jt=!!M.matcap,Te=!!$,F=!!M.aoMap,Tn=!!M.lightMap,Wt=!!M.bumpMap,Xt=!!M.normalMap,Et=!!M.displacementMap,fe=!!M.emissiveMap,wt=!!M.metalnessMap,C=!!M.roughnessMap,T=M.anisotropy>0,k=M.clearcoat>0,j=M.dispersion>0,J=M.iridescence>0,Y=M.sheen>0,bt=M.transmission>0,lt=T&&!!M.anisotropyMap,pt=k&&!!M.clearcoatMap,Kt=k&&!!M.clearcoatNormalMap,tt=k&&!!M.clearcoatRoughnessMap,mt=J&&!!M.iridescenceMap,At=J&&!!M.iridescenceThicknessMap,Pt=Y&&!!M.sheenColorMap,gt=Y&&!!M.sheenRoughnessMap,qt=!!M.specularMap,Ft=!!M.specularColorMap,le=!!M.specularIntensityMap,L=bt&&!!M.transmissionMap,ot=bt&&!!M.thicknessMap,W=!!M.gradientMap,K=!!M.alphaMap,ft=M.alphaTest>0,ut=!!M.alphaHash,Nt=!!M.extensions;let Me=Ki;M.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Me=r.toneMapping);const Xe={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:X,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:St,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Bt,batchingColor:Bt&&O._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&O.instanceColor!==null,instancingMorph:Dt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?r.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:sn,alphaToCoverage:!!M.alphaToCoverage,map:ve,matcap:jt,envMap:Te,envMapMode:Te&&$.mapping,envMapCubeUVHeight:G,aoMap:F,lightMap:Tn,bumpMap:Wt,normalMap:Xt,displacementMap:f&&Et,emissiveMap:fe,normalMapObjectSpace:Xt&&M.normalMapType===a0,normalMapTangentSpace:Xt&&M.normalMapType===zf,metalnessMap:wt,roughnessMap:C,anisotropy:T,anisotropyMap:lt,clearcoat:k,clearcoatMap:pt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:tt,dispersion:j,iridescence:J,iridescenceMap:mt,iridescenceThicknessMap:At,sheen:Y,sheenColorMap:Pt,sheenRoughnessMap:gt,specularMap:qt,specularColorMap:Ft,specularIntensityMap:le,transmission:bt,transmissionMap:L,thicknessMap:ot,gradientMap:W,opaque:M.transparent===!1&&M.blending===xs&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ft,alphaHash:ut,combine:M.combine,mapUv:ve&&m(M.map.channel),aoMapUv:F&&m(M.aoMap.channel),lightMapUv:Tn&&m(M.lightMap.channel),bumpMapUv:Wt&&m(M.bumpMap.channel),normalMapUv:Xt&&m(M.normalMap.channel),displacementMapUv:Et&&m(M.displacementMap.channel),emissiveMapUv:fe&&m(M.emissiveMap.channel),metalnessMapUv:wt&&m(M.metalnessMap.channel),roughnessMapUv:C&&m(M.roughnessMap.channel),anisotropyMapUv:lt&&m(M.anisotropyMap.channel),clearcoatMapUv:pt&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:At&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&m(M.sheenRoughnessMap.channel),specularMapUv:qt&&m(M.specularMap.channel),specularColorMapUv:Ft&&m(M.specularColorMap.channel),specularIntensityMapUv:le&&m(M.specularIntensityMap.channel),transmissionMapUv:L&&m(M.transmissionMap.channel),thicknessMapUv:ot&&m(M.thicknessMap.channel),alphaMapUv:K&&m(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Xt||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(ve||K),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Me,decodeVideoTexture:ve&&M.map.isVideoTexture===!0&&Vt.getTransfer(M.map.colorSpace)===re,decodeVideoTextureEmissive:fe&&M.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(M.emissiveMap.colorSpace)===re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===je,flipSided:M.side===We,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Nt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&M.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function _(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(x(S,M),y(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=p[M.type];let I;if(S){const D=Yn[S];I=uo.clone(D.uniforms)}else I=M.uniforms;return I}function A(M,S){let I;for(let D=0,O=h.length;D<O;D++){const H=h[D];if(H.cacheKey===S){I=H,++I.usedTimes;break}}return I===void 0&&(I=new ly(r,S,M,s),h.push(I)),I}function b(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function E(M){c.remove(M)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:A,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:R}}function py(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function my(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function id(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function sd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,p,m,g){let _=r[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:m,group:g},r[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=d,_.groupOrder=p,_.renderOrder=u.renderOrder,_.z=m,_.group=g),t++,_}function a(u,f,d,p,m,g){const _=o(u,f,d,p,m,g);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):e.push(_)}function c(u,f,d,p,m,g){const _=o(u,f,d,p,m,g);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):e.unshift(_)}function l(u,f){e.length>1&&e.sort(u||my),n.length>1&&n.sort(f||id),i.length>1&&i.sort(f||id)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function gy(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new sd,r.set(n,[o])):i>=s.length?(o=new sd,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function _y(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new at};break;case"SpotLight":e={position:new P,direction:new P,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new at,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new at,groundColor:new at};break;case"RectAreaLight":e={color:new at,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function vy(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let xy=0;function yy(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function My(r){const t=new _y,e=vy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,s=new Lt,o=new Lt;function a(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,p=0,m=0,g=0,_=0,x=0,y=0,v=0,A=0,b=0,E=0;l.sort(yy);for(let M=0,S=l.length;M<S;M++){const I=l[M],D=I.color,O=I.intensity,H=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=D.r*O,u+=D.g*O,f+=D.b*O;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],O);E++}else if(I.isDirectionalLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,G=e.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=I.shadow.matrix,x++}n.directional[d]=z,d++}else if(I.isSpotLight){const z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(D).multiplyScalar(O),z.distance=H,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[m]=z;const $=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,$.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[m]=$.matrix,I.castShadow){const G=e.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[m]=G,n.spotShadowMap[m]=q,v++}m++}else if(I.isRectAreaLight){const z=t.get(I);z.color.copy(D).multiplyScalar(O),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=z,g++}else if(I.isPointLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const $=I.shadow,G=e.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=q,n.pointShadowMatrix[p]=I.shadow.matrix,y++}n.point[p]=z,p++}else if(I.isHemisphereLight){const z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(O),z.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[_]=z,_++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==m||R.rectAreaLength!==g||R.hemiLength!==_||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=g,n.point.length=p,n.hemi.length=_,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,R.directionalLength=d,R.pointLength=p,R.spotLength=m,R.rectAreaLength=g,R.hemiLength=_,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=E,n.version=xy++)}function c(l,h){let u=0,f=0,d=0,p=0,m=0;const g=h.matrixWorldInverse;for(let _=0,x=l.length;_<x;_++){const y=l[_];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const v=n.hemi[m];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function rd(r){const t=new My(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Sy(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new rd(r),t.set(i,[a])):s>=o.length?(a=new rd(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class by extends Zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=r0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ty extends Zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ay(r,t,e){let n=new yh;const i=new it,s=new it,o=new Qt,a=new by({depthPacking:o0}),c=new Ty,l={},h=e.maxTextureSize,u={[Ti]:We,[We]:Ti,[je]:je},f=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:wy,fragmentShader:Ey}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Ee;p.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Z(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yf;let _=this.type;this.render=function(b,E,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const M=r.getRenderTarget(),S=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Mi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=_!==pi&&this.type===pi,H=_===pi&&this.type!==pi;for(let q=0,z=b.length;q<z;q++){const $=b[q],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const st=G.getFrameExtents();if(i.multiply(st),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/st.x),i.x=s.x*st.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/st.y),i.y=s.y*st.y,G.mapSize.y=s.y)),G.map===null||O===!0||H===!0){const vt=this.type!==pi?{minFilter:nn,magFilter:nn}:{};G.map!==null&&G.map.dispose(),G.map=new Mn(i.x,i.y,vt),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ht=G.getViewportCount();for(let vt=0;vt<ht;vt++){const Ct=G.getViewport(vt);o.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),D.viewport(o),G.updateMatrices($,vt),n=G.getFrustum(),v(E,R,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===pi&&x(G,R),G.needsUpdate=!1}_=this.type,g.needsUpdate=!1,r.setRenderTarget(M,S,I)};function x(b,E){const R=t.update(m);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Mn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,R,f,m,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,R,d,m,null)}function y(b,E,R,M){let S=null;const I=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)S=I;else if(S=R.isPointLight===!0?c:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const D=S.uuid,O=E.uuid;let H=l[D];H===void 0&&(H={},l[D]=H);let q=H[O];q===void 0&&(q=S.clone(),H[O]=q,E.addEventListener("dispose",A)),S=q}if(S.visible=E.visible,S.wireframe=E.wireframe,M===pi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=r.properties.get(S);D.light=R}return S}function v(b,E,R,M,S){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===pi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const O=t.update(b),H=b.material;if(Array.isArray(H)){const q=O.groups;for(let z=0,$=q.length;z<$;z++){const G=q[z],st=H[G.materialIndex];if(st&&st.visible){const ht=y(b,st,M,S);b.onBeforeShadow(r,b,E,R,O,ht,G),r.renderBufferDirect(R,null,O,ht,b,G),b.onAfterShadow(r,b,E,R,O,ht,G)}}}else if(H.visible){const q=y(b,H,M,S);b.onBeforeShadow(r,b,E,R,O,q,null),r.renderBufferDirect(R,null,O,q,b,null),b.onAfterShadow(r,b,E,R,O,q,null)}}const D=b.children;for(let O=0,H=D.length;O<H;O++)v(D[O],E,R,M,S)}function A(b){b.target.removeEventListener("dispose",A);for(const R in l){const M=l[R],S=b.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Ry={[Qc]:tl,[el]:sl,[nl]:rl,[hr]:il,[tl]:Qc,[sl]:el,[rl]:nl,[il]:hr};function Cy(r,t){function e(){let L=!1;const ot=new Qt;let W=null;const K=new Qt(0,0,0,0);return{setMask:function(ft){W!==ft&&!L&&(r.colorMask(ft,ft,ft,ft),W=ft)},setLocked:function(ft){L=ft},setClear:function(ft,ut,Nt,Me,Xe){Xe===!0&&(ft*=Me,ut*=Me,Nt*=Me),ot.set(ft,ut,Nt,Me),K.equals(ot)===!1&&(r.clearColor(ft,ut,Nt,Me),K.copy(ot))},reset:function(){L=!1,W=null,K.set(-1,0,0,0)}}}function n(){let L=!1,ot=!1,W=null,K=null,ft=null;return{setReversed:function(ut){if(ot!==ut){const Nt=t.get("EXT_clip_control");ot?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const Me=ft;ft=null,this.setClear(Me)}ot=ut},getReversed:function(){return ot},setTest:function(ut){ut?ct(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(ut){W!==ut&&!L&&(r.depthMask(ut),W=ut)},setFunc:function(ut){if(ot&&(ut=Ry[ut]),K!==ut){switch(ut){case Qc:r.depthFunc(r.NEVER);break;case tl:r.depthFunc(r.ALWAYS);break;case el:r.depthFunc(r.LESS);break;case hr:r.depthFunc(r.LEQUAL);break;case nl:r.depthFunc(r.EQUAL);break;case il:r.depthFunc(r.GEQUAL);break;case sl:r.depthFunc(r.GREATER);break;case rl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ut}},setLocked:function(ut){L=ut},setClear:function(ut){ft!==ut&&(ot&&(ut=1-ut),r.clearDepth(ut),ft=ut)},reset:function(){L=!1,W=null,K=null,ft=null,ot=!1}}}function i(){let L=!1,ot=null,W=null,K=null,ft=null,ut=null,Nt=null,Me=null,Xe=null;return{setTest:function(se){L||(se?ct(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(se){ot!==se&&!L&&(r.stencilMask(se),ot=se)},setFunc:function(se,Nn,oi){(W!==se||K!==Nn||ft!==oi)&&(r.stencilFunc(se,Nn,oi),W=se,K=Nn,ft=oi)},setOp:function(se,Nn,oi){(ut!==se||Nt!==Nn||Me!==oi)&&(r.stencilOp(se,Nn,oi),ut=se,Nt=Nn,Me=oi)},setLocked:function(se){L=se},setClear:function(se){Xe!==se&&(r.clearStencil(se),Xe=se)},reset:function(){L=!1,ot=null,W=null,K=null,ft=null,ut=null,Nt=null,Me=null,Xe=null}}}const s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],p=null,m=!1,g=null,_=null,x=null,y=null,v=null,A=null,b=null,E=new at(0,0,0),R=0,M=!1,S=null,I=null,D=null,O=null,H=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=$>=2);let st=null,ht={};const vt=r.getParameter(r.SCISSOR_BOX),Ct=r.getParameter(r.VIEWPORT),te=new Qt().fromArray(vt),X=new Qt().fromArray(Ct);function Q(L,ot,W,K){const ft=new Uint8Array(4),ut=r.createTexture();r.bindTexture(L,ut),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Nt=0;Nt<W;Nt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ot,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(ot+Nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return ut}const St={};St[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),St[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),St[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(r.DEPTH_TEST),o.setFunc(hr),Wt(!1),Xt(hu),ct(r.CULL_FACE),F(Mi);function ct(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Rt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Dt(L,ot){return u[L]!==ot?(r.bindFramebuffer(L,ot),u[L]=ot,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ot),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ot),!0):!1}function Bt(L,ot){let W=d,K=!1;if(L){W=f.get(ot),W===void 0&&(W=[],f.set(ot,W));const ft=L.textures;if(W.length!==ft.length||W[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,Nt=ft.length;ut<Nt;ut++)W[ut]=r.COLOR_ATTACHMENT0+ut;W.length=ft.length,K=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,K=!0);K&&r.drawBuffers(W)}function ve(L){return p!==L?(r.useProgram(L),p=L,!0):!1}const jt={[gs]:r.FUNC_ADD,[Um]:r.FUNC_SUBTRACT,[Om]:r.FUNC_REVERSE_SUBTRACT};jt[Fm]=r.MIN,jt[km]=r.MAX;const Te={[Bm]:r.ZERO,[zm]:r.ONE,[Vm]:r.SRC_COLOR,[Jc]:r.SRC_ALPHA,[Ym]:r.SRC_ALPHA_SATURATE,[Xm]:r.DST_COLOR,[Gm]:r.DST_ALPHA,[Hm]:r.ONE_MINUS_SRC_COLOR,[Zc]:r.ONE_MINUS_SRC_ALPHA,[qm]:r.ONE_MINUS_DST_COLOR,[Wm]:r.ONE_MINUS_DST_ALPHA,[jm]:r.CONSTANT_COLOR,[Km]:r.ONE_MINUS_CONSTANT_COLOR,[$m]:r.CONSTANT_ALPHA,[Jm]:r.ONE_MINUS_CONSTANT_ALPHA};function F(L,ot,W,K,ft,ut,Nt,Me,Xe,se){if(L===Mi){m===!0&&(Rt(r.BLEND),m=!1);return}if(m===!1&&(ct(r.BLEND),m=!0),L!==Nm){if(L!==g||se!==M){if((_!==gs||v!==gs)&&(r.blendEquation(r.FUNC_ADD),_=gs,v=gs),se)switch(L){case xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lr:r.blendFunc(r.ONE,r.ONE);break;case uu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case du:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case uu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case du:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,y=null,A=null,b=null,E.set(0,0,0),R=0,g=L,M=se}return}ft=ft||ot,ut=ut||W,Nt=Nt||K,(ot!==_||ft!==v)&&(r.blendEquationSeparate(jt[ot],jt[ft]),_=ot,v=ft),(W!==x||K!==y||ut!==A||Nt!==b)&&(r.blendFuncSeparate(Te[W],Te[K],Te[ut],Te[Nt]),x=W,y=K,A=ut,b=Nt),(Me.equals(E)===!1||Xe!==R)&&(r.blendColor(Me.r,Me.g,Me.b,Xe),E.copy(Me),R=Xe),g=L,M=!1}function Tn(L,ot){L.side===je?Rt(r.CULL_FACE):ct(r.CULL_FACE);let W=L.side===We;ot&&(W=!W),Wt(W),L.blending===xs&&L.transparent===!1?F(Mi):F(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),fe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ct(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(L){S!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),S=L)}function Xt(L){L!==Lm?(ct(r.CULL_FACE),L!==I&&(L===hu?r.cullFace(r.BACK):L===Dm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),I=L}function Et(L){L!==D&&(z&&r.lineWidth(L),D=L)}function fe(L,ot,W){L?(ct(r.POLYGON_OFFSET_FILL),(O!==ot||H!==W)&&(r.polygonOffset(ot,W),O=ot,H=W)):Rt(r.POLYGON_OFFSET_FILL)}function wt(L){L?ct(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function C(L){L===void 0&&(L=r.TEXTURE0+q-1),st!==L&&(r.activeTexture(L),st=L)}function T(L,ot,W){W===void 0&&(st===null?W=r.TEXTURE0+q-1:W=st);let K=ht[W];K===void 0&&(K={type:void 0,texture:void 0},ht[W]=K),(K.type!==L||K.texture!==ot)&&(st!==W&&(r.activeTexture(W),st=W),r.bindTexture(L,ot||St[L]),K.type=L,K.texture=ot)}function k(){const L=ht[st];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(L){te.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function gt(L){X.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function qt(L,ot){let W=l.get(ot);W===void 0&&(W=new WeakMap,l.set(ot,W));let K=W.get(L);K===void 0&&(K=r.getUniformBlockIndex(ot,L.name),W.set(L,K))}function Ft(L,ot){const K=l.get(ot).get(L);c.get(ot)!==K&&(r.uniformBlockBinding(ot,K,L.__bindingPointIndex),c.set(ot,K))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},st=null,ht={},u={},f=new WeakMap,d=[],p=null,m=!1,g=null,_=null,x=null,y=null,v=null,A=null,b=null,E=new at(0,0,0),R=0,M=!1,S=null,I=null,D=null,O=null,H=null,te.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ct,disable:Rt,bindFramebuffer:Dt,drawBuffers:Bt,useProgram:ve,setBlending:F,setMaterial:Tn,setFlipSided:Wt,setCullFace:Xt,setLineWidth:Et,setPolygonOffset:fe,setScissorTest:wt,activeTexture:C,bindTexture:T,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:mt,texImage3D:At,updateUBOMapping:qt,uniformBlockBinding:Ft,texStorage2D:Kt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:bt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:Pt,viewport:gt,reset:le}}function od(r,t,e,n){const i=Py(n);switch(e){case Df:return r*t;case Uf:return r*t;case Of:return r*t*2;case dh:return r*t/i.components*i.byteLength;case fh:return r*t/i.components*i.byteLength;case Ff:return r*t*2/i.components*i.byteLength;case ph:return r*t*2/i.components*i.byteLength;case Nf:return r*t*3/i.components*i.byteLength;case Cn:return r*t*4/i.components*i.byteLength;case mh:return r*t*4/i.components*i.byteLength;case la:case ha:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ua:case da:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ll:case ul:return Math.max(r,16)*Math.max(t,8)/4;case cl:case hl:return Math.max(r,8)*Math.max(t,8)/2;case dl:case fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case _l:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case vl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case yl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case bl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case wl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case fa:case Cl:case Pl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case kf:case Il:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ll:case Dl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Py(r){switch(r){case wi:case Pf:return{byteLength:1,components:1};case ao:case If:case Jn:return{byteLength:2,components:1};case hh:case uh:return{byteLength:2,components:4};case ws:case lh:case Vn:return{byteLength:4,components:1};case Lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Iy(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new it,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,T){return d?new OffscreenCanvas(C,T):ho("canvas")}function m(C,T,k){let j=1;const J=wt(C);if((J.width>k||J.height>k)&&(j=k/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(j*J.width),bt=Math.floor(j*J.height);u===void 0&&(u=p(Y,bt));const lt=T?p(Y,bt):u;return lt.width=Y,lt.height=bt,lt.getContext("2d").drawImage(C,0,0,Y,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+bt+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function _(C){r.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,T,k,j,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=T;if(T===r.RED&&(k===r.FLOAT&&(Y=r.R32F),k===r.HALF_FLOAT&&(Y=r.R16F),k===r.UNSIGNED_BYTE&&(Y=r.R8)),T===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.R8UI),k===r.UNSIGNED_SHORT&&(Y=r.R16UI),k===r.UNSIGNED_INT&&(Y=r.R32UI),k===r.BYTE&&(Y=r.R8I),k===r.SHORT&&(Y=r.R16I),k===r.INT&&(Y=r.R32I)),T===r.RG&&(k===r.FLOAT&&(Y=r.RG32F),k===r.HALF_FLOAT&&(Y=r.RG16F),k===r.UNSIGNED_BYTE&&(Y=r.RG8)),T===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RG8UI),k===r.UNSIGNED_SHORT&&(Y=r.RG16UI),k===r.UNSIGNED_INT&&(Y=r.RG32UI),k===r.BYTE&&(Y=r.RG8I),k===r.SHORT&&(Y=r.RG16I),k===r.INT&&(Y=r.RG32I)),T===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),k===r.UNSIGNED_INT&&(Y=r.RGB32UI),k===r.BYTE&&(Y=r.RGB8I),k===r.SHORT&&(Y=r.RGB16I),k===r.INT&&(Y=r.RGB32I)),T===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),k===r.UNSIGNED_INT&&(Y=r.RGBA32UI),k===r.BYTE&&(Y=r.RGBA8I),k===r.SHORT&&(Y=r.RGBA16I),k===r.INT&&(Y=r.RGBA32I)),T===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),T===r.RGBA){const bt=J?Ia:Vt.getTransfer(j);k===r.FLOAT&&(Y=r.RGBA32F),k===r.HALF_FLOAT&&(Y=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Y=bt===re?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(C,T){let k;return C?T===null||T===ws||T===fr?k=r.DEPTH24_STENCIL8:T===Vn?k=r.DEPTH32F_STENCIL8:T===ao&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ws||T===fr?k=r.DEPTH_COMPONENT24:T===Vn?k=r.DEPTH_COMPONENT32F:T===ao&&(k=r.DEPTH_COMPONENT16),k}function A(C,T){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==xn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function b(C){const T=C.target;T.removeEventListener("dispose",b),R(T),T.isVideoTexture&&h.delete(T)}function E(C){const T=C.target;T.removeEventListener("dispose",E),S(T)}function R(C){const T=n.get(C);if(T.__webglInit===void 0)return;const k=C.source,j=f.get(k);if(j){const J=j[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(C),Object.keys(j).length===0&&f.delete(k)}n.remove(C)}function M(C){const T=n.get(C);r.deleteTexture(T.__webglTexture);const k=C.source,j=f.get(k);delete j[T.__cacheKey],o.memory.textures--}function S(C){const T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let J=0;J<T.__webglFramebuffer[j].length;J++)r.deleteFramebuffer(T.__webglFramebuffer[j][J]);else r.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)r.deleteFramebuffer(T.__webglFramebuffer[j]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const k=C.textures;for(let j=0,J=k.length;j<J;j++){const Y=n.get(k[j]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(C)}let I=0;function D(){I=0}function O(){const C=I;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),I+=1,C}function H(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function q(C,T){const k=n.get(C);if(C.isVideoTexture&&Et(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,C,T);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+T)}function z(C,T){const k=n.get(C);if(C.version>0&&k.__version!==C.version){X(k,C,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+T)}function $(C,T){const k=n.get(C);if(C.version>0&&k.__version!==C.version){X(k,C,T);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+T)}function G(C,T){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Q(k,C,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+T)}const st={[Ts]:r.REPEAT,[Gi]:r.CLAMP_TO_EDGE,[va]:r.MIRRORED_REPEAT},ht={[nn]:r.NEAREST,[Cf]:r.NEAREST_MIPMAP_NEAREST,[qr]:r.NEAREST_MIPMAP_LINEAR,[xn]:r.LINEAR,[ca]:r.LINEAR_MIPMAP_NEAREST,[xi]:r.LINEAR_MIPMAP_LINEAR},vt={[c0]:r.NEVER,[p0]:r.ALWAYS,[l0]:r.LESS,[Vf]:r.LEQUAL,[h0]:r.EQUAL,[f0]:r.GEQUAL,[u0]:r.GREATER,[d0]:r.NOTEQUAL};function Ct(C,T){if(T.type===Vn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===xn||T.magFilter===ca||T.magFilter===qr||T.magFilter===xi||T.minFilter===xn||T.minFilter===ca||T.minFilter===qr||T.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,st[T.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,st[T.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,st[T.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ht[T.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ht[T.minFilter]),T.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,vt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===nn||T.minFilter!==qr&&T.minFilter!==xi||T.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function te(C,T){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",b));const j=T.source;let J=f.get(j);J===void 0&&(J={},f.set(j,J));const Y=H(T);if(Y!==C.__cacheKey){J[Y]===void 0&&(J[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[Y].usedTimes++;const bt=J[C.__cacheKey];bt!==void 0&&(J[C.__cacheKey].usedTimes--,bt.usedTimes===0&&M(T)),C.__cacheKey=Y,C.__webglTexture=J[Y].texture}return k}function X(C,T,k){let j=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=r.TEXTURE_3D);const J=te(C,T),Y=T.source;e.bindTexture(j,C.__webglTexture,r.TEXTURE0+k);const bt=n.get(Y);if(Y.version!==bt.__version||J===!0){e.activeTexture(r.TEXTURE0+k);const lt=Vt.getPrimaries(Vt.workingColorSpace),pt=T.colorSpace===vi?null:Vt.getPrimaries(T.colorSpace),Kt=T.colorSpace===vi||lt===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let tt=m(T.image,!1,i.maxTextureSize);tt=fe(T,tt);const mt=s.convert(T.format,T.colorSpace),At=s.convert(T.type);let Pt=y(T.internalFormat,mt,At,T.colorSpace,T.isVideoTexture);Ct(j,T);let gt;const qt=T.mipmaps,Ft=T.isVideoTexture!==!0,le=bt.__version===void 0||J===!0,L=Y.dataReady,ot=A(T,tt);if(T.isDepthTexture)Pt=v(T.format===pr,T.type),le&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,Pt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,Pt,tt.width,tt.height,0,mt,At,null));else if(T.isDataTexture)if(qt.length>0){Ft&&le&&e.texStorage2D(r.TEXTURE_2D,ot,Pt,qt[0].width,qt[0].height);for(let W=0,K=qt.length;W<K;W++)gt=qt[W],Ft?L&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(r.TEXTURE_2D,W,Pt,gt.width,gt.height,0,mt,At,gt.data);T.generateMipmaps=!1}else Ft?(le&&e.texStorage2D(r.TEXTURE_2D,ot,Pt,tt.width,tt.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,At,tt.data)):e.texImage2D(r.TEXTURE_2D,0,Pt,tt.width,tt.height,0,mt,At,tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ft&&le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Pt,qt[0].width,qt[0].height,tt.depth);for(let W=0,K=qt.length;W<K;W++)if(gt=qt[W],T.format!==Cn)if(mt!==null)if(Ft){if(L)if(T.layerUpdates.size>0){const ft=od(gt.width,gt.height,T.format,T.type);for(const ut of T.layerUpdates){const Nt=gt.data.subarray(ut*ft/gt.data.BYTES_PER_ELEMENT,(ut+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,ut,gt.width,gt.height,1,mt,Nt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Pt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,tt.depth,mt,At,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,W,Pt,gt.width,gt.height,tt.depth,0,mt,At,gt.data)}else{Ft&&le&&e.texStorage2D(r.TEXTURE_2D,ot,Pt,qt[0].width,qt[0].height);for(let W=0,K=qt.length;W<K;W++)gt=qt[W],T.format!==Cn?mt!==null?Ft?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,W,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(r.TEXTURE_2D,W,Pt,gt.width,gt.height,0,mt,At,gt.data)}else if(T.isDataArrayTexture)if(Ft){if(le&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Pt,tt.width,tt.height,tt.depth),L)if(T.layerUpdates.size>0){const W=od(tt.width,tt.height,T.format,T.type);for(const K of T.layerUpdates){const ft=tt.data.subarray(K*W/tt.data.BYTES_PER_ELEMENT,(K+1)*W/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,mt,At,ft)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,At,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,tt.width,tt.height,tt.depth,0,mt,At,tt.data);else if(T.isData3DTexture)Ft?(le&&e.texStorage3D(r.TEXTURE_3D,ot,Pt,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,At,tt.data)):e.texImage3D(r.TEXTURE_3D,0,Pt,tt.width,tt.height,tt.depth,0,mt,At,tt.data);else if(T.isFramebufferTexture){if(le)if(Ft)e.texStorage2D(r.TEXTURE_2D,ot,Pt,tt.width,tt.height);else{let W=tt.width,K=tt.height;for(let ft=0;ft<ot;ft++)e.texImage2D(r.TEXTURE_2D,ft,Pt,W,K,0,mt,At,null),W>>=1,K>>=1}}else if(qt.length>0){if(Ft&&le){const W=wt(qt[0]);e.texStorage2D(r.TEXTURE_2D,ot,Pt,W.width,W.height)}for(let W=0,K=qt.length;W<K;W++)gt=qt[W],Ft?L&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,mt,At,gt):e.texImage2D(r.TEXTURE_2D,W,Pt,mt,At,gt);T.generateMipmaps=!1}else if(Ft){if(le){const W=wt(tt);e.texStorage2D(r.TEXTURE_2D,ot,Pt,W.width,W.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,mt,At,tt)}else e.texImage2D(r.TEXTURE_2D,0,Pt,mt,At,tt);g(T)&&_(j),bt.__version=Y.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Q(C,T,k){if(T.image.length!==6)return;const j=te(C,T),J=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const Y=n.get(J);if(J.version!==Y.__version||j===!0){e.activeTexture(r.TEXTURE0+k);const bt=Vt.getPrimaries(Vt.workingColorSpace),lt=T.colorSpace===vi?null:Vt.getPrimaries(T.colorSpace),pt=T.colorSpace===vi||bt===lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,tt=T.image[0]&&T.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Kt&&!tt?mt[K]=m(T.image[K],!0,i.maxCubemapSize):mt[K]=tt?T.image[K].image:T.image[K],mt[K]=fe(T,mt[K]);const At=mt[0],Pt=s.convert(T.format,T.colorSpace),gt=s.convert(T.type),qt=y(T.internalFormat,Pt,gt,T.colorSpace),Ft=T.isVideoTexture!==!0,le=Y.__version===void 0||j===!0,L=J.dataReady;let ot=A(T,At);Ct(r.TEXTURE_CUBE_MAP,T);let W;if(Kt){Ft&&le&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,qt,At.width,At.height);for(let K=0;K<6;K++){W=mt[K].mipmaps;for(let ft=0;ft<W.length;ft++){const ut=W[ft];T.format!==Cn?Pt!==null?Ft?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ut.width,ut.height,Pt,ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,qt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ut.width,ut.height,Pt,gt,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,qt,ut.width,ut.height,0,Pt,gt,ut.data)}}}else{if(W=T.mipmaps,Ft&&le){W.length>0&&ot++;const K=wt(mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,qt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Pt,gt,mt[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,mt[K].width,mt[K].height,0,Pt,gt,mt[K].data);for(let ft=0;ft<W.length;ft++){const Nt=W[ft].image[K].image;Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Nt.width,Nt.height,Pt,gt,Nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,qt,Nt.width,Nt.height,0,Pt,gt,Nt.data)}}else{Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pt,gt,mt[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,Pt,gt,mt[K]);for(let ft=0;ft<W.length;ft++){const ut=W[ft];Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Pt,gt,ut.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,qt,Pt,gt,ut.image[K])}}}g(T)&&_(r.TEXTURE_CUBE_MAP),Y.__version=J.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function St(C,T,k,j,J,Y){const bt=s.convert(k.format,k.colorSpace),lt=s.convert(k.type),pt=y(k.internalFormat,bt,lt,k.colorSpace),Kt=n.get(T),tt=n.get(k);if(tt.__renderTarget=T,!Kt.__hasExternalTextures){const mt=Math.max(1,T.width>>Y),At=Math.max(1,T.height>>Y);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,pt,mt,At,T.depth,0,bt,lt,null):e.texImage2D(J,Y,pt,mt,At,0,bt,lt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Xt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,J,tt.__webglTexture,0,Wt(T)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,J,tt.__webglTexture,Y),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(C,T,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),T.depthBuffer){const j=T.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=v(T.stencilBuffer,J),bt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=Wt(T);Xt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt,Y,T.width,T.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt,Y,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Y,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,C)}else{const j=T.textures;for(let J=0;J<j.length;J++){const Y=j[J],bt=s.convert(Y.format,Y.colorSpace),lt=s.convert(Y.type),pt=y(Y.internalFormat,bt,lt,Y.colorSpace),Kt=Wt(T);k&&Xt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,pt,T.width,T.height):Xt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Kt,pt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,pt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(T.depthTexture);j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),q(T.depthTexture,0);const J=j.__webglTexture,Y=Wt(T);if(T.depthTexture.format===er)Xt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(T.depthTexture.format===pr)Xt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Dt(C){const T=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){const J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=j}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Rt(T.__webglFramebuffer,C)}else if(k){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=r.createRenderbuffer(),ct(T.__webglDepthbuffer[j],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),ct(T.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(C,T,k){const j=n.get(C);T!==void 0&&St(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Dt(C)}function ve(C){const T=C.texture,k=n.get(C),j=n.get(T);C.addEventListener("dispose",E);const J=C.textures,Y=C.isWebGLCubeRenderTarget===!0,bt=J.length>1;if(bt||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=T.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let pt=0;pt<T.mipmaps.length;pt++)k.__webglFramebuffer[lt][pt]=r.createFramebuffer()}else k.__webglFramebuffer[lt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<T.mipmaps.length;lt++)k.__webglFramebuffer[lt]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(bt)for(let lt=0,pt=J.length;lt<pt;lt++){const Kt=n.get(J[lt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Xt(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){const pt=J[lt];k.__webglColorRenderbuffer[lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[lt]);const Kt=s.convert(pt.format,pt.colorSpace),tt=s.convert(pt.type),mt=y(pt.internalFormat,Kt,tt,pt.colorSpace,C.isXRRenderTarget===!0),At=Wt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,At,mt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+lt,r.RENDERBUFFER,k.__webglColorRenderbuffer[lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ct(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Ct(r.TEXTURE_CUBE_MAP,T);for(let lt=0;lt<6;lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let pt=0;pt<T.mipmaps.length;pt++)St(k.__webglFramebuffer[lt][pt],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else St(k.__webglFramebuffer[lt],C,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);g(T)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let lt=0,pt=J.length;lt<pt;lt++){const Kt=J[lt],tt=n.get(Kt);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),Ct(r.TEXTURE_2D,Kt),St(k.__webglFramebuffer,C,Kt,r.COLOR_ATTACHMENT0+lt,r.TEXTURE_2D,0),g(Kt)&&_(r.TEXTURE_2D)}e.unbindTexture()}else{let lt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,j.__webglTexture),Ct(lt,T),T.mipmaps&&T.mipmaps.length>0)for(let pt=0;pt<T.mipmaps.length;pt++)St(k.__webglFramebuffer[pt],C,T,r.COLOR_ATTACHMENT0,lt,pt);else St(k.__webglFramebuffer,C,T,r.COLOR_ATTACHMENT0,lt,0);g(T)&&_(lt),e.unbindTexture()}C.depthBuffer&&Dt(C)}function jt(C){const T=C.textures;for(let k=0,j=T.length;k<j;k++){const J=T[k];if(g(J)){const Y=x(C),bt=n.get(J).__webglTexture;e.bindTexture(Y,bt),_(Y),e.unbindTexture()}}}const Te=[],F=[];function Tn(C){if(C.samples>0){if(Xt(C)===!1){const T=C.textures,k=C.width,j=C.height;let J=r.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=n.get(C),lt=T.length>1;if(lt)for(let pt=0;pt<T.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let pt=0;pt<T.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const Kt=n.get(T[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Kt,0)}r.blitFramebuffer(0,0,k,j,0,0,k,j,J,r.NEAREST),c===!0&&(Te.length=0,F.length=0,Te.push(r.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Te.push(Y),F.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<T.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const Kt=n.get(T[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Kt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const T=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Wt(C){return Math.min(i.maxSamples,C.samples)}function Xt(C){const T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Et(C){const T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function fe(C,T){const k=C.colorSpace,j=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==sn&&k!==vi&&(Vt.getTransfer(k)===re?(j!==Cn||J!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),T}function wt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=Bt,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Xt}function Ly(r,t){function e(n,i=vi){let s;const o=Vt.getTransfer(i);if(n===wi)return r.UNSIGNED_BYTE;if(n===hh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===uh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Lf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Pf)return r.BYTE;if(n===If)return r.SHORT;if(n===ao)return r.UNSIGNED_SHORT;if(n===lh)return r.INT;if(n===ws)return r.UNSIGNED_INT;if(n===Vn)return r.FLOAT;if(n===Jn)return r.HALF_FLOAT;if(n===Df)return r.ALPHA;if(n===Nf)return r.RGB;if(n===Cn)return r.RGBA;if(n===Uf)return r.LUMINANCE;if(n===Of)return r.LUMINANCE_ALPHA;if(n===er)return r.DEPTH_COMPONENT;if(n===pr)return r.DEPTH_STENCIL;if(n===dh)return r.RED;if(n===fh)return r.RED_INTEGER;if(n===Ff)return r.RG;if(n===ph)return r.RG_INTEGER;if(n===mh)return r.RGBA_INTEGER;if(n===la||n===ha||n===ua||n===da)if(o===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===la)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===la)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===ll||n===hl||n===ul)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===dl||n===fl)return o===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===_l||n===vl||n===xl||n===yl||n===Ml||n===Sl||n===bl||n===Tl||n===wl||n===El||n===Al||n===Rl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ml)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_l)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fa||n===Cl||n===Pl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===fa)return o===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kf||n===Il||n===Ll||n===Dl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===fa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Dy extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ae extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ny={type:"move"};class yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const m of t.hand.values()){const g=e.getJointPose(m,n),_=this._getHandJoint(l,m);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oy=`
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

}`;class Fy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new be,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:Uy,fragmentShader:Oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ky extends Cs{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null;const m=new Fy,g=e.getContextAttributes();let _=null,x=null;const y=[],v=[],A=new it;let b=null;const E=new Ge;E.viewport=new Qt;const R=new Ge;R.viewport=new Qt;const M=[E,R],S=new Dy;let I=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=y[X];return Q===void 0&&(Q=new yc,y[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=y[X];return Q===void 0&&(Q=new yc,y[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=y[X];return Q===void 0&&(Q=new yc,y[X]=Q),Q.getHandSpace()};function O(X){const Q=v.indexOf(X.inputSource);if(Q===-1)return;const St=y[Q];St!==void 0&&(St.update(X.inputSource,X.frame,l||o),St.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",q);for(let X=0;X<y.length;X++){const Q=v[X];Q!==null&&(v[X]=null,y[X].disconnect(Q))}I=null,D=null,m.reset(),t.setRenderTarget(_),d=null,f=null,u=null,i=null,x=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(_=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const Q={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Mn(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,St=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?pr:er,St=g.stencil?fr:ws);const Rt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Rt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Mn(f.textureWidth,f.textureHeight,{format:Cn,type:wi,depthTexture:new Qf(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(X){for(let Q=0;Q<X.removed.length;Q++){const St=X.removed[Q],ct=v.indexOf(St);ct>=0&&(v[ct]=null,y[ct].disconnect(St))}for(let Q=0;Q<X.added.length;Q++){const St=X.added[Q];let ct=v.indexOf(St);if(ct===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=v.length){v.push(St),ct=Dt;break}else if(v[Dt]===null){v[Dt]=St,ct=Dt;break}if(ct===-1)break}const Rt=y[ct];Rt&&Rt.connect(St)}}const z=new P,$=new P;function G(X,Q,St){z.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(St.matrixWorld);const ct=z.distanceTo($),Rt=Q.projectionMatrix.elements,Dt=St.projectionMatrix.elements,Bt=Rt[14]/(Rt[10]-1),ve=Rt[14]/(Rt[10]+1),jt=(Rt[9]+1)/Rt[5],Te=(Rt[9]-1)/Rt[5],F=(Rt[8]-1)/Rt[0],Tn=(Dt[8]+1)/Dt[0],Wt=Bt*F,Xt=Bt*Tn,Et=ct/(-F+Tn),fe=Et*-F;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(fe),X.translateZ(Et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Rt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const wt=Bt+Et,C=ve+Et,T=Wt-fe,k=Xt+(ct-fe),j=jt*ve/C*wt,J=Te*ve/C*wt;X.projectionMatrix.makePerspective(T,k,j,J,wt,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let Q=X.near,St=X.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(St=m.depthFar)),S.near=R.near=E.near=Q,S.far=R.far=E.far=St,(I!==S.near||D!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,D=S.far),E.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,S.layers.mask=E.layers.mask|R.layers.mask;const ct=X.parent,Rt=S.cameras;st(S,ct);for(let Dt=0;Dt<Rt.length;Dt++)st(Rt[Dt],ct);Rt.length===2?G(S,E,R):S.projectionMatrix.copy(E.projectionMatrix),ht(X,S,ct)};function ht(X,Q,St){St===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(St.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=mr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(S)};let vt=null;function Ct(X,Q){if(h=Q.getViewerPose(l||o),p=Q,h!==null){const St=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ct=!1;St.length!==S.cameras.length&&(S.cameras.length=0,ct=!0);for(let Dt=0;Dt<St.length;Dt++){const Bt=St[Dt];let ve=null;if(d!==null)ve=d.getViewport(Bt);else{const Te=u.getViewSubImage(f,Bt);ve=Te.viewport,Dt===0&&(t.setRenderTargetTextures(x,Te.colorTexture,f.ignoreDepthValues?void 0:Te.depthStencilTexture),t.setRenderTarget(x))}let jt=M[Dt];jt===void 0&&(jt=new Ge,jt.layers.enable(Dt),jt.viewport=new Qt,M[Dt]=jt),jt.matrix.fromArray(Bt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Bt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ve.x,ve.y,ve.width,ve.height),Dt===0&&(S.matrix.copy(jt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ct===!0&&S.cameras.push(jt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Dt=u.getDepthInformation(St[0]);Dt&&Dt.isValid&&Dt.texture&&m.init(t,Dt,i.renderState)}}for(let St=0;St<y.length;St++){const ct=v[St],Rt=y[St];ct!==null&&Rt!==void 0&&Rt.update(ct,Q,l||o)}vt&&vt(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}const te=new Zf;te.setAnimationLoop(Ct),this.setAnimationLoop=function(X){vt=X},this.dispose=function(){}}}const as=new Gn,By=new Lt;function zy(r,t){function e(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,Kf(r)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function i(g,_,x,y,v){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(g,_):_.isMeshToonMaterial?(s(g,_),u(g,_)):_.isMeshPhongMaterial?(s(g,_),h(g,_)):_.isMeshStandardMaterial?(s(g,_),f(g,_),_.isMeshPhysicalMaterial&&d(g,_,v)):_.isMeshMatcapMaterial?(s(g,_),p(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),m(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(o(g,_),_.isLineDashedMaterial&&a(g,_)):_.isPointsMaterial?c(g,_,x,y):_.isSpriteMaterial?l(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,e(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===We&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,e(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===We&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,e(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,e(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const x=t.get(_),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,as.copy(v),as.x*=-1,as.y*=-1,as.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),g.envMapRotation.value.setFromMatrix4(By.makeRotationFromEuler(as)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,g.aoMapTransform))}function o(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform))}function a(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function c(g,_,x,y){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*x,g.scale.value=y*.5,_.map&&(g.map.value=_.map,e(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function l(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function h(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function u(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function f(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function d(g,_,x){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===We&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,_){_.matcap&&(g.matcap.value=_.matcap)}function m(g,_){const x=t.get(_).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Vy(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function l(x,y){let v=i[x.id];v===void 0&&(p(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",g));const A=y.program;n.updateUBOMapping(x,A);const b=t.render.frame;s[x.id]!==b&&(f(x),s[x.id]=b)}function h(x){const y=u();x.__bindingPointIndex=y;const v=r.createBuffer(),A=x.__size,b=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=i[x.id],v=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,E=v.length;b<E;b++){const R=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,S=R.length;M<S;M++){const I=R[M];if(d(I,b,M,A)===!0){const D=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let q=0;q<O.length;q++){const z=O[q],$=m(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,D+H,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,y,v,A){const b=x.value,E=y+"_"+v;if(A[E]===void 0)return typeof b=="number"||typeof b=="boolean"?A[E]=b:A[E]=b.clone(),!0;{const R=A[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return A[E]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function p(x){const y=x.uniforms;let v=0;const A=16;for(let E=0,R=y.length;E<R;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,I=M.length;S<I;S++){const D=M[S],O=Array.isArray(D.value)?D.value:[D.value];for(let H=0,q=O.length;H<q;H++){const z=O[H],$=m(z),G=v%A,st=G%$.boundary,ht=G+st;v+=st,ht!==0&&A-ht<$.storage&&(v+=A-ht),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=$.storage}}}const b=v%A;return b>0&&(v+=A-b),x.__size=v,x.__cache={},this}function m(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:c,update:l,dispose:_}}class Hy{constructor(t={}){const{canvas:e=I0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),m=new Int32Array(4);let g=null,_=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=Ki,this.toneMappingExposure=1;const v=this;let A=!1,b=0,E=0,R=null,M=-1,S=null;const I=new Qt,D=new Qt;let O=null;const H=new at(0);let q=0,z=e.width,$=e.height,G=1,st=null,ht=null;const vt=new Qt(0,0,z,$),Ct=new Qt(0,0,z,$);let te=!1;const X=new yh;let Q=!1,St=!1;const ct=new Lt,Rt=new Lt,Dt=new P,Bt=new Qt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Te(){return R===null?G:1}let F=n;function Tn(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ah}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){const N="webgl2";if(F=Tn(N,w),F===null)throw Tn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Wt,Xt,Et,fe,wt,C,T,k,j,J,Y,bt,lt,pt,Kt,tt,mt,At,Pt,gt,qt,Ft,le,L;function ot(){Wt=new Yv(F),Wt.init(),Ft=new Ly(F,Wt),Xt=new Vv(F,Wt,t,Ft),Et=new Cy(F,Wt),Xt.reverseDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),fe=new $v(F),wt=new py,C=new Iy(F,Wt,Et,wt,Xt,Ft,fe),T=new Gv(v),k=new qv(v),j=new ig(F),le=new Bv(F,j),J=new jv(F,j,fe,le),Y=new Zv(F,J,j,fe),Pt=new Jv(F,Xt,C),tt=new Hv(wt),bt=new fy(v,T,k,Wt,Xt,le,tt),lt=new zy(v,wt),pt=new gy,Kt=new Sy(Wt),At=new kv(v,T,k,Et,Y,d,c),mt=new Ay(v,Y,Xt),L=new Vy(F,fe,Xt,Et),gt=new zv(F,Wt,fe),qt=new Kv(F,Wt,fe),fe.programs=bt.programs,v.capabilities=Xt,v.extensions=Wt,v.properties=wt,v.renderLists=pt,v.shadowMap=mt,v.state=Et,v.info=fe}ot();const W=new ky(v,F);this.xr=W,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Wt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Wt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(z,$,!1))},this.getSize=function(w){return w.set(z,$)},this.setSize=function(w,N,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,$=N,e.width=Math.floor(w*G),e.height=Math.floor(N*G),B===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(z*G,$*G).floor()},this.setDrawingBufferSize=function(w,N,B){z=w,$=N,G=B,e.width=Math.floor(w*B),e.height=Math.floor(N*B),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(vt)},this.setViewport=function(w,N,B,V){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,N,B,V),Et.viewport(I.copy(vt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Ct)},this.setScissor=function(w,N,B,V){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,N,B,V),Et.scissor(D.copy(Ct).multiplyScalar(G).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(w){Et.setScissorTest(te=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(w=!0,N=!0,B=!0){let V=0;if(w){let U=!1;if(R!==null){const et=R.texture.format;U=et===mh||et===ph||et===fh}if(U){const et=R.texture.type,dt=et===wi||et===ws||et===ao||et===fr||et===hh||et===uh,xt=At.getClearColor(),yt=At.getClearAlpha(),It=xt.r,Ut=xt.g,Mt=xt.b;dt?(p[0]=It,p[1]=Ut,p[2]=Mt,p[3]=yt,F.clearBufferuiv(F.COLOR,0,p)):(m[0]=It,m[1]=Ut,m[2]=Mt,m[3]=yt,F.clearBufferiv(F.COLOR,0,m))}else V|=F.COLOR_BUFFER_BIT}N&&(V|=F.DEPTH_BUFFER_BIT),B&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),Kt.dispose(),wt.dispose(),T.dispose(),k.dispose(),Y.dispose(),le.dispose(),L.dispose(),bt.dispose(),W.dispose(),W.removeEventListener("sessionstart",nu),W.removeEventListener("sessionend",iu),es.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=fe.autoReset,N=mt.enabled,B=mt.autoUpdate,V=mt.needsUpdate,U=mt.type;ot(),fe.autoReset=w,mt.enabled=N,mt.autoUpdate=B,mt.needsUpdate=V,mt.type=U}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nt(w){const N=w.target;N.removeEventListener("dispose",Nt),Me(N)}function Me(w){Xe(w),wt.remove(w)}function Xe(w){const N=wt.get(w).programs;N!==void 0&&(N.forEach(function(B){bt.releaseProgram(B)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,B,V,U,et){N===null&&(N=ve);const dt=U.isMesh&&U.matrixWorld.determinant()<0,xt=Cm(w,N,B,V,U);Et.setMaterial(V,dt);let yt=B.index,It=1;if(V.wireframe===!0){if(yt=J.getWireframeAttribute(B),yt===void 0)return;It=2}const Ut=B.drawRange,Mt=B.attributes.position;let Jt=Ut.start*It,he=(Ut.start+Ut.count)*It;et!==null&&(Jt=Math.max(Jt,et.start*It),he=Math.min(he,(et.start+et.count)*It)),yt!==null?(Jt=Math.max(Jt,0),he=Math.min(he,yt.count)):Mt!=null&&(Jt=Math.max(Jt,0),he=Math.min(he,Mt.count));const pe=he-Jt;if(pe<0||pe===1/0)return;le.setup(U,V,xt,B,yt);let rn,ee=gt;if(yt!==null&&(rn=j.get(yt),ee=qt,ee.setIndex(rn)),U.isMesh)V.wireframe===!0?(Et.setLineWidth(V.wireframeLinewidth*Te()),ee.setMode(F.LINES)):ee.setMode(F.TRIANGLES);else if(U.isLine){let Tt=V.linewidth;Tt===void 0&&(Tt=1),Et.setLineWidth(Tt*Te()),U.isLineSegments?ee.setMode(F.LINES):U.isLineLoop?ee.setMode(F.LINE_LOOP):ee.setMode(F.LINE_STRIP)}else U.isPoints?ee.setMode(F.POINTS):U.isSprite&&ee.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ee.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))ee.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Tt=U._multiDrawStarts,ai=U._multiDrawCounts,ne=U._multiDrawCount,Un=yt?j.get(yt).bytesPerElement:1,Is=wt.get(V).currentProgram.getUniforms();for(let dn=0;dn<ne;dn++)Is.setValue(F,"_gl_DrawID",dn),ee.render(Tt[dn]/Un,ai[dn])}else if(U.isInstancedMesh)ee.renderInstances(Jt,pe,U.count);else if(B.isInstancedBufferGeometry){const Tt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ai=Math.min(B.instanceCount,Tt);ee.renderInstances(Jt,pe,ai)}else ee.render(Jt,pe)};function se(w,N,B){w.transparent===!0&&w.side===je&&w.forceSinglePass===!1?(w.side=We,w.needsUpdate=!0,Eo(w,N,B),w.side=Ti,w.needsUpdate=!0,Eo(w,N,B),w.side=je):Eo(w,N,B)}this.compile=function(w,N,B=null){B===null&&(B=w),_=Kt.get(B),_.init(N),y.push(_),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),w!==B&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),_.setupLights();const V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let dt=0;dt<et.length;dt++){const xt=et[dt];se(xt,B,U),V.add(xt)}else se(et,B,U),V.add(et)}),y.pop(),_=null,V},this.compileAsync=function(w,N,B=null){const V=this.compile(w,N,B);return new Promise(U=>{function et(){if(V.forEach(function(dt){wt.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){U(w);return}setTimeout(et,10)}Wt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Nn=null;function oi(w){Nn&&Nn(w)}function nu(){es.stop()}function iu(){es.start()}const es=new Zf;es.setAnimationLoop(oi),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(w){Nn=w,W.setAnimationLoop(w),w===null?es.stop():es.start()},W.addEventListener("sessionstart",nu),W.addEventListener("sessionend",iu),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,R),_=Kt.get(w,y.length),_.init(N),y.push(_),Rt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(Rt),St=this.localClippingEnabled,Q=tt.init(this.clippingPlanes,St),g=pt.get(w,x.length),g.init(),x.push(g),W.enabled===!0&&W.isPresenting===!0){const et=v.xr.getDepthSensingMesh();et!==null&&qa(et,N,-1/0,v.sortObjects)}qa(w,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(st,ht),jt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,jt&&At.addToRenderList(g,w),this.info.render.frame++,Q===!0&&tt.beginShadows();const B=_.state.shadowsArray;mt.render(B,w,N),Q===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,U=g.transmissive;if(_.setupLights(),N.isArrayCamera){const et=N.cameras;if(U.length>0)for(let dt=0,xt=et.length;dt<xt;dt++){const yt=et[dt];ru(V,U,w,yt)}jt&&At.render(w);for(let dt=0,xt=et.length;dt<xt;dt++){const yt=et[dt];su(g,w,yt,yt.viewport)}}else U.length>0&&ru(V,U,w,N),jt&&At.render(w),su(g,w,N);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,N),le.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(_=y[y.length-1],Q===!0&&tt.setGlobalState(v.clippingPlanes,_.state.camera)):_=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function qa(w,N,B,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){V&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);const dt=Y.update(w),xt=w.material;xt.visible&&g.push(w,dt,xt,B,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const dt=Y.update(w),xt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Bt.copy(dt.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(xt)){const yt=dt.groups;for(let It=0,Ut=yt.length;It<Ut;It++){const Mt=yt[It],Jt=xt[Mt.materialIndex];Jt&&Jt.visible&&g.push(w,dt,Jt,B,Bt.z,Mt)}}else xt.visible&&g.push(w,dt,xt,B,Bt.z,null)}}const et=w.children;for(let dt=0,xt=et.length;dt<xt;dt++)qa(et[dt],N,B,V)}function su(w,N,B,V){const U=w.opaque,et=w.transmissive,dt=w.transparent;_.setupLightsView(B),Q===!0&&tt.setGlobalState(v.clippingPlanes,B),V&&Et.viewport(I.copy(V)),U.length>0&&wo(U,N,B),et.length>0&&wo(et,N,B),dt.length>0&&wo(dt,N,B),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function ru(w,N,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[V.id]===void 0&&(_.state.transmissionRenderTarget[V.id]=new Mn(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Jn:wi,minFilter:xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const et=_.state.transmissionRenderTarget[V.id],dt=V.viewport||I;et.setSize(dt.z,dt.w);const xt=v.getRenderTarget();v.setRenderTarget(et),v.getClearColor(H),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),jt&&At.render(B);const yt=v.toneMapping;v.toneMapping=Ki;const It=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),_.setupLightsView(V),Q===!0&&tt.setGlobalState(v.clippingPlanes,V),wo(w,B,V),C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Mt=0,Jt=N.length;Mt<Jt;Mt++){const he=N[Mt],pe=he.object,rn=he.geometry,ee=he.material,Tt=he.group;if(ee.side===je&&pe.layers.test(V.layers)){const ai=ee.side;ee.side=We,ee.needsUpdate=!0,ou(pe,B,V,rn,ee,Tt),ee.side=ai,ee.needsUpdate=!0,Ut=!0}}Ut===!0&&(C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et))}v.setRenderTarget(xt),v.setClearColor(H,q),It!==void 0&&(V.viewport=It),v.toneMapping=yt}function wo(w,N,B){const V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,et=w.length;U<et;U++){const dt=w[U],xt=dt.object,yt=dt.geometry,It=V===null?dt.material:V,Ut=dt.group;xt.layers.test(B.layers)&&ou(xt,N,B,yt,It,Ut)}}function ou(w,N,B,V,U,et){w.onBeforeRender(v,N,B,V,U,et),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(v,N,B,V,w,et),U.transparent===!0&&U.side===je&&U.forceSinglePass===!1?(U.side=We,U.needsUpdate=!0,v.renderBufferDirect(B,N,V,U,w,et),U.side=Ti,U.needsUpdate=!0,v.renderBufferDirect(B,N,V,U,w,et),U.side=je):v.renderBufferDirect(B,N,V,U,w,et),w.onAfterRender(v,N,B,V,U,et)}function Eo(w,N,B){N.isScene!==!0&&(N=ve);const V=wt.get(w),U=_.state.lights,et=_.state.shadowsArray,dt=U.state.version,xt=bt.getParameters(w,U.state,et,N,B),yt=bt.getProgramCacheKey(xt);let It=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?k:T).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",Nt),It=new Map,V.programs=It);let Ut=It.get(yt);if(Ut!==void 0){if(V.currentProgram===Ut&&V.lightsStateVersion===dt)return cu(w,xt),Ut}else xt.uniforms=bt.getUniforms(w),w.onBeforeCompile(xt,v),Ut=bt.acquireProgram(xt,yt),It.set(yt,Ut),V.uniforms=xt.uniforms;const Mt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=tt.uniform),cu(w,xt),V.needsLights=Im(w),V.lightsStateVersion=dt,V.needsLights&&(Mt.ambientLightColor.value=U.state.ambient,Mt.lightProbe.value=U.state.probe,Mt.directionalLights.value=U.state.directional,Mt.directionalLightShadows.value=U.state.directionalShadow,Mt.spotLights.value=U.state.spot,Mt.spotLightShadows.value=U.state.spotShadow,Mt.rectAreaLights.value=U.state.rectArea,Mt.ltc_1.value=U.state.rectAreaLTC1,Mt.ltc_2.value=U.state.rectAreaLTC2,Mt.pointLights.value=U.state.point,Mt.pointLightShadows.value=U.state.pointShadow,Mt.hemisphereLights.value=U.state.hemi,Mt.directionalShadowMap.value=U.state.directionalShadowMap,Mt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Mt.spotShadowMap.value=U.state.spotShadowMap,Mt.spotLightMatrix.value=U.state.spotLightMatrix,Mt.spotLightMap.value=U.state.spotLightMap,Mt.pointShadowMap.value=U.state.pointShadowMap,Mt.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Ut,V.uniformsList=null,Ut}function au(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=pa.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function cu(w,N){const B=wt.get(w);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Cm(w,N,B,V,U){N.isScene!==!0&&(N=ve),C.resetTextureUnits();const et=N.fog,dt=V.isMeshStandardMaterial?N.environment:null,xt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:sn,yt=(V.isMeshStandardMaterial?k:T).get(V.envMap||dt),It=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Mt=!!B.morphAttributes.position,Jt=!!B.morphAttributes.normal,he=!!B.morphAttributes.color;let pe=Ki;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(pe=v.toneMapping);const rn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=rn!==void 0?rn.length:0,Tt=wt.get(V),ai=_.state.lights;if(Q===!0&&(St===!0||w!==S)){const wn=w===S&&V.id===M;tt.setState(V,w,wn)}let ne=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==ai.state.version||Tt.outputColorSpace!==xt||U.isBatchedMesh&&Tt.batching===!1||!U.isBatchedMesh&&Tt.batching===!0||U.isBatchedMesh&&Tt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Tt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Tt.instancing===!1||!U.isInstancedMesh&&Tt.instancing===!0||U.isSkinnedMesh&&Tt.skinning===!1||!U.isSkinnedMesh&&Tt.skinning===!0||U.isInstancedMesh&&Tt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Tt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Tt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Tt.instancingMorph===!1&&U.morphTexture!==null||Tt.envMap!==yt||V.fog===!0&&Tt.fog!==et||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==tt.numPlanes||Tt.numIntersection!==tt.numIntersection)||Tt.vertexAlphas!==It||Tt.vertexTangents!==Ut||Tt.morphTargets!==Mt||Tt.morphNormals!==Jt||Tt.morphColors!==he||Tt.toneMapping!==pe||Tt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Tt.__version=V.version);let Un=Tt.currentProgram;ne===!0&&(Un=Eo(V,N,U));let Is=!1,dn=!1,Lr=!1;const me=Un.getUniforms(),Wn=Tt.uniforms;if(Et.useProgram(Un.program)&&(Is=!0,dn=!0,Lr=!0),V.id!==M&&(M=V.id,dn=!0),Is||S!==w){Et.buffers.depth.getReversed()?(ct.copy(w.projectionMatrix),D0(ct),N0(ct),me.setValue(F,"projectionMatrix",ct)):me.setValue(F,"projectionMatrix",w.projectionMatrix),me.setValue(F,"viewMatrix",w.matrixWorldInverse);const Pi=me.map.cameraPosition;Pi!==void 0&&Pi.setValue(F,Dt.setFromMatrixPosition(w.matrixWorld)),Xt.logarithmicDepthBuffer&&me.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&me.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,dn=!0,Lr=!0)}if(U.isSkinnedMesh){me.setOptional(F,U,"bindMatrix"),me.setOptional(F,U,"bindMatrixInverse");const wn=U.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),me.setValue(F,"boneTexture",wn.boneTexture,C))}U.isBatchedMesh&&(me.setOptional(F,U,"batchingTexture"),me.setValue(F,"batchingTexture",U._matricesTexture,C),me.setOptional(F,U,"batchingIdTexture"),me.setValue(F,"batchingIdTexture",U._indirectTexture,C),me.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&me.setValue(F,"batchingColorTexture",U._colorsTexture,C));const Dr=B.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&Pt.update(U,B,Un),(dn||Tt.receiveShadow!==U.receiveShadow)&&(Tt.receiveShadow=U.receiveShadow,me.setValue(F,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Wn.envMap.value=yt,Wn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Wn.envMapIntensity.value=N.environmentIntensity),dn&&(me.setValue(F,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&Pm(Wn,Lr),et&&V.fog===!0&&lt.refreshFogUniforms(Wn,et),lt.refreshMaterialUniforms(Wn,V,G,$,_.state.transmissionRenderTarget[w.id]),pa.upload(F,au(Tt),Wn,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pa.upload(F,au(Tt),Wn,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&me.setValue(F,"center",U.center),me.setValue(F,"modelViewMatrix",U.modelViewMatrix),me.setValue(F,"normalMatrix",U.normalMatrix),me.setValue(F,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const wn=V.uniformsGroups;for(let Pi=0,Ii=wn.length;Pi<Ii;Pi++){const lu=wn[Pi];L.update(lu,Un),L.bind(lu,Un)}}return Un}function Pm(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Im(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,N,B){wt.get(w.texture).__webglTexture=N,wt.get(w.depthTexture).__webglTexture=B;const V=wt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const B=wt.get(w);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,B=0){R=w,b=N,E=B;let V=!0,U=null,et=!1,dt=!1;if(w){const yt=wt.get(w);if(yt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(yt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(yt.__hasExternalTextures)C.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Mt=w.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&wt.has(Mt)&&(w.width!==Mt.image.width||w.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(dt=!0);const Ut=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[N])?U=Ut[N][B]:U=Ut[N],et=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?U=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?U=Ut[B]:U=Ut,I.copy(w.viewport),D.copy(w.scissor),O=w.scissorTest}else I.copy(vt).multiplyScalar(G).floor(),D.copy(Ct).multiplyScalar(G).floor(),O=te;if(Et.bindFramebuffer(F.FRAMEBUFFER,U)&&V&&Et.drawBuffers(w,U),Et.viewport(I),Et.scissor(D),Et.setScissorTest(O),et){const yt=wt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,B)}else if(dt){const yt=wt.get(w.texture),It=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,yt.__webglTexture,B||0,It)}M=-1},this.readRenderTargetPixels=function(w,N,B,V,U,et,dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){Et.bindFramebuffer(F.FRAMEBUFFER,xt);try{const yt=w.texture,It=yt.format,Ut=yt.type;if(!Xt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&B>=0&&B<=w.height-U&&F.readPixels(N,B,V,U,Ft.convert(It),Ft.convert(Ut),et)}finally{const yt=R!==null?wt.get(R).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(w,N,B,V,U,et,dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){const yt=w.texture,It=yt.format,Ut=yt.type;if(!Xt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&B>=0&&B<=w.height-U){Et.bindFramebuffer(F.FRAMEBUFFER,xt);const Mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.bufferData(F.PIXEL_PACK_BUFFER,et.byteLength,F.STREAM_READ),F.readPixels(N,B,V,U,Ft.convert(It),Ft.convert(Ut),0);const Jt=R!==null?wt.get(R).__webglFramebuffer:null;Et.bindFramebuffer(F.FRAMEBUFFER,Jt);const he=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await L0(F,he,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,et),F.deleteBuffer(Mt),F.deleteSync(he),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,B=0){w.isTexture!==!0&&(Yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-B),U=Math.floor(w.image.width*V),et=Math.floor(w.image.height*V),dt=N!==null?N.x:0,xt=N!==null?N.y:0;C.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,dt,xt,U,et),Et.unbindTexture()},this.copyTextureToTexture=function(w,N,B=null,V=null,U=0){w.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,B=null);let et,dt,xt,yt,It,Ut,Mt,Jt,he;const pe=w.isCompressedTexture?w.mipmaps[U]:w.image;B!==null?(et=B.max.x-B.min.x,dt=B.max.y-B.min.y,xt=B.isBox3?B.max.z-B.min.z:1,yt=B.min.x,It=B.min.y,Ut=B.isBox3?B.min.z:0):(et=pe.width,dt=pe.height,xt=pe.depth||1,yt=0,It=0,Ut=0),V!==null?(Mt=V.x,Jt=V.y,he=V.z):(Mt=0,Jt=0,he=0);const rn=Ft.convert(N.format),ee=Ft.convert(N.type);let Tt;N.isData3DTexture?(C.setTexture3D(N,0),Tt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),Tt=F.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),Tt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const ai=F.getParameter(F.UNPACK_ROW_LENGTH),ne=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Un=F.getParameter(F.UNPACK_SKIP_PIXELS),Is=F.getParameter(F.UNPACK_SKIP_ROWS),dn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,pe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yt),F.pixelStorei(F.UNPACK_SKIP_ROWS,It),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ut);const Lr=w.isDataArrayTexture||w.isData3DTexture,me=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Wn=wt.get(w),Dr=wt.get(N),wn=wt.get(Wn.__renderTarget),Pi=wt.get(Dr.__renderTarget);Et.bindFramebuffer(F.READ_FRAMEBUFFER,wn.__webglFramebuffer),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Ii=0;Ii<xt;Ii++)Lr&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,U,Ut+Ii),w.isDepthTexture?(me&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.get(N).__webglTexture,U,he+Ii),F.blitFramebuffer(yt,It,et,dt,Mt,Jt,et,dt,F.DEPTH_BUFFER_BIT,F.NEAREST)):me?F.copyTexSubImage3D(Tt,U,Mt,Jt,he+Ii,yt,It,et,dt):F.copyTexSubImage2D(Tt,U,Mt,Jt,he+Ii,yt,It,et,dt);Et.bindFramebuffer(F.READ_FRAMEBUFFER,null),Et.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else me?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Tt,U,Mt,Jt,he,et,dt,xt,rn,ee,pe.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Tt,U,Mt,Jt,he,et,dt,xt,rn,pe.data):F.texSubImage3D(Tt,U,Mt,Jt,he,et,dt,xt,rn,ee,pe):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,Mt,Jt,et,dt,rn,ee,pe.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,Mt,Jt,pe.width,pe.height,rn,pe.data):F.texSubImage2D(F.TEXTURE_2D,U,Mt,Jt,et,dt,rn,ee,pe);F.pixelStorei(F.UNPACK_ROW_LENGTH,ai),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ne),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Un),F.pixelStorei(F.UNPACK_SKIP_ROWS,Is),F.pixelStorei(F.UNPACK_SKIP_IMAGES,dn),U===0&&N.generateMipmaps&&F.generateMipmap(Tt),Et.unbindTexture()},this.copyTextureToTexture3D=function(w,N,B=null,V=null,U=0){return w.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0),Yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,B,V,U)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Et.unbindTexture()},this.resetState=function(){b=0,E=0,R=null,Et.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}}class Sh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(t),this.density=e}clone(){return new Sh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new at(t),this.near=e,this.far=n}clone(){return new Mo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ci extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gy{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ul,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new P;class bh{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new bh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ad=new P,cd=new Qt,ld=new Qt,Wy=new P,hd=new Lt,Yo=new P,Mc=new ni,ud=new Lt,Sc=new La;class Xy extends Z{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fu,this.bindMatrix=new Lt,this.bindMatrixInverse=new Lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ei),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yo),this.boundingBox.expandByPoint(Yo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yo),this.boundingSphere.expandByPoint(Yo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mc.copy(this.boundingSphere),Mc.applyMatrix4(i),t.ray.intersectsSphere(Mc)!==!1&&(ud.copy(i).invert(),Sc.copy(t.ray).applyMatrix4(ud),!(this.boundingBox!==null&&Sc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Sc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Qt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===e0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;cd.fromBufferAttribute(i.attributes.skinIndex,t),ld.fromBufferAttribute(i.attributes.skinWeight,t),ad.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=ld.getComponent(s);if(o!==0){const a=cd.getComponent(s);hd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Wy.copy(ad).applyMatrix4(hd),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class sp extends ge{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rp extends be{constructor(t=null,e=1,n=1,i,s,o,a,c,l=nn,h=nn,u,f){super(null,o,a,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dd=new Lt,qy=new Lt;class Th{constructor(t=[],e=[]){this.uuid=Hn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Lt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Lt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:qy;dd.multiplyMatrices(a,e[s]),dd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Th(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new rp(e,t,t,Cn,Vn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new sp),this.bones.push(o),this.boneInverses.push(new Lt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class kl extends De{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qs=new Lt,fd=new Lt,jo=[],pd=new ei,Yy=new Lt,kr=new Z,Br=new ni;class wh extends Z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Yy)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),pd.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(pd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Br.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),t.ray.intersectsSphere(Br)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,qs),fd.multiplyMatrices(n,qs),kr.matrixWorld=fd,kr.raycast(t,jo);for(let o=0,a=jo.length;o<a;o++){const c=jo[o];c.instanceId=s,c.object=this,e.push(c)}jo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new kl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rp(new Float32Array(i*this.count),i,this.count,dh,Vn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class op extends Zn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ma=new P,Sa=new P,md=new Lt,zr=new La,Ko=new ni,bc=new P,gd=new P;class Eh extends ge{constructor(t=new Ee,e=new op){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ma.fromBufferAttribute(e,i-1),Sa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ma.distanceTo(Sa);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(i),Ko.radius+=s,t.ray.intersectsSphere(Ko)===!1)return;md.copy(i).invert(),zr.copy(t.ray).applyMatrix4(md);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=d,g=p-1;m<g;m+=l){const _=h.getX(m),x=h.getX(m+1),y=$o(this,t,zr,c,_,x);y&&e.push(y)}if(this.isLineLoop){const m=h.getX(p-1),g=h.getX(d),_=$o(this,t,zr,c,m,g);_&&e.push(_)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let m=d,g=p-1;m<g;m+=l){const _=$o(this,t,zr,c,m,m+1);_&&e.push(_)}if(this.isLineLoop){const m=$o(this,t,zr,c,p-1,d);m&&e.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $o(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(Ma.fromBufferAttribute(o,i),Sa.fromBufferAttribute(o,s),e.distanceSqToSegment(Ma,Sa,bc,gd)>n)return;bc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(bc);if(!(c<t.near||c>t.far))return{distance:c,point:gd.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const _d=new P,vd=new P;class jy extends Eh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)_d.fromBufferAttribute(e,i),vd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_d.distanceTo(vd);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ky extends Eh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ah extends Zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xd=new Lt,Bl=new La,Jo=new ni,Zo=new P;class Rh extends ge{constructor(t=new Ee,e=new Ah){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=s,t.ray.intersectsSphere(Jo)===!1)return;xd.copy(i).invert(),Bl.copy(t.ray).applyMatrix4(xd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,m=d;p<m;p++){const g=l.getX(p);Zo.fromBufferAttribute(u,g),yd(Zo,g,c,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,m=d;p<m;p++)Zo.fromBufferAttribute(u,p),yd(Zo,p,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yd(r,t,e,n,i,s,o){const a=Bl.distanceSqToPoint(r);if(a<e){const c=new P;Bl.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class $y extends be{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new it:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],s=[],o=[],a=new P,c=new Lt;for(let d=0;d<=t;d++){const p=d/t;i[d]=this.getTangentAt(p,new P)}s[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Ie(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Ie(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(c.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ch extends ii{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new it){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Jy extends Ch{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ph(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let f=(o-s)/l-(a-s)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Qo=new P,Tc=new Ph,wc=new Ph,Ec=new Ph;class ap extends ii{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Qo.subVectors(i[0],i[1]).add(i[0]),l=Qo);const u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Qo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),p<1e-4&&(p=m),g<1e-4&&(g=m),Tc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,m,g),wc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,m,g),Ec.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,m,g)}else this.curveType==="catmullrom"&&(Tc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),wc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ec.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Tc.calc(c),wc.calc(c),Ec.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Md(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function Zy(r,t){const e=1-r;return e*e*t}function Qy(r,t){return 2*(1-r)*r*t}function tM(r,t){return r*r*t}function Qr(r,t,e,n){return Zy(r,t)+Qy(r,e)+tM(r,n)}function eM(r,t){const e=1-r;return e*e*e*t}function nM(r,t){const e=1-r;return 3*e*e*r*t}function iM(r,t){return 3*(1-r)*r*r*t}function sM(r,t){return r*r*r*t}function to(r,t,e,n,i){return eM(r,t)+nM(r,e)+iM(r,n)+sM(r,i)}class cp extends ii{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(to(t,i.x,s.x,o.x,a.x),to(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rM extends ii{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(to(t,i.x,s.x,o.x,a.x),to(t,i.y,s.y,o.y,a.y),to(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lp extends ii{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oM extends ii{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hp extends ii{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Qr(t,i.x,s.x,o.x),Qr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class up extends ii{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Qr(t,i.x,s.x,o.x),Qr(t,i.y,s.y,o.y),Qr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dp extends ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Md(a,c.x,l.x,h.x,u.x),Md(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new it().fromArray(i))}return this}}var zl=Object.freeze({__proto__:null,ArcCurve:Jy,CatmullRomCurve3:ap,CubicBezierCurve:cp,CubicBezierCurve3:rM,EllipseCurve:Ch,LineCurve:lp,LineCurve3:oM,QuadraticBezierCurve:hp,QuadraticBezierCurve3:up,SplineCurve:dp});class aM extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new zl[i.type]().fromJSON(i))}return this}}class cM extends aM{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new lp(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new hp(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new cp(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new dp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){const l=new Ch(t,e,n,i,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ih extends Ee{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ie(i,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/e,u=new P,f=new it,d=new P,p=new P,m=new P;let g=0,_=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,_=t[x+1].y-t[x].y,d.x=_*1,d.y=-g,d.z=_*0,m.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(m.x,m.y,m.z);break;default:g=t[x+1].x-t[x].x,_=t[x+1].y-t[x].y,d.x=_*1,d.y=-g,d.z=_*0,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),c.push(d.x,d.y,d.z),m.copy(p)}for(let x=0;x<=e;x++){const y=n+x*h*i,v=Math.sin(y),A=Math.cos(y);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*v,u.y=t[b].y,u.z=t[b].x*A,o.push(u.x,u.y,u.z),f.x=x/e,f.y=b/(t.length-1),a.push(f.x,f.y);const E=c[3*b+0]*v,R=c[3*b+1],M=c[3*b+0]*A;l.push(E,R,M)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const v=y+x*t.length,A=v,b=v+t.length,E=v+t.length+1,R=v+1;s.push(A,b,R),s.push(E,R,b)}this.setIndex(s),this.setAttribute("position",new Gt(o,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ih(t.points,t.segments,t.phiStart,t.phiLength)}}class eo extends Ih{constructor(t=1,e=1,n=4,i=8){const s=new cM;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new eo(t.radius,t.length,t.capSegments,t.radialSegments)}}class bi extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new P,h=new it;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yt extends Ee{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let p=0;const m=[],g=n/2;let _=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function x(){const v=new P,A=new P;let b=0;const E=(e-t)/n;for(let R=0;R<=s;R++){const M=[],S=R/s,I=S*(e-t)+t;for(let D=0;D<=i;D++){const O=D/i,H=O*c+a,q=Math.sin(H),z=Math.cos(H);A.x=I*q,A.y=-S*n+g,A.z=I*z,u.push(A.x,A.y,A.z),v.set(q,E,z).normalize(),f.push(v.x,v.y,v.z),d.push(O,1-S),M.push(p++)}m.push(M)}for(let R=0;R<i;R++)for(let M=0;M<s;M++){const S=m[M][R],I=m[M+1][R],D=m[M+1][R+1],O=m[M][R+1];(t>0||M!==0)&&(h.push(S,I,O),b+=3),(e>0||M!==s-1)&&(h.push(I,D,O),b+=3)}l.addGroup(_,b,0),_+=b}function y(v){const A=p,b=new it,E=new P;let R=0;const M=v===!0?t:e,S=v===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),p++;const I=p;for(let D=0;D<=i;D++){const H=D/i*c+a,q=Math.cos(H),z=Math.sin(H);E.x=M*z,E.y=g*S,E.z=M*q,u.push(E.x,E.y,E.z),f.push(0,S,0),b.x=q*.5+.5,b.y=z*.5*S+.5,d.push(b.x,b.y),p++}for(let D=0;D<i;D++){const O=A+D,H=I+D;v===!0?h.push(H,H+1,O):h.push(H+1,H,O),R+=3}l.addGroup(_,R,v===!0?1:2),_+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vi extends Yt{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Vi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ua extends Ee{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Gt(s,3)),this.setAttribute("normal",new Gt(s.slice(),3)),this.setAttribute("uv",new Gt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new P,v=new P,A=new P;for(let b=0;b<e.length;b+=3)d(e[b+0],y),d(e[b+1],v),d(e[b+2],A),c(y,v,A,x)}function c(x,y,v,A){const b=A+1,E=[];for(let R=0;R<=b;R++){E[R]=[];const M=x.clone().lerp(v,R/b),S=y.clone().lerp(v,R/b),I=b-R;for(let D=0;D<=I;D++)D===0&&R===b?E[R][D]=M:E[R][D]=M.clone().lerp(S,D/I)}for(let R=0;R<b;R++)for(let M=0;M<2*(b-R)-1;M++){const S=Math.floor(M/2);M%2===0?(f(E[R][S+1]),f(E[R+1][S]),f(E[R][S])):(f(E[R][S+1]),f(E[R+1][S+1]),f(E[R+1][S]))}}function l(x){const y=new P;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const x=new P;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const v=g(x)/2/Math.PI+.5,A=_(x)/Math.PI+.5;o.push(v,1-A)}p(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],A=o[x+4],b=Math.max(y,v,A),E=Math.min(y,v,A);b>.9&&E<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function p(){const x=new P,y=new P,v=new P,A=new P,b=new it,E=new it,R=new it;for(let M=0,S=0;M<s.length;M+=9,S+=6){x.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),b.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),A.copy(x).add(y).add(v).divideScalar(3);const I=g(A);m(b,S+0,x,I),m(E,S+2,y,I),m(R,S+4,v,I)}}function m(x,y,v,A){A<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=A/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function _(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.vertices,t.indices,t.radius,t.details)}}class fo extends Ua{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fo(t.radius,t.detail)}}class Oa extends Ee{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,d=new P,p=new it;for(let m=0;m<=i;m++){for(let g=0;g<=n;g++){const _=s+g/n*o;d.x=u*Math.cos(_),d.y=u*Math.sin(_),c.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let m=0;m<i;m++){const g=m*(n+1);for(let _=0;_<n;_++){const x=_+g,y=x,v=x+n+1,A=x+n+2,b=x+1;a.push(y,v,b),a.push(v,A,b)}}this.setIndex(a),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Re extends Ee{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,f=new P,d=[],p=[],m=[],g=[];for(let _=0;_<=n;_++){const x=[],y=_/n;let v=0;_===0&&o===0?v=.5/e:_===n&&c===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const b=A/e;u.x=-t*Math.cos(i+b*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+b*s)*Math.sin(o+y*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),g.push(b+v,1-y),x.push(l++)}h.push(x)}for(let _=0;_<n;_++)for(let x=0;x<e;x++){const y=h[_][x+1],v=h[_][x],A=h[_+1][x],b=h[_+1][x+1];(_!==0||o>0)&&d.push(y,v,b),(_!==n-1||c<Math.PI)&&d.push(v,A,b)}this.setIndex(d),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(m,3)),this.setAttribute("uv",new Gt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Lh extends Ua{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lh(t.radius,t.detail)}}class _n extends Ee{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const m=p/i*s,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(m),u.y=(t+e*Math.cos(g))*Math.sin(m),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(p/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const m=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,_=(i+1)*(d-1)+p,x=(i+1)*d+p;o.push(m,g,x),o.push(g,_,x)}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Dh extends Ee{constructor(t=new up(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new it;let h=new P;const u=[],f=[],d=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function m(){for(let y=0;y<e;y++)g(y);g(s===!1?e:0),x(),_()}function g(y){h=t.getPointAt(y/e,h);const v=o.normals[y],A=o.binormals[y];for(let b=0;b<=i;b++){const E=b/i*Math.PI*2,R=Math.sin(E),M=-Math.cos(E);c.x=M*v.x+R*A.x,c.y=M*v.y+R*A.y,c.z=M*v.z+R*A.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function _(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){const A=(i+1)*(y-1)+(v-1),b=(i+1)*y+(v-1),E=(i+1)*y+v,R=(i+1)*(y-1)+v;p.push(A,b,R),p.push(b,E,R)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)l.x=y/e,l.y=v/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Dh(new zl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class lM extends Ve{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class _t extends Zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class si extends _t{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function ta(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function hM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function uM(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Sd(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let c=0;c!==t;++c)i[o++]=r[a+c]}return i}function fp(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class So{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dM extends So{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$s,endingEnd:$s}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Js:s=t,a=2*e-n;break;case xa:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Js:o=t,c=2*n-e;break;case xa:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),m=p*p,g=m*p,_=-f*g+2*f*m-f*p,x=(1+f)*g+(-1.5-2*f)*m+(-.5+f)*p+1,y=(-1-d)*g+(1.5+d)*m+.5*p,v=d*g-d*m;for(let A=0;A!==a;++A)s[A]=_*o[h+A]+x*o[l+A]+y*o[c+A]+v*o[u+A];return s}}class pp extends So{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*u+o[c+f]*h;return s}}class fM extends So{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class ri{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ta(e,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ta(t.times,Array),values:ta(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fM(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dM(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case co:e=this.InterpolantFactoryMethodDiscrete;break;case lo:e=this.InterpolantFactoryMethodLinear;break;case Ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&hM(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ya,s=t.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const m=e[u+p];if(m!==e[f+p]||m!==e[d+p]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=lo;class Ar extends ri{constructor(t,e,n){super(t,e,n)}}Ar.prototype.ValueTypeName="bool";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=co;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class mp extends ri{}mp.prototype.ValueTypeName="color";class _r extends ri{}_r.prototype.ValueTypeName="number";class pM extends So{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Ln.slerpFlat(s,0,o,l-a,o,l,c);return s}}class vr extends ri{InterpolantFactoryMethodLinear(t){return new pM(this.times,this.values,this.getValueSize(),t)}}vr.prototype.ValueTypeName="quaternion";vr.prototype.InterpolantFactoryMethodSmooth=void 0;class Rr extends ri{constructor(t,e,n){super(t,e,n)}}Rr.prototype.ValueTypeName="string";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=co;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class xr extends ri{}xr.prototype.ValueTypeName="vector";class Vl{constructor(t="",e=-1,n=[],i=vh){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(gM(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(ri.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=uM(c);c=Sd(c,1,h),l=Sd(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new _r(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,p,m){if(d.length!==0){const g=[],_=[];fp(d,g,_,p),g.length!==0&&m.push(new u(f,g,_))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let m=0;m<f[p].morphTargets.length;m++)d[f[p].morphTargets[m]]=-1;for(const m in d){const g=[],_=[];for(let x=0;x!==f[p].morphTargets.length;++x){const y=f[p];g.push(y.time),_.push(y.morphTarget===m?1:0)}i.push(new _r(".morphTargetInfluence["+m+"]",g,_))}c=d.length*o}else{const d=".bones["+e[u].name+"]";n(xr,d+".position",f,"pos",i),n(vr,d+".quaternion",f,"rot",i),n(xr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _r;case"vector":case"vector2":case"vector3":case"vector4":return xr;case"color":return mp;case"quaternion":return vr;case"bool":case"boolean":return Ar;case"string":return Rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function gM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=mM(r.type);if(r.times===void 0){const e=[],n=[];fp(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Wi={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class _M{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}}const vM=new _M;class Cr{constructor(t){this.manager=t!==void 0?t:vM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Cr.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi={};class xM extends Error{constructor(t,e){super(t),this.response=e}}class gp extends Cr{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Wi.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(fi[t]!==void 0){fi[t].push({onLoad:e,onProgress:n,onError:i});return}fi[t]=[],fi[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=fi[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let m=0;const g=new ReadableStream({start(_){x();function x(){u.read().then(({done:y,value:v})=>{if(y)_.close();else{m+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:p,loaded:m,total:d});for(let b=0,E=h.length;b<E;b++){const R=h[b];R.onProgress&&R.onProgress(A)}_.enqueue(v),x()}},y=>{_.error(y)})}}});return new Response(g)}else throw new xM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Wi.add(t,l);const h=fi[t];delete fi[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=fi[t];if(h===void 0)throw this.manager.itemError(t),l;delete fi[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class yM extends Cr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Wi.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=ho("img");function c(){h(),Wi.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class _p extends Cr{constructor(t){super(t)}load(t,e,n,i){const s=new be,o=new yM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Fa extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new at(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Pr extends Fa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ac=new Lt,bd=new P,Td=new P;class Nh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bd.setFromMatrixPosition(t.matrixWorld),e.position.copy(bd),Td.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Td),e.updateMatrixWorld(),Ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class MM extends Nh{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=mr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class ir extends Fa{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new MM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const wd=new Lt,Vr=new P,Rc=new P;class SM extends Nh{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vr),Rc.copy(n.position),Rc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Rc),n.updateMatrixWorld(),i.makeTranslation(-Vr.x,-Vr.y,-Vr.z),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd)}}class Es extends Fa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new SM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bM extends Nh{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sr extends Fa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new bM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class no{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class TM extends Cr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Wi.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),s.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wi.add(t,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Wi.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Wi.add(t,c),s.manager.itemStart(t)}}class vp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ed(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ed();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ed(){return performance.now()}class wM{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Ln.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;Ln.multiplyQuaternionsFlat(t,o,t,e,t,n),Ln.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Uh="\\[\\]\\.:\\/",EM=new RegExp("["+Uh+"]","g"),Oh="[^"+Uh+"]",AM="[^"+Uh.replace("\\.","")+"]",RM=/((?:WC+[\/:])*)/.source.replace("WC",Oh),CM=/(WCOD+)?/.source.replace("WCOD",AM),PM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),IM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),LM=new RegExp("^"+RM+CM+PM+IM+"$"),DM=["material","materials","bones","map"];class NM{constructor(t,e,n){const i=n||ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ie{constructor(t,e,n){this.path=e,this.parsedPath=n||ie.parseTrackName(e),this.node=ie.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ie.Composite(t,e,n):new ie(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(EM,"")}static parseTrackName(t){const e=LM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);DM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ie.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ie.Composite=NM;ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ie.prototype.GetterByBindingType=[ie.prototype._getValue_direct,ie.prototype._getValue_array,ie.prototype._getValue_arrayElement,ie.prototype._getValue_toArray];ie.prototype.SetterByBindingTypeAndVersioning=[[ie.prototype._setValue_direct,ie.prototype._setValue_direct_setNeedsUpdate,ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_array,ie.prototype._setValue_array_setNeedsUpdate,ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_arrayElement,ie.prototype._setValue_arrayElement_setNeedsUpdate,ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_fromArray,ie.prototype._setValue_fromArray_setNeedsUpdate,ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class UM{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),c={endingStart:$s,endingEnd:$s};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=_h,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const c=(t-s)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case i0:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case vh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===n0;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===gh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Js,i.endingEnd=Js):(t?i.endingStart=this.zeroSlopeAtStart?Js:$s:i.endingStart=xa,e?i.endingEnd=this.zeroSlopeAtEnd?Js:$s:i.endingEnd=xa)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=e,a[1]=s+t,c[1]=n,this}}const OM=new Float32Array(1);class xp extends Cs{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const f=i[u],d=f.name;let p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,d));continue}const m=e&&e._propertyBindings[u].binding.parsedPath;p=new wM(ie.create(n,d,m),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new pp(new Float32Array(2),new Float32Array(2),1,OM),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?Vl.findByName(i,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=vh),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new UM(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?Vl.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);const yp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ir{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const FM=new Da(-1,1,1,-1,0,1);class kM extends Ee{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const BM=new kM;class Fh{constructor(t){this._mesh=new Z(BM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,FM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Mp extends Ir{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=uo.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Fh(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ad extends Ir{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class zM extends Ir{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class VM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new Mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mp(yp),this.copyPass.material.blending=Mi,this.clock=new vp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ad!==void 0&&(o instanceof Ad?n=!0:o instanceof zM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class HM extends Ir{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const GM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class yr extends Ir{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new at(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Mn(s,o,{type:Jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Mn(s,o,{type:Jn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Mn(s,o,{type:Jn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=GM;this.highPassUniforms=uo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new it(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=yp;this.copyUniforms=uo.clone(h.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:lr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new at,this.oldClearAlpha=1,this.basic=new ze,this.fsQuad=new Fh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new it(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=yr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=yr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}yr.BlurDirectionX=new it(1,0);yr.BlurDirectionY=new it(0,1);const WM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class XM extends Ir{constructor(){super();const t=WM;this.uniforms=uo.clone(t.uniforms),this.material=new lM({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Fh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Vt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Tf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ch?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ef?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Af&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class qM extends Ci{constructor(){super();const t=new $t;t.deleteAttribute("uv");const e=new _t({side:We}),n=new _t,i=new Es(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Z(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Z(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Z(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Z(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Z(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Z(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Z(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new Z(t,Ys(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new Z(t,Ys(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const p=new Z(t,Ys(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const m=new Z(t,Ys(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);const g=new Z(t,Ys(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const _=new Z(t,Ys(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ys(r){const t=new ze;return t.color.setScalar(r),t}const js={tint:"#ffffff",lift:"#000000",saturation:1,contrast:1,vignette:.35,grain:.035},YM={uniforms:{tDiffuse:{value:null},tint:{value:new at("#ffffff")},lift:{value:new at("#000000")},saturation:{value:1},contrast:{value:1},vignette:{value:.35},grain:{value:.035},aberration:{value:0},time:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec3 tint;
    uniform vec3 lift;
    uniform float saturation;
    uniform float contrast;
    uniform float vignette;
    uniform float grain;
    uniform float aberration;
    uniform float time;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 dir = vUv - 0.5;
      vec2 off = dir * aberration * 0.008;
      vec3 c = vec3(
        texture2D(tDiffuse, vUv + off).r,
        texture2D(tDiffuse, vUv).g,
        texture2D(tDiffuse, vUv - off).b
      );
      float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
      c = mix(vec3(l), c, saturation);
      c = (c - 0.5) * contrast + 0.5;
      c = c * tint + lift * (1.0 - l);
      c *= 1.0 - vignette * smoothstep(0.25, 0.85, length(dir) * 1.25);
      c += (hash(vUv * 1000.0 + time) - 0.5) * grain;
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
    }`};class jM extends Mp{constructor(){super(YM),this.grade={tint:new at,lift:new at,saturation:1,contrast:1,vignette:.35,grain:.035},this.aberration=0,this.reset()}reset(){this.grade.tint.set(js.tint),this.grade.lift.set(js.lift),this.grade.saturation=js.saturation,this.grade.contrast=js.contrast,this.grade.vignette=js.vignette,this.grade.grain=js.grain,this.aberration=0}set(t){const{tint:e,lift:n,...i}=t;e&&this.grade.tint.set(e),n&&this.grade.lift.set(n),Object.assign(this.grade,i)}tick(t,e){this.aberration=Math.max(0,this.aberration-t*2.5);const n=this.uniforms;n.tint.value.copy(this.grade.tint),n.lift.value.copy(this.grade.lift),n.saturation.value=this.grade.saturation,n.contrast.value=this.grade.contrast,n.vignette.value=this.grade.vignette,n.grain.value=this.grade.grain,n.aberration.value=Math.min(1,this.aberration+e*.8),n.time.value=(n.time.value+t)%100}}const Cc="https://start.ng",KM=4e3,Rd={id:"guest",username:"guest",displayName:"Guest",isGuest:!0};function Hl(r){return r.trim().replace(/^@/,"").replace(/[^\w.-]/g,"").slice(0,24)}function Sp(){return/\.start\.(ng|localhost)$/.test(window.location.hostname)}async function bp(){if(!Sp())return null;const r=document.createElement("iframe");r.src=`${Cc}/connect`,r.title="start.ng connection",r.style.display="none";const t=`whoami-${Date.now()}`;try{const n=(await new Promise(s=>{const o=window.setTimeout(()=>a(null),KM);function a(l){window.clearTimeout(o),window.removeEventListener("message",c),s(l)}function c(l){l.origin!==Cc||l.data?.requestId!==t||l.data?.type!=="startng:user"||a(l.data)}window.addEventListener("message",c),r.addEventListener("load",()=>r.contentWindow?.postMessage({type:"startng:whoami",requestId:t},Cc)),r.addEventListener("error",()=>a(null)),document.body.appendChild(r)}))?.user;if(!n||typeof n.name!="string"||!n.name.trim())return null;const i=n.name.trim().slice(0,24);return{id:String(n.id??i),username:Hl(i)||i,displayName:i,platformStyle:n.style&&typeof n.style=="object"?n.style:void 0}}finally{r.remove()}}function Tp(){const r=new URLSearchParams(window.location.search),t=Hl(r.get("user")??"");if(!t)return null;const e=Hl(r.get("track")??"")||void 0;return{id:`test-${t}`,username:t,displayName:t,track:e}}async function $M(){try{const r=Tp()??await bp()??null;return r?.username?r:Rd}catch(r){return console.warn("[getUser] falling back to guest",r),Rd}}const JM=15e3;function ZM(r,t){if(!Sp()||r.isGuest||Tp())return()=>{};let e=JSON.stringify(r),n=!1;const i=async()=>{if(!(n||document.hidden)){n=!0;try{const a=await bp(),c=a&&JSON.stringify(a);a&&c!==e&&(e=c,t(a))}catch{}finally{n=!1}}},s=()=>void i();document.addEventListener("visibilitychange",s),window.addEventListener("focus",s);const o=window.setInterval(s,JM);return()=>{document.removeEventListener("visibilitychange",s),window.removeEventListener("focus",s),window.clearInterval(o)}}const QM=["#26406b","#3b5537","#6a2c3b","#454c58","#7a5729","#245f63","#4f3570","#1d1f26"],tS=["#ff6b35","#00e5ff","#ffd23f","#7cff6b","#ff3f8e","#b388ff","#ff9f1c","#4de8c8"],eS=["#00e5ff","#ff3d71","#ffd600","#69f0ae","#e040fb","#ff9100"],nS=["Kestrel","Mamba","Baobab","Gazelle","Duiker","Hornbill","Jackal","Kob","Pangolin","Marula","Sahel","Oryx","Civet","Serval","Waterbuck","Roan"];function wp(r,t=0){let e=3735928559^t,n=1103547991^t;for(let i=0;i<r.length;i++){const s=r.charCodeAt(i);e=Math.imul(e^s,2654435761),n=Math.imul(n^s,1597334677)}return e=Math.imul(e^e>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(e^e>>>13,3266489909),4294967296*(2097151&n)+(e>>>0)}const iS=["light","heavy","utility"],sS={frontend:"light",backend:"heavy",devops:"utility"};function Hi(r,t){return r[t%r.length]}const Gl=/^#[0-9a-f]{6}$/i;function Cd(r){const t=r.username.toLowerCase(),e=o=>wp(t,o),n=r.platformStyle,i=n?.secondaryColor&&Gl.test(n.secondaryColor)?n.secondaryColor:null,s=n?.primaryColor&&Gl.test(n.primaryColor)?n.primaryColor:null;return{codename:`Agent ${Hi(nS,e(5))}-${e(6)%9+1}`,suitColor:i??Hi(QM,e(1)),accentColor:s??Hi(tS,e(2)),visorTint:Hi(eS,e(3)),maskPattern:e(4)%8,suitVariant:sS[r.track?.toLowerCase()??""]??Hi(iS,e(7))}}const rS=["#5c3a21","#8d5524","#a0662f","#c68642","#e0ac69","#f1c27d"],oS=["#17120f","#4a2c1a","#8b5a2b","#d9a441","#b8b8b8","#c0392b"],aS=["#ff6b6b","#1dd1a1","#a55eea","#4b7bec","#f7b731","#fd9644","#eb3b5a","#292a23"],cS=["#2b2f4a","#222f3e","#3d3d3d","#4b6584","#5f3dc4","#0c6e5a"],lS={female:["braids","bun","ponytail","afro","short"],male:["short","afro","dreads","bald"]};function Pd(r){const t=r.platformStyle??{},e=s=>wp(r.username.toLowerCase(),100+s),n=t.body==="female"||t.body==="male"?t.body:Hi(["female","male"],e(1)),i=(s,o,a)=>s&&Gl.test(s)?s:Hi(o,e(a));return{body:n,skinColor:i(t.skinColor,rS,2),hairColor:i(t.hairColor,oS,3),primaryColor:i(t.primaryColor,aS,4),secondaryColor:i(t.secondaryColor,cS,5),hair:t.hair??Hi(lS[n],e(6)),hat:t.hat??"none",accessory:t.accessory??"none"}}const ka=[{codename:"Agent Harmattan-2",suitColor:"#454c58",accentColor:"#ff9f1c",maskPattern:3,visorTint:"#ff9100",suitVariant:"heavy"},{codename:"Agent Ibis-5",suitColor:"#3b5537",accentColor:"#4de8c8",maskPattern:6,visorTint:"#69f0ae",suitVariant:"utility"}],hS={codename:"Vault Guard",suitColor:"#2a2d33",accentColor:"#ff3b30",maskPattern:5,visorTint:"#ff3b30",suitVariant:"heavy"},Id={Space:"action",KeyC:"camera",Escape:"skip",Enter:"skip",NumpadEnter:"skip",KeyM:"mute",KeyF:"torch",ShiftLeft:"drift",ShiftRight:"drift"},uS=260,dS={KeyA:"jinkLeft",ArrowLeft:"jinkLeft",KeyD:"jinkRight",ArrowRight:"jinkRight"},fS=new Set(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);class pS{constructor(){this.held=new Set,this.fired=new Set,this.lastTap=new Map,this.onKeyDown=t=>{fS.has(t.code)&&t.preventDefault(),this.held.add(t.code);const e=Id[t.code];e&&!t.repeat&&this.fired.add(e);const n=dS[t.code];if(n&&!t.repeat){const i=performance.now();i-(this.lastTap.get(n)??-1e9)<uS?(this.fired.add(n),this.lastTap.delete(n)):this.lastTap.set(n,i)}},this.onKeyUp=t=>this.held.delete(t.code),this.onBlur=()=>this.held.clear(),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur)}axis(){const t=this.held;let e=0,n=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(e-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(e+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(n+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(n-=1);const i=Math.hypot(e,n);return i>1?{x:e/i,y:n/i}:{x:e,y:n}}isDown(t){for(const e of this.held)if(Id[e]===t)return!0;return!1}pressed(t){return this.fired.has(t)}trigger(t){this.fired.add(t)}endFrame(){this.fired.clear()}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur)}}const Ld=.8;class mS{constructor(){this.muted=!1,this.ctx=null,this.master=null,this.noiseBuffer=null,this.loops=new Map,this.engine=null}unlock(){if(!this.ctx){const t=new AudioContext,e=t.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4;const n=t.createGain();n.gain.value=this.muted?0:Ld,n.connect(e).connect(t.destination);const i=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=i.getChannelData(0);for(let o=0;o<s.length;o++)s[o]=Math.random()*2-1;this.ctx=t,this.master=n,this.noiseBuffer=i}this.ctx.state==="suspended"&&this.ctx.resume()}setSuspended(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}shutdown(){this.stopAll(),this.ctx?.close(),this.ctx=null,this.master=null}toggleMute(){return this.muted=!this.muted,this.ctx&&this.master&&this.master.gain.setTargetAtTime(this.muted?0:Ld,this.ctx.currentTime,.05),this.muted}play(t,e=1){const n=this.ctx;if(!n)return;const i=n.currentTime;switch(t){case"click":this.tone(1600,.05,{type:"triangle",vol:.08*e}),this.tone(120,.12,{vol:.25*e,to:70});break;case"lock":this.tone(90,.25,{vol:.6*e,to:50}),this.tone(660,.12,{vol:.2*e}),this.tone(990,.2,{vol:.2*e,at:i+.09});break;case"miss":this.tone(220,.25,{type:"triangle",vol:.15*e,to:150});break;case"spotted":this.tone(220,.8,{vol:.1*e,attack:.02}),this.tone(233,.8,{vol:.1*e,attack:.02}),this.tone(65,.5,{vol:.45*e,to:38});break;case"beep":this.tone(990,.14,{vol:.04*e,attack:.01});break;case"impact":this.noise(.4,{vol:.8*e,type:"lowpass",freq:700,to:120}),this.tone(70,.45,{vol:.9*e,to:30});break;case"glass":this.noise(.7,{vol:.5*e,type:"highpass",freq:2500});for(let s=0;s<6;s++)this.tone(2400+Math.random()*3200,.25+Math.random()*.3,{vol:.05*e,at:i+Math.random()*.25});break;case"roar":this.tone(95,1.8,{type:"sawtooth",vol:.35*e,to:48,attack:.15,filter:700}),this.tone(142,1.6,{type:"sawtooth",vol:.2*e,to:70,attack:.2,filter:500}),this.noise(1.6,{vol:.35*e,type:"bandpass",freq:420,to:180,q:1.5,attack:.2});break;case"whoosh":this.noise(.8,{vol:.4*e,type:"bandpass",freq:300,to:2400,q:2,attack:.35});break;case"boom":this.tone(55,1.6,{vol:e,to:24}),this.noise(1.3,{vol:.6*e,type:"lowpass",freq:400,to:60});break;case"success":[523.3,659.3,784,1046.5].forEach((s,o)=>this.tone(s,.35,{vol:.12*e,at:i+o*.09}));break;case"splash":this.noise(.9,{vol:.5*e,type:"lowpass",freq:3e3,to:400,attack:.02});break;case"skid":this.noise(.35,{vol:.18*e,type:"bandpass",freq:1400,to:900,q:3});break;case"kick":this.noise(.6,{vol:.6*e,type:"lowpass",freq:2200,to:300});for(let s=0;s<5;s++)this.tone(300+Math.random()*500,.06,{type:"triangle",vol:.06*e,at:i+.05+Math.random()*.3});break;case"boost":this.noise(.9,{vol:.35*e,type:"bandpass",freq:400,to:3e3,q:1.5,attack:.05}),this.tone(80,.6,{type:"sawtooth",vol:.15*e,to:160,filter:700});break;case"trumpet":this.tone(320,.9,{type:"sawtooth",vol:.2*e,to:620,attack:.08,filter:1800}),this.tone(323,.9,{type:"sawtooth",vol:.12*e,to:610,attack:.08,filter:1600});break}}startLoop(t){!this.ctx||!this.master||this.loops.has(t)||this.loops.set(t,this.buildLoop(t,this.ctx,this.master))}stopLoop(t){this.loops.get(t)?.(),this.loops.delete(t)}stopAll(){for(const t of this.loops.values())t();this.loops.clear()}setEngine(t){const e=this.ctx,n=this.engine;if(!e||!n)return;const i=e.currentTime;n.oscs[0].frequency.setTargetAtTime(38+t*46,i,.1),n.oscs[1].frequency.setTargetAtTime(76+t*92,i,.1),n.filter.frequency.setTargetAtTime(260+t*600,i,.1)}tone(t,e,n={}){const i=this.ctx;if(!i||!this.master)return;const s=n.at??i.currentTime,o=i.createOscillator();o.type=n.type??"sine",o.frequency.setValueAtTime(t,s),n.to&&o.frequency.exponentialRampToValueAtTime(n.to,s+e);const a=i.createGain();a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(Math.max(n.vol??.3,2e-4),s+(n.attack??.005)),a.gain.exponentialRampToValueAtTime(1e-4,s+e);let c=o;if(n.filter){const l=i.createBiquadFilter();l.type="lowpass",l.frequency.value=n.filter,o.connect(l),c=l}c.connect(a).connect(n.dest??this.master),o.start(s),o.stop(s+e+.05)}noise(t,e={}){const n=this.ctx;if(!n||!this.master||!this.noiseBuffer)return;const i=e.at??n.currentTime,s=n.createBufferSource();s.buffer=this.noiseBuffer;const o=n.createBiquadFilter();o.type=e.type??"lowpass",o.frequency.setValueAtTime(e.freq??1e3,i),e.to&&o.frequency.exponentialRampToValueAtTime(e.to,i+t),o.Q.value=e.q??.7;const a=n.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(Math.max(e.vol??.3,2e-4),i+(e.attack??.005)),a.gain.exponentialRampToValueAtTime(1e-4,i+t),s.connect(o).connect(a).connect(e.dest??this.master),s.start(i,Math.random()*1.5),s.stop(i+t+.05)}buildLoop(t,e,n){const i=e.createGain();i.gain.setValueAtTime(0,e.currentTime),i.gain.setTargetAtTime(1,e.currentTime,.4),i.connect(n);const s=[],o=[],a=(h,u,f,d)=>{const p=e.createOscillator();p.type=u,p.frequency.value=h;const m=e.createBiquadFilter();m.type="lowpass",m.frequency.value=d;const g=e.createGain();return g.gain.value=f,p.connect(m).connect(g).connect(i),p.start(),s.push(p),{osc:p,filter:m}},c=(h,u,f)=>{const d=e.createBufferSource();d.buffer=this.noiseBuffer,d.loop=!0;const p=e.createBiquadFilter();p.type=u,p.frequency.value=f;const m=e.createGain();m.gain.value=h,d.connect(p).connect(m).connect(i),d.start(),s.push(d)},l=(h,u)=>{u(e.currentTime+.05),o.push(window.setInterval(()=>u(e.currentTime+.05),h))};switch(t){case"ambience":c(.05,"lowpass",380),a(110,"sine",.03,2e3),a(164.8,"sine",.02,2e3),a(220.5,"triangle",.012,1200),l(1300,h=>{if(!(Math.random()>.6))for(let u=0;u<3;u++)this.tone(4300+Math.random()*400,.03,{vol:.025,at:h+u*.07,dest:i})});break;case"tension":{const h=e.createGain();h.gain.value=.7,h.connect(i);const u=e.createOscillator();u.frequency.value=.12;const f=e.createGain();f.gain.value=.3,u.connect(f).connect(h.gain),u.start(),s.push(u);for(const[d,p]of[[55,.06],[82.4,.035],[110.5,.015]]){const m=e.createOscillator();m.frequency.value=d;const g=e.createGain();g.gain.value=p,m.connect(g).connect(h),m.start(),s.push(m)}c(.012,"bandpass",500),l(1300,d=>{this.tone(52,.22,{vol:.22,to:38,at:d,dest:i}),this.tone(48,.22,{vol:.13,to:36,at:d+.26,dest:i})}),l(7e3,d=>{Math.random()<.6&&this.tone(620+Math.random()*200,2.5,{type:"triangle",vol:.015,attack:.01,at:d,dest:i})});break}case"action":{a(110,"sawtooth",.025,500);const h=[55,55,82.4,55,65.4,55,73.4,49];let u=0;l(200,f=>{const d=u++%16;d%2===0?this.tone(140,.16,{vol:.55,to:45,at:f,dest:i}):this.noise(.04,{vol:.07,type:"highpass",freq:7e3,at:f,dest:i}),(d===4||d===12)&&this.noise(.14,{vol:.18,type:"bandpass",freq:1800,q:.8,at:f,dest:i}),this.tone(h[d%8],.18,{type:"sawtooth",vol:.14,filter:520,at:f,dest:i})});break}case"alarm":{const h=a(720,"square",.035,1800),u=e.createOscillator();u.frequency.value=1.1;const f=e.createGain();f.gain.value=260,u.connect(f).connect(h.osc.frequency),u.start(),s.push(u);break}case"engine":{const h=a(40,"sawtooth",.09,300),u=a(80,"square",.025,400);this.engine={oscs:[h.osc,u.osc],filter:h.filter};break}case"credits":{const h=[[220,261.6,329.6],[174.6,220,261.6],[261.6,329.6,392],[196,246.9,293.7]];let u=0;l(4e3,f=>{const d=h[u++%h.length];d.forEach(p=>this.tone(p,4.4,{vol:.05,attack:1.2,at:f,dest:i})),this.tone(d[0]/2,4.4,{type:"triangle",vol:.07,attack:.8,at:f,dest:i})});break}}return()=>{const h=e.currentTime;i.gain.cancelScheduledValues(h),i.gain.setTargetAtTime(0,h,.15),o.forEach(u=>window.clearInterval(u)),t==="engine"&&(this.engine=null),window.setTimeout(()=>{s.forEach(u=>{try{u.stop()}catch{}}),i.disconnect()},900)}}}function mi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ep(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Mr={duration:.5,overwrite:!1,delay:0},kh,$e,_e,Pn=1e8,de=1/Pn,Wl=Math.PI*2,gS=Wl/4,_S=0,Ap=Math.sqrt,vS=Math.cos,xS=Math.sin,He=function(t){return typeof t=="string"},Se=function(t){return typeof t=="function"},Ei=function(t){return typeof t=="number"},Bh=function(t){return typeof t>"u"},ti=function(t){return typeof t=="object"},an=function(t){return t!==!1},zh=function(){return typeof window<"u"},ea=function(t){return Se(t)||He(t)},Rp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Je=Array.isArray,Xl=/(?:-?\.?\d|\.)+/gi,Cp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pp=/[+-]=-?[.\d]+/,Ip=/[^,'"\[\]\s]+/gi,yS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xe,qn,ql,Vh,bn={},ba={},Lp,Dp=function(t){return(ba=As(t,bn))&&un},Hh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},po=function(t,e){return!e&&console.warn(t)},Np=function(t,e){return t&&(bn[t]=e)&&ba&&(ba[t]=e)||bn},mo=function(){return 0},MS={suppressEvents:!0,isStart:!0,kill:!1},ma={suppressEvents:!0,kill:!1},SS={suppressEvents:!0},Gh={},$i=[],Yl={},Up,gn={},Ic={},Dd=30,ga=[],Wh="",Xh=function(t){var e=t[0],n,i;if(ti(e)||Se(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ga.length;i--&&!ga[i].targetTest(e););n=ga[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new rm(t[i],n)))||t.splice(i,1);return t},ys=function(t){return t._gsap||Xh(In(t))[0]._gsap},Op=function(t,e,n){return(n=t[e])&&Se(n)?t[e]():Bh(n)&&t.getAttribute&&t.getAttribute(e)||n},cn=function(t,e){return(t=t.split(",")).forEach(e)||t},we=function(t){return Math.round(t*1e5)/1e5||0},Be=function(t){return Math.round(t*1e7)/1e7||0},rr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},bS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ta=function(){var t=$i.length,e=$i.slice(0),n,i;for(Yl={},$i.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Fp=function(t,e,n,i){$i.length&&!$e&&Ta(),t.render(e,n,$e&&e<0&&(t._initted||t._startAt)),$i.length&&!$e&&Ta()},kp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ip).length<2?e:He(t)?t.trim():t},Bp=function(t){return t},Dn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},TS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},As=function(t,e){for(var n in e)t[n]=e[n];return t},Nd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ti(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},wa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},io=function(t){var e=t.parent||xe,n=t.keyframes?TS(Je(t.keyframes)):Dn;if(an(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},wS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},zp=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Ba=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Zi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ms=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ES=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},jl=function(t,e,n,i){return t._startAt&&($e?t._startAt.revert(ma):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},AS=function r(t){return!t||t._ts&&r(t.parent)},Ud=function(t){return t._repeat?Sr(t._tTime,t=t.duration()+t._rDelay)*t:0},Sr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ea=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},za=function(t){return t._end=Be(t._start+(t._tDur/Math.abs(t._ts||t._rts||de)||0))},Va=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),za(t),n._dirty||Ms(n,t)),t},Vp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Ea(t.rawTime(),e),(!e._dur||bo(0,e.totalDuration(),n)-e._tTime>de)&&e.render(n,!0)),Ms(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-de}},jn=function(t,e,n,i){return e.parent&&Zi(e),e._start=Be((Ei(n)?n:n||t!==xe?An(t,n,e):t._time)+e._delay),e._end=Be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),zp(t,e,"_first","_last",t._sort?"_start":0),Kl(e)||(t._recent=e),i||Vp(t,e),t._ts<0&&Va(t,t._tTime),t},Hp=function(t,e){return(bn.ScrollTrigger||Hh("scrollTrigger",e))&&bn.ScrollTrigger.create(e,t)},Gp=function(t,e,n,i,s){if(Yh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!$e&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Up!==vn.frame)return $i.push(t),t._lazy=[s,i],1},RS=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Kl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},CS=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&RS(t)&&!(!t._initted&&Kl(t))||(t._ts<0||t._dp._ts<0)&&!Kl(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=bo(0,t._tDur,e),h=Sr(c,a),t._yoyo&&h&1&&(o=1-o),h!==Sr(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||$e||i||t._zTime===de||!e&&t._zTime){if(!t._initted&&Gp(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?de:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=c,l=t._pt;l;)l.r(o,l.d),l=l._next;e<0&&jl(t,e,n,!0),t._onUpdate&&!n&&yn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&yn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Zi(t,1),!n&&!$e&&(yn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},PS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},br=function(t,e,n,i){var s=t._repeat,o=Be(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Be(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Va(t,t._tTime=t._tDur*a),t.parent&&za(t),n||Ms(t.parent,t),t},Od=function(t){return t instanceof en?Ms(t):br(t,t._dur)},IS={_start:0,endTime:mo,totalDuration:mo},An=function r(t,e,n){var i=t.labels,s=t._recent||IS,o=t.duration()>=Pn?s.endTime(!1):t._dur,a,c,l;return He(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(Je(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+c:o+c)):e==null?o:+e},so=function(t,e,n){var i=Ei(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,c;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=an(c.vars.inherit)&&c.parent;o.immediateRender=an(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ce(e[0],o,e[s+1])},ts=function(t,e){return t||t===0?e(t):e},bo=function(t,e,n){return n<t?t:n>e?e:n},Ke=function(t,e){return!He(t)||!(e=yS.exec(t))?"":e[1]},LS=function(t,e,n){return ts(n,function(i){return bo(t,e,i)})},$l=[].slice,Wp=function(t,e){return t&&ti(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ti(t[0]))&&!t.nodeType&&t!==qn},DS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return He(i)&&!e||Wp(i,1)?(s=n).push.apply(s,In(i)):n.push(i)})||n},In=function(t,e,n){return _e&&!e&&_e.selector?_e.selector(t):He(t)&&!n&&(ql||!Tr())?$l.call((e||Vh).querySelectorAll(t),0):Je(t)?DS(t,n):Wp(t)?$l.call(t,0):t?[t]:[]},Jl=function(t){return t=In(t)[0]||po("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return In(e,n.querySelectorAll?n:n===t?po("Invalid scope")||Vh.createElement("div"):t)}},Xp=function(t){return t.sort(function(){return .5-Math.random()})},qp=function(t){if(Se(t))return t;var e=ti(t)?t:{each:t},n=Ss(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return He(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(f,d,p){var m=(p||e).length,g=o[m],_,x,y,v,A,b,E,R,M;if(!g){if(M=e.grid==="auto"?0:(e.grid||[1,Pn])[1],!M){for(E=-Pn;E<(E=p[M++].getBoundingClientRect().left)&&M<m;);M<m&&M--}for(g=o[m]=[],_=c?Math.min(M,m)*h-.5:i%M,x=M===Pn?0:c?m*u/M-.5:i/M|0,E=0,R=Pn,b=0;b<m;b++)y=b%M-_,v=x-(b/M|0),g[b]=A=l?Math.abs(l==="y"?v:y):Ap(y*y+v*v),A>E&&(E=A),A<R&&(R=A);i==="random"&&Xp(g),g.max=E-R,g.min=R,g.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(M>m?m-1:l?l==="y"?m/M:M:Math.max(M,m/M))||0)*(i==="edges"?-1:1),g.b=m<0?s-m:s,g.u=Ke(e.amount||e.each)||0,n=n&&m<0?nm(n):n}return m=(g[f]-g.min)/g.max||0,Be(g.b+(n?n(m):m)*g.v)+g.u}},Zl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ei(n)?0:Ke(n))}},Yp=function(t,e){var n=Je(t),i,s;return!n&&ti(t)&&(i=n=t.radius||Pn,t.values?(t=In(t.values),(s=!Ei(t[0]))&&(i*=i)):t=Zl(t.increment)),ts(e,n?Se(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=Pn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-a,d=t[u].y-c,f=f*f+d*d):f=Math.abs(t[u]-a),f<l&&(l=f,h=u);return h=!i||l<=i?t[h]:o,s||h===o||Ei(o)?h:h+Ke(o)}:Zl(t))},jp=function(t,e,n,i){return ts(Je(t)?!e:n===!0?!!(n=0):!i,function(){return Je(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},NS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},US=function(t,e){return function(n){return t(parseFloat(n))+(e||Ke(n))}},OS=function(t,e,n){return $p(t,e,0,1,n)},Kp=function(t,e,n){return ts(n,function(i){return t[~~e(i)]})},FS=function r(t,e,n){var i=e-t;return Je(t)?Kp(t,r(0,t.length),e):ts(n,function(s){return(i+(s-t)%i)%i+t})},kS=function r(t,e,n){var i=e-t,s=i*2;return Je(t)?Kp(t,r(0,t.length-1),e):ts(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},go=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Ip:Xl),n+=t.substr(e,i-e)+jp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},$p=function(t,e,n,i,s){var o=e-t,a=i-n;return ts(s,function(c){return n+((c-t)/o*a||0)})},BS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=He(t),a={},c,l,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Je(t)&&!Je(e)){for(h=[],u=t.length,f=u-2,l=1;l<u;l++)h.push(r(t[l-1],t[l]));u--,s=function(p){p*=u;var m=Math.min(f,~~p);return h[m](p-m)},n=e}else i||(t=As(Je(t)?[]:{},t));if(!h){for(c in e)qh.call(a,t,c,"get",e[c]);s=function(p){return $h(p,a)||(o?t.p:t)}}}return ts(n,s)},Fd=function(t,e,n){var i=t.labels,s=Pn,o,a,c;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},yn=function(t,e,n){var i=t.vars,s=i[e],o=_e,a=t._ctx,c,l,h;if(s)return c=i[e+"Params"],l=i.callbackScope||t,n&&$i.length&&Ta(),a&&(_e=a),h=c?s.apply(l,c):s.call(l),_e=o,h},Kr=function(t){return Zi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!$e),t.progress()<1&&yn(t,"onInterrupt"),t},tr,Jp=[],Zp=function(t){if(t)if(t=!t.name&&t.default||t,zh()||t.headless){var e=t.name,n=Se(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:mo,render:$h,add:qh,kill:e1,modifier:t1,rawVars:0},o={targetTest:0,get:0,getSetter:Kh,aliases:{},register:0};if(Tr(),t!==i){if(gn[e])return;Dn(i,Dn(wa(t,s),o)),As(i.prototype,As(s,wa(t,o))),gn[i.prop=e]=i,t.targetTest&&(ga.push(i),Gh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Np(e,i),t.register&&t.register(un,i,ln)}else Jp.push(t)},ce=255,$r={aqua:[0,ce,ce],lime:[0,ce,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ce],navy:[0,0,128],white:[ce,ce,ce],olive:[128,128,0],yellow:[ce,ce,0],orange:[ce,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ce,0,0],pink:[ce,192,203],cyan:[0,ce,ce],transparent:[ce,ce,ce,0]},Lc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ce+.5|0},Qp=function(t,e,n){var i=t?Ei(t)?[t>>16,t>>8&ce,t&ce]:0:$r.black,s,o,a,c,l,h,u,f,d,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),$r[t])i=$r[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ce,i&ce,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ce,t&ce]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Xl),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(l+1):h+l-h*l,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Lc(c+1/3,s,o),i[1]=Lc(c,s,o),i[2]=Lc(c-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Cp),n&&i.length<4&&(i[3]=1),i}else i=t.match(Xl)||$r.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/ce,o=i[1]/ce,a=i[2]/ce,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?c=l=0:(d=u-f,l=h>.5?d/(2-u-f):d/(u+f),c=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},tm=function(t){var e=[],n=[],i=-1;return t.split(Ji).forEach(function(s){var o=s.match(Qs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},kd=function(t,e,n){var i="",s=(t+i).match(Ji),o=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!s)return t;if(s=s.map(function(f){return(f=Qp(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=tm(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(Ji,"1").split(Qs),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=t.split(Ji),u=l.length-1;a<u;a++)i+=l[a]+s[a];return i+l[u]},Ji=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in $r)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),zS=/hsl[a]?\(/,em=function(t){var e=t.join(" "),n;if(Ji.lastIndex=0,Ji.test(e))return n=zS.test(e),t[1]=kd(t[1],n),t[0]=kd(t[0],n,tm(t[1])),!0},_o,vn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],c,l,h,u,f,d,p=function m(g){var _=r()-i,x=g===!0,y,v,A,b;if((_>t||_<0)&&(n+=_-e),i+=_,A=i-n,y=A-o,(y>0||x)&&(b=++u.frame,f=A-u.time*1e3,u.time=A=A/1e3,o+=y+(y>=s?4:s-y),v=1),x||(c=l(m)),v)for(d=0;d<a.length;d++)a[d](A,f,b,g)};return u={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){Lp&&(!ql&&zh()&&(qn=ql=window,Vh=qn.document||{},bn.gsap=un,(qn.gsapVersions||(qn.gsapVersions=[])).push(un.version),Dp(ba||qn.GreenSockGlobals||!qn.gsap&&qn||{}),Jp.forEach(Zp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(g){return setTimeout(g,o-u.time*1e3+1|0)},_o=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),_o=0,l=mo},lagSmoothing:function(g,_){t=g||1/0,e=Math.min(_||33,t)},fps:function(g){s=1e3/(g||240),o=u.time*1e3+s},add:function(g,_,x){var y=_?function(v,A,b,E){g(v,A,b,E),u.remove(y)}:g;return u.remove(g),a[x?"unshift":"push"](y),Tr(),y},remove:function(g,_){~(_=a.indexOf(g))&&a.splice(_,1)&&d>=_&&d--},_listeners:a},u}(),Tr=function(){return!_o&&vn.wake()},Ht={},VS=/^[\d.\-M][\d.\-,\s]/,HS=/["']/g,GS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(HS,"").trim():+l,i=c.substr(a+1).trim();return e},WS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},XS=function(t){var e=(t+"").split("("),n=Ht[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[GS(e[1])]:WS(t).split(",").map(kp)):Ht._CE&&VS.test(t)?Ht._CE("",t):n},nm=function(t){return function(e){return 1-t(1-e)}},im=function r(t,e){for(var n=t._first,i;n;)n instanceof en?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ss=function(t,e){return t&&(Se(t)?t:Ht[t]||XS(t))||e},Ps=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return cn(t,function(a){Ht[a]=bn[a]=s,Ht[o=a.toLowerCase()]=n;for(var c in s)Ht[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ht[a+"."+c]=s[c]}),s},sm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Dc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Wl*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*xS((h-o)*s)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:sm(a);return s=Wl/s,c.config=function(l,h){return r(t,l,h)},c},Nc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:sm(n);return i.config=function(s){return r(t,s)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ps(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ht.Linear.easeNone=Ht.none=Ht.Linear.easeIn;Ps("Elastic",Dc("in"),Dc("out"),Dc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Ps("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ps("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Ps("Circ",function(r){return-(Ap(1-r*r)-1)});Ps("Sine",function(r){return r===1?1:-vS(r*gS)+1});Ps("Back",Nc("in"),Nc("out"),Nc());Ht.SteppedEase=Ht.steps=bn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-de;return function(a){return((i*bo(0,o,a)|0)+s)*n}}};Mr.ease=Ht["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Wh+=r+","+r+"Params,"});var rm=function(t,e){this.id=_S++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Op,this.set=e?e.getSetter:Kh},vo=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,br(this,+e.duration,1,1),this.data=e.data,_e&&(this._ctx=_e,_e.data.push(this)),_o||vn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,br(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Tr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Va(this,n),!s._dp||s.parent||Vp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&jn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===de||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ud(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ud(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Sr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-de?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ea(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-de?0:this._rts,this.totalTime(bo(-Math.abs(this._delay),this._tDur,s),i!==!1),za(this),ES(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Tr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==de&&(this._tTime-=de)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&jn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(an(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ea(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=SS);var i=$e;return $e=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),$e=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Od(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Od(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(An(this,n),an(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,an(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-de:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-de,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-de)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Se(n)?n:Bp,a=function(){var l=i.then;i.then=null,Se(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=l),s(o),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Kr(this)},r}();Dn(vo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-de,_prom:0,_ps:!1,_rts:1});var en=function(r){Ep(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=an(n.sortChildren),xe&&jn(n.parent||xe,mi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Hp(mi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return so(0,arguments,this),this},e.from=function(i,s,o){return so(1,arguments,this),this},e.fromTo=function(i,s,o,a){return so(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,io(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ce(i,s,An(this,o),1),this},e.call=function(i,s,o){return jn(this,Ce.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,c,l,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=h,o.parent=this,new Ce(i,o,An(this,c)),this},e.staggerFrom=function(i,s,o,a,c,l,h){return o.runBackwards=1,io(o).immediateRender=an(o.immediateRender),this.staggerTo(i,s,o,a,c,l,h)},e.staggerFromTo=function(i,s,o,a,c,l,h,u){return a.startAt=o,io(a).immediateRender=an(a.immediateRender),this.staggerTo(i,s,a,c,l,h,u)},e.render=function(i,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Be(i),u=this._zTime<0!=i<0&&(this._initted||!l),f,d,p,m,g,_,x,y,v,A,b,E;if(this!==xe&&h>c&&i>=0&&(h=c),h!==this._tTime||o||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),f=h,v=this._start,y=this._ts,_=!y,u&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,g=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(f=Be(h%g),h===c?(m=this._repeat,f=l):(m=~~(h/g),m&&m===h/g&&(f=l,m--),f>l&&(f=l)),A=Sr(this._tTime,g),!a&&this._tTime&&A!==m&&this._tTime-A*g-this._dur<=0&&(A=m),b&&m&1&&(f=l-f,E=1),m!==A&&!this._lock){var R=b&&A&1,M=R===(b&&m&1);if(m<A&&(R=!R),a=R?0:h%l?l:h,this._lock=1,this.render(a||(E?0:Be(m*g)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&yn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,a=R?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;im(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=PS(this,Be(a),Be(f)),x&&(h-=f-(f=x._start))),this._tTime=h,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!m&&(yn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!_){x=0,p&&(h+=this._zTime=-de);break}}d=p}else{d=this._last;for(var S=i<0?i:f;d;){if(p=d._prev,(d._act||S<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||$e&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!_){x=0,p&&(h+=this._zTime=S?-de:de);break}}d=p}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-de)._zTime=f>=a?1:-1,this._ts))return this._start=v,za(this),this.render(i,s,o);this._onUpdate&&!s&&yn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Zi(this,1),!s&&!(i<0&&!a)&&(h||a||!c)&&(yn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Ei(s)||(s=An(this,s,i)),!(i instanceof vo)){if(Je(i))return i.forEach(function(a){return o.add(a,s)}),this;if(He(i))return this.addLabel(i,s);if(Se(i))i=Ce.delayedCall(0,i);else return this}return this!==i?jn(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Pn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Ce?s&&c.push(l):(o&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return He(i)?this.removeLabel(i):Se(i)?this.killTweensOf(i):(Ba(this,i),i===this._recent&&(this._recent=this._last),Ms(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Be(vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=An(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ce.delayedCall(0,s||mo,o);return a.data="isPause",this._hasPause=1,jn(this,a,An(this,i))},e.removePause=function(i){var s=this._first;for(i=An(this,i);s;)s._start===i&&s.data==="isPause"&&Zi(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),c=a.length;c--;)Xi!==a[c]&&a[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=In(i),c=this._first,l=Ei(s),h;c;)c instanceof Ce?bS(c._targets,a)&&(l?(!Xi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(h=c.getTweensOf(a,s)).length&&o.push.apply(o,h),c=c._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=An(o,i),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,d,p=Ce.to(o,Dn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||de,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());p._dur!==g&&br(p,g,0,1).render(p._time,!0,!0),d=1}h&&h.apply(p,u||[])}},s));return f?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Dn({startAt:{time:An(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Fd(this,An(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Fd(this,An(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+de)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,c=this.labels,l;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=i);return Ms(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ms(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,c=Pn,l,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,jn(o,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;br(o,o===xe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(xe._ts&&(Fp(xe,Ea(i,xe)),Up=vn.frame),vn.frame>=Dd){Dd+=Sn.autoSleep||120;var s=xe._first;if((!s||!s._ts)&&Sn.autoSleep&&vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vn.sleep()}}},t}(vo);Dn(en.prototype,{_lock:0,_hasPause:0,_forcing:0});var qS=function(t,e,n,i,s,o,a){var c=new ln(this._pt,t,e,0,1,um,null,s),l=0,h=0,u,f,d,p,m,g,_,x;for(c.b=n,c.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=go(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),f=n.match(Pc)||[];u=Pc.exec(i);)p=u[0],m=i.substring(l,u.index),d?d=(d+1)%5:m.substr(-5)==="rgba("&&(d=1),p!==f[h++]&&(g=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:m||h===1?m:",",s:g,c:p.charAt(1)==="="?rr(g,p)-g:parseFloat(p)-g,m:d&&d<4?Math.round:0},l=Pc.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Pp.test(i)||_)&&(c.e=0),this._pt=c,c},qh=function(t,e,n,i,s,o,a,c,l,h){Se(i)&&(i=i(s||0,t,o));var u=t[e],f=n!=="get"?n:Se(u)?l?t[e.indexOf("set")||!Se(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,d=Se(u)?l?JS:lm:jh,p;if(He(i)&&(~i.indexOf("random(")&&(i=go(i)),i.charAt(1)==="="&&(p=rr(f,i)+(Ke(f)||0),(p||p===0)&&(i=p))),!h||f!==i||Ql)return!isNaN(f*i)&&i!==""?(p=new ln(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?QS:hm,0,d),l&&(p.fp=l),a&&p.modifier(a,this,t),this._pt=p):(!u&&!(e in t)&&Hh(e,i),qS.call(this,t,e,f,i,d,c||Sn.stringFilter,l))},YS=function(t,e,n,i,s){if(Se(t)&&(t=ro(t,s,e,n,i)),!ti(t)||t.style&&t.nodeType||Je(t)||Rp(t))return He(t)?ro(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=ro(t[a],s,e,n,i);return o},om=function(t,e,n,i,s,o){var a,c,l,h;if(gn[t]&&(a=new gn[t]).init(s,a.rawVars?e[t]:YS(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=c=new ln(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==tr))for(l=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)l[a._props[h]]=c;return a},Xi,Ql,Yh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,p=t._dur,m=t._startAt,g=t._targets,_=t.parent,x=_&&_.data==="nested"?_.vars.targets:g,y=t._overwrite==="auto"&&!kh,v=t.timeline,A,b,E,R,M,S,I,D,O,H,q,z,$;if(v&&(!f||!s)&&(s="none"),t._ease=Ss(s,Mr.ease),t._yEase=u?nm(Ss(u===!0?s:u,Mr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(D=g[0]?ys(g[0]).harness:0,z=D&&i[D.prop],A=wa(i,Gh),m&&(m._zTime<0&&m.progress(1),e<0&&h&&a&&!d?m.render(-1,!0):m.revert(h&&p?ma:MS),m._lazy=0),o){if(Zi(t._startAt=Ce.set(g,Dn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!m&&an(c),startAt:null,delay:0,onUpdate:l&&function(){return yn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&($e||!a&&!d)&&t._startAt.revert(ma),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!m){if(e&&(a=!1),E=Dn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&an(c),immediateRender:a,stagger:0,parent:_},A),z&&(E[D.prop]=z),Zi(t._startAt=Ce.set(g,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&($e?t._startAt.revert(ma):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,de,de);else if(!e)return}for(t._pt=t._ptCache=0,c=p&&an(c)||c&&!p,b=0;b<g.length;b++){if(M=g[b],I=M._gsap||Xh(g)[b]._gsap,t._ptLookup[b]=H={},Yl[I.id]&&$i.length&&Ta(),q=x===g?b:x.indexOf(M),D&&(O=new D).init(M,z||A,t,q,x)!==!1&&(t._pt=R=new ln(t._pt,M,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(G){H[G]=R}),O.priority&&(S=1)),!D||z)for(E in A)gn[E]&&(O=om(E,A,t,q,M,x))?O.priority&&(S=1):H[E]=R=qh.call(t,M,E,"get",A[E],q,x,0,i.stringFilter);t._op&&t._op[b]&&t.kill(M,t._op[b]),y&&t._pt&&(Xi=t,xe.killTweensOf(M,H,t.globalTime(e)),$=!t.parent,Xi=0),t._pt&&c&&(Yl[I.id]=1)}S&&dm(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!$,f&&e<=0&&v.render(Pn,!0,!0)},jS=function(t,e,n,i,s,o,a,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Ql=1,t.vars[e]="+=0",Yh(t,a),Ql=0,c?po(e+" not eligible for reset"):1;l.push(h)}for(d=l.length;d--;)u=l[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=we(n)+Ke(u.e)),u.b&&(u.b=h.s+Ke(u.b))},KS=function(t,e){var n=t[0]?ys(t[0]).harness:0,i=n&&n.aliases,s,o,a,c;if(!i)return e;s=As({},e);for(o in i)if(o in s)for(c=i[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},$S=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Je(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ro=function(t,e,n,i,s){return Se(t)?t.call(e,n,i,s):He(t)&&~t.indexOf("random(")?go(t):t},am=Wh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",cm={};cn(am+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return cm[r]=1});var Ce=function(r){Ep(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:io(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,d=c.overwrite,p=c.keyframes,m=c.defaults,g=c.scrollTrigger,_=c.yoyoEase,x=i.parent||xe,y=(Je(n)||Rp(n)?Ei(n[0]):"length"in i)?[n]:In(n),v,A,b,E,R,M,S,I;if(a._targets=y.length?Xh(y):po("GSAP target "+n+" not found. https://gsap.com",!Sn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||ea(l)||ea(h)){if(i=a.vars,v=a.timeline=new en({data:"nested",defaults:m||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=mi(a),v._start=0,f||ea(l)||ea(h)){if(E=y.length,S=f&&qp(f),ti(f))for(R in f)~am.indexOf(R)&&(I||(I={}),I[R]=f[R]);for(A=0;A<E;A++)b=wa(i,cm),b.stagger=0,_&&(b.yoyoEase=_),I&&As(b,I),M=y[A],b.duration=+ro(l,mi(a),A,M,y),b.delay=(+ro(h,mi(a),A,M,y)||0)-a._delay,!f&&E===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),v.to(M,b,S?S(A,M,y):0),v._ease=Ht.none;v.duration()?l=h=0:a.timeline=0}else if(p){io(Dn(v.vars.defaults,{ease:"none"})),v._ease=Ss(p.ease||i.ease||"none");var D=0,O,H,q;if(Je(p))p.forEach(function(z){return v.to(y,z,">")}),v.duration();else{b={};for(R in p)R==="ease"||R==="easeEach"||$S(R,p[R],b,p.easeEach);for(R in b)for(O=b[R].sort(function(z,$){return z.t-$.t}),D=0,A=0;A<O.length;A++)H=O[A],q={ease:H.e,duration:(H.t-(A?O[A-1].t:0))/100*l},q[R]=H.v,v.to(y,q,D),D+=q.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||a.duration(l=v.duration())}else a.timeline=0;return d===!0&&!kh&&(Xi=mi(a),xe.killTweensOf(y),Xi=0),jn(x,mi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!p&&a._start===Be(x._time)&&an(u)&&AS(mi(a))&&x.data!=="nested")&&(a._tTime=-de,a.render(Math.max(0,-h)||0)),g&&Hp(mi(a),g),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-de&&!h?c:i<de?0:i,f,d,p,m,g,_,x,y,v;if(!l)CS(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,y=this.timeline,this._repeat){if(m=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(m*100+i,s,o);if(f=Be(u%m),u===c?(p=this._repeat,f=l):(p=~~(u/m),p&&p===Be(u/m)&&(f=l,p--),f>l&&(f=l)),_=this._yoyo&&p&1,_&&(v=this._yEase,f=l-f),g=Sr(this._tTime,m),f===a&&!o&&this._initted&&p===g)return this._tTime=u,this;p!==g&&(y&&this._yEase&&im(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&this._time!==m&&this._initted&&(this._lock=o=1,this.render(Be(m*p),!0).invalidate()._lock=0))}if(!this._initted){if(Gp(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==g))return this;if(l!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(f/l),this._from&&(this.ratio=x=1-x),f&&!a&&!s&&!p&&(yn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&jl(this,i,s,o),yn(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!s&&this.parent&&yn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&jl(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Zi(this,1),!s&&!(h&&!a)&&(u||a||_)&&(yn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,c){_o||vn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Yh(this,l),h=this._ease(l/this._dur),jS(this,i,s,o,a,h,l,c)?this.resetTo(i,s,o,a,1):(Va(this,0),this.parent||zp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Kr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Xi&&Xi.vars.overwrite!==!0)._first||Kr(this),this.parent&&o!==this.timeline.totalDuration()&&br(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=i?In(i):a,l=this._ptLookup,h=this._pt,u,f,d,p,m,g,_;if((!s||s==="all")&&wS(a,c))return s==="all"&&(this._pt=0),Kr(this);for(u=this._op=this._op||[],s!=="all"&&(He(s)&&(m={},cn(s,function(x){return m[x]=1}),s=m),s=KS(a,s)),_=a.length;_--;)if(~c.indexOf(a[_])){f=l[_],s==="all"?(u[_]=s,p=f,d={}):(d=u[_]=u[_]||{},p=s);for(m in p)g=f&&f[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Ba(this,g,"_pt"),delete f[m]),d!=="all"&&(d[m]=1)}return this._initted&&!this._pt&&h&&Kr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return so(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return so(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return xe.killTweensOf(i,s,o)},t}(vo);Dn(Ce.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(r){Ce[r]=function(){var t=new en,e=$l.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var jh=function(t,e,n){return t[e]=n},lm=function(t,e,n){return t[e](n)},JS=function(t,e,n,i){return t[e](i.fp,n)},ZS=function(t,e,n){return t.setAttribute(e,n)},Kh=function(t,e){return Se(t[e])?lm:Bh(t[e])&&t.setAttribute?ZS:jh},hm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},QS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},um=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},$h=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},t1=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},e1=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ba(this,e,"_pt"):e.dep||(n=1),e=i;return!n},n1=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},dm=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},ln=function(){function r(e,n,i,s,o,a,c,l,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||hm,this.d=c||this,this.set=l||jh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=n1,this.m=n,this.mt=s,this.tween=i},r}();cn(Wh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Gh[r]=1});bn.TweenMax=bn.TweenLite=Ce;bn.TimelineLite=bn.TimelineMax=en;xe=new en({sortChildren:!1,defaults:Mr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Sn.stringFilter=em;var bs=[],_a={},i1=[],Bd=0,s1=0,Uc=function(t){return(_a[t]||i1).map(function(e){return e()})},th=function(){var t=Date.now(),e=[];t-Bd>2&&(Uc("matchMediaInit"),bs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,c,l;for(a in i)o=qn.matchMedia(i[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&e.push(n))}),Uc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Bd=t,Uc("matchMedia"))},fm=function(){function r(e,n){this.selector=n&&Jl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=s1++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Se(n)&&(s=i,i=n,n=Se);var o=this,a=function(){var l=_e,h=o.selector,u;return l&&l!==o&&l.data.push(o),s&&(o.selector=Jl(s)),_e=o,u=i.apply(o,arguments),Se(u)&&o._r.push(u),_e=l,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Se?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},t.ignore=function(n){var i=_e;_e=null,n(this),_e=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ce&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof en?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ce)&&l.revert&&l.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=bs.length;o--;)bs[o].id===this.id&&bs.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),r1=function(){function r(e){this.contexts=[],this.scope=e,_e&&_e.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ti(n)||(n={matches:n});var o=new fm(0,s||this.scope),a=o.conditions={},c,l,h;_e&&!o.selector&&(o.selector=_e.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(l in n)l==="all"?h=1:(c=qn.matchMedia(n[l]),c&&(bs.indexOf(o)<0&&bs.push(o),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(th):c.addEventListener("change",th)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Aa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Zp(i)})},timeline:function(t){return new en(t)},getTweensOf:function(t,e){return xe.getTweensOf(t,e)},getProperty:function(t,e,n,i){He(t)&&(t=In(t)[0]);var s=ys(t||{}).get,o=n?Bp:kp;return n==="native"&&(n=""),t&&(e?o((gn[e]&&gn[e].get||s)(t,e,n,i)):function(a,c,l){return o((gn[a]&&gn[a].get||s)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=In(t),t.length>1){var i=t.map(function(h){return un.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=gn[e],a=ys(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=o?function(h){var u=new o;tr._pt=0,u.init(t,n?h+n:h,tr,0,[t]),u.render(1,u),tr._pt&&$h(1,tr)}:a.set(t,c);return o?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=un.to(t,As((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(c,l,h){return s.resetTo(e,c,l,h)};return o.tween=s,o},isTweening:function(t){return xe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ss(t.ease,Mr.ease)),Nd(Mr,t||{})},config:function(t){return Nd(Sn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!gn[a]&&!bn[a]&&po(e+" effect requires "+a+" plugin.")}),Ic[e]=function(a,c,l){return n(In(a),Dn(c||{},s),l)},o&&(en.prototype[e]=function(a,c,l){return this.add(Ic[e](a,ti(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Ht[t]=Ss(e)},parseEase:function(t,e){return arguments.length?Ss(t,e):Ht},getById:function(t){return xe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new en(t),i,s;for(n.smoothChildTiming=an(t.smoothChildTiming),xe.remove(n),n._dp=0,n._time=n._tTime=xe._time,i=xe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ce&&i.vars.onComplete===i._targets[0]))&&jn(n,i,i._start-i._delay),i=s;return jn(xe,n,0),n},context:function(t,e){return t?new fm(t,e):_e},matchMedia:function(t){return new r1(t)},matchMediaRefresh:function(){return bs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||th()},addEventListener:function(t,e){var n=_a[t]||(_a[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=_a[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:FS,wrapYoyo:kS,distribute:qp,random:jp,snap:Yp,normalize:OS,getUnit:Ke,clamp:LS,splitColor:Qp,toArray:In,selector:Jl,mapRange:$p,pipe:NS,unitize:US,interpolate:BS,shuffle:Xp},install:Dp,effects:Ic,ticker:vn,updateRoot:en.updateRoot,plugins:gn,globalTimeline:xe,core:{PropTween:ln,globals:Np,Tween:Ce,Timeline:en,Animation:vo,getCache:ys,_removeLinkedListItem:Ba,reverting:function(){return $e},context:function(t){return t&&_e&&(_e.data.push(t),t._ctx=_e),_e},suppressOverwrites:function(t){return kh=t}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Aa[r]=Ce[r]});vn.add(en.updateRoot);tr=Aa.to({},{duration:0});var o1=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},a1=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=o1(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Oc=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var c,l;if(He(s)&&(c={},cn(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}a1(a,s)}}}},un=Aa.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,c;this.tween=n;for(o in e)c=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(c||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)$e?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Oc("roundProps",Zl),Oc("modifiers"),Oc("snap",Yp))||Aa;Ce.version=en.version=un.version="3.12.5";Lp=1;zh()&&Tr();Ht.Power0;Ht.Power1;Ht.Power2;Ht.Power3;Ht.Power4;Ht.Linear;Ht.Quad;Ht.Cubic;Ht.Quart;Ht.Quint;Ht.Strong;Ht.Elastic;Ht.Back;Ht.SteppedEase;Ht.Bounce;Ht.Sine;Ht.Expo;Ht.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zd,qi,or,Jh,vs,Vd,Zh,c1=function(){return typeof window<"u"},Ai={},ps=180/Math.PI,ar=Math.PI/180,Ks=Math.atan2,Hd=1e8,Qh=/([A-Z])/g,l1=/(left|right|width|margin|padding|x)/i,h1=/[\s,\(]\S/,Kn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},u1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},d1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},f1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},pm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},mm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},p1=function(t,e,n){return t.style[e]=n},m1=function(t,e,n){return t.style.setProperty(e,n)},g1=function(t,e,n){return t._gsap[e]=n},_1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},v1=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},x1=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ye="transform",hn=ye+"Origin",y1=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Ai&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Kn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=_i(i,a)}):this.tfm[t]=o.x?o[t]:_i(i,t),t===hn&&(this.tfm.zOrigin=o.zOrigin);else return Kn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(ye)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hn,e,"")),t=ye}(s||e)&&this.props.push(t,e,s[t])},gm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},M1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Qh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Zh(),(!s||!s.isStart)&&!n[ye]&&(gm(n),i.zOrigin&&n[hn]&&(n[hn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_m=function(t,e){var n={target:t,props:[],revert:M1,save:y1};return t._gsap||un.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},vm,nh=function(t,e){var n=qi.createElementNS?qi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qi.createElement(t);return n&&n.style?n:qi.createElement(t)},Qn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Qh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,wr(e)||e,1)||""},Gd="O,Moz,ms,Ms,Webkit".split(","),wr=function(t,e,n){var i=e||vs,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Gd[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Gd[o]:"")+t},ih=function(){c1()&&window.document&&(zd=window,qi=zd.document,or=qi.documentElement,vs=nh("div")||{style:{}},nh("div"),ye=wr(ye),hn=ye+"Origin",vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vm=!!wr("perspective"),Zh=un.core.reverting,Jh=1)},Fc=function r(t){var e=nh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(or.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),or.removeChild(e),this.style.cssText=s,o},Wd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},xm=function(t){var e;try{e=t.getBBox()}catch{e=Fc.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Fc||(e=Fc.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Wd(t,["x","cx","x1"])||0,y:+Wd(t,["y","cy","y1"])||0,width:0,height:0}:e},ym=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&xm(t))},Rs=function(t,e){if(e){var n=t.style,i;e in Ai&&e!==hn&&(e=ye),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Qh,"-$1").toLowerCase())):n.removeAttribute(e)}},Yi=function(t,e,n,i,s,o){var a=new ln(t._pt,e,n,0,1,o?mm:pm);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Xd={deg:1,rad:1,turn:1},S1={grid:1,flex:1},Qi=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=vs.style,c=l1.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=i==="px",d=i==="%",p,m,g,_;if(i===o||!s||Xd[i]||Xd[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),_=t.getCTM&&ym(t),(d||o==="%")&&(Ai[e]||~e.indexOf("adius")))return p=_?t.getBBox()[c?"width":"height"]:t[h],we(d?s/p*u:s/100*p);if(a[c?"width":"height"]=u+(f?o:i),m=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,_&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===qi||!m.appendChild)&&(m=qi.body),g=m._gsap,g&&d&&g.width&&c&&g.time===vn.time&&!g.uncache)return we(s/g.width*u);if(d&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,p=t[h],x?t.style[e]=x:Rs(t,e)}else(d||o==="%")&&!S1[Qn(m,"display")]&&(a.position=Qn(t,"position")),m===t&&(a.position="static"),m.appendChild(vs),p=vs[h],m.removeChild(vs),a.position="absolute";return c&&d&&(g=ys(m),g.time=vn.time,g.width=m[h]),we(f?p*s/u:p&&s?u/p*s:0)},_i=function(t,e,n,i){var s;return Jh||ih(),e in Kn&&e!=="transform"&&(e=Kn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ai[e]&&e!=="transform"?(s=yo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ca(Qn(t,hn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ra[e]&&Ra[e](t,e,n)||Qn(t,e)||Op(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qi(t,e,s,n)+n:s},b1=function(t,e,n,i){if(!n||n==="none"){var s=wr(e,t,1),o=s&&Qn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Qn(t,"borderTopColor"))}var a=new ln(this._pt,t.style,e,0,1,um),c=0,l=0,h,u,f,d,p,m,g,_,x,y,v,A;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(m=t.style[e],t.style[e]=i,i=Qn(t,e)||i,m?t.style[e]=m:Rs(t,e)),h=[n,i],em(h),n=h[0],i=h[1],f=n.match(Qs)||[],A=i.match(Qs)||[],A.length){for(;u=Qs.exec(i);)g=u[0],x=i.substring(c,u.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),g!==(m=f[l++]||"")&&(d=parseFloat(m)||0,v=m.substr((d+"").length),g.charAt(1)==="="&&(g=rr(d,g)+v),_=parseFloat(g),y=g.substr((_+"").length),c=Qs.lastIndex-y.length,y||(y=y||Sn.units[e]||v,c===i.length&&(i+=y,a.e+=y)),v!==y&&(d=Qi(t,e,m,y)||0),a._pt={_next:a._pt,p:x||l===1?x:",",s:d,c:_-d,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?mm:pm;return Pp.test(i)&&(a.e=0),this._pt=a,a},qd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},T1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=qd[n]||n,e[1]=qd[i]||i,e.join(" ")},w1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Ai[a]&&(c=1,a=a==="transformOrigin"?hn:ye),Rs(n,a);c&&(Rs(n,ye),o&&(o.svg&&n.removeAttribute("transform"),yo(n,1),o.uncache=1,gm(i)))}},Ra={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new ln(t._pt,e,n,0,0,w1);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},xo=[1,0,0,1,0,0],Mm={},Sm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Yd=function(t){var e=Qn(t,ye);return Sm(e)?xo:e.substr(7).match(Cp).map(we)},tu=function(t,e){var n=t._gsap||ys(t),i=t.style,s=Yd(t),o,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?xo:s):(s===xo&&!t.offsetParent&&t!==or&&!n.svg&&(c=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(l=1,a=t.nextElementSibling,or.appendChild(t)),s=Yd(t),c?i.display=c:Rs(t,"display"),l&&(a?o.insertBefore(t,a):o?o.appendChild(t):or.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sh=function(t,e,n,i,s,o){var a=t._gsap,c=s||tu(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=c[0],p=c[1],m=c[2],g=c[3],_=c[4],x=c[5],y=e.split(" "),v=parseFloat(y[0])||0,A=parseFloat(y[1])||0,b,E,R,M;n?c!==xo&&(E=d*g-p*m)&&(R=v*(g/E)+A*(-m/E)+(m*x-g*_)/E,M=v*(-p/E)+A*(d/E)-(d*x-p*_)/E,v=R,A=M):(b=xm(t),v=b.x+(~y[0].indexOf("%")?v/100*b.width:v),A=b.y+(~(y[1]||y[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&a.smooth?(_=v-l,x=A-h,a.xOffset=u+(_*d+x*m)-_,a.yOffset=f+(_*p+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[hn]="0px 0px",o&&(Yi(o,a,"xOrigin",l,v),Yi(o,a,"yOrigin",h,A),Yi(o,a,"xOffset",u,a.xOffset),Yi(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},yo=function(t,e){var n=t._gsap||new rm(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(t),l=Qn(t,hn)||"0",h,u,f,d,p,m,g,_,x,y,v,A,b,E,R,M,S,I,D,O,H,q,z,$,G,st,ht,vt,Ct,te,X,Q;return h=u=f=m=g=_=x=y=v=0,d=p=1,n.svg=!!(t.getCTM&&ym(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ye]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ye]!=="none"?c[ye]:"")),i.scale=i.rotate=i.translate="none"),E=tu(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),l=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),sh(t,$||l,!!$||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,b=n.yOrigin||0,E!==xo&&(I=E[0],D=E[1],O=E[2],H=E[3],h=q=E[4],u=z=E[5],E.length===6?(d=Math.sqrt(I*I+D*D),p=Math.sqrt(H*H+O*O),m=I||D?Ks(D,I)*ps:0,x=O||H?Ks(O,H)*ps+m:0,x&&(p*=Math.abs(Math.cos(x*ar))),n.svg&&(h-=A-(A*I+b*O),u-=b-(A*D+b*H))):(Q=E[6],te=E[7],ht=E[8],vt=E[9],Ct=E[10],X=E[11],h=E[12],u=E[13],f=E[14],R=Ks(Q,Ct),g=R*ps,R&&(M=Math.cos(-R),S=Math.sin(-R),$=q*M+ht*S,G=z*M+vt*S,st=Q*M+Ct*S,ht=q*-S+ht*M,vt=z*-S+vt*M,Ct=Q*-S+Ct*M,X=te*-S+X*M,q=$,z=G,Q=st),R=Ks(-O,Ct),_=R*ps,R&&(M=Math.cos(-R),S=Math.sin(-R),$=I*M-ht*S,G=D*M-vt*S,st=O*M-Ct*S,X=H*S+X*M,I=$,D=G,O=st),R=Ks(D,I),m=R*ps,R&&(M=Math.cos(R),S=Math.sin(R),$=I*M+D*S,G=q*M+z*S,D=D*M-I*S,z=z*M-q*S,I=$,q=G),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,_=180-_),d=we(Math.sqrt(I*I+D*D+O*O)),p=we(Math.sqrt(z*z+Q*Q)),R=Ks(q,z),x=Math.abs(R)>2e-4?R*ps:0,v=X?1/(X<0?-X:X):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Sm(Qn(t,ye)),$&&t.setAttribute("transform",$))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=we(d),n.scaleY=we(p),n.rotation=we(m)+a,n.rotationX=we(g)+a,n.rotationY=we(_)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[hn]=Ca(l)),n.xOffset=n.yOffset=0,n.force3D=Sn.force3D,n.renderTransform=n.svg?A1:vm?bm:E1,n.uncache=0,n},Ca=function(t){return(t=t.split(" "))[0]+" "+t[1]},kc=function(t,e,n){var i=Ke(e);return we(parseFloat(e)+parseFloat(Qi(t,"x",n+"px",i)))+i},E1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bm(t,e)},cs="0deg",Hr="0px",ls=") ",bm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,m=n.scaleY,g=n.transformPerspective,_=n.force3D,x=n.target,y=n.zOrigin,v="",A=_==="auto"&&t&&t!==1||_===!0;if(y&&(u!==cs||h!==cs)){var b=parseFloat(h)*ar,E=Math.sin(b),R=Math.cos(b),M;b=parseFloat(u)*ar,M=Math.cos(b),o=kc(x,o,E*M*-y),a=kc(x,a,-Math.sin(b)*-y),c=kc(x,c,R*M*-y+y)}g!==Hr&&(v+="perspective("+g+ls),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||o!==Hr||a!==Hr||c!==Hr)&&(v+=c!==Hr||A?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+ls),l!==cs&&(v+="rotate("+l+ls),h!==cs&&(v+="rotateY("+h+ls),u!==cs&&(v+="rotateX("+u+ls),(f!==cs||d!==cs)&&(v+="skew("+f+", "+d+ls),(p!==1||m!==1)&&(v+="scale("+p+", "+m+ls),x.style[ye]=v||"translate(0, 0)"},A1=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,m=n.yOrigin,g=n.xOffset,_=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),A,b,E,R,M;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=ar,l*=ar,A=Math.cos(c)*u,b=Math.sin(c)*u,E=Math.sin(c-l)*-f,R=Math.cos(c-l)*f,l&&(h*=ar,M=Math.tan(l-h),M=Math.sqrt(1+M*M),E*=M,R*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),A*=M,b*=M)),A=we(A),b=we(b),E=we(E),R=we(R)):(A=u,R=f,b=E=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=Qi(d,"x",o,"px"),v=Qi(d,"y",a,"px")),(p||m||g||_)&&(y=we(y+p-(p*A+m*E)+g),v=we(v+m-(p*b+m*R)+_)),(i||s)&&(M=d.getBBox(),y=we(y+i/100*M.width),v=we(v+s/100*M.height)),M="matrix("+A+","+b+","+E+","+R+","+y+","+v+")",d.setAttribute("transform",M),x&&(d.style[ye]=M)},R1=function(t,e,n,i,s){var o=360,a=He(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?ps:1),l=c-i,h=i+l+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),u==="cw"&&l<0?l=(l+o*Hd)%o-~~(l/o)*o:u==="ccw"&&l>0&&(l=(l-o*Hd)%o-~~(l/o)*o)),t._pt=f=new ln(t._pt,e,n,i,l,u1),f.e=h,f.u="deg",t._props.push(n),f},jd=function(t,e){for(var n in e)t[n]=e[n];return t},C1=function(t,e,n){var i=jd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,h,u,f,d,p;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[ye]=e,a=yo(n,1),Rs(n,ye),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ye],o[ye]=e,a=yo(n,1),o[ye]=l);for(c in Ai)l=i[c],h=a[c],l!==h&&s.indexOf(c)<0&&(d=Ke(l),p=Ke(h),u=d!==p?Qi(n,c,l,p):parseFloat(l),f=parseFloat(h),t._pt=new ln(t._pt,a,c,u,f-u,eh),t._pt.u=p||0,t._props.push(c));jd(a,i)};cn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Ra[t>1?"border"+r:r]=function(a,c,l,h,u){var f,d;if(arguments.length<4)return f=o.map(function(p){return _i(a,p,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(p,m){return d[p]=f[m]=f[m]||f[(m-1)/2|0]}),a.init(c,d,u)}});var Tm={name:"css",register:ih,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,c=n.vars.startAt,l,h,u,f,d,p,m,g,_,x,y,v,A,b,E,R;Jh||ih(),this.styles=this.styles||_m(t),R=this.styles.props,this.tween=n;for(m in e)if(m!=="autoRound"&&(h=e[m],!(gn[m]&&om(m,e,n,i,t,s)))){if(d=typeof h,p=Ra[m],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=go(h)),p)p(this,t,m,h,n)&&(E=1);else if(m.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(m)+"").trim(),h+="",Ji.lastIndex=0,Ji.test(l)||(g=Ke(l),_=Ke(h)),_?g!==_&&(l=Qi(t,m,l,_)+_):g&&(h+=g),this.add(a,"setProperty",l,h,i,s,0,0,m),o.push(m),R.push(m,0,a[m]);else if(d!=="undefined"){if(c&&m in c?(l=typeof c[m]=="function"?c[m].call(n,i,t,s):c[m],He(l)&&~l.indexOf("random(")&&(l=go(l)),Ke(l+"")||l==="auto"||(l+=Sn.units[m]||Ke(_i(t,m))||""),(l+"").charAt(1)==="="&&(l=_i(t,m))):l=_i(t,m),f=parseFloat(l),x=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),m in Kn&&(m==="autoAlpha"&&(f===1&&_i(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,a.visibility),Yi(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),m!=="scale"&&m!=="transform"&&(m=Kn[m],~m.indexOf(",")&&(m=m.split(",")[0]))),y=m in Ai,y){if(this.styles.save(m),v||(A=t._gsap,A.renderTransform&&!e.parseTransform||yo(t,e.parseTransform),b=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new ln(this._pt,a,ye,0,1,A.renderTransform,A,0,-1),v.dep=1),m==="scale")this._pt=new ln(this._pt,A,"scaleY",A.scaleY,(x?rr(A.scaleY,x+u):u)-A.scaleY||0,eh),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){R.push(hn,0,a[hn]),h=T1(h),A.svg?sh(t,h,0,b,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==A.zOrigin&&Yi(this,A,"zOrigin",A.zOrigin,_),Yi(this,a,m,Ca(l),Ca(h)));continue}else if(m==="svgOrigin"){sh(t,h,1,b,0,this);continue}else if(m in Mm){R1(this,A,m,f,x?rr(f,x+h):h);continue}else if(m==="smoothOrigin"){Yi(this,A,"smooth",A.smooth,h);continue}else if(m==="force3D"){A[m]=h;continue}else if(m==="transform"){C1(this,h,t);continue}}else m in a||(m=wr(m)||m);if(y||(u||u===0)&&(f||f===0)&&!h1.test(h)&&m in a)g=(l+"").substr((f+"").length),u||(u=0),_=Ke(h)||(m in Sn.units?Sn.units[m]:g),g!==_&&(f=Qi(t,m,l,_)),this._pt=new ln(this._pt,y?A:a,m,f,(x?rr(f,x+u):u)-f,!y&&(_==="px"||m==="zIndex")&&e.autoRound!==!1?f1:eh),this._pt.u=_||0,g!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=d1);else if(m in a)b1.call(this,t,m,l,x?x+h:h);else if(m in t)this.add(t,m,l||t[m],x?x+h:h,i,s);else if(m!=="parseTransform"){Hh(m,h);continue}y||(m in a?R.push(m,0,a[m]):R.push(m,1,l||t[m])),o.push(m)}}E&&dm(this)},render:function(t,e){if(e.tween._time||!Zh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:_i,aliases:Kn,getSetter:function(t,e,n){var i=Kn[e];return i&&i.indexOf(",")<0&&(e=i),e in Ai&&e!==hn&&(t._gsap.x||_i(t,"x"))?n&&Vd===n?e==="scale"?_1:g1:(Vd=n||{})&&(e==="scale"?v1:x1):t.style&&!Bh(t.style[e])?p1:~e.indexOf("-")?m1:Kh(t,e)},core:{_removeProperty:Rs,_getMatrix:tu}};un.utils.checkPrefix=wr;un.core.getStyleSaver=_m;(function(r,t,e,n){var i=cn(r+","+t+","+e,function(s){Ai[s]=1});cn(t,function(s){Sn.units[s]="deg",Mm[s]=1}),Kn[i[13]]=r+","+t,cn(n,function(s){var o=s.split(":");Kn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Sn.units[r]="px"});un.registerPlugin(Tm);var ue=un.registerPlugin(Tm)||un;ue.core.Tween;class P1{constructor(t,e){this.camera=t,this.ui=e,this.timeScale=1,this.shakeAmp=0,this.shakeDecay=0,this.savedPos=new P,this.savedQuat=new Ln,this.shaking=!1}letterbox(t){this.ui.letterbox(t)}cut(t,e){this.camera.position.copy(t),this.camera.lookAt(e)}get shakeLevel(){return this.shakeAmp}shake(t,e=.5){this.shakeAmp=Math.max(this.shakeAmp,t),this.shakeDecay=this.shakeAmp/Math.max(e,.01)}slowMo(t,e,n=.25){ue.killTweensOf(this),ue.timeline().to(this,{timeScale:t,duration:n,ease:"power2.out"}).to(this,{timeScale:1,duration:n*2,ease:"power2.in"},`+=${e}`)}beginFrame(t){if(this.shakeAmp<=0)return;this.shaking=!0,this.savedPos.copy(this.camera.position),this.savedQuat.copy(this.camera.quaternion);const e=this.shakeAmp;this.camera.position.x+=(Math.random()-.5)*e,this.camera.position.y+=(Math.random()-.5)*e,this.camera.rotateZ((Math.random()-.5)*e*.08),this.shakeAmp=Math.max(0,e-this.shakeDecay*t)}endFrame(){this.shaking&&(this.shaking=!1,this.camera.position.copy(this.savedPos),this.camera.quaternion.copy(this.savedQuat))}reset(){ue.killTweensOf(this),this.timeScale=1,this.shakeAmp=0,this.ui.letterbox(!1,.01)}}const Bc={strength:.55,radius:.5,threshold:.82};class I1{constructor(t,e,n){this.ctx=t,this.factories=e,this.renderPass=n,this.current=null,this.busy=!1,this.empty=new Ci,n.scene=this.empty}get active(){return this.current}async goTo(t){if(this.busy)return;this.busy=!0;const{ctx:e}=this;try{await e.ui.fade(1,.5),this.current&&(this.current.exit(),this.current=null,this.renderPass.scene=this.empty),e.audio.stopAll(),e.ui.clear(),e.cinema.reset(),this.resetView();const n=this.factories[t]();await n.enter(e),this.current=n,this.renderPass.scene=n.scene,await e.ui.fade(0,.7)}catch(n){console.error(`[scene] ${t} failed to load`,n),e.ui.title("Something went wrong","The game files could not load · refresh to try again",1/0,"danger"),e.ui.fade(.6,.4)}finally{this.busy=!1}}update(t){this.current?.update(t)}afterRender(t){this.current?.afterRender?.(t)}resetView(){const{camera:t,bloom:e,renderer:n,grade:i}=this.ctx;i.reset(),t.fov=50,t.near=.1,t.far=500,t.position.set(0,2,8),t.quaternion.identity(),t.updateProjectionMatrix(),e.strength=Bc.strength,e.radius=Bc.radius,e.threshold=Bc.threshold,n.toneMappingExposure=1}}function Kd(r,t){if(t===s0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Nl||t===Bf){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===Nl)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class L1 extends Cr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new F1(e)}),this.register(function(e){return new k1(e)}),this.register(function(e){return new Y1(e)}),this.register(function(e){return new j1(e)}),this.register(function(e){return new K1(e)}),this.register(function(e){return new z1(e)}),this.register(function(e){return new V1(e)}),this.register(function(e){return new H1(e)}),this.register(function(e){return new G1(e)}),this.register(function(e){return new O1(e)}),this.register(function(e){return new W1(e)}),this.register(function(e){return new B1(e)}),this.register(function(e){return new q1(e)}),this.register(function(e){return new X1(e)}),this.register(function(e){return new N1(e)}),this.register(function(e){return new $1(e)}),this.register(function(e){return new J1(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=no.extractUrlBase(t);o=no.resolveURL(l,this.path)}else o=no.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){i?i(l):console.error(l),s.manager.itemError(t),s.manager.itemEnd(t)},c=new gp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{s.parse(l,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===wm){try{o[zt.KHR_BINARY_GLTF]=new Z1(t)}catch(u){i&&i(u);return}s=JSON.parse(o[zt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new ub(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case zt.KHR_MATERIALS_UNLIT:o[u]=new U1;break;case zt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Q1(s,this.dracoLoader);break;case zt.KHR_TEXTURE_TRANSFORM:o[u]=new tb;break;case zt.KHR_MESH_QUANTIZATION:o[u]=new eb;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function D1(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const zt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class N1{constructor(t){this.parser=t,this.name=zt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let l;const h=new at(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],sn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new sr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Es(h),l.distance=u;break;case"spot":l=new ir(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,gi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class U1{constructor(){this.name=zt.KHR_MATERIALS_UNLIT}getMaterialType(){return ze}extendParams(t,e,n){const i=[];t.color=new at(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],sn),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,Pe))}return Promise.all(i)}}class O1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class F1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new it(a,a)}return Promise.all(s)}}class k1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class B1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class z1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new at(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Pe)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class V1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class H1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new at().setRGB(a[0],a[1],a[2],sn),Promise.all(s)}}class G1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class W1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new at().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Pe)),Promise.all(s)}}class X1{constructor(t){this.parser=t,this.name=zt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class q1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:si}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Y1{constructor(t){this.parser=t,this.name=zt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class j1{constructor(t){this.parser=t,this.name=zt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class K1{constructor(t){this.parser=t,this.name=zt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class $1{constructor(t){this.name=zt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class J1{constructor(t){this.name=zt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Rn.TRIANGLES&&l.mode!==Rn.TRIANGLE_STRIP&&l.mode!==Rn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const p of u){const m=new Lt,g=new P,_=new Ln,x=new P(1,1,1),y=new wh(p.geometry,p.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&_.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,m.compose(g,_,x));for(const v in c)if(v==="_COLOR_0"){const A=c[v];y.instanceColor=new kl(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,c[v]);ge.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const wm="glTF",Gr=12,$d={JSON:1313821514,BIN:5130562};class Z1{constructor(t){this.name=zt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Gr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==wm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Gr,s=new DataView(t,Gr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===$d.JSON){const l=new Uint8Array(t,Gr+o,a);this.content=n.decode(l)}else if(c===$d.BIN){const l=Gr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Q1{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=zt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=rh[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=rh[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],d=cr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const p in d.attributes){const m=d.attributes[p],g=c[p];g!==void 0&&(m.normalized=g)}u(d)},a,l,sn,f)})})}}class tb{constructor(){this.name=zt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class eb{constructor(){this.name=zt.KHR_MESH_QUANTIZATION}}class Em extends So{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,p=t*l,m=p-l,g=-2*d+3*f,_=d-f,x=1-g,y=_-f+u;for(let v=0;v!==a;v++){const A=o[m+v+a],b=o[m+v+c]*h,E=o[p+v+a],R=o[p+v]*h;s[v]=x*A+y*b+g*E+_*R}return s}}const nb=new Ln;class ib extends Em{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return nb.fromArray(s).normalize().toArray(s),s}}const Rn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},cr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jd={9728:nn,9729:xn,9984:Cf,9985:ca,9986:qr,9987:xi},Zd={33071:Gi,33648:va,10497:Ts},zc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sb={CUBICSPLINE:void 0,LINEAR:lo,STEP:co},Vc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new _t({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ti})),r.DefaultMaterial}function hs(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function gi(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function ob(r,t,e){let n=!1,i=!1,s=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function ab(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cb(r){let t;const e=r.extensions&&r.extensions[zt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Hc(e.attributes):t=r.indices+":"+Hc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+Hc(r.targets[n]);return t}function Hc(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function oh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const hb=new Lt;class ub{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new D1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new _p(this.options.manager):this.textureLoader=new TM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return hs(s,a,i),gi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[zt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(no.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=zc[i.type],a=cr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new De(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=zc[i.type],l=cr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let m,g;if(d&&d!==u){const _=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let y=e.cache.get(x);y||(m=new l(a,_*d,i.count*d/h),y=new Gy(m,d/h),e.cache.add(x,y)),g=new bh(y,c,f%d/h,p)}else a===null?m=new l(i.count*c):m=new l(a,f,i.count*c),g=new De(m,c,p);if(i.sparse!==void 0){const _=zc.SCALAR,x=cr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,A=new x(o[1],y,i.sparse.count*_),b=new l(o[2],v,i.sparse.count*c);a!==null&&(g=new De(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,R=A.length;E<R;E++){const M=A[E];if(g.setX(M,b[E*c]),c>=2&&g.setY(M,b[E*c+1]),c>=3&&g.setZ(M,b[E*c+2]),c>=4&&g.setW(M,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return h.magFilter=Jd[f.magFilter]||xn,h.minFilter=Jd[f.minFilter]||xi,h.wrapS=Zd[f.wrapS]||Ts,h.wrapT=Zd[f.wrapT]||Ts,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==nn&&h.minFilter!==xn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let p=f;e.isImageBitmapLoader===!0&&(p=function(m){const g=new be(m);g.needsUpdate=!0,f(g)}),e.load(no.resolveURL(u,s.path),p,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),gi(u,o),u.userData.mimeType=o.mimeType||lb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[zt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[zt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[zt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ah,Zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new op,Zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return _t}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},c=s.extensions||{},l=[];if(c[zt.KHR_MATERIALS_UNLIT]){const u=i[zt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,e))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new at(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],sn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Pe)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=je);const h=s.alphaMode||Vc.OPAQUE;if(h===Vc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Vc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ze&&(l.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new it(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==ze&&(l.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ze){const u=s.emissiveFactor;a.emissive=new at().setRGB(u[0],u[1],u[2],sn)}return s.emissiveTexture!==void 0&&o!==ze&&l.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Pe)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),gi(u,s),e.associations.set(u,{materials:t}),s.extensions&&hs(i,u,s),u})}createUniqueName(t){const e=ie.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[zt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Qd(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=cb(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[zt.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Qd(new Ee,l,e),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?rb(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){const m=h[d],g=o[d];let _;const x=l[d];if(g.mode===Rn.TRIANGLES||g.mode===Rn.TRIANGLE_STRIP||g.mode===Rn.TRIANGLE_FAN||g.mode===void 0)_=s.isSkinnedMesh===!0?new Xy(m,x):new Z(m,x),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),g.mode===Rn.TRIANGLE_STRIP?_.geometry=Kd(_.geometry,Bf):g.mode===Rn.TRIANGLE_FAN&&(_.geometry=Kd(_.geometry,Nl));else if(g.mode===Rn.LINES)_=new jy(m,x);else if(g.mode===Rn.LINE_STRIP)_=new Eh(m,x);else if(g.mode===Rn.LINE_LOOP)_=new Ky(m,x);else if(g.mode===Rn.POINTS)_=new Rh(m,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(_.geometry.morphAttributes).length>0&&ab(_,s),_.name=e.createUniqueName(s.name||"mesh_"+t),gi(_,s),g.extensions&&hs(i,_,g),e.assignFinalMaterial(_),u.push(_)}for(let d=0,p=u.length;d<p;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return s.extensions&&hs(i,u[0],s),u[0];const f=new ae;s.extensions&&hs(i,f,s),e.associations.set(f,{meshes:t});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ge(Fe.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Da(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),gi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new Lt;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Th(a,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],p=i.samplers[d.sampler],m=d.target,g=m.node,_=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;m.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",_)),c.push(this.getDependency("accessor",x)),l.push(p),h.push(m))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],p=u[2],m=u[3],g=u[4],_=[];for(let x=0,y=f.length;x<y;x++){const v=f[x],A=d[x],b=p[x],E=m[x],R=g[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,A,b,E,R);if(M)for(let S=0;S<M.length;S++)_.push(M[S])}return new Vl(s,void 0,_)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,hb)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new sp:l.length>1?h=new ae:l.length===1?h=l[0]:h=new ge,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),gi(h,s),s.extensions&&hs(n,h,s),s.matrix!==void 0){const u=new Lt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new ae;n.name&&(s.name=i.createUniqueName(n.name)),gi(s,n),n.extensions&&hs(e,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Zn||f instanceof be)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,c=[];ki[s.path]===ki.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ki[s.path]){case ki.weights:l=_r;break;case ki.rotation:l=vr;break;case ki.position:case ki.scale:l=xr;break;default:switch(n.itemSize){case 1:l=_r;break;case 2:case 3:default:l=xr;break}break}const h=i.interpolation!==void 0?sb[i.interpolation]:lo,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const p=new l(c[f]+"."+ki[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=oh(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof vr?ib:Em;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function db(r,t,e){const n=t.attributes,i=new ei;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const h=oh(cr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new P,c=new P;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const m=oh(cr[f.componentType]);c.multiplyScalar(m)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new ni;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Qd(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=rh[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return Vt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Vt.workingColorSpace}" not supported.`),gi(r,t),db(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?ob(r,t.targets,e):r})}function fb(r){const t=new Map,e=new Map,n=r.clone();return Am(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=t.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return e.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Am(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)Am(r.children[n],t.children[n],e)}const pb=new L1,tf=new Map;async function Ha(r){let t=tf.get(r);t||(t=r().then(i=>pb.loadAsync(i)),tf.set(r,t));const e=await t,n=fb(e.scene);return n.traverse(i=>{const s=i;s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0,s.material=Array.isArray(s.material)?s.material.map(o=>o.clone()):s.material.clone())}),{scene:n,animations:e.animations}}function Ga(r,t,e="length"){r.updateMatrixWorld(!0),r.traverse(o=>{const a=o;a.isSkinnedMesh&&(a.skeleton.update(),a.computeBoundingBox())});const n=new ei().setFromObject(r),i=n.getSize(new P),s=e==="height"?t/i.y:t/Math.max(i.x,i.z);r.scale.multiplyScalar(s),n.setFromObject(r),r.position.y-=n.min.y}new _p;function Le(r,t,e,n={}){const i=document.createElement("canvas");i.width=r,i.height=t;const s=i.getContext("2d");if(!s)throw new Error("2D canvas is unavailable");e(s,r,t);const o=new $y(i);return o.colorSpace=n.srgb===!1?vi:Pe,o.anisotropy=4,n.repeat&&(o.wrapS=o.wrapT=Ts,o.repeat.set(n.repeat[0],n.repeat[1])),o}async function mb(r,t=1500){document.fonts&&await Promise.race([document.fonts.load(r).catch(()=>{}),new Promise(e=>window.setTimeout(e,t))])}const Rm={value:400};function Wa(r){let t=r>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function gb(){return Le(64,64,(r,t,e)=>{const n=r.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=n,r.fillRect(0,0,t,e)})}const _b=`
attribute float alpha;
attribute float psize;
uniform float size;
uniform float scale;
varying float vAlpha;
void main() {
  vAlpha = alpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * psize * scale / max(-mv.z, 0.1);
  gl_Position = projectionMatrix * mv;
}`,vb=`
uniform vec3 color;
uniform float opacity;
uniform sampler2D map;
varying float vAlpha;
void main() {
  float a = texture2D(map, gl_PointCoord).a * vAlpha * opacity;
  if (a < 0.003) discard;
  gl_FragColor = vec4(color, a);
}`;class $n{constructor(t){this.o=t,this.geometry=new Ee,this.p=new P,this.v=new P;const e=t.count;this.emitting=t.emitting??!0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.age=new Float32Array(e),this.life=new Float32Array(e),this.alpha=new Float32Array(e),this.psize=new Float32Array(e).fill(1);for(let i=0;i<e;i++)this.emitting?(this.respawn(i),this.age[i]=Math.random()*this.life[i]):(this.age[i]=1,this.life[i]=0);this.geometry.setAttribute("position",new De(this.pos,3)),this.geometry.setAttribute("alpha",new De(this.alpha,1)),this.geometry.setAttribute("psize",new De(this.psize,1));const n=new Ve({vertexShader:_b,fragmentShader:vb,uniforms:{color:{value:new at(t.color)},opacity:{value:t.opacity??1},size:{value:t.size},scale:Rm,map:{value:gb()}},transparent:!0,depthWrite:!1,blending:t.additive?lr:xs});this.points=new Rh(this.geometry,n),this.points.frustumCulled=!1}burst(t){let e=0;for(let n=0;n<this.o.count&&e<t;n++)this.age[n]>=this.life[n]&&(this.respawn(n),e++)}update(t){const e=this.o.gravity??0,n=Math.max(0,1-(this.o.drag??0)*t),i=this.o.grow??0;for(let s=0;s<this.o.count;s++){if(this.age[s]>=this.life[s]){if(!this.emitting){this.alpha[s]=0;continue}this.respawn(s)}this.age[s]+=t;const o=Math.min(this.age[s]/this.life[s],1),a=s*3;this.vel[a+1]-=e*t,this.vel[a]*=n,this.vel[a+1]*=n,this.vel[a+2]*=n,this.pos[a]+=this.vel[a]*t,this.pos[a+1]+=this.vel[a+1]*t,this.pos[a+2]+=this.vel[a+2]*t,this.alpha[s]=Math.min(1,o/.12)*(1-o),this.psize[s]=1+i*o}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.alpha.needsUpdate=!0,this.geometry.attributes.psize.needsUpdate=!0}respawn(t){this.p.set(0,0,0),this.v.set(0,0,0),this.o.spawn(this.p,this.v);const e=t*3;this.pos[e]=this.p.x,this.pos[e+1]=this.p.y,this.pos[e+2]=this.p.z,this.vel[e]=this.v.x,this.vel[e+1]=this.v.y,this.vel[e+2]=this.v.z,this.age[t]=0;const[n,i]=this.o.life;this.life[t]=n+Math.random()*(i-n)}}function nt(r,t,e,n){const i=document.createElement(r);return i.className=t,n!==void 0&&(i.textContent=n),e?.appendChild(i),i}function Gc(r,t){t.split(/(\[[^\]]+\])/).forEach(e=>{e&&(e.startsWith("[")&&e.endsWith("]")?nt("kbd","",r,e.slice(1,-1)):r.append(e))})}function ef(r,t){const e=nt("div","krow",r),n=nt("span","keys",e);return t.keys.forEach((i,s)=>{s>0&&n.append(" "),nt("kbd","",n,i)}),nt("span","what",e,t.label),e}const xb=["Wikki Warm Spring","The Vault","Gaji River","Kalban Hill","Main Gate"];class yb{constructor(t){this.root=nt("div","ui"),document.body.appendChild(this.root),this.hudEl=nt("div","hud",this.root),this.flashEl=nt("div","flash",this.root),this.bars=[nt("div","bar top",this.root),nt("div","bar bottom",this.root)],this.titleEl=nt("div","title",this.root),this.titleMain=nt("div","main",this.titleEl),this.titleSub=nt("div","sub",this.titleEl),this.captionEl=nt("div","caption",this.root),this.hintEl=nt("div","hint",this.root),this.radioEl=nt("div","radio",this.root),this.promptEl=nt("div","prompt",this.root),this.briefEl=nt("div","brief",this.root),this.mapEl=nt("div","route",this.root),this.fadeEl=nt("div","fade",this.root),this.skipBtn=nt("button","btn skip",this.root,"SKIP ▸"),this.skipBtn.addEventListener("click",()=>t.trigger("skip")),this.muteBtn=nt("button","btn mute",this.root,"🔊"),this.muteBtn.title="Mute (M)",this.muteBtn.addEventListener("click",()=>t.trigger("mute")),this.noticeEl=nt("div","notice",this.root)}letterbox(t,e=.9){ue.to(this.bars,{height:t?"11vh":"0vh",duration:e,ease:"power2.inOut",overwrite:!0})}fade(t,e=.6){return new Promise(n=>{ue.to(this.fadeEl,{opacity:t,duration:e,ease:"power1.inOut",overwrite:!0,onComplete:n})})}title(t,e="",n=2.5,i="normal"){this.titleMain.textContent=t,this.titleSub.textContent=e,this.titleEl.className=`title ${i}`,ue.killTweensOf([this.titleEl,this.titleMain]);const s=ue.timeline();s.fromTo(this.titleEl,{opacity:0},{opacity:1,duration:.6,ease:"power2.out"}).fromTo(this.titleMain,{letterSpacing:"0.45em",scale:1.05},{letterSpacing:"0.12em",scale:1,duration:Math.min(n,4)+1.2,ease:"power3.out"},0),Number.isFinite(n)&&s.to(this.titleEl,{opacity:0,duration:.6},.6+n)}clearTitle(){ue.killTweensOf([this.titleEl,this.titleMain]),ue.to(this.titleEl,{opacity:0,duration:.4})}caption(t,e=3.5){this.captionEl.textContent=t,ue.killTweensOf(this.captionEl),ue.timeline().fromTo(this.captionEl,{opacity:0,x:-12},{opacity:1,x:0,duration:.6}).to(this.captionEl,{opacity:0,duration:.6},`+=${e}`)}hint(t){t&&(this.hintEl.replaceChildren(),Gc(this.hintEl,t)),this.hintEl.classList.toggle("on",!!t)}flash(t="#ff2a2a",e=.55,n=.5){this.flashEl.style.background=t,ue.fromTo(this.flashEl,{opacity:e},{opacity:0,duration:n,overwrite:!0})}radio(t,e=3.6){const n=this.radioEl;n.replaceChildren(),nt("div","who",n,`◉ ${t.who}`),nt("div","chip",n,`AUTO-TRANSLATE · ${t.lang.toUpperCase()} → EN`),nt("div","orig",n,t.text),nt("div","en",n,t.en),ue.killTweensOf(n),ue.timeline().fromTo(n,{opacity:0,y:10},{opacity:1,y:0,duration:.35}).to(n,{opacity:0,duration:.5},`+=${e}`)}routeMap(t,e=4.5){const n=this.mapEl;n.replaceChildren(),nt("div","head",n,"YANKARI GAME RESERVE · BAUCHI STATE, NIGERIA");const i=nt("div","stops",n);xb.forEach((s,o)=>{const a=nt("div",`stop${o<t?" done":""}${o===t?" here":""}`,i);nt("i","",a),nt("span","",a,s)}),ue.killTweensOf(n),ue.timeline().fromTo(n,{opacity:0,x:16},{opacity:1,x:0,duration:.5,delay:.4}).to(n,{opacity:0,duration:.6},`+=${e}`)}legend(t,e){const n=nt("div","legend",this.hudEl);nt("div","ltitle",n,t);const i=new Map;for(const s of e){const o=ef(n,s);s.id&&i.set(s.id,o)}return i}prompt(t,e=2.2){const n=this.promptEl;n.replaceChildren(),Gc(n,t),ue.killTweensOf(n),ue.timeline().fromTo(n,{opacity:0,scale:.92},{opacity:1,scale:1,duration:.25,ease:"back.out(2)"}).to(n,{opacity:0,duration:.4},`+=${e}`)}briefing(t,e,n,i){const s=this.briefEl;s.replaceChildren();const o=nt("div","card",s);nt("div","btitle",o,t),nt("div","goal",o,e);const a=nt("div","rows",o);for(const l of n)ef(a,l);const c=nt("div","go",o);Gc(c,i),s.classList.add("on")}closeBriefing(){this.briefEl.classList.remove("on")}hud(){return this.hudEl}showSkip(t){this.skipBtn.classList.toggle("on",t)}setMuted(t){this.muteBtn.textContent=t?"🔇":"🔊"}notice(t){this.noticeEl.textContent=t}clear(){ue.killTweensOf([this.titleEl,this.titleMain,this.captionEl,this.flashEl,this.radioEl,this.mapEl,this.promptEl]),this.promptEl.style.opacity="0",this.closeBriefing(),this.radioEl.style.opacity="0",this.mapEl.style.opacity="0",this.titleEl.style.opacity="0",this.captionEl.style.opacity="0",this.flashEl.style.opacity="0",this.hudEl.replaceChildren(),this.hint(null),this.showSkip(!1)}}const Mb="modulepreload",Sb=function(r,t){return new URL(r,t).href},nf={},us=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");i=Promise.allSettled(e.map(l=>{if(l=Sb(l,n),l in nf)return;nf[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const m=o[p];if(m.href===l&&(!h||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Mb,h||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((p,m)=>{d.addEventListener("load",p),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},ji={agent:()=>us(()=>import("./agent-DSDvG2Ao.js"),[],import.meta.url).then(r=>r.default),antelope:()=>us(()=>import("./antelope-CgZ97yPE.js"),[],import.meta.url).then(r=>r.default),baboon:()=>us(()=>import("./baboon-C1b3K62K.js"),[],import.meta.url).then(r=>r.default),elephant:()=>us(()=>import("./elephant-BeawokZS.js"),[],import.meta.url).then(r=>r.default),guard:()=>us(()=>import("./guard-C6Xk_PKT.js"),[],import.meta.url).then(r=>r.default),hippo:()=>us(()=>import("./hippo-DzD83ie1.js"),[],import.meta.url).then(r=>r.default),raptor:()=>us(()=>import("./raptor-tJnOatC0.js"),[],import.meta.url).then(r=>r.default)};function bb(r,t,e,n,i){const s=Wa(n*97+13);switch(r.save(),r.fillStyle=i,r.strokeStyle=i,r.lineCap="round",n%8){case 0:for(let o=0;o<t;o+=t/8)r.fillRect(o,0,t/24,e);break;case 1:r.lineWidth=e/14;for(let o=-e/4;o<e*1.25;o+=e/4){r.beginPath();for(let a=0;a<=8;a++)r.lineTo(a*t/8,o+(a%2?e/8:0));r.stroke()}break;case 2:for(let o=0;o<6;o++)for(let a=0;a<16;a++)r.beginPath(),r.arc((a+o%2*.5)*t/16,(o+.5)*e/6,e/26,0,Math.PI*2),r.fill();break;case 3:r.lineWidth=t/28;for(let o=-t;o<t*2;o+=t/7)r.beginPath(),r.moveTo(o,0),r.lineTo(o+e,e),r.stroke();break;case 4:for(let o=0;o<12;o++){const a=o*t/12+s()*8;r.lineWidth=4+s()*8,r.beginPath(),r.moveTo(a,0),r.bezierCurveTo(a+18,e*.3,a-18,e*.6,a+s()*18,e*(.55+s()*.45)),r.stroke()}break;case 5:r.lineWidth=3;for(let o=0;o<=t;o+=t/12)r.beginPath(),r.moveTo(o,0),r.lineTo(o,e),r.stroke();for(let o=0;o<=e;o+=e/6)r.beginPath(),r.moveTo(0,o),r.lineTo(t,o),r.stroke();break;case 6:r.fillRect(0,0,t/2,e),r.fillRect(0,e*.18,t,e*.06);break;case 7:r.lineWidth=3;for(let o=0;o<16;o++){const a=s()*t,c=s()*e,l=a+(s()-.5)*t*.3,h=c+(s()-.5)*e*.6;r.beginPath(),r.moveTo(a,c),r.lineTo(l,c),r.lineTo(l,h),r.stroke(),r.beginPath(),r.arc(l,h,5,0,Math.PI*2),r.fill()}break}r.restore()}function sf(r,t){return`#${new at(r).multiplyScalar(t).getHexString()}`}const Tb={agent:ji.agent,guard:ji.guard},wb=1.8;class Ri{constructor(t,e){this.style=t,this.kind=e,this.root=new ae,this.actions=new Map,this.current=null,this.seated=!1,this.sitBones=[],this.oneShot=0}static async create(t,e="agent"){const n=new Ri(t,e);return await n.load(),n}update(t,e=0){this.oneShot=Math.max(0,this.oneShot-t),!this.seated&&this.oneShot<=0&&(e>.55?this.play("Run",.2,1):e>.05?this.play("Walk",.2,1.2):this.play(this.kind==="guard"?"Idle_Neutral":"Idle",.3)),this.mixer.update(t);for(const{bone:n,x:i}of this.sitBones)n.rotation.x=i}sit(){this.seated=!0,this.play("Idle",0);const t=(e,n)=>{const i=this.root.getObjectByName(e);i&&this.sitBones.push({bone:i,x:n})};for(const e of["L","R"])t(`UpperLeg.${e}`,-1.45+Math.PI),t(`LowerLeg.${e}`,-1.45)}gesture(t,e=.9){this.play(t,.1,1.4,!0),this.oneShot=e}play(t,e=.25,n=1,i=!1){const s=this.actions.get(t);s&&(s.timeScale=n,s!==this.current&&(s.reset(),s.setLoop(i?gh:_h,1/0),s.clampWhenFinished=i,s.play(),this.current&&this.current.crossFadeTo(s,e,!1),this.current=s))}async load(){const{scene:t,animations:e}=await Ha(Tb[this.kind]),n=new ae;n.add(t),Ga(n,wb,"height"),this.root.add(n),this.recolour(t),this.addEmblems(t),this.mixer=new xp(t);for(const i of e)this.actions.set(i.name.split("|").pop()??i.name,this.mixer.clipAction(i));this.play(this.kind==="guard"?"Idle_Neutral":"Idle",0),this.mixer.setTime(Math.random()*2)}recolour(t){const e=this.style;t.traverse(n=>{const i=n;if(!i.isMesh)return;const s=Array.isArray(i.material)?i.material:[i.material];for(const o of s){const a=o;if(a.color)switch(a.roughness=.5,a.metalness=.25,a.name){case"SciFi_Light":case"Swat":a.color.set(e.suitColor),a.metalness=.35,a.roughness=.4;break;case"SciFi_MainDark":case"Swat_Black":a.color.set(sf(e.suitColor,.3)),a.roughness=.75;break;case"SciFi_Main":case"Grey_Dark":a.color.set("#1b1d22"),a.roughness=.7;break;case"SciFi_Light_Accent":a.color.set(e.accentColor),a.emissive=new at(e.accentColor),a.emissiveIntensity=.45;break;case"Grey":case"Visor":a.color.set("#07080b"),a.emissive=new at(e.visorTint),a.emissiveIntensity=1.1,a.roughness=.08,a.metalness=.7;break}}})}addEmblems(t){const e=this.style,n=t.getObjectByName("Chest");if(!n)return;const i=Le(128,128,(l,h,u)=>{l.fillStyle=sf(e.suitColor,.35),l.beginPath(),l.roundRect(4,4,h-8,u-8,18),l.fill(),l.save(),l.beginPath(),l.roundRect(4,4,h-8,u-8,18),l.clip(),bb(l,h,u,e.maskPattern,e.accentColor),l.restore()}),s=new _t({map:i,emissive:"#ffffff",emissiveMap:i,emissiveIntensity:.5,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-4}),o=new P;n.getWorldScale(o);const a=1/o.x,c=new ke(.15*a,.15*a);for(const[l,h]of[[.16,0],[-.17,Math.PI]]){const u=new Z(c,s);u.position.set(0,-.02*a,l*a),u.rotation.y=h,n.add(u)}}}function Eb(r){for(const t of Object.values(r))t instanceof be&&t.dispose();if(r instanceof Ve)for(const t of Object.values(r.uniforms))t.value instanceof be&&t.value.dispose();r.dispose()}function eu(r){r.traverse(t=>{const e=t;e.geometry?.dispose();const n=e.material;if(n)for(const i of Array.isArray(n)?n:[n])Eb(i);t.isInstancedMesh&&t.dispose(),t.isLight&&t.dispose()})}function To(r){eu(r),r.background instanceof be&&r.background.dispose(),r.clear()}const Bi=Math.PI*2,Wr=3.7;class Ab{constructor(){this.scene=new Ci,this.tl=null,this.cast=[],this.splashAt=new P,this.shot={angle:.35,radius:22,height:9,lookY:.3,tx:0,tz:4.6},this.look=new P,this.walk=0,this.t=0,this.done=!1}async enter(t){this.ctx=t,this.scene.background=new at("#04070f"),this.scene.fog=new Sh("#06101e",.03),t.camera.fov=40,t.camera.updateProjectionMatrix(),t.bloom.strength=.7,t.bloom.threshold=.65,this.scene.environment=t.envMap,this.scene.environmentIntensity=.25,t.grade.set({tint:"#cfe0ff",lift:"#03081a",saturation:.9,contrast:1.08,vignette:.5}),this.buildEnvironment(),await this.buildLandmarks(),await this.buildCast(),this.buildTimeline(),this.applyShot(),t.audio.startLoop("ambience"),t.ui.showSkip(!0)}update(t){this.t+=t,this.ctx.input.pressed("skip")&&this.finish(),this.applyShot(),this.steam.update(t),this.fireflies.update(t),this.splash.update(t),this.caustics.offset.x+=t*.025,this.caustics.offset.y+=t*.012,this.poolMat.emissiveIntensity=.6+Math.sin(this.t*1.3)*.08;for(const e of this.cast)e.update(t,this.walk)}exit(){this.tl?.kill();for(const t of this.cast)ue.killTweensOf(t.root.position);To(this.scene)}finish(){this.done||(this.done=!0,this.ctx.goTo("vault"))}applyShot(){const t=this.shot,e=this.ctx.camera;e.position.set(t.tx+Math.sin(t.angle)*t.radius,t.height,t.tz+Math.cos(t.angle)*t.radius),this.look.set(t.tx,t.lookY,t.tz),e.lookAt(this.look)}buildEnvironment(){const t=this.scene,e=Wa(2049);t.add(new Pr("#2c4170","#0b0a08",.9));const n=new sr("#9db8ff",1.4);n.position.set(-12,18,-10),n.castShadow=!0,n.shadow.mapSize.set(1024,1024);const i=n.shadow.camera;i.left=i.bottom=-12,i.right=i.top=12,i.far=60,t.add(n);const s=new Es("#3fe0ee",30,14,2);s.position.set(0,.8,0),t.add(s);const o=Le(256,256,(x,y,v)=>{x.fillStyle="#121710",x.fillRect(0,0,y,v);for(let A=0;A<1400;A++)x.fillStyle=e()>.5?"rgba(40,52,30,0.5)":"rgba(6,8,5,0.6)",x.fillRect(e()*y,e()*v,2+e()*3,2+e()*3)},{repeat:[14,14]}),a=new Z(new bi(70,48),new _t({map:o,roughness:1}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,t.add(a),this.poolMat=new _t({color:"#0b5c66",emissive:"#14a9b8",emissiveIntensity:.6,roughness:.08,metalness:.5});const c=new Z(new bi(Wr,64),this.poolMat);c.rotation.x=-Math.PI/2,c.position.y=.05,t.add(c),this.caustics=Le(256,256,(x,y,v)=>{x.fillStyle="#000",x.fillRect(0,0,y,v),x.strokeStyle="#fff";for(let A=0;A<40;A++){x.globalAlpha=.25+e()*.5,x.lineWidth=1+e()*3,x.beginPath();const b=e()*y,E=e()*v;x.moveTo(b,E),x.bezierCurveTo(b+e()*80-40,E+e()*80-40,b+e()*80-40,E+e()*80-40,b+e()*60-30,E+e()*60-30),x.stroke()}},{repeat:[2,2]});const l=new Z(new bi(Wr-.1,64),new ze({map:this.caustics,color:"#7ff6ff",transparent:!0,opacity:.35,blending:lr,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.07,t.add(l);const h=new fo(1,0),u=new _t({color:"#2b2d2c",roughness:.9,flatShading:!0});for(let x=0;x<30;x++){const y=x/30*Bi+e()*.1;if(Math.abs(y-Math.PI/2)<.55)continue;const v=Wr+.25+e()*.5,A=new Z(h,u),b=.3+e()*.35;A.scale.set(b,b*.6,b),A.position.set(Math.cos(y)*v,b*.2,Math.sin(y)*v),A.rotation.set(e()*Bi,e()*Bi,0),A.castShadow=A.receiveShadow=!0,t.add(A)}const f=new _t({color:"#141210",roughness:1}),d=new _t({color:"#0d1a12",roughness:1,side:je}),p=new ke(.55,2.8).translate(0,1.4,0);for(let x=0;x<20;x++){let y=0,v=0;do{const R=e()*Bi,M=12+e()*20;y=Math.cos(R)*M,v=Math.sin(R)*M}while(v>-6&&Math.abs(y)<18);const A=4.5+e()*3,b=new ae;b.position.set(y,0,v),b.rotation.z=(e()-.5)*.25;const E=new Z(new Yt(.12,.22,A,7),f);E.position.y=A/2,E.castShadow=!0,b.add(E);for(let R=0;R<7;R++){const M=new Z(p,d);M.position.y=A,M.rotation.set(1.9+e()*.3,R/7*Bi+e()*.3,0,"YXZ"),b.add(M)}t.add(b)}const m=new Float32Array(700*3);for(let x=0;x<700;x++){const y=e()*Bi,v=.08+e()*1.4;m.set([Math.cos(y)*Math.cos(v)*150,Math.sin(v)*150,Math.sin(y)*Math.cos(v)*150],x*3)}const g=new Ee;g.setAttribute("position",new De(m,3)),t.add(new Rh(g,new Ah({color:"#cfe0ff",size:1.6,sizeAttenuation:!1,fog:!1})));const _=new Z(new Re(4,24,16),new ze({color:"#eaf1ff",fog:!1}));_.position.set(-60,55,-110),t.add(_),this.steam=new $n({count:140,size:1.8,color:"#9fc8d4",opacity:.22,additive:!0,life:[3,6],grow:1.5,drag:.1,spawn:(x,y)=>{const v=Math.random()*Bi,A=Math.sqrt(Math.random())*(Wr-.4);x.set(Math.cos(v)*A,.1,Math.sin(v)*A),y.set((Math.random()-.5)*.15,.35+Math.random()*.35,(Math.random()-.5)*.15)}}),this.fireflies=new $n({count:40,size:.12,color:"#d8ff6a",additive:!0,life:[4,7],spawn:(x,y)=>{const v=Math.random()*Bi,A=5+Math.random()*8;x.set(Math.cos(v)*A,.5+Math.random()*2,Math.sin(v)*A),y.set((Math.random()-.5)*.4,(Math.random()-.5)*.2,(Math.random()-.5)*.4)}}),this.splash=new $n({count:160,size:.35,color:"#bff8ff",additive:!0,emitting:!1,life:[.6,1.2],gravity:9,spawn:(x,y)=>{x.copy(this.splashAt),y.set((Math.random()-.5)*3,2.5+Math.random()*3.5,(Math.random()-.5)*3)}}),t.add(this.steam.points,this.fireflies.points,this.splash.points)}async buildLandmarks(){const t=new _t({color:"#4a3524",roughness:.9}),e=new Z(new $t(2.6,.12,7),t);e.position.set(0,.06,7.4),e.receiveShadow=!0,this.scene.add(e);for(let c=0;c<3;c++){const l=new Z(new $t(2.4,.12,.45),t);l.position.set(0,-.12-c*.22,3.75-c*.42),this.scene.add(l)}for(const c of[-1,1]){for(let h=4.2;h<=10.6;h+=1.6){const u=new Z(new Yt(.05,.05,.9,6),t);u.position.set(c*1.25,.5,h),this.scene.add(u)}const l=new Z(new $t(.06,.06,6.6),t);l.position.set(c*1.25,.95,7.4),this.scene.add(l)}const n=Le(512,192,(c,l,h)=>{c.fillStyle="#3e2a1a",c.fillRect(0,0,l,h),c.strokeStyle="#2a1c10",c.lineWidth=8,c.strokeRect(4,4,l-8,h-8),c.fillStyle="#f2dfb8",c.textAlign="center",c.textBaseline="middle",c.font="64px 'Bebas Neue', Impact, sans-serif",c.fillText("WIKKI WARM SPRING",l/2,h*.4),c.font="30px 'Bebas Neue', Impact, sans-serif",c.fillText("YANKARI GAME RESERVE · 31°C",l/2,h*.75)}),i=new Z(new $t(2.4,.9,.08),[t,t,t,t,new _t({map:n}),t]);i.position.set(-2.6,1.5,8.2),i.rotation.y=.5;const s=new Z(new Yt(.07,.07,1.6,6),t);s.position.set(-2.6,.8,8.2),this.scene.add(i,s);const{scene:o}=await Ha(ji.elephant),a=new ae;a.add(o),Ga(a,5);for(const[c,l,h,u]of[[-13,-9,.9,1],[-17.5,-11,1.2,.7],[15,-12,-2.2,.9]]){const f=a.clone();f.position.x=c,f.position.z=l,f.rotation.y=h,f.scale.multiplyScalar(u),this.scene.add(f)}}async buildCast(){const t=[[0,4.6,Math.PI],[-1.5,5.3,Math.PI+.25],[1.6,5.4,Math.PI-.2]],e=[this.ctx.style,...ka];(await Promise.all(e.map(i=>Ri.create(i)))).forEach((i,s)=>{const[o,a,c]=t[s];i.root.position.set(o,0,a),i.root.rotation.y=c,this.scene.add(i.root),this.cast.push(i)})}buildTimeline(){const{ui:t,audio:e,style:n,user:i}=this.ctx,s=this.shot,o=i.displayName||i.username,a=ue.timeline({onComplete:()=>this.finish()});this.tl=a,a.call(()=>t.letterbox(!0),[],0).call(()=>t.caption("Wikki Warm Spring · Yankari Game Reserve · Bauchi State, Nigeria · 2049",3.6),[],.8).call(()=>t.routeMap(0,3.5),[],1).call(()=>t.radio({who:"Agent Harmattan-2",lang:"Hausa",text:"Ruwan yana da ɗumi. Kofar tana ƙasa.",en:"The water’s warm. The entrance is below."},3),[],2.2).call(()=>t.radio({who:"Agent Ibis-5",lang:"Yoruba",text:"Ẹ jẹ́ ká lọ!",en:"Let’s go!"},1.8),[],11).to(s,{angle:.9,radius:8.5,height:2.4,lookY:1.2,duration:5,ease:"power2.inOut"},0).to(s,{angle:Math.PI+.25,radius:3,height:1.75,lookY:1.6,duration:6,ease:"sine.inOut"},5).call(()=>t.title("VAULT OF YANKARI","",2.3),[],5.3).call(()=>t.title(`Starring ${o}`,`as ${n.codename}`,2.4,"small"),[],8.4).to(s,{angle:Math.PI+.9,radius:7,height:6.5,lookY:-.5,tz:2,duration:3,ease:"power2.inOut"},11).to(this,{walk:1,duration:.3},11),this.cast.forEach((c,l)=>{const h=c.root.position,u=11.1+l*.18,f=Wr+.2,d=new it(-h.x,-h.z).normalize(),p=Math.hypot(h.x,h.z)-f;a.to(h,{x:h.x+d.x*p,z:h.z+d.y*p,duration:1.3,ease:"none"},u).to(h,{x:h.x+d.x*(p+1.3),z:h.z+d.y*(p+1.3),duration:.8,ease:"none"},u+1.3).to(h,{y:.6,duration:.3,ease:"power2.out"},u+1.3).to(h,{y:-2.5,duration:.5,ease:"power2.in"},u+1.6).call(()=>{this.splashAt.set(h.x,.1,h.z),this.splash.burst(50),e.play("splash",.7)},[],u+1.85)}),a.call(()=>e.play("whoosh"),[],13.4).to({},{duration:.4},14.2)}}const mn=256,rf="#e8b931",of=new Map;function Qe(r,t=.6,e=0){return new _t({color:r,roughness:t,metalness:e})}function Zt(r,t,e,n=0,i=0,s=0){const o=new Z(r,t);return o.position.set(n,i,s),e.add(o),o}function Rb(r){const t=new ae,e=Qe(r.skinColor,.55),n=Qe(r.hairColor,.8),i=Qe(r.primaryColor,.7),s=Qe("#1b1a18",.4),o=r.body==="female",a=.1,c=Zt(new eo(.11,.16,6,24),i,t,0,-.27,-.01);c.rotation.z=Math.PI/2,c.scale.set(1,o?.92:1.05,.62),Zt(new Yt(.038,.045,.1,20),e,t,0,-.13,0),Zt(new Re(a,40,28),e,t).scale.set(o?.86:.9,1.08,.95);for(const p of[-1,1])Zt(new Re(.02,12,10),e,t,p*.088,-.005,-.005).scale.set(.6,1,.8);for(const p of[-1,1]){Zt(new Re(.0115,16,12),s,t,p*.032,.012,.088),Zt(new Re(.0035,8,6),Qe("#ffffff",.2),t,p*.032+.004,.017,.098);const m=Zt(new eo(.004,.022,4,8),n,t,p*.033,.038,.088);m.rotation.z=Math.PI/2+p*.12}Zt(new Re(.011,12,10),e,t,0,-.008,.097).scale.set(1,.9,.8);const h=Zt(new _n(.02,.0035,8,20,Math.PI*.8),Qe("#5a2a22",.5),t,0,-.03,.089);h.rotation.z=Math.PI+Math.PI*.1;const u=new Re(a*1.06,40,20,0,Math.PI*2,0,Math.PI*.52),f=()=>{const p=Zt(u,n,t,0,.012,-.01);p.scale.set(o?.9:.94,1.12,1.02),p.rotation.x=-.4};switch(r.hair){case"short":f();break;case"afro":f(),Zt(new Re(.15,32,20),n,t,0,.055,-.05).scale.set(1.05,.88,.85);break;case"bun":f(),Zt(new Re(.045,20,14),n,t,0,.1,-.075);break;case"ponytail":{f();const p=Zt(new eo(.025,.16,6,12),n,t,0,-.06,-.115);p.rotation.x=.2;break}case"braids":case"dreads":{f();const p=r.hair==="braids",m=p?16:18,g=p?.3:.2;for(let _=0;_<m;_++){const x=Math.PI*.1+_/(m-1)*Math.PI*.8,y=Zt(new Yt(p?.009:.012,p?.007:.01,g,6),n,t,Math.cos(x)*.085,.02-g/2,-Math.sin(x)*.08);y.rotation.z=Math.cos(x)*.12}break}}const d=r.hair==="afro"?.07:0;switch(r.hat){case"cap":{Zt(new Re(.112,32,14,0,Math.PI*2,0,Math.PI/2),i,t,0,.018,-.006).scale.set(.98,1.15,1.06);const m=Zt(new Yt(.08,.08,.01,24,1,!1,-Math.PI/2,Math.PI),Qe(r.secondaryColor,.7),t,0,.045,.06);m.rotation.x=.18,m.scale.set(1,1,1.1);break}case"beanie":{const p=Qe(r.secondaryColor,.9);Zt(new Re(.114,32,14,0,Math.PI*2,0,Math.PI/2),p,t,0,.022,-.004).scale.set(.98,1.05,1.07);const m=Zt(new _n(.1,.02,12,32),i,t,0,.03,-.004);m.rotation.x=Math.PI/2,Zt(new Re(.03,14,10),i,t,0,.152,-.01);break}case"tophat":{const p=Qe("#1b1a18",.45),m=new ae;m.position.set(0,.1+d,-.005),m.rotation.z=-.08,t.add(m),Zt(new Yt(.135,.135,.012,32),p,m),Zt(new Yt(.085,.092,.17,32),p,m,0,.09,0),Zt(new Yt(.094,.094,.03,32),i,m,0,.025,0);break}case"crown":{const p=Qe(rf,.28,.85),m=new ae;m.position.set(0,.1+d,-.005),t.add(m),Zt(new Yt(.085,.08,.05,32,1,!0),p,m);for(let g=0;g<6;g++){const _=g/6*Math.PI*2;Zt(new Vi(.018,.05,12),p,m,Math.sin(_)*.08,.045,Math.cos(_)*.08)}Zt(new Re(.012,12,10),Qe("#d6263b",.2),m,0,.005,.086);break}}switch(r.accessory){case"glasses":{const p=Qe("#1d1b19",.35,.4);for(const g of[-1,1])Zt(new _n(.024,.0042,10,24),p,t,g*.035,.012,.1);const m=Zt(new _n(.011,.0035,8,16,Math.PI),p,t,0,.014,.102);m.rotation.z=0;break}case"beard":{Zt(new Re(.104,32,16,0,Math.PI*2,Math.PI*.62,Math.PI*.38),n,t,0,-.008,.006).scale.set(.92,1.12,1.02);break}case"earrings":for(const p of[-1,1])Zt(new _n(.012,.0032,10,20),Qe(rf,.25,.85),t,p*.082,-.04,.004);break;case"scarf":{const p=Zt(new _n(.066,.03,14,28),Qe(r.secondaryColor,.9),t,0,-.15,.005);p.rotation.x=Math.PI/2-.15,p.scale.set(1.08,.85,1);break}case"backpack":for(const p of[-1,1]){const m=Zt(new $t(.022,.012,.16),Qe("#6b4a2b",.7),t,p*.085,-.19,0);m.rotation.x=-.15}break}return t}function af(r,t){const e=JSON.stringify(t),n=of.get(e);if(n)return n;const i=new Ci;i.add(new Pr("#ffffff","#8b8f6e",1.4));const s=new sr("#fff6e8",2.3);s.position.set(1.5,2.5,2.5);const o=new sr("#ffffff",.6);o.position.set(-2,1,2);const a=new sr("#e9ffd0",1.5);a.position.set(-2,2,-2.5),i.add(s,o,a);const c=Rb(t);i.add(c);const l=t.hat==="tophat"||t.hat==="crown",h=new Ge(26,1,.05,10);h.position.set(.12,l?.07:.03,l?.98:.8),h.lookAt(0,l?.01:-.03,0);const u=new Mn(mn,mn,{samples:4});u.texture.colorSpace=Pe;const f=r.getRenderTarget(),d=r.getClearAlpha();r.setRenderTarget(u),r.setClearAlpha(0),r.clear(),r.render(i,h);const p=new Uint8Array(mn*mn*4);r.readRenderTargetPixels(u,0,0,mn,mn,p),r.setRenderTarget(f),r.setClearAlpha(d),u.dispose(),eu(i);const m=document.createElement("canvas");m.width=m.height=mn;const g=m.getContext("2d");if(!g)return"";const _=g.createImageData(mn,mn),x=mn*4;for(let v=0;v<mn;v++)_.data.set(p.subarray((mn-1-v)*x,(mn-v)*x),v*x);g.putImageData(_,0,0);const y=m.toDataURL("image/png");return of.set(e,y),y}const oo=Math.PI*2,Wc=8,na=.56,Cb=.45,cf=4.2,Xc=.35,Pb=1.6,Ib=1.9,ia=new it(0,8.2),sa=new it(0,-4.6),Lb=1,zi=3,ra={minX:-10.6,maxX:10.6,minZ:-8.3,maxZ:8.8},lf=new at("#ff2a2a"),hf=new at("#ffb020"),Db=new at("#39ff88");function oa(r,t){return((r-t+Math.PI)%oo+oo)%oo-Math.PI}function Nb(r,t,e,n,i){let s=0,o=1;const a=[[r,e-r,i.x-i.hw,i.x+i.hw],[t,n-t,i.z-i.hd,i.z+i.hd]];for(const[c,l,h,u]of a){if(Math.abs(l)<1e-6){if(c<h||c>u)return!1;continue}let f=(h-c)/l,d=(u-c)/l;if(f>d&&([f,d]=[d,f]),s=Math.max(s,f),o=Math.min(o,d),s>o)return!1}return!0}class Ub{constructor(){this.scene=new Ci,this.lamps=[],this.boxes=[],this.guards=[],this.taken=[],this.cardIcons=[],this.state="play",this.spotCooldown=0,this.hintText="",this.t=0,this.tl=null,this.said=new Set,this.briefing=!0,this.keys=new Map,this.camLook=new P(0,2.4,-8),this.camGoal=new P,this.lookGoal=new P,this.stopWatchingUser=()=>{}}async enter(t){this.ctx=t,this.scene.background=new at("#030507"),this.scene.fog=new Mo("#030507",20,42),t.camera.fov=40,t.camera.updateProjectionMatrix(),t.camera.position.set(0,7,-1),t.camera.lookAt(this.camLook),t.bloom.strength=.8,t.bloom.threshold=.7,this.scene.environment=t.envMap,this.scene.environmentIntensity=.35,t.grade.set({tint:"#d8ecff",lift:"#020610",saturation:.85,contrast:1.12,vignette:.5}),this.buildRoom(),this.buildDoor(),this.buildConsole(),this.buildCover(),await this.buildGuards(),this.player=await Ri.create(t.style),this.player.root.position.set(ia.x,0,ia.y),this.player.root.rotation.y=Math.PI,this.scene.add(this.player.root),this.buildHud(),t.ui.briefing("THE HEIST","Steal a keycard from each of the 3 guards without being seen, then swipe all three at the vault door console.",[{keys:["W","A","S","D"],label:"Move (or the arrow keys)"},{keys:[],label:"Yellow cones are what guards can see. Crates block their view."},{keys:["SPACE"],label:"Lift a glowing keycard: get right BEHIND a guard first"},{keys:["SPACE"],label:"Swipe the 3 cards at the console in front of the door"},{keys:[],label:"Seen = you lose your last card. Hide, then try again."}],"Press [SPACE] to begin"),this.keys=t.ui.legend("CONTROLS",[{keys:["W","A","S","D"],label:"move",id:"move"},{keys:["SPACE"],label:"lift card (from behind)",id:"lift"},{keys:["SPACE"],label:"swipe cards at console",id:"swipe"},{keys:["M"],label:"mute"}]),t.audio.startLoop("tension")}update(t){if(this.briefing){(this.ctx.input.pressed("action")||this.ctx.input.pressed("skip"))&&this.startHeist(),this.updateCamera(t);return}if(this.t+=t,this.spotCooldown=Math.max(0,this.spotCooldown-t),this.state==="play")this.movePlayer(t),this.updateGuards(t),this.updateObjective();else{this.player.update(t,0);for(const e of this.guards)e.model.update(t,0)}for(const e of this.guards)e.card.visible=e.hasCard,e.card.material.emissiveIntensity=1.5+Math.sin(this.t*6)*.6;this.updateCamera(t),this.padMat.opacity=.45+Math.sin(this.t*4)*.25}startHeist(){this.briefing=!1,this.ctx.ui.closeBriefing(),this.ctx.ui.caption("The vault · 40 m beneath Wikki Warm Spring",3.5),this.ctx.ui.routeMap(1),window.setTimeout(()=>this.say("brief",{who:"Agent Harmattan-2",lang:"Pidgin",text:"Na three card we need. Make you no wake dem.",en:"We need three keycards. Don’t alert them."}),1500)}userLine(){const{user:t}=this.ctx;return`@${t.username}${t.track?` · ${t.track}`:""}`}exit(){this.stopWatchingUser(),this.tl?.kill(),ue.killTweensOf(this.door.position),To(this.scene)}movePlayer(t){const{x:e,y:n}=this.ctx.input.axis(),i=this.player.root.position,s=Math.hypot(e,n);if(s>0){const o=e*cf,a=-n*cf;i.x+=o*t,i.z+=a*t,this.player.root.rotation.y+=oa(Math.atan2(o,a),this.player.root.rotation.y)*Math.min(1,t*12)}for(const o of this.boxes){const a=Fe.clamp(i.x,o.x-o.hw,o.x+o.hw),c=Fe.clamp(i.z,o.z-o.hd,o.z+o.hd),l=i.x-a,h=i.z-c,u=Math.hypot(l,h);u<Xc&&u>1e-5&&(i.x=a+l/u*Xc,i.z=c+h/u*Xc)}i.x=Fe.clamp(i.x,ra.minX,ra.maxX),i.z=Fe.clamp(i.z,ra.minZ,ra.maxZ),this.player.update(t,s)}updateGuards(t){const e=this.player.root.position;for(const n of this.guards){const i=n.model.root.position,s=n.route[n.idx];let o=n.facing,a=0;if(n.wait>0)n.wait-=t,o=s.look+Math.sin(this.t*1.6)*.35,n.wait<=0&&(n.idx=(n.idx+1)%n.route.length);else{const h=s.x-i.x,u=s.z-i.z,f=Math.hypot(h,u);if(f<.05)n.wait=s.wait;else{const d=Math.min(f,n.speed*t);i.x+=h/f*d,i.z+=u/f*d,o=Math.atan2(h,u),a=.8}}n.facing+=oa(o,n.facing)*Math.min(1,t*5),n.model.root.rotation.y=n.facing,n.model.update(t,a);const c=this.spotCooldown<=0&&this.canSee(n,e.x,e.z),l=n.suspicion;n.suspicion=Fe.clamp(n.suspicion+(c?t/Cb:-t*.8),0,1),l<.35&&n.suspicion>=.35&&this.ctx.audio.play("beep"),n.coneMat.color.setRGB(1,.82*(1-n.suspicion),.25*(1-n.suspicion)),n.coneMat.opacity=.16+n.suspicion*.25,n.suspicion>=1&&this.spotted()}}canSee(t,e,n){const i=t.model.root.position,s=e-i.x,o=n-i.z;if(Math.hypot(s,o)>Wc||Math.abs(oa(Math.atan2(s,o),t.facing))>na)return!1;for(const a of this.boxes)if(a.occludes&&Nb(i.x,i.z,e,n,a))return!1;return!0}nearestMark(){const t=this.player.root.position;let e=null,n=Pb;for(const i of this.guards){if(!i.hasCard)continue;const s=i.model.root.position,o=Math.hypot(t.x-s.x,t.z-s.z);if(o>=n)continue;n=o;const a=Math.abs(oa(Math.atan2(t.x-s.x,t.z-s.z),i.facing))>Ib;e={guard:i,behind:a}}return e}updateObjective(){const{input:t,audio:e,ui:n}=this.ctx,i=this.player.root.position,s=this.taken.length,o=Math.hypot(i.x-sa.x,i.z-sa.y)<Lb,a=this.nearestMark(),c=t.axis();this.keys.get("move")?.classList.toggle("active",c.x!==0||c.y!==0),this.keys.get("lift")?.classList.toggle("active",!!a?.behind),this.keys.get("swipe")?.classList.toggle("active",o&&s>=zi),a?(this.setHint(a.behind?"Press [SPACE] to lift the keycard":"Get behind them… they must not be facing you"),a.behind&&t.pressed("action")&&(a.guard.hasCard=!1,this.taken.push(a.guard),this.player.gesture("Interact"),e.play("click"),e.play("success",.5),n.flash(this.ctx.style.accentColor,.18,.4),this.refreshCards(),this.taken.length===1&&this.say("first",{who:"Agent Ibis-5",lang:"Igbo",text:"Ọ dị mma! Abụọ fọdụrụ.",en:"Good! Two left."}),this.taken.length===zi&&this.say("all",{who:"Agent Harmattan-2",lang:"Hausa",text:"Madalla! Zuwa ƙofa.",en:"Excellent! To the door."}))):o?s>=zi?(this.setHint("Press [SPACE] to swipe the keycards"),t.pressed("action")&&this.openVault()):this.setHint(`The door needs ${zi} keycards · you have ${s}`):s>=zi?this.setHint("All keycards · swipe them at the door console"):this.setHint("Sneak up behind a guard · lift their glowing keycard")}spotted(){const{audio:t,ui:e,cinema:n}=this.ctx;t.play("spotted"),e.flash("#ff2020",.45,.6),n.shake(.15,.35);const i=this.taken.pop();i?(i.hasCard=!0,this.refreshCards(),e.caption("Spotted · a keycard was taken back · get out of the light",2.8)):(e.caption("Spotted · wait for their backs to turn, then move",3),this.player.root.position.set(ia.x,0,ia.y)),this.say("spotted",{who:"Agent Ibis-5",lang:"Yoruba",text:"Wọ́n ti rí ẹ! Sá pamọ́!",en:"They’ve seen you! Hide!"});for(const s of this.guards)s.suspicion=0;this.spotCooldown=2}openVault(){const{ui:t,audio:e,cinema:n,bloom:i}=this.ctx;this.state="opening",this.setHint(""),e.stopLoop("tension");for(const o of this.guards)o.coneMat.opacity=0;const s=ue.timeline();this.tl=s,this.lamps.forEach((o,a)=>{s.call(()=>{o.emissive.copy(Db),e.play("lock")},[],.2+a*.35)}),s.call(()=>{e.play("success"),e.play("boom"),n.shake(.12,1.4)},[],1.3).to(this.door.position,{x:4.9,duration:2.6,ease:"power2.inOut"},1.4).to(i,{strength:1.1,duration:2},1.6).call(()=>t.caption("Containment wing open",2),[],2.2).call(()=>this.ctx.goTo("twist"),[],4.4)}updateCamera(t){const e=this.ctx.camera,n=this.player.root.position;this.state==="opening"?(this.camGoal.set(0,3.4,-1.2),this.lookGoal.set(0,2.5,-9)):(this.camGoal.set(n.x*.85,15,n.z+10.5),this.lookGoal.set(n.x*.9,.8,n.z-1.5));const i=1-Math.exp(-t*3.5);e.position.lerp(this.camGoal,i),this.camLook.lerp(this.lookGoal,i),e.lookAt(this.camLook)}setHint(t){t!==this.hintText&&(this.hintText=t,this.ctx.ui.hint(t||null))}say(t,e){this.said.has(t)||this.state!=="play"||(this.said.add(t),this.ctx.ui.radio(e))}refreshCards(){const t=this.taken.length;this.cardIcons.forEach((e,n)=>e.classList.toggle("have",n<t)),this.cardLabel.textContent=`KEYCARDS ${t}/${zi}`,this.lamps.forEach((e,n)=>e.emissive.copy(n<t?hf:lf))}buildRoom(){const t=this.scene,e=Le(256,256,(d,p,m)=>{d.fillStyle="#121519",d.fillRect(0,0,p,m),d.fillStyle="#191d23",d.fillRect(10,10,p-20,m-20),d.strokeStyle="#262c35",d.lineWidth=3,d.strokeRect(10,10,p-20,m-20),d.fillStyle="#2b313a";for(const[g,_]of[[22,22],[p-22,22],[22,m-22],[p-22,m-22]])d.beginPath(),d.arc(g,_,5,0,oo),d.fill()},{repeat:[11,9]}),n=new Z(new ke(22,18),new _t({map:e,roughness:.55,metalness:.5}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);const i=new _t({color:"#171a20",roughness:.9}),s=new _t({color:"#000000",emissive:"#16c6d8",emissiveIntensity:1.4}),o=[[22.6,5,.6,0,2.5,-9.3],[22.6,.8,.6,0,.4,9.3],[.6,5,18.6,-11.3,2.5,0],[.6,5,18.6,11.3,2.5,0]];for(const[d,p,m,g,_,x]of o){const y=new Z(new $t(d,p,m),i);y.position.set(g,_,x),y.receiveShadow=!0,t.add(y)}for(const[d,p,m,g]of[[22,.08,0,-8.98],[.08,18,-10.98,0],[.08,18,10.98,0]]){const _=new Z(new $t(d,.08,p),s);_.position.set(m,3.8,g),t.add(_)}const a=Le(1024,128,(d,p,m)=>{d.clearRect(0,0,p,m),d.fillStyle="rgba(200,210,220,0.55)",d.font="86px 'Bebas Neue', Impact, sans-serif",d.textAlign="center",d.textBaseline="middle",d.fillText("YANKARI BIO-VAULT · SUBLEVEL 2",p/2,m/2)}),c=new Z(new ke(9,1.1),new ze({map:a,transparent:!0}));c.position.set(0,4.45,-8.98),t.add(c);const l=Le(256,64,(d,p,m)=>{d.fillStyle="#111",d.fillRect(0,0,p,m),d.fillStyle="#c9a227";for(let g=-m;g<p+m;g+=32)d.beginPath(),d.moveTo(g,m),d.lineTo(g+16,m),d.lineTo(g+16+m,0),d.lineTo(g+m,0),d.fill()}),h=new Z(new ke(6,.8),new _t({map:l,roughness:.8}));h.rotation.x=-Math.PI/2,h.position.set(0,.01,-7.9),h.receiveShadow=!0,t.add(h),t.add(new Pr("#41506b","#0a0a0c",.6));const u=new ir("#cfe6ff",260,32,.8,.6,1.6);u.position.set(0,12,3),u.target.position.set(0,0,-2),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),u.shadow.bias=-5e-4,t.add(u,u.target);const f=new ir("#5fe3ff",90,16,.5,.5,1.5);f.position.set(0,6,-3.5),f.target.position.set(0,2.6,-8.8),t.add(f,f.target);for(const d of[-10,10]){const p=new Es("#ff2a2a",8,9,2);p.position.set(d,3.5,-8),t.add(p)}}buildDoor(){const t=new _t({color:"#59606b",metalness:.85,roughness:.35}),e=new _t({color:"#23272e",metalness:.7,roughness:.5}),n=new P(0,2.6,-8.95),i=new Z(new _n(2.45,.25,12,48),t);i.position.copy(n).setZ(-8.85),this.scene.add(i);for(let l=0;l<zi;l++){const h=new _t({color:"#111",emissive:lf,emissiveIntensity:2.2}),u=new Z(new Re(.16,16,12),h),f=Math.PI/2+(l-1)*.42;u.position.set(Math.cos(f)*2.45,n.y+Math.sin(f)*2.45,-8.55),this.scene.add(u),this.lamps.push(h)}const s=new Z(new bi(2.3,48),new ze({color:"#2f9c6c"}));s.position.copy(n).setZ(-8.98),this.scene.add(s);const o=new ae;o.position.copy(n),this.door=o,this.scene.add(o);const a=new Z(new Yt(2.3,2.3,.4,48),t);a.rotation.x=Math.PI/2,a.castShadow=a.receiveShadow=!0,o.add(a);for(let l=0;l<12;l++){const h=l/12*oo,u=new Z(new Yt(.09,.09,.12,8),e);u.rotation.x=Math.PI/2,u.position.set(Math.cos(h)*2.18,Math.sin(h)*2.18,.22),o.add(u)}for(const l of[1.7,1.15]){const h=new Z(new _n(l,.05,8,48),e);h.position.z=.21,o.add(h)}const c=new Z(new Yt(.55,.55,.2,24),e);c.rotation.x=Math.PI/2,c.position.z=.3,o.add(c);for(let l=0;l<3;l++){const h=new Z(new $t(2.2,.12,.1),t);h.rotation.z=l/3*Math.PI,h.position.z=.36,o.add(h)}}buildConsole(){const t=this.ctx.style.accentColor,e=new Z(new $t(1.4,1,.7),new _t({color:"#22262d",metalness:.7,roughness:.45}));e.position.set(0,.5,-5.6),e.castShadow=e.receiveShadow=!0,this.scene.add(e);const n=Le(256,96,(o,a,c)=>{o.fillStyle="#05080b",o.fillRect(0,0,a,c),o.fillStyle=t,o.font="40px 'Bebas Neue', Impact, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText("SWIPE 3 KEYCARDS",a/2,c/2)}),i=new Z(new ke(1.2,.45),new ze({map:n}));i.position.set(0,1.03,-5.5),i.rotation.x=-Math.PI/2+.5,this.scene.add(i),this.padMat=new ze({color:t,transparent:!0,opacity:.6,depthWrite:!1});const s=new Z(new Oa(.72,.86,40),this.padMat);s.rotation.x=-Math.PI/2,s.position.set(sa.x,.02,sa.y),this.scene.add(s),this.boxes.push({x:0,z:-5.6,hw:.7,hd:.35,occludes:!1})}buildCover(){const t=Le(128,128,(s,o,a)=>{s.fillStyle="#2f343c",s.fillRect(0,0,o,a),s.strokeStyle="#454c57",s.lineWidth=8,s.strokeRect(4,4,o-8,a-8),s.fillStyle="#c9a227",s.fillRect(14,a/2-6,o-28,12)}),e=new _t({map:t,roughness:.7,metalness:.3}),n=new _t({color:"#1f232a",roughness:.8}),i=[[-3.6,-5.6,1.4,1.4,1.3],[3.6,-5.6,1.4,1.4,1.3],[-7,.8,2.2,1.2,1.1],[-2.8,.8,1.8,1.2,1.1],[2.8,.8,1.8,1.2,1.1],[7,.8,2.2,1.2,1.1],[-3,6,1.4,1.4,1.3],[3.2,6.4,1.4,1.4,1.3]];for(const[s,o,a,c,l]of i){const h=new Z(new $t(a,l,c),e);h.position.set(s,l/2,o),h.castShadow=h.receiveShadow=!0,this.scene.add(h),this.boxes.push({x:s,z:o,hw:a/2,hd:c/2,occludes:!0})}for(const[s,o]of[[-9.8,-7.6],[9.8,-7.6],[-9.8,7.6],[9.8,7.6]]){const a=new Z(new $t(1,5,1),n);a.position.set(s,2.5,o),a.castShadow=a.receiveShadow=!0,this.scene.add(a),this.boxes.push({x:s,z:o,hw:.5,hd:.5,occludes:!0})}}async buildGuards(){const t=Le(128,128,(o,a,c)=>{const l=o.createRadialGradient(a/2,c/2,0,a/2,c/2,a/2);l.addColorStop(0,"rgba(255,255,255,0.9)"),l.addColorStop(1,"rgba(255,255,255,0.05)"),o.fillStyle=l,o.fillRect(0,0,a,c)}),e=new bi(Wc,32,-Math.PI/2-na,na*2),n=new $t(.22,.14,.03),i=[{speed:1.7,start:0,route:[{x:-8.5,z:3.4,wait:1,look:Math.PI/2},{x:8.5,z:3.4,wait:1,look:-Math.PI/2}]},{speed:1.9,start:1,route:[{x:-9,z:-2.5,wait:1.8,look:Math.PI/2},{x:0,z:-2.5,wait:1.5,look:Math.PI},{x:9,z:-2.5,wait:1.8,look:-Math.PI/2},{x:0,z:-2.5,wait:1.5,look:Math.PI}]},{speed:1.5,start:0,route:[{x:9.6,z:-6.6,wait:.8,look:-Math.PI/2},{x:6,z:-6.6,wait:.8,look:0},{x:6,z:-4.2,wait:.8,look:Math.PI/2},{x:9.6,z:-4.2,wait:.8,look:Math.PI}]}],s=await Promise.all(i.map(()=>Ri.create(hS,"guard")));i.forEach(({route:o,speed:a,start:c},l)=>{const h=s[l];h.root.position.set(o[c].x,0,o[c].z),this.scene.add(h.root);const u=new ze({map:t,color:"#ffd23f",transparent:!0,opacity:.16,depthWrite:!1,blending:lr}),f=new Z(e,u);f.rotation.x=-Math.PI/2,f.position.y=.03,h.root.add(f);const d=new ir("#ffe7b0",40,Wc+2,na,.45,1.4);d.position.set(0,1.6,.2),d.target.position.set(0,0,6),h.root.add(d,d.target);const p=new Z(n,new _t({color:"#111",emissive:hf,emissiveIntensity:1.8}));p.position.set(.12,1,-.27),h.root.add(p),this.guards.push({model:h,coneMat:u,card:p,hasCard:!0,route:o,idx:(c+1)%o.length,wait:0,speed:a,facing:0,suspicion:0})})}buildHud(){const{style:t,user:e}=this.ctx,n=this.ctx.ui.hud(),i=nt("div","badge",n),s=nt("img","face",i);s.alt="Crew photo",s.src=af(this.ctx.renderer,Pd(e));const o=nt("div","",i);nt("div","label",o,"CREW ID · YANKARI VAULT"),this.badgeCode=nt("div","code",o,t.codename),this.badgeUser=nt("div","user",o,this.userLine()),this.stopWatchingUser=this.ctx.onUserChange(()=>{s.src=af(this.ctx.renderer,Pd(this.ctx.user)),this.badgeCode.textContent=this.ctx.style.codename,this.badgeUser.textContent=this.userLine()});const a=nt("div","cards",n),c=nt("div","row",a);this.cardIcons=[nt("i","",c),nt("i","",c),nt("i","",c)],this.cardLabel=nt("div","label",a,`KEYCARDS 0/${zi}`)}}class Xa{constructor(){this.root=new ae,this.eyes=new _t({color:"#330800",emissive:"#ff3a12",emissiveIntensity:6}),this.actions=new Map,this.current=null}static async create(t=4.2){const e=new Xa;return await e.load(t),e}async load(t){const{scene:e,animations:n}=await Ha(ji.raptor),i=new ae;i.add(e),Ga(i,t),this.root.add(i),e.traverse(o=>{const a=o;if(!a.isMesh)return;const c=Array.isArray(a.material)?a.material:[a.material];for(const l of c){const h=l;h.color&&(h.name==="LightBrown"?(h.color.set("#3c4a2c"),h.emissive=new at("#1aff7a"),h.emissiveIntensity=.12):h.name==="Brown"?h.color.set("#1d1a16"):h.color.set("#0b0b0b"),h.roughness=.35,h.metalness=.15)}});const s=e.getObjectByName("Head");if(s){const o=new P;s.getWorldScale(o);const a=.05/o.x;for(const c of[-1,1]){const l=new Z(new Re(a,10,8),this.eyes);l.position.set(c*a*2.6,a*2.2,a*5.5),s.add(l)}}this.mixer=new xp(e);for(const o of n){const a=o.name.split("_").pop();this.actions.set(a,this.mixer.clipAction(o))}this.play("Idle",0)}play(t,e=.25,n=1,i=!1){const s=this.actions.get(t);if(!s||s===this.current){s&&(s.timeScale=n);return}s.reset(),s.timeScale=n,s.setLoop(i?gh:_h,1/0),s.clampWhenFinished=i,s.play(),this.current&&this.current.crossFadeTo(s,e,!1),this.current=s}update(t){this.mixer?.update(t)}}const ms=Math.PI*2,Xn=1.8,qc=220;function uf(r,t){const e=Wa(r);return Le(512,512,(n,i,s)=>{n.clearRect(0,0,i,s),n.strokeStyle="rgba(230,255,245,0.95)",n.lineCap="round";for(let o=0;o<t;o++){let a=i/2+(e()-.5)*30,c=s*.45+(e()-.5)*30,l=e()*ms;n.lineWidth=1+e()*2.5,n.beginPath(),n.moveTo(a,c);const h=6+Math.floor(e()*10);for(let u=0;u<h;u++)l+=(e()-.5)*.9,a+=Math.cos(l)*(14+e()*26),c+=Math.sin(l)*(14+e()*26),n.lineTo(a,c);n.stroke()}})}class Ob{constructor(){this.scene=new Ci,this.tl=null,this.crew=[],this.shardData=[],this.shattered=!1,this.beacons=[],this.beaconAngle=0,this.cam={px:3.2,py:2.4,pz:9.5,lx:0,ly:2.2,lz:0},this.dummy=new ge,this.done=!1}async enter(t){this.ctx=t,this.creature=await Xa.create(3.3),this.crew=await Promise.all([t.style,...ka].map(e=>Ri.create(e))),this.scene.background=new at("#020405"),this.scene.fog=new Mo("#020405",12,30),t.camera.fov=42,t.camera.updateProjectionMatrix(),t.bloom.strength=.75,t.bloom.threshold=.7,this.scene.environment=t.envMap,this.scene.environmentIntensity=.12,t.grade.set({tint:"#e6fff2",saturation:.95,contrast:1.2,vignette:.55}),this.build(),this.buildTimeline(),this.applyCam(),t.ui.showSkip(!0)}update(t){this.ctx.input.pressed("skip")&&this.finish(),this.creature.update(t);for(const e of this.crew)e.update(t,0);this.bubbles.update(t),this.splash.update(t),this.beaconAngle+=t*3,this.beacons.forEach((e,n)=>{const i=this.beaconAngle+n*Math.PI;e.position.set(Math.cos(i)*6,5.5,Math.sin(i)*6)}),this.shattered&&this.updateShards(t),this.applyCam()}exit(){this.tl?.kill(),To(this.scene),this.crack2.dispose()}finish(){this.done||(this.done=!0,this.ctx.goTo("escape"))}applyCam(){const t=this.cam;this.ctx.camera.position.set(t.px,t.py,t.pz),this.ctx.camera.lookAt(t.lx,t.ly,t.lz)}updateShards(t){for(let e=0;e<qc;e++){const n=this.shardData[e];n.v.y-=9.8*t,n.p.addScaledVector(n.v,t),n.p.y<.05&&(n.p.y=.05,n.v.multiplyScalar(.4),n.v.y=Math.abs(n.v.y)*.3,n.w.multiplyScalar(.5)),n.r.x+=n.w.x*t,n.r.y+=n.w.y*t,n.r.z+=n.w.z*t,this.dummy.position.copy(n.p),this.dummy.rotation.copy(n.r),this.dummy.scale.setScalar(n.s),this.dummy.updateMatrix(),this.shards.setMatrixAt(e,this.dummy.matrix)}this.shards.instanceMatrix.needsUpdate=!0}build(){const t=this.scene,e=Le(256,256,(d,p,m)=>{d.fillStyle="#0f1215",d.fillRect(0,0,p,m),d.strokeStyle="#1d232b",d.lineWidth=3;for(let g=0;g<=4;g++)d.beginPath(),d.moveTo(g*p/4,0),d.lineTo(g*p/4,m),d.moveTo(0,g*m/4),d.lineTo(p,g*m/4),d.stroke()},{repeat:[5,5]}),n=new Z(new bi(11,48),new _t({map:e,roughness:.4,metalness:.6}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);const i=new Z(new Yt(11,11,8,40,1,!0),new _t({color:"#12161b",roughness:.85,side:We}));i.position.y=4,t.add(i);const s=new _t({color:"#000",emissive:"#18c8d8",emissiveIntensity:1.5});for(let d=0;d<16;d++){const p=d/16*ms,m=new Z(new $t(.12,3.5,.12),s);m.position.set(Math.cos(p)*10.8,3,Math.sin(p)*10.8),t.add(m)}const o=new Pr("#2a3550","#050505",.5);t.add(o);const a=new ir("#d8f3ff",160,20,.7,.6,1.5);a.position.set(0,9,4),a.target.position.set(0,1.5,0),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),t.add(a,a.target);const c=new Es("#2bff9c",9,6,2);c.position.set(0,.6,0),t.add(c);for(let d=0;d<2;d++){const p=new Es("#ff1a1a",0,14,1.6);t.add(p),this.beacons.push(p)}const l=new _t({color:"#4b525c",metalness:.85,roughness:.35}),h=new Z(new Yt(2.15,2.3,.5,40),l);h.position.y=.25,h.receiveShadow=!0;const u=new Z(new Yt(2.15,2.15,.6,40),l);u.position.y=5.1,t.add(h,u);for(let d=0;d<6;d++){const p=d/6*ms,m=new Z(new Dh(new ap([new P(Math.cos(p)*1.6,5.4,Math.sin(p)*1.6),new P(Math.cos(p)*3.5,6.8,Math.sin(p)*3.5),new P(Math.cos(p)*7,8.2,Math.sin(p)*7)]),16,.07,6),new _t({color:"#15181c",roughness:.6}));t.add(m)}this.fluid=new Z(new Yt(Xn-.05,Xn-.05,4.3,40,1,!0),new _t({color:"#0b3d2e",emissive:"#11c47f",emissiveIntensity:.45,transparent:!0,opacity:.45,depthWrite:!1,side:je})),this.fluid.position.y=2.65,this.glass=new Z(new Yt(Xn,Xn,4.3,40,1,!0),new _t({color:"#bffff0",transparent:!0,opacity:.16,roughness:.05,metalness:.3,depthWrite:!1,side:je})),this.glass.position.y=2.65,this.crackMat=new ze({map:uf(7,14),transparent:!0,opacity:0,depthWrite:!1,side:je}),this.crack2=uf(11,40),this.crack=new Z(new Yt(Xn+.02,Xn+.02,4.3,40,1,!0,Math.PI,ms),this.crackMat),this.crack.position.y=2.65,t.add(this.fluid,this.glass,this.crack),this.creature.root.position.set(0,.5,-.1),this.creature.root.rotation.x=.12,this.creature.eyes.emissiveIntensity=0,this.creature.play("Idle",0,.25),t.add(this.creature.root);const f=[[0,4.2],[-1.6,4.8],[1.7,4.6]];this.crew.forEach((d,p)=>{d.root.position.set(f[p][0],0,f[p][1]),d.root.rotation.y=Math.PI+f[p][0]*.12,t.add(d.root)}),this.shards=new wh(new Lh(.1),new _t({color:"#d9fff4",emissive:"#3cffb0",emissiveIntensity:.6,metalness:.3,roughness:.1,transparent:!0,opacity:.85}),qc),this.shards.visible=!1,this.shards.frustumCulled=!1;for(let d=0;d<qc;d++){const p=(Math.random()-.5)*Math.PI*1.5,m=new P(Math.sin(p),0,Math.cos(p));this.shardData.push({p:m.clone().multiplyScalar(Xn).setY(.6+Math.random()*4.2),v:m.multiplyScalar(3+Math.random()*7).add(new P(0,1+Math.random()*3,1.5)),r:new Gn(Math.random()*ms,Math.random()*ms,0),w:new P(Math.random()*12,Math.random()*12,Math.random()*12),s:.6+Math.random()*1.8})}t.add(this.shards),this.bubbles=new $n({count:60,size:.12,color:"#b8ffe0",additive:!0,opacity:.8,life:[1.5,3],spawn:(d,p)=>{const m=Math.random()*ms,g=Math.random()*(Xn-.2);d.set(Math.cos(m)*g,.6,Math.sin(m)*g),p.set(0,1+Math.random()*1.2,0)}}),this.splash=new $n({count:220,size:.3,color:"#5dffb2",opacity:.6,additive:!0,emitting:!1,life:[.8,1.6],gravity:7,spawn:(d,p)=>{const m=(Math.random()-.5)*Math.PI*1.6;d.set(Math.sin(m)*Xn,.6+Math.random()*3.8,Math.cos(m)*Xn),p.set(Math.sin(m)*(2+Math.random()*5),1+Math.random()*3,Math.cos(m)*(2+Math.random()*5))}}),t.add(this.bubbles.points,this.splash.points),this.alarmTargets={hemi:o,key:a,stripMat:s,tankLight:c}}buildTimeline(){const{ui:t,audio:e,cinema:n,bloom:i}=this.ctx,s=this.cam,o=new at("#ff1a1a"),{hemi:a,key:c,stripMat:l}=this.alarmTargets,h=ue.timeline({onComplete:()=>this.finish()});this.tl=h,h.call(()=>t.letterbox(!0),[],0).call(()=>t.caption("Specimen 0-YK · containment level 5",2.2),[],.3).to(s,{px:1.6,py:2,pz:7.4,duration:2.4,ease:"sine.inOut"},0),h.call(()=>{e.startLoop("alarm"),e.play("spotted"),t.flash("#ff1a1a",.35,.8),n.shake(.04,.6);for(const u of this.beacons)u.intensity=60},[],1.8).to(a.color,{r:o.r*.4,g:o.g*.4,b:o.b*.4,duration:.4},1.8).to(c.color,{r:1,g:.25,b:.2,duration:.4},1.8).to(l.emissive,{r:o.r,g:o.g,b:o.b,duration:.3},1.8).to(this.ctx.grade.grade.tint,{r:1,g:.82,b:.8,duration:.5},1.8).to(this.ctx.grade.grade.lift,{r:.06,g:0,b:0,duration:.5},1.8),h.set(s,{px:.9,py:1.9,pz:3.3,lx:0,ly:1.4,lz:.6},3).to(s,{pz:2.9,duration:1.2,ease:"none"},3).to(this.creature.eyes,{emissiveIntensity:6,duration:.35},3.1).to(this.creature.root.rotation,{x:-.1,duration:.8,ease:"power2.out"},3.1).call(()=>this.creature.play("Idle",.3,1.4),[],3.1).call(()=>e.play("roar",.6),[],3.2),h.call(()=>t.radio({who:"Agent Harmattan-2",lang:"Hausa",text:"Me ke nan?!",en:"What is that?!"},2.4),[],4),h.call(()=>{this.crackMat.opacity=1,e.play("glass",.7),n.shake(.08,.3)},[],4.2),h.set(s,{px:-3,py:1.6,pz:6.5,lx:0,ly:2,lz:0},5).call(()=>this.creature.play("Attack",.1,1.3,!0),[],4.85).to(this.creature.root.position,{z:.45,duration:.25,ease:"power3.in"},5).call(()=>{this.crackMat.map=this.crack2,this.crackMat.needsUpdate=!0,e.play("glass"),e.play("impact",.6),n.shake(.12,.4)},[],5.25),h.call(()=>{this.glass.visible=!1,this.crack.visible=!1,this.fluid.visible=!1,this.shards.visible=!0,this.shattered=!0,this.splash.burst(220),e.play("boom"),e.play("glass"),e.play("roar"),n.shake(.35,.9),n.slowMo(.12,1.4),t.flash("#ffffff",.4,.5)},[],5.9).set(s,{px:4.2,py:.5,pz:5.2,lx:0,ly:2,lz:1},5.9).to(s,{px:3.4,py:.7,pz:4.6,duration:2.4,ease:"sine.out"},5.9).to(i,{strength:1.15,duration:.4},5.9).call(()=>this.creature.play("Jump",.1,1,!0),[],5.9).to(this.creature.root.position,{z:1.4,y:.9,duration:2.2,ease:"power1.out"},5.95),h.set(this.creature.root.position,{z:.2,y:.5},8.3).set(s,{px:.15,py:1.72,pz:2.9,lx:0,ly:1.68,lz:4.2},8.3).to(s,{pz:3.15,duration:1.6,ease:"none"},8.3).to(i,{strength:.75,duration:.3},8.3).call(()=>{t.title("RUN.","",1.2,"danger"),t.radio({who:"Agent Ibis-5",lang:"Igbo",text:"Gbaa ọsọ!",en:"Run!"},1.4),e.play("impact",.5)},[],8.4).to({},{duration:.1},9.9)}}const Xr=2e3,on={start:1150,end:1186},Yc=3,jc=3,Fb=13,Kc=7.2,df=1,ff=1.9,pf=10,aa=40,kb=90,mf=1.45,Bb=.45,zb=.05,Vb=.3,Hb=1.6,Gb=26,Wb=.22,Xb=1.2,qb=4,gf=26,Yb=3.5,_f=new P(-.55,.2,-1).normalize(),vf=[{keys:["◀","▶"],label:"steer (or A / D)",id:"steer"},{keys:["▲"],label:"hold to boost (or W) · uses the meter",id:"boost"},{keys:["▼"],label:"hold to brake (or S) · the raptor gains",id:"brake"},{keys:["SHIFT"],label:"+ steer to drift · refills boost",id:"drift"},{keys:["◀◀","▶▶"],label:"double-tap to jink sideways",id:"jink"},{keys:["SPACE"],label:"kick debris at the raptor",id:"kick"},{keys:["C"],label:"switch camera",id:"camera"}],jb=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Kb=`
uniform vec3 top;
uniform vec3 horizon;
uniform vec3 bottom;
uniform vec3 sunColor;
uniform vec3 sunDir;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  vec3 c = mix(horizon, top, smoothstep(0.0, 0.55, d.y));
  c = mix(c, bottom, smoothstep(0.0, -0.25, d.y));
  float s = max(dot(d, sunDir), 0.0);
  c += sunColor * (pow(s, 900.0) * 2.5 + pow(s, 18.0) * 0.25);
  gl_FragColor = vec4(c, 1.0);
}`;class $b{constructor(){this.scene=new Ci,this.wheels=[],this.decor=[],this.obstacles=[],this.rearCam=new Ge(55,3.2,.1,600),this.state="intro",this.camMode="chase",this.stateT=0,this.t=0,this.dist=0,this.x=0,this.vx=0,this.speed=10,this.hits=0,this.fails=0,this.invuln=0,this.slow=1,this.gap=42,this.nextSpawn=150,this.roarIn=4,this.jumping=0,this.leaving=!1,this.caughtAt=0,this.boost=1,this.boosting=!1,this.braking=!1,this.drifting=!1,this.yawExtra=0,this.jinkT=0,this.jinkDir=0,this.jinkCd=0,this.kickCd=0,this.skidIn=0,this.stumble=0,this.briefing=!0,this.keys=new Map,this.tipAt=new Map,this.lastThreat=-1,this.said=new Set,this.camOffset=new P,this.lookOffset=new P,this.camGoal=new P,this.lookGoal=new P,this.tmp=new P}async enter(t){this.ctx=t,await mb("130px 'Bebas Neue'"),this.scene.fog=new Mo("#e9b58e",110,420),t.bloom.strength=.45,t.bloom.threshold=.9,this.scene.environment=t.envMap,this.scene.environmentIntensity=.2,t.grade.set({tint:"#fff4e6",saturation:1.15,contrast:1.14,vignette:.32}),this.buildWorld(),this.buildRiver(),await this.buildTemplates(),this.buildDecor(),await this.buildJeep(),this.buildGate(),this.raptor=await Xa.create(5.2),this.raptor.root.rotation.y=Math.PI,this.raptor.play("Run",0),this.scene.add(this.raptor.root),this.buildParticles(),this.buildHud(),t.audio.startLoop("engine"),t.audio.startLoop("action"),this.reset(!0),t.ui.briefing("THE ESCAPE","Outrun the raptor to the Yankari main gate, 2 km away. The jeep drives itself: you steer and dodge. 3 hits and you’re caught. Caught 3 times in a row and you start the whole game again.",vf,"Press [SPACE] to start the engine"),this.keys=t.ui.legend("DRIVING",vf)}startChase(){this.briefing=!1,this.ctx.ui.closeBriefing(),this.ctx.ui.routeMap(2),this.announce()}announce(){const{ui:t}=this.ctx;t.caption("Dawn · 2 km to the main gate · past the Gaji River and Kalban Hill",3.5),t.hint("Hold [↑] to boost · [SPACE] kicks debris at the raptor"),this.ctx.audio.play("roar",.8)}tip(t,e,n=9){const i=performance.now()/1e3;i-(this.tipAt.get(t)??-1e9)<n||(this.tipAt.set(t,i),this.ctx.ui.prompt(e))}updateTips(){if(this.state!=="drive")return;const t=-this.dist,e=this.obstacles.some(n=>{const i=t-n.obj.position.z;return!n.hit&&i>12&&i<45&&Math.abs(n.obj.position.x-this.x)<n.r+n.hw+1.3});this.gap<11&&this.kickCd<=0?this.tip("kick","Raptor close! Press [SPACE] to kick debris in its face"):this.gap<11&&this.boost>.3?this.tip("boost","Raptor close! Hold [↑] to boost away"):this.braking&&this.gap<9?this.tip("brake","Careful! Braking with [↓] lets the raptor catch you",5):e?this.tip("dodge","Obstacle ahead! [◀] [▶] steer · double-tap to jink",7):this.boost<.12?this.tip("drift","Boost empty · hold [SHIFT] while steering to drift and recharge",14):this.dist>on.start-160&&this.dist<on.start-60&&this.tip("river","Gaji River ahead · water slows you down · weave past the hippos",30)}updateLegend(){const t=this.keys,e=this.ctx.input.axis();t.get("steer")?.classList.toggle("active",e.x!==0),t.get("boost")?.classList.toggle("active",this.boosting),t.get("brake")?.classList.toggle("active",this.braking),t.get("drift")?.classList.toggle("active",this.drifting),t.get("jink")?.classList.toggle("active",this.jinkT>0),t.get("jink")?.classList.toggle("cool",this.jinkCd>0&&this.jinkT<=0),t.get("kick")?.classList.toggle("cool",this.kickCd>0),t.get("kick")?.classList.toggle("active",this.kickCd<=0&&this.gap<gf)}update(t){const{input:e}=this.ctx;if(this.briefing){(e.pressed("action")||e.pressed("skip"))&&this.startChase(),this.raptor.update(t);return}this.t+=t,this.stateT+=t,this.invuln=Math.max(0,this.invuln-t),this.slow=Math.min(1,this.slow+t*.35);const n=Math.min(this.dist/Xr,1);e.pressed("camera")&&(this.camMode=this.camMode==="chase"?"hood":"chase");const i=this.state==="intro"||this.state==="drive",s=e.axis(),o=i?Math.sign(s.x):0;this.jinkCd=Math.max(0,this.jinkCd-t),this.kickCd=Math.max(0,this.kickCd-t),this.jinkT=Math.max(0,this.jinkT-t),this.stumble=Math.max(0,this.stumble-t);const a=this.boosting;this.boosting=i&&s.y>0&&this.boost>.02,this.braking=i&&s.y<0,this.drifting=i&&e.isDown("drift")&&o!==0,this.boosting&&!a&&(this.ctx.audio.play("boost"),this.ctx.cinema.shake(.08,.3)),this.boost=Fe.clamp(this.boost+t*(this.boosting?-.4:zb)+(this.drifting&&Math.abs(this.vx)>6?t*Vb:0),0,1),i&&this.jinkCd<=0&&(e.pressed("jinkLeft")||e.pressed("jinkRight"))&&(this.jinkDir=e.pressed("jinkLeft")?-1:1,this.jinkT=Wb,this.jinkCd=Xb,this.ctx.audio.play("whoosh",.7)),this.state==="drive"&&this.kickCd<=0&&e.pressed("action")&&this.kickDebris();const c=this.dist>on.start&&this.dist<on.end;let l=Fe.lerp(24,34,Fe.smoothstep(n,0,1))*this.slow*(c?.6:1);this.boosting&&(l*=mf),this.braking&&(l*=Bb),this.state==="caught"&&(l=0),this.state==="won"&&(l=9);const h=this.braking?3.5:this.boosting?2.2:1.4;if(this.speed+=(l-this.speed)*Math.min(1,t*(this.state==="caught"?3:h)),this.dist+=this.speed*t,this.jinkT>0)this.vx=this.jinkDir*Gb;else{const u=o*Fb*(this.drifting?Hb:1);this.vx+=(u-this.vx)*Math.min(1,t*(this.drifting?3:6))}switch(this.yawExtra+=((this.drifting?-o*.45:0)-this.yawExtra)*Math.min(1,t*6),this.drifting&&(this.skidIn-=t,this.skidIn<=0&&(this.skidIn=.32,this.ctx.audio.play("skid"))),this.x+=this.vx*t,Math.abs(this.x)>Kc&&(this.x=Math.sign(this.x)*Kc,this.vx=0),this.ctx.audio.setEngine(this.speed/(34*mf)),this.updateJeep(t),this.updateSpawns(n),this.updateObstacles(t),this.updateRaptor(t),this.updateWorld(),this.dust.emitting=this.speed>4&&!c,this.spray.emitting=c&&this.speed>4,this.debris.update(t),this.dust.update(t),this.spray.update(t),this.motes.update(t),this.updateCamera(t),this.updateHud(n),this.updateRadio(n),this.updateTips(),this.updateLegend(),this.state){case"intro":this.stateT>4.2&&this.setState("drive");break;case"drive":this.stateT>7&&this.ctx.ui.hint(null),this.hits>=Yc?this.caught():this.dist>=Xr&&this.won();break;case"caught":performance.now()-this.caughtAt>600&&(e.pressed("action")||e.pressed("skip"))&&(this.fails>=jc?this.leave("coldOpen"):this.reset(!1));break;case"won":this.stateT>4.8&&this.leave("credits");break}}afterRender(t){if(this.state!=="intro"&&this.state!=="drive")return;const e=Math.min(320,window.innerWidth*.26),n=e/3.2,i=(window.innerWidth-e)/2,s=window.innerHeight-18-n,o=this.jeep.position;this.rearCam.aspect=e/n,this.rearCam.updateProjectionMatrix(),this.rearCam.position.set(o.x,2.1,o.z+2.4),this.rearCam.lookAt(o.x,1.3,o.z+30);const a=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1,t.setScissorTest(!0),t.setScissor(i,s,e,n),t.setViewport(i,s,e,n),t.render(this.scene,this.rearCam),t.setScissorTest(!1),t.setViewport(0,0,window.innerWidth,window.innerHeight),t.shadowMap.autoUpdate=a}exit(){for(const t of this.obstacles)this.scene.remove(t.obj,t.warn);To(this.scene);for(const t of Object.values(this.templates))eu(t);this.warnGeo.dispose(),this.warnMat.dispose()}setState(t){this.state=t,this.stateT=0}leave(t){this.leaving||(this.leaving=!0,this.ctx.goTo(t))}reset(t){const{ui:e}=this.ctx;for(const n of this.obstacles)this.scene.remove(n.obj,n.warn);this.obstacles=[],this.dist=0,this.x=0,this.vx=0,this.speed=12,this.hits=0,this.invuln=0,this.slow=1,this.gap=42,this.nextSpawn=150,this.jeep.visible=!0,this.said.clear(),this.layoutDecor(),this.placeHippos(),this.camOffset.set(-4.6,1.3,-5.5),this.lookOffset.set(0,1.1,1),this.setState("intro"),this.hud.pips.forEach(n=>n.classList.remove("lost")),this.hud.tries.textContent=this.fails>0?`TRY ${this.fails+1}/${jc}`:"",t||(e.clearTitle(),this.announce()),this.boost=1,this.kickCd=0,this.jinkCd=0,this.raptor.play("Run",.2)}hit(t){const{audio:e,cinema:n,ui:i}=this.ctx;this.hits++,this.invuln=1.4,this.slow=.5,this.gap-=6,t.hit=!0,e.play("impact"),n.shake(.35,.5),i.flash("#ff7a2a",.35,.4),t.kind==="elephant"||t.kind==="hippo"?(e.play("trumpet"),this.vx=Math.sign(this.x-t.obj.position.x||1)*12):t.kind!=="log"&&t.kind!=="mound"&&(t.fly=new P(Math.sign(t.obj.position.x-this.x||1)*6,7,-this.speed*.4)),this.hud.pips.forEach((s,o)=>s.classList.toggle("lost",o>=Yc-this.hits)),this.hits===2&&this.say("hold",{who:"Agent Ibis-5",lang:"Igbo",text:"Jide n’ike!",en:"Hold on tight!"})}kickDebris(){const{audio:t,ui:e}=this.ctx;this.kickCd=qb,this.debris.burst(140),t.play("kick"),this.gap<gf&&(this.stumble=1.6,this.gap+=8,this.raptor.play("Jump",.1,.6,!0),t.play("roar",.6),e.flash("#c79a5a",.15,.3),this.say("kick",{who:"Agent Harmattan-2",lang:"Pidgin",text:"E don chop sand! Go go go!",en:"It got a face full of sand! Go, go, go!"}))}bite(){const{audio:t,cinema:e,ui:n}=this.ctx;this.hits++,this.invuln=1.4,this.gap+=9,this.raptor.play("Attack",.05,1.4,!0),this.jumping=.8,t.play("roar"),t.play("impact",.7),e.shake(.4,.5),n.flash("#ff2020",.35,.4),this.hud.pips.forEach((i,s)=>i.classList.toggle("lost",s>=Yc-this.hits))}caught(){const{audio:t,cinema:e,ui:n}=this.ctx;this.setState("caught"),this.caughtAt=performance.now(),this.fails++,this.raptor.play("Attack",.1),t.play("roar"),t.play("impact"),e.slowMo(.25,.8),e.shake(.4,1),n.flash("#ff2020",.5,.8),n.hint(null);const i=jc-this.fails;i<=0?n.title("CAUGHT","Three times in a row · SPACE to start from the beginning",1/0,"danger"):n.title("CAUGHT",`SPACE to try again · ${i} ${i===1?"try":"tries"} left`,1/0,"danger")}won(){const{audio:t,cinema:e,ui:n}=this.ctx;this.setState("won"),this.fails=0,this.raptor.play("Walk",.5),t.play("success"),t.play("roar",.5),e.slowMo(.35,1.2),n.hint(null),n.title("ESCAPED","Sunrise over Yankari",3),n.routeMap(4,3)}say(t,e){this.said.has(t)||(this.said.add(t),this.ctx.ui.radio(e))}updateRadio(t){this.state!=="drive"&&this.state!=="intro"||(this.state==="intro"&&this.stateT>1&&this.say("behind",{who:"Agent Ibis-5",lang:"Yoruba",text:"Ó ń bọ̀ lẹ́yìn wa!",en:"It’s coming up behind us!"}),this.dist>on.start-140&&this.say("river",{who:"Agent Ibis-5",lang:"Yoruba",text:"Odò Gaji níwájú. Ṣọ́ra fún erinmi!",en:"Gaji River ahead. Watch out for the hippos!"}),t>.9&&this.say("gate",{who:"Agent Harmattan-2",lang:"Pidgin",text:"Gate don near! No stop!",en:"The gate is close! Don’t stop!"}))}updateJeep(t){const e=this.jeep;e.position.set(this.x,Math.sin(this.t*13)*.02+Math.sin(this.t*7.3)*.015,-this.dist),e.rotation.y=-this.vx*.03+this.yawExtra,e.rotation.z=this.vx*.012*(this.drifting?1.6:1),e.rotation.x=this.braking?.04:this.boosting?-.03:0,this.brakeMat.emissiveIntensity=this.braking?4:.6;for(const n of this.wheels)n.rotation.x-=this.speed*t/.45;e.visible=this.camMode==="hood"||this.invuln<=0||Math.floor(this.invuln*12)%2===0,this.driver.update(t,0),this.passenger.update(t,0),this.passenger.root.rotation.y=Math.PI+Math.sin(this.t*.8)*.9}updateSpawns(t){if(!(this.state!=="drive"&&this.state!=="intro"))for(;this.dist+170>this.nextSpawn&&this.nextSpawn<Xr-90;){const e=this.nextSpawn;(e<on.start-25||e>on.end+20)&&this.spawnRow(e,t),this.nextSpawn+=Fe.lerp(32,20,t)+Math.random()*8}}spawnRow(t,e){const n=-t,i=Math.random(),s=(t-this.dist)/Math.max(this.speed,20);if(e>.1&&i<.2){const a=Math.random()<.5?1:-1,c=-a*3*s+(Math.random()*4-2),l=2+Math.floor(Math.random()*2);for(let h=0;h<l;h++)this.addObstacle("elephant",c-a*h*5.5,n-h*2.5,a*3,h>0?.65:1);this.say("elephants",{who:"Agent Harmattan-2",lang:"Hausa",text:"Giwaye! Ka kauce!",en:"Elephants! Swerve!"});return}if(e>.2&&i<.36){const a=Math.random()<.5?1:-1,c=-a*6*s;for(let l=0;l<5;l++)this.addObstacle("baboon",c-a*l*1.6,n-Math.random()*3,a*6);this.say("baboons",{who:"Agent Ibis-5",lang:"Igbo",text:"Enwe! Ọtụtụ enwe!",en:"Monkeys! Lots of monkeys!"});return}if(e>.3&&i<.48){const a=Math.random()<.5?1:-1;this.addObstacle("antelope",-a*10*s+(Math.random()*3-1.5),n,a*10);return}if(i<.64){const a=Math.random()<.5?-1:1;this.addObstacle("log",a*(2+Math.random()*2.5),n,0);return}const o=(Math.random()*2-1)*6;if(this.addObstacle(Math.random()<.5?"rock":"mound",o,n,0),Math.random()<.35+e*.4){const a=4.6+Math.random()*2.5;this.addObstacle(Math.random()<.5?"rock":"mound",o>0?o-a:o+a,n-Math.random()*6,0)}}addObstacle(t,e,n,i,s=1){const o=this.templates[t].clone();o.position.set(e,0,n);let a=1,c=0;switch(t){case"rock":{const h=.8+Math.random()*.5;o.scale.setScalar(h),o.rotation.y=Math.random()*Math.PI*2,a=1.1*h;break}case"mound":a=.9;break;case"log":a=.6,c=3.4;break;case"elephant":o.scale.multiplyScalar(s),o.rotation.y=Math.sign(i)*(Math.PI/2),a=1.9*s;break;case"baboon":o.rotation.y=Math.sign(i)*(Math.PI/2),a=.45;break;case"antelope":o.rotation.y=Math.sign(i)*(Math.PI/2),a=.9;break;case"hippo":o.rotation.y=Math.random()*Math.PI*2,a=1.6;break}const l=new Z(this.warnGeo,this.warnMat);l.rotation.x=-Math.PI/2,l.scale.set((a+c)*1.3,(a+.3)*1.3,1),l.position.set(e,.12,n),l.visible=!1,this.scene.add(o,l),this.obstacles.push({kind:t,obj:o,r:a,hw:c,vx:i,hop:Math.random()*6,hit:!1,fly:null,warn:l})}placeHippos(){for(let t=0;t<4;t++){const e=-6+t*4+(Math.random()*2-1);this.addObstacle("hippo",e,-(on.start+6+Math.random()*24),0)}}updateObstacles(t){const e=-this.dist,n=[];this.warnMat.opacity=.35+(.5+Math.sin(this.t*10)*.5)*.4;for(const i of this.obstacles){const s=i.obj.position;i.fly?(s.addScaledVector(i.fly,t),i.fly.y-=20*t,i.obj.rotation.x+=t*6,i.obj.rotation.z+=t*4):i.vx!==0?(s.x+=i.vx*t,i.hop+=t*(i.kind==="antelope"?7:i.kind==="baboon"?14:5),i.kind==="antelope"?s.y=Math.abs(Math.sin(i.hop))*1.4:i.kind==="baboon"?s.y=Math.abs(Math.sin(i.hop))*.25:i.obj.rotation.z=Math.sin(i.hop)*.03):i.kind==="hippo"&&(i.hop+=t,s.y=-.9+Math.sin(i.hop*1.3)*.12);const o=e-s.z;if(i.warn.visible=!i.hit&&o>4&&o<kb&&Math.abs(s.x)<Kc+3,i.warn.position.x=s.x,!i.hit&&this.invuln<=0&&this.jinkT<=0&&(this.state==="drive"||this.state==="intro")&&s.y<1.2){const l=Fe.clamp(this.x,s.x-i.hw,s.x+i.hw)-this.x,h=s.z-e,u=Fe.clamp(l,-df,df),f=Fe.clamp(h,-ff,ff);(l-u)**2+(h-f)**2<i.r*i.r&&this.hit(i)}s.z>e+14||Math.abs(s.x)>60||s.y<-6?this.scene.remove(i.obj,i.warn):n.push(i)}this.obstacles=n}updateRaptor(t){let e=20-this.hits*5+Math.sin(this.t*.7)*2,n=.35;this.state==="intro"&&(e=24),this.state==="caught"&&(e=5.5,n=3),this.state==="won"&&(e=70);const i=this.gap;if(this.gap+=(e-this.gap)*Math.min(1,t*n),this.state==="drive"){const o=Fe.lerp(24,34,Fe.smoothstep(this.dist/Xr,0,1)),a=this.stumble>0?o*.5:o*1.02;this.gap=Fe.clamp(this.gap+(this.speed-a)*t*.7,2,60),this.gap<=Yb&&this.invuln<=0&&this.bite()}const s=this.raptor;s.root.position.x+=(this.x-s.root.position.x)*Math.min(1,t*1.5),s.root.position.z=-this.dist+this.gap,this.state==="won"?s.root.rotation.y+=(0-s.root.rotation.y)*Math.min(1,t*2):s.root.rotation.y=Math.PI,this.jumping=Math.max(0,this.jumping-t),this.state==="drive"&&this.stumble>0||(this.state==="drive"&&i-this.gap>.04&&this.gap<14&&this.jumping<=0?(s.play("Jump",.1,1.2,!0),this.jumping=1.1):this.state==="drive"&&this.jumping<=0&&s.play("Run",.2,Fe.clamp(this.speed/26,.8,1.5))),s.update(t),this.roarIn-=t,this.roarIn<=0&&this.state==="drive"&&(this.roarIn=6+Math.random()*5,this.ctx.audio.play("roar",Fe.clamp(1.4-this.gap/30,.3,1)))}updateWorld(){const t=-this.dist,e=Math.round(t/pf)*pf;this.ground.position.z=e,this.road.position.z=e,this.grass.position.z=Math.floor(t/aa)*aa,this.hills.position.z=t,this.sky.position.copy(this.ctx.camera.position),this.sun.position.copy(this.jeep.position).addScaledVector(_f,80),this.sun.target.position.copy(this.jeep.position);for(const n of this.decor)n.position.z>t+25&&(n.position.z-=360),n.visible=!(-n.position.z>on.start-4&&-n.position.z<on.end+4)}updateCamera(t){const e=this.ctx.camera,n=this.jeep.position,i=this.camMode==="hood";this.state==="drive"||this.state==="intro"&&this.stateT>=2.9?i?(this.camGoal.set(-.45,2.05,-.2),this.lookGoal.set(-this.x*.05,1.4,-30)):(this.camGoal.set(-this.x*.25,4.1,9.2),this.lookGoal.set(-this.x*.15,.8,-24)):this.state==="intro"?(this.camGoal.set(-4.6,1.3,-5.5),this.lookGoal.set(0,1.1,1)):this.state==="caught"?(this.camGoal.set(3.4,2.4,-4.5),this.lookGoal.set(0,1.6,4)):(this.camGoal.set(5.2,1.6,-2.5),this.lookGoal.set(0,1.2,.5));const o=this.state==="drive"&&i?1:1-Math.exp(-t*(this.state==="drive"?6:2.2));this.camOffset.lerp(this.camGoal,o),this.lookOffset.lerp(this.lookGoal,o),e.position.copy(n).add(this.camOffset),this.tmp.copy(n).add(this.lookOffset),e.lookAt(this.tmp),e.rotateZ(-this.vx*(i?.01:.005));const a=this.state==="drive"?(i?70:56)+this.speed/34*10+(this.boosting?6:0):50;Math.abs(e.fov-a)>.05&&(e.fov+=(a-e.fov)*Math.min(1,t*3),e.updateProjectionMatrix())}updateHud(t){const e=`${(t*100).toFixed(1)}%`;this.hud.fill.style.width=e,this.hud.me.style.left=e,this.hud.rear.style.display=this.state==="intro"||this.state==="drive"?"block":"none",this.hud.boostFill.style.width=`${(this.boost*100).toFixed(0)}%`,this.hud.boostFill.classList.toggle("on",this.boosting),this.hud.kick.textContent=this.kickCd>0?`DEBRIS ${this.kickCd.toFixed(1)}s`:"DEBRIS READY · SPACE",this.hud.kick.classList.toggle("ready",this.kickCd<=0);const n=Math.max(0,Math.round(this.gap));n!==this.lastThreat&&(this.lastThreat=n,this.hud.threat.textContent=`RAPTOR ${n} M`,this.hud.threat.classList.toggle("close",n<12))}buildWorld(){const t=this.scene,e=Wa(606);this.sky=new Z(new Re(450,32,16),new Ve({vertexShader:jb,fragmentShader:Kb,uniforms:{top:{value:new at("#5d7fb8")},horizon:{value:new at("#f3c39a")},bottom:{value:new at("#c99a74")},sunColor:{value:new at("#fff0c8")},sunDir:{value:_f}},side:We,depthWrite:!1,fog:!1})),this.sky.renderOrder=-1,t.add(this.sky),t.add(new Pr("#ffe2c4","#6b5a3a",1.3)),this.sun=new sr("#ffd3a3",2.4),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const n=this.sun.shadow.camera;n.left=n.bottom=-30,n.right=n.top=30,n.near=1,n.far=180,this.sun.shadow.bias=-4e-4,t.add(this.sun,this.sun.target);const i=Le(256,256,(d,p,m)=>{d.fillStyle="#a08a50",d.fillRect(0,0,p,m);for(let g=0;g<2600;g++){const _=e();d.fillStyle=_<.4?"rgba(120,110,50,0.6)":_<.7?"rgba(190,160,95,0.5)":"rgba(80,70,35,0.5)",d.fillRect(e()*p,e()*m,1+e()*3,1+e()*6)}},{repeat:[70,70]});this.ground=new Z(new ke(700,700),new _t({map:i,roughness:1})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,t.add(this.ground);const s=Le(128,256,(d,p,m)=>{const g=d.createLinearGradient(0,0,p,0);g.addColorStop(0,"rgba(155,107,68,0)"),g.addColorStop(.15,"rgba(155,107,68,1)"),g.addColorStop(.85,"rgba(155,107,68,1)"),g.addColorStop(1,"rgba(155,107,68,0)"),d.fillStyle=g,d.fillRect(0,0,p,m),d.fillStyle="rgba(95,62,38,0.55)",d.fillRect(p*.3,0,7,m),d.fillRect(p*.64,0,7,m);for(let _=0;_<500;_++)d.fillStyle=e()>.5?"rgba(190,140,95,0.5)":"rgba(90,60,35,0.4)",d.fillRect(p*.12+e()*p*.76,e()*m,2,2)},{repeat:[1,70]});this.road=new Z(new ke(17,700),new _t({map:s,roughness:1,transparent:!0,depthWrite:!1})),this.road.rotation.x=-Math.PI/2,this.road.position.y=.03,this.road.receiveShadow=!0,t.add(this.road);const o=110,a=9,c=[];for(let d=0;d<o;d++){const p=e()<.5?-1:1;c.push([p*(9.5+e()*55),-e()*aa,.4+e()*.7])}this.grass=new wh(new Vi(.3,.9,5).translate(0,.45,0),new _t({color:"#ffffff",roughness:1}),o*a);const l=new Lt,h=new at;for(let d=0;d<a;d++)c.forEach(([p,m,g],_)=>{l.makeScale(g*1.4,g,g*1.4).setPosition(p,0,m-(d-1)*aa),this.grass.setMatrixAt(d*o+_,l),this.grass.setColorAt(d*o+_,h.set(_%3===0?"#9c9440":_%3===1?"#c2a35a":"#b19a4c"))});this.grass.frustumCulled=!1,t.add(this.grass),this.hills=new ae;const u=new _t({color:"#9a6a52",roughness:1,flatShading:!0});for(let d=0;d<12;d++){const p=new Z(new Vi(30+e()*50,10+e()*18,7),u),m=d%2?1:-1;p.position.set(m*(70+e()*160),0,-250-e()*120),p.scale.z=.6,this.hills.add(p)}const f=new Z(new Yt(55,95,38,9),new _t({color:"#8b5a45",roughness:1,flatShading:!0}));f.position.set(35,19,-360),f.scale.z=.5,this.hills.add(f),t.add(this.hills)}buildRiver(){const t=on.end-on.start,e=Le(128,128,(c,l,h)=>{c.fillStyle="#3f8f8a",c.fillRect(0,0,l,h),c.strokeStyle="rgba(220,255,250,0.35)";for(let u=0;u<26;u++){c.lineWidth=1+Math.random()*2,c.beginPath();const f=Math.random()*h;c.moveTo(0,f),c.bezierCurveTo(l*.3,f+6,l*.6,f-6,l,f),c.stroke()}},{repeat:[40,4]}),n=new Z(new ke(400,t),new _t({map:e,roughness:.15,metalness:.3,transparent:!0,opacity:.92}));n.rotation.x=-Math.PI/2,n.position.set(0,.08,-1168),n.receiveShadow=!0,this.scene.add(n);const i=new _t({color:"#6e5233",roughness:1});for(const c of[on.start,on.end]){const l=new Z(new ke(400,4),i);l.rotation.x=-Math.PI/2,l.position.set(0,.05,-c),this.scene.add(l)}const s=Le(512,128,(c,l,h)=>{c.fillStyle="#4a3220",c.fillRect(0,0,l,h),c.fillStyle="#f2dfb8",c.font="70px 'Bebas Neue', Impact, sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText("GAJI RIVER",l/2,h/2+4)}),o=new Z(new ke(4,1),new _t({map:s,side:je}));o.position.set(-9.5,2.4,-1138),o.rotation.y=.3;const a=new Z(new Yt(.1,.1,2.4,6),new _t({color:"#4a3220"}));a.position.set(-9.5,1.2,-1138),this.scene.add(o,a)}async buildTemplates(){const t=new _t({color:"#7d6a5a",roughness:.95,flatShading:!0}),e=new _t({color:"#a3593a",roughness:1,flatShading:!0}),n=new _t({color:"#7a6a58",roughness:1,flatShading:!0}),i=(d,p,m,g,_,x)=>{const y=new Z(d,p);return y.position.set(g,_,x),y.castShadow=!0,y.receiveShadow=!0,m.add(y),y},s=new ae;i(new fo(1,0),t,s,0,.5,0).scale.set(1,.75,1.1),i(new fo(.5,0),t,s,.7,.25,.4);const o=new ae;i(new Vi(.9,3.2,7),e,o,0,1.6,0),i(new Vi(.45,1.8,6),e,o,.5,.9,.2),i(new Vi(.35,1.3,6),e,o,-.45,.65,-.1);const a=new ae;i(new Yt(.55,.75,6.8,9),n,a,0,.6,0).rotation.z=Math.PI/2,i(new Yt(.2,.3,1.6,6),n,a,2.2,1.2,.2).rotation.z=-.5,i(new Yt(.15,.25,1.2,6),n,a,-1.5,1.1,-.2).rotation.z=.6;const c=[[ji.elephant,5.2],[ji.baboon,1.1],[ji.antelope,2.2],[ji.hippo,3.8]],[l,h,u,f]=await Promise.all(c.map(async([d,p])=>{const{scene:m}=await Ha(d),g=new ae;g.add(m),Ga(g,p);const _=new ae;return _.add(g),_}));this.templates={rock:s,mound:o,log:a,elephant:l,baboon:h,antelope:u,hippo:f},this.warnGeo=new Oa(.82,1,32),this.warnMat=new ze({color:"#ff3b1f",transparent:!0,opacity:.6,depthWrite:!1})}buildDecor(){const t=new _t({color:"#4a3826",roughness:1}),e=new _t({color:"#4f5a2a",roughness:1,flatShading:!0}),n=new _t({color:"#8a7766",roughness:1,flatShading:!0}),i=(c,l,h,u,f)=>{const d=new Z(c,l);return d.position.set(h,u,f),d.castShadow=!0,d},s=new ae,o=i(new Re(1,12,6),e,0,3.25,0);o.scale.set(2.4,.42,2),s.add(i(new Yt(.12,.2,2.6,6),t,0,1.3,0),o);const a=new ae;a.add(i(new Yt(.9,1.4,4.5,9),n,0,2.25,0));for(let c=0;c<5;c++){const l=c/5*Math.PI*2,h=i(new Yt(.1,.3,1.8,5),n,Math.cos(l)*.7,5,Math.sin(l)*.7);h.rotation.set(Math.sin(l)*.6,0,-Math.cos(l)*.6),a.add(h)}for(let c=0;c<48;c++){const l=c%6,h=l===0?a.clone():l===1?this.templates.mound.clone():s.clone();h.scale.setScalar(l===0?1.4+Math.random()*.8:1.1+Math.random()*1.1),h.rotation.y=Math.random()*Math.PI*2,this.scene.add(h),this.decor.push(h)}for(let c=0;c<6;c++){const l=(c%2?this.templates.antelope:this.templates.elephant).clone();l.rotation.y=Math.random()*Math.PI*2,this.scene.add(l),this.decor.push(l)}}layoutDecor(){this.decor.forEach((t,e)=>{const n=e%2?1:-1;t.position.set(n*(14+Math.random()*60),0,20-Math.random()*360)})}async buildJeep(){const{style:t,user:e}=this.ctx,n=new ae;this.jeep=n;const i=new _t({color:"#b08d57",roughness:.7,metalness:.2}),s=new _t({color:"#1e1e1e",roughness:.8}),o=new _t({color:"#8d9299",metalness:.8,roughness:.35}),a=new _t({color:t.accentColor,emissive:t.accentColor,emissiveIntensity:.4,roughness:.5}),c=new _t({color:"#fff3d0",emissive:"#fff3d0",emissiveIntensity:3}),l=(p,m,g,_,x,y=n)=>{const v=new Z(p,m);return v.position.set(g,_,x),v.castShadow=!0,v.receiveShadow=!0,y.add(v),v};l(new $t(2,.55,3.9),i,0,.85,0),l(new $t(1.9,.35,1.3),i,0,1.25,-1.25),l(new $t(1.6,.45,.08),s,0,1,-1.97);for(const p of[-1,1])l(new Yt(.13,.13,.06,14),c,p*.65,1.15,-1.99).rotation.x=Math.PI/2,l(new $t(.02,.1,3.6),a,p*1.005,1.02,0);l(new $t(2.1,.18,.2),s,0,.62,-2),l(new $t(2.1,.18,.2),s,0,.62,2),this.brakeMat=new _t({color:"#400",emissive:"#ff1a1a",emissiveIntensity:.6});for(const p of[-1,1])l(new $t(.28,.14,.04),this.brakeMat,p*.78,.95,1.97);for(const p of[-.45,.45])l(new $t(.55,.5,.5),s,p,1.25,.25);l(new $t(1.7,.45,.5),s,0,1.25,1.35);for(const[p,m]of[[-1,-1.3],[1,-1.3],[-1,1.3],[1,1.3]]){const g=new ae;g.position.set(p,.45,m),n.add(g),l(new Yt(.45,.45,.36,18),s,0,0,0,g).rotation.z=Math.PI/2,l(new $t(.38,.5,.1),o,0,0,0,g),l(new $t(.34,.1,1),s,p,1,m),this.wheels.push(g)}l(new _n(.92,.05,8,24,Math.PI),o,0,1.12,.65).scale.y=1.05,l(new $t(1.9,.06,.06),o,0,1.95,-.55);for(const p of[-1,1])l(new $t(.06,.6,.06),o,p*.93,1.65,-.55);const h=new Z(new ke(1.8,.55),new _t({color:"#9fc6d6",transparent:!0,opacity:.18,roughness:.05,metalness:.5,side:je}));h.position.set(0,1.65,-.55),n.add(h),l(new _n(.36,.13,8,18),s,0,1.58,2.08),l(new _n(.17,.03,6,16),s,-.45,1.72,-.3).rotation.x=-1;const u=Le(1024,200,(p,m,g)=>{const _=`@${e.username}`.toUpperCase();let x=150;for(p.font=`${x}px 'Bebas Neue', Impact, sans-serif`;p.measureText(_).width>m*.9&&x>40;)x-=6,p.font=`${x}px 'Bebas Neue', Impact, sans-serif`;p.textAlign="center",p.textBaseline="middle",p.lineJoin="round",p.lineWidth=12,p.strokeStyle="rgba(25,18,10,0.9)",p.strokeText(_,m/2,g/2+8),p.fillStyle=t.accentColor,p.fillText(_,m/2,g/2+8)}),f=new _t({map:u,transparent:!0,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2});for(const p of[-1,1]){const m=new Z(new ke(2.6,.5),f);m.position.set(p*1.012,.82,.1),m.rotation.y=p*(Math.PI/2),n.add(m)}const d=new Z(new ke(1.8,.35),f);d.position.set(0,.86,1.955),n.add(d),[this.driver,this.passenger]=await Promise.all([Ri.create(t),Ri.create(ka[1])]),this.driver.sit(),this.driver.root.position.set(-.45,.58,.25),this.driver.root.rotation.y=Math.PI,this.passenger.sit(),this.passenger.root.position.set(.45,.58,.25),this.passenger.root.rotation.y=Math.PI,n.add(this.driver.root,this.passenger.root),this.scene.add(n)}buildGate(){const t=new _t({color:"#5a3d24",roughness:.9}),e=new ae;e.position.z=-Xr;for(const s of[-1,1]){const o=new Z(new Yt(.35,.4,7,10),t);o.position.set(s*8,3.5,0),o.castShadow=!0,e.add(o)}const n=Le(1024,200,(s,o,a)=>{s.fillStyle="#4a3220",s.fillRect(0,0,o,a),s.strokeStyle="#2e1f13",s.lineWidth=10,s.strokeRect(5,5,o-10,a-10),s.fillStyle="#f2dfb8",s.textAlign="center",s.textBaseline="middle",s.font="92px 'Bebas Neue', Impact, sans-serif",s.fillText("YANKARI GAME RESERVE",o/2,a*.42),s.font="40px 'Bebas Neue', Impact, sans-serif",s.fillText("MAIN GATE · BAUCHI STATE",o/2,a*.8)}),i=new Z(new $t(17,2,.3),[t,t,t,t,new _t({map:n}),t]);i.position.y=6.2,i.castShadow=!0,e.add(i),this.scene.add(e)}buildParticles(){this.dust=new $n({count:120,size:1.2,color:"#d9b98c",opacity:.2,life:[.6,1.3],grow:2,drag:1.2,spawn:(t,e)=>{const n=this.jeep.position;t.set(n.x+(Math.random()<.5?-1:1)*.95,.25,n.z+1.4),e.set((Math.random()-.5)*2,.6+Math.random(),-this.speed*.6+3+Math.random()*3)}}),this.spray=new $n({count:160,size:.35,color:"#e8fbff",opacity:.8,additive:!0,emitting:!1,life:[.5,1],gravity:9,spawn:(t,e)=>{const n=this.jeep.position;t.set(n.x+(Math.random()-.5)*2.4,.3,n.z-1.5+Math.random()*3),e.set((Math.random()-.5)*6,2+Math.random()*3,-this.speed*.7)}}),this.motes=new $n({count:90,size:.12,color:"#fff1d6",additive:!0,opacity:.8,life:[1.5,2.5],spawn:t=>{const e=this.jeep.position;t.set(e.x+(Math.random()-.5)*30,.3+Math.random()*4,e.z-15-Math.random()*45)}}),this.debris=new $n({count:160,size:.28,color:"#8a6a45",opacity:.95,emitting:!1,life:[.6,1.1],gravity:14,spawn:(t,e)=>{const n=this.jeep.position;t.set(n.x+(Math.random()-.5)*2,.4,n.z+2),e.set((Math.random()-.5)*8,3+Math.random()*5,14+Math.random()*14)}}),this.scene.add(this.dust.points,this.spray.points,this.motes.points,this.debris.points)}buildHud(){const t=this.ctx.ui.hud(),e=nt("div","hull",t);nt("span","",e,"HULL");const n=[nt("i","",e),nt("i","",e),nt("i","",e)],i=nt("span","tries",e),s=nt("div","boost",t);nt("span","",s,"BOOST");const o=nt("i","",nt("div","gauge",s)),a=nt("div","kick",t,"DEBRIS READY"),c=nt("div","rear",t);nt("span","",c,"REAR CAM");const l=nt("div","threat",t,"RAPTOR"),h=nt("div","track",t),u=nt("div","fill",h);nt("div","gate",h,"GATE"),nt("div","river",h,"GAJI");const f=nt("div","me",h);this.hud={pips:n,fill:u,me:f,threat:l,rear:c,tries:i,boostFill:o,kick:a}}}const Jb=`# Credits

Every third-party asset used in Vault of Yankari, with its license.
Rule (AGENTS.md §6): no asset enters \`public/\` without an entry here in the same commit.

## Assets

| Asset | Author | Source | License |
|---|---|---|---|
| Bebas Neue (font) | Ryoichi Tsunekawa (Dharma Type) | https://fonts.google.com/specimen/Bebas+Neue | SIL OFL 1.1 |
| Share Tech Mono (font) | Carrois Apostrophe | https://fonts.google.com/specimen/Share+Tech+Mono | SIL OFL 1.1 |
| Velociraptor (animated model) | Quaternius | https://poly.pizza/m/cnlGH2UcDd | CC0 1.0 |
| Astronaut (animated model, player and crew) | Quaternius | https://poly.pizza/m/3hC2i0CTuO | CC0 1.0 |
| SWAT (animated model, vault guards) | Quaternius | https://poly.pizza/m/Btfn3G5Xv4 | CC0 1.0 |
| Elephant (model) | Poly by Google | https://poly.pizza/m/a27MA0rXyyj | CC-BY 3.0 |
| Baboon (model) | Poly by Google | https://poly.pizza/m/aeLFKp6X19x | CC-BY 3.0 |
| Hippopotamus (model) | Poly by Google | https://poly.pizza/m/eau2X1phgjJ | CC-BY 3.0 |
| Antelope (model) | Poly by Google | https://poly.pizza/m/dC2-G-IF8rz | CC-BY 3.0 |

Files live in \`public/models/\`. The CC-BY 3.0 models require attribution, which this file and the in-game credits provide.
Everything else (jeep, environments, textures, particles, music, sound effects) is generated procedurally in code.

## Libraries

- three.js (MIT)
- GSAP (Standard GSAP license)
- Vite (MIT)
- TypeScript (Apache-2.0)
`;function Zb(r){return r.split(`
`).filter(t=>t.startsWith("|")&&!/^\|\s*-/.test(t)&&!/^\|\s*Asset\s*\|/i.test(t)).map(t=>t.split("|").map(e=>e.trim()).filter(Boolean)).filter(t=>t.length>=4).map(([t,e,,n])=>`${t} — ${e} (${n})`)}class Qb{constructor(){this.scene=new Ci,this.roll=null,this.t=0,this.leaving=!1}async enter(t){this.ctx=t;const e=this.scene;e.background=new at("#05070a"),t.camera.fov=35,t.camera.updateProjectionMatrix(),t.bloom.strength=.45,t.bloom.threshold=.85,e.environment=t.envMap,e.environmentIntensity=.4,t.grade.set({vignette:.6,contrast:1.1});const n=new Z(new bi(12,48),new _t({color:"#0d1014",roughness:.5,metalness:.4}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0;const i=new Z(new Yt(1.1,1.2,.2,48),new _t({color:"#1b2027",metalness:.7,roughness:.3}));i.position.y=.1,i.receiveShadow=!0,e.add(n,i),e.add(new Pr("#3a4a66","#050505",.4));const s=new ir("#fff4e0",120,14,.45,.5,1.5);s.position.set(1.5,7,3),s.target.position.set(0,1,0),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),e.add(s,s.target);const o=new Es(t.style.accentColor,7,8,2);o.position.set(-1.5,2.2,-2),e.add(o),this.player=await Ri.create(t.style),this.player.root.position.y=.2,e.add(this.player.root),this.motes=new $n({count:80,size:.06,color:"#ffe8c0",additive:!0,life:[4,8],spawn:(a,c)=>{a.set((Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6),c.set((Math.random()-.5)*.1,.05+Math.random()*.1,(Math.random()-.5)*.1)}}),e.add(this.motes.points),t.camera.position.set(-1.4,1.5,5.2),t.camera.lookAt(1.2,1.15,0),this.buildRoll(),t.audio.startLoop("credits")}update(t){this.t+=t,this.player.root.rotation.y+=t*.35,this.player.update(t,0),this.motes.update(t),this.ctx.input.pressed("action")&&this.replay()}exit(){this.roll?.kill(),To(this.scene)}replay(){this.leaving||(this.leaving=!0,this.ctx.goTo("coldOpen"))}buildRoll(){const{user:t,style:e,input:n}=this.ctx,i=this.ctx.ui.hud(),s=nt("div","credits",i),o=nt("div","roll",s),a=(l,h)=>nt("div",l,o,h);nt("h2","",o,"VAULT OF YANKARI"),a("role","Starring"),a("star",t.displayName||t.username),a("name",`as ${e.codename}`),a("small",`@${t.username}`),a("role","The crew");for(const l of ka)a("name",l.codename);a("role","Introducing"),a("name","Specimen 0-YK"),a("role","A start.ng game"),a("name","HNG15 · Lesson 8"),a("role","Built with"),a("name","three.js · GSAP · Vite · TypeScript"),a("role","Assets");for(const l of Zb(Jb))a("small",l);a("small","Jeep, environments, music and sound generated in code"),a("role","Location"),a("name","Yankari Game Reserve"),a("small","Wikki Warm Spring · Gaji River · Kalban Hill · Bauchi State, Nigeria"),a("role",""),a("name",`Thanks for playing, ${t.displayName||t.username}.`),this.roll=ue.fromTo(o,{y:window.innerHeight*.9},{y:()=>-o.offsetHeight+window.innerHeight*.35,duration:32,ease:"none"}),nt("button","btn replay",i,"REPLAY ↻").addEventListener("click",()=>n.trigger("action")),this.ctx.ui.hint("SPACE to play again")}}const $c=Math.min(window.devicePixelRatio,1.5),xf={coldOpen:()=>new Ab,vault:()=>new Ub,twist:()=>new Ob,escape:()=>new $b,credits:()=>new Qb};async function tT(){const r=await $M(),t=Cd(r);document.documentElement.style.setProperty("--accent",t.accentColor);const e=document.createElement("canvas");e.id="game",document.body.prepend(e);const n=new Hy({canvas:e,antialias:!0,powerPreference:"high-performance"});n.setPixelRatio($c),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=Mf,n.toneMapping=ch;const i=new Ge(50,window.innerWidth/window.innerHeight,.1,500),s=new Mn(window.innerWidth,window.innerHeight,{type:Jn,samples:4}),o=new VM(n,s);o.setPixelRatio($c);const a=new HM(new Ci,i),c=new yr(new it(window.innerWidth,window.innerHeight),.55,.5,.82);o.addPass(a),o.addPass(c),o.addPass(new XM);const l=new jM;o.addPass(l);const h=new Ol(n),u=h.fromScene(new qM,.04).texture;h.dispose();const f=new pS,d=new mS,p=new yb(f),m=new P1(i,p);r.isGuest&&p.notice("Playing as guest");let g=null;const _=new Set;ZM(r,D=>{Object.assign(r,D),Object.assign(t,Cd(r)),document.documentElement.style.setProperty("--accent",t.accentColor),_.forEach(O=>O())});const x={renderer:n,camera:i,cinema:m,input:f,audio:d,ui:p,user:r,style:t,bloom:c,grade:l,envMap:u,goTo:D=>void g?.goTo(D),onUserChange:D=>(_.add(D),()=>_.delete(D))};g=new I1(x,xf,a);const y=()=>{const D=window.innerWidth,O=window.innerHeight;i.aspect=D/O,i.updateProjectionMatrix(),n.setSize(D,O),o.setSize(D,O),Rm.value=O*$c/2};window.addEventListener("resize",y),y(),document.addEventListener("visibilitychange",()=>d.setSuspended(document.hidden)),window.addEventListener("pagehide",()=>d.shutdown());const v=()=>d.unlock();window.addEventListener("pointerdown",v,{once:!0}),window.addEventListener("keydown",v,{once:!0});const A=new URLSearchParams(window.location.search).get("scene"),b=A&&A in xf?A:"coldOpen",E=nt("div","start",p.root);nt("h1","",E,"VAULT OF YANKARI"),nt("div","tag",E,"Yankari Game Reserve · 2049");const R=nt("div","who",E,"Playing as ");r.isGuest?(nt("b","",R,"Guest"),nt("div","tag",E,"Sign in on start.ng to play as yourself")):(nt("b","",R,`@${r.username}`),R.append(` · ${t.codename}`)),nt("div","go",E,"CLICK OR PRESS ENTER"),nt("div","keys",E,"WASD / ARROWS move · SPACE action · ESC skip · M mute");let M=!1;const S=()=>{M||(M=!0,E.remove(),d.unlock(),g?.goTo(b))};E.addEventListener("click",S),A&&S();const I=new vp;n.setAnimationLoop(()=>{const D=Math.min(I.getDelta(),.05);f.pressed("mute")&&p.setMuted(d.toggleMute()),!M&&(f.pressed("skip")||f.pressed("action"))&&S(),g?.update(D*m.timeScale),l.tick(D,m.shakeLevel),m.beginFrame(D),o.render(),g?.afterRender(n),m.endFrame(),f.endFrame()})}tT();
