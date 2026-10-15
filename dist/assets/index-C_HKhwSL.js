(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const th="170",dm=0,eu=1,fm=2,rf=1,of=2,li=3,vi=0,Ve=1,qe=2,mi=0,ds=1,ir=2,nu=3,iu=4,pm=5,ls=100,mm=101,gm=102,_m=103,vm=104,xm=200,ym=201,Mm=202,Sm=203,Xl=204,ql=205,bm=206,Tm=207,wm=208,Em=209,Am=210,Rm=211,Cm=212,Pm=213,Im=214,Yl=0,jl=1,Kl=2,sr=3,$l=4,Jl=5,Zl=6,Ql=7,af=0,Lm=1,Dm=2,Vi=0,lf=1,cf=2,hf=3,eh=4,Nm=5,uf=6,df=7,su="attached",Um="detached",ff=300,rr=301,or=302,tc=303,ec=304,Ta=306,vs=1e3,Ui=1001,da=1002,Qe=1003,pf=1004,zr=1005,pn=1006,na=1007,fi=1008,xi=1009,mf=1010,gf=1011,to=1012,nh=1013,xs=1014,On=1015,qn=1016,ih=1017,sh=1018,ar=1020,_f=35902,vf=1021,xf=1022,bn=1023,yf=1024,Mf=1025,$s=1026,lr=1027,rh=1028,oh=1029,Sf=1030,ah=1031,lh=1033,ia=33776,sa=33777,ra=33778,oa=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37808,hc=37809,uc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,yc=37819,Mc=37820,Sc=37821,aa=36492,bc=36494,Tc=36495,bf=36283,wc=36284,Ec=36285,Ac=36286,ch=2200,hh=2201,Om=2202,eo=2300,no=2301,Va=2302,Xs=2400,qs=2401,fa=2402,uh=2500,Fm=2501,km=0,Tf=1,Rc=2,Bm=3200,zm=3201,wf=0,Vm=1,di="",Ue="srgb",tn="srgb-linear",wa="linear",ie="srgb",As=7680,ru=519,Hm=512,Gm=513,Wm=514,Ef=515,Xm=516,qm=517,Ym=518,jm=519,Cc=35044,ou="300 es",pi=2e3,pa=2001;class Ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const Xr=Math.PI/180,cr=180/Math.PI;function Fn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[r&255]+Ge[r>>8&255]+Ge[r>>16&255]+Ge[r>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Oe(r,t,e){return Math.max(t,Math.min(e,r))}function dh(r,t){return(r%t+t)%t}function Km(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function $m(r,t,e){return r!==t?(e-r)/(t-r):0}function qr(r,t,e){return(1-e)*r+e*t}function Jm(r,t,e,n){return qr(r,t,1-Math.exp(-e*n))}function Zm(r,t=1){return t-Math.abs(dh(r,t*2)-t)}function Qm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function tg(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function eg(r,t){return r+Math.floor(Math.random()*(t-r+1))}function ng(r,t){return r+Math.random()*(t-r)}function ig(r){return r*(.5-Math.random())}function sg(r){r!==void 0&&(au=r);let t=au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rg(r){return r*Xr}function og(r){return r*cr}function ag(r){return(r&r-1)===0&&r!==0}function lg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function cg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function hg(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function se(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const De={DEG2RAD:Xr,RAD2DEG:cr,generateUUID:Fn,clamp:Oe,euclideanModulo:dh,mapLinear:Km,inverseLerp:$m,lerp:qr,damp:Jm,pingpong:Zm,smoothstep:Qm,smootherstep:tg,randInt:eg,randFloat:ng,randFloatSpread:ig,seededRandom:sg,degToRad:rg,radToDeg:og,isPowerOfTwo:ag,ceilPowerOfTwo:lg,floorPowerOfTwo:cg,setQuaternionFromProperEuler:hg,normalize:se,denormalize:Nn};class ot{constructor(t=0,e=0){ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,s,o,a,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],x=i[1],y=i[4],v=i[7],A=i[2],T=i[5],E=i[8];return s[0]=o*_+a*x+l*A,s[3]=o*m+a*y+l*T,s[6]=o*g+a*v+l*E,s[1]=c*_+h*x+u*A,s[4]=c*m+h*y+u*T,s[7]=c*g+h*v+u*E,s[2]=f*_+d*x+p*A,s[5]=f*m+d*y+p*T,s[8]=f*g+d*v+p*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,p=e*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Ot;function Af(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function io(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ug(){const r=io("canvas");return r.style.display="block",r}const lu={};function Vr(r){r in lu||(lu[r]=!0,console.warn(r))}function dg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function fg(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pg(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Vt={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(r.r=Js(r.r),r.g=Js(r.g),r.b=Js(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===di?wa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function gi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const cu=[.64,.33,.3,.6,.15,.06],hu=[.2126,.7152,.0722],uu=[.3127,.329],du=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fu=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Vt.define({[tn]:{primaries:cu,whitePoint:uu,transfer:wa,toXYZ:du,fromXYZ:fu,luminanceCoefficients:hu,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:cu,whitePoint:uu,transfer:ie,toXYZ:du,fromXYZ:fu,luminanceCoefficients:hu,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});let Rs;class mg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rs===void 0&&(Rs=io("canvas")),Rs.width=t.width,Rs.height=t.height;const n=Rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=io("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=gi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gg=0;class Rf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ga(i[o].image)):s.push(Ga(i[o]))}else s=Ga(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _g=0;class Se extends Ts{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=Ui,i=Ui,s=pn,o=fi,a=bn,l=xi,c=Se.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Fn(),this.name="",this.source=new Rf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ff)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=ff;Se.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,i=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(d+1)/2,A=(g+1)/2,T=(h+f)/4,E=(u+_)/4,R=(p+m)/4;return y>v&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=E/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=E/s,i=R/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vg extends Ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Se(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class En extends vg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cf extends Se{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xg extends Se{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=p,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==p){let m=1-a;const g=l*f+c*d+h*p+u*_,x=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const A=Math.sqrt(y),T=Math.atan2(A,g*x);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}const v=a*x;if(l=l*m+f*v,c=c*m+d*v,h=h*m+p*v,u=u*m+_*v,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new P,pu=new An;class $n{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),So.subVectors(this.max,Ar),Cs.subVectors(t.a,Ar),Ps.subVectors(t.b,Ar),Is.subVectors(t.c,Ar),Ei.subVectors(Ps,Cs),Ai.subVectors(Is,Ps),Ki.subVectors(Cs,Is);let e=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-Ki.z,Ki.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,Ki.z,0,-Ki.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-Ki.y,Ki.x,0];return!Xa(e,Cs,Ps,Is,So)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,Cs,Ps,Is,So))?!1:(bo.crossVectors(Ei,Ai),e=[bo.x,bo.y,bo.z],Xa(e,Cs,Ps,Is,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new P,new P,new P,new P,new P,new P,new P,new P],In=new P,Mo=new $n,Cs=new P,Ps=new P,Is=new P,Ei=new P,Ai=new P,Ki=new P,Ar=new P,So=new P,bo=new P,$i=new P;function Xa(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){$i.fromArray(r,s);const a=i.x*Math.abs($i.x)+i.y*Math.abs($i.y)+i.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),h=n.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const yg=new $n,Rr=new P,qa=new P;class Jn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);const e=Rr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(qa)),this.expandByPoint(Rr.copy(t.center).sub(qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new P,Ya=new P,To=new P,Ri=new P,ja=new P,wo=new P,Ka=new P;class Ea{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ya.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(Ya);const s=t.distanceTo(e)*.5,o=-this.direction.dot(To),a=Ri.dot(this.direction),l=-Ri.dot(To),c=Ri.lengthSq(),h=Math.abs(1-o*o);let u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=s*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ya).addScaledVector(To,f),d}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,i,s){ja.subVectors(e,t),wo.subVectors(n,t),Ka.crossVectors(ja,wo);let o=this.direction.dot(Ka),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);const l=a*this.direction.dot(wo.crossVectors(Ri,wo));if(l<0)return null;const c=a*this.direction.dot(ja.cross(Ri));if(c<0||l+c>o)return null;const h=-a*Ri.dot(Ka);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,p,_,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,p,_,m)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ls.setFromMatrixColumn(t,0).length(),s=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,p=c*h,_=c*u;e[0]=f+_*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,p=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mg,t,Sg)}lookAt(t,e,n){const i=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ci.crossVectors(n,hn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ci.crossVectors(n,hn)),Ci.normalize(),Eo.crossVectors(hn,Ci),i[0]=Ci.x,i[4]=Eo.x,i[8]=hn.x,i[1]=Ci.y,i[5]=Eo.y,i[9]=hn.y,i[2]=Ci.z,i[6]=Eo.z,i[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],y=n[7],v=n[11],A=n[15],T=i[0],E=i[4],R=i[8],M=i[12],S=i[1],I=i[5],O=i[9],F=i[13],H=i[2],q=i[6],z=i[10],$=i[14],G=i[3],it=i[7],ht=i[11],vt=i[15];return s[0]=o*T+a*S+l*H+c*G,s[4]=o*E+a*I+l*q+c*it,s[8]=o*R+a*O+l*z+c*ht,s[12]=o*M+a*F+l*$+c*vt,s[1]=h*T+u*S+f*H+d*G,s[5]=h*E+u*I+f*q+d*it,s[9]=h*R+u*O+f*z+d*ht,s[13]=h*M+u*F+f*$+d*vt,s[2]=p*T+_*S+m*H+g*G,s[6]=p*E+_*I+m*q+g*it,s[10]=p*R+_*O+m*z+g*ht,s[14]=p*M+_*F+m*$+g*vt,s[3]=x*T+y*S+v*H+A*G,s[7]=x*E+y*I+v*q+A*it,s[11]=x*R+y*O+v*z+A*ht,s[15]=x*M+y*F+v*$+A*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],_=t[7],m=t[11],g=t[15];return p*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+g*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],_=t[13],m=t[14],g=t[15],x=u*m*c-_*f*c+_*l*d-a*m*d-u*l*g+a*f*g,y=p*f*c-h*m*c-p*l*d+o*m*d+h*l*g-o*f*g,v=h*_*c-p*u*c+p*a*d-o*_*d-h*a*g+o*u*g,A=p*u*l-h*_*l-p*a*f+o*_*f+h*a*m-o*u*m,T=e*x+n*y+i*v+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=x*E,t[1]=(_*f*s-u*m*s-_*i*d+n*m*d+u*i*g-n*f*g)*E,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*g+n*l*g)*E,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*E,t[4]=y*E,t[5]=(h*m*s-p*f*s+p*i*d-e*m*d-h*i*g+e*f*g)*E,t[6]=(p*l*s-o*m*s-p*i*c+e*m*c+o*i*g-e*l*g)*E,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*E,t[8]=v*E,t[9]=(p*u*s-h*_*s-p*n*d+e*_*d+h*n*g-e*u*g)*E,t[10]=(o*_*s-p*a*s+p*n*c-e*_*c-o*n*g+e*a*g)*E,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*E,t[12]=A*E,t[13]=(h*_*i-p*u*i+p*n*f-e*_*f-h*n*m+e*u*m)*E,t[14]=(p*a*i-o*_*i-p*n*l+e*_*l+o*n*m-e*a*m)*E,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,p=s*u,_=o*h,m=o*u,g=a*u,x=l*c,y=l*h,v=l*u,A=n.x,T=n.y,E=n.z;return i[0]=(1-(_+g))*A,i[1]=(d+v)*A,i[2]=(p-y)*A,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+g))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(p+y)*E,i[9]=(m-x)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ls.set(i[0],i[1],i[2]).length();const o=Ls.set(i[4],i[5],i[6]).length(),a=Ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ln.copy(this);const c=1/s,h=1/o,u=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,e.setFromRotationMatrix(Ln),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=pi){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,p;if(a===pi)d=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===pa)d=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=pi){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h;let p,_;if(a===pi)p=(o+s)*u,_=-2*u;else if(a===pa)p=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ls=new P,Ln=new Lt,Mg=new P(0,0,0),Sg=new P(1,1,1),Ci=new P,Eo=new P,hn=new P,mu=new Lt,gu=new An;class kn{constructor(t=0,e=0,n=0,i=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gu.setFromEuler(this),this.setFromQuaternion(gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Pf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bg=0;const _u=new P,Ds=new An,si=new Lt,Ao=new P,Cr=new P,Tg=new P,wg=new An,vu=new P(1,0,0),xu=new P(0,1,0),yu=new P(0,0,1),Mu={type:"added"},Eg={type:"removed"},Ns={type:"childadded",child:null},$a={type:"childremoved",child:null};class me extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new P,e=new kn,n=new An,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Ot}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(vu,t)}rotateY(t){return this.rotateOnAxis(xu,t)}rotateZ(t){return this.rotateOnAxis(yu,t)}translateOnAxis(t,e){return _u.copy(t).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vu,t)}translateY(t){return this.translateOnAxis(xu,t)}translateZ(t){return this.translateOnAxis(yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Cr,Ao,this.up):si.lookAt(Ao,Cr,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),Ds.setFromRotationMatrix(si),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mu),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eg),$a.child=t,this.dispatchEvent($a),$a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mu),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,t,Tg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,wg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new P(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new P,ri=new P,Ja=new P,oi=new P,Us=new P,Os=new P,Su=new P,Za=new P,Qa=new P,tl=new P,el=new Jt,nl=new Jt,il=new Jt;class Un{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Dn.subVectors(t,e),i.cross(Dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Dn.subVectors(i,e),ri.subVectors(n,e),Ja.subVectors(t,e);const o=Dn.dot(Dn),a=Dn.dot(ri),l=Dn.dot(Ja),c=ri.dot(ri),h=ri.dot(Ja),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return el.setScalar(0),nl.setScalar(0),il.setScalar(0),el.fromBufferAttribute(t,e),nl.fromBufferAttribute(t,n),il.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(el,s.x),o.addScaledVector(nl,s.y),o.addScaledVector(il,s.z),o}static isFrontFacing(t,e,n,i){return Dn.subVectors(n,e),ri.subVectors(t,e),Dn.cross(ri).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Dn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Un.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Us.subVectors(i,n),Os.subVectors(s,n),Za.subVectors(t,n);const l=Us.dot(Za),c=Os.dot(Za);if(l<=0&&c<=0)return e.copy(n);Qa.subVectors(t,i);const h=Us.dot(Qa),u=Os.dot(Qa);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Us,o);tl.subVectors(t,s);const d=Us.dot(tl),p=Os.dot(tl);if(p>=0&&d<=p)return e.copy(s);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Os,a);const m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Su.subVectors(s,i),a=(u-h)/(u-h+(d-p)),e.copy(i).addScaledVector(Su,a);const g=1/(m+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(Us,o).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function sl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class at{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Vt.workingColorSpace){if(t=dh(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=sl(o,s,t+1/3),this.g=sl(o,s,t),this.b=sl(o,s,t-1/3)}return Vt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=If[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Vt.fromWorkingColorSpace(We.copy(this),t),Math.round(Oe(We.r*255,0,255))*65536+Math.round(Oe(We.g*255,0,255))*256+Math.round(Oe(We.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.fromWorkingColorSpace(We.copy(this),e);const n=We.r,i=We.g,s=We.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Ue){Vt.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,i=We.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Ro);const n=qr(Pi.h,Ro.h,e),i=qr(Pi.s,Ro.s,e),s=qr(Pi.l,Ro.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new at;at.NAMES=If;let Ag=0;class Yn extends Ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Fn(),this.name="",this.blending=ds,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xl&&(n.blendSrc=this.blendSrc),this.blendDst!==ql&&(n.blendDst=this.blendDst),this.blendEquation!==ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ke extends Yn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new P,Co=new ot;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cc&&(t.usage=this.usage),t}}class Lf extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Df extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $t extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rg=0;const yn=new Lt,rl=new me,Fs=new P,un=new $n,Pr=new $n,Le=new P;class Ae extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Af(t)?Df:Lf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ot().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(un.min,Pr.min),un.expandByPoint(Le),Le.addVectors(un.max,Pr.max),un.expandByPoint(Le)):(un.expandByPoint(Pr.min),un.expandByPoint(Pr.max))}un.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Le.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Le.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(t,c),Le.add(Fs)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new P,l[R]=new P;const c=new P,h=new P,u=new P,f=new ot,d=new ot,p=new ot,_=new P,m=new P;function g(R,M,S){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,M),p.fromBufferAttribute(s,S),h.sub(c),u.sub(c),d.sub(f),p.sub(f);const I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),a[R].add(_),a[M].add(_),a[S].add(_),l[R].add(m),l[M].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,M=x.length;R<M;++R){const S=x[R],I=S.start,O=S.count;for(let F=I,H=I+O;F<H;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new P,v=new P,A=new P,T=new P;function E(R){A.fromBufferAttribute(i,R),T.copy(A);const M=a[R];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(T,M);const I=v.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,I)}for(let R=0,M=x.length;R<M;++R){const S=x[R],I=S.start,O=S.count;for(let F=I,H=I+O;F<H;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Ce(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new Lt,Ji=new Ea,Po=new Jn,Tu=new P,Io=new P,Lo=new P,Do=new P,ol=new P,No=new P,wu=new P,Uo=new P;class Q extends me{constructor(t=new Ae,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){No.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(ol.fromBufferAttribute(u,t),o?No.addScaledVector(ol,h):No.addScaledVector(ol.sub(e),h))}e.add(No)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Ji.copy(t.ray).recast(t.near),!(Po.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Po,Tu)===null||Ji.origin.distanceToSquared(Tu)>(t.far-t.near)**2))&&(bu.copy(s).invert(),Ji.copy(t.ray).applyMatrix4(bu),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,A=y;v<A;v+=3){const T=a.getX(v),E=a.getX(v+1),R=a.getX(v+2);i=Oo(this,g,t,n,c,h,u,T,E,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=Oo(this,o,t,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,A=y;v<A;v+=3){const T=v,E=v+1,R=v+2;i=Oo(this,g,t,n,c,h,u,T,E,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const x=m,y=m+1,v=m+2;i=Oo(this,o,t,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Cg(r,t,e,n,i,s,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===vi,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Uo);return c<e.near||c>e.far?null:{distance:c,point:Uo.clone(),object:r}}function Oo(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Io),r.getVertexPosition(l,Lo),r.getVertexPosition(c,Do);const h=Cg(r,t,e,n,Io,Lo,Do,wu);if(h){const u=new P;Un.getBarycoord(wu,Io,Lo,Do,u),i&&(h.uv=Un.getInterpolatedAttribute(i,a,l,c,u,new ot)),s&&(h.uv1=Un.getInterpolatedAttribute(s,a,l,c,u,new ot)),o&&(h.normal=Un.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};Un.getNormal(Io,Lo,Do,f.normal),h.face=f,h.barycoord=u}return h}class Kt extends Ae{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function p(_,m,g,x,y,v,A,T,E,R,M){const S=v/E,I=A/R,O=v/2,F=A/2,H=T/2,q=E+1,z=R+1;let $=0,G=0;const it=new P;for(let ht=0;ht<z;ht++){const vt=ht*I-F;for(let Ct=0;Ct<q;Ct++){const Zt=Ct*S-O;it[_]=Zt*x,it[m]=vt*y,it[g]=H,c.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[g]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(Ct/E),u.push(1-ht/R),$+=1}}for(let ht=0;ht<R;ht++)for(let vt=0;vt<E;vt++){const Ct=f+vt+q*ht,Zt=f+vt+q*(ht+1),X=f+(vt+1)+q*(ht+1),Z=f+(vt+1)+q*ht;l.push(Ct,Zt,Z),l.push(Zt,X,Z),G+=6}a.addGroup(d,G,M),d+=G,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Je(r){const t={};for(let e=0;e<r.length;e++){const n=hr(r[e]);for(const i in n)t[i]=n[i]}return t}function Pg(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Nf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}const so={clone:hr,merge:Je};var Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Be extends Yn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=Pg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Uf extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new P,Eu=new ot,Au=new ot;class Xe extends Uf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,Eu,Au),e.subVectors(Au,Eu)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ks=-90,Bs=1;class Dg extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(ks,Bs,t,e);i.layers=this.layers,this.add(i);const s=new Xe(ks,Bs,t,e);s.layers=this.layers,this.add(s);const o=new Xe(ks,Bs,t,e);o.layers=this.layers,this.add(o);const a=new Xe(ks,Bs,t,e);a.layers=this.layers,this.add(a);const l=new Xe(ks,Bs,t,e);l.layers=this.layers,this.add(l);const c=new Xe(ks,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Of extends Se{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ng extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Of(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Kt(5,5,5),s=new Be({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:mi});s.uniforms.tEquirect.value=e;const o=new Q(i,s),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=pn),new Dg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const al=new P,Ug=new P,Og=new Ot;class ss{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=al.subVectors(n,e).cross(Ug.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(al),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Og.getNormalMatrix(t),i=this.coplanarPoint(al).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Jn,Fo=new P;class fh{constructor(t=new ss,e=new ss,n=new ss,i=new ss,s=new ss,o=new ss){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],_=i[10],m=i[11],g=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,m-d,v-g).normalize(),n[1].setComponents(l+s,f+c,m+d,v+g).normalize(),n[2].setComponents(l+o,f+h,m+p,v+x).normalize(),n[3].setComponents(l-o,f-h,m-p,v-x).normalize(),n[4].setComponents(l-a,f-u,m-_,v-y).normalize(),e===pi)n[5].setComponents(l+a,f+u,m+_,v+y).normalize();else if(e===pa)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fo.x=i.normal.x>0?t.max.x:t.min.x,Fo.y=i.normal.y>0?t.max.y:t.min.y,Fo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ff(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Fg(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const _=u[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Ne extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const x=g*f-o;for(let y=0;y<c;y++){const v=y*u-s;p.push(v,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const y=x+c*g,v=x+c*(g+1),A=x+1+c*(g+1),T=x+1+c*g;d.push(y,v,T),d.push(v,A,T)}this.setIndex(d),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.width,t.height,t.widthSegments,t.heightSegments)}}var kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bg=`#ifdef USE_ALPHAHASH
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
#endif`,zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wg=`#ifdef USE_AOMAP
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
#endif`,Xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qg=`#ifdef USE_BATCHING
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
#endif`,Yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jg=`#ifdef USE_IRIDESCENCE
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
#endif`,Zg=`#ifdef USE_BUMPMAP
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a0=`#define PI 3.141592653589793
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
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c0=`vec3 transformedNormal = objectNormal;
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
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
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
}`,E0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
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
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#endif`,O0=`struct PhysicalMaterial {
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
}`,F0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,B0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y0=`#if defined( USE_POINTS_UV )
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
#endif`,j0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
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
#endif`,t_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o_=`#ifdef USE_NORMALMAP
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
#endif`,a_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,__=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S_=`float getShadowMask() {
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
}`,b_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,w_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,A_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
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
#endif`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k_=`uniform sampler2D t2D;
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`#include <common>
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
}`,W_=`#if DEPTH_PACKING == 3200
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
}`,X_=`#define DISTANCE
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
}`,q_=`#define DISTANCE
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`uniform float scale;
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
}`,$_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,Z_=`uniform vec3 diffuse;
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
}`,Q_=`#define LAMBERT
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
}`,tv=`#define LAMBERT
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
}`,ev=`#define MATCAP
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
}`,nv=`#define MATCAP
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
}`,iv=`#define NORMAL
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
}`,sv=`#define NORMAL
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
}`,rv=`#define PHONG
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
}`,ov=`#define PHONG
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
}`,av=`#define STANDARD
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
}`,lv=`#define STANDARD
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
}`,cv=`#define TOON
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
}`,hv=`#define TOON
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
}`,uv=`uniform float size;
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,pv=`uniform vec3 color;
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
}`,mv=`uniform float rotation;
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
}`,gv=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:kg,alphahash_pars_fragment:Bg,alphamap_fragment:zg,alphamap_pars_fragment:Vg,alphatest_fragment:Hg,alphatest_pars_fragment:Gg,aomap_fragment:Wg,aomap_pars_fragment:Xg,batching_pars_vertex:qg,batching_vertex:Yg,begin_vertex:jg,beginnormal_vertex:Kg,bsdfs:$g,iridescence_fragment:Jg,bumpmap_pars_fragment:Zg,clipping_planes_fragment:Qg,clipping_planes_pars_fragment:t0,clipping_planes_pars_vertex:e0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:s0,color_pars_vertex:r0,color_vertex:o0,common:a0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:c0,displacementmap_pars_vertex:h0,displacementmap_vertex:u0,emissivemap_fragment:d0,emissivemap_pars_fragment:f0,colorspace_fragment:p0,colorspace_pars_fragment:m0,envmap_fragment:g0,envmap_common_pars_fragment:_0,envmap_pars_fragment:v0,envmap_pars_vertex:x0,envmap_physical_pars_fragment:P0,envmap_vertex:y0,fog_vertex:M0,fog_pars_vertex:S0,fog_fragment:b0,fog_pars_fragment:T0,gradientmap_pars_fragment:w0,lightmap_pars_fragment:E0,lights_lambert_fragment:A0,lights_lambert_pars_fragment:R0,lights_pars_begin:C0,lights_toon_fragment:I0,lights_toon_pars_fragment:L0,lights_phong_fragment:D0,lights_phong_pars_fragment:N0,lights_physical_fragment:U0,lights_physical_pars_fragment:O0,lights_fragment_begin:F0,lights_fragment_maps:k0,lights_fragment_end:B0,logdepthbuf_fragment:z0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:G0,map_fragment:W0,map_pars_fragment:X0,map_particle_fragment:q0,map_particle_pars_fragment:Y0,metalnessmap_fragment:j0,metalnessmap_pars_fragment:K0,morphinstance_vertex:$0,morphcolor_vertex:J0,morphnormal_vertex:Z0,morphtarget_pars_vertex:Q0,morphtarget_vertex:t_,normal_fragment_begin:e_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:s_,normal_vertex:r_,normalmap_pars_fragment:o_,clearcoat_normal_fragment_begin:a_,clearcoat_normal_fragment_maps:l_,clearcoat_pars_fragment:c_,iridescence_pars_fragment:h_,opaque_fragment:u_,packing:d_,premultiplied_alpha_fragment:f_,project_vertex:p_,dithering_fragment:m_,dithering_pars_fragment:g_,roughnessmap_fragment:__,roughnessmap_pars_fragment:v_,shadowmap_pars_fragment:x_,shadowmap_pars_vertex:y_,shadowmap_vertex:M_,shadowmask_pars_fragment:S_,skinbase_vertex:b_,skinning_pars_vertex:T_,skinning_vertex:w_,skinnormal_vertex:E_,specularmap_fragment:A_,specularmap_pars_fragment:R_,tonemapping_fragment:C_,tonemapping_pars_fragment:P_,transmission_fragment:I_,transmission_pars_fragment:L_,uv_pars_fragment:D_,uv_pars_vertex:N_,uv_vertex:U_,worldpos_vertex:O_,background_vert:F_,background_frag:k_,backgroundCube_vert:B_,backgroundCube_frag:z_,cube_vert:V_,cube_frag:H_,depth_vert:G_,depth_frag:W_,distanceRGBA_vert:X_,distanceRGBA_frag:q_,equirect_vert:Y_,equirect_frag:j_,linedashed_vert:K_,linedashed_frag:$_,meshbasic_vert:J_,meshbasic_frag:Z_,meshlambert_vert:Q_,meshlambert_frag:tv,meshmatcap_vert:ev,meshmatcap_frag:nv,meshnormal_vert:iv,meshnormal_frag:sv,meshphong_vert:rv,meshphong_frag:ov,meshphysical_vert:av,meshphysical_frag:lv,meshtoon_vert:cv,meshtoon_frag:hv,points_vert:uv,points_frag:dv,shadow_vert:fv,shadow_frag:pv,sprite_vert:mv,sprite_frag:gv},st={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Hn={basic:{uniforms:Je([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Je([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new at(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Je([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Je([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Je([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new at(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Je([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Je([st.points,st.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Je([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Je([st.common,st.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Je([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Je([st.sprite,st.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Je([st.common,st.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Je([st.lights,st.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Hn.physical={uniforms:Je([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const ko={r:0,b:0,g:0},Qi=new kn,_v=new Lt;function vv(r,t,e,n,i,s,o){const a=new at(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function p(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const v=p(x);v===null?g(a,l):v&&v.isColor&&(g(v,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,y){const v=p(y);v&&(v.isCubeTexture||v.mapping===Ta)?(h===void 0&&(h=new Q(new Kt(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:hr(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Qi.copy(y.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_v.makeRotationFromEuler(Qi)),h.material.toneMapped=Vt.getTransfer(v.colorSpace)!==ie,(u!==v||f!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Q(new Ne(2,2),new Be({name:"BackgroundMaterial",uniforms:hr(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,y){x.getRGB(ko,Nf(r)),n.buffers.color.setClear(ko.r,ko.g,ko.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:_,addToRenderList:m}}function xv(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(S,I,O,F,H){let q=!1;const z=u(F,O,I);s!==z&&(s=z,c(s.object)),q=d(S,F,O,H),q&&p(S,F,O,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(S,I,O,F),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,I,O){const F=O.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let q=H[I.id];q===void 0&&(q={},H[I.id]=q);let z=q[F];return z===void 0&&(z=f(l()),q[F]=z),z}function f(S){const I=[],O=[],F=[];for(let H=0;H<e;H++)I[H]=0,O[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:F,object:S,attributes:{},index:null}}function d(S,I,O,F){const H=s.attributes,q=I.attributes;let z=0;const $=O.getAttributes();for(const G in $)if($[G].location>=0){const ht=H[G];let vt=q[G];if(vt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),ht===void 0||ht.attribute!==vt||vt&&ht.data!==vt.data)return!0;z++}return s.attributesNum!==z||s.index!==F}function p(S,I,O,F){const H={},q=I.attributes;let z=0;const $=O.getAttributes();for(const G in $)if($[G].location>=0){let ht=q[G];ht===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor));const vt={};vt.attribute=ht,ht&&ht.data&&(vt.data=ht.data),H[G]=vt,z++}s.attributes=H,s.attributesNum=z,s.index=F}function _(){const S=s.newAttributes;for(let I=0,O=S.length;I<O;I++)S[I]=0}function m(S){g(S,0)}function g(S,I){const O=s.newAttributes,F=s.enabledAttributes,H=s.attributeDivisors;O[S]=1,F[S]===0&&(r.enableVertexAttribArray(S),F[S]=1),H[S]!==I&&(r.vertexAttribDivisor(S,I),H[S]=I)}function x(){const S=s.newAttributes,I=s.enabledAttributes;for(let O=0,F=I.length;O<F;O++)I[O]!==S[O]&&(r.disableVertexAttribArray(O),I[O]=0)}function y(S,I,O,F,H,q,z){z===!0?r.vertexAttribIPointer(S,I,O,H,q):r.vertexAttribPointer(S,I,O,F,H,q)}function v(S,I,O,F){_();const H=F.attributes,q=O.getAttributes(),z=I.defaultAttributeValues;for(const $ in q){const G=q[$];if(G.location>=0){let it=H[$];if(it===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),it!==void 0){const ht=it.normalized,vt=it.itemSize,Ct=t.get(it);if(Ct===void 0)continue;const Zt=Ct.buffer,X=Ct.type,Z=Ct.bytesPerElement,St=X===r.INT||X===r.UNSIGNED_INT||it.gpuType===nh;if(it.isInterleavedBufferAttribute){const lt=it.data,Rt=lt.stride,Dt=it.offset;if(lt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<G.locationSize;Bt++)g(G.location+Bt,lt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Bt=0;Bt<G.locationSize;Bt++)m(G.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let Bt=0;Bt<G.locationSize;Bt++)y(G.location+Bt,vt/G.locationSize,X,ht,Rt*Z,(Dt+vt/G.locationSize*Bt)*Z,St)}else{if(it.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)g(G.location+lt,it.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let lt=0;lt<G.locationSize;lt++)m(G.location+lt);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let lt=0;lt<G.locationSize;lt++)y(G.location+lt,vt/G.locationSize,X,ht,vt*Z,vt/G.locationSize*lt*Z,St)}}else if(z!==void 0){const ht=z[$];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(G.location,ht);break;case 3:r.vertexAttrib3fv(G.location,ht);break;case 4:r.vertexAttrib4fv(G.location,ht);break;default:r.vertexAttrib1fv(G.location,ht)}}}}x()}function A(){R();for(const S in n){const I=n[S];for(const O in I){const F=I[O];for(const H in F)h(F[H].object),delete F[H];delete I[O]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const O in I){const F=I[O];for(const H in F)h(F[H].object),delete F[H];delete I[O]}delete n[S.id]}function E(S){for(const I in n){const O=n[I];if(O[S.id]===void 0)continue;const F=O[S.id];for(const H in F)h(F[H].object),delete F[H];delete O[S.id]}}function R(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function yv(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*f[_];e.update(p,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Mv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==bn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==xi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==On&&!R)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:T}}function Sv(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new ss,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,y=x*4;let v=g.clippingState||null;l.value=v,v=h(p,f,y,d);for(let A=0;A!==y;++A)v[A]=e[A];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function bv(r){let t=new WeakMap;function e(o,a){return a===tc?o.mapping=rr:a===ec&&(o.mapping=or),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===tc||a===ec)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ng(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Aa extends Uf{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ys=4,Ru=[.125,.215,.35,.446,.526,.582],cs=20,ll=new Aa,Cu=new at;let cl=null,hl=0,ul=0,dl=!1;const rs=(1+Math.sqrt(5))/2,zs=1/rs,Pu=[new P(-rs,zs,0),new P(rs,zs,0),new P(-zs,0,rs),new P(zs,0,rs),new P(0,rs,-zs),new P(0,rs,zs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Pc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cl,hl,ul),this._renderer.xr.enabled=dl,t.scissorTest=!1,Bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:qn,format:bn,colorSpace:tn,depthBuffer:!1},i=Iu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tv(s)),this._blurMaterial=wv(s,t,e)}return i}_compileMaterial(t){const e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,ll)}_sceneToCubeUV(t,e,n,i){const a=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Cu),h.toneMapping=Vi,h.autoClear=!1;const d=new ke({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),p=new Q(new Kt,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Cu),_=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):x===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const y=this._cubeSize;Bo(i,x*y,g>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===rr||t.mapping===or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Q(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Bo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ll)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pu[(i-s-1)%Pu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Q(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*cs-1),_=s/p,m=isFinite(s)?1+Math.floor(h*_):cs;m>cs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);const g=[];let x=0;for(let E=0;E<cs;++E){const R=E/_,M=Math.exp(-R*R/2);g.push(M),E===0?x+=M:E<m&&(x+=2*M)}for(let E=0;E<g.length;E++)g[E]=g[E]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=p,f.mipInt.value=y-n;const v=this._sizeLods[i],A=3*v*(i>y-Ys?i-y+Ys:0),T=4*(this._cubeSize-v);Bo(e,A,T,3*v,2*v),l.setRenderTarget(e),l.render(u,ll)}}function Tv(r){const t=[],e=[],n=[];let i=r;const s=r-Ys+1+Ru.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ys?l=Ru[o-r+Ys-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*d),y=new Float32Array(m*p*d),v=new Float32Array(g*p*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,R=T>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];x.set(M,_*p*T),y.set(f,m*p*T);const S=[T,T,T,T,T,T];v.set(S,g*p*T)}const A=new Ae;A.setAttribute("position",new Ce(x,_)),A.setAttribute("uv",new Ce(y,m)),A.setAttribute("faceIndex",new Ce(v,g)),t.push(A),i>Ys&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Iu(r,t,e){const n=new En(r,t,e);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function wv(r,t,e){const n=new Float32Array(cs),i=new P(0,1,0);return new Be({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ph(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Lu(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Du(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}function Ev(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===tc||l===ec,h=l===rr||l===or;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Pc(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Pc(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Av(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Vr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rv(r,t,e,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let m=0,g=_.length;m<g;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],r.ARRAY_BUFFER);const d=u.morphAttributes;for(const p in d){const _=d[p];for(let m=0,g=_.length;m<g;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,p=u.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let y=0,v=x.length;y<v;y+=3){const A=x[y+0],T=x[y+1],E=x[y+2];f.push(A,T,T,E,E,A)}}else if(p!==void 0){const x=p.array;_=p.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const A=y+0,T=y+1,E=y+2;f.push(A,T,T,E,E,A)}}else return;const m=new(Af(f)?Df:Lf)(f,1);m.version=_;const g=s.get(u);g&&t.remove(g),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Cv(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,p){p!==0&&(r.drawElementsInstanced(n,d,s,f*o,p),e.update(d,n,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];e.update(m,n,1)}function u(f,d,p,_){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=d[x]*_[x];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Iv(r,t,e){const n=new WeakMap,i=new Jt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*A*4*u),E=new Cf(T,v,A,u);E.type=On,E.needsUpdate=!0;const R=y*4;for(let S=0;S<u;S++){const I=m[S],O=g[S],F=x[S],H=v*A*4*S;for(let q=0;q<I.count;q++){const z=q*R;d===!0&&(i.fromBufferAttribute(I,q),T[H+z+0]=i.x,T[H+z+1]=i.y,T[H+z+2]=i.z,T[H+z+3]=0),p===!0&&(i.fromBufferAttribute(O,q),T[H+z+4]=i.x,T[H+z+5]=i.y,T[H+z+6]=i.z,T[H+z+7]=0),_===!0&&(i.fromBufferAttribute(F,q),T[H+z+8]=i.x,T[H+z+9]=i.y,T[H+z+10]=i.z,T[H+z+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new ot(v,A)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Lv(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class kf extends Se{constructor(t,e,n,i,s,o,a,l,c,h=$s){if(h!==$s&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$s&&(n=xs),n===void 0&&h===lr&&(n=ar),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bf=new Se,Nu=new kf(1,1),zf=new Cf,Vf=new xg,Hf=new Of,Uu=[],Ou=[],Fu=new Float32Array(16),ku=new Float32Array(9),Bu=new Float32Array(4);function yr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Uu[i];if(s===void 0&&(s=new Float32Array(i),Uu[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Pe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ie(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ra(r,t){let e=Ou[t];e===void 0&&(e=new Int32Array(t),Ou[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Dv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Nv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2fv(this.addr,t),Ie(e,t)}}function Uv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;r.uniform3fv(this.addr,t),Ie(e,t)}}function Ov(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4fv(this.addr,t),Ie(e,t)}}function Fv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Bu.set(n),r.uniformMatrix2fv(this.addr,!1,Bu),Ie(e,n)}}function kv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;ku.set(n),r.uniformMatrix3fv(this.addr,!1,ku),Ie(e,n)}}function Bv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Fu.set(n),r.uniformMatrix4fv(this.addr,!1,Fu),Ie(e,n)}}function zv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Vv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2iv(this.addr,t),Ie(e,t)}}function Hv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3iv(this.addr,t),Ie(e,t)}}function Gv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4iv(this.addr,t),Ie(e,t)}}function Wv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Xv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;r.uniform2uiv(this.addr,t),Ie(e,t)}}function qv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;r.uniform3uiv(this.addr,t),Ie(e,t)}}function Yv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;r.uniform4uiv(this.addr,t),Ie(e,t)}}function jv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Nu.compareFunction=Ef,s=Nu):s=Bf,e.setTexture2D(t||s,i)}function Kv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vf,i)}function $v(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Hf,i)}function Jv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||zf,i)}function Zv(r){switch(r){case 5126:return Dv;case 35664:return Nv;case 35665:return Uv;case 35666:return Ov;case 35674:return Fv;case 35675:return kv;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return Vv;case 35668:case 35672:return Hv;case 35669:case 35673:return Gv;case 5125:return Wv;case 36294:return Xv;case 36295:return qv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return Jv}}function Qv(r,t){r.uniform1fv(this.addr,t)}function tx(r,t){const e=yr(t,this.size,2);r.uniform2fv(this.addr,e)}function ex(r,t){const e=yr(t,this.size,3);r.uniform3fv(this.addr,e)}function nx(r,t){const e=yr(t,this.size,4);r.uniform4fv(this.addr,e)}function ix(r,t){const e=yr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function sx(r,t){const e=yr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function rx(r,t){const e=yr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function ox(r,t){r.uniform1iv(this.addr,t)}function ax(r,t){r.uniform2iv(this.addr,t)}function lx(r,t){r.uniform3iv(this.addr,t)}function cx(r,t){r.uniform4iv(this.addr,t)}function hx(r,t){r.uniform1uiv(this.addr,t)}function ux(r,t){r.uniform2uiv(this.addr,t)}function dx(r,t){r.uniform3uiv(this.addr,t)}function fx(r,t){r.uniform4uiv(this.addr,t)}function px(r,t,e){const n=this.cache,i=t.length,s=Ra(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Bf,s[o])}function mx(r,t,e){const n=this.cache,i=t.length,s=Ra(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Vf,s[o])}function gx(r,t,e){const n=this.cache,i=t.length,s=Ra(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Hf,s[o])}function _x(r,t,e){const n=this.cache,i=t.length,s=Ra(e,i);Pe(n,s)||(r.uniform1iv(this.addr,s),Ie(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||zf,s[o])}function vx(r){switch(r){case 5126:return Qv;case 35664:return tx;case 35665:return ex;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ox;case 35667:case 35671:return ax;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return ux;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return _x}}class xx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zv(e.type)}}class yx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vx(e.type)}}class Mx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const fl=/(\w+)(\])?(\[|\.)?/g;function zu(r,t){r.seq.push(t),r.map[t.id]=t}function Sx(r,t,e){const n=r.name,i=n.length;for(fl.lastIndex=0;;){const s=fl.exec(n),o=fl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){zu(e,c===void 0?new xx(a,r,t):new yx(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Mx(a),zu(e,u)),e=u}}}class la{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Sx(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Vu(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const bx=37297;let Tx=0;function wx(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Hu=new Ot;function Ex(r){Vt._getMatrix(Hu,Vt.workingColorSpace,r);const t=`mat3( ${Hu.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(r)){case wa:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Gu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+wx(r.getShaderSource(t),o)}else return i}function Ax(r,t){const e=Ex(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rx(r,t){let e;switch(t){case lf:e="Linear";break;case cf:e="Reinhard";break;case hf:e="Cineon";break;case eh:e="ACESFilmic";break;case uf:e="AgX";break;case df:e="Neutral";break;case Nm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zo=new P;function Cx(){Vt.getLuminanceCoefficients(zo);const r=zo.x.toFixed(4),t=zo.y.toFixed(4),e=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Px(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function Ix(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lx(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Hr(r){return r!==""}function Wu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(r){return r.replace(Dx,Ux)}const Nx=new Map;function Ux(r,t){let e=kt[t];if(e===void 0){const n=Nx.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ic(e)}const Ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(r){return r.replace(Ox,Fx)}function Fx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yu(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function kx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===of?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function Bx(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case rr:case or:t="ENVMAP_TYPE_CUBE";break;case Ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case or:t="ENVMAP_MODE_REFRACTION";break}return t}function Vx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case af:t="ENVMAP_BLENDING_MULTIPLY";break;case Lm:t="ENVMAP_BLENDING_MIX";break;case Dm:t="ENVMAP_BLENDING_ADD";break}return t}function Hx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gx(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=kx(e),c=Bx(e),h=zx(e),u=Vx(e),f=Hx(e),d=Px(e),p=Ix(s),_=i.createProgram();let m,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Hr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Hr).join(`
`),g.length>0&&(g+=`
`)):(m=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),g=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?kt.tonemapping_pars_fragment:"",e.toneMapping!==Vi?Rx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Ax("linearToOutputTexel",e.outputColorSpace),Cx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Ic(o),o=Wu(o,e),o=Xu(o,e),a=Ic(a),a=Wu(a,e),a=Xu(a,e),o=qu(o),a=qu(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=x+m+o,v=x+g+a,A=Vu(i,i.VERTEX_SHADER,y),T=Vu(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(I){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(A).trim(),H=i.getShaderInfoLog(T).trim();let q=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,T);else{const $=Gu(i,A,"vertex"),G=Gu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+$+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||H==="")&&(z=!1);z&&(I.diagnostics={runnable:q,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:g}})}i.deleteShader(A),i.deleteShader(T),R=new la(i,_),M=Lx(i,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,bx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let Wx=0;class Xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qx(t),e.set(t,n)),n}}class qx{constructor(t){this.id=Wx++,this.code=t,this.usedTimes=0}}function Yx(r,t,e,n,i,s,o){const a=new Pf,l=new Xx,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,I,O,F){const H=O.fog,q=F.geometry,z=M.isMeshStandardMaterial?O.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),G=$&&$.mapping===Ta?$.image.height:null,it=p[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=ht!==void 0?ht.length:0;let Ct=0;q.morphAttributes.position!==void 0&&(Ct=1),q.morphAttributes.normal!==void 0&&(Ct=2),q.morphAttributes.color!==void 0&&(Ct=3);let Zt,X,Z,St;if(it){const ne=Hn[it];Zt=ne.vertexShader,X=ne.fragmentShader}else Zt=M.vertexShader,X=M.fragmentShader,l.update(M),Z=l.getVertexShaderID(M),St=l.getFragmentShaderID(M);const lt=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),Dt=F.isInstancedMesh===!0,Bt=F.isBatchedMesh===!0,_e=!!M.map,qt=!!M.matcap,be=!!$,U=!!M.aoMap,vn=!!M.lightMap,Gt=!!M.bumpMap,Wt=!!M.normalMap,Et=!!M.displacementMap,ue=!!M.emissiveMap,wt=!!M.metalnessMap,C=!!M.roughnessMap,b=M.anisotropy>0,k=M.clearcoat>0,j=M.dispersion>0,J=M.iridescence>0,Y=M.sheen>0,bt=M.transmission>0,ct=b&&!!M.anisotropyMap,pt=k&&!!M.clearcoatMap,Yt=k&&!!M.clearcoatNormalMap,tt=k&&!!M.clearcoatRoughnessMap,mt=J&&!!M.iridescenceMap,At=J&&!!M.iridescenceThicknessMap,Pt=Y&&!!M.sheenColorMap,gt=Y&&!!M.sheenRoughnessMap,Xt=!!M.specularMap,Ft=!!M.specularColorMap,ae=!!M.specularIntensityMap,L=bt&&!!M.transmissionMap,rt=bt&&!!M.thicknessMap,W=!!M.gradientMap,K=!!M.alphaMap,ft=M.alphaTest>0,ut=!!M.alphaHash,Nt=!!M.extensions;let ye=Vi;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ye=r.toneMapping);const He={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:Zt,fragmentShader:X,defines:M.defines,customVertexShaderID:Z,customFragmentShaderID:St,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Bt,batchingColor:Bt&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?r.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:tn,alphaToCoverage:!!M.alphaToCoverage,map:_e,matcap:qt,envMap:be,envMapMode:be&&$.mapping,envMapCubeUVHeight:G,aoMap:U,lightMap:vn,bumpMap:Gt,normalMap:Wt,displacementMap:f&&Et,emissiveMap:ue,normalMapObjectSpace:Wt&&M.normalMapType===Vm,normalMapTangentSpace:Wt&&M.normalMapType===wf,metalnessMap:wt,roughnessMap:C,anisotropy:b,anisotropyMap:ct,clearcoat:k,clearcoatMap:pt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:tt,dispersion:j,iridescence:J,iridescenceMap:mt,iridescenceThicknessMap:At,sheen:Y,sheenColorMap:Pt,sheenRoughnessMap:gt,specularMap:Xt,specularColorMap:Ft,specularIntensityMap:ae,transmission:bt,transmissionMap:L,thicknessMap:rt,gradientMap:W,opaque:M.transparent===!1&&M.blending===ds&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ft,alphaHash:ut,combine:M.combine,mapUv:_e&&_(M.map.channel),aoMapUv:U&&_(M.aoMap.channel),lightMapUv:vn&&_(M.lightMap.channel),bumpMapUv:Gt&&_(M.bumpMap.channel),normalMapUv:Wt&&_(M.normalMap.channel),displacementMapUv:Et&&_(M.displacementMap.channel),emissiveMapUv:ue&&_(M.emissiveMap.channel),metalnessMapUv:wt&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:pt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:At&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(M.sheenRoughnessMap.channel),specularMapUv:Xt&&_(M.specularMap.channel),specularColorMapUv:Ft&&_(M.specularColorMap.channel),specularIntensityMapUv:ae&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:rt&&_(M.thicknessMap.channel),alphaMapUv:K&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Wt||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(_e||K),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ye,decodeVideoTexture:_e&&M.map.isVideoTexture===!0&&Vt.getTransfer(M.map.colorSpace)===ie,decodeVideoTextureEmissive:ue&&M.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(M.emissiveMap.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qe,flipSided:M.side===Ve,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Nt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&M.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function g(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(x(S,M),y(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=p[M.type];let I;if(S){const O=Hn[S];I=so.clone(O.uniforms)}else I=M.uniforms;return I}function A(M,S){let I;for(let O=0,F=h.length;O<F;O++){const H=h[O];if(H.cacheKey===S){I=H,++I.usedTimes;break}}return I===void 0&&(I=new Gx(r,S,M,s),h.push(I)),I}function T(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:v,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:R}}function jx(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Kx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ju(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ku(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,p,_,m){let g=r[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:_,group:m},r[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=_,g.group=m),t++,g}function a(u,f,d,p,_,m){const g=o(u,f,d,p,_,m);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):e.push(g)}function l(u,f,d,p,_,m){const g=o(u,f,d,p,_,m);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):e.unshift(g)}function c(u,f){e.length>1&&e.sort(u||Kx),n.length>1&&n.sort(f||ju),i.length>1&&i.sort(f||ju)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function $x(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Ku,r.set(n,[o])):i>=s.length?(o=new Ku,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Jx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new at};break;case"SpotLight":e={position:new P,direction:new P,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new at,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new at,groundColor:new at};break;case"RectAreaLight":e={color:new at,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function Zx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Qx=0;function ty(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ey(r){const t=new Jx,e=Zx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,s=new Lt,o=new Lt;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,x=0,y=0,v=0,A=0,T=0,E=0;c.sort(ty);for(let M=0,S=c.length;M<S;M++){const I=c[M],O=I.color,F=I.intensity,H=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=O.r*F,u+=O.g*F,f+=O.b*F;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],F);E++}else if(I.isDirectionalLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const $=I.shadow,G=e.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=I.shadow.matrix,x++}n.directional[d]=z,d++}else if(I.isSpotLight){const z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(O).multiplyScalar(F),z.distance=H,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[_]=z;const $=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,$.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[_]=$.matrix,I.castShadow){const G=e.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,v++}_++}else if(I.isRectAreaLight){const z=t.get(I);z.color.copy(O).multiplyScalar(F),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=z,m++}else if(I.isPointLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const $=I.shadow,G=e.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=q,n.pointShadowMatrix[p]=I.shadow.matrix,y++}n.point[p]=z,p++}else if(I.isHemisphereLight){const z=t.get(I);z.skyColor.copy(I.color).multiplyScalar(F),z.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[g]=z,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==g||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,R.directionalLength=d,R.pointLength=p,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=g,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=E,n.version=Qx++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const y=c[g];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function $u(r){const t=new ey(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ny(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new $u(r),t.set(i,[a])):s>=o.length?(a=new $u(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class iy extends Yn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sy extends Yn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oy=`uniform sampler2D shadow_pass;
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
}`;function ay(r,t,e){let n=new fh;const i=new ot,s=new ot,o=new Jt,a=new iy({depthPacking:zm}),l=new sy,c={},h=e.maxTextureSize,u={[vi]:Ve,[Ve]:vi,[qe]:qe},f=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:ry,fragmentShader:oy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Ae;p.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Q(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let g=this.type;this.render=function(T,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=r.getRenderTarget(),S=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),O=r.state;O.setBlending(mi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=g!==li&&this.type===li,H=g===li&&this.type!==li;for(let q=0,z=T.length;q<z;q++){const $=T[q],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const it=G.getFrameExtents();if(i.multiply(it),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/it.x),i.x=s.x*it.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/it.y),i.y=s.y*it.y,G.mapSize.y=s.y)),G.map===null||F===!0||H===!0){const vt=this.type!==li?{minFilter:Qe,magFilter:Qe}:{};G.map!==null&&G.map.dispose(),G.map=new En(i.x,i.y,vt),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const ht=G.getViewportCount();for(let vt=0;vt<ht;vt++){const Ct=G.getViewport(vt);o.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),O.viewport(o),G.updateMatrices($,vt),n=G.getFrustum(),v(E,R,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===li&&x(G,R),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(M,S,I)};function x(T,E){const R=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new En(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,R,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,R,d,_,null)}function y(T,E,R,M){let S=null;const I=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=R.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=S.uuid,F=E.uuid;let H=c[O];H===void 0&&(H={},c[O]=H);let q=H[F];q===void 0&&(q=S.clone(),H[F]=q,E.addEventListener("dispose",A)),S=q}if(S.visible=E.visible,S.wireframe=E.wireframe,M===li?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=r.properties.get(S);O.light=R}return S}function v(T,E,R,M,S){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===li)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const F=t.update(T),H=T.material;if(Array.isArray(H)){const q=F.groups;for(let z=0,$=q.length;z<$;z++){const G=q[z],it=H[G.materialIndex];if(it&&it.visible){const ht=y(T,it,M,S);T.onBeforeShadow(r,T,E,R,F,ht,G),r.renderBufferDirect(R,null,F,ht,T,G),T.onAfterShadow(r,T,E,R,F,ht,G)}}}else if(H.visible){const q=y(T,H,M,S);T.onBeforeShadow(r,T,E,R,F,q,null),r.renderBufferDirect(R,null,F,q,T,null),T.onAfterShadow(r,T,E,R,F,q,null)}}const O=T.children;for(let F=0,H=O.length;F<H;F++)v(O[F],E,R,M,S)}function A(T){T.target.removeEventListener("dispose",A);for(const R in c){const M=c[R],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const ly={[Yl]:jl,[Kl]:Zl,[$l]:Ql,[sr]:Jl,[jl]:Yl,[Zl]:Kl,[Ql]:$l,[Jl]:sr};function cy(r,t){function e(){let L=!1;const rt=new Jt;let W=null;const K=new Jt(0,0,0,0);return{setMask:function(ft){W!==ft&&!L&&(r.colorMask(ft,ft,ft,ft),W=ft)},setLocked:function(ft){L=ft},setClear:function(ft,ut,Nt,ye,He){He===!0&&(ft*=ye,ut*=ye,Nt*=ye),rt.set(ft,ut,Nt,ye),K.equals(rt)===!1&&(r.clearColor(ft,ut,Nt,ye),K.copy(rt))},reset:function(){L=!1,W=null,K.set(-1,0,0,0)}}}function n(){let L=!1,rt=!1,W=null,K=null,ft=null;return{setReversed:function(ut){if(rt!==ut){const Nt=t.get("EXT_clip_control");rt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const ye=ft;ft=null,this.setClear(ye)}rt=ut},getReversed:function(){return rt},setTest:function(ut){ut?lt(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(ut){W!==ut&&!L&&(r.depthMask(ut),W=ut)},setFunc:function(ut){if(rt&&(ut=ly[ut]),K!==ut){switch(ut){case Yl:r.depthFunc(r.NEVER);break;case jl:r.depthFunc(r.ALWAYS);break;case Kl:r.depthFunc(r.LESS);break;case sr:r.depthFunc(r.LEQUAL);break;case $l:r.depthFunc(r.EQUAL);break;case Jl:r.depthFunc(r.GEQUAL);break;case Zl:r.depthFunc(r.GREATER);break;case Ql:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ut}},setLocked:function(ut){L=ut},setClear:function(ut){ft!==ut&&(rt&&(ut=1-ut),r.clearDepth(ut),ft=ut)},reset:function(){L=!1,W=null,K=null,ft=null,rt=!1}}}function i(){let L=!1,rt=null,W=null,K=null,ft=null,ut=null,Nt=null,ye=null,He=null;return{setTest:function(ne){L||(ne?lt(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(ne){rt!==ne&&!L&&(r.stencilMask(ne),rt=ne)},setFunc:function(ne,Cn,ti){(W!==ne||K!==Cn||ft!==ti)&&(r.stencilFunc(ne,Cn,ti),W=ne,K=Cn,ft=ti)},setOp:function(ne,Cn,ti){(ut!==ne||Nt!==Cn||ye!==ti)&&(r.stencilOp(ne,Cn,ti),ut=ne,Nt=Cn,ye=ti)},setLocked:function(ne){L=ne},setClear:function(ne){He!==ne&&(r.clearStencil(ne),He=ne)},reset:function(){L=!1,rt=null,W=null,K=null,ft=null,ut=null,Nt=null,ye=null,He=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],p=null,_=!1,m=null,g=null,x=null,y=null,v=null,A=null,T=null,E=new at(0,0,0),R=0,M=!1,S=null,I=null,O=null,F=null,H=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=$>=2);let it=null,ht={};const vt=r.getParameter(r.SCISSOR_BOX),Ct=r.getParameter(r.VIEWPORT),Zt=new Jt().fromArray(vt),X=new Jt().fromArray(Ct);function Z(L,rt,W,K){const ft=new Uint8Array(4),ut=r.createTexture();r.bindTexture(L,ut),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Nt=0;Nt<W;Nt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(rt,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ft):r.texImage2D(rt+Nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ft);return ut}const St={};St[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),St[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),St[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(r.DEPTH_TEST),o.setFunc(sr),Gt(!1),Wt(eu),lt(r.CULL_FACE),U(mi);function lt(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Rt(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Dt(L,rt){return u[L]!==rt?(r.bindFramebuffer(L,rt),u[L]=rt,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=rt),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=rt),!0):!1}function Bt(L,rt){let W=d,K=!1;if(L){W=f.get(rt),W===void 0&&(W=[],f.set(rt,W));const ft=L.textures;if(W.length!==ft.length||W[0]!==r.COLOR_ATTACHMENT0){for(let ut=0,Nt=ft.length;ut<Nt;ut++)W[ut]=r.COLOR_ATTACHMENT0+ut;W.length=ft.length,K=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,K=!0);K&&r.drawBuffers(W)}function _e(L){return p!==L?(r.useProgram(L),p=L,!0):!1}const qt={[ls]:r.FUNC_ADD,[mm]:r.FUNC_SUBTRACT,[gm]:r.FUNC_REVERSE_SUBTRACT};qt[_m]=r.MIN,qt[vm]=r.MAX;const be={[xm]:r.ZERO,[ym]:r.ONE,[Mm]:r.SRC_COLOR,[Xl]:r.SRC_ALPHA,[Am]:r.SRC_ALPHA_SATURATE,[wm]:r.DST_COLOR,[bm]:r.DST_ALPHA,[Sm]:r.ONE_MINUS_SRC_COLOR,[ql]:r.ONE_MINUS_SRC_ALPHA,[Em]:r.ONE_MINUS_DST_COLOR,[Tm]:r.ONE_MINUS_DST_ALPHA,[Rm]:r.CONSTANT_COLOR,[Cm]:r.ONE_MINUS_CONSTANT_COLOR,[Pm]:r.CONSTANT_ALPHA,[Im]:r.ONE_MINUS_CONSTANT_ALPHA};function U(L,rt,W,K,ft,ut,Nt,ye,He,ne){if(L===mi){_===!0&&(Rt(r.BLEND),_=!1);return}if(_===!1&&(lt(r.BLEND),_=!0),L!==pm){if(L!==m||ne!==M){if((g!==ls||v!==ls)&&(r.blendEquation(r.FUNC_ADD),g=ls,v=ls),ne)switch(L){case ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ir:r.blendFunc(r.ONE,r.ONE);break;case nu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case iu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ir:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case iu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,y=null,A=null,T=null,E.set(0,0,0),R=0,m=L,M=ne}return}ft=ft||rt,ut=ut||W,Nt=Nt||K,(rt!==g||ft!==v)&&(r.blendEquationSeparate(qt[rt],qt[ft]),g=rt,v=ft),(W!==x||K!==y||ut!==A||Nt!==T)&&(r.blendFuncSeparate(be[W],be[K],be[ut],be[Nt]),x=W,y=K,A=ut,T=Nt),(ye.equals(E)===!1||He!==R)&&(r.blendColor(ye.r,ye.g,ye.b,He),E.copy(ye),R=He),m=L,M=!1}function vn(L,rt){L.side===qe?Rt(r.CULL_FACE):lt(r.CULL_FACE);let W=L.side===Ve;rt&&(W=!W),Gt(W),L.blending===ds&&L.transparent===!1?U(mi):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?lt(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(L){S!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),S=L)}function Wt(L){L!==dm?(lt(r.CULL_FACE),L!==I&&(L===eu?r.cullFace(r.BACK):L===fm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),I=L}function Et(L){L!==O&&(z&&r.lineWidth(L),O=L)}function ue(L,rt,W){L?(lt(r.POLYGON_OFFSET_FILL),(F!==rt||H!==W)&&(r.polygonOffset(rt,W),F=rt,H=W)):Rt(r.POLYGON_OFFSET_FILL)}function wt(L){L?lt(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function C(L){L===void 0&&(L=r.TEXTURE0+q-1),it!==L&&(r.activeTexture(L),it=L)}function b(L,rt,W){W===void 0&&(it===null?W=r.TEXTURE0+q-1:W=it);let K=ht[W];K===void 0&&(K={type:void 0,texture:void 0},ht[W]=K),(K.type!==L||K.texture!==rt)&&(it!==W&&(r.activeTexture(W),it=W),r.bindTexture(L,rt||St[L]),K.type=L,K.texture=rt)}function k(){const L=ht[it];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Yt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(L){Zt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Zt.copy(L))}function gt(L){X.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),X.copy(L))}function Xt(L,rt){let W=c.get(rt);W===void 0&&(W=new WeakMap,c.set(rt,W));let K=W.get(L);K===void 0&&(K=r.getUniformBlockIndex(rt,L.name),W.set(L,K))}function Ft(L,rt){const K=c.get(rt).get(L);l.get(rt)!==K&&(r.uniformBlockBinding(rt,K,L.__bindingPointIndex),l.set(rt,K))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},it=null,ht={},u={},f=new WeakMap,d=[],p=null,_=!1,m=null,g=null,x=null,y=null,v=null,A=null,T=null,E=new at(0,0,0),R=0,M=!1,S=null,I=null,O=null,F=null,H=null,Zt.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:lt,disable:Rt,bindFramebuffer:Dt,drawBuffers:Bt,useProgram:_e,setBlending:U,setMaterial:vn,setFlipSided:Gt,setCullFace:Wt,setLineWidth:Et,setPolygonOffset:ue,setScissorTest:wt,activeTexture:C,bindTexture:b,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:mt,texImage3D:At,updateUBOMapping:Xt,uniformBlockBinding:Ft,texStorage2D:Yt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:bt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Pt,viewport:gt,reset:ae}}function Ju(r,t,e,n){const i=hy(n);switch(e){case vf:return r*t;case yf:return r*t;case Mf:return r*t*2;case rh:return r*t/i.components*i.byteLength;case oh:return r*t/i.components*i.byteLength;case Sf:return r*t*2/i.components*i.byteLength;case ah:return r*t*2/i.components*i.byteLength;case xf:return r*t*3/i.components*i.byteLength;case bn:return r*t*4/i.components*i.byteLength;case lh:return r*t*4/i.components*i.byteLength;case ia:case sa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ra:case oa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ic:case rc:return Math.max(r,16)*Math.max(t,8)/4;case nc:case sc:return Math.max(r,8)*Math.max(t,8)/2;case oc:case ac:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case uc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case dc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case fc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case _c:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case xc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Mc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case aa:case bc:case Tc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case bf:case wc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ec:case Ac:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hy(r){switch(r){case xi:case mf:return{byteLength:1,components:1};case to:case gf:case qn:return{byteLength:2,components:1};case ih:case sh:return{byteLength:2,components:4};case xs:case nh:case On:return{byteLength:4,components:1};case _f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function uy(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,b){return d?new OffscreenCanvas(C,b):io("canvas")}function _(C,b,k){let j=1;const J=wt(C);if((J.width>k||J.height>k)&&(j=k/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(j*J.width),bt=Math.floor(j*J.height);u===void 0&&(u=p(Y,bt));const ct=b?p(Y,bt):u;return ct.width=Y,ct.height=bt,ct.getContext("2d").drawImage(C,0,0,Y,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+bt+")."),ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function g(C){r.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(C,b,k,j,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=b;if(b===r.RED&&(k===r.FLOAT&&(Y=r.R32F),k===r.HALF_FLOAT&&(Y=r.R16F),k===r.UNSIGNED_BYTE&&(Y=r.R8)),b===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.R8UI),k===r.UNSIGNED_SHORT&&(Y=r.R16UI),k===r.UNSIGNED_INT&&(Y=r.R32UI),k===r.BYTE&&(Y=r.R8I),k===r.SHORT&&(Y=r.R16I),k===r.INT&&(Y=r.R32I)),b===r.RG&&(k===r.FLOAT&&(Y=r.RG32F),k===r.HALF_FLOAT&&(Y=r.RG16F),k===r.UNSIGNED_BYTE&&(Y=r.RG8)),b===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RG8UI),k===r.UNSIGNED_SHORT&&(Y=r.RG16UI),k===r.UNSIGNED_INT&&(Y=r.RG32UI),k===r.BYTE&&(Y=r.RG8I),k===r.SHORT&&(Y=r.RG16I),k===r.INT&&(Y=r.RG32I)),b===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),k===r.UNSIGNED_INT&&(Y=r.RGB32UI),k===r.BYTE&&(Y=r.RGB8I),k===r.SHORT&&(Y=r.RGB16I),k===r.INT&&(Y=r.RGB32I)),b===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),k===r.UNSIGNED_INT&&(Y=r.RGBA32UI),k===r.BYTE&&(Y=r.RGBA8I),k===r.SHORT&&(Y=r.RGBA16I),k===r.INT&&(Y=r.RGBA32I)),b===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),b===r.RGBA){const bt=J?wa:Vt.getTransfer(j);k===r.FLOAT&&(Y=r.RGBA32F),k===r.HALF_FLOAT&&(Y=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Y=bt===ie?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(C,b){let k;return C?b===null||b===xs||b===ar?k=r.DEPTH24_STENCIL8:b===On?k=r.DEPTH32F_STENCIL8:b===to&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===xs||b===ar?k=r.DEPTH_COMPONENT24:b===On?k=r.DEPTH_COMPONENT32F:b===to&&(k=r.DEPTH_COMPONENT16),k}function A(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==pn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){const b=C.target;b.removeEventListener("dispose",T),R(b),b.isVideoTexture&&h.delete(b)}function E(C){const b=C.target;b.removeEventListener("dispose",E),S(b)}function R(C){const b=n.get(C);if(b.__webglInit===void 0)return;const k=C.source,j=f.get(k);if(j){const J=j[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(C),Object.keys(j).length===0&&f.delete(k)}n.remove(C)}function M(C){const b=n.get(C);r.deleteTexture(b.__webglTexture);const k=C.source,j=f.get(k);delete j[b.__cacheKey],o.memory.textures--}function S(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let J=0;J<b.__webglFramebuffer[j].length;J++)r.deleteFramebuffer(b.__webglFramebuffer[j][J]);else r.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)r.deleteFramebuffer(b.__webglFramebuffer[j]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=C.textures;for(let j=0,J=k.length;j<J;j++){const Y=n.get(k[j]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(C)}let I=0;function O(){I=0}function F(){const C=I;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),I+=1,C}function H(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function q(C,b){const k=n.get(C);if(C.isVideoTexture&&Et(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(k,C,b);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+b)}function z(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){X(k,C,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+b)}function $(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){X(k,C,b);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+b)}function G(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){Z(k,C,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+b)}const it={[vs]:r.REPEAT,[Ui]:r.CLAMP_TO_EDGE,[da]:r.MIRRORED_REPEAT},ht={[Qe]:r.NEAREST,[pf]:r.NEAREST_MIPMAP_NEAREST,[zr]:r.NEAREST_MIPMAP_LINEAR,[pn]:r.LINEAR,[na]:r.LINEAR_MIPMAP_NEAREST,[fi]:r.LINEAR_MIPMAP_LINEAR},vt={[Hm]:r.NEVER,[jm]:r.ALWAYS,[Gm]:r.LESS,[Ef]:r.LEQUAL,[Wm]:r.EQUAL,[Ym]:r.GEQUAL,[Xm]:r.GREATER,[qm]:r.NOTEQUAL};function Ct(C,b){if(b.type===On&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===pn||b.magFilter===na||b.magFilter===zr||b.magFilter===fi||b.minFilter===pn||b.minFilter===na||b.minFilter===zr||b.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,it[b.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,it[b.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,it[b.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ht[b.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ht[b.minFilter]),b.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,vt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qe||b.minFilter!==zr&&b.minFilter!==fi||b.type===On&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Zt(C,b){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));const j=b.source;let J=f.get(j);J===void 0&&(J={},f.set(j,J));const Y=H(b);if(Y!==C.__cacheKey){J[Y]===void 0&&(J[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[Y].usedTimes++;const bt=J[C.__cacheKey];bt!==void 0&&(J[C.__cacheKey].usedTimes--,bt.usedTimes===0&&M(b)),C.__cacheKey=Y,C.__webglTexture=J[Y].texture}return k}function X(C,b,k){let j=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=r.TEXTURE_3D);const J=Zt(C,b),Y=b.source;e.bindTexture(j,C.__webglTexture,r.TEXTURE0+k);const bt=n.get(Y);if(Y.version!==bt.__version||J===!0){e.activeTexture(r.TEXTURE0+k);const ct=Vt.getPrimaries(Vt.workingColorSpace),pt=b.colorSpace===di?null:Vt.getPrimaries(b.colorSpace),Yt=b.colorSpace===di||ct===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let tt=_(b.image,!1,i.maxTextureSize);tt=ue(b,tt);const mt=s.convert(b.format,b.colorSpace),At=s.convert(b.type);let Pt=y(b.internalFormat,mt,At,b.colorSpace,b.isVideoTexture);Ct(j,b);let gt;const Xt=b.mipmaps,Ft=b.isVideoTexture!==!0,ae=bt.__version===void 0||J===!0,L=Y.dataReady,rt=A(b,tt);if(b.isDepthTexture)Pt=v(b.format===lr,b.type),ae&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,Pt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,Pt,tt.width,tt.height,0,mt,At,null));else if(b.isDataTexture)if(Xt.length>0){Ft&&ae&&e.texStorage2D(r.TEXTURE_2D,rt,Pt,Xt[0].width,Xt[0].height);for(let W=0,K=Xt.length;W<K;W++)gt=Xt[W],Ft?L&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(r.TEXTURE_2D,W,Pt,gt.width,gt.height,0,mt,At,gt.data);b.generateMipmaps=!1}else Ft?(ae&&e.texStorage2D(r.TEXTURE_2D,rt,Pt,tt.width,tt.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,At,tt.data)):e.texImage2D(r.TEXTURE_2D,0,Pt,tt.width,tt.height,0,mt,At,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ft&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,rt,Pt,Xt[0].width,Xt[0].height,tt.depth);for(let W=0,K=Xt.length;W<K;W++)if(gt=Xt[W],b.format!==bn)if(mt!==null)if(Ft){if(L)if(b.layerUpdates.size>0){const ft=Ju(gt.width,gt.height,b.format,b.type);for(const ut of b.layerUpdates){const Nt=gt.data.subarray(ut*ft/gt.data.BYTES_PER_ELEMENT,(ut+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,ut,gt.width,gt.height,1,mt,Nt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Pt,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,tt.depth,mt,At,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,W,Pt,gt.width,gt.height,tt.depth,0,mt,At,gt.data)}else{Ft&&ae&&e.texStorage2D(r.TEXTURE_2D,rt,Pt,Xt[0].width,Xt[0].height);for(let W=0,K=Xt.length;W<K;W++)gt=Xt[W],b.format!==bn?mt!==null?Ft?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,W,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(r.TEXTURE_2D,W,Pt,gt.width,gt.height,0,mt,At,gt.data)}else if(b.isDataArrayTexture)if(Ft){if(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,rt,Pt,tt.width,tt.height,tt.depth),L)if(b.layerUpdates.size>0){const W=Ju(tt.width,tt.height,b.format,b.type);for(const K of b.layerUpdates){const ft=tt.data.subarray(K*W/tt.data.BYTES_PER_ELEMENT,(K+1)*W/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,mt,At,ft)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,At,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,tt.width,tt.height,tt.depth,0,mt,At,tt.data);else if(b.isData3DTexture)Ft?(ae&&e.texStorage3D(r.TEXTURE_3D,rt,Pt,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,At,tt.data)):e.texImage3D(r.TEXTURE_3D,0,Pt,tt.width,tt.height,tt.depth,0,mt,At,tt.data);else if(b.isFramebufferTexture){if(ae)if(Ft)e.texStorage2D(r.TEXTURE_2D,rt,Pt,tt.width,tt.height);else{let W=tt.width,K=tt.height;for(let ft=0;ft<rt;ft++)e.texImage2D(r.TEXTURE_2D,ft,Pt,W,K,0,mt,At,null),W>>=1,K>>=1}}else if(Xt.length>0){if(Ft&&ae){const W=wt(Xt[0]);e.texStorage2D(r.TEXTURE_2D,rt,Pt,W.width,W.height)}for(let W=0,K=Xt.length;W<K;W++)gt=Xt[W],Ft?L&&e.texSubImage2D(r.TEXTURE_2D,W,0,0,mt,At,gt):e.texImage2D(r.TEXTURE_2D,W,Pt,mt,At,gt);b.generateMipmaps=!1}else if(Ft){if(ae){const W=wt(tt);e.texStorage2D(r.TEXTURE_2D,rt,Pt,W.width,W.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,mt,At,tt)}else e.texImage2D(r.TEXTURE_2D,0,Pt,mt,At,tt);m(b)&&g(j),bt.__version=Y.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Z(C,b,k){if(b.image.length!==6)return;const j=Zt(C,b),J=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const Y=n.get(J);if(J.version!==Y.__version||j===!0){e.activeTexture(r.TEXTURE0+k);const bt=Vt.getPrimaries(Vt.workingColorSpace),ct=b.colorSpace===di?null:Vt.getPrimaries(b.colorSpace),pt=b.colorSpace===di||bt===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Yt=b.isCompressedTexture||b.image[0].isCompressedTexture,tt=b.image[0]&&b.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!Yt&&!tt?mt[K]=_(b.image[K],!0,i.maxCubemapSize):mt[K]=tt?b.image[K].image:b.image[K],mt[K]=ue(b,mt[K]);const At=mt[0],Pt=s.convert(b.format,b.colorSpace),gt=s.convert(b.type),Xt=y(b.internalFormat,Pt,gt,b.colorSpace),Ft=b.isVideoTexture!==!0,ae=Y.__version===void 0||j===!0,L=J.dataReady;let rt=A(b,At);Ct(r.TEXTURE_CUBE_MAP,b);let W;if(Yt){Ft&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,rt,Xt,At.width,At.height);for(let K=0;K<6;K++){W=mt[K].mipmaps;for(let ft=0;ft<W.length;ft++){const ut=W[ft];b.format!==bn?Pt!==null?Ft?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ut.width,ut.height,Pt,ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,Xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,0,0,ut.width,ut.height,Pt,gt,ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft,Xt,ut.width,ut.height,0,Pt,gt,ut.data)}}}else{if(W=b.mipmaps,Ft&&ae){W.length>0&&rt++;const K=wt(mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,rt,Xt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Pt,gt,mt[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,mt[K].width,mt[K].height,0,Pt,gt,mt[K].data);for(let ft=0;ft<W.length;ft++){const Nt=W[ft].image[K].image;Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Nt.width,Nt.height,Pt,gt,Nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,Xt,Nt.width,Nt.height,0,Pt,gt,Nt.data)}}else{Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pt,gt,mt[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xt,Pt,gt,mt[K]);for(let ft=0;ft<W.length;ft++){const ut=W[ft];Ft?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,0,0,Pt,gt,ut.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ft+1,Xt,Pt,gt,ut.image[K])}}}m(b)&&g(r.TEXTURE_CUBE_MAP),Y.__version=J.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function St(C,b,k,j,J,Y){const bt=s.convert(k.format,k.colorSpace),ct=s.convert(k.type),pt=y(k.internalFormat,bt,ct,k.colorSpace),Yt=n.get(b),tt=n.get(k);if(tt.__renderTarget=b,!Yt.__hasExternalTextures){const mt=Math.max(1,b.width>>Y),At=Math.max(1,b.height>>Y);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,pt,mt,At,b.depth,0,bt,ct,null):e.texImage2D(J,Y,pt,mt,At,0,bt,ct,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Wt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,J,tt.__webglTexture,0,Gt(b)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,J,tt.__webglTexture,Y),e.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(C,b,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),b.depthBuffer){const j=b.depthTexture,J=j&&j.isDepthTexture?j.type:null,Y=v(b.stencilBuffer,J),bt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=Gt(b);Wt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,Y,b.width,b.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Y,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Y,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,C)}else{const j=b.textures;for(let J=0;J<j.length;J++){const Y=j[J],bt=s.convert(Y.format,Y.colorSpace),ct=s.convert(Y.type),pt=y(Y.internalFormat,bt,ct,Y.colorSpace),Yt=Gt(b);k&&Wt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,pt,b.width,b.height):Wt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt,pt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const J=j.__webglTexture,Y=Gt(b);if(b.depthTexture.format===$s)Wt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(b.depthTexture.format===lr)Wt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Dt(C){const b=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=j}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Rt(b.__webglFramebuffer,C)}else if(k){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=r.createRenderbuffer(),lt(b.__webglDepthbuffer[j],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),lt(b.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(C,b,k){const j=n.get(C);b!==void 0&&St(j.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Dt(C)}function _e(C){const b=C.texture,k=n.get(C),j=n.get(b);C.addEventListener("dispose",E);const J=C.textures,Y=C.isWebGLCubeRenderTarget===!0,bt=J.length>1;if(bt||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=b.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let pt=0;pt<b.mipmaps.length;pt++)k.__webglFramebuffer[ct][pt]=r.createFramebuffer()}else k.__webglFramebuffer[ct]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<b.mipmaps.length;ct++)k.__webglFramebuffer[ct]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(bt)for(let ct=0,pt=J.length;ct<pt;ct++){const Yt=n.get(J[ct]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Wt(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){const pt=J[ct];k.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);const Yt=s.convert(pt.format,pt.colorSpace),tt=s.convert(pt.type),mt=y(pt.internalFormat,Yt,tt,pt.colorSpace,C.isXRRenderTarget===!0),At=Gt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,At,mt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),lt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Ct(r.TEXTURE_CUBE_MAP,b);for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)St(k.__webglFramebuffer[ct][pt],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else St(k.__webglFramebuffer[ct],C,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(b)&&g(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,pt=J.length;ct<pt;ct++){const Yt=J[ct],tt=n.get(Yt);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),Ct(r.TEXTURE_2D,Yt),St(k.__webglFramebuffer,C,Yt,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,0),m(Yt)&&g(r.TEXTURE_2D)}e.unbindTexture()}else{let ct=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ct,j.__webglTexture),Ct(ct,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)St(k.__webglFramebuffer[pt],C,b,r.COLOR_ATTACHMENT0,ct,pt);else St(k.__webglFramebuffer,C,b,r.COLOR_ATTACHMENT0,ct,0);m(b)&&g(ct),e.unbindTexture()}C.depthBuffer&&Dt(C)}function qt(C){const b=C.textures;for(let k=0,j=b.length;k<j;k++){const J=b[k];if(m(J)){const Y=x(C),bt=n.get(J).__webglTexture;e.bindTexture(Y,bt),g(Y),e.unbindTexture()}}}const be=[],U=[];function vn(C){if(C.samples>0){if(Wt(C)===!1){const b=C.textures,k=C.width,j=C.height;let J=r.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=n.get(C),ct=b.length>1;if(ct)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const Yt=n.get(b[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Yt,0)}r.blitFramebuffer(0,0,k,j,0,0,k,j,J,r.NEAREST),l===!0&&(be.length=0,U.length=0,be.push(r.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(be.push(Y),U.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const Yt=n.get(b[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Yt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Gt(C){return Math.min(i.maxSamples,C.samples)}function Wt(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(C){const b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function ue(C,b){const k=C.colorSpace,j=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==tn&&k!==di&&(Vt.getTransfer(k)===ie?(j!==bn||J!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function wt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=Bt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Wt}function dy(r,t){function e(n,i=di){let s;const o=Vt.getTransfer(i);if(n===xi)return r.UNSIGNED_BYTE;if(n===ih)return r.UNSIGNED_SHORT_4_4_4_4;if(n===sh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===_f)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===mf)return r.BYTE;if(n===gf)return r.SHORT;if(n===to)return r.UNSIGNED_SHORT;if(n===nh)return r.INT;if(n===xs)return r.UNSIGNED_INT;if(n===On)return r.FLOAT;if(n===qn)return r.HALF_FLOAT;if(n===vf)return r.ALPHA;if(n===xf)return r.RGB;if(n===bn)return r.RGBA;if(n===yf)return r.LUMINANCE;if(n===Mf)return r.LUMINANCE_ALPHA;if(n===$s)return r.DEPTH_COMPONENT;if(n===lr)return r.DEPTH_STENCIL;if(n===rh)return r.RED;if(n===oh)return r.RED_INTEGER;if(n===Sf)return r.RG;if(n===ah)return r.RG_INTEGER;if(n===lh)return r.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===oa)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===ac||n===lc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oc||n===ac)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===yc||n===Mc||n===Sc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===bc||n===Tc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===aa)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bf||n===wc||n===Ec||n===Ac)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ec)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class fy extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const py={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(py)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const my=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gy=`
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

}`;class _y{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Se,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Be({vertexShader:my,fragmentShader:gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new Ne(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vy extends Ts{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const _=new _y,m=e.getContextAttributes();let g=null,x=null;const y=[],v=[],A=new ot;let T=null;const E=new Xe;E.viewport=new Jt;const R=new Xe;R.viewport=new Jt;const M=[E,R],S=new fy;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=y[X];return Z===void 0&&(Z=new pl,y[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=y[X];return Z===void 0&&(Z=new pl,y[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=y[X];return Z===void 0&&(Z=new pl,y[X]=Z),Z.getHandSpace()};function F(X){const Z=v.indexOf(X.inputSource);if(Z===-1)return;const St=y[Z];St!==void 0&&(St.update(X.inputSource,X.frame,c||o),St.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",q);for(let X=0;X<y.length;X++){const Z=v[X];Z!==null&&(v[X]=null,y[X].disconnect(Z))}I=null,O=null,_.reset(),t.setRenderTarget(g),d=null,f=null,u=null,i=null,x=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new En(d.framebufferWidth,d.framebufferHeight,{format:bn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,St=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?lr:$s,St=m.stencil?ar:xs);const Rt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Rt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new En(f.textureWidth,f.textureHeight,{format:bn,type:xi,depthTexture:new kf(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(X){for(let Z=0;Z<X.removed.length;Z++){const St=X.removed[Z],lt=v.indexOf(St);lt>=0&&(v[lt]=null,y[lt].disconnect(St))}for(let Z=0;Z<X.added.length;Z++){const St=X.added[Z];let lt=v.indexOf(St);if(lt===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=v.length){v.push(St),lt=Dt;break}else if(v[Dt]===null){v[Dt]=St,lt=Dt;break}if(lt===-1)break}const Rt=y[lt];Rt&&Rt.connect(St)}}const z=new P,$=new P;function G(X,Z,St){z.setFromMatrixPosition(Z.matrixWorld),$.setFromMatrixPosition(St.matrixWorld);const lt=z.distanceTo($),Rt=Z.projectionMatrix.elements,Dt=St.projectionMatrix.elements,Bt=Rt[14]/(Rt[10]-1),_e=Rt[14]/(Rt[10]+1),qt=(Rt[9]+1)/Rt[5],be=(Rt[9]-1)/Rt[5],U=(Rt[8]-1)/Rt[0],vn=(Dt[8]+1)/Dt[0],Gt=Bt*U,Wt=Bt*vn,Et=lt/(-U+vn),ue=Et*-U;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ue),X.translateZ(Et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Rt[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const wt=Bt+Et,C=_e+Et,b=Gt-ue,k=Wt+(lt-ue),j=qt*_e/C*wt,J=be*_e/C*wt;X.projectionMatrix.makePerspective(b,k,j,J,wt,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function it(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let Z=X.near,St=X.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(St=_.depthFar)),S.near=R.near=E.near=Z,S.far=R.far=E.far=St,(I!==S.near||O!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,O=S.far),E.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,S.layers.mask=E.layers.mask|R.layers.mask;const lt=X.parent,Rt=S.cameras;it(S,lt);for(let Dt=0;Dt<Rt.length;Dt++)it(Rt[Dt],lt);Rt.length===2?G(S,E,R):S.projectionMatrix.copy(E.projectionMatrix),ht(X,S,lt)};function ht(X,Z,St){St===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(St.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=cr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let vt=null;function Ct(X,Z){if(h=Z.getViewerPose(c||o),p=Z,h!==null){const St=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let lt=!1;St.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let Dt=0;Dt<St.length;Dt++){const Bt=St[Dt];let _e=null;if(d!==null)_e=d.getViewport(Bt);else{const be=u.getViewSubImage(f,Bt);_e=be.viewport,Dt===0&&(t.setRenderTargetTextures(x,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(x))}let qt=M[Dt];qt===void 0&&(qt=new Xe,qt.layers.enable(Dt),qt.viewport=new Jt,M[Dt]=qt),qt.matrix.fromArray(Bt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Bt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(_e.x,_e.y,_e.width,_e.height),Dt===0&&(S.matrix.copy(qt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(qt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Dt=u.getDepthInformation(St[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,i.renderState)}}for(let St=0;St<y.length;St++){const lt=v[St],Rt=y[St];lt!==null&&Rt!==void 0&&Rt.update(lt,Z,c||o)}vt&&vt(X,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),p=null}const Zt=new Ff;Zt.setAnimationLoop(Ct),this.setAnimationLoop=function(X){vt=X},this.dispose=function(){}}}const ts=new kn,xy=new Lt;function yy(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Nf(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,y,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ve&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ve&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=t.get(g),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,ts.copy(v),ts.x*=-1,ts.y*=-1,ts.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(xy.makeRotationFromEuler(ts)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ve&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function My(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(p(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(x,A);const T=t.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function h(x){const y=u();x.__bindingPointIndex=y;const v=r.createBuffer(),A=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=i[x.id],v=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let T=0,E=v.length;T<E;T++){const R=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,S=R.length;M<S;M++){const I=R[M];if(d(I,T,M,A)===!0){const O=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let q=0;q<F.length;q++){const z=F[q],$=_(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,O+H,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,y,v,A){const T=x.value,E=y+"_"+v;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{const R=A[E];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return A[E]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function p(x){const y=x.uniforms;let v=0;const A=16;for(let E=0,R=y.length;E<R;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,I=M.length;S<I;S++){const O=M[S],F=Array.isArray(O.value)?O.value:[O.value];for(let H=0,q=F.length;H<q;H++){const z=F[H],$=_(z),G=v%A,it=G%$.boundary,ht=G+it;v+=it,ht!==0&&A-ht<$.storage&&(v+=A-ht),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=$.storage}}}const T=v%A;return T>0&&(v+=A-T),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}class Sy{constructor(t={}){const{canvas:e=ug(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),_=new Int32Array(4);let m=null,g=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=Vi,this.toneMappingExposure=1;const v=this;let A=!1,T=0,E=0,R=null,M=-1,S=null;const I=new Jt,O=new Jt;let F=null;const H=new at(0);let q=0,z=e.width,$=e.height,G=1,it=null,ht=null;const vt=new Jt(0,0,z,$),Ct=new Jt(0,0,z,$);let Zt=!1;const X=new fh;let Z=!1,St=!1;const lt=new Lt,Rt=new Lt,Dt=new P,Bt=new Jt,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function be(){return R===null?G:1}let U=n;function vn(w,D){return e.getContext(w,D)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${th}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),U===null){const D="webgl2";if(U=vn(D,w),U===null)throw vn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Gt,Wt,Et,ue,wt,C,b,k,j,J,Y,bt,ct,pt,Yt,tt,mt,At,Pt,gt,Xt,Ft,ae,L;function rt(){Gt=new Av(U),Gt.init(),Ft=new dy(U,Gt),Wt=new Mv(U,Gt,t,Ft),Et=new cy(U,Gt),Wt.reverseDepthBuffer&&f&&Et.buffers.depth.setReversed(!0),ue=new Pv(U),wt=new jx,C=new uy(U,Gt,Et,wt,Wt,Ft,ue),b=new bv(v),k=new Ev(v),j=new Fg(U),ae=new xv(U,j),J=new Rv(U,j,ue,ae),Y=new Lv(U,J,j,ue),Pt=new Iv(U,Wt,C),tt=new Sv(wt),bt=new Yx(v,b,k,Gt,Wt,ae,tt),ct=new yy(v,wt),pt=new $x,Yt=new ny(Gt),At=new vv(v,b,k,Et,Y,d,l),mt=new ay(v,Y,Wt),L=new My(U,ue,Wt,Et),gt=new yv(U,Gt,ue),Xt=new Cv(U,Gt,ue),ue.programs=bt.programs,v.capabilities=Wt,v.extensions=Gt,v.properties=wt,v.renderLists=pt,v.shadowMap=mt,v.state=Et,v.info=ue}rt();const W=new vy(v,U);this.xr=W,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=Gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(z,$,!1))},this.getSize=function(w){return w.set(z,$)},this.setSize=function(w,D,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,$=D,e.width=Math.floor(w*G),e.height=Math.floor(D*G),B===!0&&(e.style.width=w+"px",e.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(z*G,$*G).floor()},this.setDrawingBufferSize=function(w,D,B){z=w,$=D,G=B,e.width=Math.floor(w*B),e.height=Math.floor(D*B),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(vt)},this.setViewport=function(w,D,B,V){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,D,B,V),Et.viewport(I.copy(vt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Ct)},this.setScissor=function(w,D,B,V){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,D,B,V),Et.scissor(O.copy(Ct).multiplyScalar(G).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(w){Et.setScissorTest(Zt=w)},this.setOpaqueSort=function(w){it=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(w=!0,D=!0,B=!0){let V=0;if(w){let N=!1;if(R!==null){const et=R.texture.format;N=et===lh||et===ah||et===oh}if(N){const et=R.texture.type,dt=et===xi||et===xs||et===to||et===ar||et===ih||et===sh,xt=At.getClearColor(),yt=At.getClearAlpha(),It=xt.r,Ut=xt.g,Mt=xt.b;dt?(p[0]=It,p[1]=Ut,p[2]=Mt,p[3]=yt,U.clearBufferuiv(U.COLOR,0,p)):(_[0]=It,_[1]=Ut,_[2]=Mt,_[3]=yt,U.clearBufferiv(U.COLOR,0,_))}else V|=U.COLOR_BUFFER_BIT}D&&(V|=U.DEPTH_BUFFER_BIT),B&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),Yt.dispose(),wt.dispose(),b.dispose(),k.dispose(),Y.dispose(),ae.dispose(),L.dispose(),bt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Yh),W.removeEventListener("sessionend",jh),ji.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=ue.autoReset,D=mt.enabled,B=mt.autoUpdate,V=mt.needsUpdate,N=mt.type;rt(),ue.autoReset=w,mt.enabled=D,mt.autoUpdate=B,mt.needsUpdate=V,mt.type=N}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nt(w){const D=w.target;D.removeEventListener("dispose",Nt),ye(D)}function ye(w){He(w),wt.remove(w)}function He(w){const D=wt.get(w).programs;D!==void 0&&(D.forEach(function(B){bt.releaseProgram(B)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,B,V,N,et){D===null&&(D=_e);const dt=N.isMesh&&N.matrixWorld.determinant()<0,xt=cm(w,D,B,V,N);Et.setMaterial(V,dt);let yt=B.index,It=1;if(V.wireframe===!0){if(yt=J.getWireframeAttribute(B),yt===void 0)return;It=2}const Ut=B.drawRange,Mt=B.attributes.position;let jt=Ut.start*It,le=(Ut.start+Ut.count)*It;et!==null&&(jt=Math.max(jt,et.start*It),le=Math.min(le,(et.start+et.count)*It)),yt!==null?(jt=Math.max(jt,0),le=Math.min(le,yt.count)):Mt!=null&&(jt=Math.max(jt,0),le=Math.min(le,Mt.count));const de=le-jt;if(de<0||de===1/0)return;ae.setup(N,V,xt,B,yt);let en,Qt=gt;if(yt!==null&&(en=j.get(yt),Qt=Xt,Qt.setIndex(en)),N.isMesh)V.wireframe===!0?(Et.setLineWidth(V.wireframeLinewidth*be()),Qt.setMode(U.LINES)):Qt.setMode(U.TRIANGLES);else if(N.isLine){let Tt=V.linewidth;Tt===void 0&&(Tt=1),Et.setLineWidth(Tt*be()),N.isLineSegments?Qt.setMode(U.LINES):N.isLineLoop?Qt.setMode(U.LINE_LOOP):Qt.setMode(U.LINE_STRIP)}else N.isPoints?Qt.setMode(U.POINTS):N.isSprite&&Qt.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Tt=N._multiDrawStarts,ei=N._multiDrawCounts,te=N._multiDrawCount,Pn=yt?j.get(yt).bytesPerElement:1,Es=wt.get(V).currentProgram.getUniforms();for(let cn=0;cn<te;cn++)Es.setValue(U,"_gl_DrawID",cn),Qt.render(Tt[cn]/Pn,ei[cn])}else if(N.isInstancedMesh)Qt.renderInstances(jt,de,N.count);else if(B.isInstancedBufferGeometry){const Tt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ei=Math.min(B.instanceCount,Tt);Qt.renderInstances(jt,de,ei)}else Qt.render(jt,de)};function ne(w,D,B){w.transparent===!0&&w.side===qe&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,yo(w,D,B),w.side=vi,w.needsUpdate=!0,yo(w,D,B),w.side=qe):yo(w,D,B)}this.compile=function(w,D,B=null){B===null&&(B=w),g=Yt.get(B),g.init(D),y.push(g),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),w!==B&&w.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights();const V=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const et=N.material;if(et)if(Array.isArray(et))for(let dt=0;dt<et.length;dt++){const xt=et[dt];ne(xt,B,N),V.add(xt)}else ne(et,B,N),V.add(et)}),y.pop(),g=null,V},this.compileAsync=function(w,D,B=null){const V=this.compile(w,D,B);return new Promise(N=>{function et(){if(V.forEach(function(dt){wt.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){N(w);return}setTimeout(et,10)}Gt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Cn=null;function ti(w){Cn&&Cn(w)}function Yh(){ji.stop()}function jh(){ji.start()}const ji=new Ff;ji.setAnimationLoop(ti),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(w){Cn=w,W.setAnimationLoop(w),w===null?ji.stop():ji.start()},W.addEventListener("sessionstart",Yh),W.addEventListener("sessionend",jh),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,R),g=Yt.get(w,y.length),g.init(D),y.push(g),Rt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(Rt),St=this.localClippingEnabled,Z=tt.init(this.clippingPlanes,St),m=pt.get(w,x.length),m.init(),x.push(m),W.enabled===!0&&W.isPresenting===!0){const et=v.xr.getDepthSensingMesh();et!==null&&za(et,D,-1/0,v.sortObjects)}za(w,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,ht),qt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,qt&&At.addToRenderList(m,w),this.info.render.frame++,Z===!0&&tt.beginShadows();const B=g.state.shadowsArray;mt.render(B,w,D),Z===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(g.setupLights(),D.isArrayCamera){const et=D.cameras;if(N.length>0)for(let dt=0,xt=et.length;dt<xt;dt++){const yt=et[dt];$h(V,N,w,yt)}qt&&At.render(w);for(let dt=0,xt=et.length;dt<xt;dt++){const yt=et[dt];Kh(m,w,yt,yt.viewport)}}else N.length>0&&$h(V,N,w,D),qt&&At.render(w),Kh(m,w,D);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,D),ae.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(g=y[y.length-1],Z===!0&&tt.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function za(w,D,B,V){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){V&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);const dt=Y.update(w),xt=w.material;xt.visible&&m.push(w,dt,xt,B,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const dt=Y.update(w),xt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Bt.copy(dt.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(xt)){const yt=dt.groups;for(let It=0,Ut=yt.length;It<Ut;It++){const Mt=yt[It],jt=xt[Mt.materialIndex];jt&&jt.visible&&m.push(w,dt,jt,B,Bt.z,Mt)}}else xt.visible&&m.push(w,dt,xt,B,Bt.z,null)}}const et=w.children;for(let dt=0,xt=et.length;dt<xt;dt++)za(et[dt],D,B,V)}function Kh(w,D,B,V){const N=w.opaque,et=w.transmissive,dt=w.transparent;g.setupLightsView(B),Z===!0&&tt.setGlobalState(v.clippingPlanes,B),V&&Et.viewport(I.copy(V)),N.length>0&&xo(N,D,B),et.length>0&&xo(et,D,B),dt.length>0&&xo(dt,D,B),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function $h(w,D,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[V.id]===void 0&&(g.state.transmissionRenderTarget[V.id]=new En(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?qn:xi,minFilter:fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const et=g.state.transmissionRenderTarget[V.id],dt=V.viewport||I;et.setSize(dt.z,dt.w);const xt=v.getRenderTarget();v.setRenderTarget(et),v.getClearColor(H),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),qt&&At.render(B);const yt=v.toneMapping;v.toneMapping=Vi;const It=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),g.setupLightsView(V),Z===!0&&tt.setGlobalState(v.clippingPlanes,V),xo(w,B,V),C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Mt=0,jt=D.length;Mt<jt;Mt++){const le=D[Mt],de=le.object,en=le.geometry,Qt=le.material,Tt=le.group;if(Qt.side===qe&&de.layers.test(V.layers)){const ei=Qt.side;Qt.side=Ve,Qt.needsUpdate=!0,Jh(de,B,V,en,Qt,Tt),Qt.side=ei,Qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(C.updateMultisampleRenderTarget(et),C.updateRenderTargetMipmap(et))}v.setRenderTarget(xt),v.setClearColor(H,q),It!==void 0&&(V.viewport=It),v.toneMapping=yt}function xo(w,D,B){const V=D.isScene===!0?D.overrideMaterial:null;for(let N=0,et=w.length;N<et;N++){const dt=w[N],xt=dt.object,yt=dt.geometry,It=V===null?dt.material:V,Ut=dt.group;xt.layers.test(B.layers)&&Jh(xt,D,B,yt,It,Ut)}}function Jh(w,D,B,V,N,et){w.onBeforeRender(v,D,B,V,N,et),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,D,B,V,w,et),N.transparent===!0&&N.side===qe&&N.forceSinglePass===!1?(N.side=Ve,N.needsUpdate=!0,v.renderBufferDirect(B,D,V,N,w,et),N.side=vi,N.needsUpdate=!0,v.renderBufferDirect(B,D,V,N,w,et),N.side=qe):v.renderBufferDirect(B,D,V,N,w,et),w.onAfterRender(v,D,B,V,N,et)}function yo(w,D,B){D.isScene!==!0&&(D=_e);const V=wt.get(w),N=g.state.lights,et=g.state.shadowsArray,dt=N.state.version,xt=bt.getParameters(w,N.state,et,D,B),yt=bt.getProgramCacheKey(xt);let It=V.programs;V.environment=w.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(w.isMeshStandardMaterial?k:b).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",Nt),It=new Map,V.programs=It);let Ut=It.get(yt);if(Ut!==void 0){if(V.currentProgram===Ut&&V.lightsStateVersion===dt)return Qh(w,xt),Ut}else xt.uniforms=bt.getUniforms(w),w.onBeforeCompile(xt,v),Ut=bt.acquireProgram(xt,yt),It.set(yt,Ut),V.uniforms=xt.uniforms;const Mt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=tt.uniform),Qh(w,xt),V.needsLights=um(w),V.lightsStateVersion=dt,V.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ut,V.uniformsList=null,Ut}function Zh(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=la.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Qh(w,D){const B=wt.get(w);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function cm(w,D,B,V,N){D.isScene!==!0&&(D=_e),C.resetTextureUnits();const et=D.fog,dt=V.isMeshStandardMaterial?D.environment:null,xt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:tn,yt=(V.isMeshStandardMaterial?k:b).get(V.envMap||dt),It=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Mt=!!B.morphAttributes.position,jt=!!B.morphAttributes.normal,le=!!B.morphAttributes.color;let de=Vi;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(de=v.toneMapping);const en=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Qt=en!==void 0?en.length:0,Tt=wt.get(V),ei=g.state.lights;if(Z===!0&&(St===!0||w!==S)){const xn=w===S&&V.id===M;tt.setState(V,w,xn)}let te=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==ei.state.version||Tt.outputColorSpace!==xt||N.isBatchedMesh&&Tt.batching===!1||!N.isBatchedMesh&&Tt.batching===!0||N.isBatchedMesh&&Tt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Tt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Tt.instancing===!1||!N.isInstancedMesh&&Tt.instancing===!0||N.isSkinnedMesh&&Tt.skinning===!1||!N.isSkinnedMesh&&Tt.skinning===!0||N.isInstancedMesh&&Tt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Tt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Tt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Tt.instancingMorph===!1&&N.morphTexture!==null||Tt.envMap!==yt||V.fog===!0&&Tt.fog!==et||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==tt.numPlanes||Tt.numIntersection!==tt.numIntersection)||Tt.vertexAlphas!==It||Tt.vertexTangents!==Ut||Tt.morphTargets!==Mt||Tt.morphNormals!==jt||Tt.morphColors!==le||Tt.toneMapping!==de||Tt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Tt.__version=V.version);let Pn=Tt.currentProgram;te===!0&&(Pn=yo(V,D,N));let Es=!1,cn=!1,wr=!1;const fe=Pn.getUniforms(),Bn=Tt.uniforms;if(Et.useProgram(Pn.program)&&(Es=!0,cn=!0,wr=!0),V.id!==M&&(M=V.id,cn=!0),Es||S!==w){Et.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),fg(lt),pg(lt),fe.setValue(U,"projectionMatrix",lt)):fe.setValue(U,"projectionMatrix",w.projectionMatrix),fe.setValue(U,"viewMatrix",w.matrixWorldInverse);const Ti=fe.map.cameraPosition;Ti!==void 0&&Ti.setValue(U,Dt.setFromMatrixPosition(w.matrixWorld)),Wt.logarithmicDepthBuffer&&fe.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,cn=!0,wr=!0)}if(N.isSkinnedMesh){fe.setOptional(U,N,"bindMatrix"),fe.setOptional(U,N,"bindMatrixInverse");const xn=N.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),fe.setValue(U,"boneTexture",xn.boneTexture,C))}N.isBatchedMesh&&(fe.setOptional(U,N,"batchingTexture"),fe.setValue(U,"batchingTexture",N._matricesTexture,C),fe.setOptional(U,N,"batchingIdTexture"),fe.setValue(U,"batchingIdTexture",N._indirectTexture,C),fe.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&fe.setValue(U,"batchingColorTexture",N._colorsTexture,C));const Er=B.morphAttributes;if((Er.position!==void 0||Er.normal!==void 0||Er.color!==void 0)&&Pt.update(N,B,Pn),(cn||Tt.receiveShadow!==N.receiveShadow)&&(Tt.receiveShadow=N.receiveShadow,fe.setValue(U,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Bn.envMap.value=yt,Bn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Bn.envMapIntensity.value=D.environmentIntensity),cn&&(fe.setValue(U,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&hm(Bn,wr),et&&V.fog===!0&&ct.refreshFogUniforms(Bn,et),ct.refreshMaterialUniforms(Bn,V,G,$,g.state.transmissionRenderTarget[w.id]),la.upload(U,Zh(Tt),Bn,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(la.upload(U,Zh(Tt),Bn,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(U,"center",N.center),fe.setValue(U,"modelViewMatrix",N.modelViewMatrix),fe.setValue(U,"normalMatrix",N.normalMatrix),fe.setValue(U,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const xn=V.uniformsGroups;for(let Ti=0,wi=xn.length;Ti<wi;Ti++){const tu=xn[Ti];L.update(tu,Pn),L.bind(tu,Pn)}}return Pn}function hm(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function um(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,D,B){wt.get(w.texture).__webglTexture=D,wt.get(w.depthTexture).__webglTexture=B;const V=wt.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){const B=wt.get(w);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,B=0){R=w,T=D,E=B;let V=!0,N=null,et=!1,dt=!1;if(w){const yt=wt.get(w);if(yt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(yt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(yt.__hasExternalTextures)C.rebindTextures(w,wt.get(w.texture).__webglTexture,wt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Mt=w.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&wt.has(Mt)&&(w.width!==Mt.image.width||w.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(dt=!0);const Ut=wt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[D])?N=Ut[D][B]:N=Ut[D],et=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?N=wt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[B]:N=Ut,I.copy(w.viewport),O.copy(w.scissor),F=w.scissorTest}else I.copy(vt).multiplyScalar(G).floor(),O.copy(Ct).multiplyScalar(G).floor(),F=Zt;if(Et.bindFramebuffer(U.FRAMEBUFFER,N)&&V&&Et.drawBuffers(w,N),Et.viewport(I),Et.scissor(O),Et.setScissorTest(F),et){const yt=wt.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,yt.__webglTexture,B)}else if(dt){const yt=wt.get(w.texture),It=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.__webglTexture,B||0,It)}M=-1},this.readRenderTargetPixels=function(w,D,B,V,N,et,dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){Et.bindFramebuffer(U.FRAMEBUFFER,xt);try{const yt=w.texture,It=yt.format,Ut=yt.type;if(!Wt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-V&&B>=0&&B<=w.height-N&&U.readPixels(D,B,V,N,Ft.convert(It),Ft.convert(Ut),et)}finally{const yt=R!==null?wt.get(R).__webglFramebuffer:null;Et.bindFramebuffer(U.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(w,D,B,V,N,et,dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=wt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){const yt=w.texture,It=yt.format,Ut=yt.type;if(!Wt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-V&&B>=0&&B<=w.height-N){Et.bindFramebuffer(U.FRAMEBUFFER,xt);const Mt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Mt),U.bufferData(U.PIXEL_PACK_BUFFER,et.byteLength,U.STREAM_READ),U.readPixels(D,B,V,N,Ft.convert(It),Ft.convert(Ut),0);const jt=R!==null?wt.get(R).__webglFramebuffer:null;Et.bindFramebuffer(U.FRAMEBUFFER,jt);const le=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await dg(U,le,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Mt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,et),U.deleteBuffer(Mt),U.deleteSync(le),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,B=0){w.isTexture!==!0&&(Vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-B),N=Math.floor(w.image.width*V),et=Math.floor(w.image.height*V),dt=D!==null?D.x:0,xt=D!==null?D.y:0;C.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,dt,xt,N,et),Et.unbindTexture()},this.copyTextureToTexture=function(w,D,B=null,V=null,N=0){w.isTexture!==!0&&(Vr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let et,dt,xt,yt,It,Ut,Mt,jt,le;const de=w.isCompressedTexture?w.mipmaps[N]:w.image;B!==null?(et=B.max.x-B.min.x,dt=B.max.y-B.min.y,xt=B.isBox3?B.max.z-B.min.z:1,yt=B.min.x,It=B.min.y,Ut=B.isBox3?B.min.z:0):(et=de.width,dt=de.height,xt=de.depth||1,yt=0,It=0,Ut=0),V!==null?(Mt=V.x,jt=V.y,le=V.z):(Mt=0,jt=0,le=0);const en=Ft.convert(D.format),Qt=Ft.convert(D.type);let Tt;D.isData3DTexture?(C.setTexture3D(D,0),Tt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(C.setTexture2DArray(D,0),Tt=U.TEXTURE_2D_ARRAY):(C.setTexture2D(D,0),Tt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const ei=U.getParameter(U.UNPACK_ROW_LENGTH),te=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Pn=U.getParameter(U.UNPACK_SKIP_PIXELS),Es=U.getParameter(U.UNPACK_SKIP_ROWS),cn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,de.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yt),U.pixelStorei(U.UNPACK_SKIP_ROWS,It),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ut);const wr=w.isDataArrayTexture||w.isData3DTexture,fe=D.isDataArrayTexture||D.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Bn=wt.get(w),Er=wt.get(D),xn=wt.get(Bn.__renderTarget),Ti=wt.get(Er.__renderTarget);Et.bindFramebuffer(U.READ_FRAMEBUFFER,xn.__webglFramebuffer),Et.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let wi=0;wi<xt;wi++)wr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.get(w).__webglTexture,N,Ut+wi),w.isDepthTexture?(fe&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.get(D).__webglTexture,N,le+wi),U.blitFramebuffer(yt,It,et,dt,Mt,jt,et,dt,U.DEPTH_BUFFER_BIT,U.NEAREST)):fe?U.copyTexSubImage3D(Tt,N,Mt,jt,le+wi,yt,It,et,dt):U.copyTexSubImage2D(Tt,N,Mt,jt,le+wi,yt,It,et,dt);Et.bindFramebuffer(U.READ_FRAMEBUFFER,null),Et.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else fe?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Tt,N,Mt,jt,le,et,dt,xt,en,Qt,de.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Tt,N,Mt,jt,le,et,dt,xt,en,de.data):U.texSubImage3D(Tt,N,Mt,jt,le,et,dt,xt,en,Qt,de):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,Mt,jt,et,dt,en,Qt,de.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,Mt,jt,de.width,de.height,en,de.data):U.texSubImage2D(U.TEXTURE_2D,N,Mt,jt,et,dt,en,Qt,de);U.pixelStorei(U.UNPACK_ROW_LENGTH,ei),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,te),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Pn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Es),U.pixelStorei(U.UNPACK_SKIP_IMAGES,cn),N===0&&D.generateMipmaps&&U.generateMipmap(Tt),Et.unbindTexture()},this.copyTextureToTexture3D=function(w,D,B=null,V=null,N=0){return w.isTexture!==!0&&(Vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,w=arguments[2],D=arguments[3],N=arguments[4]||0),Vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,D,B,V,N)},this.initRenderTarget=function(w){wt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Et.unbindTexture()},this.resetState=function(){T=0,E=0,R=null,Et.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}}class mh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(t),this.density=e}clone(){return new mh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class po{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new at(t),this.near=e,this.far=n}clone(){return new po(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qi extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class by{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Cc,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new P;class gh{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),i=se(i,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new gh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Zu=new P,Qu=new Jt,td=new Jt,Ty=new P,ed=new Lt,Vo=new P,ml=new Jn,nd=new Lt,gl=new Ea;class wy extends Q{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=su,this.bindMatrix=new Lt,this.bindMatrixInverse=new Lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new $n),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Vo),this.boundingBox.expandByPoint(Vo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Vo),this.boundingSphere.expandByPoint(Vo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ml.copy(this.boundingSphere),ml.applyMatrix4(i),t.ray.intersectsSphere(ml)!==!1&&(nd.copy(i).invert(),gl.copy(t.ray).applyMatrix4(nd),!(this.boundingBox!==null&&gl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,gl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Jt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===su?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Um?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Qu.fromBufferAttribute(i.attributes.skinIndex,t),td.fromBufferAttribute(i.attributes.skinWeight,t),Zu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=td.getComponent(s);if(o!==0){const a=Qu.getComponent(s);ed.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Ty.copy(Zu).applyMatrix4(ed),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Gf extends me{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wf extends Se{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Qe,h=Qe,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const id=new Lt,Ey=new Lt;class _h{constructor(t=[],e=[]){this.uuid=Fn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Lt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Lt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:Ey;id.multiplyMatrices(a,e[s]),id.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new _h(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Wf(e,t,t,bn,On);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Gf),this.bones.push(o),this.boneInverses.push(new Lt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Lc extends Ce{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vs=new Lt,sd=new Lt,Ho=[],rd=new $n,Ay=new Lt,Ir=new Q,Lr=new Jn;class vh extends Q{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Lc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ay)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),rd.copy(t.boundingBox).applyMatrix4(Vs),this.boundingBox.union(rd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),Lr.copy(t.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),t.ray.intersectsSphere(Lr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Vs),sd.multiplyMatrices(n,Vs),Ir.matrixWorld=sd,Ir.raycast(t,Ho);for(let o=0,a=Ho.length;o<a;o++){const l=Ho[o];l.instanceId=s,l.object=this,e.push(l)}Ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wf(new Float32Array(i*this.count),i,this.count,rh,On));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Xf extends Yn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ma=new P,ga=new P,od=new Lt,Dr=new Ea,Go=new Jn,_l=new P,ad=new P;class xh extends me{constructor(t=new Ae,e=new Xf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ma.fromBufferAttribute(e,i-1),ga.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ma.distanceTo(ga);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(i),Go.radius+=s,t.ray.intersectsSphere(Go)===!1)return;od.copy(i).invert(),Dr.copy(t.ray).applyMatrix4(od);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){const g=h.getX(_),x=h.getX(_+1),y=Wo(this,t,Dr,l,g,x);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(d),g=Wo(this,t,Dr,l,_,m);g&&e.push(g)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){const g=Wo(this,t,Dr,l,_,_+1);g&&e.push(g)}if(this.isLineLoop){const _=Wo(this,t,Dr,l,p-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wo(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(ma.fromBufferAttribute(o,i),ga.fromBufferAttribute(o,s),e.distanceSqToSegment(ma,ga,_l,ad)>n)return;_l.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(_l);if(!(l<t.near||l>t.far))return{distance:l,point:ad.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const ld=new P,cd=new P;class Ry extends xh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)ld.fromBufferAttribute(e,i),cd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ld.distanceTo(cd);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cy extends xh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class yh extends Yn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const hd=new Lt,Dc=new Ea,Xo=new Jn,qo=new P;class Mh extends me{constructor(t=new Ae,e=new yh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(i),Xo.radius+=s,t.ray.intersectsSphere(Xo)===!1)return;hd.copy(i).invert(),Dc.copy(t.ray).applyMatrix4(hd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){const m=c.getX(p);qo.fromBufferAttribute(u,m),ud(qo,m,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,_=d;p<_;p++)qo.fromBufferAttribute(u,p),ud(qo,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ud(r,t,e,n,i,s,o){const a=Dc.distanceSqToPoint(r);if(a<e){const l=new P;Dc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Py extends Se{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new ot:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],s=[],o=[],a=new P,l=new Lt;for(let d=0;d<=t;d++){const p=d/t;i[d]=this.getTangentAt(p,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Oe(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Oe(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qf extends bi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Iy extends qf{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Yo=new P,vl=new Sh,xl=new Sh,yl=new Sh;class Yf extends bi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Yo.subVectors(i[0],i[1]).add(i[0]),c=Yo);const u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Yo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),vl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,_,m),xl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,_,m),yl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),xl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),yl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(vl.calc(l),xl.calc(l),yl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function dd(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Ly(r,t){const e=1-r;return e*e*t}function Dy(r,t){return 2*(1-r)*r*t}function Ny(r,t){return r*r*t}function Yr(r,t,e,n){return Ly(r,t)+Dy(r,e)+Ny(r,n)}function Uy(r,t){const e=1-r;return e*e*e*t}function Oy(r,t){const e=1-r;return 3*e*e*r*t}function Fy(r,t){return 3*(1-r)*r*r*t}function ky(r,t){return r*r*r*t}function jr(r,t,e,n,i){return Uy(r,t)+Oy(r,e)+Fy(r,n)+ky(r,i)}class By extends bi{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,i.x,s.x,o.x,a.x),jr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zy extends bi{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,i.x,s.x,o.x,a.x),jr(t,i.y,s.y,o.y,a.y),jr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vy extends bi{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hy extends bi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gy extends bi{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Yr(t,i.x,s.x,o.x),Yr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jf extends bi{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Yr(t,i.x,s.x,o.x),Yr(t,i.y,s.y,o.y),Yr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wy extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(dd(a,l.x,c.x,h.x,u.x),dd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ot().fromArray(i))}return this}}var Xy=Object.freeze({__proto__:null,ArcCurve:Iy,CatmullRomCurve3:Yf,CubicBezierCurve:By,CubicBezierCurve3:zy,EllipseCurve:qf,LineCurve:Vy,LineCurve3:Hy,QuadraticBezierCurve:Gy,QuadraticBezierCurve3:jf,SplineCurve:Wy});class _i extends Ae{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new P,h=new ot;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends Ae{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],d=[];let p=0;const _=[],m=n/2;let g=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(d,2));function x(){const v=new P,A=new P;let T=0;const E=(e-t)/n;for(let R=0;R<=s;R++){const M=[],S=R/s,I=S*(e-t)+t;for(let O=0;O<=i;O++){const F=O/i,H=F*l+a,q=Math.sin(H),z=Math.cos(H);A.x=I*q,A.y=-S*n+m,A.z=I*z,u.push(A.x,A.y,A.z),v.set(q,E,z).normalize(),f.push(v.x,v.y,v.z),d.push(F,1-S),M.push(p++)}_.push(M)}for(let R=0;R<i;R++)for(let M=0;M<s;M++){const S=_[M][R],I=_[M+1][R],O=_[M+1][R+1],F=_[M][R+1];(t>0||M!==0)&&(h.push(S,I,F),T+=3),(e>0||M!==s-1)&&(h.push(I,O,F),T+=3)}c.addGroup(g,T,0),g+=T}function y(v){const A=p,T=new ot,E=new P;let R=0;const M=v===!0?t:e,S=v===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),p++;const I=p;for(let O=0;O<=i;O++){const H=O/i*l+a,q=Math.cos(H),z=Math.sin(H);E.x=M*z,E.y=m*S,E.z=M*q,u.push(E.x,E.y,E.z),f.push(0,S,0),T.x=q*.5+.5,T.y=z*.5*S+.5,d.push(T.x,T.y),p++}for(let O=0;O<i;O++){const F=A+O,H=I+O;v===!0?h.push(H,H+1,F):h.push(H+1,H,F),R+=3}c.addGroup(g,R,v===!0?1:2),g+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hs extends oe{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new hs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ca extends Ae{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new P,v=new P,A=new P;for(let T=0;T<e.length;T+=3)d(e[T+0],y),d(e[T+1],v),d(e[T+2],A),l(y,v,A,x)}function l(x,y,v,A){const T=A+1,E=[];for(let R=0;R<=T;R++){E[R]=[];const M=x.clone().lerp(v,R/T),S=y.clone().lerp(v,R/T),I=T-R;for(let O=0;O<=I;O++)O===0&&R===T?E[R][O]=M:E[R][O]=M.clone().lerp(S,O/I)}for(let R=0;R<T;R++)for(let M=0;M<2*(T-R)-1;M++){const S=Math.floor(M/2);M%2===0?(f(E[R][S+1]),f(E[R+1][S]),f(E[R][S])):(f(E[R][S+1]),f(E[R+1][S+1]),f(E[R+1][S]))}}function c(x){const y=new P;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const x=new P;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const v=m(x)/2/Math.PI+.5,A=g(x)/Math.PI+.5;o.push(v,1-A)}p(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],A=o[x+4],T=Math.max(y,v,A),E=Math.min(y,v,A);T>.9&&E<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function p(){const x=new P,y=new P,v=new P,A=new P,T=new ot,E=new ot,R=new ot;for(let M=0,S=0;M<s.length;M+=9,S+=6){x.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),T.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),R.set(o[S+4],o[S+5]),A.copy(x).add(y).add(v).divideScalar(3);const I=m(A);_(T,S+0,x,I),_(E,S+2,y,I),_(R,S+4,v,I)}}function _(x,y,v,A){A<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.vertices,t.indices,t.radius,t.details)}}class ro extends Ca{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ro(t.radius,t.detail)}}class Pa extends Ae{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/i,d=new P,p=new ot;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=s+m/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const x=g+m,y=x,v=x+n+1,A=x+n+2,T=x+1;a.push(y,v,T),a.push(v,A,T)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ys extends Ae{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,f=new P,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const x=[],y=g/n;let v=0;g===0&&o===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const T=A/e;u.x=-t*Math.cos(i+T*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+T*s)*Math.sin(o+y*a),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-y),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){const y=h[g][x+1],v=h[g][x],A=h[g+1][x],T=h[g+1][x+1];(g!==0||o>0)&&d.push(y,v,T),(g!==n-1||l<Math.PI)&&d.push(v,A,T)}this.setIndex(d),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bh extends Ca{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bh(t.radius,t.detail)}}class fs extends Ae{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const _=p/i*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const _=(i+1)*d+p-1,m=(i+1)*(d-1)+p-1,g=(i+1)*(d-1)+p,x=(i+1)*d+p;o.push(_,m,x),o.push(m,g,x)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Th extends Ae{constructor(t=new jf(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new ot;let h=new P;const u=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(d,2));function _(){for(let y=0;y<e;y++)m(y);m(s===!1?e:0),x(),g()}function m(y){h=t.getPointAt(y/e,h);const v=o.normals[y],A=o.binormals[y];for(let T=0;T<=i;T++){const E=T/i*Math.PI*2,R=Math.sin(E),M=-Math.cos(E);l.x=M*v.x+R*A.x,l.y=M*v.y+R*A.y,l.z=M*v.z+R*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){const A=(i+1)*(y-1)+(v-1),T=(i+1)*y+(v-1),E=(i+1)*y+v,R=(i+1)*(y-1)+v;p.push(A,T,R),p.push(T,E,R)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)c.x=y/e,c.y=v/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Th(new Xy[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class qy extends Be{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class _t extends Yn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wf,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zn extends _t{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function jo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Yy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function jy(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function fd(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function Kf(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class mo{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ky extends mo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xs,endingEnd:Xs}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qs:s=t,a=2*e-n;break;case fa:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qs:o=t,l=2*n-e;break;case fa:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,x=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,y=(-1-d)*m+(1.5+d)*_+.5*p,v=d*m-d*_;for(let A=0;A!==a;++A)s[A]=g*o[h+A]+x*o[c+A]+y*o[l+A]+v*o[u+A];return s}}class $f extends mo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}}class $y extends mo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Qn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jo(e,this.TimeBufferType),this.values=jo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jo(t.times,Array),values:jo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $y(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $f(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ky(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case eo:e=this.InterpolantFactoryMethodDiscrete;break;case no:e=this.InterpolantFactoryMethodLinear;break;case Va:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return eo;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Yy(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Va,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const _=e[u+p];if(_!==e[f+p]||_!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=no;class Mr extends Qn{constructor(t,e,n){super(t,e,n)}}Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=eo;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Jf extends Qn{}Jf.prototype.ValueTypeName="color";class ur extends Qn{}ur.prototype.ValueTypeName="number";class Jy extends mo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)An.slerpFlat(s,0,o,c-a,o,c,l);return s}}class dr extends Qn{InterpolantFactoryMethodLinear(t){return new Jy(this.times,this.values,this.getValueSize(),t)}}dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Sr extends Qn{constructor(t,e,n){super(t,e,n)}}Sr.prototype.ValueTypeName="string";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=eo;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends Qn{}fr.prototype.ValueTypeName="vector";class Nc{constructor(t="",e=-1,n=[],i=uh){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Qy(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(Qn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=jy(l);l=fd(l,1,h),c=fd(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ur(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,p,_){if(d.length!==0){const m=[],g=[];Kf(d,m,g,p),m.length!==0&&_.push(new u(f,m,g))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const m=[],g=[];for(let x=0;x!==f[p].morphTargets.length;++x){const y=f[p];m.push(y.time),g.push(y.morphTarget===_?1:0)}i.push(new ur(".morphTargetInfluence["+_+"]",m,g))}l=d.length*o}else{const d=".bones["+e[u].name+"]";n(fr,d+".position",f,"pos",i),n(dr,d+".quaternion",f,"rot",i),n(fr,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Zy(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ur;case"vector":case"vector2":case"vector3":case"vector4":return fr;case"color":return Jf;case"quaternion":return dr;case"bool":case"boolean":return Mr;case"string":return Sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Qy(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Zy(r.type);if(r.times===void 0){const e=[],n=[];Kf(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Oi={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class tM{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}}const eM=new tM;class br{constructor(t){this.manager=t!==void 0?t:eM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}br.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class nM extends Error{constructor(t,e){super(t),this.response=e}}class Zf extends br{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Oi.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(ai[t]!==void 0){ai[t].push({onLoad:e,onProgress:n,onError:i});return}ai[t]=[],ai[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ai[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let _=0;const m=new ReadableStream({start(g){x();function x(){u.read().then(({done:y,value:v})=>{if(y)g.close();else{_+=v.byteLength;const A=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let T=0,E=h.length;T<E;T++){const R=h[T];R.onProgress&&R.onProgress(A)}g.enqueue(v),x()}},y=>{g.error(y)})}}});return new Response(m)}else throw new nM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Oi.add(t,c);const h=ai[t];delete ai[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=ai[t];if(h===void 0)throw this.manager.itemError(t),c;delete ai[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class iM extends br{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Oi.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=io("img");function l(){h(),Oi.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Qf extends br{constructor(t){super(t)}load(t,e,n,i){const s=new Se,o=new iM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Ia extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new at(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class go extends Ia{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ml=new Lt,pd=new P,md=new P;class wh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fh,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;pd.setFromMatrixPosition(t.matrixWorld),e.position.copy(pd),md.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(md),e.updateMatrixWorld(),Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sM extends wh{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=cr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Zs extends Ia{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new sM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const gd=new Lt,Nr=new P,Sl=new P;class rM extends wh{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Nr),Sl.copy(n.position),Sl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Sl),n.updateMatrixWorld(),i.makeTranslation(-Nr.x,-Nr.y,-Nr.z),gd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd)}}class Ms extends Ia{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class oM extends wh{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eh extends Ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new oM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Kr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class aM extends br{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Oi.get(t);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Oi.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Oi.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});Oi.add(t,l),s.manager.itemStart(t)}}class tp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_d(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=_d();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function _d(){return performance.now()}class lM{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){An.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;An.multiplyQuaternionsFlat(t,o,t,e,t,n),An.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Ah="\\[\\]\\.:\\/",cM=new RegExp("["+Ah+"]","g"),Rh="[^"+Ah+"]",hM="[^"+Ah.replace("\\.","")+"]",uM=/((?:WC+[\/:])*)/.source.replace("WC",Rh),dM=/(WCOD+)?/.source.replace("WCOD",hM),fM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rh),pM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rh),mM=new RegExp("^"+uM+dM+fM+pM+"$"),gM=["material","materials","bones","map"];class _M{constructor(t,e,n){const i=n||ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ee{constructor(t,e,n){this.path=e,this.parsedPath=n||ee.parseTrackName(e),this.node=ee.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ee.Composite(t,e,n):new ee(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cM,"")}static parseTrackName(t){const e=mM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);gM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=ee.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ee.Composite=_M;ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ee.prototype.GetterByBindingType=[ee.prototype._getValue_direct,ee.prototype._getValue_array,ee.prototype._getValue_arrayElement,ee.prototype._getValue_toArray];ee.prototype.SetterByBindingTypeAndVersioning=[[ee.prototype._setValue_direct,ee.prototype._setValue_direct_setNeedsUpdate,ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_array,ee.prototype._setValue_array_setNeedsUpdate,ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_arrayElement,ee.prototype._setValue_arrayElement_setNeedsUpdate,ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_fromArray,ee.prototype._setValue_fromArray_setNeedsUpdate,ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vM{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),l={endingStart:Xs,endingEnd:Xs};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=hh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Fm:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case uh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===Om;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===ch){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=qs,i.endingEnd=qs):(t?i.endingStart=this.zeroSlopeAtStart?qs:Xs:i.endingStart=fa,e?i.endingEnd=this.zeroSlopeAtEnd?qs:Xs:i.endingEnd=fa)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}}const xM=new Float32Array(1);class ep extends Ts{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const f=i[u],d=f.name;let p=h[d];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;p=new lM(ee.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new $f(new Float32Array(2),new Float32Array(2),1,xM),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?Nc.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=uh),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new vM(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?Nc.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);const np={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Tr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yM=new Aa(-1,1,1,-1,0,1);class MM extends Ae{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}}const SM=new MM;class Ch{constructor(t){this._mesh=new Q(SM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,yM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ip extends Tr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=so.clone(t.uniforms),this.material=new Be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ch(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vd extends Tr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class bM extends Tr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class TM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ot);this._width=n.width,this._height=n.height,e=new En(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ip(np),this.copyPass.material.blending=mi,this.clock=new tp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vd!==void 0&&(o instanceof vd?n=!0:o instanceof bM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wM extends Tr{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const EM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class pr extends Tr{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ot(t.x,t.y):new ot(256,256),this.clearColor=new at(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new En(s,o,{type:qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new En(s,o,{type:qn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new En(s,o,{type:qn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const a=EM;this.highPassUniforms=so.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Be({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ot(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=np;this.copyUniforms=so.clone(h.uniforms),this.blendMaterial=new Be({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ir,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new at,this.oldClearAlpha=1,this.basic=new ke,this.fsQuad=new Ch(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ot(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=pr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=pr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}pr.BlurDirectionX=new ot(1,0);pr.BlurDirectionY=new ot(0,1);const AM={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class RM extends Tr{constructor(){super();const t=AM;this.uniforms=so.clone(t.uniforms),this.material=new qy({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ch(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Vt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===lf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===cf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===df&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class CM extends qi{constructor(){super();const t=new Kt;t.deleteAttribute("uv");const e=new _t({side:Ve}),n=new _t,i=new Ms(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Q(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Q(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Q(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Q(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Q(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Q(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Q(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new Q(t,Hs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new Q(t,Hs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const p=new Q(t,Hs(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const _=new Q(t,Hs(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Q(t,Hs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const g=new Q(t,Hs(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Hs(r){const t=new ke;return t.color.setScalar(r),t}const Gs={tint:"#ffffff",lift:"#000000",saturation:1,contrast:1,vignette:.35,grain:.035},PM={uniforms:{tDiffuse:{value:null},tint:{value:new at("#ffffff")},lift:{value:new at("#000000")},saturation:{value:1},contrast:{value:1},vignette:{value:.35},grain:{value:.035},aberration:{value:0},time:{value:0}},vertexShader:`
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
    }`};class IM extends ip{constructor(){super(PM),this.grade={tint:new at,lift:new at,saturation:1,contrast:1,vignette:.35,grain:.035},this.aberration=0,this.reset()}reset(){this.grade.tint.set(Gs.tint),this.grade.lift.set(Gs.lift),this.grade.saturation=Gs.saturation,this.grade.contrast=Gs.contrast,this.grade.vignette=Gs.vignette,this.grade.grain=Gs.grain,this.aberration=0}set(t){const{tint:e,lift:n,...i}=t;e&&this.grade.tint.set(e),n&&this.grade.lift.set(n),Object.assign(this.grade,i)}tick(t,e){this.aberration=Math.max(0,this.aberration-t*2.5);const n=this.uniforms;n.tint.value.copy(this.grade.tint),n.lift.value.copy(this.grade.lift),n.saturation.value=this.grade.saturation,n.contrast.value=this.grade.contrast,n.vignette.value=this.grade.vignette,n.grain.value=this.grade.grain,n.aberration.value=Math.min(1,this.aberration+e*.8),n.time.value=(n.time.value+t)%100}}const bl="https://start.ng",LM=4e3,xd={id:"guest",username:"guest",displayName:"Guest",isGuest:!0};function Uc(r){return r.trim().replace(/^@/,"").replace(/[^\w.-]/g,"").slice(0,24)}function DM(){return/\.start\.(ng|localhost)$/.test(window.location.hostname)}async function NM(){if(!DM())return null;const r=document.createElement("iframe");r.src=`${bl}/connect`,r.title="start.ng connection",r.style.display="none";const t=`whoami-${Date.now()}`;try{const n=(await new Promise(s=>{const o=window.setTimeout(()=>a(null),LM);function a(c){window.clearTimeout(o),window.removeEventListener("message",l),s(c)}function l(c){c.origin!==bl||c.data?.requestId!==t||c.data?.type!=="startng:user"||a(c.data)}window.addEventListener("message",l),r.addEventListener("load",()=>r.contentWindow?.postMessage({type:"startng:whoami",requestId:t},bl)),r.addEventListener("error",()=>a(null)),document.body.appendChild(r)}))?.user;if(!n||typeof n.name!="string"||!n.name.trim())return null;const i=n.name.trim().slice(0,24);return{id:String(n.id??i),username:Uc(i)||i,displayName:i,platformStyle:n.style&&typeof n.style=="object"?n.style:void 0}}finally{r.remove()}}function UM(){const r=new URLSearchParams(window.location.search),t=Uc(r.get("user")??"");if(!t)return null;const e=Uc(r.get("track")??"")||void 0;return{id:`test-${t}`,username:t,displayName:t,track:e}}async function OM(){try{const r=UM()??await NM()??null;return r?.username?r:xd}catch(r){return console.warn("[getUser] falling back to guest",r),xd}}const FM=["#26406b","#3b5537","#6a2c3b","#454c58","#7a5729","#245f63","#4f3570","#1d1f26"],kM=["#ff6b35","#00e5ff","#ffd23f","#7cff6b","#ff3f8e","#b388ff","#ff9f1c","#4de8c8"],BM=["#00e5ff","#ff3d71","#ffd600","#69f0ae","#e040fb","#ff9100"],zM=["Kestrel","Mamba","Baobab","Gazelle","Duiker","Hornbill","Jackal","Kob","Pangolin","Marula","Sahel","Oryx","Civet","Serval","Waterbuck","Roan"];function VM(r,t=0){let e=3735928559^t,n=1103547991^t;for(let i=0;i<r.length;i++){const s=r.charCodeAt(i);e=Math.imul(e^s,2654435761),n=Math.imul(n^s,1597334677)}return e=Math.imul(e^e>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(e^e>>>13,3266489909),4294967296*(2097151&n)+(e>>>0)}const HM=["light","heavy","utility"],GM={frontend:"light",backend:"heavy",devops:"utility"};function Ur(r,t){return r[t%r.length]}const yd=/^#[0-9a-f]{6}$/i;function WM(r){const t=r.username.toLowerCase(),e=o=>VM(t,o),n=r.platformStyle,i=n?.secondaryColor&&yd.test(n.secondaryColor)?n.secondaryColor:null,s=n?.primaryColor&&yd.test(n.primaryColor)?n.primaryColor:null;return{codename:`Agent ${Ur(zM,e(5))}-${e(6)%9+1}`,suitColor:i??Ur(FM,e(1)),accentColor:s??Ur(kM,e(2)),visorTint:Ur(BM,e(3)),maskPattern:e(4)%8,suitVariant:GM[r.track?.toLowerCase()??""]??Ur(HM,e(7))}}const La=[{codename:"Agent Harmattan-2",suitColor:"#454c58",accentColor:"#ff9f1c",maskPattern:3,visorTint:"#ff9100",suitVariant:"heavy"},{codename:"Agent Ibis-5",suitColor:"#3b5537",accentColor:"#4de8c8",maskPattern:6,visorTint:"#69f0ae",suitVariant:"utility"}],XM={codename:"Vault Guard",suitColor:"#2a2d33",accentColor:"#ff3b30",maskPattern:5,visorTint:"#ff3b30",suitVariant:"heavy"},Md={Space:"action",KeyC:"camera",Escape:"skip",Enter:"skip",NumpadEnter:"skip",KeyM:"mute",KeyF:"torch",ShiftLeft:"drift",ShiftRight:"drift"},qM=260,YM={KeyA:"jinkLeft",ArrowLeft:"jinkLeft",KeyD:"jinkRight",ArrowRight:"jinkRight"},jM=new Set(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);class KM{constructor(){this.held=new Set,this.fired=new Set,this.lastTap=new Map,this.onKeyDown=t=>{jM.has(t.code)&&t.preventDefault(),this.held.add(t.code);const e=Md[t.code];e&&!t.repeat&&this.fired.add(e);const n=YM[t.code];if(n&&!t.repeat){const i=performance.now();i-(this.lastTap.get(n)??-1e9)<qM?(this.fired.add(n),this.lastTap.delete(n)):this.lastTap.set(n,i)}},this.onKeyUp=t=>this.held.delete(t.code),this.onBlur=()=>this.held.clear(),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur)}axis(){const t=this.held;let e=0,n=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(e-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(e+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(n+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(n-=1);const i=Math.hypot(e,n);return i>1?{x:e/i,y:n/i}:{x:e,y:n}}isDown(t){for(const e of this.held)if(Md[e]===t)return!0;return!1}pressed(t){return this.fired.has(t)}trigger(t){this.fired.add(t)}endFrame(){this.fired.clear()}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur)}}const Sd=.8;class $M{constructor(){this.muted=!1,this.ctx=null,this.master=null,this.noiseBuffer=null,this.loops=new Map,this.engine=null}unlock(){if(!this.ctx){const t=new AudioContext,e=t.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4;const n=t.createGain();n.gain.value=this.muted?0:Sd,n.connect(e).connect(t.destination);const i=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=i.getChannelData(0);for(let o=0;o<s.length;o++)s[o]=Math.random()*2-1;this.ctx=t,this.master=n,this.noiseBuffer=i}this.ctx.state==="suspended"&&this.ctx.resume()}setSuspended(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}shutdown(){this.stopAll(),this.ctx?.close(),this.ctx=null,this.master=null}toggleMute(){return this.muted=!this.muted,this.ctx&&this.master&&this.master.gain.setTargetAtTime(this.muted?0:Sd,this.ctx.currentTime,.05),this.muted}play(t,e=1){const n=this.ctx;if(!n)return;const i=n.currentTime;switch(t){case"click":this.tone(1600,.05,{type:"triangle",vol:.08*e}),this.tone(120,.12,{vol:.25*e,to:70});break;case"lock":this.tone(90,.25,{vol:.6*e,to:50}),this.tone(660,.12,{vol:.2*e}),this.tone(990,.2,{vol:.2*e,at:i+.09});break;case"miss":this.tone(220,.25,{type:"triangle",vol:.15*e,to:150});break;case"spotted":this.tone(220,.8,{vol:.1*e,attack:.02}),this.tone(233,.8,{vol:.1*e,attack:.02}),this.tone(65,.5,{vol:.45*e,to:38});break;case"beep":this.tone(990,.14,{vol:.04*e,attack:.01});break;case"impact":this.noise(.4,{vol:.8*e,type:"lowpass",freq:700,to:120}),this.tone(70,.45,{vol:.9*e,to:30});break;case"glass":this.noise(.7,{vol:.5*e,type:"highpass",freq:2500});for(let s=0;s<6;s++)this.tone(2400+Math.random()*3200,.25+Math.random()*.3,{vol:.05*e,at:i+Math.random()*.25});break;case"roar":this.tone(95,1.8,{type:"sawtooth",vol:.35*e,to:48,attack:.15,filter:700}),this.tone(142,1.6,{type:"sawtooth",vol:.2*e,to:70,attack:.2,filter:500}),this.noise(1.6,{vol:.35*e,type:"bandpass",freq:420,to:180,q:1.5,attack:.2});break;case"whoosh":this.noise(.8,{vol:.4*e,type:"bandpass",freq:300,to:2400,q:2,attack:.35});break;case"boom":this.tone(55,1.6,{vol:e,to:24}),this.noise(1.3,{vol:.6*e,type:"lowpass",freq:400,to:60});break;case"success":[523.3,659.3,784,1046.5].forEach((s,o)=>this.tone(s,.35,{vol:.12*e,at:i+o*.09}));break;case"splash":this.noise(.9,{vol:.5*e,type:"lowpass",freq:3e3,to:400,attack:.02});break;case"skid":this.noise(.35,{vol:.18*e,type:"bandpass",freq:1400,to:900,q:3});break;case"kick":this.noise(.6,{vol:.6*e,type:"lowpass",freq:2200,to:300});for(let s=0;s<5;s++)this.tone(300+Math.random()*500,.06,{type:"triangle",vol:.06*e,at:i+.05+Math.random()*.3});break;case"boost":this.noise(.9,{vol:.35*e,type:"bandpass",freq:400,to:3e3,q:1.5,attack:.05}),this.tone(80,.6,{type:"sawtooth",vol:.15*e,to:160,filter:700});break;case"trumpet":this.tone(320,.9,{type:"sawtooth",vol:.2*e,to:620,attack:.08,filter:1800}),this.tone(323,.9,{type:"sawtooth",vol:.12*e,to:610,attack:.08,filter:1600});break}}startLoop(t){!this.ctx||!this.master||this.loops.has(t)||this.loops.set(t,this.buildLoop(t,this.ctx,this.master))}stopLoop(t){this.loops.get(t)?.(),this.loops.delete(t)}stopAll(){for(const t of this.loops.values())t();this.loops.clear()}setEngine(t){const e=this.ctx,n=this.engine;if(!e||!n)return;const i=e.currentTime;n.oscs[0].frequency.setTargetAtTime(38+t*46,i,.1),n.oscs[1].frequency.setTargetAtTime(76+t*92,i,.1),n.filter.frequency.setTargetAtTime(260+t*600,i,.1)}tone(t,e,n={}){const i=this.ctx;if(!i||!this.master)return;const s=n.at??i.currentTime,o=i.createOscillator();o.type=n.type??"sine",o.frequency.setValueAtTime(t,s),n.to&&o.frequency.exponentialRampToValueAtTime(n.to,s+e);const a=i.createGain();a.gain.setValueAtTime(1e-4,s),a.gain.exponentialRampToValueAtTime(Math.max(n.vol??.3,2e-4),s+(n.attack??.005)),a.gain.exponentialRampToValueAtTime(1e-4,s+e);let l=o;if(n.filter){const c=i.createBiquadFilter();c.type="lowpass",c.frequency.value=n.filter,o.connect(c),l=c}l.connect(a).connect(n.dest??this.master),o.start(s),o.stop(s+e+.05)}noise(t,e={}){const n=this.ctx;if(!n||!this.master||!this.noiseBuffer)return;const i=e.at??n.currentTime,s=n.createBufferSource();s.buffer=this.noiseBuffer;const o=n.createBiquadFilter();o.type=e.type??"lowpass",o.frequency.setValueAtTime(e.freq??1e3,i),e.to&&o.frequency.exponentialRampToValueAtTime(e.to,i+t),o.Q.value=e.q??.7;const a=n.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(Math.max(e.vol??.3,2e-4),i+(e.attack??.005)),a.gain.exponentialRampToValueAtTime(1e-4,i+t),s.connect(o).connect(a).connect(e.dest??this.master),s.start(i,Math.random()*1.5),s.stop(i+t+.05)}buildLoop(t,e,n){const i=e.createGain();i.gain.setValueAtTime(0,e.currentTime),i.gain.setTargetAtTime(1,e.currentTime,.4),i.connect(n);const s=[],o=[],a=(h,u,f,d)=>{const p=e.createOscillator();p.type=u,p.frequency.value=h;const _=e.createBiquadFilter();_.type="lowpass",_.frequency.value=d;const m=e.createGain();return m.gain.value=f,p.connect(_).connect(m).connect(i),p.start(),s.push(p),{osc:p,filter:_}},l=(h,u,f)=>{const d=e.createBufferSource();d.buffer=this.noiseBuffer,d.loop=!0;const p=e.createBiquadFilter();p.type=u,p.frequency.value=f;const _=e.createGain();_.gain.value=h,d.connect(p).connect(_).connect(i),d.start(),s.push(d)},c=(h,u)=>{u(e.currentTime+.05),o.push(window.setInterval(()=>u(e.currentTime+.05),h))};switch(t){case"ambience":l(.05,"lowpass",380),a(110,"sine",.03,2e3),a(164.8,"sine",.02,2e3),a(220.5,"triangle",.012,1200),c(1300,h=>{if(!(Math.random()>.6))for(let u=0;u<3;u++)this.tone(4300+Math.random()*400,.03,{vol:.025,at:h+u*.07,dest:i})});break;case"tension":{const h=e.createGain();h.gain.value=.7,h.connect(i);const u=e.createOscillator();u.frequency.value=.12;const f=e.createGain();f.gain.value=.3,u.connect(f).connect(h.gain),u.start(),s.push(u);for(const[d,p]of[[55,.06],[82.4,.035],[110.5,.015]]){const _=e.createOscillator();_.frequency.value=d;const m=e.createGain();m.gain.value=p,_.connect(m).connect(h),_.start(),s.push(_)}l(.012,"bandpass",500),c(1300,d=>{this.tone(52,.22,{vol:.22,to:38,at:d,dest:i}),this.tone(48,.22,{vol:.13,to:36,at:d+.26,dest:i})}),c(7e3,d=>{Math.random()<.6&&this.tone(620+Math.random()*200,2.5,{type:"triangle",vol:.015,attack:.01,at:d,dest:i})});break}case"action":{a(110,"sawtooth",.025,500);const h=[55,55,82.4,55,65.4,55,73.4,49];let u=0;c(200,f=>{const d=u++%16;d%2===0?this.tone(140,.16,{vol:.55,to:45,at:f,dest:i}):this.noise(.04,{vol:.07,type:"highpass",freq:7e3,at:f,dest:i}),(d===4||d===12)&&this.noise(.14,{vol:.18,type:"bandpass",freq:1800,q:.8,at:f,dest:i}),this.tone(h[d%8],.18,{type:"sawtooth",vol:.14,filter:520,at:f,dest:i})});break}case"alarm":{const h=a(720,"square",.035,1800),u=e.createOscillator();u.frequency.value=1.1;const f=e.createGain();f.gain.value=260,u.connect(f).connect(h.osc.frequency),u.start(),s.push(u);break}case"engine":{const h=a(40,"sawtooth",.09,300),u=a(80,"square",.025,400);this.engine={oscs:[h.osc,u.osc],filter:h.filter};break}case"credits":{const h=[[220,261.6,329.6],[174.6,220,261.6],[261.6,329.6,392],[196,246.9,293.7]];let u=0;c(4e3,f=>{const d=h[u++%h.length];d.forEach(p=>this.tone(p,4.4,{vol:.05,attack:1.2,at:f,dest:i})),this.tone(d[0]/2,4.4,{type:"triangle",vol:.07,attack:.8,at:f,dest:i})});break}}return()=>{const h=e.currentTime;i.gain.cancelScheduledValues(h),i.gain.setTargetAtTime(0,h,.15),o.forEach(u=>window.clearInterval(u)),t==="engine"&&(this.engine=null),window.setTimeout(()=>{s.forEach(u=>{try{u.stop()}catch{}}),i.disconnect()},900)}}}function ci(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function sp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},mr={duration:.5,overwrite:!1,delay:0},Ph,je,ge,Tn=1e8,he=1/Tn,Oc=Math.PI*2,JM=Oc/4,ZM=0,rp=Math.sqrt,QM=Math.cos,tS=Math.sin,ze=function(t){return typeof t=="string"},Me=function(t){return typeof t=="function"},yi=function(t){return typeof t=="number"},Ih=function(t){return typeof t>"u"},Kn=function(t){return typeof t=="object"},sn=function(t){return t!==!1},Lh=function(){return typeof window<"u"},Ko=function(t){return Me(t)||ze(t)},op=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ke=Array.isArray,Fc=/(?:-?\.?\d|\.)+/gi,ap=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,js=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Tl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lp=/[+-]=-?[.\d]+/,cp=/[^,'"\[\]\s]+/gi,eS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ve,Vn,kc,Dh,_n={},_a={},hp,up=function(t){return(_a=Ss(t,_n))&&ln},Nh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},oo=function(t,e){return!e&&console.warn(t)},dp=function(t,e){return t&&(_n[t]=e)&&_a&&(_a[t]=e)||_n},ao=function(){return 0},nS={suppressEvents:!0,isStart:!0,kill:!1},ca={suppressEvents:!0,kill:!1},iS={suppressEvents:!0},Uh={},Hi=[],Bc={},fp,dn={},wl={},bd=30,ha=[],Oh="",Fh=function(t){var e=t[0],n,i;if(Kn(e)||Me(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ha.length;i--&&!ha[i].targetTest(e););n=ha[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Fp(t[i],n)))||t.splice(i,1);return t},ps=function(t){return t._gsap||Fh(wn(t))[0]._gsap},pp=function(t,e,n){return(n=t[e])&&Me(n)?t[e]():Ih(n)&&t.getAttribute&&t.getAttribute(e)||n},rn=function(t,e){return(t=t.split(",")).forEach(e)||t},Te=function(t){return Math.round(t*1e5)/1e5||0},Fe=function(t){return Math.round(t*1e7)/1e7||0},Qs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},sS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},va=function(){var t=Hi.length,e=Hi.slice(0),n,i;for(Bc={},Hi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},mp=function(t,e,n,i){Hi.length&&!je&&va(),t.render(e,n,je&&e<0&&(t._initted||t._startAt)),Hi.length&&!je&&va()},gp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(cp).length<2?e:ze(t)?t.trim():t},_p=function(t){return t},Rn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},rS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ss=function(t,e){for(var n in e)t[n]=e[n];return t},Td=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Kn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},xa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},$r=function(t){var e=t.parent||ve,n=t.keyframes?rS(Ke(t.keyframes)):Rn;if(sn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},oS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},vp=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Da=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Wi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ms=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},aS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},zc=function(t,e,n,i){return t._startAt&&(je?t._startAt.revert(ca):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},lS=function r(t){return!t||t._ts&&r(t.parent)},wd=function(t){return t._repeat?gr(t._tTime,t=t.duration()+t._rDelay)*t:0},gr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ya=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Na=function(t){return t._end=Fe(t._start+(t._tDur/Math.abs(t._ts||t._rts||he)||0))},Ua=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Fe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Na(t),n._dirty||ms(n,t)),t},xp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ya(t.rawTime(),e),(!e._dur||_o(0,e.totalDuration(),n)-e._tTime>he)&&e.render(n,!0)),ms(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-he}},Gn=function(t,e,n,i){return e.parent&&Wi(e),e._start=Fe((yi(n)?n:n||t!==ve?Mn(t,n,e):t._time)+e._delay),e._end=Fe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),vp(t,e,"_first","_last",t._sort?"_start":0),Vc(e)||(t._recent=e),i||xp(t,e),t._ts<0&&Ua(t,t._tTime),t},yp=function(t,e){return(_n.ScrollTrigger||Nh("scrollTrigger",e))&&_n.ScrollTrigger.create(e,t)},Mp=function(t,e,n,i,s){if(Bh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!je&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&fp!==fn.frame)return Hi.push(t),t._lazy=[s,i],1},cS=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Vc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},hS=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&cS(t)&&!(!t._initted&&Vc(t))||(t._ts<0||t._dp._ts<0)&&!Vc(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=_o(0,t._tDur,e),h=gr(l,a),t._yoyo&&h&1&&(o=1-o),h!==gr(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||je||i||t._zTime===he||!e&&t._zTime){if(!t._initted&&Mp(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?he:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&zc(t,e,n,!0),t._onUpdate&&!n&&mn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&mn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Wi(t,1),!n&&!je&&(mn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},uS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},_r=function(t,e,n,i){var s=t._repeat,o=Fe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Fe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Ua(t,t._tTime=t._tDur*a),t.parent&&Na(t),n||ms(t.parent,t),t},Ed=function(t){return t instanceof Ze?ms(t):_r(t,t._dur)},dS={_start:0,endTime:ao,totalDuration:ao},Mn=function r(t,e,n){var i=t.labels,s=t._recent||dS,o=t.duration()>=Tn?s.endTime(!1):t._dur,a,l,c;return ze(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ke(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Jr=function(t,e,n){var i=yi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=sn(l.vars.inherit)&&l.parent;o.immediateRender=sn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ee(e[0],o,e[s+1])},Yi=function(t,e){return t||t===0?e(t):e},_o=function(t,e,n){return n<t?t:n>e?e:n},Ye=function(t,e){return!ze(t)||!(e=eS.exec(t))?"":e[1]},fS=function(t,e,n){return Yi(n,function(i){return _o(t,e,i)})},Hc=[].slice,Sp=function(t,e){return t&&Kn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Kn(t[0]))&&!t.nodeType&&t!==Vn},pS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return ze(i)&&!e||Sp(i,1)?(s=n).push.apply(s,wn(i)):n.push(i)})||n},wn=function(t,e,n){return ge&&!e&&ge.selector?ge.selector(t):ze(t)&&!n&&(kc||!vr())?Hc.call((e||Dh).querySelectorAll(t),0):Ke(t)?pS(t,n):Sp(t)?Hc.call(t,0):t?[t]:[]},Gc=function(t){return t=wn(t)[0]||oo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return wn(e,n.querySelectorAll?n:n===t?oo("Invalid scope")||Dh.createElement("div"):t)}},bp=function(t){return t.sort(function(){return .5-Math.random()})},Tp=function(t){if(Me(t))return t;var e=Kn(t)?t:{each:t},n=gs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return ze(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,p){var _=(p||e).length,m=o[_],g,x,y,v,A,T,E,R,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,Tn])[1],!M){for(E=-Tn;E<(E=p[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],g=l?Math.min(M,_)*h-.5:i%M,x=M===Tn?0:l?_*u/M-.5:i/M|0,E=0,R=Tn,T=0;T<_;T++)y=T%M-g,v=x-(T/M|0),m[T]=A=c?Math.abs(c==="y"?v:y):rp(y*y+v*v),A>E&&(E=A),A<R&&(R=A);i==="random"&&bp(m),m.max=E-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ye(e.amount||e.each)||0,n=n&&_<0?Np(n):n}return _=(m[f]-m.min)/m.max||0,Fe(m.b+(n?n(_):_)*m.v)+m.u}},Wc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Fe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(yi(n)?0:Ye(n))}},wp=function(t,e){var n=Ke(t),i,s;return!n&&Kn(t)&&(i=n=t.radius||Tn,t.values?(t=wn(t.values),(s=!yi(t[0]))&&(i*=i)):t=Wc(t.increment)),Yi(e,n?Me(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Tn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-a,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,s||h===o||yi(o)?h:h+Ye(o)}:Wc(t))},Ep=function(t,e,n,i){return Yi(Ke(t)?!e:n===!0?!!(n=0):!i,function(){return Ke(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},mS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},gS=function(t,e){return function(n){return t(parseFloat(n))+(e||Ye(n))}},_S=function(t,e,n){return Rp(t,e,0,1,n)},Ap=function(t,e,n){return Yi(n,function(i){return t[~~e(i)]})},vS=function r(t,e,n){var i=e-t;return Ke(t)?Ap(t,r(0,t.length),e):Yi(n,function(s){return(i+(s-t)%i)%i+t})},xS=function r(t,e,n){var i=e-t,s=i*2;return Ke(t)?Ap(t,r(0,t.length-1),e):Yi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},lo=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?cp:Fc),n+=t.substr(e,i-e)+Ep(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Rp=function(t,e,n,i,s){var o=e-t,a=i-n;return Yi(s,function(l){return n+((l-t)/o*a||0)})},yS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=ze(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ke(t)&&!Ke(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(p){p*=u;var _=Math.min(f,~~p);return h[_](p-_)},n=e}else i||(t=Ss(Ke(t)?[]:{},t));if(!h){for(l in e)kh.call(a,t,l,"get",e[l]);s=function(p){return Hh(p,a)||(o?t.p:t)}}}return Yi(n,s)},Ad=function(t,e,n){var i=t.labels,s=Tn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},mn=function(t,e,n){var i=t.vars,s=i[e],o=ge,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Hi.length&&va(),a&&(ge=a),h=l?s.apply(c,l):s.call(c),ge=o,h},Gr=function(t){return Wi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!je),t.progress()<1&&mn(t,"onInterrupt"),t},Ks,Cp=[],Pp=function(t){if(t)if(t=!t.name&&t.default||t,Lh()||t.headless){var e=t.name,n=Me(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ao,render:Hh,add:kh,kill:OS,modifier:US,rawVars:0},o={targetTest:0,get:0,getSetter:Vh,aliases:{},register:0};if(vr(),t!==i){if(dn[e])return;Rn(i,Rn(xa(t,s),o)),Ss(i.prototype,Ss(s,xa(t,o))),dn[i.prop=e]=i,t.targetTest&&(ha.push(i),Uh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}dp(e,i),t.register&&t.register(ln,i,on)}else Cp.push(t)},re=255,Wr={aqua:[0,re,re],lime:[0,re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,re],navy:[0,0,128],white:[re,re,re],olive:[128,128,0],yellow:[re,re,0],orange:[re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[re,0,0],pink:[re,192,203],cyan:[0,re,re],transparent:[re,re,re,0]},El=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*re+.5|0},Ip=function(t,e,n){var i=t?yi(t)?[t>>16,t>>8&re,t&re]:0:Wr.black,s,o,a,l,c,h,u,f,d,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Wr[t])i=Wr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&re,i&re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&re,t&re]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Fc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=El(l+1/3,s,o),i[1]=El(l,s,o),i[2]=El(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(ap),n&&i.length<4&&(i[3]=1),i}else i=t.match(Fc)||Wr.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/re,o=i[1]/re,a=i[2]/re,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Lp=function(t){var e=[],n=[],i=-1;return t.split(Gi).forEach(function(s){var o=s.match(js)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Rd=function(t,e,n){var i="",s=(t+i).match(Gi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=Ip(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Lp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Gi,"1").split(js),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Gi),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},Gi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Wr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),MS=/hsl[a]?\(/,Dp=function(t){var e=t.join(" "),n;if(Gi.lastIndex=0,Gi.test(e))return n=MS.test(e),t[1]=Rd(t[1],n),t[0]=Rd(t[0],n,Lp(t[1])),!0},co,fn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,p=function _(m){var g=r()-i,x=m===!0,y,v,A,T;if((g>t||g<0)&&(n+=g-e),i+=g,A=i-n,y=A-o,(y>0||x)&&(T=++u.frame,f=A-u.time*1e3,u.time=A=A/1e3,o+=y+(y>=s?4:s-y),v=1),x||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](A,f,T,m)};return u={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){hp&&(!kc&&Lh()&&(Vn=kc=window,Dh=Vn.document||{},_n.gsap=ln,(Vn.gsapVersions||(Vn.gsapVersions=[])).push(ln.version),up(_a||Vn.GreenSockGlobals||!Vn.gsap&&Vn||{}),Cp.forEach(Pp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},co=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),co=0,c=ao},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,g,x){var y=g?function(v,A,T,E){m(v,A,T,E),u.remove(y)}:m;return u.remove(m),a[x?"unshift":"push"](y),vr(),y},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},u}(),vr=function(){return!co&&fn.wake()},Ht={},SS=/^[\d.\-M][\d.\-,\s]/,bS=/["']/g,TS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(bS,"").trim():+c,i=l.substr(a+1).trim();return e},wS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},ES=function(t){var e=(t+"").split("("),n=Ht[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[TS(e[1])]:wS(t).split(",").map(gp)):Ht._CE&&SS.test(t)?Ht._CE("",t):n},Np=function(t){return function(e){return 1-t(1-e)}},Up=function r(t,e){for(var n=t._first,i;n;)n instanceof Ze?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},gs=function(t,e){return t&&(Me(t)?t:Ht[t]||ES(t))||e},ws=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return rn(t,function(a){Ht[a]=_n[a]=s,Ht[o=a.toLowerCase()]=n;for(var l in s)Ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ht[a+"."+l]=s[l]}),s},Op=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Al=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Oc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*tS((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Op(a);return s=Oc/s,l.config=function(c,h){return r(t,c,h)},l},Rl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Op(n);return i.config=function(s){return r(t,s)},i};rn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ws(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ht.Linear.easeNone=Ht.none=Ht.Linear.easeIn;ws("Elastic",Al("in"),Al("out"),Al());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ws("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ws("Circ",function(r){return-(rp(1-r*r)-1)});ws("Sine",function(r){return r===1?1:-QM(r*JM)+1});ws("Back",Rl("in"),Rl("out"),Rl());Ht.SteppedEase=Ht.steps=_n.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-he;return function(a){return((i*_o(0,o,a)|0)+s)*n}}};mr.ease=Ht["quad.out"];rn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Oh+=r+","+r+"Params,"});var Fp=function(t,e){this.id=ZM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:pp,this.set=e?e.getSetter:Vh},ho=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,_r(this,+e.duration,1,1),this.data=e.data,ge&&(this._ctx=ge,ge.data.push(this)),co||fn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,_r(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(vr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ua(this,n),!s._dp||s.parent||xp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===he||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),mp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?gr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-he?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-he?0:this._rts,this.totalTime(_o(-Math.abs(this._delay),this._tDur,s),i!==!1),Na(this),aS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==he&&(this._tTime-=he)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Gn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=iS);var i=je;return je=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),je=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ed(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ed(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Mn(this,n),sn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,sn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-he:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-he,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-he)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Me(n)?n:_p,a=function(){var c=i.then;i.then=null,Me(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Gr(this)},r}();Rn(ho.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-he,_prom:0,_ps:!1,_rts:1});var Ze=function(r){sp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=sn(n.sortChildren),ve&&Gn(n.parent||ve,ci(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&yp(ci(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Jr(0,arguments,this),this},e.from=function(i,s,o){return Jr(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Jr(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,$r(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ee(i,s,Mn(this,o),1),this},e.call=function(i,s,o){return Gn(this,Ee.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ee(i,o,Mn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,$r(o).immediateRender=sn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,$r(a).immediateRender=sn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Fe(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,p,_,m,g,x,y,v,A,T,E;if(this!==ve&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,v=this._start,y=this._ts,g=!y,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Fe(h%m),h===l?(_=this._repeat,f=c):(_=~~(h/m),_&&_===h/m&&(f=c,_--),f>c&&(f=c)),A=gr(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),T&&_&1&&(f=c-f,E=1),_!==A&&!this._lock){var R=T&&A&1,M=R===(T&&_&1);if(_<A&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Fe(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&mn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;Up(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=uS(this,Fe(a),Fe(f)),x&&(h-=f-(f=x._start))),this._tTime=h,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!_&&(mn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!g){x=0,p&&(h+=this._zTime=-he);break}}d=p}else{d=this._last;for(var S=i<0?i:f;d;){if(p=d._prev,(d._act||S<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||je&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!g){x=0,p&&(h+=this._zTime=S?-he:he);break}}d=p}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-he)._zTime=f>=a?1:-1,this._ts))return this._start=v,Na(this),this.render(i,s,o);this._onUpdate&&!s&&mn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Wi(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(mn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(yi(s)||(s=Mn(this,s,i)),!(i instanceof ho)){if(Ke(i))return i.forEach(function(a){return o.add(a,s)}),this;if(ze(i))return this.addLabel(i,s);if(Me(i))i=Ee.delayedCall(0,i);else return this}return this!==i?Gn(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Tn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ee?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return ze(i)?this.removeLabel(i):Me(i)?this.killTweensOf(i):(Da(this,i),i===this._recent&&(this._recent=this._last),ms(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Fe(fn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Mn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ee.delayedCall(0,s||ao,o);return a.data="isPause",this._hasPause=1,Gn(this,a,Mn(this,i))},e.removePause=function(i){var s=this._first;for(i=Mn(this,i);s;)s._start===i&&s.data==="isPause"&&Wi(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Fi!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=wn(i),l=this._first,c=yi(s),h;l;)l instanceof Ee?sS(l._targets,a)&&(c?(!Fi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Mn(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,p=Ee.to(o,Rn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||he,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&_r(p,m,0,1).render(p._time,!0,!0),d=1}h&&h.apply(p,u||[])}},s));return f?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Rn({startAt:{time:Mn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ad(this,Mn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ad(this,Mn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+he)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ms(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ms(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Tn,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Gn(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;_r(o,o===ve&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ve._ts&&(mp(ve,ya(i,ve)),fp=fn.frame),fn.frame>=bd){bd+=gn.autoSleep||120;var s=ve._first;if((!s||!s._ts)&&gn.autoSleep&&fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||fn.sleep()}}},t}(ho);Rn(Ze.prototype,{_lock:0,_hasPause:0,_forcing:0});var AS=function(t,e,n,i,s,o,a){var l=new on(this._pt,t,e,0,1,Gp,null,s),c=0,h=0,u,f,d,p,_,m,g,x;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=lo(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),f=n.match(Tl)||[];u=Tl.exec(i);)p=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?Qs(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=Tl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(lp.test(i)||g)&&(l.e=0),this._pt=l,l},kh=function(t,e,n,i,s,o,a,l,c,h){Me(i)&&(i=i(s||0,t,o));var u=t[e],f=n!=="get"?n:Me(u)?c?t[e.indexOf("set")||!Me(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Me(u)?c?LS:Vp:zh,p;if(ze(i)&&(~i.indexOf("random(")&&(i=lo(i)),i.charAt(1)==="="&&(p=Qs(f,i)+(Ye(f)||0),(p||p===0)&&(i=p))),!h||f!==i||Xc)return!isNaN(f*i)&&i!==""?(p=new on(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?NS:Hp,0,d),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!u&&!(e in t)&&Nh(e,i),AS.call(this,t,e,f,i,d,l||gn.stringFilter,c))},RS=function(t,e,n,i,s){if(Me(t)&&(t=Zr(t,s,e,n,i)),!Kn(t)||t.style&&t.nodeType||Ke(t)||op(t))return ze(t)?Zr(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Zr(t[a],s,e,n,i);return o},kp=function(t,e,n,i,s,o){var a,l,c,h;if(dn[t]&&(a=new dn[t]).init(s,a.rawVars?e[t]:RS(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new on(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ks))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Fi,Xc,Bh=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,x=g&&g.data==="nested"?g.vars.targets:m,y=t._overwrite==="auto"&&!Ph,v=t.timeline,A,T,E,R,M,S,I,O,F,H,q,z,$;if(v&&(!f||!s)&&(s="none"),t._ease=gs(s,mr.ease),t._yEase=u?Np(gs(u===!0?s:u,mr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(O=m[0]?ps(m[0]).harness:0,z=O&&i[O.prop],A=xa(i,Uh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&p?ca:nS),_._lazy=0),o){if(Wi(t._startAt=Ee.set(m,Rn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&sn(l),startAt:null,delay:0,onUpdate:c&&function(){return mn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(je||!a&&!d)&&t._startAt.revert(ca),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),E=Rn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&sn(l),immediateRender:a,stagger:0,parent:g},A),z&&(E[O.prop]=z),Wi(t._startAt=Ee.set(m,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(je?t._startAt.revert(ca):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,he,he);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&sn(l)||l&&!p,T=0;T<m.length;T++){if(M=m[T],I=M._gsap||Fh(m)[T]._gsap,t._ptLookup[T]=H={},Bc[I.id]&&Hi.length&&va(),q=x===m?T:x.indexOf(M),O&&(F=new O).init(M,z||A,t,q,x)!==!1&&(t._pt=R=new on(t._pt,M,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(G){H[G]=R}),F.priority&&(S=1)),!O||z)for(E in A)dn[E]&&(F=kp(E,A,t,q,M,x))?F.priority&&(S=1):H[E]=R=kh.call(t,M,E,"get",A[E],q,x,0,i.stringFilter);t._op&&t._op[T]&&t.kill(M,t._op[T]),y&&t._pt&&(Fi=t,ve.killTweensOf(M,H,t.globalTime(e)),$=!t.parent,Fi=0),t._pt&&l&&(Bc[I.id]=1)}S&&Wp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,f&&e<=0&&v.render(Tn,!0,!0)},CS=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Xc=1,t.vars[e]="+=0",Bh(t,a),Xc=0,l?oo(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Te(n)+Ye(u.e)),u.b&&(u.b=h.s+Ye(u.b))},PS=function(t,e){var n=t[0]?ps(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Ss({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},IS=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Ke(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Zr=function(t,e,n,i,s){return Me(t)?t.call(e,n,i,s):ze(t)&&~t.indexOf("random(")?lo(t):t},Bp=Oh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",zp={};rn(Bp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return zp[r]=1});var Ee=function(r){sp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:$r(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,x=i.parent||ve,y=(Ke(n)||op(n)?yi(n[0]):"length"in i)?[n]:wn(n),v,A,T,E,R,M,S,I;if(a._targets=y.length?Fh(y):oo("GSAP target "+n+" not found. https://gsap.com",!gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||Ko(c)||Ko(h)){if(i=a.vars,v=a.timeline=new Ze({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=ci(a),v._start=0,f||Ko(c)||Ko(h)){if(E=y.length,S=f&&Tp(f),Kn(f))for(R in f)~Bp.indexOf(R)&&(I||(I={}),I[R]=f[R]);for(A=0;A<E;A++)T=xa(i,zp),T.stagger=0,g&&(T.yoyoEase=g),I&&Ss(T,I),M=y[A],T.duration=+Zr(c,ci(a),A,M,y),T.delay=(+Zr(h,ci(a),A,M,y)||0)-a._delay,!f&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),v.to(M,T,S?S(A,M,y):0),v._ease=Ht.none;v.duration()?c=h=0:a.timeline=0}else if(p){$r(Rn(v.vars.defaults,{ease:"none"})),v._ease=gs(p.ease||i.ease||"none");var O=0,F,H,q;if(Ke(p))p.forEach(function(z){return v.to(y,z,">")}),v.duration();else{T={};for(R in p)R==="ease"||R==="easeEach"||IS(R,p[R],T,p.easeEach);for(R in T)for(F=T[R].sort(function(z,$){return z.t-$.t}),O=0,A=0;A<F.length;A++)H=F[A],q={ease:H.e,duration:(H.t-(A?F[A-1].t:0))/100*c},q[R]=H.v,v.to(y,q,O),O+=q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Ph&&(Fi=ci(a),ve.killTweensOf(y),Fi=0),Gn(x,ci(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!p&&a._start===Fe(x._time)&&sn(u)&&lS(ci(a))&&x.data!=="nested")&&(a._tTime=-he,a.render(Math.max(0,-h)||0)),m&&yp(ci(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-he&&!h?l:i<he?0:i,f,d,p,_,m,g,x,y,v;if(!c)hS(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(f=Fe(u%_),u===l?(p=this._repeat,f=c):(p=~~(u/_),p&&p===Fe(u/_)&&(f=c,p--),f>c&&(f=c)),g=this._yoyo&&p&1,g&&(v=this._yEase,f=c-f),m=gr(this._tTime,_),f===a&&!o&&this._initted&&p===m)return this._tTime=u,this;p!==m&&(y&&this._yEase&&Up(y,g),this.vars.repeatRefresh&&!g&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Fe(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(Mp(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!a&&!s&&!p&&(mn(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&zc(this,i,s,o),mn(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&mn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&zc(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Wi(this,1),!s&&!(h&&!a)&&(u||a||g)&&(mn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){co||fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Bh(this,c),h=this._ease(c/this._dur),CS(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Ua(this,0),this.parent||vp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Gr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Fi&&Fi.vars.overwrite!==!0)._first||Gr(this),this.parent&&o!==this.timeline.totalDuration()&&_r(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?wn(i):a,c=this._ptLookup,h=this._pt,u,f,d,p,_,m,g;if((!s||s==="all")&&oS(a,l))return s==="all"&&(this._pt=0),Gr(this);for(u=this._op=this._op||[],s!=="all"&&(ze(s)&&(_={},rn(s,function(x){return _[x]=1}),s=_),s=PS(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(u[g]=s,p=f,d={}):(d=u[g]=u[g]||{},p=s);for(_ in p)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Da(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Gr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Jr(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Jr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return ve.killTweensOf(i,s,o)},t}(ho);Rn(Ee.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});rn("staggerTo,staggerFrom,staggerFromTo",function(r){Ee[r]=function(){var t=new Ze,e=Hc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var zh=function(t,e,n){return t[e]=n},Vp=function(t,e,n){return t[e](n)},LS=function(t,e,n,i){return t[e](i.fp,n)},DS=function(t,e,n){return t.setAttribute(e,n)},Vh=function(t,e){return Me(t[e])?Vp:Ih(t[e])&&t.setAttribute?DS:zh},Hp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},NS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Gp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Hh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},US=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},OS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Da(this,e,"_pt"):e.dep||(n=1),e=i;return!n},FS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Wp=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},on=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Hp,this.d=l||this,this.set=c||zh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=FS,this.m=n,this.mt=s,this.tween=i},r}();rn(Oh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Uh[r]=1});_n.TweenMax=_n.TweenLite=Ee;_n.TimelineLite=_n.TimelineMax=Ze;ve=new Ze({sortChildren:!1,defaults:mr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gn.stringFilter=Dp;var _s=[],ua={},kS=[],Cd=0,BS=0,Cl=function(t){return(ua[t]||kS).map(function(e){return e()})},qc=function(){var t=Date.now(),e=[];t-Cd>2&&(Cl("matchMediaInit"),_s.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Vn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Cl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Cd=t,Cl("matchMedia"))},Xp=function(){function r(e,n){this.selector=n&&Gc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=BS++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Me(n)&&(s=i,i=n,n=Me);var o=this,a=function(){var c=ge,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Gc(s)),ge=o,u=i.apply(o,arguments),Me(u)&&o._r.push(u),ge=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Me?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=ge;ge=null,n(this),ge=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ee&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ze?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ee)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=_s.length;o--;)_s[o].id===this.id&&_s.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),zS=function(){function r(e){this.contexts=[],this.scope=e,ge&&ge.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Kn(n)||(n={matches:n});var o=new Xp(0,s||this.scope),a=o.conditions={},l,c,h;ge&&!o.selector&&(o.selector=ge.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Vn.matchMedia(n[c]),l&&(_s.indexOf(o)<0&&_s.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(qc):l.addEventListener("change",qc)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ma={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Pp(i)})},timeline:function(t){return new Ze(t)},getTweensOf:function(t,e){return ve.getTweensOf(t,e)},getProperty:function(t,e,n,i){ze(t)&&(t=wn(t)[0]);var s=ps(t||{}).get,o=n?_p:gp;return n==="native"&&(n=""),t&&(e?o((dn[e]&&dn[e].get||s)(t,e,n,i)):function(a,l,c){return o((dn[a]&&dn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=wn(t),t.length>1){var i=t.map(function(h){return ln.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=dn[e],a=ps(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;Ks._pt=0,u.init(t,n?h+n:h,Ks,0,[t]),u.render(1,u),Ks._pt&&Hh(1,Ks)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=ln.to(t,Ss((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return ve.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=gs(t.ease,mr.ease)),Td(mr,t||{})},config:function(t){return Td(gn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!dn[a]&&!_n[a]&&oo(e+" effect requires "+a+" plugin.")}),wl[e]=function(a,l,c){return n(wn(a),Rn(l||{},s),c)},o&&(Ze.prototype[e]=function(a,l,c){return this.add(wl[e](a,Kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ht[t]=gs(e)},parseEase:function(t,e){return arguments.length?gs(t,e):Ht},getById:function(t){return ve.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ze(t),i,s;for(n.smoothChildTiming=sn(t.smoothChildTiming),ve.remove(n),n._dp=0,n._time=n._tTime=ve._time,i=ve._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ee&&i.vars.onComplete===i._targets[0]))&&Gn(n,i,i._start-i._delay),i=s;return Gn(ve,n,0),n},context:function(t,e){return t?new Xp(t,e):ge},matchMedia:function(t){return new zS(t)},matchMediaRefresh:function(){return _s.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||qc()},addEventListener:function(t,e){var n=ua[t]||(ua[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ua[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:vS,wrapYoyo:xS,distribute:Tp,random:Ep,snap:wp,normalize:_S,getUnit:Ye,clamp:fS,splitColor:Ip,toArray:wn,selector:Gc,mapRange:Rp,pipe:mS,unitize:gS,interpolate:yS,shuffle:bp},install:up,effects:wl,ticker:fn,updateRoot:Ze.updateRoot,plugins:dn,globalTimeline:ve,core:{PropTween:on,globals:dp,Tween:Ee,Timeline:Ze,Animation:ho,getCache:ps,_removeLinkedListItem:Da,reverting:function(){return je},context:function(t){return t&&ge&&(ge.data.push(t),t._ctx=ge),ge},suppressOverwrites:function(t){return Ph=t}}};rn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ma[r]=Ee[r]});fn.add(Ze.updateRoot);Ks=Ma.to({},{duration:0});var VS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},HS=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=VS(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Pl=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(ze(s)&&(l={},rn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}HS(a,s)}}}},ln=Ma.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)je?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Pl("roundProps",Wc),Pl("modifiers"),Pl("snap",wp))||Ma;Ee.version=Ze.version=ln.version="3.12.5";hp=1;Lh()&&vr();Ht.Power0;Ht.Power1;Ht.Power2;Ht.Power3;Ht.Power4;Ht.Linear;Ht.Quad;Ht.Cubic;Ht.Quart;Ht.Quint;Ht.Strong;Ht.Elastic;Ht.Back;Ht.SteppedEase;Ht.Bounce;Ht.Sine;Ht.Expo;Ht.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pd,ki,tr,Gh,us,Id,Wh,GS=function(){return typeof window<"u"},Mi={},os=180/Math.PI,er=Math.PI/180,Ws=Math.atan2,Ld=1e8,Xh=/([A-Z])/g,WS=/(left|right|width|margin|padding|x)/i,XS=/[\s,\(]\S/,Wn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},qS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},YS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},jS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},qp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Yp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},KS=function(t,e,n){return t.style[e]=n},$S=function(t,e,n){return t.style.setProperty(e,n)},JS=function(t,e,n){return t._gsap[e]=n},ZS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},QS=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},t1=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},xe="transform",an=xe+"Origin",e1=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Mi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Wn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ui(i,a)}):this.tfm[t]=o.x?o[t]:ui(i,t),t===an&&(this.tfm.zOrigin=o.zOrigin);else return Wn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(xe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(an,e,"")),t=xe}(s||e)&&this.props.push(t,e,s[t])},jp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},n1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Xh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Wh(),(!s||!s.isStart)&&!n[xe]&&(jp(n),i.zOrigin&&n[an]&&(n[an]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Kp=function(t,e){var n={target:t,props:[],revert:n1,save:e1};return t._gsap||ln.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},$p,jc=function(t,e){var n=ki.createElementNS?ki.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ki.createElement(t);return n&&n.style?n:ki.createElement(t)},jn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Xh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,xr(e)||e,1)||""},Dd="O,Moz,ms,Ms,Webkit".split(","),xr=function(t,e,n){var i=e||us,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Dd[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Dd[o]:"")+t},Kc=function(){GS()&&window.document&&(Pd=window,ki=Pd.document,tr=ki.documentElement,us=jc("div")||{style:{}},jc("div"),xe=xr(xe),an=xe+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$p=!!xr("perspective"),Wh=ln.core.reverting,Gh=1)},Il=function r(t){var e=jc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(tr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),tr.removeChild(e),this.style.cssText=s,o},Nd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Jp=function(t){var e;try{e=t.getBBox()}catch{e=Il.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Il||(e=Il.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Nd(t,["x","cx","x1"])||0,y:+Nd(t,["y","cy","y1"])||0,width:0,height:0}:e},Zp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Jp(t))},bs=function(t,e){if(e){var n=t.style,i;e in Mi&&e!==an&&(e=xe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Xh,"-$1").toLowerCase())):n.removeAttribute(e)}},Bi=function(t,e,n,i,s,o){var a=new on(t._pt,e,n,0,1,o?Yp:qp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Ud={deg:1,rad:1,turn:1},i1={grid:1,flex:1},Xi=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=us.style,l=WS.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",p,_,m,g;if(i===o||!s||Ud[i]||Ud[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),g=t.getCTM&&Zp(t),(d||o==="%")&&(Mi[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],Te(d?s/p*u:s/100*p);if(a[l?"width":"height"]=u+(f?o:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ki||!_.appendChild)&&(_=ki.body),m=_._gsap,m&&d&&m.width&&l&&m.time===fn.time&&!m.uncache)return Te(s/m.width*u);if(d&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,p=t[h],x?t.style[e]=x:bs(t,e)}else(d||o==="%")&&!i1[jn(_,"display")]&&(a.position=jn(t,"position")),_===t&&(a.position="static"),_.appendChild(us),p=us[h],_.removeChild(us),a.position="absolute";return l&&d&&(m=ps(_),m.time=fn.time,m.width=_[h]),Te(f?p*s/u:p&&s?u/p*s:0)},ui=function(t,e,n,i){var s;return Gh||Kc(),e in Wn&&e!=="transform"&&(e=Wn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Mi[e]&&e!=="transform"?(s=fo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ba(jn(t,an))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Sa[e]&&Sa[e](t,e,n)||jn(t,e)||pp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Xi(t,e,s,n)+n:s},s1=function(t,e,n,i){if(!n||n==="none"){var s=xr(e,t,1),o=s&&jn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=jn(t,"borderTopColor"))}var a=new on(this._pt,t.style,e,0,1,Gp),l=0,c=0,h,u,f,d,p,_,m,g,x,y,v,A;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=jn(t,e)||i,_?t.style[e]=_:bs(t,e)),h=[n,i],Dp(h),n=h[0],i=h[1],f=n.match(js)||[],A=i.match(js)||[],A.length){for(;u=js.exec(i);)m=u[0],x=i.substring(l,u.index),p?p=(p+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(p=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Qs(d,m)+v),g=parseFloat(m),y=m.substr((g+"").length),l=js.lastIndex-y.length,y||(y=y||gn.units[e]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(d=Xi(t,e,_,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:g-d,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Yp:qp;return lp.test(i)&&(a.e=0),this._pt=a,a},Od={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},r1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Od[n]||n,e[1]=Od[i]||i,e.join(" ")},o1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Mi[a]&&(l=1,a=a==="transformOrigin"?an:xe),bs(n,a);l&&(bs(n,xe),o&&(o.svg&&n.removeAttribute("transform"),fo(n,1),o.uncache=1,jp(i)))}},Sa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new on(t._pt,e,n,0,0,o1);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},uo=[1,0,0,1,0,0],Qp={},tm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Fd=function(t){var e=jn(t,xe);return tm(e)?uo:e.substr(7).match(ap).map(Te)},qh=function(t,e){var n=t._gsap||ps(t),i=t.style,s=Fd(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?uo:s):(s===uo&&!t.offsetParent&&t!==tr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,tr.appendChild(t)),s=Fd(t),l?i.display=l:bs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):tr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$c=function(t,e,n,i,s,o){var a=t._gsap,l=s||qh(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],x=l[5],y=e.split(" "),v=parseFloat(y[0])||0,A=parseFloat(y[1])||0,T,E,R,M;n?l!==uo&&(E=d*m-p*_)&&(R=v*(m/E)+A*(-_/E)+(_*x-m*g)/E,M=v*(-p/E)+A*(d/E)-(d*x-p*g)/E,v=R,A=M):(T=Jp(t),v=T.x+(~y[0].indexOf("%")?v/100*T.width:v),A=T.y+(~(y[1]||y[0]).indexOf("%")?A/100*T.height:A)),i||i!==!1&&a.smooth?(g=v-c,x=A-h,a.xOffset=u+(g*d+x*_)-g,a.yOffset=f+(g*p+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[an]="0px 0px",o&&(Bi(o,a,"xOrigin",c,v),Bi(o,a,"yOrigin",h,A),Bi(o,a,"xOffset",u,a.xOffset),Bi(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},fo=function(t,e){var n=t._gsap||new Fp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=jn(t,an)||"0",h,u,f,d,p,_,m,g,x,y,v,A,T,E,R,M,S,I,O,F,H,q,z,$,G,it,ht,vt,Ct,Zt,X,Z;return h=u=f=_=m=g=x=y=v=0,d=p=1,n.svg=!!(t.getCTM&&Zp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xe]!=="none"?l[xe]:"")),i.scale=i.rotate=i.translate="none"),E=qh(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),$c(t,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,T=n.yOrigin||0,E!==uo&&(I=E[0],O=E[1],F=E[2],H=E[3],h=q=E[4],u=z=E[5],E.length===6?(d=Math.sqrt(I*I+O*O),p=Math.sqrt(H*H+F*F),_=I||O?Ws(O,I)*os:0,x=F||H?Ws(F,H)*os+_:0,x&&(p*=Math.abs(Math.cos(x*er))),n.svg&&(h-=A-(A*I+T*F),u-=T-(A*O+T*H))):(Z=E[6],Zt=E[7],ht=E[8],vt=E[9],Ct=E[10],X=E[11],h=E[12],u=E[13],f=E[14],R=Ws(Z,Ct),m=R*os,R&&(M=Math.cos(-R),S=Math.sin(-R),$=q*M+ht*S,G=z*M+vt*S,it=Z*M+Ct*S,ht=q*-S+ht*M,vt=z*-S+vt*M,Ct=Z*-S+Ct*M,X=Zt*-S+X*M,q=$,z=G,Z=it),R=Ws(-F,Ct),g=R*os,R&&(M=Math.cos(-R),S=Math.sin(-R),$=I*M-ht*S,G=O*M-vt*S,it=F*M-Ct*S,X=H*S+X*M,I=$,O=G,F=it),R=Ws(O,I),_=R*os,R&&(M=Math.cos(R),S=Math.sin(R),$=I*M+O*S,G=q*M+z*S,O=O*M-I*S,z=z*M-q*S,I=$,q=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=Te(Math.sqrt(I*I+O*O+F*F)),p=Te(Math.sqrt(z*z+Z*Z)),R=Ws(q,z),x=Math.abs(R)>2e-4?R*os:0,v=X?1/(X<0?-X:X):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!tm(jn(t,xe)),$&&t.setAttribute("transform",$))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Te(d),n.scaleY=Te(p),n.rotation=Te(_)+a,n.rotationX=Te(m)+a,n.rotationY=Te(g)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[an]=ba(c)),n.xOffset=n.yOffset=0,n.force3D=gn.force3D,n.renderTransform=n.svg?l1:$p?em:a1,n.uncache=0,n},ba=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ll=function(t,e,n){var i=Ye(e);return Te(parseFloat(e)+parseFloat(Xi(t,"x",n+"px",i)))+i},a1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,em(t,e)},es="0deg",Or="0px",ns=") ",em=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,x=n.target,y=n.zOrigin,v="",A=g==="auto"&&t&&t!==1||g===!0;if(y&&(u!==es||h!==es)){var T=parseFloat(h)*er,E=Math.sin(T),R=Math.cos(T),M;T=parseFloat(u)*er,M=Math.cos(T),o=Ll(x,o,E*M*-y),a=Ll(x,a,-Math.sin(T)*-y),l=Ll(x,l,R*M*-y+y)}m!==Or&&(v+="perspective("+m+ns),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||o!==Or||a!==Or||l!==Or)&&(v+=l!==Or||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ns),c!==es&&(v+="rotate("+c+ns),h!==es&&(v+="rotateY("+h+ns),u!==es&&(v+="rotateX("+u+ns),(f!==es||d!==es)&&(v+="skew("+f+", "+d+ns),(p!==1||_!==1)&&(v+="scale("+p+", "+_+ns),x.style[xe]=v||"translate(0, 0)"},l1=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),A,T,E,R,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=er,c*=er,A=Math.cos(l)*u,T=Math.sin(l)*u,E=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=er,M=Math.tan(c-h),M=Math.sqrt(1+M*M),E*=M,R*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),A*=M,T*=M)),A=Te(A),T=Te(T),E=Te(E),R=Te(R)):(A=u,R=f,T=E=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=Xi(d,"x",o,"px"),v=Xi(d,"y",a,"px")),(p||_||m||g)&&(y=Te(y+p-(p*A+_*E)+m),v=Te(v+_-(p*T+_*R)+g)),(i||s)&&(M=d.getBBox(),y=Te(y+i/100*M.width),v=Te(v+s/100*M.height)),M="matrix("+A+","+T+","+E+","+R+","+y+","+v+")",d.setAttribute("transform",M),x&&(d.style[xe]=M)},c1=function(t,e,n,i,s){var o=360,a=ze(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?os:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Ld)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Ld)%o-~~(c/o)*o)),t._pt=f=new on(t._pt,e,n,i,c,qS),f.e=h,f.u="deg",t._props.push(n),f},kd=function(t,e){for(var n in e)t[n]=e[n];return t},h1=function(t,e,n){var i=kd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[xe]=e,a=fo(n,1),bs(n,xe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[xe],o[xe]=e,a=fo(n,1),o[xe]=c);for(l in Mi)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=Ye(c),p=Ye(h),u=d!==p?Xi(n,l,c,p):parseFloat(c),f=parseFloat(h),t._pt=new on(t._pt,a,l,u,f-u,Yc),t._pt.u=p||0,t._props.push(l));kd(a,i)};rn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Sa[t>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(p){return ui(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(p,_){return d[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var nm={name:"css",register:Kc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,d,p,_,m,g,x,y,v,A,T,E,R;Gh||Kc(),this.styles=this.styles||Kp(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(dn[_]&&kp(_,e,n,i,t,s)))){if(d=typeof h,p=Sa[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=lo(h)),p)p(this,t,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Gi.lastIndex=0,Gi.test(c)||(m=Ye(c),g=Ye(h)),g?m!==g&&(c=Xi(t,_,c,g)+g):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],ze(c)&&~c.indexOf("random(")&&(c=lo(c)),Ye(c+"")||c==="auto"||(c+=gn.units[_]||Ye(ui(t,_))||""),(c+"").charAt(1)==="="&&(c=ui(t,_))):c=ui(t,_),f=parseFloat(c),x=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),_ in Wn&&(_==="autoAlpha"&&(f===1&&ui(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,a.visibility),Bi(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Wn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Mi,y){if(this.styles.save(_),v||(A=t._gsap,A.renderTransform&&!e.parseTransform||fo(t,e.parseTransform),T=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new on(this._pt,a,xe,0,1,A.renderTransform,A,0,-1),v.dep=1),_==="scale")this._pt=new on(this._pt,A,"scaleY",A.scaleY,(x?Qs(A.scaleY,x+u):u)-A.scaleY||0,Yc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(an,0,a[an]),h=r1(h),A.svg?$c(t,h,0,T,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==A.zOrigin&&Bi(this,A,"zOrigin",A.zOrigin,g),Bi(this,a,_,ba(c),ba(h)));continue}else if(_==="svgOrigin"){$c(t,h,1,T,0,this);continue}else if(_ in Qp){c1(this,A,_,f,x?Qs(f,x+h):h);continue}else if(_==="smoothOrigin"){Bi(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){h1(this,h,t);continue}}else _ in a||(_=xr(_)||_);if(y||(u||u===0)&&(f||f===0)&&!XS.test(h)&&_ in a)m=(c+"").substr((f+"").length),u||(u=0),g=Ye(h)||(_ in gn.units?gn.units[_]:m),m!==g&&(f=Xi(t,_,c,g)),this._pt=new on(this._pt,y?A:a,_,f,(x?Qs(f,x+u):u)-f,!y&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?jS:Yc),this._pt.u=g||0,m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=YS);else if(_ in a)s1.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,i,s);else if(_!=="parseTransform"){Nh(_,h);continue}y||(_ in a?R.push(_,0,a[_]):R.push(_,1,c||t[_])),o.push(_)}}E&&Wp(this)},render:function(t,e){if(e.tween._time||!Wh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ui,aliases:Wn,getSetter:function(t,e,n){var i=Wn[e];return i&&i.indexOf(",")<0&&(e=i),e in Mi&&e!==an&&(t._gsap.x||ui(t,"x"))?n&&Id===n?e==="scale"?ZS:JS:(Id=n||{})&&(e==="scale"?QS:t1):t.style&&!Ih(t.style[e])?KS:~e.indexOf("-")?$S:Vh(t,e)},core:{_removeProperty:bs,_getMatrix:qh}};ln.utils.checkPrefix=xr;ln.core.getStyleSaver=Kp;(function(r,t,e,n){var i=rn(r+","+t+","+e,function(s){Mi[s]=1});rn(t,function(s){gn.units[s]="deg",Qp[s]=1}),Wn[i[13]]=r+","+t,rn(n,function(s){var o=s.split(":");Wn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");rn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){gn.units[r]="px"});ln.registerPlugin(nm);var ce=ln.registerPlugin(nm)||ln;ce.core.Tween;class u1{constructor(t,e){this.camera=t,this.ui=e,this.timeScale=1,this.shakeAmp=0,this.shakeDecay=0,this.savedPos=new P,this.savedQuat=new An,this.shaking=!1}letterbox(t){this.ui.letterbox(t)}cut(t,e){this.camera.position.copy(t),this.camera.lookAt(e)}get shakeLevel(){return this.shakeAmp}shake(t,e=.5){this.shakeAmp=Math.max(this.shakeAmp,t),this.shakeDecay=this.shakeAmp/Math.max(e,.01)}slowMo(t,e,n=.25){ce.killTweensOf(this),ce.timeline().to(this,{timeScale:t,duration:n,ease:"power2.out"}).to(this,{timeScale:1,duration:n*2,ease:"power2.in"},`+=${e}`)}beginFrame(t){if(this.shakeAmp<=0)return;this.shaking=!0,this.savedPos.copy(this.camera.position),this.savedQuat.copy(this.camera.quaternion);const e=this.shakeAmp;this.camera.position.x+=(Math.random()-.5)*e,this.camera.position.y+=(Math.random()-.5)*e,this.camera.rotateZ((Math.random()-.5)*e*.08),this.shakeAmp=Math.max(0,e-this.shakeDecay*t)}endFrame(){this.shaking&&(this.shaking=!1,this.camera.position.copy(this.savedPos),this.camera.quaternion.copy(this.savedQuat))}reset(){ce.killTweensOf(this),this.timeScale=1,this.shakeAmp=0,this.ui.letterbox(!1,.01)}}const Dl={strength:.55,radius:.5,threshold:.82};class d1{constructor(t,e,n){this.ctx=t,this.factories=e,this.renderPass=n,this.current=null,this.busy=!1,this.empty=new qi,n.scene=this.empty}get active(){return this.current}async goTo(t){if(this.busy)return;this.busy=!0;const{ctx:e}=this;try{await e.ui.fade(1,.5),this.current&&(this.current.exit(),this.current=null,this.renderPass.scene=this.empty),e.audio.stopAll(),e.ui.clear(),e.cinema.reset(),this.resetView();const n=this.factories[t]();await n.enter(e),this.current=n,this.renderPass.scene=n.scene,await e.ui.fade(0,.7)}catch(n){console.error(`[scene] ${t} failed to load`,n),e.ui.title("Something went wrong","The game files could not load · refresh to try again",1/0,"danger"),e.ui.fade(.6,.4)}finally{this.busy=!1}}update(t){this.current?.update(t)}afterRender(t){this.current?.afterRender?.(t)}resetView(){const{camera:t,bloom:e,renderer:n,grade:i}=this.ctx;i.reset(),t.fov=50,t.near=.1,t.far=500,t.position.set(0,2,8),t.quaternion.identity(),t.updateProjectionMatrix(),e.strength=Dl.strength,e.radius=Dl.radius,e.threshold=Dl.threshold,n.toneMappingExposure=1}}function Bd(r,t){if(t===km)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Rc||t===Tf){let e=r.getIndex();if(e===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,i=[];if(t===Rc)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class f1 extends br{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new v1(e)}),this.register(function(e){return new x1(e)}),this.register(function(e){return new R1(e)}),this.register(function(e){return new C1(e)}),this.register(function(e){return new P1(e)}),this.register(function(e){return new M1(e)}),this.register(function(e){return new S1(e)}),this.register(function(e){return new b1(e)}),this.register(function(e){return new T1(e)}),this.register(function(e){return new _1(e)}),this.register(function(e){return new w1(e)}),this.register(function(e){return new y1(e)}),this.register(function(e){return new A1(e)}),this.register(function(e){return new E1(e)}),this.register(function(e){return new m1(e)}),this.register(function(e){return new I1(e)}),this.register(function(e){return new L1(e)})}load(t,e,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Kr.extractUrlBase(t);o=Kr.resolveURL(c,this.path)}else o=Kr.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),s.manager.itemError(t),s.manager.itemEnd(t)},l=new Zf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{s.parse(c,o,function(h){e(h),s.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof t=="string")s=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===im){try{o[zt.KHR_BINARY_GLTF]=new D1(t)}catch(u){i&&i(u);return}s=JSON.parse(o[zt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(t));else s=t;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new q1(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case zt.KHR_MATERIALS_UNLIT:o[u]=new g1;break;case zt.KHR_DRACO_MESH_COMPRESSION:o[u]=new N1(s,this.dracoLoader);break;case zt.KHR_TEXTURE_TRANSFORM:o[u]=new U1;break;case zt.KHR_MESH_QUANTIZATION:o[u]=new O1;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,s){n.parse(t,e,i,s)})}}function p1(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const zt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class m1{constructor(t){this.parser=t,this.name=zt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const s=e[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const s=e.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[t];let c;const h=new at(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],tn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Eh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ms(h),c.distance=u;break;case"spot":c=new Zs(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,s=n.json.nodes[t],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class g1{constructor(){this.name=zt.KHR_MATERIALS_UNLIT}getMaterialType(){return ke}extendParams(t,e,n){const i=[];t.color=new at(1,1,1),t.opacity=1;const s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],tn),t.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",s.baseColorTexture,Ue))}return Promise.all(i)}}class _1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}}class v1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ot(a,a)}return Promise.all(s)}}class x1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class y1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class M1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];e.sheenColor=new at(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],tn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ue)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class S1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class b1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new at().setRGB(a[0],a[1],a[2],tn),Promise.all(s)}}class T1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class w1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new at().setRGB(a[0],a[1],a[2],tn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ue)),Promise.all(s)}}class E1{constructor(t){this.parser=t,this.name=zt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(s)}}class A1{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class R1{constructor(t){this.parser=t,this.name=zt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,s.source,o)}}class C1{constructor(t){this.parser=t,this.name=zt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class P1{constructor(t){this.parser=t,this.name=zt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[e])return null;const o=s.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class I1{constructor(t){this.name=zt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class L1{constructor(t){this.name=zt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Sn.TRIANGLES&&c.mode!==Sn.TRIANGLE_STRIP&&c.mode!==Sn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(const p of u){const _=new Lt,m=new P,g=new An,x=new P(1,1,1),y=new vh(p.geometry,p.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(m,g,x));for(const v in l)if(v==="_COLOR_0"){const A=l[v];y.instanceColor=new Lc(A.array,A.itemSize,A.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,l[v]);me.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const im="glTF",Fr=12,zd={JSON:1313821514,BIN:5130562};class D1{constructor(t){this.name=zt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Fr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==im)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Fr,s=new DataView(t,Fr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===zd.JSON){const c=new Uint8Array(t,Fr+o,a);this.content=n.decode(c)}else if(l===zd.BIN){const c=Fr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class N1{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=zt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,s=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Jc[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Jc[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],d=nr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return e.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const p in d.attributes){const _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}u(d)},a,c,tn,f)})})}}class U1{constructor(){this.name=zt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class O1{constructor(){this.name=zt.KHR_MESH_QUANTIZATION}}class sm extends mo{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[s+o];return e}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,p=t*c,_=p-c,m=-2*d+3*f,g=d-f,x=1-m,y=g-f+u;for(let v=0;v!==a;v++){const A=o[_+v+a],T=o[_+v+l]*h,E=o[p+v+a],R=o[p+v]*h;s[v]=x*A+y*T+m*E+g*R}return s}}const F1=new An;class k1 extends sm{interpolate_(t,e,n,i){const s=super.interpolate_(t,e,n,i);return F1.fromArray(s).normalize().toArray(s),s}}const Sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},nr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vd={9728:Qe,9729:pn,9984:pf,9985:na,9986:zr,9987:fi},Hd={33071:Ui,33648:da,10497:vs},Nl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},B1={CUBICSPLINE:void 0,LINEAR:no,STEP:eo},Ul={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function z1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new _t({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vi})),r.DefaultMaterial}function is(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function hi(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function V1(r,t,e){let n=!1,i=!1,s=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):r.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],f=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function H1(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function G1(r){let t;const e=r.extensions&&r.extensions[zt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Ol(e.attributes):t=r.indices+":"+Ol(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)t+=":"+Ol(r.targets[n]);return t}function Ol(r){let t="";const e=Object.keys(r).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Zc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function W1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const X1=new Lt;class q1{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new p1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Qf(this.options.manager):this.textureLoader=new aM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return is(s,a,i),hi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,s=t.length;i<s;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const s=t(e[i]);s&&n.push(s)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[zt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Kr.resolveURL(e.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,s=e.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Nl[i.type],a=nr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ce(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Nl[i.type],c=nr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(d&&d!==u){const g=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let y=e.cache.get(x);y||(_=new c(a,g*d,i.count*d/h),y=new by(_,d/h),e.cache.add(x,y)),m=new gh(y,l,f%d/h,p)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new Ce(_,l,p);if(i.sparse!==void 0){const g=Nl.SCALAR,x=nr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,A=new x(o[1],y,i.sparse.count*g),T=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Ce(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,R=A.length;E<R;E++){const M=A[E];if(m.setX(M,T[E*l]),l>=2&&m.setY(M,T[E*l+1]),l>=3&&m.setZ(M,T[E*l+2]),l>=4&&m.setW(M,T[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){const e=this.json,n=this.options,s=e.textures[t].source,o=e.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,s,a)}loadTextureImage(t,e,n){const i=this,s=this.json,o=s.textures[t],a=s.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return h.magFilter=Vd[f.magFilter]||pn,h.minFilter=Vd[f.minFilter]||fi,h.wrapS=Hd[f.wrapS]||vs,h.wrapT=Hd[f.wrapT]||vs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Qe&&h.minFilter!==pn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,s=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let p=f;e.isImageBitmapLoader===!0&&(p=function(_){const m=new Se(_);m.needsUpdate=!0,f(m)}),e.load(Kr.resolveURL(u,s.path),p,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),hi(u,o),u.userData.mimeType=o.mimeType||W1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[zt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[zt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[zt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new yh,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xf,Yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return _t}loadMaterial(t){const e=this,n=this.json,i=this.extensions,s=n.materials[t];let o;const a={},l=s.extensions||{},c=[];if(l[zt.KHR_MATERIALS_UNLIT]){const u=i[zt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,e))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new at(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],tn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Ue)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}s.doubleSided===!0&&(a.side=qe);const h=s.alphaMode||Ul.OPAQUE;if(h===Ul.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ul.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ke&&(c.push(e.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ot(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==ke&&(c.push(e.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ke){const u=s.emissiveFactor;a.emissive=new at().setRGB(u[0],u[1],u[2],tn)}return s.emissiveTexture!==void 0&&o!==ke&&c.push(e.assignTexture(a,"emissiveMap",s.emissiveTexture,Ue)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),hi(u,s),e.associations.set(u,{materials:t}),s.extensions&&is(i,u,s),u})}createUniqueName(t){const e=ee.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[zt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Gd(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=G1(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[zt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Gd(new Ae,c,e),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,s=n.meshes[t],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?z1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){const _=h[d],m=o[d];let g;const x=c[d];if(m.mode===Sn.TRIANGLES||m.mode===Sn.TRIANGLE_STRIP||m.mode===Sn.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new wy(_,x):new Q(_,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Sn.TRIANGLE_STRIP?g.geometry=Bd(g.geometry,Tf):m.mode===Sn.TRIANGLE_FAN&&(g.geometry=Bd(g.geometry,Rc));else if(m.mode===Sn.LINES)g=new Ry(_,x);else if(m.mode===Sn.LINE_STRIP)g=new xh(_,x);else if(m.mode===Sn.LINE_LOOP)g=new Cy(_,x);else if(m.mode===Sn.POINTS)g=new Mh(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&H1(g,s),g.name=e.createUniqueName(s.name||"mesh_"+t),hi(g,s),m.extensions&&is(i,g,m),e.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return s.extensions&&is(i,u[0],s),u[0];const f=new pe;s.extensions&&is(i,f,s),e.associations.set(f,{meshes:t});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Xe(De.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Aa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),hi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,s=e.joints.length;i<s;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const f=new Lt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new _h(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],s=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],p=i.samplers[d.sampler],_=d.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],p=u[2],_=u[3],m=u[4],g=[];for(let x=0,y=f.length;x<y;x++){const v=f[x],A=d[x],T=p[x],E=_[x],R=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,A,T,E,R);if(M)for(let S=0;S<M.length;S++)g.push(M[S])}return new Nc(s,void 0,g)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],s=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,X1)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const s=e.nodes[t],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Gf:c.length>1?h=new pe:c.length===1?h=c[0]:h=new me,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),hi(h,s),s.extensions&&is(n,h,s),s.matrix!==void 0){const u=new Lt;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,s=new pe;n.name&&(s.name=i.createUniqueName(n.name)),hi(s,n),n.extensions&&is(e,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Yn||f instanceof Se)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(s),s})}_createAnimationTracks(t,e,n,i,s){const o=[],a=t.name?t.name:t.uuid,l=[];Li[s.path]===Li.weights?t.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Li[s.path]){case Li.weights:c=ur;break;case Li.rotation:c=dr;break;case Li.position:case Li.scale:c=fr;break;default:switch(n.itemSize){case 1:c=ur;break;case 2:case 3:default:c=fr;break}break}const h=i.interpolation!==void 0?B1[i.interpolation]:no,u=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const p=new c(l[f]+"."+Li[s.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Zc(e.constructor),i=new Float32Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=e[s]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof dr?k1:sm;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Y1(r,t,e){const n=t.attributes,i=new $n;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const h=Zc(nr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=t.targets;if(s!==void 0){const a=new P,l=new P;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){const _=Zc(nr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Jn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Gd(r,t,e){const n=t.attributes,i=[];function s(o,a){return e.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Jc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(a){r.setIndex(a)});i.push(o)}return Vt.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Vt.workingColorSpace}" not supported.`),hi(r,t),Y1(r,t,e),Promise.all(i).then(function(){return t.targets!==void 0?V1(r,t.targets,e):r})}function j1(r){const t=new Map,e=new Map,n=r.clone();return rm(r,n,function(i,s){t.set(s,i),e.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=t.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return e.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function rm(r,t,e){e(r,t);for(let n=0;n<r.children.length;n++)rm(r.children[n],t.children[n],e)}const K1=new f1,Wd=new Map;async function Oa(r){let t=Wd.get(r);t||(t=K1.loadAsync(r),Wd.set(r,t));const e=await t,n=j1(e.scene);return n.traverse(i=>{const s=i;s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0,s.material=Array.isArray(s.material)?s.material.map(o=>o.clone()):s.material.clone())}),{scene:n,animations:e.animations}}function Fa(r,t,e="length"){r.updateMatrixWorld(!0),r.traverse(o=>{const a=o;a.isSkinnedMesh&&(a.skeleton.update(),a.computeBoundingBox())});const n=new $n().setFromObject(r),i=n.getSize(new P),s=e==="height"?t/i.y:t/Math.max(i.x,i.z);r.scale.multiplyScalar(s),n.setFromObject(r),r.position.y-=n.min.y}new Qf;function Re(r,t,e,n={}){const i=document.createElement("canvas");i.width=r,i.height=t;const s=i.getContext("2d");if(!s)throw new Error("2D canvas is unavailable");e(s,r,t);const o=new Py(i);return o.colorSpace=n.srgb===!1?di:Ue,o.anisotropy=4,n.repeat&&(o.wrapS=o.wrapT=vs,o.repeat.set(n.repeat[0],n.repeat[1])),o}async function $1(r,t=1500){document.fonts&&await Promise.race([document.fonts.load(r).catch(()=>{}),new Promise(e=>window.setTimeout(e,t))])}const om={value:400};function ka(r){let t=r>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function J1(){return Re(64,64,(r,t,e)=>{const n=r.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=n,r.fillRect(0,0,t,e)})}const Z1=`
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
}`,Q1=`
uniform vec3 color;
uniform float opacity;
uniform sampler2D map;
varying float vAlpha;
void main() {
  float a = texture2D(map, gl_PointCoord).a * vAlpha * opacity;
  if (a < 0.003) discard;
  gl_FragColor = vec4(color, a);
}`;class Xn{constructor(t){this.o=t,this.geometry=new Ae,this.p=new P,this.v=new P;const e=t.count;this.emitting=t.emitting??!0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.age=new Float32Array(e),this.life=new Float32Array(e),this.alpha=new Float32Array(e),this.psize=new Float32Array(e).fill(1);for(let i=0;i<e;i++)this.emitting?(this.respawn(i),this.age[i]=Math.random()*this.life[i]):(this.age[i]=1,this.life[i]=0);this.geometry.setAttribute("position",new Ce(this.pos,3)),this.geometry.setAttribute("alpha",new Ce(this.alpha,1)),this.geometry.setAttribute("psize",new Ce(this.psize,1));const n=new Be({vertexShader:Z1,fragmentShader:Q1,uniforms:{color:{value:new at(t.color)},opacity:{value:t.opacity??1},size:{value:t.size},scale:om,map:{value:J1()}},transparent:!0,depthWrite:!1,blending:t.additive?ir:ds});this.points=new Mh(this.geometry,n),this.points.frustumCulled=!1}burst(t){let e=0;for(let n=0;n<this.o.count&&e<t;n++)this.age[n]>=this.life[n]&&(this.respawn(n),e++)}update(t){const e=this.o.gravity??0,n=Math.max(0,1-(this.o.drag??0)*t),i=this.o.grow??0;for(let s=0;s<this.o.count;s++){if(this.age[s]>=this.life[s]){if(!this.emitting){this.alpha[s]=0;continue}this.respawn(s)}this.age[s]+=t;const o=Math.min(this.age[s]/this.life[s],1),a=s*3;this.vel[a+1]-=e*t,this.vel[a]*=n,this.vel[a+1]*=n,this.vel[a+2]*=n,this.pos[a]+=this.vel[a]*t,this.pos[a+1]+=this.vel[a+1]*t,this.pos[a+2]+=this.vel[a+2]*t,this.alpha[s]=Math.min(1,o/.12)*(1-o),this.psize[s]=1+i*o}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.alpha.needsUpdate=!0,this.geometry.attributes.psize.needsUpdate=!0}respawn(t){this.p.set(0,0,0),this.v.set(0,0,0),this.o.spawn(this.p,this.v);const e=t*3;this.pos[e]=this.p.x,this.pos[e+1]=this.p.y,this.pos[e+2]=this.p.z,this.vel[e]=this.v.x,this.vel[e+1]=this.v.y,this.vel[e+2]=this.v.z,this.age[t]=0;const[n,i]=this.o.life;this.life[t]=n+Math.random()*(i-n)}}function nt(r,t,e,n){const i=document.createElement(r);return i.className=t,n!==void 0&&(i.textContent=n),e?.appendChild(i),i}function Fl(r,t){t.split(/(\[[^\]]+\])/).forEach(e=>{e&&(e.startsWith("[")&&e.endsWith("]")?nt("kbd","",r,e.slice(1,-1)):r.append(e))})}function Xd(r,t){const e=nt("div","krow",r),n=nt("span","keys",e);return t.keys.forEach((i,s)=>{s>0&&n.append(" "),nt("kbd","",n,i)}),nt("span","what",e,t.label),e}const tb=["Wikki Warm Spring","The Vault","Gaji River","Kalban Hill","Main Gate"];class eb{constructor(t){this.root=nt("div","ui"),document.body.appendChild(this.root),this.hudEl=nt("div","hud",this.root),this.flashEl=nt("div","flash",this.root),this.bars=[nt("div","bar top",this.root),nt("div","bar bottom",this.root)],this.titleEl=nt("div","title",this.root),this.titleMain=nt("div","main",this.titleEl),this.titleSub=nt("div","sub",this.titleEl),this.captionEl=nt("div","caption",this.root),this.hintEl=nt("div","hint",this.root),this.radioEl=nt("div","radio",this.root),this.promptEl=nt("div","prompt",this.root),this.briefEl=nt("div","brief",this.root),this.mapEl=nt("div","route",this.root),this.fadeEl=nt("div","fade",this.root),this.skipBtn=nt("button","btn skip",this.root,"SKIP ▸"),this.skipBtn.addEventListener("click",()=>t.trigger("skip")),this.muteBtn=nt("button","btn mute",this.root,"🔊"),this.muteBtn.title="Mute (M)",this.muteBtn.addEventListener("click",()=>t.trigger("mute")),this.noticeEl=nt("div","notice",this.root)}letterbox(t,e=.9){ce.to(this.bars,{height:t?"11vh":"0vh",duration:e,ease:"power2.inOut",overwrite:!0})}fade(t,e=.6){return new Promise(n=>{ce.to(this.fadeEl,{opacity:t,duration:e,ease:"power1.inOut",overwrite:!0,onComplete:n})})}title(t,e="",n=2.5,i="normal"){this.titleMain.textContent=t,this.titleSub.textContent=e,this.titleEl.className=`title ${i}`,ce.killTweensOf([this.titleEl,this.titleMain]);const s=ce.timeline();s.fromTo(this.titleEl,{opacity:0},{opacity:1,duration:.6,ease:"power2.out"}).fromTo(this.titleMain,{letterSpacing:"0.45em",scale:1.05},{letterSpacing:"0.12em",scale:1,duration:Math.min(n,4)+1.2,ease:"power3.out"},0),Number.isFinite(n)&&s.to(this.titleEl,{opacity:0,duration:.6},.6+n)}clearTitle(){ce.killTweensOf([this.titleEl,this.titleMain]),ce.to(this.titleEl,{opacity:0,duration:.4})}caption(t,e=3.5){this.captionEl.textContent=t,ce.killTweensOf(this.captionEl),ce.timeline().fromTo(this.captionEl,{opacity:0,x:-12},{opacity:1,x:0,duration:.6}).to(this.captionEl,{opacity:0,duration:.6},`+=${e}`)}hint(t){t&&(this.hintEl.replaceChildren(),Fl(this.hintEl,t)),this.hintEl.classList.toggle("on",!!t)}flash(t="#ff2a2a",e=.55,n=.5){this.flashEl.style.background=t,ce.fromTo(this.flashEl,{opacity:e},{opacity:0,duration:n,overwrite:!0})}radio(t,e=3.6){const n=this.radioEl;n.replaceChildren(),nt("div","who",n,`◉ ${t.who}`),nt("div","chip",n,`AUTO-TRANSLATE · ${t.lang.toUpperCase()} → EN`),nt("div","orig",n,t.text),nt("div","en",n,t.en),ce.killTweensOf(n),ce.timeline().fromTo(n,{opacity:0,y:10},{opacity:1,y:0,duration:.35}).to(n,{opacity:0,duration:.5},`+=${e}`)}routeMap(t,e=4.5){const n=this.mapEl;n.replaceChildren(),nt("div","head",n,"YANKARI GAME RESERVE · BAUCHI STATE, NIGERIA");const i=nt("div","stops",n);tb.forEach((s,o)=>{const a=nt("div",`stop${o<t?" done":""}${o===t?" here":""}`,i);nt("i","",a),nt("span","",a,s)}),ce.killTweensOf(n),ce.timeline().fromTo(n,{opacity:0,x:16},{opacity:1,x:0,duration:.5,delay:.4}).to(n,{opacity:0,duration:.6},`+=${e}`)}legend(t,e){const n=nt("div","legend",this.hudEl);nt("div","ltitle",n,t);const i=new Map;for(const s of e){const o=Xd(n,s);s.id&&i.set(s.id,o)}return i}prompt(t,e=2.2){const n=this.promptEl;n.replaceChildren(),Fl(n,t),ce.killTweensOf(n),ce.timeline().fromTo(n,{opacity:0,scale:.92},{opacity:1,scale:1,duration:.25,ease:"back.out(2)"}).to(n,{opacity:0,duration:.4},`+=${e}`)}briefing(t,e,n,i){const s=this.briefEl;s.replaceChildren();const o=nt("div","card",s);nt("div","btitle",o,t),nt("div","goal",o,e);const a=nt("div","rows",o);for(const c of n)Xd(a,c);const l=nt("div","go",o);Fl(l,i),s.classList.add("on")}closeBriefing(){this.briefEl.classList.remove("on")}hud(){return this.hudEl}showSkip(t){this.skipBtn.classList.toggle("on",t)}setMuted(t){this.muteBtn.textContent=t?"🔇":"🔊"}notice(t){this.noticeEl.textContent=t}clear(){ce.killTweensOf([this.titleEl,this.titleMain,this.captionEl,this.flashEl,this.radioEl,this.mapEl,this.promptEl]),this.promptEl.style.opacity="0",this.closeBriefing(),this.radioEl.style.opacity="0",this.mapEl.style.opacity="0",this.titleEl.style.opacity="0",this.captionEl.style.opacity="0",this.flashEl.style.opacity="0",this.hudEl.replaceChildren(),this.hint(null),this.showSkip(!1)}}const nb=""+new URL("agent-T0HfzEYr.glb",import.meta.url).href,ib=""+new URL("antelope-sTDv-Ykb.glb",import.meta.url).href,sb=""+new URL("baboon-DXwbfX2s.glb",import.meta.url).href,rb=""+new URL("elephant-B-3f-37I.glb",import.meta.url).href,ob=""+new URL("guard-dVGPCjfV.glb",import.meta.url).href,ab=""+new URL("hippo-_XAQdHUm.glb",import.meta.url).href,lb=""+new URL("raptor-CjuthZkD.glb",import.meta.url).href,zi={agent:nb,antelope:ib,baboon:sb,elephant:rb,guard:ob,hippo:ab,raptor:lb};function am(r,t,e,n,i){const s=ka(n*97+13);switch(r.save(),r.fillStyle=i,r.strokeStyle=i,r.lineCap="round",n%8){case 0:for(let o=0;o<t;o+=t/8)r.fillRect(o,0,t/24,e);break;case 1:r.lineWidth=e/14;for(let o=-e/4;o<e*1.25;o+=e/4){r.beginPath();for(let a=0;a<=8;a++)r.lineTo(a*t/8,o+(a%2?e/8:0));r.stroke()}break;case 2:for(let o=0;o<6;o++)for(let a=0;a<16;a++)r.beginPath(),r.arc((a+o%2*.5)*t/16,(o+.5)*e/6,e/26,0,Math.PI*2),r.fill();break;case 3:r.lineWidth=t/28;for(let o=-t;o<t*2;o+=t/7)r.beginPath(),r.moveTo(o,0),r.lineTo(o+e,e),r.stroke();break;case 4:for(let o=0;o<12;o++){const a=o*t/12+s()*8;r.lineWidth=4+s()*8,r.beginPath(),r.moveTo(a,0),r.bezierCurveTo(a+18,e*.3,a-18,e*.6,a+s()*18,e*(.55+s()*.45)),r.stroke()}break;case 5:r.lineWidth=3;for(let o=0;o<=t;o+=t/12)r.beginPath(),r.moveTo(o,0),r.lineTo(o,e),r.stroke();for(let o=0;o<=e;o+=e/6)r.beginPath(),r.moveTo(0,o),r.lineTo(t,o),r.stroke();break;case 6:r.fillRect(0,0,t/2,e),r.fillRect(0,e*.18,t,e*.06);break;case 7:r.lineWidth=3;for(let o=0;o<16;o++){const a=s()*t,l=s()*e,c=a+(s()-.5)*t*.3,h=l+(s()-.5)*e*.6;r.beginPath(),r.moveTo(a,l),r.lineTo(c,l),r.lineTo(c,h),r.stroke(),r.beginPath(),r.arc(c,h,5,0,Math.PI*2),r.fill()}break}r.restore()}function Qc(r,t){return`#${new at(r).multiplyScalar(t).getHexString()}`}function cb(r,t=108){const e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d");return n&&(n.fillStyle=Qc(r.suitColor,.6),n.fillRect(0,0,t,t),n.globalAlpha=.6,am(n,t,t,r.maskPattern,r.accentColor),n.globalAlpha=1,n.shadowColor=r.visorTint,n.shadowBlur=14,n.fillStyle=r.visorTint,n.beginPath(),n.roundRect(t*.16,t*.42,t*.68,t*.17,t*.08),n.fill()),e}const hb={agent:zi.agent,guard:zi.guard},ub=1.8;class Si{constructor(t,e){this.style=t,this.kind=e,this.root=new pe,this.actions=new Map,this.current=null,this.seated=!1,this.sitBones=[],this.oneShot=0}static async create(t,e="agent"){const n=new Si(t,e);return await n.load(),n}update(t,e=0){this.oneShot=Math.max(0,this.oneShot-t),!this.seated&&this.oneShot<=0&&(e>.55?this.play("Run",.2,1):e>.05?this.play("Walk",.2,1.2):this.play(this.kind==="guard"?"Idle_Neutral":"Idle",.3)),this.mixer.update(t);for(const{bone:n,x:i}of this.sitBones)n.rotation.x=i}sit(){this.seated=!0,this.play("Idle",0);const t=(e,n)=>{const i=this.root.getObjectByName(e);i&&this.sitBones.push({bone:i,x:n})};for(const e of["L","R"])t(`UpperLeg.${e}`,-1.45+Math.PI),t(`LowerLeg.${e}`,-1.45)}gesture(t,e=.9){this.play(t,.1,1.4,!0),this.oneShot=e}play(t,e=.25,n=1,i=!1){const s=this.actions.get(t);s&&(s.timeScale=n,s!==this.current&&(s.reset(),s.setLoop(i?ch:hh,1/0),s.clampWhenFinished=i,s.play(),this.current&&this.current.crossFadeTo(s,e,!1),this.current=s))}async load(){const{scene:t,animations:e}=await Oa(hb[this.kind]),n=new pe;n.add(t),Fa(n,ub,"height"),this.root.add(n),this.recolour(t),this.addEmblems(t),this.mixer=new ep(t);for(const i of e)this.actions.set(i.name.split("|").pop()??i.name,this.mixer.clipAction(i));this.play(this.kind==="guard"?"Idle_Neutral":"Idle",0),this.mixer.setTime(Math.random()*2)}recolour(t){const e=this.style;t.traverse(n=>{const i=n;if(!i.isMesh)return;const s=Array.isArray(i.material)?i.material:[i.material];for(const o of s){const a=o;if(a.color)switch(a.roughness=.5,a.metalness=.25,a.name){case"SciFi_Light":case"Swat":a.color.set(e.suitColor),a.metalness=.35,a.roughness=.4;break;case"SciFi_MainDark":case"Swat_Black":a.color.set(Qc(e.suitColor,.3)),a.roughness=.75;break;case"SciFi_Main":case"Grey_Dark":a.color.set("#1b1d22"),a.roughness=.7;break;case"SciFi_Light_Accent":a.color.set(e.accentColor),a.emissive=new at(e.accentColor),a.emissiveIntensity=.45;break;case"Grey":case"Visor":a.color.set("#07080b"),a.emissive=new at(e.visorTint),a.emissiveIntensity=1.1,a.roughness=.08,a.metalness=.7;break}}})}addEmblems(t){const e=this.style,n=t.getObjectByName("Chest");if(!n)return;const i=Re(128,128,(c,h,u)=>{c.fillStyle=Qc(e.suitColor,.35),c.beginPath(),c.roundRect(4,4,h-8,u-8,18),c.fill(),c.save(),c.beginPath(),c.roundRect(4,4,h-8,u-8,18),c.clip(),am(c,h,u,e.maskPattern,e.accentColor),c.restore()}),s=new _t({map:i,emissive:"#ffffff",emissiveMap:i,emissiveIntensity:.5,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-4}),o=new P;n.getWorldScale(o);const a=1/o.x,l=new Ne(.15*a,.15*a);for(const[c,h]of[[.16,0],[-.17,Math.PI]]){const u=new Q(l,s);u.position.set(0,-.02*a,c*a),u.rotation.y=h,n.add(u)}}}function db(r){for(const t of Object.values(r))t instanceof Se&&t.dispose();if(r instanceof Be)for(const t of Object.values(r.uniforms))t.value instanceof Se&&t.value.dispose();r.dispose()}function lm(r){r.traverse(t=>{const e=t;e.geometry?.dispose();const n=e.material;if(n)for(const i of Array.isArray(n)?n:[n])db(i);t.isInstancedMesh&&t.dispose(),t.isLight&&t.dispose()})}function vo(r){lm(r),r.background instanceof Se&&r.background.dispose(),r.clear()}const Di=Math.PI*2,kr=3.7;class fb{constructor(){this.scene=new qi,this.tl=null,this.cast=[],this.splashAt=new P,this.shot={angle:.35,radius:22,height:9,lookY:.3,tx:0,tz:4.6},this.look=new P,this.walk=0,this.t=0,this.done=!1}async enter(t){this.ctx=t,this.scene.background=new at("#04070f"),this.scene.fog=new mh("#06101e",.03),t.camera.fov=40,t.camera.updateProjectionMatrix(),t.bloom.strength=.7,t.bloom.threshold=.65,this.scene.environment=t.envMap,this.scene.environmentIntensity=.25,t.grade.set({tint:"#cfe0ff",lift:"#03081a",saturation:.9,contrast:1.08,vignette:.5}),this.buildEnvironment(),await this.buildLandmarks(),await this.buildCast(),this.buildTimeline(),this.applyShot(),t.audio.startLoop("ambience"),t.ui.showSkip(!0)}update(t){this.t+=t,this.ctx.input.pressed("skip")&&this.finish(),this.applyShot(),this.steam.update(t),this.fireflies.update(t),this.splash.update(t),this.caustics.offset.x+=t*.025,this.caustics.offset.y+=t*.012,this.poolMat.emissiveIntensity=.6+Math.sin(this.t*1.3)*.08;for(const e of this.cast)e.update(t,this.walk)}exit(){this.tl?.kill();for(const t of this.cast)ce.killTweensOf(t.root.position);vo(this.scene)}finish(){this.done||(this.done=!0,this.ctx.goTo("vault"))}applyShot(){const t=this.shot,e=this.ctx.camera;e.position.set(t.tx+Math.sin(t.angle)*t.radius,t.height,t.tz+Math.cos(t.angle)*t.radius),this.look.set(t.tx,t.lookY,t.tz),e.lookAt(this.look)}buildEnvironment(){const t=this.scene,e=ka(2049);t.add(new go("#2c4170","#0b0a08",.9));const n=new Eh("#9db8ff",1.4);n.position.set(-12,18,-10),n.castShadow=!0,n.shadow.mapSize.set(1024,1024);const i=n.shadow.camera;i.left=i.bottom=-12,i.right=i.top=12,i.far=60,t.add(n);const s=new Ms("#3fe0ee",30,14,2);s.position.set(0,.8,0),t.add(s);const o=Re(256,256,(x,y,v)=>{x.fillStyle="#121710",x.fillRect(0,0,y,v);for(let A=0;A<1400;A++)x.fillStyle=e()>.5?"rgba(40,52,30,0.5)":"rgba(6,8,5,0.6)",x.fillRect(e()*y,e()*v,2+e()*3,2+e()*3)},{repeat:[14,14]}),a=new Q(new _i(70,48),new _t({map:o,roughness:1}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,t.add(a),this.poolMat=new _t({color:"#0b5c66",emissive:"#14a9b8",emissiveIntensity:.6,roughness:.08,metalness:.5});const l=new Q(new _i(kr,64),this.poolMat);l.rotation.x=-Math.PI/2,l.position.y=.05,t.add(l),this.caustics=Re(256,256,(x,y,v)=>{x.fillStyle="#000",x.fillRect(0,0,y,v),x.strokeStyle="#fff";for(let A=0;A<40;A++){x.globalAlpha=.25+e()*.5,x.lineWidth=1+e()*3,x.beginPath();const T=e()*y,E=e()*v;x.moveTo(T,E),x.bezierCurveTo(T+e()*80-40,E+e()*80-40,T+e()*80-40,E+e()*80-40,T+e()*60-30,E+e()*60-30),x.stroke()}},{repeat:[2,2]});const c=new Q(new _i(kr-.1,64),new ke({map:this.caustics,color:"#7ff6ff",transparent:!0,opacity:.35,blending:ir,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.07,t.add(c);const h=new ro(1,0),u=new _t({color:"#2b2d2c",roughness:.9,flatShading:!0});for(let x=0;x<30;x++){const y=x/30*Di+e()*.1;if(Math.abs(y-Math.PI/2)<.55)continue;const v=kr+.25+e()*.5,A=new Q(h,u),T=.3+e()*.35;A.scale.set(T,T*.6,T),A.position.set(Math.cos(y)*v,T*.2,Math.sin(y)*v),A.rotation.set(e()*Di,e()*Di,0),A.castShadow=A.receiveShadow=!0,t.add(A)}const f=new _t({color:"#141210",roughness:1}),d=new _t({color:"#0d1a12",roughness:1,side:qe}),p=new Ne(.55,2.8).translate(0,1.4,0);for(let x=0;x<20;x++){let y=0,v=0;do{const R=e()*Di,M=12+e()*20;y=Math.cos(R)*M,v=Math.sin(R)*M}while(v>-6&&Math.abs(y)<18);const A=4.5+e()*3,T=new pe;T.position.set(y,0,v),T.rotation.z=(e()-.5)*.25;const E=new Q(new oe(.12,.22,A,7),f);E.position.y=A/2,E.castShadow=!0,T.add(E);for(let R=0;R<7;R++){const M=new Q(p,d);M.position.y=A,M.rotation.set(1.9+e()*.3,R/7*Di+e()*.3,0,"YXZ"),T.add(M)}t.add(T)}const _=new Float32Array(700*3);for(let x=0;x<700;x++){const y=e()*Di,v=.08+e()*1.4;_.set([Math.cos(y)*Math.cos(v)*150,Math.sin(v)*150,Math.sin(y)*Math.cos(v)*150],x*3)}const m=new Ae;m.setAttribute("position",new Ce(_,3)),t.add(new Mh(m,new yh({color:"#cfe0ff",size:1.6,sizeAttenuation:!1,fog:!1})));const g=new Q(new ys(4,24,16),new ke({color:"#eaf1ff",fog:!1}));g.position.set(-60,55,-110),t.add(g),this.steam=new Xn({count:140,size:1.8,color:"#9fc8d4",opacity:.22,additive:!0,life:[3,6],grow:1.5,drag:.1,spawn:(x,y)=>{const v=Math.random()*Di,A=Math.sqrt(Math.random())*(kr-.4);x.set(Math.cos(v)*A,.1,Math.sin(v)*A),y.set((Math.random()-.5)*.15,.35+Math.random()*.35,(Math.random()-.5)*.15)}}),this.fireflies=new Xn({count:40,size:.12,color:"#d8ff6a",additive:!0,life:[4,7],spawn:(x,y)=>{const v=Math.random()*Di,A=5+Math.random()*8;x.set(Math.cos(v)*A,.5+Math.random()*2,Math.sin(v)*A),y.set((Math.random()-.5)*.4,(Math.random()-.5)*.2,(Math.random()-.5)*.4)}}),this.splash=new Xn({count:160,size:.35,color:"#bff8ff",additive:!0,emitting:!1,life:[.6,1.2],gravity:9,spawn:(x,y)=>{x.copy(this.splashAt),y.set((Math.random()-.5)*3,2.5+Math.random()*3.5,(Math.random()-.5)*3)}}),t.add(this.steam.points,this.fireflies.points,this.splash.points)}async buildLandmarks(){const t=new _t({color:"#4a3524",roughness:.9}),e=new Q(new Kt(2.6,.12,7),t);e.position.set(0,.06,7.4),e.receiveShadow=!0,this.scene.add(e);for(let l=0;l<3;l++){const c=new Q(new Kt(2.4,.12,.45),t);c.position.set(0,-.12-l*.22,3.75-l*.42),this.scene.add(c)}for(const l of[-1,1]){for(let h=4.2;h<=10.6;h+=1.6){const u=new Q(new oe(.05,.05,.9,6),t);u.position.set(l*1.25,.5,h),this.scene.add(u)}const c=new Q(new Kt(.06,.06,6.6),t);c.position.set(l*1.25,.95,7.4),this.scene.add(c)}const n=Re(512,192,(l,c,h)=>{l.fillStyle="#3e2a1a",l.fillRect(0,0,c,h),l.strokeStyle="#2a1c10",l.lineWidth=8,l.strokeRect(4,4,c-8,h-8),l.fillStyle="#f2dfb8",l.textAlign="center",l.textBaseline="middle",l.font="64px 'Bebas Neue', Impact, sans-serif",l.fillText("WIKKI WARM SPRING",c/2,h*.4),l.font="30px 'Bebas Neue', Impact, sans-serif",l.fillText("YANKARI GAME RESERVE · 31°C",c/2,h*.75)}),i=new Q(new Kt(2.4,.9,.08),[t,t,t,t,new _t({map:n}),t]);i.position.set(-2.6,1.5,8.2),i.rotation.y=.5;const s=new Q(new oe(.07,.07,1.6,6),t);s.position.set(-2.6,.8,8.2),this.scene.add(i,s);const{scene:o}=await Oa(zi.elephant),a=new pe;a.add(o),Fa(a,5);for(const[l,c,h,u]of[[-13,-9,.9,1],[-17.5,-11,1.2,.7],[15,-12,-2.2,.9]]){const f=a.clone();f.position.x=l,f.position.z=c,f.rotation.y=h,f.scale.multiplyScalar(u),this.scene.add(f)}}async buildCast(){const t=[[0,4.6,Math.PI],[-1.5,5.3,Math.PI+.25],[1.6,5.4,Math.PI-.2]],e=[this.ctx.style,...La];(await Promise.all(e.map(i=>Si.create(i)))).forEach((i,s)=>{const[o,a,l]=t[s];i.root.position.set(o,0,a),i.root.rotation.y=l,this.scene.add(i.root),this.cast.push(i)})}buildTimeline(){const{ui:t,audio:e,style:n,user:i}=this.ctx,s=this.shot,o=i.displayName||i.username,a=ce.timeline({onComplete:()=>this.finish()});this.tl=a,a.call(()=>t.letterbox(!0),[],0).call(()=>t.caption("Wikki Warm Spring · Yankari Game Reserve · Bauchi State, Nigeria · 2049",3.6),[],.8).call(()=>t.routeMap(0,3.5),[],1).call(()=>t.radio({who:"Agent Harmattan-2",lang:"Hausa",text:"Ruwan yana da ɗumi. Kofar tana ƙasa.",en:"The water’s warm. The entrance is below."},3),[],2.2).call(()=>t.radio({who:"Agent Ibis-5",lang:"Yoruba",text:"Ẹ jẹ́ ká lọ!",en:"Let’s go!"},1.8),[],11).to(s,{angle:.9,radius:8.5,height:2.4,lookY:1.2,duration:5,ease:"power2.inOut"},0).to(s,{angle:Math.PI+.25,radius:3,height:1.75,lookY:1.6,duration:6,ease:"sine.inOut"},5).call(()=>t.title("VAULT OF YANKARI","",2.3),[],5.3).call(()=>t.title(`Starring ${o}`,`as ${n.codename}`,2.4,"small"),[],8.4).to(s,{angle:Math.PI+.9,radius:7,height:6.5,lookY:-.5,tz:2,duration:3,ease:"power2.inOut"},11).to(this,{walk:1,duration:.3},11),this.cast.forEach((l,c)=>{const h=l.root.position,u=11.1+c*.18,f=kr+.2,d=new ot(-h.x,-h.z).normalize(),p=Math.hypot(h.x,h.z)-f;a.to(h,{x:h.x+d.x*p,z:h.z+d.y*p,duration:1.3,ease:"none"},u).to(h,{x:h.x+d.x*(p+1.3),z:h.z+d.y*(p+1.3),duration:.8,ease:"none"},u+1.3).to(h,{y:.6,duration:.3,ease:"power2.out"},u+1.3).to(h,{y:-2.5,duration:.5,ease:"power2.in"},u+1.6).call(()=>{this.splashAt.set(h.x,.1,h.z),this.splash.burst(50),e.play("splash",.7)},[],u+1.85)}),a.call(()=>e.play("whoosh"),[],13.4).to({},{duration:.4},14.2)}}const Qr=Math.PI*2,kl=8,$o=.56,pb=.45,qd=4.2,Bl=.35,mb=1.6,gb=1.9,Jo=new ot(0,8.2),Zo=new ot(0,-4.6),_b=1,Ni=3,Qo={minX:-10.6,maxX:10.6,minZ:-8.3,maxZ:8.8},Yd=new at("#ff2a2a"),jd=new at("#ffb020"),vb=new at("#39ff88");function ta(r,t){return((r-t+Math.PI)%Qr+Qr)%Qr-Math.PI}function xb(r,t,e,n,i){let s=0,o=1;const a=[[r,e-r,i.x-i.hw,i.x+i.hw],[t,n-t,i.z-i.hd,i.z+i.hd]];for(const[l,c,h,u]of a){if(Math.abs(c)<1e-6){if(l<h||l>u)return!1;continue}let f=(h-l)/c,d=(u-l)/c;if(f>d&&([f,d]=[d,f]),s=Math.max(s,f),o=Math.min(o,d),s>o)return!1}return!0}class yb{constructor(){this.scene=new qi,this.lamps=[],this.boxes=[],this.guards=[],this.taken=[],this.cardIcons=[],this.state="play",this.spotCooldown=0,this.hintText="",this.t=0,this.tl=null,this.said=new Set,this.briefing=!0,this.keys=new Map,this.camLook=new P(0,2.4,-8),this.camGoal=new P,this.lookGoal=new P}async enter(t){this.ctx=t,this.scene.background=new at("#030507"),this.scene.fog=new po("#030507",20,42),t.camera.fov=40,t.camera.updateProjectionMatrix(),t.camera.position.set(0,7,-1),t.camera.lookAt(this.camLook),t.bloom.strength=.8,t.bloom.threshold=.7,this.scene.environment=t.envMap,this.scene.environmentIntensity=.35,t.grade.set({tint:"#d8ecff",lift:"#020610",saturation:.85,contrast:1.12,vignette:.5}),this.buildRoom(),this.buildDoor(),this.buildConsole(),this.buildCover(),await this.buildGuards(),this.player=await Si.create(t.style),this.player.root.position.set(Jo.x,0,Jo.y),this.player.root.rotation.y=Math.PI,this.scene.add(this.player.root),this.buildHud(),t.ui.briefing("THE HEIST","Steal a keycard from each of the 3 guards without being seen, then swipe all three at the vault door console.",[{keys:["W","A","S","D"],label:"Move (or the arrow keys)"},{keys:[],label:"Yellow cones are what guards can see. Crates block their view."},{keys:["SPACE"],label:"Lift a glowing keycard: get right BEHIND a guard first"},{keys:["SPACE"],label:"Swipe the 3 cards at the console in front of the door"},{keys:[],label:"Seen = you lose your last card. Hide, then try again."}],"Press [SPACE] to begin"),this.keys=t.ui.legend("CONTROLS",[{keys:["W","A","S","D"],label:"move",id:"move"},{keys:["SPACE"],label:"lift card (from behind)",id:"lift"},{keys:["SPACE"],label:"swipe cards at console",id:"swipe"},{keys:["M"],label:"mute"}]),t.audio.startLoop("tension")}update(t){if(this.briefing){(this.ctx.input.pressed("action")||this.ctx.input.pressed("skip"))&&this.startHeist(),this.updateCamera(t);return}if(this.t+=t,this.spotCooldown=Math.max(0,this.spotCooldown-t),this.state==="play")this.movePlayer(t),this.updateGuards(t),this.updateObjective();else{this.player.update(t,0);for(const e of this.guards)e.model.update(t,0)}for(const e of this.guards)e.card.visible=e.hasCard,e.card.material.emissiveIntensity=1.5+Math.sin(this.t*6)*.6;this.updateCamera(t),this.padMat.opacity=.45+Math.sin(this.t*4)*.25}startHeist(){this.briefing=!1,this.ctx.ui.closeBriefing(),this.ctx.ui.caption("The vault · 40 m beneath Wikki Warm Spring",3.5),this.ctx.ui.routeMap(1),window.setTimeout(()=>this.say("brief",{who:"Agent Harmattan-2",lang:"Pidgin",text:"Na three card we need. Make you no wake dem.",en:"We need three keycards. Don’t alert them."}),1500)}exit(){this.tl?.kill(),ce.killTweensOf(this.door.position),vo(this.scene)}movePlayer(t){const{x:e,y:n}=this.ctx.input.axis(),i=this.player.root.position,s=Math.hypot(e,n);if(s>0){const o=e*qd,a=-n*qd;i.x+=o*t,i.z+=a*t,this.player.root.rotation.y+=ta(Math.atan2(o,a),this.player.root.rotation.y)*Math.min(1,t*12)}for(const o of this.boxes){const a=De.clamp(i.x,o.x-o.hw,o.x+o.hw),l=De.clamp(i.z,o.z-o.hd,o.z+o.hd),c=i.x-a,h=i.z-l,u=Math.hypot(c,h);u<Bl&&u>1e-5&&(i.x=a+c/u*Bl,i.z=l+h/u*Bl)}i.x=De.clamp(i.x,Qo.minX,Qo.maxX),i.z=De.clamp(i.z,Qo.minZ,Qo.maxZ),this.player.update(t,s)}updateGuards(t){const e=this.player.root.position;for(const n of this.guards){const i=n.model.root.position,s=n.route[n.idx];let o=n.facing,a=0;if(n.wait>0)n.wait-=t,o=s.look+Math.sin(this.t*1.6)*.35,n.wait<=0&&(n.idx=(n.idx+1)%n.route.length);else{const h=s.x-i.x,u=s.z-i.z,f=Math.hypot(h,u);if(f<.05)n.wait=s.wait;else{const d=Math.min(f,n.speed*t);i.x+=h/f*d,i.z+=u/f*d,o=Math.atan2(h,u),a=.8}}n.facing+=ta(o,n.facing)*Math.min(1,t*5),n.model.root.rotation.y=n.facing,n.model.update(t,a);const l=this.spotCooldown<=0&&this.canSee(n,e.x,e.z),c=n.suspicion;n.suspicion=De.clamp(n.suspicion+(l?t/pb:-t*.8),0,1),c<.35&&n.suspicion>=.35&&this.ctx.audio.play("beep"),n.coneMat.color.setRGB(1,.82*(1-n.suspicion),.25*(1-n.suspicion)),n.coneMat.opacity=.16+n.suspicion*.25,n.suspicion>=1&&this.spotted()}}canSee(t,e,n){const i=t.model.root.position,s=e-i.x,o=n-i.z;if(Math.hypot(s,o)>kl||Math.abs(ta(Math.atan2(s,o),t.facing))>$o)return!1;for(const a of this.boxes)if(a.occludes&&xb(i.x,i.z,e,n,a))return!1;return!0}nearestMark(){const t=this.player.root.position;let e=null,n=mb;for(const i of this.guards){if(!i.hasCard)continue;const s=i.model.root.position,o=Math.hypot(t.x-s.x,t.z-s.z);if(o>=n)continue;n=o;const a=Math.abs(ta(Math.atan2(t.x-s.x,t.z-s.z),i.facing))>gb;e={guard:i,behind:a}}return e}updateObjective(){const{input:t,audio:e,ui:n}=this.ctx,i=this.player.root.position,s=this.taken.length,o=Math.hypot(i.x-Zo.x,i.z-Zo.y)<_b,a=this.nearestMark(),l=t.axis();this.keys.get("move")?.classList.toggle("active",l.x!==0||l.y!==0),this.keys.get("lift")?.classList.toggle("active",!!a?.behind),this.keys.get("swipe")?.classList.toggle("active",o&&s>=Ni),a?(this.setHint(a.behind?"Press [SPACE] to lift the keycard":"Get behind them… they must not be facing you"),a.behind&&t.pressed("action")&&(a.guard.hasCard=!1,this.taken.push(a.guard),this.player.gesture("Interact"),e.play("click"),e.play("success",.5),n.flash(this.ctx.style.accentColor,.18,.4),this.refreshCards(),this.taken.length===1&&this.say("first",{who:"Agent Ibis-5",lang:"Igbo",text:"Ọ dị mma! Abụọ fọdụrụ.",en:"Good! Two left."}),this.taken.length===Ni&&this.say("all",{who:"Agent Harmattan-2",lang:"Hausa",text:"Madalla! Zuwa ƙofa.",en:"Excellent! To the door."}))):o?s>=Ni?(this.setHint("Press [SPACE] to swipe the keycards"),t.pressed("action")&&this.openVault()):this.setHint(`The door needs ${Ni} keycards · you have ${s}`):s>=Ni?this.setHint("All keycards · swipe them at the door console"):this.setHint("Sneak up behind a guard · lift their glowing keycard")}spotted(){const{audio:t,ui:e,cinema:n}=this.ctx;t.play("spotted"),e.flash("#ff2020",.45,.6),n.shake(.15,.35);const i=this.taken.pop();i?(i.hasCard=!0,this.refreshCards(),e.caption("Spotted · a keycard was taken back · get out of the light",2.8)):(e.caption("Spotted · wait for their backs to turn, then move",3),this.player.root.position.set(Jo.x,0,Jo.y)),this.say("spotted",{who:"Agent Ibis-5",lang:"Yoruba",text:"Wọ́n ti rí ẹ! Sá pamọ́!",en:"They’ve seen you! Hide!"});for(const s of this.guards)s.suspicion=0;this.spotCooldown=2}openVault(){const{ui:t,audio:e,cinema:n,bloom:i}=this.ctx;this.state="opening",this.setHint(""),e.stopLoop("tension");for(const o of this.guards)o.coneMat.opacity=0;const s=ce.timeline();this.tl=s,this.lamps.forEach((o,a)=>{s.call(()=>{o.emissive.copy(vb),e.play("lock")},[],.2+a*.35)}),s.call(()=>{e.play("success"),e.play("boom"),n.shake(.12,1.4)},[],1.3).to(this.door.position,{x:4.9,duration:2.6,ease:"power2.inOut"},1.4).to(i,{strength:1.1,duration:2},1.6).call(()=>t.caption("Containment wing open",2),[],2.2).call(()=>this.ctx.goTo("twist"),[],4.4)}updateCamera(t){const e=this.ctx.camera,n=this.player.root.position;this.state==="opening"?(this.camGoal.set(0,3.4,-1.2),this.lookGoal.set(0,2.5,-9)):(this.camGoal.set(n.x*.85,15,n.z+10.5),this.lookGoal.set(n.x*.9,.8,n.z-1.5));const i=1-Math.exp(-t*3.5);e.position.lerp(this.camGoal,i),this.camLook.lerp(this.lookGoal,i),e.lookAt(this.camLook)}setHint(t){t!==this.hintText&&(this.hintText=t,this.ctx.ui.hint(t||null))}say(t,e){this.said.has(t)||this.state!=="play"||(this.said.add(t),this.ctx.ui.radio(e))}refreshCards(){const t=this.taken.length;this.cardIcons.forEach((e,n)=>e.classList.toggle("have",n<t)),this.cardLabel.textContent=`KEYCARDS ${t}/${Ni}`,this.lamps.forEach((e,n)=>e.emissive.copy(n<t?jd:Yd))}buildRoom(){const t=this.scene,e=Re(256,256,(d,p,_)=>{d.fillStyle="#121519",d.fillRect(0,0,p,_),d.fillStyle="#191d23",d.fillRect(10,10,p-20,_-20),d.strokeStyle="#262c35",d.lineWidth=3,d.strokeRect(10,10,p-20,_-20),d.fillStyle="#2b313a";for(const[m,g]of[[22,22],[p-22,22],[22,_-22],[p-22,_-22]])d.beginPath(),d.arc(m,g,5,0,Qr),d.fill()},{repeat:[11,9]}),n=new Q(new Ne(22,18),new _t({map:e,roughness:.55,metalness:.5}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);const i=new _t({color:"#171a20",roughness:.9}),s=new _t({color:"#000000",emissive:"#16c6d8",emissiveIntensity:1.4}),o=[[22.6,5,.6,0,2.5,-9.3],[22.6,.8,.6,0,.4,9.3],[.6,5,18.6,-11.3,2.5,0],[.6,5,18.6,11.3,2.5,0]];for(const[d,p,_,m,g,x]of o){const y=new Q(new Kt(d,p,_),i);y.position.set(m,g,x),y.receiveShadow=!0,t.add(y)}for(const[d,p,_,m]of[[22,.08,0,-8.98],[.08,18,-10.98,0],[.08,18,10.98,0]]){const g=new Q(new Kt(d,.08,p),s);g.position.set(_,3.8,m),t.add(g)}const a=Re(1024,128,(d,p,_)=>{d.clearRect(0,0,p,_),d.fillStyle="rgba(200,210,220,0.55)",d.font="86px 'Bebas Neue', Impact, sans-serif",d.textAlign="center",d.textBaseline="middle",d.fillText("YANKARI BIO-VAULT · SUBLEVEL 2",p/2,_/2)}),l=new Q(new Ne(9,1.1),new ke({map:a,transparent:!0}));l.position.set(0,4.45,-8.98),t.add(l);const c=Re(256,64,(d,p,_)=>{d.fillStyle="#111",d.fillRect(0,0,p,_),d.fillStyle="#c9a227";for(let m=-_;m<p+_;m+=32)d.beginPath(),d.moveTo(m,_),d.lineTo(m+16,_),d.lineTo(m+16+_,0),d.lineTo(m+_,0),d.fill()}),h=new Q(new Ne(6,.8),new _t({map:c,roughness:.8}));h.rotation.x=-Math.PI/2,h.position.set(0,.01,-7.9),h.receiveShadow=!0,t.add(h),t.add(new go("#41506b","#0a0a0c",.6));const u=new Zs("#cfe6ff",260,32,.8,.6,1.6);u.position.set(0,12,3),u.target.position.set(0,0,-2),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),u.shadow.bias=-5e-4,t.add(u,u.target);const f=new Zs("#5fe3ff",90,16,.5,.5,1.5);f.position.set(0,6,-3.5),f.target.position.set(0,2.6,-8.8),t.add(f,f.target);for(const d of[-10,10]){const p=new Ms("#ff2a2a",8,9,2);p.position.set(d,3.5,-8),t.add(p)}}buildDoor(){const t=new _t({color:"#59606b",metalness:.85,roughness:.35}),e=new _t({color:"#23272e",metalness:.7,roughness:.5}),n=new P(0,2.6,-8.95),i=new Q(new fs(2.45,.25,12,48),t);i.position.copy(n).setZ(-8.85),this.scene.add(i);for(let c=0;c<Ni;c++){const h=new _t({color:"#111",emissive:Yd,emissiveIntensity:2.2}),u=new Q(new ys(.16,16,12),h),f=Math.PI/2+(c-1)*.42;u.position.set(Math.cos(f)*2.45,n.y+Math.sin(f)*2.45,-8.55),this.scene.add(u),this.lamps.push(h)}const s=new Q(new _i(2.3,48),new ke({color:"#2f9c6c"}));s.position.copy(n).setZ(-8.98),this.scene.add(s);const o=new pe;o.position.copy(n),this.door=o,this.scene.add(o);const a=new Q(new oe(2.3,2.3,.4,48),t);a.rotation.x=Math.PI/2,a.castShadow=a.receiveShadow=!0,o.add(a);for(let c=0;c<12;c++){const h=c/12*Qr,u=new Q(new oe(.09,.09,.12,8),e);u.rotation.x=Math.PI/2,u.position.set(Math.cos(h)*2.18,Math.sin(h)*2.18,.22),o.add(u)}for(const c of[1.7,1.15]){const h=new Q(new fs(c,.05,8,48),e);h.position.z=.21,o.add(h)}const l=new Q(new oe(.55,.55,.2,24),e);l.rotation.x=Math.PI/2,l.position.z=.3,o.add(l);for(let c=0;c<3;c++){const h=new Q(new Kt(2.2,.12,.1),t);h.rotation.z=c/3*Math.PI,h.position.z=.36,o.add(h)}}buildConsole(){const t=this.ctx.style.accentColor,e=new Q(new Kt(1.4,1,.7),new _t({color:"#22262d",metalness:.7,roughness:.45}));e.position.set(0,.5,-5.6),e.castShadow=e.receiveShadow=!0,this.scene.add(e);const n=Re(256,96,(o,a,l)=>{o.fillStyle="#05080b",o.fillRect(0,0,a,l),o.fillStyle=t,o.font="40px 'Bebas Neue', Impact, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText("SWIPE 3 KEYCARDS",a/2,l/2)}),i=new Q(new Ne(1.2,.45),new ke({map:n}));i.position.set(0,1.03,-5.5),i.rotation.x=-Math.PI/2+.5,this.scene.add(i),this.padMat=new ke({color:t,transparent:!0,opacity:.6,depthWrite:!1});const s=new Q(new Pa(.72,.86,40),this.padMat);s.rotation.x=-Math.PI/2,s.position.set(Zo.x,.02,Zo.y),this.scene.add(s),this.boxes.push({x:0,z:-5.6,hw:.7,hd:.35,occludes:!1})}buildCover(){const t=Re(128,128,(s,o,a)=>{s.fillStyle="#2f343c",s.fillRect(0,0,o,a),s.strokeStyle="#454c57",s.lineWidth=8,s.strokeRect(4,4,o-8,a-8),s.fillStyle="#c9a227",s.fillRect(14,a/2-6,o-28,12)}),e=new _t({map:t,roughness:.7,metalness:.3}),n=new _t({color:"#1f232a",roughness:.8}),i=[[-3.6,-5.6,1.4,1.4,1.3],[3.6,-5.6,1.4,1.4,1.3],[-7,.8,2.2,1.2,1.1],[-2.8,.8,1.8,1.2,1.1],[2.8,.8,1.8,1.2,1.1],[7,.8,2.2,1.2,1.1],[-3,6,1.4,1.4,1.3],[3.2,6.4,1.4,1.4,1.3]];for(const[s,o,a,l,c]of i){const h=new Q(new Kt(a,c,l),e);h.position.set(s,c/2,o),h.castShadow=h.receiveShadow=!0,this.scene.add(h),this.boxes.push({x:s,z:o,hw:a/2,hd:l/2,occludes:!0})}for(const[s,o]of[[-9.8,-7.6],[9.8,-7.6],[-9.8,7.6],[9.8,7.6]]){const a=new Q(new Kt(1,5,1),n);a.position.set(s,2.5,o),a.castShadow=a.receiveShadow=!0,this.scene.add(a),this.boxes.push({x:s,z:o,hw:.5,hd:.5,occludes:!0})}}async buildGuards(){const t=Re(128,128,(o,a,l)=>{const c=o.createRadialGradient(a/2,l/2,0,a/2,l/2,a/2);c.addColorStop(0,"rgba(255,255,255,0.9)"),c.addColorStop(1,"rgba(255,255,255,0.05)"),o.fillStyle=c,o.fillRect(0,0,a,l)}),e=new _i(kl,32,-Math.PI/2-$o,$o*2),n=new Kt(.22,.14,.03),i=[{speed:1.7,start:0,route:[{x:-8.5,z:3.4,wait:1,look:Math.PI/2},{x:8.5,z:3.4,wait:1,look:-Math.PI/2}]},{speed:1.9,start:1,route:[{x:-9,z:-2.5,wait:1.8,look:Math.PI/2},{x:0,z:-2.5,wait:1.5,look:Math.PI},{x:9,z:-2.5,wait:1.8,look:-Math.PI/2},{x:0,z:-2.5,wait:1.5,look:Math.PI}]},{speed:1.5,start:0,route:[{x:9.6,z:-6.6,wait:.8,look:-Math.PI/2},{x:6,z:-6.6,wait:.8,look:0},{x:6,z:-4.2,wait:.8,look:Math.PI/2},{x:9.6,z:-4.2,wait:.8,look:Math.PI}]}],s=await Promise.all(i.map(()=>Si.create(XM,"guard")));i.forEach(({route:o,speed:a,start:l},c)=>{const h=s[c];h.root.position.set(o[l].x,0,o[l].z),this.scene.add(h.root);const u=new ke({map:t,color:"#ffd23f",transparent:!0,opacity:.16,depthWrite:!1,blending:ir}),f=new Q(e,u);f.rotation.x=-Math.PI/2,f.position.y=.03,h.root.add(f);const d=new Zs("#ffe7b0",40,kl+2,$o,.45,1.4);d.position.set(0,1.6,.2),d.target.position.set(0,0,6),h.root.add(d,d.target);const p=new Q(n,new _t({color:"#111",emissive:jd,emissiveIntensity:1.8}));p.position.set(.12,1,-.27),h.root.add(p),this.guards.push({model:h,coneMat:u,card:p,hasCard:!0,route:o,idx:(l+1)%o.length,wait:0,speed:a,facing:0,suspicion:0})})}buildHud(){const{style:t,user:e}=this.ctx,n=this.ctx.ui.hud(),i=nt("div","badge",n);i.append(cb(t,108));const s=nt("div","",i);nt("div","label",s,"CREW ID · YANKARI VAULT"),nt("div","code",s,t.codename),nt("div","user",s,`@${e.username}${e.track?` · ${e.track}`:""}`);const o=nt("div","cards",n),a=nt("div","row",o);this.cardIcons=[nt("i","",a),nt("i","",a),nt("i","",a)],this.cardLabel=nt("div","label",o,`KEYCARDS 0/${Ni}`)}}class Ba{constructor(){this.root=new pe,this.eyes=new _t({color:"#330800",emissive:"#ff3a12",emissiveIntensity:6}),this.actions=new Map,this.current=null}static async create(t=4.2){const e=new Ba;return await e.load(t),e}async load(t){const{scene:e,animations:n}=await Oa(zi.raptor),i=new pe;i.add(e),Fa(i,t),this.root.add(i),e.traverse(o=>{const a=o;if(!a.isMesh)return;const l=Array.isArray(a.material)?a.material:[a.material];for(const c of l){const h=c;h.color&&(h.name==="LightBrown"?(h.color.set("#3c4a2c"),h.emissive=new at("#1aff7a"),h.emissiveIntensity=.12):h.name==="Brown"?h.color.set("#1d1a16"):h.color.set("#0b0b0b"),h.roughness=.35,h.metalness=.15)}});const s=e.getObjectByName("Head");if(s){const o=new P;s.getWorldScale(o);const a=.05/o.x;for(const l of[-1,1]){const c=new Q(new ys(a,10,8),this.eyes);c.position.set(l*a*2.6,a*2.2,a*5.5),s.add(c)}}this.mixer=new ep(e);for(const o of n){const a=o.name.split("_").pop();this.actions.set(a,this.mixer.clipAction(o))}this.play("Idle",0)}play(t,e=.25,n=1,i=!1){const s=this.actions.get(t);if(!s||s===this.current){s&&(s.timeScale=n);return}s.reset(),s.timeScale=n,s.setLoop(i?ch:hh,1/0),s.clampWhenFinished=i,s.play(),this.current&&this.current.crossFadeTo(s,e,!1),this.current=s}update(t){this.mixer?.update(t)}}const as=Math.PI*2,zn=1.8,zl=220;function Kd(r,t){const e=ka(r);return Re(512,512,(n,i,s)=>{n.clearRect(0,0,i,s),n.strokeStyle="rgba(230,255,245,0.95)",n.lineCap="round";for(let o=0;o<t;o++){let a=i/2+(e()-.5)*30,l=s*.45+(e()-.5)*30,c=e()*as;n.lineWidth=1+e()*2.5,n.beginPath(),n.moveTo(a,l);const h=6+Math.floor(e()*10);for(let u=0;u<h;u++)c+=(e()-.5)*.9,a+=Math.cos(c)*(14+e()*26),l+=Math.sin(c)*(14+e()*26),n.lineTo(a,l);n.stroke()}})}class Mb{constructor(){this.scene=new qi,this.tl=null,this.crew=[],this.shardData=[],this.shattered=!1,this.beacons=[],this.beaconAngle=0,this.cam={px:3.2,py:2.4,pz:9.5,lx:0,ly:2.2,lz:0},this.dummy=new me,this.done=!1}async enter(t){this.ctx=t,this.creature=await Ba.create(3.3),this.crew=await Promise.all([t.style,...La].map(e=>Si.create(e))),this.scene.background=new at("#020405"),this.scene.fog=new po("#020405",12,30),t.camera.fov=42,t.camera.updateProjectionMatrix(),t.bloom.strength=.75,t.bloom.threshold=.7,this.scene.environment=t.envMap,this.scene.environmentIntensity=.12,t.grade.set({tint:"#e6fff2",saturation:.95,contrast:1.2,vignette:.55}),this.build(),this.buildTimeline(),this.applyCam(),t.ui.showSkip(!0)}update(t){this.ctx.input.pressed("skip")&&this.finish(),this.creature.update(t);for(const e of this.crew)e.update(t,0);this.bubbles.update(t),this.splash.update(t),this.beaconAngle+=t*3,this.beacons.forEach((e,n)=>{const i=this.beaconAngle+n*Math.PI;e.position.set(Math.cos(i)*6,5.5,Math.sin(i)*6)}),this.shattered&&this.updateShards(t),this.applyCam()}exit(){this.tl?.kill(),vo(this.scene),this.crack2.dispose()}finish(){this.done||(this.done=!0,this.ctx.goTo("escape"))}applyCam(){const t=this.cam;this.ctx.camera.position.set(t.px,t.py,t.pz),this.ctx.camera.lookAt(t.lx,t.ly,t.lz)}updateShards(t){for(let e=0;e<zl;e++){const n=this.shardData[e];n.v.y-=9.8*t,n.p.addScaledVector(n.v,t),n.p.y<.05&&(n.p.y=.05,n.v.multiplyScalar(.4),n.v.y=Math.abs(n.v.y)*.3,n.w.multiplyScalar(.5)),n.r.x+=n.w.x*t,n.r.y+=n.w.y*t,n.r.z+=n.w.z*t,this.dummy.position.copy(n.p),this.dummy.rotation.copy(n.r),this.dummy.scale.setScalar(n.s),this.dummy.updateMatrix(),this.shards.setMatrixAt(e,this.dummy.matrix)}this.shards.instanceMatrix.needsUpdate=!0}build(){const t=this.scene,e=Re(256,256,(d,p,_)=>{d.fillStyle="#0f1215",d.fillRect(0,0,p,_),d.strokeStyle="#1d232b",d.lineWidth=3;for(let m=0;m<=4;m++)d.beginPath(),d.moveTo(m*p/4,0),d.lineTo(m*p/4,_),d.moveTo(0,m*_/4),d.lineTo(p,m*_/4),d.stroke()},{repeat:[5,5]}),n=new Q(new _i(11,48),new _t({map:e,roughness:.4,metalness:.6}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);const i=new Q(new oe(11,11,8,40,1,!0),new _t({color:"#12161b",roughness:.85,side:Ve}));i.position.y=4,t.add(i);const s=new _t({color:"#000",emissive:"#18c8d8",emissiveIntensity:1.5});for(let d=0;d<16;d++){const p=d/16*as,_=new Q(new Kt(.12,3.5,.12),s);_.position.set(Math.cos(p)*10.8,3,Math.sin(p)*10.8),t.add(_)}const o=new go("#2a3550","#050505",.5);t.add(o);const a=new Zs("#d8f3ff",160,20,.7,.6,1.5);a.position.set(0,9,4),a.target.position.set(0,1.5,0),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),t.add(a,a.target);const l=new Ms("#2bff9c",9,6,2);l.position.set(0,.6,0),t.add(l);for(let d=0;d<2;d++){const p=new Ms("#ff1a1a",0,14,1.6);t.add(p),this.beacons.push(p)}const c=new _t({color:"#4b525c",metalness:.85,roughness:.35}),h=new Q(new oe(2.15,2.3,.5,40),c);h.position.y=.25,h.receiveShadow=!0;const u=new Q(new oe(2.15,2.15,.6,40),c);u.position.y=5.1,t.add(h,u);for(let d=0;d<6;d++){const p=d/6*as,_=new Q(new Th(new Yf([new P(Math.cos(p)*1.6,5.4,Math.sin(p)*1.6),new P(Math.cos(p)*3.5,6.8,Math.sin(p)*3.5),new P(Math.cos(p)*7,8.2,Math.sin(p)*7)]),16,.07,6),new _t({color:"#15181c",roughness:.6}));t.add(_)}this.fluid=new Q(new oe(zn-.05,zn-.05,4.3,40,1,!0),new _t({color:"#0b3d2e",emissive:"#11c47f",emissiveIntensity:.45,transparent:!0,opacity:.45,depthWrite:!1,side:qe})),this.fluid.position.y=2.65,this.glass=new Q(new oe(zn,zn,4.3,40,1,!0),new _t({color:"#bffff0",transparent:!0,opacity:.16,roughness:.05,metalness:.3,depthWrite:!1,side:qe})),this.glass.position.y=2.65,this.crackMat=new ke({map:Kd(7,14),transparent:!0,opacity:0,depthWrite:!1,side:qe}),this.crack2=Kd(11,40),this.crack=new Q(new oe(zn+.02,zn+.02,4.3,40,1,!0,Math.PI,as),this.crackMat),this.crack.position.y=2.65,t.add(this.fluid,this.glass,this.crack),this.creature.root.position.set(0,.5,-.1),this.creature.root.rotation.x=.12,this.creature.eyes.emissiveIntensity=0,this.creature.play("Idle",0,.25),t.add(this.creature.root);const f=[[0,4.2],[-1.6,4.8],[1.7,4.6]];this.crew.forEach((d,p)=>{d.root.position.set(f[p][0],0,f[p][1]),d.root.rotation.y=Math.PI+f[p][0]*.12,t.add(d.root)}),this.shards=new vh(new bh(.1),new _t({color:"#d9fff4",emissive:"#3cffb0",emissiveIntensity:.6,metalness:.3,roughness:.1,transparent:!0,opacity:.85}),zl),this.shards.visible=!1,this.shards.frustumCulled=!1;for(let d=0;d<zl;d++){const p=(Math.random()-.5)*Math.PI*1.5,_=new P(Math.sin(p),0,Math.cos(p));this.shardData.push({p:_.clone().multiplyScalar(zn).setY(.6+Math.random()*4.2),v:_.multiplyScalar(3+Math.random()*7).add(new P(0,1+Math.random()*3,1.5)),r:new kn(Math.random()*as,Math.random()*as,0),w:new P(Math.random()*12,Math.random()*12,Math.random()*12),s:.6+Math.random()*1.8})}t.add(this.shards),this.bubbles=new Xn({count:60,size:.12,color:"#b8ffe0",additive:!0,opacity:.8,life:[1.5,3],spawn:(d,p)=>{const _=Math.random()*as,m=Math.random()*(zn-.2);d.set(Math.cos(_)*m,.6,Math.sin(_)*m),p.set(0,1+Math.random()*1.2,0)}}),this.splash=new Xn({count:220,size:.3,color:"#5dffb2",opacity:.6,additive:!0,emitting:!1,life:[.8,1.6],gravity:7,spawn:(d,p)=>{const _=(Math.random()-.5)*Math.PI*1.6;d.set(Math.sin(_)*zn,.6+Math.random()*3.8,Math.cos(_)*zn),p.set(Math.sin(_)*(2+Math.random()*5),1+Math.random()*3,Math.cos(_)*(2+Math.random()*5))}}),t.add(this.bubbles.points,this.splash.points),this.alarmTargets={hemi:o,key:a,stripMat:s,tankLight:l}}buildTimeline(){const{ui:t,audio:e,cinema:n,bloom:i}=this.ctx,s=this.cam,o=new at("#ff1a1a"),{hemi:a,key:l,stripMat:c}=this.alarmTargets,h=ce.timeline({onComplete:()=>this.finish()});this.tl=h,h.call(()=>t.letterbox(!0),[],0).call(()=>t.caption("Specimen 0-YK · containment level 5",2.2),[],.3).to(s,{px:1.6,py:2,pz:7.4,duration:2.4,ease:"sine.inOut"},0),h.call(()=>{e.startLoop("alarm"),e.play("spotted"),t.flash("#ff1a1a",.35,.8),n.shake(.04,.6);for(const u of this.beacons)u.intensity=60},[],1.8).to(a.color,{r:o.r*.4,g:o.g*.4,b:o.b*.4,duration:.4},1.8).to(l.color,{r:1,g:.25,b:.2,duration:.4},1.8).to(c.emissive,{r:o.r,g:o.g,b:o.b,duration:.3},1.8).to(this.ctx.grade.grade.tint,{r:1,g:.82,b:.8,duration:.5},1.8).to(this.ctx.grade.grade.lift,{r:.06,g:0,b:0,duration:.5},1.8),h.set(s,{px:.9,py:1.9,pz:3.3,lx:0,ly:1.4,lz:.6},3).to(s,{pz:2.9,duration:1.2,ease:"none"},3).to(this.creature.eyes,{emissiveIntensity:6,duration:.35},3.1).to(this.creature.root.rotation,{x:-.1,duration:.8,ease:"power2.out"},3.1).call(()=>this.creature.play("Idle",.3,1.4),[],3.1).call(()=>e.play("roar",.6),[],3.2),h.call(()=>t.radio({who:"Agent Harmattan-2",lang:"Hausa",text:"Me ke nan?!",en:"What is that?!"},2.4),[],4),h.call(()=>{this.crackMat.opacity=1,e.play("glass",.7),n.shake(.08,.3)},[],4.2),h.set(s,{px:-3,py:1.6,pz:6.5,lx:0,ly:2,lz:0},5).call(()=>this.creature.play("Attack",.1,1.3,!0),[],4.85).to(this.creature.root.position,{z:.45,duration:.25,ease:"power3.in"},5).call(()=>{this.crackMat.map=this.crack2,this.crackMat.needsUpdate=!0,e.play("glass"),e.play("impact",.6),n.shake(.12,.4)},[],5.25),h.call(()=>{this.glass.visible=!1,this.crack.visible=!1,this.fluid.visible=!1,this.shards.visible=!0,this.shattered=!0,this.splash.burst(220),e.play("boom"),e.play("glass"),e.play("roar"),n.shake(.35,.9),n.slowMo(.12,1.4),t.flash("#ffffff",.4,.5)},[],5.9).set(s,{px:4.2,py:.5,pz:5.2,lx:0,ly:2,lz:1},5.9).to(s,{px:3.4,py:.7,pz:4.6,duration:2.4,ease:"sine.out"},5.9).to(i,{strength:1.15,duration:.4},5.9).call(()=>this.creature.play("Jump",.1,1,!0),[],5.9).to(this.creature.root.position,{z:1.4,y:.9,duration:2.2,ease:"power1.out"},5.95),h.set(this.creature.root.position,{z:.2,y:.5},8.3).set(s,{px:.15,py:1.72,pz:2.9,lx:0,ly:1.68,lz:4.2},8.3).to(s,{pz:3.15,duration:1.6,ease:"none"},8.3).to(i,{strength:.75,duration:.3},8.3).call(()=>{t.title("RUN.","",1.2,"danger"),t.radio({who:"Agent Ibis-5",lang:"Igbo",text:"Gbaa ọsọ!",en:"Run!"},1.4),e.play("impact",.5)},[],8.4).to({},{duration:.1},9.9)}}const Br=2e3,nn={start:1150,end:1186},Vl=3,Hl=3,Sb=13,Gl=7.2,$d=1,Jd=1.9,Zd=10,ea=40,bb=90,Qd=1.45,Tb=.45,wb=.05,Eb=.3,Ab=1.6,Rb=26,Cb=.22,Pb=1.2,Ib=4,tf=26,Lb=3.5,ef=new P(-.55,.2,-1).normalize(),nf=[{keys:["◀","▶"],label:"steer (or A / D)",id:"steer"},{keys:["▲"],label:"hold to boost (or W) · uses the meter",id:"boost"},{keys:["▼"],label:"hold to brake (or S) · the raptor gains",id:"brake"},{keys:["SHIFT"],label:"+ steer to drift · refills boost",id:"drift"},{keys:["◀◀","▶▶"],label:"double-tap to jink sideways",id:"jink"},{keys:["SPACE"],label:"kick debris at the raptor",id:"kick"},{keys:["C"],label:"switch camera",id:"camera"}],Db=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Nb=`
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
}`;class Ub{constructor(){this.scene=new qi,this.wheels=[],this.decor=[],this.obstacles=[],this.rearCam=new Xe(55,3.2,.1,600),this.state="intro",this.camMode="chase",this.stateT=0,this.t=0,this.dist=0,this.x=0,this.vx=0,this.speed=10,this.hits=0,this.fails=0,this.invuln=0,this.slow=1,this.gap=42,this.nextSpawn=150,this.roarIn=4,this.jumping=0,this.leaving=!1,this.caughtAt=0,this.boost=1,this.boosting=!1,this.braking=!1,this.drifting=!1,this.yawExtra=0,this.jinkT=0,this.jinkDir=0,this.jinkCd=0,this.kickCd=0,this.skidIn=0,this.stumble=0,this.briefing=!0,this.keys=new Map,this.tipAt=new Map,this.lastThreat=-1,this.said=new Set,this.camOffset=new P,this.lookOffset=new P,this.camGoal=new P,this.lookGoal=new P,this.tmp=new P}async enter(t){this.ctx=t,await $1("130px 'Bebas Neue'"),this.scene.fog=new po("#e9b58e",110,420),t.bloom.strength=.45,t.bloom.threshold=.9,this.scene.environment=t.envMap,this.scene.environmentIntensity=.2,t.grade.set({tint:"#fff4e6",saturation:1.15,contrast:1.14,vignette:.32}),this.buildWorld(),this.buildRiver(),await this.buildTemplates(),this.buildDecor(),await this.buildJeep(),this.buildGate(),this.raptor=await Ba.create(5.2),this.raptor.root.rotation.y=Math.PI,this.raptor.play("Run",0),this.scene.add(this.raptor.root),this.buildParticles(),this.buildHud(),t.audio.startLoop("engine"),t.audio.startLoop("action"),this.reset(!0),t.ui.briefing("THE ESCAPE","Outrun the raptor to the Yankari main gate, 2 km away. The jeep drives itself: you steer and dodge. 3 hits and you’re caught. Caught 3 times in a row and you start the whole game again.",nf,"Press [SPACE] to start the engine"),this.keys=t.ui.legend("DRIVING",nf)}startChase(){this.briefing=!1,this.ctx.ui.closeBriefing(),this.ctx.ui.routeMap(2),this.announce()}announce(){const{ui:t}=this.ctx;t.caption("Dawn · 2 km to the main gate · past the Gaji River and Kalban Hill",3.5),t.hint("Hold [↑] to boost · [SPACE] kicks debris at the raptor"),this.ctx.audio.play("roar",.8)}tip(t,e,n=9){const i=performance.now()/1e3;i-(this.tipAt.get(t)??-1e9)<n||(this.tipAt.set(t,i),this.ctx.ui.prompt(e))}updateTips(){if(this.state!=="drive")return;const t=-this.dist,e=this.obstacles.some(n=>{const i=t-n.obj.position.z;return!n.hit&&i>12&&i<45&&Math.abs(n.obj.position.x-this.x)<n.r+n.hw+1.3});this.gap<11&&this.kickCd<=0?this.tip("kick","Raptor close! Press [SPACE] to kick debris in its face"):this.gap<11&&this.boost>.3?this.tip("boost","Raptor close! Hold [↑] to boost away"):this.braking&&this.gap<9?this.tip("brake","Careful! Braking with [↓] lets the raptor catch you",5):e?this.tip("dodge","Obstacle ahead! [◀] [▶] steer · double-tap to jink",7):this.boost<.12?this.tip("drift","Boost empty · hold [SHIFT] while steering to drift and recharge",14):this.dist>nn.start-160&&this.dist<nn.start-60&&this.tip("river","Gaji River ahead · water slows you down · weave past the hippos",30)}updateLegend(){const t=this.keys,e=this.ctx.input.axis();t.get("steer")?.classList.toggle("active",e.x!==0),t.get("boost")?.classList.toggle("active",this.boosting),t.get("brake")?.classList.toggle("active",this.braking),t.get("drift")?.classList.toggle("active",this.drifting),t.get("jink")?.classList.toggle("active",this.jinkT>0),t.get("jink")?.classList.toggle("cool",this.jinkCd>0&&this.jinkT<=0),t.get("kick")?.classList.toggle("cool",this.kickCd>0),t.get("kick")?.classList.toggle("active",this.kickCd<=0&&this.gap<tf)}update(t){const{input:e}=this.ctx;if(this.briefing){(e.pressed("action")||e.pressed("skip"))&&this.startChase(),this.raptor.update(t);return}this.t+=t,this.stateT+=t,this.invuln=Math.max(0,this.invuln-t),this.slow=Math.min(1,this.slow+t*.35);const n=Math.min(this.dist/Br,1);e.pressed("camera")&&(this.camMode=this.camMode==="chase"?"hood":"chase");const i=this.state==="intro"||this.state==="drive",s=e.axis(),o=i?Math.sign(s.x):0;this.jinkCd=Math.max(0,this.jinkCd-t),this.kickCd=Math.max(0,this.kickCd-t),this.jinkT=Math.max(0,this.jinkT-t),this.stumble=Math.max(0,this.stumble-t);const a=this.boosting;this.boosting=i&&s.y>0&&this.boost>.02,this.braking=i&&s.y<0,this.drifting=i&&e.isDown("drift")&&o!==0,this.boosting&&!a&&(this.ctx.audio.play("boost"),this.ctx.cinema.shake(.08,.3)),this.boost=De.clamp(this.boost+t*(this.boosting?-.4:wb)+(this.drifting&&Math.abs(this.vx)>6?t*Eb:0),0,1),i&&this.jinkCd<=0&&(e.pressed("jinkLeft")||e.pressed("jinkRight"))&&(this.jinkDir=e.pressed("jinkLeft")?-1:1,this.jinkT=Cb,this.jinkCd=Pb,this.ctx.audio.play("whoosh",.7)),this.state==="drive"&&this.kickCd<=0&&e.pressed("action")&&this.kickDebris();const l=this.dist>nn.start&&this.dist<nn.end;let c=De.lerp(24,34,De.smoothstep(n,0,1))*this.slow*(l?.6:1);this.boosting&&(c*=Qd),this.braking&&(c*=Tb),this.state==="caught"&&(c=0),this.state==="won"&&(c=9);const h=this.braking?3.5:this.boosting?2.2:1.4;if(this.speed+=(c-this.speed)*Math.min(1,t*(this.state==="caught"?3:h)),this.dist+=this.speed*t,this.jinkT>0)this.vx=this.jinkDir*Rb;else{const u=o*Sb*(this.drifting?Ab:1);this.vx+=(u-this.vx)*Math.min(1,t*(this.drifting?3:6))}switch(this.yawExtra+=((this.drifting?-o*.45:0)-this.yawExtra)*Math.min(1,t*6),this.drifting&&(this.skidIn-=t,this.skidIn<=0&&(this.skidIn=.32,this.ctx.audio.play("skid"))),this.x+=this.vx*t,Math.abs(this.x)>Gl&&(this.x=Math.sign(this.x)*Gl,this.vx=0),this.ctx.audio.setEngine(this.speed/(34*Qd)),this.updateJeep(t),this.updateSpawns(n),this.updateObstacles(t),this.updateRaptor(t),this.updateWorld(),this.dust.emitting=this.speed>4&&!l,this.spray.emitting=l&&this.speed>4,this.debris.update(t),this.dust.update(t),this.spray.update(t),this.motes.update(t),this.updateCamera(t),this.updateHud(n),this.updateRadio(n),this.updateTips(),this.updateLegend(),this.state){case"intro":this.stateT>4.2&&this.setState("drive");break;case"drive":this.stateT>7&&this.ctx.ui.hint(null),this.hits>=Vl?this.caught():this.dist>=Br&&this.won();break;case"caught":performance.now()-this.caughtAt>600&&(e.pressed("action")||e.pressed("skip"))&&(this.fails>=Hl?this.leave("coldOpen"):this.reset(!1));break;case"won":this.stateT>4.8&&this.leave("credits");break}}afterRender(t){if(this.state!=="intro"&&this.state!=="drive")return;const e=Math.min(320,window.innerWidth*.26),n=e/3.2,i=(window.innerWidth-e)/2,s=window.innerHeight-18-n,o=this.jeep.position;this.rearCam.aspect=e/n,this.rearCam.updateProjectionMatrix(),this.rearCam.position.set(o.x,2.1,o.z+2.4),this.rearCam.lookAt(o.x,1.3,o.z+30);const a=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1,t.setScissorTest(!0),t.setScissor(i,s,e,n),t.setViewport(i,s,e,n),t.render(this.scene,this.rearCam),t.setScissorTest(!1),t.setViewport(0,0,window.innerWidth,window.innerHeight),t.shadowMap.autoUpdate=a}exit(){for(const t of this.obstacles)this.scene.remove(t.obj,t.warn);vo(this.scene);for(const t of Object.values(this.templates))lm(t);this.warnGeo.dispose(),this.warnMat.dispose()}setState(t){this.state=t,this.stateT=0}leave(t){this.leaving||(this.leaving=!0,this.ctx.goTo(t))}reset(t){const{ui:e}=this.ctx;for(const n of this.obstacles)this.scene.remove(n.obj,n.warn);this.obstacles=[],this.dist=0,this.x=0,this.vx=0,this.speed=12,this.hits=0,this.invuln=0,this.slow=1,this.gap=42,this.nextSpawn=150,this.jeep.visible=!0,this.said.clear(),this.layoutDecor(),this.placeHippos(),this.camOffset.set(-4.6,1.3,-5.5),this.lookOffset.set(0,1.1,1),this.setState("intro"),this.hud.pips.forEach(n=>n.classList.remove("lost")),this.hud.tries.textContent=this.fails>0?`TRY ${this.fails+1}/${Hl}`:"",t||(e.clearTitle(),this.announce()),this.boost=1,this.kickCd=0,this.jinkCd=0,this.raptor.play("Run",.2)}hit(t){const{audio:e,cinema:n,ui:i}=this.ctx;this.hits++,this.invuln=1.4,this.slow=.5,this.gap-=6,t.hit=!0,e.play("impact"),n.shake(.35,.5),i.flash("#ff7a2a",.35,.4),t.kind==="elephant"||t.kind==="hippo"?(e.play("trumpet"),this.vx=Math.sign(this.x-t.obj.position.x||1)*12):t.kind!=="log"&&t.kind!=="mound"&&(t.fly=new P(Math.sign(t.obj.position.x-this.x||1)*6,7,-this.speed*.4)),this.hud.pips.forEach((s,o)=>s.classList.toggle("lost",o>=Vl-this.hits)),this.hits===2&&this.say("hold",{who:"Agent Ibis-5",lang:"Igbo",text:"Jide n’ike!",en:"Hold on tight!"})}kickDebris(){const{audio:t,ui:e}=this.ctx;this.kickCd=Ib,this.debris.burst(140),t.play("kick"),this.gap<tf&&(this.stumble=1.6,this.gap+=8,this.raptor.play("Jump",.1,.6,!0),t.play("roar",.6),e.flash("#c79a5a",.15,.3),this.say("kick",{who:"Agent Harmattan-2",lang:"Pidgin",text:"E don chop sand! Go go go!",en:"It got a face full of sand! Go, go, go!"}))}bite(){const{audio:t,cinema:e,ui:n}=this.ctx;this.hits++,this.invuln=1.4,this.gap+=9,this.raptor.play("Attack",.05,1.4,!0),this.jumping=.8,t.play("roar"),t.play("impact",.7),e.shake(.4,.5),n.flash("#ff2020",.35,.4),this.hud.pips.forEach((i,s)=>i.classList.toggle("lost",s>=Vl-this.hits))}caught(){const{audio:t,cinema:e,ui:n}=this.ctx;this.setState("caught"),this.caughtAt=performance.now(),this.fails++,this.raptor.play("Attack",.1),t.play("roar"),t.play("impact"),e.slowMo(.25,.8),e.shake(.4,1),n.flash("#ff2020",.5,.8),n.hint(null);const i=Hl-this.fails;i<=0?n.title("CAUGHT","Three times in a row · SPACE to start from the beginning",1/0,"danger"):n.title("CAUGHT",`SPACE to try again · ${i} ${i===1?"try":"tries"} left`,1/0,"danger")}won(){const{audio:t,cinema:e,ui:n}=this.ctx;this.setState("won"),this.fails=0,this.raptor.play("Walk",.5),t.play("success"),t.play("roar",.5),e.slowMo(.35,1.2),n.hint(null),n.title("ESCAPED","Sunrise over Yankari",3),n.routeMap(4,3)}say(t,e){this.said.has(t)||(this.said.add(t),this.ctx.ui.radio(e))}updateRadio(t){this.state!=="drive"&&this.state!=="intro"||(this.state==="intro"&&this.stateT>1&&this.say("behind",{who:"Agent Ibis-5",lang:"Yoruba",text:"Ó ń bọ̀ lẹ́yìn wa!",en:"It’s coming up behind us!"}),this.dist>nn.start-140&&this.say("river",{who:"Agent Ibis-5",lang:"Yoruba",text:"Odò Gaji níwájú. Ṣọ́ra fún erinmi!",en:"Gaji River ahead. Watch out for the hippos!"}),t>.9&&this.say("gate",{who:"Agent Harmattan-2",lang:"Pidgin",text:"Gate don near! No stop!",en:"The gate is close! Don’t stop!"}))}updateJeep(t){const e=this.jeep;e.position.set(this.x,Math.sin(this.t*13)*.02+Math.sin(this.t*7.3)*.015,-this.dist),e.rotation.y=-this.vx*.03+this.yawExtra,e.rotation.z=this.vx*.012*(this.drifting?1.6:1),e.rotation.x=this.braking?.04:this.boosting?-.03:0,this.brakeMat.emissiveIntensity=this.braking?4:.6;for(const n of this.wheels)n.rotation.x-=this.speed*t/.45;e.visible=this.camMode==="hood"||this.invuln<=0||Math.floor(this.invuln*12)%2===0,this.driver.update(t,0),this.passenger.update(t,0),this.passenger.root.rotation.y=Math.PI+Math.sin(this.t*.8)*.9}updateSpawns(t){if(!(this.state!=="drive"&&this.state!=="intro"))for(;this.dist+170>this.nextSpawn&&this.nextSpawn<Br-90;){const e=this.nextSpawn;(e<nn.start-25||e>nn.end+20)&&this.spawnRow(e,t),this.nextSpawn+=De.lerp(32,20,t)+Math.random()*8}}spawnRow(t,e){const n=-t,i=Math.random(),s=(t-this.dist)/Math.max(this.speed,20);if(e>.1&&i<.2){const a=Math.random()<.5?1:-1,l=-a*3*s+(Math.random()*4-2),c=2+Math.floor(Math.random()*2);for(let h=0;h<c;h++)this.addObstacle("elephant",l-a*h*5.5,n-h*2.5,a*3,h>0?.65:1);this.say("elephants",{who:"Agent Harmattan-2",lang:"Hausa",text:"Giwaye! Ka kauce!",en:"Elephants! Swerve!"});return}if(e>.2&&i<.36){const a=Math.random()<.5?1:-1,l=-a*6*s;for(let c=0;c<5;c++)this.addObstacle("baboon",l-a*c*1.6,n-Math.random()*3,a*6);this.say("baboons",{who:"Agent Ibis-5",lang:"Igbo",text:"Enwe! Ọtụtụ enwe!",en:"Monkeys! Lots of monkeys!"});return}if(e>.3&&i<.48){const a=Math.random()<.5?1:-1;this.addObstacle("antelope",-a*10*s+(Math.random()*3-1.5),n,a*10);return}if(i<.64){const a=Math.random()<.5?-1:1;this.addObstacle("log",a*(2+Math.random()*2.5),n,0);return}const o=(Math.random()*2-1)*6;if(this.addObstacle(Math.random()<.5?"rock":"mound",o,n,0),Math.random()<.35+e*.4){const a=4.6+Math.random()*2.5;this.addObstacle(Math.random()<.5?"rock":"mound",o>0?o-a:o+a,n-Math.random()*6,0)}}addObstacle(t,e,n,i,s=1){const o=this.templates[t].clone();o.position.set(e,0,n);let a=1,l=0;switch(t){case"rock":{const h=.8+Math.random()*.5;o.scale.setScalar(h),o.rotation.y=Math.random()*Math.PI*2,a=1.1*h;break}case"mound":a=.9;break;case"log":a=.6,l=3.4;break;case"elephant":o.scale.multiplyScalar(s),o.rotation.y=Math.sign(i)*(Math.PI/2),a=1.9*s;break;case"baboon":o.rotation.y=Math.sign(i)*(Math.PI/2),a=.45;break;case"antelope":o.rotation.y=Math.sign(i)*(Math.PI/2),a=.9;break;case"hippo":o.rotation.y=Math.random()*Math.PI*2,a=1.6;break}const c=new Q(this.warnGeo,this.warnMat);c.rotation.x=-Math.PI/2,c.scale.set((a+l)*1.3,(a+.3)*1.3,1),c.position.set(e,.12,n),c.visible=!1,this.scene.add(o,c),this.obstacles.push({kind:t,obj:o,r:a,hw:l,vx:i,hop:Math.random()*6,hit:!1,fly:null,warn:c})}placeHippos(){for(let t=0;t<4;t++){const e=-6+t*4+(Math.random()*2-1);this.addObstacle("hippo",e,-(nn.start+6+Math.random()*24),0)}}updateObstacles(t){const e=-this.dist,n=[];this.warnMat.opacity=.35+(.5+Math.sin(this.t*10)*.5)*.4;for(const i of this.obstacles){const s=i.obj.position;i.fly?(s.addScaledVector(i.fly,t),i.fly.y-=20*t,i.obj.rotation.x+=t*6,i.obj.rotation.z+=t*4):i.vx!==0?(s.x+=i.vx*t,i.hop+=t*(i.kind==="antelope"?7:i.kind==="baboon"?14:5),i.kind==="antelope"?s.y=Math.abs(Math.sin(i.hop))*1.4:i.kind==="baboon"?s.y=Math.abs(Math.sin(i.hop))*.25:i.obj.rotation.z=Math.sin(i.hop)*.03):i.kind==="hippo"&&(i.hop+=t,s.y=-.9+Math.sin(i.hop*1.3)*.12);const o=e-s.z;if(i.warn.visible=!i.hit&&o>4&&o<bb&&Math.abs(s.x)<Gl+3,i.warn.position.x=s.x,!i.hit&&this.invuln<=0&&this.jinkT<=0&&(this.state==="drive"||this.state==="intro")&&s.y<1.2){const c=De.clamp(this.x,s.x-i.hw,s.x+i.hw)-this.x,h=s.z-e,u=De.clamp(c,-$d,$d),f=De.clamp(h,-Jd,Jd);(c-u)**2+(h-f)**2<i.r*i.r&&this.hit(i)}s.z>e+14||Math.abs(s.x)>60||s.y<-6?this.scene.remove(i.obj,i.warn):n.push(i)}this.obstacles=n}updateRaptor(t){let e=20-this.hits*5+Math.sin(this.t*.7)*2,n=.35;this.state==="intro"&&(e=24),this.state==="caught"&&(e=5.5,n=3),this.state==="won"&&(e=70);const i=this.gap;if(this.gap+=(e-this.gap)*Math.min(1,t*n),this.state==="drive"){const o=De.lerp(24,34,De.smoothstep(this.dist/Br,0,1)),a=this.stumble>0?o*.5:o*1.02;this.gap=De.clamp(this.gap+(this.speed-a)*t*.7,2,60),this.gap<=Lb&&this.invuln<=0&&this.bite()}const s=this.raptor;s.root.position.x+=(this.x-s.root.position.x)*Math.min(1,t*1.5),s.root.position.z=-this.dist+this.gap,this.state==="won"?s.root.rotation.y+=(0-s.root.rotation.y)*Math.min(1,t*2):s.root.rotation.y=Math.PI,this.jumping=Math.max(0,this.jumping-t),this.state==="drive"&&this.stumble>0||(this.state==="drive"&&i-this.gap>.04&&this.gap<14&&this.jumping<=0?(s.play("Jump",.1,1.2,!0),this.jumping=1.1):this.state==="drive"&&this.jumping<=0&&s.play("Run",.2,De.clamp(this.speed/26,.8,1.5))),s.update(t),this.roarIn-=t,this.roarIn<=0&&this.state==="drive"&&(this.roarIn=6+Math.random()*5,this.ctx.audio.play("roar",De.clamp(1.4-this.gap/30,.3,1)))}updateWorld(){const t=-this.dist,e=Math.round(t/Zd)*Zd;this.ground.position.z=e,this.road.position.z=e,this.grass.position.z=Math.floor(t/ea)*ea,this.hills.position.z=t,this.sky.position.copy(this.ctx.camera.position),this.sun.position.copy(this.jeep.position).addScaledVector(ef,80),this.sun.target.position.copy(this.jeep.position);for(const n of this.decor)n.position.z>t+25&&(n.position.z-=360),n.visible=!(-n.position.z>nn.start-4&&-n.position.z<nn.end+4)}updateCamera(t){const e=this.ctx.camera,n=this.jeep.position,i=this.camMode==="hood";this.state==="drive"||this.state==="intro"&&this.stateT>=2.9?i?(this.camGoal.set(-.45,2.05,-.2),this.lookGoal.set(-this.x*.05,1.4,-30)):(this.camGoal.set(-this.x*.25,4.1,9.2),this.lookGoal.set(-this.x*.15,.8,-24)):this.state==="intro"?(this.camGoal.set(-4.6,1.3,-5.5),this.lookGoal.set(0,1.1,1)):this.state==="caught"?(this.camGoal.set(3.4,2.4,-4.5),this.lookGoal.set(0,1.6,4)):(this.camGoal.set(5.2,1.6,-2.5),this.lookGoal.set(0,1.2,.5));const o=this.state==="drive"&&i?1:1-Math.exp(-t*(this.state==="drive"?6:2.2));this.camOffset.lerp(this.camGoal,o),this.lookOffset.lerp(this.lookGoal,o),e.position.copy(n).add(this.camOffset),this.tmp.copy(n).add(this.lookOffset),e.lookAt(this.tmp),e.rotateZ(-this.vx*(i?.01:.005));const a=this.state==="drive"?(i?70:56)+this.speed/34*10+(this.boosting?6:0):50;Math.abs(e.fov-a)>.05&&(e.fov+=(a-e.fov)*Math.min(1,t*3),e.updateProjectionMatrix())}updateHud(t){const e=`${(t*100).toFixed(1)}%`;this.hud.fill.style.width=e,this.hud.me.style.left=e,this.hud.rear.style.display=this.state==="intro"||this.state==="drive"?"block":"none",this.hud.boostFill.style.width=`${(this.boost*100).toFixed(0)}%`,this.hud.boostFill.classList.toggle("on",this.boosting),this.hud.kick.textContent=this.kickCd>0?`DEBRIS ${this.kickCd.toFixed(1)}s`:"DEBRIS READY · SPACE",this.hud.kick.classList.toggle("ready",this.kickCd<=0);const n=Math.max(0,Math.round(this.gap));n!==this.lastThreat&&(this.lastThreat=n,this.hud.threat.textContent=`RAPTOR ${n} M`,this.hud.threat.classList.toggle("close",n<12))}buildWorld(){const t=this.scene,e=ka(606);this.sky=new Q(new ys(450,32,16),new Be({vertexShader:Db,fragmentShader:Nb,uniforms:{top:{value:new at("#5d7fb8")},horizon:{value:new at("#f3c39a")},bottom:{value:new at("#c99a74")},sunColor:{value:new at("#fff0c8")},sunDir:{value:ef}},side:Ve,depthWrite:!1,fog:!1})),this.sky.renderOrder=-1,t.add(this.sky),t.add(new go("#ffe2c4","#6b5a3a",1.3)),this.sun=new Eh("#ffd3a3",2.4),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const n=this.sun.shadow.camera;n.left=n.bottom=-30,n.right=n.top=30,n.near=1,n.far=180,this.sun.shadow.bias=-4e-4,t.add(this.sun,this.sun.target);const i=Re(256,256,(d,p,_)=>{d.fillStyle="#a08a50",d.fillRect(0,0,p,_);for(let m=0;m<2600;m++){const g=e();d.fillStyle=g<.4?"rgba(120,110,50,0.6)":g<.7?"rgba(190,160,95,0.5)":"rgba(80,70,35,0.5)",d.fillRect(e()*p,e()*_,1+e()*3,1+e()*6)}},{repeat:[70,70]});this.ground=new Q(new Ne(700,700),new _t({map:i,roughness:1})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,t.add(this.ground);const s=Re(128,256,(d,p,_)=>{const m=d.createLinearGradient(0,0,p,0);m.addColorStop(0,"rgba(155,107,68,0)"),m.addColorStop(.15,"rgba(155,107,68,1)"),m.addColorStop(.85,"rgba(155,107,68,1)"),m.addColorStop(1,"rgba(155,107,68,0)"),d.fillStyle=m,d.fillRect(0,0,p,_),d.fillStyle="rgba(95,62,38,0.55)",d.fillRect(p*.3,0,7,_),d.fillRect(p*.64,0,7,_);for(let g=0;g<500;g++)d.fillStyle=e()>.5?"rgba(190,140,95,0.5)":"rgba(90,60,35,0.4)",d.fillRect(p*.12+e()*p*.76,e()*_,2,2)},{repeat:[1,70]});this.road=new Q(new Ne(17,700),new _t({map:s,roughness:1,transparent:!0,depthWrite:!1})),this.road.rotation.x=-Math.PI/2,this.road.position.y=.03,this.road.receiveShadow=!0,t.add(this.road);const o=110,a=9,l=[];for(let d=0;d<o;d++){const p=e()<.5?-1:1;l.push([p*(9.5+e()*55),-e()*ea,.4+e()*.7])}this.grass=new vh(new hs(.3,.9,5).translate(0,.45,0),new _t({color:"#ffffff",roughness:1}),o*a);const c=new Lt,h=new at;for(let d=0;d<a;d++)l.forEach(([p,_,m],g)=>{c.makeScale(m*1.4,m,m*1.4).setPosition(p,0,_-(d-1)*ea),this.grass.setMatrixAt(d*o+g,c),this.grass.setColorAt(d*o+g,h.set(g%3===0?"#9c9440":g%3===1?"#c2a35a":"#b19a4c"))});this.grass.frustumCulled=!1,t.add(this.grass),this.hills=new pe;const u=new _t({color:"#9a6a52",roughness:1,flatShading:!0});for(let d=0;d<12;d++){const p=new Q(new hs(30+e()*50,10+e()*18,7),u),_=d%2?1:-1;p.position.set(_*(70+e()*160),0,-250-e()*120),p.scale.z=.6,this.hills.add(p)}const f=new Q(new oe(55,95,38,9),new _t({color:"#8b5a45",roughness:1,flatShading:!0}));f.position.set(35,19,-360),f.scale.z=.5,this.hills.add(f),t.add(this.hills)}buildRiver(){const t=nn.end-nn.start,e=Re(128,128,(l,c,h)=>{l.fillStyle="#3f8f8a",l.fillRect(0,0,c,h),l.strokeStyle="rgba(220,255,250,0.35)";for(let u=0;u<26;u++){l.lineWidth=1+Math.random()*2,l.beginPath();const f=Math.random()*h;l.moveTo(0,f),l.bezierCurveTo(c*.3,f+6,c*.6,f-6,c,f),l.stroke()}},{repeat:[40,4]}),n=new Q(new Ne(400,t),new _t({map:e,roughness:.15,metalness:.3,transparent:!0,opacity:.92}));n.rotation.x=-Math.PI/2,n.position.set(0,.08,-1168),n.receiveShadow=!0,this.scene.add(n);const i=new _t({color:"#6e5233",roughness:1});for(const l of[nn.start,nn.end]){const c=new Q(new Ne(400,4),i);c.rotation.x=-Math.PI/2,c.position.set(0,.05,-l),this.scene.add(c)}const s=Re(512,128,(l,c,h)=>{l.fillStyle="#4a3220",l.fillRect(0,0,c,h),l.fillStyle="#f2dfb8",l.font="70px 'Bebas Neue', Impact, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("GAJI RIVER",c/2,h/2+4)}),o=new Q(new Ne(4,1),new _t({map:s,side:qe}));o.position.set(-9.5,2.4,-1138),o.rotation.y=.3;const a=new Q(new oe(.1,.1,2.4,6),new _t({color:"#4a3220"}));a.position.set(-9.5,1.2,-1138),this.scene.add(o,a)}async buildTemplates(){const t=new _t({color:"#7d6a5a",roughness:.95,flatShading:!0}),e=new _t({color:"#a3593a",roughness:1,flatShading:!0}),n=new _t({color:"#7a6a58",roughness:1,flatShading:!0}),i=(d,p,_,m,g,x)=>{const y=new Q(d,p);return y.position.set(m,g,x),y.castShadow=!0,y.receiveShadow=!0,_.add(y),y},s=new pe;i(new ro(1,0),t,s,0,.5,0).scale.set(1,.75,1.1),i(new ro(.5,0),t,s,.7,.25,.4);const o=new pe;i(new hs(.9,3.2,7),e,o,0,1.6,0),i(new hs(.45,1.8,6),e,o,.5,.9,.2),i(new hs(.35,1.3,6),e,o,-.45,.65,-.1);const a=new pe;i(new oe(.55,.75,6.8,9),n,a,0,.6,0).rotation.z=Math.PI/2,i(new oe(.2,.3,1.6,6),n,a,2.2,1.2,.2).rotation.z=-.5,i(new oe(.15,.25,1.2,6),n,a,-1.5,1.1,-.2).rotation.z=.6;const l=[[zi.elephant,5.2],[zi.baboon,1.1],[zi.antelope,2.2],[zi.hippo,3.8]],[c,h,u,f]=await Promise.all(l.map(async([d,p])=>{const{scene:_}=await Oa(d),m=new pe;m.add(_),Fa(m,p);const g=new pe;return g.add(m),g}));this.templates={rock:s,mound:o,log:a,elephant:c,baboon:h,antelope:u,hippo:f},this.warnGeo=new Pa(.82,1,32),this.warnMat=new ke({color:"#ff3b1f",transparent:!0,opacity:.6,depthWrite:!1})}buildDecor(){const t=new _t({color:"#4a3826",roughness:1}),e=new _t({color:"#4f5a2a",roughness:1,flatShading:!0}),n=new _t({color:"#8a7766",roughness:1,flatShading:!0}),i=(l,c,h,u,f)=>{const d=new Q(l,c);return d.position.set(h,u,f),d.castShadow=!0,d},s=new pe,o=i(new ys(1,12,6),e,0,3.25,0);o.scale.set(2.4,.42,2),s.add(i(new oe(.12,.2,2.6,6),t,0,1.3,0),o);const a=new pe;a.add(i(new oe(.9,1.4,4.5,9),n,0,2.25,0));for(let l=0;l<5;l++){const c=l/5*Math.PI*2,h=i(new oe(.1,.3,1.8,5),n,Math.cos(c)*.7,5,Math.sin(c)*.7);h.rotation.set(Math.sin(c)*.6,0,-Math.cos(c)*.6),a.add(h)}for(let l=0;l<48;l++){const c=l%6,h=c===0?a.clone():c===1?this.templates.mound.clone():s.clone();h.scale.setScalar(c===0?1.4+Math.random()*.8:1.1+Math.random()*1.1),h.rotation.y=Math.random()*Math.PI*2,this.scene.add(h),this.decor.push(h)}for(let l=0;l<6;l++){const c=(l%2?this.templates.antelope:this.templates.elephant).clone();c.rotation.y=Math.random()*Math.PI*2,this.scene.add(c),this.decor.push(c)}}layoutDecor(){this.decor.forEach((t,e)=>{const n=e%2?1:-1;t.position.set(n*(14+Math.random()*60),0,20-Math.random()*360)})}async buildJeep(){const{style:t,user:e}=this.ctx,n=new pe;this.jeep=n;const i=new _t({color:"#b08d57",roughness:.7,metalness:.2}),s=new _t({color:"#1e1e1e",roughness:.8}),o=new _t({color:"#8d9299",metalness:.8,roughness:.35}),a=new _t({color:t.accentColor,emissive:t.accentColor,emissiveIntensity:.4,roughness:.5}),l=new _t({color:"#fff3d0",emissive:"#fff3d0",emissiveIntensity:3}),c=(p,_,m,g,x,y=n)=>{const v=new Q(p,_);return v.position.set(m,g,x),v.castShadow=!0,v.receiveShadow=!0,y.add(v),v};c(new Kt(2,.55,3.9),i,0,.85,0),c(new Kt(1.9,.35,1.3),i,0,1.25,-1.25),c(new Kt(1.6,.45,.08),s,0,1,-1.97);for(const p of[-1,1])c(new oe(.13,.13,.06,14),l,p*.65,1.15,-1.99).rotation.x=Math.PI/2,c(new Kt(.02,.1,3.6),a,p*1.005,1.02,0);c(new Kt(2.1,.18,.2),s,0,.62,-2),c(new Kt(2.1,.18,.2),s,0,.62,2),this.brakeMat=new _t({color:"#400",emissive:"#ff1a1a",emissiveIntensity:.6});for(const p of[-1,1])c(new Kt(.28,.14,.04),this.brakeMat,p*.78,.95,1.97);for(const p of[-.45,.45])c(new Kt(.55,.5,.5),s,p,1.25,.25);c(new Kt(1.7,.45,.5),s,0,1.25,1.35);for(const[p,_]of[[-1,-1.3],[1,-1.3],[-1,1.3],[1,1.3]]){const m=new pe;m.position.set(p,.45,_),n.add(m),c(new oe(.45,.45,.36,18),s,0,0,0,m).rotation.z=Math.PI/2,c(new Kt(.38,.5,.1),o,0,0,0,m),c(new Kt(.34,.1,1),s,p,1,_),this.wheels.push(m)}c(new fs(.92,.05,8,24,Math.PI),o,0,1.12,.65).scale.y=1.05,c(new Kt(1.9,.06,.06),o,0,1.95,-.55);for(const p of[-1,1])c(new Kt(.06,.6,.06),o,p*.93,1.65,-.55);const h=new Q(new Ne(1.8,.55),new _t({color:"#9fc6d6",transparent:!0,opacity:.18,roughness:.05,metalness:.5,side:qe}));h.position.set(0,1.65,-.55),n.add(h),c(new fs(.36,.13,8,18),s,0,1.58,2.08),c(new fs(.17,.03,6,16),s,-.45,1.72,-.3).rotation.x=-1;const u=Re(1024,200,(p,_,m)=>{const g=`@${e.username}`.toUpperCase();let x=150;for(p.font=`${x}px 'Bebas Neue', Impact, sans-serif`;p.measureText(g).width>_*.9&&x>40;)x-=6,p.font=`${x}px 'Bebas Neue', Impact, sans-serif`;p.textAlign="center",p.textBaseline="middle",p.lineJoin="round",p.lineWidth=12,p.strokeStyle="rgba(25,18,10,0.9)",p.strokeText(g,_/2,m/2+8),p.fillStyle=t.accentColor,p.fillText(g,_/2,m/2+8)}),f=new _t({map:u,transparent:!0,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2});for(const p of[-1,1]){const _=new Q(new Ne(2.6,.5),f);_.position.set(p*1.012,.82,.1),_.rotation.y=p*(Math.PI/2),n.add(_)}const d=new Q(new Ne(1.8,.35),f);d.position.set(0,.86,1.955),n.add(d),[this.driver,this.passenger]=await Promise.all([Si.create(t),Si.create(La[1])]),this.driver.sit(),this.driver.root.position.set(-.45,.58,.25),this.driver.root.rotation.y=Math.PI,this.passenger.sit(),this.passenger.root.position.set(.45,.58,.25),this.passenger.root.rotation.y=Math.PI,n.add(this.driver.root,this.passenger.root),this.scene.add(n)}buildGate(){const t=new _t({color:"#5a3d24",roughness:.9}),e=new pe;e.position.z=-Br;for(const s of[-1,1]){const o=new Q(new oe(.35,.4,7,10),t);o.position.set(s*8,3.5,0),o.castShadow=!0,e.add(o)}const n=Re(1024,200,(s,o,a)=>{s.fillStyle="#4a3220",s.fillRect(0,0,o,a),s.strokeStyle="#2e1f13",s.lineWidth=10,s.strokeRect(5,5,o-10,a-10),s.fillStyle="#f2dfb8",s.textAlign="center",s.textBaseline="middle",s.font="92px 'Bebas Neue', Impact, sans-serif",s.fillText("YANKARI GAME RESERVE",o/2,a*.42),s.font="40px 'Bebas Neue', Impact, sans-serif",s.fillText("MAIN GATE · BAUCHI STATE",o/2,a*.8)}),i=new Q(new Kt(17,2,.3),[t,t,t,t,new _t({map:n}),t]);i.position.y=6.2,i.castShadow=!0,e.add(i),this.scene.add(e)}buildParticles(){this.dust=new Xn({count:120,size:1.2,color:"#d9b98c",opacity:.2,life:[.6,1.3],grow:2,drag:1.2,spawn:(t,e)=>{const n=this.jeep.position;t.set(n.x+(Math.random()<.5?-1:1)*.95,.25,n.z+1.4),e.set((Math.random()-.5)*2,.6+Math.random(),-this.speed*.6+3+Math.random()*3)}}),this.spray=new Xn({count:160,size:.35,color:"#e8fbff",opacity:.8,additive:!0,emitting:!1,life:[.5,1],gravity:9,spawn:(t,e)=>{const n=this.jeep.position;t.set(n.x+(Math.random()-.5)*2.4,.3,n.z-1.5+Math.random()*3),e.set((Math.random()-.5)*6,2+Math.random()*3,-this.speed*.7)}}),this.motes=new Xn({count:90,size:.12,color:"#fff1d6",additive:!0,opacity:.8,life:[1.5,2.5],spawn:t=>{const e=this.jeep.position;t.set(e.x+(Math.random()-.5)*30,.3+Math.random()*4,e.z-15-Math.random()*45)}}),this.debris=new Xn({count:160,size:.28,color:"#8a6a45",opacity:.95,emitting:!1,life:[.6,1.1],gravity:14,spawn:(t,e)=>{const n=this.jeep.position;t.set(n.x+(Math.random()-.5)*2,.4,n.z+2),e.set((Math.random()-.5)*8,3+Math.random()*5,14+Math.random()*14)}}),this.scene.add(this.dust.points,this.spray.points,this.motes.points,this.debris.points)}buildHud(){const t=this.ctx.ui.hud(),e=nt("div","hull",t);nt("span","",e,"HULL");const n=[nt("i","",e),nt("i","",e),nt("i","",e)],i=nt("span","tries",e),s=nt("div","boost",t);nt("span","",s,"BOOST");const o=nt("i","",nt("div","gauge",s)),a=nt("div","kick",t,"DEBRIS READY"),l=nt("div","rear",t);nt("span","",l,"REAR CAM");const c=nt("div","threat",t,"RAPTOR"),h=nt("div","track",t),u=nt("div","fill",h);nt("div","gate",h,"GATE"),nt("div","river",h,"GAJI");const f=nt("div","me",h);this.hud={pips:n,fill:u,me:f,threat:c,rear:l,tries:i,boostFill:o,kick:a}}}const Ob=`# Credits

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
`;function Fb(r){return r.split(`
`).filter(t=>t.startsWith("|")&&!/^\|\s*-/.test(t)&&!/^\|\s*Asset\s*\|/i.test(t)).map(t=>t.split("|").map(e=>e.trim()).filter(Boolean)).filter(t=>t.length>=4).map(([t,e,,n])=>`${t} — ${e} (${n})`)}class kb{constructor(){this.scene=new qi,this.roll=null,this.t=0,this.leaving=!1}async enter(t){this.ctx=t;const e=this.scene;e.background=new at("#05070a"),t.camera.fov=35,t.camera.updateProjectionMatrix(),t.bloom.strength=.45,t.bloom.threshold=.85,e.environment=t.envMap,e.environmentIntensity=.4,t.grade.set({vignette:.6,contrast:1.1});const n=new Q(new _i(12,48),new _t({color:"#0d1014",roughness:.5,metalness:.4}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0;const i=new Q(new oe(1.1,1.2,.2,48),new _t({color:"#1b2027",metalness:.7,roughness:.3}));i.position.y=.1,i.receiveShadow=!0,e.add(n,i),e.add(new go("#3a4a66","#050505",.4));const s=new Zs("#fff4e0",120,14,.45,.5,1.5);s.position.set(1.5,7,3),s.target.position.set(0,1,0),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),e.add(s,s.target);const o=new Ms(t.style.accentColor,7,8,2);o.position.set(-1.5,2.2,-2),e.add(o),this.player=await Si.create(t.style),this.player.root.position.y=.2,e.add(this.player.root),this.motes=new Xn({count:80,size:.06,color:"#ffe8c0",additive:!0,life:[4,8],spawn:(a,l)=>{a.set((Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6),l.set((Math.random()-.5)*.1,.05+Math.random()*.1,(Math.random()-.5)*.1)}}),e.add(this.motes.points),t.camera.position.set(-1.4,1.5,5.2),t.camera.lookAt(1.2,1.15,0),this.buildRoll(),t.audio.startLoop("credits")}update(t){this.t+=t,this.player.root.rotation.y+=t*.35,this.player.update(t,0),this.motes.update(t),this.ctx.input.pressed("action")&&this.replay()}exit(){this.roll?.kill(),vo(this.scene)}replay(){this.leaving||(this.leaving=!0,this.ctx.goTo("coldOpen"))}buildRoll(){const{user:t,style:e,input:n}=this.ctx,i=this.ctx.ui.hud(),s=nt("div","credits",i),o=nt("div","roll",s),a=(c,h)=>nt("div",c,o,h);nt("h2","",o,"VAULT OF YANKARI"),a("role","Starring"),a("star",t.displayName||t.username),a("name",`as ${e.codename}`),a("small",`@${t.username}`),a("role","The crew");for(const c of La)a("name",c.codename);a("role","Introducing"),a("name","Specimen 0-YK"),a("role","A start.ng game"),a("name","HNG15 · Lesson 8"),a("role","Built with"),a("name","three.js · GSAP · Vite · TypeScript"),a("role","Assets");for(const c of Fb(Ob))a("small",c);a("small","Jeep, environments, music and sound generated in code"),a("role","Location"),a("name","Yankari Game Reserve"),a("small","Wikki Warm Spring · Gaji River · Kalban Hill · Bauchi State, Nigeria"),a("role",""),a("name",`Thanks for playing, ${t.displayName||t.username}.`),this.roll=ce.fromTo(o,{y:window.innerHeight*.9},{y:()=>-o.offsetHeight+window.innerHeight*.35,duration:32,ease:"none"}),nt("button","btn replay",i,"REPLAY ↻").addEventListener("click",()=>n.trigger("action")),this.ctx.ui.hint("SPACE to play again")}}const Wl=Math.min(window.devicePixelRatio,1.5),sf={coldOpen:()=>new fb,vault:()=>new yb,twist:()=>new Mb,escape:()=>new Ub,credits:()=>new kb};async function Bb(){const r=await OM(),t=WM(r);document.documentElement.style.setProperty("--accent",t.accentColor);const e=document.createElement("canvas");e.id="game",document.body.prepend(e);const n=new Sy({canvas:e,antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Wl),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=of,n.toneMapping=eh;const i=new Xe(50,window.innerWidth/window.innerHeight,.1,500),s=new En(window.innerWidth,window.innerHeight,{type:qn,samples:4}),o=new TM(n,s);o.setPixelRatio(Wl);const a=new wM(new qi,i),l=new pr(new ot(window.innerWidth,window.innerHeight),.55,.5,.82);o.addPass(a),o.addPass(l),o.addPass(new RM);const c=new IM;o.addPass(c);const h=new Pc(n),u=h.fromScene(new CM,.04).texture;h.dispose();const f=new KM,d=new $M,p=new eb(f),_=new u1(i,p);r.isGuest&&p.notice("Playing as guest");let m=null;const g={renderer:n,camera:i,cinema:_,input:f,audio:d,ui:p,user:r,style:t,bloom:l,grade:c,envMap:u,goTo:I=>void m?.goTo(I)};m=new d1(g,sf,a);const x=()=>{const I=window.innerWidth,O=window.innerHeight;i.aspect=I/O,i.updateProjectionMatrix(),n.setSize(I,O),o.setSize(I,O),om.value=O*Wl/2};window.addEventListener("resize",x),x(),document.addEventListener("visibilitychange",()=>d.setSuspended(document.hidden)),window.addEventListener("pagehide",()=>d.shutdown());const y=()=>d.unlock();window.addEventListener("pointerdown",y,{once:!0}),window.addEventListener("keydown",y,{once:!0});const v=new URLSearchParams(window.location.search).get("scene"),A=v&&v in sf?v:"coldOpen",T=nt("div","start",p.root);nt("h1","",T,"VAULT OF YANKARI"),nt("div","tag",T,"Yankari Game Reserve · 2049");const E=nt("div","who",T,"Playing as ");r.isGuest?(nt("b","",E,"Guest"),nt("div","tag",T,"Sign in on start.ng to play as yourself")):(nt("b","",E,`@${r.username}`),E.append(` · ${t.codename}`)),nt("div","go",T,"CLICK OR PRESS ENTER"),nt("div","keys",T,"WASD / ARROWS move · SPACE action · ESC skip · M mute");let R=!1;const M=()=>{R||(R=!0,T.remove(),d.unlock(),m?.goTo(A))};T.addEventListener("click",M),v&&M();const S=new tp;n.setAnimationLoop(()=>{const I=Math.min(S.getDelta(),.05);f.pressed("mute")&&p.setMuted(d.toggleMute()),!R&&(f.pressed("skip")||f.pressed("action"))&&M(),m?.update(I*_.timeScale),c.tick(I,_.shakeLevel),_.beginFrame(I),o.render(),m?.afterRender(n),_.endFrame(),f.endFrame()})}Bb();
