(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const ka="180",eu=0,gc=1,nu=2,Xl=1,ql=2,Gn=3,ci=0,Je=1,Ae=2,ri=0,es=1,_c=2,vc=3,xc=4,iu=5,wi=100,su=101,ou=102,ru=103,au=104,cu=200,lu=201,hu=202,uu=203,Xr=204,qr=205,du=206,fu=207,pu=208,mu=209,gu=210,_u=211,vu=212,xu=213,Mu=214,Zr=0,Yr=1,$r=2,is=3,Kr=4,Jr=5,jr=6,Qr=7,Zl=0,yu=1,Su=2,ai=0,wu=1,Eu=2,bu=3,Yl=4,Tu=5,Au=6,Ru=7,$l=300,ss=301,os=302,ta=303,ea=304,Wo=306,Cs=1e3,Ti=1001,na=1002,on=1003,Cu=1004,Zs=1005,Rn=1006,tr=1007,Ai=1008,Ln=1009,Kl=1010,Jl=1011,Ps=1012,Va=1013,Pi=1014,Cn=1015,ks=1016,Ha=1017,Ga=1018,Ds=1020,jl=35902,Ql=35899,th=1021,eh=1022,xn=1023,Ls=1026,Is=1027,Wa=1028,Xa=1029,nh=1030,qa=1031,Za=1033,bo=33776,To=33777,Ao=33778,Ro=33779,ia=35840,sa=35841,oa=35842,ra=35843,aa=36196,ca=37492,la=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,_a=37815,va=37816,xa=37817,Ma=37818,ya=37819,Sa=37820,wa=37821,Ea=36492,ba=36494,Ta=36495,Aa=36283,Ra=36284,Ca=36285,Pa=36286,Pu=3200,Du=3201,ih=0,Lu=1,oi="",Ce="srgb",rs="srgb-linear",Lo="linear",pe="srgb",Fi=7680,Mc=519,Iu=512,Uu=513,Nu=514,sh=515,Fu=516,Ou=517,Bu=518,zu=519,yc=35044,Sc="300 es",Pn=2e3,Io=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wc=1234567;const Es=Math.PI/180,as=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function Ya(i,t){return(i%t+t)%t}function ku(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Vu(i,t,e){return i!==t?(e-i)/(t-i):0}function bs(i,t,e){return(1-e)*i+e*t}function Hu(i,t,e,n){return bs(i,t,1-Math.exp(-e*n))}function Gu(i,t=1){return t-Math.abs(Ya(i,t*2)-t)}function Wu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Xu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zu(i,t){return i+Math.random()*(t-i)}function Yu(i){return i*(.5-Math.random())}function $u(i){i!==void 0&&(wc=i);let t=wc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ku(i){return i*Es}function Ju(i){return i*as}function ju(i){return(i&i-1)===0&&i!==0}function Qu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function td(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ed(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),d=r((t-n)/2),p=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Re={DEG2RAD:Es,RAD2DEG:as,generateUUID:Ii,clamp:Jt,euclideanModulo:Ya,mapLinear:ku,inverseLerp:Vu,lerp:bs,damp:Hu,pingpong:Gu,smoothstep:Wu,smootherstep:Xu,randInt:qu,randFloat:Zu,randFloatSpread:Yu,seededRandom:$u,degToRad:Ku,radToDeg:Ju,isPowerOfTwo:ju,ceilPowerOfTwo:Qu,floorPowerOfTwo:td,setQuaternionFromProperEuler:ed,normalize:We,denormalize:ji};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=o[r+0],p=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*x,M=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const w=Math.sqrt(_),y=Math.atan2(w,f*M);m=Math.sin(m*y)/w,a=Math.sin(a*y)/w}const v=a*M;if(c=c*m+d*v,l=l*m+p*v,h=h*m+g*v,u=u*m+x*v,m===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=o[r],d=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(o/2),d=c(n/2),p=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return er.copy(this).projectOnVector(t),this.sub(er)}reflect(t){return this.sub(er.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const er=new P,Ec=new Xn;class $t{constructor(t,e,n,s,o,r,a,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],M=s[1],_=s[4],v=s[7],w=s[2],y=s[5],A=s[8];return o[0]=r*x+a*M+c*w,o[3]=r*m+a*_+c*y,o[6]=r*f+a*v+c*A,o[1]=l*x+h*M+u*w,o[4]=l*m+h*_+u*y,o[7]=l*f+h*v+u*A,o[2]=d*x+p*M+g*w,o[5]=d*m+p*_+g*y,o[8]=d*f+p*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,p=l*o-r*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*r)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*o-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(nr.makeScale(t,e)),this}rotate(t){return this.premultiply(nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new $t;function oh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nd(){const i=Uo("canvas");return i.style.display="block",i}const bc={};function Us(i){i in bc||(bc[i]=!0,console.warn(i))}function id(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}const Tc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sd(){const i={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===pe&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Lo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Us("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Us("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rs]:{primaries:t,whitePoint:n,transfer:Lo,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}const ce=sd();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class od{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=Uo("canvas")),Oi.width=t.width,Oi.height=t.height;const s=Oi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Uo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Wn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rd=0;class $a{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ir(s[r].image)):o.push(ir(s[r]))}else o=ir(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?od.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ad=0;const sr=new P;class He extends us{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Ti,s=Ti,o=Rn,r=Ai,a=xn,c=Ln,l=He.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Ii(),this.name="",this.source=new $a(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sr).x}get height(){return this.source.getSize(sr).y}get depth(){return this.source.getSize(sr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cs:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cs:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=$l;He.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,v=(p+1)/2,w=(f+1)/2,y=(h+d)/4,A=(u+x)/4,R=(g+m)/4;return _>v&&_>w?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=y/n,o=A/n):v>w?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=y/s,o=R/s):w<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(w),n=A/o,s=R/o),this.set(n,s,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cd extends us{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:n.depth},o=new He(s);this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new $a(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends cd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rh extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ld extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,pn):pn.fromBufferAttribute(o,r),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),$s.subVectors(this.max,ms),Bi.subVectors(t.a,ms),zi.subVectors(t.b,ms),ki.subVectors(t.c,ms),Zn.subVectors(zi,Bi),Yn.subVectors(ki,zi),di.subVectors(Bi,ki);let e=[0,-Zn.z,Zn.y,0,-Yn.z,Yn.y,0,-di.z,di.y,Zn.z,0,-Zn.x,Yn.z,0,-Yn.x,di.z,0,-di.x,-Zn.y,Zn.x,0,-Yn.y,Yn.x,0,-di.y,di.x,0];return!or(e,Bi,zi,ki,$s)||(e=[1,0,0,0,1,0,0,0,1],!or(e,Bi,zi,ki,$s))?!1:(Ks.crossVectors(Zn,Yn),e=[Ks.x,Ks.y,Ks.z],or(e,Bi,zi,ki,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fn=[new P,new P,new P,new P,new P,new P,new P,new P],pn=new P,Ys=new Ui,Bi=new P,zi=new P,ki=new P,Zn=new P,Yn=new P,di=new P,ms=new P,$s=new P,Ks=new P,fi=new P;function or(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){fi.fromArray(i,o);const a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),c=t.dot(fi),l=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const hd=new Ui,gs=new P,rr=new P;class Vs{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):hd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(rr)),this.expandByPoint(gs.copy(t.center).sub(rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const On=new P,ar=new P,Js=new P,$n=new P,cr=new P,js=new P,lr=new P;class ud{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ar.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(ar);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Js),a=$n.dot(this.direction),c=-$n.dot(Js),l=$n.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*c-a,d=r*a-c,g=o*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),p=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ar).addScaledVector(Js,d),p}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,o){cr.subVectors(e,t),js.subVectors(n,t),lr.crossVectors(cr,js);let r=this.direction.dot(lr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;$n.subVectors(this.origin,t);const c=a*this.direction.dot(js.crossVectors($n,js));if(c<0)return null;const l=a*this.direction.dot(cr.cross($n));if(l<0||c+l>r)return null;const h=-a*$n.dot(lr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,s,o,r,a,c,l,h,u,d,p,g,x,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,u,d,p,g,x,m)}set(t,e,n,s,o,r,a,c,l,h,u,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=o,f[5]=r,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),o=1/Vi.setFromMatrixColumn(t,1).length(),r=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,p=r*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-r*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=x-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,p=r*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,p=r*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=r*c,p=r*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dd,t,fd)}lookAt(t,e,n){const s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Kn.crossVectors(n,en),Kn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Kn.crossVectors(n,en)),Kn.normalize(),Qs.crossVectors(en,Kn),s[0]=Kn.x,s[4]=Qs.x,s[8]=en.x,s[1]=Kn.y,s[5]=Qs.y,s[9]=en.y,s[2]=Kn.z,s[6]=Qs.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],M=n[3],_=n[7],v=n[11],w=n[15],y=s[0],A=s[4],R=s[8],S=s[12],E=s[1],D=s[5],I=s[9],F=s[13],V=s[2],k=s[6],G=s[10],K=s[14],W=s[3],tt=s[7],ct=s[11],St=s[15];return o[0]=r*y+a*E+c*V+l*W,o[4]=r*A+a*D+c*k+l*tt,o[8]=r*R+a*I+c*G+l*ct,o[12]=r*S+a*F+c*K+l*St,o[1]=h*y+u*E+d*V+p*W,o[5]=h*A+u*D+d*k+p*tt,o[9]=h*R+u*I+d*G+p*ct,o[13]=h*S+u*F+d*K+p*St,o[2]=g*y+x*E+m*V+f*W,o[6]=g*A+x*D+m*k+f*tt,o[10]=g*R+x*I+m*G+f*ct,o[14]=g*S+x*F+m*K+f*St,o[3]=M*y+_*E+v*V+w*W,o[7]=M*A+_*D+v*k+w*tt,o[11]=M*R+_*I+v*G+w*ct,o[15]=M*S+_*F+v*K+w*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+o*c*u-s*l*u-o*a*d+n*l*d+s*a*p-n*c*p)+x*(+e*c*p-e*l*d+o*r*d-s*r*p+s*l*h-o*c*h)+m*(+e*l*u-e*a*p-o*r*u+n*r*p+o*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*r*u-n*r*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],M=u*m*l-x*d*l+x*c*p-a*m*p-u*c*f+a*d*f,_=g*d*l-h*m*l-g*c*p+r*m*p+h*c*f-r*d*f,v=h*x*l-g*u*l+g*a*p-r*x*p-h*a*f+r*u*f,w=g*u*c-h*x*c-g*a*d+r*x*d+h*a*m-r*u*m,y=e*M+n*_+s*v+o*w;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/y;return t[0]=M*A,t[1]=(x*d*o-u*m*o-x*s*p+n*m*p+u*s*f-n*d*f)*A,t[2]=(a*m*o-x*c*o+x*s*l-n*m*l-a*s*f+n*c*f)*A,t[3]=(u*c*o-a*d*o-u*s*l+n*d*l+a*s*p-n*c*p)*A,t[4]=_*A,t[5]=(h*m*o-g*d*o+g*s*p-e*m*p-h*s*f+e*d*f)*A,t[6]=(g*c*o-r*m*o-g*s*l+e*m*l+r*s*f-e*c*f)*A,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*p+e*c*p)*A,t[8]=v*A,t[9]=(g*u*o-h*x*o-g*n*p+e*x*p+h*n*f-e*u*f)*A,t[10]=(r*x*o-g*a*o+g*n*l-e*x*l-r*n*f+e*a*f)*A,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*p-e*a*p)*A,t[12]=w*A,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*A,t[14]=(g*a*s-r*x*s-g*n*c+e*x*c+r*n*m-e*a*m)*A,t[15]=(r*u*s-h*a*s+h*n*c-e*u*c-r*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,p=o*h,g=o*u,x=r*h,m=r*u,f=a*u,M=c*l,_=c*h,v=c*u,w=n.x,y=n.y,A=n.z;return s[0]=(1-(x+f))*w,s[1]=(p+v)*w,s[2]=(g-_)*w,s[3]=0,s[4]=(p-v)*y,s[5]=(1-(d+f))*y,s[6]=(m+M)*y,s[7]=0,s[8]=(g+_)*A,s[9]=(m-M)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Vi.set(s[0],s[1],s[2]).length();const r=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);const l=1/o,h=1/r,u=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Pn,c=!1){const l=this.elements,h=2*o/(e-t),u=2*o/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let g,x;if(c)g=o/(r-o),x=r*o/(r-o);else if(a===Pn)g=-(r+o)/(r-o),x=-2*r*o/(r-o);else if(a===Io)g=-r/(r-o),x=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Pn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,x;if(c)g=1/(r-o),x=r/(r-o);else if(a===Pn)g=-2/(r-o),x=-(r+o)/(r-o);else if(a===Io)g=-1/(r-o),x=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vi=new P,mn=new jt,dd=new P(0,0,0),fd=new P(1,1,1),Kn=new P,Qs=new P,en=new P,Rc=new jt,Cc=new Xn;class yn{constructor(t=0,e=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pd=0;const Pc=new P,Hi=new Xn,Bn=new jt,to=new P,_s=new P,md=new P,gd=new Xn,Dc=new P(1,0,0),Lc=new P(0,1,0),Ic=new P(0,0,1),Uc={type:"added"},_d={type:"removed"},Gi={type:"childadded",child:null},hr={type:"childremoved",child:null};class Fe extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new P,e=new yn,n=new Xn,s=new P(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new $t}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Dc,t)}rotateY(t){return this.rotateOnAxis(Lc,t)}rotateZ(t){return this.rotateOnAxis(Ic,t)}translateOnAxis(t,e){return Pc.copy(t).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dc,t)}translateY(t){return this.translateOnAxis(Lc,t)}translateZ(t){return this.translateOnAxis(Ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?to.copy(t):to.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(_s,to,this.up):Bn.lookAt(to,_s,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_d),hr.child=t,this.dispatchEvent(hr),hr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new P(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new P,zn=new P,ur=new P,kn=new P,Wi=new P,Xi=new P,Nc=new P,dr=new P,fr=new P,pr=new P,mr=new me,gr=new me,_r=new me;class vn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){gn.subVectors(s,e),zn.subVectors(n,e),ur.subVectors(t,e);const r=gn.dot(gn),a=gn.dot(zn),c=gn.dot(ur),l=zn.dot(zn),h=zn.dot(ur),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(r*h-a*c)*d;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,kn.x),c.addScaledVector(r,kn.y),c.addScaledVector(a,kn.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return mr.setScalar(0),gr.setScalar(0),_r.setScalar(0),mr.fromBufferAttribute(t,e),gr.fromBufferAttribute(t,n),_r.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(mr,o.x),r.addScaledVector(gr,o.y),r.addScaledVector(_r,o.z),r}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),zn.subVectors(t,e),gn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),gn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Wi.subVectors(s,n),Xi.subVectors(o,n),dr.subVectors(t,n);const c=Wi.dot(dr),l=Xi.dot(dr);if(c<=0&&l<=0)return e.copy(n);fr.subVectors(t,s);const h=Wi.dot(fr),u=Xi.dot(fr);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Wi,r);pr.subVectors(t,o);const p=Wi.dot(pr),g=Xi.dot(pr);if(g>=0&&p<=g)return e.copy(o);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Xi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Nc.subVectors(o,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Nc,a);const f=1/(m+x+d);return r=x*f,a=d*f,e.copy(n).addScaledVector(Wi,r).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},eo={h:0,s:0,l:0};function vr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=Ya(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=vr(r,o,t+1/3),this.g=vr(r,o,t),this.b=vr(r,o,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=ch[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ce.workingToColorSpace(Ve.copy(this),t),Math.round(Jt(Ve.r*255,0,255))*65536+Math.round(Jt(Ve.g*255,0,255))*256+Math.round(Jt(Ve.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,o=Ve.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-n)/u+2;break;case o:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ce){ce.workingToColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(eo);const n=bs(Jn.h,eo.h,e),s=bs(Jn.s,eo.s,e),o=bs(Jn.l,eo.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new ne;ne.NAMES=ch;let vd=0;class Hs extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=es,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xr,this.blendDst=qr,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xr&&(n.blendSrc=this.blendSrc),this.blendDst!==qr&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ds extends Hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new P,no=new ut;let xd=0;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),o=We(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yc&&(t.usage=this.usage),t}}class lh extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hh extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Md=0;const hn=new jt,xr=new Fe,qi=new P,nn=new Ui,vs=new Ui,ze=new P;class De extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oh(t)?hh:lh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new $t().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return xr.lookAt(t),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ie(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];nn.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(nn.min,vs.min),nn.expandByPoint(ze),ze.addVectors(nn.max,vs.max),nn.expandByPoint(ze)):(nn.expandByPoint(vs.min),nn.expandByPoint(vs.max))}nn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)ze.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ze.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(t,l),ze.add(qi)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new P,c[R]=new P;const l=new P,h=new P,u=new P,d=new ut,p=new ut,g=new ut,x=new P,m=new P;function f(R,S,E){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),d.fromBufferAttribute(o,R),p.fromBufferAttribute(o,S),g.fromBufferAttribute(o,E),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[R].add(x),a[S].add(x),a[E].add(x),c[R].add(m),c[S].add(m),c[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){const E=M[R],D=E.start,I=E.count;for(let F=D,V=D+I;F<V;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const _=new P,v=new P,w=new P,y=new P;function A(R){w.fromBufferAttribute(s,R),y.copy(w);const S=a[R];_.copy(S),_.sub(w.multiplyScalar(w.dot(S))).normalize(),v.crossVectors(y,S);const D=v.dot(c[R])<0?-1:1;r.setXYZW(R,_.x,_.y,_.z,D)}for(let R=0,S=M.length;R<S;++R){const E=M[R],D=E.start,I=E.count;for(let F=D,V=D+I;F<V;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new P,o=new P,r=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new jt,pi=new ud,io=new Vs,Oc=new P,so=new P,oo=new P,ro=new P,Mr=new P,ao=new P,Bc=new P,co=new P;class z extends Fe{constructor(t=new De,e=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){ao.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Mr.fromBufferAttribute(u,t),r?ao.addScaledVector(Mr,h):ao.addScaledVector(Mr.sub(e),h))}e.add(ao)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(o),pi.copy(t.ray).recast(t.near),!(io.containsPoint(pi.origin)===!1&&(pi.intersectSphere(io,Oc)===null||pi.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(Fc.copy(o).invert(),pi.copy(t.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=r[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,w=_;v<w;v+=3){const y=a.getX(v),A=a.getX(v+1),R=a.getX(v+2);s=lo(this,f,t,n,l,h,u,y,A,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const M=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=lo(this,r,t,n,l,h,u,M,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=r[m.materialIndex],M=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=M,w=_;v<w;v+=3){const y=v,A=v+1,R=v+2;s=lo(this,f,t,n,l,h,u,y,A,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const M=m,_=m+1,v=m+2;s=lo(this,r,t,n,l,h,u,M,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function yd(i,t,e,n,s,o,r,a){let c;if(t.side===Je?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===ci,a),c===null)return null;co.copy(a),co.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(co);return l<e.near||l>e.far?null:{distance:l,point:co.clone(),object:i}}function lo(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,so),i.getVertexPosition(c,oo),i.getVertexPosition(l,ro);const h=yd(i,t,e,n,so,oo,ro,Bc);if(h){const u=new P;vn.getBarycoord(Bc,so,oo,ro,u),s&&(h.uv=vn.getInterpolatedAttribute(s,a,c,l,u,new ut)),o&&(h.uv1=vn.getInterpolatedAttribute(o,a,c,l,u,new ut)),r&&(h.normal=vn.getInterpolatedAttribute(r,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};vn.getNormal(so,oo,ro,d.normal),h.face=d,h.barycoord=u}return h}class ht extends De{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(x,m,f,M,_,v,w,y,A,R,S){const E=v/A,D=w/R,I=v/2,F=w/2,V=y/2,k=A+1,G=R+1;let K=0,W=0;const tt=new P;for(let ct=0;ct<G;ct++){const St=ct*D-F;for(let zt=0;zt<k;zt++){const oe=zt*E-I;tt[x]=oe*M,tt[m]=St*_,tt[f]=V,l.push(tt.x,tt.y,tt.z),tt[x]=0,tt[m]=0,tt[f]=y>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(zt/A),u.push(1-ct/R),K+=1}}for(let ct=0;ct<R;ct++)for(let St=0;St<A;St++){const zt=d+St+k*ct,oe=d+St+k*(ct+1),Lt=d+(St+1)+k*(ct+1),kt=d+(St+1)+k*ct;c.push(zt,oe,kt),c.push(oe,Lt,kt),W+=6}a.addGroup(p,W,S),p+=W,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ht(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=cs(i[e]);for(const s in n)t[s]=n[s]}return t}function Sd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const wd={clone:cs,merge:Xe};var Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class dh extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new P,zc=new ut,kc=new ut;class Ke extends dh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,zc,kc),e.subVectors(kc,zc)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Es*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Yi=1;class Td extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ke(Zi,Yi,t,e);s.layers=this.layers,this.add(s);const o=new Ke(Zi,Yi,t,e);o.layers=this.layers,this.add(o);const r=new Ke(Zi,Yi,t,e);r.layers=this.layers,this.add(r);const a=new Ke(Zi,Yi,t,e);a.layers=this.layers,this.add(a);const c=new Ke(Zi,Yi,t,e);c.layers=this.layers,this.add(c);const l=new Ke(Zi,Yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fh extends He{constructor(t=[],e=ss,n,s,o,r,a,c,l,h){super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ad extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ht(5,5,5),o=new li({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:ri});o.uniforms.tEquirect.value=e;const r=new z(s,o),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Rn),new Td(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class Tt extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rd={type:"move"};class yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ka{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ne(t),this.near=e,this.far=n}clone(){return new Ka(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cd extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pd extends He{constructor(t=null,e=1,n=1,s,o,r,a,c,l=on,h=on,u,d){super(null,r,a,c,l,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vc extends Mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new jt,Hc=new jt,ho=[],Gc=new Ui,Dd=new jt,xs=new z,Ms=new Vs;class In extends z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Gc.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(Gc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Ms.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),t.ray.intersectsSphere(Ms)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,$i),Hc.multiplyMatrices(n,$i),xs.matrixWorld=Hc,xs.raycast(t,ho);for(let r=0,a=ho.length;r<a;r++){const c=ho[r];c.instanceId=o,c.object=this,e.push(c)}ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pd(new Float32Array(s*this.count),s,this.count,Wa,Cn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Sr=new P,Ld=new P,Id=new $t;class xi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Sr.subVectors(n,e).cross(Ld.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Sr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Id.getNormalMatrix(t),s=this.coplanarPoint(Sr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Vs,Ud=new ut(.5,.5),uo=new P;class Ja{constructor(t=new xi,e=new xi,n=new xi,s=new xi,o=new xi,r=new xi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){const s=this.planes,o=t.elements,r=o[0],a=o[1],c=o[2],l=o[3],h=o[4],u=o[5],d=o[6],p=o[7],g=o[8],x=o[9],m=o[10],f=o[11],M=o[12],_=o[13],v=o[14],w=o[15];if(s[0].setComponents(l-r,p-h,f-g,w-M).normalize(),s[1].setComponents(l+r,p+h,f+g,w+M).normalize(),s[2].setComponents(l+a,p+u,f+x,w+_).normalize(),s[3].setComponents(l-a,p-u,f-x,w-_).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,p-d,f-m,w-v).normalize();else if(s[4].setComponents(l-c,p-d,f-m,w-v).normalize(),e===Pn)s[5].setComponents(l+c,p+d,f+m,w+v).normalize();else if(e===Io)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);const e=Ud.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(uo.x=s.normal.x>0?t.max.x:t.min.x,uo.y=s.normal.y>0?t.max.y:t.min.y,uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qn extends He{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ph extends He{constructor(t,e,n=Pi,s,o,r,a=on,c=on,l,h=Ls,u=1){if(h!==Ls&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $a(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class mh extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class No extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new P,h=new ut;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class le extends De{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],p=[];let g=0;const x=[],m=n/2;let f=0;M(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(p,2));function M(){const v=new P,w=new P;let y=0;const A=(e-t)/n;for(let R=0;R<=o;R++){const S=[],E=R/o,D=E*(e-t)+t;for(let I=0;I<=s;I++){const F=I/s,V=F*c+a,k=Math.sin(V),G=Math.cos(V);w.x=D*k,w.y=-E*n+m,w.z=D*G,u.push(w.x,w.y,w.z),v.set(k,A,G).normalize(),d.push(v.x,v.y,v.z),p.push(F,1-E),S.push(g++)}x.push(S)}for(let R=0;R<s;R++)for(let S=0;S<o;S++){const E=x[S][R],D=x[S+1][R],I=x[S+1][R+1],F=x[S][R+1];(t>0||S!==0)&&(h.push(E,D,F),y+=3),(e>0||S!==o-1)&&(h.push(D,I,F),y+=3)}l.addGroup(f,y,0),f+=y}function _(v){const w=g,y=new ut,A=new P;let R=0;const S=v===!0?t:e,E=v===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*E,0),d.push(0,E,0),p.push(.5,.5),g++;const D=g;for(let I=0;I<=s;I++){const V=I/s*c+a,k=Math.cos(V),G=Math.sin(V);A.x=S*G,A.y=m*E,A.z=S*k,u.push(A.x,A.y,A.z),d.push(0,E,0),y.x=k*.5+.5,y.y=G*.5*E+.5,p.push(y.x,y.y),g++}for(let I=0;I<s;I++){const F=w+I,V=D+I;v===!0?h.push(V,V+1,F):h.push(V+1,V,F),R+=3}l.addGroup(f,R,v===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ns extends le{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ns(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xo extends De{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(o.slice(),3)),this.setAttribute("uv",new ie(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const _=new P,v=new P,w=new P;for(let y=0;y<e.length;y+=3)p(e[y+0],_),p(e[y+1],v),p(e[y+2],w),c(_,v,w,M)}function c(M,_,v,w){const y=w+1,A=[];for(let R=0;R<=y;R++){A[R]=[];const S=M.clone().lerp(v,R/y),E=_.clone().lerp(v,R/y),D=y-R;for(let I=0;I<=D;I++)I===0&&R===y?A[R][I]=S:A[R][I]=S.clone().lerp(E,I/D)}for(let R=0;R<y;R++)for(let S=0;S<2*(y-R)-1;S++){const E=Math.floor(S/2);S%2===0?(d(A[R][E+1]),d(A[R+1][E]),d(A[R][E])):(d(A[R][E+1]),d(A[R+1][E+1]),d(A[R+1][E]))}}function l(M){const _=new P;for(let v=0;v<o.length;v+=3)_.x=o[v+0],_.y=o[v+1],_.z=o[v+2],_.normalize().multiplyScalar(M),o[v+0]=_.x,o[v+1]=_.y,o[v+2]=_.z}function h(){const M=new P;for(let _=0;_<o.length;_+=3){M.x=o[_+0],M.y=o[_+1],M.z=o[_+2];const v=m(M)/2/Math.PI+.5,w=f(M)/Math.PI+.5;r.push(v,1-w)}g(),u()}function u(){for(let M=0;M<r.length;M+=6){const _=r[M+0],v=r[M+2],w=r[M+4],y=Math.max(_,v,w),A=Math.min(_,v,w);y>.9&&A<.1&&(_<.2&&(r[M+0]+=1),v<.2&&(r[M+2]+=1),w<.2&&(r[M+4]+=1))}}function d(M){o.push(M.x,M.y,M.z)}function p(M,_){const v=M*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){const M=new P,_=new P,v=new P,w=new P,y=new ut,A=new ut,R=new ut;for(let S=0,E=0;S<o.length;S+=9,E+=6){M.set(o[S+0],o[S+1],o[S+2]),_.set(o[S+3],o[S+4],o[S+5]),v.set(o[S+6],o[S+7],o[S+8]),y.set(r[E+0],r[E+1]),A.set(r[E+2],r[E+3]),R.set(r[E+4],r[E+5]),w.copy(M).add(_).add(v).divideScalar(3);const D=m(w);x(y,E+0,M,D),x(A,E+2,_,D),x(R,E+4,v,D)}}function x(M,_,v,w){w<0&&M.x===1&&(r[_]=M.x-1),v.x===0&&v.z===0&&(r[_]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.vertices,t.indices,t.radius,t.details)}}class ja extends Xo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ja(t.radius,t.detail)}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],d=n[s+1]-h,p=(r-h)/d;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new ut:new P);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new P,s=[],o=[],r=[],a=new P,c=new jt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new P)}o[0]=new P,r[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Jt(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,g))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(Jt(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qa extends Un{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Nd extends Qa{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function tc(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,p=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,p*=h,s(r,a,d,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const fo=new P,wr=new tc,Er=new tc,br=new tc;class gh extends Un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(fo.subVectors(s[0],s[1]).add(s[0]),l=fo);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(fo.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=fo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),wr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),Er.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),br.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(wr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Er.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),br.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(wr.calc(c),Er.calc(c),br.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wc(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function Fd(i,t){const e=1-i;return e*e*t}function Od(i,t){return 2*(1-i)*i*t}function Bd(i,t){return i*i*t}function Ts(i,t,e,n){return Fd(i,t)+Od(i,e)+Bd(i,n)}function zd(i,t){const e=1-i;return e*e*e*t}function kd(i,t){const e=1-i;return 3*e*e*i*t}function Vd(i,t){return 3*(1-i)*i*i*t}function Hd(i,t){return i*i*i*t}function As(i,t,e,n,s){return zd(i,t)+kd(i,e)+Vd(i,n)+Hd(i,s)}class _h extends Un{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(As(t,s.x,o.x,r.x,a.x),As(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gd extends Un{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(As(t,s.x,o.x,r.x,a.x),As(t,s.y,o.y,r.y,a.y),As(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vh extends Un{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wd extends Un{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xh extends Un{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Ts(t,s.x,o.x,r.x),Ts(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mh extends Un{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Ts(t,s.x,o.x,r.x),Ts(t,s.y,o.y,r.y),Ts(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yh extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(Wc(a,c.x,l.x,h.x,u.x),Wc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var Da=Object.freeze({__proto__:null,ArcCurve:Nd,CatmullRomCurve3:gh,CubicBezierCurve:_h,CubicBezierCurve3:Gd,EllipseCurve:Qa,LineCurve:vh,LineCurve3:Wd,QuadraticBezierCurve:xh,QuadraticBezierCurve3:Mh,SplineCurve:yh});class Xd extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Da[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Da[s.type]().fromJSON(s))}return this}}class La extends Xd{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vh(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new xh(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new _h(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new yh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new Qa(t,e,n,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ec extends La{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new La().fromJSON(s))}return this}}function qd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Sh(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l;if(n&&(o=Jd(i,t,o,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const p=i[d],g=i[d+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Fs(o,r,e,a,c,l,0),r}function Sh(i,t,e,n,s){let o;if(s===lf(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=Xc(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=Xc(r/n|0,i[r],i[r+1],o);return o&&ls(o,o.next)&&(Bs(o),o=o.next),o}function Li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ls(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fs(i,t,e,n,s,o,r){if(!i)return;!r&&o&&nf(i,n,s,o);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(o?Yd(i,n,s,o):Zd(i)){t.push(c.i,i.i,l.i),Bs(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=$d(Li(i),t),Fs(i,t,e,n,s,o,2)):r===2&&Kd(i,t,e,n,s,o):Fs(Li(i),t,e,n,s,o,1);break}}}function Zd(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,o,r),u=Math.min(a,c,l),d=Math.max(s,o,r),p=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Ss(s,a,o,c,r,l,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yd(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ee(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,p=Math.min(a,c,l),g=Math.min(h,u,d),x=Math.max(a,c,l),m=Math.max(h,u,d),f=Ia(p,g,t,e,n),M=Ia(x,m,t,e,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=f&&v&&v.z<=M;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&Ss(a,h,c,u,l,d,_.x,_.y)&&Ee(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&Ss(a,h,c,u,l,d,v.x,v.y)&&Ee(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==r&&Ss(a,h,c,u,l,d,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&Ss(a,h,c,u,l,d,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function $d(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ls(n,s)&&Eh(n,e,e.next,s)&&Os(n,s)&&Os(s,n)&&(t.push(n.i,e.i,s.i),Bs(e),Bs(e.next),e=i=s),e=e.next}while(e!==i);return Li(e)}function Kd(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&rf(r,a)){let c=bh(r,a);r=Li(r,r.next),c=Li(c,c.next),Fs(r,t,e,n,s,o,0),Fs(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Jd(i,t,e,n){const s=[];for(let o=0,r=t.length;o<r;o++){const a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=Sh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(of(l))}s.sort(jd);for(let o=0;o<s.length;o++)e=Qd(s[o],e);return e}function jd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Qd(i,t){const e=tf(i,t);if(!e)return t;const n=bh(e,i);return Li(n,n.next),Li(e,e.next)}function tf(i,t){let e=t;const n=i.x,s=i.y;let o=-1/0,r;if(ls(i,e))return e;do{if(ls(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>o&&(o=u,r=e.x<e.next.x?e:e.next,u===n))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,c=r.x,l=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=c&&n!==e.x&&wh(s<l?n:o,s,c,l,s<l?o:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Os(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&ef(r,e)))&&(r=e,h=u)}e=e.next}while(e!==a);return r}function ef(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function nf(i,t,e,n){let s=i;do s.z===0&&(s.z=Ia(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sf(s)}function sf(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let l=0;l<e&&(a++,r=r.nextZ,!!r);l++);let c=e;for(;a>0||c>0&&r;)a!==0&&(c===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function Ia(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function of(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function wh(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Ss(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&wh(i,t,e,n,s,o,r,a)}function rf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!af(i,t)&&(Os(i,t)&&Os(t,i)&&cf(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||ls(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ls(i,t){return i.x===t.x&&i.y===t.y}function Eh(i,t,e,n){const s=mo(Ee(i,t,e)),o=mo(Ee(i,t,n)),r=mo(Ee(e,n,i)),a=mo(Ee(e,n,t));return!!(s!==o&&r!==a||s===0&&po(i,e,t)||o===0&&po(i,n,t)||r===0&&po(e,i,n)||a===0&&po(e,t,n))}function po(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function mo(i){return i>0?1:i<0?-1:0}function af(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Eh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Os(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function cf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bh(i,t){const e=Ua(i.i,i.x,i.y),n=Ua(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Xc(i,t,e,n){const s=Ua(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ua(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lf(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class hf{static triangulate(t,e,n=2){return qd(t,e,n)}}class Rs{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Rs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];qc(t),Zc(n,t);let r=t.length;e.forEach(qc);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Zc(n,e[c]);const a=hf.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function qc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Gs extends Xo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gs(t.radius,t.detail)}}class rn extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const M=f*d-r;for(let _=0;_<l;_++){const v=_*u-o;g.push(v,-M,0),x.push(0,0,1),m.push(_/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){const _=M+l*f,v=M+l*(f+1),w=M+1+l*(f+1),y=M+1+l*f;p.push(_,v,y),p.push(v,w,y)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fo extends De{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,p=new P,g=new ut;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const f=o+m/n*r;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let f=0;f<n;f++){const M=f+m,_=M,v=M+n+1,w=M+n+2,y=M+1;a.push(_,v,y),a.push(v,w,y)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class qo extends De{constructor(t=new ec([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(r,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let p=d.shape;const g=d.holes;Rs.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const M=g[m];Rs.isClockWise(M)===!0&&(g[m]=M.reverse())}const x=Rs.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const M=g[m];p=p.concat(M)}for(let m=0,f=p.length;m<f;m++){const M=p[m];s.push(M.x,M.y,0),o.push(0,0,1),r.push(M.x,M.y)}for(let m=0,f=x.length;m<f;m++){const M=x[m],_=M[0]+u,v=M[1]+u,w=M[2]+u;n.push(_,v,w),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return uf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const r=e[t.shapes[s]];n.push(r)}return new qo(n,t.curveSegments)}}function uf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ne extends De{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new P,d=new P,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const M=[],_=f/n;let v=0;f===0&&r===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const y=w/e;u.x=-t*Math.cos(s+y*o)*Math.sin(r+_*a),u.y=t*Math.cos(r+_*a),u.z=t*Math.sin(s+y*o)*Math.sin(r+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(y+v,1-_),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){const _=h[f][M+1],v=h[f][M],w=h[f+1][M],y=h[f+1][M+1];(f!==0||r>0)&&p.push(_,v,y),(f!==n-1||c<Math.PI)&&p.push(v,w,y)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class je extends De{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new P,u=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const x=g/s*o,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,M=(s+1)*p+g;r.push(x,m,M),r.push(m,f,M)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class nc extends De{constructor(t=new Mh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new P,c=new P,l=new ut;let h=new P;const u=[],d=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(p,2));function x(){for(let _=0;_<e;_++)m(_);m(o===!1?e:0),M(),f()}function m(_){h=t.getPointAt(_/e,h);const v=r.normals[_],w=r.binormals[_];for(let y=0;y<=s;y++){const A=y/s*Math.PI*2,R=Math.sin(A),S=-Math.cos(A);c.x=S*v.x+R*w.x,c.y=S*v.y+R*w.y,c.z=S*v.z+R*w.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){const w=(s+1)*(_-1)+(v-1),y=(s+1)*_+(v-1),A=(s+1)*_+v,R=(s+1)*(_-1)+v;g.push(w,y,R),g.push(y,A,R)}}function M(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)l.x=_/e,l.y=v/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new nc(new Da[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class U extends Hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Th extends U{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class df extends Hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ff extends Hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Zo extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class pf extends Zo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Tr=new jt,Yc=new P,$c=new P;class ic{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yc),$c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($c),e.updateMatrixWorld(),Tr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mf extends ic{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=as*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class gf extends Zo{constructor(t,e,n=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new mf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Kc=new jt,ys=new P,Ar=new P;class _f extends ic{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(ys),Ar.copy(n.position),Ar.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ar),n.updateMatrixWorld(),s.makeTranslation(-ys.x,-ys.y,-ys.z),Kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc,n.coordinateSystem,n.reversedDepth)}}class vf extends Zo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _f}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ah extends dh{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xf extends ic{constructor(){super(new Ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mf extends Zo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new xf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yf extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Sf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Jc(i,t,e,n){const s=wf(n);switch(e){case th:return i*t;case Wa:return i*t/s.components*s.byteLength;case Xa:return i*t/s.components*s.byteLength;case nh:return i*t*2/s.components*s.byteLength;case qa:return i*t*2/s.components*s.byteLength;case eh:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case Za:return i*t*4/s.components*s.byteLength;case bo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:case ra:return Math.max(i,16)*Math.max(t,8)/4;case ia:case oa:return Math.max(i,8)*Math.max(t,8)/2;case aa:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ea:case ba:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Aa:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ca:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wf(i){switch(i){case Ln:case Kl:return{byteLength:1,components:1};case Ps:case Jl:case ks:return{byteLength:2,components:1};case Ha:case Ga:return{byteLength:2,components:4};case Pi:case Va:case Cn:return{byteLength:4,components:1};case jl:case Ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);function Rh(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Ef(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tf=`#ifdef USE_ALPHAHASH
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
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
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
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
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
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Of=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
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
#endif`,zf=`#ifdef USE_BUMPMAP
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
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yf=`#define PI 3.141592653589793
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
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
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
}`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
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
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sp=`PhysicalMaterial material;
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
#endif`,wp=`struct PhysicalMaterial {
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
}`,Ep=`
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Up=`#if defined( USE_POINTS_UV )
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
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
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
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lm=`float getShadowMask() {
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
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`#include <common>
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
}`,Dm=`#if DEPTH_PACKING == 3200
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
}`,Lm=`#define DISTANCE
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
}`,Im=`#define DISTANCE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,zm=`uniform vec3 diffuse;
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
}`,km=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,Gm=`#define MATCAP
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
}`,Wm=`#define NORMAL
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
}`,Xm=`#define NORMAL
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
}`,qm=`#define PHONG
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
}`,Zm=`#define PHONG
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
}`,Ym=`#define STANDARD
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
}`,$m=`#define STANDARD
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
}`,Km=`#define TOON
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
}`,Jm=`#define TOON
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
}`,jm=`uniform float size;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,t0=`#include <common>
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
}`,e0=`uniform vec3 color;
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
}`,n0=`uniform float rotation;
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
}`,i0=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:bf,alphahash_pars_fragment:Tf,alphamap_fragment:Af,alphamap_pars_fragment:Rf,alphatest_fragment:Cf,alphatest_pars_fragment:Pf,aomap_fragment:Df,aomap_pars_fragment:Lf,batching_pars_vertex:If,batching_vertex:Uf,begin_vertex:Nf,beginnormal_vertex:Ff,bsdfs:Of,iridescence_fragment:Bf,bumpmap_pars_fragment:zf,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:Gf,color_fragment:Wf,color_pars_fragment:Xf,color_pars_vertex:qf,color_vertex:Zf,common:Yf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Kf,displacementmap_pars_vertex:Jf,displacementmap_vertex:jf,emissivemap_fragment:Qf,emissivemap_pars_fragment:tp,colorspace_fragment:ep,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:sp,envmap_pars_fragment:op,envmap_pars_vertex:rp,envmap_physical_pars_fragment:_p,envmap_vertex:ap,fog_vertex:cp,fog_pars_vertex:lp,fog_fragment:hp,fog_pars_fragment:up,gradientmap_pars_fragment:dp,lightmap_pars_fragment:fp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:vp,lights_toon_pars_fragment:xp,lights_phong_fragment:Mp,lights_phong_pars_fragment:yp,lights_physical_fragment:Sp,lights_physical_pars_fragment:wp,lights_fragment_begin:Ep,lights_fragment_maps:bp,lights_fragment_end:Tp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Pp,map_fragment:Dp,map_pars_fragment:Lp,map_particle_fragment:Ip,map_particle_pars_fragment:Up,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Op,morphcolor_vertex:Bp,morphnormal_vertex:zp,morphtarget_pars_vertex:kp,morphtarget_vertex:Vp,normal_fragment_begin:Hp,normal_fragment_maps:Gp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:qp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:Jp,opaque_fragment:jp,packing:Qp,premultiplied_alpha_fragment:tm,project_vertex:em,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:rm,shadowmap_pars_vertex:am,shadowmap_vertex:cm,shadowmask_pars_fragment:lm,skinbase_vertex:hm,skinning_pars_vertex:um,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:_m,transmission_fragment:vm,transmission_pars_fragment:xm,uv_pars_fragment:Mm,uv_pars_vertex:ym,uv_vertex:Sm,worldpos_vertex:wm,background_vert:Em,background_frag:bm,backgroundCube_vert:Tm,backgroundCube_frag:Am,cube_vert:Rm,cube_frag:Cm,depth_vert:Pm,depth_frag:Dm,distanceRGBA_vert:Lm,distanceRGBA_frag:Im,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Fm,linedashed_frag:Om,meshbasic_vert:Bm,meshbasic_frag:zm,meshlambert_vert:km,meshlambert_frag:Vm,meshmatcap_vert:Hm,meshmatcap_frag:Gm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:qm,meshphong_frag:Zm,meshphysical_vert:Ym,meshphysical_frag:$m,meshtoon_vert:Km,meshtoon_frag:Jm,points_vert:jm,points_frag:Qm,shadow_vert:t0,shadow_frag:e0,sprite_vert:n0,sprite_frag:i0},_t={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Tn={basic:{uniforms:Xe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Xe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ne(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Xe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Xe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Xe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ne(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Xe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Xe([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Xe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Xe([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Xe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Xe([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Xe([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Xe([_t.lights,_t.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Tn.physical={uniforms:Xe([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const go={r:0,b:0,g:0},gi=new yn,s0=new jt;function o0(i,t,e,n,s,o,r){const a=new ne(0);let c=o===!0?0:1,l,h,u=null,d=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1;const w=g(_);w===null?f(a,c):w&&w.isColor&&(f(w,1),v=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Wo)?(h===void 0&&(h=new z(new ht(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:cs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(v.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(s0.makeRotationFromEuler(gi)),h.material.toneMapped=ce.getTransfer(w.colorSpace)!==pe,(u!==w||d!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,p=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new z(new rn(2,2),new li({name:"BackgroundMaterial",uniforms:cs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ce.getTransfer(w.colorSpace)!==pe,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,p=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function f(_,v){_.getRGB(go,uh(i)),n.buffers.color.setClear(go.r,go.g,go.b,v,r)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,f(a,c)},render:x,addToRenderList:m,dispose:M}}function r0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(E,D,I,F,V){let k=!1;const G=u(F,I,D);o!==G&&(o=G,l(o.object)),k=p(E,F,I,V),k&&g(E,F,I,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(k||r)&&(r=!1,v(E,D,I,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,D,I){const F=I.wireframe===!0;let V=n[E.id];V===void 0&&(V={},n[E.id]=V);let k=V[D.id];k===void 0&&(k={},V[D.id]=k);let G=k[F];return G===void 0&&(G=d(c()),k[F]=G),G}function d(E){const D=[],I=[],F=[];for(let V=0;V<e;V++)D[V]=0,I[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:F,object:E,attributes:{},index:null}}function p(E,D,I,F){const V=o.attributes,k=D.attributes;let G=0;const K=I.getAttributes();for(const W in K)if(K[W].location>=0){const ct=V[W];let St=k[W];if(St===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(St=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(St=E.instanceColor)),ct===void 0||ct.attribute!==St||St&&ct.data!==St.data)return!0;G++}return o.attributesNum!==G||o.index!==F}function g(E,D,I,F){const V={},k=D.attributes;let G=0;const K=I.getAttributes();for(const W in K)if(K[W].location>=0){let ct=k[W];ct===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(ct=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(ct=E.instanceColor));const St={};St.attribute=ct,ct&&ct.data&&(St.data=ct.data),V[W]=St,G++}o.attributes=V,o.attributesNum=G,o.index=F}function x(){const E=o.newAttributes;for(let D=0,I=E.length;D<I;D++)E[D]=0}function m(E){f(E,0)}function f(E,D){const I=o.newAttributes,F=o.enabledAttributes,V=o.attributeDivisors;I[E]=1,F[E]===0&&(i.enableVertexAttribArray(E),F[E]=1),V[E]!==D&&(i.vertexAttribDivisor(E,D),V[E]=D)}function M(){const E=o.newAttributes,D=o.enabledAttributes;for(let I=0,F=D.length;I<F;I++)D[I]!==E[I]&&(i.disableVertexAttribArray(I),D[I]=0)}function _(E,D,I,F,V,k,G){G===!0?i.vertexAttribIPointer(E,D,I,V,k):i.vertexAttribPointer(E,D,I,F,V,k)}function v(E,D,I,F){x();const V=F.attributes,k=I.getAttributes(),G=D.defaultAttributeValues;for(const K in k){const W=k[K];if(W.location>=0){let tt=V[K];if(tt===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(tt=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(tt=E.instanceColor)),tt!==void 0){const ct=tt.normalized,St=tt.itemSize,zt=t.get(tt);if(zt===void 0)continue;const oe=zt.buffer,Lt=zt.type,kt=zt.bytesPerElement,Y=Lt===i.INT||Lt===i.UNSIGNED_INT||tt.gpuType===Va;if(tt.isInterleavedBufferAttribute){const j=tt.data,pt=j.stride,Ut=tt.offset;if(j.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)f(W.location+wt,j.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let wt=0;wt<W.locationSize;wt++)m(W.location+wt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let wt=0;wt<W.locationSize;wt++)_(W.location+wt,St/W.locationSize,Lt,ct,pt*kt,(Ut+St/W.locationSize*wt)*kt,Y)}else{if(tt.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)f(W.location+j,tt.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let j=0;j<W.locationSize;j++)m(W.location+j);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let j=0;j<W.locationSize;j++)_(W.location+j,St/W.locationSize,Lt,ct,St*kt,St/W.locationSize*j*kt,Y)}}else if(G!==void 0){const ct=G[K];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(W.location,ct);break;case 3:i.vertexAttrib3fv(W.location,ct);break;case 4:i.vertexAttrib4fv(W.location,ct);break;default:i.vertexAttrib1fv(W.location,ct)}}}}M()}function w(){R();for(const E in n){const D=n[E];for(const I in D){const F=D[I];for(const V in F)h(F[V].object),delete F[V];delete D[I]}delete n[E]}}function y(E){if(n[E.id]===void 0)return;const D=n[E.id];for(const I in D){const F=D[I];for(const V in F)h(F[V].object),delete F[V];delete D[I]}delete n[E.id]}function A(E){for(const D in n){const I=n[D];if(I[E.id]===void 0)continue;const F=I[E.id];for(const V in F)h(F[V].object),delete F[V];delete I[E.id]}}function R(){S(),r=!0,o!==s&&(o=s,l(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function a0(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function c0(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Cn&&!R)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:w,maxSamples:y}}function l0(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new xi,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):l();else{const M=o?0:n,_=M*4;let v=f.clippingState||null;c.value=v,v=h(g,d,_,p);for(let w=0;w!==_;++w)v[w]=e[w];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const f=p+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,v=p;_!==x;++_,v+=4)r.copy(u[_]).applyMatrix4(M,a),r.normal.toArray(m,v),m[v+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function h0(i){let t=new WeakMap;function e(r,a){return a===ta?r.mapping=ss:a===ea&&(r.mapping=os),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ta||a===ea)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Ad(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Qi=4,jc=[.125,.215,.35,.446,.526,.582],Ei=20,Rr=new Ah,Qc=new ne;let Cr=null,Pr=0,Dr=0,Lr=!1;const Mi=(1+Math.sqrt(5))/2,Ki=1/Mi,tl=[new P(-Mi,Ki,0),new P(Mi,Ki,0),new P(-Ki,0,Mi),new P(Ki,0,Mi),new P(0,Mi,-Ki),new P(0,Mi,Ki),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],u0=new P;class el{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,o={}){const{size:r=256,position:a=u0}=o;Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cr,Pr,Dr),this._renderer.xr.enabled=Lr,t.scissorTest=!1,_o(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:ks,format:xn,colorSpace:rs,depthBuffer:!1},s=nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(o)),this._blurMaterial=f0(o,t,e)}return s}_compileMaterial(t){const e=new z(this._lodPlanes[0],t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,s,o){const c=new Ke(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Qc),u.toneMapping=ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new ds({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),m=new z(new ht,x);let f=!1;const M=t.background;M?M.isColor&&(x.color.copy(M),t.background=null,f=!0):(x.color.copy(Qc),f=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(c.up.set(0,l[_],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+h[_],o.y,o.z)):v===1?(c.up.set(0,0,l[_]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+h[_],o.z)):(c.up.set(0,l[_],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+h[_]));const w=this._cubeSize;_o(s,v*w,_>2?w:0,w,w),u.setRenderTarget(s),f&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ss||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new z(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;_o(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Rr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=tl[(s-o-1)%tl.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new z(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),x=o/g,m=isFinite(o)?1+Math.floor(h*x):Ei;m>Ei&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const f=[];let M=0;for(let A=0;A<Ei;++A){const R=A/x,S=Math.exp(-R*R/2);f.push(S),A===0?M+=S:A<m&&(M+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const v=this._sizeLods[s],w=3*v*(s>_-Qi?s-_+Qi:0),y=4*(this._cubeSize-v);_o(e,w,y,3*v,2*v),c.setRenderTarget(e),c.render(u,Rr)}}function d0(i){const t=[],e=[],n=[];let s=i;const o=i-Qi+1+jc.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-Qi?c=jc[r-i+Qi-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,M=new Float32Array(x*g*p),_=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let y=0;y<p;y++){const A=y%3*2/3-1,R=y>2?0:-1,S=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];M.set(S,x*g*y),_.set(d,m*g*y);const E=[y,y,y,y,y,y];v.set(E,f*g*y)}const w=new De;w.setAttribute("position",new Mn(M,x)),w.setAttribute("uv",new Mn(_,m)),w.setAttribute("faceIndex",new Mn(v,f)),t.push(w),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nl(i,t,e){const n=new Di(i,t,e);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _o(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function f0(i,t,e){const n=new Float32Array(Ei),s=new P(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function il(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function sl(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function sc(){return`

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
	`}function p0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ta||c===ea,h=c===ss||c===os;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new el(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new el(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function m0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function g0(i,t,e,n){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete s[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const M=p.array;x=p.version;for(let _=0,v=M.length;_<v;_+=3){const w=M[_+0],y=M[_+1],A=M[_+2];d.push(w,y,y,A,A,w)}}else if(g!==void 0){const M=g.array;x=g.version;for(let _=0,v=M.length/3-1;_<v;_+=3){const w=_+0,y=_+1,A=_+2;d.push(w,y,y,A,A,w)}}else return;const m=new(oh(d)?hh:lh)(d,1);m.version=x;const f=o.get(u);f&&t.remove(f),o.set(u,m)}function h(u){const d=o.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function _0(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,p){i.drawElements(n,p,o,d*r),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,o,d*r,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/r,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,d,0,x,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*x[M];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function v0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function x0(i,t,e){const n=new WeakMap,s=new me;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,y=1;w>t.maxTextureSize&&(y=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const A=new Float32Array(w*y*4*u),R=new rh(A,w,y,u);R.type=Cn,R.needsUpdate=!0;const S=v*4;for(let D=0;D<u;D++){const I=f[D],F=M[D],V=_[D],k=w*y*4*D;for(let G=0;G<I.count;G++){const K=G*S;g===!0&&(s.fromBufferAttribute(I,G),A[k+K+0]=s.x,A[k+K+1]=s.y,A[k+K+2]=s.z,A[k+K+3]=0),x===!0&&(s.fromBufferAttribute(F,G),A[k+K+4]=s.x,A[k+K+5]=s.y,A[k+K+6]=s.z,A[k+K+7]=0),m===!0&&(s.fromBufferAttribute(V,G),A[k+K+8]=s.x,A[k+K+9]=s.y,A[k+K+10]=s.z,A[k+K+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new ut(w,y)},n.set(a,d),a.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function M0(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}const Ch=new He,ol=new ph(1,1),Ph=new rh,Dh=new ld,Lh=new fh,rl=[],al=[],cl=new Float32Array(16),ll=new Float32Array(9),hl=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=rl[s];if(o===void 0&&(o=new Float32Array(s),rl[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yo(i,t){let e=al[t];e===void 0&&(e=new Int32Array(t),al[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function b0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;hl.set(n),i.uniformMatrix2fv(this.addr,!1,hl),Be(e,n)}}function T0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),Be(e,n)}}function A0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;cl.set(n),i.uniformMatrix4fv(this.addr,!1,cl),Be(e,n)}}function R0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function L0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function F0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(ol.compareFunction=sh,o=ol):o=Ch,e.setTexture2D(t||o,s)}function O0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Dh,s)}function B0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lh,s)}function z0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ph,s)}function k0(i){switch(i){case 5126:return y0;case 35664:return S0;case 35665:return w0;case 35666:return E0;case 35674:return b0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return D0;case 5125:return L0;case 36294:return I0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function V0(i,t){i.uniform1fv(this.addr,t)}function H0(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function G0(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function W0(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function X0(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function q0(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Z0(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Y0(i,t){i.uniform1iv(this.addr,t)}function $0(i,t){i.uniform2iv(this.addr,t)}function K0(i,t){i.uniform3iv(this.addr,t)}function J0(i,t){i.uniform4iv(this.addr,t)}function j0(i,t){i.uniform1uiv(this.addr,t)}function Q0(i,t){i.uniform2uiv(this.addr,t)}function tg(i,t){i.uniform3uiv(this.addr,t)}function eg(i,t){i.uniform4uiv(this.addr,t)}function ng(i,t,e){const n=this.cache,s=t.length,o=Yo(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),Be(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Ch,o[r])}function ig(i,t,e){const n=this.cache,s=t.length,o=Yo(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),Be(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Dh,o[r])}function sg(i,t,e){const n=this.cache,s=t.length,o=Yo(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),Be(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Lh,o[r])}function og(i,t,e){const n=this.cache,s=t.length,o=Yo(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),Be(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Ph,o[r])}function rg(i){switch(i){case 5126:return V0;case 35664:return H0;case 35665:return G0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Z0;case 5124:case 35670:return Y0;case 35667:case 35671:return $0;case 35668:case 35672:return K0;case 35669:case 35673:return J0;case 5125:return j0;case 36294:return Q0;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return og}}class ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k0(e.type)}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rg(e.type)}}class lg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function ul(i,t){i.seq.push(t),i.map[t.id]=t}function hg(i,t,e){const n=i.name,s=n.length;for(Ir.lastIndex=0;;){const o=Ir.exec(n),r=Ir.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){ul(e,l===void 0?new ag(a,i,t):new cg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new lg(a),ul(e,u)),e=u}}}class Co{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);hg(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function dl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ug=37297;let dg=0;function fg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const fl=new $t;function pg(i){ce._getMatrix(fl,ce.workingColorSpace,i);const t=`mat3( ${fl.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Lo:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+fg(i.getShaderSource(t),a)}else return o}function mg(i,t){const e=pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gg(i,t){let e;switch(t){case wu:e="Linear";break;case Eu:e="Reinhard";break;case bu:e="Cineon";break;case Yl:e="ACESFilmic";break;case Au:e="AgX";break;case Ru:e="Neutral";break;case Tu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vo=new P;function _g(){ce.getLuminanceCoefficients(vo);const i=vo.x.toFixed(4),t=vo.y.toFixed(4),e=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function xg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function ws(i){return i!==""}function ml(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(i){return i.replace(yg,wg)}const Sg=new Map;function wg(i,t){let e=Kt[t];if(e===void 0){const n=Sg.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Na(e)}const Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(i){return i.replace(Eg,bg)}function bg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function vl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ag(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case os:t="ENVMAP_TYPE_CUBE";break;case Wo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===os&&(t="ENVMAP_MODE_REFRACTION"),t}function Cg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zl:t="ENVMAP_BLENDING_MULTIPLY";break;case yu:t="ENVMAP_BLENDING_MIX";break;case Su:t="ENVMAP_BLENDING_ADD";break}return t}function Pg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Dg(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Tg(e),l=Ag(e),h=Rg(e),u=Cg(e),d=Pg(e),p=vg(e),g=xg(o),x=s.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),f.length>0&&(f+=`
`)):(m=[vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),f=[vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ai?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,mg("linearToOutputTexel",e.outputColorSpace),_g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),r=Na(r),r=ml(r,e),r=gl(r,e),a=Na(a),a=ml(a,e),a=gl(a,e),r=_l(r),a=_l(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=M+m+r,v=M+f+a,w=dl(s,s.VERTEX_SHADER,_),y=dl(s,s.FRAGMENT_SHADER,v);s.attachShader(x,w),s.attachShader(x,y),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(D){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(w)||"",V=s.getShaderInfoLog(y)||"",k=I.trim(),G=F.trim(),K=V.trim();let W=!0,tt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,y);else{const ct=pl(s,w,"vertex"),St=pl(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+ct+`
`+St)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(G===""||K==="")&&(tt=!1);tt&&(D.diagnostics={runnable:W,programLog:k,vertexShader:{log:G,prefix:m},fragmentShader:{log:K,prefix:f}})}s.deleteShader(w),s.deleteShader(y),R=new Co(s,x),S=Mg(s,x)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,ug)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=y,this}let Lg=0;class Ig{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ug(t),e.set(t,n)),n}}class Ug{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}}function Ng(i,t,e,n,s,o,r){const a=new ah,c=new Ig,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,E,D,I,F){const V=I.fog,k=F.geometry,G=S.isMeshStandardMaterial?I.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),W=K&&K.mapping===Wo?K.image.height:null,tt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ct=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,St=ct!==void 0?ct.length:0;let zt=0;k.morphAttributes.position!==void 0&&(zt=1),k.morphAttributes.normal!==void 0&&(zt=2),k.morphAttributes.color!==void 0&&(zt=3);let oe,Lt,kt,Y;if(tt){const ue=Tn[tt];oe=ue.vertexShader,Lt=ue.fragmentShader}else oe=S.vertexShader,Lt=S.fragmentShader,c.update(S),kt=c.getVertexShaderID(S),Y=c.getFragmentShaderID(S);const j=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Ut=F.isInstancedMesh===!0,wt=F.isBatchedMesh===!0,Vt=!!S.map,he=!!S.matcap,L=!!K,Zt=!!S.aoMap,mt=!!S.lightMap,dt=!!S.bumpMap,ot=!!S.normalMap,Xt=!!S.displacementMap,gt=!!S.emissiveMap,Nt=!!S.metalnessMap,de=!!S.roughnessMap,_e=S.anisotropy>0,C=S.clearcoat>0,b=S.dispersion>0,H=S.iridescence>0,$=S.sheen>0,et=S.transmission>0,Z=_e&&!!S.anisotropyMap,It=C&&!!S.clearcoatMap,lt=C&&!!S.clearcoatNormalMap,Ct=C&&!!S.clearcoatRoughnessMap,Pt=H&&!!S.iridescenceMap,rt=H&&!!S.iridescenceThicknessMap,yt=$&&!!S.sheenColorMap,Gt=$&&!!S.sheenRoughnessMap,Dt=!!S.specularMap,xt=!!S.specularColorMap,Yt=!!S.specularIntensityMap,N=et&&!!S.transmissionMap,at=et&&!!S.thicknessMap,ft=!!S.gradientMap,bt=!!S.alphaMap,it=S.alphaTest>0,Q=!!S.alphaHash,Rt=!!S.extensions;let qt=ai;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(qt=i.toneMapping);const ve={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:oe,fragmentShader:Lt,defines:S.defines,customVertexShaderID:kt,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:wt,batchingColor:wt&&F._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&F.instanceColor!==null,instancingMorph:Ut&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:rs,alphaToCoverage:!!S.alphaToCoverage,map:Vt,matcap:he,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:W,aoMap:Zt,lightMap:mt,bumpMap:dt,normalMap:ot,displacementMap:d&&Xt,emissiveMap:gt,normalMapObjectSpace:ot&&S.normalMapType===Lu,normalMapTangentSpace:ot&&S.normalMapType===ih,metalnessMap:Nt,roughnessMap:de,anisotropy:_e,anisotropyMap:Z,clearcoat:C,clearcoatMap:It,clearcoatNormalMap:lt,clearcoatRoughnessMap:Ct,dispersion:b,iridescence:H,iridescenceMap:Pt,iridescenceThicknessMap:rt,sheen:$,sheenColorMap:yt,sheenRoughnessMap:Gt,specularMap:Dt,specularColorMap:xt,specularIntensityMap:Yt,transmission:et,transmissionMap:N,thicknessMap:at,gradientMap:ft,opaque:S.transparent===!1&&S.blending===es&&S.alphaToCoverage===!1,alphaMap:bt,alphaTest:it,alphaHash:Q,combine:S.combine,mapUv:Vt&&x(S.map.channel),aoMapUv:Zt&&x(S.aoMap.channel),lightMapUv:mt&&x(S.lightMap.channel),bumpMapUv:dt&&x(S.bumpMap.channel),normalMapUv:ot&&x(S.normalMap.channel),displacementMapUv:Xt&&x(S.displacementMap.channel),emissiveMapUv:gt&&x(S.emissiveMap.channel),metalnessMapUv:Nt&&x(S.metalnessMap.channel),roughnessMapUv:de&&x(S.roughnessMap.channel),anisotropyMapUv:Z&&x(S.anisotropyMap.channel),clearcoatMapUv:It&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:lt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&x(S.sheenRoughnessMap.channel),specularMapUv:Dt&&x(S.specularMap.channel),specularColorMapUv:xt&&x(S.specularColorMap.channel),specularIntensityMapUv:Yt&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:at&&x(S.thicknessMap.channel),alphaMapUv:bt&&x(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ot||_e),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(Vt||bt),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:F.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:zt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:Vt&&S.map.isVideoTexture===!0&&ce.getTransfer(S.map.colorSpace)===pe,decodeVideoTextureEmissive:gt&&S.emissiveMap.isVideoTexture===!0&&ce.getTransfer(S.emissiveMap.colorSpace)===pe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ae,flipSided:S.side===Je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Rt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&S.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)E.push(D),E.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(M(E,S),_(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function M(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function _(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const E=g[S.type];let D;if(E){const I=Tn[E];D=wd.clone(I.uniforms)}else D=S.uniforms;return D}function w(S,E){let D;for(let I=0,F=h.length;I<F;I++){const V=h[I];if(V.cacheKey===E){D=V,++D.usedTimes;break}}return D===void 0&&(D=new Dg(i,E,S,o),h.push(D)),D}function y(S){if(--S.usedTimes===0){const E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function A(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:w,releaseProgram:y,releaseShaderCache:A,programs:h,dispose:R}}function Fg(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Og(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ml(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,p,g,x,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){const f=r(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,x,m){const f=r(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||Og),n.length>1&&n.sort(d||xl),s.length>1&&s.sort(d||xl)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function Bg(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Ml,i.set(n,[r])):s>=o.length?(r=new Ml,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function zg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ne};break;case"SpotLight":e={position:new P,direction:new P,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function kg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Vg=0;function Hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gg(i){const t=new zg,e=kg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,o=new jt,r=new jt;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,M=0,_=0,v=0,w=0,y=0,A=0;l.sort(Hg);for(let S=0,E=l.length;S<E;S++){const D=l[S],I=D.color,F=D.intensity,V=D.distance,k=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=I.r*F,u+=I.g*F,d+=I.b*F;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],F);A++}else if(D.isDirectionalLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,W=e.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=D.shadow.matrix,M++}n.directional[p]=G,p++}else if(D.isSpotLight){const G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(I).multiplyScalar(F),G.distance=V,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[x]=G;const K=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,K.updateMatrices(D),D.castShadow&&y++),n.spotLightMatrix[x]=K.matrix,D.castShadow){const W=e.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=k,v++}x++}else if(D.isRectAreaLight){const G=t.get(D);G.color.copy(I).multiplyScalar(F),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=G,m++}else if(D.isPointLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const K=D.shadow,W=e.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=D.shadow.matrix,_++}n.point[g]=G,g++}else if(D.isHemisphereLight){const G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(F),G.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==M||R.numPointShadows!==_||R.numSpotShadows!==v||R.numSpotMaps!==w||R.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+w-y,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=M,R.numPointShadows=_,R.numSpotShadows=v,R.numSpotMaps=w,R.numLightProbes=A,n.version=Vg++)}function c(l,h){let u=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const _=l[f];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(_.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(_.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function yl(i){const t=new Gg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Wg(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new yl(i),t.set(s,[a])):o>=r.length?(a=new yl(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qg=`uniform sampler2D shadow_pass;
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
}`;function Zg(i,t,e){let n=new Ja;const s=new ut,o=new ut,r=new me,a=new df({depthPacking:Du}),c=new ff,l={},h=e.maxTextureSize,u={[ci]:Je,[Je]:ci,[Ae]:Ae},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Xg,fragmentShader:qg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new z(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let f=this.type;this.render=function(y,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const S=i.getRenderTarget(),E=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ri),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=f!==Gn&&this.type===Gn,V=f===Gn&&this.type!==Gn;for(let k=0,G=y.length;k<G;k++){const K=y[k],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const tt=W.getFrameExtents();if(s.multiply(tt),o.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/tt.x),s.x=o.x*tt.x,W.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/tt.y),s.y=o.y*tt.y,W.mapSize.y=o.y)),W.map===null||F===!0||V===!0){const St=this.type!==Gn?{minFilter:on,magFilter:on}:{};W.map!==null&&W.map.dispose(),W.map=new Di(s.x,s.y,St),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ct=W.getViewportCount();for(let St=0;St<ct;St++){const zt=W.getViewport(St);r.set(o.x*zt.x,o.y*zt.y,o.x*zt.z,o.y*zt.w),I.viewport(r),W.updateMatrices(K,St),n=W.getFrustum(),v(A,R,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Gn&&M(W,R),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,D)};function M(y,A){const R=t.update(x);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Di(s.x,s.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(A,null,R,d,x,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(A,null,R,p,x,null)}function _(y,A,R,S){let E=null;const D=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)E=D;else if(E=R.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=E.uuid,F=A.uuid;let V=l[I];V===void 0&&(V={},l[I]=V);let k=V[F];k===void 0&&(k=E.clone(),V[F]=k,A.addEventListener("dispose",w)),E=k}if(E.visible=A.visible,E.wireframe=A.wireframe,S===Gn?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=i.properties.get(E);I.light=R}return E}function v(y,A,R,S,E){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&E===Gn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const F=t.update(y),V=y.material;if(Array.isArray(V)){const k=F.groups;for(let G=0,K=k.length;G<K;G++){const W=k[G],tt=V[W.materialIndex];if(tt&&tt.visible){const ct=_(y,tt,S,E);y.onBeforeShadow(i,y,A,R,F,ct,W),i.renderBufferDirect(R,null,F,ct,y,W),y.onAfterShadow(i,y,A,R,F,ct,W)}}}else if(V.visible){const k=_(y,V,S,E);y.onBeforeShadow(i,y,A,R,F,k,null),i.renderBufferDirect(R,null,F,k,y,null),y.onAfterShadow(i,y,A,R,F,k,null)}}const I=y.children;for(let F=0,V=I.length;F<V;F++)v(I[F],A,R,S,E)}function w(y){y.target.removeEventListener("dispose",w);for(const R in l){const S=l[R],E=y.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const Yg={[Zr]:Yr,[$r]:jr,[Kr]:Qr,[is]:Jr,[Yr]:Zr,[jr]:$r,[Qr]:Kr,[Jr]:is};function $g(i,t){function e(){let N=!1;const at=new me;let ft=null;const bt=new me(0,0,0,0);return{setMask:function(it){ft!==it&&!N&&(i.colorMask(it,it,it,it),ft=it)},setLocked:function(it){N=it},setClear:function(it,Q,Rt,qt,ve){ve===!0&&(it*=qt,Q*=qt,Rt*=qt),at.set(it,Q,Rt,qt),bt.equals(at)===!1&&(i.clearColor(it,Q,Rt,qt),bt.copy(at))},reset:function(){N=!1,ft=null,bt.set(-1,0,0,0)}}}function n(){let N=!1,at=!1,ft=null,bt=null,it=null;return{setReversed:function(Q){if(at!==Q){const Rt=t.get("EXT_clip_control");Q?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),at=Q;const qt=it;it=null,this.setClear(qt)}},getReversed:function(){return at},setTest:function(Q){Q?j(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Q){ft!==Q&&!N&&(i.depthMask(Q),ft=Q)},setFunc:function(Q){if(at&&(Q=Yg[Q]),bt!==Q){switch(Q){case Zr:i.depthFunc(i.NEVER);break;case Yr:i.depthFunc(i.ALWAYS);break;case $r:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case Kr:i.depthFunc(i.EQUAL);break;case Jr:i.depthFunc(i.GEQUAL);break;case jr:i.depthFunc(i.GREATER);break;case Qr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=Q}},setLocked:function(Q){N=Q},setClear:function(Q){it!==Q&&(at&&(Q=1-Q),i.clearDepth(Q),it=Q)},reset:function(){N=!1,ft=null,bt=null,it=null,at=!1}}}function s(){let N=!1,at=null,ft=null,bt=null,it=null,Q=null,Rt=null,qt=null,ve=null;return{setTest:function(ue){N||(ue?j(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(ue){at!==ue&&!N&&(i.stencilMask(ue),at=ue)},setFunc:function(ue,Nn,wn){(ft!==ue||bt!==Nn||it!==wn)&&(i.stencilFunc(ue,Nn,wn),ft=ue,bt=Nn,it=wn)},setOp:function(ue,Nn,wn){(Q!==ue||Rt!==Nn||qt!==wn)&&(i.stencilOp(ue,Nn,wn),Q=ue,Rt=Nn,qt=wn)},setLocked:function(ue){N=ue},setClear:function(ue){ve!==ue&&(i.clearStencil(ue),ve=ue)},reset:function(){N=!1,at=null,ft=null,bt=null,it=null,Q=null,Rt=null,qt=null,ve=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,M=null,_=null,v=null,w=null,y=null,A=new ne(0,0,0),R=0,S=!1,E=null,D=null,I=null,F=null,V=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=K>=2);let tt=null,ct={};const St=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),oe=new me().fromArray(St),Lt=new me().fromArray(zt);function kt(N,at,ft,bt){const it=new Uint8Array(4),Q=i.createTexture();i.bindTexture(N,Q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<ft;Rt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,it):i.texImage2D(at+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,it);return Q}const Y={};Y[i.TEXTURE_2D]=kt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),j(i.DEPTH_TEST),r.setFunc(is),dt(!1),ot(gc),j(i.CULL_FACE),Zt(ri);function j(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function pt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ut(N,at){return u[N]!==at?(i.bindFramebuffer(N,at),u[N]=at,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function wt(N,at){let ft=p,bt=!1;if(N){ft=d.get(at),ft===void 0&&(ft=[],d.set(at,ft));const it=N.textures;if(ft.length!==it.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Rt=it.length;Q<Rt;Q++)ft[Q]=i.COLOR_ATTACHMENT0+Q;ft.length=it.length,bt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,bt=!0);bt&&i.drawBuffers(ft)}function Vt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const he={[wi]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[ou]:i.FUNC_REVERSE_SUBTRACT};he[ru]=i.MIN,he[au]=i.MAX;const L={[cu]:i.ZERO,[lu]:i.ONE,[hu]:i.SRC_COLOR,[Xr]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[du]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[qr]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[fu]:i.ONE_MINUS_DST_ALPHA,[_u]:i.CONSTANT_COLOR,[vu]:i.ONE_MINUS_CONSTANT_COLOR,[xu]:i.CONSTANT_ALPHA,[Mu]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(N,at,ft,bt,it,Q,Rt,qt,ve,ue){if(N===ri){x===!0&&(pt(i.BLEND),x=!1);return}if(x===!1&&(j(i.BLEND),x=!0),N!==iu){if(N!==m||ue!==S){if((f!==wi||v!==wi)&&(i.blendEquation(i.FUNC_ADD),f=wi,v=wi),ue)switch(N){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.ONE,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,_=null,w=null,y=null,A.set(0,0,0),R=0,m=N,S=ue}return}it=it||at,Q=Q||ft,Rt=Rt||bt,(at!==f||it!==v)&&(i.blendEquationSeparate(he[at],he[it]),f=at,v=it),(ft!==M||bt!==_||Q!==w||Rt!==y)&&(i.blendFuncSeparate(L[ft],L[bt],L[Q],L[Rt]),M=ft,_=bt,w=Q,y=Rt),(qt.equals(A)===!1||ve!==R)&&(i.blendColor(qt.r,qt.g,qt.b,ve),A.copy(qt),R=ve),m=N,S=!1}function mt(N,at){N.side===Ae?pt(i.CULL_FACE):j(i.CULL_FACE);let ft=N.side===Je;at&&(ft=!ft),dt(ft),N.blending===es&&N.transparent===!1?Zt(ri):Zt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),o.setMask(N.colorWrite);const bt=N.stencilWrite;a.setTest(bt),bt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),gt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(N){E!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),E=N)}function ot(N){N!==eu?(j(i.CULL_FACE),N!==D&&(N===gc?i.cullFace(i.BACK):N===nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),D=N}function Xt(N){N!==I&&(G&&i.lineWidth(N),I=N)}function gt(N,at,ft){N?(j(i.POLYGON_OFFSET_FILL),(F!==at||V!==ft)&&(i.polygonOffset(at,ft),F=at,V=ft)):pt(i.POLYGON_OFFSET_FILL)}function Nt(N){N?j(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function de(N){N===void 0&&(N=i.TEXTURE0+k-1),tt!==N&&(i.activeTexture(N),tt=N)}function _e(N,at,ft){ft===void 0&&(tt===null?ft=i.TEXTURE0+k-1:ft=tt);let bt=ct[ft];bt===void 0&&(bt={type:void 0,texture:void 0},ct[ft]=bt),(bt.type!==N||bt.texture!==at)&&(tt!==ft&&(i.activeTexture(ft),tt=ft),i.bindTexture(N,at||Y[N]),bt.type=N,bt.texture=at)}function C(){const N=ct[tt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(N){oe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),oe.copy(N))}function Gt(N){Lt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Lt.copy(N))}function Dt(N,at){let ft=l.get(at);ft===void 0&&(ft=new WeakMap,l.set(at,ft));let bt=ft.get(N);bt===void 0&&(bt=i.getUniformBlockIndex(at,N.name),ft.set(N,bt))}function xt(N,at){const bt=l.get(at).get(N);c.get(at)!==bt&&(i.uniformBlockBinding(at,bt,N.__bindingPointIndex),c.set(at,bt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,ct={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,M=null,_=null,v=null,w=null,y=null,A=new ne(0,0,0),R=0,S=!1,E=null,D=null,I=null,F=null,V=null,oe.set(0,0,i.canvas.width,i.canvas.height),Lt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:j,disable:pt,bindFramebuffer:Ut,drawBuffers:wt,useProgram:Vt,setBlending:Zt,setMaterial:mt,setFlipSided:dt,setCullFace:ot,setLineWidth:Xt,setPolygonOffset:gt,setScissorTest:Nt,activeTexture:de,bindTexture:_e,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:H,texImage2D:Pt,texImage3D:rt,updateUBOMapping:Dt,uniformBlockBinding:xt,texStorage2D:lt,texStorage3D:Ct,texSubImage2D:$,texSubImage3D:et,compressedTexSubImage2D:Z,compressedTexSubImage3D:It,scissor:yt,viewport:Gt,reset:Yt}}function Kg(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return p?new OffscreenCanvas(C,b):Uo("canvas")}function x(C,b,H){let $=1;const et=_e(C);if((et.width>H||et.height>H)&&($=H/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor($*et.width),It=Math.floor($*et.height);u===void 0&&(u=g(Z,It));const lt=b?g(Z,It):u;return lt.width=Z,lt.height=It,lt.getContext("2d").drawImage(C,0,0,Z,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+It+")."),lt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,b,H,$,et=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=b;if(b===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),b===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),b===i.RGBA){const It=et?Lo:ce.getTransfer($);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=It===pe?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(C,b){let H;return C?b===null||b===Pi||b===Ds?H=i.DEPTH24_STENCIL8:b===Cn?H=i.DEPTH32F_STENCIL8:b===Ps&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pi||b===Ds?H=i.DEPTH_COMPONENT24:b===Cn?H=i.DEPTH_COMPONENT32F:b===Ps&&(H=i.DEPTH_COMPONENT16),H}function w(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==Rn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function y(C){const b=C.target;b.removeEventListener("dispose",y),R(b),b.isVideoTexture&&h.delete(b)}function A(C){const b=C.target;b.removeEventListener("dispose",A),E(b)}function R(C){const b=n.get(C);if(b.__webglInit===void 0)return;const H=C.source,$=d.get(H);if($){const et=$[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(C),Object.keys($).length===0&&d.delete(H)}n.remove(C)}function S(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const H=C.source,$=d.get(H);delete $[b.__cacheKey],r.memory.textures--}function E(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let et=0;et<b.__webglFramebuffer[$].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[$][et]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=C.textures;for(let $=0,et=H.length;$<et;$++){const Z=n.get(H[$]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),r.memory.textures--),n.remove(H[$])}n.remove(C)}let D=0;function I(){D=0}function F(){const C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function V(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function k(C,b){const H=n.get(C);if(C.isVideoTexture&&Nt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,C,b);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function G(C,b){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Y(H,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function K(C,b){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Y(H,C,b);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function W(C,b){const H=n.get(C);if(C.version>0&&H.__version!==C.version){j(H,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}const tt={[Cs]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},ct={[on]:i.NEAREST,[Cu]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[tr]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},St={[Iu]:i.NEVER,[zu]:i.ALWAYS,[Uu]:i.LESS,[sh]:i.LEQUAL,[Nu]:i.EQUAL,[Bu]:i.GEQUAL,[Fu]:i.GREATER,[Ou]:i.NOTEQUAL};function zt(C,b){if(b.type===Cn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Rn||b.magFilter===tr||b.magFilter===Zs||b.magFilter===Ai||b.minFilter===Rn||b.minFilter===tr||b.minFilter===Zs||b.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,tt[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,tt[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,tt[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ct[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,St[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===on||b.minFilter!==Zs&&b.minFilter!==Ai||b.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function oe(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",y));const $=b.source;let et=d.get($);et===void 0&&(et={},d.set($,et));const Z=V(b);if(Z!==C.__cacheKey){et[Z]===void 0&&(et[Z]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,H=!0),et[Z].usedTimes++;const It=et[C.__cacheKey];It!==void 0&&(et[C.__cacheKey].usedTimes--,It.usedTimes===0&&S(b)),C.__cacheKey=Z,C.__webglTexture=et[Z].texture}return H}function Lt(C,b,H){return Math.floor(Math.floor(C/H)/b)}function kt(C,b,H,$){const Z=C.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,H,$,b.data);else{Z.sort((rt,yt)=>rt.start-yt.start);let It=0;for(let rt=1;rt<Z.length;rt++){const yt=Z[It],Gt=Z[rt],Dt=yt.start+yt.count,xt=Lt(Gt.start,b.width,4),Yt=Lt(yt.start,b.width,4);Gt.start<=Dt+1&&xt===Yt&&Lt(Gt.start+Gt.count-1,b.width,4)===xt?yt.count=Math.max(yt.count,Gt.start+Gt.count-yt.start):(++It,Z[It]=Gt)}Z.length=It+1;const lt=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),Pt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let rt=0,yt=Z.length;rt<yt;rt++){const Gt=Z[rt],Dt=Math.floor(Gt.start/4),xt=Math.ceil(Gt.count/4),Yt=Dt%b.width,N=Math.floor(Dt/b.width),at=xt,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Yt,N,at,ft,H,$,b.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,lt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function Y(C,b,H){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);const et=oe(C,b),Z=b.source;e.bindTexture($,C.__webglTexture,i.TEXTURE0+H);const It=n.get(Z);if(Z.version!==It.__version||et===!0){e.activeTexture(i.TEXTURE0+H);const lt=ce.getPrimaries(ce.workingColorSpace),Ct=b.colorSpace===oi?null:ce.getPrimaries(b.colorSpace),Pt=b.colorSpace===oi||lt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let rt=x(b.image,!1,s.maxTextureSize);rt=de(b,rt);const yt=o.convert(b.format,b.colorSpace),Gt=o.convert(b.type);let Dt=_(b.internalFormat,yt,Gt,b.colorSpace,b.isVideoTexture);zt($,b);let xt;const Yt=b.mipmaps,N=b.isVideoTexture!==!0,at=It.__version===void 0||et===!0,ft=Z.dataReady,bt=w(b,rt);if(b.isDepthTexture)Dt=v(b.format===Is,b.type),at&&(N?e.texStorage2D(i.TEXTURE_2D,1,Dt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,rt.width,rt.height,0,yt,Gt,null));else if(b.isDataTexture)if(Yt.length>0){N&&at&&e.texStorage2D(i.TEXTURE_2D,bt,Dt,Yt[0].width,Yt[0].height);for(let it=0,Q=Yt.length;it<Q;it++)xt=Yt[it],N?ft&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,xt.width,xt.height,yt,Gt,xt.data):e.texImage2D(i.TEXTURE_2D,it,Dt,xt.width,xt.height,0,yt,Gt,xt.data);b.generateMipmaps=!1}else N?(at&&e.texStorage2D(i.TEXTURE_2D,bt,Dt,rt.width,rt.height),ft&&kt(b,rt,yt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Dt,rt.width,rt.height,0,yt,Gt,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){N&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Dt,Yt[0].width,Yt[0].height,rt.depth);for(let it=0,Q=Yt.length;it<Q;it++)if(xt=Yt[it],b.format!==xn)if(yt!==null)if(N){if(ft)if(b.layerUpdates.size>0){const Rt=Jc(xt.width,xt.height,b.format,b.type);for(const qt of b.layerUpdates){const ve=xt.data.subarray(qt*Rt/xt.data.BYTES_PER_ELEMENT,(qt+1)*Rt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,qt,xt.width,xt.height,1,yt,ve)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,xt.width,xt.height,rt.depth,yt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,Dt,xt.width,xt.height,rt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,xt.width,xt.height,rt.depth,yt,Gt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,Dt,xt.width,xt.height,rt.depth,0,yt,Gt,xt.data)}else{N&&at&&e.texStorage2D(i.TEXTURE_2D,bt,Dt,Yt[0].width,Yt[0].height);for(let it=0,Q=Yt.length;it<Q;it++)xt=Yt[it],b.format!==xn?yt!==null?N?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,xt.width,xt.height,yt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,it,Dt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ft&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,xt.width,xt.height,yt,Gt,xt.data):e.texImage2D(i.TEXTURE_2D,it,Dt,xt.width,xt.height,0,yt,Gt,xt.data)}else if(b.isDataArrayTexture)if(N){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Dt,rt.width,rt.height,rt.depth),ft)if(b.layerUpdates.size>0){const it=Jc(rt.width,rt.height,b.format,b.type);for(const Q of b.layerUpdates){const Rt=rt.data.subarray(Q*it/rt.data.BYTES_PER_ELEMENT,(Q+1)*it/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,yt,Gt,Rt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,yt,Gt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,rt.width,rt.height,rt.depth,0,yt,Gt,rt.data);else if(b.isData3DTexture)N?(at&&e.texStorage3D(i.TEXTURE_3D,bt,Dt,rt.width,rt.height,rt.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,yt,Gt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,rt.width,rt.height,rt.depth,0,yt,Gt,rt.data);else if(b.isFramebufferTexture){if(at)if(N)e.texStorage2D(i.TEXTURE_2D,bt,Dt,rt.width,rt.height);else{let it=rt.width,Q=rt.height;for(let Rt=0;Rt<bt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Dt,it,Q,0,yt,Gt,null),it>>=1,Q>>=1}}else if(Yt.length>0){if(N&&at){const it=_e(Yt[0]);e.texStorage2D(i.TEXTURE_2D,bt,Dt,it.width,it.height)}for(let it=0,Q=Yt.length;it<Q;it++)xt=Yt[it],N?ft&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,yt,Gt,xt):e.texImage2D(i.TEXTURE_2D,it,Dt,yt,Gt,xt);b.generateMipmaps=!1}else if(N){if(at){const it=_e(rt);e.texStorage2D(i.TEXTURE_2D,bt,Dt,it.width,it.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Gt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,yt,Gt,rt);m(b)&&f($),It.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function j(C,b,H){if(b.image.length!==6)return;const $=oe(C,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);const Z=n.get(et);if(et.version!==Z.__version||$===!0){e.activeTexture(i.TEXTURE0+H);const It=ce.getPrimaries(ce.workingColorSpace),lt=b.colorSpace===oi?null:ce.getPrimaries(b.colorSpace),Ct=b.colorSpace===oi||It===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Pt=b.isCompressedTexture||b.image[0].isCompressedTexture,rt=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let Q=0;Q<6;Q++)!Pt&&!rt?yt[Q]=x(b.image[Q],!0,s.maxCubemapSize):yt[Q]=rt?b.image[Q].image:b.image[Q],yt[Q]=de(b,yt[Q]);const Gt=yt[0],Dt=o.convert(b.format,b.colorSpace),xt=o.convert(b.type),Yt=_(b.internalFormat,Dt,xt,b.colorSpace),N=b.isVideoTexture!==!0,at=Z.__version===void 0||$===!0,ft=et.dataReady;let bt=w(b,Gt);zt(i.TEXTURE_CUBE_MAP,b);let it;if(Pt){N&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Yt,Gt.width,Gt.height);for(let Q=0;Q<6;Q++){it=yt[Q].mipmaps;for(let Rt=0;Rt<it.length;Rt++){const qt=it[Rt];b.format!==xn?Dt!==null?N?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,qt.width,qt.height,Dt,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,Yt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,qt.width,qt.height,Dt,xt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,Yt,qt.width,qt.height,0,Dt,xt,qt.data)}}}else{if(it=b.mipmaps,N&&at){it.length>0&&bt++;const Q=_e(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Yt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){N?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,yt[Q].width,yt[Q].height,Dt,xt,yt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,yt[Q].width,yt[Q].height,0,Dt,xt,yt[Q].data);for(let Rt=0;Rt<it.length;Rt++){const ve=it[Rt].image[Q].image;N?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,ve.width,ve.height,Dt,xt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,Yt,ve.width,ve.height,0,Dt,xt,ve.data)}}else{N?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Dt,xt,yt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,Dt,xt,yt[Q]);for(let Rt=0;Rt<it.length;Rt++){const qt=it[Rt];N?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,Dt,xt,qt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,Yt,Dt,xt,qt.image[Q])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),Z.__version=et.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function pt(C,b,H,$,et,Z){const It=o.convert(H.format,H.colorSpace),lt=o.convert(H.type),Ct=_(H.internalFormat,It,lt,H.colorSpace),Pt=n.get(b),rt=n.get(H);if(rt.__renderTarget=b,!Pt.__hasExternalTextures){const yt=Math.max(1,b.width>>Z),Gt=Math.max(1,b.height>>Z);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,Ct,yt,Gt,b.depth,0,It,lt,null):e.texImage2D(et,Z,Ct,yt,Gt,0,It,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),gt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,et,rt.__webglTexture,0,Xt(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,et,rt.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(C,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const $=b.depthTexture,et=$&&$.isDepthTexture?$.type:null,Z=v(b.stencilBuffer,et),It=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=Xt(b);gt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Z,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,C)}else{const $=b.textures;for(let et=0;et<$.length;et++){const Z=$[et],It=o.convert(Z.format,Z.colorSpace),lt=o.convert(Z.type),Ct=_(Z.internalFormat,It,lt,Z.colorSpace),Pt=Xt(b);H&&gt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Ct,b.width,b.height):gt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,Ct,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const et=$.__webglTexture,Z=Xt(b);if(b.depthTexture.format===Ls)gt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(b.depthTexture.format===Is)gt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Vt(C){const b=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=$}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?wt(b.__webglFramebuffer[0],C):wt(b.__webglFramebuffer,C)}else if(H){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),Ut(b.__webglDepthbuffer[$],C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}else{const $=C.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ut(b.__webglDepthbuffer,C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(C,b,H){const $=n.get(C);b!==void 0&&pt($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Vt(C)}function L(C){const b=C.texture,H=n.get(C),$=n.get(b);C.addEventListener("dispose",A);const et=C.textures,Z=C.isWebGLCubeRenderTarget===!0,It=et.length>1;if(It||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,r.memory.textures++),Z){H.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[lt]=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)H.__webglFramebuffer[lt][Ct]=i.createFramebuffer()}else H.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let lt=0;lt<b.mipmaps.length;lt++)H.__webglFramebuffer[lt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(It)for(let lt=0,Ct=et.length;lt<Ct;lt++){const Pt=n.get(et[lt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),r.memory.textures++)}if(C.samples>0&&gt(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const Ct=et[lt];H.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[lt]);const Pt=o.convert(Ct.format,Ct.colorSpace),rt=o.convert(Ct.type),yt=_(Ct.internalFormat,Pt,rt,Ct.colorSpace,C.isXRRenderTarget===!0),Gt=Xt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,H.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),zt(i.TEXTURE_CUBE_MAP,b);for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ct=0;Ct<b.mipmaps.length;Ct++)pt(H.__webglFramebuffer[lt][Ct],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ct);else pt(H.__webglFramebuffer[lt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(b)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let lt=0,Ct=et.length;lt<Ct;lt++){const Pt=et[lt],rt=n.get(Pt);let yt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,rt.__webglTexture),zt(yt,Pt),pt(H.__webglFramebuffer,C,Pt,i.COLOR_ATTACHMENT0+lt,yt,0),m(Pt)&&f(yt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),zt(lt,b),b.mipmaps&&b.mipmaps.length>0)for(let Ct=0;Ct<b.mipmaps.length;Ct++)pt(H.__webglFramebuffer[Ct],C,b,i.COLOR_ATTACHMENT0,lt,Ct);else pt(H.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,lt,0);m(b)&&f(lt),e.unbindTexture()}C.depthBuffer&&Vt(C)}function Zt(C){const b=C.textures;for(let H=0,$=b.length;H<$;H++){const et=b[H];if(m(et)){const Z=M(C),It=n.get(et).__webglTexture;e.bindTexture(Z,It),f(Z),e.unbindTexture()}}}const mt=[],dt=[];function ot(C){if(C.samples>0){if(gt(C)===!1){const b=C.textures,H=C.width,$=C.height;let et=i.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(C),lt=b.length>1;if(lt)for(let Pt=0;Pt<b.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Ct=C.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Pt=0;Pt<b.length;Pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);const rt=n.get(b[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,et,i.NEAREST),c===!0&&(mt.length=0,dt.length=0,mt.push(i.COLOR_ATTACHMENT0+Pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(mt.push(Z),dt.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Pt=0;Pt<b.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);const rt=n.get(b[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Xt(C){return Math.min(s.maxSamples,C.samples)}function gt(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Nt(C){const b=r.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function de(C,b){const H=C.colorSpace,$=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==rs&&H!==oi&&(ce.getTransfer(H)===pe?($!==xn||et!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function _e(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=he,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=gt}function Jg(i,t){function e(n,s=oi){let o;const r=ce.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kl)return i.BYTE;if(n===Jl)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===Va)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===ks)return i.HALF_FLOAT;if(n===th)return i.ALPHA;if(n===eh)return i.RGB;if(n===xn)return i.RGBA;if(n===Ls)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===Wa)return i.RED;if(n===Xa)return i.RED_INTEGER;if(n===nh)return i.RG;if(n===qa)return i.RG_INTEGER;if(n===Za)return i.RGBA_INTEGER;if(n===bo||n===To||n===Ao||n===Ro)if(r===pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===bo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===bo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===oa||n===ra)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ia)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ra)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===ca||n===la)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===aa||n===ca)return r===pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===la)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===ya||n===Sa||n===wa)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ha)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ya)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wa)return r===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===ba||n===Ta)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ea)return r===pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Aa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
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

}`;class t_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new mh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new li({vertexShader:jg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new z(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e_ extends us{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new t_,f={},M=e.getContextAttributes();let _=null,v=null;const w=[],y=[],A=new ut;let R=null;const S=new Ke;S.viewport=new me;const E=new Ke;E.viewport=new me;const D=[S,E],I=new yf;let F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=w[Y];return j===void 0&&(j=new yr,w[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=w[Y];return j===void 0&&(j=new yr,w[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=w[Y];return j===void 0&&(j=new yr,w[Y]=j),j.getHandSpace()};function k(Y){const j=y.indexOf(Y.inputSource);if(j===-1)return;const pt=w[j];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,l||r),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<w.length;Y++){const j=y[Y];j!==null&&(y[Y]=null,w[Y].disconnect(j))}F=null,V=null,m.reset();for(const Y in f)delete f[Y];t.setRenderTarget(_),p=null,d=null,u=null,s=null,v=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ut=null,wt=null;M.depth&&(wt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=M.stencil?Is:Ls,Ut=M.stencil?Ds:Pi);const Vt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:o};u=this.getBinding(),d=u.createProjectionLayer(Vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Di(d.textureWidth,d.textureHeight,{format:xn,type:Ln,depthTexture:new ph(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Di(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Y){for(let j=0;j<Y.removed.length;j++){const pt=Y.removed[j],Ut=y.indexOf(pt);Ut>=0&&(y[Ut]=null,w[Ut].disconnect(pt))}for(let j=0;j<Y.added.length;j++){const pt=Y.added[j];let Ut=y.indexOf(pt);if(Ut===-1){for(let Vt=0;Vt<w.length;Vt++)if(Vt>=y.length){y.push(pt),Ut=Vt;break}else if(y[Vt]===null){y[Vt]=pt,Ut=Vt;break}if(Ut===-1)break}const wt=w[Ut];wt&&wt.connect(pt)}}const W=new P,tt=new P;function ct(Y,j,pt){W.setFromMatrixPosition(j.matrixWorld),tt.setFromMatrixPosition(pt.matrixWorld);const Ut=W.distanceTo(tt),wt=j.projectionMatrix.elements,Vt=pt.projectionMatrix.elements,he=wt[14]/(wt[10]-1),L=wt[14]/(wt[10]+1),Zt=(wt[9]+1)/wt[5],mt=(wt[9]-1)/wt[5],dt=(wt[8]-1)/wt[0],ot=(Vt[8]+1)/Vt[0],Xt=he*dt,gt=he*ot,Nt=Ut/(-dt+ot),de=Nt*-dt;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(de),Y.translateZ(Nt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const _e=he+Nt,C=L+Nt,b=Xt-de,H=gt+(Ut-de),$=Zt*L/C*_e,et=mt*L/C*_e;Y.projectionMatrix.makePerspective(b,H,$,et,_e,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function St(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let j=Y.near,pt=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),I.near=E.near=S.near=j,I.far=E.far=S.far=pt,(F!==I.near||V!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,V=I.far),I.layers.mask=Y.layers.mask|6,S.layers.mask=I.layers.mask&3,E.layers.mask=I.layers.mask&5;const Ut=Y.parent,wt=I.cameras;St(I,Ut);for(let Vt=0;Vt<wt.length;Vt++)St(wt[Vt],Ut);wt.length===2?ct(I,S,E):I.projectionMatrix.copy(S.projectionMatrix),zt(Y,I,Ut)};function zt(Y,j,pt){pt===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=as*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Y){return f[Y]};let oe=null;function Lt(Y,j){if(h=j.getViewerPose(l||r),g=j,h!==null){const pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Ut=!1;pt.length!==I.cameras.length&&(I.cameras.length=0,Ut=!0);for(let L=0;L<pt.length;L++){const Zt=pt[L];let mt=null;if(p!==null)mt=p.getViewport(Zt);else{const ot=u.getViewSubImage(d,Zt);mt=ot.viewport,L===0&&(t.setRenderTargetTextures(v,ot.colorTexture,ot.depthStencilTexture),t.setRenderTarget(v))}let dt=D[L];dt===void 0&&(dt=new Ke,dt.layers.enable(L),dt.viewport=new me,D[L]=dt),dt.matrix.fromArray(Zt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Zt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(mt.x,mt.y,mt.width,mt.height),L===0&&(I.matrix.copy(dt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ut===!0&&I.cameras.push(dt)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const L=u.getDepthInformation(pt[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<pt.length;L++){const Zt=pt[L].camera;if(Zt){let mt=f[Zt];mt||(mt=new mh,f[Zt]=mt);const dt=u.getCameraImage(Zt);mt.sourceTexture=dt}}}}for(let pt=0;pt<w.length;pt++){const Ut=y[pt],wt=w[pt];Ut!==null&&wt!==void 0&&wt.update(Ut,j,l||r)}oe&&oe(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const kt=new Rh;kt.setAnimationLoop(Lt),this.setAnimationLoop=function(Y){oe=Y},this.dispose=function(){}}}const _i=new yn,n_=new jt;function i_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,uh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,_,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),u(m,f)):f.isMeshPhongMaterial?(o(m,f),h(m,f)):f.isMeshStandardMaterial?(o(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(o(m,f),g(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),x(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,M,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Je&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Je&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),_=M.envMap,v=M.envMapRotation;_&&(m.envMap.value=_,_i.copy(v),_i.x*=-1,_i.y*=-1,_i.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(_i)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){const v=_.program;n.uniformBlockBinding(M,v)}function l(M,_){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const w=_.program;n.updateUBOMapping(M,w);const y=t.render.frame;o[M.id]!==y&&(d(M),o[M.id]=y)}function h(M){const _=u();M.__bindingPointIndex=_;const v=i.createBuffer(),w=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const _=s[M.id],v=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let y=0,A=v.length;y<A;y++){const R=Array.isArray(v[y])?v[y]:[v[y]];for(let S=0,E=R.length;S<E;S++){const D=R[S];if(p(D,y,S,w)===!0){const I=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let k=0;k<F.length;k++){const G=F[k],K=x(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,I+V,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,_,v,w){const y=M.value,A=_+"_"+v;if(w[A]===void 0)return typeof y=="number"||typeof y=="boolean"?w[A]=y:w[A]=y.clone(),!0;{const R=w[A];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return w[A]=y,!0}else if(R.equals(y)===!1)return R.copy(y),!0}return!1}function g(M){const _=M.uniforms;let v=0;const w=16;for(let A=0,R=_.length;A<R;A++){const S=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,D=S.length;E<D;E++){const I=S[E],F=Array.isArray(I.value)?I.value:[I.value];for(let V=0,k=F.length;V<k;V++){const G=F[V],K=x(G),W=v%w,tt=W%K.boundary,ct=W+tt;v+=tt,ct!==0&&w-ct<K.storage&&(v+=w-ct),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=K.storage}}}const y=v%w;return y>0&&(v+=w-y),M.__size=v,M.__cache={},this}function x(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const v=r.indexOf(_.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:c,update:l,dispose:f}}class o_{constructor(t={}){const{canvas:e=nd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=Ce;let y=0,A=0,R=null,S=-1,E=null;const D=new me,I=new me;let F=null;const V=new ne(0);let k=0,G=e.width,K=e.height,W=1,tt=null,ct=null;const St=new me(0,0,G,K),zt=new me(0,0,G,K);let oe=!1;const Lt=new Ja;let kt=!1,Y=!1;const j=new jt,pt=new P,Ut=new me,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function he(){return R===null?W:1}let L=n;function Zt(T,O){return e.getContext(T,O)}try{const T={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ka}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",it,!1),L===null){const O="webgl2";if(L=Zt(O,T),L===null)throw Zt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let mt,dt,ot,Xt,gt,Nt,de,_e,C,b,H,$,et,Z,It,lt,Ct,Pt,rt,yt,Gt,Dt,xt,Yt;function N(){mt=new m0(L),mt.init(),Dt=new Jg(L,mt),dt=new c0(L,mt,t,Dt),ot=new $g(L,mt),dt.reversedDepthBuffer&&d&&ot.buffers.depth.setReversed(!0),Xt=new v0(L),gt=new Fg,Nt=new Kg(L,mt,ot,gt,dt,Dt,Xt),de=new h0(v),_e=new p0(v),C=new Ef(L),xt=new r0(L,C),b=new g0(L,C,Xt,xt),H=new M0(L,b,C,Xt),rt=new x0(L,dt,Nt),lt=new l0(gt),$=new Ng(v,de,_e,mt,dt,xt,lt),et=new i_(v,gt),Z=new Bg,It=new Wg(mt),Pt=new o0(v,de,_e,ot,H,p,c),Ct=new Zg(v,H,dt),Yt=new s_(L,Xt,dt,ot),yt=new a0(L,mt,Xt),Gt=new _0(L,mt,Xt),Xt.programs=$.programs,v.capabilities=dt,v.extensions=mt,v.properties=gt,v.renderLists=Z,v.shadowMap=Ct,v.state=ot,v.info=Xt}N();const at=new e_(v,L);this.xr=at,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(G,K,!1))},this.getSize=function(T){return T.set(G,K)},this.setSize=function(T,O,X=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,K=O,e.width=Math.floor(T*W),e.height=Math.floor(O*W),X===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(G*W,K*W).floor()},this.setDrawingBufferSize=function(T,O,X){G=T,K=O,W=X,e.width=Math.floor(T*X),e.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(St)},this.setViewport=function(T,O,X,q){T.isVector4?St.set(T.x,T.y,T.z,T.w):St.set(T,O,X,q),ot.viewport(D.copy(St).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(zt)},this.setScissor=function(T,O,X,q){T.isVector4?zt.set(T.x,T.y,T.z,T.w):zt.set(T,O,X,q),ot.scissor(I.copy(zt).multiplyScalar(W).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(T){ot.setScissorTest(oe=T)},this.setOpaqueSort=function(T){tt=T},this.setTransparentSort=function(T){ct=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,X=!0){let q=0;if(T){let B=!1;if(R!==null){const st=R.texture.format;B=st===Za||st===qa||st===Xa}if(B){const st=R.texture.type,Mt=st===Ln||st===Pi||st===Ps||st===Ds||st===Ha||st===Ga,At=Pt.getClearColor(),Et=Pt.getClearAlpha(),Ht=At.r,Wt=At.g,Ft=At.b;Mt?(g[0]=Ht,g[1]=Wt,g[2]=Ft,g[3]=Et,L.clearBufferuiv(L.COLOR,0,g)):(x[0]=Ht,x[1]=Wt,x[2]=Ft,x[3]=Et,L.clearBufferiv(L.COLOR,0,x))}else q|=L.COLOR_BUFFER_BIT}O&&(q|=L.DEPTH_BUFFER_BIT),X&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",it,!1),Pt.dispose(),Z.dispose(),It.dispose(),gt.dispose(),de.dispose(),_e.dispose(),H.dispose(),xt.dispose(),Yt.dispose(),$.dispose(),at.dispose(),at.removeEventListener("sessionstart",wn),at.removeEventListener("sessionend",hc),hi.stop()};function ft(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=Xt.autoReset,O=Ct.enabled,X=Ct.autoUpdate,q=Ct.needsUpdate,B=Ct.type;N(),Xt.autoReset=T,Ct.enabled=O,Ct.autoUpdate=X,Ct.needsUpdate=q,Ct.type=B}function it(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Q(T){const O=T.target;O.removeEventListener("dispose",Q),Rt(O)}function Rt(T){qt(T),gt.remove(T)}function qt(T){const O=gt.get(T).programs;O!==void 0&&(O.forEach(function(X){$.releaseProgram(X)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,q,B,st){O===null&&(O=wt);const Mt=B.isMesh&&B.matrixWorld.determinant()<0,At=$h(T,O,X,q,B);ot.setMaterial(q,Mt);let Et=X.index,Ht=1;if(q.wireframe===!0){if(Et=b.getWireframeAttribute(X),Et===void 0)return;Ht=2}const Wt=X.drawRange,Ft=X.attributes.position;let se=Wt.start*Ht,fe=(Wt.start+Wt.count)*Ht;st!==null&&(se=Math.max(se,st.start*Ht),fe=Math.min(fe,(st.start+st.count)*Ht)),Et!==null?(se=Math.max(se,0),fe=Math.min(fe,Et.count)):Ft!=null&&(se=Math.max(se,0),fe=Math.min(fe,Ft.count));const Te=fe-se;if(Te<0||Te===1/0)return;xt.setup(B,q,At,X,Et);let Me,ge=yt;if(Et!==null&&(Me=C.get(Et),ge=Gt,ge.setIndex(Me)),B.isMesh)q.wireframe===!0?(ot.setLineWidth(q.wireframeLinewidth*he()),ge.setMode(L.LINES)):ge.setMode(L.TRIANGLES);else if(B.isLine){let Ot=q.linewidth;Ot===void 0&&(Ot=1),ot.setLineWidth(Ot*he()),B.isLineSegments?ge.setMode(L.LINES):B.isLineLoop?ge.setMode(L.LINE_LOOP):ge.setMode(L.LINE_STRIP)}else B.isPoints?ge.setMode(L.POINTS):B.isSprite&&ge.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))ge.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ot=B._multiDrawStarts,Se=B._multiDrawCounts,ae=B._multiDrawCount,Qe=Et?C.get(Et).bytesPerElement:1,Ni=gt.get(q).currentProgram.getUniforms();for(let tn=0;tn<ae;tn++)Ni.setValue(L,"_gl_DrawID",tn),ge.render(Ot[tn]/Qe,Se[tn])}else if(B.isInstancedMesh)ge.renderInstances(se,Te,B.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Se=Math.min(X.instanceCount,Ot);ge.renderInstances(se,Te,Se)}else ge.render(se,Te)};function ve(T,O,X){T.transparent===!0&&T.side===Ae&&T.forceSinglePass===!1?(T.side=Je,T.needsUpdate=!0,qs(T,O,X),T.side=ci,T.needsUpdate=!0,qs(T,O,X),T.side=Ae):qs(T,O,X)}this.compile=function(T,O,X=null){X===null&&(X=T),f=It.get(X),f.init(O),_.push(f),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),T!==X&&T.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const q=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const st=B.material;if(st)if(Array.isArray(st))for(let Mt=0;Mt<st.length;Mt++){const At=st[Mt];ve(At,X,B),q.add(At)}else ve(st,X,B),q.add(st)}),f=_.pop(),q},this.compileAsync=function(T,O,X=null){const q=this.compile(T,O,X);return new Promise(B=>{function st(){if(q.forEach(function(Mt){gt.get(Mt).currentProgram.isReady()&&q.delete(Mt)}),q.size===0){B(T);return}setTimeout(st,10)}mt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ue=null;function Nn(T){ue&&ue(T)}function wn(){hi.stop()}function hc(){hi.start()}const hi=new Rh;hi.setAnimationLoop(Nn),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){ue=T,at.setAnimationLoop(T),T===null?hi.stop():hi.start()},at.addEventListener("sessionstart",wn),at.addEventListener("sessionend",hc),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(O),O=at.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,R),f=It.get(T,_.length),f.init(O),_.push(f),j.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Lt.setFromProjectionMatrix(j,Pn,O.reversedDepth),Y=this.localClippingEnabled,kt=lt.init(this.clippingPlanes,Y),m=Z.get(T,M.length),m.init(),M.push(m),at.enabled===!0&&at.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&jo(st,O,-1/0,v.sortObjects)}jo(T,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(tt,ct),Vt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Vt&&Pt.addToRenderList(m,T),this.info.render.frame++,kt===!0&&lt.beginShadows();const X=f.state.shadowsArray;Ct.render(X,T,O),kt===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){const st=O.cameras;if(B.length>0)for(let Mt=0,At=st.length;Mt<At;Mt++){const Et=st[Mt];dc(q,B,T,Et)}Vt&&Pt.render(T);for(let Mt=0,At=st.length;Mt<At;Mt++){const Et=st[Mt];uc(m,T,Et,Et.viewport)}}else B.length>0&&dc(q,B,T,O),Vt&&Pt.render(T),uc(m,T,O);R!==null&&A===0&&(Nt.updateMultisampleRenderTarget(R),Nt.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(v,T,O),xt.resetDefaultState(),S=-1,E=null,_.pop(),_.length>0?(f=_[_.length-1],kt===!0&&lt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function jo(T,O,X,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Lt.intersectsSprite(T)){q&&Ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(j);const Mt=H.update(T),At=T.material;At.visible&&m.push(T,Mt,At,X,Ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Lt.intersectsObject(T))){const Mt=H.update(T),At=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ut.copy(T.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ut.copy(Mt.boundingSphere.center)),Ut.applyMatrix4(T.matrixWorld).applyMatrix4(j)),Array.isArray(At)){const Et=Mt.groups;for(let Ht=0,Wt=Et.length;Ht<Wt;Ht++){const Ft=Et[Ht],se=At[Ft.materialIndex];se&&se.visible&&m.push(T,Mt,se,X,Ut.z,Ft)}}else At.visible&&m.push(T,Mt,At,X,Ut.z,null)}}const st=T.children;for(let Mt=0,At=st.length;Mt<At;Mt++)jo(st[Mt],O,X,q)}function uc(T,O,X,q){const B=T.opaque,st=T.transmissive,Mt=T.transparent;f.setupLightsView(X),kt===!0&&lt.setGlobalState(v.clippingPlanes,X),q&&ot.viewport(D.copy(q)),B.length>0&&Xs(B,O,X),st.length>0&&Xs(st,O,X),Mt.length>0&&Xs(Mt,O,X),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function dc(T,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new Di(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?ks:Ln,minFilter:Ai,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const st=f.state.transmissionRenderTarget[q.id],Mt=q.viewport||D;st.setSize(Mt.z*v.transmissionResolutionScale,Mt.w*v.transmissionResolutionScale);const At=v.getRenderTarget(),Et=v.getActiveCubeFace(),Ht=v.getActiveMipmapLevel();v.setRenderTarget(st),v.getClearColor(V),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),Vt&&Pt.render(X);const Wt=v.toneMapping;v.toneMapping=ai;const Ft=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),kt===!0&&lt.setGlobalState(v.clippingPlanes,q),Xs(T,X,q),Nt.updateMultisampleRenderTarget(st),Nt.updateRenderTargetMipmap(st),mt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let fe=0,Te=O.length;fe<Te;fe++){const Me=O[fe],ge=Me.object,Ot=Me.geometry,Se=Me.material,ae=Me.group;if(Se.side===Ae&&ge.layers.test(q.layers)){const Qe=Se.side;Se.side=Je,Se.needsUpdate=!0,fc(ge,X,q,Ot,Se,ae),Se.side=Qe,Se.needsUpdate=!0,se=!0}}se===!0&&(Nt.updateMultisampleRenderTarget(st),Nt.updateRenderTargetMipmap(st))}v.setRenderTarget(At,Et,Ht),v.setClearColor(V,k),Ft!==void 0&&(q.viewport=Ft),v.toneMapping=Wt}function Xs(T,O,X){const q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,st=T.length;B<st;B++){const Mt=T[B],At=Mt.object,Et=Mt.geometry,Ht=Mt.group;let Wt=Mt.material;Wt.allowOverride===!0&&q!==null&&(Wt=q),At.layers.test(X.layers)&&fc(At,O,X,Et,Wt,Ht)}}function fc(T,O,X,q,B,st){T.onBeforeRender(v,O,X,q,B,st),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,O,X,q,T,st),B.transparent===!0&&B.side===Ae&&B.forceSinglePass===!1?(B.side=Je,B.needsUpdate=!0,v.renderBufferDirect(X,O,q,B,T,st),B.side=ci,B.needsUpdate=!0,v.renderBufferDirect(X,O,q,B,T,st),B.side=Ae):v.renderBufferDirect(X,O,q,B,T,st),T.onAfterRender(v,O,X,q,B,st)}function qs(T,O,X){O.isScene!==!0&&(O=wt);const q=gt.get(T),B=f.state.lights,st=f.state.shadowsArray,Mt=B.state.version,At=$.getParameters(T,B.state,st,O,X),Et=$.getProgramCacheKey(At);let Ht=q.programs;q.environment=T.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(T.isMeshStandardMaterial?_e:de).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ht===void 0&&(T.addEventListener("dispose",Q),Ht=new Map,q.programs=Ht);let Wt=Ht.get(Et);if(Wt!==void 0){if(q.currentProgram===Wt&&q.lightsStateVersion===Mt)return mc(T,At),Wt}else At.uniforms=$.getUniforms(T),T.onBeforeCompile(At,v),Wt=$.acquireProgram(At,Et),Ht.set(Et,Wt),q.uniforms=At.uniforms;const Ft=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=lt.uniform),mc(T,At),q.needsLights=Jh(T),q.lightsStateVersion=Mt,q.needsLights&&(Ft.ambientLightColor.value=B.state.ambient,Ft.lightProbe.value=B.state.probe,Ft.directionalLights.value=B.state.directional,Ft.directionalLightShadows.value=B.state.directionalShadow,Ft.spotLights.value=B.state.spot,Ft.spotLightShadows.value=B.state.spotShadow,Ft.rectAreaLights.value=B.state.rectArea,Ft.ltc_1.value=B.state.rectAreaLTC1,Ft.ltc_2.value=B.state.rectAreaLTC2,Ft.pointLights.value=B.state.point,Ft.pointLightShadows.value=B.state.pointShadow,Ft.hemisphereLights.value=B.state.hemi,Ft.directionalShadowMap.value=B.state.directionalShadowMap,Ft.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ft.spotShadowMap.value=B.state.spotShadowMap,Ft.spotLightMatrix.value=B.state.spotLightMatrix,Ft.spotLightMap.value=B.state.spotLightMap,Ft.pointShadowMap.value=B.state.pointShadowMap,Ft.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Wt,q.uniformsList=null,Wt}function pc(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Co.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function mc(T,O){const X=gt.get(T);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function $h(T,O,X,q,B){O.isScene!==!0&&(O=wt),Nt.resetTextureUnits();const st=O.fog,Mt=q.isMeshStandardMaterial?O.environment:null,At=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:rs,Et=(q.isMeshStandardMaterial?_e:de).get(q.envMap||Mt),Ht=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Wt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ft=!!X.morphAttributes.position,se=!!X.morphAttributes.normal,fe=!!X.morphAttributes.color;let Te=ai;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Te=v.toneMapping);const Me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ge=Me!==void 0?Me.length:0,Ot=gt.get(q),Se=f.state.lights;if(kt===!0&&(Y===!0||T!==E)){const Ge=T===E&&q.id===S;lt.setState(q,T,Ge)}let ae=!1;q.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Se.state.version||Ot.outputColorSpace!==At||B.isBatchedMesh&&Ot.batching===!1||!B.isBatchedMesh&&Ot.batching===!0||B.isBatchedMesh&&Ot.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ot.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ot.instancing===!1||!B.isInstancedMesh&&Ot.instancing===!0||B.isSkinnedMesh&&Ot.skinning===!1||!B.isSkinnedMesh&&Ot.skinning===!0||B.isInstancedMesh&&Ot.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ot.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ot.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ot.instancingMorph===!1&&B.morphTexture!==null||Ot.envMap!==Et||q.fog===!0&&Ot.fog!==st||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==lt.numPlanes||Ot.numIntersection!==lt.numIntersection)||Ot.vertexAlphas!==Ht||Ot.vertexTangents!==Wt||Ot.morphTargets!==Ft||Ot.morphNormals!==se||Ot.morphColors!==fe||Ot.toneMapping!==Te||Ot.morphTargetsCount!==ge)&&(ae=!0):(ae=!0,Ot.__version=q.version);let Qe=Ot.currentProgram;ae===!0&&(Qe=qs(q,O,B));let Ni=!1,tn=!1,ps=!1;const we=Qe.getUniforms(),cn=Ot.uniforms;if(ot.useProgram(Qe.program)&&(Ni=!0,tn=!0,ps=!0),q.id!==S&&(S=q.id,tn=!0),Ni||E!==T){ot.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),we.setValue(L,"projectionMatrix",T.projectionMatrix),we.setValue(L,"viewMatrix",T.matrixWorldInverse);const qe=we.map.cameraPosition;qe!==void 0&&qe.setValue(L,pt.setFromMatrixPosition(T.matrixWorld)),dt.logarithmicDepthBuffer&&we.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&we.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,tn=!0,ps=!0)}if(B.isSkinnedMesh){we.setOptional(L,B,"bindMatrix"),we.setOptional(L,B,"bindMatrixInverse");const Ge=B.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),we.setValue(L,"boneTexture",Ge.boneTexture,Nt))}B.isBatchedMesh&&(we.setOptional(L,B,"batchingTexture"),we.setValue(L,"batchingTexture",B._matricesTexture,Nt),we.setOptional(L,B,"batchingIdTexture"),we.setValue(L,"batchingIdTexture",B._indirectTexture,Nt),we.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&we.setValue(L,"batchingColorTexture",B._colorsTexture,Nt));const ln=X.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&rt.update(B,X,Qe),(tn||Ot.receiveShadow!==B.receiveShadow)&&(Ot.receiveShadow=B.receiveShadow,we.setValue(L,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(cn.envMap.value=Et,cn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(cn.envMapIntensity.value=O.environmentIntensity),tn&&(we.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&Kh(cn,ps),st&&q.fog===!0&&et.refreshFogUniforms(cn,st),et.refreshMaterialUniforms(cn,q,W,K,f.state.transmissionRenderTarget[T.id]),Co.upload(L,pc(Ot),cn,Nt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Co.upload(L,pc(Ot),cn,Nt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&we.setValue(L,"center",B.center),we.setValue(L,"modelViewMatrix",B.modelViewMatrix),we.setValue(L,"normalMatrix",B.normalMatrix),we.setValue(L,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ge=q.uniformsGroups;for(let qe=0,Qo=Ge.length;qe<Qo;qe++){const ui=Ge[qe];Yt.update(ui,Qe),Yt.bind(ui,Qe)}}return Qe}function Kh(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Jh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,O,X){const q=gt.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),gt.get(T.texture).__webglTexture=O,gt.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const X=gt.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const jh=L.createFramebuffer();this.setRenderTarget=function(T,O=0,X=0){R=T,y=O,A=X;let q=!0,B=null,st=!1,Mt=!1;if(T){const Et=gt.get(T);if(Et.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(Et.__webglFramebuffer===void 0)Nt.setupRenderTarget(T);else if(Et.__hasExternalTextures)Nt.rebindTextures(T,gt.get(T.texture).__webglTexture,gt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ft=T.depthTexture;if(Et.__boundDepthTexture!==Ft){if(Ft!==null&&gt.has(Ft)&&(T.width!==Ft.image.width||T.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(T)}}const Ht=T.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Mt=!0);const Wt=gt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[O])?B=Wt[O][X]:B=Wt[O],st=!0):T.samples>0&&Nt.useMultisampledRTT(T)===!1?B=gt.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?B=Wt[X]:B=Wt,D.copy(T.viewport),I.copy(T.scissor),F=T.scissorTest}else D.copy(St).multiplyScalar(W).floor(),I.copy(zt).multiplyScalar(W).floor(),F=oe;if(X!==0&&(B=jh),ot.bindFramebuffer(L.FRAMEBUFFER,B)&&q&&ot.drawBuffers(T,B),ot.viewport(D),ot.scissor(I),ot.setScissorTest(F),st){const Et=gt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,X)}else if(Mt){const Et=O;for(let Ht=0;Ht<T.textures.length;Ht++){const Wt=gt.get(T.textures[Ht]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ht,Wt.__webglTexture,X,Et)}}else if(T!==null&&X!==0){const Et=gt.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,X)}S=-1},this.readRenderTargetPixels=function(T,O,X,q,B,st,Mt,At=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=gt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){ot.bindFramebuffer(L.FRAMEBUFFER,Et);try{const Ht=T.textures[At],Wt=Ht.format,Ft=Ht.type;if(!dt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&X>=0&&X<=T.height-B&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+At),L.readPixels(O,X,q,B,Dt.convert(Wt),Dt.convert(Ft),st))}finally{const Ht=R!==null?gt.get(R).__webglFramebuffer:null;ot.bindFramebuffer(L.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(T,O,X,q,B,st,Mt,At=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=gt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et)if(O>=0&&O<=T.width-q&&X>=0&&X<=T.height-B){ot.bindFramebuffer(L.FRAMEBUFFER,Et);const Ht=T.textures[At],Wt=Ht.format,Ft=Ht.type;if(!dt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,se),L.bufferData(L.PIXEL_PACK_BUFFER,st.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+At),L.readPixels(O,X,q,B,Dt.convert(Wt),Dt.convert(Ft),0);const fe=R!==null?gt.get(R).__webglFramebuffer:null;ot.bindFramebuffer(L.FRAMEBUFFER,fe);const Te=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await id(L,Te,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,se),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,st),L.deleteBuffer(se),L.deleteSync(Te),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,X=0){const q=Math.pow(2,-X),B=Math.floor(T.image.width*q),st=Math.floor(T.image.height*q),Mt=O!==null?O.x:0,At=O!==null?O.y:0;Nt.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Mt,At,B,st),ot.unbindTexture()};const Qh=L.createFramebuffer(),tu=L.createFramebuffer();this.copyTextureToTexture=function(T,O,X=null,q=null,B=0,st=null){st===null&&(B!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=B,B=0):st=0);let Mt,At,Et,Ht,Wt,Ft,se,fe,Te;const Me=T.isCompressedTexture?T.mipmaps[st]:T.image;if(X!==null)Mt=X.max.x-X.min.x,At=X.max.y-X.min.y,Et=X.isBox3?X.max.z-X.min.z:1,Ht=X.min.x,Wt=X.min.y,Ft=X.isBox3?X.min.z:0;else{const ln=Math.pow(2,-B);Mt=Math.floor(Me.width*ln),At=Math.floor(Me.height*ln),T.isDataArrayTexture?Et=Me.depth:T.isData3DTexture?Et=Math.floor(Me.depth*ln):Et=1,Ht=0,Wt=0,Ft=0}q!==null?(se=q.x,fe=q.y,Te=q.z):(se=0,fe=0,Te=0);const ge=Dt.convert(O.format),Ot=Dt.convert(O.type);let Se;O.isData3DTexture?(Nt.setTexture3D(O,0),Se=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Nt.setTexture2DArray(O,0),Se=L.TEXTURE_2D_ARRAY):(Nt.setTexture2D(O,0),Se=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const ae=L.getParameter(L.UNPACK_ROW_LENGTH),Qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ni=L.getParameter(L.UNPACK_SKIP_PIXELS),tn=L.getParameter(L.UNPACK_SKIP_ROWS),ps=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ht),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ft);const we=T.isDataArrayTexture||T.isData3DTexture,cn=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const ln=gt.get(T),Ge=gt.get(O),qe=gt.get(ln.__renderTarget),Qo=gt.get(Ge.__renderTarget);ot.bindFramebuffer(L.READ_FRAMEBUFFER,qe.__webglFramebuffer),ot.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qo.__webglFramebuffer);for(let ui=0;ui<Et;ui++)we&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.get(T).__webglTexture,B,Ft+ui),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.get(O).__webglTexture,st,Te+ui)),L.blitFramebuffer(Ht,Wt,Mt,At,se,fe,Mt,At,L.DEPTH_BUFFER_BIT,L.NEAREST);ot.bindFramebuffer(L.READ_FRAMEBUFFER,null),ot.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||gt.has(T)){const ln=gt.get(T),Ge=gt.get(O);ot.bindFramebuffer(L.READ_FRAMEBUFFER,Qh),ot.bindFramebuffer(L.DRAW_FRAMEBUFFER,tu);for(let qe=0;qe<Et;qe++)we?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,B,Ft+qe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,B),cn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,st,Te+qe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,st),B!==0?L.blitFramebuffer(Ht,Wt,Mt,At,se,fe,Mt,At,L.COLOR_BUFFER_BIT,L.NEAREST):cn?L.copyTexSubImage3D(Se,st,se,fe,Te+qe,Ht,Wt,Mt,At):L.copyTexSubImage2D(Se,st,se,fe,Ht,Wt,Mt,At);ot.bindFramebuffer(L.READ_FRAMEBUFFER,null),ot.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else cn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Se,st,se,fe,Te,Mt,At,Et,ge,Ot,Me.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,st,se,fe,Te,Mt,At,Et,ge,Me.data):L.texSubImage3D(Se,st,se,fe,Te,Mt,At,Et,ge,Ot,Me):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,st,se,fe,Mt,At,ge,Ot,Me.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,st,se,fe,Me.width,Me.height,ge,Me.data):L.texSubImage2D(L.TEXTURE_2D,st,se,fe,Mt,At,ge,Ot,Me);L.pixelStorei(L.UNPACK_ROW_LENGTH,ae),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ni),L.pixelStorei(L.UNPACK_SKIP_ROWS,tn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ps),st===0&&O.generateMipmaps&&L.generateMipmap(Se),ot.unbindTexture()},this.initRenderTarget=function(T){gt.get(T).__webglFramebuffer===void 0&&Nt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Nt.setTextureCube(T,0):T.isData3DTexture?Nt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Nt.setTexture2DArray(T,0):Nt.setTexture2D(T,0),ot.unbindTexture()},this.resetState=function(){y=0,A=0,R=null,ot.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}const zs=[{points:[[-24,118],[-24,22],[-24,-17]],width:14},{points:[[-80,22],[-24,22],[-5,22]],width:12},{points:[[-80,22],[-96,12],[-101,0],[-95,-14],[-82,-20],[-70,-24],[-58,-26],[-40,-24],[-27,-20],[-24,-17]],width:11},{points:[[-24,-17],[-15,-28],[-7,-45],[-6,-60],[-2,-69],[12,-75],[22,-82]],width:11},{points:[[22,-82],[3,-82],[-8,-84],[-13,-90]],width:8.5},{points:[[22,-82],[140,-82]],width:18},{points:[[31,-82],[31,-68]],width:9},{points:[[69,-101],[69,-60]],width:11},{points:[[140,-82],[140,-101],[128,-101],[128,-82]],width:16}],Oo=.075,r_=Oo,Ur=new U({color:"#343b3c",roughness:.96}),Nr=new U({color:"#b5b2a8",roughness:.92}),Sl=new U({color:"#d8d1bd",roughness:.72,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Le=.16,wl=2.8;function El(i){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");if(!e)throw new Error(`Unable to create the campus ${i} texture.`);const n=e.createImageData(t.width,t.height);let s=i==="asphalt"?71:173;for(let r=0;r<n.data.length;r+=4){s=s*16807%2147483647;const a=(s-1)/2147483646,c=i==="asphalt"?176+Math.floor(a*66):198+Math.floor(a*48);n.data[r]=c,n.data[r+1]=c,n.data[r+2]=c,n.data[r+3]=255}e.putImageData(n,0,0),e.globalAlpha=i==="asphalt"?.08:.1,e.strokeStyle=i==="asphalt"?"#3d4545":"#68675f",e.lineWidth=i==="asphalt"?2:1;for(let r=16;r<128;r+=32)e.beginPath(),e.moveTo(0,r),e.lineTo(128,r),e.stroke();const o=new qn(t);return o.colorSpace=Ce,o.wrapS=Cs,o.wrapT=Cs,o.repeat.set(5,5),o.anisotropy=8,o}function a_(i,t,e){let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const[r,a]=e[s],[c,l]=e[o];a>t!=l>t&&i<(c-r)*(t-a)/(l-a)+r&&(n=!n)}return n}function c_(i,t,e){let n=1/0;for(let s=0;s<e.length;s++){const[o,r]=e[s],[a,c]=e[(s+1)%e.length];n=Math.min(n,Ih(i,t,o,r,a,c))}return n}function Ih(i,t,e,n,s,o){const r=s-e,a=o-n,c=r*r+a*a,l=c===0?0:Re.clamp(((i-e)*r+(t-n)*a)/c,0,1);return Math.hypot(i-(e+l*r),t-(n+l*a))}function l_(i,t){const e=[];let n=1/0,s=-1/0,o=1/0,r=-1/0;for(const m of zs)for(let f=0;f<m.points.length-1;f++){const[M,_]=m.points[f],[v,w]=m.points[f+1],y=m.width/2;e.push({ax:M,az:_,bx:v,bz:w,halfWidth:y}),n=Math.min(n,M,v),s=Math.max(s,M,v),o=Math.min(o,_,w),r=Math.max(r,_,w)}const a=Math.max(...zs.map(m=>m.width/2))+wl,c=Math.floor((n-a)/Le)*Le,l=Math.ceil((s+a)/Le)*Le,h=Math.floor((o-a)/Le)*Le,u=Math.ceil((r+a)/Le)*Le,d=[],p=[],g=(m,f,M,_)=>{m.push(f,_,M,f,_,M+Le,f+Le,_,M,f+Le,_,M,f,_,M+Le,f+Le,_,M+Le)};for(let m=h;m<u;m+=Le)for(let f=c;f<l;f+=Le){const M=f+Le/2,_=m+Le/2;if(!a_(M,_,i)||c_(M,_,i)<Le*.8||t.some(A=>M>=A.minX-.8&&M<=A.maxX+.8&&_>=A.minZ-.8&&_<=A.maxZ+.8))continue;let w=!1,y=1/0;for(const A of e){const R=Ih(M,_,A.ax,A.az,A.bx,A.bz);R<=A.halfWidth&&(w=!0),y=Math.min(y,R-A.halfWidth)}w?g(d,f,m,Oo):y>=0&&y<=wl&&g(p,f,m,r_)}const x=m=>{const f=new De;f.setAttribute("position",new ie(m,3));const M=[];for(let _=0;_<m.length;_+=3)M.push(m[_]/8,m[_+2]/8);return f.setAttribute("uv",new ie(M,2)),f.computeVertexNormals(),f.computeBoundingSphere(),f};return{road:x(d),sidewalk:x(p)}}function h_(i,t,e=[]){const n=new Tt;n.name="Campus roads and walks · connected approximate route network";const s=l_(t,e);Nr.map=El("sidewalk"),Ur.map=El("asphalt"),Nr.needsUpdate=!0,Ur.needsUpdate=!0;const o=new z(s.sidewalk,Nr);o.name="Connected sidewalk union",o.receiveShadow=!0;const r=new z(s.road,Ur);return r.name="Connected asphalt union",r.receiveShadow=!0,n.add(o,r,u_()),i.add(n),n}function u_(){const i=new Tt;i.name="Campus road center dashes";const t=[[-24,22],[-24,-17],[22,-82],[69,-82]];for(const e of zs){for(const[o,r]of t){const a=e.points.findIndex(([f,M])=>f===o&&M===r);if(a<=0)continue;const[c,l]=e.points[a-1],h=o-c,u=r-l,d=Math.hypot(h,u);if(d<8)continue;const p=h/d,g=u/d,x=6,m=Math.max(3,e.width*.72);for(let f=0;f<x;f++){const M=2.4+f*.72;if(M+m/2>=d)break;const _=new z(new ht(m,.025,.34),Sl);_.position.set(o-p*M,Oo+.02,r-g*M),_.rotation.y=Math.atan2(p,g),i.add(_)}}if(e.width<9)continue;const n=1.5,s=2.2;for(let o=0;o<e.points.length-1;o++){const[r,a]=e.points[o],[c,l]=e.points[o+1],h=c-r,u=l-a,d=Math.hypot(h,u),p=h/d,g=u/d;for(let x=1.4;x+n<d;x+=n+s){const m=new z(new ht(.13,.025,n),Sl);m.position.set(r+p*(x+n/2),Oo+.018,a+g*(x+n/2)),m.rotation.y=Math.atan2(p,g),i.add(m)}}}return i}function d_(i,t,e,n,s,o="#b7b3a9"){const r=new U({color:o,roughness:.9}),a=new z(new ht(n,.14,s),r);return a.position.set(t,.02,e),a.receiveShadow=!0,i.add(a),a}const Fr=new U({color:"#d4c9ad",roughness:.86}),Ji=new U({color:"#e8e4da",roughness:.84}),ii=new U({color:"#466a73",roughness:.28,metalness:.14}),Po=new U({color:"#65736f",roughness:.76}),f_=new U({color:"#b7ad99",roughness:.92}),p_=new U({color:"#405452",roughness:.72}),bl=new U({color:"#c4beb0",roughness:.9}),Tl=new U({color:"#789298",roughness:.52,metalness:.18}),Al=new U({color:"#b9b09e",roughness:.94}),Rl=new U({color:"#20292a",roughness:.72,metalness:.22}),m_=new U({color:"#27666a",roughness:.3,metalness:.2}),oc=new U({color:"#aaa28f",roughness:.92}),yi=new U({color:"#d2c49f",roughness:.86}),An=new U({color:"#73563d",roughness:.78}),Bo=new U({color:"#526b70",roughness:.82}),Cl=new U({color:"#33494b",roughness:.34,metalness:.18}),g_=new U({color:"#54754f",roughness:.95}),Pl=new U({color:"#80aeb1",roughness:.24,metalness:.12,transparent:!0,opacity:.48}),Qn=new U({color:"#667c7d",roughness:.42,metalness:.48}),__=new U({color:"#d8d1b5",roughness:.38,metalness:.2});function vt(i,t,e,n,s,o,r,a){const c=new z(new ht(e,n,s),t);return c.position.set(o,r,a),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function Dn(i,t,e,n,s=0){const o=i,r=t,a=e/2,c=n/2,l=Math.abs(Math.cos(s))*a+Math.abs(Math.sin(s))*c,h=Math.abs(Math.sin(s))*a+Math.abs(Math.cos(s))*c;return{minX:o-l,maxX:o+l,minZ:r-h,maxZ:r+h}}function ts(i,t,e,n,s,o,r=0){const a=i+e*Math.cos(r)+n*Math.sin(r),c=t-e*Math.sin(r)+n*Math.cos(r);return Dn(a,c,s,o,r)}function rc(i,{width:t,height:e,localY:n,localZ:s,worldX:o,worldZ:r}){const a=new Tt;a.name="Automatic sliding glass entrance doors",a.position.z=s;const c=t*.32,l=(t-c*2)/2,h=[];vt(a,Qn,.12,e+.12,.18,-t/2,n+e/2,0),vt(a,Qn,.12,e+.12,.18,t/2,n+e/2,0),vt(a,Qn,t+.12,.12,.2,0,n+e,0),vt(a,Qn,.08,e-.12,.08,-t/2+l/2,n+e/2,0),vt(a,Qn,.08,e-.12,.08,t/2-l/2,n+e/2,0);for(const p of[-1,1])vt(a,Pl,l-.1,e-.16,.06,p*(c+l)/2,n+e/2,0);for(const p of[-1,1]){const g=new Tt;g.position.set(p*c/2,0,0),vt(g,Pl,c-.08,e-.16,.08,0,n+e/2,0),vt(g,Qn,.07,e-.08,.1,-c/2+.04,n+e/2,0),vt(g,Qn,.07,e-.08,.1,c/2-.04,n+e/2,0),vt(g,Qn,c-.08,.07,.1,0,n+e-.04,0),a.add(g),h.push({leaf:g,side:p})}vt(a,__,.55,.1,.24,0,n+e+.18,0),i.add(a);let u=0,d=!1;return{update(p,g,x){const m=Math.hypot(g.x-o,g.z-r),f=x?Math.hypot(x.x-o,x.z-r):1/0,M=Math.min(m,f);M<12?d=!0:M>16&&(d=!1),u=Re.damp(u,d?1:0,8,p);for(const{leaf:_,side:v}of h)_.position.x=v*(c/2+u*c)}}}function v_(i,t,e,n){const s=[],o=vt(i,oc,t-1.6,.12,e-1.6,0,.06,0);o.name="Walkable college building interior floor";const r=vt(i,Cl,n?8:6,2.2,.16,0,2.7,-e/2+.65);r.name=n?"Robotics lab teaching display":"Classroom teaching board";const a=vt(i,yi,n?8.4:6.4,.16,.22,0,3.9,-e/2+.65);a.name="College classroom display frame";const c=(l,h,u)=>{const d=new Tt;d.name=u,d.position.set(l,0,h),i.add(d),vt(d,An,2.7,.18,1.25,0,1.05,0);for(const p of[-1.12,1.12])for(const g of[-.46,.46])vt(d,An,.12,1,.12,p,.52,g);vt(d,Bo,1.05,.16,.95,0,.58,1.25),vt(d,An,1.05,.85,.12,0,.98,1.7),s.push(ts(0,0,l,h+.35,3.1,2.9)),n?(vt(d,Cl,.92,.62,.1,0,1.46,-.34),vt(d,yi,.38,.08,.34,0,1.39,.34)):vt(d,yi,.82,.06,.56,0,1.18,-.08)};if(n){const l=vt(i,An,8.2,1.25,1.7,-13,.66,4.4);l.name="Robotics building reception desk",vt(i,yi,8.4,.12,1.85,-13,1.34,4.4),s.push(ts(0,0,-13,4.4,8.5,2));for(const h of[-5,-10])for(const u of[-10,0,10])c(u,h,"Robotics lab workstation")}else{const l=vt(i,An,5,.18,1.5,0,1.02,-e/2+3.1);l.name="Classroom teacher desk",vt(i,yi,5.2,.12,1.7,0,1.17,-e/2+3.1),s.push(ts(0,0,0,-e/2+3.1,5.4,1.9));const h=-e/2+7;for(let u=0;u<2;u++)for(const d of[-t*.27,t*.27])c(d,h+u*4.2,"Academic classroom desk")}for(const l of[-t/2+1.6,t/2-1.6]){const h=new Tt;h.name="College lobby planter",h.position.set(l,0,-e/2+2.3),i.add(h),vt(h,yi,1.1,.75,1.1,0,.38,0);const u=new z(new Gs(.82,1),g_);u.position.y=1.25,u.scale.set(.85,1.3,.85),u.castShadow=!0,h.add(u),s.push(ts(0,0,l,-e/2+2.3,1.4,1.4))}return s}function Uh(i,t,e,n,s,o,r,a,c,l){const u=2*Math.PI*n/40;for(let d=0;d<40;d++){const p=d/40*Math.PI*2,g=Math.atan2(Math.sin(p),Math.cos(p))*n;if(Math.abs(g)<c/2+u*.15)continue;const x=Math.sin(p)*n,m=Math.cos(p)*n,f=vt(i,a,u+.06,s,o,x,r,m);f.rotation.y=p,l.push(Dn(t+x,e+m,u+.06,o,p))}}function Fa(i,t,e,n,s,o){const r=document.createElement("canvas");r.width=512,r.height=96;const a=r.getContext("2d");a.fillStyle="#294c4a",a.fillRect(0,0,r.width,r.height),a.fillStyle="#f2ead4",a.font="bold 38px Arial",a.textAlign="center",a.textBaseline="middle",a.fillText(t,256,48,480);const c=new qn(r),l=new z(new rn(e,e*.19),new U({map:c,roughness:.7}));l.position.set(n,s,o),i.add(l)}function x_(i,t){const{name:e,x:n,z:s,width:o,depth:r,floors:a=3,featured:c=!1,rotation:l=0}=t,h=new Tt;h.name=e;const u=[],d=3.2,p=a*d,g=r/2,x=8.8,m=5.8,f=d*3,M=.8,_=c?x:9,v=(I,F,V,k,G)=>{vt(h,Fr,I,F,V,k,F/2+.22,G),u.push({x:k,z:G,width:I,depth:V})};if(c){v(M,p,r,-o/2+M/2,0),v(M,p,r,o/2-M/2,0),v(o-M*2,p,M,0,-r/2+M/2);const I=(o-_)/2;for(const Lt of[-1,1])v(I,p,M,Lt*(_/2+I/2),g-M/2);const F=(o-x)/2;for(const Lt of[-1,1]){const kt=Lt*(x/2+F/2);vt(h,Fr,F,p,.65,kt,p/2+.22,g-.32),vt(h,Ji,.5,p+.15,.85,Lt*(o/2-.35),p/2+.2,g-.25),vt(h,Al,.42,f,m,Lt*(x/2),f/2,g-m/2)}const V=p-f;vt(h,Fr,x,V,M,0,f+V/2+.22,g-M/2),vt(h,Al,x+.8,.38,m+.8,0,f+.02,g-m/2),vt(h,bl,8.6,.12,2.2,0,.06,g+.4);for(const Lt of[-1,1]){const kt=Lt*(x/2+F/2),Y=Math.max(2,a-1);for(let j=0;j<Y;j++){const pt=2.1+j*d,Ut=F*.78,wt=Math.max(2,Math.floor(Ut/4));for(let Vt=0;Vt<wt;Vt++){const he=Ut/wt-.16,L=kt-Ut/2+(Vt+.5)*(Ut/wt);vt(h,ii,he,1.42,.15,L,pt,g+.08),Vt>0&&vt(h,Tl,.1,1.5,.2,L-he/2-.08,pt,g+.1)}}}const k=-x/2-.9;for(let Lt=0;Lt<3;Lt++)vt(h,ii,.7,2.25,.15,k,1.8+Lt*d,g+.1);for(let Lt=0;Lt<4;Lt++){const kt=-o/2+3+Lt*3.4;vt(h,ii,3.05,1.2,.15,kt,f+1.8,g+.1)}vt(h,Ji,x+2.2,.34,1.45,0,f+.42,g+.42);const G=15,K=5.1,W=4,tt=3.4,ct=p-4.3,St=g+1.8;vt(h,m_,G,K,W,tt,ct,St);for(let Lt=0;Lt<=5;Lt++){const kt=tt-G/2+G/5*Lt;vt(h,Tl,.12,K+.12,.12,kt,ct,St+W/2+.08)}const zt=ct-K/2-.3;for(const Lt of[-o/2+2,o/2-2])vt(h,Ji,.7,zt,.75,Lt,zt/2+.3,g+3.2);const oe=vt(h,Rl,o+5,.5,12,0,p-.55,g+4.2);oe.rotation.x=.1;for(let Lt=0;Lt<9;Lt++){const kt=-o/2+Lt*(o/8);vt(h,Rl,.22,.3,10.8,kt,p-.95,g+4.2)}}else{v(M,p,r,-o/2+M/2,0),v(M,p,r,o/2-M/2,0),v(o-M*2,p,M,0,-r/2+M/2);const I=(o-_)/2;for(const F of[-1,1])v(I,p,M,F*(_/2+I/2),g-M/2)}vt(h,f_,o+.8,.48,r+.8,0,p+.46,0);const w=(o+.5-_)/2;for(const I of[-1,1])vt(h,Po,w,.3,.55,I*(_/2+w/2),1.05,r/2+.2);vt(h,Ji,o+.5,.3,.55,0,p-.85,r/2+.2);const y=Math.max(4,Math.floor(o/4.2));for(let I=0;I<a;I++){const F=1.95+I*d;for(let k=0;k<y;k++){const G=-o/2+(k+.5)*(o/y);!c&&(I>0||Math.abs(G)>_/2+o/y*.3)&&vt(h,ii,o/y*.54,1.35,.13,G,F,r/2+.09),vt(h,ii,o/y*.54,1.35,.13,G,F,-r/2-.09)}const V=Math.max(2,Math.floor(r/4));for(let k=0;k<V;k++){const G=-r/2+(k+.5)*(r/V);vt(h,ii,.13,1.35,r/V*.52,o/2+.09,F,G),vt(h,ii,.13,1.35,r/V*.52,-o/2-.09,F,G)}}c||(vt(h,Po,_+.35,.2,.25,0,4.62,r/2+.14),vt(h,Ji,6.4,.23,1.5,0,4.78,r/2+.72),vt(h,bl,8.4,.12,2.6,0,.06,r/2+1)),u.push(...v_(h,o,r,c).map(({minX:I,maxX:F,minZ:V,maxZ:k})=>({x:(I+F)/2,z:(V+k)/2,width:F-I,depth:k-V})));const A=c?8.4:8.6,R=c?g-m+.2:g-M/2,S=rc(h,{width:A,height:4.5,localY:0,localZ:R,worldX:n+R*Math.sin(l),worldZ:s+R*Math.cos(l)});c?(vt(h,Ji,o+2,.46,1.1,0,p+.84,0),vt(h,Po,2.6,4.2,.45,0,p+2.8,0),Fa(h,e.toUpperCase(),Math.min(o-1,24),0,p+1.05,r/2+.82)):Fa(h,e.toUpperCase(),Math.min(o-1,17),0,p-.5,r/2+.18),h.position.set(n,0,s),h.rotation.y=l,i.add(h);const E=Math.abs(Math.cos(l))*o+Math.abs(Math.sin(l))*r,D=Math.abs(Math.sin(l))*o+Math.abs(Math.cos(l))*r;return{name:e,bounds:{minX:n-E/2-1.5,maxX:n+E/2+1.5,minZ:s-D/2-1.5,maxZ:s+D/2+2.6},collisionBoxes:u.map(({x:I,z:F,width:V,depth:k})=>ts(n,s,I,F,V,k,l)),entranceBounds:ts(n,s,0,R,A+1,7,l),updateDoors:S.update}}function M_(i,t,e){const n=new Tt;n.name="Learning Resource Centre · concentric dome";const s=new U({color:"#d8d0bc",roughness:.84}),o=new U({color:"#eee8d8",roughness:.82}),r=new U({color:"#397176",roughness:.3,metalness:.14}),a=new U({color:"#b7b09c",roughness:.62,metalness:.12,side:Ae}),c=new U({color:"#b99858",roughness:.42,metalness:.42}),l=6.4,h=10.5,u=11.2,d=l,p=[],g=new z(new le(13.6,14.2,.8,48),s);g.position.y=.4,g.receiveShadow=!0,n.add(g);const x=new z(new le(12.7,13.2,.55,48),o);x.position.y=1.05,n.add(x);const m=new z(new le(11.45,12.05,.5,48),c);m.position.y=1.575,n.add(m);const f=new z(new le(10.2,10.2,.12,48),oc);f.position.y=1.88,f.name="Walkable Learning Resource Centre reading hall floor",n.add(f),Uh(n,t,e,h,l-1.9,.7,3.95,s,9,p);for(let R=0;R<20;R++){const S=R/20*Math.PI*2,E=Math.atan2(Math.sin(S),Math.cos(S))*(h+.12);if(Math.abs(E)<4.8)continue;const D=new z(new ht(2.15,2.05,.16),r);D.position.set(Math.sin(S)*(h+.12),4.05,Math.cos(S)*(h+.12)),D.rotation.y=S,D.castShadow=!0,n.add(D)}const M=new z(new je(10.95,.3,10,48),o);M.rotation.x=Math.PI/2,M.position.y=d,n.add(M);const _=new z(new Ne(u,48,24,0,Math.PI*2,0,Math.PI/2),a);_.position.y=d,_.castShadow=!0,_.receiveShadow=!0,n.add(_);for(let R=0;R<4;R++){const S=.42+R*.31,E=u*Math.sin(S),D=new z(new je(E,.11,6,48),c);D.rotation.x=Math.PI/2,D.position.y=d+u*Math.cos(S),n.add(D)}for(let R=0;R<16;R++){const S=R/16*Math.PI*2,E=[];for(let I=0;I<=16;I++){const F=I/16*Math.PI/2;E.push(new P(Math.sin(S)*Math.sin(F)*u,d+Math.cos(F)*u,Math.cos(S)*Math.sin(F)*u))}const D=new z(new nc(new gh(E),24,.075,5,!1),o);n.add(D)}const v=new z(new Ne(.65,16,10),c);v.position.y=d+u,n.add(v),vt(n,o,.22,4.7,.3,-4.65,4.05,h+.05),vt(n,o,.22,4.7,.3,4.65,4.05,h+.05),vt(n,o,9.4,.22,.3,0,6.4,h+.05),vt(n,o,8.4,.12,2.6,0,1.8,h+1.1);const w=h-.4,y=rc(n,{width:8.6,height:4.5,localY:1.75,localZ:w,worldX:t,worldZ:e+w}),A=vt(n,An,5.4,1.2,1.5,0,2.55,-4.7);A.name="Library circulation desk",p.push(Dn(t,e-4.7,5.7,1.8));for(const R of[-1,1]){const S=vt(n,An,1.4,4.1,7.2,R*7.4,3.95,-.5);S.name=R<0?"Library west bookcase":"Library east bookcase";for(let E=0;E<4;E++){vt(n,yi,1.52,.1,7.25,R*7.4,2.25+E*.92,-.5);for(let D=0;D<6;D++){const I=[p_,Po,Bo][(E+D)%3];vt(n,I,.52,.64,.7,R*7.4,2.62+E*.92,-3.25+D*1.1)}}p.push(Dn(t+R*7.4,e-.5,1.8,7.6))}for(const R of[-6.5,.5]){const S=vt(n,An,5.8,.18,2.3,0,1.95,R);S.name="Library reading table";for(const E of[-1,1])for(const D of[-2,2])vt(n,Bo,1.15,.18,1.05,D,1.25,R+E*1.8),vt(n,An,1.15,.78,.12,D,1.63,R+E*2.25);p.push(Dn(t,e+R,6.1,2.6))}return Fa(n,"LEARNING RESOURCE CENTRE",15,0,5.85,h+.3),n.position.set(t,-1.75,e),i.add(n),{name:n.name,bounds:{minX:t-14.5,maxX:t+14.5,minZ:e-14.5,maxZ:e+14.5},collisionBoxes:p,entranceBounds:Dn(t,e+w,9.6,7),updateDoors:y.update}}function y_(i,t,e){const n=new Tt;n.name="West campus circular landmark · approximate";const s=new U({color:"#b7ac96",roughness:.9}),o=new U({color:"#d8d0bc",roughness:.86}),r=new U({color:"#496d72",roughness:.32,metalness:.12}),a=new U({color:"#9e9a8d",roughness:.84}),c=new U({color:"#879797",roughness:.76}),l=13,h=[],u=new z(new le(l+.8,l+.8,.8,32),s);u.position.y=.4,u.receiveShadow=!0,n.add(u);const d=new z(new le(l-.9,l-.9,.12,40),oc);d.position.y=.86,d.name="Walkable rotunda interior floor",n.add(d),Uh(n,t,e,l,10,.75,5,o,8.8,h);for(const w of[3.3,7.3]){const A=2*Math.PI*l/32;for(let R=0;R<32;R++){const S=R/32*Math.PI*2,E=Math.atan2(Math.sin(S),Math.cos(S))*l;Math.abs(E)<6.4||(vt(n,r,A+.04,1.45,.16,Math.sin(S)*(l+.12),w,Math.cos(S)*(l+.12)).rotation.y=S)}}const p=new z(new le(l+.45,l+.45,.7,32),a);p.position.y=11.15,p.castShadow=!0,n.add(p);for(let w=0;w<32;w++){const y=w/32*Math.PI*2,A=new z(new ht(l*.96,.18,.18),c);A.position.set(Math.cos(y)*l*.48,11.56,Math.sin(y)*l*.48),A.rotation.y=-y,n.add(A)}const g=new z(new je(l+.35,.38,6,32),s);g.rotation.x=Math.PI/2,g.position.y=11.52,n.add(g);const x=new z(new le(4.6,4.6,1.4,24),r);x.position.y=12.15,n.add(x);const m=new z(new le(4.9,4.9,.28,24),a);m.position.y=12.98,n.add(m),vt(n,s,.2,3.5,.3,-4.65,2.4,l-.1),vt(n,s,.2,3.5,.3,4.65,2.4,l-.1),vt(n,s,9.4,.25,.3,0,4.1,l-.1);const f=vt(n,An,5,1.1,1.4,0,1.55,-4.5);f.name="Rotunda visitor reception desk",h.push(Dn(t,e-4.5,5.3,1.7));for(const w of[-1,1]){const y=vt(n,Bo,5.6,.52,1.2,w*5.2,1.3,-2);y.name="Rotunda waiting bench",h.push(Dn(t+w*5.2,e-2,5.8,1.4))}for(const w of[-1,1]){const y=vt(n,ii,.18,3.6,5.2,w*9.2,3.1,-.7);y.name="Rotunda interior display panel",h.push(Dn(t+w*9.2,e-.7,.35,5.4))}const M=new z(new ht(9,.35,3.6),a);M.position.set(0,5.1,l+1.7),n.add(M),vt(n,s,8.4,.12,2.8,0,.86,l+1.1);const _=l-.4,v=rc(n,{width:8.4,height:4.5,localY:.8,localZ:_,worldX:t,worldZ:e+_});return n.position.set(t,-.8,e),i.add(n),{name:n.name,bounds:{minX:t-l-1,maxX:t+l+1,minZ:e-l-1,maxZ:e+l+2},collisionBoxes:h,entranceBounds:Dn(t,e+_,9.4,7),updateDoors:v.update}}const xe={x:-27,z:-90,radiusX:8.2,radiusZ:6.2};function S_(i){const t=new Tt;t.name="Small landscaped campus lake";const e=new z(new No(1,48),new U({color:"#788269",roughness:1}));e.rotation.x=-Math.PI/2,e.scale.set(xe.radiusX+1.6,xe.radiusZ+1.6,1),e.position.set(xe.x,.015,xe.z),e.receiveShadow=!0,t.add(e);const n=new z(new Fo(.82,1,48),new U({color:"#a99a78",roughness:.96,side:Ae}));n.rotation.x=-Math.PI/2,n.scale.set(xe.radiusX+.55,xe.radiusZ+.55,1),n.position.set(xe.x,.034,xe.z),n.receiveShadow=!0,t.add(n);const s=new Th({color:"#398d9b",roughness:.18,metalness:.12,clearcoat:.72,clearcoatRoughness:.2,transparent:!0,opacity:.94}),o=new z(new No(1,48),s);o.name="Lake water",o.rotation.x=-Math.PI/2,o.scale.set(xe.radiusX,xe.radiusZ,1),o.position.set(xe.x,.055,xe.z),o.receiveShadow=!0,t.add(o);const r=new U({color:"#a6d4d0",transparent:!0,opacity:.38,roughness:.24,metalness:.08}),a=[];for(const[u,[d,p,g]]of[[-1.6,-.8,1.8],[2.4,1.2,1.25],[.2,-2,.9]].entries()){const x=new z(new Fo(g*.78,g,32),r.clone());x.rotation.x=-Math.PI/2,x.position.set(xe.x+d,.067+u*.001,xe.z+p),x.userData.phase=u*2.1,t.add(x),a.push(x)}const c=new U({color:"#827f72",roughness:1}),l=new In(new ja(.52,0),c,18),h=new jt;for(let u=0;u<18;u++){const d=u/18*Math.PI*2,p=u%3===0?.6:0,g=xe.x+Math.cos(d)*(xe.radiusX+p),x=xe.z+Math.sin(d)*(xe.radiusZ+p),m=.65+u%4*.13;h.compose(new P(g,.17*m,x),new Xn().setFromEuler(new yn(u*.31,u*.73,u*.19)),new P(m,m*.55,m)),l.setMatrixAt(u,h)}return l.castShadow=!0,l.receiveShadow=!0,t.add(l),i.add(t),{bounds:{minX:xe.x-xe.radiusX-.3,maxX:xe.x+xe.radiusX+.3,minZ:xe.z-xe.radiusZ-.3,maxZ:xe.z+xe.radiusZ+.3},update(u){for(const d of a){const p=(u*.24+d.userData.phase)%1,g=.7+p*.65;d.scale.setScalar(g),d.material.opacity=.32*(1-p)}}}}const fn=[[-127,3],[-56,128],[1,119],[-12,48],[15,3],[35,-28],[58,-59],[87,-59],[87,-75],[101,-78],[170,-84],[171,-148],[153,-148],[124,-145],[56,-101],[-56,-41],[-56,-36],[-127,3]],te={minX:110,maxX:164,minZ:-144,maxZ:-96},ti={centerX:140,startZ:-95,endZ:-124,halfWidth:11},w_=-4.8;function zo(i,t){let e=!1;for(let n=0,s=fn.length-1;n<fn.length;s=n++){const[o,r]=fn[n],[a,c]=fn[s];r>t!=c>t&&i<(a-o)*(t-r)/(c-r)+o&&(e=!e)}return e}function E_(i,t,e,n,s=0){const o=280-s,r=340-s;if(Math.abs(e)>o||Math.abs(n)>r)return!1;const a=zo(i,t),c=zo(e,n);if(a===c)return!0;const l=e-i,h=n-t,u=fn[1],d=fn[2],p=d[0]-u[0],g=d[1]-u[1],x=l*g-h*p;if(Math.abs(x)<1e-8)return!1;const m=u[0]-i,f=u[1]-t,M=(m*g-f*p)/x,_=(m*h-f*l)/x;if(M<0||M>1||_<0||_>1)return!1;const v=i+l*M,w=t+h*M;return Math.hypot(v- -27,w-123.4)<11-s}function b_(i,t,e,n,s,o){const r=s-e,a=o-n,c=r*r+a*a,l=c===0?0:Re.clamp(((i-e)*r+(t-n)*a)/c,0,1);return Math.hypot(i-(e+l*r),t-(n+l*a))}function T_(i){const t=new ec;fn.forEach(([r,a],c)=>{c===0?t.moveTo(r,-a):t.lineTo(r,-a)});const e=new La;e.moveTo(te.minX,-te.maxZ),e.lineTo(te.maxX,-te.maxZ),e.lineTo(te.maxX,-te.minZ),e.lineTo(te.minX,-te.minZ),e.closePath(),t.holes.push(e);const n=new z(new qo(t),new U({color:"#788269",roughness:1,side:Ae}));n.rotation.x=-Math.PI/2,n.position.y=-.02,n.receiveShadow=!0,i.add(n);const s=new U({color:"#746c5d",roughness:1}),o=(r,a,c,l)=>{const h=new z(new ht(r,1.2,a),s);h.position.set(c,-.72,l),h.receiveShadow=!0,i.add(h)};o(te.minX+200,360,(te.minX-200)/2,0),o(200-te.maxX,360,(200+te.maxX)/2,0),o(te.maxX-te.minX,180-te.maxZ,(te.minX+te.maxX)/2,(180+te.maxZ)/2),o(te.maxX-te.minX,te.minZ+180,(te.minX+te.maxX)/2,(te.minZ-180)/2)}function A_(i){const t=new Tt;t.name="Learning Resource Centre · underground basement parking";const e=new U({color:"#8b8b80",roughness:.92,side:Ae}),n=new U({color:"#555b59",roughness:.96}),s=new U({color:"#e5d6a8",roughness:.84}),o=new U({color:"#4d5351",roughness:.95,side:Ae}),r=new U({color:"#d8d0bc",roughness:.9}),a=te.maxX-te.minX,c=te.maxZ-te.minZ,l=(te.minX+te.maxX)/2,h=(te.minZ+te.maxZ)/2,u=-4.8,d=-2.4,p=4.8,g=.8,x=new z(new ht(a,.35,c),n);x.position.set(l,u,h),x.receiveShadow=!0,t.add(x);const m=new U({color:"#777a73",roughness:.94,side:Ae}),f=(mt,dt,ot,Xt)=>{const gt=new z(new ht(mt,.45,dt),m);gt.position.set(ot,-.23,Xt),gt.receiveShadow=!0,t.add(gt)};f(17,c,118.5,h),f(11,c,158.5,h),f(25,20,140,-134);const M=(mt,dt,ot,Xt,gt,Nt)=>{const de=new z(new ht(mt,dt,ot),e);de.position.set(Xt,gt,Nt),de.receiveShadow=!0,t.add(de)};M(g,p,c,te.minX,d,h),M(g,p,c,te.maxX,d,h),M(a,p,g,l,d,te.minZ),M(18,p,g,119,d,te.maxZ),M(12,p,g,158,d,te.maxZ);const _=[[116.5,-137],[123.5,-137],[150,-137],[158.5,-137],[116.5,-130],[123.5,-130],[150,-130],[158.5,-130]];_.forEach(([mt,dt])=>{for(const ot of[-1,1]){const Xt=new z(new ht(.1,.025,5.2),s);Xt.position.set(mt+ot*3.25,u+.2,dt),t.add(Xt)}});for(const[mt,dt]of[[112,-108],[162,-108],[112,-140],[162,-140]]){const ot=new z(new ht(.8,4.3,.8),r);ot.position.set(mt,-2.55,dt),ot.castShadow=!0,t.add(ot)}const v=["#d9d4c7","#496a72","#b38b58","#70816b","#a8aca7","#846968","#577183"];_.forEach(([mt,dt],ot)=>{const Xt=new Tt;Xt.name=`Basement parked car ${ot+1}`;const gt=new U({color:v[ot%v.length],roughness:.58,metalness:.08}),Nt=new z(new ht(2.4,.9,4.2),gt);Nt.position.y=-4,Nt.castShadow=!0,Xt.add(Nt);const de=new z(new ht(1.75,.8,2.1),gt);de.position.set(0,-3.25,-.15),Xt.add(de);const _e=new U({color:"#34494d",roughness:.35,metalness:.12}),C=new z(new ht(1.8,.48,1.8),_e);C.position.set(0,-3.3,-.15),Xt.add(C),Xt.position.set(mt,0,dt),t.add(Xt)});const w=[..._.map(([mt,dt],ot)=>({name:`Basement parked car ${ot+1}`,minX:mt-1.5,maxX:mt+1.5,minZ:dt-2.4,maxZ:dt+2.4})),...[[112,-108],[162,-108],[112,-140],[162,-140]].map(([mt,dt],ot)=>({name:`Basement pillar ${ot+1}`,minX:mt-.6,maxX:mt+.6,minZ:dt-.6,maxZ:dt+.6}))],y=new P(ti.centerX,.12,ti.startZ),A=new P(ti.centerX,u+.22,ti.endZ),R=ti.halfWidth*2,S=A.x-y.x,E=A.z-y.z,D=Math.hypot(S,E),I=-E/D,F=S/D,V=(mt,dt)=>new P(mt.x+I*R/2*dt,mt.y,mt.z+F*R/2*dt),k=V(y,-1),G=V(y,1),K=V(A,-1),W=V(A,1),tt=new De;tt.setAttribute("position",new ie([k.x,k.y,k.z,G.x,G.y,G.z,K.x,K.y,K.z,W.x,W.y,W.z],3)),tt.setIndex([0,2,1,1,2,3]),tt.computeVertexNormals();const ct=new z(tt,o);ct.name="Basement parking descending vehicle ramp",ct.receiveShadow=!0,t.add(ct);const St=y.clone(),zt=A.clone();St.y+=4.5,zt.y+=4.5;const oe=V(St,-1.1),Lt=V(St,1.1),kt=V(zt,-1.1),Y=V(zt,1.1),j=new De;j.setAttribute("position",new ie([oe.x,oe.y,oe.z,Lt.x,Lt.y,Lt.z,kt.x,kt.y,kt.z,Y.x,Y.y,Y.z],3)),j.setIndex([0,2,1,1,2,3]),j.computeVertexNormals();const pt=new z(j,m);pt.name="Covered basement parking ramp",pt.receiveShadow=!0,t.add(pt);const Ut=new U({color:"#a29b89",roughness:.9,side:Ae});for(const mt of[-1,1]){const dt=V(y,mt*1.04),ot=V(A,mt*1.04),Xt=dt.clone(),gt=ot.clone();Xt.y+=1.65,gt.y+=1.65;const Nt=new De;Nt.setAttribute("position",new ie([dt.x,dt.y,dt.z,ot.x,ot.y,ot.z,Xt.x,Xt.y,Xt.z,gt.x,gt.y,gt.z],3)),Nt.setIndex([0,1,2,2,1,3]),Nt.computeVertexNormals(),t.add(new z(Nt,Ut))}const wt=new z(new ht(24,.85,.5),new U({color:"#b99858",roughness:.42,metalness:.38}));wt.position.set(ti.centerX,4,-101.4),t.add(wt);const Vt=document.createElement("canvas");Vt.width=512,Vt.height=96;const he=Vt.getContext("2d");if(!he)throw new Error("Unable to create the basement parking sign.");he.fillStyle="#294c4a",he.fillRect(0,0,Vt.width,Vt.height),he.fillStyle="#f2ead4",he.font="bold 36px Arial",he.textAlign="center",he.textBaseline="middle",he.fillText("BASEMENT PARKING",Vt.width/2,Vt.height/2);const L=new qn(Vt);L.colorSpace=Ce;const Zt=new z(new rn(15,1.45),new U({map:L,roughness:.72,side:Ae}));return Zt.position.set(ti.centerX,4,-101.1),t.add(Zt),i.add(t),{ramp:ti,bounds:te,floorY:w_,obstacles:w}}function R_(i){const t=new U({color:"#c5b89e",roughness:.92}),e=new Tt;for(let M=0;M<fn.length-1;M++){const[_,v]=fn[M],[w,y]=fn[M+1],A=Math.hypot(w-_,y-v),R=Math.atan2(w-_,y-v),S=(_+w)/2,E=(v+y)/2;if(v>65&&y>65){const I=(A-23)/2;for(const F of[-1,1]){const V=new z(new ht(.8,2.2,I),t);V.position.set(S+Math.sin(R)*F*(A/4+5.75),1.1,E+Math.cos(R)*F*(A/4+5.75)),V.rotation.y=R,e.add(V)}}else{const I=new z(new ht(.8,2.2,A),t);I.position.set(S,1.1,E),I.rotation.y=R,e.add(I)}}i.add(e);const n=new Tt;n.name="Automatic GGSIPU entrance gate";const s=-27.5,o=123.4,r=new U({color:"#e6dfce",roughness:.78}),a=new U({color:"#b99858",metalness:.42,roughness:.4}),c=new Tt;c.position.set(s,0,o);for(const M of[-13.5,13.5]){const _=new z(new ht(2.5,8.6,2.5),r);_.position.set(M,4.3,0),_.castShadow=!0,_.receiveShadow=!0,c.add(_);const v=new z(new ht(3.2,.4,3.2),a);v.position.set(M,8.65,0),c.add(v)}const l=new z(new ht(30,2,2.1),r);l.position.set(0,8.1,0),l.castShadow=!0,c.add(l);const h=document.createElement("canvas");h.width=2048,h.height=256;const u=h.getContext("2d");if(!u)throw new Error("Unable to create the campus entrance sign.");u.fillStyle="#173b3e",u.fillRect(0,0,h.width,h.height),u.strokeStyle="#d6bb79",u.lineWidth=12,u.strokeRect(10,10,h.width-20,h.height-20),u.fillStyle="#f5e8c4",u.font="bold 100px Georgia, serif",u.textAlign="center",u.textBaseline="middle",u.fillText("GURU GOBIND SINGH UNIVERSITY",h.width/2,h.height/2);const d=new qn(h);d.colorSpace=Ce;const p=new U({map:d,roughness:.48,metalness:.08,side:Ae}),g=new z(new rn(25,2.8),p);g.position.set(0,8.1,1.12),c.add(g);const x=new z(new rn(25,2.8),p);x.position.set(0,8.1,-1.12),x.rotation.y=Math.PI,c.add(x);const m=[];for(const M of[-1,1]){const _=new Tt;_.position.set(M*5.8,0,-1.25);const v=new z(new ht(11.6,3.2,.35),new U({color:"#d8d5c9",roughness:.72,metalness:.16}));v.position.y=1.65,v.castShadow=!0,_.add(v);const w=new z(new ht(11.5,.18,.4),a);w.position.y=2.9,_.add(w);for(let y=0;y<10;y++){const A=new z(new ht(.08,2.9,.42),a);A.position.set(-5.1+y*1.13,1.65,0),_.add(A)}c.add(_),m.push({panel:_,side:M})}n.add(c),i.add(n);let f=0;return{update(M,_,v){const w=Math.hypot(_.x-s,_.z-o),y=v?Math.hypot(v.x-s,v.z-o):1/0,R=Math.min(w,y)<24?1:0;f=Re.damp(f,R,2.8,M);for(const{panel:S,side:E}of m)S.position.x=E*(5.8+f*12.4)}}}function C_(i){const t=new U({color:"#638260",roughness:1}),e=new U({color:"#76553a",roughness:1}),n=new U({color:"#456c4b",roughness:1}),s=[[-38,-15,22,20],[15,12,19,18],[-36,54,28,16],[6,-101,28,13]],o=zs.flatMap(({points:h})=>h.slice(1).map((u,d)=>[h[d][0],h[d][1],u[0],u[1]]));for(const[h,u,d,p]of s){const g=new z(new ht(d,.16,p),t);g.position.set(h,.04,u),g.receiveShadow=!0,i.add(g)}const r=[];for(let h=-112;h<=55;h+=22)for(let u=-94;u<=100;u+=24){const d=o.some(([g,x,m,f])=>b_(u,h,g,x,m,f)<13),p=[[-52,0,20],[-75,48,23],[31,-50,30],[120,-120,17],[-55,87,22]].some(([g,x,m])=>Math.hypot(u-g,h-x)<m);!d&&!p&&zo(u,h)&&r.push([u,h])}const a=new In(new ht(.85,3.2,.85),e,r.length),c=new In(new ht(3.4,3.1,3.4),n,r.length),l=new jt;r.forEach(([h,u],d)=>{l.makeTranslation(h,1.65,u),a.setMatrixAt(d,l),l.makeTranslation(h,4.2,u),c.setMatrixAt(d,l)}),a.castShadow=!0,c.castShadow=!0,i.add(a,c)}function P_(i){const t=new U({color:"#314345",roughness:.7}),e=new U({color:"#f5d894",emissive:"#b2823d",emissiveIntensity:.35});for(let o=-88;o<=110;o+=26){const r=new z(new le(.14,.2,5.6,6),t);r.position.set(-12,2.8,o);const a=new z(new ht(.9,.24,.45),e);a.position.set(-12,5.65,o),i.add(r,a)}d_(i,31,-66,16,12,"#c2bfb5");const n=new U({color:"#58744f",roughness:1}),s=new U({color:"#c4b9a2",roughness:.95});for(const o of[19,43]){const r=new z(new ht(1.7,.38,5.2),s);r.position.set(o,.19,-66);const a=new In(new ht(.9,.9,.9),n,3);for(let c=0;c<3;c++){const l=new jt().makeTranslation(o,.78,-67.5+c*1.5);a.setMatrixAt(c,l)}i.add(r,a)}}function D_(i){T_(i);const t=A_(i),e=R_(i);C_(i),P_(i);const n=S_(i),s=[{name:"USAR · Automation & Robotics",x:31,z:-50,width:44,depth:24,floors:4,rotation:Math.PI,featured:!0},{name:"Academic Block",x:-75,z:48,width:30,depth:18,floors:4},{name:"Academic Block",x:-55,z:87,width:30,depth:18,floors:3}],o=[y_(i,-52,0),M_(i,120,-120),...s.map(r=>x_(i,r))];return h_(i,fn,[...o.map(r=>r.bounds),n.bounds]),{buildings:o,polygon:fn,lake:n,lakeBounds:n.bounds,basementParking:t,updateDoors(r,a,c){o.forEach(l=>l.updateDoors(r,a,c))},isBuildingEntrance(r,a){return o.some(({entranceBounds:c})=>r>=c.minX&&r<=c.maxX&&a>=c.minZ&&a<=c.maxZ)},getDrivingSurface(r,a,c=0,l=0,h=0){const{bounds:u,floorY:d,ramp:p}=t;if(!(r>=u.minX&&r<=u.maxX&&a>=u.minZ&&a<=u.maxZ))return c<-.15?null:0;if(a>=p.endZ&&a<=p.startZ&&Math.abs(r-p.centerX)<=p.halfWidth-l-.8){const x=(a-p.startZ)/(p.endZ-p.startZ);return Re.lerp(.12,d+.22,x)}return a<p.endZ&&c<-1.2&&r>u.minX+l+1&&r<u.maxX-l-1&&a>u.minZ+h+1&&a<u.maxZ-h-1?d:null},insideCampus:zo,canMove:E_,updateGate:e.update,spawn:new P(-27,0,111),parkourArea:new P(-15,0,7),basketballHoop:new P(80,0,-103),roboticsArea:new P(31,0,-68)}}const Nh=5,Fh=20,L_=(Nh+Fh)/2,Do=.095,Dl=[6.8,10.1,14.9,18.2],xo=["#d7ddd8","#536c88","#b95d48","#bdad83","#5a7770","#282c2e"].map(i=>new U({color:i,roughness:.62,metalness:.08})),I_=new U({color:"#89adb5",roughness:.28,metalness:.08,transparent:!0,opacity:.84}),U_=new U({color:"#202426",roughness:1}),Or=new U({color:"#c9d0ce",roughness:.3,metalness:.82}),N_=new U({color:"#303738",roughness:.96,side:Ae}),F_=new U({color:"#66845c",roughness:1,side:Ae}),O_=new U({color:"#526f4c",roughness:1,side:Ae}),B_=new U({color:"#ded8c4",roughness:.78}),z_=new U({color:"#e3b94f",roughness:.72}),Ll=new U({color:"#3a4445",roughness:.72,metalness:.18}),k_=new U({color:"#22292a",roughness:.64});function V_(i){const t=i.map(([e,n])=>new ut(e,n));return t.length>1&&t[0].distanceToSquared(t[t.length-1])<.001&&t.pop(),t}function Oh(i){return i.reduce((t,e,n)=>{const s=i[(n+1)%i.length];return t+e.x*s.y-s.x*e.y},0)/2}function ko(i,t){return t?new ut(-i.y,i.x):new ut(i.y,-i.x)}function Si(i,t){const e=Oh(i)<0;return i.map((n,s)=>{const o=i[(s-1+i.length)%i.length],r=i[(s+1)%i.length],a=n.clone().sub(o).normalize(),c=r.clone().sub(n).normalize(),l=ko(a,e),h=ko(c,e),u=l.clone().add(h).normalize(),d=Math.max(.35,u.dot(h));return n.clone().addScaledVector(u,Math.min(t/d,t*2.2))})}function Br(i,t,e){const n=[];for(let o=0;o<i.length;o++){const r=(o+1)%i.length;for(const a of[i[o],t[o],t[r],i[o],t[r],i[r]])n.push(a.x,e,a.y)}const s=new De;return s.setAttribute("position",new ie(n,3)),s.computeVertexNormals(),s.computeBoundingSphere(),s}function Ci(i){let t=0;for(let e=0;e<i.length;e++)t+=i[e].distanceTo(i[(e+1)%i.length]);return t}function $o(i,t){const e=Ci(i);let n=(t%e+e)%e;for(let s=0;s<i.length;s++){const o=i[s],r=i[(s+1)%i.length],a=o.distanceTo(r);if(n<=a){const c=r.clone().sub(o).normalize();return{position:o.clone().addScaledVector(c,n),direction:c}}n-=a}return{position:i[0].clone(),direction:i[1].clone().sub(i[0]).normalize()}}function H_(i,t){let e=0,n=0,s=1/0;for(let o=0;o<i.length;o++){const r=i[o],c=i[(o+1)%i.length].clone().sub(r),l=c.lengthSq(),h=Re.clamp(t.clone().sub(r).dot(c)/l,0,1),d=r.clone().addScaledVector(c,h).distanceToSquared(t);d<s&&(s=d,n=e+Math.sqrt(l)*h),e+=Math.sqrt(l)}return n}function Il(i,t,e,n,s,o){const r=Si(t,e),a=new ht(.13,.025,s),c=Ci(r);for(let l=0;l<c;l+=s+o){const{position:h,direction:u}=$o(r,l+s/2),d=new z(a,n);d.position.set(h.x,Do+.025,h.y),d.rotation.y=Math.atan2(u.x,u.y),i.add(d)}}function G_(i){const t=new Tt;t.name=`Highway traffic car ${i+1}`;const e=new z(new ht(2.25,.8,5.15),xo[i%xo.length]);e.position.y=.68,e.castShadow=!0,t.add(e);const n=new z(new ht(1.78,.86,2.72),I_);n.position.set(0,1.48,-.12),t.add(n);const s=new z(new ht(1.68,.14,1.65),xo[i%xo.length]);s.position.set(0,1.94,-.14),t.add(s);const o=new U({color:"#34393a",roughness:.58,metalness:.25}),r=new z(new ht(2.18,.24,.18),o);r.position.set(0,.47,2.6),t.add(r);const a=r.clone();a.position.z=-2.6,t.add(a);const c=new z(new ht(.82,.32,.08),o);c.position.set(0,.82,2.63),t.add(c);const l=new U({color:"#fff0bd",emissive:"#ab8d48",emissiveIntensity:.6}),h=new U({color:"#a93e35",emissive:"#4b0805",emissiveIntensity:.35});for(const g of[-.82,.82]){const x=new z(new ht(.38,.24,.09),l);x.position.set(g,.95,2.62),t.add(x);const m=new z(new ht(.32,.35,.09),h);m.position.set(g,.9,-2.62),t.add(m)}const u=new le(.46,.46,.3,12),d=new le(.27,.27,.34,12),p=new je(.26,.045,6,12);for(const g of[-.92,.92])for(const x of[-1.68,1.68]){const m=new z(u,U_);m.rotation.z=Math.PI/2,m.position.set(g,.48,x),t.add(m);const f=new z(d,Or);f.rotation.z=Math.PI/2,f.position.set(g*1.12,.48,x),t.add(f);const M=new z(p,Or);M.rotation.y=Math.PI/2,M.position.set(g*1.14,.48,x),t.add(M);for(let _=0;_<5;_++){const v=_*Math.PI*2/5,w=new z(new ht(.1,.34,.08),Or);w.position.set(g*1.15,.48+Math.sin(v)*.12,x+Math.cos(v)*.12),w.rotation.x=v,t.add(w)}}return t.scale.setScalar(1.16),t}function W_(i,t,e,n){const s=new ht(.6,3.4,.6),o=new ht(3.2,3,3.2),r=new U({color:"#70543b",roughness:1}),a=new U({color:"#527b4e",roughness:1}),c=new In(s,r,e),l=new In(o,a,e),h=new jt,u=new P,d=new P,p=Ci(t);for(let g=0;g<e;g++){const x=(g+.35)/e,{position:m,direction:f}=$o(t,p*x),M=ko(f,n),_=12.8+g%2*1.2,v=.85+g%4*.08;u.set(m.x+M.x*_,1.75*v,m.y+M.y*_),d.setScalar(v),h.compose(u,new Xn,d),c.setMatrixAt(g,h),u.y=4.8*v,h.compose(u,new Xn,d),l.setMatrixAt(g,h)}c.castShadow=!0,l.castShadow=!0,i.add(c,l)}function X_(i,t,e,n,s,o,r){const a=Ci(t),{position:c,direction:l}=$o(t,a*e),h=ko(l,r),u=new Tt;u.position.set(c.x+h.x*9.2,0,c.y+h.y*9.2),u.rotation.y=Math.atan2(l.x,l.y);const d=new z(new le(.14,.2,6.8,8),Ll);d.position.set(0,3.4,0),u.add(d);const p=new z(new ht(.16,.16,5.2),Ll);p.position.set(0,6.45,2.3),u.add(p);for(const g of[-1,1]){const x=new z(new ht(.62,1.9,.55),k_);x.position.set(g*1.2,5.6,2.3),u.add(x);const m=[];for(let f=0;f<3;f++){const M=s[f].clone(),_=new z(new Ne(.18,8,8),M);_.position.set(g*1.2,6.15-f*.55,2.6),u.add(_),m.push(_)}o.push({lenses:m,index:n,side:g})}i.add(u)}function q_(i,t){const e=new Tt;e.name="Four-lane perimeter highway outside campus boundary";const n=V_(t),s=Oh(n)<0,o=Si(n,Nh),r=Si(n,Fh),a=Si(n,L_);e.add(new z(Br(Si(n,1.4),o,.015),F_)),e.add(new z(Br(r,Si(n,27),.012),O_));const c=new z(Br(o,r,Do),N_);c.name="Four-lane highway asphalt",c.receiveShadow=!0,e.add(c);for(const m of[-3.75,3.75])Il(e,a,m,B_,3.2,2.8);for(const m of[-.3,.3])Il(e,a,m,z_,4.2,.5);i.add(e);const l=new Tt;l.name="Trees and green belt around the perimeter highway";const h=Ci(a);W_(l,a,Math.max(24,Math.floor(h/15)),s),i.add(l);const u=[new U({color:"#572b2b",emissive:"#120000",emissiveIntensity:.12}),new U({color:"#66552a",emissive:"#110a00",emissiveIntensity:.12}),new U({color:"#2b5634",emissive:"#001105",emissiveIntensity:.12})],d=[];for(const[m,f]of[.06,.29,.53,.78].entries())X_(i,a,f,m,u,d,s);const p=[],g=new ut(-27.5,123.4);for(let m=0;m<Dl.length;m++){let f=Si(n,Dl[m]);m>=2&&(f=[...f].reverse());const M=Ci(f),_=H_(f,g);for(let v=0;v<3;v++){const w=G_(v+m*3);w.position.y=Do,i.add(w),p.push({car:w,path:f,distance:v===0?_+(m%2===0?2:-2):M*((v+.25*m)/3),speed:8.5+(v+m)%3*1.3})}}let x=0;return{update(m){x+=m;for(const _ of p){_.distance=(_.distance+_.speed*m)%Ci(_.path);const{position:v,direction:w}=$o(_.path,_.distance);_.car.position.set(v.x,Do,v.y),_.car.rotation.y=Math.atan2(w.x,w.y)}const f=x%18,M=f<8?2:f<10?1:0;for(const _ of d){const v=_.side===1?M:M===2?0:2;_.lenses.forEach((w,y)=>{w.material.emissiveIntensity=y===v?2.3:.12})}}}}const Ul=[new U({color:"#b5b3aa",roughness:.88}),new U({color:"#a9b5b8",roughness:.72,metalness:.12}),new U({color:"#c4b8a2",roughness:.9}),new U({color:"#919f9d",roughness:.76,metalness:.1})],Mo=[new U({color:"#456b76",roughness:.3,metalness:.25,emissive:"#10252b",emissiveIntensity:.18}),new U({color:"#8a9994",roughness:.34,metalness:.18,emissive:"#302d20",emissiveIntensity:.12})],Z_=new U({color:"#d3c9b3",roughness:.72}),Y_=new U({color:"#737d79",roughness:.86}),$_=42,K_=24;function J_(i){const t=i.map(([e,n])=>new ut(e,n));return t.length>1&&t[0].distanceToSquared(t[t.length-1])<.001&&t.pop(),t}function j_(i){return i.reduce((t,e,n)=>{const s=i[(n+1)%i.length];return t+e.x*s.y-s.x*e.y},0)/2}function Q_(i,t){const e=j_(i)<0;return i.map((n,s)=>{const o=i[(s-1+i.length)%i.length],r=i[(s+1)%i.length],a=n.clone().sub(o).normalize(),c=r.clone().sub(n).normalize(),l=g=>e?new ut(-g.y,g.x):new ut(g.y,-g.x),h=l(a),u=l(c),d=h.clone().add(u).normalize(),p=Math.min(t/Math.max(.35,d.dot(u)),t*2.2);return n.clone().addScaledVector(d,p)})}function Bh(i){return i.reduce((t,e,n)=>t+e.distanceTo(i[(n+1)%i.length]),0)}function tv(i,t){let e=t%Bh(i);for(let n=0;n<i.length;n++){const s=i[n],o=i[(n+1)%i.length],r=s.distanceTo(o);if(e<=r)return{position:s.clone().lerp(o,e/r),direction:o.clone().sub(s).normalize()};e-=r}return{position:i[0].clone(),direction:i[1].clone().sub(i[0]).normalize()}}function ev(i){return Math.hypot(i.x+27.5,i.y-123.4)<28}function nv(i,t,e,n,s){const o=11+s()*4.5,r=10+s()*4,a=8+Math.floor(s()*7),c=2.5,l=a*c+1,h=Math.atan2(e.x,e.y),u=new Tt;u.name=`Exterior high-rise ${n+1}`,u.position.set(t.x,0,t.y),u.rotation.y=h;const d=new z(new ht(o,l,r),Ul[n%Ul.length]);d.position.y=l/2,d.castShadow=!0,d.receiveShadow=!0,u.add(d);const p=new ht(o+.4,.28,r+.4),g=new z(p,Z_);g.position.y=l-.1,g.castShadow=!0,u.add(g);const x=new z(new ht(o*.34,1.8+s()*1.4,r*.38),Y_);x.position.set(o*.17,l+.85,-r*.12),x.castShadow=!0,u.add(x);const m=[],f=[],M=Math.max(3,Math.floor(o/2.5)),_=Math.max(2,Math.floor(r/2.5)),v=.95,w=1.32;for(let I=0;I<a;I++){const F=1.15+I*c;for(let V=0;V<M;V++){const k=-o/2+(V+.5)*o/M;m.push(new jt().makeTranslation(k,F,r/2+.035)),m.push(new jt().makeTranslation(k,F,-r/2-.035).multiply(new jt().makeRotationY(Math.PI)))}for(let V=0;V<_;V++){const k=-r/2+(V+.5)*r/_;f.push(new jt().makeTranslation(o/2+.035,F,k).multiply(new jt().makeRotationY(Math.PI/2))),f.push(new jt().makeTranslation(-o/2-.035,F,k).multiply(new jt().makeRotationY(-Math.PI/2)))}}const y=new In(new ht(v,w,.07),Mo[n%Mo.length],m.length);m.forEach((I,F)=>y.setMatrixAt(F,I)),y.instanceMatrix.needsUpdate=!0,u.add(y);const A=new In(new ht(v,w,.07),Mo[(n+1)%Mo.length],f.length);f.forEach((I,F)=>A.setMatrixAt(F,I)),A.instanceMatrix.needsUpdate=!0,u.add(A),i.add(u);const R=o/2+.4,S=r/2+.4,E=Math.abs(Math.cos(h))*R+Math.abs(Math.sin(h))*S,D=Math.abs(Math.sin(h))*R+Math.abs(Math.cos(h))*S;return{minX:t.x-E,maxX:t.x+E,minZ:t.y-D,maxZ:t.y+D}}function iv(i,t,e=[]){const n=J_(t),s=Q_(n,$_),o=Bh(s);let r=193;const a=()=>(r=r*16807%2147483647,(r-1)/2147483646),c=Math.floor(o/K_),l=[];let h=0;for(let u=0;u<c;u++){const d=(u+.5)*o/c,{position:p,direction:g}=tv(s,d);ev(p)||e.some(x=>Math.abs(p.x-x.x)<x.halfWidth&&Math.abs(p.y-x.z)<x.halfDepth)||(l.push(nv(i,p,g,h,a)),h++)}return{collisionBoxes:l}}const Vo=["#687d78","#77877d","#879084","#5d726f"];function sv(i,t,e,n,s,o,r,a){const c=new Ns(1,1,7,3),l=new z(c,new U({color:r,roughness:1,flatShading:!0}));l.scale.set(n,s,o),l.position.set(t,s/2-2,e),l.rotation.y=a,l.castShadow=!0,l.receiveShadow=!0,i.add(l);const h=new z(new Ns(n*.62,s*.67,6,2),new U({color:Vo[Math.floor(Math.abs(t+e))%Vo.length],roughness:1,flatShading:!0}));h.position.set(t+n*.46,s*.28,e-o*.3),h.rotation.z=Math.PI*.08,h.rotation.y=a+Math.PI*.17,h.castShadow=!0,i.add(h)}function ov(i,t,e){const n=new Tt;n.name="Distant stylized mountain range behind the city";const s=t.reduce((r,[a,c])=>({minX:Math.min(r.minX,a),maxX:Math.max(r.maxX,a),minZ:Math.min(r.minZ,c),maxZ:Math.max(r.maxZ,c)}),{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}),o=[{x:s.minX-100,z:(s.minZ+s.maxZ)/2,rotation:Math.PI/2},{x:s.maxX+100,z:(s.minZ+s.maxZ)/2,rotation:-Math.PI/2},{x:(s.minX+s.maxX)/2,z:s.minZ-100,rotation:0},{x:(s.minX+s.maxX)/2,z:s.maxZ+100,rotation:Math.PI}];for(const[r,a]of o.entries()){const c=new ut(Math.cos(a.rotation),-Math.sin(a.rotation)),l=r<2?11:13;for(let h=0;h<l;h++){const u=-200+h/(l-1)*400,d=25+(h*17+r*11)%29,p=28+(h*23+r*13)%52,g=22+(h*19+r*7)%25,x=h%2*9,m=a.x+c.x*u,f=a.z+c.y*u,M=d*.62,_=m+d*.46,v=f+x-g*.3;e&&m-d<=e.maxX&&m+d>=e.minX&&f+x-g<=e.maxZ&&f+x+g>=e.minZ||e&&_-M<=e.maxX&&_+M>=e.minX&&v-g*.34<=e.maxZ&&v+g*.34>=e.minZ||sv(n,m,f+x,d,p,g,Vo[(h+r)%Vo.length],a.rotation+(h%3-1)*.12)}}return i.add(n),n}const Oa=new U({color:"#c4b38f",roughness:.78}),Ye=new U({color:"#e5ddcb",roughness:.78}),si=new U({color:"#c3ad88",roughness:.88}),bi=new U({color:"#263638",roughness:.72});new U({color:"#6f9fa4",roughness:.22,metalness:.16,transparent:!0,opacity:.82});const Ze=new U({color:"#c5a35b",roughness:.36,metalness:.6}),En=new U({color:"#f0e9d8",roughness:.62}),zr=new U({color:"#17383d",roughness:.24,metalness:.2,emissive:"#15343a",emissiveIntensity:.22}),ac=new U({color:"#f4d49a",emissive:"#ffc86b",emissiveIntensity:1.15}),kr=new U({color:"#4b5150",roughness:.88}),Ba=new U({color:"#59774e",roughness:1}),rv=new U({color:"#789164",roughness:1}),Nl=new U({color:"#d3c7ac",roughness:.82}),av=new U({color:"#315f67",roughness:.48});new U({color:"#e9e1d2",roughness:.9});const zh=new U({color:"#9a8061",roughness:.9}),cv=new U({color:"#6c3435",roughness:.96}),Vn=new U({color:"#526b68",roughness:.88}),_n=new U({color:"#674632",roughness:.78}),Hn=new U({color:"#bb9856",roughness:.38,metalness:.55}),yo=new U({color:"#263b50",roughness:.86}),Fl=new U({color:"#1e3145",roughness:.84}),Ol=new U({color:"#bd8464",roughness:.92}),lv=new Th({color:"#428f9a",roughness:.2,metalness:.1,clearcoat:.8,clearcoatRoughness:.18});function hv(i){const t=i.map(([e,n])=>new ut(e,n));return t.length>1&&t[0].distanceToSquared(t[t.length-1])<.001&&t.pop(),t}function cc(i){return i.reduce((t,e,n)=>{const s=i[(n+1)%i.length];return t+e.x*s.y-s.x*e.y},0)/2}function za(i,t){return t?new ut(-i.y,i.x):new ut(i.y,-i.x)}function uv(i,t){const e=cc(i)<0;return i.map((n,s)=>{const o=i[(s-1+i.length)%i.length],r=i[(s+1)%i.length],a=n.clone().sub(o).normalize(),c=r.clone().sub(n).normalize(),l=za(a,e),h=za(c,e),u=l.clone().add(h).normalize(),d=Math.min(t/Math.max(.35,u.dot(h)),t*2.2);return n.clone().addScaledVector(u,d)})}function dv(i,t){const e=cc(i)<0;let n=null,s=1/0;for(let o=0;o<i.length;o++){const r=i[o],c=i[(o+1)%i.length].clone().sub(r),l=Re.clamp(t.clone().sub(r).dot(c)/c.lengthSq(),0,1),h=r.clone().addScaledVector(c,l),u=h.distanceToSquared(t);u<s&&(s=u,n={position:h,direction:c.normalize()})}return{...n,outward:za(n.direction,e)}}function J(i,t,e,n,s=!0){const o=new z(new ht(...e),t);return o.position.set(...n),o.castShadow=s,o.receiveShadow=!0,i.add(o),o}function Bl(i){const t=document.createElement("canvas");t.width=512,t.height=320;const e=t.getContext("2d");if(!e)throw new Error(`Unable to create the mansion ${i} artwork.`);const n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,i==="tv"?"#83b8be":"#d6a986"),n.addColorStop(1,i==="tv"?"#e5c998":"#f1d7ae"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="#f6df9e",e.beginPath(),e.arc(i==="tv"?350:145,105,42,0,Math.PI*2),e.fill(),e.fillStyle="#607b70",e.beginPath(),e.moveTo(0,230),e.lineTo(115,115),e.lineTo(214,225),e.lineTo(326,132),e.lineTo(512,242),e.lineTo(512,320),e.lineTo(0,320),e.closePath(),e.fill(),e.fillStyle="#3e655c",e.beginPath(),e.moveTo(0,265),e.lineTo(160,205),e.lineTo(284,270),e.lineTo(410,195),e.lineTo(512,250),e.lineTo(512,320),e.lineTo(0,320),e.closePath(),e.fill(),e.fillStyle="#d4b77a",e.fillRect(0,277,t.width,7);const s=new qn(t);return s.colorSpace=Ce,s}function kh(){const i=document.createElement("canvas");i.width=512,i.height=512;const t=i.getContext("2d");if(!t)throw new Error("Unable to create the mansion room carpet.");t.fillStyle="#71363a",t.fillRect(0,0,i.width,i.height),t.strokeStyle="#d1b16e",t.lineWidth=12,t.strokeRect(18,18,i.width-36,i.height-36),t.strokeStyle="#e0c58b",t.lineWidth=3,t.strokeRect(36,36,i.width-72,i.height-72),t.fillStyle="#d8b979";for(let n=72;n<i.height-56;n+=64)for(let s=72;s<i.width-56;s+=64)t.save(),t.translate(s,n),t.rotate(Math.PI/4),t.fillRect(-10,-10,20,20),t.restore(),t.beginPath(),t.arc(s,n,4,0,Math.PI*2),t.fill();const e=new qn(i);return e.colorSpace=Ce,e}function fv(){const i=document.createElement("canvas");i.width=768,i.height=192;const t=i.getContext("2d");if(!t)throw new Error("Unable to create the mansion entrance sign.");t.fillStyle="#263536",t.fillRect(0,0,i.width,i.height),t.strokeStyle="#d1b76f",t.lineWidth=9,t.strokeRect(7,7,i.width-14,i.height-14),t.fillStyle="#f4e8c9",t.textAlign="center",t.textBaseline="middle",t.font="bold 55px Georgia, serif",t.fillText("PRIVATE ESTATE",i.width/2,i.height/2);const e=new qn(i);return e.colorSpace=Ce,e}function pv(i,t,e){const n=J(i,zh,[t-1.2,.12,e-1.2],[0,.06,0],!1);n.name="Mansion walkable ground-floor interior";const s=new U({map:kh(),roughness:.98}),o=J(i,s,[19,.035,13],[0,.15,-4],!1);o.name="Mansion living-room rug";const r=J(i,s,[3.8,.035,10],[0,.15,8],!1);r.name="Mansion entrance carpet runner";const a=J(i,s,[11,.035,9],[10,.15,2],!1);a.name="Mansion dining-room carpet";const c=J(i,s,[9,.035,8],[-13,.15,3],!1);c.name="Mansion reading-room carpet";const l=[],h=new Tt;h.name="Mansion interior security guard",h.position.set(7,0,8),i.add(h),J(h,yo,[.92,1.05,.52],[0,1.55,0]),J(h,yo,[1.12,.22,.58],[0,1.05,0]);for(const _ of[-.24,.24])J(h,yo,[.34,.9,.42],[_,.48,.02]),J(h,_n,[.36,.16,.55],[_,.08,.07]);for(const _ of[-1,1]){const v=J(h,yo,[.34,.95,.38],[_*.68,1.58,.02]);v.rotation.z=_*-.08,J(h,Ol,[.29,.28,.3],[_*.7,1.08,.03])}const u=new z(new Ne(.39,12,10),Ol);u.position.set(0,2.45,.04),u.castShadow=!0,h.add(u),J(h,Fl,[.82,.2,.74],[0,2.78,.03]),J(h,Fl,[.94,.1,.38],[0,2.68,.26]),J(h,Hn,[.3,.34,.06],[0,1.77,.3],!1).name="Mansion security guard badge",l.push({localX:7,localZ:8,width:1.2,depth:1.2});const d=Bl("painting"),p=new U({map:d,roughness:.82});for(const _ of[-1,1]){const v=new Tt;v.name=_<0?"Mansion landscape painting":"Mansion sunset painting",v.position.set(_*(t/2-.95),4.1,1.8),v.rotation.y=_<0?Math.PI/2:-Math.PI/2,i.add(v),J(v,Hn,[.24,4.05,5.9],[0,0,0],!1);const w=new z(new rn(5.35,3.45),p);w.position.z=.15,v.add(w)}const g=(_,v,w,y,A,R)=>{const S=new Tt;S.name=_,S.position.set(v,0,w),i.add(S),R(S),l.push({localX:v,localZ:w,width:y,depth:A})},x=(_,v)=>{J(_,Vn,[v,.82,2.2],[0,.62,0]),J(_,Vn,[v,1.25,.42],[0,1.05,-.86]);for(const w of[-v/2+.28,v/2-.28])J(_,Vn,[.48,.94,1.8],[w,.8,0]);for(let w=0;w<3;w++){const y=-v/2+1.15+w*((v-2.3)/2);J(_,Ye,[.95,.16,.82],[y,1.1,-.38],!1)}};g("Mansion living-room sofa",-8,-8,9.2,2.8,_=>x(_,9.2)),g("Mansion lounge settee",8,-8,7.2,2.8,_=>{_.rotation.y=Math.PI,x(_,7.2)}),g("Mansion coffee table",0,-3.2,5,2.4,_=>{J(_,_n,[5,.18,2.4],[0,.86,0]);for(const v of[-2,2])J(_,Hn,[.16,.82,.16],[v,.42,0]);J(_,Hn,[2.4,.06,.08],[0,1.02,0])}),g("Mansion dining table",10,2,7,4,_=>{J(_,_n,[7,.24,3.4],[0,1.1,0]);for(const v of[-2.7,2.7])for(const w of[-1.65,1.65])J(_,_n,[.22,1,.22],[v,.52,w]);for(const v of[-2.5,0,2.5])for(const w of[-2.8,2.8])J(_,Vn,[1.35,.18,1.15],[v,.62,w]),J(_,_n,[1.25,1,.16],[v,1.08,w+(w<0?-.48:.48)])}),g("Mansion reading armchairs",-14,2.5,3.8,6.8,_=>{for(const v of[-1.8,1.8]){const w=new Tt;w.position.z=v,w.rotation.y=Math.PI/2,_.add(w),J(w,Vn,[2.4,.78,2.4],[0,.55,0]),J(w,Vn,[2.4,1.15,.4],[0,1.08,-.98]);for(const y of[-1.02,1.02])J(w,Vn,[.38,.92,1.9],[y,.75,0])}}),g("Mansion media console",0,-11.4,11,1.9,_=>{J(_,_n,[11,1.35,1.5],[0,.72,0]),J(_,Hn,[11.2,.12,1.65],[0,1.43,0]);for(const v of[-3.6,0,3.6])J(_,Hn,[.08,.72,.08],[v,.75,.78],!1)});const m=Bl("tv"),f=J(i,bi,[10,5.7,.42],[0,4.65,-13.15]);f.name="Mansion wall-mounted television";const M=new z(new rn(9.55,5.25),new U({map:m,emissive:"#a4d5cd",emissiveMap:m,emissiveIntensity:.32,roughness:.28}));M.position.set(0,4.65,-12.91),M.name="Mansion television screen",i.add(M),g("Mansion living-room bookcase",18.2,-3.1,2.8,8.5,_=>{J(_,_n,[2.4,6.2,8],[0,3.1,0]);for(const v of[1.35,2.8,4.25,5.7]){J(_,Hn,[2.55,.12,8.1],[0,v,0],!1);for(let w=0;w<8;w++){const y=[Vn,cv,Ye,Ba],A=J(_,y[(w+Math.floor(v))%y.length],[.52,.82+w%3*.13,.62],[0,v+.47,-3.35+w*.95],!1);A.rotation.z=(w%2?1:-1)*.035}}}),g("Mansion piano",-13.5,10.1,5.2,3,_=>{J(_,_n,[5.2,2.2,2.2],[0,1.1,0]),J(_,Hn,[5,.12,.78],[0,2.25,.76],!1);for(let v=0;v<17;v++)J(_,Ye,[.27,.08,.72],[-2.16+v*.27,2.36,1.3],!1),v<16&&v%7!==2&&v%7!==6&&J(_,bi,[.15,.1,.42],[-2.02+v*.27,2.44,1.15],!1);J(_,_n,[.2,2.2,.2],[-1.9,1.1,.6]),J(_,_n,[.2,2.2,.2],[1.9,1.1,.6]),J(_,Vn,[2.3,.28,1],[0,1.25,2.4]);for(const v of[-.9,.9])J(_,_n,[.12,1.15,.12],[v,.65,2.4])});for(const[_,v]of[[-16,-10],[16,-10],[-16,9],[16,9]]){const w=new Tt;w.position.set(_,0,v),i.add(w),J(w,si,[1.3,1.1,1.3],[0,.55,0]);const y=new z(new Gs(.9,1),Ba);y.position.set(0,1.8,0),y.scale.set(.8,1.3,.8),y.castShadow=!0,w.add(y),l.push({localX:_,localZ:v,width:1.6,depth:1.6})}for(const _ of[-8,0,8]){const v=new Tt;v.position.set(_,7.9,-1.5),i.add(v),J(v,Hn,[.12,1.2,.12],[0,.5,0],!1);const w=new z(new Ne(.48,12,8),ac);w.position.y=-.15,v.add(w);const y=new vf("#ffe2ad",45,28,2);y.position.y=-.7,v.add(y)}return l}function mv(i,t,e){const o=e/2-.4,r=5.8,a=new Tt;a.name="Mansion open, walkable ground-floor residence",i.add(a),J(a,Ye,[.8,8.6,e],[-t/2+.8/2,8.6/2,0]),J(a,Ye,[.8,8.6,e],[t/2-.8/2,8.6/2,0]),J(a,Ye,[t-.8*2,8.6,.8],[0,8.6/2,-e/2+.8/2]);const c=(t-r)/2;for(const _ of[-1,1])J(a,Ye,[c,8.6,.8],[_*(r/2+c/2),8.6/2,o]);const l=J(i,zh,[t+1.8,.12,e+1.8],[0,.06,0],!1);l.name="Mansion stone ground-floor foundation",J(i,En,[t+1,.18,e+1],[0,.34,0]);const h=J(i,Ye,[t*.76,4.8,e*.76],[0,10.3,-.4]);h.name="Mansion upper floor",J(i,bi,[t+1.8,.85,e+1.8],[0,8.8,0]),J(i,En,[t+.9,.28,e+.9],[0,9.34,0]),J(i,bi,[t*.83,.62,e*.86],[0,12.96,-.4]),J(i,En,[t*.84,.2,e*.87],[0,12.64,-.4]);const u=e/2+.12,d=[-14,-8,8,14];for(const[_,v,w]of[[0,4.9,2.65],[1,10.75,2.3]])for(const y of d){const A=_===0?u:e*.38,R=_===0?2.8:2.55,S=w+.42;J(i,En,[R+.54,S+.44,.2],[y,v,A+.06],!1),J(i,zr,[R,w,.12],[y,v,A+.18],!1),J(i,Ze,[.1,w,.08],[y,v,A+.25],!1),J(i,En,[R+.4,.2,.24],[y,v+S/2,A+.13],!1),J(i,Ze,[R+.6,.18,.28],[y,v-S/2,A+.18],!1)}for(const _ of[-t/2+1.2,t/2-1.2])J(i,si,[1.5,8.4,.38],[_,4.25,u+.08]),J(i,si,[1.5,4.5,.38],[_*.77,10.4,e*.38+.08]);const p=u+.28;J(i,si,[1.1,6.1,1.25],[-3.35,4.15,e/2+.55]),J(i,si,[1.1,6.1,1.25],[3.35,4.15,e/2+.55]),J(i,En,[7.6,.65,1.25],[0,7.05,e/2+.55]),J(i,Ze,[.14,4.2,.1],[-2.72,2.3,p+.47],!1),J(i,Ze,[.14,4.2,.1],[2.72,2.3,p+.47],!1),J(i,Ze,[5.44,.14,.1],[0,4.4,p+.47],!1),J(i,En,[11.6,.48,3.7],[0,7.4,e/2+1.85]);for(const _ of[-4.6,4.6])J(i,Ye,[.65,5.1,.75],[_,3.95,e/2+2.9]),J(i,Ze,[.9,.24,.95],[_,6.55,e/2+2.9]);const g=new ec;g.moveTo(-6.5,0),g.lineTo(0,3.4),g.lineTo(6.5,0),g.closePath();const x=new z(new qo(g),Ye);x.position.set(0,7.65,e/2+3.35),x.castShadow=!0,i.add(x),J(i,En,[13.4,.36,.5],[0,7.7,e/2+3.4]);for(const _ of[-7,7]){J(i,Ze,[.38,1.15,.25],[_,5.15,e/2+.95],!1);const v=new z(new Ne(.25,10,8),ac);v.position.set(_,5.95,e/2+.95),i.add(v)}const m=new U({map:kh(),roughness:.98}),f=e/2+4.45;J(i,Ye,[11.2,.5,6.4],[0,.28,f]),J(i,m,[5.4,.035,3.1],[0,.55,f+.35],!1);for(let _=0;_<5;_++){const v=.48-_*.1,w=f+6.4/2+.54+_*1.02,y=10.4-_*.35;J(i,_%2?Ye:si,[y,v,1.08],[0,v/2,w]),J(i,m,[2.5,.035,.78],[0,v+.02,w],!1).name=`Mansion entrance stair carpet ${_+1}`}for(const _ of[-1,1]){const v=J(i,bi,[11.8,.32,3.3],[_*8,9.5,e/2+1.35]);v.castShadow=!0,J(i,Ze,[11.8,.8,.14],[_*8,10,e/2+2.92],!1);for(let w=0;w<9;w++)J(i,Ze,[.09,.74,.09],[_*8-5.5+w*1.38,9.98,e/2+2.92],!1)}const M=12;for(const _ of[-1,1]){const v=_*(t/2+M/2-.8),w=J(i,si,[M,5.4,17],[v,2.7,-2.2]);w.name="Mansion side wing",J(i,bi,[M+.9,.7,17.8],[v,5.65,-2.2]),J(i,En,[M+1.1,.25,18],[v,1.1,-2.2]),J(i,En,[4.8,3.1,.2],[v,3.15,6.34]),J(i,zr,[4.25,2.55,.12],[v,3.15,6.48],!1),J(i,Ze,[.1,2.55,.08],[v,3.15,6.56],!1)}for(const _ of[-t*.32,0,t*.32]){const v=J(i,si,[4.4,1.1,3.2],[_,13.75,-e*.1]);v.name="Mansion rooftop dormer",J(i,bi,[4.9,.4,3.7],[_,14.5,-e*.1]),J(i,zr,[2.1,1.3,.14],[_,13.85,e*.32],!1)}return pv(i,t,e)}function gv(i,t,e){for(const o of[-t/2,t/2])J(i,Oa,[1.2,3.8,1.2],[o,1.9,e]),J(i,Ze,[1.5,.22,1.5],[o,3.85,e]);const n=new U({color:"#333d3d",roughness:.5,metalness:.45}),s=t/2-1.2;for(const o of[-1,1]){const r=new Tt;r.name=o<0?"Left mansion gate leaf, open":"Right mansion gate leaf, open",r.position.set(o*t/2,0,e);const a=-o*s/2;J(r,n,[s,.18,.22],[a,.32,0]),J(r,n,[s,.18,.22],[a,2.38,0]);for(let c=0;c<=6;c++)J(r,Ze,[.075,2.15,.28],[a-s/2+c*s/6,1.35,0],!1);r.rotation.y=-o*Math.PI/2,i.add(r)}}function _v(i,t,e){const n=new ht(1.5,1.25,1.5),s=new In(n,Ba,32),o=new jt,r=[];for(let x=0;x<9;x++)r.push([-t/2-7,-e/2+x*e/8]),r.push([t/2+7,-e/2+x*e/8]);for(let x=0;x<7;x++)r.push([-t/2+x*t/6,-e/2-7]),x!==3&&r.push([-t/2+x*t/6,e/2+7]);r.forEach(([x,m],f)=>{const M=.78+f%3*.12;o.compose(new P(x,.65*M,m),new Xn,new P(M,M,M)),s.setMatrixAt(f,o)}),s.count=r.length,s.instanceMatrix.needsUpdate=!0,s.castShadow=!0,i.add(s);const a=-e/2-17.5,c=27;J(i,Nl,[17,.12,c],[0,.07,a]),J(i,av,[12.4,.34,21.4],[0,.27,a]);const h=20,u=11,d=new z(new ht(u,.1,h),lv);d.position.set(0,.49,a),d.receiveShadow=!0,i.add(d);for(const x of[-u/2-.38,u/2+.38])J(i,Ye,[.55,.22,h+1.1],[x,.55,a]);for(const x of[-h/2-.38,h/2+.38])J(i,Ye,[u+1.1,.22,.55],[0,.55,a+x]);const p=J(i,Nl,[8,.1,4],[0,.07,a+c/2+2]);p.name="Mansion rear garden path to the swimming pool";const g=new U({color:"#d9e1d8",roughness:.32,metalness:.68});for(const x of[-.38,.38]){const m=new z(new le(.08,.08,1.35,8),g);m.position.set(x,.82,a+h/2-.55),m.castShadow=!0,i.add(m)}for(let x=0;x<3;x++)J(i,g,[.82,.08,.14],[0,.5-x*.22,a+h/2-.15-x*.22],!1)}function vv(i,t,e,n){const s=new U({color:"#b3a17f",roughness:.84}),o=new U({color:"#344341",roughness:.52,metalness:.32}),r=t/2,a=e/2,c=13,l=1.55,h=1.35,u=[],d=(x,m,f,M)=>{const _=M?[x,l,.7]:[.7,l,x],v=M?[x,h,.2]:[.2,h,x],w=l/2,y=l+h/2,A=J(i,s,_,[m,w,f]);A.name="Mansion stone perimeter wall";const R=J(i,o,v,[m,y,f],!1);R.name="Mansion decorative perimeter railing";const E=Math.floor(x/8);for(let D=0;D<=E;D++){const I=-x/2+x*D/E,F=M?m+I:m,V=M?f:f+I;J(i,Oa,[.9,3.2,.9],[F,1.6,V]),J(i,Ze,[1.05,.18,1.05],[F,3.25,V],!1)}u.push({localX:m,localZ:f,width:M?x:.9,depth:M?.9:x})};d(e,-r,0,!1),d(e,r,0,!1),d(t,0,-a,!0);const p=(t-c)/2;d(p,-47.5/2,a,!0),d(p,(c+p)/2,a,!0);const g=x=>{J(i,Oa,[1.5,4.2,1.5],[x,2.1,n]),J(i,Ze,[1.8,.25,1.8],[x,4.25,n],!1);const m=new z(new Ne(.28,10,8),ac);m.position.set(x,4.65,n),i.add(m)};return g(-c/2),g(c/2),u}function xv(i,t){const e=new U({color:"#765139",roughness:.95}),n=[new U({color:"#426b47",roughness:1}),new U({color:"#567e4e",roughness:1}),new U({color:"#6f8d54",roughness:1})],o=t/2+11.2+4.2;for(const r of[-1,1])for(let a=0;a<4;a++){const c=-30+a*12,l=5.5+a%2*.7,h=new z(new le(.3,.48,l,8),e);h.position.set(r*o,l/2,c),h.castShadow=!0,i.add(h);const u=new Tt;u.position.set(r*o,l-.25,c);for(const[d,p,g]of[[[0,0,0],1.1,a%n.length],[[-1.25,.25,.25],.78,(a+1)%n.length],[[1.15,.35,-.3],.82,(a+2)%n.length]]){const x=new z(new Gs(1.7,0),n[g]);x.position.set(...d),x.scale.set(p,p*1.15,p),x.castShadow=!0,u.add(x)}i.add(u)}}function Mv(i,t){const e=hv(t);cc(e)<0;const n=uv(e,12.5),s=new ut(161,-150),o=dv(n,s),r=o.outward,a=r.clone().negate(),c=o.position.clone().addScaledVector(r,7.8),l=o.position.clone().addScaledVector(r,89),h=42,u=29,d=82,p=130,g=16,x=Math.atan2(a.x,a.y),m=new Tt;m.name="Luxury highway-side mansion estate",m.position.set(l.x,0,l.y),m.rotation.y=x;const f=J(m,rv,[d-2,.08,p-2],[0,.015,0],!1);f.name="Mansion estate landscaped lawn ground",f.receiveShadow=!0;const M=u/2+9,_=p/2-2.5,v=_-M,w=M+v/2,y=J(m,kr,[10,.14,v+1.2],[0,.07,w],!1);y.name="Mansion private driveway connecting to highway",y.receiveShadow=!0;const A=new U({color:"#d5c6a0",roughness:.75});for(const Zt of[-5.25,5.25])J(m,A,[.18,.1,v+1.5],[Zt,.13,w],!1);const R=J(m,kr,[17,.14,12],[0,.07,M+1],!1);R.receiveShadow=!0,R.name="Mansion arrival courtyard",gv(m,10,_);const S=new Tt;S.name="Mansion moved forward within estate",S.position.z=g,m.add(S);const E=mv(S,h,u);_v(S,h,u),xv(S,h);const D=vv(m,d,p,_),I=fv(),F=new z(new rn(5.2,1.3),new U({map:I,side:Ae,roughness:.46}));F.position.set(0,3.15,_+.08),m.add(F);const k=(Zt=>{const mt=new P(0,0,Zt).applyAxisAngle(new P(0,1,0),x);return new ut(l.x+mt.x,l.y+mt.z)})(_+1.5),G=k.clone().sub(c),K=G.length(),W=c.clone().add(k).multiplyScalar(.5),tt=new z(new ht(10,.14,K+.8),kr);tt.position.set(W.x,.08,W.y),tt.rotation.y=Math.atan2(G.x,G.y),tt.receiveShadow=!0,tt.name="Mansion highway access connector",i.add(tt),i.add(m);const ct=d/2,St=p/2,zt=Math.abs(Math.cos(x))*ct+Math.abs(Math.sin(x))*St,oe=Math.abs(Math.sin(x))*ct+Math.abs(Math.cos(x))*St,Lt={minX:l.x-zt,maxX:l.x+zt,minZ:l.y-oe,maxZ:l.y+oe},kt=(Zt,mt,dt,ot)=>{const Xt=l.x+Zt*Math.cos(x)+mt*Math.sin(x),gt=l.y-Zt*Math.sin(x)+mt*Math.cos(x),Nt=dt/2,de=ot/2,_e=Math.abs(Math.cos(x))*Nt+Math.abs(Math.sin(x))*de,C=Math.abs(Math.sin(x))*Nt+Math.abs(Math.cos(x))*de;return{minX:Xt-_e,maxX:Xt+_e,minZ:gt-C,maxZ:gt+C}},Y=12,j=h/2+Y/2-.8,pt=.8,Ut=5.8,wt=(h-Ut)/2,Vt=[{localX:-h/2+pt/2,localZ:g,width:pt,depth:u},{localX:h/2-pt/2,localZ:g,width:pt,depth:u},{localX:0,localZ:g-u/2+pt/2,width:h-pt*2,depth:pt},...[-1,1].map(Zt=>({localX:Zt*(Ut/2+wt/2),localZ:g+u/2-pt/2,width:wt,depth:pt}))],he=E.map(({localX:Zt,localZ:mt,width:dt,depth:ot})=>kt(Zt,mt+g,dt,ot)),L=[...Vt.map(({localX:Zt,localZ:mt,width:dt,depth:ot})=>kt(Zt,mt,dt,ot)),kt(-j,g-2.2,Y,17),kt(j,g-2.2,Y,17),...he,...D.map(({localX:Zt,localZ:mt,width:dt,depth:ot})=>kt(Zt,mt,dt,ot))];return{bounds:Lt,center:{x:l.x,z:l.y},collisionBoxes:L,driveway:tt,group:m}}const So=new U({color:"#315b58",roughness:.5,metalness:.18}),vi=new U({color:"#d8bd79",roughness:.42,metalness:.44}),yv=new U({color:"#9ac6c8",roughness:.2,metalness:.18,transparent:!0,opacity:.72}),Vr=new U({color:"#313a3a",roughness:.55,metalness:.36}),Vh=1.8,Sv=.16,wv=.29;function ei(i,t,e,n){const s=new z(new ht(...e),t);return s.position.set(...n),s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function Ev(i,t){const e=new Tt;e.name="Mansion driveable helicopter",e.position.copy(t),e.scale.setScalar(Vh);const n=new z(new Ne(1,16,12),So);n.scale.set(1.05,.82,2.45),n.position.y=1.15,n.castShadow=!0,e.add(n);const s=new z(new Ne(1,14,10),yv);s.scale.set(.91,.7,1.22),s.position.set(0,1.42,.9),s.castShadow=!0,e.add(s),ei(e,So,[1.85,.16,2.65],[0,.72,.3]),ei(e,vi,[.09,1.04,.1],[0,1.36,1.72]),ei(e,vi,[1.7,.08,.1],[0,1.88,.35]),ei(e,So,[.32,.34,5.2],[0,1.28,-3.48]),ei(e,So,[1.55,.16,.64],[0,1.32,-5.86]),ei(e,vi,[.18,.12,.8],[0,1.48,-5.86]);const o=new Tt;o.position.set(0,1.45,-5.92),e.add(o);for(const h of[0,Math.PI/2]){const u=ei(o,Vr,[.13,1.1,.1],[0,0,0]);u.rotation.z=h}const r=new z(new Ne(.18,10,8),vi);o.add(r);const a=new z(new le(.12,.16,.95,10),vi);a.position.set(0,2.12,-.25),e.add(a);const c=new Tt;c.name="Helicopter main rotor",c.position.set(0,2.62,-.25),e.add(c);for(const h of[0,Math.PI/2]){const u=ei(c,Vr,[.24,.1,8.2],[0,0,0]);u.rotation.y=h}const l=new z(new Ne(.24,12,8),vi);c.add(l),e.userData.rotor=c,e.userData.tailRotor=o;for(const h of[-1,1]){const u=new z(new le(.09,.09,4.8,8),Vr);u.rotation.x=Math.PI/2,u.position.set(h*.92,.38,.05),e.add(u);for(const d of[-1.35,1.25]){const p=new z(new le(.07,.07,.72,8),vi);p.position.set(h*.82,.7,d),e.add(p)}}return i.add(e),e}class bv{constructor(t,e){this.scene=t,this.mansion=e,this.isPiloting=!1,this.speed=0,this.verticalSpeed=0,this.landingAltitude=Sv-wv*Vh,this.maxAltitude=this.landingAltitude+140;const n=new P(0,0,-47);e.group.add(this.createHelipad(n));const s=e.group.localToWorld(new P(0,.12,-47));s.y=this.landingAltitude,this.helicopter=Ev(t,s)}createHelipad(t){const e=new Tt;e.name="Mansion garden helipad";const n=new U({color:"#555e5b",roughness:.9}),s=new U({color:"#f1ead3",roughness:.78}),o=new z(new ht(36,.16,36),n);o.position.y=.08,o.receiveShadow=!0,e.add(o);const r=new z(new je(12.5,.16,8,64),s);r.rotation.x=-Math.PI/2,r.position.y=.18,e.add(r);for(const l of[-2.6,2.6]){const h=new z(new ht(.72,.08,5.5),s);h.position.set(l,.19,0),e.add(h)}const a=new z(new ht(5.8,.08,.72),s);a.position.set(0,.19,0),e.add(a);const c=new U({color:"#f3d577",emissive:"#e1a941",emissiveIntensity:.65});for(const l of[-15.5,15.5])for(const h of[-15.5,15.5]){const u=new z(new Ne(.34,10,8),c);u.position.set(l,.46,h),e.add(u)}return e.position.copy(t),e}isNear(t){return Math.hypot(t.x-this.helicopter.position.x,t.z-this.helicopter.position.z)<7}enter(t){return this.isPiloting||!this.isNear(t.position)?!1:(t.enterVehicle(this.helicopter),t.group.position.set(.18,.38,.72),t.group.scale.setScalar(.3),this.isPiloting=!0,this.speed=0,this.verticalSpeed=0,!0)}exit(t){if(!this.isPiloting)return"not-piloting";if(this.helicopter.position.y>this.landingAltitude+.25||Math.abs(this.speed)>1.2)return"must-land";const e=new P(2.4,0,0).applyQuaternion(this.helicopter.quaternion).add(this.helicopter.position);return t.leaveVehicle(this.scene,e),this.isPiloting=!1,this.speed=0,this.verticalSpeed=0,"exited"}forceLand(t){this.isPiloting&&(this.helicopter.position.y=this.landingAltitude,this.speed=0,this.verticalSpeed=0,this.exit(t))}update(t,e,n){if(this.helicopter.userData.rotor.rotation.y+=t*(this.isPiloting?42:5),this.helicopter.userData.tailRotor.rotation.z+=t*(this.isPiloting?36:4),!this.isPiloting)return 0;const s=e.has("KeyW")||e.has("ArrowUp"),o=e.has("KeyS")||e.has("ArrowDown"),r=Number(e.has("KeyD")||e.has("ArrowRight"))-Number(e.has("KeyA")||e.has("ArrowLeft")),a=e.has("Space")||e.has("KeyR"),c=e.has("ControlLeft")||e.has("KeyF"),l=e.has("ShiftLeft")||e.has("ShiftRight")?34:24,h=Number(s)*l-Number(o)*11;this.speed=Re.damp(this.speed,h,1.8,t),this.helicopter.rotation.y+=r*t*1.25;const u=Number(a)*10-Number(c)*8;this.verticalSpeed=Re.damp(this.verticalSpeed,u,2.4,t);const d=this.helicopter.rotation.y,p=this.helicopter.position.x+Math.sin(d)*this.speed*t,g=this.helicopter.position.z+Math.cos(d)*this.speed*t;this.helicopter.position.x=Re.clamp(p,-270,270),this.helicopter.position.z=Re.clamp(g,-330,330),this.helicopter.position.y=Re.clamp(this.helicopter.position.y+this.verticalSpeed*t,this.landingAltitude,this.maxAltitude);const x=Re.clamp(this.speed/l*.14,-.14,.14);this.helicopter.rotation.x=Re.damp(this.helicopter.rotation.x,x,3,t);const m=Re.clamp(-r*Math.min(Math.abs(this.speed)/l,1)*.16,-.16,.16);return this.helicopter.rotation.z=Re.damp(this.helicopter.rotation.z,m,3,t),n.position.copy(this.helicopter.position),this.speed}}const bn=new ht(1,1,1),Ho=new le(.5,.5,1,8),ee={skin:["#b97856","#d39a76","#a96f51","#e0ad88"].map(i=>new U({color:i,roughness:.92})),hair:["#211d1c","#392a22","#4b3529","#251e2b"].map(i=>new U({color:i,roughness:1})),tops:["#4e8d83","#d07c66","#e0b755","#58769a","#8e6d9d","#a4a46e","#e2e0d6","#d58aab"].map(i=>new U({color:i,roughness:.88})),bottoms:["#33445a","#4b4650","#263a3c","#55483c"].map(i=>new U({color:i,roughness:.92})),shoes:new U({color:"#e5e1d7",roughness:.9}),eye:new U({color:"#252225",roughness:.7}),badge:new U({color:"#f0d477",roughness:.7}),guards:new U({color:"#29475a",roughness:.9}),guardTrim:new U({color:"#d3b86e",roughness:.75}),carBody:["#e7e4dc","#567d83","#b5a68e","#41515d"].map(i=>new U({color:i,roughness:.58,metalness:.08})),glass:new U({color:"#8bb6bd",roughness:.3,metalness:.1,transparent:!0,opacity:.82}),tire:new U({color:"#24282a",roughness:1}),hub:new U({color:"#bac2bf",metalness:.5,roughness:.45}),bike:["#d77b4e","#527b8b","#4c4a59","#b59a54"].map(i=>new U({color:i,roughness:.65,metalness:.25})),booth:new U({color:"#e5dfce",roughness:.9})};function nt(i,t,e,n,s=bn){const o=new z(s,t);return o.position.set(...e),o.scale.set(...n),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function zl({x:i,z:t,rotation:e=0,index:n=0,guard:s=!1}){const o=new Tt;o.position.set(i,0,t),o.rotation.y=e,o.userData.phase=n*.9;const r=ee.skin[n%ee.skin.length],a=ee.hair[(n+1)%ee.hair.length],c=s?ee.guards:ee.tops[n%ee.tops.length],l=s?ee.guards:ee.bottoms[n*3%ee.bottoms.length];nt(o,c,[0,1.65,0],[.86,.92,.48]);const h=new Tt,u=new Tt;h.position.set(-.22,1.12,0),u.position.set(.22,1.12,0),o.add(h,u),nt(h,l,[0,-.48,0],[.34,1.12,.38]),nt(u,l,[0,-.48,0],[.34,1.12,.38]),nt(h,ee.shoes,[0,-1,.1],[.42,.22,.58]),nt(u,ee.shoes,[0,-1,.1],[.42,.22,.58]),nt(o,r,[0,2.42,0],[.69,.7,.68]),nt(o,a,[0,2.77,-.035],[.72,.25,.73]),nt(o,ee.eye,[-.15,2.46,.346],[.075,.09,.035]),nt(o,ee.eye,[.15,2.46,.346],[.075,.09,.035]);const d=new Tt,p=new Tt;return d.position.set(-.57,2.08,0),p.position.set(.57,2.08,0),o.add(d,p),nt(d,c,[0,-.41,0],[.28,.86,.34]),nt(p,c,[0,-.41,0],[.28,.86,.34]),nt(d,r,[0,-.89,.01],[.23,.22,.25]),nt(p,r,[0,-.89,.01],[.23,.22,.25]),n%2===0&&!s?(nt(o,a,[0,2.24,-.34],[.32,.75,.22]),nt(o,a,[0,1.94,-.08],[.58,.54,.48])):nt(o,a,[.38,2.18,-.16],[.17,.48,.23]),nt(o,ee.badge,[.25,1.79,.25],[.15,.2,.035]),s&&(nt(o,ee.guardTrim,[0,2.86,0],[.74,.11,.72]),nt(o,ee.guardTrim,[0,2.44,.37],[.24,.14,.035]),o.userData.isSecurity=!0),o.userData.limbs={leftArm:d,rightArm:p,leftLeg:h,rightLeg:u},o}function Tv(i,t,e,n=Math.PI/2){const s=new Tt;s.position.set(i,.12,t),s.rotation.y=n;const o=ee.carBody[e%ee.carBody.length];nt(s,o,[0,.58,0],[4.1,.85,1.85]),nt(s,o,[0,1.15,-.08],[2.28,.8,1.58]),nt(s,ee.glass,[0,1.2,.76],[1.9,.55,.04]),nt(s,ee.glass,[0,1.2,-.88],[1.9,.55,.04]);const r=new z(Ho,ee.tire);r.rotation.x=Math.PI/2;for(const a of[-1,1])for(const c of[-1,1]){const l=r.clone();l.position.set(c*1.32,.36,a*.91),l.scale.set(.62,.62,.62),s.add(l);const h=new z(Ho,ee.hub);h.rotation.x=Math.PI/2,h.position.set(c*1.32,.36,a*1.02),h.scale.set(.3,.3,.3),s.add(h)}for(const a of[-1,1])nt(s,ee.badge,[a*1.85,.65,.45],[.08,.16,.28]);return s}function Av(){const i=new Tt;i.name="Personal two-seat supercar · driveable";const t=new U({color:"#dce7e7",roughness:.22,metalness:.48}),e=new U({color:"#1e3038",roughness:.34,metalness:.38}),n=new U({color:"#101b20",roughness:.5,metalness:.22}),s=new U({color:"#c4d2d0",roughness:.2,metalness:.86}),o=new U({color:"#253a3e",roughness:.62,metalness:.2}),r=new U({color:"#22b8b2",roughness:.24,metalness:.42}),a=new U({color:"#bd3946",emissive:"#450d15",emissiveIntensity:.55,roughness:.3}),c=new U({color:"#f4ffff",emissive:"#b9f4f4",emissiveIntensity:1.65,roughness:.18}),l=new U({color:"#d4ffff",emissive:"#42f5e9",emissiveIntensity:2.2,roughness:.16}),h=new U({color:"#82c5ca",roughness:.12,metalness:.16,transparent:!0,opacity:.2}),u=new U({color:"#bd8b5d",roughness:.68}),d=new U({color:"#e1c49a",roughness:.64}),p=new U({color:"#263236",roughness:.66}),g=new U({color:"#80e9e3",emissive:"#287c78",emissiveIntensity:.7,roughness:.28});nt(i,e,[0,.43,0],[2.12,.42,4.72]),nt(i,t,[0,.61,1.48],[2.08,.35,1.48]).rotation.x=.08,nt(i,t,[0,.68,-1.7],[2.02,.4,1.05]),nt(i,t,[0,.57,0],[2.12,.37,2.5]),nt(i,n,[0,.51,0],[1.76,.12,2.55]);for(const y of[-.62,.62])nt(i,r,[y,.81,1.42],[.045,.025,1.08]).rotation.z=y*-.12,nt(i,e,[y,.8,-.05],[.045,.035,.82]).rotation.y=y*.12;for(const y of[-1.02,1.02]){nt(i,t,[y,.68,-.03],[.16,.4,2.72]);for(const A of[-1.49,1.49])nt(i,t,[y*1.06,.76,A],[.2,.28,.82]),nt(i,r,[y*1.14,.78,A],[.025,.04,.55]);nt(i,e,[y*1.03,.44,-.05],[.13,.2,3.7]),nt(i,e,[y*1.025,.77,.05],[.11,.08,1.05]),nt(i,s,[y*1.04,.95,.95],[.3,.12,.32])}for(const y of[-.43,.43])nt(i,u,[y,.73,.06],[.6,.18,.62]),nt(i,u,[y,1.02,-.2],[.56,.58,.2]),nt(i,d,[y,1,-.08],[.34,.37,.035]),nt(i,u,[y,1.31,-.18],[.32,.2,.16]),nt(i,p,[y*1.48,.88,.06],[.08,.37,.52]);nt(i,p,[0,.72,.13],[.24,.14,1]),nt(i,p,[0,.91,.05],[.2,.24,.56]),nt(i,s,[0,1.04,-.02],[.08,.08,.2]),nt(i,p,[0,1.04,.95],[1.82,.27,.32]),nt(i,g,[.36,1.13,.91],[.33,.15,.035]),nt(i,g,[-.34,1.1,.91],[.28,.1,.035]);const x=new z(new je(.19,.035,8,18),n);x.position.set(.43,1.08,.69),x.castShadow=!0,i.add(x),nt(i,h,[0,1.2,.93],[1.58,.045,.68]).rotation.x=.4,nt(i,h,[0,1.2,-1.13],[1.38,.04,.42]).rotation.x=-.42;for(const y of[-.77,.77])nt(i,e,[y,1.12,.68],[.075,.62,.09]).rotation.x=.42,nt(i,e,[y,1.13,-.9],[.085,.56,.09]).rotation.x=-.42,nt(i,n,[y*1.15,.94,1.05],[.22,.09,.25]);nt(i,e,[0,.53,2.39],[1.95,.26,.18]),nt(i,e,[0,.49,-2.37],[1.9,.3,.18]),nt(i,n,[0,.59,2.49],[1.12,.31,.06]),nt(i,o,[0,.36,2.55],[2.26,.12,.42]);for(const y of[-1,1]){nt(i,r,[y*1.02,.38,2.56],[.48,.1,.035]),nt(i,o,[y*1.05,.69,2.42],[.16,.34,.26]).rotation.z=y*-.22,nt(i,o,[y*1.2,.42,.05],[.32,.16,3.38]),nt(i,r,[y*1.22,.51,.05],[.12,.045,2.72]),nt(i,t,[y*1.08,.7,-1.68],[.48,.38,.22]);for(const A of[-1,1]){const R=new z(new je(.55,.09,7,24,Math.PI),o);R.rotation.y=Math.PI/2,R.position.set(y*1.07,.48,A*1.49),R.castShadow=!0,i.add(R)}}for(const y of[-.72,.72])nt(i,e,[y,.85,2.29],[.65,.2,.1]).rotation.y=y<0?-.12:.12,nt(i,c,[y,.86,2.35],[.52,.095,.07]).rotation.y=y<0?-.12:.12,nt(i,l,[y*.9,.94,2.35],[.42,.035,.075]).rotation.z=y<0?-.16:.16,nt(i,l,[y*.92,.76,2.37],[.3,.025,.06]).rotation.z=y<0?.12:-.12,nt(i,a,[y,.83,-2.39],[.46,.12,.07]),nt(i,l,[y,.88,-2.4],[.48,.035,.075]),nt(i,e,[y,.69,2.41],[.38,.16,.08]),nt(i,o,[y*1.08,.83,-1.68],[.5,.07,.34]);nt(i,s,[0,.57,2.51],[1,.08,.04]),nt(i,n,[0,.42,-2.5],[2.18,.24,.15]);for(const y of[-.74,.74])nt(i,o,[y,.38,-2.36],[.38,.27,.42]);for(const y of[-.74,.74]){const A=new z(new le(.14,.16,.2,16),s);A.rotation.x=Math.PI/2,A.position.set(y,.5,-2.53),A.castShadow=!0,i.add(A);const R=new z(new le(.105,.12,.012,16),n);R.rotation.x=Math.PI/2,R.position.set(y,.5,-2.64),i.add(R)}for(const y of[-.56,-.28,0,.28,.56])nt(i,o,[y,.32,-2.28],[.055,.2,.34]);for(const y of[-.82,.82])nt(i,o,[y,.99,-2.12],[.08,.3,.08]).rotation.x=-.18;nt(i,o,[0,1.17,-2.12],[2.45,.1,.28]).rotation.x=-.08,nt(i,r,[0,1.13,-2.12],[2.25,.025,.18]).rotation.x=-.08;const m=new z(Ho,ee.tire);m.rotation.z=Math.PI/2;for(const y of[-1,1])for(const A of[-1,1]){const R=A*1.49,S=m.clone();S.position.set(y*1.07,.48,R),S.scale.set(.76,.86,.86),S.castShadow=!0,i.add(S);const E=new z(Ho,s);E.rotation.z=Math.PI/2,E.position.set(y*1.17,.48,R),E.scale.set(.19,.52,.52),i.add(E);const D=new z(new le(.1,.1,.22,16),n);D.rotation.z=Math.PI/2,D.position.set(y*1.2,.48,R),i.add(D)}const f=new z(bn,s);f.position.set(0,.53,2.53),f.scale.set(.62,.13,.035),i.add(f);const M=document.createElement("canvas");M.width=384,M.height=64;const _=M.getContext("2d");_.clearRect(0,0,M.width,M.height),_.fillStyle="#242629",_.font="bold 32px Segoe UI, sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("GT  /  02",M.width/2,M.height/2);const v=new qn(M);v.colorSpace=Ce;const w=new z(new rn(.82,.14),new ds({map:v,transparent:!0,depthWrite:!1}));return w.position.set(0,.74,-2.455),w.rotation.y=Math.PI,i.add(w),i}function Rv(i,t,e,n=0){const s=new Tt;s.position.set(i,0,t),s.rotation.y=n;const o=ee.bike[e%ee.bike.length];for(const a of[-.76,.76]){const c=new z(new je(.37,.075,6,12),ee.tire);c.position.set(a,.43,0),s.add(c)}const r=(a,c,l=.055)=>{const h=new P(...a),u=new P(...c),d=u.clone().sub(h),p=new z(new le(l,l,d.length(),6),o);p.position.copy(h.add(u).multiplyScalar(.5)),p.quaternion.setFromUnitVectors(new P(0,1,0),d.normalize()),p.castShadow=!0,s.add(p)};return r([-.76,.43,0],[-.2,.43,0]),r([-.2,.43,0],[.15,.82,0]),r([.15,.82,0],[.76,.43,0]),r([-.76,.43,0],[.15,.82,0]),r([.15,.82,0],[.55,.82,0]),r([.55,.82,0],[.76,.43,0]),r([.15,.82,0],[.15,1.12,0]),r([.35,1.12,0],[.72,1.12,0],.045),r([-.36,.83,0],[-.06,.83,0],.045),s}function Cv(i,t){const e=new Tt;e.name="Black Bullet Electra-style motorcycle",e.position.set(i,0,t);const n=new U({color:"#15191b",roughness:.34,metalness:.42}),s=new U({color:"#202324",roughness:.9}),o=new U({color:"#c4cecc",roughness:.22,metalness:.86}),r=new U({color:"#d3ac56",roughness:.32,metalness:.62}),a=new ds({color:"#ff8b20",transparent:!0,opacity:.92,depthWrite:!1}),c=new U({color:"#fff8dc",emissive:"#fff0bd",emissiveIntensity:2.8,roughness:.18}),l=new U({color:"#d94143",emissive:"#551015",roughness:.32}),h=(f,M,_,v)=>{const w=new P(...f),y=new P(...M),A=y.clone().sub(w),R=new z(new le(_,_,A.length(),10),v);return R.position.copy(w.add(y).multiplyScalar(.5)),R.quaternion.setFromUnitVectors(new P(0,1,0),A.normalize()),R.castShadow=!0,e.add(R),R};for(const f of[-.88,.88]){const M=new z(new je(.36,.075,8,24),s);M.rotation.y=Math.PI/2,M.position.set(0,.39,f),e.add(M);const _=new z(new le(.11,.11,.15,16),o);_.rotation.z=Math.PI/2,_.position.set(0,.39,f),e.add(_);for(let v=0;v<8;v++){const w=v/8*Math.PI*2;h([0,.39,f],[0,.39+Math.sin(w)*.31,f+Math.cos(w)*.31],.012,o)}}h([0,.39,-.88],[0,.83,-.38],.065,n),h([0,.39,.88],[0,1,.23],.045,o),h([-.12,.39,.88],[-.12,1,.23],.035,o),h([0,.82,-.38],[0,.82,.23],.045,n);const u=new z(new Ne(1,20,14),n);u.position.set(0,1.08,.2),u.scale.set(.19,.17,.25),u.castShadow=!0,e.add(u),nt(e,r,[0,1.255,.19],[.13,.015,.17]),nt(e,n,[0,.88,-.43],[.42,.14,.62]);const d=new z(new Ne(1,18,12),s);d.position.set(0,.99,-.43),d.scale.set(.23,.09,.38),d.castShadow=!0,e.add(d),nt(e,n,[0,.91,-.58],[.42,.13,.48]),nt(e,o,[0,.51,-.05],[.4,.46,.4]),nt(e,n,[0,.51,-.05],[.3,.34,.32]);for(const f of[.42,.5,.58,.66])nt(e,o,[0,f,-.05],[.46,.035,.38]);const p=[];for(const f of[-1,1]){h([f*.18,.83,-.23],[f*.18,.48,.32],.04,n),h([f*.18,.42,-.5],[f*.18,.42,.28],.055,o);const M=new z(new le(.055,.075,.92,12),o);M.rotation.x=Math.PI/2,M.position.set(f*.2,.58,-.28),e.add(M);const _=new z(new Ns(.12,.62,10),a);_.rotation.x=-Math.PI/2,_.position.set(f*.2,.58,-.86),_.visible=!1,e.add(_),p.push(_),nt(e,n,[f*.22,.94,.22],[.1,.1,.12]),h([f*.22,.96,.22],[f*.36,1.26,.28],.018,o);const v=new z(new Ne(.065,10,8),r);v.position.set(f*.27,.83,.72),e.add(v)}const g=new z(new Ne(.19,16,12),c);g.scale.set(.82,.72,.48),g.position.set(0,1.04,.47),e.add(g);const x=new z(new je(.16,.03,8,20),o);x.position.copy(g.position),e.add(x);const m=new gf("#fff0bd",22,32,Math.PI/7,.55,1.5);return m.position.set(0,1.04,.62),m.target.position.set(0,.45,9),e.add(m,m.target),nt(e,n,[0,.85,.9],[.3,.2,.08]),nt(e,l,[0,.88,-.96],[.24,.12,.07]),h([-.32,1.12,-.08],[.32,1.12,-.08],.035,o),nt(e,r,[.245,.99,.025],[.025,.1,.24]),e.userData.exhaustFlames=p,e}class Pv{constructor(t){this.scene=t,this.people=new Tt,this.people.name="Campus students and security staff",this.vehicles=new Tt,this.vehicles.name="Campus parked vehicles",t.add(this.people,this.vehicles),this.animatedPeople=[],this.isDriving=!1,this.carSpeed=0,this.driveBlocked="",this.isRidingMotorcycle=!1,this.motorcycleSpeed=0,this.motorcycleBlocked="",this.createPeople(),this.createVehicles(),this.createPersonalFortuner(),this.createSecurityBooth()}createPeople(){const t=[{center:[-43,42],count:4,spread:3.1},{center:[4,12],count:4,spread:2.8},{center:[42,-39],count:5,spread:2.6},{center:[46,-58],count:3,spread:2.4}];let e=0;for(const s of t)for(let o=0;o<s.count;o++){const r=o*2.4,a=s.spread*(.25+o%3*.22),c=zl({x:s.center[0]+Math.cos(r)*a,z:s.center[1]+Math.sin(r)*a,rotation:r+Math.PI,index:e});this.people.add(c),this.animatedPeople.push(c),e++}const n=[[[-37,116],[-34,113],[-31,116],[-34,119]],[[-22,119],[-19,116],[-16,119],[-19,122]]];for(const[s,[o,r]]of[[-34,116],[-19,119]].entries()){const c=zl({x:o,z:r,rotation:s===0?.25:-.25,index:e,guard:!0});c.userData.patrol=n[s].map(([l,h])=>new P(l,0,h)),c.userData.patrolTarget=1,c.userData.patrolSpeed=1.6+s*.2,this.people.add(c),this.animatedPeople.push(c),e++}}createVehicles(){for(const[r,[a,c]]of[[73,-67],[77,-67],[81,-67],[85,-67]].entries())this.vehicles.add(Tv(a,c,r));for(let r=0;r<6;r++)this.vehicles.add(Rv(39+r*1.45,-54,r,-Math.PI/2));const t=new Tt;t.name="Marked motorcycle display bay by the main gate";const e=new z(bn,new U({color:"#666c6b",roughness:.88}));e.position.set(-25.5,.035,111.5),e.scale.set(3.5,.12,4.5),e.receiveShadow=!0,t.add(e);const n=new z(bn,new U({color:"#e4c86c",roughness:.7}));for(const r of[-27.15,-23.85]){const a=n.clone();a.position.set(r,.11,111.5),a.scale.set(.09,.025,4.1),t.add(a)}this.vehicles.add(t),this.bulletElectra=Cv(-25.5,111.5),this.bulletElectra.scale.setScalar(1.85),this.vehicles.add(this.bulletElectra);const s=new U({color:"#465253",metalness:.45,roughness:.55}),o=new z(bn,s);o.position.set(42.8,.7,-54),o.scale.set(.12,1.4,10.2),o.castShadow=!0,this.vehicles.add(o)}createSecurityBooth(){const t=new Tt;t.name="Small campus security guard booth";const e=-47,n=118,s=4.4,o=3.6,r=2.75,a=.16,c=new z(bn,new U({color:"#b8b2a4",roughness:.92}));c.position.set(e,.1,n),c.scale.set(s+.25,.2,o+.25),c.receiveShadow=!0,t.add(c),nt(t,ee.booth,[e,r/2+.2,n-o/2],[s,r,a]),nt(t,ee.booth,[e-s/2,r/2+.2,n],[a,r,o]),nt(t,ee.booth,[e+s/2,r/2+.2,n],[a,r,o]),nt(t,ee.booth,[e-s/2+.08,r/2+.2,n+o/2],[.32,r,.18]),nt(t,ee.booth,[e+s/2-.08,r/2+.2,n+o/2],[.32,r,.18]);const l=new z(bn,ee.glass);l.position.set(e,1.95,n+o/2),l.scale.set(s-.65,1.35,.06),t.add(l);const h=new z(bn,ee.glass);h.position.set(e+s/2,2,n-.25),h.scale.set(.06,1.15,1.65),t.add(h);const u=new U({color:"#526b68",roughness:.8});nt(t,u,[e,3.18,n],[s+.55,.3,o+.55]);const d=nt(t,ee.guards,[e,2.95,n+o/2+.1],[3.4,.42,.12]);Dv(d,"SECURITY"),nt(t,new U({color:"#526b68",roughness:.8}),[e-1.35,1.25,n+o/2],[.78,2.3,.12]),nt(t,ee.badge,[e-1.08,1.25,n+o/2+.08],[.07,.22,.06]),this.scene.add(t),this.securityBooth=t}createPersonalFortuner(){const t=new Tt;t.name="Personal car parking bay by the main gate";const e=new z(bn,new U({color:"#777a75",roughness:.95}));e.position.set(-32,.025,111.5),e.scale.set(7.6,.12,9),e.receiveShadow=!0,t.add(e);const n=new U({color:"#e8e1c8",roughness:.82});for(const s of[-35.15,-28.85]){const o=new z(bn,n);o.position.set(s,.095,111.5),o.scale.set(.12,.025,8.2),t.add(o)}this.scene.add(t),this.parkingBay=t,this.personalFortuner=Av(),this.personalFortuner.position.set(-32,.1,111.5),this.personalFortuner.rotation.y=Math.PI,this.personalFortuner.scale.setScalar(1.45),this.scene.add(this.personalFortuner)}update(t,e,n=null){const s=performance.now()*.001;for(const o of this.animatedPeople){const r=o.userData.patrol;if(!r){o.position.y=Math.sin(s*1.6+o.userData.phase)*.025,o.rotation.y+=Math.sin(s*.55+o.userData.phase)*t*.035;continue}const a=n||e,c=Math.hypot(o.position.x-a.x,o.position.z-a.z)<8,l=o.userData.limbs;if(c){const x=a.x-o.position.x,m=a.z-o.position.z;o.rotation.y=Re.damp(o.rotation.y,Math.atan2(x,m),4,t);const f=Math.sin(s*4.2+o.userData.phase);l.rightArm.rotation.x=-1.7+Math.max(0,f)*.55,l.rightArm.rotation.z=-.2,l.leftArm.rotation.x=-.15,l.leftLeg.rotation.x=0,l.rightLeg.rotation.x=0,o.position.y=0;continue}const h=r[o.userData.patrolTarget],u=h.x-o.position.x,d=h.z-o.position.z,p=Math.hypot(u,d);if(p<.2)o.userData.patrolTarget=(o.userData.patrolTarget+1)%r.length;else{const x=Math.min(p,o.userData.patrolSpeed*t);o.position.x+=u/p*x,o.position.z+=d/p*x,o.rotation.y=Math.atan2(u,d)}const g=s*7+o.userData.phase;l.leftLeg.rotation.x=Math.sin(g)*.5,l.rightLeg.rotation.x=-Math.sin(g)*.5,l.leftArm.rotation.x=-Math.sin(g)*.38,l.rightArm.rotation.x=Math.sin(g)*.38,l.rightArm.rotation.z=0,o.position.y=Math.abs(Math.sin(g))*.07}}interact(t){return!!this.animatedPeople.find(n=>n.userData.isSecurity&&Math.hypot(n.position.x-t.position.x,n.position.z-t.position.z)<3.3)}isNearFortuner(t){return Math.hypot(t.x-this.personalFortuner.position.x,t.z-this.personalFortuner.position.z)<5.2}getPersonalCarBounds(){const t=this.personalFortuner.rotation.y,e=2.6*this.personalFortuner.scale.z,n=1.72*this.personalFortuner.scale.x,s=Math.abs(Math.cos(t))*n+Math.abs(Math.sin(t))*e,o=Math.abs(Math.sin(t))*n+Math.abs(Math.cos(t))*e;return{minX:this.personalFortuner.position.x-s,maxX:this.personalFortuner.position.x+s,minZ:this.personalFortuner.position.z-o,maxZ:this.personalFortuner.position.z+o}}toggleDriving(t,e){if(this.isDriving){if(this.personalFortuner.position.y<-.15)return"below-ground";const n=new P(3.2,0,0).applyQuaternion(this.personalFortuner.quaternion).add(this.personalFortuner.position);return t.leaveVehicle(e,n),this.isDriving=!1,this.carSpeed=0,this.driveBlocked="","exited"}return this.isNearFortuner(t.position)?(t.enterVehicle(this.personalFortuner),this.isDriving=!0,this.carSpeed=0,this.driveBlocked="","entered"):"too-far"}isNearMotorcycle(t){return Math.hypot(t.x-this.bulletElectra.position.x,t.z-this.bulletElectra.position.z)<5.2}toggleMotorcycle(t,e){if(this.isRidingMotorcycle){const n=new P(1.15*this.bulletElectra.scale.x,0,0).applyQuaternion(this.bulletElectra.quaternion).add(this.bulletElectra.position);return t.leaveVehicle(e,n),this.isRidingMotorcycle=!1,this.motorcycleSpeed=0,this.motorcycleBlocked="","exited"}return this.isNearMotorcycle(t.position)?(t.enterVehicle(this.bulletElectra),this.isRidingMotorcycle=!0,this.motorcycleSpeed=0,this.motorcycleBlocked="","entered"):"too-far"}updateMotorcycle(t,e,n,s,o){if(!this.isRidingMotorcycle)return 0;const r=e.has("KeyW")||e.has("ArrowUp"),a=e.has("KeyS")||e.has("ArrowDown"),c=Number(e.has("KeyD")||e.has("ArrowRight"))-Number(e.has("KeyA")||e.has("ArrowLeft")),l=30;if(r!==a)this.motorcycleSpeed+=(r?1:-1)*15*t,this.motorcycleSpeed=Re.clamp(this.motorcycleSpeed,-8,l);else if(Math.abs(this.motorcycleSpeed)>0){const w=Math.min(Math.abs(this.motorcycleSpeed),6*t);this.motorcycleSpeed-=Math.sign(this.motorcycleSpeed)*w}const h=r&&this.motorcycleSpeed>=l*.95;for(const[w,y]of this.bulletElectra.userData.exhaustFlames.entries())if(y.visible=h,h){const A=.78+Math.sin(performance.now()*.04+w*2)*.22;y.scale.setScalar(A)}if(c){const w=Math.sign(this.motorcycleSpeed)||1;this.bulletElectra.rotation.y+=c*w*(.45+Math.min(Math.abs(this.motorcycleSpeed)/l,1)*.65)*t}const u=this.bulletElectra.rotation.y,d=this.bulletElectra.position.x+Math.sin(u)*this.motorcycleSpeed*t,p=this.bulletElectra.position.z+Math.cos(u)*this.motorcycleSpeed*t,g=1.8*this.bulletElectra.scale.z,x=.55*this.bulletElectra.scale.x,m=Math.abs(Math.cos(u))*x+Math.abs(Math.sin(u))*g,f=Math.abs(Math.sin(u))*x+Math.abs(Math.cos(u))*g,M=n.canMove(this.bulletElectra.position.x,this.bulletElectra.position.z,d,p,x),_=n.getDrivingSurface(d,p,this.bulletElectra.position.y,m,f),v=s.find(w=>d+m>w.minX&&d-m<w.maxX&&p+f>w.minZ&&p-f<w.maxZ);return this.motorcycleBlocked=M?_===null?"road boundary":v?`blocked by ${v.name||"building"}`:"":"world edge or campus wall",M&&_!==null&&!v?this.bulletElectra.position.set(d,_,p):this.motorcycleSpeed=0,o.position.copy(this.bulletElectra.position),this.motorcycleSpeed}updateDriving(t,e,n,s,o){if(!this.isDriving)return 0;const r=e.has("KeyW")||e.has("ArrowUp"),a=e.has("KeyS")||e.has("ArrowDown"),c=Number(e.has("KeyD")||e.has("ArrowRight"))-Number(e.has("KeyA")||e.has("ArrowLeft")),h=e.has("ShiftLeft")||e.has("ShiftRight")?48:34;if(r!==a)this.carSpeed+=(r?1:-1)*24*t,this.carSpeed=Re.clamp(this.carSpeed,-12,h);else if(Math.abs(this.carSpeed)>0){const E=Math.min(Math.abs(this.carSpeed),5*t);this.carSpeed-=Math.sign(this.carSpeed)*E}if(c){const E=Math.sign(this.carSpeed)||1;this.personalFortuner.rotation.y+=c*E*(Math.abs(this.carSpeed)>.15?.25+Math.min(Math.abs(this.carSpeed)/h,1)*.85:.45)*t}const u=this.personalFortuner.rotation.y,d=this.personalFortuner.position.x+Math.sin(u)*this.carSpeed*t,p=this.personalFortuner.position.z+Math.cos(u)*this.carSpeed*t,g=2.6,x=1.72,m=g*this.personalFortuner.scale.z,f=x*this.personalFortuner.scale.x,M=Math.abs(Math.cos(u))*f+Math.abs(Math.sin(u))*m,_=Math.abs(Math.sin(u))*f+Math.abs(Math.cos(u))*m,v=n.canMove(this.personalFortuner.position.x,this.personalFortuner.position.z,d,p,Math.min(f,m)),w=n.getDrivingSurface(d,p,this.personalFortuner.position.y,M,_),y=w!==null,S=(this.personalFortuner.position.y<-1.2||y&&w<-1.2?n.basementParking.obstacles:s).find(E=>d+M>E.minX&&d-M<E.maxX&&p+_>E.minZ&&p-_<E.maxZ);return this.driveBlocked=v?y?S?`blocked by ${S.name||"building"}`:"":"parking ramp or basement boundary":"world edge or campus wall",v&&y&&!S?this.personalFortuner.position.set(d,w,p):this.carSpeed=0,o.position.copy(this.personalFortuner.position),this.carSpeed}setPeopleVisible(t){this.people.visible=t}setVehiclesVisible(t){this.vehicles.visible=t}dispose(){this.scene.remove(this.people,this.vehicles,this.securityBooth)}}function Dv(i,t){const e=document.createElement("canvas");e.width=256,e.height=64;const n=e.getContext("2d");n.fillStyle="#29475a",n.fillRect(0,0,e.width,e.height),n.fillStyle="#f2eee3",n.font="bold 34px Segoe UI, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(t,e.width/2,e.height/2);const s=new qn(e);s.colorSpace=Ce;const o=new z(new rn(2.8,.7),new ds({map:s}));o.position.set(0,0,.055),i.add(o)}const un={skin:new U({color:"#c88c67",roughness:.9}),hair:new U({color:"#29252b",roughness:1}),shirt:new U({color:"#49a798",roughness:.82}),shirtAlt:new U({color:"#e5c76f",roughness:.85}),pants:new U({color:"#34445c",roughness:.92}),shoes:new U({color:"#e8e4d8",roughness:.82}),eyes:new U({color:"#20252a",roughness:.6})};function dn(i,t,e,n,s,o){const r=new z(t,e);return r.position.set(n,s,o),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}class Lv{constructor(t,e){this.position=e.clone(),this.velocityY=0,this.grounded=!0,this.worldScale=.88,this.radius=.5,this.height=2.86,this.speed=8.5,this.group=new Tt,this.group.name="Student player",this.group.position.copy(e),this.group.scale.setScalar(this.worldScale);const n=new Tt;n.position.y=.12,this.group.add(n),this.body=n,dn(n,new ht(1.05,.95,.62),un.shirt,0,1.75,0),dn(n,new ht(.82,.86,.82),un.skin,0,2.8,0),dn(n,new ht(.88,.26,.88),un.hair,0,3.34,.03);for(const s of[-.2,.2])dn(n,new ht(.1,.12,.07),un.eyes,s,2.86,.42);this.leftLeg=new Tt,this.rightLeg=new Tt,this.leftArm=new Tt,this.rightArm=new Tt,this.leftLeg.position.set(-.3,1.38,0),this.rightLeg.position.set(.3,1.38,0),this.leftArm.position.set(-.68,2.12,0),this.rightArm.position.set(.68,2.12,0),n.add(this.leftLeg,this.rightLeg,this.leftArm,this.rightArm),dn(this.leftLeg,new ht(.48,1.25,.5),un.pants,0,-.55,0),dn(this.rightLeg,new ht(.48,1.25,.5),un.pants,0,-.55,0),dn(this.leftLeg,new ht(.55,.3,.74),un.shoes,0,-1.23,.1),dn(this.rightLeg,new ht(.55,.3,.74),un.shoes,0,-1.23,.1),dn(this.leftArm,new ht(.42,1.25,.48),un.shirtAlt,0,-.52,0),dn(this.rightArm,new ht(.42,1.25,.48),un.shirtAlt,0,-.52,0),dn(this.leftArm,new ht(.4,.4,.4),un.skin,0,-1.26,0),dn(this.rightArm,new ht(.4,.4,.4),un.skin,0,-1.26,0),t.add(this.group)}jump(){return this.grounded?(this.velocityY=10.5,this.grounded=!1,!0):!1}enterVehicle(t){t.add(this.group);const e=t.name.includes("motorcycle");this.group.position.set(e?0:.43,e?.48:.3,e?-.43:-.1),this.group.rotation.y=0,this.group.scale.setScalar(.31),this.leftLeg.rotation.x=e?-.28:-Math.PI/2,this.rightLeg.rotation.x=e?-.28:-Math.PI/2,this.leftLeg.rotation.z=e?.42:0,this.rightLeg.rotation.z=e?-.42:0,this.leftArm.rotation.x=e?-1.35:-.25,this.rightArm.rotation.x=e?-1.35:-.25,this.leftArm.rotation.z=e?-.12:0,this.rightArm.rotation.z=e?.12:0,this.body.position.y=.08,this.velocityY=0,this.grounded=!0}leaveVehicle(t,e){this.group.removeFromParent(),t.add(this.group),this.group.scale.setScalar(this.worldScale),this.leftLeg.rotation.x=0,this.rightLeg.rotation.x=0,this.leftLeg.rotation.z=0,this.rightLeg.rotation.z=0,this.leftArm.rotation.x=0,this.rightArm.rotation.x=0,this.leftArm.rotation.z=0,this.rightArm.rotation.z=0,this.body.position.y=.12,this.position.set(e.x,e.y,e.z),this.group.position.copy(this.position),this.group.rotation.y=0}update(t,e,n,s,o){const r=e.lengthSq()>0;if(r){e.normalize();const h=this.speed*(n?1.55:1),u=this.position.x+e.x*h*t,d=this.position.z+e.z*h*t;s.canMove(this.position.x,this.position.z,u,this.position.z,this.radius)&&!this.collides(u,this.position.z,o,s)&&(this.position.x=u),s.canMove(this.position.x,this.position.z,this.position.x,d,this.radius)&&!this.collides(this.position.x,d,o,s)&&(this.position.z=d),this.group.rotation.y=Math.atan2(e.x,e.z)}const a=this.grounded;this.velocityY-=25*t,this.position.y+=this.velocityY*t,this.position.y<=0?(this.position.y=0,this.velocityY=0,this.grounded=!0):this.grounded=!1,this.group.position.copy(this.position);const c=r?n?10:7:0,l=Math.sin(performance.now()*.001*c)*(r&&this.grounded?.52:0);return this.leftLeg.rotation.x=l+(this.grounded?0:-.3),this.rightLeg.rotation.x=-l+(this.grounded?0:-.3),this.leftArm.rotation.x=-l*.75,this.rightArm.rotation.x=l*.75,this.body.position.y=.12+(r&&this.grounded?Math.abs(Math.sin(performance.now()*.01))*.08:0),{moving:r,landed:!a&&this.grounded}}collides(t,e,n,s){return n.some(o=>o.campusBuilding&&s.isBuildingEntrance(t,e)||o.obstacle&&this.position.y>=(o.height||0)+.15?!1:t+this.radius>o.minX&&t-this.radius<o.maxX&&e+this.radius>o.minZ&&e-this.radius<o.maxZ)}}class Iv{constructor(t,e,n,s){this.camera=t,this.renderer=e,this.player=n,this.callbacks=s,this.keys=new Set,this.yaw=0,this.pitch=.24,this.distance=11,this.firstPerson=!1,this.mapView=!1,this.dragging=!1,this.locked=!1,this.enabled=!1,this.vehicle=null,this.onKeyDown=o=>{this.enabled&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(o.code)&&o.preventDefault(),this.keys.add(o.code),o.code==="Space"&&!o.repeat&&!this.vehicle&&this.player.jump(),o.code==="KeyE"&&!o.repeat&&this.callbacks.interact(),o.code==="KeyV"&&!o.repeat&&(this.firstPerson=!this.firstPerson),o.code==="KeyM"&&!o.repeat&&this.toggleMap(),o.code==="Escape"&&(this.locked=!1,this.callbacks.pause()))},this.onKeyUp=o=>this.keys.delete(o.code),this.onMouseMove=o=>{!this.enabled||!this.locked&&!this.dragging||this.mapView||(this.yaw-=o.movementX*.0026,this.pitch=Re.clamp(this.pitch+o.movementY*.0018,-.18,.82))},this.onPointerDown=o=>{!this.enabled||o.target.closest("button")||(this.dragging=!0,this.renderer.domElement.requestPointerLock&&!this.locked&&this.renderer.domElement.requestPointerLock())},this.onPointerUp=()=>{this.dragging=!1},this.onLockChange=()=>{this.locked=document.pointerLockElement===this.renderer.domElement},this.onWheel=o=>{this.distance=Re.clamp(this.distance+o.deltaY*.012,4.2,24)},window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onPointerUp),document.addEventListener("pointerlockchange",this.onLockChange),e.domElement.addEventListener("mousedown",this.onPointerDown),e.domElement.addEventListener("wheel",this.onWheel,{passive:!0})}setEnabled(t){this.enabled=t,t||this.keys.clear()}toggleMap(){this.mapView=!this.mapView,this.callbacks.mapChanged(this.mapView)}toggleFirstPerson(){return this.firstPerson=!this.firstPerson,this.firstPerson}setVehicle(t){this.vehicle=t,t&&(this.firstPerson=!1)}setVirtualKey(t,e){e&&!this.enabled||(e?this.keys.add(t):this.keys.delete(t))}update(t){if(!this.enabled)return new P;const e=new P(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),n=new P(-e.z,0,e.x),s=new P;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&s.add(e),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&s.sub(e),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&s.add(n),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&s.sub(n);const o=this.vehicle?this.vehicle.position:this.player.position;if(this.mapView)this.camera.up.set(0,0,-1),this.camera.position.set(0,250,.01),this.camera.lookAt(0,0,0);else{this.camera.up.set(0,1,0);const r=this.vehicle?this.vehicle.rotation.y-Math.PI:this.yaw,a=this.firstPerson?.18:this.distance,c=this.firstPerson?2.72:a*Math.sin(this.pitch),l=this.firstPerson?.08:a*Math.cos(this.pitch);if(this.vehicle&&this.firstPerson){const h=this.vehicle.scale.y,u=new P(.43,1,.45).multiplyScalar(h).applyQuaternion(this.vehicle.quaternion);this.camera.position.set(o.x+u.x,o.y+u.y,o.z+u.z);const d=new P(Math.sin(this.vehicle.rotation.y),0,Math.cos(this.vehicle.rotation.y));this.camera.lookAt(o.x+d.x*12,o.y+1.2*h,o.z+d.z*12)}else{this.camera.position.set(o.x+Math.sin(r)*l,o.y+c+(this.firstPerson?0:1.2),o.z+Math.cos(r)*l);const h=o.y+(this.firstPerson?2.72:1.6);this.camera.lookAt(o.x-Math.sin(r)*5,h,o.z-Math.cos(r)*5)}}return s}}const kl="campus-chaos-progress-v1",Vl=()=>({coins:0,xp:0,completed:{},achievements:[],bestTimes:{}});class Uv{constructor(t=()=>{}){this.onChange=t;try{this.progress={...Vl(),...JSON.parse(localStorage.getItem(kl)||"{}")}}catch(e){console.warn("Saved progress could not be loaded; starting with a fresh save.",e),this.progress=Vl()}}save(){try{localStorage.setItem(kl,JSON.stringify(this.progress))}catch(t){console.error("Progress could not be saved to local storage.",t),this.onChange({type:"error",message:"Save failed: browser storage is unavailable."})}this.onChange({type:"progress",progress:this.progress})}collectCoin(t=1){this.progress.coins+=t,this.progress.xp+=5*t,this.progress.coins>=1&&this.unlockAchievement("First campus coin"),this.progress.coins>=10&&this.unlockAchievement("Campus regular"),this.save()}complete(t,e=null){if(this.progress.completed[t]=(this.progress.completed[t]||0)+1,this.progress.xp+=50,this.progress.coins+=10,e!==null){const n=this.progress.bestTimes[t];(n===void 0||e<n)&&(this.progress.bestTimes[t]=e)}this.progress.completed[t]===1&&this.unlockAchievement("First day on campus"),this.save()}unlockAchievement(t){this.progress.achievements.includes(t)||(this.progress.achievements.push(t),this.onChange({type:"achievement",name:t}))}}const wo={explorer:{name:"Campus Explorer",description:"Roam the grounds and discover the campus."},parkour:{name:"Parkour Challenge",description:"Clear the five marked jump gates in order."},race:{name:"Campus Race",description:"Run through all six checkpoints before the clock runs out."},treasure:{name:"Treasure Hunt",description:"Find eight hidden campus coins."},robotics:{name:"Robotics Challenge",description:"Activate the three lab beacons in the indicated order."},basketball:{name:"Basketball Challenge",description:"Reach the court and score three baskets with E."}},Hl=new U({color:"#91d6c6",emissive:"#3a9d88",emissiveIntensity:.7,roughness:.35}),Gl=new U({color:"#f1c65d",emissive:"#bc7e1b",emissiveIntensity:.5,metalness:.45,roughness:.3}),Hr=new U({color:"#75d9a1",emissive:"#3cbf76",emissiveIntensity:1});class Nv{constructor(t,e,n,s){this.scene=t,this.campus=e,this.missions=n,this.hud=s,this.active=null,this.objects=new Tt,this.objects.name="Mode objectives",t.add(this.objects),this.elapsed=0,this.progress=0,this.rings=[],this.collectibles=[],this.switches=[],this.ball=null,this.ballVelocity=new P,this.collisionBoxes=[...e.buildings.map(({name:o,bounds:r})=>({...r,name:o}))]}start(t){if(!wo[t])return!1;if(this.resetObjects(),this.active=t,this.elapsed=0,this.progress=0,this.timeLimit=null,this.rings=[],this.collectibles=[],this.switches=[],this.hud.setMode(wo[t].name),t==="parkour"){const e=[[-14,12],[-9,0],[1,13],[11,-1],[15,-25]];this.rings=e.map(([n,s])=>this.addRing(n,s,1.65)),this.createParkourObstacles(e)}else if(t==="race"){const e=[[-27,85],[-20,45],[-15,7],[20,-10],[45,-47],[60,-90]];this.rings=e.map(([n,s])=>this.addRing(n,s,2.3)),this.timeLimit=150}else if(t==="treasure"){const e=[[-91,28],[-35,50],[-24,42],[5,-8],[-40,10],[15,-25],[92,-83],[35,-85]];this.collectibles=e.map(([n,s])=>this.addCoin(n,s))}else t==="robotics"?this.switches=[[24,-68],[31,-68],[38,-68]].map(([e,n],s)=>this.addSwitch(e,n,s)):t==="basketball"?(this.createBasketballHoop(),this.timeLimit=90):t==="explorer"&&(this.collectibles=[[-30,50],[-24,42],[35,-85]].map(([e,n])=>this.addCoin(e,n,.72)));return this.hud.notify(`${wo[t].name} started`),this.updateObjective(),!0}addRing(t,e,n){const s=new z(new je(n,.18,8,24),Hl);return s.position.set(t,1.8,e),s.userData.baseY=s.position.y,this.objects.add(s),{x:t,z:e,mesh:s,hit:!1}}addCoin(t,e,n=1){const s=new z(new le(.58*n,.58*n,.18*n,12),Gl);return s.position.set(t,1.25,e),s.rotation.x=Math.PI/2,this.objects.add(s),{x:t,z:e,mesh:s,taken:!1}}addSwitch(t,e,n){const s=new z(new le(.8,.8,.35,8),new U({color:"#405966"}));s.position.set(t,.18,e);const o=new z(new ht(.8,1.8,.8),new U({color:"#d99c57",emissive:"#714214",emissiveIntensity:.2}));return o.position.set(t,1.1,e),this.objects.add(s,o),{x:t,z:e,index:n,active:!1,base:s,beacon:o}}createParkourObstacles(t){const e=new U({color:"#d39b62",roughness:.85});t.slice(1,-1).forEach(([n,s],o)=>{const r=new z(new ht(3,.75,2),e);r.position.set(n,.38,s),r.castShadow=!0,r.receiveShadow=!0,this.objects.add(r),this.collisionBoxes.push({minX:n-1.7,maxX:n+1.7,minZ:s-1.2,maxZ:s+1.2,obstacle:!0,height:.75})})}createBasketballHoop(){const t=new U({color:"#475563",roughness:.75}),e=new U({color:"#e18a4a",metalness:.35,roughness:.45}),n=new z(new ht(.35,3.3,.35),t);n.position.set(100,1.65,-98);const s=new z(new ht(3.2,2,.25),new U({color:"#eef0e9",roughness:.55}));s.position.set(100,3.15,-102);const o=new z(new je(.78,.09,8,20),e);o.position.set(100,2.55,-101),o.rotation.x=Math.PI/2,this.objects.add(n,s,o),this.hoopTarget=new P(100,2.55,-101),this.court=new z(new ht(22,.1,15),new U({color:"#b3784d",roughness:.93})),this.court.position.set(103,.1,-89),this.objects.add(this.court)}interact(t){if(this.active==="robotics"){const e=this.switches[this.progress];e&&Math.hypot(t.position.x-e.x,t.position.z-e.z)<3.2?(e.active=!0,e.beacon.material=Hr,this.progress++,this.hud.notify(`Beacon ${this.progress}/${this.switches.length} activated`),this.updateObjective(),this.progress===this.switches.length&&this.finish()):this.hud.notify("Move close to the next beacon and press E");return}if(this.active==="basketball")if(this.ball)this.hud.notify("Wait for the ball to land before shooting again");else{const e=new P(Math.sin(t.group.rotation.y),0,Math.cos(t.group.rotation.y)),n=new P(this.hoopTarget.x-t.position.x,0,this.hoopTarget.z-t.position.z),s=n.length(),o=n.clone().normalize();if(e.dot(o)<.72){this.hud.notify("Turn to face the hoop before shooting");return}this.ball=new z(new Ne(.48,12,10),new U({color:"#e78c43",roughness:.72})),this.ball.position.set(t.position.x,t.position.y+2.2,t.position.z),this.objects.add(this.ball);const r=Math.max(.7,s/10);this.ballVelocity.set(n.x/r,(this.hoopTarget.y-this.ball.position.y+8*r**2)/r,n.z/r),this.shotScored=!1,this.hud.notify("Shot taken!")}}update(t,e){if(this.active){this.elapsed+=t,this.rings.forEach((n,s)=>{n.mesh.position.y=n.mesh.userData.baseY+Math.sin(this.elapsed*2.2+s)*.17,s===this.progress&&!n.hit&&Math.hypot(e.position.x-n.x,e.position.z-n.z)<(this.active==="parkour"?2.4:4)&&(this.active!=="parkour"||e.position.y>.55)&&(n.hit=!0,n.mesh.material=Hr,this.progress++,this.hud.notify(this.active==="parkour"?`Jump gate ${this.progress}/${this.rings.length}`:`Checkpoint ${this.progress}/${this.rings.length}`),this.updateObjective(),this.progress===this.rings.length&&this.finish())});for(const n of this.collectibles)n.taken||(n.mesh.rotation.z+=t*1.5,n.mesh.position.y=1.2+Math.sin(this.elapsed*3+n.x)*.2,Math.hypot(e.position.x-n.x,e.position.z-n.z)<2.2&&(n.taken=!0,this.objects.remove(n.mesh),this.missions.collectCoin(),this.hud.notify("Campus coin collected · +5 XP"),(this.active==="treasure"||this.active==="explorer")&&this.collectibles.every(s=>s.taken)?this.finish():this.updateObjective()));if(this.active==="basketball"&&this.ball&&this.updateBall(t),this.timeLimit){const n=Math.max(0,this.timeLimit-this.elapsed);this.hud.setTimer(n),n===0&&(this.hud.notify("Time is up — try again!"),this.hud.setObjective("Time expired — pause to restart the challenge or return to the menu"),this.active=null,this.timeLimit=null,this.hud.setTimer(null))}}}updateBall(t){this.ballVelocity.y-=16*t,this.ball.position.addScaledVector(this.ballVelocity,t),this.ballVelocity.y<0&&this.ball.position.y<this.hoopTarget.y+.25&&this.ball.position.y>this.hoopTarget.y-.7&&Math.hypot(this.ball.position.x-this.hoopTarget.x,this.ball.position.z-this.hoopTarget.z)<.72&&!this.shotScored&&(this.shotScored=!0,this.progress++,this.hud.notify(`Basket! ${this.progress}/3`),this.updateObjective(),this.progress>=3&&this.finish()),(this.ball.position.y<.48||this.elapsed>this.timeLimit)&&(this.objects.remove(this.ball),this.ball=null)}updateObjective(){this.active==="parkour"&&this.hud.setObjective(`Jump while passing gate ${Math.min(this.progress+1,5)} / 5`),this.active==="race"&&this.hud.setObjective(`Reach checkpoint ${Math.min(this.progress+1,6)} / 6`),this.active==="treasure"&&this.hud.setObjective(`Find ${this.collectibles.filter(t=>!t.taken).length} remaining coins`),this.active==="robotics"&&this.hud.setObjective(`Activate beacon ${Math.min(this.progress+1,3)} / 3 · Press E`),this.active==="basketball"&&this.hud.setObjective(`Score ${Math.max(0,3-this.progress)} baskets · face hoop + E`),this.active==="explorer"&&this.hud.setObjective(`Explore the campus and find ${this.collectibles.filter(t=>!t.taken).length} welcome coins`)}finish(){if(!this.active)return;const t=this.active,e=this.elapsed;this.missions.complete(t,e),this.hud.notify(`${wo[t].name} complete! +50 XP · +10 coins`),this.hud.setObjective("Challenge complete — choose another mode from the menu"),this.hud.setTimer(null),this.timeLimit=null,this.active=null}resetObjects(){for(this.collisionBoxes=this.collisionBoxes.filter(t=>!t.obstacle);this.objects.children.length;){const t=this.objects.children[0];this.objects.remove(t),t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material&&t.material!==Hl&&t.material!==Gl&&t.material!==Hr&&t.material.dispose()}}stop(){this.resetObjects(),this.active=null,this.timeLimit=null,this.hud.setTimer(null),this.hud.setMode("Campus Explorer")}}class Fv{constructor(){this.context=null,this.gain=null,this.source=null,this.motorcycleOscillator=null,this.motorcyclePulse=null,this.motorcycleGain=null,this.motorcycleLimiter=null,this.motorcyclePulseDepth=null,this.volume=.08}async start(){const t=window.AudioContext||window.webkitAudioContext;if(t){if(!this.context){this.context=new t,this.gain=this.context.createGain(),this.gain.gain.value=this.volume;const e=this.context.createBiquadFilter();e.type="lowpass",e.frequency.value=480;const n=this.context.createBuffer(1,this.context.sampleRate*2,this.context.sampleRate),s=n.getChannelData(0);for(let o=0;o<s.length;o++)s[o]=(Math.random()*2-1)*.18;this.source=this.context.createBufferSource(),this.source.buffer=n,this.source.loop=!0,this.source.connect(e).connect(this.gain).connect(this.context.destination),this.source.start()}this.context.state==="suspended"&&await this.context.resume()}}setVolume(t){this.volume=t,this.gain&&this.context&&this.gain.gain.setTargetAtTime(t,this.context.currentTime,.08)}async playMotorcycleSound(){if(await this.start(),!this.context)return;const t=this.context.createOscillator();t.type="sawtooth",t.frequency.value=72;const e=this.context.createBiquadFilter();e.type="lowpass",e.frequency.value=320;const n=this.context.createGain(),s=this.context.createDynamicsCompressor();s.threshold.value=-6,s.knee.value=3,s.ratio.value=12,s.attack.value=.002,s.release.value=.12;const o=this.context.currentTime;n.gain.setValueAtTime(0,o);for(let r=0;r<10;r++){const a=o+r*.13;n.gain.setValueAtTime(0,a),n.gain.linearRampToValueAtTime(.95,a+.012),n.gain.exponentialRampToValueAtTime(.025,a+.105)}n.gain.setValueAtTime(0,o+1.3),t.connect(e).connect(n).connect(s).connect(this.context.destination),t.start(o),t.stop(o+1.32),t.onended=()=>{t.disconnect(),e.disconnect(),n.disconnect(),s.disconnect()}}startMotorcycle(){if(!this.context||!this.gain||this.motorcycleOscillator)return;const t=this.context.createOscillator();t.type="sawtooth",t.frequency.value=58;const e=this.context.createBiquadFilter();e.type="lowpass",e.frequency.value=210;const n=this.context.createGain();n.gain.value=.9;const s=this.context.createDynamicsCompressor();s.threshold.value=-8,s.knee.value=4,s.ratio.value=12,s.attack.value=.003,s.release.value=.18;const o=this.context.createOscillator();o.type="sine",o.frequency.value=4.5;const r=this.context.createGain();r.gain.value=.18,t.connect(e).connect(n).connect(s).connect(this.context.destination),o.connect(r).connect(n.gain),t.start(),o.start(),this.motorcycleOscillator=t,this.motorcyclePulse=o,this.motorcycleGain=n,this.motorcycleLimiter=s,this.motorcyclePulseDepth=r}setMotorcycleSpeed(t){if(!this.motorcycleOscillator||!this.motorcyclePulse)return;const e=Math.abs(t);this.motorcycleOscillator.frequency.value=58+Math.min(e*1.4,38),this.motorcyclePulse.frequency.value=4.5+Math.min(e*.08,2.5)}stopMotorcycle(){if(!this.context||!this.motorcycleOscillator||!this.motorcyclePulse||!this.motorcycleGain)return;const t=this.motorcycleOscillator,e=this.motorcyclePulse,n=this.motorcycleGain,s=this.motorcycleLimiter,o=this.motorcyclePulseDepth;this.motorcycleOscillator=null,this.motorcyclePulse=null,this.motorcycleGain=null,this.motorcycleLimiter=null,this.motorcyclePulseDepth=null,e.disconnect(),o?.disconnect(),n.gain.cancelScheduledValues(this.context.currentTime),n.gain.setTargetAtTime(0,this.context.currentTime,.04),window.setTimeout(()=>{t.stop(),t.disconnect(),n.disconnect(),s.disconnect()},220)}}class Ov{constructor(t,e,n){this.root=t,this.campus=e,this.mansion=n,this.root.innerHTML="",this.element=document.createElement("section"),this.element.className="screen hud",this.element.hidden=!0,this.root.append(this.element),this.toastTimer=null,this.lastPlayer=null,this.mapVisible=!0,this.peopleVisible=!0,this.vehiclesVisible=!0,this.campusPanelVisible=!1,this.vehicleStateKey="",this.motorcycleStateKey="",this.helicopterStateKey="",this.lastVehicleState={nearby:!1,driving:!1,speed:0,blocked:""},this.lastMotorcycleState={nearby:!1,riding:!1,speed:0,blocked:""}}show(t){this.element.hidden=!t}render(t={coins:0,xp:0,completed:{}}){this.element.innerHTML=`
      <div class="hud-group">
        <div class="hud-card"><div class="hud-label">Campus Chaos · <span class="mode-tag">Campus Explorer</span></div><div class="hud-value" id="objective">Explore the campus and find three welcome coins</div><div class="hud-value" id="timer" hidden></div></div>
        <div class="hud-card"><div class="hud-label">Progress</div><div class="hud-value" id="stats">🪙 ${t.coins} &nbsp; ✦ ${t.xp} XP</div><div class="hud-label" id="achievements">Achievements: ${t.achievements?.length||0}</div></div>
      </div>
      <div class="hud-group">
        <div class="hud-card" id="map-card"><div class="hud-label">World map · M toggle</div><canvas class="minimap" width="340" height="260" aria-label="World map showing your position, vehicles, and mansion"></canvas><div class="map-legend"><span>● You</span><span>■ Supercar</span><span>▲ Helicopter</span><span>◆ Mansion</span></div></div>
        <div class="hud-actions">
          <button class="small-button" data-action="map">Map · M</button>
          <button class="small-button" data-action="view">View · V</button>
          <button class="small-button" data-action="people" aria-pressed="true">People · On</button>
          <button class="small-button" data-action="vehicles" aria-pressed="true">Vehicles · On</button>
          <button class="small-button" data-action="motorcycle-sound">🏍 Pat-pat sound · Full volume</button>
          <button class="small-button" data-action="vehicle" id="vehicle-button" hidden>Enter supercar · E</button>
          <button class="small-button" data-action="motorcycle" id="motorcycle-button" hidden>Ride motorcycle · E</button>
          <button class="small-button" data-action="helicopter" id="helicopter-button" hidden>Enter helicopter · E</button>
          <button class="small-button" data-action="campus">Campus info</button>
          <button class="small-button" data-action="theme">Day / night</button>
          <button class="small-button" data-action="rain">Weather</button>
          <button class="small-button" data-action="pause">Pause · Esc</button>
        </div>
      </div>
      <div class="hud-card mission-card"><div class="hud-label">Current challenge</div><div class="hud-value" id="challenge">Campus Explorer</div><div class="hud-label" style="margin-top:5px">Progress saves on this device</div></div>
      <div class="hud-card vehicle-status" id="vehicle-status" aria-live="polite">Your pearl-and-teal supercar is parked beside the main gate.</div>
      <section class="hud-card campus-info-panel" id="campus-info" aria-label="Campus information" hidden>
        <button class="small-button campus-info-close" data-action="campus" aria-label="Close campus information">Close</button>
        <div class="hud-label">Campus life</div>
        <div class="hud-value" id="people-count">16 students · 2 security staff</div>
        <div class="hud-value" id="vehicle-count">4 campus cars · 6 bicycles · Bullet Electra + supercar</div>
        <p>Security staff wear visible ID badges. Press E near a guard for a campus safety reminder.</p>
        <p class="campus-disclaimer">Buildings, vehicle bays, and internal site details are stylized approximations, not a surveyed campus plan.</p>
      </section>
      <div class="controls-hint">WASD move · Space jump · Shift sprint<br>Supercar: W/S drive · A/D steer · Shift boost · E exit<br>Motorcycle: W/S ride · A/D steer · E get off<br>Helicopter: W/S fly · A/D turn · Space/R up · Ctrl/F down · E exit on landing<br>Click + mouse look · Esc pause · V view · M overhead</div>
      <div class="touch-controls"><button data-touch="left">◀</button><button data-touch="jump">↑</button><button data-touch="right">▶</button></div>
      <div class="toast" role="status" aria-live="polite"></div>`}bindActions(t){this.element.addEventListener("click",a=>{const l=a.target.closest("[data-action]")?.dataset.action;l&&t[l]?.();const h=a.target.closest("[data-touch]")?.dataset.touch;h&&t.touch?.(h)});const e={left:"KeyA",right:"KeyD",jump:"Space"},n=new Map,s=a=>{const c=a.target.closest("[data-touch]")?.dataset.touch;if(c&&e[c]){a.preventDefault();const l=e[c];n.set(a.pointerId,l),t.virtualKey?.(l,!0)}},o=a=>{const c=n.get(a.pointerId);c&&(t.virtualKey?.(c,!1),n.delete(a.pointerId))},r=()=>{for(const a of n.values())t.virtualKey?.(a,!1);n.clear()};this.element.addEventListener("pointerdown",s),window.addEventListener("pointerup",o),window.addEventListener("pointercancel",o),window.addEventListener("blur",r)}setMode(t){const e=this.element.querySelector(".mode-tag"),n=this.element.querySelector("#challenge");e&&(e.textContent=t),n&&(n.textContent=t)}setObjective(t){const e=this.element.querySelector("#objective");e&&(e.textContent=t)}setTimer(t){const e=this.element.querySelector("#timer");if(e){if(t===null){e.hidden=!0;return}e.hidden=!1,e.textContent=`Time ${Math.floor(t/60)}:${String(Math.floor(t%60)).padStart(2,"0")}`}}updateProgress(t){const e=this.element.querySelector("#stats"),n=this.element.querySelector("#achievements");e&&(e.textContent=`🪙 ${t.coins} · ✦ ${t.xp} XP · ${Object.values(t.completed).reduce((s,o)=>s+o,0)} challenges`),n&&(n.textContent=t.achievements?.length?`Achievements: ${t.achievements.join(" · ")}`:"Achievements: none yet")}notify(t){const e=this.element.querySelector(".toast");e&&(e.textContent=t,e.classList.add("visible"),window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>e.classList.remove("visible"),2400))}setMapVisible(t){this.mapVisible=t;const e=this.element.querySelector("#map-card");e&&(e.hidden=!t)}setCampusLife({peopleVisible:t,vehiclesVisible:e}){this.peopleVisible=t,this.vehiclesVisible=e;const n=this.element.querySelector('[data-action="people"]'),s=this.element.querySelector('[data-action="vehicles"]');n&&(n.textContent=`People · ${t?"On":"Off"}`,n.setAttribute("aria-pressed",String(t))),s&&(s.textContent=`Vehicles · ${e?"On":"Off"}`,s.setAttribute("aria-pressed",String(e)))}toggleCampusInfo(){this.campusPanelVisible=!this.campusPanelVisible;const t=this.element.querySelector("#campus-info");t&&(t.hidden=!this.campusPanelVisible)}setVehicleState({nearby:t,driving:e,speed:n=0,blocked:s=""}){this.lastVehicleState={nearby:t,driving:e,speed:n,blocked:s};const o=`${t}:${e}:${Math.round(Math.abs(n)*3.6)}:${s}`;if(o===this.vehicleStateKey)return;this.vehicleStateKey=o;const r=this.element.querySelector("#vehicle-button"),a=this.element.querySelector("#vehicle-status");if(r&&(r.hidden=!t&&!e,r.textContent=e?"Exit supercar · E":"Enter supercar · E",r.setAttribute("aria-label",e?"Exit the supercar":"Enter the supercar")),a)if(e){const c=Math.round(Math.abs(n)*3.6);a.textContent=s?`Supercar stopped · ${s} · steer away with A/D`:`Driving your supercar · ${c} km/h · WASD steer · E exit`}else t?a.textContent="Your supercar is here · Press E or Enter supercar to drive":a.textContent="Your pearl-and-teal supercar is parked beside the main gate."}setHelicopterState({nearby:t,piloting:e,speed:n=0,altitude:s=0}){const o=`${t}:${e}`;if(o===this.helicopterStateKey&&!e)return;this.helicopterStateKey=o;const r=this.element.querySelector("#helicopter-button"),a=this.element.querySelector("#vehicle-status");r&&(r.hidden=!t&&!e,r.textContent=e?"Exit helicopter · E":"Enter helicopter · E",r.setAttribute("aria-label",e?"Exit the helicopter":"Enter the helicopter")),a&&(e?a.textContent=`Flying helicopter · ${Math.round(Math.abs(n)*3.6)} km/h · altitude ${Math.round(s)} m · land before exiting`:t?a.textContent="Mansion helicopter on the helipad · Press E to fly":this.lastMotorcycleState.riding?a.textContent=`Riding the Bullet motorcycle · ${Math.round(Math.abs(this.lastMotorcycleState.speed)*3.6)} km/h · W/S ride · A/D steer · E get off`:this.lastMotorcycleState.nearby?a.textContent="Bullet motorcycle at the main gate · Press E to ride":this.lastVehicleState.driving?a.textContent=`Driving your supercar · ${Math.round(Math.abs(this.lastVehicleState.speed)*3.6)} km/h · WASD steer · E exit`:this.lastVehicleState.nearby?a.textContent="Your supercar is here · Press E or Enter supercar to drive":a.textContent="Your pearl-and-teal supercar is parked beside the main gate.")}setMotorcycleState({nearby:t,riding:e,speed:n=0,blocked:s=""}){this.lastMotorcycleState={nearby:t,riding:e,speed:n,blocked:s};const o=`${t}:${e}:${Math.round(Math.abs(n)*3.6)}:${s}`;if(o===this.motorcycleStateKey)return;this.motorcycleStateKey=o;const r=this.element.querySelector("#motorcycle-button"),a=this.element.querySelector("#vehicle-status");r&&(r.hidden=!t&&!e,r.textContent=e?"Get off motorcycle · E":"Ride motorcycle · E",r.setAttribute("aria-label",e?"Get off the motorcycle":"Ride the motorcycle")),a&&(e?a.textContent=s?`Motorcycle stopped · ${s} · steer away with A/D`:`Riding the Bullet motorcycle · ${Math.round(Math.abs(n)*3.6)} km/h · W/S ride · A/D steer · E get off`:t&&(a.textContent="Bullet motorcycle at the main gate · Press E to ride"))}updateMap(t,e,n){this.lastPlayer=t;const s=this.element.querySelector(".minimap");if(!s)return;const o=s.getContext("2d"),r=s.width,a=s.height,c=this.campus.polygon,l=-280,h=280,u=-340,d=340,p=18,g=Math.min((r-p*2)/(h-l),(a-p*2)/(d-u)),x=(h-l)*g,m=(d-u)*g,f=(r-x)/2,M=(a-m)/2,_=(k,G)=>[f+(k-l)*g,M+(d-G)*g];o.clearRect(0,0,r,a),o.fillStyle="#283b35",o.fillRect(0,0,r,a),o.beginPath(),c.forEach(([k,G],K)=>{const[W,tt]=_(k,G);K===0?o.moveTo(W,tt):o.lineTo(W,tt)}),o.closePath(),o.fillStyle="#62755c",o.fill(),o.strokeStyle="#d7c9a9",o.lineWidth=3,o.stroke();const v=c.reduce((k,[G,K])=>[k[0]+G/c.length,k[1]+K/c.length],[0,0]);o.beginPath(),c.forEach(([k,G],K)=>{const W=k-v[0],tt=G-v[1],ct=Math.hypot(W,tt)||1,[St,zt]=_(k+W/ct*25,G+tt/ct*25);K===0?o.moveTo(St,zt):o.lineTo(St,zt)}),o.closePath(),o.strokeStyle="#9b9b84",o.lineWidth=5,o.stroke(),o.strokeStyle="#565b58",o.lineWidth=7;for(const k of zs)o.lineWidth=Math.max(3,k.width*g*.7),o.beginPath(),k.points.forEach(([G,K],W)=>{const[tt,ct]=_(G,K);W===0?o.moveTo(tt,ct):o.lineTo(tt,ct)}),o.stroke();const[w,y]=_(-27,-90);o.fillStyle="#4d9eaa",o.beginPath(),o.ellipse(w,y,Math.max(4,8.2*g),Math.max(3,6.2*g),0,0,Math.PI*2),o.fill(),o.fillStyle="#bfae8e";for(const k of this.campus.buildings){const G=k.bounds,[K,W]=_((G.minX+G.maxX)/2,(G.minZ+G.maxZ)/2);o.fillRect(K-7,W-5,14,10)}const[A,R]=_(this.mansion.center.x,this.mansion.center.z);o.fillStyle="#f0bd68",o.beginPath(),o.moveTo(A,R-8),o.lineTo(A+8,R),o.lineTo(A,R+8),o.lineTo(A-8,R),o.closePath(),o.fill(),o.fillStyle="#fff4da",o.font="bold 11px DM Sans",o.fillText("Mansion",A+10,R+4);const[S,E]=_(e.x,e.z);o.fillStyle="#f2d85f",o.fillRect(S-6,E-6,12,12),o.fillStyle="#27251a",o.font="bold 9px DM Sans",o.fillText("C",S-3,E+3);const[D,I]=_(n.x,n.z);o.fillStyle="#7ce0d4",o.beginPath(),o.moveTo(D,I-7),o.lineTo(D+6,I+5),o.lineTo(D-6,I+5),o.closePath(),o.fill();const[F,V]=_(t.x,t.z);o.fillStyle="#f2716b",o.beginPath(),o.arc(F,V,7,0,Math.PI*2),o.fill(),o.strokeStyle="#fff",o.lineWidth=2,o.stroke(),o.fillStyle="#eee",o.font="bold 12px DM Sans",o.fillText("N",r-24,20)}showPause({onContinue:t,onRestart:e,onMenu:n,onTheme:s,onVolume:o}){this.closePause();const r=document.createElement("div");r.className="screen pause-screen",r.innerHTML='<div class="pause-card"><div class="eyebrow">Campus break</div><h2>Paused</h2><p>Take a breath between classes.</p><div class="settings-row"><label for="volume">Ambient volume</label><input id="volume" type="range" min="0" max="1" step="0.05" value="0.12"></div><button class="primary-button" data-pause="continue">Continue</button><p><button class="small-button" data-pause="restart">Restart challenge</button> <button class="small-button" data-pause="theme">Toggle day/night</button></p><button class="small-button" data-pause="menu">Return to menu</button></div>',r.addEventListener("click",a=>{const c=a.target.closest("[data-pause]")?.dataset.pause;c==="continue"&&t(),c==="restart"&&e(),c==="theme"&&s(),c==="menu"&&n()}),r.querySelector("#volume").addEventListener("input",a=>o(Number(a.target.value))),this.root.append(r),this.pausePanel=r}closePause(){this.pausePanel?.remove(),this.pausePanel=null}}const Bv=[["explorer","Campus Explorer","Free roam · find welcome coins"],["parkour","Parkour Challenge","Jump through five checkpoints"],["race","Campus Race","Beat the 2:30 checkpoint timer"],["treasure","Treasure Hunt","Collect eight hidden campus coins"],["robotics","Robotics Challenge","Activate three lab beacons in order"],["basketball","Basketball Challenge","Make three shots before time runs out"]];class zv{constructor(t,e){this.root=t,this.onStart=e,this.element=null,this.progress={coins:0,xp:0,completed:{}}}setProgress(t){this.progress=t;const e=this.element?.querySelector("#menu-progress");e&&(e.textContent=`${t.coins} coins · ${t.xp} XP · ${Object.keys(t.completed).length} modes completed · ${t.achievements?.length||0} achievements`)}open(){this.close();const t=document.createElement("div");t.className="screen menu-screen",t.innerHTML=`
      <div class="menu-card">
        <div class="menu-copy">
          <div class="eyebrow">GGSIPU · East Delhi campus · stylized exploration</div>
          <h1>Campus<br><span>Chaos 3D</span></h1>
          <p class="lead">Walk the roads, find your way around, and take on campus-sized challenges in a block-built student world.</p>
          <div class="campus-note"><strong>Map accuracy note:</strong> The parcel is based on OpenStreetMap. Google Maps aerial references informed a western circular-roof landmark and loop road; these are approximate visual matches, not surveyed positions. The facade photo is labeled USDI, so it does not confirm the USAR building identity. Other internal positions and the gate remain approximate.</div>
          <p id="menu-progress" class="eyebrow" style="margin-top:24px"></p>
        </div>
        <div class="mode-panel"><h2>Choose your day</h2>${Bv.map(([e,n,s])=>`<button class="mode-button" data-mode="${e}"><strong>${n}</strong><small>${s}</small></button>`).join("")}<small style="color:#91a2ae;line-height:1.5;margin-top:8px">All six modes are playable. Click the world to capture the mouse; press Esc to pause or release it.</small></div>
      </div>`,t.addEventListener("click",e=>{const n=e.target.closest("[data-mode]")?.dataset.mode;n&&(this.close(),this.onStart(n))}),this.root.append(t),this.element=t,this.setProgress(this.progress)}close(){this.element?.remove(),this.element=null}}const kv=document.querySelector("#game"),Hh=document.querySelector("#ui"),be=new Cd;be.background=new ne("#a9c8d0");be.fog=new Ka("#a9c8d0",180,390);const Go=new Ke(62,window.innerWidth/window.innerHeight,.1,900),an=new o_({antialias:!0,powerPreference:"high-performance"});an.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));an.setSize(window.innerWidth,window.innerHeight);an.shadowMap.enabled=!0;an.shadowMap.type=ql;an.outputColorSpace=Ce;an.toneMapping=Yl;an.toneMappingExposure=1.05;kv.append(an.domElement);be.add(new pf("#d7edf0","#65614c",2.1));const Sn=new Mf("#fff0d6",3.2);Sn.position.set(-80,120,45);Sn.castShadow=!0;Sn.shadow.mapSize.set(2048,2048);Sn.shadow.camera.left=-180;Sn.shadow.camera.right=180;Sn.shadow.camera.top=180;Sn.shadow.camera.bottom=-180;Sn.shadow.camera.near=1;Sn.shadow.camera.far=380;be.add(Sn);const Ie=D_(be),Gr=Ie.buildings.flatMap(i=>i.collisionBoxes.map(t=>({...t,campusBuilding:!0}))),Vv=q_(be,Ie.polygon),$e=Mv(be,Ie.polygon),Wr=iv(be,Ie.polygon,[{x:($e.bounds.minX+$e.bounds.maxX)/2,z:($e.bounds.minZ+$e.bounds.maxZ)/2,halfWidth:($e.bounds.maxX-$e.bounds.minX)/2+12,halfDepth:($e.bounds.maxZ-$e.bounds.minZ)/2+12}]);ov(be,Ie.polygon,$e.bounds);const Bt=new Pv(be),Ue=new bv(be,$e),re=new Lv(be,Ie.spawn),hs=new Fv,Qt=new Ov(Hh,Ie,$e);Qt.render();const lc=new Uv(i=>{i.type==="progress"?(Qt.updateProgress(i.progress),Ws?.setProgress(i.progress)):i.type==="achievement"?Qt.notify(`Achievement unlocked: ${i.name}`):i.type==="error"&&Qt.notify(i.message)});Qt.updateProgress(lc.progress);const Ri=new Nv(be,Ie,lc,Qt);let Ws,ye,Gh="explorer",ni=!1,Eo=!1,sn=null;const Hv={explorer:Ie.spawn,parkour:new P(-14,0,18),race:new P(-27,0,94),treasure:new P(-40,0,53),robotics:new P(31,0,-68),basketball:new P(100,0,-90)};function Gv(i){re.position.copy(i),re.velocityY=0,re.grounded=!0,re.group.position.copy(i),re.group.rotation.y=Math.PI}function Wh(){ye.enabled&&(ye.setEnabled(!1),Qt.showPause({onContinue:()=>{Qt.closePause(),ye.setEnabled(!0)},onRestart:()=>qh(Gh),onMenu:()=>Wv(),onTheme:()=>Zh(),onVolume:i=>hs.setVolume(i)}))}function Ko(){if(Bt.isRidingMotorcycle)return;const i=Bt.toggleDriving(re,be);if(i==="below-ground"){Qt.notify("Drive back up the parking ramp before exiting the supercar.");return}if(i==="too-far"){Qt.notify("Walk up beside your supercar at the main gate first.");return}const t=i==="entered";ye.setVehicle(t?Bt.personalFortuner:null),Qt.setVehicleState({nearby:Bt.isNearFortuner(re.position),driving:t,speed:Bt.carSpeed,blocked:Bt.driveBlocked}),Qt.notify(t?"You are in your supercar. WASD to drive; E to exit.":"You stepped out of your supercar.")}function Jo(){if(Bt.isDriving||Ue.isPiloting)return;const i=Bt.toggleMotorcycle(re,be);if(i==="too-far"){Qt.notify("Walk up beside the Bullet motorcycle at the main gate first.");return}const t=i==="entered";ye.setVehicle(t?Bt.bulletElectra:null),t?hs.startMotorcycle():hs.stopMotorcycle(),Qt.notify(t?"You are on the Bullet motorcycle. W/S accelerate or reverse; A/D steer; E to get off.":"You stepped off the motorcycle.")}function Xh(){if(!(Bt.isDriving||Bt.isRidingMotorcycle)){if(Ue.isPiloting){if(Ue.exit(re)==="must-land"){Qt.notify("Land the helicopter and stop before exiting. Use Ctrl or F to descend.");return}ye.setVehicle(null),Qt.notify("You landed and stepped out of the helicopter.");return}Ue.enter(re)&&(ye.setVehicle(Ue.helicopter),Qt.notify("Helicopter ready. W/S fly, A/D turn, Space/R rise, Ctrl/F descend; land to exit."))}}function Wv(){Bt.isDriving&&Ko(),Bt.isRidingMotorcycle&&Jo(),Ue.isPiloting&&(Ue.forceLand(re),ye.setVehicle(null)),ye.setEnabled(!1),Ri.stop(),Qt.closePause(),Qt.show(!1),Ws.open()}async function qh(i){Bt.isDriving&&Ko(),Bt.isRidingMotorcycle&&Jo(),Ue.isPiloting&&(Ue.forceLand(re),ye.setVehicle(null)),Gh=i,Gv(Hv[i]||Ie.spawn),i==="basketball"&&(re.group.rotation.y=Math.PI),Ri.start(i),Qt.show(!0),Qt.closePause(),ye.setEnabled(!0),Qt.setMapVisible(!0),await hs.start()}function Zh(){ni=!ni;const i=ni?"#111b2c":"#a9c8d0";be.background.set(i),be.fog.color.set(i),be.fog.near=ni?100:180,be.fog.far=ni?280:390,Sn.intensity=ni?.55:3.2,be.children.find(t=>t.isHemisphereLight).intensity=ni?.82:2.1,Qt.notify(ni?"Night campus":"Day campus")}function Xv(){if(Eo=!Eo,Eo){const i=new ht(.035,1.1,.035),t=new ds({color:"#b8d5e0",transparent:!0,opacity:.55});sn=new In(i,t,340),sn.userData.drops=Array.from({length:340},()=>({x:(Math.random()-.5)*70,y:Math.random()*32,z:(Math.random()-.5)*70})),sn.castShadow=!1,be.add(sn)}else sn&&(be.remove(sn),sn.geometry.dispose(),sn.material.dispose(),sn=null);Qt.notify(Eo?"Rain started":"Rain cleared")}ye=new Iv(Go,an,re,{interact:()=>{Ue.isPiloting||Ue.isNear(re.position)?Xh():Bt.isRidingMotorcycle||Bt.isNearMotorcycle(re.position)?Jo():Bt.isDriving||Bt.isNearFortuner(re.position)?Ko():Bt.interact(re)?Qt.notify("Campus safety: keep to marked paths and follow staff directions."):Ri.interact(re)},pause:Wh,mapChanged:i=>Qt.notify(i?"Overhead campus map view":"Third-person map view")});Qt.bindActions({map:()=>ye.toggleMap(),view:()=>{ye.toggleFirstPerson(),Qt.notify(ye.firstPerson?"First-person view":"Third-person view")},people:()=>{Bt.setPeopleVisible(!Bt.people.visible),Qt.setCampusLife({peopleVisible:Bt.people.visible,vehiclesVisible:Bt.vehicles.visible}),Qt.notify(`Campus people ${Bt.people.visible?"shown":"hidden"}`)},vehicles:()=>{Bt.setVehiclesVisible(!Bt.vehicles.visible),Qt.setCampusLife({peopleVisible:Bt.people.visible,vehiclesVisible:Bt.vehicles.visible}),Qt.notify(`Campus vehicles ${Bt.vehicles.visible?"shown":"hidden"}`)},vehicle:Ko,motorcycle:Jo,"motorcycle-sound":()=>hs.playMotorcycleSound(),helicopter:Xh,campus:()=>Qt.toggleCampusInfo(),theme:Zh,rain:Xv,pause:Wh,virtualKey:(i,t)=>ye.setVirtualKey(i,t),touch:i=>{i==="jump"&&re.jump()}});Ws=new zv(Hh,qh);Ws.setProgress(lc.progress);Ws.open();const Wl=new Sf;function Yh(){requestAnimationFrame(Yh);const i=Math.min(Wl.getDelta(),.04),t=ye.update(i);Ie.updateDoors(i,re.position,Bt.personalFortuner.position);const e=Bt.updateDriving(i,ye.keys,Ie,[...Gr,...Ri.collisionBoxes,...Wr.collisionBoxes,...$e.collisionBoxes,Ie.lakeBounds],re),n=Bt.updateMotorcycle(i,ye.keys,Ie,[...Gr,...Ri.collisionBoxes,...Wr.collisionBoxes,...$e.collisionBoxes,Ie.lakeBounds,Bt.getPersonalCarBounds()],re);hs.setMotorcycleSpeed(n);const s=Ue.update(i,ye.keys,re);Ie.lake.update(Wl.elapsedTime);const o=Bt.isDriving||Bt.isRidingMotorcycle||Ue.isPiloting?{landed:!1}:re.update(i,t,ye.keys.has("ShiftLeft")||ye.keys.has("ShiftRight"),Ie,[...Gr,...Ri.collisionBoxes,...Wr.collisionBoxes,...$e.collisionBoxes,Ie.lakeBounds,Bt.getPersonalCarBounds()]);if(Ri.update(i,re),Vv.update(i),Bt.update(i,re.position,Bt.isDriving?Bt.personalFortuner.position:null),Ie.updateGate(i,re.position,Bt.isDriving?Bt.personalFortuner.position:null),Qt.setVehicleState({nearby:!Bt.isDriving&&Bt.isNearFortuner(re.position),driving:Bt.isDriving,speed:e,blocked:Bt.driveBlocked}),Qt.setMotorcycleState({nearby:!Bt.isDriving&&!Ue.isPiloting&&Bt.isNearMotorcycle(re.position),riding:Bt.isRidingMotorcycle,speed:n,blocked:Bt.motorcycleBlocked}),Qt.setHelicopterState({nearby:!Ue.isPiloting&&Ue.isNear(re.position),piloting:Ue.isPiloting,speed:s,altitude:Ue.helicopter.position.y}),ye.update(i),sn){const r=new jt;sn.userData.drops.forEach((c,l)=>{c.y-=32*i,c.y<0&&(c.y=28+Math.random()*8),r.makeTranslation(re.position.x+c.x,re.position.y+c.y,re.position.z+c.z),sn.setMatrixAt(l,r)}),sn.instanceMatrix.needsUpdate=!0}ye.enabled&&Qt.updateMap(re.position,Bt.personalFortuner.position,Ue.helicopter.position),o.landed&&Qt.notify("Landed"),an.render(be,Go)}Yh();window.addEventListener("resize",()=>{Go.aspect=window.innerWidth/window.innerHeight,Go.updateProjectionMatrix(),an.setSize(window.innerWidth,window.innerHeight),an.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6))});window.addEventListener("beforeunload",()=>{ye.setEnabled(!1),Qt.closePause(),an.dispose()});
