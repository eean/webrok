(function(){var a="[Class ",
b="toString",
c="qx.Bootstrap",
d="]",
e="Class",
f=".";
qx={Bootstrap:{genericToString:function(){return a+this.classname+d;
},
createNamespace:function(g,
h){var j=g.split(f);
var k=window;
var l=j[0];
for(var m=0,
n=j.length-1;m<n;m++,
l=j[m]){if(!k[l]){k=k[l]={};
}else{k=k[l];
}}k[l]=h;
return l;
},
define:function(g,
o){if(!o){var o={statics:{}};
}var p;
var q=null;
if(o.members){p=o.construct||new Function;
var r=o.statics;
for(var s in r){p[s]=r[s];
}q=p.prototype;
var t=o.members;
for(var s in t){q[s]=t[s];
}}else{p=o.statics||{};
}var u=this.createNamespace(g,
p);
p.name=p.classname=g;
p.basename=u;
p.$$type=e;
if(!p.hasOwnProperty(b)){p.toString=this.genericToString;
}if(o.defer){o.defer(p,
q);
}qx.Bootstrap.$$registry[g]=o.statics;
}}};
qx.Bootstrap.define(c,
{statics:{LOADSTART:new Date,
createNamespace:qx.Bootstrap.createNamespace,
define:qx.Bootstrap.define,
genericToString:qx.Bootstrap.genericToString,
getByName:function(g){return this.$$registry[g];
},
$$registry:{}}});
})();
(function(){var a="qx.allowUrlSettings",
b="&",
c="qx.core.Setting",
d="qx.allowUrlVariants",
e="qxsetting",
f=":",
g=".";
qx.Bootstrap.define(c,
{statics:{__a:{},
define:function(h,
j){if(j===undefined){throw new Error('Default value of setting "'+h+'" must be defined!');
}
if(!this.__a[h]){this.__a[h]={};
}else if(this.__a[h].defaultValue!==undefined){throw new Error('Setting "'+h+'" is already defined!');
}this.__a[h].defaultValue=j;
},
get:function(h){var k=this.__a[h];
if(k===undefined){throw new Error('Setting "'+h+'" is not defined.');
}
if(k.value!==undefined){return k.value;
}return k.defaultValue;
},
__b:function(){if(window.qxsettings){for(var h in qxsettings){if((h.split(g)).length<2){throw new Error('Malformed settings key "'+h+'". Must be following the schema "namespace.key".');
}
if(!this.__a[h]){this.__a[h]={};
}this.__a[h].value=qxsettings[h];
}window.qxsettings=undefined;
try{delete window.qxsettings;
}catch(ex){}this.__c();
}},
__c:function(){if(this.get(a)!=true){return;
}var l=document.location.search.slice(1).split(b);
for(var m=0;m<l.length;m++){var n=l[m].split(f);
if(n.length!=3||n[0]!=e){continue;
}var h=n[1];
if(!this.__a[h]){this.__a[h]={};
}this.__a[h].value=decodeURIComponent(n[2]);
}}},
defer:function(o){o.define(a,
false);
o.define(d,
false);
o.__b();
}});
})();
(function(){var a="gecko",
b="[^\\.0-9]",
c="mshtml",
d="unknown",
e="Adobe Systems Incorporated",
f="webkit",
g="Gecko",
h="opera",
i="Apple Computer, Inc.",
j="0.0.0",
k=".",
l="qx.bom.client.Engine";
qx.Bootstrap.define(l,
{statics:{NAME:"",
FULLVERSION:"0.0.0",
VERSION:0.0,
OPERA:false,
WEBKIT:false,
GECKO:false,
MSHTML:false,
__d:function(){var m=d;
var n=j;
var o=navigator.userAgent;
if(window.opera){m=h;
this.OPERA=true;
if(/Opera[\s\/]([0-9\.]*)/.test(o)){n=RegExp.$1.substring(0,
3)+k+RegExp.$1.substring(3);
}else{throw new Error("Could not detect Opera version: "+o+"!");
}}else if(navigator.vendor&&(navigator.vendor===i||navigator.vendor===e)){m=f;
this.WEBKIT=true;
if(/AppleWebKit\/([^ ]+)/.test(o)){n=RegExp.$1;
var p=RegExp(b).exec(n);
if(p){n=n.slice(0,
p.index);
}}else{throw new Error("Could not detect Webkit version: "+o+"!");
}}else if(window.controllers&&navigator.product===g){m=a;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(o)){n=RegExp.$1;
}else{throw new Error("Could not detect Gecko version: "+o+"!");
}}else if(navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(o)){m=c;
n=RegExp.$1;
this.MSHTML=true;
}else{throw new Error("Unsupported client: "+o+"!");
}this.NAME=m;
this.FULLVERSION=n;
this.VERSION=parseFloat(n);
}},
defer:function(q){q.__d();
}});
})();
(function(){var a="on",
b="off",
c="default",
d="|",
e="object",
f="qxvariant",
g="qx.client",
h="qx.aspects",
j="qx.dynamicLocaleSwitch",
k="qx.debug",
m=":",
n="&",
o="qx.eventMonitorNoListeners",
p="qx.core.Variant",
q="gecko",
r="qx.compatibility",
s="$",
t="qx.allowUrlVariants",
u="qx.deprecationWarnings",
w="webkit",
x="opera",
y="mshtml";
qx.Bootstrap.define(p,
{statics:{__e:{},
__f:{},
compilerIsSet:function(){return true;
},
define:function(z,
A,
B){{};
if(!this.__e[z]){this.__e[z]={};
}else{}this.__e[z].allowedValues=A;
this.__e[z].defaultValue=B;
},
get:function(z){var C=this.__e[z];
{};
if(C.value!==undefined){return C.value;
}return C.defaultValue;
},
__g:function(){if(window.qxvariants){for(var z in qxvariants){{};
if(!this.__e[z]){this.__e[z]={};
}this.__e[z].value=qxvariants[z];
}window.qxvariants=undefined;
try{delete window.qxvariants;
}catch(ex){}this.__h(this.__e);
}},
__h:function(){if(qx.core.Setting.get(t)!=true){return;
}var D=document.location.search.slice(1).split(n);
for(var E=0;E<D.length;E++){var F=D[E].split(m);
if(F.length!=3||F[0]!=f){continue;
}var z=F[1];
if(!this.__e[z]){this.__e[z]={};
}this.__e[z].value=decodeURIComponent(F[2]);
}},
select:function(z,
G){{};
for(var F in G){if(this.isSet(z,
F)){return G[F];
}}
if(G[c]!==undefined){return G[c];
}{};
},
isSet:function(z,
H){var I=z+s+H;
if(this.__f[I]!==undefined){return this.__f[I];
}var J=false;
if(H.indexOf(d)<0){J=this.get(z)===H;
}else{var K=H.split(d);
for(var E=0,
L=K.length;E<L;E++){if(this.get(z)===K[E]){J=true;
break;
}}}this.__f[I]=J;
return J;
},
__i:function(M){return typeof M===e&&M!==null&&M instanceof Array;
},
__j:function(M){return typeof M===e&&M!==null&&!(M instanceof Array);
},
__k:function(N,
O){for(var E=0,
L=N.length;E<L;E++){if(N[E]==O){return true;
}}return false;
}},
defer:function(P){P.define(g,
[q,
y,
x,
w],
qx.bom.client.Engine.NAME);
P.define(k,
[a,
b],
a);
P.define(r,
[a,
b],
a);
P.define(o,
[a,
b],
b);
P.define(h,
[a,
b],
b);
P.define(u,
[a,
b],
a);
P.define(j,
[a,
b],
a);
P.__g();
}});
})();
(function(){var b='"',
c="valueOf",
d="toLocaleString",
e="isPrototypeOf",
f="",
g="toString",
h="qx.client",
j="qx.lang.Object",
k='\", "',
m="hasOwnProperty";
qx.Bootstrap.define(j,
{statics:{isEmpty:function(n){for(var o in n){return false;
}return true;
},
hasMinLength:function(n,
p){var q=0;
for(var o in n){if((++q)>=p){return true;
}}return false;
},
getLength:function(n){var q=0;
for(var o in n){q++;
}return q;
},
_shadowedKeys:[e,
m,
d,
g,
c],
getKeys:qx.core.Variant.select(h,
{"mshtml":function(n){var r=[];
for(var o in n){r.push(o);
}for(var q=0,
s=this._shadowedKeys,
t=s.length;q<t;q++){if(n.hasOwnProperty(s[q])){r.push(s[q]);
}}return r;
},
"default":function(n){var r=[];
for(var o in n){r.push(o);
}return r;
}}),
getKeysAsString:function(n){var u=qx.lang.Object.getKeys(n);
if(u.length==0){return f;
}return b+u.join(k)+b;
},
getValues:function(n){var r=[];
for(var o in n){r.push(n[o]);
}return r;
},
mergeWith:function(v,
w,
x){if(x===undefined){x=true;
}
for(var o in w){if(x||v[o]===undefined){v[o]=w[o];
}}return v;
},
carefullyMergeWith:function(v,
w){return qx.lang.Object.mergeWith(v,
w,
false);
},
merge:function(v,
y){var z=arguments.length;
for(var q=1;q<z;q++){qx.lang.Object.mergeWith(v,
arguments[q]);
}return v;
},
copy:function(w){var A={};
for(var o in w){A[o]=w[o];
}return A;
},
invert:function(n){var B={};
for(var o in n){B[n[o].toString()]=o;
}return B;
},
getKeyFromValue:function(C,
D){for(var o in C){if(C[o]===D){return o;
}}return null;
},
select:function(o,
n){return n[o];
},
fromArray:function(E){var C={};
for(var q=0,
t=E.length;q<t;q++){{};
C[E[q].toString()]=true;
}return C;
}}});
})();
(function(){var a="qx.core.Aspect",
b="before",
c="*",
d="static";
qx.Bootstrap.define(a,
{statics:{__l:[],
wrap:function(e,
f,
g){var h=[];
var j=[];
var k=this.__l;
var l;
for(var m=0;m<k.length;m++){l=k[m];
if((l.type==null||g==l.type||l.type==c)&&(l.name==null||e.match(l.name))){l.pos==-1?h.push(l.fcn):j.push(l.fcn);
}}
if(h.length===0&&j.length===0){return f;
}var n=function(){for(var m=0;m<h.length;m++){h[m].call(this,
e,
f,
g,
arguments);
}var o=f.apply(this,
arguments);
for(var m=0;m<j.length;m++){j[m].call(this,
e,
f,
g,
arguments,
o);
}return o;
};
if(g!==d){n.self=f.self;
n.base=f.base;
}f.wrapper=n;
n.original=f;
return n;
},
addAdvice:function(f,
p,
g,
q){this.__l.push({fcn:f,
pos:p===b?-1:1,
type:g,
name:q});
}}});
})();
(function(){var b="qx.aspects",
c=".",
d="on",
e="static",
f="[Class ",
g="]",
h="toString",
j="member",
k="$$init_",
m="destructor",
n="extend",
o="Class",
p="off",
q="qx.Class",
r="qx.event.type.Data";
qx.Bootstrap.define(q,
{statics:{define:function(s,
t){if(!t){var t={};
}if(t.include&&!(t.include instanceof Array)){t.include=[t.include];
}if(t.implement&&!(t.implement instanceof Array)){t.implement=[t.implement];
}if(!t.hasOwnProperty(n)&&!t.type){t.type=e;
}{};
var u=this.__q(s,
t.type,
t.extend,
t.statics,
t.construct,
t.destruct);
if(t.extend){if(t.properties){this.__s(u,
t.properties,
true);
}if(t.members){this.__u(u,
t.members,
true,
true,
false);
}if(t.events){this.__r(u,
t.events,
true);
}if(t.include){for(var v=0,
w=t.include.length;v<w;v++){this.__x(u,
t.include[v],
false);
}}}if(t.settings){for(var x in t.settings){qx.core.Setting.define(x,
t.settings[x]);
}}if(t.variants){for(var x in t.variants){qx.core.Variant.define(x,
t.variants[x].allowedValues,
t.variants[x].defaultValue);
}}if(t.implement){for(var v=0,
w=t.implement.length;v<w;v++){this.__w(u,
t.implement[v]);
}}{};
if(t.defer){t.defer.self=u;
t.defer(u,
u.prototype,
{add:function(s,
t){var y={};
y[s]=t;
qx.Class.__s(u,
y,
true);
}});
}},
isDefined:function(s){return this.getByName(s)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},
getByName:function(s){return this.$$registry[s];
},
include:function(u,
z){{};
qx.Class.__x(u,
z,
false);
},
patch:function(u,
z){{};
qx.Class.__x(u,
z,
true);
},
isSubClassOf:function(u,
A){if(!u){return false;
}
if(u==A){return true;
}
if(u.prototype instanceof A){return true;
}return false;
},
getPropertyDefinition:function(u,
s){while(u){if(u.$$properties&&u.$$properties[s]){return u.$$properties[s];
}u=u.superclass;
}return null;
},
getProperties:function(u){var B=[];
while(u){if(u.$$properties){B.push.apply(B,
qx.lang.Object.getKeys(u.$$properties));
}u=u.superclass;
}return B;
},
getByProperty:function(u,
s){while(u){if(u.$$properties&&u.$$properties[s]){return u;
}u=u.superclass;
}return null;
},
hasProperty:function(u,
s){return !!this.getPropertyDefinition(u,
s);
},
getEventType:function(u,
s){var u=u.constructor;
while(u.superclass){if(u.$$events&&u.$$events[s]!==undefined){return u.$$events[s];
}u=u.superclass;
}return null;
},
supportsEvent:function(u,
s){return !!this.getEventType(u,
s);
},
hasOwnMixin:function(u,
z){return u.$$includes&&u.$$includes.indexOf(z)!==-1;
},
getByMixin:function(u,
z){var B,
v,
w;
while(u){if(u.$$includes){B=u.$$flatIncludes;
for(v=0,
w=B.length;v<w;v++){if(B[v]===z){return u;
}}}u=u.superclass;
}return null;
},
getMixins:function(u){var B=[];
while(u){if(u.$$includes){B.push.apply(B,
u.$$flatIncludes);
}u=u.superclass;
}return B;
},
hasMixin:function(u,
z){return !!this.getByMixin(u,
z);
},
hasOwnInterface:function(u,
C){return u.$$implements&&u.$$implements.indexOf(C)!==-1;
},
getByInterface:function(u,
C){var B,
v,
w;
while(u){if(u.$$implements){B=u.$$flatImplements;
for(v=0,
w=B.length;v<w;v++){if(B[v]===C){return u;
}}}u=u.superclass;
}return null;
},
getInterfaces:function(u){var B=[];
while(u){if(u.$$implements){B.push.apply(B,
u.$$flatImplements);
}u=u.superclass;
}return B;
},
hasInterface:function(u,
C){return !!this.getByInterface(u,
C);
},
implementsInterface:function(u,
C){if(this.hasInterface(u,
C)){return true;
}
try{qx.Interface.assert(u,
C,
false);
return true;
}catch(ex){}return false;
},
getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},
genericToString:function(){return f+this.classname+g;
},
$$registry:qx.Bootstrap.$$registry,
__m:null,
__n:null,
__o:function(){},
__p:function(){},
__q:function(s,
D,
E,
F,
G,
H){var u;
if(!E&&qx.core.Variant.isSet(b,
p)){u=F||{};
}else{u={};
if(E){if(!G){G=this.__y();
}u=this.__A(G,
s,
D);
}if(F){var x;
for(var v=0,
I=qx.lang.Object.getKeys(F),
w=I.length;v<w;v++){x=I[v];
if(qx.core.Variant.isSet(b,
d)){var J=F[x];
if(J instanceof Function){J=qx.core.Aspect.wrap(s+c+x,
J,
e);
}u[x]=J;
}else{u[x]=F[x];
}}}}var K=qx.Bootstrap.createNamespace(s,
u,
false);
u.name=u.classname=s;
u.basename=K;
u.$$type=o;
if(D){u.$$classtype=D;
}if(!u.hasOwnProperty(h)){u.toString=this.genericToString;
}
if(E){var L=E.prototype;
var M=this.__z();
M.prototype=L;
var N=new M;
u.prototype=N;
N.name=N.classname=s;
N.basename=K;
G.base=u.superclass=E;
G.self=u.constructor=N.constructor=u;
if(H){if(qx.core.Variant.isSet(b,
d)){H=qx.core.Aspect.wrap(s,
H,
m);
}u.$$destructor=H;
}}this.$$registry[s]=u;
return u;
},
__r:function(u,
O,
P){var x,
x;
if(u.$$events){for(var x in O){u.$$events[x]=O[x];
}}else{u.$$events=O;
}},
__s:function(u,
y,
P){var t;
if(P===undefined){P=false;
}var Q=!!u.$$propertiesAttached;
for(var s in y){t=y[s];
{};
t.name=s;
if(!t.refine){if(u.$$properties===undefined){u.$$properties={};
}u.$$properties[s]=t;
}if(t.init!==undefined){u.prototype[k+s]=t.init;
}if(t.event!==undefined){var R={};
R[t.event]=r;
this.__r(u,
R,
P);
}if(t.inheritable){qx.core.Property.$$inheritable[s]=true;
}if(Q){qx.core.Property.attachMethods(u,
s,
t);
}}},
__t:null,
__u:function(u,
S,
P,
T,
U){var N=u.prototype;
var x,
V;
for(var v=0,
I=qx.lang.Object.getKeys(S),
w=I.length;v<w;v++){x=I[v];
V=S[x];
{};
if(T!==false&&V instanceof Function&&V.$$type==null){if(U==true){V=this.__v(V,
N[x]);
}else{if(N[x]){V.base=N[x];
}V.self=u;
}
if(qx.core.Variant.isSet(b,
d)){V=qx.core.Aspect.wrap(u.classname+c+x,
V,
j);
}}N[x]=V;
}},
__v:function(V,
T){if(T){return function(){var W=V.base;
V.base=T;
var X=V.apply(this,
arguments);
V.base=W;
return X;
};
}else{return V;
}},
__w:function(u,
C){{};
var B=qx.Interface.flatten([C]);
if(u.$$implements){u.$$implements.push(C);
u.$$flatImplements.push.apply(u.$$flatImplements,
B);
}else{u.$$implements=[C];
u.$$flatImplements=B;
}},
__x:function(u,
z,
P){{};
if(this.hasMixin(u,
z)){qx.log.Logger.warn('Mixin "'+z.name+'" is already included into Class "'+u.classname+'" by class: '+this.getByMixin(u,
z).classname+'!');
return;
}var B=qx.Mixin.flatten([z]);
var Y;
for(var v=0,
w=B.length;v<w;v++){Y=B[v];
if(Y.$$events){this.__r(u,
Y.$$events,
P);
}if(Y.$$properties){this.__s(u,
Y.$$properties,
P);
}if(Y.$$members){this.__u(u,
Y.$$members,
P,
P,
P);
}}if(u.$$includes){u.$$includes.push(z);
u.$$flatIncludes.push.apply(u.$$flatIncludes,
B);
}else{u.$$includes=[z];
u.$$flatIncludes=B;
}},
__y:function(){function ba(){arguments.callee.base.apply(this,
arguments);
}return ba;
},
__z:function(){return function(){};
},
__A:function(G,
s,
D){var bb=function(){var u=arguments.callee.constructor;
{};
if(!u.$$propertiesAttached){qx.core.Property.attach(u);
}var X=u.$$original.apply(this,
arguments);
if(u.$$includes){var bc=u.$$flatIncludes;
for(var v=0,
w=bc.length;v<w;v++){if(bc[v].$$constructor){bc[v].$$constructor.apply(this,
arguments);
}}}if(this.classname===s.classname){this.$$initialized=true;
}return X;
};
if(qx.core.Variant.isSet("qx.aspects",
"on")){var bd=qx.core.Aspect.wrap(s,
bb,
"constructor");
bb.$$original=G;
bb.constructor=bd;
bb=bd;
}if(D==="singleton"){bb.getInstance=this.getInstance;
}bb.$$original=G;
G.wrapper=bb;
return bb;
}},
defer:function(F){for(var be in qx.Bootstrap.$$registry){var F=qx.Bootstrap.$$registry[be];
for(var x in F){if(F[x] instanceof Function){F[x]=qx.core.Aspect.wrap(be+c+x,
F[x],
e);
}}}}});
})();
(function(){var a="qx.client",
b="on",
c="qx.bom.Event",
d="mouseover";
qx.Bootstrap.define(c,
{statics:{addNativeListener:qx.core.Variant.select(a,
{"mshtml":function(f,
g,
h){f.attachEvent(b+g,
h);
},
"default":function(f,
g,
h){f.addEventListener(g,
h,
false);
}}),
removeNativeListener:qx.core.Variant.select(a,
{"mshtml":function(f,
g,
h){f.detachEvent(b+g,
h);
},
"default":function(f,
g,
h){f.removeEventListener(g,
h,
false);
}}),
getTarget:function(i){return i.target||i.srcElement;
},
getRelatedTarget:qx.core.Variant.select(a,
{"mshtml":function(i){if(i.type===d){return i.fromEvent;
}else{return i.toElement;
}},
"default":function(i){return i.relatedTarget;
}}),
preventDefault:function(i){if(i.preventDefault){i.preventDefault();
}
try{i.keyCode=0;
}catch(i){}i.returnValue=false;
},
stopPropagation:function(i){if(i.stopPropagation){i.stopPropagation();
}i.cancelBubble=true;
}}});
})();
(function(){var a="|bubble",
b="|capture",
c="_",
d="unload",
e="UNKNOWN_",
f="DOM_",
g="capture",
h="WIN_",
j='|',
k="qx.event.Manager",
m="QX_";
qx.Bootstrap.define(k,
{construct:function(n){this.__window=n;
this.__disposeWrapper=qx.lang.Function.bind(this.dispose,
this);
qx.bom.Event.addNativeListener(n,
d,
this.__disposeWrapper);
this.__listeners={};
this.__handlers={};
this.__dispatchers={};
this.__handlerCache={};
},
members:{dispose:function(){qx.bom.Event.removeNativeListener(this.__window,
d,
this.__disposeWrapper);
qx.event.Registration.removeManager(this);
this.__listeners=this.__window=this.__handlers=this.__dispatchers=this.__disposeWrapper=this.__handlerCache=null;
},
getWindow:function(){return this.__window;
},
getHandler:function(o){var p=this.__handlers[o.classname];
if(p){return p;
}return this.__handlers[o.classname]=new o(this);
},
getDispatcher:function(o){var q=this.__dispatchers[o.classname];
if(q){return q;
}return this.__dispatchers[o.classname]=new o(this);
},
getListeners:function(r,
s,
t){var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__listeners[u];
if(!v){return null;
}var w=s+(t?b:a);
var x=v[w];
return x?x.concat():null;
},
hasListener:function(r,
s,
t){{};
var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__listeners[u];
if(!v){return false;
}var w=s+(t?b:a);
var x=v[w];
if(!x){return false;
}return x.length>0;
},
importListeners:function(r,
y){{};
var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__listeners[u]={};
for(var z in y){var A=y[z];
var w=A.type+(A.capture?b:a);
var x=v[w];
if(!x){x=v[w]=[];
this.__Q(r,
A.type,
A.capture);
}x.push({handler:A.listener,
context:A.self});
}},
addListener:function(r,
s,
B,
C,
t){var D;
var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__listeners[u];
if(!v){v=this.__listeners[u]={};
}var w=s+(t?b:a);
var x=v[w];
if(!x){x=v[w]=[];
}if(x.length===0){this.__Q(r,
s,
t);
}x.push({handler:B,
context:C});
},
_findHandler:function(r,
s){var E;
var F=false;
var G=false;
var H=false;
if(r.nodeType===1){F=true;
E=f+r.tagName.toLowerCase()+c+s;
}else if(r==this.__window){G=true;
E=h+s;
}else if(r.classname){H=true;
E=m+r.classname+c+s;
}else{E=e+r+c+s;
}var I=this.__handlerCache;
if(I[E]){return I[E];
}var J=qx.event.Registration.getHandlers();
var K;
for(var L=0,
M=J.length;L<M;L++){var o=J[L];
var N=o.SUPPORTED_TYPES;
if(N&&!N[s]){continue;
}var O=qx.event.IEventHandler;
var P=o.TARGET_CHECK;
if(P){if(P===O.TARGET_DOMNODE&&!F){continue;
}else if(P===O.TARGET_WINDOW&&!G){continue;
}else if(P===O.TARGET_OBJECT&&!H){continue;
}}K=this.getHandler(J[L]);
if(o.IGNORE_CAN_HANDLE||K.canHandleEvent(r,
s)){I[E]=K;
return K;
}}return null;
},
__Q:function(r,
s,
t){var p=this._findHandler(r,
s);
if(p){p.registerEvent(r,
s,
t);
return;
}{};
},
removeListener:function(r,
s,
B,
C,
t){var D;
var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__listeners[u];
if(!v){return false;
}var w=s+(t?b:a);
var x=v[w];
if(!x){return false;
}
for(var L=0,
M=x.length;L<M;L++){var Q=x[L];
if(Q.handler===B&&Q.context===C){qx.lang.Array.removeAt(x,
L);
if(x.length==0){this.__R(r,
s,
t);
}return true;
}}return false;
},
removeAllListeners:function(r){var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__listeners[u];
if(!v){return false;
}var R,
s,
t;
for(var w in v){if(v[w].length>0){R=w.split(j);
s=R[0];
t=R[1]===g;
this.__R(r,
s,
t);
}}delete this.__listeners[u];
return true;
},
__R:function(r,
s,
t){var p=this._findHandler(r,
s);
if(p){p.unregisterEvent(r,
s,
t);
return;
}{};
},
dispatchEvent:function(r,
S){var D;
var s=S.getType();
if(!S.getBubbles()&&!this.hasListener(r,
s)){qx.event.Pool.getInstance().poolObject(S);
return true;
}
if(!S.getTarget()){S.setTarget(r);
}var J=qx.event.Registration.getDispatchers();
var K;
var T=false;
for(var L=0,
M=J.length;L<M;L++){K=this.getDispatcher(J[L]);
if(K.canDispatchEvent(r,
S,
s)){K.dispatchEvent(r,
S,
s);
T=true;
break;
}}
if(!T){qx.log.Logger.error(this,
"No dispatcher can handle event of type "+s+" on "+r);
return true;
}var U=S.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(S);
return !U;
}}});
})();
(function(){var b="qx.dom.Node",
c="qx.client",
d="",
e="object";
qx.Class.define(b,
{statics:{ELEMENT:1,
ATTRIBUTE:2,
TEXT:3,
CDATA_SECTION:4,
ENTITY_REFERENCE:5,
ENTITY:6,
PROCESSING_INSTRUCTION:7,
COMMENT:8,
DOCUMENT:9,
DOCUMENT_TYPE:10,
DOCUMENT_FRAGMENT:11,
NOTATION:12,
getDocument:function(f){if(this.isDocument(f)){return f;
}return f.ownerDocument||f.document||null;
},
getWindow:qx.core.Variant.select(c,
{"mshtml":function(f){return this.getDocument(f).parentWindow;
},
"default":function(f){return this.getDocument(f).defaultView;
}}),
getDocumentElement:function(f){return this.getDocument(f).documentElement;
},
getBodyElement:function(f){return this.getDocument(f).body;
},
isElement:function(f){return !!(f&&f.nodeType===qx.dom.Node.ELEMENT);
},
isDocument:function(f){return !!(f&&f.nodeType===qx.dom.Node.DOCUMENT);
},
isText:function(f){return !!(f&&f.nodeType===qx.dom.Node.TEXT);
},
isWindow:function(g){return !!(typeof g===e&&g&&g.Array);
},
getText:function(f){if(!f||!f.nodeType){return null;
}
switch(f.nodeType){case 1:var h,
j=[],
k=f.childNodes,
l=k.length;
for(h=0;h<l;h++){j[h]=this.getText(k[h]);
}return j.join(d);
case 2:return f.nodeValue;
break;
case 3:return f.nodeValue;
break;
}return null;
}}});
})();
(function(){var b="qx.lang.Array",
c="qx.client",
d="mshtml";
qx.Bootstrap.define(b,
{statics:{fromArguments:function(e,
f){return Array.prototype.slice.call(e,
f||0);
},
fromCollection:function(g){if(qx.core.Variant.isSet(c,
d)){if(g.item){var h=[];
for(var j=0,
k=g.length;j<k;j++){h[j]=g[j];
}return h;
}}return Array.prototype.slice.call(g,
0);
},
fromShortHand:function(m){var n=m.length;
var o=qx.lang.Array.copy(m);
switch(n){case 1:o[1]=o[2]=o[3]=o[0];
break;
case 2:o[2]=o[0];
case 3:o[3]=o[1];
}return o;
},
copy:function(h){return h.concat();
},
clone:function(h){return h.concat();
},
getLast:function(h){return h[h.length-1];
},
getFirst:function(h){return h[0];
},
insertAt:function(h,
p,
j){h.splice(j,
0,
p);
return h;
},
insertBefore:function(h,
p,
q){var j=h.indexOf(q);
if(j==-1){h.push(p);
}else{h.splice(j,
0,
p);
}return h;
},
insertAfter:function(h,
p,
q){var j=h.indexOf(q);
if(j==-1||j==(h.length-1)){h.push(p);
}else{h.splice(j+1,
0,
p);
}return h;
},
removeAt:function(h,
j){return h.splice(j,
1)[0];
},
removeAll:function(h){return h.length=0;
},
append:function(h,
r){{};
Array.prototype.push.apply(h,
r);
return h;
},
remove:function(h,
p){var j=h.indexOf(p);
if(j!=-1){h.splice(j,
1);
return p;
}},
contains:function(h,
p){return h.indexOf(p)!==-1;
},
equals:function(s,
t){var u=s.length;
if(u!==t.length){return false;
}
for(var j=0;j<u;j++){if(s[j]!==t[j]){return false;
}}return true;
},
sum:function(h){var o=0;
for(var j=0,
k=h.length;j<k;j++){o+=h[j];
}return o;
},
max:function(h){var o=Number.MIN_VALUE;
for(var j=0,
k=h.length;j<k;j++){if(h[j]>o){o=h[j];
}}return o;
},
min:function(h){var o=Number.MAX_VALUE;
for(var j=0,
k=h.length;j<k;j++){if(h[j]<o){o=h[j];
}}return o;
}}});
})();
(function(){var a=":",
b=":constructor",
c='anonymous',
d="anonymous: ",
e="qx.lang.Function",
f=":constructor wrapper";
qx.Bootstrap.define(e,
{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},
getName:function(h){if(h.$$original){return h.classname+f;
}
if(h.wrapper){return h.wrapper.classname+b;
}
if(h.classname){return h.classname+b;
}
if(h.mixin){for(var i in h.mixin.$$members){if(h.mixin.$$members[i]==h){return h.mixin.name+a+i;
}}for(var i in h.mixin){if(h.mixin[i]==h){return h.mixin.name+a+i;
}}}
if(h.self){var j=h.self.constructor;
if(j){for(var i in j.prototype){if(j.prototype[i]==h){return j.classname+a+i;
}}for(var i in j){if(j[i]==h){return j.classname+a+i;
}}}}var k=h.toString().match(/(function\s*\w*\(.*?\))/);
if(k&&k.length>=1&&k[1]){return k[1];
}var k=h.toString().match(/(function\s*\(.*?\))/);
if(k&&k.length>=1&&k[1]){return d+k[1];
}return c;
},
globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,
l);
}},
returnTrue:function(){return true;
},
returnFalse:function(){return false;
},
returnNull:function(){return null;
},
returnThis:function(){return this;
},
returnZero:function(){return 0;
},
create:function(m,
n){{};
if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(o){var g=qx.lang.Array.fromArguments(arguments);
if(n.args){g=n.args.concat(g);
}
if(n.delay||n.periodical){var p=function(){return m.apply(n.self||this,
g);
};
if(n.delay){return setTimeout(p,
n.delay);
}
if(n.periodical){return setInterval(p,
n.periodical);
}}else if(n.attempt){var q=false;
try{q=m.apply(n.self||this,
g);
}catch(ex){}return q;
}else{return m.apply(n.self||this,
g);
}};
},
bind:function(m,
r,
s){return this.create(m,
{self:r,
args:s!==undefined?qx.lang.Array.fromArguments(arguments,
2):null});
},
curry:function(m,
s){return this.create(m,
{args:s!==undefined?qx.lang.Array.fromArguments(arguments,
1):null});
},
listener:function(m,
r,
s){if(s===undefined){return function(o){return m.call(r||this,
o||window.event);
};
}else{var t=qx.lang.Array.fromArguments(arguments,
2);
return function(o){var g=[o||window.event];
g.push.apply(g,
t);
m.apply(r||this,
g);
};
}},
attempt:function(m,
r,
s){return this.create(m,
{self:r,
attempt:true,
args:s!==undefined?qx.lang.Array.fromArguments(arguments,
2):null})();
},
delay:function(m,
u,
r,
s){return this.create(m,
{delay:u,
self:r,
args:s!==undefined?qx.lang.Array.fromArguments(arguments,
3):null})();
},
periodical:function(m,
v,
r,
s){return this.create(m,
{periodical:v,
self:r,
args:s!==undefined?qx.lang.Array.fromArguments(arguments,
3):null})();
}}});
})();
(function(){var c="qx.event.Registration";
qx.Bootstrap.define(c,
{statics:{__S:{},
getManager:function(d){if(qx.dom.Node.isWindow(d)){var e=d;
}else if(qx.dom.Node.isElement(d)){var e=qx.dom.Node.getWindow(d);
}else{var e=window;
}var f=qx.core.ObjectRegistry.toHashCode(e);
var g=this.__S[f];
if(!g){g=new qx.event.Manager(e);
this.__S[f]=g;
}return g;
},
removeManager:function(h){var f=qx.core.ObjectRegistry.toHashCode(h.getWindow());
delete this.__S[f];
},
addListener:function(d,
i,
j,
k,
l){this.getManager(d).addListener(d,
i,
j,
k,
l);
},
removeListener:function(d,
i,
j,
k,
l){this.getManager(d).removeListener(d,
i,
j,
k,
l);
},
removeAllListeners:function(d){this.getManager(d).removeAllListeners(d);
},
hasListener:function(d,
i,
l){return this.getManager(d).hasListener(d,
i,
l);
},
createEvent:function(i,
m,
n){{};
if(m==null){m=qx.event.type.Event;
}var o=qx.event.Pool.getInstance().getObject(m);
if(!o){return;
}n?o.init.apply(o,
n):o.init();
if(i){o.setType(i);
}return o;
},
dispatchEvent:function(d,
p){return this.getManager(d).dispatchEvent(d,
p);
},
fireEvent:function(d,
i,
m,
n){{};
var q=this.createEvent(i,
m||null,
n);
return this.getManager(d).dispatchEvent(d,
q);
},
fireNonBubblingEvent:function(d,
i,
m,
n){{};
var h=this.getManager(d);
if(!h.hasListener(d,
i,
false)){return true;
}var q=this.createEvent(i,
m||null,
n);
return h.dispatchEvent(d,
q);
},
PRIORITY_FIRST:-32000,
PRIORITY_NORMAL:0,
PRIORITY_LAST:32000,
__T:[],
addHandler:function(r){{};
this.__T.push(r);
this.__T.sort(function(s,
t){return s.PRIORITY-t.PRIORITY;
});
},
getHandlers:function(){return this.__T;
},
__U:[],
addDispatcher:function(u,
v){{};
this.__U.push(u);
this.__U.sort(function(s,
t){return s.PRIORITY-t.PRIORITY;
});
},
getDispatchers:function(){return this.__U;
}}});
})();
(function(){var b=';',
c='computed=this.',
d='=value;',
e='this.',
f="set",
g="style",
h='if(this.',
j='}',
k="init",
m='delete this.',
n='!==undefined)',
o="boolean",
p="string",
q='return this.',
r='else if(this.',
s="unstyle",
t="refresh",
u='old=this.',
v='!==undefined){',
w='=true;',
x="reset",
y='else ',
z='if(old===computed)return value;',
A='if(old===undefined)old=null;',
B='if(computed===undefined)computed=null;',
C="reg = qx.event.Registration;",
D='===value)return value;',
E="Error in property ",
F='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',
G="property",
H='else{',
I=" in method ",
J='=computed;',
K='Undefined value is not allowed!',
L='(backup);',
M='if(computed===inherit){',
N='old=computed=this.',
O="inherit",
P='Is invalid!',
Q='if(value===undefined)prop.error(this,2,"',
R='if(a[i].',
S='else if(computed===undefined)',
T="': ",
U=" of class ",
V='===undefined)return;',
W="')){",
X='else this.',
Y='value=this.',
ba='","',
bb='var inherit=prop.$$inherit;',
bc='var computed, old;',
bd='computed=undefined;delete this.',
be='Requires exactly one argument!',
bf='",value);',
bg='computed=value;',
bh="on",
bi=';}',
bj='(value);',
bk='){',
bl='if(computed===undefined||computed===inherit){',
bm='!==inherit){',
bn='(computed, old, "',
bo='return value;',
bp="if(reg.hasListener(this, '",
bq='Does not allow any arguments!',
br=')a[i].',
bs='!==undefined&&',
bt='return null;',
bu='");',
bv='var pa=this.getLayoutParent();if(pa)computed=pa.',
bw="', qx.event.type.Data, [computed, old]",
bx='var backup=computed;',
by='}else{',
bz="object",
bA="qx.aspects",
bB='Null value is not allowed!',
bC="value",
bD='var computed, old=this.',
bE="",
bF='throw new Error("Property ',
bG=".",
bH=' of an instance of ',
bI=")}",
bJ='var prop=qx.core.Property;',
bK=" with incoming value '",
bL=' is not (yet) ready!");',
bM="qx.core.Property",
bN='if((computed===undefined||computed===inherit)&&',
bO="reg.fireEvent(this, '",
bP='Could not change or apply init value after constructing phase!';
qx.Class.define(bM,
{statics:{__V:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',
"String":'qx.core.Assert.assertString(value, msg) || true',
"Number":'qx.core.Assert.assertNumber(value, msg) || true',
"Integer":'qx.core.Assert.assertInteger(value, msg) || true',
"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',
"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',
"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',
"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',
"Object":'qx.core.Assert.assertObject(value, msg) || true',
"Array":'qx.core.Assert.assertArray(value, msg) || true',
"Map":'qx.core.Assert.assertMap(value, msg) || true',
"Function":'qx.core.Assert.assertFunction(value, msg) || true',
"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',
"Node":'value !== null && value.nodeType !== undefined',
"Element":'value !== null && value.nodeType === 1 && value.attributes',
"Document":'value !== null && value.nodeType === 9 && value.documentElement',
"Window":'value !== null && value.document',
"Event":'value !== null && value.type !== undefined',
"Class":'value !== null && value.$$type === "Class"',
"Mixin":'value !== null && value.$$type === "Mixin"',
"Interface":'value !== null && value.$$type === "Interface"',
"Theme":'value !== null && value.$$type === "Theme"',
"Color":'(typeof value === "string" || value instanceof String) && qx.util.ColorUtil.isValid(value)',
"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isDynamic(value)',
"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},
__W:{"Object":true,
"Array":true,
"Map":true,
"Function":true,
"Date":true,
"Node":true,
"Element":true,
"Document":true,
"Window":true,
"Event":true,
"Class":true,
"Mixin":true,
"Interface":true,
"Theme":true},
$$inherit:O,
$$idcounter:0,
$$store:{user:{},
theme:{},
inherit:{},
init:{},
useinit:{}},
$$method:{get:{},
set:{},
reset:{},
init:{},
refresh:{},
style:{},
unstyle:{}},
$$allowedKeys:{name:p,
dispose:o,
inheritable:o,
nullable:o,
themeable:o,
refine:o,
init:null,
apply:p,
event:p,
check:null,
transform:p,
deferredInit:o},
$$allowedGroupKeys:{name:p,
group:bz,
mode:p,
themeable:o},
$$inheritable:{},
refresh:function(bQ){var bR=bQ.getLayoutParent();
if(bR){var bS=bQ.constructor;
var bT=this.$$store.inherit;
var bU=this.$$store.init;
var bV=this.$$method.refresh;
var bW;
var bX;
{};
while(bS){bW=bS.$$properties;
if(bW){for(var bY in this.$$inheritable){if(bW[bY]&&bQ[bV[bY]]){bX=bR[bT[bY]];
if(bX===undefined){bX=bR[bU[bY]];
}{};
bQ[bV[bY]](bX);
}}}bS=bS.superclass;
}}},
attach:function(bS){var bW=bS.$$properties;
if(bW){for(var bY in bW){this.attachMethods(bS,
bY,
bW[bY]);
}}bS.$$propertiesAttached=true;
},
attachMethods:function(bS,
bY,
ca){ca.group?this.__X(bS,
ca,
bY):this.__Y(bS,
ca,
bY);
},
__X:function(bS,
ca,
bY){var cb=qx.lang.String.firstUp(bY);
var cc=bS.prototype;
var cd=ca.themeable===true;
{};
var ce=[];
var cf=[];
if(cd){var cg=[];
var ch=[];
}var ci="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
ce.push(ci);
if(cd){cg.push(ci);
}
if(ca.mode=="shorthand"){var cj="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
ce.push(cj);
if(cd){cg.push(cj);
}}
for(var ck=0,
cl=ca.group,
cm=cl.length;ck<cm;ck++){{};
ce.push("this.",
this.$$method.set[cl[ck]],
"(a[",
ck,
"]);");
cf.push("this.",
this.$$method.reset[cl[ck]],
"();");
if(cd){{};
cg.push("this.",
this.$$method.style[cl[ck]],
"(a[",
ck,
"]);");
ch.push("this.",
this.$$method.unstyle[cl[ck]],
"();");
}}this.$$method.set[bY]="set"+cb;
cc[this.$$method.set[bY]]=new Function(ce.join(""));
this.$$method.reset[bY]="reset"+cb;
cc[this.$$method.reset[bY]]=new Function(cf.join(""));
if(cd){this.$$method.style[bY]="style"+cb;
cc[this.$$method.style[bY]]=new Function(cg.join(""));
this.$$method.unstyle[bY]="unstyle"+cb;
cc[this.$$method.unstyle[bY]]=new Function(ch.join(""));
}},
__Y:function(bS,
ca,
bY){var cb=qx.lang.String.firstUp(bY);
var cc=bS.prototype;
{};
if(ca.dispose===undefined&&typeof ca.check==="string"){ca.dispose=this.__W[ca.check]||qx.Class.isDefined(ca.check)||qx.Interface.isDefined(ca.check);
}var cn=this.$$method;
var co=this.$$store;
co.user[bY]="$$user_"+bY;
co.theme[bY]="$$theme_"+bY;
co.init[bY]="$$init_"+bY;
co.inherit[bY]="$$inherit_"+bY;
co.useinit[bY]="$$useinit_"+bY;
cn.get[bY]="get"+cb;
cc[cn.get[bY]]=function(){return qx.core.Property.executeOptimizedGetter(this,
bS,
bY,
"get");
};
cn.set[bY]="set"+cb;
cc[cn.set[bY]]=function(bX){return qx.core.Property.executeOptimizedSetter(this,
bS,
bY,
"set",
arguments);
};
cn.reset[bY]="reset"+cb;
cc[cn.reset[bY]]=function(){return qx.core.Property.executeOptimizedSetter(this,
bS,
bY,
"reset");
};
if(ca.inheritable||ca.apply||ca.event||ca.deferredInit){cn.init[bY]="init"+cb;
cc[cn.init[bY]]=function(bX){return qx.core.Property.executeOptimizedSetter(this,
bS,
bY,
"init",
arguments);
};
}
if(ca.inheritable){cn.refresh[bY]="refresh"+cb;
cc[cn.refresh[bY]]=function(bX){return qx.core.Property.executeOptimizedSetter(this,
bS,
bY,
"refresh",
arguments);
};
}
if(ca.themeable){cn.style[bY]="style"+cb;
cc[cn.style[bY]]=function(bX){return qx.core.Property.executeOptimizedSetter(this,
bS,
bY,
"style",
arguments);
};
cn.unstyle[bY]="unstyle"+cb;
cc[cn.unstyle[bY]]=function(){return qx.core.Property.executeOptimizedSetter(this,
bS,
bY,
"unstyle");
};
}
if(ca.check==="Boolean"){cc["toggle"+cb]=new Function("return this."+cn.set[bY]+"(!this."+cn.get[bY]+"())");
cc["is"+cb]=new Function("return this."+cn.get[bY]+"()");
}},
__ba:{0:bP,
1:be,
2:K,
3:bq,
4:bB,
5:P},
error:function(cp,
cq,
cr,
cs,
bX){var ct=cp.constructor.classname;
var cu=E+cr+U+ct+I+this.$$method[cs][cr]+bK+bX+T;
throw new Error(cu+(this.__ba[cq]||"Unknown reason: "+cq));
},
__bb:function(cv,
cc,
bY,
cs,
cw,
cx){var co=this.$$method[cs][bY];
{cc[co]=new Function(bC,
cw.join(bE));
};
if(qx.core.Variant.isSet(bA,
bh)){cc[co]=qx.core.Aspect.wrap(cv.classname+bG+co,
cc[co],
G);
}if(cx===undefined){return cv[co]();
}else{return cv[co](cx[0]);
}},
executeOptimizedGetter:function(cv,
bS,
bY,
cs){var ca=bS.$$properties[bY];
var cc=bS.prototype;
var cw=[];
var co=this.$$store;
if(ca.inheritable){cw.push(h,
co.inherit[bY],
n);
cw.push(q,
co.inherit[bY],
b);
cw.push(y);
}cw.push(h,
co.user[bY],
n);
cw.push(q,
co.user[bY],
b);
if(ca.themeable){cw.push(r,
co.theme[bY],
n);
cw.push(q,
co.theme[bY],
b);
}
if(ca.deferredInit&&ca.init===undefined){cw.push(r,
co.init[bY],
n);
cw.push(q,
co.init[bY],
b);
}cw.push(y);
if(ca.init!==undefined){cw.push(q,
co.init[bY],
b);
}else if(ca.inheritable||ca.nullable){cw.push(bt);
}else{cw.push(bF,
bY,
bH,
bS.classname,
bL);
}return this.__bb(cv,
cc,
bY,
cs,
cw);
},
executeOptimizedSetter:function(cv,
bS,
bY,
cs,
cx){var ca=bS.$$properties[bY];
var cc=bS.prototype;
var cw=[];
var cy=cs===f||cs===g||(cs===k&&ca.init===undefined);
var cz=cs===x||cs===s;
var cA=ca.apply||ca.event||ca.inheritable;
if(cs===g||cs===s){var co=this.$$store.theme[bY];
}else if(cs===k){var co=this.$$store.init[bY];
}else{var co=this.$$store.user[bY];
}{if(!ca.nullable||ca.check||ca.inheritable){cw.push(bJ);
}if(cs===f){cw.push(Q,
bY,
ba,
cs,
bf);
}};
if(cy){if(ca.transform){cw.push(Y,
ca.transform,
bj);
}}if(cA){if(cy){cw.push(h,
co,
D);
}else if(cz){cw.push(h,
co,
V);
}}if(ca.inheritable){cw.push(bb);
}{};
if(!cA){if(cs===f){cw.push(e,
this.$$store.user[bY],
d);
}else if(cs===x){cw.push(h,
this.$$store.user[bY],
n);
cw.push(m,
this.$$store.user[bY],
b);
}else if(cs===g){cw.push(e,
this.$$store.theme[bY],
d);
}else if(cs===s){cw.push(h,
this.$$store.theme[bY],
n);
cw.push(m,
this.$$store.theme[bY],
b);
}else if(cs===k&&cy){cw.push(e,
this.$$store.init[bY],
d);
}}else{if(ca.inheritable){cw.push(bD,
this.$$store.inherit[bY],
b);
}else{cw.push(bc);
}cw.push(h,
this.$$store.user[bY],
v);
if(cs===f){if(!ca.inheritable){cw.push(u,
this.$$store.user[bY],
b);
}cw.push(c,
this.$$store.user[bY],
d);
}else if(cs===x){if(!ca.inheritable){cw.push(u,
this.$$store.user[bY],
b);
}cw.push(m,
this.$$store.user[bY],
b);
cw.push(h,
this.$$store.theme[bY],
n);
cw.push(c,
this.$$store.theme[bY],
b);
cw.push(r,
this.$$store.init[bY],
v);
cw.push(c,
this.$$store.init[bY],
b);
cw.push(e,
this.$$store.useinit[bY],
w);
cw.push(j);
}else{if(ca.inheritable){cw.push(c,
this.$$store.user[bY],
b);
}else{cw.push(N,
this.$$store.user[bY],
b);
}if(cs===g){cw.push(e,
this.$$store.theme[bY],
d);
}else if(cs===s){cw.push(m,
this.$$store.theme[bY],
b);
}else if(cs===k&&cy){cw.push(e,
this.$$store.init[bY],
d);
}}cw.push(j);
if(ca.themeable){cw.push(r,
this.$$store.theme[bY],
v);
if(!ca.inheritable){cw.push(u,
this.$$store.theme[bY],
b);
}
if(cs===f){cw.push(c,
this.$$store.user[bY],
d);
}else if(cs===g){cw.push(c,
this.$$store.theme[bY],
d);
}else if(cs===s){cw.push(m,
this.$$store.theme[bY],
b);
cw.push(h,
this.$$store.init[bY],
v);
cw.push(c,
this.$$store.init[bY],
b);
cw.push(e,
this.$$store.useinit[bY],
w);
cw.push(j);
}else if(cs===k){if(cy){cw.push(e,
this.$$store.init[bY],
d);
}cw.push(c,
this.$$store.theme[bY],
b);
}else if(cs===t){cw.push(c,
this.$$store.theme[bY],
b);
}cw.push(j);
}cw.push(r,
this.$$store.useinit[bY],
bk);
if(!ca.inheritable){cw.push(u,
this.$$store.init[bY],
b);
}
if(cs===k){if(cy){cw.push(c,
this.$$store.init[bY],
d);
}else{cw.push(c,
this.$$store.init[bY],
b);
}}else if(cs===f||cs===g||cs===t){cw.push(m,
this.$$store.useinit[bY],
b);
if(cs===f){cw.push(c,
this.$$store.user[bY],
d);
}else if(cs===g){cw.push(c,
this.$$store.theme[bY],
d);
}else if(cs===t){cw.push(c,
this.$$store.init[bY],
b);
}}cw.push(j);
if(cs===f||cs===g||cs===k){cw.push(H);
if(cs===f){cw.push(c,
this.$$store.user[bY],
d);
}else if(cs===g){cw.push(c,
this.$$store.theme[bY],
d);
}else if(cs===k){if(cy){cw.push(c,
this.$$store.init[bY],
d);
}else{cw.push(c,
this.$$store.init[bY],
b);
}cw.push(e,
this.$$store.useinit[bY],
w);
}cw.push(j);
}}
if(ca.inheritable){cw.push(bl);
if(cs===t){cw.push(bg);
}else{cw.push(bv,
this.$$store.inherit[bY],
b);
}cw.push(bN);
cw.push(e,
this.$$store.init[bY],
bs);
cw.push(e,
this.$$store.init[bY],
bm);
cw.push(c,
this.$$store.init[bY],
b);
cw.push(e,
this.$$store.useinit[bY],
w);
cw.push(by);
cw.push(m,
this.$$store.useinit[bY],
bi);
cw.push(j);
cw.push(z);
cw.push(M);
cw.push(bd,
this.$$store.inherit[bY],
b);
cw.push(j);
cw.push(S);
cw.push(m,
this.$$store.inherit[bY],
b);
cw.push(X,
this.$$store.inherit[bY],
J);
cw.push(bx);
cw.push(A);
cw.push(B);
}else if(cA){if(cs!==f&&cs!==g){cw.push(B);
}cw.push(z);
cw.push(A);
}if(cA){if(ca.apply){cw.push(e,
ca.apply,
bn,
bY,
bu);
}if(ca.event){cw.push(C,
bp,
ca.event,
W,
bO,
ca.event,
bw,
bI);
}if(ca.inheritable&&cc._getChildren){cw.push(F);
cw.push(R,
this.$$method.refresh[bY],
br,
this.$$method.refresh[bY],
L);
cw.push(j);
}}if(cy){cw.push(bo);
}return this.__bb(cv,
cc,
bY,
cs,
cw,
cx);
}},
settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var c="qx.core.ObjectRegistry";
qx.Bootstrap.define(c,
{statics:{__O:{},
__P:0,
register:function(d){var e=this.__O;
if(!e){return;
}var f=d.$$hash;
if(f==null){f=d.$$hash=(this.__P++).toString(36);
}
if(!d.dispose){throw new Error("Invalid object: "+d);
}e[f]=d;
},
unregister:function(d){var f=d.$$hash;
if(f==null){return;
}var e=this.__O;
if(e&&e[f]){delete e[f];
}},
toHashCode:function(d){{};
if(d.$$hash!=null){return d.$$hash;
}return d.$$hash=(this.__P++).toString(36);
},
fromHashCode:function(f){return this.__O[f]||null;
},
shutdown:function(){var e=this.__O;
var g=[];
for(var f in e){g.push(f);
}g.sort(function(h,
j){return parseInt(j,
36)-parseInt(h,
36);
});
var d,
k=0,
m=g.length;
while(true){try{for(;k<m;k++){f=g[k];
d=e[f];
if(d&&d.dispose){d.dispose();
}}}catch(ex){qx.log.Logger.error(this,
"Could not dispose object "+d.toString()+": "+ex);
if(k!==0){continue;
}}break;
}qx.log.Logger.debug(this,
"Disposed "+m+" objects");
delete this.__O;
},
getRegistry:function(){return this.__O;
}}});
})();
(function(){var a="qx.deprecationWarnings",
b="info",
c="unknown",
d="on",
e="qx.log.Logger",
f="error",
g="\n",
h="warn",
j="debug";
qx.Bootstrap.define(e,
{statics:{__E:50,
__F:"debug",
setLevel:function(k){this.__F=k;
},
getLevel:function(){return this.__F;
},
setTreshold:function(k){this.__E=k;
},
getTreshold:function(){return this.__E;
},
__G:{},
__H:0,
register:function(m){if(m.$$id){return;
}var n=this.__H++;
this.__G[n]=m;
m.$$id=n;
var o=this.__I;
for(var p=0,
q=o.length;p<q;p++){m.process(o[p]);
}},
unregister:function(m){var n=m.$$id;
if(n==null){return;
}delete this.__G[n];
delete m.$$id;
},
debug:function(r,
s){this.__K(j,
arguments);
},
info:function(r,
s){this.__K(b,
arguments);
},
warn:function(r,
s){this.__K(h,
arguments);
},
error:function(r,
s){this.__K(f,
arguments);
},
trace:function(r){this.__K(b,
[r,
qx.dev.StackTrace.getStackTrace().join(g)]);
},
deprecatedMethodWarning:function(t,
u){if(qx.core.Variant.isSet(a,
d)){var v=qx.lang.Function.getName(t);
var w=t.self?t.self.classname:c;
this.warn("The method '"+v+"' of class '"+w+"' is deprecated: "+u||"Please consult the API documentation of this method for alternatives.");
this.trace();
}},
deprecatedClassWarning:function(x,
u){if(qx.core.Variant.isSet(a,
d)){var w=x.self?x.self.classname:c;
this.warn("The method class '"+w+"' is deprecated: "+u||"Please consult the API documentation of this class for alternatives.");
this.trace();
}},
clear:function(){this.__I=[];
},
__I:[],
__J:{debug:0,
info:1,
warn:2,
error:3},
__K:function(y,
z){var A=this.__J;
if(A[y]<A[this.__F]){return;
}var r=z.length<2?null:z[0];
var B=r?1:0;
var C=[];
for(var p=B,
q=z.length;p<q;p++){C.push(this.__M(z[p],
true));
}var D=new Date;
var E={time:D,
offset:D-qx.Bootstrap.LOADSTART,
level:y,
items:C};
if(r){if(r instanceof qx.core.Object){E.object=r.$$hash;
}else if(r.$$type){E.clazz=r;
}}var o=this.__I;
o.push(E);
if(o.length>(this.__E+10)){o.splice(this.__E,
o.length);
}var m=this.__G;
for(var n in m){m[n].process(E);
}},
__L:function(k){if(k===undefined){return "undefined";
}else if(k===null){return "null";
}
if(k.$$type){return "class";
}var F=typeof k;
if(F==="function"||F=="string"||F==="number"||F==="boolean"){return F;
}else if(F==="object"){if(k.nodeType){return "node";
}else if(k.classname){return "instance";
}else if(k instanceof Array){return "array";
}else if(k instanceof Error){return "error";
}else{return "map";
}}
if(k.toString){return "stringify";
}return "unknown";
},
__M:function(k,
G){var F=this.__L(k);
var H="unknown";
switch(F){case "null":case "undefined":H=F;
break;
case "string":case "number":case "boolean":H=k;
break;
case "node":if(k.nodeType===9){H="document";
}else if(k.nodeType===3){H="text["+k.nodeValue+"]";
}else if(k.nodeType===1){H=k.nodeName.toLowerCase();
if(k.id){H+="#"+k.id;
}}else{H="node";
}break;
case "function":H=qx.lang.Function.getName(k)||F;
break;
case "instance":H=k.basename+"["+k.$$hash+"]";
break;
case "class":case "stringify":case "error":H=k.toString();
break;
case "array":if(G){H=[];
for(var p=0,
q=k.length;p<q;p++){if(H.length>20){H.push("...(+"+(q-p)+")");
break;
}H.push(this.__M(k[p],
false));
}}else{H="[...("+k.length+")]";
}break;
case "map":if(G){var I;
var J=[];
for(var K in k){J.push(K);
}J.sort();
H=[];
for(var p=0,
q=J.length;p<q;p++){if(H.length>20){H.push("...(+"+(q-p)+")");
break;
}K=J[p];
I=this.__M(k[K],
false);
I.key=K;
H.push(I);
}}else{var L=0;
for(var K in k){L++;
}H="{...("+L+")}";
}break;
}return {type:F,
text:H};
}}});
})();
(function(){var a="qx.core.Object",
b="]",
c="[",
d="__userData",
f="string",
g="Object";
qx.Class.define(a,
{extend:Object,
construct:function(){qx.core.ObjectRegistry.register(this);
},
statics:{$$type:g},
members:{toHashCode:function(){return this.$$hash;
},
toString:function(){return this.classname+c+this.$$hash+b;
},
base:function(h,
j){if(arguments.length===1){return h.callee.base.call(this);
}else{return h.callee.base.apply(this,
Array.prototype.slice.call(arguments,
1));
}},
self:function(h){return h.callee.self;
},
clone:function(){var k=this.constructor;
var m=new k;
var n=qx.Class.getProperties(k);
var o=qx.core.Property.$$store.user;
var p=qx.core.Property.$$method.set;
var q;
for(var r=0,
s=n.length;r<s;r++){q=n[r];
if(this.hasOwnProperty(o[q])){m[p[q]](this[o[q]]);
}}return m;
},
serialize:function(){var k=this.constructor;
var n=qx.Class.getProperties(k);
var o=qx.core.Property.$$store.user;
var p=qx.core.Property.$$method.set;
var q;
var t={classname:k.classname,
properties:{}};
for(var r=0,
s=n.length;r<s;r++){q=n[r];
if(this.hasOwnProperty(o[q])){v=this[o[q]];
if(v instanceof qx.core.Object){t.properties[q]={$$hash:v.$$hash};
}else{t.properties[q]=v;
}}}return t;
},
set:function(u,
v){var p=qx.core.Property.$$method.set;
if(typeof u===f){{};
return this[p[u]](v);
}else{for(var w in u){{};
this[p[w]](u[w]);
}return this;
}},
get:function(w){var x=qx.core.Property.$$method.get;
{};
return this[x[w]]();
},
reset:function(w){var y=qx.core.Property.$$method.reset;
{};
this[y[w]]();
},
__bc:qx.event.Registration,
addListener:function(z,
A,
B,
C){if(!this.$$disposed){this.__bc.addListener(this,
z,
A,
B,
C);
}},
addListenerOnce:function(z,
A,
B,
C){var D=function(E){A.call(B||this,
E);
this.removeListener(z,
D,
this,
C);
};
this.addListener(z,
D,
this,
C);
},
removeListener:function(z,
A,
B,
C){if(!this.$$disposed){this.__bc.removeListener(this,
z,
A,
B,
C);
}},
hasListener:function(z,
C){return this.__bc.hasListener(this,
z,
C);
},
dispatchEvent:function(F){if(!this.$$disposed){return this.__bc.dispatchEvent(this,
F);
}return true;
},
fireEvent:function(z,
k,
h){if(!this.$$disposed){return this.__bc.fireEvent(this,
z,
k,
h);
}return true;
},
fireNonBubblingEvent:function(z,
k,
h){if(!this.$$disposed){return this.__bc.fireNonBubblingEvent(this,
z,
k,
h);
}return true;
},
fireDataEvent:function(z,
u,
G,
H){if(!this.$$disposed){return this.__bc.fireNonBubblingEvent(this,
z,
qx.event.type.Data,
[u,
G||null,
!!H]);
}return true;
},
setUserData:function(I,
v){if(!this.__userData){this.__userData={};
}this.__userData[I]=v;
},
getUserData:function(I){if(!this.__userData){return null;
}return this.__userData[I];
},
__bd:qx.log.Logger,
debug:function(J){this.__bd.debug(this,
J);
},
info:function(J){this.__bd.info(this,
J);
},
warn:function(J){this.__bd.warn(this,
J);
},
error:function(J){this.__bd.error(this,
J);
},
trace:function(){this.__bd.trace(this);
},
isDisposed:function(){return this.$$disposed||false;
},
dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
{};
var k=this.constructor;
var K;
while(k.superclass){if(k.$$destructor){k.$$destructor.call(this);
}if(k.$$includes){K=k.$$flatIncludes;
for(var r=0,
s=K.length;r<s;r++){if(K[r].$$destructor){K[r].$$destructor.call(this);
}}}k=k.superclass;
}var I,
v;
},
_disposeFields:function(L){qx.util.DisposeUtil.disposeFields(this,
arguments);
},
_disposeObjects:function(L){qx.util.DisposeUtil.disposeObjects(this,
arguments);
},
_disposeArray:function(M){qx.util.DisposeUtil.disposeArray(this,
M);
},
_disposeMap:function(M){qx.util.DisposeUtil.disposeMap(this,
M);
}},
settings:{"qx.disposerDebugLevel":0},
defer:function(N){{};
},
destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(d);
var k=this.constructor;
var O;
var P=qx.core.Property.$$store;
var Q=P.user;
var R=P.theme;
var S=P.inherit;
var T=P.useinit;
var U=P.init;
while(k){O=k.$$properties;
if(O){for(var q in O){if(O[q].dispose){this[Q[q]]=this[R[q]]=this[S[q]]=this[T[q]]=this[U[q]]=undefined;
}}}k=k.superclass;
}}});
})();
(function(){var a="",
b="g",
c="0",
d='\\$1',
e="%",
f='-',
g="qx.lang.String",
h="undefined";
qx.Bootstrap.define(g,
{statics:{camelCase:function(j){return j.replace(/\-([a-z])/g,
function(k,
l){return l.toUpperCase();
});
},
hyphenate:function(j){return j.replace(/[A-Z]/g,
function(k){return (f+k.charAt(0).toLowerCase());
});
},
capitalize:function(j){return j.replace(/\b[a-z]/g,
function(k){return k.toUpperCase();
});
},
trimLeft:function(j){return j.replace(/^\s+/,
a);
},
trimRight:function(j){return j.replace(/\s+$/,
a);
},
trim:function(j){return j.replace(/^\s+|\s+$/g,
a);
},
startsWith:function(m,
n){return m.substring(0,
n.length)===n;
},
endsWith:function(m,
n){return m.substring(m.length-n.length,
m.length)===n;
},
pad:function(j,
o,
p){if(typeof p===h){p=c;
}var q=a;
for(var r=j.length;r<o;r++){q+=p;
}return q+j;
},
firstUp:function(j){return j.charAt(0).toUpperCase()+j.substr(1);
},
firstLow:function(j){return j.charAt(0).toLowerCase()+j.substr(1);
},
contains:function(j,
s){return j.indexOf(s)!=-1;
},
format:function(t,
u){var j=t;
for(var r=0;r<u.length;r++){j=j.replace(new RegExp(e+(r+1),
b),
u[r]);
}return j;
},
escapeRegexpChars:function(j){return j.replace(/([.*+?^${}()|[\]\/\\])/g,
d);
},
toArray:function(j){return j.split(/\B|\b/g);
},
stripTags:function(j){return j.replace(/<\/?[^>]+>/gi,
a);
}}});
})();
(function(){var a="function",
b="]",
c="Interface",
d="[Interface ",
e="qx.Interface";
qx.Class.define(e,
{statics:{define:function(f,
g){if(g){if(g.extend&&!(g.extend instanceof Array)){g.extend=[g.extend];
}{};
var h=g.statics?g.statics:{};
if(g.extend){h.$$extends=g.extend;
}
if(g.properties){h.$$properties=g.properties;
}
if(g.members){h.$$members=g.members;
}
if(g.events){h.$$events=g.events;
}}else{var h={};
}h.$$type=c;
h.name=f;
h.toString=this.genericToString;
h.basename=qx.Bootstrap.createNamespace(f,
h);
qx.Interface.$$registry[f]=h;
return h;
},
getByName:function(f){return this.$$registry[f];
},
isDefined:function(f){return this.getByName(f)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},
flatten:function(j){if(!j){return [];
}var k=j.concat();
for(var m=0,
n=j.length;m<n;m++){if(j[m].$$extends){k.push.apply(k,
this.flatten(j[m].$$extends));
}}return k;
},
assert:function(o,
h,
p){var q=h.$$members;
if(q){var r=o.prototype;
for(var s in q){if(typeof q[s]===a){if(typeof r[s]===a){if(p===true&&!qx.Class.hasInterface(o,
h)){r[s]=this.__be(h,
r[s],
s,
q[s]);
}}else{var t=s.match(/^(get|set|reset)(.*)$/);
if(!t||!qx.Class.hasProperty(o,
qx.lang.String.firstLow(t[2]))){throw new Error('Implementation of method "'+s+'" is missing in class "'+o.classname+'" required by interface "'+h.name+'"');
}}}else{if(typeof r[s]===undefined){if(typeof r[s]!==a){throw new Error('Implementation of member "'+s+'" is missing in class "'+o.classname+'" required by interface "'+h.name+'"');
}}}}}if(h.$$properties){for(var s in h.$$properties){if(!qx.Class.hasProperty(o,
s)){throw new Error('The property "'+s+'" is not supported by Class "'+o.classname+'"!');
}}}if(h.$$events){for(var s in h.$$events){if(!qx.Class.supportsEvent(o,
s)){throw new Error('The event "'+s+'" is not supported by Class "'+o.classname+'"!');
}}}var u=h.$$extends;
if(u){for(var m=0,
n=u.length;m<n;m++){this.assert(o,
u[m],
p);
}}},
genericToString:function(){return d+this.name+b;
},
$$registry:{},
__be:function(){},
__bf:null,
__bg:function(){}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,
{statics:{TARGET_DOMNODE:1,
TARGET_WINDOW:2,
TARGET_OBJECT:3},
members:{canHandleEvent:function(b,
c){},
registerEvent:function(b,
c,
d){},
unregisterEvent:function(b,
c,
d){}}});
})();
(function(){var a="load",
b="unload",
c="ready",
d="shutdown",
f="qx.event.handler.Application",
g="_window";
qx.Class.define(f,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(h){arguments.callee.base.call(this);
this._window=h.getWindow();
this._initObserver();
qx.event.handler.Application.$$instance=this;
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{ready:1,
shutdown:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,
IGNORE_CAN_HANDLE:true,
ready:function(){var i=qx.event.handler.Application.$$instance;
if(i){i.__bh();
}}},
members:{canHandleEvent:function(j,
k){},
registerEvent:function(j,
k,
l){},
unregisterEvent:function(j,
k,
l){},
__bh:function(){if(!this.__isReady){this.__isReady=true;
qx.event.Registration.fireEvent(window,
c);
}},
_initObserver:function(){this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,
this);
this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,
this);
qx.bom.Event.addNativeListener(window,
a,
this._onNativeLoadWrapped);
qx.bom.Event.addNativeListener(window,
b,
this._onNativeUnloadWrapped);
},
_stopObserver:function(){qx.bom.Event.removeNativeListener(window,
a,
this._onNativeLoadWrapped);
qx.bom.Event.removeNativeListener(window,
b,
this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},
_onNativeLoad:function(m){if(!window.qxloader){this.__bh();
}},
_onNativeUnload:function(m){if(!this.__isUnloaded){this.__isUnloaded=true;
qx.event.Registration.fireEvent(window,
d);
qx.core.ObjectRegistry.shutdown();
}}},
destruct:function(){this._stopObserver();
this._disposeFields(g);
},
defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,
{members:{canDispatchEvent:function(b,
c,
d){this.assertInstance(c,
qx.event.type.Event);
this.assertString(d);
},
dispatchEvent:function(b,
c,
d){this.assertInstance(c,
qx.event.type.Event);
this.assertString(d);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.event.IEventDispatcher,
construct:function(b){this._manager=b;
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},
members:{canDispatchEvent:function(c,
d,
e){return !d.getBubbles();
},
dispatchEvent:function(c,
d,
e){d.setEventPhase(qx.event.type.Event.AT_TARGET);
var f=this._manager.getListeners(c,
e,
false);
if(f){for(var g=0,
h=f.length;g<h;g++){var j=f[g].context||c;
f[g].handler.call(j,
d);
}}}},
defer:function(k){qx.event.Registration.addDispatcher(k);
}});
})();
(function(){var a="ready",
b="qx.application",
c="qx.core.Init",
d="shutdown";
qx.Class.define(c,
{statics:{getApplication:function(){return this.__application||null;
},
__cB:function(){qx.log.Logger.debug(this,
"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var e=qx.core.Setting.get(b);
var f=qx.Class.getByName(e);
if(f){this.__application=new f;
var g=new Date;
this.__application.main();
qx.log.Logger.debug(this,
"Main runtime: "+(new Date-g)+"ms");
var g=new Date;
this.__application.finalize();
qx.log.Logger.debug(this,
"Finalize runtime: "+(new Date-g)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+e);
}},
__cC:function(){var e=this.__application;
if(e){e.terminate();
}}},
defer:function(h){qx.event.Registration.addListener(window,
a,
h.__cB,
h);
qx.event.Registration.addListener(window,
d,
h.__cC,
h);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,
{members:{main:function(){},
finalize:function(){},
terminate:function(){}}});
})();
(function(){var a="qx.Mixin",
b="]",
c="Mixin",
d="[Mixin ";
qx.Class.define(a,
{statics:{define:function(e,
f){if(f){if(f.include&&!(f.include instanceof Array)){f.include=[f.include];
}{};
var g=f.statics?f.statics:{};
for(var h in g){g[h].mixin=g;
}if(f.construct){g.$$constructor=f.construct;
}
if(f.include){g.$$includes=f.include;
}
if(f.properties){g.$$properties=f.properties;
}
if(f.members){g.$$members=f.members;
}
for(var h in g.$$members){if(g.$$members[h] instanceof Function){g.$$members[h].mixin=g;
}}
if(f.events){g.$$events=f.events;
}
if(f.destruct){g.$$destructor=f.destruct;
}}else{var g={};
}g.$$type=c;
g.name=e;
g.toString=this.genericToString;
g.basename=qx.Bootstrap.createNamespace(e,
g);
this.$$registry[e]=g;
return g;
},
checkCompatibility:function(j){var k=this.flatten(j);
var m=k.length;
if(m<2){return true;
}var n={};
var o={};
var p={};
var g;
for(var q=0;q<m;q++){g=k[q];
for(var h in g.events){if(p[h]){throw new Error('Conflict between mixin "'+g.name+'" and "'+p[h]+'" in member "'+h+'"!');
}p[h]=g.name;
}
for(var h in g.properties){if(n[h]){throw new Error('Conflict between mixin "'+g.name+'" and "'+n[h]+'" in property "'+h+'"!');
}n[h]=g.name;
}
for(var h in g.members){if(o[h]){throw new Error('Conflict between mixin "'+g.name+'" and "'+o[h]+'" in member "'+h+'"!');
}o[h]=g.name;
}}return true;
},
isCompatible:function(g,
r){var k=qx.Class.getMixins(r);
k.push(g);
return qx.Mixin.checkCompatibility(k);
},
getByName:function(e){return this.$$registry[e];
},
isDefined:function(e){return this.getByName(e)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},
flatten:function(j){if(!j){return [];
}var k=j.concat();
for(var q=0,
s=j.length;q<s;q++){if(j[q].$$includes){k.push.apply(k,
this.flatten(j[q].$$includes));
}}return k;
},
genericToString:function(){return d+this.name+b;
},
$$registry:{},
__bk:null,
__bl:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,
{members:{tr:function(b,
c){var d=qx.locale.Manager;
if(d){return d.tr.apply(d,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},
trn:function(e,
f,
g,
c){var d=qx.locale.Manager;
if(d){return d.trn.apply(d,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},
marktr:function(b){var d=qx.locale.Manager;
if(d){return d.marktr.apply(d,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var a="qx.application.AbstractGui";
qx.Class.define(a,
{extend:qx.core.Object,
implement:[qx.application.IApplication],
include:qx.locale.MTranslation,
members:{__eO:null,
_createRootWidget:function(){throw new Error("Abstract method call");
},
getRoot:function(){return this.__root;
},
main:function(){qx.theme.manager.Meta.getInstance().initialize();
this.__root=this._createRootWidget();
},
finalize:function(){this.render();
},
render:function(){qx.ui.core.queue.Manager.flush();
},
terminate:function(){}}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,
{extend:qx.application.AbstractGui,
members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var a="GET",
b="text/plain",
c="",
d="activate",
e="0",
f="completed",
g="Next",
h="both",
i="/ajax/play?row=",
j="/icons/media-playback-start",
k="center",
l="#",
m="/icons/media-skip-forward",
n="Artist",
o="/ajax/next",
p="Length",
q="/icons/media-playback-pause",
r="Pause",
s=":",
u="/current.xspf",
v="Previous",
w="north",
y="/ajax/previous",
z="cellDblclick",
A="/ajax/savePlaylist",
B="Title",
C="Play",
D="webrok.Application",
E="/ajax/pause",
F="Album",
G="/icons/media-skip-backward",
H="/ajax/start";
qx.Class.define(D,
{extend:qx.application.Standalone,
members:{main:function(){function I(J){function K(L){return ((L>9)?c:e)+L;
}function M(L){return ((L>99)?c:e)+((L>9)?c:e)+L;
}function N(J){var O=Math.floor(J/1000);
var P=Math.floor(O/60);
O=O%60;
var Q=K(O);
var R=Math.floor(P/60);
P=P%60;
Q=K(P)+s+Q;
return Q;
}
if(isNaN(J)){return c;
}else{return N(J);
}}arguments.callee.base.call(this);
var S=qx.log.appender.Native;
this.debug("hello world");
var T=new qx.ui.layout.Dock();
var U=new qx.ui.container.Composite(T);
var V=new qx.ui.toolbar.ToolBar;
V.setShow(h);
var W=new qx.ui.toolbar.Button(v,
G);
W.addListener(d,
function(){var X=new qx.io.remote.Request(y,
a,
b);
X.send();
});
var Y=new qx.ui.toolbar.Button(C,
j);
Y.addListener(d,
function(){var X=new qx.io.remote.Request(H,
a,
b);
X.send();
});
var ba=new qx.ui.toolbar.Button(r,
q);
ba.addListener(d,
function(){var X=new qx.io.remote.Request(E,
a,
b);
X.send();
});
var bb=new qx.ui.toolbar.Button(g,
m);
bb.addListener(d,
function(){var X=new qx.io.remote.Request(o,
a,
b);
X.send();
});
V.add(W);
V.add(Y);
V.add(ba);
V.add(bb);
U.add(V,
{edge:w});
var bc=new qx.ui.table.model.Simple();
bc.setColumns([l,
B,
n,
F,
p]);
var bd=new qx.io.remote.Request(A,
a,
b);
bd.addListener(f,
function(be){this.debug("hello"+be.getStatusCode());
if(be.getStatusCode()!=200){this.error("statuscode was: + "+be.getStatusCode());
return;
}var bf=new qx.io.remote.Request(u,
a,
b);
bf.addListener(f,
function(bg){var bh=XSPF.XMLfromString(bg.getContent());
var bi=XSPF.toJSPF(bh);
this.debug(bi);
this.debug("the length:"+bi.playlist.track.length);
var bj=new Array();
var bk=bi.playlist.track;
for(var bl=0;bl<bk.length;bl++){var bm=[(isNaN(bk[bl].trackNum)?c:bk[bl].trackNum),
bk[bl].title,
bk[bl].creator,
bk[bl].album,
I(bk[bl].duration)];
bj.push(bm);
this.debug("pushing "+bm);
}bc.addRows(bj);
});
bf.send();
});
bd.send();
var bn=new qx.ui.table.Table(bc);
bn.addListener(z,
function(bo){var X=new qx.io.remote.Request(i+bo.getRow(),
a,
b);
X.send();
});
U.add(bn,
{edge:k});
this.getRoot().add(U,
{edge:0});
}}});
})();
(function(){var a='"',
b="qx.lang.Core",
c="\\\\",
d="\\\"",
e="[object Error]";
qx.Bootstrap.define(b);
if(!Error.prototype.toString||Error.prototype.toString()==e){Error.prototype.toString=function(){return this.message;
};
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(f,
g){if(g==null){g=0;
}else if(g<0){g=Math.max(0,
this.length+g);
}
for(var h=g;h<this.length;h++){if(this[h]===f){return h;
}}return -1;
};
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(f,
g){if(g==null){g=this.length-1;
}else if(g<0){g=Math.max(0,
this.length+g);
}
for(var h=g;h>=0;h--){if(this[h]===f){return h;
}}return -1;
};
}
if(!Array.prototype.forEach){Array.prototype.forEach=function(j,
k){var m=this.length;
for(var h=0;h<m;h++){j.call(k,
this[h],
h,
this);
}};
}
if(!Array.prototype.filter){Array.prototype.filter=function(j,
k){var m=this.length;
var n=[];
for(var h=0;h<m;h++){if(j.call(k,
this[h],
h,
this)){n.push(this[h]);
}}return n;
};
}
if(!Array.prototype.map){Array.prototype.map=function(j,
k){var m=this.length;
var n=[];
for(var h=0;h<m;h++){n.push(j.call(k,
this[h],
h,
this));
}return n;
};
}
if(!Array.prototype.some){Array.prototype.some=function(j,
k){var m=this.length;
for(var h=0;h<m;h++){if(j.call(k,
this[h],
h,
this)){return true;
}}return false;
};
}
if(!Array.prototype.every){Array.prototype.every=function(j,
k){var m=this.length;
for(var h=0;h<m;h++){if(!j.call(k,
this[h],
h,
this)){return false;
}}return true;
};
}if(!String.prototype.quote){String.prototype.quote=function(){return a+this.replace(/\\/g,
c).replace(/\"/g,
d)+a;
};
}})();
(function(){var a="qx.lang.Generics";
qx.Bootstrap.define(a,
{statics:{__B:{"Array":["join",
"reverse",
"sort",
"push",
"pop",
"shift",
"unshift",
"splice",
"concat",
"slice",
"indexOf",
"lastIndexOf",
"forEach",
"map",
"filter",
"some",
"every"],
"String":["quote",
"substring",
"toLowerCase",
"toUpperCase",
"charAt",
"charCodeAt",
"indexOf",
"lastIndexOf",
"toLocaleLowerCase",
"toLocaleUpperCase",
"localeCompare",
"match",
"search",
"replace",
"split",
"substr",
"concat",
"slice"]},
__C:function(b,
c){return function(d){return b.prototype[c].apply(d,
Array.prototype.slice.call(arguments,
1));
};
},
__D:function(){var e=qx.lang.Generics.__B;
for(var f in e){var b=window[f];
var g=e[f];
for(var h=0,
j=g.length;h<j;h++){var c=g[h];
if(!b[c]){b[c]=qx.lang.Generics.__C(b,
c);
}}}}},
defer:function(k){k.__D();
}});
})();
(function(){var a=":",
b="qx.client",
c="anonymous",
d="...",
e="qx.dev.StackTrace",
f="\n";
qx.Class.define(e,
{statics:{getStackTrace:qx.core.Variant.select(b,
{"gecko":function(){try{throw new Error();
}catch(e){var g=this.getStackTraceFromError(e);
qx.lang.Array.removeAt(g,
0);
var h=this.getStackTraceFromCaller(arguments);
var j=h.length>g.length?h:g;
for(var k=0;k<Math.min(h.length,
g.length);k++){var l=h[k];
if(l.indexOf(c)>=0){continue;
}var m=l.split(a);
if(m.length!=2){continue;
}var n=m[0];
var o=m[1];
var p=g[k];
var q=p.split(a);
var r=q[0];
var s=q[1];
if(qx.Class.getByName(r)){var t=r;
}else{t=n;
}var u=t+a;
if(o){u+=o+a;
}u+=s;
j[k]=u;
}return j;
}},
"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},
"opera":function(){var v;
try{v.bar();
}catch(e){var j=this.getStackTraceFromError(e);
qx.lang.Array.removeAt(j,
0);
return j;
}return [];
}}),
getStackTraceFromCaller:qx.core.Variant.select(b,
{"opera":function(w){return [];
},
"default":function(w){var j=[];
var x=qx.lang.Function.getCaller(w);
var y={};
while(x){var z=qx.lang.Function.getName(x);
j.push(z);
try{x=x.caller;
}catch(e){break;
}
if(!x){break;
}var A=qx.core.ObjectRegistry.toHashCode(x);
if(y[A]){j.push(d);
break;
}y[A]=x;
}return j;
}}),
getStackTraceFromError:qx.core.Variant.select(b,
{"gecko":function(B){if(!B.stack){return [];
}var C=/@(.+):(\d+)$/gm;
var D;
var j=[];
while((D=C.exec(B.stack))!=null){var E=D[1];
var s=D[2];
var t=this.__N(E);
j.push(t+a+s);
}return j;
},
"webkit":function(B){if(B.sourceURL&&B.line){return [this.__N(B.sourceURL)+a+B.line];
}else{return [];
}},
"opera":function(B){if(B.message.indexOf("Backtrace:")<0){return [];
}var j=[];
var F=qx.lang.String.trim(B.message.split("Backtrace:")[1]);
var G=F.split(f);
for(var k=0;k<G.length;k++){var H=G[k].match(/\s*Line ([0-9]+) of.* (\S.*)/);
if(H&&H.length>=2){var s=H[1];
var I=this.__N(H[2]);
j.push(I+a+s);
}}return j;
},
"default":function(){return [];
}}),
__N:function(I){var J="/source/class/";
var K=I.indexOf(J);
var t=(K==-1)?I:I.substring(K+J.length).replace(/\//g,
".").replace(/\.js$/,
"");
return t;
}}});
})();
(function(){var a="qx.util.ObjectPool",
b="Integer";
qx.Class.define(a,
{extend:qx.core.Object,
construct:function(c){arguments.callee.base.call(this);
this.__pool={};
if(c!==undefined){this.setSize(c);
}},
properties:{size:{check:b,
init:null,
nullable:true}},
members:{getObject:function(d){if(this.$$disposed){return;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__pool[d.classname];
if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},
poolObject:function(e){var g=e.classname;
var f=this.__pool[g];
if(e.$$pooled){throw new Error("Object is already pooled: "+e);
}
if(!f){this.__pool[g]=f=[];
}var c=this.getSize()||Infinity;
if(f.length>c){this.warn("Cannot pool "+e+" because the pool is already full.");
e.dispose();
return;
}e.$$pooled=true;
f.push(e);
}},
destruct:function(){var f=this.__pool;
var g,
h,
j,
k;
for(g in f){h=f[g];
for(j=0,
k=h.length;j<k;j++){h[j].dispose();
}}delete this.__pool;
}});
})();
(function(){var a="singleton",
b="qx.event.Pool";
qx.Class.define(b,
{extend:qx.util.ObjectPool,
type:a,
construct:function(){arguments.callee.base.call(this,
30);
},
members:{__bi:{"qx.legacy.event.type.DragEvent":1,
"qx.legacy.event.type.MouseEvent":1,
"qx.legacy.event.type.KeyEvent":1},
poolObject:function(c){if(this.__bi[c.classname]){return;
}arguments.callee.base.call(this,
c);
}}});
})();
(function(){var a="_originalTarget",
b="_relatedTarget",
c="qx.event.type.Event",
d="_target",
e="_currentTarget";
qx.Class.define(c,
{extend:qx.core.Object,
statics:{CAPTURING_PHASE:1,
AT_TARGET:2,
BUBBLING_PHASE:3},
members:{init:function(f,
g){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!f;
this._cancelable=!!g;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},
clone:function(h){if(h){var i=h;
}else{var i=qx.event.Pool.getInstance().getObject(this.constructor);
}i._type=this._type;
i._target=this._target;
i._currentTarget=this._currentTarget;
i._relatedTarget=this._relatedTarget;
i._originalTarget=this._originalTarget;
i._stopPropagation=this._stopPropagation;
i._bubbles=this._bubbles;
i._preventDefault=this._preventDefault;
i._cancelable=this._cancelable;
return i;
},
stopPropagation:function(){{};
this._stopPropagation=true;
},
getPropagationStopped:function(){return !!this._stopPropagation;
},
preventDefault:function(){{};
this._preventDefault=true;
},
getDefaultPrevented:function(){return !!this._preventDefault;
},
getType:function(){return this._type;
},
setType:function(j){this._type=j;
},
getEventPhase:function(){return this._eventPhase;
},
setEventPhase:function(k){this._eventPhase=k;
},
getTimeStamp:function(){return this._timeStamp;
},
getTarget:function(){return this._target;
},
setTarget:function(l){this._target=l;
},
getCurrentTarget:function(){return this._currentTarget||this._target;
},
setCurrentTarget:function(m){this._currentTarget=m;
},
getRelatedTarget:function(){return this._relatedTarget;
},
setRelatedTarget:function(n){this._relatedTarget=n;
},
getOriginalTarget:function(){return this._originalTarget;
},
setOriginalTarget:function(o){this._originalTarget=o;
},
getBubbles:function(){return this._bubbles;
},
setBubbles:function(p){this._bubbles=p;
},
isCancelable:function(){return this._cancelable;
},
setCancelable:function(g){this._cancelable=g;
}},
destruct:function(){this._disposeFields(d,
e,
b,
a);
}});
})();
(function(){var a="Better use 'getData'",
b="__old",
c="Better use 'getOldData'",
d="__data",
e="qx.event.type.Data";
qx.Class.define(e,
{extend:qx.event.type.Event,
members:{init:function(f,
g,
h){arguments.callee.base.call(this,
false,
h);
this.__data=f;
this.__old=g;
return this;
},
clone:function(i){var j=arguments.callee.base.call(this,
i);
j.__data=this.__data;
j.__old=this.__old;
return j;
},
getData:function(){return this.__data;
},
getOldData:function(){return this.__old;
},
getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
a);
return this.__data;
},
getOldValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
c);
return this.__old;
}},
destruct:function(){this._disposeFields(d,
b);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,
SUPPORTED_TYPES:null,
TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,
IGNORE_CAN_HANDLE:false},
members:{canHandleEvent:function(b,
c){return qx.Class.supportsEvent(b.constructor,
c);
},
registerEvent:function(b,
c,
d){},
unregisterEvent:function(b,
c,
d){}},
defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,
{statics:{disposeFields:function(b,
c){var d;
for(var e=0,
f=c.length;e<f;e++){var d=c[e];
if(b[d]==null||!b.hasOwnProperty(d)){continue;
}b[d]=null;
}},
disposeObjects:function(b,
c){var d;
for(var e=0,
f=c.length;e<f;e++){var d=c[e];
if(b[d]==null||!this.hasOwnProperty(d)){continue;
}b[d].dispose();
b[d]=null;
}},
disposeArray:function(b,
g){var h=b[g];
if(!h){return;
}try{var j;
for(var e=h.length-1;e>=0;e--){j=h[e];
if(j){j.dispose();
}}}catch(ex){throw new Error("The array field: "+g+" of object: "+b+" has non disposable entries: "+ex);
}h.length=0;
b[g]=null;
},
disposeMap:function(b,
g){var h=b[g];
if(!h){return;
}try{for(var k in h){if(h.hasOwnProperty(k)){h[k].dispose();
}}}catch(ex){throw new Error("The map field: "+g+" of object: "+b+" has non disposable entries: "+ex);
}b[g]=null;
}}});
})();
(function(){var a="icons",
b="_applyTheme",
c="qx.colorTheme",
d="qx.iconTheme",
e="qx.appearanceTheme",
f="fonts",
g="appearances",
h="qx.theme",
i="qx.theme.manager.Meta",
j="qx.theme.Classic",
k="meta",
l="qx.decorationTheme",
m="decorations",
n="colors",
o="Theme",
p="qx.fontTheme",
q="changeTheme",
r="singleton",
s="Boolean";
qx.Class.define(i,
{type:r,
extend:qx.core.Object,
properties:{theme:{check:o,
nullable:true,
apply:b,
event:q},
autoSync:{check:s,
init:true}},
members:{_applyTheme:function(t,
u){var v=null;
var w=null;
var x=null;
var y=null;
var z=null;
if(t){v=t.meta.color||null;
w=t.meta.decoration||null;
x=t.meta.font||null;
y=t.meta.icon||null;
z=t.meta.appearance||null;
}var A=qx.theme.manager.Color.getInstance();
var B=qx.theme.manager.Decoration.getInstance();
var C=qx.theme.manager.Font.getInstance();
var D=qx.theme.manager.Icon.getInstance();
var E=qx.theme.manager.Appearance.getInstance();
A.setTheme(v);
B.setTheme(w);
C.setTheme(x);
D.setTheme(y);
E.setAppearanceTheme(z);
},
initialize:function(){var F=qx.core.Setting;
var G,
H;
G=F.get(h);
if(G){H=qx.Theme.getByName(G);
if(!H){throw new Error("The meta theme to use is not available: "+G);
}this.setTheme(H);
}G=F.get(c);
if(G){H=qx.Theme.getByName(G);
if(!H){throw new Error("The color theme to use is not available: "+G);
}qx.theme.manager.Color.getInstance().setTheme(H);
}G=F.get(l);
if(G){H=qx.Theme.getByName(G);
if(!H){throw new Error("The decoration theme to use is not available: "+G);
}qx.theme.manager.Decoration.getInstance().setTheme(H);
}G=F.get(p);
if(G){H=qx.Theme.getByName(G);
if(!H){throw new Error("The font theme to use is not available: "+G);
}qx.theme.manager.Font.getInstance().setTheme(H);
}G=F.get(d);
if(G){H=qx.Theme.getByName(G);
if(!H){throw new Error("The icon theme to use is not available: "+G);
}qx.theme.manager.Icon.getInstance().setTheme(H);
}G=F.get(e);
if(G){H=qx.Theme.getByName(G);
if(!H){throw new Error("The appearance theme to use is not available: "+G);
}qx.theme.manager.Appearance.getInstance().setAppearanceTheme(H);
}},
__eP:function(I){var J=qx.Theme.getAll();
var G;
var K=[];
for(var L in J){G=J[L];
if(G[I]){K.push(G);
}}return K;
},
getMetaThemes:function(){return this.__eP(k);
},
getColorThemes:function(){return this.__eP(n);
},
getDecorationThemes:function(){return this.__eP(m);
},
getFontThemes:function(){return this.__eP(f);
},
getIconThemes:function(){return this.__eP(a);
},
getAppearanceThemes:function(){return this.__eP(g);
}},
settings:{"qx.theme":j,
"qx.colorTheme":null,
"qx.decorationTheme":null,
"qx.fontTheme":null,
"qx.appearanceTheme":null,
"qx.iconTheme":null}});
})();
(function(){var a="_dynamic",
b="qx.util.ValueManager",
c="abstract";
qx.Class.define(b,
{type:c,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},
members:{resolveDynamic:function(d){return this._dynamic[d];
},
isDynamic:function(d){return !!this._dynamic[d];
},
resolve:function(d){if(d&&this._dynamic[d]){return this._dynamic[d];
}return d;
}},
destruct:function(){this._disposeFields(a);
}});
})();
(function(){var a="_applyTheme",
b="qx.theme.manager.Color",
c="Theme",
d="changeTheme",
e="string",
f="singleton";
qx.Class.define(b,
{type:f,
extend:qx.util.ValueManager,
properties:{theme:{check:c,
nullable:true,
apply:a,
event:d}},
members:{_applyTheme:function(g){var h=this._dynamic={};
if(g){var i=g.colors;
var j=qx.util.ColorUtil;
var k;
for(var l in i){k=i[l];
if(typeof k===e){if(!j.isCssString(k)){throw new Error("Could not parse color: "+k);
}}else if(k instanceof Array){k=j.rgbToRgbString(k);
}else{throw new Error("Could not parse color: "+k);
}h[l]=k;
}}}}});
})();
(function(){var a=",",
c="rgb(",
d=")",
e="qx.theme.manager.Color",
h="qx.util.ColorUtil";
qx.Class.define(h,
{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},
SYSTEM:{activeborder:true,
activecaption:true,
appworkspace:true,
background:true,
buttonface:true,
buttonhighlight:true,
buttonshadow:true,
buttontext:true,
captiontext:true,
graytext:true,
highlight:true,
highlighttext:true,
inactiveborder:true,
inactivecaption:true,
inactivecaptiontext:true,
infobackground:true,
infotext:true,
menu:true,
menutext:true,
scrollbar:true,
threeddarkshadow:true,
threedface:true,
threedhighlight:true,
threedlightshadow:true,
threedshadow:true,
window:true,
windowframe:true,
windowtext:true},
NAMED:{black:[0,
0,
0],
silver:[192,
192,
192],
gray:[128,
128,
128],
white:[255,
255,
255],
maroon:[128,
0,
0],
red:[255,
0,
0],
purple:[128,
0,
128],
fuchsia:[255,
0,
255],
green:[0,
128,
0],
lime:[0,
255,
0],
olive:[128,
128,
0],
yellow:[255,
255,
0],
navy:[0,
0,
128],
blue:[0,
0,
255],
teal:[0,
128,
128],
aqua:[0,
255,
255],
transparent:[-1,
-1,
-1],
grey:[128,
128,
128],
magenta:[255,
0,
255],
orange:[255,
165,
0],
brown:[165,
42,
42]},
isNamedColor:function(j){return this.NAMED[j]!==undefined;
},
isSystemColor:function(j){return this.SYSTEM[j]!==undefined;
},
supportsThemes:function(){return qx.Class.isDefined(e);
},
isThemedColor:function(j){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(j);
},
stringToRgb:function(k){if(this.supportsThemes()&&this.isThemedColor(k)){var k=qx.theme.manager.Color.getInstance().resolveDynamic(k);
}
if(this.isNamedColor(k)){return this.NAMED[k];
}else if(this.isSystemColor(k)){throw new Error("Could not convert system colors to RGB: "+k);
}else if(this.isRgbString(k)){return this.__cF();
}else if(this.isHex3String(k)){return this.__cG();
}else if(this.isHex6String(k)){return this.__cH();
}throw new Error("Could not parse color: "+k);
},
cssStringToRgb:function(k){if(this.isNamedColor(k)){return this.NAMED[k];
}else if(this.isSystemColor(k)){throw new Error("Could not convert system colors to RGB: "+k);
}else if(this.isRgbString(k)){return this.__cF();
}else if(this.isHex3String(k)){return this.__cG();
}else if(this.isHex6String(k)){return this.__cH();
}throw new Error("Could not parse color: "+k);
},
stringToRgbString:function(k){return this.rgbToRgbString(this.stringToRgb(k));
},
rgbToRgbString:function(l){return c+l[0]+a+l[1]+a+l[2]+d;
},
rgbToHexString:function(l){return (qx.lang.String.pad(l[0].toString(16).toUpperCase(),
2)+qx.lang.String.pad(l[1].toString(16).toUpperCase(),
2)+qx.lang.String.pad(l[2].toString(16).toUpperCase(),
2));
},
isValid:function(k){return this.isThemedColor(k)||this.isCssString(k);
},
isCssString:function(k){return this.isSystemColor(k)||this.isNamedColor(k)||this.isHex3String(k)||this.isHex6String(k)||this.isRgbString(k);
},
isHex3String:function(k){return this.REGEXP.hex3.test(k);
},
isHex6String:function(k){return this.REGEXP.hex6.test(k);
},
isRgbString:function(k){return this.REGEXP.rgb.test(k);
},
__cF:function(){var m=parseInt(RegExp.$1,
10);
var n=parseInt(RegExp.$2,
10);
var o=parseInt(RegExp.$3,
10);
return [m,
n,
o];
},
__cG:function(){var m=parseInt(RegExp.$1,
16)*17;
var n=parseInt(RegExp.$2,
16)*17;
var o=parseInt(RegExp.$3,
16)*17;
return [m,
n,
o];
},
__cH:function(){var m=(parseInt(RegExp.$1,
16)*16)+parseInt(RegExp.$2,
16);
var n=(parseInt(RegExp.$3,
16)*16)+parseInt(RegExp.$4,
16);
var o=(parseInt(RegExp.$5,
16)*16)+parseInt(RegExp.$6,
16);
return [m,
n,
o];
},
hex3StringToRgb:function(j){if(this.isHex3String(j)){return this.__cG(j);
}throw new Error("Invalid hex3 value: "+j);
},
hex6StringToRgb:function(j){if(this.isHex6String(j)){return this.__cH(j);
}throw new Error("Invalid hex6 value: "+j);
},
hexStringToRgb:function(j){if(this.isHex3String(j)){return this.__cG(j);
}
if(this.isHex6String(j)){return this.__cH(j);
}throw new Error("Invalid hex value: "+j);
},
rgbToHsb:function(l){var s,
u,
v;
var m=l[0];
var n=l[1];
var o=l[2];
var w=(m>n)?m:n;
if(o>w){w=o;
}var x=(m<n)?m:n;
if(o<x){x=o;
}v=w/255.0;
if(w!=0){u=(w-x)/w;
}else{u=0;
}
if(u==0){s=0;
}else{var y=(w-m)/(w-x);
var z=(w-n)/(w-x);
var A=(w-o)/(w-x);
if(m==w){s=A-z;
}else if(n==w){s=2.0+y-A;
}else{s=4.0+z-y;
}s=s/6.0;
if(s<0){s=s+1.0;
}}return [Math.round(s*360),
Math.round(u*100),
Math.round(v*100)];
},
hsbToRgb:function(B){var C,
D,
E,
F,
G;
var s=B[0]/360;
var u=B[1]/100;
var v=B[2]/100;
if(s>=1.0){s%=1.0;
}
if(u>1.0){u=1.0;
}
if(v>1.0){v=1.0;
}var H=Math.floor(255*v);
var l={};
if(u==0.0){l.red=l.green=l.blue=H;
}else{s*=6.0;
C=Math.floor(s);
D=s-C;
E=Math.floor(H*(1.0-u));
F=Math.floor(H*(1.0-(u*D)));
G=Math.floor(H*(1.0-(u*(1.0-D))));
switch(C){case 0:l.red=H;
l.green=G;
l.blue=E;
break;
case 1:l.red=F;
l.green=H;
l.blue=E;
break;
case 2:l.red=E;
l.green=H;
l.blue=G;
break;
case 3:l.red=E;
l.green=F;
l.blue=H;
break;
case 4:l.red=G;
l.green=E;
l.blue=H;
break;
case 5:l.red=H;
l.green=E;
l.blue=F;
break;
}}return l;
},
randomColor:function(){var I=Math.round(Math.random()*255);
var J=Math.round(Math.random()*255);
var K=Math.round(Math.random()*255);
return this.rgbToRgbString([I,
J,
K]);
}}});
})();
(function(){var a="decoration",
b="object",
c="_applyTheme",
d="qx.theme.manager.Decoration",
e="Theme",
f="changeTheme",
g="singleton";
qx.Class.define(d,
{type:g,
extend:qx.util.ValueManager,
properties:{theme:{check:e,
nullable:true,
apply:c,
event:f}},
members:{resolveDynamic:function(h){return typeof h===b?h:this._dynamic[h];
},
isDynamic:function(h){return h&&(typeof h==b||this._dynamic[h]!==undefined);
},
_applyTheme:function(h){var i=this._dynamic;
for(var j in i){if(i[j].themed){i[j].dispose();
delete i[j];
}}
if(h){var k=h.decorations;
for(var j in k){var l=k[j].style;
var m=k[j].decorator;
if(m===undefined){m=qx.ui.decoration.Uniform;
}{};
i[j]=(new m).set(l);
i[j].themed=true;
}}var n=qx.util.AliasManager.getInstance();
h?n.add(a,
h.resource):n.remove(a);
}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,
{members:{render:function(b,
c,
d,
e,
f){},
reset:function(b){},
getInsets:function(){}}});
})();
(function(){var a="abstract",
b="qx.ui.decoration.Abstract";
qx.Class.define(b,
{type:a,
extend:qx.core.Object,
implement:[qx.ui.decoration.IDecorator],
members:{_resolveColor:function(c){return qx.theme.manager.Color.getInstance().resolve(c);
}}});
})();
(function(){var a="repeat",
b="Color",
c="solid",
d="dotted",
e="double",
f="backgroundColor",
g="dashed",
h="",
i="qx.ui.decoration.Uniform",
j="repeat-y",
k="px ",
l="no-repeat",
m=" ",
n="repeat-x",
o="Number",
p="String",
q="border";
qx.Class.define(i,
{extend:qx.ui.decoration.Abstract,
properties:{width:{check:o,
init:0},
style:{nullable:true,
check:[c,
d,
g,
e],
init:c},
color:{nullable:true,
check:b},
backgroundColor:{nullable:true,
check:b},
backgroundImage:{check:p,
nullable:true},
backgroundRepeat:{check:[a,
n,
j,
l],
init:a}},
members:{render:function(r,
s,
t,
u,
v){if(v.style||v.init){r.setStyle(q,
this.getWidth()+k+this.getStyle()+m+(this._resolveColor(this.getColor())||h));
var w=qx.util.AliasManager.getInstance().resolve(this.getBackgroundImage());
var x=qx.bom.element.Background.getStyles(w,
this.getBackgroundRepeat());
r.setStyles(x);
}
if(v.bgcolor||v.init){r.setStyle(f,
this._resolveColor(u||this.getBackgroundColor())||null);
}
if(v.size||v.init){var y=2*this.getWidth();
qx.ui.decoration.Util.updateSize(r,
s,
t,
y,
y);
}},
_emptyStyles:{border:null,
backgroundImage:null,
backgroundRepeat:null,
backgroundColor:null},
reset:function(r){r.setStyles(this._emptyStyles);
},
getInsets:function(){var s=this.getWidth();
return {top:s,
right:s,
bottom:s,
left:s};
}}});
})();
(function(){var a="/",
b="_aliases",
c="0",
d="qx/static",
e="http://",
f="https://",
g="file://",
h="qx.util.AliasManager",
i="singleton",
j=".",
k="static";
qx.Class.define(h,
{type:i,
extend:qx.util.ValueManager,
construct:function(){arguments.callee.base.call(this);
this._aliases={};
this.add(k,
d);
},
members:{_preprocess:function(l){var m=this._dynamic;
if(m[l]===false){return l;
}else if(m[l]===undefined){if(l.charAt(0)===a||l.charAt(0)===j||l.indexOf(e)===0||l.indexOf(f)===c||l.indexOf(g)===0){m[l]=false;
return l;
}var n=l.substring(0,
l.indexOf(a));
var o=this._aliases[n];
if(o!==undefined){m[l]=o+l.substring(n.length);
}}return l;
},
add:function(n,
p){this._aliases[n]=p;
var m=this._dynamic;
var q={};
for(var r in m){if(r.substring(0,
r.indexOf(a))===n){m[r]=p+r.substring(n.length);
q[r]=true;
}}},
remove:function(n){delete this._aliases[n];
},
resolve:function(r){if(r!==null){r=this._preprocess(r);
}return this._dynamic[r]||r;
}},
destruct:function(){this._disposeFields(b);
}});
})();
(function(){var a="px",
b="0px",
c="qx.client",
d="/",
e="mshtml",
f="",
g=" ",
h=";",
i="background-image:url(",
j=");",
k="0 0",
l="url(",
m=")",
n="background-repeat:",
o="qx.bom.element.Background",
p="background-position:",
q="https:";
qx.Class.define(o,
{statics:{__cI:[i,
null,
j,
p,
null,
h,
n,
null,
h],
compile:function(r,
s,
t,
u){var v=qx.bom.client.Engine;
if(v.GECKO&&v.VERSION<1.9&&t==u&&t!=null){u+=0.01;
}
if(t!=null||u!=null){var w=(t==null?b:t+a)+g+(u==null?b:u+a);
}else{w=k;
}var x=qx.util.ResourceManager.toUri(r);
if(qx.core.Variant.isSet(c,
e)){x=this.__cJ(x);
}var y=this.__cI;
y[1]=x;
y[4]=w;
y[7]=s;
return y.join(f);
},
getStyles:function(r,
s,
t,
u){var v=qx.bom.client.Engine;
if(v.GECKO&&v.VERSION<1.9&&t==u&&t!=null){u+=0.01;
}
if(t!=null||u!=null){var w=(t==null?b:t+a)+g+(u==null?b:u+a);
}var x=qx.util.ResourceManager.toUri(r);
if(qx.core.Variant.isSet(c,
e)){x=this.__cJ(x);
}return {backgroundImage:l+x+m,
backgroundPosition:w||null,
backgroundRepeat:s||null};
},
set:function(z,
r,
s,
t,
u){var A=this.getStyles(r,
s,
t,
u);
for(var B in A){z.style[B]=A[B];
}},
__cJ:qx.core.Variant.select(c,
{"mshtml":function(C){var D=f;
if(window.location.protocol===q){if(C.match(/^\/\//)!=null){D=window.location.protocol;
}else if(C.match(/^\.\//)!=null){C=C.substring(C.indexOf(d));
D=document.URL.substring(0,
document.URL.lastIndexOf(d));
}else{D=window.location.href.substring(0,
window.location.href.lastIndexOf(d)+1);
}}return D+C;
},
"default":function(){}})}});
})();
(function(){var a="/",
b="qx.util.ResourceManager",
c="string";
qx.Bootstrap.define(b,
{statics:{__cK:window.qxresourceinfo||{},
registerImage:function(d,
e,
f){if(this.__cK[d]){return;
}qx.log.Logger.debug("Dynamically registering: "+d);
this.__cK[d]=[e,
f];
},
has:function(g){return !!this.__cK[g];
},
getData:function(g){return this.__cK[g]||null;
},
getClipped:function(g){var h=this.__cK[g];
if(!h){return null;
}var e=h[0];
var f=h[1];
var i=h[2];
if(h.length<5){var j=0;
var k=0;
}else{g=h[4];
var j=h[5];
var k=h[6];
}return [g,
j,
k,
e,
f,
i];
},
toUri:function(g){if(g==null){return g;
}var h=this.__cK[g];
if(!h){return g;
}
if(typeof h===c){var l=h;
}else{var l=h[3];
if(!l){return g;
}}return window.qxlibraries[l].resourceUri+a+g;
}}});
})();
(function(){var a="px",
b="mshtml",
c="border-box",
d="width",
e="height",
f="boxSizing",
g="qx.client",
h="qx.ui.decoration.Util";
qx.Class.define(h,
{statics:{updateSize:function(i,
j,
k,
l,
m){if(qx.core.Variant.isSet(g,
b)){if(qx.bom.client.Feature.CONTENT_BOX){j-=l;
k-=m;
}}else{i.setStyle(f,
c);
}i.setStyle(d,
j+a);
i.setStyle(e,
k+a);
}}});
})();
(function(){var a="qx.bom.client.Feature";
qx.Bootstrap.define(a,
{statics:{STANDARD_MODE:false,
QUIRKS_MODE:false,
CONTENT_BOX:false,
BORDER_BOX:false,
SVG:false,
CANVAS:false,
VML:false,
XPATH:false,
__cL:function(){this.STANDARD_MODE=document.compatMode==="CSS1Compat";
this.QUIRKS_MODE=!this.STANDARD_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("org.w3c.dom.svg",
"1.0");
this.CANVAS=!!window.CanvasRenderingContext2D;
this.VML=qx.bom.client.Engine.MSHTML;
this.AIR=navigator.userAgent.indexOf("adobeair")!==-1;
this.GEARS=!!(window.google&&window.google.gears);
this.XPATH=!!document.evaluate;
}},
defer:function(b){b.__cL();
}});
})();
(function(){var a="qx.theme.manager.Font",
b="Theme",
c="changeTheme",
d="_applyTheme",
e="singleton";
qx.Class.define(a,
{type:e,
extend:qx.util.ValueManager,
properties:{theme:{check:b,
nullable:true,
apply:d,
event:c}},
members:{resolveDynamic:function(f){return f instanceof qx.bom.Font?f:this._dynamic[f];
},
isDynamic:function(f){return f&&(f instanceof qx.bom.Font||this._dynamic[f]!==undefined);
},
_applyTheme:function(f){var g=this._dynamic;
for(var h in g){if(g[h].themed){g[h].dispose();
delete g[h];
}}
if(f){var i=f.fonts;
var j=qx.bom.Font;
for(var h in i){g[h]=(new j).set(i[h]);
g[h].themed=true;
}}}}});
})();
(function(){var a="",
b="underline",
c="Boolean",
d="px",
e='"',
f="italic",
g="normal",
h="bold",
j="_applyItalic",
k="_applyBold",
m="Integer",
n="_applyFamily",
o="_applyLineHeight",
p="Array",
q="overline",
r="line-through",
s="qx.bom.Font",
t="Number",
u="_applyDecoration",
v=" ",
w="_applySize",
x=",";
qx.Class.define(s,
{extend:qx.core.Object,
construct:function(y,
z){arguments.callee.base.call(this);
if(y!==undefined){this.setSize(y);
}
if(z!==undefined){this.setFamily(z);
}},
statics:{fromString:function(A){var B=new qx.bom.Font();
var C=A.split(/\s+/);
var D=[];
var E;
for(var F=0;F<C.length;F++){switch(E=C[F]){case h:B.setBold(true);
break;
case f:B.setItalic(true);
break;
case b:B.setDecoration(b);
break;
default:var G=parseInt(E,
10);
if(G==E||qx.lang.String.contains(E,
d)){B.setSize(G);
}else{D.push(E);
}break;
}}
if(D.length>0){B.setFamily(D);
}return B;
},
fromConfig:function(H){var B=new qx.bom.Font;
B.set(H);
return B;
},
__cY:{fontFamily:a,
fontSize:a,
fontWeight:a,
fontStyle:a,
textDecoration:a,
lineHeight:1.2},
getDefaultStyles:function(){return this.__cY;
}},
properties:{size:{check:m,
nullable:true,
apply:w},
lineHeight:{check:t,
nullable:true,
apply:o},
family:{check:p,
nullable:true,
apply:n},
bold:{check:c,
nullable:true,
apply:k},
italic:{check:c,
nullable:true,
apply:j},
decoration:{check:[b,
r,
q],
nullable:true,
apply:u}},
members:{__da:null,
__db:null,
__dc:null,
__dd:null,
__de:null,
__df:null,
_applySize:function(I,
J){this.__da=I===null?null:I+d;
},
_applyLineHeight:function(I,
J){this.__df=I===null?null:I;
},
_applyFamily:function(I,
J){var z=a;
for(var F=0,
K=I.length;F<K;F++){if(I[F].indexOf(v)>0){z+=e+I[F]+e;
}else{z+=I[F];
}
if(F!==K-1){z+=x;
}}this.__db=z;
},
_applyBold:function(I,
J){this.__dc=I===null?null:I?h:g;
},
_applyItalic:function(I,
J){this.__dd=I===null?null:I?f:g;
},
_applyDecoration:function(I,
J){this.__de=I===null?null:I;
},
getStyles:function(){return {fontFamily:this.__db,
fontSize:this.__da,
fontWeight:this.__dc,
fontStyle:this.__dd,
textDecoration:this.__de,
lineHeight:this.__df};
}}});
})();
(function(){var a="icon",
b="qx.theme.manager.Icon",
c="_applyTheme",
d="Theme",
e="changeTheme",
f="singleton";
qx.Class.define(b,
{type:f,
extend:qx.core.Object,
properties:{theme:{check:d,
nullable:true,
apply:c,
event:e}},
members:{_applyTheme:function(g,
h){var i=qx.util.AliasManager.getInstance();
g?i.add(a,
g.resource):i.remove(a);
}}});
})();
(function(){var a="string",
b="__styleCache",
c="_applyAppearanceTheme",
d="__aliasMap",
e="qx.theme.manager.Appearance",
f=":",
g="changeAppearanceTheme",
h="Theme",
i="/",
j="singleton";
qx.Class.define(e,
{type:j,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__styleCache={};
this.__aliasMap={};
this.__defaultStates={};
},
properties:{appearanceTheme:{check:h,
nullable:true,
apply:c,
event:g}},
members:{_applyAppearanceTheme:function(k,
l){},
__cM:function(m,
n){var o=n.appearances;
var p=o[m];
if(!p){var q=i;
var r=[];
var s=m.split(q);
var t;
while(!p&&s.length>0){r.unshift(s.pop());
var u=s.join(q);
p=o[u];
if(p){t=p.alias||p;
if(typeof t===a){var v=t+q+r.join(q);
return this.__cM(v,
n);
}}}return null;
}else if(typeof p===a){return this.__cM(p,
n);
}else if(p.include&&!p.style){return this.__cM(p.include,
n);
}return m;
},
styleFrom:function(m,
w,
n){if(!n){n=this.getAppearanceTheme();
}var x=this.__aliasMap;
var y=x[m];
if(!y){y=x[m]=this.__cM(m,
n);
}var p=n.appearances[y];
if(!p){this.warn("Missing appearance: "+m);
return null;
}if(!p.style){return null;
}var z=y;
if(w){var A=p.$$bits;
if(!A){A=p.$$bits={};
p.$$length=0;
}var B=0;
for(var C in w){if(A[C]==null){A[C]=1<<p.$$length++;
}B+=A[C];
}if(B>0){z+=f+B;
}}var D=this.__styleCache;
if(D[z]!==undefined){return D[z];
}if(!w){w=this.__defaultStates;
}var E;
if(p.include||p.base){var F=p.style(w);
var G;
if(p.include){G=this.styleFrom(p.include,
w,
n);
}E={};
if(p.base){var H=this.styleFrom(y,
w,
p.base);
if(p.include){for(var I in H){if(G[I]===undefined&&F[I]===undefined){E[I]=H[I];
}}}else{for(var I in H){if(F[I]===undefined){E[I]=H[I];
}}}}if(p.include){for(var I in G){if(F[I]===undefined){E[I]=G[I];
}}}for(var I in F){E[I]=F[I];
}}else{E=p.style(w);
}return D[z]=E||null;
}},
destruct:function(){this._disposeFields(b,
d);
}});
})();
(function(){var b="other",
c="widgets",
d="fonts",
e="appearances",
f="qx.Theme",
g="]",
h="[Theme ",
j="colors",
k="decorations",
m="Theme",
n="meta",
o="borders",
p="icons";
qx.Class.define(f,
{statics:{define:function(q,
r){if(!r){var r={};
}
if(r.include&&!(r.include instanceof Array)){r.include=[r.include];
}{};
var s={$$type:m,
name:q,
title:r.title,
toString:this.genericToString};
if(r.extend){s.supertheme=r.extend;
}if(r.resource){s.resource=r.resource;
}s.basename=qx.Bootstrap.createNamespace(q,
s);
this.__eJ(s,
r);
this.$$registry[q]=s;
if(r.include){for(var t=0,
u=r.include,
v=u.length;t<v;t++){this.include(s,
u[t]);
}}},
getAll:function(){return this.$$registry;
},
getByName:function(q){return this.$$registry[q];
},
isDefined:function(q){return this.getByName(q)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},
genericToString:function(){return h+this.name+g;
},
__eI:function(r){for(var t=0,
w=this.__eK,
v=w.length;t<v;t++){if(r[w[t]]){return w[t];
}}},
__eJ:function(s,
r){var x=this.__eI(r);
if(r.extend&&!x){x=r.extend.type;
}s.type=x||b;
if(!x){return;
}var y=function(){};
if(r.extend){y.prototype=new r.extend.$$clazz;
}var z=y.prototype;
var A=r[x];
for(var B in A){z[B]=A[B];
if(z[B].base){{};
z[B].base=r.extend;
}}s.$$clazz=y;
s[x]=new y;
},
$$registry:{},
__eK:[j,
o,
k,
d,
p,
c,
e,
n],
__eL:null,
__eM:null,
__eN:function(){},
patch:function(s,
C){var x=this.__eI(C);
if(x!==this.__eI(s)){throw new Error("The mixins '"+s.name+"' are not compatible '"+C.name+"'!");
}var A=C[x];
var z=s[x];
for(var D in A){z[D]=A[D];
}},
include:function(s,
C){var x=C.type;
if(x!==s.type){throw new Error("The mixins '"+s.name+"' are not compatible '"+C.name+"'!");
}var A=C[x];
var z=s[x];
for(var D in A){if(z[D]!==undefined){throw new Error("It is not allowed to overwrite the key '"+D+"' of theme '"+s.name+"' by mixin theme '"+C.name+"'.");
}z[D]=A[D];
}}}});
})();
(function(){var a="_window",
b="qx.event.handler.UserAction",
c="_manager";
qx.Class.define(b,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(d){arguments.callee.base.call(this);
this._manager=d;
this._window=d.getWindow();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{useraction:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,
IGNORE_CAN_HANDLE:true},
members:{canHandleEvent:function(e,
f){},
registerEvent:function(e,
f,
g){},
unregisterEvent:function(e,
f,
g){}},
destruct:function(){this._disposeFields(c,
a);
},
defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var a="__calls",
b="qx.util.DeferredCallManager",
c="__timeoutWrapper",
d="singleton";
qx.Class.define(b,
{extend:qx.core.Object,
type:d,
construct:function(){this.__calls={};
this.__timeoutWrapper=qx.lang.Function.bind(this.__bt,
this);
this.__hasCalls=false;
},
members:{schedule:function(e){if(this.__timeoutId==null){this.__timeoutId=window.setTimeout(this.__timeoutWrapper,
0);
}var f=e.toHashCode();
if(this.__currentQueue&&this.__currentQueue[f]){return;
}this.__calls[f]=e;
this.__hasCalls=true;
},
cancel:function(e){var f=e.toHashCode();
if(this.__currentQueue&&this.__currentQueue[f]){this.__currentQueue[f]=null;
return;
}delete this.__calls[f];
if(qx.lang.Object.isEmpty(this.__calls)&&this.__timeoutId!=null){window.clearTimeout(this.__timeoutId);
this.__timeoutId=null;
}},
__bt:function(){this.__timeoutId=null;
while(this.__hasCalls){this.__currentQueue=qx.lang.Object.copy(this.__calls);
this.__calls={};
this.__hasCalls=false;
for(var g in this.__currentQueue){var h=this.__currentQueue[g];
if(h){this.__currentQueue[g]=null;
h.call();
}}}this.__currentQueue=null;
}},
destruct:function(){if(this.__timeoutId!=null){window.clearTimeout(this.__timeoutId);
}this._disposeFields(c,
a);
}});
})();
(function(){var a="qx.util.DeferredCall",
b="__callback",
c="__manager",
d="__context";
qx.Class.define(a,
{extend:qx.core.Object,
construct:function(e,
f){arguments.callee.base.call(this);
this.__callback=e;
this.__context=f||null;
this.__manager=qx.util.DeferredCallManager.getInstance();
},
members:{cancel:function(){this.__manager.cancel(this);
},
schedule:function(){this.__manager.schedule(this);
},
call:function(){this.__context?this.__callback.apply(this.__context):this.__callback();
}},
destruct:function(e,
f){this.cancel();
this._disposeFields(d,
b,
c);
}});
})();
(function(){var c="element",
d="-",
e="qx.client",
f="qx.html.Element",
g="focus",
h="div",
j="__attribJobs",
k="_children",
m="__propertyValues",
n="evt-",
o="_parent",
p="capture",
q="",
r="tabIndex",
s="_element",
t="activate",
u="mshtml",
v="__eventValues",
w="none",
z="__propertyJobs",
A="__styleJobs",
B="__attribValues",
C="-capture",
D="__styleValues";
qx.Class.define(f,
{extend:qx.core.Object,
construct:function(E){arguments.callee.base.call(this);
this._nodeName=E||h;
this._children=[];
},
statics:{_debug:false,
_modified:{},
_visibility:{},
_scroll:{},
_actions:{},
_supportedActions:[t,
g,
p],
_scheduleFlush:function(F){qx.html.Element.__deferredCall.schedule();
},
_mshtmlVisibilitySort:qx.core.Variant.select(e,
{"mshtml":function(G,
H){var I=G._element;
var J=H._element;
if(I.contains(J)){return 1;
}
if(J.contains(I)){return -1;
}return 0;
},
"default":null}),
flush:function(){var K;
{};
var L=[];
var M=this._modified;
for(var N in M){K=M[N];
if(K.__bv()){if(K._element&&qx.dom.Hierarchy.isRendered(K._element)){L.push(K);
}else{{};
K.__bu();
}delete M[N];
}}
for(var O=0,
P=L.length;O<P;O++){K=L[O];
{};
K.__bu();
}var Q=this._visibility;
if(qx.core.Variant.isSet(e,
u)){var R=[];
for(var N in Q){R.push(Q[N]);
}if(R.length>1){R.sort(this._mshtmlVisibilitySort);
Q=this._visibility={};
for(var O=0;O<R.length;O++){K=R[O];
Q[K.$$hash]=K;
}}}
for(var N in Q){K=Q[N];
{};
K._element.style.display=K._visible?q:w;
delete Q[N];
}var S=this._scroll;
for(var N in S){K=S[N];
var T=K._element;
if(T&&T.offsetWidth){var U=true;
if(K.__lazyScrollX!=null){K._element.scrollLeft=K.__lazyScrollX;
delete K.__lazyScrollX;
}if(K.__lazyScrollY!=null){K._element.scrollTop=K.__lazyScrollY;
delete K.__lazyScrollY;
}var V=K.__lazyScrollIntoViewX;
if(V!=null){var W=V.element.getDomElement();
if(W&&W.offsetWidth){qx.bom.element.Scroll.intoViewX(W,
T,
V.align);
delete K.__lazyScrollIntoViewX;
}else{U=false;
}}var X=K.__lazyScrollIntoViewY;
if(X!=null){var W=X.element.getDomElement();
if(W&&W.offsetWidth){qx.bom.element.Scroll.intoViewY(W,
T,
X.align);
delete K.__lazyScrollIntoViewY;
}else{U=false;
}}if(U){delete S[N];
}}}var Y=this._actions;
var ba=this._supportedActions;
var bb,
bc;
for(var O=0,
P=ba.length;O<P;O++){bb=ba[O];
if(Y[bb]){bc=Y[bb]._element;
if(bc){qx.bom.Element[bb](bc);
}delete Y[bb];
}}qx.event.handler.Appear.refresh();
}},
members:{_element:null,
_root:false,
_included:true,
_visible:true,
_scheduleChildrenUpdate:function(){if(this._modifiedChildren){return;
}this._modifiedChildren=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
},
_createDomElement:function(){return qx.bom.Element.create(this._nodeName);
},
__bu:function(){{};
var bd=this._children;
var be=bd.length;
var W;
for(var O=0;O<be;O++){W=bd[O];
if(W._visible&&W._included&&!W._element){W.__bu();
}}
if(!this._element){this._element=this._createDomElement();
this._element.$$hash=this.$$hash;
this._copyData();
if(be>0){this._insertChildren();
}}else{this._syncData();
if(this._modifiedChildren){this._syncChildren();
}}delete this._modifiedChildren;
},
_insertChildren:function(){var bd=this._children;
var be=bd.length;
var W;
if(be>2){var bf=document.createDocumentFragment();
for(var O=0;O<be;O++){W=bd[O];
if(W._element&&W._included){bf.appendChild(W._element);
}}this._element.appendChild(bf);
}else{var bf=this._element;
for(var O=0;O<be;O++){W=bd[O];
if(W._element&&W._included){bf.appendChild(W._element);
}}}},
_syncChildren:function(){var bg=qx.core.ObjectRegistry;
var bh=this._children;
var bi=bh.length;
var bj;
var bk;
var bm=this._element;
var bn=bm.childNodes;
var bo=0;
var bp;
var bq;
for(var O=bn.length-1;O>=0;O--){bp=bn[O];
bk=bg.fromHashCode(bp.$$hash);
if(!bk||!bk._included||bk._parent!==this){bm.removeChild(bp);
{};
}}for(var O=0;O<bi;O++){bj=bh[O];
if(bj._included){bk=bj._element;
bp=bn[bo];
if(!bk){continue;
}if(bk!=bp){if(bp){bm.insertBefore(bk,
bp);
}else{bm.appendChild(bk);
}{};
}bo++;
}}{};
},
_copyData:function(){var T=this._element;
var br=this.__attribValues;
if(br){var bs=qx.bom.element.Attribute;
for(var bt in br){bs.set(T,
bt,
br[bt]);
}}var br=this.__styleValues;
if(br){var bu=qx.bom.element.Style;
bu.setCss(T,
bu.compile(br));
}var br=this.__propertyValues;
if(br){for(var bt in br){this._applyProperty(bt,
br[bt]);
}}var br=this.__eventValues;
if(br){qx.event.Registration.getManager(T).importListeners(T,
br);
delete this.__eventValues;
}},
_syncData:function(){var T=this._element;
var bs=qx.bom.element.Attribute;
var bu=qx.bom.element.Style;
var bv=this.__attribJobs;
if(bv){var br=this.__attribValues;
if(br){var bw;
for(var bt in bv){bw=br[bt];
if(bw!==undefined){bs.set(T,
bt,
bw);
}else{bs.reset(T,
bt);
}}}this.__attribJobs=null;
}var bv=this.__styleJobs;
if(bv){var br=this.__styleValues;
if(br){var bw;
for(var bt in bv){bw=br[bt];
if(bw!==undefined){bu.set(T,
bt,
bw);
}else{bu.reset(T,
bt);
}}}this.__styleJobs=null;
}var bv=this.__propertyJobs;
if(bv){var br=this.__propertyValues;
if(br){var bw;
for(var bt in bv){this._applyProperty(bt,
br[bt]);
}}this.__propertyJobs=null;
}},
__bv:function(){var bx=this;
while(bx){if(bx._root){return true;
}
if(!bx._included||!bx._visible){return false;
}bx=bx._parent;
}return false;
},
__bw:function(by,
bz,
bA,
bB){var bC=qx.core.ObjectRegistry;
var bD=n+by+d+bC.toHashCode(bz);
if(bA){bD+=d+bC.toHashCode(bA);
}
if(bB){bD+=C;
}return bD;
},
__bx:function(W){if(W._parent===this){throw new Error("Child is already in: "+W);
}
if(W._root){throw new Error("Root elements could not be inserted into other ones.");
}if(W._parent){W._parent.remove(W);
}W._parent=this;
if(this._element){this._scheduleChildrenUpdate();
}},
__by:function(W){if(W._parent!==this){throw new Error("Has no child: "+W);
}if(this._element){this._scheduleChildrenUpdate();
}delete W._parent;
},
__bz:function(W){if(W._parent!==this){throw new Error("Has no child: "+W);
}if(this._element){this._scheduleChildrenUpdate();
}},
getChildren:function(){return qx.lang.Array.copy(this._children);
},
getChild:function(bE){return this._children[bE]||null;
},
hasChildren:function(){return this._children[0]==undefined;
},
indexOf:function(W){return this._children.indexOf(W);
},
hasChild:function(W){return this._children.indexOf(W)!==-1;
},
add:function(bF){var bd=this._children;
if(arguments[1]){for(var O=0,
P=arguments.length;O<P;O++){this.__bx(arguments[O]);
}bd.push.apply(bd,
arguments);
}else{this.__bx(bF);
bd.push(bF);
}return this;
},
addAt:function(W,
bE){this.__bx(W);
qx.lang.Array.insertAt(this._children,
W,
bE);
return this;
},
remove:function(bF){if(arguments[1]){var W;
for(var O=0,
P=arguments.length;O<P;O++){W=arguments[O];
this.__by(W);
qx.lang.Array.remove(this._children,
W);
}}else{this.__by(bF);
qx.lang.Array.remove(this._children,
bF);
}return this;
},
removeAt:function(bE){var W=this._children[bE];
if(!W){throw new Error("Has no child at this position!");
}this.__by(W);
qx.lang.Array.removeAt(this._children,
bE);
return this;
},
removeAll:function(){var bd=this._children;
for(var O=0,
P=bd.length;O<P;O++){this.__by(bd[O]);
}bd.length=0;
return this;
},
getParent:function(){return this._parent||null;
},
insertInto:function(bG,
bE){bG.__bx(this);
if(bE==null){bG._children.push(this);
}else{qx.lang.Array.insertAt(this._children,
this,
bE);
}return this;
},
insertBefore:function(bH){var bG=bH._parent;
bG.__bx(this);
qx.lang.Array.insertBefore(bG._children,
this,
bH);
return this;
},
insertAfter:function(bH){var bG=bH._parent;
bG.__bx(this);
qx.lang.Array.insertAfter(bG._children,
this,
bH);
return this;
},
moveTo:function(bE){var bG=this._parent;
bG.__bz(this);
var bI=bG._children.indexOf(this);
if(bI===bE){throw new Error("Could not move to same index!");
}else if(bI<bE){bE--;
}qx.lang.Array.removeAt(bG._children,
bI);
qx.lang.Array.insertAt(bG._children,
this,
bE);
return this;
},
moveBefore:function(bH){var bG=this._parent;
return this.moveTo(bG._children.indexOf(bH));
},
moveAfter:function(bH){var bG=this._parent;
return this.moveTo(bG._children.indexOf(bH)+1);
},
free:function(){var bG=this._parent;
if(!bG){throw new Error("Has no parent to remove from.");
}bG.__by(this);
qx.lang.Array.remove(bG._children,
this);
return this;
},
getDomElement:function(){return this._element||null;
},
getNodeName:function(){return this._nodeName;
},
isFocusable:function(){var bJ=this.getAttribute(r);
if(bJ>=1){return true;
}var bK=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;
if(bJ>=0&&bK[this._nodeName]){return true;
}return false;
},
isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this._nodeName];
},
include:function(){if(this._included){return;
}delete this._included;
if(this._parent){this._parent._scheduleChildrenUpdate();
}return this;
},
exclude:function(){if(!this._included){return;
}this._included=false;
if(this._parent){this._parent._scheduleChildrenUpdate();
}return this;
},
isIncluded:function(){return this._included===true;
},
show:function(){if(this._visible){return;
}
if(this._element){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}if(this._parent){this._parent._scheduleChildrenUpdate();
}delete this._visible;
},
hide:function(){if(!this._visible){return;
}
if(this._element){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}this._visible=false;
},
isVisible:function(){return this._visible===true;
},
scrollChildIntoViewX:function(T,
bL){var bM=this._element;
var bN=T.getDomElement();
if(bM&&bM.offsetWidth&&bN&&bN.offsetWidth){qx.bom.element.Scroll.intoViewX(bN,
bM,
bL);
}else{this.__lazyScrollIntoViewX={element:T,
align:bL};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}delete this.__lazyScrollX;
},
scrollChildIntoViewY:function(T,
bL){var bM=this._element;
var bN=T.getDomElement();
if(bM&&bM.offsetWidth&&bN&&bN.offsetWidth){qx.bom.element.Scroll.intoViewY(bN,
bM,
bL);
}else{this.__lazyScrollIntoViewY={element:T,
align:bL};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}delete this.__lazyScrollY;
},
scrollToX:function(bO,
bP){var bM=this._element;
if(bP!==true&&bM&&bM.offsetWidth){bM.scrollLeft=bO;
}else{this.__lazyScrollX=bO;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}delete this.__lazyScrollIntoViewX;
},
getScrollX:function(){var bM=this._element;
if(bM){return bM.scrollLeft;
}return this.__lazyScrollX||0;
},
scrollToY:function(bQ,
bP){var bM=this._element;
if(bP!==true&&bM&&bM.offsetWidth){bM.scrollTop=bQ;
}else{this.__lazyScrollY=bQ;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}delete this.__lazyScrollIntoViewY;
},
getScrollY:function(){var bM=this._element;
if(bM){return bM.scrollTop;
}return this.__lazyScrollY||0;
},
getSelection:function(){var bR=this._element;
if(bR){return qx.bom.Selection.get(bR);
}return null;
},
getSelectionLength:function(){var bR=this._element;
if(bR){return qx.bom.Selection.getLength(bR);
}return null;
},
setSelection:function(bS,
bT){var bR=this._element;
if(bR){qx.bom.Selection.set(bR,
bS,
bT);
}},
clearSelection:function(){var bR=this._element;
if(bR){qx.bom.Selection.clear(bR);
}},
focus:function(){var bR=this._element;
if(bR){return qx.bom.Element.focus(bR);
}qx.html.Element._actions.focus=this;
qx.html.Element._scheduleFlush(c);
},
blur:function(){var bR=this._element;
if(bR){qx.bom.Element.blur(bR);
}},
activate:function(){var bR=this._element;
if(bR){return qx.bom.Element.activate(bR);
}qx.html.Element._actions.activate=this;
qx.html.Element._scheduleFlush(c);
},
deactivate:function(){var bR=this._element;
if(bR){qx.bom.Element.deactivate(bR);
}},
capture:function(){var bR=this._element;
if(bR){return qx.bom.Element.capture(bR);
}qx.html.Element._actions.capture=this;
qx.html.Element._scheduleFlush(c);
},
releaseCapture:function(){var bR=this._element;
if(bR){qx.bom.Element.releaseCapture(bR);
}},
setStyle:function(bt,
bw,
bU){if(!this.__styleValues){this.__styleValues={};
}
if(this.__styleValues[bt]==bw){return;
}
if(bw==null){delete this.__styleValues[bt];
}else{this.__styleValues[bt]=bw;
}if(this._element){if(bU){qx.bom.element.Style.set(this._element,
bt,
bw);
return this;
}if(!this.__styleJobs){this.__styleJobs={};
}this.__styleJobs[bt]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}return this;
},
setStyles:function(bV,
bU){for(var bt in bV){this.setStyle(bt,
bV[bt],
bU);
}return this;
},
removeStyle:function(bt,
bU){this.setStyle(bt,
null,
bU);
},
getStyle:function(bt){return this.__styleValues?this.__styleValues[bt]:null;
},
setAttribute:function(bt,
bw,
bU){if(!this.__attribValues){this.__attribValues={};
}
if(this.__attribValues[bt]==bw){return;
}
if(bw==null){delete this.__attribValues[bt];
}else{this.__attribValues[bt]=bw;
}if(this._element){if(bU){qx.bom.element.Attribute.set(this._element,
bt,
bw);
return this;
}if(!this.__attribJobs){this.__attribJobs={};
}this.__attribJobs[bt]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}return this;
},
setAttributes:function(bV,
bU){for(var bt in bV){this.setAttribute(bt,
bV[bt],
bU);
}return this;
},
removeAttribute:function(bt,
bU){this.setAttribute(bt,
null,
bU);
},
getAttribute:function(bt){return this.__attribValues?this.__attribValues[bt]:null;
},
_applyProperty:function(bW,
bw){},
_setProperty:function(bt,
bw,
bU){if(!this.__propertyValues){this.__propertyValues={};
}
if(this.__propertyValues[bt]==bw){return;
}
if(bw==null){delete this.__propertyValues[bt];
}else{this.__propertyValues[bt]=bw;
}if(this._element){if(bU){this._applyProperty(bt,
bw);
return this;
}if(!this.__propertyJobs){this.__propertyJobs={};
}this.__propertyJobs[bt]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}return this;
},
_removeProperty:function(bt,
bU){this._setProperty(bt,
null,
bU);
},
_getProperty:function(bt){return this.__propertyValues?this.__propertyValues[bt]:null;
},
addListener:function(by,
bz,
bA,
bB){if(this.isDisposed()){return;
}var bX;
if(this._element){qx.event.Registration.addListener(this._element,
by,
bz,
bA,
bB);
}else{if(!this.__eventValues){this.__eventValues={};
}var bt=this.__bw(by,
bz,
bA,
bB);
if(this.__eventValues[bt]){this.warn("A listener of this configuration does already exist!");
return false;
}this.__eventValues[bt]={type:by,
listener:bz,
self:bA,
capture:bB};
}return this;
},
removeListener:function(by,
bz,
bA,
bB){if(this.isDisposed()){return;
}var bX;
if(this._element){qx.event.Registration.removeListener(this._element,
by,
bz,
bA,
bB);
}else{var bt=this.__bw(by,
bz,
bA,
bB);
if(!this.__eventValues||!this.__eventValues[bt]){this.warn("A listener of this configuration does not exist!");
return false;
}delete this.__eventValues[bt];
}return this;
},
hasListener:function(by,
bB){throw new Error("hasListener() needs implementation!");
}},
defer:function(bY){bY.__deferredCall=new qx.util.DeferredCall(bY.flush,
bY);
},
destruct:function(){var bR=this._element;
if(bR){qx.event.Registration.getManager(bR).removeAllListeners(bR);
}
if(this._parent){this._parent.remove(this);
}this._disposeArray(k);
this._disposeFields(B,
D,
v,
m,
j,
A,
z,
s,
o);
}});
})();
(function(){var a="qx.ui.core.queue.Manager",
b="useraction";
qx.Class.define(a,
{statics:{__bA:false,
__bB:{},
scheduleFlush:function(c){var d=qx.ui.core.queue.Manager;
d.__bB[c]=true;
if(!d.__bA){d.__deferredCall.schedule();
d.__bA=true;
}},
flush:function(){var d=qx.ui.core.queue.Manager;
if(d.__inFlush){return;
}d.__inFlush=true;
d.__deferredCall.cancel();
var e=d.__bB;
while(e.widget||e.appearance||e.decorator||e.layout){if(e.widget){delete e.widget;
qx.ui.core.queue.Widget.flush();
}
if(e.appearance){delete e.appearance;
qx.ui.core.queue.Appearance.flush();
}
if(e.layout){delete e.layout;
qx.ui.core.queue.Layout.flush();
}}qx.ui.core.queue.Manager.__bA=false;
if(e.element){delete e.element;
qx.html.Element.flush();
}
if(e.dispose){delete e.dispose;
qx.ui.core.queue.Dispose.flush();
}d.__inFlush=false;
}},
defer:function(f){f.__deferredCall=new qx.util.DeferredCall(f.flush);
qx.html.Element._scheduleFlush=f.scheduleFlush;
qx.event.Registration.addListener(window,
b,
f.flush);
}});
})();
(function(){var a="qx.client",
b="qx.dom.Hierarchy",
c="previousSibling",
d="*",
e="nextSibling",
f="parentNode";
qx.Class.define(b,
{statics:{getNodeIndex:function(g){var h=0;
while(g&&(g=g.previousSibling)){h++;
}return h;
},
getElementIndex:function(i){var h=0;
var j=qx.dom.Node.ELEMENT;
while(i&&(i=i.previousSibling)){if(i.nodeType==j){h++;
}}return h;
},
getNextElementSibling:function(i){while(i&&(i=i.nextSibling)&&!qx.dom.Node.isElement(i)){continue;
}return i||null;
},
getPreviousElementSibling:function(i){while(i&&(i=i.previousSibling)&&!qx.dom.Node.isElement(i)){continue;
}return i||null;
},
contains:qx.core.Variant.select(a,
{"webkit|mshtml|opera":function(i,
k){if(qx.dom.Node.isDocument(i)){var l=qx.dom.Node.getDocument(k);
return i&&l==i;
}else if(qx.dom.Node.isDocument(k)){return false;
}else{return i.contains(k);
}},
"gecko":function(i,
k){return !!(i.compareDocumentPosition(k)&16);
},
"default":function(i,
k){while(k){if(i==k){return true;
}k=k.parentNode;
}return false;
}}),
isRendered:function(i){if(!i.offsetParent){return false;
}var l=i.ownerDocument||i.document;
if(l.body.contains){return l.body.contains(i);
}if(l.compareDocumentPosition){return !!(l.compareDocumentPosition(i)&16);
}throw new Error("Missing support for isRendered()!");
},
isDescendantOf:function(i,
m){return this.contains(m,
i);
},
getCommonParent:qx.core.Variant.select(a,
{"mshtml|opera":function(n,
o){if(n===o){return n;
}
while(n){if(n.contains(o)){return n;
}n=n.parentNode;
}return null;
},
"default":function(n,
o){if(n===o){return n;
}var p={};
var q=qx.core.ObjectRegistry;
var r,
s;
while(n||o){if(n){r=q.toHashCode(n);
if(p[r]){return p[r];
}p[r]=n;
n=n.parentNode;
}
if(o){s=q.toHashCode(o);
if(p[s]){return p[s];
}p[s]=o;
o=o.parentNode;
}}return null;
}}),
getAncestors:function(i){return this._recursivelyCollect(i,
f);
},
getChildElements:function(i){i=i.firstChild;
if(!i){return [];
}var t=this.getNextSiblings(i);
t.unshift(i);
return t;
},
getDescendants:function(i){return qx.lang.Array.fromCollection(i.getElementsByTagName(d));
},
getFirstDescendant:function(i){i=i.firstChild;
while(i&&i.nodeType!=1){i=i.nextSibling;
}return i;
},
getLastDescendant:function(i){i=i.lastChild;
while(i&&i.nodeType!=1){i=i.previousSibling;
}return i;
},
getPreviousSiblings:function(i){return this._recursivelyCollect(i,
c);
},
getNextSiblings:function(i){return this._recursivelyCollect(i,
e);
},
_recursivelyCollect:function(i,
u){var v=[];
while(i=i[u]){if(i.nodeType==1){v.push(i);
}}return v;
},
getSiblings:function(i){return this.getPreviousSiblings(i).reverse().concat(this.getNextSiblings(i));
},
isEmpty:function(i){i=i.firstChild;
while(i){if(i.nodeType===qx.dom.Node.ELEMENT||i.nodeType===qx.dom.Node.TEXT){return false;
}i=i.nextSibling;
}return true;
},
cleanWhitespace:function(i){var g=i.firstChild;
while(g){var w=g.nextSibling;
if(g.nodeType==3&&!/\S/.test(g.nodeValue)){i.removeChild(g);
}g=w;
}}}});
})();
(function(){var a="visible",
b="scroll",
c="borderBottomWidth",
d="borderTopWidth",
e="left",
f="borderLeftWidth",
g="bottom",
h="top",
i="right",
j="qx.bom.element.Scroll",
k="borderRightWidth";
qx.Class.define(j,
{statics:{intoViewX:function(l,
m,
n){var o=l.parentNode;
var p=qx.dom.Node.getDocument(l);
var q=p.body;
var r,
s,
t;
var u,
v,
w;
var x,
y,
z;
var A,
B,
C,
D;
var E,
F,
G;
var H=n===e;
var I=n===i;
m=m?m.parentNode:p;
while(o&&o!=m){if(o.scrollWidth>o.clientWidth&&(o===q||qx.bom.element.Overflow.getY(o)!=a)){if(o===q){s=o.scrollLeft;
t=s+qx.bom.Viewport.getWidth();
u=qx.bom.Viewport.getWidth();
v=o.clientWidth;
w=o.scrollWidth;
x=0;
y=0;
z=0;
}else{r=qx.bom.element.Location.get(o);
s=r.left;
t=r.right;
u=o.offsetWidth;
v=o.clientWidth;
w=o.scrollWidth;
x=parseInt(qx.bom.element.Style.get(o,
f),
10)||0;
y=parseInt(qx.bom.element.Style.get(o,
k),
10)||0;
z=u-v-x-y;
}A=qx.bom.element.Location.get(l);
B=A.left;
C=A.right;
D=l.offsetWidth;
E=B-s-x;
F=C-t+y;
G=0;
if(H){G=E;
}else if(I){G=F+z;
}else if(E<0||D>v){G=E;
}else if(F>0){G=F+z;
}o.scrollLeft+=G;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(o,
b);
}}
if(o===q){break;
}o=o.parentNode;
}},
intoViewY:function(l,
m,
n){var o=l.parentNode;
var p=qx.dom.Node.getDocument(l);
var q=p.body;
var r,
J,
K;
var L,
M,
N;
var O,
P,
Q;
var A,
R,
S,
T;
var U,
V,
G;
var W=n===h;
var X=n===g;
m=m?m.parentNode:p;
while(o&&o!=m){if(o.scrollHeight>o.clientHeight&&(o===q||qx.bom.element.Overflow.getY(o)!=a)){if(o===q){J=o.scrollTop;
K=J+qx.bom.Viewport.getHeight();
L=qx.bom.Viewport.getHeight();
M=o.clientHeight;
N=o.scrollHeight;
O=0;
P=0;
Q=0;
}else{r=qx.bom.element.Location.get(o);
J=r.top;
K=r.bottom;
L=o.offsetHeight;
M=o.clientHeight;
N=o.scrollHeight;
O=parseInt(qx.bom.element.Style.get(o,
d),
10)||0;
P=parseInt(qx.bom.element.Style.get(o,
c),
10)||0;
Q=L-M-O-P;
}A=qx.bom.element.Location.get(l);
R=A.top;
S=A.bottom;
T=l.offsetHeight;
U=R-J-O;
V=S-K+P;
G=0;
if(W){G=U;
}else if(X){G=V+Q;
}else if(U<0||T>M){G=U;
}else if(V>0){G=V+Q;
}o.scrollTop+=G;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(o,
b);
}}
if(o===q){break;
}o=o.parentNode;
}},
intoView:function(l,
m,
Y,
ba){this.intoViewX(l,
m,
Y);
this.intoViewY(l,
m,
ba);
}}});
})();
(function(){var a="",
b="qx.client",
d="hidden",
e="-moz-scrollbars-none",
f="overflow",
g=";",
h="overflowY",
i=":",
j="overflowX",
k="overflow:",
l="none",
m="scroll",
n="borderLeftStyle",
o="borderRightStyle",
p="div",
q="borderRightWidth",
r="overflow-y",
u="borderLeftWidth",
v="-moz-scrollbars-vertical",
w="100px",
x="qx.bom.element.Overflow",
y="overflow-x";
qx.Class.define(x,
{statics:{__bC:null,
getScrollbarWidth:function(){if(this.__bC!==null){return this.__bC;
}var z=qx.bom.Style.get;
var A=function(B){return (z(B,
o)==l?0:getStyleSize(B,
q));
};
var C=function(B){return (z(B,
n)==l?0:getStyleSize(B,
u));
};
var D=qx.core.Variant.select(b,
{"mshtml":function(B){if(z(B,
h)==d||B.clientWidth==0){return A(B);
}return Math.max(0,
B.offsetWidth-B.clientLeft-B.clientWidth);
},
"default":function(B){if(B.clientWidth==0){var E=z(B,
f);
var F=(E==m||E==v?16:0);
return Math.max(0,
A(B)+F);
}return Math.max(0,
(B.offsetWidth-B.clientWidth-C(B)));
}});
var G=function(B){return D(B)-A(B);
};
var H=document.createElement(p);
var I=H.style;
I.height=I.width=w;
I.overflow=m;
document.body.appendChild(H);
var J=G(H);
this.__bC=J?J:16;
document.body.removeChild(H);
return this.__bC;
},
_compile:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(K,
L){if(L==d){L=e;
}return k+L+g;
}:
function(K,
L){return K+i+L+g;
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(K,
L){return k+L+g;
}:
function(K,
L){return K+i+L+g;
},
"default":function(K,
L){return K+i+L+g;
}}),
compileX:function(L){return this._compile(y,
L);
},
compileY:function(L){return this._compile(r,
L);
},
getX:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(M,
N){var O=qx.bom.element.Style.get(M,
f,
N,
false);
if(O===e){O=d;
}return O;
}:
function(M,
N){return qx.bom.element.Style.get(M,
j,
N,
false);
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,
N){return qx.bom.element.Style.get(M,
f,
N,
false);
}:
function(M,
N){return qx.bom.element.Style.get(M,
j,
N,
false);
},
"default":function(M,
N){return qx.bom.element.Style.get(M,
j,
N,
false);
}}),
setX:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(M,
L){if(L==d){L=e;
}M.style.overflow=L;
}:
function(M,
L){M.style.overflowX=L;
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,
L){M.style.overflow=L;
}:
function(M,
L){M.style.overflowX=L;
},
"default":function(M,
L){M.style.overflowX=L;
}}),
resetX:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(M){M.style.overflow=a;
}:
function(M){M.style.overflowX=a;
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,
L){M.style.overflow=a;
}:
function(M,
L){M.style.overflowX=a;
},
"default":function(M){M.style.overflowX=a;
}}),
getY:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(M,
N){var O=qx.bom.element.Style.get(M,
f,
N,
false);
if(O===e){O=d;
}return O;
}:
function(M,
N){return qx.bom.element.Style.get(M,
h,
N,
false);
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,
N){return qx.bom.element.Style.get(M,
f,
N,
false);
}:
function(M,
N){return qx.bom.element.Style.get(M,
h,
N,
false);
},
"default":function(M,
N){return qx.bom.element.Style.get(M,
h,
N,
false);
}}),
setY:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(M,
L){if(L===d){L=e;
}M.style.overflow=L;
}:
function(M,
L){M.style.overflowY=L;
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,
L){M.style.overflow=L;
}:
function(M,
L){M.style.overflowY=L;
},
"default":function(M,
L){M.style.overflowY=L;
}}),
resetY:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(M){M.style.overflow=a;
}:
function(M){M.style.overflowY=a;
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,
L){M.style.overflow=a;
}:
function(M,
L){M.style.overflowY=a;
},
"default":function(M){M.style.overflowY=a;
}})}});
})();
(function(){var a="",
b="qx.client",
c="boxSizing",
d="cursor",
e="opacity",
f="clip",
g="overflowY",
h="overflowX",
i="appearance",
j="style",
k="px",
l="-webkit-appearance",
m="user-select",
n="userSelect",
o="styleFloat",
p="-webkit-user-select",
q="-moz-appearance",
r="pixelHeight",
s="MozAppearance",
t=":",
u="pixelTop",
v="pixelLeft",
w="text-overflow",
x="-moz-user-select",
y="MozUserSelect",
z="qx.bom.element.Style",
A="WebkitUserSelect",
B="-o-text-overflow",
C="pixelRight",
D="pixelWidth",
E="pixelBottom",
F=";",
G="cssFloat",
H="WebkitAppearance";
qx.Class.define(z,
{statics:{__bD:{styleNames:{"float":qx.core.Variant.select(b,
{"mshtml":o,
"default":G}),
"appearance":qx.core.Variant.select(b,
{"gecko":s,
"webkit":H,
"default":i}),
"userSelect":qx.core.Variant.select(b,
{"gecko":y,
"webkit":A,
"default":n})},
cssNames:{"appearance":qx.core.Variant.select(b,
{"gecko":q,
"webkit":l,
"default":i}),
"userSelect":qx.core.Variant.select(b,
{"gecko":x,
"webkit":p,
"default":m}),
"textOverflow":qx.core.Variant.select(b,
{"opera":B,
"default":w})},
mshtmlPixel:{width:D,
height:r,
left:v,
right:C,
top:u,
bottom:E},
special:{clip:1,
cursor:1,
opacity:1,
boxSizing:1,
overflowX:1,
overflowY:1}},
__bE:{},
compile:function(I){var J=[];
var K=this.__bD;
var L=K.special;
var M=K.cssNames;
var N=this.__bE;
var O=qx.lang.String;
var P,
Q,
R;
for(P in I){R=I[P];
P=M[P]||P;
if(L[P]){switch(P){case f:J.push(qx.bom.element.Clip.compile(R));
break;
case d:J.push(qx.bom.element.Cursor.compile(R));
break;
case e:J.push(qx.bom.element.Opacity.compile(R));
break;
case c:J.push(qx.bom.element.BoxSizing.compile(R));
break;
case h:J.push(qx.bom.element.Overflow.compileX(R));
break;
case g:J.push(qx.bom.element.Overflow.compileY(R));
break;
}}else{Q=N[P];
if(!Q){Q=N[P]=O.hyphenate(P);
}J.push(Q,
t,
R,
F);
}}return J.join(a);
},
setCss:qx.core.Variant.select(b,
{"mshtml":function(S,
R){S.style.cssText=R;
},
"default":function(S,
R){S.setAttribute(j,
R);
}}),
getCss:qx.core.Variant.select(b,
{"mshtml":function(S){return S.style.cssText.toLowerCase();
},
"default":function(S){return S.getAttribute(j);
}}),
COMPUTED_MODE:1,
CASCADED_MODE:2,
LOCAL_MODE:3,
set:function(S,
P,
R,
T){{};
var K=this.__bD;
P=K.styleNames[P]||P;
if(T!==false&&K.special[P]){switch(P){case f:return qx.bom.element.Clip.set(S,
R);
case d:return qx.bom.element.Cursor.set(S,
R);
case e:return qx.bom.element.Opacity.set(S,
R);
case c:return qx.bom.element.BoxSizing.set(S,
R);
case h:return qx.bom.element.Overflow.setX(S,
R);
case g:return qx.bom.element.Overflow.setY(S,
R);
}}S.style[P]=R!==null?R:a;
},
setStyles:function(S,
U,
T){{};
for(var P in U){this.set(S,
P,
U[P],
T);
}},
reset:function(S,
P,
T){var K=this.__bD;
P=K.styleNames[P]||P;
if(T!==false&&K.special[P]){switch(P){case f:return qx.bom.element.Clip.reset(S);
case d:return qx.bom.element.Cursor.reset(S);
case e:return qx.bom.element.Opacity.reset(S);
case c:return qx.bom.element.BoxSizing.reset(S);
case h:return qx.bom.element.Overflow.resetX(S);
case g:return qx.bom.element.Overflow.resetY(S);
}}S.style[P]=a;
},
get:qx.core.Variant.select(b,
{"mshtml":function(S,
P,
V,
T){var K=this.__bD;
P=K.styleNames[P]||P;
if(T!==false&&K.special[P]){switch(P){case f:return qx.bom.element.Clip.get(S,
V);
case d:return qx.bom.element.Cursor.get(S,
V);
case e:return qx.bom.element.Opacity.get(S,
V);
case c:return qx.bom.element.BoxSizing.get(S,
V);
case h:return qx.bom.element.Overflow.getX(S,
V);
case g:return qx.bom.element.Overflow.getY(S,
V);
}}if(!S.currentStyle){return S.style[P]||a;
}switch(V){case this.LOCAL_MODE:return S.style[P]||a;
case this.CASCADED_MODE:return S.currentStyle[P]||a;
default:var W=S.currentStyle[P]||a;
if(/^-?[\.\d]+(px)?$/i.test(W)){return W;
}var X=K.mshtmlPixel[P];
if(X){var Y=S.style[P];
S.style[P]=W||0;
var R=S.style[X]+k;
S.style[P]=Y;
return R;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(W)){throw new Error("Untranslated computed property value: "+P+". Only pixel values work well across different clients.");
}return W;
}},
"default":function(S,
P,
V,
T){var K=this.__bD;
P=K.styleNames[P]||P;
if(T!==false&&K.special[P]){switch(P){case f:return qx.bom.element.Clip.get(S,
V);
case d:return qx.bom.element.Cursor.get(S,
V);
case e:return qx.bom.element.Opacity.get(S,
V);
case c:return qx.bom.element.BoxSizing.get(S,
V);
case h:return qx.bom.element.Overflow.getX(S,
V);
case g:return qx.bom.element.Overflow.getY(S,
V);
}}switch(V){case this.LOCAL_MODE:return S.style[P]||a;
case this.CASCADED_MODE:if(S.currentStyle){return S.currentStyle[P]||a;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var ba=qx.dom.Node.getDocument(S);
var bb=ba.defaultView.getComputedStyle(S,
null);
return bb?bb[P]:a;
}}})}});
})();
(function(){var a="auto",
b="px",
c=",",
d="",
e="rect(",
f=");",
g=")",
h="qx.bom.element.Clip",
i="string",
j="clip:rect(",
k="clip";
qx.Class.define(h,
{statics:{compile:function(l){var m=l.left;
var n=l.top;
var o=l.width;
var p=l.height;
var q,
r;
if(m==null){q=(o==null?a:o+b);
m=a;
}else{q=(o==null?a:m+o+b);
m=m+b;
}
if(n==null){r=(p==null?a:p+b);
n=a;
}else{r=(p==null?a:n+p+b);
n=n+b;
}return j+n+c+q+c+r+c+m+f;
},
get:function(s,
t){var u=qx.bom.element.Style.get(s,
k,
t,
false);
var m,
n,
o,
p;
var q,
r;
if(typeof u===i&&u!==a&&u!==d){u=qx.lang.String.trim(u);
if(/\((.*)\)/.test(u)){var v=RegExp.$1.split(c);
n=qx.lang.String.trim(v[0]);
q=qx.lang.String.trim(v[1]);
r=qx.lang.String.trim(v[2]);
m=qx.lang.String.trim(v[3]);
if(m===a){m=null;
}
if(n===a){n=null;
}
if(q===a){q=null;
}
if(r===a){r=null;
}if(n!=null){n=parseInt(n,
10);
}
if(q!=null){q=parseInt(q,
10);
}
if(r!=null){r=parseInt(r,
10);
}
if(m!=null){m=parseInt(m,
10);
}if(q!=null&&m!=null){o=q-m;
}else if(q!=null){o=q;
}
if(r!=null&&n!=null){p=r-n;
}else if(r!=null){p=r;
}}else{throw new Error("Could not parse clip string: "+u);
}}return {left:m||null,
top:n||null,
width:o||null,
height:p||null};
},
set:function(s,
l){var m=l.left;
var n=l.top;
var o=l.width;
var p=l.height;
var q,
r;
if(m==null){q=(o==null?a:o+b);
m=a;
}else{q=(o==null?a:m+o+b);
m=m+b;
}
if(n==null){r=(p==null?a:p+b);
n=a;
}else{r=(p==null?a:n+p+b);
n=n+b;
}s.style.clip=e+n+c+q+c+r+c+m+g;
},
reset:function(s){s.style.clip=d;
}}});
})();
(function(){var a="n-resize",
b="e-resize",
c="nw-resize",
d="ne-resize",
e="",
f="cursor:",
g="qx.client",
h=";",
i="qx.bom.element.Cursor",
j="cursor",
k="hand";
qx.Class.define(i,
{statics:{__bF:qx.core.Variant.select(g,
{"mshtml":{"cursor":k,
"ew-resize":b,
"ns-resize":a,
"nesw-resize":d,
"nwse-resize":c},
"opera":{"col-resize":b,
"row-resize":a,
"ew-resize":b,
"ns-resize":a,
"nesw-resize":d,
"nwse-resize":c},
"default":{}}),
compile:function(l){return f+(this.__bF[l]||l)+h;
},
get:function(m,
n){return qx.bom.element.Style.get(m,
j,
n,
false);
},
set:function(m,
o){m.style.cursor=this.__bF[o]||o;
},
reset:function(m){m.style.cursor=e;
}}});
})();
(function(){var a="",
b="qx.client",
c=";",
d="filter",
e="opacity:",
f="opacity",
g="MozOpacity",
h=");",
i=")",
j="zoom:1;filter:alpha(opacity=",
k="qx.bom.element.Opacity",
l="alpha(opacity=",
m="-moz-opacity:";
qx.Class.define(k,
{statics:{compile:qx.core.Variant.select(b,
{"mshtml":function(n){if(n>=1){return a;
}
if(n<0.00001){n=0;
}return j+(n*100)+h;
},
"gecko":function(n){if(n==1){n=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return m+n+c;
}else{return e+n+c;
}},
"default":function(n){if(n==1){return a;
}return e+n+c;
}}),
set:qx.core.Variant.select(b,
{"mshtml":function(o,
n){var p=qx.bom.element.Style.get(o,
d,
qx.bom.element.Style.COMPUTED_MODE,
false);
if(n>=1){o.style.filter=p.replace(/alpha\([^\)]*\)/gi,
a);
return;
}
if(n<0.00001){n=0;
}if(!o.currentStyle.hasLayout){o.style.zoom=1;
}o.style.filter=p.replace(/alpha\([^\)]*\)/gi,
a)+l+n*100+i;
},
"gecko":function(o,
n){if(n==1){n=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){o.style.MozOpacity=n;
}else{o.style.opacity=n;
}},
"default":function(o,
n){if(n==1){n=a;
}o.style.opacity=n;
}}),
reset:qx.core.Variant.select(b,
{"mshtml":function(o){var p=qx.bom.element.Style.get(o,
d,
qx.bom.element.Style.COMPUTED_MODE,
false);
o.style.filter=p.replace(/alpha\([^\)]*\)/gi,
a);
},
"gecko":function(o){if(qx.bom.client.Engine.VERSION<1.7){o.style.MozOpacity=a;
}else{o.style.opacity=a;
}},
"default":function(o){o.style.opacity=a;
}}),
get:qx.core.Variant.select(b,
{"mshtml":function(o,
q){var p=qx.bom.element.Style.get(o,
d,
q,
false);
if(p){var n=p.match(/alpha\(opacity=(.*)\)/);
if(n&&n[1]){return parseFloat(n[1])/100;
}}return 1.0;
},
"gecko":function(o,
q){var n=qx.bom.element.Style.get(o,
qx.bom.client.Engine.VERSION<1.7?g:f,
q,
false);
if(n==0.999999){n=1.0;
}
if(n!=null){return parseFloat(n);
}return 1.0;
},
"default":function(o,
q){var n=qx.bom.element.Style.get(o,
f,
q,
false);
if(n!=null){return parseFloat(n);
}return 1.0;
}})}});
})();
(function(){var a="qx.client",
b="",
c="boxSizing",
d="box-sizing",
e=":",
f="border-box",
g="qx.bom.element.BoxSizing",
h="KhtmlBoxSizing",
j="-moz-box-sizing",
k="WebkitBoxSizing",
m=";",
n="-khtml-box-sizing",
o="content-box",
p="-webkit-box-sizing",
q="MozBoxSizing";
qx.Class.define(g,
{statics:{__bG:qx.core.Variant.select(a,
{"mshtml":null,
"webkit":[c,
h,
k],
"gecko":[q,
c],
"opera":[c]}),
__bH:qx.core.Variant.select(a,
{"mshtml":null,
"webkit":[d,
n,
p],
"gecko":[j,
d],
"opera":[d]}),
__bI:{tags:{button:true,
select:true},
types:{search:true,
button:true,
submit:true,
reset:true,
checkbox:true,
radio:true}},
__bJ:function(r){var s=this.__bI;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},
compile:qx.core.Variant.select(a,
{"mshtml":function(t){{};
},
"default":function(t){var u=this.__bH;
var v=b;
if(u){for(var w=0,
x=u.length;w<x;w++){v+=u[w]+e+t+m;
}}return v;
}}),
get:qx.core.Variant.select(a,
{"mshtml":function(r){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(r))){if(!this.__bJ(r)){return o;
}}return f;
},
"default":function(r){var u=this.__bG;
var t;
if(u){for(var w=0,
x=u.length;w<x;w++){t=qx.bom.element.Style.get(r,
u[w],
null,
false);
if(t!=null&&t!==b){return t;
}}}return b;
}}),
set:qx.core.Variant.select(a,
{"mshtml":function(r,
t){{};
},
"default":function(r,
t){var u=this.__bG;
if(u){for(var w=0,
x=u.length;w<x;w++){r.style[u[w]]=t;
}}}}),
reset:function(r){this.set(r,
b);
}}});
})();
(function(){var a="CSS1Compat",
b="qx.bom.Document";
qx.Class.define(b,
{statics:{isQuirksMode:function(c){return (c||window).document.compatMode!==a;
},
isStandardMode:function(c){return (c||window).document.compatMode===a;
},
getWidth:function(c){var d=(c||window).document;
var e=qx.bom.Viewport.getWidth(c);
var f=d.compatMode===a?d.documentElement.scrollWidth:d.body.scrollWidth;
return Math.max(f,
e);
},
getHeight:function(c){var d=(c||window).document;
var e=qx.bom.Viewport.getHeight(c);
var f=d.compatMode===a?d.documentElement.scrollHeight:d.body.scrollHeight;
return Math.max(f,
e);
}}});
})();
(function(){var a="qx.client",
b="CSS1Compat",
c="qx.bom.Viewport";
qx.Class.define(c,
{statics:{getWidth:qx.core.Variant.select(a,
{"opera":function(d){return (d||window).document.body.clientWidth;
},
"webkit":function(d){return (d||window).innerWidth;
},
"default":function(d){var e=(d||window).document;
return e.compatMode===b?e.documentElement.clientWidth:e.body.clientWidth;
}}),
getHeight:qx.core.Variant.select(a,
{"opera":function(d){return (d||window).document.body.clientHeight;
},
"webkit":function(d){return (d||window).innerHeight;
},
"default":function(d){var e=(d||window).document;
return e.compatMode===b?e.documentElement.clientHeight:e.body.clientHeight;
}}),
getScrollLeft:qx.core.Variant.select(a,
{"mshtml":function(d){var e=(d||window).document;
return e.documentElement.scrollLeft||e.body.scrollLeft;
},
"default":function(d){return (d||window).pageXOffset;
}}),
getScrollTop:qx.core.Variant.select(a,
{"mshtml":function(d){var e=(d||window).document;
return e.documentElement.scrollTop||e.body.scrollTop;
},
"default":function(d){return (d||window).pageYOffset;
}})}});
})();
(function(){var a="borderTopWidth",
b="borderLeftWidth",
c="scroll",
d="CSS1Compat",
e="marginTop",
f="marginLeft",
g="border-box",
h="borderBottomWidth",
i="qx.client",
j="borderRightWidth",
k="auto",
l="padding",
m="position",
n="fixed",
o="qx.bom.element.Location",
p="paddingLeft",
q="marginBottom",
r="visible",
s="BODY",
t="paddingBottom",
u="paddingTop",
v="marginRight",
w="margin",
x="overflow",
y="paddingRight",
z="border",
A="absolute";
qx.Class.define(o,
{statics:{__bK:function(B,
C){return qx.bom.element.Style.get(B,
C,
qx.bom.element.Style.COMPUTED_MODE,
false);
},
__bL:function(B,
C){return parseInt(qx.bom.element.Style.get(B,
C,
qx.bom.element.Style.COMPUTED_MODE,
false),
10)||0;
},
__bM:function(B){var D=0,
E=0;
if(B.getBoundingClientRect){var F=qx.dom.Node.getWindow(B);
D-=qx.bom.Viewport.getScrollLeft(F);
E-=qx.bom.Viewport.getScrollTop(F);
}else{var G=qx.dom.Node.getDocument(B).body;
B=B.parentNode;
while(B&&B!=G){D+=B.scrollLeft;
E+=B.scrollTop;
B=B.parentNode;
}}return {left:D,
top:E};
},
__bN:qx.core.Variant.select(i,
{"mshtml":function(B){var H=qx.dom.Node.getDocument(B);
var G=H.body;
var D=G.offsetLeft;
var E=G.offsetTop;
D-=G.parentNode.clientLeft;
E-=G.parentNode.clientTop;
if(H.compatMode===d){D+=this.__bL(G,
f);
E+=this.__bL(G,
e);
}return {left:D,
top:E};
},
"webkit":function(B){var H=qx.dom.Node.getDocument(B);
var G=H.body;
var D=G.offsetLeft;
var E=G.offsetTop;
D+=this.__bL(G,
b);
E+=this.__bL(G,
a);
if(H.compatMode===d){D+=this.__bL(G,
f);
E+=this.__bL(G,
e);
}return {left:D,
top:E};
},
"gecko":function(B){var G=qx.dom.Node.getDocument(B).body;
var D=G.offsetLeft;
var E=G.offsetTop;
if(qx.bom.element.BoxSizing.get(G)!==g){D+=this.__bL(G,
b);
E+=this.__bL(G,
a);
if(!B.getBoundingClientRect){var I;
while(B){if(this.__bK(B,
m)===A||this.__bK(B,
m)===n){I=true;
break;
}B=B.offsetParent;
}
if(!I){D+=this.__bL(G,
b);
E+=this.__bL(G,
a);
}}}return {left:D,
top:E};
},
"default":function(B){var G=qx.dom.Node.getDocument(B).body;
var D=G.offsetLeft;
var E=G.offsetTop;
return {left:D,
top:E};
}}),
__bO:qx.core.Variant.select(i,
{"mshtml|webkit":function(B){var H=qx.dom.Node.getDocument(B);
if(B.getBoundingClientRect){var J=B.getBoundingClientRect();
var D=J.left;
var E=J.top;
if(H.compatMode===d){D-=this.__bL(B,
b);
E-=this.__bL(B,
a);
}}else{var D=B.offsetLeft;
var E=B.offsetTop;
B=B.offsetParent;
var G=H.body;
while(B&&B!=G){D+=B.offsetLeft;
E+=B.offsetTop;
D+=this.__bL(B,
b);
E+=this.__bL(B,
a);
B=B.offsetParent;
}}return {left:D,
top:E};
},
"gecko":function(B){if(B.getBoundingClientRect){var J=B.getBoundingClientRect();
var D=Math.round(J.left);
var E=Math.round(J.top);
}else{var D=0;
var E=0;
var G=qx.dom.Node.getDocument(B).body;
var K=qx.bom.element.BoxSizing;
if(K.get(B)!==g){D-=this.__bL(B,
b);
E-=this.__bL(B,
a);
}
while(B&&B!==G){D+=B.offsetLeft;
E+=B.offsetTop;
if(K.get(B)!==g){D+=this.__bL(B,
b);
E+=this.__bL(B,
a);
}if(B.parentNode&&this.__bK(B.parentNode,
x)!=r){D+=this.__bL(B.parentNode,
b);
E+=this.__bL(B.parentNode,
a);
}B=B.offsetParent;
}}return {left:D,
top:E};
},
"default":function(B){var D=0;
var E=0;
var G=qx.dom.Node.getDocument(B).body;
while(B&&B!==G){D+=B.offsetLeft;
E+=B.offsetTop;
B=B.offsetParent;
}return {left:D,
top:E};
}}),
get:function(B,
L){var G=this.__bN(B);
if(B.tagName==s){var D=G.left;
var E=G.top;
}else{var M=this.__bO(B);
var N=this.__bM(B);
var D=M.left+G.left-N.left;
var E=M.top+G.top-N.top;
}var O=D+B.offsetWidth;
var P=E+B.offsetHeight;
if(L){if(L==l||L==c){var Q=qx.bom.element.Overflow.getX(B);
if(Q==c||Q==k){O+=B.scrollWidth-B.offsetWidth+this.__bL(B,
b)+this.__bL(B,
j);
}var R=qx.bom.element.Overflow.getY(B);
if(R==c||R==k){P+=B.scrollHeight-B.offsetHeight+this.__bL(B,
a)+this.__bL(B,
h);
}}
switch(L){case l:D+=this.__bL(B,
p);
E+=this.__bL(B,
u);
O-=this.__bL(B,
y);
P-=this.__bL(B,
t);
case c:D-=B.scrollLeft;
E-=B.scrollTop;
O-=B.scrollLeft;
P-=B.scrollTop;
case z:D+=this.__bL(B,
b);
E+=this.__bL(B,
a);
O-=this.__bL(B,
j);
P-=this.__bL(B,
h);
break;
case w:D-=this.__bL(B,
f);
E-=this.__bL(B,
e);
O+=this.__bL(B,
v);
P+=this.__bL(B,
q);
break;
}}return {left:D,
top:E,
right:O,
bottom:P};
},
getLeft:function(B,
L){return this.get(B,
L).left;
},
getTop:function(B,
L){return this.get(B,
L).top;
},
getRight:function(B,
L){return this.get(B,
L).right;
},
getBottom:function(B,
L){return this.get(B,
L).bottom;
},
getRelative:function(S,
T,
U,
V){var W=this.get(S,
U);
var X=this.get(T,
V);
return {left:W.left-X.left,
top:W.top-X.top,
right:W.right-X.right,
bottom:W.bottom-X.bottom};
}}});
})();
(function(){var a="qx.event.handler.Appear",
b="__manager",
c="__targets",
d="disappear",
e="appear";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(f){arguments.callee.base.call(this);
this.__manager=f;
this.__targets={};
qx.event.handler.Appear.__bP[this.$$hash]=this;
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{appear:true,
disappear:true},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:true,
__bP:{},
refresh:function(){var g=this.__bP;
for(var h in g){g[h].refresh();
}}},
members:{canHandleEvent:function(i,
j){},
registerEvent:function(i,
j,
k){var h=qx.core.ObjectRegistry.toHashCode(i);
var l=this.__targets;
if(l&&!l[h]){l[h]=i;
i.$$displayed=i.offsetWidth>0;
}},
unregisterEvent:function(i,
j,
k){var h=qx.core.ObjectRegistry.toHashCode(i);
var l=this.__targets;
if(!l){return;
}
if(l[h]){delete l[h];
i.$$displayed=null;
}},
refresh:function(){var l=this.__targets;
var m;
for(var h in l){m=l[h];
var n=m.offsetWidth>0;
if((!!m.$$displayed)!==n){m.$$displayed=n;
var o=qx.event.Registration.createEvent(n?e:d);
this.__manager.dispatchEvent(m,
o);
}}}},
destruct:function(){this._disposeFields(b,
c);
delete qx.event.handler.Appear.__bP[this.$$hash];
},
defer:function(p){qx.event.Registration.addHandler(p);
}});
})();
(function(){var a="abstract",
b="qx.event.dispatch.AbstractBubbling";
qx.Class.define(b,
{extend:qx.core.Object,
implement:qx.event.IEventDispatcher,
type:a,
construct:function(c){this._manager=c;
},
members:{_getParent:function(d){throw new Error("Missing implementation");
},
canDispatchEvent:function(d,
e,
f){return e.getBubbles();
},
dispatchEvent:function(d,
e,
f){var g=d;
var c=this._manager;
var h,
k;
var l;
var m,
n;
var o;
var p=[];
h=c.getListeners(d,
f,
true);
k=c.getListeners(d,
f,
false);
if(h){p.push(h);
}
if(k){p.push(k);
}var g=this._getParent(d);
var q=[];
var r=[];
var s=[];
var t=[];
while(g!=null){h=c.getListeners(g,
f,
true);
if(h){s.push(h);
t.push(g);
}k=c.getListeners(g,
f,
false);
if(k){q.push(k);
r.push(g);
}g=this._getParent(g);
}e.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);
for(var u=s.length-1;u>=0;u--){o=t[u];
e.setCurrentTarget(o);
l=s[u];
for(var v=0,
w=l.length;v<w;v++){m=l[v];
n=m.context||o;
m.handler.call(n,
e);
}
if(e.getPropagationStopped()){return;
}}e.setEventPhase(qx.event.type.Event.AT_TARGET);
e.setCurrentTarget(d);
for(var u=0,
x=p.length;u<x;u++){l=p[u];
for(var v=0,
w=l.length;v<w;v++){m=l[v];
n=m.context||d;
m.handler.call(n,
e);
}
if(e.getPropagationStopped()){return;
}}e.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);
for(var u=0,
x=q.length;u<x;u++){o=r[u];
e.setCurrentTarget(o);
l=q[u];
for(var v=0,
w=l.length;v<w;v++){m=l[v];
n=m.context||o;
m.handler.call(n,
e);
}
if(e.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,
{extend:qx.event.dispatch.AbstractBubbling,
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},
members:{_getParent:function(b){return b.parentNode;
},
canDispatchEvent:function(b,
c,
d){return b.nodeType!==undefined&&c.getBubbles();
}},
defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var a="keydown",
b="qx.client",
c="keypress",
d="NumLock",
e="keyup",
f="Enter",
g="0",
h="9",
i="-",
j="PageUp",
k="+",
l="PrintScreen",
m="gecko",
n="A",
o="Left",
p="F5",
q="Down",
r="Up",
s="F11",
t="F6",
u="useraction",
v="Insert",
w="F8",
x="End",
y="/",
z="Delete",
A="*",
B="F1",
C="F4",
D="Home",
E="F2",
F="F12",
G="PageDown",
H="F7",
I="F9",
J="F10",
K="Right",
L="F3",
M="Z",
N="Escape",
O="webkit",
P="_window",
Q="Space",
R="5",
S="3",
T="Meta",
U="7",
V="CapsLock",
W="keyinput",
X="Scroll",
Y="Control",
ba="Tab",
bb="Shift",
bc="Pause",
bd="Unidentified",
be="qx.event.handler.Keyboard",
bf="_root",
bg="_lastUpDownType",
bh="Apps",
bi="6",
bj="4",
bk="Alt",
bl="2",
bm="mshtml",
bn="1",
bo="8",
bp="Win",
bq="_manager",
br=",",
bs="Backspace";
qx.Class.define(be,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(bt){arguments.callee.base.call(this);
this._manager=bt;
this._window=bt.getWindow();
if(qx.core.Variant.isSet(b,
m)){this._root=this._window;
}else{this._root=this._window.document.documentElement;
}this._lastUpDownType={};
this._initKeyObserver();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{keyup:1,
keydown:1,
keypress:1,
keyinput:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:true,
isValidKeyIdentifier:function(bu){if(this._identifierToKeyCodeMap[bu]){return true;
}
if(bu.length!=1){return false;
}
if(bu>=g&&bu<=h){return true;
}
if(bu>=n&&bu<=M){return true;
}
switch(bu){case k:case i:case A:case y:return true;
default:return false;
}}},
members:{canHandleEvent:function(bv,
bw){},
registerEvent:function(bv,
bw,
bx){},
unregisterEvent:function(bv,
bw,
bx){},
_fireInputEvent:function(by,
bz){var bA=this._manager.getHandler(qx.event.handler.Focus);
var bv=bA.getActive();
if(!bv||bv.offsetWidth==0){bv=bA.getFocus();
}if(bv&&bv.offsetWidth!=0){var bB=qx.event.Registration.createEvent(W,
qx.event.type.KeyInput,
[by,
bv,
bz]);
this._manager.dispatchEvent(bv,
bB);
}qx.event.Registration.fireEvent(this._window,
u);
},
_fireSequenceEvent:function(by,
bw,
bu){var bA=this._manager.getHandler(qx.event.handler.Focus);
var bv=bA.getActive();
if(!bv||bv.offsetWidth==0){bv=bA.getFocus();
}if(!bv||bv.offsetWidth==0){bv=this._manager.getWindow().document.body;
}var bB=qx.event.Registration.createEvent(bw,
qx.event.type.KeySequence,
[by,
bv,
bu]);
this._manager.dispatchEvent(bv,
bB);
qx.event.Registration.fireEvent(this._window,
u);
},
_initKeyObserver:function(){this._onKeyUpDownWrapper=qx.lang.Function.listener(this._onKeyUpDown,
this);
this._onKeyPressWrapper=qx.lang.Function.listener(this._onKeyPress,
this);
var bC=qx.bom.Event;
bC.addNativeListener(this._root,
e,
this._onKeyUpDownWrapper);
bC.addNativeListener(this._root,
a,
this._onKeyUpDownWrapper);
bC.addNativeListener(this._root,
c,
this._onKeyPressWrapper);
},
_stopKeyObserver:function(){var bC=qx.bom.Event;
bC.removeNativeListener(this._root,
e,
this._onKeyUpDownWrapper);
bC.removeNativeListener(this._root,
a,
this._onKeyUpDownWrapper);
bC.removeNativeListener(this._root,
c,
this._onKeyPressWrapper);
},
_onKeyUpDown:qx.core.Variant.select(b,
{"mshtml":function(by){by=window.event||by;
var bD=by.keyCode;
var bz=0;
var bw=by.type;
if(!(this._lastUpDownType[bD]==a&&bw==a)){this._idealKeyHandler(bD,
bz,
bw,
by);
}if(bw==a){if(this._isNonPrintableKeyCode(bD)||bD==8||bD==9){this._idealKeyHandler(bD,
bz,
c,
by);
}}this._lastUpDownType[bD]=bw;
},
"gecko":function(by){var bD=this._keyCodeFix[by.keyCode]||by.keyCode;
var bz=by.charCode;
var bw=by.type;
if(qx.bom.client.Platform.WIN){var bu=bD?this._keyCodeToIdentifier(bD):this._charCodeToIdentifier(bz);
if(!(this._lastUpDownType[bu]==c&&bw==a)){this._idealKeyHandler(bD,
bz,
bw,
by);
}this._lastUpDownType[bu]=bw;
}else{this._idealKeyHandler(bD,
bz,
bw,
by);
}},
"webkit":function(by){var bz=0;
var bw=by.type;
if(qx.bom.client.Engine.VERSION<525.13){var bD=0;
if(bw==e||bw==a){bD=this._charCode2KeyCode[by.charCode]||by.keyCode;
}else{if(this._charCode2KeyCode[by.charCode]){bD=this._charCode2KeyCode[by.charCode];
}else{bz=by.charCode;
}}this._idealKeyHandler(bD,
bz,
bw,
by);
}else{var bD=by.keyCode;
if(!(this._lastUpDownType[bD]==a&&bw==a)){this._idealKeyHandler(bD,
bz,
bw,
by);
}if(bw==a){if(this._isNonPrintableKeyCode(bD)||bD==8||bD==9){this._idealKeyHandler(bD,
bz,
c,
by);
}}this._lastUpDownType[bD]=bw;
}},
"opera":function(by){this._idealKeyHandler(by.keyCode,
0,
by.type,
by);
}}),
_onKeyPress:qx.core.Variant.select(b,
{"mshtml":function(by){var by=window.event||by;
if(this._charCode2KeyCode[by.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[by.keyCode],
0,
by.type,
by);
}else{this._idealKeyHandler(0,
by.keyCode,
by.type,
by);
}},
"gecko":function(by){var bD=this._keyCodeFix[by.keyCode]||by.keyCode;
var bz=by.charCode;
var bw=by.type;
this._idealKeyHandler(bD,
bz,
bw,
by);
},
"webkit":function(by){if(qx.bom.client.Engine.VERSION<525.13){var bD=0;
var bz=0;
var bw=by.type;
if(bw==e||bw==a){bD=this._charCode2KeyCode[by.charCode]||by.keyCode;
}else{if(this._charCode2KeyCode[by.charCode]){bD=this._charCode2KeyCode[by.charCode];
}else{bz=by.charCode;
}}this._idealKeyHandler(bD,
bz,
bw,
by);
}else{if(this._charCode2KeyCode[by.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[by.keyCode],
0,
by.type,
by);
}else{this._idealKeyHandler(0,
by.keyCode,
by.type,
by);
}}},
"opera":function(by){if(this._keyCodeToIdentifierMap[by.keyCode]){this._idealKeyHandler(by.keyCode,
0,
by.type,
by);
}else{this._idealKeyHandler(0,
by.keyCode,
by.type,
by);
}}}),
_idealKeyHandler:function(bD,
bz,
bE,
by){if(!bD&&!bz){return;
}var bu;
if(bD){bu=this._keyCodeToIdentifier(bD);
this._fireSequenceEvent(by,
bE,
bu);
}else{bu=this._charCodeToIdentifier(bz);
this._fireSequenceEvent(by,
c,
bu);
this._fireInputEvent(by,
bz);
}},
_specialCharCodeMap:{8:bs,
9:ba,
13:f,
27:N,
32:Q},
_keyCodeToIdentifierMap:{16:bb,
17:Y,
18:bk,
20:V,
224:T,
37:o,
38:r,
39:K,
40:q,
33:j,
34:G,
35:x,
36:D,
45:v,
46:z,
112:B,
113:E,
114:L,
115:C,
116:p,
117:t,
118:H,
119:w,
120:I,
121:J,
122:s,
123:F,
144:d,
44:l,
145:X,
19:bc,
91:bp,
93:bh},
_numpadToCharCode:{96:g.charCodeAt(0),
97:bn.charCodeAt(0),
98:bl.charCodeAt(0),
99:S.charCodeAt(0),
100:bj.charCodeAt(0),
101:R.charCodeAt(0),
102:bi.charCodeAt(0),
103:U.charCodeAt(0),
104:bo.charCodeAt(0),
105:h.charCodeAt(0),
106:A.charCodeAt(0),
107:k.charCodeAt(0),
109:i.charCodeAt(0),
110:br.charCodeAt(0),
111:y.charCodeAt(0)},
_charCodeA:n.charCodeAt(0),
_charCodeZ:M.charCodeAt(0),
_charCode0:g.charCodeAt(0),
_charCode9:h.charCodeAt(0),
_isNonPrintableKeyCode:function(bD){return this._keyCodeToIdentifierMap[bD]?true:false;
},
_isIdentifiableKeyCode:function(bD){if(bD>=this._charCodeA&&bD<=this._charCodeZ){return true;
}if(bD>=this._charCode0&&bD<=this._charCode9){return true;
}if(this._specialCharCodeMap[bD]){return true;
}if(this._numpadToCharCode[bD]){return true;
}if(this._isNonPrintableKeyCode(bD)){return true;
}return false;
},
_keyCodeToIdentifier:function(bD){if(this._isIdentifiableKeyCode(bD)){var bF=this._numpadToCharCode[bD];
if(bF){return String.fromCharCode(bF);
}return (this._keyCodeToIdentifierMap[bD]||this._specialCharCodeMap[bD]||String.fromCharCode(bD));
}else{return bd;
}},
_charCodeToIdentifier:function(bz){return this._specialCharCodeMap[bz]||String.fromCharCode(bz).toUpperCase();
},
_identifierToKeyCode:function(bu){return qx.event.handler.Keyboard._identifierToKeyCodeMap[bu]||bu.charCodeAt(0);
}},
destruct:function(){this._stopKeyObserver();
this._disposeFields(bq,
P,
bf,
bg);
},
defer:function(bG,
bH,
bI){qx.event.Registration.addHandler(bG);
if(!bG._identifierToKeyCodeMap){bG._identifierToKeyCodeMap={};
for(var bJ in bH._keyCodeToIdentifierMap){bG._identifierToKeyCodeMap[bH._keyCodeToIdentifierMap[bJ]]=parseInt(bJ,
10);
}
for(var bJ in bH._specialCharCodeMap){bG._identifierToKeyCodeMap[bH._specialCharCodeMap[bJ]]=parseInt(bJ,
10);
}}
if(qx.core.Variant.isSet(b,
bm)){bH._charCode2KeyCode={13:13,
27:27};
}else if(qx.core.Variant.isSet(b,
m)){bH._keyCodeFix={12:bH._identifierToKeyCode(d)};
}else if(qx.core.Variant.isSet(b,
O)){if(qx.bom.client.Engine.VERSION<525.13){bH._charCode2KeyCode={63289:bH._identifierToKeyCode(d),
63276:bH._identifierToKeyCode(j),
63277:bH._identifierToKeyCode(G),
63275:bH._identifierToKeyCode(x),
63273:bH._identifierToKeyCode(D),
63234:bH._identifierToKeyCode(o),
63232:bH._identifierToKeyCode(r),
63235:bH._identifierToKeyCode(K),
63233:bH._identifierToKeyCode(q),
63272:bH._identifierToKeyCode(z),
63302:bH._identifierToKeyCode(v),
63236:bH._identifierToKeyCode(B),
63237:bH._identifierToKeyCode(E),
63238:bH._identifierToKeyCode(L),
63239:bH._identifierToKeyCode(C),
63240:bH._identifierToKeyCode(p),
63241:bH._identifierToKeyCode(t),
63242:bH._identifierToKeyCode(H),
63243:bH._identifierToKeyCode(w),
63244:bH._identifierToKeyCode(I),
63245:bH._identifierToKeyCode(J),
63246:bH._identifierToKeyCode(s),
63247:bH._identifierToKeyCode(F),
63248:bH._identifierToKeyCode(l),
3:bH._identifierToKeyCode(f),
12:bH._identifierToKeyCode(d),
13:bH._identifierToKeyCode(f)};
}else{bH._charCode2KeyCode={13:13,
27:27};
}}}});
})();
(function(){var a="qx.client",
b="mouseup",
c="mousedown",
d="click",
e="contextmenu",
f="dblclick",
g="mousewheel",
h="mouseover",
i="mouseout",
j="DOMMouseScroll",
k="mousemove",
l="mshtml|webkit|opera",
m="_root",
n="useraction",
o="_manager",
p="_window",
q="qx.event.handler.Mouse",
r="gecko|webkit";
qx.Class.define(q,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(s){arguments.callee.base.call(this);
this._manager=s;
this._window=s.getWindow();
this._root=this._window.document.documentElement;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{mousemove:1,
mouseover:1,
mouseout:1,
mousedown:1,
mouseup:1,
click:1,
dblclick:1,
contextmenu:1,
mousewheel:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:true},
members:{canHandleEvent:function(t,
u){},
registerEvent:function(t,
u,
v){},
unregisterEvent:function(t,
u,
v){},
__bQ:function(w,
u,
t){if(!t){t=w.target||w.srcElement;
}qx.event.Registration.fireEvent(t,
u||w.type,
qx.event.type.Mouse,
[w,
t,
null,
true,
true]);
qx.event.Registration.fireEvent(this._window,
n);
},
_initButtonObserver:function(){this._onButtonEventWrapper=qx.lang.Function.listener(this._onButtonEvent,
this);
var x=qx.bom.Event;
x.addNativeListener(this._root,
c,
this._onButtonEventWrapper);
x.addNativeListener(this._root,
b,
this._onButtonEventWrapper);
x.addNativeListener(this._root,
d,
this._onButtonEventWrapper);
x.addNativeListener(this._root,
f,
this._onButtonEventWrapper);
x.addNativeListener(this._root,
e,
this._onButtonEventWrapper);
},
_initMoveObserver:function(){this._onMoveEventWrapper=qx.lang.Function.listener(this._onMoveEvent,
this);
var x=qx.bom.Event;
x.addNativeListener(this._root,
k,
this._onMoveEventWrapper);
x.addNativeListener(this._root,
h,
this._onMoveEventWrapper);
x.addNativeListener(this._root,
i,
this._onMoveEventWrapper);
},
_initWheelObserver:function(){this._onWheelEventWrapper=qx.lang.Function.listener(this._onWheelEvent,
this);
var x=qx.bom.Event;
var u=qx.core.Variant.isSet(a,
l)?g:j;
x.addNativeListener(this._root,
u,
this._onWheelEventWrapper);
},
_stopButtonObserver:function(){var x=qx.bom.Event;
x.removeNativeListener(this._root,
c,
this._onButtonEventWrapper);
x.removeNativeListener(this._root,
b,
this._onButtonEventWrapper);
x.removeNativeListener(this._root,
d,
this._onButtonEventWrapper);
x.removeNativeListener(this._root,
f,
this._onButtonEventWrapper);
x.removeNativeListener(this._root,
e,
this._onButtonEventWrapper);
},
_stopMoveObserver:function(){var x=qx.bom.Event;
x.removeNativeListener(this._root,
k,
this._onMoveEventWrapper);
x.removeNativeListener(this._root,
h,
this._onMoveEventWrapper);
x.removeNativeListener(this._root,
i,
this._onMoveEventWrapper);
},
_stopWheelObserver:function(){var x=qx.bom.Event;
var u=qx.core.Variant.isSet(a,
l)?g:j;
x.removeNativeListener(this._root,
u,
this._onWheelEventWrapper);
},
_onMoveEvent:function(w){this.__bQ(w);
},
_onButtonEvent:function(w){var u=w.type;
var t=w.target||w.srcElement;
if(qx.core.Variant.isSet(a,
r)){if(t&&t.nodeType==3){t=t.parentNode;
}}
if(this.__bR){this.__bR(w,
u,
t);
}
if(this.__bT){this.__bT(w,
u,
t);
}this.__bQ(w,
u,
t);
if(this.__bS){this.__bS(w,
u,
t);
}
if(this.__bU){this.__bU(w,
u,
t);
}this._lastEventType=u;
},
_onWheelEvent:function(w){this.__bQ(w,
g);
},
__bR:qx.core.Variant.select(a,
{"webkit":function(w,
u,
t){if(u==e){this.__bQ(w,
c,
t);
this.__bQ(w,
b,
t);
}},
"default":null}),
__bS:qx.core.Variant.select(a,
{"opera":function(w,
u,
t){if(u==b&&w.button==2){this.__bQ(w,
e,
t);
}},
"default":null}),
__bT:qx.core.Variant.select(a,
{"mshtml":function(w,
u,
t){if(u==b&&this._lastEventType==d){this.__bQ(w,
c,
t);
}else if(u==f){this.__bQ(w,
d,
t);
}},
"default":null}),
__bU:qx.core.Variant.select(a,
{"mshtml":null,
"default":function(w,
u,
t){switch(u){case c:this.__lastMouseDownTarget=t;
break;
case b:if(t!==this.__lastMouseDownTarget){var y=qx.dom.Hierarchy.getCommonParent(t,
this.__lastMouseDownTarget);
this.__bQ(w,
d,
y);
}}}})},
destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(o,
p,
m);
},
defer:function(z){qx.event.Registration.addHandler(z);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{capture:true,
losecapture:true},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:true},
members:{canHandleEvent:function(b,
c){},
registerEvent:function(b,
c,
d){},
unregisterEvent:function(b,
c,
d){}},
defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var a="alias",
b="copy",
c="blur",
d="mousedown",
f="mouseout",
g="keydown",
h="Ctrl",
i="Shift",
j="mousemove",
k="move",
l="mouseover",
m="Alt",
n="keyup",
o="mouseup",
p="dragend",
q="on",
r="qxDraggable",
s="__dragTarget",
t="drag",
u="drop",
v="__dropTarget",
w="qxDroppable",
x="qx.event.handler.DragDrop",
y="__root",
z="droprequest",
A="dragstart",
B="dragchange",
C="dragleave",
D="__manager",
E="dragover";
qx.Class.define(x,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(F){arguments.callee.base.call(this);
this.__manager=F;
this.__root=F.getWindow().document.documentElement;
this.__manager.addListener(this.__root,
d,
this._onMouseDown,
this);
this.__bV();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{dragstart:1,
dragend:1,
dragover:1,
dragleave:1,
drop:1,
drag:1,
dragchange:1,
droprequest:1},
IGNORE_CAN_HANDLE:true},
members:{canHandleEvent:function(G,
H){},
registerEvent:function(G,
H,
I){},
unregisterEvent:function(G,
H,
I){},
addType:function(H){this.__types[H]=true;
},
addAction:function(J){this.__actions[J]=true;
},
supportsType:function(H){return !!this.__types[H];
},
supportsAction:function(H){return !!this.__actions[H];
},
getData:function(H){if(!this.__cd||!this.__dropTarget){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__types[H]){throw new Error("Unsupported data type: "+H+"!");
}
if(!this.__cache[H]){this.__currentType=H;
this.__bX(z,
this.__dragTarget,
false);
}
if(!this.__cache[H]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__cache[H]||null;
},
getCurrentAction:function(){return this.__currentAction;
},
addData:function(H,
K){this.__cache[H]=K;
},
getCurrentType:function(){return this.__currentType;
},
__bV:function(){this.__types={};
this.__actions={};
this.__keys={};
this.__cache={};
},
__bW:function(){var L=this.__actions;
var M=this.__keys;
var N=null;
if(this.__cd){if(M.Shift&&M.Ctrl&&L.alias){N=a;
}else if(M.Shift&&M.Alt&&L.copy){N=b;
}else if(M.Shift&&L.move){N=k;
}else if(M.Alt&&L.alias){N=a;
}else if(M.Ctrl&&L.copy){N=b;
}else if(L.move){N=k;
}else if(L.copy){N=b;
}else if(L.alias){N=a;
}}
if(N!=this.__currentAction){this.__currentAction=N;
this.__bX(B,
this.__dragTarget,
false);
}},
__bX:function(H,
G,
O,
P){var Q=qx.event.Registration;
var R=Q.createEvent(H,
qx.event.type.Drag,
[O,
P]);
return Q.dispatchEvent(G,
R);
},
__bY:function(S){while(S&&S.nodeType==1){if(S.getAttribute(r)==q){return S;
}S=S.parentNode;
}return null;
},
__ca:function(S){while(S&&S.nodeType==1){if(S.getAttribute(w)==q){return S;
}S=S.parentNode;
}return null;
},
__cb:function(){this.__dragTarget=null;
this.__manager.removeListener(this.__root,
j,
this._onMouseMove,
this,
true);
this.__manager.removeListener(this.__root,
o,
this._onMouseUp,
this,
true);
qx.event.Registration.removeListener(window,
c,
this._onWindowBlur,
this);
this.__bV();
},
__cc:function(){if(this.__sessionActive){this.__manager.removeListener(this.__root,
l,
this._onMouseOver,
this,
true);
this.__manager.removeListener(this.__root,
f,
this._onMouseOut,
this,
true);
this.__manager.removeListener(this.__root,
g,
this._onKeyDown,
this,
true);
this.__manager.removeListener(this.__root,
n,
this._onKeyUp,
this,
true);
this.__bX(p,
this.__dragTarget,
false);
this.__sessionActive=false;
}this.__cd=false;
this.__dropTarget=null;
this.__cb();
},
__cd:false,
_onWindowBlur:function(T){this.__cc();
},
_onKeyDown:function(T){var U=T.getKeyIdentifier();
switch(U){case m:case h:case i:if(!this.__keys[U]){this.__keys[U]=true;
this.__bW();
}}},
_onKeyUp:function(T){var U=T.getKeyIdentifier();
switch(U){case m:case h:case i:if(this.__keys[U]){this.__keys[U]=false;
this.__bW();
}}},
_onMouseDown:function(T){if(this.__sessionActive){return;
}var V=this.__bY(T.getTarget());
if(V){this.__startLeft=T.getDocumentLeft();
this.__startTop=T.getDocumentTop();
this.__dragTarget=V;
this.__manager.addListener(this.__root,
j,
this._onMouseMove,
this,
true);
this.__manager.addListener(this.__root,
o,
this._onMouseUp,
this,
true);
qx.event.Registration.addListener(window,
c,
this._onWindowBlur,
this);
}},
_onMouseUp:function(T){if(this.__cd){this.__bX(u,
this.__dropTarget,
false,
T.getNativeEvent());
}if(this.__sessionActive){T.stopPropagation();
}this.__cc();
},
_onMouseMove:function(T){if(this.__sessionActive){if(!this.__bX(t,
this.__dragTarget,
true,
T.getNativeEvent())){this.__cc();
}}else{if(Math.abs(T.getDocumentLeft()-this.__startLeft)>3||Math.abs(T.getDocumentTop()-this.__startTop)>3){if(this.__bX(A,
this.__dragTarget,
true,
T.getNativeEvent())){this.__sessionActive=true;
this.__manager.addListener(this.__root,
l,
this._onMouseOver,
this,
true);
this.__manager.addListener(this.__root,
f,
this._onMouseOut,
this,
true);
this.__manager.addListener(this.__root,
g,
this._onKeyDown,
this,
true);
this.__manager.addListener(this.__root,
n,
this._onKeyUp,
this,
true);
var M=this.__keys;
M.Ctrl=T.isCtrlPressed();
M.Shift=T.isShiftPressed();
M.Alt=T.isAltPressed();
this.__bW();
}else{this.__bX(p,
this.__dragTarget,
false);
this.__cb();
}}}},
_onMouseOver:function(T){var G=T.getTarget();
var W=this.__ca(G);
if(W&&W!=this.__dropTarget){this.__cd=this.__bX(E,
W,
true,
T.getNativeEvent());
this.__dropTarget=W;
this.__bW();
}},
_onMouseOut:function(T){var G=T.getTarget();
var W=this.__ca(G);
if(W&&W==this.__dropTarget){this.__bX(C,
this.__dropTarget,
false,
T.getNativeEvent());
this.__dropTarget=null;
this.__cd=false;
this.__bW();
}}},
destruct:function(){this.__cc();
this.__manager.removeListener(this.__root,
d,
this._onMouseDown,
this);
this._disposeFields(s,
v,
D,
y);
},
defer:function(X){qx.event.Registration.addHandler(X);
}});
})();
(function(){var a="-",
b="qx.event.handler.Element",
c="_manager",
d="_registeredEvents";
qx.Class.define(b,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(e){arguments.callee.base.call(this);
this._manager=e;
this._registeredEvents={};
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{abort:true,
scroll:true,
select:true,
reset:true,
submit:true},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:true},
members:{canHandleEvent:function(f,
g){},
registerEvent:function(f,
g,
h){var i=qx.core.ObjectRegistry.toHashCode(f);
var j=i+a+g;
var k=qx.lang.Function.listener(this._onNative,
this,
j);
qx.bom.Event.addNativeListener(f,
g,
k);
this._registeredEvents[j]={element:f,
type:g,
listener:k};
},
unregisterEvent:function(f,
g,
h){var l=this._registeredEvents;
if(!l){return;
}var i=qx.core.ObjectRegistry.toHashCode(f);
var j=i+a+g;
var m=this._registeredEvents[j];
qx.bom.Event.removeNativeListener(f,
g,
m.listener);
delete this._registeredEvents[j];
},
_onNative:function(n,
j){var l=this._registeredEvents;
if(!l){return;
}var m=l[j];
qx.event.Registration.fireNonBubblingEvent(m.element,
m.type,
qx.event.type.Native,
[n]);
}},
destruct:function(){var o;
var l=this._registeredEvents;
for(var p in l){o=l[p];
qx.bom.Event.removeNativeListener(o.element,
o.type,
o.listener);
}this._disposeFields(c,
d);
},
defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var a="",
b=">",
c="<",
d=" ",
e="='",
f="http://www.w3.org/1999/xhtml",
g="qx.bom.Element",
h="div",
i="' ",
j="></";
qx.Class.define(g,
{statics:{__ce:{"onload":true,
"onpropertychange":true,
"oninput":true,
"onchange":true,
"name":true,
"type":true,
"checked":true,
"disabled":true},
create:function(k,
l,
m,
n){if(!m){m=window;
}
if(!k){throw new Error("The tag name is missing!");
}var o=this.__ce;
var p=a;
for(var q in l){if(o[q]){p+=q+e+l[q]+i;
}}var r;
if(p!=a){if(qx.bom.client.Engine.MSHTML){r=m.document.createElement(c+k+d+p+b);
}else{var s=m.document.createElement(h);
s.innerHTML=c+k+d+p+j+k+b;
r=s.firstChild;
}}else{if(m.document.createElementNS){r=m.document.createElementNS(f,
k);
}else{r=m.document.createElement(k);
}}
for(var q in l){if(!o[q]){qx.bom.element.Attribute.set(r,
q,
l[q]);
}}return r;
},
empty:function(r){return r.innerHTML=a;
},
addListener:function(r,
t,
u,
v,
w){return qx.event.Registration.addListener(r,
t,
u,
v,
w);
},
removeListener:function(r,
t,
u,
v,
w){return qx.event.Registration.removeListener(r,
t,
u,
v,
w);
},
hasListener:function(r,
t,
w){return qx.event.Registration.hasListener(r,
t,
w);
},
focus:function(r){qx.event.Registration.getManager(r).getHandler(qx.event.handler.Focus).focus(r);
},
blur:function(r){qx.event.Registration.getManager(r).getHandler(qx.event.handler.Focus).blur(r);
},
activate:function(r){qx.event.Registration.getManager(r).getHandler(qx.event.handler.Focus).activate(r);
},
deactivate:function(r){qx.event.Registration.getManager(r).getHandler(qx.event.handler.Focus).deactivate(r);
},
capture:function(r){qx.event.Registration.getManager(r).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(r);
},
releaseCapture:function(r){qx.event.Registration.getManager(r).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(r);
}}});
})();
(function(){var a="qx.client",
b="blur",
c="focus",
d="mousedown",
f="on",
g="mouseup",
h="DOMFocusOut",
i="DOMFocusIn",
j="selectstart",
k="onmousedown",
l="onfocusout",
m="onfocusin",
n="onmouseup",
o="onselectstart",
p="draggesture",
q="_document",
r="_root",
s="qx.event.handler.Focus",
t="_applyFocus",
u="_window",
v="deactivate",
w="_applyActive",
x="focusin",
y="",
z="qxSelectable",
A="tabIndex",
B="off",
C="_body",
D="activate",
E="focusout",
F="__mouseActive",
G="_manager",
H="qxKeepFocus",
I="qxKeepActive";
qx.Class.define(s,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(J){arguments.callee.base.call(this);
this._manager=J;
this._window=J.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},
properties:{active:{apply:w,
nullable:true},
focus:{apply:t,
nullable:true}},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{focus:1,
blur:1,
focusin:1,
focusout:1,
activate:1,
deactivate:1},
IGNORE_CAN_HANDLE:true,
FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",
{"mshtml|gecko":{a:1,
body:1,
button:1,
frame:1,
iframe:1,
img:1,
input:1,
object:1,
select:1,
textarea:1},
"opera|webkit":{button:1,
input:1,
select:1,
textarea:1}})},
members:{canHandleEvent:function(K,
L){},
registerEvent:function(K,
L,
M){},
unregisterEvent:function(K,
L,
M){},
focus:function(N){try{N.focus();
}catch(ex){}this.setFocus(N);
this.setActive(N);
},
activate:function(N){this.setActive(N);
},
blur:function(N){try{N.blur();
}catch(ex){}
if(this.getActive()===N){this.resetActive();
}
if(this.getFocus()===N){this.resetFocus();
}},
deactivate:function(N){if(this.getActive()===N){this.resetActive();
}},
tryActivate:function(N){var O=this.__cs(N);
if(O){this.setActive(O);
}},
__cf:function(K,
P,
L,
Q){var R=qx.event.Registration;
var S=R.createEvent(L,
qx.event.type.Focus,
[K,
P,
Q]);
R.dispatchEvent(K,
S);
},
_windowFocused:true,
__cg:function(){if(this._windowFocused){this._windowFocused=false;
this.__cf(this._window,
null,
b,
false);
}},
__ch:function(){if(!this._windowFocused){this._windowFocused=true;
this.__cf(this._window,
null,
c,
false);
}},
_initObserver:qx.core.Variant.select(a,
{"gecko":function(){this.__onNativeMouseDownWrapper=qx.lang.Function.listener(this.__cn,
this);
this.__onNativeMouseUpWrapper=qx.lang.Function.listener(this.__co,
this);
this.__onNativeFocusWrapper=qx.lang.Function.listener(this.__cm,
this);
this.__onNativeBlurWrapper=qx.lang.Function.listener(this.__cl,
this);
this.__onNativeDragGestureWrapper=qx.lang.Function.listener(this.__ci,
this);
this._document.addEventListener(d,
this.__onNativeMouseDownWrapper,
true);
this._document.addEventListener(g,
this.__onNativeMouseUpWrapper,
true);
this._window.addEventListener(c,
this.__onNativeFocusWrapper,
true);
this._window.addEventListener(b,
this.__onNativeBlurWrapper,
true);
this._window.addEventListener(p,
this.__onNativeDragGestureWrapper,
true);
},
"mshtml":function(){this.__onNativeMouseDownWrapper=qx.lang.Function.listener(this.__cn,
this);
this.__onNativeMouseUpWrapper=qx.lang.Function.listener(this.__co,
this);
this.__onNativeFocusInWrapper=qx.lang.Function.listener(this.__cj,
this);
this.__onNativeFocusOutWrapper=qx.lang.Function.listener(this.__ck,
this);
this.__onNativeSelectStartWrapper=qx.lang.Function.listener(this.__cp,
this);
this._document.attachEvent(k,
this.__onNativeMouseDownWrapper);
this._document.attachEvent(n,
this.__onNativeMouseUpWrapper);
this._document.attachEvent(m,
this.__onNativeFocusInWrapper);
this._document.attachEvent(l,
this.__onNativeFocusOutWrapper);
this._document.attachEvent(o,
this.__onNativeSelectStartWrapper);
},
"webkit":function(){this.__onNativeMouseDownWrapper=qx.lang.Function.listener(this.__cn,
this);
this.__onNativeMouseUpWrapper=qx.lang.Function.listener(this.__co,
this);
this.__onNativeFocusOutWrapper=qx.lang.Function.listener(this.__ck,
this);
this.__onNativeFocusWrapper=qx.lang.Function.listener(this.__cm,
this);
this.__onNativeBlurWrapper=qx.lang.Function.listener(this.__cl,
this);
this.__onNativeSelectStartWrapper=qx.lang.Function.listener(this.__cp,
this);
this._document.addEventListener(d,
this.__onNativeMouseDownWrapper,
true);
this._document.addEventListener(g,
this.__onNativeMouseUpWrapper,
true);
this._document.addEventListener(j,
this.__onNativeSelectStartWrapper,
false);
this._window.addEventListener(h,
this.__onNativeFocusOutWrapper,
true);
this._window.addEventListener(c,
this.__onNativeFocusWrapper,
true);
this._window.addEventListener(b,
this.__onNativeBlurWrapper,
true);
},
"opera":function(){this.__onNativeMouseDownWrapper=qx.lang.Function.listener(this.__cn,
this);
this.__onNativeMouseUpWrapper=qx.lang.Function.listener(this.__co,
this);
this.__onNativeFocusInWrapper=qx.lang.Function.listener(this.__cj,
this);
this.__onNativeFocusOutWrapper=qx.lang.Function.listener(this.__ck,
this);
this._document.addEventListener(d,
this.__onNativeMouseDownWrapper,
true);
this._document.addEventListener(g,
this.__onNativeMouseUpWrapper,
true);
this._window.addEventListener(i,
this.__onNativeFocusInWrapper,
true);
this._window.addEventListener(h,
this.__onNativeFocusOutWrapper,
true);
}}),
_stopObserver:qx.core.Variant.select(a,
{"gecko":function(){this._document.removeEventListener(d,
this.__onNativeMouseDownWrapper,
true);
this._document.removeEventListener(g,
this.__onNativeMouseUpWrapper,
true);
this._window.removeEventListener(c,
this.__onNativeFocusWrapper,
true);
this._window.removeEventListener(b,
this.__onNativeBlurWrapper,
true);
this._window.removeEventListener(p,
this.__onNativeDragGestureWrapper,
true);
},
"mshtml":function(){this._document.detachEvent(k,
this.__onNativeMouseDownWrapper);
this._document.detachEvent(n,
this.__onNativeMouseUpWrapper);
this._document.detachEvent(m,
this.__onNativeFocusInWrapper);
this._document.detachEvent(l,
this.__onNativeFocusOutWrapper);
this._document.detachEvent(o,
this.__onNativeSelectStartWrapper);
},
"webkit":function(){this._document.removeEventListener(d,
this.__onNativeMouseDownWrapper,
true);
this._document.removeEventListener(j,
this.__onNativeSelectStartWrapper,
false);
this._window.removeEventListener(i,
this.__onNativeFocusInWrapper,
true);
this._window.removeEventListener(h,
this.__onNativeFocusOutWrapper,
true);
this._window.removeEventListener(c,
this.__onNativeFocusWrapper,
true);
this._window.removeEventListener(b,
this.__onNativeBlurWrapper,
true);
},
"opera":function(){this._document.removeEventListener(d,
this.__onNativeMouseDownWrapper,
true);
this._window.removeEventListener(i,
this.__onNativeFocusInWrapper,
true);
this._window.removeEventListener(h,
this.__onNativeFocusOutWrapper,
true);
this._window.removeEventListener(c,
this.__onNativeFocusWrapper,
true);
this._window.removeEventListener(b,
this.__onNativeBlurWrapper,
true);
}}),
__ci:qx.core.Variant.select(a,
{"gecko":function(T){if(!this.__ct(T.target)){T.preventDefault();
}},
"default":null}),
__cj:qx.core.Variant.select(a,
{"mshtml":function(T){this.__ch();
var K=T.srcElement;
var U=this.__cr(K);
if(U){this.setFocus(U);
}this.tryActivate(K);
},
"opera":function(T){var K=T.target;
if(K==this._document||K==this._window){this.__ch();
if(this.__previousFocus){this.setFocus(this.__previousFocus);
delete this.__previousFocus;
}
if(this.__previousActive){this.setActive(this.__previousActive);
delete this.__previousActive;
}}else{this.setFocus(K);
this.tryActivate(K);
if(!this.__ct(K)){K.selectionStart=0;
K.selectionEnd=0;
}}},
"default":null}),
__ck:qx.core.Variant.select(a,
{"mshtml":function(T){if(!T.toElement){this.__cg();
this.resetFocus();
this.resetActive();
}},
"webkit":function(T){var K=T.target;
if(K===this.getFocus()){this.resetFocus();
}
if(K===this.getActive()){this.resetActive();
}},
"opera":function(T){var K=T.target;
if(K==this._document){this.__cg();
this.__previousFocus=this.getFocus();
this.__previousActive=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(K===this.getFocus()){this.resetFocus();
}
if(K===this.getActive()){this.resetActive();
}}},
"default":null}),
__cl:qx.core.Variant.select(a,
{"gecko":function(T){if(T.target===this._window||T.target===this._document){this.__cg();
this.resetActive();
this.resetFocus();
}},
"webkit":function(T){if(T.target===this._window||T.target===this._document){this.__cg();
this.__previousFocus=this.getFocus();
this.__previousActive=this.getActive();
this.resetActive();
this.resetFocus();
}},
"default":null}),
__cm:qx.core.Variant.select(a,
{"gecko":function(T){var K=T.target;
if(K===this._window||K===this._document){this.__ch();
K=this._body;
}this.setFocus(K);
this.tryActivate(K);
},
"webkit":function(T){var K=T.target;
if(K===this._window||K===this._document){this.__ch();
if(this.__previousFocus){this.setFocus(this.__previousFocus);
delete this.__previousFocus;
}
if(this.__previousActive){this.setActive(this.__previousActive);
delete this.__previousActive;
}}else{this.setFocus(K);
this.tryActivate(K);
}},
"default":null}),
__cn:qx.core.Variant.select(a,
{"gecko":function(T){var K=T.target;
var U=this.__cr(K);
var V=this.__ct(K);
if(!V){qx.bom.Event.preventDefault(T);
if(U){U.focus();
}}else if(!U){qx.bom.Event.preventDefault(T);
}},
"mshtml":function(T){var K=T.srcElement;
var U=this.__cr(K);
if(U){if(!this.__ct(K)){K.unselectable=f;
document.selection.empty();
K.focus();
}}else{qx.bom.Event.preventDefault(T);
if(!this.__ct(K)){K.unselectable=f;
}}},
"webkit":function(T){var K=T.target;
var U=this.__cr(K);
if(U){this.setFocus(U);
}else{qx.bom.Event.preventDefault(T);
}},
"opera":function(T){var K=T.target;
var U=this.__cr(K);
if(!this.__ct(K)){qx.bom.Event.preventDefault(T);
if(U){var W=this.getFocus();
if(W&&W.selectionEnd){W.selectionStart=0;
W.selectionEnd=0;
W.blur();
}if(U){this.setFocus(U);
}}}else if(U){this.setFocus(U);
}},
"default":null}),
__co:qx.core.Variant.select(a,
{"mshtml":function(T){var K=T.srcElement;
if(K.unselectable){K.unselectable=B;
}this.tryActivate(K);
},
"gecko":function(T){var K=T.target;
while(K&&K.offsetWidth===undefined){K=K.parentNode;
}
if(K){this.tryActivate(K);
}if(this.__lastUserSelectBlocked){this.__lastUserSelectBlocked.style.MozUserSelect=y;
this.__lastUserSelectBlocked=null;
}},
"webkit|opera":function(T){this.tryActivate(T.target);
},
"default":null}),
__cp:qx.core.Variant.select(a,
{"mshtml|webkit":function(T){if(!this.__ct(T.srcElement)){qx.bom.Event.preventDefault(T);
}},
"default":null}),
__cq:function(X){var Y=qx.bom.element.Attribute.get(X,
A);
if(Y>=1){return true;
}var ba=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;
if(Y>=0&&ba[X.tagName]){return true;
}return false;
},
__cr:function(X){while(X&&X.nodeType===1){if(X.getAttribute(H)==f){return null;
}
if(this.__cq(X)){return X;
}X=X.parentNode;
}return this._body;
},
__cs:function(X){var bb=X;
while(X&&X.nodeType===1){if(X.getAttribute(I)==f){return null;
}X=X.parentNode;
}return bb;
},
__ct:function(bc){while(bc&&bc.nodeType===1){var bd=bc.getAttribute(z);
if(bd!=null){return bd===f;
}bc=bc.parentNode;
}return true;
},
_applyActive:function(be,
bf){if(bf){this.__cf(bf,
be,
v,
true);
}
if(be){this.__cf(be,
bf,
D,
true);
}},
_applyFocus:function(be,
bf){if(bf){this.__cf(bf,
be,
E,
true);
}
if(be){this.__cf(be,
bf,
x,
true);
}if(bf){this.__cf(bf,
be,
b,
false);
}
if(be){this.__cf(be,
bf,
c,
false);
}}},
destruct:function(){this._stopObserver();
this._disposeFields(G,
u,
q,
r,
C,
F);
},
defer:function(bg){qx.event.Registration.addHandler(bg);
var ba=bg.FOCUSABLE_ELEMENTS;
for(var bh in ba){ba[bh.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,
{extend:qx.event.type.Event,
members:{init:function(b,
c,
d){arguments.callee.base.call(this,
d,
false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var a="qx.client",
b="readOnly",
c="accessKey",
d="qx.bom.element.Attribute",
e="rowSpan",
f="vAlign",
g="encType",
h="className",
i="textContent",
j="'",
k="htmlFor",
l="longDesc",
m="cellSpacing",
n="frameBorder",
o="='",
p="",
q="useMap",
r="innerText",
s="innerHTML",
t="tabIndex",
u="dateTime",
v="maxLength",
w="mshtml",
x="cellPadding",
y="colSpan";
qx.Class.define(d,
{statics:{__cu:{names:{"class":h,
"for":k,
html:s,
text:qx.core.Variant.isSet(a,
w)?r:i,
colspan:y,
rowspan:e,
valign:f,
datetime:u,
accesskey:c,
tabindex:t,
enctype:g,
maxlength:v,
readonly:b,
longdesc:l,
cellpadding:x,
cellspacing:m,
frameborder:n,
usemap:q},
runtime:{"html":1,
"text":1},
bools:{compact:1,
nowrap:1,
ismap:1,
declare:1,
noshade:1,
checked:1,
disabled:1,
readonly:1,
multiple:1,
selected:1,
noresize:1,
defer:1},
property:{$$html:1,
$$widget:1,
disabled:1,
checked:1,
readOnly:1,
multiple:1,
selected:1,
value:1,
maxLength:1,
className:1,
innerHTML:1,
innerText:1,
textContent:1,
htmlFor:1,
tabIndex:1},
original:{href:1,
src:1,
type:1}},
compile:function(z){var A=[];
var B=this.__cu.runtime;
for(var C in z){if(!B[C]){A.push(C,
o,
z[C],
j);
}}return A.join(p);
},
get:qx.core.Variant.select(a,
{"mshtml":function(D,
E){var F=this.__cu;
var G;
E=F.names[E]||E;
if(F.original[E]){G=D.getAttribute(E,
2);
}else if(F.property[E]){G=D[E];
}else{G=D.getAttribute(E);
}if(F.bools[E]){return !!G;
}return G;
},
"default":function(D,
E){var F=this.__cu;
var G;
E=F.names[E]||E;
if(F.property[E]){G=D[E];
if(G==null){G=D.getAttribute(E);
}}else{G=D.getAttribute(E);
}if(F.bools[E]){return !!G;
}return G;
}}),
set:function(D,
E,
G){var F=this.__cu;
E=F.names[E]||E;
if(F.bools[E]){G=!!G;
}if(F.property[E]){D[E]=G;
}else if(G===true){D.setAttribute(E,
E);
}else if(G===false||G===null){D.removeAttribute(E);
}else{D.setAttribute(E,
G);
}},
reset:function(D,
E){this.set(D,
E,
null);
}}});
})();
(function(){var a="qx.event.type.Native",
b="_native";
qx.Class.define(a,
{extend:qx.event.type.Event,
members:{init:function(c,
d,
e,
f,
g){arguments.callee.base.call(this,
f,
g);
this._target=d||qx.bom.Event.getTarget(c);
this._relatedTarget=e||qx.bom.Event.getRelatedTarget(c);
if(c.timeStamp){this._timeStamp=c.timeStamp;
}this._native=c;
return this;
},
clone:function(h){var i=arguments.callee.base.call(this,
h);
i._native=this._native;
return i;
},
preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},
stop:function(){this.stopPropagation();
this.preventDefault();
},
getNativeEvent:function(){return this._native;
}},
destruct:function(){this._disposeFields(b);
}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,
{extend:qx.event.type.Native,
statics:{SHIFT_MASK:1,
CTRL_MASK:2,
ALT_MASK:4,
META_MASK:8},
members:{getModifiers:function(){if(!this.__modifiers){var b=0;
var c=this._native;
if(c.shiftKey){b|=qx.event.type.Dom.SHIFT_MASK;
}
if(c.ctrlKey){b|=qx.event.type.Dom.CTRL_MASK;
}
if(c.altKey){b|=qx.event.type.Dom.ALT_MASK;
}
if(c.metaKey){b|=qx.event.type.Dom.META_MASK;
}return b;
}return this.__modifiers;
},
isCtrlPressed:function(){return this._native.ctrlKey;
},
isShiftPressed:function(){return this._native.shiftKey;
},
isAltPressed:function(){return this._native.altKey;
},
isMetaPressed:function(){return this._native.metaKey;
},
isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,
{extend:qx.event.type.Dom,
members:{init:function(b,
c,
d){arguments.callee.base.call(this,
b,
c,
null,
true,
true);
this._charCode=d;
return this;
},
clone:function(e){var f=arguments.callee.base.call(this,
e);
f._charCode=this._charCode;
return f;
},
getCharCode:function(){return this._charCode;
},
getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="iPod",
b="Win32",
c="",
d="Win64",
e="Linux",
f="BSD",
g="Macintosh",
h="iPhone",
i="Windows",
j="qx.bom.client.Platform",
k="X11",
l="MacIntel",
m="MacPPC";
qx.Bootstrap.define(j,
{statics:{NAME:"",
WIN:false,
MAC:false,
UNIX:false,
__cv:function(){var n=navigator.platform;
if(n==null||n===c){n=navigator.userAgent;
}
if(n.indexOf(i)!=-1||n.indexOf(b)!=-1||n.indexOf(d)!=-1){this.WIN=true;
this.NAME="win";
}else if(n.indexOf(g)!=-1||n.indexOf(m)!=-1||n.indexOf(l)!=-1||n.indexOf(a)!=-1||n.indexOf(h)!=-1){this.MAC=true;
this.NAME="mac";
}else if(n.indexOf(k)!=-1||n.indexOf(e)!=-1||n.indexOf(f)!=-1){this.UNIX=true;
this.NAME="unix";
}else{throw new Error("Unable to detect platform: "+n);
}}},
defer:function(o){o.__cv();
}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,
{extend:qx.event.type.Dom,
members:{init:function(b,
c,
d){arguments.callee.base.call(this,
b,
c,
null,
true,
true);
this._identifier=d;
return this;
},
clone:function(e){var f=arguments.callee.base.call(this,
e);
f._identifier=this._identifier;
return f;
},
getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var a="qx.client",
b="left",
c="right",
d="middle",
e="dblclick",
f="click",
g="none",
h="contextmenu",
i="qx.event.type.Mouse";
qx.Class.define(i,
{extend:qx.event.type.Dom,
members:{init:function(j,
k,
l,
m,
n){arguments.callee.base.call(this,
j,
k,
l,
m,
n);
if(!l){this._relatedTarget=qx.bom.Event.getRelatedTarget(j);
}return this;
},
__cw:qx.core.Variant.select(a,
{"mshtml":{1:b,
2:c,
4:d},
"default":{0:b,
2:c,
1:d}}),
stop:function(){this.stopPropagation();
},
getButton:function(){switch(this._type){case f:case e:return b;
case h:return c;
default:return this.__cw[this._native.button]||g;
}},
isLeftPressed:function(){return this.getButton()===b;
},
isMiddlePressed:function(){return this.getButton()===d;
},
isRightPressed:function(){return this.getButton()===c;
},
getRelatedTarget:function(){return this._relatedTarget;
},
getViewportLeft:function(){return this._native.clientX;
},
getViewportTop:function(){return this._native.clientY;
},
getDocumentLeft:qx.core.Variant.select(a,
{"mshtml":function(){var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(o);
},
"default":function(){return this._native.pageX;
}}),
getDocumentTop:qx.core.Variant.select(a,
{"mshtml":function(){var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},
"default":function(){return this._native.pageY;
}}),
getScreenLeft:function(){return this._native.screenX;
},
getScreenTop:function(){return this._native.screenY;
},
getWheelDelta:qx.core.Variant.select(a,
{"default":function(){return -(this._native.wheelDelta/40);
},
"gecko":function(){return this._native.detail;
}})}});
})();
(function(){var a="qx.client",
b="qx.event.type.Drag";
qx.Class.define(b,
{extend:qx.event.type.Event,
members:{init:function(c,
d){arguments.callee.base.call(this,
false,
c);
this._native=d||null;
return this;
},
clone:function(e){var f=arguments.callee.base.call(this,
e);
f._native=this._native;
return f;
},
getDocumentLeft:qx.core.Variant.select(a,
{"mshtml":function(){if(this._native==null){return 0;
}var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(g);
},
"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),
getDocumentTop:qx.core.Variant.select(a,
{"mshtml":function(){if(this._native==null){return 0;
}var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
},
"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),
getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},
addType:function(h){this.getManager().addType(h);
},
addAction:function(i){this.getManager().addAction(i);
},
supportsType:function(h){return this.getManager().supportsType(h);
},
supportsAction:function(i){return this.getManager().supportsAction(i);
},
addData:function(h,
j){this.getManager().addData(h,
j);
},
getData:function(h){return this.getManager().getData(h);
},
getCurrentType:function(){return this.getManager().getCurrentType();
},
getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var a="blur",
b="losecapture",
c="capture",
d="_manager",
e="click",
f="_captureElement",
g="_window",
h="qx.event.dispatch.MouseCapture",
j="focus",
k="scroll";
qx.Class.define(h,
{extend:qx.core.Object,
implement:qx.event.IEventDispatcher,
construct:function(m){arguments.callee.base.call(this);
this._manager=m;
this._window=m.getWindow();
m.addListener(this._window,
a,
this.releaseCapture,
this);
m.addListener(this._window,
j,
this.releaseCapture,
this);
m.addListener(this._window,
k,
this.releaseCapture,
this);
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},
members:{canDispatchEvent:function(n,
o,
p){return this._captureElement&&this.__cx[p];
},
dispatchEvent:function(n,
o,
p){if(p==e){o.stopPropagation();
this.releaseCapture();
return;
}var q=this._manager.getListeners(this._captureElement,
p,
false);
if(q){o.setCurrentTarget(this._captureElement);
o.setEventPhase(qx.event.type.Event.AT_TARGET);
for(var r=0,
s=q.length;r<s;r++){var t=q[r].context||o.getCurrentTarget();
q[r].handler.call(t,
o);
}}},
__cx:{"mouseup":1,
"mousedown":1,
"click":1,
"dblclick":1,
"mousemove":1,
"mouseout":1,
"mouseover":1},
activateCapture:function(u){if(this._captureElement===u){return;
}
if(this._captureElement){this.releaseCapture();
}this._captureElement=u;
qx.event.Registration.fireEvent(u,
c);
},
releaseCapture:function(){var u=this._captureElement;
if(!u){return;
}this._captureElement=null;
qx.event.Registration.fireEvent(u,
b);
}},
destruct:function(){this._disposeFields(f,
d,
g);
},
defer:function(v){qx.event.Registration.addDispatcher(v);
}});
})();
(function(){var a="_window",
b="_manager",
c="qx.event.handler.Window";
qx.Class.define(c,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(d){arguments.callee.base.call(this);
this._manager=d;
this._window=d.getWindow();
this._initWindowObserver();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{error:1,
load:1,
beforeunload:1,
unload:1,
resize:1,
scroll:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,
IGNORE_CAN_HANDLE:true},
members:{canHandleEvent:function(f,
g){},
registerEvent:function(f,
g,
h){},
unregisterEvent:function(f,
g,
h){},
_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,
this);
var i=qx.event.handler.Window.SUPPORTED_TYPES;
for(var j in i){qx.bom.Event.addNativeListener(this._window,
j,
this._onNativeWrapper);
}},
_stopWindowObserver:function(){var i=qx.event.handler.Window.SUPPORTED_TYPES;
for(var j in i){qx.bom.Event.removeNativeListener(this._window,
j,
this._onNativeWrapper);
}},
_onNative:function(k){if(this.isDisposed()){return;
}var l=this._window;
var m=l.document;
var n=m.documentElement;
var f=k.target||k.srcElement;
if(f==null||f===l||f===m||f===n){qx.event.Registration.fireEvent(this._window,
k.type);
}}},
destruct:function(){this._stopWindowObserver();
this._disposeFields(b,
a);
},
defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var a="textarea",
b="input",
c="qx.client",
d="character",
e="qx.bom.Selection",
f="#text",
g="EndToEnd",
h="button",
i="body";
qx.Class.define(e,
{statics:{getSelectionObject:qx.core.Variant.select(c,
{"mshtml":function(j){return j.selection;
},
"default":function(j){return qx.dom.Node.getWindow(j).getSelection();
}}),
get:qx.core.Variant.select(c,
{"mshtml":function(k){var l=qx.bom.Range.get(qx.dom.Node.getDocument(k));
return l.text;
},
"default":function(k){if(qx.dom.Node.isElement(k)&&(k.nodeName.toLowerCase()==b||k.nodeName.toLowerCase()==a)){return k.value.substring(k.selectionStart,
k.selectionEnd);
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(k)).toString();
}return null;
}}),
getLength:qx.core.Variant.select(c,
{"mshtml":function(k){var m=qx.bom.Selection.get(k);
var n=qx.util.StringSplit.split(m,
/\r\n/);
return m.length-(n.length-1);
},
"opera":function(k){var m,
o,
n;
if(qx.dom.Node.isElement(k)&&(k.nodeName.toLowerCase()==b||k.nodeName.toLowerCase()==a)){var p=k.selectionStart;
var q=k.selectionEnd;
m=k.value.substring(p,
q);
o=q-p;
}else{m=qx.bom.Selection.get(k);
o=m.length;
}n=qx.util.StringSplit.split(m,
/\r\n/);
return o-(n.length-1);
},
"default":function(k){if(qx.dom.Node.isElement(k)&&(k.nodeName.toLowerCase()==b||k.nodeName.toLowerCase()==a)){return k.selectionEnd-k.selectionStart;
}else{return qx.bom.Selection.get(k).length;
}return null;
}}),
set:qx.core.Variant.select(c,
{"mshtml":function(k,
p,
q){var l;
if(qx.dom.Node.isDocument(k)){k=k.body;
}
if(qx.dom.Node.isElement(k)||qx.dom.Node.isText(k)){switch(k.nodeName.toLowerCase()){case b:case a:case h:if(q===undefined){q=k.value.length;
}
if(p>=0&&p<=k.value.length&&q>=0&&q<=k.value.length){l=qx.bom.Range.get(k);
l.collapse(true);
l.moveStart(d,
p);
l.moveEnd(d,
q);
l.select();
return true;
}break;
case f:if(q===undefined){q=k.nodeValue.length;
}
if(p>=0&&p<=k.nodeValue.length&&q>=0&&q<=k.nodeValue.length){l=qx.bom.Range.get(qx.dom.Node.getBodyElement(k));
l.moveToElementText(k.parentNode);
l.collapse(true);
l.moveStart(d,
p);
l.moveEnd(d,
q);
l.select();
return true;
}break;
default:if(q===undefined){q=k.childNodes.length-1;
}if(k.childNodes[p]&&k.childNodes[q]){l=qx.bom.Range.get(qx.dom.Node.getBodyElement(k));
l.moveToElementText(k.childNodes[p]);
l.collapse(true);
var r=qx.bom.Range.get(qx.dom.Node.getBodyElement(k));
r.moveToElementText(k.childNodes[q]);
l.setEndPoint(g,
r);
l.select();
return true;
}}}return false;
},
"default":function(k,
p,
q){var s=k.nodeName.toLowerCase();
if(qx.dom.Node.isElement(k)&&(s==b||s==a)){if(q===undefined){q=k.value.length;
}if(p>=0&&p<=k.value.length&&q>=0&&q<=k.value.length){k.select();
k.setSelectionRange(p,
q);
return true;
}}else{var t=false;
var u=qx.dom.Node.getWindow(k).getSelection();
var v=qx.dom.Node.getDocument(k);
var l=qx.bom.Range.get(k);
if(qx.dom.Node.isText(k)){if(q===undefined){q=k.length;
}
if(p>=0&&p<k.length&&q>=0&&q<=k.length){t=true;
}}else if(qx.dom.Node.isElement(k)){if(q===undefined){q=k.childNodes.length-1;
}
if(p>=0&&k.childNodes[p]&&q>=0&&k.childNodes[q]){t=true;
}}else if(qx.dom.Node.isDocument(k)){k=k.body;
if(q===undefined){q=k.childNodes.length-1;
}
if(p>=0&&k.childNodes[p]&&q>=0&&k.childNodes[q]){t=true;
}}
if(t){if(!u.isCollapsed){u.collapseToStart();
}l.setStart(k,
p);
if(qx.dom.Node.isText(k)){l.setEnd(k,
q);
}else{l.setEndAfter(k.childNodes[q]);
}if(u.rangeCount>0){u.removeAllRanges();
}u.addRange(l);
return true;
}}return false;
}}),
setAll:function(k){return qx.bom.Selection.set(k,
0);
},
clear:qx.core.Variant.select(c,
{"mshtml":function(k){var u=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(k));
var l=qx.bom.Range.get(k);
var w=l.parentElement();
var x=qx.bom.Range.get(qx.dom.Node.getDocument(k));
var s=k.nodeName.toLowerCase();
if(w==x.parentElement()&&w==k){u.empty();
}},
"default":function(k){var u=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(k));
var s=k.nodeName.toLowerCase();
if(qx.dom.Node.isElement(k)&&(s==b||s==a)){k.setSelectionRange(0,
0);
qx.bom.Element.blur(k);
}else if(qx.dom.Node.isDocument(k)||s==i){u.collapse(k.body?k.body:k,
0);
}else{var l=qx.bom.Range.get(k);
if(!l.collapsed){var y;
var z=l.commonAncestorContainer;
if(qx.dom.Node.isElement(k)&&qx.dom.Node.isText(z)){y=z.parentNode;
}else{y=z;
}
if(y==k){u.collapse(k,
0);
}}}}})}});
})();
(function(){var a="button",
b="qx.bom.Range",
c="text",
d="password",
e="file",
f="submit",
g="reset",
h="textarea",
i="input",
j="hidden",
k="qx.client",
l="body";
qx.Class.define(b,
{statics:{get:qx.core.Variant.select(k,
{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case i:switch(m.type){case c:case d:case j:case a:case g:case e:case f:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case h:case l:case a:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},
"default":function(m){var n=qx.dom.Node.getDocument(m);
var o=qx.bom.Selection.getSelectionObject(n);
if(o.rangeCount>0){return o.getRangeAt(0);
}else{return n.createRange();
}}})}});
})();
(function(){var a="",
b="g",
c="$",
d="qx.util.StringSplit",
e="\\$&",
f="^";
qx.Bootstrap.define(d,
{statics:{split:function(g,
h,
k){var l=a;
if(h===undefined){return [g.toString()];
}else if(h===null||h.constructor!==RegExp){h=new RegExp(String(h).replace(/[.*+?^${}()|[\]\/\\]/g,
e),
b);
}else{l=h.toString().replace(/^[\S\s]+\//,
a);
if(!h.global){h=new RegExp(h.source,
b+l);
}}var m=new RegExp(f+h.source+c,
l);
if(k===undefined||+k<0){k=false;
}else{k=Math.floor(+k);
if(!k){return [];
}}var n,
o=[],
p=0,
q=0;
while((k?q++<=k:true)&&(n=h.exec(g))){if((n[0].length===0)&&(h.lastIndex>n.index)){h.lastIndex--;
}
if(h.lastIndex>p){if(n.length>1){n[0].replace(m,
function(){for(var r=1;r<arguments.length-2;r++){if(arguments[r]===undefined){n[r]=undefined;
}}});
}o=o.concat(g.substring(p,
n.index),
(n.index===g.length?[]:n.slice(1)));
p=h.lastIndex;
}
if(n[0].length===0){h.lastIndex++;
}}return (p===g.length)?(h.test(a)?o:o.concat(a)):(k?o:o.concat(g.substring(p)));
}}});
})();
(function(){var a="qx.ui.core.queue.Widget",
b="widget";
qx.Class.define(a,
{statics:{__cy:{},
add:function(c){var d=this.__cy;
if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},
flush:function(){var d=this.__cy;
for(var e in d){d[e].syncWidget();
delete d[e];
}}}});
})();
(function(){var a="appearance",
b="qx.ui.core.queue.Appearance";
qx.Class.define(b,
{statics:{__cz:{},
add:function(c){var d=this.__cz;
if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},
flush:function(){var d=this.__cz;
for(var e in d){d[e].syncAppearance();
delete d[e];
}}}});
})();
(function(){var a="qx.ui.core.queue.Layout",
b="layout";
qx.Class.define(a,
{statics:{__bq:{},
add:function(c){this.__bq[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},
flush:function(){var d=this.__bs();
for(var e=d.length-1;e>=0;e--){var c=d[e];
if(c.hasValidLayout()){continue;
}if(c.isRootWidget()&&!c.hasUserBounds()){var f=c.getSizeHint();
c.renderLayout(0,
0,
f.width,
f.height);
}else{var g=c.getBounds();
c.renderLayout(g.left,
g.top,
g.width,
g.height);
}}},
getNestingLevel:function(c){var h=this.__nesting;
var j=0;
var k=c;
while(true){if(h[k.$$hash]!=null){j+=h[k.$$hash];
break;
}
if(!k._parent){break;
}k=k._parent;
j+=1;
}var l=j;
while(c&&c!==k){h[c.$$hash]=l--;
c=c._parent;
}return j;
},
isWidgetVisible:function(c){var h=this.__visibility;
var k=c;
var m=false;
while(k){if(h[k.$$hash]!=null){m=h[k.$$hash];
break;
}if(k.isRootWidget()){m=true;
break;
}if(!k.shouldBeLayouted()){break;
}k=k._parent;
}while(c&&c!==k){h[c.$$hash]=m;
c=c._parent;
}return m;
},
__br:function(){this.__visibility={};
this.__nesting={};
var n=[];
var d=this.__bq;
var c,
j;
for(var o in d){c=d[o];
if(this.isWidgetVisible(c)){j=this.getNestingLevel(c);
if(!n[j]){n[j]={};
}n[j][o]=c;
delete d[o];
}}return n;
},
__bs:function(){var p=[];
var n=this.__br();
for(var j=n.length-1;j>=0;j--){if(!n[j]){continue;
}
for(var o in n[j]){var c=n[j][o];
if(j==0||c.isRootWidget()||c.hasUserBounds()){p.push(c);
c.invalidateLayoutCache();
continue;
}var q=c.getSizeHint(false);
if(q){c.invalidateLayoutCache();
var r=c.getSizeHint();
var s=(!c.getBounds()||q.minWidth!==r.minWidth||q.width!==r.width||q.maxWidth!==r.maxWidth||q.minHeight!==r.minHeight||q.height!==r.height||q.maxHeight!==r.maxHeight);
}else{s=true;
}
if(s){var k=c.getLayoutParent();
if(!n[j-1]){n[j-1]={};
}n[j-1][k.$$hash]=k;
}else{p.push(c);
}}}return p;
}}});
})();
(function(){var a="dispose",
b="qx.ui.core.queue.Dispose";
qx.Class.define(b,
{statics:{__cA:{},
add:function(c){var d=this.__cA;
if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},
flush:function(){var d=this.__cA;
for(var e in d){d[e].dispose();
delete d[e];
}}}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,
{members:{getChildren:function(){return this._getChildren();
},
hasChildren:function(){return this._hasChildren();
},
indexOf:function(b){return this._indexOf(b);
},
add:function(b,
c){this._add(b,
c);
},
addAt:function(b,
d,
c){this._addAt(b,
d,
c);
},
addBefore:function(b,
e,
c){this._addBefore(b,
e,
c);
},
addAfter:function(b,
f,
c){this._addAfter(b,
f,
c);
},
remove:function(b){this._remove(b);
},
removeAt:function(d){this._removeAt(d);
},
removeAll:function(){this._removeAll();
}},
statics:{remap:function(g){g.getChildren=g._getChildren;
g.hasChildren=g._hasChildren;
g.indexOf=g._indexOf;
g.add=g._add;
g.addAt=g._addAt;
g.addBefore=g._addBefore;
g.addAfter=g._addAfter;
g.remove=g._remove;
g.removeAt=g._removeAt;
g.removeAll=g._removeAll;
}}});
})();
(function(){var a="Integer",
b="_applyDimension",
c="Boolean",
d="_applyStretching",
e="_applyMargin",
f="shorthand",
g="_applyAlign",
h="allowShrinkY",
i="bottom",
j="baseline",
k="marginBottom",
l="qx.ui.core.LayoutItem",
m="center",
n="marginTop",
o="allowGrowX",
p="middle",
q="marginLeft",
r="allowShrinkX",
s="top",
t="right",
u="marginRight",
v="abstract",
w="allowGrowY",
x="left";
qx.Class.define(l,
{type:v,
extend:qx.core.Object,
properties:{minWidth:{check:a,
nullable:true,
apply:b,
init:null,
themeable:true},
width:{check:a,
nullable:true,
apply:b,
init:null,
themeable:true},
maxWidth:{check:a,
nullable:true,
apply:b,
init:null,
themeable:true},
minHeight:{check:a,
nullable:true,
apply:b,
init:null,
themeable:true},
height:{check:a,
nullable:true,
apply:b,
init:null,
themeable:true},
maxHeight:{check:a,
nullable:true,
apply:b,
init:null,
themeable:true},
allowGrowX:{check:c,
apply:d,
init:true,
themeable:true},
allowShrinkX:{check:c,
apply:d,
init:true,
themeable:true},
allowGrowY:{check:c,
apply:d,
init:true,
themeable:true},
allowShrinkY:{check:c,
apply:d,
init:true,
themeable:true},
allowStretchX:{group:[o,
r],
mode:f,
themeable:true},
allowStretchY:{group:[w,
h],
mode:f,
themeable:true},
marginTop:{check:a,
init:0,
apply:e,
themeable:true},
marginRight:{check:a,
init:0,
apply:e,
themeable:true},
marginBottom:{check:a,
init:0,
apply:e,
themeable:true},
marginLeft:{check:a,
init:0,
apply:e,
themeable:true},
margin:{group:[n,
u,
k,
q],
mode:f,
themeable:true},
alignX:{check:[x,
m,
t],
nullable:true,
apply:g,
themeable:true},
alignY:{check:[s,
p,
i,
j],
nullable:true,
apply:g,
themeable:true}},
members:{getBounds:function(){return this.__userBounds||this.__computedLayout||null;
},
renderLayout:function(y,
z,
A,
B){var C;
var D=null;
if(this.getHeight()==null&&this._hasHeightForWidth()){var D=this._getHeightForWidth(A);
}
if(D!=null&&D!==this.__computedHeightForWidth){this.__computedHeightForWidth=D;
qx.ui.core.queue.Layout.add(this);
return null;
}else{var E=this.__computedLayout;
if(!E){E=this.__computedLayout={};
}var F={};
if(y!==E.left||z!==E.top){F.position=true;
E.left=y;
E.top=z;
}
if(A!==E.width||B!==E.height){F.size=true;
E.width=A;
E.height=B;
}if(this.__hasInvalidLayout){F.local=true;
delete this.__hasInvalidLayout;
}}return F;
},
shouldBeLayouted:function(){return true;
},
hasValidLayout:function(){return !this.__hasInvalidLayout;
},
scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},
invalidateLayoutCache:function(){this.__hasInvalidLayout=true;
this.__sizeHint=null;
},
getSizeHint:function(G){var H=this.__sizeHint;
if(H){return H;
}
if(G===false){return null;
}var H=this.__sizeHint=this._computeSizeHint();
if(this.__computedHeightForWidth&&this.getHeight()==null){H.height=this.__computedHeightForWidth;
}if(!this.getAllowShrinkX()){H.minWidth=H.width;
}else if(H.minWidth>H.width){H.width=H.minWidth;
}
if(!this.getAllowShrinkY()){H.minHeight=H.height;
}else if(H.minHeight>H.height){H.height=H.minHeight;
}if(!this.getAllowGrowX()){H.maxWidth=H.width;
}else if(H.width>H.maxWidth){H.width=H.maxWidth;
}
if(!this.getAllowGrowY()){H.maxHeight=H.height;
}else if(H.height>H.maxHeight){H.height=H.maxHeight;
}return H;
},
_computeSizeHint:function(){var I=this.getMinWidth()||0;
var J=this.getMinHeight()||0;
var A=this.getWidth()||I;
var B=this.getHeight()||J;
var K=this.getMaxWidth()||Infinity;
var L=this.getMaxHeight()||Infinity;
return {minWidth:I,
width:A,
maxWidth:K,
minHeight:J,
height:B,
maxHeight:L};
},
_hasHeightForWidth:function(){return false;
},
_getHeightForWidth:function(A){return null;
},
_applyMargin:function(){this.__updateMargin=true;
var M=this._parent;
if(M){M.updateLayoutProperties();
}},
_applyAlign:function(){var M=this._parent;
if(M){M.updateLayoutProperties();
}},
_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},
_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},
hasUserBounds:function(){return !!this.__userBounds;
},
setUserBounds:function(y,
z,
A,
B){this.__userBounds={left:y,
top:z,
width:A,
height:B};
qx.ui.core.queue.Layout.add(this);
},
resetUserBounds:function(){delete this.__userBounds;
qx.ui.core.queue.Layout.add(this);
},
__bj:{},
setLayoutProperties:function(N){if(N==null){return;
}var O=this.__layoutProperties;
if(!O){O=this.__layoutProperties={};
}var M=this.getLayoutParent();
if(M){M.updateLayoutProperties(N);
}for(var P in N){if(N[P]==null){delete O[P];
}else{O[P]=N[P];
}}},
getLayoutProperties:function(){return this.__layoutProperties||this.__bj;
},
clearLayoutProperties:function(){delete this.__layoutProperties;
},
updateLayoutProperties:function(N){var Q=this._getLayout();
if(Q){var P;
Q.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},
getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},
getLayoutParent:function(){return this._parent||null;
},
setLayoutParent:function(M){this._parent=M;
},
isRootWidget:function(){return false;
},
_getRoot:function(){var M=this;
while(M){if(M.isRootWidget()){return M;
}M=M._parent;
}return null;
},
clone:function(){var R=arguments.callee.base.call(this);
var N=this.__layoutProperties;
if(N){R.__layoutProperties=qx.lang.Object.copy(N);
}return R;
},
serialize:function(){var S=arguments.callee.base.call(this);
var N=this.__layoutProperties;
if(N){S.layoutProperties=qx.lang.Object.copy(N);
}return S;
}}});
})();
(function(){var a="px",
b="qx.event.type.Mouse",
c="Boolean",
d="qx.event.type.Drag",
f="visible",
g="qx.event.type.Focus",
h="excluded",
j="Integer",
k="position",
m="on",
n="top",
o="left",
p="absolute",
q="height",
r="_applyPadding",
s="qx.event.type.Event",
t="width",
u="zIndex",
v="hidden",
w="1px solid ",
x="0px",
y="tabIndex",
z="backgroundColor",
A="div",
B="inherit",
C="qx.event.type.KeySequence",
D="qx.event.type.Data",
E="focused",
F="disabled",
G="move",
H="dragstart",
I="dragchange",
J="dragend",
K="resize",
L="none",
M="default",
N="Color",
O="qx.client",
P="String",
Q="drag",
R="_applyBackgroundColor",
S="_applyFocusable",
T="_contentElement",
U="qx.event.type.KeyInput",
V="Font",
W="normal",
X="_applyEnabled",
Y="_applySelectable",
ba="_applyKeepActive",
bb="Number",
bc="_applyVisibility",
bd="qxDraggable",
be="paddingLeft",
bf="_applyDroppable",
bg="borderTop",
bh="userSelect",
bi="_applyCursor",
bj="_applyDraggable",
bk="Decorator",
bl="changeTextColor",
bm="$$widget",
bn="borderBottom",
bo="paddingTop",
bp="opacity",
bq="_containerElement",
br="mshtml",
bs="hideFocus",
bt="borderLeft",
bu="borderRight",
bv="outline",
bw="_applyAppearance",
bx="overflowX",
by="hovered",
bz="_applyOpacity",
bA="qx.ui.core.Widget",
bB="__states",
bC="_applyFont",
bD="cursor",
bE="qxDroppable",
bF="changeZIndex",
bG="overflowY",
bH="_decorationElement",
bI="changeEnabled",
bJ="changeFont",
bK="off",
bL="_applyDecorator",
bM="_applyZIndex",
bN="_applyTextColor",
bO="true",
bP="widget",
bQ="changeDecorator",
bR="_applyTabIndex",
bS="changeAppearance",
bT="shorthand",
bU="/",
bV="__children",
bW="changeVisibility",
bX="qxSelectable",
bY="paddingBottom",
ca="qx.ui.tooltip.ToolTip",
cb="_applyKeepFocus",
cc="webkit",
cd="paddingRight",
ce="changeBackgroundColor",
cf="qxKeepFocus",
cg="undefined",
ch="qxKeepActive";
qx.Class.define(bA,
{extend:qx.ui.core.LayoutItem,
include:[qx.locale.MTranslation],
construct:function(){arguments.callee.base.call(this);
this._containerElement=this._createContainerElement();
this._contentElement=this.__bn();
this._containerElement.add(this._contentElement);
this._containerElement.setAttribute(bm,
this.toHashCode());
{};
this.__children=[];
qx.ui.core.queue.Appearance.add(this);
this.initFocusable();
this.initSelectable();
this.initCursor();
this.initKeepFocus();
this.initKeepActive();
},
events:{appear:s,
disappear:s,
resize:D,
move:D,
mousemove:b,
mouseover:b,
mouseout:b,
mousedown:b,
mouseup:b,
click:b,
dblclick:b,
contextmenu:b,
mousewheel:b,
keyup:C,
keydown:C,
keypress:C,
keyinput:U,
focus:g,
blur:g,
focusin:g,
focusout:g,
activate:g,
deactivate:g,
capture:s,
losecapture:s,
drop:d,
dragleave:d,
dragover:d,
drag:d,
dragstart:d,
dragend:d,
dragchange:d,
droprequest:d},
properties:{paddingTop:{check:j,
init:0,
apply:r,
themeable:true},
paddingRight:{check:j,
init:0,
apply:r,
themeable:true},
paddingBottom:{check:j,
init:0,
apply:r,
themeable:true},
paddingLeft:{check:j,
init:0,
apply:r,
themeable:true},
padding:{group:[bo,
cd,
bY,
be],
mode:bT,
themeable:true},
zIndex:{nullable:true,
init:null,
apply:bM,
event:bF,
check:j,
themeable:true},
decorator:{nullable:true,
init:null,
apply:bL,
event:bQ,
check:bk,
themeable:true},
backgroundColor:{nullable:true,
check:N,
apply:R,
event:ce,
themeable:true},
textColor:{nullable:true,
init:B,
check:N,
apply:bN,
event:bl,
themeable:true,
inheritable:true},
font:{nullable:true,
init:B,
apply:bC,
check:V,
event:bJ,
themeable:true,
inheritable:true},
opacity:{check:bb,
apply:bz,
themeable:true,
nullable:true,
init:null},
cursor:{check:P,
apply:bi,
themeable:true,
inheritable:true,
nullable:true,
init:null},
toolTip:{check:ca,
nullable:true},
visibility:{check:[f,
v,
h],
init:f,
apply:bc,
event:bW},
enabled:{init:B,
check:c,
inheritable:true,
apply:X,
event:bI},
anonymous:{init:false,
check:c},
tabIndex:{check:j,
nullable:true,
apply:bR},
focusable:{check:c,
init:false,
apply:S},
keepFocus:{check:c,
init:false,
apply:cb},
keepActive:{check:c,
init:false,
apply:ba},
draggable:{check:c,
init:false,
apply:bj},
droppable:{check:c,
init:false,
apply:bf},
selectable:{check:c,
init:false,
apply:Y},
appearance:{check:P,
init:bP,
apply:bw,
event:bS}},
statics:{getWidgetByElement:function(ci){try{while(ci){var cj=ci.$$widget;
if(cj!=null){return qx.core.ObjectRegistry.fromHashCode(cj);
}ci=ci.parentNode;
}}catch(ex){}return null;
},
contains:function(ck,
cl){while(cl){if(ck==cl){return true;
}cl=cl.getLayoutParent();
}return false;
}},
members:{_getLayout:function(){return this.__layout;
},
_setLayout:function(cm){{};
if(this.__layout){this.__layout.connectToWidget(null);
}
if(cm){cm.connectToWidget(this);
}this.__layout=cm;
qx.ui.core.queue.Layout.add(this);
},
setLayoutParent:function(ck){if(this._parent===ck){return;
}
if(this._parent){this._parent.getContentElement().remove(this._containerElement);
}this._parent=ck||null;
if(this._parent){this._parent.getContentElement().add(this._containerElement);
}qx.core.Property.refresh(this);
},
configureSeparators:function(cn){var co=this._separators;
var cp=this.getContentElement();
var cq;
if(!co){co=this._separators=[];
for(var cr=0;cr<cn;cr++){cq=new qx.html.Element;
cq.setStyle(k,
p);
co.push(cq);
cp.add(cq);
}}else{var cs=co.length;
if(cs<cn){for(var cr=cs;cr<cn;cr++){cq=new qx.html.Element;
cq.setStyle(k,
p);
co.push(cq);
cp.add(cq);
}}else if(cs>cn){for(var cr=cs-1;cr>cn-1;cr--){co[cr].dispose();
}co.length=cn;
}}},
renderHorizontalSeparator:function(ct,
cu,
cv,
cw){var cq=this._separators[cu];
var cx=qx.theme.manager.Color.getInstance();
cq.setStyle(o,
cv+a);
cq.setStyle(t,
x);
cq.setStyle(n,
x);
cq.setStyle(q,
cw+a);
cq.setStyle(bt,
ct[0]?w+cx.resolve(ct[0]):null);
cq.setStyle(bu,
ct[1]?w+cx.resolve(ct[1]):null);
},
renderVerticalSeparator:function(ct,
cu,
cy,
cz){var cq=this._separators[cu];
var cx=qx.theme.manager.Color.getInstance();
cq.setStyle(o,
x);
cq.setStyle(t,
cz+a);
cq.setStyle(n,
cy+a);
cq.setStyle(q,
x);
cq.setStyle(bg,
ct[0]?w+cx.resolve(ct[0]):null);
cq.setStyle(bn,
ct[1]?w+cx.resolve(ct[1]):null);
},
renderLayout:function(cv,
cy,
cz,
cw){var cA=arguments.callee.base.call(this,
cv,
cy,
cz,
cw);
if(!cA){return;
}var cB=this._containerElement;
var cp=this._contentElement;
var cC=cA.size||this.__updateInsets;
var cD=a;
if(cA.position){cB.setStyle(o,
cv+cD);
cB.setStyle(n,
cy+cD);
}if(cA.size){cB.setStyle(t,
cz+cD);
cB.setStyle(q,
cw+cD);
}
if(cC||cA.local||this.__updateMargin){var cE=this.getInsets();
var cF=cz-cE.left-cE.right;
var cG=cw-cE.top-cE.bottom;
}
if(this.__updateInsets){cp.setStyle(o,
cE.left+cD);
cp.setStyle(n,
cE.top+cD);
}
if(cC){cp.setStyle(t,
cF+cD);
cp.setStyle(q,
cG+cD);
}
if(cA.size||this.__styleDecorator||this.__initDecorator){if(this._decorator){var cH=this.getBackgroundColor();
var cI=this._decorationElement;
var cJ={size:cA.size,
style:this.__styleDecorator,
init:this.__initDecorator,
bgcolor:this.__styleBackgroundColor};
this._decorator.render(cI,
cz,
cw,
cH,
cJ);
}delete this.__styleDecorator;
delete this.__styleBackgroundColor;
delete this.__initDecorator;
}
if(cC||cA.local||this.__updateMargin){if(this.__layout&&this.hasLayoutChildren()){this.__layout.renderLayout(cF,
cG);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cA.position&&this.hasListener(G)){this.fireDataEvent(G,
this.getBounds());
}
if(cA.size&&this.hasListener(K)){this.fireDataEvent(K,
this.getBounds());
}delete this.__updateInsets;
delete this.__updateMargin;
},
_computeSizeHint:function(){var cz=this.getWidth();
var cK=this.getMinWidth();
var cL=this.getMaxWidth();
var cw=this.getHeight();
var cM=this.getMinHeight();
var cN=this.getMaxHeight();
var cO=this._getContentHint();
var cE=this.getInsets();
var cP=cE.left+cE.right;
var cQ=cE.top+cE.bottom;
if(cz==null){cz=cO.width+cP;
}
if(cw==null){cw=cO.height+cQ;
}
if(cK==null){cK=cP;
if(cO.minWidth!=null){cK+=cO.minWidth;
}}
if(cM==null){cM=cQ;
if(cO.minHeight!=null){cM+=cO.minHeight;
}}
if(cL==null){if(cO.maxWidth==null){cL=Infinity;
}else{cL=cO.maxWidth+cP;
}}
if(cN==null){if(cO.maxHeight==null){cN=Infinity;
}else{cN=cO.maxHeight+cQ;
}}return {width:cz,
minWidth:cK,
maxWidth:cL,
height:cw,
minHeight:cM,
maxHeight:cN};
},
invalidateLayoutCache:function(){arguments.callee.base.call(this);
if(this.__layout){this.__layout.invalidateLayoutCache();
}},
_getContentHint:function(){var cm=this.__layout;
if(cm){if(this.hasLayoutChildren()){var cR=cm.getSizeHint();
var cS;
return cR;
}else{return {width:0,
height:0};
}}else{return {width:100,
height:50};
}},
_getHeightForWidth:function(cz){var cE=this.getInsets();
var cP=cE.left+cE.right;
var cQ=cE.top+cE.bottom;
var cT=cz-cP;
var cU=this._getContentHeightForWidth(cT);
var cw=cU+cQ;
return cw;
},
_getContentHeightForWidth:function(cz){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},
getInsets:function(){if(this._getStyleTarget&&this._getStyleTarget()!==this){var cy=0;
var cV=0;
var cW=0;
var cv=0;
}else{var cy=this.getPaddingTop();
var cV=this.getPaddingRight();
var cW=this.getPaddingBottom();
var cv=this.getPaddingLeft();
}
if(this._decorator){var cX=this._decorator.getInsets();
cy+=cX.top;
cV+=cX.right;
cW+=cX.bottom;
cv+=cX.left;
}return {"top":cy,
"right":cV,
"bottom":cW,
"left":cv};
},
getInnerSize:function(){var cY=this.getBounds();
if(!cY){return null;
}var cE=this.getInsets();
return {width:cY.width-cE.left-cE.right,
height:cY.height-cE.top-cE.bottom};
},
show:function(){this.setVisibility(f);
},
hide:function(){this.setVisibility(v);
},
exclude:function(){this.setVisibility(h);
},
isVisible:function(){return this.getVisibility()===f;
},
isHidden:function(){return this.getVisibility()!==f;
},
isExcluded:function(){return this.getVisibility()===h;
},
_createContainerElement:function(){var cq=new qx.html.Element(A);
cq.setStyle(k,
p);
cq.setStyle(u,
0);
return cq;
},
__bm:function(){var cq=new qx.html.Element(A);
cq.setStyle(u,
5);
cq.setStyle(k,
p);
cq.setStyle(o,
0);
cq.setStyle(n,
0);
return cq;
},
__bn:function(){var cq=this._createContentElement();
cq.setStyle(k,
p);
cq.setStyle(u,
10);
return cq;
},
_createContentElement:function(){var cq=new qx.html.Element(A);
cq.setStyle(bx,
v);
cq.setStyle(bG,
v);
return cq;
},
getContainerElement:function(){return this._containerElement;
},
getContentElement:function(){return this._contentElement;
},
getLayoutChildren:function(){if(this.__layoutChildren){return this.__layoutChildren;
}var da=[];
for(var cr=0,
db=this.__children.length;cr<db;cr++){var cl=this.__children[cr];
if(!cl.hasUserBounds()&&cl.shouldBeLayouted()){da.push(cl);
}}this.__layoutChildren=da;
return da;
},
scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},
invalidateLayoutChildren:function(){var cm=this.__layout;
if(cm){cm.invalidateChildrenCache();
}this.__layoutChildren=null;
qx.ui.core.queue.Layout.add(this);
},
shouldBeLayouted:function(){return this.getVisibility()!==h;
},
hasLayoutChildren:function(){return this.getLayoutChildren().length>0;
},
getChildrenContainer:function(){return this;
},
_getChildren:function(){return this.__children;
},
_indexOf:function(cl){return this.__children.indexOf(cl);
},
_hasChildren:function(){return !!this.__children[0];
},
_add:function(cl,
dc){this.__bo(cl,
dc);
this.__children.push(cl);
},
_addAt:function(cl,
cu,
dc){var dd=this.__children[cu];
if(dd===cl){return cl.setLayoutProperties(dc);
}this.__bo(cl,
dc);
if(dd){qx.lang.Array.insertBefore(this.__children,
cl,
dd);
}else{this.__children.push(cl);
}},
_addBefore:function(cl,
de,
dc){{};
this.__bo(cl,
dc);
qx.lang.Array.insertBefore(this.__children,
cl,
de);
},
_addAfter:function(cl,
df,
dc){{};
this.__bo(cl,
dc);
qx.lang.Array.insertAfter(this.__children,
cl,
df);
},
_remove:function(cl){this.__bp(cl);
qx.lang.Array.remove(this.__children,
cl);
},
_removeAt:function(cu){var cl=this.__children[cu];
this.__bp(cl);
qx.lang.Array.removeAt(this.__children,
cu);
},
_removeAll:function(){var dg=this.__children;
for(var cr=dg.length-1;cr>=0;cr--){dg[cr].setLayoutParent(null);
}dg.length=0;
qx.ui.core.queue.Layout.add(this);
},
_afterAddChild:null,
_afterRemoveChild:null,
__bo:function(cl,
dc){{};
var ck=cl.getLayoutParent();
if(ck){ck._remove(cl);
}cl.setLayoutParent(this);
if(dc){cl.setLayoutProperties(dc);
}else{this.updateLayoutProperties();
}this.__layoutChildren=null;
if(this._afterAddChild){this._afterAddChild(cl);
}},
__bp:function(cl){{};
cl.setLayoutParent(null);
if(this.__layout){this.__layout.invalidateChildrenCache();
}this.__layoutChildren=null;
qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(cl);
}},
capture:function(){this._containerElement.capture();
},
releaseCapture:function(){this._containerElement.releaseCapture();
},
_getStyleTarget:null,
_applyPadding:function(dh,
di,
dj){if(this._getStyleTarget&&this._getStyleTarget()!==this){var dc={};
dc[dj]=dh;
this._getStyleTarget().set(dc);
}else{this.__updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}},
_applyDecorator:function(dh,
di){var dk=this.__oldInsets;
var dl;
if(dh){this._decorator=qx.theme.manager.Decoration.getInstance().resolve(dh);
dl=this._decorator.getInsets();
this.__oldInsets=qx.lang.Object.copy(dl);
}else{this._decorator=null;
dl=null;
}var dm=this._containerElement;
var dn=this._decorationElement;
if(di&&dh){var dp=di.classname!==dh.classname;
var dq=dk.top!==dl.top||dk.right!==dl.right||dk.bottom!==dl.bottom||dk.left!==dl.left;
}else{var dp=true;
var dq=true;
var dr=this.getBackgroundColor();
if(dh){if(!dn){dn=this._decorationElement=this.__bm();
dm.add(dn);
}if(dr){dm.removeStyle(z);
}}else if(dr){dm.setStyle(z,
qx.theme.manager.Color.getInstance().resolve(dr)||null);
}}if(di&&dp){var ds=qx.theme.manager.Decoration.getInstance().resolve(di);
ds.reset(dn);
}
if(dh){if(dq){if(dp&&!this.__initDecorator){this.__initDecorator=true;
}this.__updateInsets=true;
this.__styleDecorator=true;
qx.ui.core.queue.Layout.add(this);
}else if(!this.__styleDecorator){var dt=this.getBounds();
this._decorator.render(dn,
dt.width,
dt.height,
dr,
{init:dp,
style:true});
}}else{this.__updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}},
_applyTextColor:function(dh,
di){if(this._getStyleTarget&&this._getStyleTarget()!==this){var du=this._getStyleTarget();
if(dh){du.setTextColor(dh);
}else{du.resetTextColor();
}return;
}},
_applyZIndex:function(dh,
di){this._containerElement.setStyle(u,
dh==null?0:dh);
},
_applyVisibility:function(dh,
di){if(dh===f){this._containerElement.show();
}else{this._containerElement.hide();
}var ck=this._parent;
if(ck&&(di==null||dh==null||di===h||dh===h)){ck.invalidateLayoutChildren();
}},
_applyOpacity:function(dh,
di){this._containerElement.setStyle(bp,
dh);
},
_applyCursor:function(dh,
di){if(dh==null&&!this.isSelectable()){dh=M;
}this._containerElement.setStyle(bD,
dh);
},
_applyBackgroundColor:function(dh,
di){if(this._decorator){if(!this.__styleDecorator){var dt=this.getBounds();
this._decorator.render(this._decorationElement,
dt.width,
dt.height,
dh,
{bgcolor:true});
}else{this.__styleBackgroundColor=true;
}}else{this._containerElement.setStyle(z,
qx.theme.manager.Color.getInstance().resolve(dh)||null);
}},
_applyFont:function(dh,
di){if(this._getStyleTarget&&this._getStyleTarget()!==this){var du=this._getStyleTarget();
if(dh){du.setFont(dh);
}else{du.resetFont();
}}},
hasState:function(dv){var dw=this.__states;
return dw&&dw[dv];
},
addState:function(dv){var dw=this.__states;
if(!dw){dw=this.__states={};
}
if(dw[dv]){return;
}this.__states[dv]=true;
qx.ui.core.queue.Appearance.add(this);
var dx=this._forwardStates;
var dy=this.__childControls;
if(dx&&dx[dv]&&dy){var dz;
for(var dA in dy){dz=dy[dA];
if(dz instanceof qx.ui.core.Widget){dy[dA].addState(dv);
}}}},
removeState:function(dv){var dw=this.__states;
if(!dw||!dw[dv]){return;
}delete this.__states[dv];
qx.ui.core.queue.Appearance.add(this);
var dx=this._forwardStates;
var dy=this.__childControls;
if(dx&&dx[dv]&&dy){for(var dA in dy){var dz=dy[dA];
if(dz instanceof qx.ui.core.Widget){dz.removeState(dv);
}}}},
replaceState:function(di,
dh){var dw=this.__states;
if(!dw){dw=this.__states={};
}
if(!dw[dh]){dw[dh]=true;
}
if(dw[di]){delete dw[di];
}qx.ui.core.queue.Appearance.add(this);
var dx=this._forwardStates;
var dy=this.__childControls;
if(dx&&dx[dh]&&dy){for(var dA in dy){var dz=dy[dA];
if(dz instanceof qx.ui.core.Widget){dz.replaceState(di,
dh);
}}}},
syncAppearance:function(){var dw=this.__states;
var dB=this.__selector;
var dC=qx.theme.manager.Appearance.getInstance();
var dD=qx.core.Property.$$method.style;
var dE=qx.core.Property.$$method.unstyle;
if(this.__updateSelector){delete this.__updateSelector;
if(dB){var dF=dC.styleFrom(dB,
dw);
if(dF){dB=null;
}}}if(!dB){var dG=this;
var dA=[];
do{dA.push(dG.$$subcontrol||dG.getAppearance());
}while(dG=dG.$$subparent);
dB=this.__selector=dA.reverse().join(bU);
}var dH=dC.styleFrom(dB,
dw);
if(dH){if(dF){for(var dI in dF){if(dH[dI]===undefined){this[dE[dI]]();
}}}var dI;
var dh;
var dJ=cg;
for(var dI in dH){dh=dH[dI];
dh===dJ?this[dE[dI]]():this[dD[dI]](dh);
}}else if(dF){for(var dI in dF){this[dE[dI]]();
}}},
_applyAppearance:function(dh,
di){this.updateAppearance();
},
updateAppearance:function(){this.__updateSelector=true;
qx.ui.core.queue.Appearance.add(this);
var dy=this.__childControls;
if(dy){var dG;
for(var dA in dy){dG=dy[dA];
if(dG instanceof qx.ui.core.Widget){dG.updateAppearance();
}}}},
syncWidget:function(){},
getEventTarget:function(){var du=this;
while(du.getAnonymous()){du=du.getLayoutParent();
if(!du){return null;
}}return du;
},
getFocusTarget:function(){var du=this;
if(!du.getEnabled()){return null;
}
while(du.getAnonymous()||!du.getFocusable()){du=du.getLayoutParent();
if(!du||!du.getEnabled()){return null;
}}return du;
},
getFocusElement:function(){return this._containerElement;
},
isTabable:function(){return this.isFocusable();
},
_applyFocusable:function(dh,
di){var du=this.getFocusElement();
if(dh){var dK=this.getTabIndex();
if(dK==null){dK=1;
}du.setAttribute(y,
dK);
if(qx.core.Variant.isSet(O,
br)){du.setAttribute(bs,
bO);
}else{du.setStyle(bv,
L);
}}else{if(du.isNativelyFocusable()){du.setAttribute(y,
-1);
}else if(di){du.setAttribute(y,
null);
}}},
_applyKeepFocus:function(dh){var du=this.getFocusElement();
du.setAttribute(cf,
dh?m:null);
},
_applyKeepActive:function(dh){var du=this.getContainerElement();
du.setAttribute(ch,
dh?m:null);
},
_applyTabIndex:function(dh){if(dh==null){dh=1;
}else if(dh<1||dh>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&dh!=null){this.getFocusElement().setAttribute(y,
dh);
}},
_applySelectable:function(dh){this._applyCursor(this.getCursor());
this._containerElement.setAttribute(bX,
dh?m:bK);
if(qx.core.Variant.isSet(O,
cc)){this._containerElement.setStyle(bh,
dh?W:L);
}},
_applyEnabled:function(dh,
di){if(dh===false){this.addState(F);
this.removeState(by);
if(this.isFocusable()){this.blur();
this._applyFocusable(false,
true);
}}else{this.removeState(F);
if(this.isFocusable()){this._applyFocusable(true,
false);
}}},
_applyDraggable:function(dh,
di){qx.ui.core.DragDropCursor.getInstance();
if(dh){this.addListener(H,
this._onDragStart);
this.addListener(Q,
this._onDrag);
this.addListener(J,
this._onDragEnd);
this.addListener(I,
this._onDragChange);
}else{this.removeListener(H,
this._onDragStart);
this.removeListener(Q,
this._onDrag);
this.removeListener(J,
this._onDragEnd);
this.removeListener(I,
this._onDragChange);
}this._containerElement.setAttribute(bd,
dh?m:null);
},
_applyDroppable:function(dh,
di){this._containerElement.setAttribute(bE,
dh?m:null);
},
_onDragStart:function(dL){qx.ui.core.DragDropCursor.getInstance().alignToMouse(dL);
this.getApplicationRoot().setGlobalCursor(M);
},
_onDrag:function(dL){qx.ui.core.DragDropCursor.getInstance().alignToMouse(dL);
},
_onDragEnd:function(dL){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,
-1000);
this.getApplicationRoot().resetGlobalCursor();
},
_onDragChange:function(dL){var dM=qx.ui.core.DragDropCursor.getInstance();
var dN=dL.getCurrentAction();
dN?dM.setAction(dN):dM.resetAction();
},
visualizeFocus:function(){this.addState(E);
},
visualizeBlur:function(){this.removeState(E);
},
scrollChildIntoView:function(cl,
dO,
dP){this.scrollChildIntoViewX(cl,
dO);
this.scrollChildIntoViewY(cl,
dP);
},
scrollChildIntoViewX:function(cl,
dQ){this._contentElement.scrollChildIntoViewX(cl.getContainerElement(),
dQ);
},
scrollChildIntoViewY:function(cl,
dQ){this._contentElement.scrollChildIntoViewY(cl.getContainerElement(),
dQ);
},
supportsDrop:function(dR){var dS=this.getSupportsDropMethod();
if(dS!==null){return dS.call(this,
dR);
}return (this!=dR.sourceWidget);
},
focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},
blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},
activate:function(){this._containerElement.activate();
},
deactivate:function(){this._containerElement.deactivate();
},
tabFocus:function(){this.getFocusElement().focus();
},
_hasChildControl:function(dA){if(!this.__childControls){return false;
}return !!this.__childControls[dA];
},
_getChildControl:function(dA,
dT){if(!this.__childControls){if(dT){return null;
}this.__childControls={};
}var dz=this.__childControls[dA];
if(dz){return dz;
}
if(dT===true){return null;
}return this._createChildControl(dA);
},
_showChildControl:function(dA){var dz=this._getChildControl(dA);
dz.show();
return dz;
},
_excludeChildControl:function(dA){var dz=this._getChildControl(dA,
true);
if(dz){dz.exclude();
}},
_isChildControlVisible:function(dA){var dz=this._getChildControl(dA,
true);
if(dz){return dz.isVisible();
}return false;
},
_createChildControl:function(dA){if(!this.__childControls){this.__childControls={};
}else if(this.__childControls[dA]){throw new Error("Child control '"+dA+"' already created!");
}var dz=this._createChildControlImpl(dA);
if(!dz){throw new Error("Unsupported control: "+dA);
}dz.$$subcontrol=dA;
dz.$$subparent=this;
var dw=this.__states;
var dx=this._forwardStates;
if(dw&&dx&&dz instanceof qx.ui.core.Widget){for(var dv in dw){if(dx[dv]){dz.addState(dv);
}}}return this.__childControls[dA]=dz;
},
_createChildControlImpl:function(dA){return null;
},
_disposeChildControls:function(){var dy=this.__childControls;
if(!dy){return;
}
for(var dA in dy){dy[dA].dispose();
}delete this.__childControls;
},
_findTopControl:function(){var dG=this;
while(dG){if(!dG.$$subparent){return dG;
}dG=dG.$$subparent;
}return null;
},
getContainerLocation:function(dU){var dV=this.getContainerElement().getDomElement();
return dV?qx.bom.element.Location.get(dV,
dU):null;
},
getContentLocation:function(dU){var dV=this.getContainerElement().getDomElement();
return dV?qx.bom.element.Location.get(dV,
dU):null;
},
setDomLeft:function(dh){var dV=this.getContainerElement().getDomElement();
if(dV){dV.style.left=dh+a;
}else{throw new Error("DOM element is not yet created!");
}},
setDomTop:function(dh){var dV=this.getContainerElement().getDomElement();
if(dV){dV.style.top=dh+a;
}else{throw new Error("DOM element is not yet created!");
}},
setDomPosition:function(cv,
cy){var dV=this.getContainerElement().getDomElement();
if(dV){dV.style.left=cv+a;
dV.style.top=cy+a;
}else{throw new Error("DOM element is not yet created!");
}},
destroy:function(){var ck=this.getLayoutParent();
if(ck){ck.remove(this);
}qx.ui.core.queue.Dispose.add(this);
},
clone:function(){var dW=arguments.callee.base.call(this);
if(this.getChildren){var dg=this.getChildren();
for(var cr=0,
db=dg.length;cr<db;cr++){dW.add(dg[cr].clone());
}}return dW;
},
serialize:function(){var dX=arguments.callee.base.call(this);
if(this.getChildren){var dg=this.getChildren();
if(dg.length>0){dX.children=[];
for(var cr=0,
db=dg.length;cr<db;cr++){dX.children.push(dg[cr].serialize());
}}}
if(this.getLayout){var cm=this.getLayout();
if(cm){dX.layout=cm.serialize();
}}return dX;
}},
destruct:function(){this._disposeChildControls();
this._disposeArray(bV);
this._disposeObjects(bB,
bq,
T,
bH);
}});
})();
(function(){var a="100%",
b="backgroundColor",
c="opacity",
d="_applyBlockerColor",
e="Number",
f="zIndex",
g="qx.ui.core.MBlocker",
h="_applyBlockerOpacity",
j="Color",
k="absolute";
qx.Mixin.define(g,
{properties:{blockerColor:{check:j,
init:null,
nullable:true,
apply:d,
themeable:true},
blockerOpacity:{check:e,
init:1,
apply:h,
themeable:true}},
members:{_applyBlockerColor:function(l,
m){var n=[];
this.__blocker&&n.push(this.__blocker);
this.__contentBlocker&&n.push(this.__contentBlocker);
for(var o=0;o<n.length;o++){p.setStlye(b,
qx.theme.manager.Color.getInstance().resolve(l));
}},
_applyBlockerOpacity:function(l,
m){var n=[];
this.__blocker&&n.push(this.__blocker);
this.__contentBlocker&&n.push(this.__contentBlocker);
for(var o=0;o<n.length;o++){p.setStlye(c,
l);
}},
__ex:function(){var p=new qx.html.Element().setStyles({position:k,
width:a,
height:a,
opacity:this.getBlockerOpacity(),
backgroundColor:qx.theme.manager.Color.getInstance().resolve(this.getBlockerColor())});
return p;
},
_getBlocker:function(){if(!this.__blocker){this.__blocker=this.__ex();
this.getContentElement().add(this.__blocker);
this.__blocker.exclude();
}return this.__blocker;
},
block:function(){if(this.__isBlocked){return;
}this.__isBlocked=true;
this._getBlocker().include();
this.__oldAnonymous=this.getAnonymous();
this.setAnonymous(true);
},
isBlocked:function(){return !!this.__isBlocked;
},
unblock:function(){if(!this.__isBlocked){return;
}this.__isBlocked=false;
this.setAnonymous(this.__oldAnonymous);
this._getBlocker().exclude();
},
_getContentBlocker:function(){if(!this.__contentBlocker){this.__contentBlocker=this.__ex();
this.getContentElement().add(this.__contentBlocker);
this.__contentBlocker.exclude();
}return this.__contentBlocker;
},
blockContent:function(q){var p=this._getContentBlocker();
p.setStyle(f,
q);
if(this.__isContentBlocked){return;
}this.__isContentBlocked=true;
p.include();
},
isContentBlocked:function(){return !!this.__isContentBlocked;
},
unblockContent:function(){if(!this.__isContentBlocked){return;
}this.__isContentBlocked=false;
this._getContentBlocker().exclude();
}}});
})();
(function(){var a="qx.ui.window.Window",
b="changeModal",
c="changeVisibility",
d="changeActive",
f="_applyActiveWindow",
g="qx.ui.window.MDesktop";
qx.Mixin.define(g,
{properties:{activeWindow:{check:a,
apply:f}},
members:{getWindowManager:function(){if(!this.__manager){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__manager;
},
supportsMaximize:function(){return true;
},
setWindowManager:function(h){if(this.__manager){this.__manager.setDesktop(null);
}h.setDesktop(this);
this.__manager=h;
},
_onChangeActive:function(i){if(i.getData()){this.setActiveWindow(i.getTarget());
}},
_applyActiveWindow:function(j,
k){this.getWindowManager().changeActiveWindow(j,
k);
j.setActive(true);
if(k){k.resetActive();
}},
_onChangeModal:function(i){this.getWindowManager().updateStack();
},
_onChangeVisibility:function(){this.getWindowManager().updateStack();
},
_afterAddChild:function(l){if(qx.Class.isDefined(a)&&l instanceof qx.ui.window.Window){this._addWindow(l);
}},
_addWindow:function(l){this.getWindows().push(l);
l.addListener(d,
this._onChangeActive,
this);
l.addListener(b,
this._onChangeModal,
this);
l.addListener(c,
this._onChangeVisibility,
this);
if(l.getActive()){this.setActiveWindow(l);
}this.getWindowManager().updateStack();
},
_afterRemoveChild:function(l){if(qx.Class.isDefined(a)&&l instanceof qx.ui.window.Window){this._removeWindow(l);
}},
_removeWindow:function(l){qx.lang.Array.remove(this.getWindows(),
l);
l.removeListener(d,
this._onChangeActive,
this);
l.removeListener(b,
this._onChangeModal,
this);
l.removeListener(c,
this._onChangeVisibility,
this);
this.getWindowManager().updateStack();
},
getWindows:function(){if(!this._windows){this._windows=[];
}return this._windows;
}}});
})();
(function(){var a="changeGlobalCursor",
b="*",
c="root",
d="",
e=" !important",
f="_applyGlobalCursor",
g="qx.client",
h=";",
i="qx.ui.root.Abstract",
j="String";
qx.Class.define(i,
{extend:qx.ui.core.Widget,
include:[qx.ui.core.MChildrenHandling,
qx.ui.core.MBlocker,
qx.ui.window.MDesktop],
construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},
properties:{appearance:{refine:true,
init:c},
enabled:{refine:true,
init:true},
focusable:{refine:true,
init:true},
globalCursor:{check:j,
nullable:true,
themeable:true,
apply:f,
event:a}},
members:{isRootWidget:function(){return true;
},
getLayout:function(){return this._getLayout();
},
_applyGlobalCursor:qx.core.Variant.select(g,
{"mshtml":function(k,
l){},
"default":function(k,
l){var m=qx.bom.Stylesheet;
var n=this._globalCursorStyleSheet;
if(!n){this._globalCursorStyleSheet=n=m.createElement();
}m.removeAllRules(n);
if(k){m.addRule(n,
b,
qx.bom.element.Cursor.compile(k).replace(h,
d)+e);
}}})},
defer:function(o,
p){qx.ui.core.MChildrenHandling.remap(p);
}});
})();
(function(){var a="resize",
b="position",
c="_doc",
d="0px",
f="qx.ui.root.Application",
g="hidden",
h="div",
i="_window",
j="100%",
k="absolute";
qx.Class.define(f,
{extend:qx.ui.root.Abstract,
construct:function(l){this._window=qx.dom.Node.getWindow(l);
this._doc=l;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this._window,
a,
this._onResize,
this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},
members:{_createContainerElement:function(){var l=this._doc;
var m=l.documentElement.style;
var n=l.body.style;
m.overflow=n.overflow=g;
m.padding=m.margin=n.padding=n.margin=d;
m.width=m.height=n.width=n.height=j;
var o=l.createElement(h);
l.body.appendChild(o);
var p=new qx.html.Root(o);
p.setStyle(b,
k);
return p;
},
_onResize:function(q){qx.ui.core.queue.Layout.add(this);
},
_computeSizeHint:function(){var r=qx.bom.Viewport.getWidth(this._window);
var s=qx.bom.Viewport.getHeight(this._window);
return {minWidth:r,
width:r,
maxWidth:r,
minHeight:s,
height:s,
maxHeight:s};
}},
destruct:function(){this._disposeFields(i,
c);
}});
})();
(function(){var a="blur",
b="focus",
c="load",
d="input",
e="qx.ui.core.EventHandler",
f="__manager";
qx.Class.define(e,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(){arguments.callee.base.call(this);
this.__manager=qx.event.Registration.getManager();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,
SUPPORTED_TYPES:{mousemove:1,
mouseover:1,
mouseout:1,
mousedown:1,
mouseup:1,
click:1,
dblclick:1,
contextmenu:1,
mousewheel:1,
keyup:1,
keydown:1,
keypress:1,
keyinput:1,
capture:1,
losecapture:1,
focusin:1,
focusout:1,
focus:1,
blur:1,
activate:1,
deactivate:1,
appear:1,
disappear:1,
dragstart:1,
dragend:1,
dragover:1,
dragleave:1,
drop:1,
drag:1,
dragchange:1,
droprequest:1},
IGNORE_CAN_HANDLE:false},
members:{__cD:{focusin:1,
focusout:1,
focus:1,
blur:1},
__cE:{mouseover:1,
mouseout:1,
appear:1,
disappear:1},
canHandleEvent:function(g,
h){return g instanceof qx.ui.core.Widget;
},
_dispatchEvent:function(j){var k=j.getTarget();
var m=qx.ui.core.Widget.getWidgetByElement(k,
true);
while(m&&m.isAnonymous()){m=m.getLayoutParent();
}
if(!m){return;
}if(this.__cD[j.getType()]){m=m.getFocusTarget();
}if(j.getRelatedTarget){var n=j.getRelatedTarget();
var o=qx.ui.core.Widget.getWidgetByElement(n);
while(o&&o.isAnonymous()){o=o.getLayoutParent();
}
if(o){if(this.__cD[j.getType()]){o=o.getFocusTarget();
}if(o===m){return;
}}}var p=j.getCurrentTarget();
var q=qx.ui.core.Widget.getWidgetByElement(p);
if(!q||q.getAnonymous()){return;
}if(this.__cD[j.getType()]){q=q.getFocusTarget();
}var h=j.getType();
if(!(q.isEnabled()||this.__cE[h])){return;
}var r=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var s=this.__manager.getListeners(q,
h,
r);
if(!s||s.length===0){return;
}var t=qx.event.Pool.getInstance().getObject(j.constructor);
j.clone(t);
t.setTarget(m);
t.setRelatedTarget(o||null);
t.setCurrentTarget(m);
t.setOriginalTarget(k);
for(var u=0,
v=s.length;u<v;u++){var w=s[u].context||q;
s[u].handler.call(w,
t);
}if(t.getPropagationStopped()){j.stopPropagation();
}
if(t.getDefaultPrevented()){j.preventDefault();
}qx.event.Pool.getInstance().poolObject(t);
},
registerEvent:function(g,
h,
r){var x;
if(h===b||h===a){x=g.getFocusElement();
}else if(h===c||h===d){x=g.getContentElement();
}else{x=g.getContainerElement();
}x.addListener(h,
this._dispatchEvent,
this,
r);
},
unregisterEvent:function(g,
h,
r){var x;
if(h===b||h===a){x=g.getFocusElement();
}else if(h===c||h===d){x=g.getContentElement();
}else{x=g.getContainerElement();
}x.removeListener(h,
this._dispatchEvent,
this,
r);
}},
destruct:function(){this._disposeFields(f);
},
defer:function(y){qx.event.Registration.addHandler(y);
}});
})();
(function(){var a="replacement",
b="_applySource",
c="-disabled.$1",
d="changeSource",
e="String",
f="image",
g="qx.ui.basic.Image";
qx.Class.define(g,
{extend:qx.ui.core.Widget,
construct:function(h){arguments.callee.base.call(this);
if(h){this.setSource(h);
}},
properties:{source:{check:e,
init:null,
nullable:true,
event:d,
apply:b,
themeable:true},
appearance:{refine:true,
init:f},
allowShrinkX:{refine:true,
init:false},
allowShrinkY:{refine:true,
init:false},
allowGrowX:{refine:true,
init:false},
allowGrowY:{refine:true,
init:false}},
members:{_createContentElement:function(){return new qx.html.ClippedImage();
},
_getContentHint:function(){return {width:this.__width||0,
height:this.__height||0};
},
_applyEnabled:function(i,
j){arguments.callee.base.call(this,
i,
j);
if(this.getSource()){this._styleSource();
}},
_applySource:function(i){this._styleSource();
},
_styleSource:function(){var h=qx.util.AliasManager.getInstance().resolve(this.getSource());
var k=this._contentElement;
if(!h){k.resetSource();
return;
}var l=qx.util.ResourceManager;
var m=qx.io2.ImageLoader;
if(l.has(h)){if(!this.getEnabled()){var n=h.replace(/\.([a-z]+)$/,
c);
if(l.has(n)){h=n;
this.addState(a);
}else{this.removeState(a);
}}if(k.getSource()===h){return;
}k.setSource(h,
false);
this._updateSize(k.getWidth(),
k.getHeight());
}else if(m.isLoaded(h)){k.setSource(h,
false);
this._updateSize(k.getWidth(),
k.getHeight());
}else{var o;
if(!qx.io2.ImageLoader.isFailed(h)){qx.io2.ImageLoader.load(h,
this.__cN,
this);
}}},
__cN:function(h,
p){if(h!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(!p){this.warn("Image could not be loaded: "+h);
return;
}this._styleSource();
},
_updateSize:function(q,
r){if(q!==this.__width||r!==this.__height){this.__width=q;
this.__height=r;
qx.ui.core.queue.Layout.add(this);
}}}});
})();
(function(){var a="Integer",
b="Boolean",
c="bottom-left",
d="offsetLeft",
e="offsetRight",
f="top-left",
g="bottom-right",
h="right-bottom",
i="offsetBottom",
j="right-top",
k="left-top",
l="left-bottom",
m="top-right",
n="shorthand",
o="offsetTop",
p="qx.ui.core.MAlign";
qx.Mixin.define(p,
{properties:{position:{check:[f,
m,
c,
g,
k,
l,
j,
h],
init:c,
themeable:true},
domMove:{check:b,
init:false},
smart:{check:b,
init:true,
themeable:true},
offsetLeft:{check:a,
init:0,
themeable:true},
offsetTop:{check:a,
init:0,
themeable:true},
offsetRight:{check:a,
init:0,
themeable:true},
offsetBottom:{check:a,
init:0,
themeable:true},
offset:{group:[o,
e,
i,
d],
mode:n,
themeable:true}},
members:{getLayoutLocation:function(q){var r,
s,
t,
u;
s=q.getBounds();
t=s.left;
u=s.top;
var v=s;
q=q.getLayoutParent();
while(q&&!q.isRootWidget()){s=q.getBounds();
t+=s.left;
u+=s.top;
r=q.getInsets();
t+=r.left;
u+=r.top;
q=q.getLayoutParent();
}if(q.isRootWidget()){var w=q.getContainerLocation();
if(w){t+=w.left;
u+=w.top;
}}return {left:t,
top:u,
right:t+v.width,
bottom:u+v.height};
},
moveTo:function(t,
u){if(this.getDomMove()){this.setDomPosition(t,
u);
}else{this.setLayoutProperties({left:t,
top:u});
}},
alignToWidget:function(x){var y=x.getContainerLocation()||this.getLayoutLocation(x);
this.__cO(y);
},
alignToMouse:function(z){var t=z.getDocumentLeft();
var u=z.getDocumentTop();
var y={left:t,
top:u,
right:t,
bottom:u};
this.__cO(y);
},
alignToElement:function(A){var B=qx.bom.element.Location.get(A);
var y={left:B.left,
top:B.top,
right:B.left+A.offsetWidth,
bottom:B.top+A.offsetHeight};
this.__cO(y);
},
alignToPoint:function(C){var y={left:C.left,
top:C.top,
right:C.left,
bottom:C.top};
this.__cO(y);
},
__cO:function(y){var v=this.getSizeHint();
var D=this.getLayoutParent().getBounds();
var E=this.getPosition();
var F=this.getSmart();
var G={left:this.getOffsetLeft(),
top:this.getOffsetTop(),
right:this.getOffsetRight(),
bottom:this.getOffsetBottom()};
var H=qx.util.AlignUtil.compute(v,
D,
y,
E,
F,
G);
this.moveTo(H.left,
H.top);
}}});
})();
(function(){var a="dragdrop-cursor",
b="_applyAction",
c="alias",
d="qx.ui.core.DragDropCursor",
e="move",
f="singleton",
g="copy";
qx.Class.define(d,
{extend:qx.ui.basic.Image,
include:qx.ui.core.MAlign,
type:f,
construct:function(){arguments.callee.base.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,
{left:-1000,
top:-1000});
},
properties:{appearance:{refine:true,
init:a},
action:{check:[c,
g,
e],
apply:b,
nullable:true}},
members:{_applyAction:function(i,
j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var a="px",
b="backgroundImage",
c="repeat",
d="width",
e="height",
f="overflow",
g="qx.html.ClippedImage",
h="qx.client",
i="hidden",
j="filter";
qx.Class.define(g,
{extend:qx.html.Element,
construct:function(){arguments.callee.base.call(this);
this.setStyle(f,
i);
},
members:{setSource:function(k,
l){var m,
n;
var o=qx.io2.ImageLoader;
var p=qx.util.ResourceManager.getData(k);
if(p){this.__width=p[0];
this.__height=p[1];
if(p.length>4){k=p[4];
m=p[5];
n=p[6];
}else{m=0;
n=0;
}}else if(o.isLoaded(k)){var q=o.getSize(k);
this.__width=q.width;
this.__height=q.height;
}else{throw new Error("The image '"+k+"' must be registered at qx.util.ResourceManager!");
}var r=qx.bom.element.Background.getStyles(k,
c,
m,
n);
this.setStyles(r);
if(l!==false){this.setStyle(d,
this.__width+a);
this.setStyle(e,
this.__height+a);
}this.__source=k;
return this;
},
resetSource:qx.core.Variant.select(h,
{"mshtml":function(){this.removeStyle(j);
this.removeStyle(b);
this.__source=null;
},
"default":function(){this.removeStyle(b);
this.__source=null;
}}),
getSource:function(){return this.__source||null;
},
getWidth:function(){return this.__width||0;
},
getHeight:function(){return this.__height||0;
}}});
})();
(function(){var a="qx.client",
b="qx.io2.ImageLoader",
c="load";
qx.Bootstrap.define(b,
{statics:{__cP:{},
isLoaded:function(d){var e=this.__cP[d];
return !!(e&&e.loaded);
},
isFailed:function(d){var e=this.__cP[d];
return !!(e&&e.failed);
},
isLoading:function(d){var e=this.__cP[d];
return !!(e&&e.loading);
},
getSize:function(d){return this.__cP[d]||
{width:0,
height:0};
},
load:function(d,
f,
g){var e=this.__cP[d];
if(!e){e=this.__cP[d]={};
}if(f&&!g){g=window;
}if(e.loaded||e.loading||e.failed){if(f){if(e.loading){e.callbacks.push(f,
g);
}else{f.call(g,
d,
e);
}}}else{e.loading=true;
e.callbacks=[];
if(f){e.callbacks.push(f,
g);
}var h=new Image();
var j=qx.lang.Function.listener(this.__cQ,
this,
h,
d);
h.onload=j;
h.onerror=j;
h.src=d;
}},
__cQ:function(k,
m,
d){var e=this.__cP[d];
if(k.type===c){e.loaded=true;
e.width=this.__cR(m);
e.height=this.__cS(m);
}else{e.failed=true;
}m.onload=m.onerror=null;
var n=e.callbacks;
delete e.loading;
delete e.callbacks;
for(var o=0,
p=n.length;o<p;o+=2){n[o].call(n[o+1],
d,
e);
}},
__cR:qx.core.Variant.select(a,
{"gecko":function(m){return m.naturalWidth;
},
"default":function(m){return m.width;
}}),
__cS:qx.core.Variant.select(a,
{"gecko":function(m){return m.naturalHeight;
},
"default":function(m){return m.height;
}})}});
})();
(function(){var a="left",
b="top",
c="bottom",
d="right",
e="-",
f="qx.util.AlignUtil";
qx.Class.define(f,
{statics:{compute:function(g,
h,
i,
j,
k,
l){var m=0;
var n=0;
var o=j.split(e);
var p=o[0];
var q=o[1];
var r=0,
s=0,
t=0,
u=0;
if(l){r+=l.left||0;
s+=l.top||0;
t+=l.right||0;
u+=l.bottom||0;
}switch(p){case a:m=i.left-g.width-r;
break;
case b:n=i.top-g.height-s;
break;
case d:m=i.right+t;
break;
case c:n=i.bottom+u;
break;
}switch(q){case a:m=i.left;
break;
case b:n=i.top;
break;
case d:m=i.right-g.width;
break;
case c:n=i.bottom-g.height;
break;
}
if(k===false){return {left:m,
top:n};
}else{var v=Math.min(m,
h.width-m-g.width);
if(v<0){var w=m;
if(m<0){if(p==a){w=i.right+t;
}else if(q==d){w=i.left;
}}else{if(p==d){w=i.left-g.width-r;
}else if(q==a){w=i.right-g.width;
}}fixedRatingX=Math.min(w,
h.width-w-g.width);
if(fixedRatingX>v){m=w;
v=fixedRatingX;
}}var x=Math.min(n,
h.height-n-g.height);
if(x<0){var y=n;
if(n<0){if(p==b){y=i.bottom+u;
}else if(q==c){y=i.top;
}}else{if(p==c){y=i.top-g.height-s;
}else if(q==b){y=i.bottom-g.height;
}}fixedRatingY=Math.min(y,
h.height-y-g.height);
if(fixedRatingY>x){n=y;
x=fixedRatingY;
}}return {left:m,
top:n,
ratingX:v,
ratingY:x};
}}}});
})();
(function(){var a="keypress",
b="__roots",
c="focusout",
d="activate",
f="__activeChild",
g="Tab",
h="singleton",
j="deactivate",
k="__focusedChild",
m="focusin",
n="qx.ui.core.FocusHandler";
qx.Class.define(n,
{extend:qx.core.Object,
type:h,
construct:function(){arguments.callee.base.call(this);
this.__roots={};
},
members:{connectTo:function(o){o.addListener(a,
this._onKeyEvent,
this);
o.addListener(m,
this._onFocusIn,
this,
true);
o.addListener(c,
this._onFocusOut,
this,
true);
o.addListener(d,
this._onActivate,
this,
true);
o.addListener(j,
this._onDeactivate,
this,
true);
},
addRoot:function(p){this.__roots[p.$$hash]=p;
},
removeRoot:function(p){delete this.__roots[p.$$hash];
},
isActive:function(p){return this.__activeWidget==p;
},
isFocused:function(p){return this.__focusedWidget==p;
},
isFocusRoot:function(p){!!this.__roots[p.$$hash];
},
_onActivate:function(q){var r=q.getTarget();
this.__activeChild=r;
var o=this.__ey(r);
if(o!=this.__currentRoot){this.__currentRoot=o;
}},
_onDeactivate:function(q){var r=q.getTarget();
if(this.__activeChild==r){this.__activeChild=null;
}},
_onFocusIn:function(q){var r=q.getTarget();
if(r!=this.__focusedChild){this.__focusedChild=r;
r.visualizeFocus();
}},
_onFocusOut:function(q){var r=q.getTarget();
if(r==this.__focusedChild){this.__focusedChild=null;
r.visualizeBlur();
}},
_onKeyEvent:function(q){if(q.getKeyIdentifier()!=g){return;
}
if(!this.__currentRoot){return;
}q.stopPropagation();
q.preventDefault();
var s=this.__focusedChild;
if(!q.isShiftPressed()){var t=s?this.__eC(s):this.__eA();
}else{var t=s?this.__eD(s):this.__eB();
}if(t){t.tabFocus();
}},
__ey:function(p){var u=this.__roots;
while(p){if(u[p.$$hash]){return p;
}p=p.getLayoutParent();
}return null;
},
__ez:function(v,
w){if(v===w){return 0;
}var x=v.getTabIndex()||0;
var y=w.getTabIndex()||0;
if(x!=y){return x-y;
}var z=v.getContainerElement().getDomElement();
var A=w.getContainerElement().getDomElement();
var B=qx.bom.element.Location;
var C=B.get(z);
var D=B.get(A);
if(C.top!=D.top){return C.top-D.top;
}if(C.left!=D.left){return C.left-D.left;
}var E=v.getZIndex();
var F=w.getZIndex();
if(E!=F){return E-F;
}return 0;
},
__eA:function(){return this.__eG(this.__currentRoot,
null);
},
__eB:function(){return this.__eH(this.__currentRoot,
null);
},
__eC:function(p){var o=this.__currentRoot;
if(o==p){return this.__eA();
}
while(p&&p.getAnonymous()){p=p.getLayoutParent();
}
if(p==null){return [];
}var G=[];
this.__eE(o,
p,
G);
G.sort(this.__ez);
var H=G.length;
return H>0?G[0]:this.__eA();
},
__eD:function(p){var o=this.__currentRoot;
if(o==p){return this.__eB();
}
while(p&&p.getAnonymous()){p=p.getLayoutParent();
}
if(p==null){return [];
}var G=[];
this.__eF(o,
p,
G);
G.sort(this.__ez);
var H=G.length;
return H>0?G[H-1]:this.__eB();
},
__eE:function(I,
p,
G){var J=I.getLayoutChildren();
var K;
for(var L=0,
M=J.length;L<M;L++){K=J[L];
if(!(K instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(K)&&K.isEnabled()){if(K.isTabable()&&this.__ez(p,
K)<0){G.push(K);
}this.__eE(K,
p,
G);
}}},
__eF:function(I,
p,
G){var J=I.getLayoutChildren();
var K;
for(var L=0,
M=J.length;L<M;L++){K=J[L];
if(!(K instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(K)&&K.isEnabled()){if(K.isTabable()&&this.__ez(p,
K)>0){G.push(K);
}this.__eF(K,
p,
G);
}}},
__eG:function(I,
N){var J=I.getLayoutChildren();
var K;
for(var L=0,
M=J.length;L<M;L++){K=J[L];
if(!(K instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(K)&&K.isEnabled()){if(K.isTabable()){if(N==null||this.__ez(K,
N)<0){N=K;
}}N=this.__eG(K,
N);
}}return N;
},
__eH:function(I,
O){var J=I.getLayoutChildren();
var K;
for(var L=0,
M=J.length;L<M;L++){K=J[L];
if(!(K instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(K)&&K.isEnabled()){if(K.isTabable()){if(O==null||this.__ez(K,
O)>0){O=K;
}}O=this.__eH(K,
O);
}}return O;
}},
destruct:function(){this._disposeFields(b,
k,
f);
}});
})();
(function(){var a="qx.client",
b="head",
c="text/css",
d="stylesheet",
e="}",
f='@import "',
g="{",
h='";',
j="qx.bom.Stylesheet",
k="link",
l="style";
qx.Class.define(j,
{statics:{includeFile:function(m,
n){if(!n){n=document;
}var o=n.createElement(k);
o.type=c;
o.rel=d;
o.href=qx.util.ResourceManager.toUri(m);
var p=n.getElementsByTagName(b)[0];
p.appendChild(o);
},
createElement:qx.core.Variant.select(a,
{"mshtml":function(q){var r=document.createStyleSheet();
if(q){r.cssText=q;
}return r;
},
"default":function(q){var s=document.createElement(l);
s.type=c;
if(q){s.appendChild(document.createTextNode(q));
}document.getElementsByTagName(b)[0].appendChild(s);
return s.sheet;
}}),
addRule:qx.core.Variant.select(a,
{"mshtml":function(r,
t,
u){r.addRule(t,
u);
},
"default":function(r,
t,
u){r.insertRule(t+g+u+e,
r.cssRules.length);
}}),
removeRule:qx.core.Variant.select(a,
{"mshtml":function(r,
t){var v=r.rules;
var w=v.length;
for(var x=w-1;x>=0;--x){if(v[x].selectorText==t){r.removeRule(x);
}}},
"default":function(r,
t){var v=r.cssRules;
var w=v.length;
for(var x=w-1;x>=0;--x){if(v[x].selectorText==t){r.deleteRule(x);
}}}}),
removeAllRules:qx.core.Variant.select(a,
{"mshtml":function(r){var v=r.rules;
var w=v.length;
for(var x=w-1;x>=0;x--){r.removeRule(x);
}},
"default":function(r){var v=r.cssRules;
var w=v.length;
for(var x=w-1;x>=0;x--){r.deleteRule(x);
}}}),
addImport:qx.core.Variant.select(a,
{"mshtml":function(r,
y){r.addImport(y);
},
"default":function(r,
y){r.insertRule(f+y+h,
r.cssRules.length);
}}),
removeImport:qx.core.Variant.select(a,
{"mshtml":function(r,
y){var z=r.imports;
var w=z.length;
for(var x=w-1;x>=0;x--){if(z[x].href==y){r.removeImport(x);
}}},
"default":function(r,
y){var v=r.cssRules;
var w=v.length;
for(var x=w-1;x>=0;x--){if(v[x].href==y){r.deleteRule(x);
}}}}),
removeAllImports:qx.core.Variant.select(a,
{"mshtml":function(r){var z=r.imports;
var w=z.length;
for(var x=w-1;x>=0;x--){r.removeImport(x);
}},
"default":function(r){var v=r.cssRules;
var w=v.length;
for(var x=w-1;x>=0;x--){if(v[x].type==v[x].IMPORT_RULE){r.deleteRule(x);
}}}})}});
})();
(function(){var a="__widget",
b="qx.ui.layout.Abstract";
qx.Class.define(b,
{extend:qx.core.Object,
members:{invalidateLayoutCache:function(){this.__sizeHint=null;
},
renderLayout:function(c,
d){this.warn("Missing renderLayout() implementation!");
},
getSizeHint:function(){if(this.__sizeHint){return this.__sizeHint;
}return this.__sizeHint=this._computeSizeHint();
},
_computeSizeHint:function(){return null;
},
invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},
verifyLayoutProperty:null,
_configureSeparators:function(e){this.__widget.configureSeparators(e);
},
_renderHorizontalSeparator:function(f,
g,
h,
i){this.__widget.renderHorizontalSeparator(f,
g,
h,
i);
},
_renderVerticalSeparator:function(f,
g,
j,
k){this.__widget.renderVerticalSeparator(f,
g,
j,
k);
},
connectToWidget:function(l){if(l&&this.__widget){throw new Error("It is not possible to manually set the connected widget.");
}this.__widget=l;
this.invalidateChildrenCache();
},
_applyLayoutChange:function(){if(this.__widget){this.__widget.scheduleLayoutUpdate();
}},
_getLayoutChildren:function(){return this.__widget.getLayoutChildren();
}},
destruct:function(){this._disposeFields(a);
}});
})();
(function(){var a="number",
b="string",
c="qx.ui.layout.Canvas";
qx.Class.define(c,
{extend:qx.ui.layout.Abstract,
members:{verifyLayoutProperty:null,
renderLayout:function(d,
e){var f=this._getLayoutChildren();
var g,
h,
j;
var k,
m,
n,
o,
p,
q;
var r,
s,
t,
u;
for(var v=0,
w=f.length;v<w;v++){g=f[v];
h=g.getSizeHint();
j=g.getLayoutProperties();
r=g.getMarginTop();
s=g.getMarginRight();
t=g.getMarginBottom();
u=g.getMarginLeft();
k=j.left!=null?j.left:j.edge;
if(k&&typeof k===b){k=Math.round(parseFloat(k)*d/100);
}n=j.right!=null?j.right:j.edge;
if(n&&typeof n===b){n=Math.round(parseFloat(n)*d/100);
}m=j.top!=null?j.top:j.edge;
if(m&&typeof m===b){m=Math.round(parseFloat(m)*e/100);
}o=j.bottom!=null?j.bottom:j.edge;
if(o&&typeof o===b){o=Math.round(parseFloat(o)*e/100);
}if(k!=null&&n!=null){p=d-k-n-u-s;
if(p<h.minWidth){p=h.minWidth;
}else if(p>h.maxWidth){p=h.maxWidth;
}k+=u;
}else{p=j.width;
if(p==null){p=h.width;
}else{p=Math.round(parseFloat(p)*d/100);
if(p<h.minWidth){p=h.minWidth;
}else if(p>h.maxWidth){p=h.maxWidth;
}}
if(n!=null){k=d-p-n-s-u;
}else if(k==null){k=u;
}else{k+=u;
}}if(m!=null&&o!=null){q=e-m-o-r-t;
if(q<h.minHeight){q=h.minHeight;
}else if(p>h.maxHeight){q=h.maxHeight;
}m+=r;
}else{q=j.height;
if(q==null){q=h.height;
}else{q=Math.round(parseFloat(q)*e/100);
if(q<h.minHeight){q=h.minHeight;
}else if(p>h.maxHeight){q=h.maxHeight;
}}
if(o!=null){m=e-q-o-t-r;
}else if(m==null){m=r;
}else{m+=r;
}}g.renderLayout(k,
m,
p,
q);
}},
_computeSizeHint:function(){var x=0,
y=0;
var z=0,
A=0;
var p,
B;
var q,
C;
var f=this._getLayoutChildren();
var g,
j,
D;
var k,
m,
n,
o;
for(var v=0,
w=f.length;v<w;v++){g=f[v];
j=g.getLayoutProperties();
D=g.getSizeHint();
var E=g.getMarginLeft()+g.getMarginRight();
var F=g.getMarginTop()+g.getMarginBottom();
p=D.width+E;
B=D.minWidth+E;
k=j.left!=null?j.left:j.edge;
if(k&&typeof k===a){p+=k;
B+=k;
}n=j.right!=null?j.right:j.edge;
if(n&&typeof n===a){p+=n;
B+=n;
}x=Math.max(x,
p);
y=Math.max(y,
B);
q=D.height+F;
C=D.minHeight+F;
m=j.top!=null?j.top:j.edge;
if(m&&typeof m===a){q+=m;
C+=m;
}o=j.bottom!=null?j.bottom:j.edge;
if(o&&typeof o===a){q+=o;
C+=o;
}z=Math.max(z,
q);
A=Math.max(A,
C);
}return {width:x,
minWidth:y,
height:z,
minHeight:A};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,
{extend:qx.html.Element,
construct:function(b){arguments.callee.base.call(this);
if(b!=null){this.useElement(b);
}},
members:{useElement:function(b){if(this._element){throw new Error("Elements could not be replaced!");
}b.$$hash=this.$$hash;
this._element=b;
this._root=true;
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var a="qx.client",
b="[",
c=", ",
d="}",
e="log",
f="{",
g="]:",
h="ms",
k=" ",
l="debug",
m="map",
n="]",
o="qx.log.appender.Native",
p=":";
qx.Bootstrap.define(o,
{statics:{process:qx.core.Variant.select(a,
{"gecko":function(q){if(window.console&&console.firebug){console[q.level].apply(console,
this.__eQ(q));
}},
"webkit":function(q){var r=q.level;
if(r==l){r=e;
}var s=this.__eQ(q).join(k);
if(window.console&&console[r]){console[r](s);
}},
"opera":function(q){},
"default":function(q){}}),
__eQ:qx.core.Variant.select(a,
{"gecko|webkit":function(q){var t=[];
t.push(q.offset+h);
if(q.object){var u=qx.core.ObjectRegistry.fromHashCode(q.object);
if(u){t.push(u.classname+b+u.$$hash+g);
}}else if(q.clazz){t.push(q.clazz.classname+p);
}var v=q.items;
var w,
x;
for(var y=0,
z=v.length;y<z;y++){w=v[y];
x=w.text;
if(x instanceof Array){var A=[];
for(var B=0,
C=x.length;B<C;B++){A.push(x[B].text);
}
if(w.type===m){t.push(f,
A.join(c),
d);
}else{t.push(b,
A.join(c),
n);
}}else{t.push(x);
}}return t;
},
"default":null})},
defer:function(D){qx.log.Logger.register(D);
}});
})();
(function(){var a="left",
b="top",
c="x",
d="Integer",
e="y",
f="auto",
g="_applyLayoutChange",
h="qx.ui.layout.Dock",
j="_applySort",
k="west",
l="south",
m="center",
n="east",
o="north",
p="bottom",
q="right";
qx.Class.define(h,
{extend:qx.ui.layout.Abstract,
construct:function(r,
s){arguments.callee.base.call(this);
if(r){this.setSpacingX(r);
}
if(s){this.setSpacingY(s);
}},
properties:{sort:{check:[f,
e,
c],
init:f,
apply:j},
spacingX:{check:d,
init:0,
apply:g},
spacingY:{check:d,
init:0,
apply:g}},
members:{verifyLayoutProperty:null,
_applySort:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},
__eR:{north:1,
south:2,
west:3,
east:4,
center:5},
__eS:{1:b,
2:p,
3:a,
4:q},
__eT:function(){var t=this._getLayoutChildren();
var u,
v;
var w=t.length;
var x=[];
var y=[];
var z=[];
var A=this.getSort()===e;
var B=this.getSort()===c;
for(var C=0;C<w;C++){u=t[C];
z=u.getLayoutProperties().edge;
if(z===m){if(v){throw new Error("It is not allowed to have more than one child aligned to 'center'!");
}v=u;
}else if(B||A){if(z===o||z===l){A?x.push(u):y.push(u);
}else if(z===k||z===n){A?y.push(u):x.push(u);
}}else{x.push(u);
}}var D=x.concat(y);
if(v){D.push(v);
}this.__children=D;
var E=[];
for(var C=0;C<w;C++){z=D[C].getLayoutProperties().edge;
E[C]=this.__eR[z]||5;
}this.__edges=E;
delete this._invalidChildrenCache;
},
renderLayout:function(F,
G){if(this._invalidChildrenCache){this.__eT();
}var H=qx.ui.layout.Util;
var I=this.__children;
var E=this.__edges;
var w=I.length;
var J,
u,
K,
L,
M,
N,
O,
P,
Q;
var R=[];
var S=[];
var r=this.getSpacingX();
var s=this.getSpacingY();
var T=-r;
var U=-s;
for(var C=0;C<w;C++){u=I[C];
L=u.getLayoutProperties();
K=u.getSizeHint();
O=K.width;
P=K.height;
if(L.width!=null){O=Math.floor(F*parseFloat(L.width)/100);
if(O<K.minWidth){O=K.minWidth;
}else if(O>K.maxWidth){O=K.maxWidth;
}}
if(L.height!=null){P=Math.floor(G*parseFloat(L.height)/100);
if(P<K.minHeight){P=K.minHeight;
}else if(P>K.maxHeight){P=K.maxHeight;
}}R[C]=O;
S[C]=P;
switch(E[C]){case 1:case 2:U+=P+u.getMarginTop()+u.getMarginBottom();
break;
case 3:case 4:T+=O+u.getMarginLeft()+u.getMarginRight();
break;
default:T+=O+u.getMarginLeft()+u.getMarginRight();
U+=P+u.getMarginTop()+u.getMarginBottom();
}}if(T!=F){J={};
N=T<F;
for(var C=0;C<w;C++){u=I[C];
switch(E[C]){case 3:case 4:case 5:M=u.getLayoutProperties().flex;
if(M==null&&E[C]==5){M=1;
}
if(M>0){K=u.getSizeHint();
J[C]={min:K.minWidth,
value:R[C],
max:K.maxWidth,
flex:M};
}}}var D=H.computeFlexOffsets(J,
F,
T);
for(var C in D){Q=D[C].offset;
R[C]+=Q;
T+=Q;
}}if(U!=G){J=[];
N=U<G;
for(var C=0;C<w;C++){u=I[C];
switch(E[C]){case 1:case 2:case 5:M=u.getLayoutProperties().flex;
if(M==null&&E[C]==5){M=1;
}
if(M>0){K=u.getSizeHint();
J[C]={min:K.minHeight,
value:S[C],
max:K.maxHeight,
flex:M};
}}}var D=H.computeFlexOffsets(J,
G,
U);
for(var C in D){Q=D[C].offset;
S[C]+=Q;
U+=Q;
}}var V=0,
W=0,
X=0,
Y=0;
var ba,
bb,
O,
P,
bc,
z;
var bd,
be,
bf,
bg;
var bh=this.__eS;
for(var C=0;C<w;C++){u=I[C];
z=E[C];
K=u.getSizeHint();
bd=u.getMarginTop();
be=u.getMarginBottom();
bf=u.getMarginLeft();
bg=u.getMarginRight();
switch(z){case 1:case 2:O=F-bf-bg;
if(O<K.minWidth){O=K.minWidth;
}else if(O>K.maxWidth){O=K.maxWidth;
}P=S[C];
bb=V+H.computeVerticalAlignOffset(bh[z],
P,
G,
bd,
be);
ba=W+H.computeHorizontalAlignOffset(u.getAlignX()||a,
O,
F,
bf,
bg);
bc=P+bd+be+s;
G-=bc;
if(z==1){V+=bc;
}else{X+=bc;
}break;
case 3:case 4:P=G-bd-be;
if(P<K.minHeight){P=K.minHeight;
}else if(P>K.maxHeight){P=K.maxHeight;
}O=R[C];
ba=W+H.computeHorizontalAlignOffset(bh[z],
O,
F,
bf,
bg);
bb=V+H.computeVerticalAlignOffset(u.getAlignY()||b,
P,
G,
bd,
be);
bc=O+bf+bg+r;
F-=bc;
if(z==3){W+=bc;
}else{Y+=bc;
}break;
default:O=F-bf-bg;
P=G-bd-be;
if(O<K.minWidth){O=K.minWidth;
}else if(O>K.maxWidth){O=K.maxWidth;
}if(P<K.minHeight){P=K.minHeight;
}else if(P>K.maxHeight){P=K.maxHeight;
}ba=W+H.computeHorizontalAlignOffset(u.getAlignX()||a,
O,
F,
bf,
bg);
bb=V+H.computeVerticalAlignOffset(u.getAlignY()||b,
P,
G,
bd,
be);
}u.renderLayout(ba,
bb,
O,
P);
}},
_computeSizeHint:function(){if(this._invalidChildrenCache){this.__eT();
}var I=this.__children;
var E=this.__edges;
var w=I.length;
var K,
u;
var bi,
bj;
var bk=0,
bl=0;
var bm=0,
bn=0;
var bo=0,
bp=0;
var bq=0,
br=0;
var r=this.getSpacingX(),
s=this.getSpacingY();
var bs=-r,
bt=-s;
for(var C=0;C<w;C++){u=I[C];
K=u.getSizeHint();
bi=u.getMarginLeft()+u.getMarginRight();
bj=u.getMarginTop()+u.getMarginBottom();
switch(E[C]){case 1:case 2:bo=Math.max(bo,
K.width+bk+bi);
bp=Math.max(bp,
K.minWidth+bl+bi);
bq+=K.height+bj;
br+=K.minHeight+bj;
bt+=s;
break;
case 3:case 4:bm=Math.max(bm,
K.height+bq+bj);
bn=Math.max(bn,
K.minHeight+br+bj);
bk+=K.width+bi;
bl+=K.minWidth+bi;
bs+=r;
break;
default:bk+=K.width+bi;
bl+=K.minWidth+bi;
bq+=K.height+bj;
br+=K.minHeight+bj;
bs+=r;
bt+=s;
}}var bu=Math.max(bl,
bp)+bs;
var O=Math.max(bk,
bo)+bs;
var bv=Math.max(bn,
br)+bt;
var P=Math.max(bm,
bq)+bt;
return {minWidth:bu,
width:O,
minHeight:bv,
height:P};
}}});
})();
(function(){var a="middle",
b="qx.ui.layout.Util",
c="left",
d="center",
e="top",
f="bottom",
g="right";
qx.Class.define(b,
{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,
computeFlexOffsets:function(h,
j,
k){var m,
n,
o,
p;
var q=j>k;
var r=Math.abs(j-k);
var s,
t;
var u={};
for(n in h){m=h[n];
u[n]={potential:q?m.max-m.value:m.value-m.min,
flex:q?m.flex:1/m.flex,
offset:0};
}while(r!=0){p=Infinity;
o=0;
for(n in u){m=u[n];
if(m.potential>0){o+=m.flex;
p=Math.min(p,
m.potential/m.flex);
}}if(o==0){break;
}p=Math.min(r,
p*o)/o;
s=0;
for(n in u){m=u[n];
if(m.potential>0){t=Math.min(r,
m.potential,
Math.ceil(p*m.flex));
s+=t-p*m.flex;
if(s>=1){s-=1;
t-=1;
}m.potential-=t;
if(q){m.offset+=t;
}else{m.offset-=t;
}r-=t;
}}}return u;
},
computeHorizontalAlignOffset:function(v,
w,
x,
y,
z){if(y==null){y=0;
}
if(z==null){z=0;
}var A=0;
switch(v){case c:A=y;
break;
case g:A=x-w-z;
break;
case d:A=Math.round((x-w)/2);
if(A<y){A=y;
}else if(A<z){A=Math.max(y,
x-w-z);
}break;
}return A;
},
computeVerticalAlignOffset:function(v,
B,
C,
D,
E){if(D==null){D=0;
}
if(E==null){E=0;
}var A=0;
switch(v){case e:A=D;
break;
case f:A=C-B-E;
break;
case a:A=Math.round((C-B)/2);
if(A<D){A=D;
}else if(A<E){A=Math.max(D,
C-B-E);
}break;
}return A;
},
collapseMargins:function(F){var G=0,
H=0;
for(var I=0,
J=arguments.length;I<J;I++){var A=arguments[I];
if(A<0){H=Math.min(H,
A);
}else if(A>0){G=Math.max(G,
A);
}}return G+H;
},
computeHorizontalGaps:function(K,
L,
M){if(L==null){L=0;
}var N=0;
if(M){N+=K[0].getMarginLeft();
for(var I=1,
J=K.length;I<J;I+=1){N+=this.collapseMargins(L,
K[I-1].getMarginRight(),
K[I].getMarginLeft());
}N+=K[J-1].getMarginRight();
}else{for(var I=1,
J=K.length;I<J;I+=1){N+=K[I].getMarginLeft()+K[I].getMarginRight();
}N+=(L*(J-1));
}return N;
},
computeVerticalGaps:function(K,
L,
M){if(L==null){L=0;
}var N=0;
if(M){N+=K[0].getMarginTop();
for(var I=1,
J=K.length;I<J;I+=1){N+=this.collapseMargins(L,
K[I-1].getMarginBottom(),
K[I].getMarginTop());
}N+=K[J-1].getMarginBottom();
}else{for(var I=1,
J=K.length;I<J;I+=1){N+=K[I].getMarginTop()+K[I].getMarginBottom();
}N+=(L*(J-1));
}return N;
},
computeSeparatorGaps:function(K,
L,
w){var N=0;
for(var I=0,
J=K.length;I<J;I++){var m=K[I];
N+=m.getMarginLeft()+m.getMarginRight();
}N+=(L+w+L)*(J-1);
return N;
},
arrangeIdeals:function(O,
P,
Q,
R,
S,
T){if(P<O||S<R){if(P<O&&S<R){P=O;
S=R;
}else if(P<O){S-=(O-P);
P=O;
if(S<R){S=R;
}}else if(S<R){P-=(R-S);
S=R;
if(P<O){P=O;
}}}
if(P>Q||S>T){if(P>Q&&S>T){P=Q;
S=T;
}else if(P>Q){S+=(P-Q);
P=Q;
if(S>T){S=T;
}}else if(S>T){P+=(S-T);
S=T;
if(P>Q){P=Q;
}}}return {begin:P,
end:S};
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,
{members:{setLayout:function(b){return this._setLayout(b);
},
getLayout:function(){return this._getLayout();
}},
statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var a="qx.event.type.Data",
b="qx.ui.container.Composite",
c="addChildWidget",
d="removeChildWidget";
qx.Class.define(b,
{extend:qx.ui.core.Widget,
include:[qx.ui.core.MChildrenHandling,
qx.ui.core.MLayoutHandling],
construct:function(e){arguments.callee.base.call(this);
if(e!=null){this._setLayout(e);
}},
events:{addChildWidget:a,
removeChildWidget:a},
members:{_afterAddChild:function(f){this.fireNonBubblingEvent(c,
qx.event.type.Data,
[f]);
},
_afterRemoveChild:function(f){this.fireNonBubblingEvent(d,
qx.event.type.Data,
[f]);
}},
defer:function(g,
h){qx.ui.core.MChildrenHandling.remap(h);
qx.ui.core.MLayoutHandling.remap(h);
}});
})();
(function(){var a="both",
b="qx.ui.menu.Menu",
c="icon",
d="none",
e="label",
f="changeShow",
g="qx.ui.toolbar.ToolBar",
h="toolbar",
j="changeOpenMenu";
qx.Class.define(g,
{extend:qx.ui.core.Widget,
include:qx.ui.core.MChildrenHandling,
construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},
properties:{appearance:{refine:true,
init:h},
openMenu:{check:b,
event:j,
nullable:true},
show:{init:a,
check:[a,
e,
c,
d],
nullable:true,
inheritable:true,
event:f}},
members:{addSpacer:function(){var k=new qx.ui.core.Spacer;
this._add(k,
{flex:1});
return k;
},
addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},
getMenuButtons:function(){var m=this.getChildren();
var n=[];
var o;
for(var p=0,
q=m.length;p<q;p++){o=m[p];
if(o instanceof qx.ui.toolbar.MenuButton){n.push(o);
}else if(o instanceof qx.ui.toolbar.Part){n.push.apply(n,
o.getMenuButtons());
}}return n;
}}});
})();
(function(){var a="_applyLayoutChange",
b="left",
c="center",
d="top",
e="_applyReversed",
f="middle",
g="baseline",
h="Array",
j="bottom",
k="Boolean",
m="right",
n="Integer",
o="qx.ui.layout.HBox";
qx.Class.define(o,
{extend:qx.ui.layout.Abstract,
construct:function(p,
q){arguments.callee.base.call(this);
if(p){this.setSpacing(p);
}
if(q){this.setAlignX(q);
}},
properties:{alignX:{check:[b,
c,
m],
init:b,
apply:a},
alignY:{check:[d,
f,
j,
g],
init:d,
apply:a},
spacing:{check:n,
init:0,
apply:a},
separator:{check:h,
nullable:true,
apply:a},
reversed:{check:k,
init:false,
apply:e}},
members:{_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},
__cT:function(){var r=this._getLayoutChildren();
var s=r.length;
var t=false;
var u=this.__widths&&this.__widths.length!=s&&this._flexs&&this._widths;
var v;
var w=u?this._widths:new Array(s);
var x=u?this._flexs:new Array(s);
if(this.getReversed()){r=r.concat().reverse();
}for(var y=0;y<s;y++){v=r[y].getLayoutProperties();
if(v.width!=null){w[y]=parseFloat(v.width)/100;
}
if(v.flex!=null){x[y]=v.flex;
t=true;
}}if(!u){this.__widths=w;
this.__flexs=x;
}this.__enableFlex=t;
this.__children=r;
delete this._invalidChildrenCache;
},
verifyLayoutProperty:null,
renderLayout:function(z,
A){if(this._invalidChildrenCache){this.__cT();
}var r=this.__children;
var s=r.length;
var B=qx.ui.layout.Util;
var p=this.getSpacing();
var C=this.getSeparator();
if(C){var D=B.computeSeparatorGaps(r,
p,
C.length);
}else{var D=B.computeHorizontalGaps(r,
p,
true);
}var y,
E,
F,
G;
var w=[];
var H=D;
for(y=0;y<s;y+=1){G=this.__widths[y];
F=G!=null?Math.floor((z-D)*G):r[y].getSizeHint().width;
w.push(F);
H+=F;
}if(this.__enableFlex&&H!=z){var I={};
var J,
K;
for(y=0;y<s;y+=1){J=this.__flexs[y];
if(J>0){N=r[y].getSizeHint();
I[y]={min:N.minWidth,
value:w[y],
max:N.maxWidth,
flex:J};
}}var L=B.computeFlexOffsets(I,
z,
H);
for(y in L){K=L[y].offset;
w[y]+=K;
H+=K;
}}var M=r[0].getMarginLeft();
if(H<z&&this.getAlignX()!=b){M=z-H;
if(this.getAlignX()===c){M=Math.round(M/2);
}}var N,
O,
P,
F,
Q,
R,
S;
var p=this.getSpacing();
var C=s>1&&this.getSeparator();
if(C){this._configureSeparators(s-1);
}for(y=0;y<s;y+=1){E=r[y];
F=w[y];
N=E.getSizeHint();
R=E.getMarginTop();
S=E.getMarginBottom();
P=Math.max(N.minHeight,
Math.min(A-R-S,
N.maxHeight));
O=B.computeVerticalAlignOffset(E.getAlignY()||this.getAlignY(),
P,
A,
R,
S);
if(y>0){if(C){M+=Q+p;
this._renderHorizontalSeparator(C,
y-1,
M,
A);
M+=C.length+p+E.getMarginLeft();
}else{M+=B.collapseMargins(p,
Q,
E.getMarginLeft());
}}E.renderLayout(M,
O,
F,
P);
M+=F;
Q=E.getMarginRight();
}},
_computeSizeHint:function(){if(this._invalidChildrenCache){this.__cT();
}var B=qx.ui.layout.Util;
var r=this.__children;
var T=0,
F=0;
var U=0,
P=0;
var E,
N,
V;
for(var y=0,
W=r.length;y<W;y+=1){E=r[y];
N=E.getSizeHint();
F+=N.width;
T+=this.__flexs[y]>0?N.minWidth:N.width;
V=E.getMarginTop()+E.getMarginBottom();
if((N.height+V)>P){P=N.height+V;
}if((N.minHeight+V)>U){U=N.minHeight+V;
}}var p=this.getSpacing();
var C=this.getSeparator();
if(C){var D=B.computeSeparatorGaps(r,
p,
C.length);
}else{var D=B.computeHorizontalGaps(r,
p,
true);
}return {minWidth:T+D,
width:F+D,
minHeight:U,
height:P};
}}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,
{extend:qx.ui.core.LayoutItem,
construct:function(b,
c){arguments.callee.base.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
}});
})();
(function(){var a="toolbar-separator",
b="qx.ui.toolbar.Separator";
qx.Class.define(b,
{extend:qx.ui.core.Widget,
properties:{appearance:{refine:true,
init:a},
width:{refine:true,
init:0},
height:{refine:true,
init:0}}});
})();
(function(){var a="label",
b="icon",
c="left",
d="both",
e="String",
f="_applyRich",
g="Boolean",
h="_applyIcon",
i="changeGap",
j="_applyShow",
k="right",
l="_applyIconPosition",
m="qx.ui.basic.Atom",
n="top",
o="changeShow",
p="bottom",
q="_applyLabel",
r="Integer",
s="_applyGap",
t="atom";
qx.Class.define(m,
{extend:qx.ui.core.Widget,
construct:function(u,
v){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());
if(u!=null){this.setLabel(u);
}
if(v!=null){this.setIcon(v);
}},
properties:{appearance:{refine:true,
init:t},
label:{apply:q,
nullable:true,
dispose:true,
check:e},
rich:{check:g,
init:false,
apply:f},
icon:{check:e,
apply:h,
nullable:true,
themeable:true},
gap:{check:r,
nullable:false,
event:i,
apply:s,
themeable:true,
init:4},
show:{init:d,
check:[d,
a,
b],
themeable:true,
nullable:true,
inheritable:true,
apply:j,
event:o},
iconPosition:{init:c,
check:[n,
k,
p,
c],
themeable:true,
apply:l}},
members:{_createChildControlImpl:function(w){var x;
switch(w){case a:x=new qx.ui.basic.Label(this.getLabel());
x.setAnonymous(true);
x.setRich(this.getRich());
this._add(x);
if(this.getLabel()==null||this.getShow()===b){x.exclude();
}break;
case b:x=new qx.ui.basic.Image(this.getIcon());
x.setAnonymous(true);
this._addAt(x,
0);
if(this.getIcon()==null||this.getShow()===a){x.exclude();
}break;
}return x||arguments.callee.base.call(this,
w);
},
_forwardStates:{focused:true,
hovered:true},
_handleLabel:function(){if(this.getLabel()==null||this.getShow()===b){this._excludeChildControl(a);
}else{this._showChildControl(a);
}},
_handleIcon:function(){if(this.getIcon()==null||this.getShow()===a){this._excludeChildControl(b);
}else{this._showChildControl(b);
}},
_applyLabel:function(y,
z){var u=this._getChildControl(a,
true);
if(u){u.setContent(y);
}this._handleLabel();
},
_applyRich:function(y,
z){var u=this._getChildControl(a,
true);
if(u){u.setRich(y);
}},
_applyIcon:function(y,
z){var v=this._getChildControl(b,
true);
if(v){v.setSource(y);
}this._handleIcon();
},
_applyGap:function(y,
z){this._getLayout().setGap(y);
},
_applyShow:function(y,
z){this._handleLabel();
this._handleIcon();
},
_applyIconPosition:function(y,
z){this._getLayout().setAlign(y);
}}});
})();
(function(){var a="changeEnabled",
b="qx.ui.core.MExecutable",
c="qx.event.Command",
d="qx.event.type.Event",
f="changeCommand",
g="_applyCommand",
h="execute";
qx.Mixin.define(b,
{events:{"execute":d},
properties:{command:{check:c,
apply:g,
event:f,
nullable:true}},
members:{execute:function(){var i=this.getCommand();
if(i){i.execute(this);
}this.fireEvent(h);
},
_applyCommand:function(j,
k){if(k){k.removeListener(a,
this._onChangeEnabledCommand,
this);
}
if(j){j.addListener(a,
this._onChangeEnabledCommand,
this);
this.setEnabled(j.getEnabled());
}},
_onChangeEnabledCommand:function(l){this.setEnabled(l.getData());
}}});
})();
(function(){var a="qx.event.type.Data",
b="string",
c="qx.ui.form.IFormElement",
d="boolean";
qx.Interface.define(c,
{events:{"changeValue":a,
"changeName":a,
"changeEnabled":a},
members:{setEnabled:function(e){this.assertType(e,
d);
},
getEnabled:function(){},
setName:function(e){this.assertType(e,
b);
},
getName:function(){},
setValue:function(e){this.assertType(e,
b);
},
getValue:function(){}}});
})();
(function(){var a="pressed",
b="abandoned",
c="hovered",
d="Enter",
f="Space",
g="String",
h="qx.ui.form.Button",
i="mouseup",
j="mousedown",
k="changeName",
l="mouseover",
m="mouseout",
n="changeValue",
o="keydown",
p="button",
q="keyup";
qx.Class.define(h,
{extend:qx.ui.basic.Atom,
include:qx.ui.core.MExecutable,
implement:qx.ui.form.IFormElement,
construct:function(r,
s,
t){arguments.callee.base.call(this,
r,
s);
if(t!=null){this.setCommand(t);
}this.addListener(l,
this._onMouseOver);
this.addListener(m,
this._onMouseOut);
this.addListener(j,
this._onMouseDown);
this.addListener(i,
this._onMouseUp);
this.addListener(o,
this._onKeyDown);
this.addListener(q,
this._onKeyUp);
},
properties:{name:{check:g,
nullable:true,
event:k},
value:{check:g,
nullable:true,
event:n},
appearance:{refine:true,
init:p},
focusable:{refine:true,
init:true}},
members:{press:function(){if(this.hasState(b)){return;
}this.addState(a);
},
release:function(){if(this.hasState(a)){this.removeState(a);
}},
reset:function(){this.removeState(a);
this.removeState(b);
this.removeState(c);
},
_onMouseOver:function(u){if(!this.isEnabled()||u.getTarget()!==this){return;
}
if(this.hasState(b)){this.removeState(b);
this.addState(a);
}this.addState(c);
},
_onMouseOut:function(u){if(!this.isEnabled()||u.getTarget()!==this){return;
}this.removeState(c);
if(this.hasState(a)){this.removeState(a);
this.addState(b);
}},
_onMouseDown:function(u){if(!u.isLeftPressed()){return;
}u.stopPropagation();
this.capture();
this.removeState(b);
this.addState(a);
},
_onMouseUp:function(u){this.releaseCapture();
var v=this.hasState(a);
var w=this.hasState(b);
if(v){this.removeState(a);
}
if(w){this.removeState(b);
}else{this.addState(c);
if(v){this.execute();
}}u.stopPropagation();
},
_onKeyDown:function(u){switch(u.getKeyIdentifier()){case d:case f:this.removeState(b);
this.addState(a);
u.stopPropagation();
}},
_onKeyUp:function(u){switch(u.getKeyIdentifier()){case d:case f:if(this.hasState(a)){this.removeState(b);
this.removeState(a);
this.execute();
u.stopPropagation();
}}}}});
})();
(function(){var a="pressed",
b="hovered",
c="changeVisibility",
d="qx.ui.menu.Menu",
f="Enter",
g="changeMenu",
h="qx.ui.form.MenuButton",
i="abandoned",
j="_applyMenu";
qx.Class.define(h,
{extend:qx.ui.form.Button,
construct:function(k,
l,
m){arguments.callee.base.call(this,
k,
l);
if(m!=null){this.setMenu(m);
}},
properties:{menu:{check:d,
nullable:true,
apply:j,
event:g}},
members:{_applyMenu:function(n,
o){if(o){o.removeListener(c,
this._onMenuChange,
this);
o.resetOpener();
}
if(n){n.addListener(c,
this._onMenuChange,
this);
n.setOpener(this);
}},
open:function(p){var m=this.getMenu();
if(m){qx.ui.menu.Manager.getInstance().hideAll();
m.open();
if(p){var q=m.getChildren()[0];
if(q){m.setSelectedButton(q);
}}}},
_onMenuChange:function(r){var m=this.getMenu();
if(m.isVisible()){this.addState(a);
}else{this.removeState(a);
}},
_onMouseDown:function(r){var m=this.getMenu();
if(m){if(!m.isVisible()){this.open();
}else{m.exclude();
}r.stopPropagation();
}},
_onMouseUp:function(r){r.stopPropagation();
},
_onMouseOver:function(r){this.addState(b);
},
_onMouseOut:function(r){this.removeState(b);
},
_onKeyDown:function(r){switch(r.getKeyIdentifier()){case f:this.removeState(i);
this.addState(a);
var m=this.getMenu();
if(m){if(!m.isVisible()){this.open();
}else{m.exclude();
}}r.stopPropagation();
}},
_onKeyUp:function(r){}}});
})();
(function(){var a="pressed",
b="hovered",
c="inherit",
d="keydown",
f="qx.ui.toolbar.MenuButton",
g="keyup",
h="toolbar-button";
qx.Class.define(f,
{extend:qx.ui.form.MenuButton,
construct:function(i,
j,
k){arguments.callee.base.call(this,
i,
j,
k);
this.removeListener(d,
this._onKeyDown);
this.removeListener(g,
this._onKeyUp);
},
properties:{appearance:{refine:true,
init:h},
show:{refine:true,
init:c},
focusable:{refine:true,
init:false}},
members:{getToolBar:function(){var l=this;
while(l){if(l instanceof qx.ui.toolbar.ToolBar){return l;
}l=l.getLayoutParent();
}return null;
},
_onMenuChange:function(m){var n=this.getMenu();
var o=this.getToolBar();
if(n.isVisible()){this.addState(a);
if(o){o.setOpenMenu(n);
}}else{this.removeState(a);
if(o&&o.getOpenMenu()==n){o.resetOpenMenu();
}}},
_onMouseOver:function(m){this.addState(b);
if(this.getMenu()){var o=this.getToolBar();
var p=o.getOpenMenu();
if(p&&p!=this.getMenu()){qx.ui.menu.Manager.getInstance().hideAll();
this.open();
}}}}});
})();
(function(){var a="bottom",
b="top",
c="_applyLayoutChange",
d="left",
e="right",
f="middle",
g="center",
h="qx.ui.layout.Atom",
j="Integer";
qx.Class.define(h,
{extend:qx.ui.layout.Abstract,
properties:{gap:{check:j,
init:4,
apply:c},
align:{check:[d,
b,
e,
a],
init:d,
apply:c}},
members:{verifyLayoutProperty:null,
renderLayout:function(k,
l){var m=qx.ui.layout.Util;
var n=this.getAlign();
var o=this._getLayoutChildren();
var p=o.length;
var q,
r,
s,
t;
var u,
v;
var w=this.getGap();
if(n===a||n===e){var x=p-1;
var y=-1;
var z=-1;
}else{var x=0;
var y=p;
var z=1;
}if(n==b||n==a){r=0;
for(var A=x;A!=y;A+=z){u=o[A];
v=u.getSizeHint();
s=Math.min(v.maxWidth,
Math.max(k,
v.minWidth));
t=v.height;
q=m.computeHorizontalAlignOffset(g,
s,
k);
u.renderLayout(q,
r,
s,
t);
if(t>0){r+=t+w;
}}}else{var B=k;
var C=null;
for(var A=x;A!=y;A+=z){u=o[A];
s=u.getSizeHint().width;
if(s>0){if(!C&&u instanceof qx.ui.basic.Label){C=u;
}else{B-=s;
}
if(A<(p-1)){B-=w;
}}}q=0;
for(var A=x;A!=y;A+=z){u=o[A];
v=u.getSizeHint();
t=Math.min(v.maxHeight,
Math.max(l,
v.minHeight));
if(u===C){s=Math.max(v.minWidth,
Math.min(B,
v.width));
}else{s=v.width;
}r=m.computeVerticalAlignOffset(f,
v.height,
l);
u.renderLayout(q,
r,
s,
t);
if(s>0){q+=s+w;
}}}},
_computeSizeHint:function(){var o=this._getLayoutChildren();
var p=o.length;
var v,
D;
if(p===1){var v=o[0].getSizeHint();
D={width:v.width,
height:v.height,
minWidth:v.minWidth,
minHeight:v.minHeight};
}else{var E=0,
s=0;
var F=0,
t=0;
var n=this.getAlign();
var w=this.getGap();
if(n===b||n===a){for(var A=0;A<p;A++){v=o[A].getSizeHint();
s=Math.max(s,
v.width);
E=Math.max(E,
v.minWidth);
if(v.height>0){t+=v.height;
F+=v.minHeight;
if(A<(p-1)){t+=w;
F+=w;
}}}}else{for(var A=0;A<p;A++){v=o[A].getSizeHint();
t=Math.max(t,
v.height);
F=Math.max(F,
v.minHeight);
if(v.width>0){s+=v.width;
E+=v.minWidth;
if(A<(p-1)){s+=w;
E+=w;
}}}}D={minWidth:E,
width:s,
minHeight:F,
height:t};
}return D;
}}});
})();
(function(){var a="qx.dynamicLocaleSwitch",
b="color",
c="qx.ui.basic.Label",
d="_applyRich",
f="_applyTextAlign",
g="Boolean",
h="_applyContent",
i="label",
j="textAlign",
k="center",
l="changeLocale",
m="A",
n="changeContent",
o="left",
p="on",
q="String",
r="right";
qx.Class.define(c,
{extend:qx.ui.core.Widget,
construct:function(s){arguments.callee.base.call(this);
if(s!=null){this.setContent(s);
}
if(qx.core.Variant.isSet(a,
p)){qx.locale.Manager.getInstance().addListener(l,
this._onChangeLocale,
this);
}},
properties:{rich:{check:g,
init:false,
apply:d},
content:{check:q,
apply:h,
event:n,
nullable:true},
textAlign:{check:[o,
k,
r],
nullable:true,
themeable:true,
apply:f},
appearance:{refine:true,
init:i},
allowGrowX:{refine:true,
init:false},
allowGrowY:{refine:true,
init:false}},
members:{_getContentHint:function(){if(this.__invalidContentSize){this.__cV();
delete this.__invalidContentSize;
}return {width:this.__cU.width,
height:this.__cU.height};
},
_hasHeightForWidth:function(){return this.getRich();
},
_getContentHeightForWidth:function(t){if(!this.getRich()){return null;
}var u=this._font?this._font.getStyles():qx.bom.Font.getDefaultStyles();
return qx.bom.Label.getHtmlSize(this.getContent(),
u,
t).height;
},
_createContentElement:function(){return new qx.html.Label;
},
_applyTextAlign:function(v,
w){this._contentElement.setStyle(j,
v);
},
_applyTextColor:function(v,
w){if(v){this.getContentElement().setStyle(b,
qx.theme.manager.Color.getInstance().resolve(v));
}else{this.getContentElement().removeStyle(b);
}},
__cU:{width:0,
height:0},
_applyFont:function(v,
w){var u;
if(v){this._font=qx.theme.manager.Font.getInstance().resolve(v);
u=this._font.getStyles();
}else{this._font=null;
u=qx.bom.Font.getDefaultStyles();
}this._contentElement.setStyles(u);
this.__invalidContentSize=true;
qx.ui.core.queue.Layout.add(this);
},
__cV:function(){var x=qx.bom.Label;
var y=this.getFont();
{};
var u=y?this._font.getStyles():qx.bom.Font.getDefaultStyles();
var s=this.getContent()||m;
var z=this.getRich();
this.__cU=z?x.getHtmlSize(s,
u):x.getTextSize(s,
u);
},
_applyRich:function(v){this._contentElement.setRich(v);
this.__invalidContentSize=true;
qx.ui.core.queue.Layout.add(this);
},
_onChangeLocale:qx.core.Variant.select(a,
{"on":function(A){var s=this.getContent();
if(s.translate){this.setContent(s.translate());
}},
"off":null}),
_applyContent:function(v){this._contentElement.setContent(v);
this.__invalidContentSize=true;
qx.ui.core.queue.Layout.add(this);
}}});
})();
(function(){var a="qx.bom.client.Locale",
b="-",
c="";
qx.Bootstrap.define(a,
{statics:{LOCALE:"",
VARIANT:"",
__cW:function(){var d=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var e=c;
var f=d.indexOf(b);
if(f!=-1){e=d.substr(f+1);
d=d.substr(0,
f);
}this.LOCALE=d;
this.VARIANT=e;
}},
defer:function(g){g.__cW();
}});
})();
(function(){var a="qx.lang.BaseString";
qx.Class.define(a,
{extend:String,
construct:function(b){{};
this._txt=b;
},
members:{toString:function(){return this._txt;
},
valueOf:function(){return this._txt;
},
toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},
base:function(c,
d){return qx.core.Object.prototype.base.apply(this,
arguments);
}},
defer:function(e){{};
}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,
{extend:qx.lang.BaseString,
construct:function(b,
c,
d){arguments.callee.base.call(this,
b);
this.__messageId=c;
this.__args=d;
},
members:{translate:function(){return qx.locale.Manager.getInstance().translate(this.__messageId,
this.__args);
}}});
})();
(function(){var a="_",
b="",
c="_applyLocale",
d="changeLocale",
e="C",
f="qx.dynamicLocaleSwitch",
g="_translationCatalog",
h="on",
j="qx.locale.Manager",
k="String",
l="singleton";
qx.Class.define(j,
{type:l,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this._translationCatalog=window.qxlocales||{};
var m=qx.bom.client.Locale;
var n=m.LOCALE;
var o=m.VARIANT;
if(o!==b){n+=a+o;
}this.setLocale(n||this._defaultLocale);
},
statics:{tr:function(p,
q){var r=qx.lang.Array.fromArguments(arguments);
r.splice(0,
1);
return qx.locale.Manager.getInstance().translate(p,
r);
},
trn:function(s,
t,
u,
q){var r=qx.lang.Array.fromArguments(arguments);
r.splice(0,
3);
if(u!=1){return qx.locale.Manager.getInstance().translate(t,
r);
}else{return qx.locale.Manager.getInstance().translate(s,
r);
}},
trc:function(v,
p,
q){var r=qx.lang.Array.fromArguments(arguments);
r.splice(0,
2);
return qx.locale.Manager.getInstance().translate(p,
r);
},
marktr:function(p){return p;
}},
properties:{locale:{check:k,
nullable:true,
apply:c,
event:d}},
members:{_defaultLocale:e,
getLanguage:function(){return this._language;
},
getTerritory:function(){return this.getLocale().split(a)[1]||b;
},
getAvailableLocales:function(){var w=[];
for(var n in this._translationCatalog){if(n!=this._defaultLocale){w.push(n);
}}return w;
},
__cX:function(n){var x;
var y=n.indexOf(a);
if(y==-1){x=n;
}else{x=n.substring(0,
y);
}return x;
},
_applyLocale:function(z,
A){this._locale=z;
this._language=this.__cX(z);
},
addTranslation:function(B,
C){if(this._translationCatalog[B]){for(var D in C){this._translationCatalog[B][D]=C[D];
}}else{this._translationCatalog[B]=C;
}},
translate:function(p,
r,
n){var E;
if(n){var x=this.__cX(n);
}else{n=this._locale;
x=this._language;
}
if(!E&&this._translationCatalog[n]){E=this._translationCatalog[n][p];
}
if(!E&&this._translationCatalog[x]){E=this._translationCatalog[x][p];
}
if(!E&&this._translationCatalog[this._defaultLocale]){E=this._translationCatalog[this._defaultLocale][p];
}
if(!E){E=p;
}
if(r.length>0){var F=[];
for(var G=0;G<r.length;G++){var H=r[G];
if(H.translate){F[G]=H.translate();
}else{F[G]=H;
}}E=qx.lang.String.format(E,
F);
}
if(qx.core.Variant.isSet(f,
h)){E=new qx.locale.LocalizedString(E,
p,
r);
}return E;
}},
destruct:function(){this._disposeFields(g);
}});
})();
(function(){var a="qx.client",
b="gecko",
c="div",
d="",
e="hidden",
f="auto",
g="value",
h="text",
i="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",
j="nowrap",
k="visible",
l="ellipsis",
m="normal",
n="label",
o="-1000px",
p="absolute",
q="px",
r="crop",
s="end",
t="100%",
u="qx.bom.Label",
v="opera",
w="block",
x="inherit",
y="none",
z="mshtml|opera";
qx.Class.define(u,
{statics:{__dg:{fontFamily:1,
fontSize:1,
fontWeight:1,
fontStyle:1,
lineHeight:1},
__dh:function(){var A=document.createElement(c);
var B=A.style;
B.width=B.height=f;
B.left=B.top=o;
B.visibility=e;
B.position=p;
B.overflow=k;
B.whiteSpace=j;
if(qx.core.Variant.isSet(a,
b)){var C=document.createElementNS(i,
n);
A.appendChild(C);
}document.body.insertBefore(A,
document.body.firstChild);
return this._textElement=A;
},
__di:function(){var A=qx.bom.Element.create(c);
var B=A.style;
B.width=B.height=f;
B.left=B.top=o;
B.visibility=e;
B.position=p;
B.overflow=k;
B.whiteSpace=m;
document.body.insertBefore(A,
document.body.firstChild);
return this._htmlElement=A;
},
create:function(D,
E,
F){if(!F){F=window;
}
if(E){var A=F.document.createElement(c);
A.useHtml=true;
}else if(qx.core.Variant.isSet(a,
b)){var A=F.document.createElement(c);
var G=F.document.createElementNS(i,
n);
G.style.cursor=x;
G.style.overflow=e;
G.style.maxWidth=t;
G.setAttribute(r,
s);
A.appendChild(G);
}else{var A=F.document.createElement(c);
}
if(D){this.setContent(A,
D);
}return A;
},
getStyles:function(E){var H={};
if(E){H.whiteSpace=m;
}else if(qx.core.Variant.isSet(a,
b)){H.display=w;
}else{H.overflow=e;
H.whiteSpace=j;
H.textOverflow=l;
if(qx.core.Variant.isSet(a,
v)){H.OTextOverflow=l;
}}H.userSelect=y;
return H;
},
setContent:function(I,
J){J=J||d;
if(I.useHtml){I.innerHTML=J;
}else if(qx.core.Variant.isSet(a,
b)){I.firstChild.setAttribute(g,
J);
}else{qx.bom.element.Attribute.set(I,
h,
J);
}},
getContent:function(I){if(I.useHtml){return I.innerHTML;
}else if(qx.core.Variant.isSet(a,
b)){return I.firstChild.getAttribute(g)||d;
}else{return qx.bom.element.Attribute.get(I,
h);
}},
getHtmlSize:function(D,
H,
K){var I=this._htmlElement||this.__di();
var L=this.__dg;
if(!H){H={};
}
for(var M in L){I.style[M]=H[M]||d;
}I.style.width=K!=null?K+q:f;
I.innerHTML=D;
return {width:I.clientWidth,
height:I.clientHeight};
},
getTextSize:function(N,
H){var I=this._textElement||this.__dh();
var L=this.__dg;
if(!H){H={};
}
for(var M in L){I.style[M]=H[M]||d;
}if(qx.core.Variant.isSet(a,
b)){I.firstChild.setAttribute(g,
N);
}else if(qx.core.Variant.isSet(a,
z)){I.innerText=N;
}else{I.textContent=N;
}var K=I.clientWidth;
var O=I.clientHeight;
if(qx.core.Variant.isSet(a,
b)){if(qx.bom.client.Platform.MAC){K++;
}}return {width:K,
height:O};
}}});
})();
(function(){var a="content",
b="qx.html.Label";
qx.Class.define(b,
{extend:qx.html.Element,
members:{_applyProperty:function(c,
d){arguments.callee.base.call(this,
c,
d);
if(c==a){qx.bom.Label.setContent(this._element,
d);
}},
_createDomElement:function(){var e=this.__rich;
var f=qx.bom.Label.create(this._content,
e);
var g=qx.bom.Label.getStyles(e);
for(var h in g){this.setStyle(h,
g[h]);
}return f;
},
setRich:function(d){if(this._element){throw new Error("The label mode cannot be modified after initial creation");
}d=!!d;
if(this.__rich==d){return;
}this.__rich=d;
return this;
},
setContent:function(d){this._setProperty(a,
d);
return this;
},
getContent:function(){return this._getProperty(a);
}}});
})();
(function(){var a="keypress",
b="interval",
c="mouseup",
d="mousedown",
f="Enter",
g="Up",
h="Escape",
j="blur",
k="qx.ui.menu.Manager",
l="keydown",
m="Left",
n="Down",
o="Right",
p="keyup",
q="singleton",
r="Space";
qx.Class.define(k,
{type:q,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__objects=[];
var s=qx.core.Init.getApplication().getRoot();
s.addListener(d,
this._onMouseDown,
this,
true);
s.addListener(c,
this._onMouseUp,
this);
s.addListener(l,
this._onKeyUpDown,
this,
true);
s.addListener(p,
this._onKeyUpDown,
this,
true);
s.addListener(a,
this._onKeyPress,
this,
true);
qx.bom.Element.addListener(window,
j,
this.hideAll,
this);
this._openTimer=new qx.event.Timer;
this._openTimer.addListener(b,
this._onOpenInterval,
this);
this._closeTimer=new qx.event.Timer;
this._closeTimer.addListener(b,
this._onCloseInterval,
this);
},
members:{_getChild:function(t,
u,
v,
w){var x=t.getChildren();
var y=x.length;
var z;
for(var A=u;A<y&&A>=0;A+=v){z=x[A];
if(z.isEnabled()&&!z.isAnonymous()){return z;
}}
if(w){A=A==y?0:y-1;
for(;A!=u;A+=v){z=x[A];
if(z.isEnabled()&&!z.isAnonymous()){return z;
}}}return null;
},
_isInMenu:function(B){while(B){if(B instanceof qx.ui.menu.Menu){return true;
}B=B.getLayoutParent();
}return false;
},
add:function(C){{};
var D=this.__objects;
D.push(C);
C.setZIndex(1e6+D.length);
},
remove:function(C){{};
var E=qx.lang.Array.remove(this.__objects,
C);
},
hideAll:function(){var D=this.__objects;
for(var A=D.length-1;A>=0;A--){D[A].exclude();
}},
getActiveMenu:function(){var D=this.__objects;
return D.length>0?D[D.length-1]:null;
},
scheduleOpen:function(t){this.cancelClose(t);
if(t.isVisible()){if(this._scheduleOpen){this.cancelOpen(this._scheduleOpen);
}}else if(this._scheduleOpen!=t){this._scheduleOpen=t;
this._openTimer.restartWith(t.getOpenInterval());
}},
scheduleClose:function(t){this.cancelOpen(t);
if(!t.isVisible()){if(this._scheduleClose){this.cancelClose(this._scheduleClose);
}}else if(this._scheduleClose!=t){this._scheduleClose=t;
this._closeTimer.restartWith(t.getCloseInterval());
}},
cancelOpen:function(t){if(this._scheduleOpen==t){this._openTimer.stop();
this._scheduleOpen=null;
}},
cancelClose:function(t){if(this._scheduleClose==t){this._closeTimer.stop();
this._scheduleClose=null;
}},
_onOpenInterval:function(F){this._openTimer.stop();
this._scheduleOpen.open();
this._scheduleOpen=null;
},
_onCloseInterval:function(F){this._closeTimer.stop();
this._scheduleClose.exclude();
this._scheduleClose=null;
},
_onMouseDown:function(F){var G=F.getTarget();
if(G.getMenu&&G.getMenu()&&G.getMenu().isVisible()){return;
}if(!this._isInMenu(G)){this.hideAll();
}},
_onMouseUp:function(F){var G=F.getTarget();
if(!(G instanceof qx.ui.menu.Menu)){this.hideAll();
}},
__dj:{"Enter":1,
"Space":1},
__dk:{"Escape":1,
"Up":1,
"Down":1,
"Left":1,
"Right":1},
_onKeyUpDown:function(F){var t=this.getActiveMenu();
if(!t){return;
}var H=F.getKeyIdentifier();
if(this.__dk[H]||(this.__dj[H]&&t.getSelectedButton())){F.stopPropagation();
}},
_onKeyPress:function(F){var t=this.getActiveMenu();
if(!t){return;
}var H=F.getKeyIdentifier();
var I=this.__dk[H];
var J=this.__dj[H];
if(I){switch(H){case g:this._onKeyPressUp(t);
break;
case n:this._onKeyPressDown(t);
break;
case m:this._onKeyPressLeft(t);
break;
case o:this._onKeyPressRight(t);
break;
case h:this.hideAll();
break;
}F.stopPropagation();
}else if(J){var K=t.getSelectedButton();
if(K){switch(H){case f:this._onKeyPressEnter(t,
K,
F);
break;
case r:this._onKeyPressSpace(t,
K,
F);
break;
}F.stopPropagation();
}}},
_onKeyPressUp:function(t){var L=t.getSelectedButton();
var x=t.getChildren();
var u=L?t.indexOf(L)-1:x.length-1;
var M=this._getChild(t,
u,
-1,
true);
if(M){t.setSelectedButton(M);
}else{t.resetSelectedButton();
}},
_onKeyPressDown:function(t){var L=t.getSelectedButton();
var u=L?t.indexOf(L)+1:0;
var M=this._getChild(t,
u,
1,
true);
if(M){t.setSelectedButton(M);
}else{t.resetSelectedButton();
}},
_onKeyPressLeft:function(t){var N=t.getOpener();
if(!N){return;
}if(N instanceof qx.ui.menu.Button){var O=N.getLayoutParent();
O.resetOpenedButton();
O.setSelectedButton(N);
}else if(N instanceof qx.ui.toolbar.MenuButton){var P=N.getToolBar().getMenuButtons();
var Q=P.indexOf(N);
if(Q===-1){return;
}var R=Q==0?P[P.length-1]:P[Q-1];
if(R!=N){R.open(true);
}}},
_onKeyPressRight:function(t){var L=t.getSelectedButton();
if(L){var S=L.getMenu();
if(S){t.setOpenedButton(L);
var T=this._getChild(S,
0,
1);
if(T){S.setSelectedButton(T);
}return;
}}else if(!t.getOpenedButton()){var T=this._getChild(t,
0,
1);
if(T){t.setSelectedButton(T);
if(T.getMenu()){t.setOpenedButton(T);
}return;
}}var N=t.getOpener();
if(N instanceof qx.ui.menu.Button&&L){while(N){N=N.getLayoutParent();
if(N instanceof qx.ui.menu.Menu){N=N.getOpener();
if(N instanceof qx.ui.toolbar.MenuButton){break;
}}else{break;
}}
if(!N){return;
}}if(N instanceof qx.ui.toolbar.MenuButton){var P=N.getToolBar().getMenuButtons();
var Q=P.indexOf(N);
if(Q===-1){return;
}var U=P[Q+1];
if(!U){U=P[0];
}
if(U!=N){U.open(true);
}}},
_onKeyPressEnter:function(t,
K,
F){if(K.hasListener(a)){var V=F.clone();
V.setBubbles(false);
V.setTarget(K);
K.dispatchEvent(V);
}this.hideAll();
},
_onKeyPressSpace:function(t,
K,
F){if(K.hasListener(a)){var V=F.clone();
V.setBubbles(false);
V.setTarget(K);
K.dispatchEvent(V);
}}}});
})();
(function(){var a="interval",
b="qx.event.Timer",
c="_applyInterval",
d="_applyEnabled",
f="__oninterval",
g="Boolean",
h="__dl",
i="qx.event.type.Event",
j="Integer";
qx.Class.define(b,
{extend:qx.core.Object,
construct:function(k){arguments.callee.base.call(this);
this.setEnabled(false);
if(k!=null){this.setInterval(k);
}this.__oninterval=qx.lang.Function.bind(this._oninterval,
this);
},
events:{"interval":i},
statics:{once:function(l,
m,
n){var o=new qx.event.Timer(n);
o.addListener(a,
function(p){l.call(m,
p);
o.dispose();
m=null;
},
m);
o.start();
return o;
}},
properties:{enabled:{init:true,
check:g,
apply:d},
interval:{check:j,
init:1000,
apply:c}},
members:{__dl:null,
_applyInterval:function(q,
r){if(this.getEnabled()){this.restart();
}},
_applyEnabled:function(q,
r){if(r){window.clearInterval(this.__dl);
this.__dl=null;
}else if(q){this.__dl=window.setInterval(this.__oninterval,
this.getInterval());
}},
start:function(){this.setEnabled(true);
},
startWith:function(k){this.setInterval(k);
this.start();
},
stop:function(){this.setEnabled(false);
},
restart:function(){this.stop();
this.start();
},
restartWith:function(k){this.stop();
this.startWith(k);
},
_oninterval:function(){if(this.getEnabled()){this.fireEvent(a);
}}},
destruct:function(){if(this.__dl){window.clearInterval(this.__dl);
}this._disposeFields(h,
f);
}});
})();
(function(){var a="Integer",
b="qx.ui.core.Widget",
c="selected",
d="qx.ui.menu.Menu",
f="_applyOpenInterval",
g="_applyOpenedButton",
h="_applyArrowColumnWidth",
i="_applyIconColumnWidth",
j="mouseover",
k="mouseout",
l="visible",
m="excluded",
n="_applySpacingX",
o="_applyCloseInterval",
p="_applySelectedButton",
q="menu",
r="_applySpacingY";
qx.Class.define(d,
{extend:qx.ui.core.Widget,
include:[qx.ui.core.MAlign,
qx.ui.core.MChildrenHandling],
construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Menu);
this.getApplicationRoot().add(this);
this.addListener(j,
this._onMouseOver);
this.addListener(k,
this._onMouseOut);
},
properties:{appearance:{refine:true,
init:q},
allowGrowX:{refine:true,
init:false},
allowGrowY:{refine:true,
init:false},
visibility:{refine:true,
init:m},
keepFocus:{refine:true,
init:true},
keepActive:{refine:true,
init:true},
spacingX:{check:a,
apply:n,
init:0,
themeable:true},
spacingY:{check:a,
apply:r,
init:0,
themeable:true},
iconColumnWidth:{check:a,
init:0,
themeable:true,
apply:i},
arrowColumnWidth:{check:a,
init:0,
themeable:true,
apply:h},
selectedButton:{check:b,
nullable:true,
apply:p},
openedButton:{check:b,
nullable:true,
apply:g},
opener:{check:b,
nullable:true},
openInterval:{check:a,
themeable:true,
init:250,
apply:f},
closeInterval:{check:a,
themeable:true,
init:250,
apply:o}},
members:{open:function(){this.alignToWidget(this.getOpener());
this.show();
},
addSeparator:function(){this.add(new qx.ui.menu.Separator);
},
getColumnSizes:function(){return this._getLayout().getColumnSizes();
},
_applyIconColumnWidth:function(s,
t){this._getLayout().setIconColumnWidth(s);
},
_applyArrowColumnWidth:function(s,
t){this._getLayout().setArrowColumnWidth(s);
},
_applySpacingX:function(s,
t){this._getLayout().setColumnSpacing(s);
},
_applySpacingY:function(s,
t){this._getLayout().setSpacing(s);
},
_applyVisibility:function(s,
t){arguments.callee.base.call(this,
s,
t);
var u=qx.ui.menu.Manager.getInstance();
if(s===l){u.add(this);
var v=this.getOpener();
var w=v.getLayoutParent();
if(w&&w instanceof qx.ui.menu.Menu){w.setOpenedButton(v);
}}else{u.remove(this);
var v=this.getOpener();
var w=v.getLayoutParent();
if(w&&w instanceof qx.ui.menu.Menu&&w.getOpenedButton()==v){w.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}},
_applySelectedButton:function(s,
t){if(t){t.removeState(c);
}
if(s){s.addState(c);
}},
_applyOpenedButton:function(s,
t){if(t){t.getMenu().exclude();
}
if(s){s.getMenu().open();
}},
_onMouseOver:function(x){var u=qx.ui.menu.Manager.getInstance();
u.cancelClose(this);
var y=x.getTarget();
if(y.isEnabled()&&y instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(y);
var z=y.getMenu&&y.getMenu();
if(z){u.scheduleOpen(z);
this._scheduledOpen=z;
}else{var A=this.getOpenedButton();
if(A){u.scheduleClose(A.getMenu());
}
if(this._scheduledOpen){u.cancelOpen(this._scheduledOpen);
this._scheduledOpen=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},
_onMouseOut:function(x){var u=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,
x.getRelatedTarget())){var A=this.getOpenedButton();
A?this.setSelectedButton(A):this.resetSelectedButton();
if(A){u.cancelClose(A.getMenu());
}if(this._scheduledOpen){u.cancelOpen(this._scheduledOpen);
}}}}});
})();
(function(){var a="_applyLayoutChange",
b="top",
c="left",
d="middle",
e="_applyReversed",
f="center",
g="baseline",
h="Array",
j="bottom",
k="qx.ui.layout.VBox",
m="Integer",
n="right",
o="Boolean";
qx.Class.define(k,
{extend:qx.ui.layout.Abstract,
construct:function(p,
q){arguments.callee.base.call(this);
if(p){this.setSpacing(p);
}
if(q){this.setAlignY(q);
}},
properties:{alignY:{check:[b,
d,
j],
init:b,
apply:a},
alignX:{check:[c,
f,
n,
g],
init:c,
apply:a},
spacing:{check:m,
init:0,
apply:a},
separator:{check:h,
nullable:true,
apply:a},
reversed:{check:o,
init:false,
apply:e}},
members:{_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},
__dm:function(){var r=this._getLayoutChildren();
var s=r.length;
var t=false;
var u=this.__heights&&this.__heights.length!=s&&this._flexs&&this._heights;
var v;
var w=u?this._heights:new Array(s);
var x=u?this._flexs:new Array(s);
if(this.getReversed()){r=r.concat().reverse();
}for(var y=0;y<s;y++){v=r[y].getLayoutProperties();
if(v.height!=null){w[y]=parseFloat(v.height)/100;
}
if(v.flex!=null){x[y]=v.flex;
t=true;
}}if(!u){this.__heights=w;
this.__flexs=x;
}this.__enableFlex=t;
this.__children=r;
delete this._invalidChildrenCache;
},
verifyLayoutProperty:null,
renderLayout:function(z,
A){if(this._invalidChildrenCache){this.__dm();
}var r=this.__children;
var s=r.length;
var B=qx.ui.layout.Util;
var p=this.getSpacing();
var C=this.getSeparator();
if(C){var D=B.computeSeparatorGaps(r,
p,
C.length);
}else{var D=B.computeVerticalGaps(r,
p,
true);
}var y,
E,
F,
G;
var w=[];
var H=D;
for(y=0;y<s;y+=1){G=this.__heights[y];
F=G!=null?Math.floor((A-D)*G):r[y].getSizeHint().height;
w.push(F);
H+=F;
}if(this.__enableFlex&&H!=A){var I={};
var J,
K;
for(y=0;y<s;y+=1){J=this.__flexs[y];
if(J>0){N=r[y].getSizeHint();
I[y]={min:N.minHeight,
value:w[y],
max:N.maxHeight,
flex:J};
}}var L=B.computeFlexOffsets(I,
A,
H);
for(y in L){K=L[y].offset;
w[y]+=K;
H+=K;
}}var M=r[0].getMarginTop();
if(H<A&&this.getAlignY()!=b){M=A-H;
if(this.getAlignY()===d){M=Math.round(M/2);
}}var N,
O,
P,
F,
Q,
R,
S;
var p=this.getSpacing();
var C=s>1&&this.getSeparator();
if(C){this._configureSeparators(s-1);
}for(y=0;y<s;y+=1){E=r[y];
F=w[y];
N=E.getSizeHint();
R=E.getMarginLeft();
S=E.getMarginRight();
P=Math.max(N.minWidth,
Math.min(z-R-S,
N.maxWidth));
O=B.computeHorizontalAlignOffset(E.getAlignX()||this.getAlignX(),
P,
z,
R,
S);
if(y>0){if(C){M+=Q+p;
this._renderVerticalSeparator(C,
y-1,
M,
z);
M+=C.length+p+E.getMarginTop();
}else{M+=B.collapseMargins(p,
Q,
E.getMarginTop());
}}E.renderLayout(O,
M,
P,
F);
M+=F;
Q=E.getMarginBottom();
}},
_computeSizeHint:function(){if(this._invalidChildrenCache){this.__dm();
}var B=qx.ui.layout.Util;
var r=this.__children;
var T=0,
F=0;
var U=0,
P=0;
var E,
N,
V;
for(var y=0,
W=r.length;y<W;y+=1){E=r[y];
N=E.getSizeHint();
F+=N.height;
T+=this.__flexs[y]>0?N.minHeight:N.height;
V=E.getMarginLeft()+E.getMarginRight();
if((N.width+V)>P){P=N.width+V;
}if((N.minWidth+V)>U){U=N.minWidth+V;
}}var p=this.getSpacing();
var C=this.getSeparator();
if(C){var D=B.computeSeparatorGaps(r,
p,
C.length);
}else{var D=B.computeVerticalGaps(r,
p,
true);
}return {minHeight:T+D,
height:F+D,
minWidth:U,
width:P};
}}});
})();
(function(){var a="Integer",
b="_applyLayoutChange",
c="qx.ui.layout.Menu";
qx.Class.define(c,
{extend:qx.ui.layout.VBox,
properties:{columnSpacing:{check:a,
init:0,
apply:b},
spanColumn:{check:a,
init:1,
nullable:true,
apply:b},
iconColumnWidth:{check:a,
init:0,
themeable:true,
apply:b},
arrowColumnWidth:{check:a,
init:0,
themeable:true,
apply:b}},
members:{_computeSizeHint:function(){var d=this._getLayoutChildren();
var e,
f;
var g=this.getSpanColumn();
var h=this._columnSizes=[0,
0,
0,
0];
var j=this.getColumnSpacing();
var k=0;
var m=0;
for(var n=0,
o=d.length;n<o;n++){e=d[n];
if(e.isAnonymous()){continue;
}f=e.getChildrenSizes();
for(var p=0;p<f.length;p++){if(g!=null&&p==g&&f[g+1]==0){k=Math.max(k,
f[p]);
}else{h[p]=Math.max(h[p],
f[p]);
}}var q=d[n].getInsets();
m=Math.max(m,
q.left+q.right);
}if(g!=null&&h[g]+j+h[g+1]<k){h[g]=k-h[g+1]-j;
}if(k==0){var r=j*2;
}else{var r=j*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}return {height:arguments.callee.base.call(this).height,
width:qx.lang.Array.sum(h)+m+r};
},
getColumnSizes:function(){return this._columnSizes||null;
}}});
})();
(function(){var a="menu-separator",
b="qx.ui.menu.Separator";
qx.Class.define(b,
{extend:qx.ui.core.Widget,
properties:{appearance:{refine:true,
init:a},
anonymous:{refine:true,
init:true}}});
})();
(function(){var a="icon",
b="label",
c="arrow",
d="shortcut",
f="submenu",
g="String",
h="qx.ui.menu.Menu",
i="qx.ui.menu.AbstractButton",
j="keypress",
k="_applyIcon",
l="mouseup",
m="abstract",
n="_applyLabel",
o="_applyMenu";
qx.Class.define(i,
{extend:qx.ui.core.Widget,
type:m,
construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.MenuButton);
this.addListener(l,
this._onMouseUp);
this.addListener(j,
this._onKeyPress);
},
properties:{label:{check:g,
apply:n,
nullable:true},
menu:{check:h,
apply:o,
nullable:true},
icon:{check:g,
apply:k,
themeable:true,
nullable:true}},
members:{_createChildControlImpl:function(p){var q;
switch(p){case a:q=new qx.ui.basic.Image;
q.setAnonymous(true);
this._add(q,
{column:0});
break;
case b:q=new qx.ui.basic.Label;
q.setAnonymous(true);
this._add(q,
{column:1});
break;
case d:q=new qx.ui.basic.Label;
q.setAnonymous(true);
this._add(q,
{column:2});
break;
case c:q=new qx.ui.basic.Image;
q.setAnonymous(true);
this._add(q,
{column:3});
break;
}return q||arguments.callee.base.call(this,
p);
},
_forwardStates:{selected:1},
getChildrenSizes:function(){var r=0,
s=0,
t=0,
u=0;
if(this._isChildControlVisible(a)){var v=this._getChildControl(a);
r=v.getMarginLeft()+v.getSizeHint().width+v.getMarginRight();
}
if(this._isChildControlVisible(b)){var w=this._getChildControl(b);
s=w.getMarginLeft()+w.getSizeHint().width+w.getMarginRight();
}
if(this._isChildControlVisible(d)){var x=this._getChildControl(d);
t=x.getMarginLeft()+x.getSizeHint().width+x.getMarginRight();
}
if(this._isChildControlVisible(c)){var y=this._getChildControl(c);
u=y.getMarginLeft()+y.getSizeHint().width+y.getMarginRight();
}return [r,
s,
t,
u];
},
_onMouseUp:function(z){},
_onKeyPress:function(z){},
_applyIcon:function(A,
B){if(A){this._showChildControl(a).setSource(A);
}else{this._excludeChildControl(a);
}},
_applyLabel:function(A,
B){if(A){this._showChildControl(b).setContent(A);
}else{this._excludeChildControl(b);
}},
_applyMenu:function(A,
B){if(B){B.resetOpener();
B.removeState(f);
}
if(A){this._showChildControl(c);
A.setOpener(this);
A.addState(f);
}else{this._excludeChildControl(c);
}}}});
})();
(function(){var a="middle",
b="qx.ui.layout.MenuButton",
c="left";
qx.Class.define(b,
{extend:qx.ui.layout.Abstract,
members:{verifyLayoutProperty:null,
renderLayout:function(d,
e){var f=this._getLayoutChildren();
var g;
var h;
var j=[];
for(var k=0,
m=f.length;k<m;k++){g=f[k];
h=g.getLayoutProperties().column;
j[h]=g;
}var n=f[0].getLayoutParent().getLayoutParent();
var o=n.getColumnSizes();
var p=n.getSpacingX();
var q=0,
r=0;
var s=qx.ui.layout.Util;
for(var k=0,
m=o.length;k<m;k++){g=j[k];
if(g){hint=g.getSizeHint();
var r=s.computeVerticalAlignOffset(g.getAlignY()||a,
hint.height,
e,
0,
0);
var t=s.computeHorizontalAlignOffset(g.getAlignX()||c,
hint.width,
o[k],
g.getMarginLeft(),
g.getMarginRight());
g.renderLayout(q+t,
r,
hint.width,
hint.height);
}q+=o[k]+p;
}},
_computeSizeHint:function(){var f=this._getLayoutChildren();
var u=0;
for(var k=0,
m=f.length;k<m;k++){u=Math.max(u,
f[k].getSizeHint().height);
}return {width:0,
height:u};
}}});
})();
(function(){var a="shortcut",
b="qx.ui.menu.Button",
c="changeCommand",
d="menu-button";
qx.Class.define(b,
{extend:qx.ui.menu.AbstractButton,
include:qx.ui.core.MExecutable,
construct:function(f,
g,
h,
i){arguments.callee.base.call(this);
this.addListener(c,
this._onChangeCommand,
this);
if(f!=null){this.setLabel(f);
}
if(g!=null){this.setIcon(g);
}
if(h!=null){this.setCommand(h);
}
if(i!=null){this.setMenu(i);
}},
properties:{appearance:{refine:true,
init:d}},
members:{_onChangeCommand:function(j){this._getChildControl(a).setContent(j.getData().toString());
},
_onMouseUp:function(j){if(j.isLeftPressed()){this.execute();
if(this.getMenu()){j.stopPropagation();
}}},
_onKeyPress:function(j){this.execute();
}}});
})();
(function(){var a="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(a,
{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},
hasChildren:function(){return this.getChildrenContainer().hasChildren();
},
add:function(b,
c){return this.getChildrenContainer().add(b,
c);
},
remove:function(b){return this.getChildrenContainer().remove(b);
},
removeAll:function(){return this.getChildrenContainer().removeAll();
},
indexOf:function(b){return this.getChildrenContainer().indexOf(b);
},
addAt:function(b,
d,
c){return this.getChildrenContainer().addAt(b,
d,
c);
},
addBefore:function(b,
e,
c){return this.getChildrenContainer().addBefore(b,
e,
c);
},
addAfter:function(b,
f,
c){return this.getChildrenContainer().addAfter(b,
f,
c);
},
removeAt:function(d){return this.getChildrenContainer().removeAt(d);
}}});
})();
(function(){var a="handle",
b="container",
c="qx.ui.toolbar.Part",
d="inherit",
e="icon",
f="none",
g="label",
h="changeShow",
j="both",
k="toolbar/part";
qx.Class.define(c,
{extend:qx.ui.core.Widget,
include:[qx.ui.core.MRemoteChildrenHandling],
construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(a);
},
properties:{appearance:{refine:true,
init:k},
show:{init:d,
check:[j,
g,
e,
f],
nullable:true,
inheritable:true,
event:h}},
members:{_createChildControlImpl:function(m){var n;
switch(m){case a:n=new qx.ui.core.Widget();
n.setHeight(0);
this._add(n);
break;
case b:n=new qx.ui.toolbar.PartContainer;
this._add(n);
break;
}return n||arguments.callee.base.call(this,
m);
},
getChildrenContainer:function(){return this._getChildControl(b);
},
addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},
getMenuButtons:function(){var o=this.getChildren();
var p=[];
var q;
for(var r=0,
s=o.length;r<s;r++){q=o[r];
if(q instanceof qx.ui.toolbar.MenuButton){p.push(q);
}}return p;
}}});
})();
(function(){var a="toolbar/part/container",
b="inherit",
c="icon",
d="none",
e="label",
f="qx.ui.toolbar.PartContainer",
g="changeShow",
h="both";
qx.Class.define(f,
{extend:qx.ui.container.Composite,
construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},
properties:{appearance:{refine:true,
init:a},
show:{init:b,
check:[h,
e,
c,
d],
nullable:true,
inheritable:true,
event:g}}});
})();
(function(){var a="inherit",
b="toolbar-button",
c="keydown",
d="qx.ui.toolbar.Button",
e="keyup";
qx.Class.define(d,
{extend:qx.ui.form.Button,
construct:function(f,
g,
h){arguments.callee.base.call(this,
f,
g,
h);
this.removeListener(c,
this._onKeyDown);
this.removeListener(e,
this._onKeyUp);
},
properties:{appearance:{refine:true,
init:b},
show:{refine:true,
init:a},
focusable:{refine:true,
init:false}}});
})();
(function(){var a="Boolean",
b="qx.event.type.Event",
c="queued",
d="String",
f="sending",
g="qx.io.remote.Response",
h="receiving",
i="aborted",
j="failed",
k="completed",
l="configured",
m="timeout",
n="GET",
o="Pragma",
p="nocache",
q="POST",
r="no-cache",
s="Cache-Control",
t="Content-Type",
u="text/plain",
v="application/xml",
w="application/json",
x="text/html",
y="application/x-www-form-urlencoded",
z="qx.io.remote.Exchange",
A="Integer",
B="X-Qooxdoo-Response-Type",
C="_formFields",
D="HEAD",
E="qx.io.remote.Request",
F="_parameters",
G="_applyResponseType",
H="_applyState",
I="text/javascript",
J="changeState",
K="PUT",
L="_applyProhibitCaching",
M="",
N="_requestHeaders",
O="_applyMethod",
P="DELETE";
qx.Class.define(E,
{extend:qx.core.Object,
construct:function(Q,
R,
S){arguments.callee.base.call(this);
this._requestHeaders={};
this._parameters={};
this._formFields={};
if(Q!==undefined){this.setUrl(Q);
}
if(R!==undefined){this.setMethod(R);
}
if(S!==undefined){this.setResponseType(S);
}this.setProhibitCaching(true);
this._seqNum=++qx.io.remote.Request._seqNum;
},
events:{"created":b,
"configured":b,
"sending":b,
"receiving":b,
"completed":g,
"aborted":g,
"failed":g,
"timeout":g},
statics:{_seqNum:0},
properties:{url:{check:d,
init:M},
method:{check:[n,
q,
K,
D,
P],
apply:O,
init:n},
asynchronous:{check:a,
init:true},
data:{check:d,
nullable:true},
username:{check:d,
nullable:true},
password:{check:d,
nullable:true},
state:{check:[l,
c,
f,
h,
k,
i,
m,
j],
init:l,
apply:H,
event:J},
responseType:{check:[u,
I,
w,
v,
x],
init:u,
apply:G},
timeout:{check:A,
nullable:true},
prohibitCaching:{check:a,
init:true,
apply:L},
crossDomain:{check:a,
init:false},
fileUpload:{check:a,
init:false},
transport:{check:z,
nullable:true},
useBasicHttpAuth:{check:a,
init:false}},
members:{send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},
abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},
reset:function(){switch(this.getState()){case f:case h:this.error("Aborting already sent request!");
case c:this.abort();
break;
}},
isConfigured:function(){return this.getState()===l;
},
isQueued:function(){return this.getState()===c;
},
isSending:function(){return this.getState()===f;
},
isReceiving:function(){return this.getState()===h;
},
isCompleted:function(){return this.getState()===k;
},
isAborted:function(){return this.getState()===i;
},
isTimeout:function(){return this.getState()===m;
},
isFailed:function(){return this.getState()===j;
},
__dn:function(T){var U=T.clone();
U.setTarget(this);
this.dispatchEvent(U);
},
_onqueued:function(T){this.setState(c);
this.__dn(T);
},
_onsending:function(T){this.setState(f);
this.__dn(T);
},
_onreceiving:function(T){this.setState(h);
this.__dn(T);
},
_oncompleted:function(T){this.setState(k);
this.__dn(T);
this.dispose();
},
_onaborted:function(T){this.setState(i);
this.__dn(T);
this.dispose();
},
_ontimeout:function(T){this.setState(m);
this.__dn(T);
this.dispose();
},
_onfailed:function(T){this.setState(j);
this.__dn(T);
this.dispose();
},
_applyState:function(V,
W){{};
},
_applyProhibitCaching:function(V,
W){if(V){this.setParameter(p,
new Date().valueOf());
this.setRequestHeader(o,
r);
this.setRequestHeader(s,
r);
}else{this.removeParameter(p);
this.removeRequestHeader(o);
this.removeRequestHeader(s);
}},
_applyMethod:function(V,
W){if(V===q){this.setRequestHeader(t,
y);
}else{this.removeRequestHeader(t);
}},
_applyResponseType:function(V,
W){this.setRequestHeader(B,
V);
},
setRequestHeader:function(X,
Y){this._requestHeaders[X]=Y;
},
removeRequestHeader:function(X){delete this._requestHeaders[X];
},
getRequestHeader:function(X){return this._requestHeaders[X]||null;
},
getRequestHeaders:function(){return this._requestHeaders;
},
setParameter:function(X,
Y){this._parameters[X]=Y;
},
removeParameter:function(X){delete this._parameters[X];
},
getParameter:function(X){return this._parameters[X]||null;
},
getParameters:function(){return this._parameters;
},
setFormField:function(X,
Y){this._formFields[X]=Y;
},
removeFormField:function(X){delete this._formFields[X];
},
getFormField:function(X){return this._formFields[X]||null;
},
getFormFields:function(){return this._formFields;
},
getSequenceNumber:function(){return this._seqNum;
}},
destruct:function(){this.setTransport(null);
this._disposeFields(N,
F,
C);
}});
})();
(function(){var a="Integer",
b="sending",
c="failed",
d="timeout",
f="completed",
g="aborted",
h="_active",
j="_queue",
k="_applyEnabled",
l="Boolean",
m="interval",
n="qx.io.remote.RequestQueue",
o="_timer",
p="queued",
q="receiving",
r="singleton";
qx.Class.define(n,
{type:r,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this._queue=[];
this._active=[];
this._totalRequests=0;
this._timer=new qx.event.Timer(500);
this._timer.addListener(m,
this._oninterval,
this);
},
properties:{enabled:{init:true,
check:l,
apply:k},
maxTotalRequests:{check:a,
nullable:true},
maxConcurrentRequests:{check:a,
init:3},
defaultTimeout:{check:a,
init:5000}},
members:{_debug:function(){var s;
},
_check:function(){this._debug();
if(this._active.length==0&&this._queue.length==0){this._timer.stop();
}if(!this.getEnabled()){return;
}if(this._active.length>=this.getMaxConcurrentRequests()||this._queue.length==0){return;
}if(this.getMaxTotalRequests()!=null&&this._totalRequests>=this.getMaxTotalRequests()){return;
}var t=this._queue.shift();
var u=new qx.io.remote.Exchange(t);
this._totalRequests++;
this._active.push(u);
this._debug();
u.addListener(b,
t._onsending,
t);
u.addListener(q,
t._onreceiving,
t);
u.addListener(f,
t._oncompleted,
t);
u.addListener(g,
t._onaborted,
t);
u.addListener(d,
t._ontimeout,
t);
u.addListener(c,
t._onfailed,
t);
u.addListener(b,
this._onsending,
this);
u.addListener(f,
this._oncompleted,
this);
u.addListener(g,
this._oncompleted,
this);
u.addListener(d,
this._oncompleted,
this);
u.addListener(c,
this._oncompleted,
this);
u._start=(new Date).valueOf();
u.send();
if(this._queue.length>0){this._check();
}},
_remove:function(u){qx.lang.Array.remove(this._active,
u);
u.dispose();
this._check();
},
_activeCount:0,
_onsending:function(v){{};
},
_oncompleted:function(v){{};
this._remove(v.getTarget());
},
_oninterval:function(v){var w=this._active;
if(w.length==0){this._timer.stop();
return;
}var x=(new Date).valueOf();
var u;
var t;
var y=this.getDefaultTimeout();
var z;
var A;
for(var B=w.length-1;B>=0;B--){u=w[B];
t=u.getRequest();
if(t.isAsynchronous()){z=t.getTimeout();
if(z==0){continue;
}
if(z==null){z=y;
}A=x-u._start;
if(A>z){this.warn("Timeout: transport "+u.toHashCode());
this.warn(A+"ms > "+z+"ms");
u.timeout();
}}}},
_applyEnabled:function(C,
D){if(C){this._check();
}this._timer.setEnabled(C);
},
add:function(t){t.setState(p);
this._queue.push(t);
this._check();
if(this.getEnabled()){this._timer.start();
}},
abort:function(t){var u=t.getTransport();
if(u){u.abort();
}else if(qx.lang.Array.contains(this._queue,
t)){qx.lang.Array.remove(this._queue,
t);
}}},
destruct:function(){this._disposeArray(h);
this._disposeObjects(o);
this._disposeFields(j);
}});
})();
(function(){var a="sending",
b="completed",
c="receiving",
d="aborted",
f="failed",
g="timeout",
h="qx.io.remote.Response",
j="Connection dropped",
k="configured",
m="qx.event.type.Event",
n="Proxy authentication required",
o="qx.io.remote.transport.Abstract",
p="MSHTML-specific HTTP status code",
q="Not available",
r="Precondition failed",
s="Server error",
t="Moved temporarily",
u="qx.io.remote.Exchange",
v="Bad gateway",
w="Gone",
x="See other",
y="Partial content",
z="Server timeout",
A="qx.io.remote.transport.Script",
B="HTTP version not supported",
C="Unauthorized",
D="Multiple choices",
E="Payment required",
F="Not implemented",
G="Request-URL too large",
H="Length required",
I="_applyState",
J="changeState",
K="Not modified",
L="qx.io.remote.Request",
M="Connection closed by server",
N="Moved permanently",
O="_applyImplementation",
P="Method not allowed",
Q="Forbidden",
R="Use proxy",
S="Ok",
T="Not found",
U="Not acceptable",
V="Request time-out",
W="Bad request",
X="Conflict",
Y="No content",
ba="qx.io.remote.transport.XmlHttp",
bb="qx.io.remote.transport.Iframe",
bc="Request entity too large",
bd="Unknown status code",
be="Unsupported media type",
bf="Gateway time-out",
bg="created",
bh="Out of resources",
bi="undefined";
qx.Class.define(u,
{extend:qx.core.Object,
construct:function(bj){arguments.callee.base.call(this);
this.setRequest(bj);
bj.setTransport(this);
},
events:{"sending":m,
"receiving":m,
"completed":h,
"aborted":h,
"failed":h,
"timeout":h},
statics:{typesOrder:[ba,
bb,
A],
typesReady:false,
typesAvailable:{},
typesSupported:{},
registerType:function(bk,
bl){qx.io.remote.Exchange.typesAvailable[bl]=bk;
},
initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bl in qx.io.remote.Exchange.typesAvailable){var bm=qx.io.remote.Exchange.typesAvailable[bl];
if(bm.isSupported()){qx.io.remote.Exchange.typesSupported[bl]=bm;
}}qx.io.remote.Exchange.typesReady=true;
if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},
canHandle:function(bn,
bo,
bp){if(!qx.lang.Array.contains(bn.handles.responseTypes,
bp)){return false;
}
for(var bq in bo){if(!bn.handles[bq]){return false;
}}return true;
},
_nativeMap:{0:bg,
1:k,
2:a,
3:c,
4:b},
wasSuccessful:function(br,
bs,
bt){if(bt){switch(br){case null:case 0:return true;
case -1:return bs<4;
default:return typeof br===bi;
}}else{switch(br){case -1:{};
return bs<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bs!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(br>206&&br<300){return true;
}qx.log.Logger.debug(this,
"Unknown status code: "+br+" ("+bs+")");
return false;
}}},
statusCodeToString:function(br){switch(br){case -1:return q;
case 200:return S;
case 304:return K;
case 206:return y;
case 204:return Y;
case 300:return D;
case 301:return N;
case 302:return t;
case 303:return x;
case 305:return R;
case 400:return W;
case 401:return C;
case 402:return E;
case 403:return Q;
case 404:return T;
case 405:return P;
case 406:return U;
case 407:return n;
case 408:return V;
case 409:return X;
case 410:return w;
case 411:return H;
case 412:return r;
case 413:return bc;
case 414:return G;
case 415:return be;
case 500:return s;
case 501:return F;
case 502:return v;
case 503:return bh;
case 504:return bf;
case 505:return B;
case 12002:return z;
case 12029:return j;
case 12030:return j;
case 12031:return j;
case 12152:return M;
case 13030:return p;
default:return bd;
}}},
properties:{request:{check:L,
nullable:true},
implementation:{check:o,
nullable:true,
apply:O},
state:{check:[k,
a,
c,
b,
d,
g,
f],
init:k,
event:J,
apply:I}},
members:{send:function(){var bj=this.getRequest();
if(!bj){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bu=qx.io.remote.Exchange.typesOrder;
var bv=qx.io.remote.Exchange.typesSupported;
var bp=bj.getResponseType();
var bo={};
if(bj.getAsynchronous()){bo.asynchronous=true;
}else{bo.synchronous=true;
}
if(bj.getCrossDomain()){bo.crossDomain=true;
}
if(bj.getFileUpload()){bo.fileUpload=true;
}for(var bw in bj.getFormFields()){bo.programaticFormFields=true;
break;
}var bx,
by;
for(var bz=0,
bA=bu.length;bz<bA;bz++){bx=bv[bu[bz]];
if(bx){if(!qx.io.remote.Exchange.canHandle(bx,
bo,
bp)){continue;
}
try{{};
by=new bx;
this.setImplementation(by);
by.setUseBasicHttpAuth(bj.getUseBasicHttpAuth());
by.send();
return true;
}catch(ex){this.error("Request handler throws error");
this.error(ex);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bj);
},
abort:function(){var bB=this.getImplementation();
if(bB){{};
bB.abort();
}else{{};
this.setState(d);
}},
timeout:function(){var bB=this.getImplementation();
if(bB){this.warn("Timeout: implementation "+bB.toHashCode());
bB.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(g);
}if(this.getRequest()){this.getRequest().setTimeout(0);
}},
_onsending:function(bC){this.setState(a);
},
_onreceiving:function(bC){this.setState(c);
},
_oncompleted:function(bC){this.setState(b);
},
_onabort:function(bC){this.setState(d);
},
_onfailed:function(bC){this.setState(f);
},
_ontimeout:function(bC){this.setState(g);
},
_applyImplementation:function(bD,
bE){if(bE){bE.removeListener(a,
this._onsending,
this);
bE.removeListener(c,
this._onreceiving,
this);
bE.removeListener(b,
this._oncompleted,
this);
bE.removeListener(d,
this._onabort,
this);
bE.removeListener(g,
this._ontimeout,
this);
bE.removeListener(f,
this._onfailed,
this);
}
if(bD){var bj=this.getRequest();
bD.setUrl(bj.getUrl());
bD.setMethod(bj.getMethod());
bD.setAsynchronous(bj.getAsynchronous());
bD.setUsername(bj.getUsername());
bD.setPassword(bj.getPassword());
bD.setParameters(bj.getParameters());
bD.setFormFields(bj.getFormFields());
bD.setRequestHeaders(bj.getRequestHeaders());
bD.setData(bj.getData());
bD.setResponseType(bj.getResponseType());
bD.addListener(a,
this._onsending,
this);
bD.addListener(c,
this._onreceiving,
this);
bD.addListener(b,
this._oncompleted,
this);
bD.addListener(d,
this._onabort,
this);
bD.addListener(g,
this._ontimeout,
this);
bD.addListener(f,
this._onfailed,
this);
}},
_applyState:function(bD,
bE){{};
switch(bD){case a:this.fireEvent(a);
break;
case c:this.fireEvent(c);
break;
case b:case d:case g:case f:var bn=this.getImplementation();
if(!bn){break;
}
if(this.hasListener(bD)){var bF=qx.event.Registration.createEvent(bD,
qx.io.remote.Response);
if(bD==b){var bG=bn.getResponseContent();
bF.setContent(bG);
if(bG===null){{};
bD=f;
}}bF.setStatusCode(bn.getStatusCode());
bF.setResponseHeaders(bn.getResponseHeaders());
this.dispatchEvent(bF);
}this.setImplementation(null);
bn.dispose();
break;
}}},
settings:{"qx.ioRemoteDebug":false,
"qx.ioRemoteDebugData":false},
destruct:function(){var bn=this.getImplementation();
if(bn){this.setImplementation(null);
bn.dispose();
}this.setRequest(null);
}});
})();
(function(){var a="qx.event.type.Event",
b="String",
c="failed",
d="timeout",
e="created",
f="aborted",
g="sending",
h="configured",
i="receiving",
j="completed",
k="Object",
l="Boolean",
m="abstract",
n="_applyState",
o="changeState",
p="qx.io.remote.transport.Abstract";
qx.Class.define(p,
{type:m,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
},
events:{"created":a,
"configured":a,
"sending":a,
"receiving":a,
"completed":a,
"aborted":a,
"failed":a,
"timeout":a},
properties:{url:{check:b,
nullable:true},
method:{check:b,
nullable:true},
asynchronous:{check:l,
nullable:true},
data:{check:b,
nullable:true},
username:{check:b,
nullable:true},
password:{check:b,
nullable:true},
state:{check:[e,
h,
g,
i,
j,
f,
d,
c],
init:e,
event:o,
apply:n},
requestHeaders:{check:k,
nullable:true},
parameters:{check:k,
nullable:true},
formFields:{check:k,
nullable:true},
responseType:{check:b,
nullable:true},
useBasicHttpAuth:{check:l,
nullable:true}},
members:{send:function(){throw new Error("send is abstract");
},
abort:function(){{};
this.setState(f);
},
timeout:function(){{};
this.setState(d);
},
failed:function(){{};
this.setState(c);
},
setRequestHeader:function(q,
r){throw new Error("setRequestHeader is abstract");
},
getResponseHeader:function(q){throw new Error("getResponseHeader is abstract");
},
getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},
getStatusCode:function(){throw new Error("getStatusCode is abstract");
},
getStatusText:function(){throw new Error("getStatusText is abstract");
},
getResponseText:function(){throw new Error("getResponseText is abstract");
},
getResponseXml:function(){throw new Error("getResponseXml is abstract");
},
getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},
_applyState:function(s,
t){{};
switch(s){case e:this.fireEvent(e);
break;
case h:this.fireEvent(h);
break;
case g:this.fireEvent(g);
break;
case i:this.fireEvent(i);
break;
case j:this.fireEvent(j);
break;
case f:this.fireEvent(f);
break;
case c:this.fireEvent(c);
break;
case d:this.fireEvent(d);
break;
}return true;
}}});
})();
(function(){var a="qx.event.type.Event",
b="completed",
c="failed",
d="aborted",
f="",
g="timeout",
h="application/xml",
j="qx.io.remote.transport.XmlHttp",
k="application/json",
m="text/html",
n="qx.client",
o="receiving",
p="text/plain",
q="text/javascript",
r="sending",
t="&",
u="configured",
v="?",
w="=",
x="created",
y='Referer',
z='Basic ',
A="\n</pre>",
B="string",
C='Authorization',
D="<pre>Could not execute json: \n",
E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
F=':',
G="_req",
H="parseerror",
I="file:",
J="webkit",
K="object";
qx.Class.define(j,
{extend:qx.io.remote.transport.Abstract,
construct:function(){arguments.callee.base.call(this);
this._req=qx.io.remote.transport.XmlHttp.createRequestObject();
this._req.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
},
events:{"created":a,
"configured":a,
"sending":a,
"receiving":a,
"completed":a,
"aborted":a,
"failed":a,
"timeout":a},
statics:{handles:{synchronous:true,
asynchronous:true,
crossDomain:false,
fileUpload:false,
programaticFormFields:false,
responseTypes:[p,
q,
k,
h,
m]},
requestObjects:[],
requestObjectCount:0,
createRequestObject:qx.core.Variant.select(n,
{"default":function(){return new XMLHttpRequest;
},
"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),
isSupported:function(){return !!this.createRequestObject();
},
__do:function(){}},
members:{_localRequest:false,
_lastReadyState:0,
getRequest:function(){return this._req;
},
send:function(){this._lastReadyState=0;
var L=this.getRequest();
var M=this.getMethod();
var N=this.getAsynchronous();
var O=this.getUrl();
var P=(window.location.protocol===I&&!(/^http(s){0,1}\:/.test(O)));
this._localRequest=P;
var Q=this.getParameters();
var R=[];
for(var S in Q){var T=Q[S];
if(T instanceof Array){for(var U=0;U<T.length;U++){R.push(encodeURIComponent(S)+w+encodeURIComponent(T[U]));
}}else{R.push(encodeURIComponent(S)+w+encodeURIComponent(T));
}}
if(R.length>0){O+=(O.indexOf(v)>=0?t:v)+R.join(t);
}var V=function(W){var X=E;
var Y=f;
var ba,
bb,
bc;
var bd,
be,
bf,
bg;
var U=0;
do{ba=W.charCodeAt(U++);
bb=W.charCodeAt(U++);
bc=W.charCodeAt(U++);
bd=ba>>2;
be=((ba&3)<<4)|(bb>>4);
bf=((bb&15)<<2)|(bc>>6);
bg=bc&63;
if(isNaN(bb)){bf=bg=64;
}else if(isNaN(bc)){bg=64;
}Y+=X.charAt(bd)+X.charAt(be)+X.charAt(bf)+X.charAt(bg);
}while(U<W.length);
return Y;
};
L.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){L.open(M,
O,
N);
L.setRequestHeader(C,
z+V(this.getUsername()+F+this.getPassword()));
}else{L.open(M,
O,
N,
this.getUsername(),
this.getPassword());
}}else{L.open(M,
O,
N);
}}catch(ex){this.error("Failed with exception: "+ex);
this.failed();
return;
}if(!qx.core.Variant.isSet(n,
J)){L.setRequestHeader(y,
window.location.href);
}var bh=this.getRequestHeaders();
for(var S in bh){L.setRequestHeader(S,
bh[S]);
}try{{};
L.send(this.getData());
}catch(ex){if(P){this.failedLocally();
}else{this.error("Failed to send data: "+ex,
"send");
this.failed();
}return;
}if(!N){this._onreadystatechange();
}},
failedLocally:function(){if(this.getState()===c){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},
_onreadystatechange:function(bi){switch(this.getState()){case b:case d:case c:case g:{};
return;
}var bj=this.getReadyState();
if(bj==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),
bj,
this._localRequest)){return this.failed();
}}while(this._lastReadyState<bj){this.setState(qx.io.remote.Exchange._nativeMap[++this._lastReadyState]);
}},
getReadyState:function(){var bj=null;
try{bj=this._req.readyState;
}catch(ex){}return bj;
},
setRequestHeader:function(bk,
bl){this._req.setRequestHeader(bk,
bl);
},
getResponseHeader:function(bk){var bm=null;
try{this.getRequest().getResponseHeader(bk)||null;
}catch(ex){}return bm;
},
getStringResponseHeaders:function(){var bn=null;
try{var bo=this._req.getAllResponseHeaders();
if(bo){bn=bo;
}}catch(ex){}return bn;
},
getResponseHeaders:function(){var bn=this.getStringResponseHeaders();
var bp={};
if(bn){var bq=bn.split(/[\r\n]+/g);
for(var U=0,
br=bq.length;U<br;U++){var bs=bq[U].match(/^([^:]+)\s*:\s*(.+)$/i);
if(bs){bp[bs[1]]=bs[2];
}}}return bp;
},
getStatusCode:function(){var bt=-1;
try{bt=this.getRequest().status;
}catch(ex){}return bt;
},
getStatusText:function(){var bu=f;
try{bu=this.getRequest().statusText;
}catch(ex){}return bu;
},
getResponseText:function(){var bv=null;
var bw=this.getStatusCode();
var bj=this.getReadyState();
if(qx.io.remote.Exchange.wasSuccessful(bw,
bj,
this._localRequest)){try{bv=this.getRequest().responseText;
}catch(ex){}}return bv;
},
getResponseXml:function(){var bx=null;
var bw=this.getStatusCode();
var bj=this.getReadyState();
if(qx.io.remote.Exchange.wasSuccessful(bw,
bj,
this._localRequest)){try{bx=this.getRequest().responseXML;
}catch(ex){}}if(typeof bx==K&&bx!=null){if(!bx.documentElement){var by=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,
f);
bx.loadXML(by);
}if(!bx.documentElement){throw new Error("Missing Document Element!");
}
if(bx.documentElement.tagName==H){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bx;
},
getFetchedLength:function(){var bz=this.getResponseText();
return typeof bz==B?bz.length:0;
},
getResponseContent:function(){if(this.getState()!==b){{};
return null;
}{};
var bz=this.getResponseText();
switch(this.getResponseType()){case p:case m:{};
return bz;
case k:{};
try{if(bz&&bz.length>0){return qx.util.Json.parseQx(bz)||null;
}else{return null;
}}catch(ex){this.error("Could not execute json: ["+bz+"]",
ex);
return D+bz+A;
}case q:{};
try{if(bz&&bz.length>0){return window.eval(bz)||null;
}else{return null;
}}catch(ex){this.error("Could not execute javascript: ["+bz+"]",
ex);
return null;
}case h:bz=this.getResponseXml();
{};
return bz||null;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},
_applyState:function(T,
bA){{};
switch(T){case x:this.fireEvent(x);
break;
case u:this.fireEvent(u);
break;
case r:this.fireEvent(r);
break;
case o:this.fireEvent(o);
break;
case b:this.fireEvent(b);
break;
case c:this.fireEvent(c);
break;
case d:this.getRequest().abort();
this.fireEvent(d);
break;
case g:this.getRequest().abort();
this.fireEvent(g);
break;
}}},
defer:function(bB,
bC){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,
j);
},
destruct:function(){var L=this.getRequest();
if(L){L.onreadystatechange=qx.io.remote.transport.XmlHttp.__do;
switch(L.readyState){case 1:case 2:case 3:L.abort();
}}this._disposeFields(G);
}});
})();
(function(){var a="qx.client",
b="",
c="mshtml",
d='<?xml version="1.0" encoding="utf-8"?>\n<',
e="MSXML2.DOMDocument.3.0",
f="qx.xml.Document",
g=" />",
h="SelectionLanguage",
j="'",
k="MSXML2.XMLHTTP.3.0",
m="MSXML2.XMLHTTP.6.0",
n=" xmlns='",
o="text/xml",
p="XPath",
q="MSXML2.DOMDocument.6.0";
qx.Bootstrap.define(f,
{statics:{DOMDOC:null,
XMLHTTP:null,
create:qx.core.Variant.select(a,
{"mshtml":function(r,
s){var t=new ActiveXObject(this.DOMDOC);
t.setProperty(h,
p);
if(s){var u=d;
u+=s;
if(r){u+=n+r+j;
}u+=g;
t.loadXML(u);
}return t;
},
"default":function(r,
s){return document.implementation.createDocument(r||b,
s||b,
null);
}}),
fromString:qx.core.Variant.select(a,
{"mshtml":function(u){var v=qx.xml.Document.create();
v.loadXML(u);
return v;
},
"default":function(u){var w=new DOMParser();
return w.parseFromString(u,
o);
}})},
defer:function(x){if(qx.core.Variant.isSet(a,
c)){var y=[q,
e];
var z=[m,
k];
for(var A=0,
B=y.length;A<B;A++){try{new ActiveXObject(y[A]);
new ActiveXObject(z[A]);
}catch(ex){continue;
}x.DOMDOC=y[A];
x.XMLHTTP=z[A];
break;
}}}});
})();
(function(){var c=",",
d="",
e="string",
f="null",
g='"',
h="qx.jsonDebugging",
j='\\u00',
k="new Date(Date.UTC(",
m=")",
n="__dz",
o='\\\\',
p='\\f',
q="__dA",
r='\\"',
s="))",
t="__dq",
u="}",
v='(',
w="__ds",
x="{",
y='\\r',
z="Object",
A=":",
B='\\t',
C="(",
D="]",
E=')',
F="[",
G="qx.jsonEncodeUndefined",
H='\\b',
I="__dr",
J="qx.util.Json",
K="__dt",
L='\\n',
M="Date",
N="Array";
qx.Class.define(J,
{statics:{BEAUTIFYING_INDENT:"  ",
BEAUTIFYING_LINE_END:"\n",
__dp:{"function":t,
"boolean":I,
"number":w,
"string":K,
"object":n,
"undefined":q},
__dq:function(O){return String(O);
},
__dr:function(O){return String(O);
},
__ds:function(O){return isFinite(O)?String(O):f;
},
__dt:function(O){var P;
if(/["\\\x00-\x1f]/.test(O)){P=O.replace(/([\x00-\x1f\\"])/g,
qx.util.Json.__dv);
}else{P=O;
}return g+P+g;
},
__du:{'\b':H,
'\t':B,
'\n':L,
'\f':p,
'\r':y,
'"':r,
'\\':o},
__dv:function(Q,
R){var P=qx.util.Json.__du[R];
if(P){return P;
}P=R.charCodeAt();
return j+Math.floor(P/16).toString(16)+(P%16).toString(16);
},
__dw:function(O){var S=[],
T=true,
U,
V;
var W=qx.util.Json.__beautify;
S.push(F);
if(W){qx.util.Json.__indent+=qx.util.Json.BEAUTIFYING_INDENT;
S.push(qx.util.Json.__indent);
}
for(var X=0,
Y=O.length;X<Y;X++){V=O[X];
U=this.__dp[typeof V];
if(U){V=this[U](V);
if(typeof V==e){if(!T){S.push(c);
if(W){S.push(qx.util.Json.__indent);
}}S.push(V);
T=false;
}}}
if(W){qx.util.Json.__indent=qx.util.Json.__indent.substring(0,
qx.util.Json.__indent.length-qx.util.Json.BEAUTIFYING_INDENT.length);
S.push(qx.util.Json.__indent);
}S.push(D);
return S.join(d);
},
__dx:function(O){var ba=O.getUTCFullYear()+c+O.getUTCMonth()+c+O.getUTCDate()+c+O.getUTCHours()+c+O.getUTCMinutes()+c+O.getUTCSeconds()+c+O.getUTCMilliseconds();
return k+ba+s;
},
__dy:function(O){var S=[],
T=true,
U,
V;
var W=qx.util.Json.__beautify;
S.push(x);
if(W){qx.util.Json.__indent+=qx.util.Json.BEAUTIFYING_INDENT;
S.push(qx.util.Json.__indent);
}
for(var bb in O){V=O[bb];
U=this.__dp[typeof V];
if(U){V=this[U](V);
if(typeof V==e){if(!T){S.push(c);
if(W){S.push(qx.util.Json.__indent);
}}S.push(this.__dt(bb),
A,
V);
T=false;
}}}
if(W){qx.util.Json.__indent=qx.util.Json.__indent.substring(0,
qx.util.Json.__indent.length-qx.util.Json.BEAUTIFYING_INDENT.length);
S.push(qx.util.Json.__indent);
}S.push(u);
return S.join(d);
},
__dz:function(O){if(O){var bc=O.constructor.name;
if(O instanceof Array||bc==N){return this.__dw(O);
}else if(O instanceof Date||bc==M){return this.__dx(O);
}else if(O instanceof Object||bc==z){return this.__dy(O);
}return d;
}return f;
},
__dA:function(O){if(qx.core.Setting.get(G)){return f;
}},
stringify:function(V,
W){this.__beautify=W;
this.__indent=this.BEAUTIFYING_LINE_END;
var P=this[this.__dp[typeof V]](V);
if(typeof P!=e){P=null;
}if(qx.core.Setting.get(h)){qx.log.Logger.debug(this,
"JSON request: "+P);
}return P;
},
parse:function(bd){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bd.replace(/"(\\.|[^"\\])*"/g,
d))){throw new Error("Could not parse JSON string!");
}
try{return eval(C+bd+m);
}catch(ex){throw new Error("Could not evaluate JSON string: "+ex.message);
}},
parseQx:function(bd){if(qx.core.Setting.get(h)){qx.log.Logger.debug(this,
"JSON response: "+bd);
}var V=(bd&&bd.length>0)?eval(v+bd+E):null;
return V;
}},
settings:{"qx.jsonEncodeUndefined":true,
"qx.jsonDebugging":false}});
})();
(function(){var a="application/xml",
b="application/json",
c="text/html",
d="qx.client",
f="textarea",
g="none",
h="text/plain",
j="text/javascript",
k="",
l="completed",
m="?",
n="qx.io.remote.transport.Iframe",
o="&",
p="=",
q="gecko",
r="frame_",
s="aborted",
t="qx/static/image/blank.gif",
u="_form",
v="_frame",
w="_data_",
x="pre",
y="javascript:void(0)",
z="sending",
A="form",
B="failed",
C='<iframe name="',
D="mshtml",
E="form_",
F='"></iframe>',
G="iframe",
H="timeout";
qx.Class.define(n,
{extend:qx.io.remote.transport.Abstract,
construct:function(){arguments.callee.base.call(this);
var I=(new Date).valueOf();
var J=r+I;
var K=E+I;
if(qx.core.Variant.isSet(d,
D)){this._frame=document.createElement(C+J+F);
}else{this._frame=document.createElement(G);
}this._frame.src=y;
this._frame.id=this._frame.name=J;
this._frame.onload=qx.lang.Function.bind(this._onload,
this);
this._frame.style.display=g;
document.body.appendChild(this._frame);
this._form=document.createElement(A);
this._form.target=J;
this._form.id=this._form.name=K;
this._form.style.display=g;
document.body.appendChild(this._form);
this._data=document.createElement(f);
this._data.id=this._data.name=w;
this._form.appendChild(this._data);
this._frame.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
},
statics:{handles:{synchronous:false,
asynchronous:true,
crossDomain:false,
fileUpload:true,
programaticFormFields:true,
responseTypes:[h,
j,
b,
a,
c]},
isSupported:function(){return true;
},
_numericMap:{"uninitialized":1,
"loading":2,
"loaded":2,
"interactive":3,
"complete":4}},
members:{_lastReadyState:0,
send:function(){var L=this.getMethod();
var M=this.getUrl();
var N=this.getParameters();
var O=[];
for(var P in N){var Q=N[P];
if(Q instanceof Array){for(var R=0;R<Q.length;R++){O.push(encodeURIComponent(P)+p+encodeURIComponent(Q[R]));
}}else{O.push(encodeURIComponent(P)+p+encodeURIComponent(Q));
}}
if(O.length>0){M+=(M.indexOf(m)>=0?o:m)+O.join(o);
}var S=this.getFormFields();
for(var P in S){var T=document.createElement(f);
T.name=P;
T.appendChild(document.createTextNode(S[P]));
this._form.appendChild(T);
}this._form.action=M;
this._form.method=L;
this._data.appendChild(document.createTextNode(this.getData()));
this._form.submit();
this.setState(z);
},
_onload:function(U){if(this._form.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
},
_onreadystatechange:function(U){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this._frame.readyState]);
},
_switchReadyState:function(V){switch(this.getState()){case l:case s:case B:case H:this.warn("Ignore Ready State Change");
return;
}while(this._lastReadyState<V){this.setState(qx.io.remote.Exchange._nativeMap[++this._lastReadyState]);
}},
setRequestHeader:function(W,
X){},
getResponseHeader:function(W){return null;
},
getResponseHeaders:function(){return {};
},
getStatusCode:function(){return 200;
},
getStatusText:function(){return k;
},
getIframeWindow:function(){return qx.bom.Iframe.getWindow(this._frame);
},
getIframeDocument:function(){return qx.bom.Iframe.getDocument(this._frame);
},
getIframeBody:function(){return qx.bom.Iframe.getBody(this._frame);
},
getIframeTextContent:function(){var Y=this.getIframeBody();
if(!Y){return null;
}
if(!Y.firstChild){return k;
}if(Y.firstChild.tagName&&Y.firstChild.tagName.toLowerCase()==x){return Y.firstChild.innerHTML;
}else{return Y.innerHTML;
}},
getIframeHtmlContent:function(){var Y=this.getIframeBody();
return Y?Y.innerHTML:null;
},
getFetchedLength:function(){return 0;
},
getResponseContent:function(){if(this.getState()!==l){{};
return null;
}{};
var ba=this.getIframeTextContent();
switch(this.getResponseType()){case h:{};
return ba;
break;
case c:ba=this.getIframeHtmlContent();
{};
return ba;
break;
case b:ba=this.getIframeHtmlContent();
{};
try{return ba&&ba.length>0?qx.util.Json.parseQx(ba):null;
}catch(ex){return this.error("Could not execute json: ("+ba+")",
ex);
}case j:ba=this.getIframeHtmlContent();
{};
try{return ba&&ba.length>0?window.eval(ba):null;
}catch(ex){return this.error("Could not execute javascript: ("+ba+")",
ex);
}case a:ba=this.getIframeDocument();
{};
return ba;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},
defer:function(bb,
bc,
bd){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,
n);
},
destruct:function(){if(this._frame){this._frame.onload=null;
this._frame.onreadystatechange=null;
if(qx.core.Variant.isSet(d,
q)){this._frame.src=qx.util.ResourceManager.toUri(t);
}document.body.removeChild(this._frame);
}
if(this._form){document.body.removeChild(this._form);
}this._disposeFields(v,
u);
}});
})();
(function(){var a="qx.event.handler.Iframe",
b="load",
c="iframe";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{load:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:false,
onevent:function(d){qx.event.Registration.fireEvent(d,
b);
}},
members:{canHandleEvent:function(d,
e){return d.tagName.toLowerCase()===c;
},
registerEvent:function(d,
e,
f){},
unregisterEvent:function(d,
e,
f){}},
defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var a="0",
b="qx.client",
c="qx.bom.Iframe",
d="qx.event.handler.Iframe.onevent(this)",
e="true",
f="iframe",
g="body";
qx.Class.define(c,
{statics:{create:function(h,
i){var h=h?qx.lang.Object.copy(h):{};
h.onload=d;
h.frameBorder=a;
h.frameSpacing=a;
h.marginWidth=a;
h.marginHeight=a;
h.hspace=a;
h.vspace=a;
h.border=a;
h.allowTransparency=e;
return qx.bom.Element.create(f,
h,
i);
},
getWindow:qx.core.Variant.select(b,
{"mshtml|gecko":function(j){try{return j.contentWindow;
}catch(ex){return null;
}},
"default":function(j){try{var k=this.getDocument(j);
return k?k.defaultView:null;
}catch(ex){return null;
}}}),
getDocument:qx.core.Variant.select(b,
{"mshtml":function(j){try{var i=this.getWindow(j);
return i?i.document:null;
}catch(ex){return null;
}},
"default":function(j){try{return j.contentDocument;
}catch(ex){return null;
}}}),
getBody:function(j){var k=this.getDocument(j);
return k?k.getElementsByTagName(g)[0]:null;
},
setSource:function(j,
l){try{if(this.getWindow(j)){try{this.getWindow(j).location.replace(l);
}catch(ex){j.src=l;
}}else{j.src=l;
}}catch(ex){qx.log.Logger.warn("Iframe source could not be set! This may be related to AdBlock Plus Firefox Extension.");
}},
queryCurrentUrl:function(j){var k=this.getDocument(j);
try{if(k&&k.location){return k.location.href;
}}catch(ex){}return null;
}}});
})();
(function(){var a="&",
b="=",
c="?",
d="application/json",
e="completed",
f="text/plain",
g="text/javascript",
h="qx.io.remote.transport.Script",
j="",
k="_ScriptTransport_data",
l="script",
m="timeout",
n="_ScriptTransport_",
o="_element",
p="_ScriptTransport_id",
q="aborted",
r="utf-8",
s="failed";
qx.Class.define(h,
{extend:qx.io.remote.transport.Abstract,
construct:function(){arguments.callee.base.call(this);
var t=++qx.io.remote.transport.Script._uniqueId;
if(t>=2000000000){qx.io.remote.transport.Script._uniqueId=t=1;
}this._element=null;
this._uniqueId=t;
},
statics:{_uniqueId:0,
_instanceRegistry:{},
ScriptTransport_PREFIX:n,
ScriptTransport_ID_PARAM:p,
ScriptTransport_DATA_PARAM:k,
handles:{synchronous:false,
asynchronous:true,
crossDomain:true,
fileUpload:false,
programaticFormFields:false,
responseTypes:[f,
g,
d]},
isSupported:function(){return true;
},
_numericMap:{"uninitialized":1,
"loading":2,
"loaded":2,
"interactive":3,
"complete":4},
_requestFinished:function(u,
v){var w=qx.io.remote.transport.Script._instanceRegistry[u];
if(w==null){{};
}else{w._responseContent=v;
w._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}}},
members:{_lastReadyState:0,
send:function(){var x=this.getUrl();
x+=(x.indexOf(c)>=0?a:c)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+b+this._uniqueId;
var y=this.getParameters();
var z=[];
for(var A in y){if(A.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var B=y[A];
if(B instanceof Array){for(var C=0;C<B.length;C++){z.push(encodeURIComponent(A)+b+encodeURIComponent(B[C]));
}}else{z.push(encodeURIComponent(A)+b+encodeURIComponent(B));
}}
if(z.length>0){x+=a+z.join(a);
}var D=this.getData();
if(D!=null){x+=a+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+b+encodeURIComponent(D);
}qx.io.remote.transport.Script._instanceRegistry[this._uniqueId]=this;
this._element=document.createElement(l);
this._element.charset=r;
this._element.src=x;
{};
document.body.appendChild(this._element);
},
_switchReadyState:function(E){switch(this.getState()){case e:case q:case s:case m:this.warn("Ignore Ready State Change");
return;
}while(this._lastReadyState<E){this.setState(qx.io.remote.Exchange._nativeMap[++this._lastReadyState]);
}},
setRequestHeader:function(F,
G){},
getResponseHeader:function(F){return null;
},
getResponseHeaders:function(){return {};
},
getStatusCode:function(){return 200;
},
getStatusText:function(){return j;
},
getFetchedLength:function(){return 0;
},
getResponseContent:function(){if(this.getState()!==e){{};
return null;
}{};
switch(this.getResponseType()){case f:case d:case g:{};
return this._responseContent||null;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},
defer:function(H,
I,
J){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,
h);
qx.io.remote.ScriptTransport=H;
},
destruct:function(){if(this._element){delete qx.io.remote.transport.Script._instanceRegistry[this._uniqueId];
document.body.removeChild(this._element);
}this._disposeFields(o);
}});
})();
(function(){var a="Integer",
b="Object",
c="qx.io.remote.Response";
qx.Class.define(c,
{extend:qx.event.type.Event,
properties:{state:{check:a,
nullable:true},
statusCode:{check:a,
nullable:true},
content:{nullable:true},
responseHeaders:{check:b,
nullable:true}},
members:{clone:function(d){var e=arguments.callee.base.call(this,
d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},
getResponseHeader:function(f){var g=this.getResponseHeaders();
if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var a="qx.event.type.DataEvent",
b="qx.ui.table.ITableModel";
qx.Interface.define(b,
{events:{"dataChanged":a,
"metaDataChanged":a},
statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",
EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},
members:{getRowCount:function(){return true;
},
getRowData:function(c){return true;
},
getColumnCount:function(){return true;
},
getColumnId:function(d){return true;
},
getColumnIndexById:function(e){return true;
},
getColumnName:function(d){return true;
},
isColumnEditable:function(d){return true;
},
isColumnSortable:function(d){return true;
},
sortByColumn:function(d,
f){return true;
},
getSortColumnIndex:function(){return true;
},
isSortAscending:function(){return true;
},
prefetchRows:function(g,
h){return true;
},
getValue:function(d,
c){return true;
},
getValueById:function(e,
c){return true;
},
setValue:function(d,
c,
i){return true;
},
setValueById:function(e,
c,
i){return true;
}}});
})();
(function(){var a="qx.event.type.DataEvent",
b="_columnIdArr",
c="abstract",
d="qx.ui.table.model.Abstract",
e="_columnNameArr",
f="_columnIndexMap";
qx.Class.define(d,
{type:c,
extend:qx.core.Object,
implement:qx.ui.table.ITableModel,
events:{"dataChanged":a,
"metaDataChanged":a},
construct:function(){arguments.callee.base.call(this);
this._columnIdArr=[];
this._columnNameArr=[];
this._columnIndexMap={};
},
members:{getRowCount:function(){throw new Error("getRowCount is abstract");
},
getRowData:function(g){return null;
},
isColumnEditable:function(h){return false;
},
isColumnSortable:function(h){return false;
},
sortByColumn:function(h,
j){},
getSortColumnIndex:function(){return -1;
},
isSortAscending:function(){return true;
},
prefetchRows:function(k,
l){},
getValue:function(h,
g){throw new Error("getValue is abstract");
},
getValueById:function(m,
g){return this.getValue(this.getColumnIndexById(m),
g);
},
setValue:function(h,
g,
n){throw new Error("setValue is abstract");
},
setValueById:function(m,
g,
n){return this.setValue(this.getColumnIndexById(m),
g,
n);
},
getColumnCount:function(){return this._columnIdArr.length;
},
getColumnIndexById:function(m){return this._columnIndexMap[m];
},
getColumnId:function(h){return this._columnIdArr[h];
},
getColumnName:function(h){return this._columnNameArr[h];
},
setColumnIds:function(o){this._columnIdArr=o;
this._columnIndexMap={};
for(var p=0;p<o.length;p++){this._columnIndexMap[o[p]]=p;
}this._columnNameArr=new Array(o.length);
if(!this._internalChange){this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},
setColumnNamesByIndex:function(q){if(this._columnIdArr.length!=q.length){throw new Error("this._columnIdArr and columnNameArr have different length: "+this._columnIdArr.length+" != "+q.length);
}this._columnNameArr=q;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},
setColumnNamesById:function(r){this._columnNameArr=new Array(this._columnIdArr.length);
for(var p=0;p<this._columnIdArr.length;++p){this._columnNameArr[p]=r[this._columnIdArr[p]];
}},
setColumns:function(q,
o){if(o==null){o=q;
}
if(o.length!=q.length){throw new Error("columnIdArr and columnNameArr have different length: "+o.length+" != "+q.length);
}this._internalChange=true;
this.setColumnIds(o);
this._internalChange=false;
this.setColumnNamesByIndex(q);
}},
destruct:function(){this._disposeFields(b,
e,
f);
}});
})();
(function(){var a="qx.ui.table.model.Simple",
b="_editableColArr",
c="_sortMethods",
d="Boolean",
e="_rowArr";
qx.Class.define(a,
{extend:qx.ui.table.model.Abstract,
construct:function(){arguments.callee.base.call(this);
this._rowArr=[];
this._sortColumnIndex=-1;
this._sortAscending;
this._sortMethods=[];
this._editableColArr=null;
},
properties:{caseSensitiveSorting:{check:d,
init:true}},
statics:{_defaultSortComparatorAscending:function(f,
g){var h=f[arguments.callee.columnIndex];
var k=g[arguments.callee.columnIndex];
return (h>k)?1:((h==k)?0:-1);
},
_defaultSortComparatorInsensitiveAscending:function(f,
g){var h=(isNaN(f[arguments.callee.columnIndex])?f[arguments.callee.columnIndex].toLowerCase():f[arguments.callee.columnIndex]);
var k=(isNaN(g[arguments.callee.columnIndex])?g[arguments.callee.columnIndex].toLowerCase():g[arguments.callee.columnIndex]);
return (h>k)?1:((h==k)?0:-1);
},
_defaultSortComparatorDescending:function(f,
g){var h=f[arguments.callee.columnIndex];
var k=g[arguments.callee.columnIndex];
return (h<k)?1:((h==k)?0:-1);
},
_defaultSortComparatorInsensitiveDescending:function(f,
g){var h=(isNaN(f[arguments.callee.columnIndex])?f[arguments.callee.columnIndex].toLowerCase():f[arguments.callee.columnIndex]);
var k=(isNaN(g[arguments.callee.columnIndex])?g[arguments.callee.columnIndex].toLowerCase():g[arguments.callee.columnIndex]);
return (h<k)?1:((h==k)?0:-1);
}},
members:{getRowData:function(l){var m=this._rowArr[l];
if(m==null||m.originalData==null){return m;
}else{return m.originalData;
}},
getRowDataAsMap:function(l){var n=this._rowArr[l];
var o={};
for(var p=0;p<this.getColumnCount();p++){o[this.getColumnId(p)]=n[p];
}return o;
},
setEditable:function(q){this._editableColArr=[];
for(var p=0;p<this.getColumnCount();p++){this._editableColArr[p]=q;
}this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},
setColumnEditable:function(r,
q){if(q!=this.isColumnEditable(r)){if(this._editableColArr==null){this._editableColArr=[];
}this._editableColArr[r]=q;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},
isColumnEditable:function(r){return this._editableColArr?(this._editableColArr[r]==true):false;
},
setColumnSortable:function(r,
s){if(s!=this.isColumnSortable(r)){if(this._sortableColArr==null){this._sortableColArr=[];
}this._sortableColArr[r]=s;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},
isColumnSortable:function(r){return this._sortableColArr?(this._sortableColArr[r]==true):true;
},
sortByColumn:function(r,
t){var u;
var v=this._sortMethods[r];
if(v){u=(t?v.ascending:v.descending);
}else{if(this.getCaseSensitiveSorting()){u=(t?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{u=(t?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}u.columnIndex=r;
this._rowArr.sort(u);
this._sortColumnIndex=r;
this._sortAscending=t;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
},
setSortMethods:function(r,
w){this._sortMethods[r]=w;
},
_clearSorting:function(){if(this._sortColumnIndex!=-1){this._sortColumnIndex=-1;
this._sortAscending=true;
this.fireEvent(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED);
}},
getSortColumnIndex:function(){return this._sortColumnIndex;
},
isSortAscending:function(){return this._sortAscending;
},
getRowCount:function(){return this._rowArr.length;
},
getValue:function(r,
l){if(l<0||l>=this._rowArr.length){throw new Error("this._rowArr out of bounds: "+l+" (0.."+this._rowArr.length+")");
}return this._rowArr[l][r];
},
setValue:function(r,
l,
x){if(this._rowArr[l][r]!=x){this._rowArr[l][r]=x;
if(this.hasListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED)){var y={firstRow:l,
lastRow:l,
firstColumn:r,
lastColumn:r};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,
y);
}
if(r==this._sortColumnIndex){this._clearSorting();
}}},
setData:function(z,
A){this._rowArr=z;
var y={firstRow:0,
lastRow:z.length-1,
firstColumn:0,
lastColumn:this.getColumnCount()-1};
if(this.hasListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED)){this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,
y);
}
if(A){this._clearSorting();
}},
getData:function(){return this._rowArr;
},
setDataAsMapArray:function(B,
C,
A){this.setData(this._mapArray2RowArr(B,
C),
A);
},
addRows:function(z,
D){if(D==null){D=this._rowArr.length;
}z.splice(0,
0,
D,
0);
Array.prototype.splice.apply(this._rowArr,
z);
var y={firstRow:D,
lastRow:this._rowArr.length-1,
firstColumn:0,
lastColumn:this.getColumnCount()-1};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,
y);
this._clearSorting();
},
addRowsAsMapArray:function(B,
D,
C){this.addRows(this._mapArray2RowArr(B,
C),
D);
},
removeRows:function(D,
E){this._rowArr.splice(D,
E);
var y={firstRow:D,
lastRow:this._rowArr.length-1,
firstColumn:0,
lastColumn:this.getColumnCount()-1};
this.fireDataEvent(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,
y);
this._clearSorting();
},
_mapArray2RowArr:function(B,
C){var F=B.length;
var G=this.getColumnCount();
var H=new Array(F);
var n;
for(var I=0;I<F;++I){n=[];
if(C){n.originalData=B[I];
}
for(var J=0;J<G;++J){n[J]=B[I][this.getColumnId(J)];
}H[I]=n;
}return H;
}},
destruct:function(){this._disposeFields(e,
b,
c);
}});
})();
(function(){var a="Function",
b="Boolean",
c="qx.event.type.DataEvent",
d="qx.ui.table.pane.CellEvent",
e="PageUp",
f="column-button",
g="excluded",
h="changeLocale",
j="changeSelection",
k="visible",
m="Enter",
n="statusbar",
o="_applyTableColumnModel",
p="_applyStatusBarVisible",
q="blur",
r="qx.ui.table.Table",
s="columnVisibilityMenuCreateEnd",
t="verticalScrollBarChanged",
u="_applyMetaColumnCounts",
v="one of one row",
w="_selectionManager",
y="focus",
z="changeDataRowRenderer",
A="changeHeaderCellHeight",
B="Escape",
C="changeSelectionModel",
D="keydown",
E="Left",
F="_tableModel",
G="Down",
H="Integer",
I="_applyHeaderCellHeight",
J="Object",
K="visibilityChanged",
L="qx.ui.table.ITableModel",
M="orderChanged",
N="_applySelectionModel",
O="_columnVisibilityMenu",
P="_applyAdditionalStatusBarText",
Q="_applyFocusCellOnMouseMove",
R="table",
S="_applyColumnVisibilityButtonVisible",
T="changeTableModel",
U="qx.event.type.Event",
V="End",
W="_applyShowCellFocusIndicator",
X="resize",
Y="changeScrollY",
ba="_applyTableModel",
bb="_columnVisibilityBt",
bc="_applyKeepFirstVisibleRowComplete",
bd="qx.ui.table.columnmodel.Basic",
be="_statusBar",
bf="Home",
bg="_applyRowHeight",
bh="F2",
bi="Up",
bj="tableWidthChanged",
bk="columnVisibilityMenuCreateStart",
bl="%1 rows",
bm="qx.ui.table.selection.Model",
bn="one row",
bo="PageDown",
bp="%1 of %2 rows",
bq="changeTableColumnModel",
br="keypress",
bs="changeRowHeight",
bt="Number",
bu="widthChanged",
bv="changeChecked",
bw="qx.ui.table.IRowRenderer",
bx="A",
by="_scrollerParent",
bz="Right",
bA="Space";
qx.Class.define(r,
{extend:qx.ui.core.Widget,
construct:function(bB,
bC){arguments.callee.base.call(this);
if(!bC){bC={};
}
if(bC.selectionManager){this.setNewSelectionManager(bC.selectionManager);
}
if(bC.selectionModel){this.setNewSelectionModel(bC.selectionModel);
}
if(bC.tableColumnModel){this.setNewTableColumnModel(bC.tableColumnModel);
}
if(bC.tablePane){this.setNewTablePane(bC.tablePane);
}
if(bC.tablePaneHeader){this.setNewTablePaneHeader(bC.tablePaneHeader);
}
if(bC.tablePaneScroller){this.setNewTablePaneScroller(bC.tablePaneScroller);
}
if(bC.tablePaneModel){this.setNewTablePaneModel(bC.tablePaneModel);
}this._setLayout(new qx.ui.layout.VBox());
this._scrollerParent=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._statusBar=this._getChildControl(n);
this._add(this._scrollerParent,
{flex:1});
this._add(this._statusBar);
this._columnVisibilityBt=this._getChildControl(f);
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this._selectionManager=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableColumnModel(this.getNewTableColumnModel()(this));
if(bB!=null){this.setTableModel(bB);
}this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(D,
this._onkeydown);
this.addListener(br,
this._onkeypress);
this.addListener(y,
this._onFocusChanged);
this.addListener(q,
this._onFocusChanged);
var bD=new qx.ui.core.Widget().set({height:0});
this._add(bD);
bD.addListener(X,
this._onResize,
this);
this._focusedCol=null;
this._focusedRow=null;
qx.locale.Manager.getInstance().addListener(h,
this._onChangeLocale,
this);
},
events:{"columnVisibilityMenuCreateStart":c,
"columnVisibilityMenuCreateEnd":c,
"tableWidthChanged":U,
"verticalScrollBarChanged":c,
"cellClick":d,
"cellDblclick":d,
"cellContextmenu":d},
statics:{__dB:{cellClick:1,
cellDblclick:1,
cellContextmenu:1}},
properties:{appearance:{refine:true,
init:R},
focusable:{refine:true,
init:true},
selectionModel:{check:bm,
apply:N,
event:C},
tableModel:{check:L,
apply:ba,
event:T,
nullable:true},
tableColumnModel:{check:bd,
apply:o,
event:bq},
rowHeight:{check:bt,
init:20,
apply:bg,
event:bs},
forceLineHeight:{check:b,
init:true},
headerCellHeight:{check:H,
init:16,
apply:I,
event:A},
statusBarVisible:{check:b,
init:true,
apply:p},
additionalStatusBarText:{nullable:true,
init:null,
apply:P},
columnVisibilityButtonVisible:{check:b,
init:true,
apply:S},
metaColumnCounts:{check:J,
apply:u},
focusCellOnMouseMove:{check:b,
init:false,
apply:Q},
showCellFocusIndicator:{check:b,
init:true,
apply:W},
keepFirstVisibleRowComplete:{check:b,
init:true,
apply:bc},
alwaysUpdateCells:{check:b,
init:false},
dataRowRenderer:{check:bw,
init:null,
nullable:true,
event:z},
modalCellEditorPreOpenFunction:{check:a,
init:null,
nullable:true},
newSelectionManager:{check:a,
init:function(bE){return new qx.ui.table.selection.Manager(bE);
}},
newSelectionModel:{check:a,
init:function(bE){return new qx.ui.table.selection.Model(bE);
}},
newTableColumnModel:{check:a,
init:function(bE){return new qx.ui.table.columnmodel.Basic(bE);
}},
newTablePane:{check:a,
init:function(bE){return new qx.ui.table.pane.Pane(bE);
}},
newTablePaneHeader:{check:a,
init:function(bE){return new qx.ui.table.pane.Header(bE);
}},
newTablePaneScroller:{check:a,
init:function(bE){return new qx.ui.table.pane.Scroller(bE);
}},
newTablePaneModel:{check:a,
init:function(bF){return new qx.ui.table.pane.Model(bF);
}}},
members:{_createChildControlImpl:function(bG){var bH;
switch(bG){case n:bH=new qx.ui.basic.Label().set({allowGrowX:true});
break;
case f:bH=new qx.ui.form.MenuButton().set({focusable:false});
break;
}return bH||arguments.callee.base.call(this,
bG);
},
_applySelectionModel:function(bI,
bJ){this._selectionManager.setSelectionModel(bI);
if(bJ!=null){bJ.removeListener(j,
this._onSelectionChanged,
this);
}bI.addListener(j,
this._onSelectionChanged,
this);
},
_applyRowHeight:function(bI,
bJ){if(!this.getTableModel()){return;
}var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL].updateVerScrollBarMaximum();
}},
_applyHeaderCellHeight:function(bI,
bJ){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL].getHeader().setHeight(bI);
}},
_applyTableModel:function(bI,
bJ){this.getTableColumnModel().init(bI.getColumnCount(),
this);
if(bJ!=null){bJ.removeListener(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED,
this._onTableModelMetaDataChanged,
this);
bJ.removeListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,
this._onTableModelDataChanged,
this);
}bI.addListener(qx.ui.table.ITableModel.EVENT_TYPE_META_DATA_CHANGED,
this._onTableModelMetaDataChanged,
this);
bI.addListener(qx.ui.table.ITableModel.EVENT_TYPE_DATA_CHANGED,
this._onTableModelDataChanged,
this);
this._updateStatusBar();
this._initColumnMenu();
},
_applyTableColumnModel:function(bI,
bJ){if(bJ!=null){throw new Error("The table column model can only be set once per table.");
}bI.addListener(K,
this._onColVisibilityChanged,
this);
bI.addListener(bu,
this._onColWidthChanged,
this);
bI.addListener(M,
this._onColOrderChanged,
this);
var bM=this.getTableModel();
if(bM){bI.init(bM.getColumnCount(),
this);
}var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){var bN=bK[bL];
var bO=bN.getTablePaneModel();
bO.setTableColumnModel(bI);
}},
_applyStatusBarVisible:function(bI,
bJ){this._statusBar.setVisibility(bI?k:g);
if(bI){this._updateStatusBar();
}},
_applyAdditionalStatusBarText:function(bI,
bJ){this._additionalStatusBarText=bI;
if(bI){this._updateStatusBar();
}},
_applyColumnVisibilityButtonVisible:function(bI,
bJ){this._columnVisibilityBt.setVisibility(bI?k:g);
},
_applyMetaColumnCounts:function(bI,
bJ){var bP=bI;
var bK=this._getPaneScrollerArr();
this._cleanUpMetaColumns(bP.length);
var bQ=0;
for(var bL=0;bL<bK.length;bL++){var bN=bK[bL];
var bO=bN.getTablePaneModel();
bO.setFirstColumnX(bQ);
bO.setMaxColumnCount(bP[bL]);
bQ+=bP[bL];
}if(bP.length>bK.length){var bF=this.getTableColumnModel();
for(var bL=bK.length;bL<bP.length;bL++){var bO=this.getNewTablePaneModel()(bF);
bO.setFirstColumnX(bQ);
bO.setMaxColumnCount(bP[bL]);
bQ+=bP[bL];
var bN=this.getNewTablePaneScroller()(this);
bN.setTablePaneModel(bO);
bN.addListener(Y,
this._onScrollY,
this);
this._scrollerParent.add(bN);
}}for(var bL=0;bL<bK.length;bL++){var bN=bK[bL];
var bR=(bL==(bK.length-1));
bN.getHeader().setHeight(this.getHeaderCellHeight());
bN.setTopRightWidget(bR?this._columnVisibilityBt:null);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},
_applyFocusCellOnMouseMove:function(bI,
bJ){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL].setFocusCellOnMouseMove(bI);
}},
_applyShowCellFocusIndicator:function(bI,
bJ){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL].setShowCellFocusIndicator(bI);
}},
_applyKeepFirstVisibleRowComplete:function(bI,
bJ){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL].onKeepFirstVisibleRowCompleteChanged();
}},
getSelectionManager:function(){return this._selectionManager;
},
_getPaneScrollerArr:function(){return this._scrollerParent.getChildren();
},
getPaneScroller:function(bS){return this._getPaneScrollerArr()[bS];
},
_cleanUpMetaColumns:function(bT){var bK=this._getPaneScrollerArr();
if(bK!=null){for(var bL=bK.length-1;bL>=bT;bL--){bK[bL].dispose();
}}},
_onChangeLocale:function(bU){this.updateContent();
this._updateStatusBar();
},
_onSelectionChanged:function(bU){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL].onSelectionChanged();
}this._updateStatusBar();
},
_onTableModelMetaDataChanged:function(bU){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL].onTableModelMetaDataChanged();
}this._updateStatusBar();
},
_onTableModelDataChanged:function(bU){var bK=this._getPaneScrollerArr();
var bV=bU.getData();
for(var bL=0;bL<bK.length;bL++){bK[bL].onTableModelDataChanged(bV.firstRow,
bV.lastRow,
bV.firstColumn,
bV.lastColumn);
}var bW=this.getTableModel().getRowCount();
if(bW!=this._lastRowCount){this._lastRowCount=bW;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},
_onScrollY:function(bU){if(!this._internalChange){this._internalChange=true;
var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL].setScrollY(bU.getData());
}this._internalChange=false;
}},
_onkeydown:function(bU){if(!this.getEnabled()){return;
}var bX=bU.getKeyIdentifier();
var bY=false;
var ca=this._focusedRow;
if(this.isEditing()){if(bU.getModifiers()==0){bY=true;
switch(bX){case m:this.stopEditing();
var ca=this._focusedRow;
this.moveFocusedCell(0,
1);
if(this._focusedRow!=ca){bY=this.startEditing();
}break;
case B:this.cancelEditing();
this.focus();
break;
default:bY=false;
break;
}}}else{bY=true;
switch(bX){case bf:this.setFocusedCell(this._focusedCol,
0,
true);
break;
case V:var bW=this.getTableModel().getRowCount();
this.setFocusedCell(this._focusedCol,
bW-1,
true);
break;
default:bY=false;
break;
}if(bU.getModifiers()==0){bY=true;
switch(bX){case bh:case m:bY=this.startEditing();
break;
default:bY=false;
break;
}}else if(bU.isCtrlPressed()){bY=true;
switch(bX){case bx:var bW=this.getTableModel().getRowCount();
if(bW>0){this.getSelectionModel().setSelectionInterval(0,
bW-1);
}break;
default:bY=false;
break;
}}}
if(ca!=this._focusedRow){this._selectionManager.handleMoveKeyDown(this._focusedRow,
bU);
}
if(bY){bU.preventDefault();
bU.stopPropagation();
}},
_onkeypress:function(bU){if(!this.getEnabled()){return;
}
if(this.isEditing()){return;
}var ca=this._focusedRow;
var bY=true;
var bX=bU.getKeyIdentifier();
switch(bX){case bA:this._selectionManager.handleSelectKeyDown(this._focusedRow,
bU);
break;
case E:this.moveFocusedCell(-1,
0);
break;
case bz:this.moveFocusedCell(1,
0);
break;
case bi:this.moveFocusedCell(0,
-1);
break;
case G:this.moveFocusedCell(0,
1);
break;
case e:case bo:var cb=this.getPaneScroller(0);
var cc=cb.getTablePane();
var bW=cc.getVisibleRowCount()-1;
var cd=this.getRowHeight();
var ce=(bX==e)?-1:1;
cb.setScrollY(cb.getScrollY()+ce*bW*cd);
this.moveFocusedCell(0,
ce*bW);
break;
default:bY=false;
}
if(ca!=this._focusedRow){this._selectionManager.handleMoveKeyDown(this._focusedRow,
bU);
}
if(bY){bU.preventDefault();
bU.stopPropagation();
}},
_onFocusChanged:function(bU){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL].onFocusChanged();
}},
_onColVisibilityChanged:function(bU){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL].onColVisibilityChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},
_onColWidthChanged:function(bU){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){var bV=bU.getData();
bK[bL].setColumnWidth(bV.col,
bV.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},
_onColOrderChanged:function(bU){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},
getTablePaneScrollerAtPageX:function(cf){var cg=this._getMetaColumnAtPageX(cf);
return (cg!=-1)?this.getPaneScroller(cg):null;
},
setFocusedCell:function(ch,
ci,
cj){if(!this.isEditing()&&(ch!=this._focusedCol||ci!=this._focusedRow)){this._focusedCol=ch;
this._focusedRow=ci;
var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL].setFocusedCell(ch,
ci);
}
if(cj){this.scrollCellVisible(ch,
ci);
}}},
getFocusedColumn:function(){return this._focusedCol;
},
getFocusedRow:function(){return this._focusedRow;
},
moveFocusedCell:function(ck,
cl){var ch=this._focusedCol;
var ci=this._focusedRow;
if(ch===null||ci===null){return;
}
if(ck!=0){var bF=this.getTableColumnModel();
var cm=bF.getVisibleX(ch);
var cn=bF.getVisibleColumnCount();
cm=qx.lang.Number.limit(cm+ck,
0,
cn-1);
ch=bF.getVisibleColumnAtX(cm);
}
if(cl!=0){var bB=this.getTableModel();
ci=qx.lang.Number.limit(ci+cl,
0,
bB.getRowCount()-1);
}this.setFocusedCell(ch,
ci,
true);
},
scrollCellVisible:function(ch,
ci){var bF=this.getTableColumnModel();
var cm=bF.getVisibleX(ch);
var bS=this._getMetaColumnAtColumnX(cm);
if(bS!=-1){this.getPaneScroller(bS).scrollCellVisible(ch,
ci);
}},
isEditing:function(){if(this._focusedCol!=null){var cm=this.getTableColumnModel().getVisibleX(this._focusedCol);
var bS=this._getMetaColumnAtColumnX(cm);
return this.getPaneScroller(bS).isEditing();
}return false;
},
startEditing:function(){if(this._focusedCol!=null){var cm=this.getTableColumnModel().getVisibleX(this._focusedCol);
var bS=this._getMetaColumnAtColumnX(cm);
return this.getPaneScroller(bS).startEditing();
}return false;
},
stopEditing:function(){if(this._focusedCol!=null){var cm=this.getTableColumnModel().getVisibleX(this._focusedCol);
var bS=this._getMetaColumnAtColumnX(cm);
this.getPaneScroller(bS).stopEditing();
}},
cancelEditing:function(){if(this._focusedCol!=null){var cm=this.getTableColumnModel().getVisibleX(this._focusedCol);
var bS=this._getMetaColumnAtColumnX(cm);
this.getPaneScroller(bS).cancelEditing();
}},
updateContent:function(){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){bK[bL]._tablePane._updateContent();
}},
_getMetaColumnAtPageX:function(cf){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){var co=bK[bL].getContainerLocation();
if(cf>=co.left&&cf<=co.right){return bL;
}}return -1;
},
_getMetaColumnAtColumnX:function(cp){var bP=this.getMetaColumnCounts();
var cq=0;
for(var bL=0;bL<bP.length;bL++){var cr=bP[bL];
cq+=cr;
if(cr==-1||cp<cq){return bL;
}}return -1;
},
_updateStatusBar:function(){if(this.getStatusBarVisible()){var cs=this.getSelectionModel().getSelectedCount();
var bW=this.getTableModel().getRowCount();
var ct;
if(bW>0){if(cs==0){ct=this.trn(bn,
bl,
bW,
bW);
}else{ct=this.trn(v,
bp,
bW,
cs,
bW);
}}
if(this._additionalStatusBarText){if(ct){ct+=this._additionalStatusBarText;
}else{ct=this._additionalStatusBarText;
}}
if(ct){this._statusBar.setContent(ct);
}}},
_updateScrollerWidths:function(){var bK=this._getPaneScrollerArr();
for(var bL=0;bL<bK.length;bL++){var bR=(bL==(bK.length-1));
var cu=bK[bL].getTablePaneModel().getTotalWidth();
bK[bL].setWidth(cu);
var cv=bR?1:0;
bK[bL].setLayoutProperties({flex:cv});
}},
_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var cw=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var cx=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var bK=this._getPaneScrollerArr();
var cy=false;
var cz=false;
for(var bL=0;bL<bK.length;bL++){var bR=(bL==(bK.length-1));
var cA=bK[bL].getNeededScrollBars(cy,
!bR);
if(cA&cw){cy=true;
}
if(bR&&(cA&cx)){cz=true;
}}for(var bL=0;bL<bK.length;bL++){var bR=(bL==(bK.length-1));
var cB;
bK[bL].setHorizontalScrollBarVisible(cy);
if(bR){cB=bK[bL].getVerticalScrollBarVisible();
}bK[bL].setVerticalScrollBarVisible(bR&&cz);
if(bR&&cz!=cB){this.fireDataEvent(t,
cz);
}}},
_initColumnMenu:function(){var bB=this.getTableModel();
var bF=this.getTableColumnModel();
var cC=this._columnVisibilityBt.getMenu();
if(cC){var cD=cC.getChildren();
for(var bL=0,
cE=cD.length;bL<cE;bL++){cD[bL].destroy();
}}else{var cC=new qx.ui.menu.Menu();
this._columnVisibilityBt.setMenu(cC);
}var bV={table:this,
menu:cC};
this.fireDataEvent(bk,
bV);
for(var ch=0,
cE=bB.getColumnCount();ch<cE;ch++){var cF=new qx.ui.menu.CheckBox(bB.getColumnName(ch));
cF.setChecked(bF.isColumnVisible(ch));
cF.addListener(bv,
this._createColumnVisibilityCheckBoxHandler(ch),
this);
cC.add(cF);
}var bV={table:this,
menu:cC};
this.fireDataEvent(s,
bV);
},
_createColumnVisibilityCheckBoxHandler:function(ch){return function(bU){var bF=this.getTableColumnModel();
bF.setColumnVisible(ch,
bU.getData());
};
},
setColumnWidth:function(ch,
cu){this.getTableColumnModel().setColumnWidth(ch,
cu);
},
_onResize:function(){this.fireEvent(bj);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},
addListener:function(cG,
cH,
cI,
cJ){if(arguments.callee.self.__dB[cG]){for(var bL=0,
cK=this._getPaneScrollerArr();bL<cK.length;bL++){cK[bL].addListener.apply(cK[bL],
arguments);
}}else{arguments.callee.base.call(this,
cG,
cH,
cI,
cJ);
}},
removeListener:function(cG,
cH,
cI,
cJ){if(arguments.callee.self.__dB[cG]){for(var bL=0,
cK=this._getPaneScrollerArr();bL<cK.length;bL++){cK[bL].removeListener.apply(cK[bL],
arguments);
}}else{arguments.callee.base.call(this,
cG,
cH,
cI,
cJ);
}}},
destruct:function(){qx.locale.Manager.getInstance().removeListener(h,
this._onChangeLocale,
this);
var cL=this.getSelectionModel();
if(cL){cL.dispose();
}var cM=this.getDataRowRenderer();
if(cM){cM.dispose();
}this._cleanUpMetaColumns(0);
this._disposeObjects(w,
O,
F,
bb,
by,
be);
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,
{members:{updateDataRowElement:function(b,
c){return true;
},
createRowStyle:function(b){return true;
},
getRowClass:function(b){return true;
}}});
})();
(function(){var a="",
b="table-row-background-even",
c="table-row-background-selected",
d="table-row",
e="background-color:",
f="table-row-background-focused",
g="_table",
h=';color:',
i="table-row-selected",
j="table-row-background-odd",
k="default",
l="table-row-background-focused-selected",
m="qx.ui.table.rowrenderer.Default",
n="__font",
o="'",
p=";",
q="_fontStyle",
r="_colors",
s="Boolean";
qx.Class.define(m,
{extend:qx.core.Object,
implement:qx.ui.table.IRowRenderer,
construct:function(t){arguments.callee.base.call(this);
this._fontStyleString=a;
this._fontStyleString={};
this._colors={};
this._table=t;
this._renderFont(qx.theme.manager.Font.getInstance().resolve(k));
var u=qx.theme.manager.Color.getInstance();
this._colors.bgcolFocusedSelected=u.resolve(l);
this._colors.bgcolFocused=u.resolve(f);
this._colors.bgcolSelected=u.resolve(c);
this._colors.bgcolEven=u.resolve(b);
this._colors.bgcolOdd=u.resolve(j);
this._colors.colSelected=u.resolve(i);
this._colors.colNormal=u.resolve(d);
},
properties:{highlightFocusRow:{check:s,
init:true}},
members:{_renderFont:function(v){if(v){this._fontStyle=v.getStyles();
this._fontStyleString=qx.bom.element.Style.compile(this._fontStyle);
this._fontStyleString=this._fontStyleString.replace(/"/g,
o);
}else{this._fontStyleString=a;
this._fontStyle=qx.bom.Font.getDefaultStyles();
}this._postponedUpdateTableContent();
},
updateDataRowElement:function(w,
x){var y=this._fontStyle;
var z=x.style;
qx.bom.element.Style.setStyles(x,
y);
if(w.focusedRow&&this.getHighlightFocusRow()){z.backgroundColor=w.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused;
}else{if(w.selected){z.backgroundColor=this._colors.bgcolSelected;
}else{z.backgroundColor=(w.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd;
}}z.color=w.selected?this._colors.colSelected:this._colors.colNormal;
},
createRowStyle:function(w){var A=[];
A.push(p);
A.push(this._fontStyleString);
A.push(e);
if(w.focusedRow&&this.getHighlightFocusRow()){A.push(w.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused);
}else{if(w.selected){A.push(this._colors.bgcolSelected);
}else{A.push((w.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd);
}}A.push(h);
A.push(w.selected?this._colors.colSelected:this._colors.colNormal);
return A.join(a);
},
getRowClass:function(w){return a;
},
_postponedUpdateTableContent:function(){if(!this._updateContentPlanned){qx.event.Timer.once(function(){if(this.isDisposed()){return;
}this._updateTableContent();
this._updateContentPlanned=false;
},
this,
0);
this._updateContentPlanned=true;
}},
_updateTableContent:function(){if(this._table){this._table.updateContent();
}}},
destruct:function(){this._disposeFields(r,
q,
n,
g);
}});
})();
(function(){var a="qx.ui.table.selection.Manager";
qx.Class.define(a,
{extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
},
properties:{selectionModel:{}},
members:{handleMouseDown:function(b,
c){if(c.isLeftPressed()){var d=this.getSelectionModel();
if(!d.isSelectedIndex(b)){this._handleSelectEvent(b,
c);
this._lastMouseDownHandled=true;
}else{this._lastMouseDownHandled=false;
}}else if(c.isRightPressed()&&c.getModifiers()==0){var d=this.getSelectionModel();
if(!d.isSelectedIndex(b)){d.setSelectionInterval(b,
b);
}}},
handleMouseUp:function(b,
c){if(c.isLeftPressed()&&!this._lastMouseDownHandled){this._handleSelectEvent(b,
c);
}},
handleClick:function(b,
c){},
handleSelectKeyDown:function(b,
c){this._handleSelectEvent(b,
c);
},
handleMoveKeyDown:function(b,
c){var d=this.getSelectionModel();
switch(c.getModifiers()){case 0:d.setSelectionInterval(b,
b);
break;
case qx.event.type.Dom.SHIFT_MASK:var e=d.getAnchorSelectionIndex();
if(e==-1){d.setSelectionInterval(b,
b);
}else{d.setSelectionInterval(e,
b);
}break;
}},
_handleSelectEvent:function(b,
c){var d=this.getSelectionModel();
var f=d.getLeadSelectionIndex();
var g=d.getAnchorSelectionIndex();
if(c.isShiftPressed()){if(b!=f||d.isSelectionEmpty()){if(g==-1){g=b;
}
if(c.isCtrlOrCommandPressed()){d.addSelectionInterval(g,
b);
}else{d.setSelectionInterval(g,
b);
}}}else if(c.isCtrlOrCommandPressed()){if(d.isSelectedIndex(b)){d.removeSelectionInterval(b,
b);
}else{d.addSelectionInterval(b,
b);
}}else{if(!(g==f&&g==b&&d.getSelectedCount()==1)){d.setSelectionInterval(b,
b);
}}}}});
})();
(function(){var a="..",
b="_selectedRangeArr",
c="changeSelection",
d="_applySelectionMode",
e="]",
f="qx.event.type.Event",
g="Ranges:",
h="qx.ui.table.selection.Model",
k=" [";
qx.Class.define(h,
{extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this._selectedRangeArr=[];
this._anchorSelectionIndex=-1;
this._leadSelectionIndex=-1;
this.hasBatchModeRefCount=0;
this._hadChangeEventInBatchMode=false;
},
events:{"changeSelection":f},
statics:{NO_SELECTION:1,
SINGLE_SELECTION:2,
SINGLE_INTERVAL_SELECTION:3,
MULTIPLE_INTERVAL_SELECTION:4,
MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},
properties:{selectionMode:{init:2,
check:[1,
2,
3,
4,
5],
apply:d}},
members:{_applySelectionMode:function(l){if(l==qx.ui.table.selection.Model.NO_SELECTION){this.clearSelection();
}},
setBatchMode:function(m){if(m){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;
if(this._hadChangeEventInBatchMode){this._hadChangeEventInBatchMode=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},
hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},
getAnchorSelectionIndex:function(){return this._anchorSelectionIndex;
},
getLeadSelectionIndex:function(){return this._leadSelectionIndex;
},
clearSelection:function(){if(!this.isSelectionEmpty()){this._clearSelection();
this._fireChangeSelection();
}},
isSelectionEmpty:function(){return this._selectedRangeArr.length==0;
},
getSelectedCount:function(){var n=0;
for(var o=0;o<this._selectedRangeArr.length;o++){var p=this._selectedRangeArr[o];
n+=p.maxIndex-p.minIndex+1;
}return n;
},
isSelectedIndex:function(q){for(var o=0;o<this._selectedRangeArr.length;o++){var p=this._selectedRangeArr[o];
if(q>=p.minIndex&&q<=p.maxIndex){return true;
}}return false;
},
getSelectedRanges:function(){var r=[];
for(var o=0;o<this._selectedRangeArr.length;o++){r.push({minIndex:this._selectedRangeArr[o].minIndex,
maxIndex:this._selectedRangeArr[o].maxIndex});
}return r;
},
iterateSelection:function(s,
t){for(var o=0;o<this._selectedRangeArr.length;o++){for(var u=this._selectedRangeArr[o].minIndex;u<=this._selectedRangeArr[o].maxIndex;u++){s.call(t,
u);
}}},
setSelectionInterval:function(v,
w){var x=arguments.callee.self;
switch(this.getSelectionMode()){case x.NO_SELECTION:return;
case x.SINGLE_SELECTION:v=w;
break;
case x.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);
try{for(var o=v;o<=w;o++){if(!this.isSelectedIndex(o)){this._addSelectionInterval(o,
o);
}else{this.removeSelectionInterval(o,
o);
}}}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._clearSelection();
this._addSelectionInterval(v,
w);
this._fireChangeSelection();
},
addSelectionInterval:function(v,
w){var y=qx.ui.table.selection.Model;
switch(this.getSelectionMode()){case y.NO_SELECTION:return;
case y.MULTIPLE_INTERVAL_SELECTION:case y.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(v,
w);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(v,
w);
break;
}},
removeSelectionInterval:function(v,
w){this._anchorSelectionIndex=v;
this._leadSelectionIndex=w;
var z=Math.min(v,
w);
var A=Math.max(v,
w);
for(var o=0;o<this._selectedRangeArr.length;o++){var p=this._selectedRangeArr[o];
if(p.minIndex>A){break;
}else if(p.maxIndex>=z){var B=(p.minIndex>=z)&&(p.minIndex<=A);
var C=(p.maxIndex>=z)&&(p.maxIndex<=A);
if(B&&C){this._selectedRangeArr.splice(o,
1);
o--;
}else if(B){p.minIndex=A+1;
}else if(C){p.maxIndex=z-1;
}else{var D={minIndex:A+1,
maxIndex:p.maxIndex};
this._selectedRangeArr.splice(o+1,
0,
D);
p.maxIndex=z-1;
break;
}}}this._fireChangeSelection();
},
_clearSelection:function(){this._selectedRangeArr=[];
this._anchorSelectionIndex=-1;
this._leadSelectionIndex=-1;
},
_addSelectionInterval:function(v,
w){this._anchorSelectionIndex=v;
this._leadSelectionIndex=w;
var z=Math.min(v,
w);
var A=Math.max(v,
w);
var E=0;
for(;E<this._selectedRangeArr.length;E++){var p=this._selectedRangeArr[E];
if(p.minIndex>z){break;
}}this._selectedRangeArr.splice(E,
0,
{minIndex:z,
maxIndex:A});
var F=this._selectedRangeArr[0];
for(var o=1;o<this._selectedRangeArr.length;o++){var p=this._selectedRangeArr[o];
if(F.maxIndex+1>=p.minIndex){F.maxIndex=Math.max(F.maxIndex,
p.maxIndex);
this._selectedRangeArr.splice(o,
1);
o--;
}else{F=p;
}}},
_dumpRanges:function(){var G=g;
for(var o=0;o<this._selectedRangeArr.length;o++){var p=this._selectedRangeArr[o];
G+=k+p.minIndex+a+p.maxIndex+e;
}this.debug(G);
},
_fireChangeSelection:function(){if(this.hasBatchMode()){this._hadChangeEventInBatchMode=true;
}this.fireEvent(c);
}},
destruct:function(){this._disposeFields(b);
}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,
{members:{createHeaderCell:function(b){return true;
},
updateHeaderCell:function(b,
c){return true;
}}});
})();
(function(){var a="qx.ui.table.headerrenderer.Default",
b="String";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.ui.table.IHeaderRenderer,
statics:{STATE_SORTED:"sorted",
STATE_SORTED_ASCENDING:"sortedAscending"},
properties:{toolTip:{check:b,
init:null,
nullable:true}},
members:{createHeaderCell:function(c){var d=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(c,
d);
return d;
},
updateHeaderCell:function(c,
e){var f=qx.ui.table.headerrenderer.Default;
e.setLabel(c.name);
var g=e.getToolTip();
if(this.getToolTip()!=null){if(g==null){g=new qx.ui.tooltip.ToolTip(this.getToolTip());
e.setToolTip(g);
}else{g.setLabel(this.getToolTip());
}}c.sorted?e.addState(f.STATE_SORTED):e.removeState(f.STATE_SORTED);
c.sortedAscending?e.addState(f.STATE_SORTED_ASCENDING):e.removeState(f.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,
{members:{createDataCellHtml:function(b,
c){return true;
}}});
})();
(function(){var a="",
b="px;",
c="1px solid #eeeeee",
d="qooxdoo-table-cell",
e='</div>',
f="nowrap",
g="default",
h=".qooxdoo-table-cell-right { text-align:right } ",
i="0px 6px",
j='<div class="',
k="0px",
l="height:",
m=".qooxdoo-table-cell-bold { font-weight:bold } ",
n=";width:",
o="ellipsis",
p='">',
q="content-box",
r='left:',
s="qx.ui.table.cellrenderer.Abstract",
t='" style="',
u="abstract",
v="none",
w=".qooxdoo-table-cell {",
x="hidden",
y="} ",
z='px;',
A=".qooxdoo-table-cell-italic { font-style:italic} ",
B="absolute";
qx.Class.define(s,
{type:u,
implement:qx.ui.table.ICellRenderer,
extend:qx.core.Object,
construct:function(){var C=qx.ui.table.cellrenderer.Abstract;
if(!C.__clazz){C.__clazz=arguments.callee.self;
var D=w+
qx.bom.element.Style.compile({position:B,
top:k,
overflow:x,
whiteSpace:f,
borderRight:c,
borderBottom:c,
padding:i,
cursor:g,
textOverflow:o,
userSelect:v,
boxSizing:q})+y+h+A+m;
C.__clazz.stylesheet=qx.bom.Stylesheet.createElement(D);
}},
members:{_insetX:6+6+1,
_insetY:1,
_getCellClass:function(E){return d;
},
_getCellStyle:function(E){return E.style||a;
},
_getContentHtml:function(E){return E.value||a;
},
_getCellSizeStyle:function(F,
G,
H,
I){var J=a;
if(qx.bom.client.Feature.CONTENT_BOX){F-=H;
G-=I;
}J+=n+F+b;
J+=l+G+b;
return J;
},
createDataCellHtml:function(E,
K){K.push(j,
this._getCellClass(E),
t,
r,
E.styleLeft,
z,
this._getCellSizeStyle(E.styleWidth,
E.styleHeight,
this._insetX,
this._insetY),
this._getCellStyle(E),
p+this._getContentHtml(E),
e);
}}});
})();
(function(){var a="",
b="number",
c="Boolean",
d="qx.ui.table.cellrenderer.Default",
e=" qooxdoo-table-cell-bold",
f=" qooxdoo-table-cell-right",
g=" qooxdoo-table-cell-italic",
h="string";
qx.Class.define(d,
{extend:qx.ui.table.cellrenderer.Abstract,
statics:{STYLEFLAG_ALIGN_RIGHT:1,
STYLEFLAG_BOLD:2,
STYLEFLAG_ITALIC:4},
properties:{useAutoAlign:{check:c,
init:true}},
members:{_getStyleFlags:function(i){if(this.getUseAutoAlign()){if(typeof i.value==b){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},
_getCellClass:function(i){var j=arguments.callee.base.call(this,
i);
if(!j){return a;
}var k=this._getStyleFlags(i);
if(k&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){j+=f;
}
if(k&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){j+=e;
}
if(k&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){j+=g;
}return j;
},
_getContentHtml:function(i){return qx.bom.String.escape(this._formatValue(i));
},
_formatValue:function(i){var l=i.value;
if(l==null){return a;
}
if(typeof l==h){return l;
}else if(typeof l==b){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var m=qx.ui.table.cellrenderer.Default._numberFormat.format(l);
}else if(l instanceof Date){m=qx.util.format.DateFormat.getDateInstance().format(l);
}else{m=l;
}return m;
}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,
{members:{createCellEditor:function(b){return true;
},
getCellEditorValue:function(c){return true;
}}});
})();
(function(){var a="",
b="Function",
c="number",
d="qx.ui.table.celleditor.TextField",
e="table-editor-textfield",
f="appear";
qx.Class.define(d,
{extend:qx.core.Object,
implement:qx.ui.table.ICellEditorFactory,
construct:function(){arguments.callee.base.call(this);
},
properties:{validationFunction:{check:b,
nullable:true,
init:null}},
members:{createCellEditor:function(g){var h=new qx.ui.form.TextField;
h.setAppearance(e);
h.originalValue=g.value;
if(g.value===null){g.value=a;
}h.setValue(a+g.value);
h.addListener(f,
function(){h.selectAll();
});
return h;
},
getCellEditorValue:function(h){var i=h.getValue();
var j=this.getValidationFunction();
if(!this._done&&j){i=j(i,
h.originalValue);
this._done=true;
}
if(typeof h.originalValue==c){i=parseFloat(i);
}return i;
}}});
})();
(function(){var a="qx.event.type.DataEvent",
b="_visibleColumnArr",
c="visibilityChanged",
d="orderChanged",
e="widthChanged",
f="qx.ui.table.columnmodel.Basic",
g="_overallColumnArr",
h="_colToXPosMap",
i="_columnDataArr",
j="visibilityChangedPre";
qx.Class.define(f,
{extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
},
events:{"widthChanged":a,
"visibilityChangedPre":a,
"visibilityChanged":a,
"orderChanged":a},
statics:{DEFAULT_WIDTH:100,
DEFAULT_HEADER_RENDERER:new qx.ui.table.headerrenderer.Default(),
DEFAULT_DATA_RENDERER:new qx.ui.table.cellrenderer.Default(),
DEFAULT_EDITOR_FACTORY:new qx.ui.table.celleditor.TextField()},
members:{init:function(k){this._columnDataArr=[];
var l=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var m=qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER;
var n=qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER;
var o=qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY;
this._overallColumnArr=[];
this._visibleColumnArr=[];
for(var p=0;p<k;p++){this._columnDataArr[p]={width:l,
headerRenderer:m,
dataRenderer:n,
editorFactory:o};
this._overallColumnArr[p]=p;
this._visibleColumnArr[p]=p;
}this._colToXPosMap=null;
},
setColumnWidth:function(p,
l){var q=this._columnDataArr[p].width;
if(q!=l){this._columnDataArr[p].width=l;
var r={col:p,
newWidth:l,
oldWidth:q};
this.fireDataEvent(e,
r);
}},
getColumnWidth:function(p){return this._columnDataArr[p].width;
},
setHeaderCellRenderer:function(p,
s){this._columnDataArr[p].headerRenderer=s;
},
getHeaderCellRenderer:function(p){return this._columnDataArr[p].headerRenderer;
},
setDataCellRenderer:function(p,
s){this._columnDataArr[p].dataRenderer=s;
},
getDataCellRenderer:function(p){return this._columnDataArr[p].dataRenderer;
},
setCellEditorFactory:function(p,
t){this._columnDataArr[p].editorFactory=t;
},
getCellEditorFactory:function(p){return this._columnDataArr[p].editorFactory;
},
_getColToXPosMap:function(){if(this._colToXPosMap==null){this._colToXPosMap={};
for(var u=0;u<this._overallColumnArr.length;u++){var p=this._overallColumnArr[u];
this._colToXPosMap[p]={overX:u};
}
for(var v=0;v<this._visibleColumnArr.length;v++){var p=this._visibleColumnArr[v];
this._colToXPosMap[p].visX=v;
}}return this._colToXPosMap;
},
getVisibleColumnCount:function(){return this._visibleColumnArr.length;
},
getVisibleColumnAtX:function(w){return this._visibleColumnArr[w];
},
getVisibleX:function(p){return this._getColToXPosMap()[p].visX;
},
getOverallColumnCount:function(){return this._overallColumnArr.length;
},
getOverallColumnAtX:function(y){return this._overallColumnArr[y];
},
getOverallX:function(p){return this._getColToXPosMap()[p].overX;
},
isColumnVisible:function(p){return (this._getColToXPosMap()[p].visX!=null);
},
setColumnVisible:function(p,
z){if(z!=this.isColumnVisible(p)){if(z){var A=this._getColToXPosMap();
var u=A[p].overX;
if(u==null){throw new Error("Showing column failed: "+p+". The column is not added to this TablePaneModel.");
}var B;
for(var C=u+1;C<this._overallColumnArr.length;C++){var D=this._overallColumnArr[C];
var E=A[D].visX;
if(E!=null){B=E;
break;
}}if(B==null){B=this._visibleColumnArr.length;
}this._visibleColumnArr.splice(B,
0,
p);
}else{var v=this.getVisibleX(p);
this._visibleColumnArr.splice(v,
1);
}this._colToXPosMap=null;
if(!this._internalChange){var r={col:p,
visible:z};
this.fireDataEvent(j,
r);
this.fireDataEvent(c,
r);
}}},
moveColumn:function(F,
G){this._internalChange=true;
var p=this._overallColumnArr[F];
var z=this.isColumnVisible(p);
if(z){this.setColumnVisible(p,
false);
}this._overallColumnArr.splice(F,
1);
this._overallColumnArr.splice(G,
0,
p);
this._colToXPosMap=null;
if(z){this.setColumnVisible(p,
true);
}this._internalChange=false;
var r={col:p,
fromOverXPos:F,
toOverXPos:G};
this.fireDataEvent(d,
r);
}},
destruct:function(){this._disposeFields(g,
b,
i,
h);
}});
})();
(function(){var a="icon",
b="label",
c="String",
d="sort-icon",
e="_applySortIcon",
f="_applyIcon",
g="table-header-cell",
h="qx.ui.table.headerrenderer.HeaderCell",
i="_applyLabel";
qx.Class.define(h,
{extend:qx.ui.container.Composite,
construct:function(){arguments.callee.base.call(this);
var j=new qx.ui.layout.Grid();
j.setColumnFlex(1,
1);
this.setLayout(j);
this.setMinWidth(30);
},
properties:{appearance:{refine:true,
init:g},
label:{check:c,
init:null,
nullable:true,
apply:i},
sortIcon:{check:c,
init:null,
nullable:true,
apply:e,
themeable:true},
icon:{check:c,
init:null,
nullable:true,
apply:f}},
members:{_applyLabel:function(k,
l){if(k){this._showChildControl(b).setContent(k);
}else{this._excludeChildControl(b);
}},
_applySortIcon:function(k,
l){if(k){this._showChildControl(d).setSource(k);
}else{this._excludeChildControl(d);
}},
_applyIcon:function(k,
l){if(k){this._showChildControl(a).setSource(k);
}else{this._excludeChildControl(a);
}},
_createChildControlImpl:function(m){var n;
switch(m){case b:n=new qx.ui.basic.Label(this.getLabel());
n.setAnonymous(true);
this._add(n,
{row:0,
column:1});
break;
case d:n=new qx.ui.basic.Image(this.getSortIcon());
n.setAnonymous(true);
this._add(n,
{row:0,
column:0});
break;
case a:n=new qx.ui.basic.Image(this.getIcon());
n.setAnonymous(true);
this._add(n,
{row:0,
column:2});
break;
}return n||arguments.callee.base.call(this,
m);
}}});
})();
(function(){var a="left",
b="top",
c="_applyLayoutChange",
d="hAlign",
e="flex",
f="vAlign",
g="Integer",
h="__colSpans",
k="minWidth",
m="width",
n="minHeight",
o="__rowSpans",
p="__colData",
q="qx.ui.layout.Grid",
r="height",
s="__rowData",
t="maxHeight",
u="maxWidth",
v="__grid";
qx.Class.define(q,
{extend:qx.ui.layout.Abstract,
construct:function(w,
z){arguments.callee.base.call(this);
this.__rowData=[];
this.__colData=[];
if(w){this.setSpacingX(w);
}
if(z){this.setSpacingY(z);
}},
properties:{spacingX:{check:g,
init:0,
apply:c},
spacingY:{check:g,
init:0,
apply:c}},
members:{verifyLayoutProperty:null,
__dC:function(){var A=[];
var B=[];
var C=[];
var D=0;
var E=0;
var F=this._getLayoutChildren();
for(var G=0,
H=F.length;G<H;G++){var I=F[G];
var J=I.getLayoutProperties();
var K=J.row;
var L=J.column;
J.colSpan=J.colSpan||1;
J.rowSpan=J.rowSpan||1;
if(K==null||L==null){throw new Error("The layout properties 'row' and 'column' must be defined!");
}
if(A[K]&&A[K][L]){throw new Error("There is already a widget in this cell ("+K+", "+L+")");
}
for(var M=L;M<L+J.colSpan;M++){for(var N=K;N<K+J.rowSpan;N++){if(A[N]==undefined){A[N]=[];
}A[N][M]=I;
E=Math.max(E,
M);
D=Math.max(D,
N);
}}
if(J.rowSpan>1){C.push(I);
}
if(J.colSpan>1){B.push(I);
}}for(var N=0;N<=D;N++){if(A[N]==undefined){A[N]=[];
}}this.__grid=A;
this.__colSpans=B;
this.__rowSpans=C;
this._maxRowIndex=D;
this._maxColIndex=E;
delete this._invalidChildrenCache;
},
_setRowData:function(K,
O,
P){var Q=this.__rowData[K];
if(!Q){this.__rowData[K]={};
this.__rowData[K][O]=P;
}else{Q[O]=P;
}},
_setColumnData:function(L,
O,
P){var R=this.__colData[L];
if(!R){this.__colData[L]={};
this.__colData[L][O]=P;
}else{R[O]=P;
}},
setSpacing:function(S){this.setSpacingY(S);
this.setSpacingX(S);
},
setColumnAlign:function(L,
T,
U){{};
this._setColumnData(L,
d,
T);
this._setColumnData(L,
f,
U);
this._applyLayoutChange();
return this;
},
getColumnAlign:function(L){var R=this.__colData[L]||{};
return {vAlign:R.vAlign||b,
hAlign:R.hAlign||a};
},
setRowAlign:function(K,
T,
U){{};
this._setRowData(K,
d,
T);
this._setRowData(K,
f,
U);
this._applyLayoutChange();
return this;
},
getRowAlign:function(K){var Q=this.__rowData[K]||{};
return {vAlign:Q.vAlign||b,
hAlign:Q.hAlign||a};
},
getCellWidget:function(K,
L){if(this._invalidChildrenCache){this.__dC();
}return this.__grid[K][L]||null;
},
getCellAlign:function(K,
L){var U=b;
var T=a;
var Q=this.__rowData[K];
var R=this.__colData[L];
var V=this.__grid[K][L];
if(V){var W={vAlign:V.getAlignY(),
hAlign:V.getAlignX()};
}else{W={};
}if(W.vAlign){U=W.vAlign;
}else if(Q&&Q.vAlign){U=Q.vAlign;
}else if(R&&R.vAlign){U=R.vAlign;
}if(W.hAlign){T=W.hAlign;
}else if(R&&R.hAlign){T=R.hAlign;
}else if(Q&&Q.hAlign){T=Q.hAlign;
}return {vAlign:U,
hAlign:T};
},
setColumnFlex:function(L,
X){this._setColumnData(L,
e,
X);
this._applyLayoutChange();
return this;
},
getColumnFlex:function(L){var R=this.__colData[L]||{};
return R.flex!==undefined?R.flex:0;
},
setRowFlex:function(K,
X){this._setRowData(K,
e,
X);
this._applyLayoutChange();
return this;
},
getRowFlex:function(K){var Q=this.__rowData[K]||{};
var Y=Q.flex!==undefined?Q.flex:0;
return Y;
},
setColumnMaxWidth:function(L,
ba){this._setColumnData(L,
u,
ba);
this._applyLayoutChange();
return this;
},
getColumnMaxWidth:function(L){var R=this.__colData[L]||{};
return R.maxWidth!==undefined?R.maxWidth:Infinity;
},
setColumnWidth:function(L,
bb){this._setColumnData(L,
m,
bb);
this._applyLayoutChange();
return this;
},
getColumnWidth:function(L){var R=this.__colData[L]||{};
return R.width!==undefined?R.width:null;
},
setColumnMinWidth:function(L,
bc){this._setColumnData(L,
k,
bc);
this._applyLayoutChange();
return this;
},
getColumnMinWidth:function(L){var R=this.__colData[L]||{};
return R.minWidth||0;
},
setRowMaxHeight:function(K,
bd){this._setRowData(K,
t,
bd);
this._applyLayoutChange();
return this;
},
getRowMaxHeight:function(K){var Q=this.__rowData[K]||{};
return Q.maxHeight||Infinity;
},
setRowHeight:function(K,
be){this._setRowData(K,
r,
be);
this._applyLayoutChange();
return this;
},
getRowHeight:function(K){var Q=this.__rowData[K]||{};
return Q.height!==undefined?Q.height:null;
},
setRowMinHeight:function(K,
bf){this._setRowData(K,
n,
bf);
this._applyLayoutChange();
return this;
},
getRowMinHeight:function(K){var Q=this.__rowData[K]||{};
return Q.minHeight||0;
},
__dD:function(V){var bg=V.getSizeHint();
var bh=V.getMarginLeft()+V.getMarginRight();
var bi=V.getMarginTop()+V.getMarginBottom();
var bj={height:bg.height+bi,
width:bg.width+bh,
minHeight:bg.minHeight+bi,
minWidth:bg.minWidth+bh,
maxHeight:bg.maxHeight+bi,
maxWidth:bg.maxWidth+bh};
return bj;
},
_fixHeightsRowSpan:function(bk){var bl=this.getSpacingY();
for(var G=0,
H=this.__rowSpans.length;G<H;G++){var V=this.__rowSpans[G];
var bg=this.__dD(V);
var W=V.getLayoutProperties();
var bm=W.row;
var bn=bl*(W.rowSpan-1);
var bo=bn;
var bp={};
for(var bq=0;bq<W.rowSpan;bq++){var K=W.row+bq;
var br=bk[K];
var Y=this.getRowFlex(K);
if(Y>0){bp[K]={min:br.minHeight,
value:br.height,
max:br.maxHeight,
flex:Y};
}bn+=br.height;
bo+=br.minHeight;
}if(bn<bg.height){var bs=qx.ui.layout.Util.computeFlexOffsets(bp,
bg.height,
bn);
for(var bq=0;bq<W.rowSpan;bq++){var bt=bs[bm+bq]?bs[bm+bq].offset:0;
bk[bm+bq].height+=bt;
}}if(bo<bg.minHeight){var bs=qx.ui.layout.Util.computeFlexOffsets(bp,
bg.minHeight,
bo);
for(var bq=0;bq<W.rowSpan;bq++){var bt=bs[bm+bq]?bs[bm+bq].offset:0;
bk[bm+bq].minHeight+=bt;
}}}},
_fixWidthsColSpan:function(bu){var bv=this.getSpacingX();
for(var G=0,
H=this.__colSpans.length;G<H;G++){var V=this.__colSpans[G];
var bg=this.__dD(V);
var W=V.getLayoutProperties();
var bw=W.column;
var bx=bv*(W.colSpan-1);
var by=bx;
var bz={};
var bt;
for(var bq=0;bq<W.colSpan;bq++){var bA=W.column+bq;
var bB=bu[bA];
var bC=this.getColumnFlex(bA);
if(bC>0){bz[bA]={min:bB.minWidth,
value:bB.width,
max:bB.maxWidth,
flex:bC};
}bx+=bB.width;
by+=bB.minWidth;
}if(bx<bg.width){var bD=qx.ui.layout.Util.computeFlexOffsets(bz,
bg.width,
bx);
for(var bq=0;bq<W.colSpan;bq++){bt=bD[bw+bq]?bD[bw+bq].offset:0;
bu[bw+bq].width+=bt;
}}if(by<bg.minWidth){var bD=qx.ui.layout.Util.computeFlexOffsets(bz,
bg.minWidth,
by);
for(var bq=0;bq<W.colSpan;bq++){bt=bD[bw+bq]?bD[bw+bq].offset:0;
bu[bw+bq].minWidth+=bt;
}}}},
_getRowHeights:function(){if(this.__rowHeights!=null){return this.__rowHeights;
}var bk=[];
var D=this._maxRowIndex;
var E=this._maxColIndex;
for(var K=0;K<=D;K++){var bf=0;
var be=0;
var bd=0;
for(var bA=0;bA<=E;bA++){var V=this.__grid[K][bA];
if(!V){continue;
}var bE=V.getLayoutProperties().rowSpan||0;
if(bE>1){continue;
}var bF=this.__dD(V);
if(this.getRowFlex(K)>0){bf=Math.max(bf,
bF.minHeight);
}else{bf=Math.max(bf,
bF.height);
}be=Math.max(be,
bF.height);
}var bf=Math.max(bf,
this.getRowMinHeight(K));
var bd=this.getRowMaxHeight(K);
if(this.getRowHeight(K)!==null){var be=this.getRowHeight(K);
}else{var be=Math.max(bf,
Math.min(be,
bd));
}bk[K]={minHeight:bf,
height:be,
maxHeight:bd};
}
if(this.__rowSpans.length>0){this._fixHeightsRowSpan(bk);
}this.__rowHeights=bk;
return bk;
},
_getColWidths:function(){if(this.__colWidths!=null){return this.__colWidths;
}var bu=[];
var E=this._maxColIndex;
var D=this._maxRowIndex;
for(var bA=0;bA<=E;bA++){var bb=0;
var bc=0;
var ba=Infinity;
for(var K=0;K<=D;K++){var V=this.__grid[K][bA];
if(!V){continue;
}var bG=V.getLayoutProperties().colSpan||0;
if(bG>1){continue;
}var bF=this.__dD(V);
if(this.getColumnFlex(bA)>0){bc=Math.max(bc,
bF.minWidth);
}else{bc=Math.max(bc,
bF.width);
}bb=Math.max(bb,
bF.width);
}var bc=Math.max(bc,
this.getColumnMinWidth(bA));
var ba=this.getColumnMaxWidth(bA);
if(this.getColumnWidth(bA)!==null){var bb=this.getColumnWidth(bA);
}else{var bb=Math.max(bc,
Math.min(bb,
ba));
}bu[bA]={minWidth:bc,
width:bb,
maxWidth:ba};
}
if(this.__colSpans.length>0){this._fixWidthsColSpan(bu);
}this.__colWidths=bu;
return bu;
},
_getColumnFlexOffsets:function(bb){var bg=this.getSizeHint();
var bH=bb-bg.width;
if(bH==0){return {};
}var bu=this._getColWidths();
var bI={};
for(var G=0,
H=bu.length;G<H;G++){var bA=bu[G];
var bC=this.getColumnFlex(G);
if((bC<=0)||(bA.width==bA.maxWidth&&bH>0)||(bA.width==bA.minWidth&&bH<0)){continue;
}bI[G]={min:bA.minWidth,
value:bA.width,
max:bA.maxWidth,
flex:bC};
}return qx.ui.layout.Util.computeFlexOffsets(bI,
bb,
bg.width);
},
_getRowFlexOffsets:function(be){var bg=this.getSizeHint();
var bH=be-bg.height;
if(bH==0){return {};
}var bk=this._getRowHeights();
var bI={};
for(var G=0,
H=bk.length;G<H;G++){var K=bk[G];
var Y=this.getRowFlex(G);
if((Y<=0)||(K.height==K.maxHeight&&bH>0)||(K.height==K.minHeight&&bH<0)){continue;
}bI[G]={min:K.minHeight,
value:K.height,
max:K.maxHeight,
flex:Y};
}return qx.ui.layout.Util.computeFlexOffsets(bI,
be,
bg.height);
},
renderLayout:function(bJ,
bK){if(this._invalidChildrenCache){this.__dC();
}var bL=qx.ui.layout.Util;
var bv=this.getSpacingX();
var bl=this.getSpacingY();
var bM=this._getColWidths();
var bN=this._getColumnFlexOffsets(bJ);
var bu=[];
var E=this._maxColIndex;
var D=this._maxRowIndex;
var bt;
for(var bA=0;bA<=E;bA++){bt=bN[bA]?bN[bA].offset:0;
bu[bA]=bM[bA].width+bt;
}var bO=this._getRowHeights();
var bP=this._getRowFlexOffsets(bK);
var bk=[];
for(var K=0;K<=D;K++){bt=bP[K]?bP[K].offset:0;
bk[K]=bO[K].height+bt;
}var bQ=0;
for(var bA=0;bA<=E;bA++){var bR=0;
for(var K=0;K<=D;K++){var V=this.__grid[K][bA];
if(!V){bR+=bk[K]+bl;
continue;
}var W=V.getLayoutProperties();
if(W.row!==K||W.column!==bA){bR+=bk[K]+bl;
continue;
}var bS=bv*(W.colSpan-1);
for(var G=0;G<W.colSpan;G++){bS+=bu[bA+G];
}var bT=bl*(W.rowSpan-1);
for(var G=0;G<W.rowSpan;G++){bT+=bk[K+G];
}var bU=V.getSizeHint();
var bV=V.getMarginTop();
var bW=V.getMarginLeft();
var bX=V.getMarginBottom();
var bY=V.getMarginRight();
var ca=Math.max(bU.minWidth,
Math.min(bS-bW-bY,
bU.maxWidth));
var cb=Math.max(bU.minHeight,
Math.min(bT-bV-bX,
bU.maxHeight));
var cc=this.getCellAlign(K,
bA);
var cd=bQ+bL.computeHorizontalAlignOffset(cc.hAlign,
ca,
bS,
bW,
bY);
var ce=bR+bL.computeVerticalAlignOffset(cc.vAlign,
cb,
bT,
bV,
bX);
V.renderLayout(cd,
ce,
ca,
cb);
bR+=bk[K]+bl;
}bQ+=bu[bA]+bv;
}},
invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__colWidths=null;
this.__rowHeights=null;
},
_computeSizeHint:function(){if(this._invalidChildrenCache){this.__dC();
}var bu=this._getColWidths();
var bc=0,
bb=0;
for(var G=0,
H=bu.length;G<H;G++){var bA=bu[G];
if(this.getColumnFlex(G)>0){bc+=bA.minWidth;
}else{bc+=bA.width;
}bb+=bA.width;
}var bk=this._getRowHeights();
var bf=0,
be=0;
for(var G=0,
H=bk.length;G<H;G++){var K=bk[G];
if(this.getRowFlex(G)>0){bf+=K.minHeight;
}else{bf+=K.height;
}be+=K.height;
}var w=this.getSpacingX()*(bu.length-1);
var z=this.getSpacingY()*(bk.length-1);
var bg={minWidth:bc+w,
width:bb+w,
minHeight:bf+z,
height:be+z};
return bg;
}},
destruct:function(){this._disposeFields(v,
s,
p,
h,
o);
}});
})();
(function(){var a="qx.ui.popup.Popup",
b="visible",
c="excluded",
d="popup",
e="Boolean";
qx.Class.define(a,
{extend:qx.ui.container.Composite,
include:qx.ui.core.MAlign,
construct:function(f){arguments.callee.base.call(this,
f);
qx.core.Init.getApplication().getRoot().add(this);
},
properties:{appearance:{refine:true,
init:d},
visibility:{refine:true,
init:c},
autoHide:{check:e,
init:true}},
members:{_applyVisibility:function(g,
h){arguments.callee.base.call(this,
g,
h);
var i=qx.ui.popup.Manager.getInstance();
g===b?i.add(this):i.remove(this);
}},
destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var a="atom",
b="Integer",
c="String",
d="qx.ui.tooltip.ToolTip",
e="_applyIcon",
f="tooltip",
g="_applyLabel";
qx.Class.define(d,
{extend:qx.ui.popup.Popup,
construct:function(h,
i){arguments.callee.base.call(this);
qx.ui.tooltip.Manager.getInstance();
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(a);
if(h!=null){this.setLabel(h);
}
if(i!=null){this.setIcon(i);
}},
properties:{appearance:{refine:true,
init:f},
showTimeout:{check:b,
init:1000,
themeable:true},
hideTimeout:{check:b,
init:4000,
themeable:true},
label:{check:c,
nullable:true,
apply:g},
icon:{check:c,
nullable:true,
apply:e,
themeable:true}},
members:{_createChildControlImpl:function(j){var k;
switch(j){case a:k=new qx.ui.basic.Atom;
this._add(k);
break;
}return k||arguments.callee.base.call(this,
j);
},
_applyIcon:function(l,
m){var n=this._getChildControl(a);
l==null?n.resetIcon:n.setIcon(l);
},
_applyLabel:function(l,
m){var n=this._getChildControl(a);
l==null?n.resetLabel():n.setLabel(l);
}}});
})();
(function(){var a="__objects",
b="blur",
c="mousedown",
d="singleton",
f="qx.ui.popup.Manager";
qx.Class.define(f,
{type:d,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__objects={};
var g=qx.core.Init.getApplication().getRoot();
g.addListener(c,
this.__dF,
this,
true);
qx.bom.Element.addListener(window,
b,
this.hideAll,
this);
},
members:{add:function(h){{};
this.__objects[h.$$hash]=h;
this.__dE();
},
remove:function(h){{};
delete this.__objects[h.$$hash];
this.__dE();
},
hideAll:function(){var i=this.__objects;
for(var j in i){i[j].exclude();
}},
__dE:function(){var k=1e6;
var i=this.__objects;
for(var j in i){i[j].setZIndex(k++);
}},
__dF:function(l){var m=l.getTarget();
var i=this.__objects;
for(var j in i){h=i[j];
if(!h.getAutoHide()||m==h||qx.ui.core.Widget.contains(h,
m)){continue;
}h.exclude();
}}},
destruct:function(){this._disposeMap(a);
}});
})();
(function(){var a="focusout",
b="interval",
c="mouseout",
d="mousemove",
f="__hideTimer",
g="qx.ui.tooltip.ToolTip",
h="__showTimer",
i="mouseover",
j="_applyCurrent",
k="qx.ui.tooltip.Manager",
l="singleton",
m="__mousePosition",
n="focusin";
qx.Class.define(k,
{type:l,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
var o=qx.core.Init.getApplication().getRoot();
o.addListener(i,
this.__dJ,
this,
true);
o.addListener(n,
this.__dL,
this,
true);
this.__showTimer=new qx.event.Timer();
this.__showTimer.addListener(b,
this.__dG,
this);
this.__hideTimer=new qx.event.Timer();
this.__hideTimer.addListener(b,
this.__dH,
this);
this.__mousePosition={left:0,
top:0};
},
properties:{current:{check:g,
nullable:true,
apply:j}},
members:{_applyCurrent:function(p,
q){if(q&&qx.ui.core.Widget.contains(q,
p)){return;
}if(q){q.exclude();
this.__showTimer.stop();
this.__hideTimer.stop();
}var o=qx.core.Init.getApplication().getRoot();
if(p){this.__showTimer.startWith(p.getShowTimeout());
o.addListener(c,
this.__dK,
this,
true);
o.addListener(a,
this.__dM,
this,
true);
o.addListener(d,
this.__dI,
this,
true);
}else{o.removeListener(c,
this.__dK,
this,
true);
o.removeListener(a,
this.__dM,
this,
true);
o.removeListener(d,
this.__dI,
this,
true);
}},
__dG:function(r){var s=this.getCurrent();
if(s){this.__hideTimer.startWith(s.getHideTimeout());
s.alignToPoint(this.__mousePosition);
s.show();
}this.__showTimer.stop();
},
__dH:function(r){var s=this.getCurrent();
if(s){s.exclude();
}this.__hideTimer.stop();
this.resetCurrent();
},
__dI:function(r){var t=this.__mousePosition;
t.left=r.getDocumentLeft();
t.top=r.getDocumentTop();
},
__dJ:function(r){var u=r.getTarget();
var v;
while(u!=null){var v=u.getToolTip();
if(v){break;
}u=u.getLayoutParent();
}if(v){this.setCurrent(v);
}},
__dK:function(r){var u=r.getTarget();
var w=r.getRelatedTarget();
var v=this.getCurrent();
if(v&&(w==v||qx.ui.core.Widget.contains(v,
w))){return;
}if(w&&u&&qx.ui.core.Widget.contains(u,
w)){return;
}if(v&&!w){this.setCurrent(null);
}else{this.resetCurrent();
}},
__dL:function(r){var u=r.getTarget();
var v=u.getToolTip();
if(v!=null){this.setCurrent(v);
}},
__dM:function(r){var u=r.getTarget();
if(!u){return;
}var v=this.getCurrent();
if(v&&v==u.getToolTip()){this.setCurrent(null);
}}},
destruct:function(){this._disposeObjects(h,
f);
this._disposeFields(m);
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,
{extend:qx.ui.layout.Abstract,
members:{verifyLayoutProperty:null,
renderLayout:function(b,
c){var d=this._getLayoutChildren();
var e,
f,
g,
h;
for(var j=0,
k=d.length;j<k;j++){e=d[j];
f=e.getSizeHint();
g=b;
if(g<f.minWidth){g=f.minWidth;
}else if(g>f.maxWidth){g=f.maxWidth;
}h=c;
if(h<f.minHeight){h=f.minHeight;
}else if(h>f.maxHeight){h=f.maxHeight;
}e.renderLayout(0,
0,
g,
h);
}},
_computeSizeHint:function(){var d=this._getLayoutChildren();
var e,
f;
var m=0,
n=0;
for(var j=0,
k=d.length;j<k;j++){e=d[j];
f=e.getSizeHint();
m=Math.max(m,
f.width);
n=Math.max(n,
f.height);
}return {width:m,
height:n};
}}});
})();
(function(){var a="\n",
b="",
c=" &nbsp;",
d="<br>",
e=" ",
f="qx.bom.String";
qx.Class.define(f,
{statics:{TO_CHARCODE:{"quot":34,
"amp":38,
"lt":60,
"gt":62,
"nbsp":160,
"iexcl":161,
"cent":162,
"pound":163,
"curren":164,
"yen":165,
"brvbar":166,
"sect":167,
"uml":168,
"copy":169,
"ordf":170,
"laquo":171,
"not":172,
"shy":173,
"reg":174,
"macr":175,
"deg":176,
"plusmn":177,
"sup2":178,
"sup3":179,
"acute":180,
"micro":181,
"para":182,
"middot":183,
"cedil":184,
"sup1":185,
"ordm":186,
"raquo":187,
"frac14":188,
"frac12":189,
"frac34":190,
"iquest":191,
"Agrave":192,
"Aacute":193,
"Acirc":194,
"Atilde":195,
"Auml":196,
"Aring":197,
"AElig":198,
"Ccedil":199,
"Egrave":200,
"Eacute":201,
"Ecirc":202,
"Euml":203,
"Igrave":204,
"Iacute":205,
"Icirc":206,
"Iuml":207,
"ETH":208,
"Ntilde":209,
"Ograve":210,
"Oacute":211,
"Ocirc":212,
"Otilde":213,
"Ouml":214,
"times":215,
"Oslash":216,
"Ugrave":217,
"Uacute":218,
"Ucirc":219,
"Uuml":220,
"Yacute":221,
"THORN":222,
"szlig":223,
"agrave":224,
"aacute":225,
"acirc":226,
"atilde":227,
"auml":228,
"aring":229,
"aelig":230,
"ccedil":231,
"egrave":232,
"eacute":233,
"ecirc":234,
"euml":235,
"igrave":236,
"iacute":237,
"icirc":238,
"iuml":239,
"eth":240,
"ntilde":241,
"ograve":242,
"oacute":243,
"ocirc":244,
"otilde":245,
"ouml":246,
"divide":247,
"oslash":248,
"ugrave":249,
"uacute":250,
"ucirc":251,
"uuml":252,
"yacute":253,
"thorn":254,
"yuml":255,
"fnof":402,
"Alpha":913,
"Beta":914,
"Gamma":915,
"Delta":916,
"Epsilon":917,
"Zeta":918,
"Eta":919,
"Theta":920,
"Iota":921,
"Kappa":922,
"Lambda":923,
"Mu":924,
"Nu":925,
"Xi":926,
"Omicron":927,
"Pi":928,
"Rho":929,
"Sigma":931,
"Tau":932,
"Upsilon":933,
"Phi":934,
"Chi":935,
"Psi":936,
"Omega":937,
"alpha":945,
"beta":946,
"gamma":947,
"delta":948,
"epsilon":949,
"zeta":950,
"eta":951,
"theta":952,
"iota":953,
"kappa":954,
"lambda":955,
"mu":956,
"nu":957,
"xi":958,
"omicron":959,
"pi":960,
"rho":961,
"sigmaf":962,
"sigma":963,
"tau":964,
"upsilon":965,
"phi":966,
"chi":967,
"psi":968,
"omega":969,
"thetasym":977,
"upsih":978,
"piv":982,
"bull":8226,
"hellip":8230,
"prime":8242,
"Prime":8243,
"oline":8254,
"frasl":8260,
"weierp":8472,
"image":8465,
"real":8476,
"trade":8482,
"alefsym":8501,
"larr":8592,
"uarr":8593,
"rarr":8594,
"darr":8595,
"harr":8596,
"crarr":8629,
"lArr":8656,
"uArr":8657,
"rArr":8658,
"dArr":8659,
"hArr":8660,
"forall":8704,
"part":8706,
"exist":8707,
"empty":8709,
"nabla":8711,
"isin":8712,
"notin":8713,
"ni":8715,
"prod":8719,
"sum":8721,
"minus":8722,
"lowast":8727,
"radic":8730,
"prop":8733,
"infin":8734,
"ang":8736,
"and":8743,
"or":8744,
"cap":8745,
"cup":8746,
"int":8747,
"there4":8756,
"sim":8764,
"cong":8773,
"asymp":8776,
"ne":8800,
"equiv":8801,
"le":8804,
"ge":8805,
"sub":8834,
"sup":8835,
"sube":8838,
"supe":8839,
"oplus":8853,
"otimes":8855,
"perp":8869,
"sdot":8901,
"lceil":8968,
"rceil":8969,
"lfloor":8970,
"rfloor":8971,
"lang":9001,
"rang":9002,
"loz":9674,
"spades":9824,
"clubs":9827,
"hearts":9829,
"diams":9830,
"OElig":338,
"oelig":339,
"Scaron":352,
"scaron":353,
"Yuml":376,
"circ":710,
"tilde":732,
"ensp":8194,
"emsp":8195,
"thinsp":8201,
"zwnj":8204,
"zwj":8205,
"lrm":8206,
"rlm":8207,
"ndash":8211,
"mdash":8212,
"lsquo":8216,
"rsquo":8217,
"sbquo":8218,
"ldquo":8220,
"rdquo":8221,
"bdquo":8222,
"dagger":8224,
"Dagger":8225,
"permil":8240,
"lsaquo":8249,
"rsaquo":8250,
"euro":8364},
escape:function(g){return qx.util.StringEscape.escape(g,
qx.bom.String.FROM_CHARCODE);
},
unescape:function(g){return qx.util.StringEscape.unescape(g,
qx.bom.String.TO_CHARCODE);
},
fromText:function(g){return qx.bom.String.escape(g).replace(/(  |\n)/g,
function(h){var i={"  ":c,
"\n":d};
return i[h]||h;
});
},
toText:function(g){return qx.bom.String.unescape(g.replace(/\s+|<([^>])+>/gi,
function(h){if(/\s+/.test(h)){return e;
}else if(/^<BR|^<br/gi.test(h)){return a;
}else{return b;
}}));
}},
defer:function(j,
k,
l){j.FROM_CHARCODE=qx.lang.Object.invert(j.TO_CHARCODE);
}});
})();
(function(){var a=";",
b="&",
c="",
d="&#",
e='X',
f='#',
g="qx.client",
h="qx.util.StringEscape";
qx.Bootstrap.define(h,
{statics:{escape:qx.core.Variant.select(g,
{"mshtml":function(j,
k){var m,
n=[];
for(var o=0,
p=j.length;o<p;o++){var q=j.charAt(o);
var r=q.charCodeAt(0);
if(k[r]){m=b+k[r]+a;
}else{if(r>0x7F){m=d+r+a;
}else{m=q;
}}n[n.length]=m;
}return n.join(c);
},
"default":function(j,
k){var m,
n=c;
for(var o=0,
p=j.length;o<p;o++){var q=j.charAt(o);
var r=q.charCodeAt(0);
if(k[r]){m=b+k[r]+a;
}else{if(r>0x7F){m=d+r+a;
}else{m=q;
}}n+=m;
}return n;
}}),
unescape:function(j,
s){return j.replace(/&[#\w]+;/gi,
function(m){var q=m;
var m=m.substring(1,
m.length-1);
var r=s[m];
if(r){q=String.fromCharCode(r);
}else{if(m.charAt(0)==f){if(m.charAt(1).toUpperCase()==e){r=m.substring(2);
if(r.match(/^[0-9A-Fa-f]+$/gi)){q=String.fromCharCode(parseInt(r,
16));
}}else{r=m.substring(1);
if(r.match(/^\d+$/gi)){q=String.fromCharCode(parseInt(r,
10));
}}}}return q;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,
{members:{format:function(b){},
parse:function(c){}}});
})();
(function(){var a="",
b="Number",
c="-",
d="0",
e="String",
f='(',
g="g",
h="Boolean",
i="$",
j="NaN",
k='([0-9]{1,3}(?:',
l='{0,1}[0-9]{3}){0,})',
m="qx.util.format.NumberFormat",
n='\\d+){0,1}',
o="^",
p=".",
q="-Infinity",
r="Infinity",
s='([-+]){0,1}';
qx.Class.define(m,
{extend:qx.core.Object,
implement:qx.util.format.IFormat,
construct:function(t){arguments.callee.base.call(this);
this._locale=t;
},
statics:{getIntegerInstance:function(){var u=qx.util.format.NumberFormat;
if(u._integerInstance==null){u._integerInstance=new u();
u._integerInstance.setMaximumFractionDigits(0);
}return u._integerInstance;
},
getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},
properties:{minimumIntegerDigits:{check:b,
init:0},
maximumIntegerDigits:{check:b,
nullable:true},
minimumFractionDigits:{check:b,
init:0},
maximumFractionDigits:{check:b,
nullable:true},
groupingUsed:{check:h,
init:true},
prefix:{check:e,
init:a},
postfix:{check:e,
init:a}},
members:{format:function(v){switch(v){case Infinity:return r;
case -Infinity:return q;
case NaN:return j;
}var w=(v<0);
if(w){v=-v;
}
if(this.getMaximumFractionDigits()!=null){var x=Math.pow(10,
this.getMaximumFractionDigits());
v=Math.round(v*x)/x;
}var y=String(Math.floor(v)).length;
var z=a+v;
var A=z.substring(0,
y);
while(A.length<this.getMinimumIntegerDigits()){A=d+A;
}
if(this.getMaximumIntegerDigits()!=null&&A.length>this.getMaximumIntegerDigits()){A=A.substring(A.length-this.getMaximumIntegerDigits());
}var B=z.substring(y+1);
while(B.length<this.getMinimumFractionDigits()){B+=d;
}
if(this.getMaximumFractionDigits()!=null&&B.length>this.getMaximumFractionDigits()){B=B.substring(0,
this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var C=A;
A=a;
var D;
for(D=C.length;D>3;D-=3){A=a+qx.locale.Number.getGroupSeparator(this._locale)+C.substring(D-3,
D)+A;
}A=C.substring(0,
D)+A;
}var E=this.getPrefix()?this.getPrefix():a;
var F=this.getPostfix()?this.getPostfix():a;
var G=E+(w?c:a)+A;
if(B.length>0){G+=a+qx.locale.Number.getDecimalSeparator(this._locale)+B;
}G+=F;
return G;
},
parse:function(G){var H=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this._locale)+a);
var I=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this._locale)+a);
var J=new RegExp(o+qx.lang.String.escapeRegexpChars(this.getPrefix())+s+k+H+l+f+I+n+qx.lang.String.escapeRegexpChars(this.getPostfix())+i);
var K=J.exec(G);
if(K==null){throw new Error("Number string '"+G+"' does not match the number format");
}var w=(K[1]==c);
var A=K[2];
var B=K[3];
A=A.replace(new RegExp(H,
g),
a);
var L=(w?c:a)+A;
if(B!=null&&B.length!=0){B=B.replace(new RegExp(I),
a);
L+=p+B;
}return parseFloat(L);
}}});
})();
(function(){var a="cldr_number_decimal_separator",
b="cldr_number_percent_format",
c="qx.locale.Number",
d="cldr_number_group_separator";
qx.Class.define(c,
{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().translate(a,
[],
e);
},
getGroupSeparator:function(e){return qx.locale.Manager.getInstance().translate(d,
[],
e);
},
getPercentFormat:function(e){return qx.locale.Manager.getInstance().translate(b,
[],
e);
}}});
})();
(function(){var a="(\\d\\d?)",
b="",
c="(",
d=")",
e="|",
f="abbreviated",
g="wide",
h="wildcard",
j="default",
k="literal",
l="'",
m="hour",
n="(\\d\\d?\\d?)",
o="ms",
p="-",
q="quoted_literal",
r='a',
s="+",
t="HHmmss",
u="long",
v="HH:mm:ss",
w='z',
x="sec",
y="day",
z="narrow",
A='Z',
B="min",
C=" ",
D="SSS",
E="h",
F="SS",
G="Z",
H="00",
I="EEEE",
J="^",
K='y',
L="(\\d\\d(\\d\\d)?)",
M="(\\d\\d)",
N="K",
O="((\\+|\\-)\\d\\d:?\\d\\d)",
P="a",
Q="GMT",
R="S",
S="dd",
T="qx.util.format.DateFormat",
U="__formatTree",
V="H",
W="HH",
X="EE",
Y="_parseRules",
ba="mm",
bb='h',
bc='s',
bd='A',
be="KK",
bf="kk",
bg="ss",
bh='H',
bi='S',
bj="_parseFeed",
bk="0",
bl="MMMM",
bm="d",
bn="([a-zA-Z]+)",
bo='k',
bp="m",
bq='D',
br='K',
bs="_format",
bt="hh",
bu="_locale",
bv="MM",
bw="yy",
bx="short",
by='d',
bz="unkown",
bA='m',
bB=":00",
bC="k",
bD='M',
bE="MMM",
bF="s",
bG="M",
bH='w',
bI="EEE",
bJ="$",
bK="?",
bL='E',
bM="z",
bN="yyyy";
qx.Class.define(T,
{extend:qx.core.Object,
implement:qx.util.format.IFormat,
construct:function(bO,
bP){arguments.callee.base.call(this);
if(!bP){this._locale=qx.locale.Manager.getInstance().getLocale();
}else{this._locale=bP;
}
if(bO!=null){this._format=bO.toString();
}else{this._format=qx.locale.Date.getDateFormat(u,
this._locale)+C+qx.locale.Date.getDateTimeFormat(t,
v,
this._locale);
}},
statics:{getDateTimeInstance:function(){var bQ=qx.util.format.DateFormat;
var bO=qx.locale.Date.getDateFormat(u)+C+qx.locale.Date.getDateTimeFormat(t,
v);
if(bQ._dateInstance==null||bQ._format!=bO){bQ._dateTimeInstance=new bQ();
}return bQ._dateTimeInstance;
},
getDateInstance:function(){var bQ=qx.util.format.DateFormat;
var bO=qx.locale.Date.getDateFormat(bx)+b;
if(bQ._dateInstance==null||bQ._format!=bO){bQ._dateInstance=new bQ(bO);
}return bQ._dateInstance;
},
ASSUME_YEAR_2000_THRESHOLD:30,
LOGGING_DATE_TIME_FORMAT:"yyyy-MM-dd HH:mm:ss",
AM_MARKER:"am",
PM_MARKER:"pm",
MEDIUM_TIMEZONE_NAMES:["GMT"],
FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},
members:{__dN:function(bR,
bS){var bT=b+bR;
while(bT.length<bS){bT=bk+bT;
}return bT;
},
__dO:function(bU){var bV=new Date(bU.getTime());
var bW=bV.getDate();
while(bV.getMonth()!=0){bV.setDate(-1);
bW+=bV.getDate()+1;
}return bW;
},
__dP:function(bU){return new Date(bU.getTime()+(3-((bU.getDay()+6)%7))*86400000);
},
__dQ:function(bU){var bX=this.__dP(bU);
var bY=bX.getFullYear();
var ca=this.__dP(new Date(bY,
0,
4));
return Math.floor(1.5+(bX.getTime()-ca.getTime())/86400000/7);
},
format:function(bU){var bQ=qx.util.format.DateFormat;
var bP=this._locale;
var cb=bU.getFullYear();
var cc=bU.getMonth();
var cd=bU.getDate();
var ce=bU.getDay();
var cf=bU.getHours();
var cg=bU.getMinutes();
var ch=bU.getSeconds();
var ci=bU.getMilliseconds();
var cj=bU.getTimezoneOffset()/60;
this.__dR();
var ck=b;
for(var cl=0;cl<this.__formatTree.length;cl++){var cm=this.__formatTree[cl];
if(cm.type==k){ck+=cm.text;
}else{var cn=cm.character;
var co=cm.size;
var cp=bK;
switch(cn){case K:if(co==2){cp=this.__dN(cb%100,
2);
}else if(co==4){cp=cb;
}break;
case bq:cp=this.__dN(this.__dO(bU),
co);
break;
case by:cp=this.__dN(cd,
co);
break;
case bH:cp=this.__dN(this.__dQ(bU),
co);
break;
case bL:if(co==2){cp=qx.locale.Date.getDayName(z,
ce,
bP);
}else if(co==3){cp=qx.locale.Date.getDayName(f,
ce,
bP);
}else if(co==4){cp=qx.locale.Date.getDayName(g,
ce,
bP);
}break;
case bD:if(co==1||co==2){cp=this.__dN(cc+1,
co);
}else if(co==3){cp=qx.locale.Date.getMonthName(f,
cc,
bP);
}else if(co==4){cp=qx.locale.Date.getMonthName(g,
cc,
bP);
}break;
case r:cp=(cf<12)?qx.locale.Date.getAmMarker(bP):qx.locale.Date.getPmMarker(bP);
break;
case bh:cp=this.__dN(cf,
co);
break;
case bo:cp=this.__dN((cf==0)?24:cf,
co);
break;
case br:cp=this.__dN(cf%12,
co);
break;
case bb:cp=this.__dN(((cf%12)==0)?12:(cf%12),
co);
break;
case bA:cp=this.__dN(cg,
co);
break;
case bc:cp=this.__dN(ch,
co);
break;
case bi:cp=this.__dN(ci,
co);
break;
case w:if(co==1){cp=Q+((cj<0)?p:s)+this.__dN(cj)+bB;
}else if(co==2){cp=bQ.MEDIUM_TIMEZONE_NAMES[cj];
}else if(co==3){cp=bQ.FULL_TIMEZONE_NAMES[cj];
}break;
case A:cp=((cj<0)?p:s)+this.__dN(cj,
2)+H;
}ck+=cp;
}}return ck;
},
parse:function(cq){this.__dS();
var cr=this._parseFeed.regex.exec(cq);
if(cr==null){throw new Error("Date string '"+cq+"' does not match the date format: "+this._format);
}var cs={year:1970,
month:0,
day:1,
hour:0,
ispm:false,
min:0,
sec:0,
ms:0};
var ct=1;
for(var cl=0;cl<this._parseFeed.usedRules.length;cl++){var cu=this._parseFeed.usedRules[cl];
var cv=cr[ct];
if(cu.field!=null){cs[cu.field]=parseInt(cv,
10);
}else{cu.manipulator(cs,
cv);
}ct+=(cu.groups==null)?1:cu.groups;
}var bU=new Date(cs.year,
cs.month,
cs.day,
(cs.ispm)?(cs.hour+12):cs.hour,
cs.min,
cs.sec,
cs.ms);
if(cs.month!=bU.getMonth()||cs.year!=bU.getFullYear()){throw new Error("Error parsing date '"+cq+"': the value for day or month is too large");
}return bU;
},
__dR:function(){if(this.__formatTree!=null){return;
}this.__formatTree=[];
var cw;
var cx=0;
var cy=b;
var bO=this._format;
var cz=j;
var cl=0;
while(cl<bO.length){var cA=bO.charAt(cl);
switch(cz){case q:if(cA==l){if(cl+1>=bO.length){cl++;
break;
}var cB=bO.charAt(cl+1);
if(cB==l){cy+=cA;
cl++;
}else{cl++;
cz=bz;
}}else{cy+=cA;
cl++;
}break;
case h:if(cA==cw){cx++;
cl++;
}else{this.__formatTree.push({type:h,
character:cw,
size:cx});
cw=null;
cx=0;
cz=j;
}break;
default:if((cA>=r&&cA<=w)||(cA>=bd&&cA<=A)){cw=cA;
cz=h;
}else if(cA==l){if(cl+1>=bO.length){cy+=cA;
cl++;
break;
}var cB=bO.charAt(cl+1);
if(cB==l){cy+=cA;
cl++;
}cl++;
cz=q;
}else{cz=j;
}
if(cz!=j){if(cy.length>0){this.__formatTree.push({type:k,
text:cy});
cy=b;
}}else{cy+=cA;
cl++;
}break;
}}if(cw!=null){this.__formatTree.push({type:h,
character:cw,
size:cx});
}else if(cy.length>0){this.__formatTree.push({type:k,
text:cy});
}},
__dS:function(){if(this._parseFeed!=null){return ;
}var bO=this._format;
this.__dT();
this.__dR();
var cC=[];
var cD=J;
for(var cE=0;cE<this.__formatTree.length;cE++){var cm=this.__formatTree[cE];
if(cm.type==k){cD+=qx.lang.String.escapeRegexpChars(cm.text);
}else{var cn=cm.character;
var co=cm.size;
var cF;
for(var cG=0;cG<this._parseRules.length;cG++){var cu=this._parseRules[cG];
if(cn==cu.pattern.charAt(0)&&co==cu.pattern.length){cF=cu;
break;
}}if(cF==null){var cH=b;
for(var cl=0;cl<co;cl++){cH+=cn;
}throw new Error("Malformed date format: "+bO+". Wildcard "+cH+" is not supported");
}else{cC.push(cF);
cD+=cF.regex;
}}}cD+=bJ;
var cI;
try{cI=new RegExp(cD);
}catch(exc){throw new Error("Malformed date format: "+bO);
}this._parseFeed={regex:cI,
"usedRules":cC,
pattern:cD};
},
__dT:function(){var bQ=qx.util.format.DateFormat;
if(this._parseRules!=null){return ;
}this._parseRules=[];
var cJ=function(cs,
cv){cv=parseInt(cv,
10);
if(cv<bQ.ASSUME_YEAR_2000_THRESHOLD){cv+=2000;
}else if(cv<100){cv+=1900;
}cs.year=cv;
};
var cK=function(cs,
cv){cs.month=parseInt(cv,
10)-1;
};
var cL=function(cs,
cv){cs.ispm=(cv==bQ.PM_MARKER);
};
var cM=function(cs,
cv){cs.hour=parseInt(cv,
10)%24;
};
var cN=function(cs,
cv){cs.hour=parseInt(cv,
10)%12;
};
var cO=function(cs,
cv){return;
};
var cP=qx.locale.Date.getMonthNames(f,
this._locale);
for(var cl=0;cl<cP.length;cl++){cP[cl]=qx.lang.String.escapeRegexpChars(cP[cl].toString());
}var cQ=function(cs,
cv){cv=qx.lang.String.escapeRegexpChars(cv);
cs.month=cP.indexOf(cv);
};
var cR=qx.locale.Date.getMonthNames(g,
this._locale);
for(var cl=0;cl<cR.length;cl++){cR[cl]=qx.lang.String.escapeRegexpChars(cR[cl].toString());
}var cS=function(cs,
cv){cv=qx.lang.String.escapeRegexpChars(cv);
cs.month=cR.indexOf(cv);
};
var cT=qx.locale.Date.getDayNames(z,
this._locale);
for(var cl=0;cl<cT.length;cl++){cT[cl]=qx.lang.String.escapeRegexpChars(cT[cl].toString());
}var cU=function(cs,
cv){cv=qx.lang.String.escapeRegexpChars(cv);
cs.month=cT.indexOf(cv);
};
var cV=qx.locale.Date.getDayNames(f,
this._locale);
for(var cl=0;cl<cV.length;cl++){cV[cl]=qx.lang.String.escapeRegexpChars(cV[cl].toString());
}var cW=function(cs,
cv){cv=qx.lang.String.escapeRegexpChars(cv);
cs.month=cV.indexOf(cv);
};
var cX=qx.locale.Date.getDayNames(g,
this._locale);
for(var cl=0;cl<cX.length;cl++){cX[cl]=qx.lang.String.escapeRegexpChars(cX[cl].toString());
}var cY=function(cs,
cv){cv=qx.lang.String.escapeRegexpChars(cv);
cs.month=cX.indexOf(cv);
};
this._parseRules.push({pattern:bN,
regex:L,
groups:2,
manipulator:cJ});
this._parseRules.push({pattern:bw,
regex:M,
manipulator:cJ});
this._parseRules.push({pattern:bG,
regex:a,
manipulator:cK});
this._parseRules.push({pattern:bv,
regex:a,
manipulator:cK});
this._parseRules.push({pattern:bE,
regex:c+cP.join(e)+d,
manipulator:cQ});
this._parseRules.push({pattern:bl,
regex:c+cR.join(e)+d,
manipulator:cS});
this._parseRules.push({pattern:S,
regex:a,
field:y});
this._parseRules.push({pattern:bm,
regex:a,
field:y});
this._parseRules.push({pattern:X,
regex:c+cT.join(e)+d,
manipulator:cU});
this._parseRules.push({pattern:bI,
regex:c+cV.join(e)+d,
manipulator:cW});
this._parseRules.push({pattern:I,
regex:c+cX.join(e)+d,
manipulator:cY});
this._parseRules.push({pattern:P,
regex:c+bQ.AM_MARKER+e+bQ.PM_MARKER+d,
manipulator:cL});
this._parseRules.push({pattern:W,
regex:a,
field:m});
this._parseRules.push({pattern:V,
regex:a,
field:m});
this._parseRules.push({pattern:bf,
regex:a,
manipulator:cM});
this._parseRules.push({pattern:bC,
regex:a,
manipulator:cM});
this._parseRules.push({pattern:be,
regex:a,
field:m});
this._parseRules.push({pattern:N,
regex:a,
field:m});
this._parseRules.push({pattern:bt,
regex:a,
manipulator:cN});
this._parseRules.push({pattern:E,
regex:a,
manipulator:cN});
this._parseRules.push({pattern:ba,
regex:a,
field:B});
this._parseRules.push({pattern:bp,
regex:a,
field:B});
this._parseRules.push({pattern:bg,
regex:a,
field:x});
this._parseRules.push({pattern:bF,
regex:a,
field:x});
this._parseRules.push({pattern:D,
regex:n,
field:o});
this._parseRules.push({pattern:F,
regex:n,
field:o});
this._parseRules.push({pattern:R,
regex:n,
field:o});
this._parseRules.push({pattern:G,
regex:O,
manipulator:cO});
this._parseRules.push({pattern:bM,
regex:bn,
manipulator:cO});
}},
destruct:function(){this._disposeFields(bs,
bu,
U,
bj,
Y);
}});
})();
(function(){var a="_",
b="thu",
c="sat",
d="cldr_day_",
e="cldr_month_",
f="wed",
g="fri",
h="tue",
j="mon",
k="sun",
l="short",
m="HH:mm",
n="HHmmsszz",
o="HHmm",
p="HHmmss",
q="cldr_date_format_",
r="HH:mm:ss zz",
s="full",
t="cldr_pm",
u="long",
v="medium",
w="cldr_am",
x="qx.locale.Date",
y="cldr_date_time_format_",
z="cldr_time_format_",
A="HH:mm:ss";
qx.Class.define(x,
{statics:{__dU:qx.locale.Manager.getInstance(),
getAmMarker:function(B){return this.__dU.translate(w,
[],
B);
},
getPmMarker:function(B){return this.__dU.translate(t,
[],
B);
},
getDayNames:function(C,
B){{};
var D=[k,
j,
h,
f,
b,
g,
c];
var E=[];
for(var F=0;F<D.length;F++){var G=d+C+a+D[F];
E.push(this.__dU.translate(G,
[],
B));
}return E;
},
getDayName:function(C,
H,
B){{};
var D=[k,
j,
h,
f,
b,
g,
c];
var G=d+C+a+D[H];
return this.__dU.translate(G,
[],
B);
},
getMonthNames:function(C,
B){{};
var E=[];
for(var F=0;F<12;F++){var G=e+C+a+(F+1);
E.push(this.__dU.translate(G,
[],
B));
}return E;
},
getMonthName:function(C,
I,
B){{};
var G=e+C+a+(I+1);
return this.__dU.translate(G,
[],
B);
},
getDateFormat:function(J,
B){{};
var G=q+J;
return this.__dU.translate(G,
[],
B);
},
getDateTimeFormat:function(K,
L,
B){var G=y+K;
var M=this.__dU.translate(G,
[],
B);
if(M==G){M=L;
}return M;
},
getTimeFormat:function(J,
B){{};
var G=z+J;
var M=this.__dU.translate(G,
[],
B);
if(M!=G){return M;
}
switch(J){case l:case v:return qx.locale.Date.getDateTimeFormat(o,
m);
case u:return qx.locale.Date.getDateTimeFormat(p,
A);
case s:return qx.locale.Date.getDateTimeFormat(n,
r);
default:throw new Error("This case should never happen.");
}},
getWeekStart:function(B){var N={"MV":5,
"AE":6,
"AF":6,
"BH":6,
"DJ":6,
"DZ":6,
"EG":6,
"ER":6,
"ET":6,
"IQ":6,
"IR":6,
"JO":6,
"KE":6,
"KW":6,
"LB":6,
"LY":6,
"MA":6,
"OM":6,
"QA":6,
"SA":6,
"SD":6,
"SO":6,
"TN":6,
"YE":6,
"AS":0,
"AU":0,
"AZ":0,
"BW":0,
"CA":0,
"CN":0,
"FO":0,
"GE":0,
"GL":0,
"GU":0,
"HK":0,
"IE":0,
"IL":0,
"IS":0,
"JM":0,
"JP":0,
"KG":0,
"KR":0,
"LA":0,
"MH":0,
"MN":0,
"MO":0,
"MP":0,
"MT":0,
"NZ":0,
"PH":0,
"PK":0,
"SG":0,
"TH":0,
"TT":0,
"TW":0,
"UM":0,
"US":0,
"UZ":0,
"VI":0,
"ZA":0,
"ZW":0,
"MW":0,
"NG":0,
"TJ":0};
var O=qx.locale.Date._getTerritory(B);
return N[O]!=null?N[O]:1;
},
getWeekendStart:function(B){var P={"EG":5,
"IL":5,
"SY":5,
"IN":0,
"AE":4,
"BH":4,
"DZ":4,
"IQ":4,
"JO":4,
"KW":4,
"LB":4,
"LY":4,
"MA":4,
"OM":4,
"QA":4,
"SA":4,
"SD":4,
"TN":4,
"YE":4};
var O=qx.locale.Date._getTerritory(B);
return P[O]!=null?P[O]:6;
},
getWeekendEnd:function(B){var Q={"AE":5,
"BH":5,
"DZ":5,
"IQ":5,
"JO":5,
"KW":5,
"LB":5,
"LY":5,
"MA":5,
"OM":5,
"QA":5,
"SA":5,
"SD":5,
"TN":5,
"YE":5,
"AF":5,
"IR":5,
"EG":6,
"IL":6,
"SY":6};
var O=qx.locale.Date._getTerritory(B);
return Q[O]!=null?Q[O]:0;
},
isWeekend:function(H,
B){var P=qx.locale.Date.getWeekendStart(B);
var Q=qx.locale.Date.getWeekendEnd(B);
if(Q>P){return ((H>=P)&&(H<=Q));
}else{return ((H>=P)||(H<=Q));
}},
_getTerritory:function(B){if(B){var O=B.split(a)[1]||B;
}else{O=this.__dU.getTerritory()||this.__dU.getLanguage();
}return O.toUpperCase();
}}});
})();
(function(){var a="none",
b="color",
c="qx.event.type.Data",
d="readonly",
f="changeValue",
g="readOnly",
h="text",
i="_applyTextAlign",
j="Boolean",
k="A",
l="string",
m="change",
n="textAlign",
o="center",
p="disabled",
q="_applyReadOnly",
r="qx.ui.form.AbstractField",
s="transparent",
t="spellcheck",
u="false",
v="right",
w="abstract",
x="changeName",
y="overflow",
z="String",
A="hidden",
B="left";
qx.Class.define(r,
{extend:qx.ui.core.Widget,
implement:qx.ui.form.IFormElement,
type:w,
construct:function(C){arguments.callee.base.call(this);
if(C!=null){this.setValue(C);
}this._contentElement.addListener(m,
this._onChangeContent,
this);
},
events:{"input":c,
"changeValue":c},
properties:{name:{check:z,
nullable:true,
event:x},
textAlign:{check:[B,
o,
v],
nullable:true,
themeable:true,
apply:i},
readOnly:{check:j,
apply:q,
init:false},
selectable:{refine:true,
init:true},
focusable:{refine:true,
init:true}},
members:{getFocusElement:function(){return this._contentElement;
},
_createInputElement:function(){var D=new qx.html.Input(h);
D.setStyle(y,
A);
return D;
},
_createContentElement:function(){var E=this._createInputElement();
E.setAttribute(t,
u);
E.setStyles({"border":a,
"padding":0,
"margin":0,
"background":s,
"outline":a,
"resize":a,
"appearance":a});
return E;
},
_applyEnabled:function(C,
F){arguments.callee.base.call(this,
C,
F);
this._contentElement.setAttribute(p,
C===false);
},
_textSize:{width:16,
height:16},
_getContentHint:function(){return {width:this._textSize.width*10,
height:this._textSize.height||16};
},
_applyFont:function(C,
F){var G;
if(C){var H=qx.theme.manager.Font.getInstance().resolve(C);
G=H.getStyles();
}else{G=qx.bom.Font.getDefaultStyles();
}this._contentElement.setStyles(G);
if(C){this._textSize=qx.bom.Label.getTextSize(k,
G);
}else{delete this._textSize;
}qx.ui.core.queue.Layout.add(this);
},
_applyTextColor:function(C,
F){if(C){this.getContentElement().setStyle(b,
qx.theme.manager.Color.getInstance().resolve(C));
}else{this.getContentElement().removeStyle(b);
}},
tabFocus:function(){arguments.callee.base.call(this);
this.selectAll();
},
setValue:function(C){if(typeof C===l||C instanceof String){var I=this._contentElement;
if(I.getValue()!=C){I.setValue(C);
this.fireNonBubblingEvent(f,
qx.event.type.Data,
[C]);
}return C;
}throw new Error("Invalid value type: "+C);
},
getValue:function(){return this._contentElement.getValue();
},
_onChangeContent:function(J){this.fireNonBubblingEvent(f,
qx.event.type.Data,
[J.getData()]);
},
getSelection:function(){return this.getContentElement().getSelection();
},
getSelectionLength:function(){return this.getContentElement().getSelectionLength();
},
setSelection:function(K,
L){this.getContentElement().setSelection(K,
L);
},
clearSelection:function(){this.getContentElement().clearSelection();
},
selectAll:function(){this.setSelection(0);
},
_applyTextAlign:function(C,
F){this._contentElement.setStyle(n,
C);
},
_applyReadOnly:function(C,
F){this._contentElement.setAttribute(g,
C);
if(C){this.addState(d);
}else{this.removeState(d);
}}}});
})();
(function(){var a="input",
b="text",
c="qx.ui.form.TextField",
d="",
f="_applyMaxLength",
g="textfield",
h="Integer",
i="maxLength",
j="qx.event.type.Data";
qx.Class.define(c,
{extend:qx.ui.form.AbstractField,
properties:{maxLength:{check:h,
apply:f,
nullable:true},
appearance:{refine:true,
init:g},
allowGrowY:{refine:true,
init:false},
allowShrinkY:{refine:true,
init:false}},
events:{"input":j},
members:{_createInputElement:function(){var k=new qx.html.Input(b);
k.addListener(a,
this._onHtmlInput,
this);
return k;
},
_onHtmlInput:function(l){this.fireDataEvent(a,
l.getData());
},
_applyMaxLength:function(m,
n){this._contentElement.setAttribute(i,
m==null?d:m);
}}});
})();
(function(){var a="wrap",
b="value",
c="textarea",
d="",
e="input",
f="qx.html.Input",
g="select";
qx.Class.define(f,
{extend:qx.html.Element,
construct:function(h){arguments.callee.base.call(this);
this.__type=h;
if(h===g||h===c){this._nodeName=h;
}else{this._nodeName=e;
}},
members:{_createDomElement:function(){return qx.bom.Input.create(this.__type);
},
_applyProperty:function(i,
j){arguments.callee.base.call(this,
i,
j);
if(i===b){qx.bom.Input.setValue(this._element,
j);
}else if(i===a){qx.bom.Input.setWrap(this._element,
j);
}},
setValue:function(j){if(this._element){if(this._element.value!=j){qx.bom.Input.setValue(this._element,
j);
}}else{this._setProperty(b,
j);
}return this;
},
getValue:function(){if(this._element){return qx.bom.Input.getValue(this._element);
}return this._getProperty(b)||d;
},
setWrap:function(k){if(this.__type===c){this._setProperty(a,
k);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},
getWrap:function(){if(this.__type===c){return this._getProperty(a);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var a="change",
b="input",
c="checkbox",
d="radio",
f="textarea",
g="text",
h="qx.client",
j="propertychange",
k="select-multiple",
m="checked",
n="value",
p="select",
q="qx.event.handler.Input";
qx.Class.define(q,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,
this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,
this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,
this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,
this);
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{input:1,
change:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:false},
members:{canHandleEvent:function(r,
s){var t=r.tagName.toLowerCase();
if(s===b&&(t===b||t===f)){return true;
}
if(s===a&&(t===b||t===f||t===p)){return true;
}return false;
},
registerEvent:qx.core.Variant.select(h,
{"mshtml":function(r,
s,
u){if(!r.__inputHandlerAttached){var v=r.tagName.toLowerCase();
var s=r.type;
if(s===g||v===f||s===c||s===d){qx.bom.Event.addNativeListener(r,
j,
this._onPropertyWrapper);
}
if(s!==c&&s!==d){qx.bom.Event.addNativeListener(r,
a,
this._onChangeValueWrapper);
}r.__inputHandlerAttached=true;
}},
"default":function(r,
s,
u){if(s===b){qx.bom.Event.addNativeListener(r,
b,
this._onInputWrapper);
}else if(s===a){if(r.type===d||r.type===c){qx.bom.Event.addNativeListener(r,
a,
this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(r,
a,
this._onChangeValueWrapper);
}}}}),
unregisterEvent:qx.core.Variant.select(h,
{"mshtml":function(r,
s){if(!r.__inputHandlerAttached){var v=r.tagName.toLowerCase();
var s=r.type;
if(s===g||v===f||s===c||s===d){qx.bom.Event.removeNativeListener(r,
j,
this._onPropertyWrapper);
}
if(s!==c&&s!==d){qx.bom.Event.removeNativeListener(r,
a,
this._onChangeValueWrapper);
}delete r.__inputHandlerAttached;
}},
"default":function(r,
s){if(s===b){qx.bom.Event.removeNativeListener(r,
b,
this._onInputWrapper);
}else if(s===a){if(r.type===d||r.type===c){qx.bom.Event.removeNativeListener(r,
a,
this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(r,
a,
this._onChangeValueWrapper);
}}}}),
_onInput:function(w){var r=w.target;
qx.event.Registration.fireEvent(r,
b,
qx.event.type.Data,
[r.value]);
},
_onChangeValue:function(w){var r=w.target||w.srcElement;
var x=r.value;
if(r.type===k){var x=[];
for(var y=0,
z=r.options,
A=z.length;y<A;y++){if(z[y].selected){x.push(z[y].value);
}}}qx.event.Registration.fireEvent(r,
a,
qx.event.type.Data,
[x]);
},
_onChangeChecked:function(w){var r=w.target;
if(r.type===d){if(r.checked){qx.event.Registration.fireEvent(r,
a,
qx.event.type.Data,
[r.value]);
}}else{qx.event.Registration.fireEvent(r,
a,
qx.event.type.Data,
[r.checked]);
}},
_onProperty:qx.core.Variant.select(h,
{"mshtml":function(w){var r=w.target||w.srcElement;
var B=w.propertyName;
if(B===n&&(r.type===g||r.tagName.toLowerCase()===f)){if(!r.__inValueSet){qx.event.Registration.fireEvent(r,
b,
qx.event.type.Data,
[r.value]);
}}else if(B===m){if(r.type===c){qx.event.Registration.fireEvent(r,
a,
qx.event.type.Data,
[r.checked]);
}else if(r.checked){qx.event.Registration.fireEvent(r,
a,
qx.event.type.Data,
[r.value]);
}}},
"default":function(){}})},
defer:function(C){qx.event.Registration.addHandler(C);
}});
})();
(function(){var a="soft",
b="qx.client",
c="off",
d="",
e="input",
f="nowrap",
g="select",
h="qx.bom.Input",
i="normal",
j="textarea",
k="auto",
l='wrap';
qx.Class.define(h,
{statics:{__dV:{text:1,
textarea:1,
select:1,
checkbox:1,
radio:1,
password:1,
hidden:1,
submit:1,
image:1,
file:1,
search:1,
reset:1,
button:1},
create:function(m,
n,
o){{};
var n=n?qx.lang.Object.copy(n):{};
var p;
if(m===j||m===g){p=m;
}else{p=e;
n.type=m;
}return qx.bom.Element.create(p,
n,
o);
},
setValue:qx.core.Variant.select(b,
{"mshtml":function(q,
r){q.__inValueSet=true;
q.value=r;
q.__inValueSet=null;
},
"default":function(q,
r){q.value=r;
}}),
getValue:function(q){return q.value;
},
setWrap:qx.core.Variant.select(b,
{"mshtml":function(q,
s){q.wrap=s?a:c;
},
"gecko":function(q,
s){var t=s?a:c;
var u=s?d:k;
q.setAttribute(l,
t);
q.style.overflow=u;
},
"default":function(q,
s){q.style.whiteSpace=s?i:f;
}})}});
})();
(function(){var a="",
b="px;",
c="Number",
d='</div>',
e='" ',
f='<div>',
g="</div>",
h="div",
j="_paneScroller",
k="overflow: hidden;",
l='style="',
m="_applyMaxCacheLines",
n="qx.ui.table.pane.Pane",
o="_applyVisibleRowCount",
p='>',
q="line-height: ",
r="'>",
s='class="',
t="width: ",
u="px; width:",
v='<div ',
w=";position:relative;height:",
z="_applyFirstVisibleRow",
A="<div style='",
B="_tableContainer";
qx.Class.define(n,
{extend:qx.ui.core.Widget,
construct:function(C){arguments.callee.base.call(this);
this._paneScroller=C;
this._lastColCount=0;
this._lastRowCount=0;
},
properties:{firstVisibleRow:{check:c,
init:0,
apply:z},
visibleRowCount:{check:c,
init:0,
apply:o},
maxCacheLines:{check:c,
init:1000,
apply:m},
allowGrowX:{refine:true,
init:false},
allowShrinkX:{refine:true,
init:false},
allowGrowY:{refine:true,
init:false},
allowShrinkY:{refine:true,
init:false}},
members:{_applyFirstVisibleRow:function(D,
E){this._updateContent(false,
D-E);
},
_applyVisibleRowCount:function(D,
E){this._updateContent();
},
getPaneScroller:function(){return this._paneScroller;
},
getTable:function(){return this._paneScroller.getTable();
},
setFocusedCell:function(F,
G,
H){if(F!=this._focusedCol||G!=this._focusedRow){var I=this._focusedRow;
this._focusedCol=F;
this._focusedRow=G;
if(G!=I&&!H){this._updateContent(false,
null,
I,
true);
this._updateContent(false,
null,
G,
true);
}}},
onSelectionChanged:function(){this._updateContent(false,
null,
null,
true);
},
onFocusChanged:function(){this._updateContent(false,
null,
null,
true);
},
setColumnWidth:function(F,
J){this._updateContent(true);
},
onColOrderChanged:function(){this._updateContent(true);
},
onPaneModelChanged:function(){this._updateContent(true);
},
onTableModelDataChanged:function(K,
L,
M,
N){this.__dY();
var O=this.getFirstVisibleRow();
var P=this.getVisibleRowCount();
if(L==-1||L>=O&&K<O+P){this._updateContent();
}},
onTableModelMetaDataChanged:function(){this._updateContent(true);
},
__dW:[],
__dX:0,
_applyMaxCacheLines:function(D,
E){if(this.__dX>=D&&D!==-1){this.__dY();
}},
__dY:function(){this.__dW=[];
this.__dX=0;
},
__ea:function(G,
Q,
R){if(!Q&&!R&&this.__dW[G]){return this.__dW[G];
}else{return null;
}},
__eb:function(G,
S,
Q,
R){if(!Q&&!R&&!this.__dW[G]){this._applyMaxCacheLines(this.getMaxCacheLines());
this.__dW[G]=S;
this.__dX+=1;
}},
_updateContent:function(T,
U,
V,
W){if(T){this.__dY();
}if(U&&Math.abs(U)<=Math.min(10,
this.getVisibleRowCount())){this._scrollContent(U);
}else if(W&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(V);
}else{this._updateAllRows();
}},
_updateRowStyles:function(V){var X=this.getContentElement().getDomElement();
if(!X||!X.firstChild){this._updateAllRows();
return;
}var Y=this.getTable();
var ba=Y.getSelectionModel();
var bb=Y.getTableModel();
var bc=Y.getDataRowRenderer();
var bd=X.firstChild.childNodes;
var be={table:Y};
var G=this.getFirstVisibleRow();
var bf=0;
var bg=bd.length;
if(V!=null){var bh=V-G;
if(bh>=0&&bh<bg){G=V;
bf=bh;
bg=bh+1;
}else{return;
}}
for(;bf<bg;bf++,
G++){be.row=G;
be.selected=ba.isSelectedIndex(G);
be.focusedRow=(this._focusedRow==G);
be.rowData=bb.getRowData(G);
bc.updateDataRowElement(be,
bd[bf]);
}},
_getRowsHtml:function(K,
P){var Y=this.getTable();
var ba=Y.getSelectionModel();
var bb=Y.getTableModel();
var bi=Y.getTableColumnModel();
var bj=this.getPaneScroller().getTablePaneModel();
var bc=Y.getDataRowRenderer();
bb.prefetchRows(K,
K+P-1);
var bk=Y.getRowHeight();
var bl=bj.getColumnCount();
var bm=0;
var bn=[];
for(var bo=0;bo<bl;bo++){var F=bj.getColumnAtX(bo);
var bp=bi.getColumnWidth(F);
bn.push({col:F,
xPos:bo,
editable:bb.isColumnEditable(F),
focusedCol:this._focusedCol==F,
styleLeft:bm,
styleWidth:bp});
bm+=bp;
}var bq=[];
for(var G=K;G<K+P;G++){var Q=ba.isSelectedIndex(G);
var br=(this._focusedRow==G);
var bs=this.__ea(G,
Q,
br);
if(bs){bq.push(bs);
continue;
}var bt=[];
var be={table:Y};
be.styleHeight=bk;
be.row=G;
be.selected=Q;
be.focusedRow=br;
be.rowData=bb.getRowData(G);
bt.push(v);
var bu=bc.getRowClass(be);
if(bu){bt.push(s,
bu,
e);
}var bv=bc.createRowStyle(be);
bv+=w+bk+u+bj.getTotalWidth()+b;
if(bv){bt.push(l,
bv,
e);
}bt.push(p);
for(var bo=0;bo<bl;bo++){var bw=bn[bo];
for(var bx in bw){be[bx]=bw[bx];
}var F=be.col;
be.value=bb.getValue(F,
G);
var by=bi.getDataCellRenderer(F);
by.createDataCellHtml(be,
bt);
}bt.push(d);
var S=bt.join(a);
this.__eb(G,
S,
Q,
br);
bq.push(S);
}return bq.join(a);
},
_scrollContent:function(bz){var bA=this.getContentElement().getDomElement();
if(!(bA&&bA.firstChild)){this._updateAllRows();
return;
}var bB=bA.firstChild;
var bC=bB.childNodes;
var P=this.getVisibleRowCount();
var K=this.getFirstVisibleRow();
var bD=this.getTable().getTableModel().getRowCount();
if(K+P>bD){this._updateAllRows();
return;
}var bE=bz<0?P+bz:0;
var bF=bz<0?0:P-bz;
for(bJ=Math.abs(bz)-1;bJ>=0;bJ--){var bG=bC[bE];
try{bB.removeChild(bG);
}catch(e){break;
}}if(!this._tableContainer){this._tableContainer=document.createElement(h);
}var bH=f;
bH+=this._getRowsHtml(K+bF,
Math.abs(bz));
bH+=d;
this._tableContainer.innerHTML=bH;
var bI=this._tableContainer.firstChild.childNodes;
if(bz>0){for(var bJ=bI.length-1;bJ>=0;bJ--){var bG=bI[0];
bB.appendChild(bG);
}}else{for(var bJ=bI.length-1;bJ>=0;bJ--){var bG=bI[bI.length-1];
bB.insertBefore(bG,
bB.firstChild);
}}this._updateRowStyles(this._focusedRow-bz);
this._updateRowStyles(this._focusedRow);
},
_updateAllRows:function(){var X=this.getContentElement().getDomElement();
if(!X){return ;
}var Y=this.getTable();
var bb=Y.getTableModel();
var bj=this.getPaneScroller().getTablePaneModel();
var bl=bj.getColumnCount();
var bk=Y.getRowHeight();
var K=this.getFirstVisibleRow();
var P=this.getVisibleRowCount();
var bD=bb.getRowCount();
if(K+P>bD){P=Math.max(0,
bD-K);
}var bK=bj.getTotalWidth();
var bL;
if(P>0){bL=[A,
t,
bK,
b,
(Y.getForceLineHeight()?q+bk+b:a),
k,
r,
this._getRowsHtml(K,
P),
g];
}else{bL=[];
}var bM=bL.join(a);
X.innerHTML=bM;
this.setHeight(P*bk);
this.setWidth(bK);
this._lastColCount=bl;
this._lastRowCount=P;
}},
destruct:function(){this._disposeObjects(j);
this._disposeFields(B);
}});
})();
(function(){var a="hovered",
b="_paneScroller",
c="qx.ui.table.pane.Header";
qx.Class.define(c,
{extend:qx.ui.core.Widget,
construct:function(d){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this._paneScroller=d;
},
members:{getPaneScroller:function(){return this._paneScroller;
},
getTable:function(){return this._paneScroller.getTable();
},
onColOrderChanged:function(){this._updateContent(true);
},
onPaneModelChanged:function(){this._updateContent(true);
},
onTableModelMetaDataChanged:function(){this._updateContent();
},
setColumnWidth:function(e,
f){var g=this.getHeaderWidgetAtColumn(e);
if(g!=null){g.setWidth(f);
}},
setMouseOverColumn:function(e){if(e!=this._lastMouseOverColumn){if(this._lastMouseOverColumn!=null){var h=this.getHeaderWidgetAtColumn(this._lastMouseOverColumn);
if(h!=null){h.removeState(a);
}}
if(e!=null){this.getHeaderWidgetAtColumn(e).addState(a);
}this._lastMouseOverColumn=e;
}},
getHeaderWidgetAtColumn:function(e){var i=this.getPaneScroller().getTablePaneModel().getX(e);
return this._getChildren()[i];
},
showColumnMoveFeedback:function(e,
j){var k=this.getContainerLocation();
if(this._moveFeedback==null){var i=this.getPaneScroller().getTablePaneModel().getX(e);
var l=this._getChildren()[i];
var m=this.getTable().getTableModel();
var n=this.getTable().getTableColumnModel();
var o={xPos:i,
col:e,
name:m.getColumnName(e)};
var p=n.getHeaderCellRenderer(e);
var q=p.createHeaderCell(o);
var r=l.getBounds();
q.setWidth(r.width);
q.setHeight(r.height);
q.setZIndex(1000000);
q.setOpacity(0.8);
q.setLayoutProperties({top:k.top});
this.getApplicationRoot().add(q);
this._moveFeedback=q;
}this._moveFeedback.setLayoutProperties({left:k.left+j});
this._moveFeedback.show();
},
hideColumnMoveFeedback:function(){if(this._moveFeedback!=null){this._moveFeedback.getLayoutParent().remove(this._moveFeedback);
this._moveFeedback.dispose();
this._moveFeedback=null;
}},
isShowingColumnMoveFeedback:function(){return this._moveFeedback!=null;
},
_updateContent:function(s){var m=this.getTable().getTableModel();
var n=this.getTable().getTableColumnModel();
var t=this.getPaneScroller().getTablePaneModel();
var u=this._getChildren();
var v=t.getColumnCount();
var w=m.getSortColumnIndex();
if(s){this._cleanUpCells();
}var o={};
o.sortedAscending=m.isSortAscending();
for(var j=0;j<v;j++){var e=t.getColumnAtX(j);
var y=n.getColumnWidth(e);
var p=n.getHeaderCellRenderer(e);
o.xPos=j;
o.col=e;
o.name=m.getColumnName(e);
o.editable=m.isColumnEditable(e);
o.sorted=(e==w);
var z=u[j];
if(z==null){z=p.createHeaderCell(o);
z.set({width:y});
this._add(z);
}else{p.updateHeaderCell(o,
z);
}}},
_cleanUpCells:function(){var u=this._getChildren();
for(var j=u.length-1;j>=0;j--){var l=u[j];
this._remove(l);
l.dispose();
}}},
destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var a="Boolean",
b="resize-line",
c="mousedown",
d="mouseup",
g="qx.ui.table.pane.CellEvent",
h="scroll",
i="focus-indicator",
j="excluded",
k="scrollbar-y",
l="visible",
m="mousemove",
n="header",
o="editing",
p="click",
q="modelChanged",
r="scrollbar-x",
s="cellClick",
t="qx.event.type.ChangeEvent",
u="pane",
v="mouseout",
w="changeHorizontalScrollBarVisible",
y="bottom",
z="_applyScrollTimeout",
A="changeScrollX",
B="_applyTablePaneModel",
C="Integer",
D="dblclick",
E="_lastMouseDownCell",
F="mousewheel",
G="qx.ui.table.pane.Scroller",
H="_applyShowCellFocusIndicator",
I="resize",
J="vertical",
K="changeScrollY",
L="appear",
M="table-scroller",
N="right",
O="cellDblclick",
P="horizontal",
Q="losecapture",
R="contextmenu",
S="disappear",
T="_applyVerticalScrollBarVisible",
U="_applyHorizontalScrollBarVisible",
V="cellContextmenu",
W="close",
X="ew-resize",
Y="changeTablePaneModel",
ba="qx.ui.table.pane.Model",
bb="changeVerticalScrollBarVisible";
qx.Class.define(G,
{extend:qx.ui.core.Widget,
construct:function(bc){arguments.callee.base.call(this);
this._table=bc;
var bd=new qx.ui.layout.Grid();
bd.setColumnFlex(0,
1);
bd.setRowFlex(1,
1);
this._setLayout(bd);
this._horScrollBar=this._showChildControl(r);
this._verScrollBar=this._showChildControl(k);
this._header=this._showChildControl(n);
this._tablePane=this._showChildControl(u);
this._headerClipper=new qx.ui.table.pane.Clipper();
this._headerClipper.add(this._header);
this._headerClipper.addListener(Q,
this._onChangeCaptureHeader,
this);
this._headerClipper.addListener(m,
this._onMousemoveHeader,
this);
this._headerClipper.addListener(c,
this._onMousedownHeader,
this);
this._headerClipper.addListener(d,
this._onMouseupHeader,
this);
this._headerClipper.addListener(p,
this._onClickHeader,
this);
this._add(this._headerClipper,
{row:0,
column:0});
this._paneClipper=new qx.ui.table.pane.Clipper();
this._paneClipper.add(this._tablePane);
this._paneClipper.addListener(F,
this._onMousewheel,
this);
this._paneClipper.addListener(m,
this._onMousemovePane,
this);
this._paneClipper.addListener(c,
this._onMousedownPane,
this);
this._paneClipper.addListener(d,
this._onMouseupPane,
this);
this._paneClipper.addListener(p,
this._onClickPane,
this);
this._paneClipper.addListener(R,
this._onContextMenu,
this);
this._paneClipper.addListener(D,
this._onDblclickPane,
this);
this._paneClipper.addListener(I,
this._onResizePane,
this);
this._add(this._paneClipper,
{row:1,
column:0});
this._focusIndicator=this._getChildControl(i);
this._getChildControl(b);
this._excludeChildControl(b);
this.addListener(v,
this._onMouseout,
this);
this.addListener(L,
this._onAppear,
this);
this.addListener(S,
this._onDisappear,
this);
if(!this._onintervalWrapper){this._onintervalWrapper=qx.lang.Function.bind(this._oninterval,
this);
}this.initScrollTimeout();
},
statics:{MIN_COLUMN_WIDTH:10,
RESIZE_REGION_RADIUS:5,
CLICK_TOLERANCE:5,
HORIZONTAL_SCROLLBAR:1,
VERTICAL_SCROLLBAR:2},
events:{"changeScrollY":t,
"changeScrollX":t,
"cellClick":g,
"cellDblclick":g,
"cellContextmenu":g},
properties:{horizontalScrollBarVisible:{check:a,
init:true,
apply:U,
event:w},
verticalScrollBarVisible:{check:a,
init:true,
apply:T,
event:bb},
tablePaneModel:{check:ba,
apply:B,
event:Y},
liveResize:{check:a,
init:false},
focusCellOnMouseMove:{check:a,
init:false},
selectBeforeFocus:{check:a,
init:false},
showCellFocusIndicator:{check:a,
init:true,
apply:H},
scrollTimeout:{check:C,
init:100,
apply:z},
appearance:{refine:true,
init:M}},
members:{_createChildControlImpl:function(be){var bf;
switch(be){case n:bf=this.getTable().getNewTablePaneHeader()(this);
break;
case u:bf=this.getTable().getNewTablePane()(this);
break;
case i:bf=new qx.ui.table.pane.FocusIndicator(this);
bf.setUserBounds(0,
0,
0,
0);
bf.setZIndex(1000);
bf.addListener(d,
this._onMouseupFocusIndicator,
this);
this._paneClipper.add(bf);
bf.exclude();
break;
case b:bf=new qx.ui.core.Widget();
bf.setUserBounds(0,
0,
0,
0);
bf.setZIndex(1000);
this._paneClipper.add(bf);
break;
case r:bf=new qx.ui.core.ScrollBar(P).set({minWidth:0,
alignY:y});
bf.addListener(h,
this._onScrollX,
this);
this._add(bf,
{row:2,
column:0});
break;
case k:bf=new qx.ui.core.ScrollBar(J).set({alignX:N});
bf.addListener(h,
this._onScrollY,
this);
this._add(bf,
{row:1,
column:1});
break;
}return bf||arguments.callee.base.call(this,
be);
},
_applyHorizontalScrollBarVisible:function(bg,
bh){this._horScrollBar.setVisibility(bg?l:j);
if(!bg){this.setScrollY(0,
true);
}},
_applyVerticalScrollBarVisible:function(bg,
bh){this._verScrollBar.setVisibility(bg?l:j);
if(!bg){this.setScrollX(0);
}},
_applyTablePaneModel:function(bg,
bh){if(bh!=null){bh.removeListener(q,
this._onPaneModelChanged,
this);
}bg.addListener(q,
this._onPaneModelChanged,
this);
},
_applyShowCellFocusIndicator:function(bg,
bh){if(bg){this._updateFocusIndicator();
}else{if(this._focusIndicator){this._focusIndicator.hide();
}}},
getScrollY:function(){return this._verScrollBar.getPosition();
},
setScrollY:function(bi,
bj){this._ignoreScrollYEvent=bj;
this._verScrollBar.scrollTo(bi);
if(bj){this._updateContent();
}this._ignoreScrollYEvent=false;
},
getScrollX:function(){return this._horScrollBar.getPosition();
},
setScrollX:function(bk){this._horScrollBar.scrollTo(bk);
},
getTable:function(){return this._table;
},
onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},
setColumnWidth:function(bl,
bm){this._header.setColumnWidth(bl,
bm);
this._tablePane.setColumnWidth(bl,
bm);
var bn=this.getTablePaneModel();
var bo=bn.getX(bl);
if(bo!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},
onColOrderChanged:function(){this._header.onColOrderChanged();
this._tablePane.onColOrderChanged();
this.updateHorScrollBarMaximum();
},
onTableModelDataChanged:function(bp,
bq,
br,
bs){this._tablePane.onTableModelDataChanged(bp,
bq,
br,
bs);
var bt=this.getTable().getTableModel().getRowCount();
if(bt!=this._lastRowCount){this.updateVerScrollBarMaximum();
if(this.getFocusedRow()>=bt){if(bt==0){this.setFocusedCell(null,
null);
}else{this.setFocusedCell(this.getFocusedColumn(),
bt-1);
}}this._lastRowCount=bt;
}},
onSelectionChanged:function(){this._tablePane.onSelectionChanged();
},
onFocusChanged:function(){this._tablePane.onFocusChanged();
},
onTableModelMetaDataChanged:function(){this._header.onTableModelMetaDataChanged();
this._tablePane.onTableModelMetaDataChanged();
},
_onPaneModelChanged:function(){this._header.onPaneModelChanged();
this._tablePane.onPaneModelChanged();
},
_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this._header._updateContent();
},
updateHorScrollBarMaximum:function(){var bu=this._paneClipper.getInnerSize();
if(!bu){return ;
}var bv=this.getTablePaneModel().getTotalWidth();
var bw=this._horScrollBar;
if(bu.height<bv){var bx=Math.max(0,
bv-bu.width);
bw.setMaximum(bx);
bw.setKnobFactor(bu.width/bv);
var by=bw.getPosition();
bw.setPosition(Math.min(by,
bx));
}else{bw.setMaximum(0);
bw.setKnobFactor(1);
bw.setPosition(0);
}},
updateVerScrollBarMaximum:function(){var bu=this._paneClipper.getInnerSize();
if(!bu){return ;
}var bt=this.getTable().getTableModel().getRowCount();
if(this.getTable().getKeepFirstVisibleRowComplete()){bt+=1;
}var bz=this.getTable().getRowHeight();
var bv=bt*bz;
var bw=this._verScrollBar;
if(bu.height<bv){var bx=Math.max(0,
bv-bu.height);
bw.setMaximum(bx);
bw.setKnobFactor(bu.height/bv);
var by=bw.getPosition();
bw.setPosition(Math.min(by,
bx));
}else{bw.setMaximum(0);
bw.setKnobFactor(1);
bw.setPosition(0);
}},
onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},
_onAppear:function(){this._startInterval(this.getScrollTimeout());
},
_onDisappear:function(){this._stopInterval();
},
_onScrollX:function(bA){var bB=bA.getData();
this.fireDataEvent(A,
bB,
bA.getOldData());
this._headerClipper.scrollToX(bB);
this._paneClipper.scrollToX(bB);
},
_onScrollY:function(bA){this.fireDataEvent(K,
bA.getData(),
bA.getOldData());
this._postponedUpdateContent();
},
_onMousewheel:function(bA){var bc=this.getTable();
if(!bc.getEnabled()){return;
}this._verScrollBar.scrollTo(this._verScrollBar.getPosition()+((bA.getWheelDelta()*3)*bc.getRowHeight()));
if(this._lastMousePageX&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this._lastMousePageX,
this._lastMousePageY);
}},
__ec:function(bC){var bc=this.getTable();
var bD=this._header.getHeaderWidgetAtColumn(this._resizeColumn);
var bE=bD.getSizeHint().minWidth;
var bF=Math.max(bE,
this._lastResizeWidth+bC-this._lastResizeMousePageX);
if(this.getLiveResize()){var bG=bc.getTableColumnModel();
bG.setColumnWidth(this._resizeColumn,
bF);
}else{this._header.setColumnWidth(this._resizeColumn,
bF);
var bn=this.getTablePaneModel();
this._showResizeLine(bn.getColumnLeft(this._resizeColumn)+bF);
}this._lastResizeMousePageX+=bF-this._lastResizeWidth;
this._lastResizeWidth=bF;
},
__ed:function(bC){var bH=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;
if(this._header.isShowingColumnMoveFeedback()||bC>this._lastMoveMousePageX+bH||bC<this._lastMoveMousePageX-bH){this._lastMoveColPos+=bC-this._lastMoveMousePageX;
this._header.showColumnMoveFeedback(this._moveColumn,
this._lastMoveColPos);
var bI=this._table.getTablePaneScrollerAtPageX(bC);
if(this._lastMoveTargetScroller&&this._lastMoveTargetScroller!=bI){this._lastMoveTargetScroller.hideColumnMoveFeedback();
}
if(bI!=null){this._lastMoveTargetX=bI.showColumnMoveFeedback(bC);
}else{this._lastMoveTargetX=null;
}this._lastMoveTargetScroller=bI;
this._lastMoveMousePageX=bC;
}},
_onMousemoveHeader:function(bA){var bc=this.getTable();
if(!bc.getEnabled()){return;
}var bJ=false;
var bK=null;
var bC=bA.getDocumentLeft();
var bL=bA.getDocumentTop();
this._lastMousePageX=bC;
this._lastMousePageY=bL;
if(this._resizeColumn!=null){this.__ec(bC);
bJ=true;
}else if(this._moveColumn!=null){this.__ed(bC);
}else{var bM=this._getResizeColumnForPageX(bC);
if(bM!=-1){bJ=true;
}else{var bN=bc.getTableModel();
var bl=this._getColumnForPageX(bC);
if(bl!=null&&bN.isColumnSortable(bl)){bK=bl;
}}}var bO=bJ?X:null;
this.getApplicationRoot().setGlobalCursor(bO);
this.setCursor(bO);
this._header.setMouseOverColumn(bK);
},
_onMousemovePane:function(bA){var bc=this.getTable();
if(!bc.getEnabled()){return;
}var bC=bA.getDocumentLeft();
var bL=bA.getDocumentTop();
this._lastMousePageX=bC;
this._lastMousePageY=bL;
var bP=this._getRowForPagePos(bC,
bL);
if(bP!=null&&this._getColumnForPageX(bC)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(bC,
bL);
}}this._header.setMouseOverColumn(null);
},
_onMousedownHeader:function(bA){if(!this.getTable().getEnabled()){return;
}var bC=bA.getDocumentLeft();
var bM=this._getResizeColumnForPageX(bC);
if(bM!=-1){this._startResizeHeader(bM,
bC);
}else{var bQ=this._getColumnForPageX(bC);
if(bQ!=null){this._startMoveHeader(bQ,
bC);
}}},
_startResizeHeader:function(bM,
bC){var bG=this.getTable().getTableColumnModel();
this._resizeColumn=bM;
this._lastResizeMousePageX=bC;
this._lastResizeWidth=bG.getColumnWidth(this._resizeColumn);
this._headerClipper.capture();
},
_startMoveHeader:function(bQ,
bC){this._moveColumn=bQ;
this._lastMoveMousePageX=bC;
this._lastMoveColPos=this.getTablePaneModel().getColumnLeft(bQ);
this._headerClipper.capture();
},
_onMousedownPane:function(bA){var bc=this.getTable();
if(!bc.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var bC=bA.getDocumentLeft();
var bL=bA.getDocumentTop();
var bP=this._getRowForPagePos(bC,
bL);
var bl=this._getColumnForPageX(bC);
if(bP!==null&&bl!==null){this._lastMouseDownCell={row:bP,
col:bl};
var bR=this.getSelectBeforeFocus();
if(bR){bc.getSelectionManager().handleMouseDown(bP,
bA);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(bC,
bL);
}
if(!bR){bc.getSelectionManager().handleMouseDown(bP,
bA);
}}},
_onMouseupFocusIndicator:function(bA){if(this._lastMouseDownCell&&this._focusIndicator.getRow()==this._lastMouseDownCell.row&&this._focusIndicator.getColumn()==this._lastMouseDownCell.col){this._lastMouseDownCell={};
this.fireEvent(s,
qx.ui.table.pane.CellEvent,
[this,
bA,
this._lastMouseDownCell.row,
this._lastMouseDownCell.col],
true);
}},
_onChangeCaptureHeader:function(bA){if(this._resizeColumn!=null&&bA.getData()==false){this._stopResizeHeader();
}
if(this._moveColumn!=null&&bA.getData()==false){this._stopMoveHeader();
}},
_stopResizeHeader:function(){var bG=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
bG.setColumnWidth(this._resizeColumn,
this._lastResizeWidth);
}this._resizeColumn=null;
this._headerClipper.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},
_stopMoveHeader:function(){var bG=this.getTable().getTableColumnModel();
var bn=this.getTablePaneModel();
this._header.hideColumnMoveFeedback();
if(this._lastMoveTargetScroller){this._lastMoveTargetScroller.hideColumnMoveFeedback();
}
if(this._lastMoveTargetX!=null){var bS=bn.getFirstColumnX()+bn.getX(this._moveColumn);
var bT=this._lastMoveTargetX;
if(bT!=bS&&bT!=bS+1){var bU=bG.getVisibleColumnAtX(bS);
var bV=bG.getVisibleColumnAtX(bT);
var bW=bG.getOverallX(bU);
var bX=(bV!=null)?bG.getOverallX(bV):bG.getOverallColumnCount();
if(bX>bW){bX--;
}bG.moveColumn(bW,
bX);
}}this._moveColumn=null;
this._lastMoveTargetX=null;
this._headerClipper.releaseCapture();
},
_onMouseupPane:function(bA){var bc=this.getTable();
if(!bc.getEnabled()){return;
}var bP=this._getRowForPagePos(bA.getDocumentLeft(),
bA.getDocumentTop());
if(bP!=-1&&bP!=null&&this._getColumnForPageX(bA.getDocumentLeft())!=null){bc.getSelectionManager().handleMouseUp(bP,
bA);
}},
_onMouseupHeader:function(bA){var bc=this.getTable();
if(!bc.getEnabled()){return;
}
if(this._resizeColumn!=null){this._stopResizeHeader();
this.__ignoreClick=true;
}else if(this._moveColumn!=null){this._stopMoveHeader();
}},
_onClickHeader:function(bA){if(this.__ignoreClick){this.__ignoreClick=false;
return;
}var bc=this.getTable();
if(!bc.getEnabled()){return;
}var bN=bc.getTableModel();
var bC=bA.getDocumentLeft();
var bM=this._getResizeColumnForPageX(bC);
if(bM==-1){var bl=this._getColumnForPageX(bC);
if(bl!=null&&bN.isColumnSortable(bl)){var bY=bN.getSortColumnIndex();
var ca=(bl!=bY)?true:!bN.isSortAscending();
bN.sortByColumn(bl,
ca);
bc.getSelectionModel().clearSelection();
}}},
_onClickPane:function(bA){var bc=this.getTable();
if(!bc.getEnabled()){return;
}var bC=bA.getDocumentLeft();
var bL=bA.getDocumentTop();
var bP=this._getRowForPagePos(bC,
bL);
var bl=this._getColumnForPageX(bC);
if(bP!=null&&bl!=null){bc.getSelectionManager().handleClick(bP,
bA);
if(this._lastMouseDownCell&&bP==this._lastMouseDownCell.row&&bl==this._lastMouseDownCell.col){this._lastMouseDownCell={};
this.fireEvent(s,
qx.ui.table.pane.CellEvent,
[this,
bA,
bP,
bl],
true);
}}},
_onContextMenu:function(bA){var bC=bA.getDocumentLeft();
var bL=bA.getDocumentTop();
var bP=this._getRowForPagePos(bC,
bL);
var bl=this._getColumnForPageX(bC);
if(this._lastMouseDownCell&&bP==this._lastMouseDownCell.row&&bl==this._lastMouseDownCell.col){this._lastMouseDownCell={};
this.fireEvent(V,
qx.ui.table.pane.CellEvent,
[this,
bA,
bP,
bl],
true);
}},
_onDblclickPane:function(bA){var bC=bA.getDocumentLeft();
var bL=bA.getDocumentTop();
this._focusCellAtPagePos(bC,
bL);
this.startEditing();
var bP=this._getRowForPagePos(bC,
bL);
if(bP!=-1&&bP!=null){this.fireEvent(O,
qx.ui.table.pane.CellEvent,
[this,
bA,
bP],
true);
}},
_onMouseout:function(bA){var bc=this.getTable();
if(!bc.getEnabled()){return;
}if(this._resizeColumn==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this._header.setMouseOverColumn(null);
},
_showResizeLine:function(bo){var cb=this._showChildControl(b);
var bm=cb.getWidth();
var cc=this._paneClipper.getBounds();
cb.setUserBounds(bo-Math.round(bm/2),
0,
bm,
cc.height);
},
_hideResizeLine:function(){this._excludeChildControl(b);
},
showColumnMoveFeedback:function(bC){var bn=this.getTablePaneModel();
var bG=this.getTable().getTableColumnModel();
var cd=this._tablePane.getContainerLocation().left;
var ce=this._tablePane.getBounds().width;
var cf=bn.getColumnCount();
var cg=0;
var ch=0;
var ci=cd;
for(var cj=0;cj<cf;cj++){var bl=bn.getColumnAtX(cj);
var ck=bG.getColumnWidth(bl);
if(bC<ci+ck/2){break;
}ci+=ck;
cg=cj+1;
ch=ci-cd;
}var cl=this._paneClipper.getContainerLocation().left;
var cm=this._paneClipper.getBounds().width;
var bk=cl-cd;
ch=qx.lang.Number.limit(ch,
bk+2,
bk+cm-1);
this._showResizeLine(ch);
return bn.getFirstColumnX()+cg;
},
hideColumnMoveFeedback:function(){this._hideResizeLine();
},
_focusCellAtPagePos:function(bC,
bL){var bP=this._getRowForPagePos(bC,
bL);
if(bP!=-1&&bP!=null){var bl=this._getColumnForPageX(bC);
if(bl!=null){this._table.setFocusedCell(bl,
bP);
}}},
setFocusedCell:function(bl,
bP){if(!this.isEditing()){this._tablePane.setFocusedCell(bl,
bP,
this._updateContentPlanned);
this._focusedCol=bl;
this._focusedRow=bP;
this._updateFocusIndicator();
}},
getFocusedColumn:function(){return this._focusedCol;
},
getFocusedRow:function(){return this._focusedRow;
},
scrollCellVisible:function(bl,
bP){var bn=this.getTablePaneModel();
var cj=bn.getX(bl);
if(cj!=-1){var cn=this._paneClipper.getInnerSize();
if(!cn){return;
}var bG=this.getTable().getTableColumnModel();
var co=bn.getColumnLeft(bl);
var ck=bG.getColumnWidth(bl);
var bz=this.getTable().getRowHeight();
var cp=bP*bz;
var bk=this.getScrollX();
var bi=this.getScrollY();
var cq=Math.min(co,
co+ck-cn.width);
var cr=co;
this.setScrollX(Math.max(cq,
Math.min(cr,
bk)));
var cs=cp+bz-cn.height;
if(this.getTable().getKeepFirstVisibleRowComplete()){cs+=bz;
}var ct=cp;
this.setScrollY(Math.max(cs,
Math.min(ct,
bi)),
true);
}},
isEditing:function(){return this._cellEditor!=null;
},
startEditing:function(){var bc=this.getTable();
var bN=bc.getTableModel();
var bl=this._focusedCol;
if(!this.isEditing()&&(bl!=null)&&bN.isColumnEditable(bl)){var bP=this._focusedRow;
var cj=this.getTablePaneModel().getX(bl);
var bg=bN.getValue(bl,
bP);
this._cellEditorFactory=bc.getTableColumnModel().getCellEditorFactory(bl);
var cu={col:bl,
row:bP,
xPos:cj,
value:bg,
table:bc};
this._cellEditor=this._cellEditorFactory.createCellEditor(cu);
if(this._cellEditor===null){return false;
}else if(this._cellEditor instanceof qx.ui.window.Window){this._cellEditor.setModal(true);
this._cellEditor.setShowClose(false);
this._cellEditor.addListener(W,
this._onCellEditorModalWindowClose,
this);
var cv=bc.getModalCellEditorPreOpenFunction();
if(cv!=null){cv(this._cellEditor,
cu);
}this._cellEditor.open();
}else{var cw=this._focusIndicator.getInnerSize();
this._cellEditor.setUserBounds(0,
0,
cw.width,
cw.height);
this._focusIndicator.addListener(c,
function(bA){bA.stopPropagation();
});
this._focusIndicator.add(this._cellEditor);
this._focusIndicator.addState(o);
this._cellEditor.focus();
}return true;
}return false;
},
stopEditing:function(){this.flushEditor();
this.cancelEditing();
},
flushEditor:function(){if(this.isEditing()){var bg=this._cellEditorFactory.getCellEditorValue(this._cellEditor);
this.getTable().getTableModel().setValue(this._focusedCol,
this._focusedRow,
bg);
this._table.focus();
}},
cancelEditing:function(){if(this.isEditing()&&!this._cellEditor.pendingDispose){if(this._cellEditorIsModalWindow){this._cellEditor.destroy();
this._cellEditor=null;
this._cellEditorFactory=null;
this._cellEditor.pendingDispose=true;
}else{this._focusIndicator.removeState(o);
this._cellEditor.destroy();
this._cellEditor=null;
this._cellEditorFactory=null;
}}},
_onCellEditorModalWindowClose:function(bA){this.stopEditing();
},
_getColumnForPageX:function(bC){var bG=this.getTable().getTableColumnModel();
var bn=this.getTablePaneModel();
var cf=bn.getColumnCount();
var ci=this._header.getContainerLocation().left;
for(var bo=0;bo<cf;bo++){var bl=bn.getColumnAtX(bo);
var ck=bG.getColumnWidth(bl);
ci+=ck;
if(bC<ci){return bl;
}}return null;
},
_getResizeColumnForPageX:function(bC){var bG=this.getTable().getTableColumnModel();
var bn=this.getTablePaneModel();
var cf=bn.getColumnCount();
var ci=this._header.getContainerLocation().left;
var cx=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;
for(var bo=0;bo<cf;bo++){var bl=bn.getColumnAtX(bo);
var ck=bG.getColumnWidth(bl);
ci+=ck;
if(bC>=(ci-cx)&&bC<=(ci+cx)){return bl;
}}return -1;
},
_getRowForPagePos:function(bC,
bL){var cy=this._tablePane.getContentLocation();
if(bC<cy.left||bC>cy.right){return null;
}
if(bL>=cy.top&&bL<=cy.bottom){var bz=this.getTable().getRowHeight();
var bi=this._verScrollBar.getPosition();
if(this.getTable().getKeepFirstVisibleRowComplete()){bi=Math.floor(bi/bz)*bz;
}var cz=bi+bL-cy.top;
var bP=Math.floor(cz/bz);
var bt=this.getTable().getTableModel().getRowCount();
return (bP<bt)?bP:null;
}var cA=this._header.getContainerLocation();
if(bL>=cA.top&&bL<=cA.bottom&&bC<=cA.right){return -1;
}return null;
},
setTopRightWidget:function(cB){var cC=this._topRightWidget;
if(cC!=null){this._remove(cC);
}
if(cB!=null){this._add(cB,
{row:0,
column:1});
}this._topRightWidget=cB;
},
getHeader:function(){return this._header;
},
getTablePane:function(){return this._tablePane;
},
getNeededScrollBars:function(cD,
cE){var cF=this._verScrollBar.getSizeHint().width;
var cn=this._paneClipper.getInnerSize();
var cG=cn.width;
if(this.getVerticalScrollBarVisible()){cG+=cF;
}var cH=cn.height;
if(this.getHorizontalScrollBarVisible()){cH+=cF;
}var ce=this.getTablePaneModel().getTotalWidth();
var cI=this.getTable().getRowHeight()*this.getTable().getTableModel().getRowCount();
var cJ=false;
var cK=false;
if(ce>cG){cJ=true;
if(cI>cH-cF){cK=true;
}}else if(cI>cH){cK=true;
if(!cE&&(ce>cG-cF)){cJ=true;
}}var cL=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var cM=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((cD||cJ)?cL:0)|((cE||!cK)?0:cM);
},
_applyScrollTimeout:function(bg,
bh){this._startInterval(bg);
},
_startInterval:function(cN){this._stopInterval();
if(cN){this._updateInterval=window.setInterval(this._onintervalWrapper,
cN);
}},
_stopInterval:function(){if(this._updateInterval){window.clearInterval(this._updateInterval);
this._updateInterval=null;
}},
_postponedUpdateContent:function(){this._updateContent();
},
_oninterval:function(){if(this._updateContentPlanned&&!this._tablePane._layoutPending){this._updateContentPlanned=false;
this._updateContent();
}},
_updateContent:function(){var bu=this._paneClipper.getInnerSize();
if(!bu){return;
}var cI=bu.height;
var bk=this._horScrollBar.getPosition();
var bi=this._verScrollBar.getPosition();
var bz=this.getTable().getRowHeight();
var bp=Math.floor(bi/bz);
var cO=this._tablePane.getFirstVisibleRow();
this._tablePane.setFirstVisibleRow(bp);
var cP=Math.ceil(cI/bz);
var cQ=0;
var cR=this.getTable().getKeepFirstVisibleRowComplete();
if(!cR){cP++;
cQ=bi%bz;
}this._tablePane.setVisibleRowCount(cP);
if(bp!=cO){this._updateFocusIndicator();
}this._paneClipper.scrollToX(bk);
if(!cR){this._paneClipper.scrollToY(cQ);
}},
_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var bc=this.getTable();
if(!bc.getEnabled()){return;
}this._focusIndicator.moveToCell(this._focusedCol,
this._focusedRow);
}},
destruct:function(){this._stopInterval();
var cS=this.getTablePaneModel();
if(cS){cS.dispose();
}this._disposeFields(E);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,
{extend:qx.ui.container.Composite,
construct:function(){arguments.callee.base.call(this,
new qx.ui.layout.Grow());
},
members:{scrollToX:function(b){this._contentElement.scrollToX(b,
false);
},
scrollToY:function(b){this._contentElement.scrollToY(b,
true);
}}});
})();
(function(){var a="Integer",
b="_scroller",
c="excluded",
d="qx.ui.table.pane.FocusIndicator";
qx.Class.define(d,
{extend:qx.ui.container.Composite,
construct:function(e){arguments.callee.base.call(this);
this._scroller=e;
},
properties:{visibility:{refine:true,
init:c},
row:{check:a},
column:{check:a}},
members:{moveToCell:function(f,
g){if(f==null){this.hide();
this.setRow(-1);
this.setColumn(-1);
}else{var h=this._scroller.getTablePaneModel().getX(f);
if(h==-1){this.hide();
this.setRow(-1);
this.setColumn(-1);
}else{var i=this._scroller.getTable();
var j=i.getTableColumnModel();
var k=this._scroller.getTablePaneModel();
var l=this._scroller.getTablePane().getFirstVisibleRow();
var m=i.getRowHeight();
this.setUserBounds(k.getColumnLeft(f)-2,
(g-l)*m-2,
j.getColumnWidth(f)+3,
m+3);
this.show();
this.setRow(g);
this.setColumn(f);
}}}},
destruct:function(){this._disposeFields(b);
}});
})();
(function(){var a="slider",
b="horizontal",
c="button-begin",
d="button-end",
f="vertical",
g="Integer",
h="execute",
i="right",
j="left",
k="down",
l="up",
m="PositiveNumber",
n="changeValue",
o="typeof value==='number'&&value>=0&&value<=this.getMaximum()",
p="_applyKnobFactor",
q="_applyOrientation",
r="qx.ui.core.ScrollBar",
s="_applyPageStep",
t="PositiveInteger",
u="scroll",
v="_applyPosition",
w="scrollbar",
x="_applyMaximum";
qx.Class.define(r,
{extend:qx.ui.core.Widget,
construct:function(y){arguments.callee.base.call(this);
this._createChildControl(c);
this._createChildControl(a);
this._createChildControl(d);
if(y!=null){this.setOrientation(y);
}else{this.initOrientation();
}},
properties:{appearance:{refine:true,
init:w},
orientation:{check:[b,
f],
init:b,
apply:q},
maximum:{check:t,
apply:x,
init:100},
position:{check:o,
init:0,
apply:v,
event:u},
singleStep:{check:g,
init:20},
pageStep:{check:g,
init:10,
apply:s},
knobFactor:{check:m,
apply:p,
nullable:true}},
members:{_createChildControlImpl:function(z){var A;
switch(z){case a:A=new qx.ui.form.AbstractSlider;
A.setPageStep(100);
A.addListener(n,
this._onChangeSliderValue,
this);
this._add(A,
{flex:1});
break;
case c:A=new qx.ui.form.RepeatButton;
A.setFocusable(false);
A.addListener(h,
this._onExecuteBegin,
this);
this._add(A);
break;
case d:A=new qx.ui.form.RepeatButton;
A.setFocusable(false);
A.addListener(h,
this._onExecuteEnd,
this);
this._add(A);
break;
}return A||arguments.callee.base.call(this,
z);
},
_applyMaximum:function(B){this._getChildControl(a).setMaximum(B);
},
_applyPosition:function(B){this._getChildControl(a).setValue(B);
},
_applyKnobFactor:function(B){this._getChildControl(a).setKnobFactor(B);
},
_applyPageStep:function(B){this._getChildControl(a).setPageStep(B);
},
_applyOrientation:function(B,
C){var D=this._getLayout();
if(D){D.dispose();
}if(B===b){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(f,
b);
this._getChildControl(c).replaceState(l,
j);
this._getChildControl(d).replaceState(k,
i);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(b,
f);
this._getChildControl(c).replaceState(j,
l);
this._getChildControl(d).replaceState(i,
k);
}this._getChildControl(a).setOrientation(B);
},
scrollTo:function(E){this._getChildControl(a).slideTo(E);
},
scrollBy:function(F){this._getChildControl(a).slideBy(F);
},
scrollBySteps:function(G){var H=this.getSingleStep();
this._getChildControl(a).slideBy(G*H);
},
_onExecuteBegin:function(I){this.scrollBy(-this.getSingleStep());
},
_onExecuteEnd:function(I){this.scrollBy(this.getSingleStep());
},
_onChangeSliderValue:function(I){this.setPosition(I.getData());
}}});
})();
(function(){var a="knob",
b="horizontal",
c="vertical",
d="Integer",
f="height",
g="px",
h="mousemove",
i="resize",
j="width",
k="top",
l="mouseup",
m="left",
n="mousedown",
o="changeValue",
p="interval",
q="_applyValue",
r="_applyKnobFactor",
s="String",
t="_applyOrientation",
u="floor",
v="_applyMinimum",
w="qx.ui.form.AbstractSlider",
x="ceil",
y="changeName",
z="losecapture",
A="Number",
B="_applyMaximum",
C="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(w,
{extend:qx.ui.core.Widget,
implement:qx.ui.form.IFormElement,
construct:function(D){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(n,
this._onMouseDown,
this);
this.addListener(l,
this._onMouseUp,
this);
this.addListener(z,
this._onMouseUp,
this);
this.addListener(i,
this._onUpdate,
this);
if(D!=null){this.setOrientation(D);
}else{this.initOrientation();
}},
properties:{orientation:{check:[b,
c],
init:b,
apply:t},
name:{check:s,
nullable:true,
event:y},
value:{check:C,
init:0,
apply:q,
event:o},
minimum:{check:d,
init:0,
apply:v},
maximum:{check:d,
init:100,
apply:B},
singleStep:{check:d,
init:1},
pageStep:{check:d,
init:10},
knobFactor:{check:A,
apply:r,
nullable:true}},
members:{_createChildControlImpl:function(E){var F;
switch(E){case a:F=new qx.ui.core.Widget().set({minWidth:4,
minHeight:4});
F.addListener(i,
this._onUpdate,
this);
this._add(F);
break;
}return F||arguments.callee.base.call(this,
E);
},
_onMouseDown:function(G){var H=this.__ee;
var I=this._getChildControl(a);
var J=H?m:k;
var K=H?j:f;
var L=H?G.getDocumentLeft():G.getDocumentTop();
var M=this.__sliderLocation=qx.bom.element.Location.get(this.getContentElement().getDomElement())[J];
var N=this.__knobLocation=qx.bom.element.Location.get(I.getContainerElement().getDomElement())[J];
if(G.getTarget()===I){this.__dragMode=true;
this.__dragOffset=L+M-N;
}else{this.__trackingMode=true;
this.__trackingDirection=L<=N?-1:1;
this.__eg(G);
this._onInterval();
if(!this.__timer){this.__timer=new qx.event.Timer(100);
this.__timer.addListener(p,
this._onInterval,
this);
}this.__timer.start();
}this.addListener(h,
this._onMouseMove);
this.capture();
G.stopPropagation();
},
_onMouseUp:function(G){if(this.__dragMode){this.releaseCapture();
delete this.__dragMode;
delete this.__dragOffset;
}else if(this.__trackingMode){this.__timer.stop();
this.releaseCapture();
delete this.__trackingMode;
delete this.__trackingDirection;
delete this.__trackingEnd;
}this.removeListener(h,
this._onMouseMove);
if(G.getType()===l){G.stopPropagation();
}},
_onMouseMove:function(G){if(this.__dragMode){var O=this.__ee?G.getDocumentLeft():G.getDocumentTop();
var P=O-this.__dragOffset;
this.slideTo(this._positionToValue(P));
}else if(this.__trackingMode){this.__eg(G);
}G.stopPropagation();
},
_onInterval:function(G){var Q=this.getValue()+(this.__trackingDirection*this.getPageStep());
if(Q<this.getMinimum()){Q=this.getMinimum();
}else if(Q>this.getMaximum()){Q=this.getMaximum();
}var R=this.__trackingDirection==-1;
if((R&&Q<=this.__trackingEnd)||(!R&&Q>=this.__trackingEnd)){Q=this.__trackingEnd;
}this.slideTo(Q);
},
_onUpdate:function(G){var S=this.getInnerSize();
var T=this._getChildControl(a).getBounds();
var K=this.__ee?j:f;
this._updateKnobSize();
this._updateKnobPosition();
this.__ef=S[K]-T[K];
this.__knobSize=T[K];
},
__ee:false,
__ef:0,
__eg:function(G){var H=this.__ee;
var L=H?G.getDocumentLeft():G.getDocumentTop();
var M=this.__sliderLocation;
var N=this.__knobLocation;
var T=this.__knobSize;
var R=L<=N;
var P=L-M;
if(L>=N){P-=T;
}var Q=this._positionToValue(P);
var U=this.getMinimum();
var V=this.getMaximum();
if(Q<U){Q=U;
}else if(Q>V){Q=V;
}else{var W=this.getValue();
var X=this.getPageStep();
var Y=this.__trackingDirection<0?u:x;
Q=W+(Math[Y]((Q-W)/X)*X);
}if(this.__trackingEnd==null||(this.__trackingDirection==-1&&Q<=this.__trackingEnd)||(this.__trackingDirection==1&&Q>=this.__trackingEnd)){this.__trackingEnd=Q;
}},
_positionToValue:function(P){var ba=this.__ef;
if(ba==null||ba==0){return 0;
}var bb=P/ba;
if(bb<0){bb=0;
}else if(bb>1){bb=1;
}var bc=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bc*bb);
},
_valueToPosition:function(Q){var ba=this.__ef;
if(ba==null){return 0;
}var bc=this.getMaximum()-this.getMinimum();
if(bc==0){return 0;
}var Q=Q-this.getMinimum();
var bb=Q/bc;
if(bb<0){bb=0;
}else if(bb>1){bb=1;
}return Math.round(ba*bb);
},
_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},
_setKnobPosition:function(P){var bd=this._getChildControl(a).getContainerElement();
if(this.__ee){bd.setStyle(m,
P+g,
true);
}else{bd.setStyle(k,
P+g,
true);
}},
_updateKnobSize:function(){var be=this.getKnobFactor();
if(be==null){return;
}var ba=this.getInnerSize();
if(ba==null){return;
}if(this.__ee){this._getChildControl(a).setWidth(Math.round(be*ba.width));
}else{this._getChildControl(a).setHeight(Math.round(be*ba.height));
}},
slideToBegin:function(){this.slideTo(this.getMinimum());
},
slideToEnd:function(){this.slideTo(this.getMaximum());
},
slideForward:function(){this.slideBy(this.getSingleStep());
},
slideBack:function(){this.slideBy(-this.getSingleStep());
},
slidePageForward:function(){this.slideBy(this.getPageStep());
},
slidePageBack:function(){this.slideBy(-this.getPageStep());
},
slideBy:function(bf){this.slideTo(this.getValue()+bf);
},
slideTo:function(Q){if(Q<this.getMinimum()){Q=this.getMinimum();
}else if(Q>this.getMaximum()){Q=this.getMaximum();
}else{Q=this.getMinimum()+Math.round((Q-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(Q);
},
_applyOrientation:function(Q,
W){var I=this._getChildControl(a);
this.__ee=Q===b;
if(this.__ee){this.removeState(c);
I.removeState(c);
this.addState(b);
I.addState(b);
I.setLayoutProperties({top:0,
right:null,
bottom:0});
}else{this.removeState(b);
I.removeState(b);
this.addState(c);
I.addState(c);
I.setLayoutProperties({right:0,
bottom:null,
left:0});
}this._updateKnobPosition();
},
_applyKnobFactor:function(Q,
W){if(Q!=null){this._updateKnobSize();
}else{if(this.__ee){this._getChildControl(a).resetWidth();
}else{this._getChildControl(a).resetHeight();
}}},
_applyValue:function(Q,
W){this._updateKnobPosition();
},
_applyMinimum:function(Q,
W){this._updateKnobPosition();
},
_applyMaximum:function(Q,
W){this._updateKnobPosition();
}}});
})();
(function(){var a="pressed",
b="abandoned",
c="Integer",
d="hovered",
f="qx.event.type.Event",
g="Enter",
h="Space",
i="press",
j="qx.ui.form.RepeatButton",
k="release",
l="__timer",
m="interval",
n="execute";
qx.Class.define(j,
{extend:qx.ui.form.Button,
construct:function(o,
p){arguments.callee.base.call(this,
o,
p);
this.__timer=new qx.event.Timer(this.getInterval());
this.__timer.addListener(m,
this._onInterval,
this);
},
events:{"execute":f,
"press":f,
"release":f},
properties:{interval:{check:c,
init:100},
firstInterval:{check:c,
init:500},
minTimer:{check:c,
init:20},
timerDecrease:{check:c,
init:2}},
members:{press:function(){if(this.isEnabled()){if(!this.hasState(a)){this.__eh();
}this.removeState(b);
this.addState(a);
}},
release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(a)){if(!this.__executed){this.execute();
}}this.removeState(a);
this.removeState(b);
this.__ei();
},
_applyEnabled:function(r,
s){arguments.callee.base.call(this,
r,
s);
if(!r){this.removeState(a);
this.removeState(b);
this.__ei();
}},
_onMouseOver:function(t){if(!this.isEnabled()||t.getTarget()!==this){return;
}
if(this.hasState(b)){this.removeState(b);
this.addState(a);
this.__timer.start();
}this.addState(d);
},
_onMouseOut:function(t){if(!this.isEnabled()||t.getTarget()!==this){return;
}this.removeState(d);
if(this.hasState(a)){this.removeState(a);
this.addState(b);
this.__timer.stop();
this._currentInterval=this.getInterval();
}},
_onMouseDown:function(t){if(!t.isLeftPressed()){return;
}this.capture();
this.__eh();
t.stopPropagation();
},
_onMouseUp:function(t){this.releaseCapture();
if(!this.hasState(b)){this.addState(d);
if(this.hasState(a)&&!this.__executed){this.execute();
}}this.__ei();
t.stopPropagation();
},
_onKeyUp:function(t){switch(t.getKeyIdentifier()){case g:case h:if(this.hasState(a)){if(!this.__executed){this.execute();
}this.removeState(a);
this.removeState(b);
t.stopPropagation();
this.__ei();
}}},
_onKeyDown:function(t){switch(t.getKeyIdentifier()){case g:case h:this.removeState(b);
this.addState(a);
t.stopPropagation();
this.__eh();
}},
_onInterval:function(t){this.__timer.stop();
if(this._currentInterval==null){this._currentInterval=this.getInterval();
}this._currentInterval=(Math.max(this.getMinTimer(),
this._currentInterval-this.getTimerDecrease()));
this.__timer.restartWith(this._currentInterval);
this.__executed=true;
this.fireEvent(n);
},
__eh:function(){this.fireEvent(i);
this.__executed=false;
this.__timer.setInterval(this.getFirstInterval());
this.__timer.start();
this.removeState(b);
this.addState(a);
},
__ei:function(){this.fireEvent(k);
this.__timer.stop();
this._currentInterval=null;
this.removeState(b);
this.removeState(a);
}},
destruct:function(){this._disposeObjects(l);
}});
})();
(function(){var a="Integer",
b="qx.ui.table.pane.CellEvent";
qx.Class.define(b,
{extend:qx.event.type.Mouse,
properties:{row:{check:a},
column:{check:a}},
members:{init:function(c,
d,
e,
f){d.clone(this);
this._bubbles=false;
if(e!=null){this.setRow(e);
}else{this.setRow(c._getRowForPagePos(this.getDocumentLeft(),
this.getDocumentTop()));
}
if(f!=null){this.setColumn(f);
}else{this.setColumn(c._getColumnForPageX(this.getDocumentLeft()));
}}}});
})();
(function(){var a="qx.lang.Number";
qx.Bootstrap.define(a,
{statics:{isInRange:function(b,
c,
d){return b>=c&&b<=d;
},
isBetweenRange:function(b,
c,
d){return b>c&&b<d;
},
limit:function(b,
c,
d){if(d!=null&&b>d){return d;
}else if(c!=null&&b<c){return c;
}else{return b;
}}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,
{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},
getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var a="resize",
b="Boolean",
c="nw-resize",
d="mouseup",
f="mousedown",
g="w-resize",
h="__resizeFrame",
i="losecapture",
j="se-resize",
k="resize-frame",
l="ne-resize",
m="n-resize",
n="sw-resize",
o="mouseout",
p="s-resize",
q="mousemove",
r="move",
s="maximized",
t="Integer",
u="e-resize",
v="qx.ui.core.MResizable";
qx.Mixin.define(v,
{construct:function(){this.addListener(f,
this.__eo,
this,
true);
this.addListener(d,
this.__ep,
this);
this.addListener(q,
this.__er,
this);
this.addListener(o,
this.__es,
this);
this.addListener(i,
this.__eq,
this);
},
properties:{resizable:{check:b,
init:true},
resizeAllEdges:{check:b,
init:true},
resizeSensitivity:{check:t,
init:5},
useResizeFrame:{check:b,
init:true}},
members:{__ej:function(){var w=this.__resizeFrame;
if(!w){w=this.__resizeFrame=new qx.ui.core.Widget();
w.setAppearance(k);
w.exclude();
qx.core.Init.getApplication().getRoot().add(w);
}return w;
},
__ek:function(){var x=this.getBounds();
var w=this.__ej();
w.setUserBounds(x.left,
x.top,
x.width,
x.height);
w.show();
w.setZIndex(this.getZIndex()+1);
},
__el:function(y){var z=this._resizeActive;
var A=this.getSizeHint();
var B=this.__resizeStart;
var C=B.width;
var D=B.height;
var E=B.left;
var F=B.top;
if(z&1||z&2){var G=y.getDocumentTop()-this.__resizeTop;
if(z&1){D-=G;
}else{D+=G;
}
if(D<A.minHeight){D=A.minHeight;
}else if(D>A.maxHeight){D=A.maxHeight;
}
if(z&1){F+=B.height-D;
}}if(z&4||z&8){var G=y.getDocumentLeft()-this.__resizeLeft;
if(z&4){C-=G;
}else{C+=G;
}
if(C<A.minWidth){C=A.minWidth;
}else if(C>A.maxWidth){C=A.maxWidth;
}
if(z&4){E+=B.width-C;
}}return {left:E,
top:F,
width:C,
height:D};
},
__em:{1:m,
2:p,
4:g,
8:u,
5:c,
6:n,
9:l,
10:j},
__en:function(y){if(!this.getResizable()){return;
}var H=this.getContentLocation();
var I=this.getResizeAllEdges();
var J=this.getResizeSensitivity();
var K=y.getDocumentLeft();
var L=y.getDocumentTop();
var z=0;
if(I&&Math.abs(H.top-L)<J){z+=1;
}else if(Math.abs(H.bottom-L)<J){z+=2;
}
if(I&&Math.abs(H.left-K)<J){z+=4;
}else if(Math.abs(H.right-K)<J){z+=8;
}this._resizeActive=z;
},
__eo:function(y){if(!this._resizeActive){return;
}this.addState(a);
this.capture();
this.__resizeLeft=y.getDocumentLeft();
this.__resizeTop=y.getDocumentTop();
this.__resizeStart=qx.lang.Object.copy(this.getBounds());
if(this.getUseResizeFrame()){this.__ek();
}y.stop();
},
__ep:function(y){if(!this._resizeActive){return;
}if(this.getUseResizeFrame()){this.__ej().exclude();
}var x=this.__el(y);
this.setWidth(x.width);
this.setHeight(x.height);
this.setLayoutProperties({left:x.left,
top:x.top});
this._resizeActive=0;
this.removeState(a);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
},
__eq:function(y){if(!this._resizeActive){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(r);
if(this.getUseMoveFrame()){this.__getMoveFrame().exclude();
}},
__er:function(y){if(this.hasState(a)){var x=this.__el(y);
if(this.getUseResizeFrame()){var w=this.__ej();
w.setUserBounds(x.left,
x.top,
x.width,
x.height);
}else{this.setWidth(x.width);
this.setHeight(x.height);
this.setLayoutProperties({left:x.left,
top:x.top});
}y.stop();
}else if(!this.hasState(s)){this.__en(y);
var z=this._resizeActive;
var M=this.getApplicationRoot();
if(z){var N=this.__em[z];
this.setCursor(N);
M.setGlobalCursor(N);
}else if(this.getCursor()){this.resetCursor();
M.resetGlobalCursor();
}}},
__es:function(y){if(this.getCursor()&&!this.hasState(a)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},
destruct:function(){this._disposeObjects(h);
}});
})();
(function(){var a="move",
b="Boolean",
c="mouseup",
d="mousedown",
f="losecapture",
g="qx.ui.core.MMovable",
h="mousemove",
i="_applyMoveable",
j="maximized",
k="__moveFrame",
l="move-frame";
qx.Mixin.define(g,
{properties:{movable:{check:b,
init:true,
apply:i},
useMoveFrame:{check:b,
init:false}},
members:{_activateMoveHandle:function(m){if(this.__moveHandle){throw new Error("The move handle could not be redefined!");
}this.__moveHandle=m;
m.addListener(d,
this._onMoveMouseDown,
this);
m.addListener(c,
this._onMoveMouseUp,
this);
m.addListener(h,
this._onMoveMouseMove,
this);
m.addListener(f,
this.__ew,
this);
},
__et:function(){var n=this.__moveFrame;
if(!n){n=this.__moveFrame=new qx.ui.core.Widget();
n.setAppearance(l);
n.exclude();
qx.core.Init.getApplication().getRoot().add(n);
}return n;
},
__eu:function(){var o=this.getBounds();
var n=this.__et();
n.setUserBounds(o.left,
o.top,
o.width,
o.height);
n.show();
n.setZIndex(this.getZIndex()+1);
},
__ev:function(p){var q=this._dragRange;
var r=Math.max(q.left,
Math.min(q.right,
p.getDocumentLeft()));
var s=Math.max(q.top,
Math.min(q.bottom,
p.getDocumentTop()));
return {left:this._dragLeft+r,
top:this._dragTop+s};
},
_onMoveMouseDown:function(p){if(!this.getMovable()||this.hasState(j)){return;
}var t=this.getLayoutParent();
var u=t.getContentLocation();
var v=t.getBounds();
this._dragRange={left:u.left,
top:u.top,
right:u.left+v.width,
bottom:u.top+v.height};
var w=this.getContainerLocation();
this._dragLeft=w.left-p.getDocumentLeft();
this._dragTop=w.top-p.getDocumentTop();
this.addState(a);
this.__moveHandle.capture();
if(this.getUseMoveFrame()){this.__eu();
}p.stop();
},
_onMoveMouseMove:function(p){if(!this.hasState(a)){return;
}var x=this.__ev(p);
if(this.getUseMoveFrame()){this.__et().setDomPosition(x.left,
x.top);
}else{this.setDomPosition(x.left,
x.top);
}},
_onMoveMouseUp:function(p){if(!this.hasState(a)){return;
}this.removeState(a);
this.__moveHandle.releaseCapture();
var x=this.__ev(p);
this.setLayoutProperties({left:x.left,
top:x.top});
if(this.getUseMoveFrame()){this.__et().exclude();
}},
__ew:function(p){if(!this.hasState(a)){return;
}this.removeState(a);
if(this.getUseMoveFrame()){this.__et().exclude();
}}},
destruct:function(){this._disposeObjects(k);
}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,
{members:{setDesktop:function(b){this.assertInterface(b,
qx.ui.window.IDesktop);
},
changeActiveWindow:function(c,
d){},
updateStack:function(){},
bringToFront:function(e){this.assertInstance(e,
qx.ui.window.Window);
},
sendToBack:function(e){this.assertInstance(e,
qx.ui.window.Window);
}}});
})();
(function(){var a="qx.ui.window.WindowManager";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.ui.window.IWindowManager,
members:{setDesktop:function(b){this._desktop=b;
this.updateStack();
},
changeActiveWindow:function(c,
d){this.bringToFront(c);
},
_minZIndex:1e5,
updateStack:function(){this._desktop.unblockContent();
var e=this._desktop.getWindows();
var f=this._minZIndex-1;
var g=false;
var h,
j;
for(var k=0,
m=e.length;k<m;k++){h=e[k];
if(!h.isVisible()){continue;
}f+=2;
h.setZIndex(f);
if(h.getModal()){this._desktop.blockContent(f-1);
}g=g||h.getActive();
j=h;
}
if(!g&&j){j.setActive(true);
}},
bringToFront:function(h){var e=this._desktop.getWindows();
var n=qx.lang.Array.remove(e,
h);
if(n){e.push(h);
this.updateStack();
}},
sendToBack:function(h){var e=this._desktop.getWindows();
var n=qx.lang.Array.remove(_windows,
h);
if(n){e.unshift(h);
this.updateStack();
}}}});
})();
(function(){var a="Boolean",
b="captionbar",
c="qx.event.type.Event",
d="maximized",
f="maximize-button",
g="_applyCaptionBarChange",
h="restore-button",
i="minimize-button",
j="close-button",
k="execute",
l="title",
m="icon",
n="pane",
o="statusbar",
p="statusbar-text",
q="mousedown",
r="String",
s="active",
t="beforeClose",
u="beforeMinimize",
v="changeStatus",
w="changeIcon",
x="excluded",
y="_applyCaption",
z="_applyActive",
A="beforeRestore",
B="minimize",
C="dblclick",
D="changeModal",
E="spacer",
F="_applyShowStatusbar",
G="click",
H="_applyStatus",
I="qx.ui.window.Window",
J="changeCaption",
K="mouseup",
L="_applyIcon",
M="beforeMaximize",
N="maximize",
O="restore",
P="window",
Q="close",
R="changeActive";
qx.Class.define(I,
{extend:qx.ui.core.Widget,
include:[qx.ui.core.MRemoteChildrenHandling,
qx.ui.core.MRemoteLayoutHandling,
qx.ui.core.MResizable,
qx.ui.core.MMovable,
qx.ui.core.MBlocker],
construct:function(S,
T,
U){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(b);
this._createChildControl(n);
if(T!=null){this.setIcon(T);
}
if(S!=null){this.setCaption(S);
}this._parentWindow=U||null;
this._updateCaptionBar();
this.addListener(q,
this._onWindowEventStop);
this.addListener(K,
this._onWindowEventStop);
this.addListener(G,
this._onWindowEventStop);
this.addListener(q,
this._onWindowMouseDown,
this,
true);
qx.core.Init.getApplication().getRoot().add(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},
statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.WindowManager},
events:{"beforeClose":c,
"close":c,
"beforeMinimize":c,
"minimize":c,
"beforeMaximize":c,
"maximize":c,
"beforeRestore":c,
"restore":c},
properties:{appearance:{refine:true,
init:P},
visibility:{refine:true,
init:x},
focusable:{refine:true,
init:true},
active:{check:a,
init:false,
apply:z,
event:R},
modal:{check:a,
init:false,
event:D},
caption:{apply:y,
event:J,
nullable:true},
icon:{check:r,
nullable:true,
apply:L,
event:w,
themeable:true},
status:{check:r,
nullable:true,
apply:H,
event:v},
showClose:{check:a,
init:true,
apply:g,
themeable:true},
showMaximize:{check:a,
init:true,
apply:g,
themeable:true},
showMinimize:{check:a,
init:true,
apply:g,
themeable:true},
allowClose:{check:a,
init:true,
apply:g},
allowMaximize:{check:a,
init:true,
apply:g},
allowMinimize:{check:a,
init:true,
apply:g},
showStatusbar:{check:a,
init:false,
apply:F}},
members:{getChildrenContainer:function(){return this._getChildControl(n);
},
_getStyleTarget:function(){return this._getChildControl(n);
},
_forwardStates:{active:true,
maximized:true},
setLayoutParent:function(V){{};
arguments.callee.base.call(this,
V);
},
_createChildControlImpl:function(W){var X;
switch(W){case o:X=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(X);
X.add(this._getChildControl(p));
break;
case p:X=new qx.ui.basic.Label();
X.setContent(this.getStatus());
break;
case n:X=new qx.ui.container.Composite();
this._add(X,
{flex:1});
break;
case b:var Y=new qx.ui.layout.Grid();
Y.setColumnFlex(2,
1);
Y.setRowFlex(0,
1);
X=new qx.ui.container.Composite(Y);
this._add(X);
X.addListener(C,
this._onCaptionMouseDblClick,
this);
this._activateMoveHandle(X);
break;
case m:X=new qx.ui.basic.Image(this.getIcon());
this._getChildControl(b).add(X,
{row:0,
column:0});
break;
case l:X=new qx.ui.basic.Label(this.getCaption());
this._getChildControl(b).add(X,
{row:0,
column:1});
break;
case E:X=new qx.ui.core.Spacer();
this._getChildControl(b).add(X,
{row:0,
column:2});
break;
case i:X=new qx.ui.form.Button();
X.setFocusable(false);
X.addListener(k,
this._onMinimizeButtonClick,
this);
this._getChildControl(b).add(X,
{row:0,
column:3});
break;
case h:X=new qx.ui.form.Button();
X.setFocusable(false);
X.addListener(k,
this._onRestoreButtonClick,
this);
this._getChildControl(b).add(X,
{row:0,
column:4});
break;
case f:X=new qx.ui.form.Button();
X.setFocusable(false);
X.addListener(k,
this._onMaximizeButtonClick,
this);
this._getChildControl(b).add(X,
{row:0,
column:5});
break;
case j:X=new qx.ui.form.Button();
X.setFocusable(false);
X.addListener(k,
this._onCloseButtonClick,
this);
this._getChildControl(b).add(X,
{row:0,
column:6});
break;
}return X||arguments.callee.base.call(this,
W);
},
_updateCaptionBar:function(){var ba;
if(this.getIcon()){this._showChildControl(m);
}else{this._excludeChildControl(m);
}
if(this.getCaption()){this._showChildControl(l);
}else{this._excludeChildControl(l);
}
if(this.getShowMinimize()){this._showChildControl(i);
ba=this._getChildControl(i);
this.getAllowMinimize()?ba.resetEnabled():ba.setEnabled(false);
}else{this._excludeChildControl(i);
}
if(this.getShowMaximize()){if(this.hasState(d)){this._showChildControl(h);
this._excludeChildControl(f);
}else{this._showChildControl(f);
this._excludeChildControl(h);
}ba=this._getChildControl(f);
this.getAllowMaximize()?ba.resetEnabled():ba.setEnabled(false);
}else{this._excludeChildControl(f);
this._excludeChildControl(h);
}
if(this.getShowClose()){this._showChildControl(j);
ba=this._getChildControl(j);
this.getAllowClose()?ba.resetEnabled():ba.setEnabled(false);
}else{this._excludeChildControl(j);
}},
close:function(){if(this.fireNonBubblingEvent(t,
qx.event.type.Event,
[false,
true])){this.hide();
this.fireEvent(Q);
}},
open:function(){this.show();
this.setActive(true);
this.focus();
},
maximize:function(){var V=this.getLayoutParent();
if(!V){return;
}
if(V.supportsMaximize()){if(this.fireNonBubblingEvent(M,
qx.event.type.Event,
[false,
true])){var bb=this.getLayoutProperties();
this.__restoredLeft=bb.left;
this.__restoredTop=bb.top;
this.setLayoutProperties({left:null,
top:null,
edge:0});
this.addState(d);
this._updateCaptionBar();
this.fireEvent(N);
}}},
minimize:function(){if(this.fireNonBubblingEvent(u,
qx.event.type.Event,
[false,
true])){this.hide();
this.fireEvent(B);
}},
restore:function(){if(!this.hasState(d)){return;
}
if(this.fireNonBubblingEvent(A,
qx.event.type.Event,
[false,
true])){var bc=this.__restoredLeft;
var bd=this.__restoredTop;
this.setLayoutProperties({edge:null,
left:bc,
top:bd});
this.removeState(d);
this._updateCaptionBar();
this.fireEvent(O);
}},
moveTo:function(bc,
bd){if(this.hasState(d)){return;
}this.setLayoutProperties({left:bc,
top:bd});
},
getParentWindow:function(){return this._parentWindow;
},
_applyActive:function(be,
bf){if(bf){this.removeState(s);
}else{this.addState(s);
}},
_applyShowStatusbar:function(be,
bf){if(be){this._showChildControl(o);
}else{this._excludeChildControl(o);
}},
_applyCaptionBarChange:function(be,
bf){this._updateCaptionBar();
},
_applyStatus:function(be,
bf){var bg=this._getChildControl(p,
true);
if(bg){bg.setContent(be);
}},
_applyCaption:function(be,
bf){this._getChildControl(l).setContent(be);
},
_applyIcon:function(be,
bf){this._getChildControl(m).setSource(be);
},
_onWindowEventStop:function(bh){bh.stopPropagation();
},
_onWindowMouseDown:function(bh){this.setActive(true);
},
_onCaptionMouseDblClick:function(bh){if(this.getAllowMaximize()){this.hasState(d)?this.restore():this.maximize();
}},
_onMinimizeButtonClick:function(bh){this.minimize();
this._getChildControl(i).reset();
},
_onRestoreButtonClick:function(bh){this.restore();
this._getChildControl(h).reset();
},
_onMaximizeButtonClick:function(bh){this.maximize();
this._getChildControl(f).reset();
},
_onCloseButtonClick:function(bh){this.close();
this._getChildControl(j).reset();
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,
{members:{setWindowManager:function(b){this.assertInterface(b,
qx.ui.window.IWindowManager);
},
getWindows:function(){},
supportsMaximize:function(){},
blockContent:function(c){this.assertInteger(c);
},
unblockContent:function(){}}});
})();
(function(){var a="Number",
b="qx.event.type.Event",
c="_applyFirstColumnX",
d="Integer",
e="qx.ui.table.pane.Model",
f="_tableColumnModel",
g="_applyMaxColumnCount",
h="visibilityChangedPre";
qx.Class.define(e,
{extend:qx.core.Object,
construct:function(i){arguments.callee.base.call(this);
i.addListener(h,
this._onColVisibilityChanged,
this);
this._tableColumnModel=i;
},
events:{"modelChanged":b},
statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},
properties:{firstColumnX:{check:d,
init:0,
apply:c},
maxColumnCount:{check:a,
init:-1,
apply:g}},
members:{_applyFirstColumnX:function(j,
k){this._columnCount=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},
_applyMaxColumnCount:function(j,
k){this._columnCount=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},
setTableColumnModel:function(i){this._tableColumnModel=i;
},
_onColVisibilityChanged:function(l){this._columnCount=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},
getColumnCount:function(){if(this._columnCount==null){var m=this.getFirstColumnX();
var n=this.getMaxColumnCount();
var o=this._tableColumnModel.getVisibleColumnCount();
if(n==-1||(m+n)>o){this._columnCount=o-m;
}else{this._columnCount=n;
}}return this._columnCount;
},
getColumnAtX:function(p){var m=this.getFirstColumnX();
return this._tableColumnModel.getVisibleColumnAtX(m+p);
},
getX:function(q){var m=this.getFirstColumnX();
var n=this.getMaxColumnCount();
var r=this._tableColumnModel.getVisibleX(q)-m;
if(r>=0&&(n==-1||r<n)){return r;
}else{return -1;
}},
getColumnLeft:function(q){var s=0;
var t=this.getColumnCount();
for(var r=0;r<t;r++){var u=this.getColumnAtX(r);
if(u==q){return s;
}s+=this._tableColumnModel.getColumnWidth(u);
}return -1;
},
getTotalWidth:function(){var v=0;
var t=this.getColumnCount();
for(var r=0;r<t;r++){var q=this.getColumnAtX(r);
v+=this._tableColumnModel.getColumnWidth(q);
}return v;
}},
destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var a="checked",
b="String",
c="menu-checkbox",
d="_applyChecked",
f="Boolean",
g="changeName",
h="changeChecked",
i="changeValue",
j="qx.ui.menu.CheckBox";
qx.Class.define(j,
{extend:qx.ui.menu.AbstractButton,
implement:qx.ui.form.IFormElement,
construct:function(k,
l){arguments.callee.base.call(this);
if(k!=null){this.setLabel(k);
}
if(l!=null){this.setMenu(l);
}},
properties:{appearance:{refine:true,
init:c},
value:{check:b,
nullable:true,
event:i},
name:{check:b,
nullable:true,
event:g},
checked:{check:f,
init:false,
apply:d,
event:h}},
members:{_applyChecked:function(m,
n){m?this.addState(a):this.removeState(a);
},
_onMouseUp:function(o){if(o.isLeftPressed()){this.toggleChecked();
}},
_onKeyPress:function(o){this.toggleChecked();
}}});
})();
(function(){var a="white",
b="black",
c="#3E6CA8",
d="#EBE9ED",
e="#A7A6AA",
f="#F3F0F5",
g="qx.theme.classic.Color",
h="#FFFFE1",
i="#F3F8FD",
j="#888888",
k="Windows Classic",
l="#DBEAF9",
m="#BCCEE5",
n="#F9F8E9",
o="#A5BDDE",
p="#F4F4F4",
q="#7CA0CF",
r="#DCDFE4",
s="#3E5B97",
t="#F6F5F7",
u="#85878C";
qx.Theme.define(g,
{title:k,
colors:{"background":d,
"background-light":f,
"background-focused":i,
"background-focused-inner":l,
"background-disabled":p,
"background-selected":c,
"background-field":a,
"border-lead":j,
"border-light":a,
"border-light-shadow":r,
"border-dark-shadow":e,
"border-dark":u,
"border-focused-light":m,
"border-focused-light-shadow":o,
"border-focused-dark-shadow":q,
"border-focused-dark":c,
"text":b,
"text-disabled":e,
"text-selected":a,
"text-focused":s,
"tooltip":h,
"tooltip-text":b,
"button":d,
"button-hovered":t,
"button-abandoned":n,
"button-checked":f,
"window-active-caption-text":[255,
255,
255],
"window-inactive-caption-text":[255,
255,
255],
"window-active-caption":[51,
94,
168],
"window-inactive-caption":[111,
161,
217],
"date-chooser":a,
"date-chooser-title":[116,
116,
116],
"date-chooser-selected":[52,
52,
52],
"effect":[254,
200,
60],
"table-pane":a,
"table-header":[242,
242,
242],
"table-header-border":[214,
213,
217],
"table-header-cell":[235,
234,
219],
"table-header-cell-hover":[255,
255,
255],
"table-focus-indicator":[179,
217,
255],
"table-row-background-focused-selected":[90,
138,
211],
"table-row-background-focused":[221,
238,
255],
"table-row-background-selected":[51,
94,
168],
"table-row-background-even":[250,
248,
243],
"table-row-background-odd":[255,
255,
255],
"table-row-selected":[255,
255,
255],
"table-row":[0,
0,
0]}});
})();
(function(){var a="solid",
b="Color",
c="double",
d="px",
e="dotted",
f="dashed",
g="none",
h="Number",
i="scale",
j="shorthand",
k="repeat",
l="widthTop",
m="styleRight",
n="styleBottom",
o="100%",
p="widthLeft",
q="String",
r="widthBottom",
s="styleTop",
t="colorBottom",
u="styleLeft",
v="widthRight",
w="colorLeft",
x="colorRight",
y="colorTop",
z="backgroundColor",
A="height",
B="url(",
C=")",
D="repeat-y",
E="qx.ui.decoration.Single",
F="width",
G="no-repeat",
H="repeat-x";
qx.Class.define(E,
{extend:qx.ui.decoration.Abstract,
construct:function(I,
J,
K){arguments.callee.base.call(this);
if(I!==undefined){this.setWidth(I);
}
if(J!==undefined){this.setStyle(J);
}
if(K!==undefined){this.setColor(K);
}},
properties:{widthTop:{check:h,
init:0},
widthRight:{check:h,
init:0},
widthBottom:{check:h,
init:0},
widthLeft:{check:h,
init:0},
styleTop:{nullable:true,
check:[a,
e,
f,
c],
init:a},
styleRight:{nullable:true,
check:[a,
e,
f,
c],
init:a},
styleBottom:{nullable:true,
check:[a,
e,
f,
c],
init:a},
styleLeft:{nullable:true,
check:[a,
e,
f,
c],
init:a},
colorTop:{nullable:true,
check:b},
colorRight:{nullable:true,
check:b},
colorBottom:{nullable:true,
check:b},
colorLeft:{nullable:true,
check:b},
backgroundColor:{nullable:true,
check:b},
backgroundImage:{check:q,
nullable:true},
backgroundRepeat:{check:[k,
H,
D,
G,
i],
init:k},
stretchedImage:{check:q,
nullable:true},
left:{group:[p,
u,
w]},
right:{group:[v,
m,
x]},
top:{group:[l,
s,
y]},
bottom:{group:[r,
n,
t]},
width:{group:[l,
v,
r,
p],
mode:j},
style:{group:[s,
m,
n,
u],
mode:j},
color:{group:[y,
x,
t,
w],
mode:j}},
members:{_getStyles:function(I,
L){var M=this.getBackgroundRepeat();
var N=null;
if(M===i){M=null;
}else{N=qx.util.ResourceManager.toUri(qx.util.AliasManager.getInstance().resolve(this.getBackgroundImage()));
}var O={"borderTopWidth":this.getWidthTop()+d,
"borderTopStyle":this.getStyleTop()||g,
"borderTopColor":this._resolveColor(this.getColorTop()),
"borderRightWidth":this.getWidthRight()+d,
"borderRightStyle":this.getStyleRight()||g,
"borderRightColor":this._resolveColor(this.getColorRight()),
"borderBottomWidth":this.getWidthBottom()+d,
"borderBottomStyle":this.getStyleBottom()||g,
"borderBottomColor":this._resolveColor(this.getColorBottom()),
"borderLeftWidth":this.getWidthLeft()+d,
"borderLeftStyle":this.getStyleLeft()||g,
"borderLeftColor":this._resolveColor(this.getColorLeft()),
"backgroundImage":N?B+N+C:null,
"backgroundRepeat":M};
return O;
},
_updateScaledImage:function(P,
I,
L){var N=qx.util.ResourceManager.toUri(qx.util.AliasManager.getInstance().resolve(this.getBackgroundImage()));
if(!N||this.getBackgroundRepeat()!==i){P.removeAll();
return;
}var Q=P.getChild(0);
if(!Q){Q=new qx.html.Image();
P.add(Q);
}Q.setSource(N);
Q.setStyle(A,
o);
Q.setStyle(F,
o);
},
render:function(R,
I,
L,
S,
T){if(T.style||T.init){R.setStyles(this._getStyles());
this._updateScaledImage(R,
I,
L);
}
if(T.bgcolor||T.init){R.setStyle(z,
this._resolveColor(S||this.getBackgroundColor())||null);
}
if(T.size||T.init){qx.ui.decoration.Util.updateSize(R,
I,
L,
this.getWidthLeft()+this.getWidthRight(),
this.getWidthTop()+this.getWidthBottom());
}},
_emptyStyles:{borderTopWidth:null,
borderTopStyle:null,
borderTopColor:null,
borderRightWidth:null,
borderRightStyle:null,
borderRightColor:null,
borderBottomWidth:null,
borderBottomStyle:null,
borderBottomColor:null,
borderLeftWidth:null,
borderLeftStyle:null,
borderLeftColor:null,
backgroundColor:null,
backgroundImage:null,
backgroundRepeat:null},
reset:function(R){R.setStyles(this._emptyStyles);
R.removeAll();
},
getInsets:function(){return {top:this.getWidthTop(),
right:this.getWidthRight(),
bottom:this.getWidthBottom(),
left:this.getWidthLeft()};
}}});
})();
(function(){var a="Number",
b="Color",
c="px",
d="100%",
e="shorthand",
f="qx.ui.decoration.Double",
g="solid",
h="innerWidthRight",
i="innerColorBottom",
j="innerWidthBottom",
k="innerWidthTop",
l="height",
m="innerWidthLeft",
n="width",
o="scale",
p="innerColorRight",
q="innerColorTop",
r="innerColorLeft",
s="absolute";
qx.Class.define(f,
{extend:qx.ui.decoration.Single,
properties:{innerWidthTop:{check:a,
init:0},
innerWidthRight:{check:a,
init:0},
innerWidthBottom:{check:a,
init:0},
innerWidthLeft:{check:a,
init:0},
innerWidth:{group:[k,
h,
j,
m],
mode:e},
innerColorTop:{nullable:true,
check:b},
innerColorRight:{nullable:true,
check:b},
innerColorBottom:{nullable:true,
check:b},
innerColorLeft:{nullable:true,
check:b},
innerColor:{group:[q,
p,
i,
r],
mode:e}},
members:{_updateScaledImage:function(t,
u,
v){var t=t.getChild(0);
var w=qx.util.ResourceManager.toUri(qx.util.AliasManager.getInstance().resolve(this.getBackgroundImage()));
if(!w||this.getBackgroundRepeat()!==o){t.removeAll();
return;
}var x=t.getChild(0);
if(!x){x=new qx.html.Image();
t.add(x);
}x.setSource(w);
x.setStyle(l,
d);
x.setStyle(n,
d);
},
_getInnerStyles:function(u,
v){var y={borderTopWidth:this.getInnerWidthTop()+c,
borderTopColor:this._resolveColor(this.getInnerColorTop()),
borderRightWidth:this.getInnerWidthRight()+c,
borderRightColor:this._resolveColor(this.getInnerColorRight()),
borderBottomWidth:this.getInnerWidthBottom()+c,
borderBottomColor:this._resolveColor(this.getInnerColorBottom()),
borderLeftWidth:this.getInnerWidthLeft()+c,
borderLeftColor:this._resolveColor(this.getInnerColorLeft()),
backgroundColor:this._resolveColor(this.getBackgroundColor()),
borderStyle:g};
return y;
},
render:function(z,
u,
v,
A,
B){var C=z.getChild(0);
if(!C){C=new qx.html.Element();
C.setStyles({position:s,
top:0,
left:0});
z.add(C);
}
if(B.style||B.bgcolor||B.init){C.setStyles(this._getInnerStyles());
}
if(B.size||B.init){var D=u-(this.getWidthLeft()+this.getWidthRight());
var E=this.getInnerWidthLeft()+this.getInnerWidthRight();
var F=v-(this.getWidthTop()+this.getWidthBottom());
var G=this.getInnerWidthTop()+this.getInnerWidthBottom();
qx.ui.decoration.Util.updateSize(C,
D,
F,
E,
G);
}arguments.callee.base.call(this,
z,
u,
v,
A,
B);
},
reset:function(z){var C=z.getChild(0);
if(C){z.removeAt(0);
}arguments.callee.base.call(this,
z);
},
getInsets:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),
right:this.getWidthRight()+this.getInnerWidthRight(),
bottom:this.getWidthBottom()+this.getInnerWidthBottom(),
left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var a="border-dark-shadow",
b="border-light",
c="border-dark",
d="border-light-shadow",
e="border-focused-light",
f="border-focused-dark",
g="border-focused-dark-shadow",
h="border-focused-light-shadow",
i="#ffffff",
j="#a7a6aa",
k="dotted",
l="background",
m="solid",
n="tooltip-text",
o="black",
p="qx/decoration/Classic",
q="border-lead",
r="qx.theme.classic.Decoration",
s="Classic",
t="white";
qx.Theme.define(r,
{title:s,
resource:p,
decorations:{"black":{decorator:qx.ui.decoration.Uniform,
style:{width:1,
color:o}},
"white":{decorator:qx.ui.decoration.Uniform,
style:{width:1,
color:t}},
"dark-shadow":{decorator:qx.ui.decoration.Uniform,
style:{width:1,
color:a}},
"light-shadow":{decorator:qx.ui.decoration.Uniform,
style:{width:1,
color:d}},
"light":{decorator:qx.ui.decoration.Uniform,
style:{width:1,
color:b}},
"dark":{decorator:qx.ui.decoration.Uniform,
style:{width:1,
color:c}},
"inset":{decorator:qx.ui.decoration.Double,
style:{width:1,
innerWidth:1,
color:[a,
b,
b,
a],
innerColor:[c,
d,
d,
c]}},
"outset":{decorator:qx.ui.decoration.Double,
style:{width:1,
innerWidth:1,
color:[d,
c,
c,
d],
innerColor:[b,
a,
a,
b]}},
"groove":{decorator:qx.ui.decoration.Double,
style:{width:1,
innerWidth:1,
color:[a,
b,
b,
a],
innerColor:[b,
a,
a,
b]}},
"ridge":{decorator:qx.ui.decoration.Double,
style:{width:1,
innerWidth:1,
color:[b,
a,
a,
b],
innerColor:[a,
b,
b,
a]}},
"inset-thin":{decorator:qx.ui.decoration.Single,
style:{width:1,
color:[a,
b,
b,
a]}},
"outset-thin":{decorator:qx.ui.decoration.Single,
style:{width:1,
color:[b,
a,
a,
b]}},
"line-left":{decorator:qx.ui.decoration.Single,
style:{widthLeft:1,
colorLeft:a}},
"line-right":{decorator:qx.ui.decoration.Single,
style:{widthRight:1,
colorRight:a}},
"line-top":{decorator:qx.ui.decoration.Single,
style:{widthTop:1,
colorTop:a}},
"line-bottom":{decorator:qx.ui.decoration.Single,
style:{widthBottom:1,
colorBottom:a}},
"divider-vertical":{decorator:qx.ui.decoration.Single,
style:{widthTop:1,
colorTop:a}},
"divider-horizontal":{decorator:qx.ui.decoration.Single,
style:{widthLeft:1,
colorLeft:a}},
"focused-inset":{decorator:qx.ui.decoration.Double,
style:{width:1,
innerWidth:1,
color:[g,
e,
e,
g],
innerColor:[f,
h,
h,
f]}},
"focused-outset":{decorator:qx.ui.decoration.Double,
style:{width:1,
innerWidth:1,
color:[h,
f,
f,
h],
innerColor:[e,
g,
g,
e]}},
"lead-item":{decorator:qx.ui.decoration.Double,
style:{width:1,
style:k,
color:q}},
"tooltip":{decorator:qx.ui.decoration.Uniform,
style:{width:1,
color:n}},
"toolbar-part-handle":{decorator:qx.ui.decoration.Single,
style:{width:1,
backgroundColor:l,
style:m,
colorTop:i,
colorLeft:i,
colorRight:j,
colorBottom:j}},
"menu-separator":{decorator:qx.ui.decoration.Single,
style:{width:1,
widthLeft:0,
widthRight:0,
colorTop:c,
colorBottom:b}}}});
})();
(function(){var a="Liberation Sans",
b="Verdana",
c="Bitstream Vera Sans",
d="Lucida Grande",
e="Tahoma",
f="Bitstream Vera Sans Mono",
g="Courier New",
h="Classic",
i="qx.theme.classic.Font",
j="Consolas",
k="monospace";
qx.Theme.define(i,
{title:h,
fonts:{"default":{size:11,
lineHeight:1.4,
family:[d,
e,
b,
c,
a]},
"small":{size:10,
lineHeight:1.3,
family:[d,
e,
b,
c,
a]},
"bold":{size:11,
lineHeight:1.4,
family:[d,
e,
b,
c,
a],
bold:true},
"large":{size:16,
lineHeight:1.4,
family:[d,
e,
b,
c,
a]},
"monospace":{size:11,
lineHeight:1.4,
family:[j,
f,
g,
k]}}});
})();
(function(){var a="button",
b="undefined",
c="background",
d="solid",
e="atom",
f="inset",
g="widget",
h="focused-inset",
i="middle",
j="outset",
k="spinner",
l="menu-button",
m="gray",
n="text-disabled",
o="checkbox",
p="groupbox",
q="textfield",
r="decoration/arrows/down.gif",
s="list",
t="button-hovered",
u="scrollbar",
v="inset-thin",
w="text-selected",
x="center",
y="datechooser/button",
z="date-chooser",
A="outset-thin",
B="label",
C="date-chooser-title",
D="border-dark-shadow",
E="radiobutton",
F="default",
G="bold",
H="border-dark",
I="table-header-border",
J="combobox",
K="background-focused",
L="toolbar-button",
M="button-abandoned",
N="background-light",
O="background-field",
P="popup",
Q="background-selected",
R="decoration/arrows/right.gif",
S="background-disabled",
T="scrollbar/button",
U="combobox/button",
V="dark-shadow",
W="white",
X="border-light",
Y="border-light-shadow",
ba="right-top",
bb=".png",
bc="datechooser",
bd="selectbox",
be="image",
bf="decoration/form/",
bg="tooltip",
bh="decoration/arrows/left.gif",
bi="black",
bj="radiobutton-hovered",
bk="decoration/cursors/",
bl="effect",
bm="icon/16/places/folder.png",
bn="nodrop",
bo="table-header-cell",
bp="decoration/arrows/up-small.gif",
bq="window-active-caption-text",
br="move",
bs="tree-folder-icon",
bt="#D6D5D9",
bu="qx.theme.classic.Appearance",
bv="decoration/menu/checkbox.gif",
bw="decoration/arrows/rewind.gif",
bx="radiobutton-disabled",
by="table-pane",
bz="focused-outset",
bA="checkbox-hovered",
bB="text",
bC="radiobutton-checked",
bD="slidebar",
bE="icon",
bF="icon/16/apps/office-calendar.png",
bG="table-header-cell-hover",
bH="window-active-caption",
bI="decoration/arrows/down-small.gif",
bJ="checkbox-checked-focused",
bK="groove",
bL="checkbox-pressed",
bM="tree-folder",
bN="right.gif",
bO="icon/16/mimetypes/text-plain.png",
bP="decoration/window/restore.gif",
bQ="decoration/menu/checkbox-invert.gif",
bR="scrollarea",
bS="window-inactive-caption-text",
bT="button-checked",
bU="up.gif",
bV="checkbox-disabled",
bW="decoration/menu/radiobutton.gif",
bX="decoration/arrows/",
bY="decoration/table/descending.png",
ca="tooltip-text",
cb="checkbox-checked-hovered",
cc="left.gif",
cd="alias",
ce="checkbox-checked-disabled",
cf="decoration/arrows/right-invert.gif",
cg="radiobutton-checked-disabled",
ch="lead-item",
ci="checkbox-focused",
cj="divider-horizontal",
ck="top",
cl="radiobutton-checked-hovered",
cm="decoration/window/minimize.gif",
cn="checkbox-checked",
co="down.gif",
cp="radiobutton-checked-focused",
cq="left",
cr="decoration/menu/radiobutton-invert.gif",
cs="slider",
ct="decoration/table/select-column-order.png",
cu="decoration/arrows/next.gif",
cv="decoration/window/maximize.gif",
cw="window-inactive-caption",
cx="checkbox-checked-pressed",
cy="menu-separator",
cz="decoration/splitpane/knob-vertical.png",
cA=".gif",
cB="tree-folder-label",
cC="decoration/arrows/forward.gif",
cD="radiobutton-checked-pressed",
cE="radiobutton-pressed",
cF="copy",
cG="radiobutton-focused",
cH="decoration/tree/minus.gif",
cI="decoration/splitpane/knob-horizontal.png",
cJ="table-focus-indicator",
cK="Classic",
cL="decoration/table/ascending.png",
cM="icon/16/places/folder-open.png",
cN="decoration/tree/plus.gif",
cO="table-header",
cP="date-chooser-selected",
cQ="toolbar-part-handle",
cR="decoration/window/close.gif",
cS="icon/16/actions/view-refresh.png";
qx.Theme.define(bu,
{title:cK,
appearances:{"widget":{},
"label":{style:function(cT){return {textColor:cT.disabled?n:b};
}},
"image":{style:function(cT){return {opacity:!cT.replacement&&cT.disabled?0.3:b};
}},
"atom":{},
"atom/label":B,
"atom/icon":be,
"root":{style:function(cT){return {backgroundColor:c,
textColor:bB,
font:F};
}},
"popup":g,
"tooltip":{include:P,
style:function(cT){return {backgroundColor:bg,
textColor:ca,
decorator:bg,
padding:[1,
3,
2,
3],
offset:[1,
1,
20,
1]};
}},
"tooltip/atom":e,
"iframe":{style:function(cT){return {backgroundColor:W,
decorator:f};
}},
"move-frame":{style:function(cT){return {decorator:V};
}},
"resize-frame":{style:function(cT){return {decorator:V};
}},
"dragdrop-cursor":{style:function(cT){var cU=bn;
if(cT.copy){cU=cF;
}else if(cT.move){cU=br;
}else if(cT.alias){cU=cd;
}return {source:bk+cU+cA,
position:ba,
offset:[2,
16,
2,
6]};
}},
"button":{alias:e,
style:function(cT){if(cT.pressed||cT.abandoned||cT.checked){var cV=!cT.inner&&cT.focused?h:f;
}else{var cV=!cT.inner&&cT.focused?bz:j;
}
if(cT.pressed||cT.abandoned||cT.checked){var cW=[4,
3,
2,
5];
}else{var cW=[3,
4];
}return {backgroundColor:cT.abandoned?M:cT.hovered?t:cT.checked?bT:a,
decorator:cV,
padding:cW};
}},
"splitbutton":{},
"splitbutton/button":a,
"splitbutton/arrow":{alias:a,
include:a,
style:function(cT){return {icon:r};
}},
"scrollarea/corner":{style:function(){return {backgroundColor:c,
width:0,
height:0};
}},
"scrollarea":g,
"scrollarea/pane":g,
"scrollarea/scrollbar-x":u,
"scrollarea/scrollbar-y":u,
"list":{alias:bR,
style:function(cT){return {decorator:cT.focused?h:f,
backgroundColor:cT.focused?K:W};
}},
"listitem":{alias:e,
style:function(cT){return {gap:4,
padding:cT.lead?[2,
4]:[3,
5],
backgroundColor:cT.selected?Q:b,
textColor:cT.selected?w:b,
decorator:cT.lead?ch:b};
}},
"textfield":{style:function(cT){return {decorator:cT.focused?h:f,
padding:[2,
3],
textColor:cT.disabled?n:b,
backgroundColor:cT.disabled?S:cT.focused?K:O};
}},
"textarea":q,
"checkbox":{alias:e,
style:function(cT){var cU;
if(cT.checked&&cT.focused){cU=bJ;
}else if(cT.checked&&cT.disabled){cU=ce;
}else if(cT.checked&&cT.pressed){cU=cx;
}else if(cT.checked&&cT.hovered){cU=cb;
}else if(cT.checked){cU=cn;
}else if(cT.disabled){cU=bV;
}else if(cT.focused){cU=ci;
}else if(cT.pressed){cU=bL;
}else if(cT.hovered){cU=bA;
}else{cU=o;
}return {icon:bf+cU+bb,
gap:6};
}},
"radiobutton":{alias:o,
include:o,
style:function(cT){var cU;
if(cT.checked&&cT.focused){cU=cp;
}else if(cT.checked&&cT.disabled){cU=cg;
}else if(cT.checked&&cT.pressed){cU=cD;
}else if(cT.checked&&cT.hovered){cU=cl;
}else if(cT.checked){cU=bC;
}else if(cT.disabled){cU=bx;
}else if(cT.focused){cU=cG;
}else if(cT.pressed){cU=cE;
}else if(cT.hovered){cU=bj;
}else{cU=E;
}return {icon:bf+cU+bb};
}},
"spinner":{style:function(cT){return {decorator:cT.focused?h:f,
textColor:cT.disabled?n:b};
}},
"spinner/textfield":{include:q,
style:function(cT){return {decorator:b,
padding:[2,
3]};
}},
"spinner/upbutton":{alias:a,
include:a,
style:function(cT){return {icon:bp,
padding:cT.pressed?[2,
2,
0,
4]:[1,
3,
1,
3],
backgroundColor:cT.hovered?t:a};
}},
"spinner/downbutton":{alias:a,
include:a,
style:function(cT){return {icon:bI,
padding:cT.pressed?[2,
2,
0,
4]:[1,
3,
1,
3],
backgroundColor:cT.hovered?t:a};
}},
"datefield":J,
"datefield/button":{alias:U,
include:U,
style:function(cT){return {icon:bF,
padding:[0,
3],
backgroundColor:cT.disabled?S:cT.focused?K:O,
decorator:b};
}},
"datefield/list":{alias:bc,
include:bc,
style:function(cT){return {decorator:cT.focused?h:f};
}},
"groupbox":{style:function(cT){return {backgroundColor:c};
}},
"groupbox/legend":{alias:e,
style:function(cT){return {backgroundColor:c,
paddingRight:4,
paddingLeft:4,
marginRight:10,
marginLeft:10};
}},
"groupbox/frame":{style:function(cT){return {padding:[12,
9],
decorator:bK};
}},
"check-groupbox":p,
"check-groupbox/legend":{alias:o,
include:o,
style:function(cT){return {backgroundColor:c,
paddingRight:3,
paddingLeft:3,
marginRight:10,
marginLeft:10};
}},
"radio-groupbox":p,
"radio-groupbox/legend":{alias:E,
include:E,
style:function(cT){return {backgroundColor:c,
paddingRight:3,
paddingLeft:3,
marginRight:10,
marginLeft:10};
}},
"toolbar":{style:function(cT){return {decorator:A,
backgroundColor:c};
}},
"toolbar/part":{},
"toolbar/part/container":{},
"toolbar/part/handle":{style:function(cT){return {decorator:cQ,
width:4,
margin:[3,
2]};
}},
"toolbar-separator":{style:function(cT){return {width:1,
margin:[3,
2],
decorator:cj};
}},
"toolbar-button":{alias:e,
style:function(cT){if(cT.pressed||cT.checked||cT.abandoned){var cX=v;
var cW=[3,
2,
1,
4];
}else if(cT.hovered){var cX=A;
var cW=[2,
3];
}else{var cX=b;
var cW=[3,
4];
}return {cursor:F,
decorator:cX,
padding:cW,
backgroundColor:cT.abandoned?M:cT.checked?N:a};
}},
"toolbar-splitbutton":{},
"toolbar-splitbutton/button":L,
"toolbar-splitbutton/arrow":{alias:L,
include:L,
style:function(cT){return {icon:r};
}},
"slidebar":{},
"slidebar/scrollpane":{},
"slidebar/content":{},
"slidebar/button-forward":{alias:a,
include:a,
style:function(cT){return {icon:cu};
}},
"slidebar/button-backward":{alias:a,
include:a,
style:function(cT){return {icon:bh};
}},
"tabview":{},
"tabview/bar":{alias:bD,
style:function(cT){var cY=0,
da=0,
db=0,
dc=0;
if(cT.barTop){db=-2;
}else if(cT.barBottom){cY=-2;
}else if(cT.barRight){dc=-2;
}else{da=-2;
}return {marginBottom:db,
marginTop:cY,
marginLeft:dc,
marginRight:da};
}},
"tabview/pane":{style:function(cT){return {backgroundColor:c,
decorator:j,
padding:10};
}},
"tabview-page":{},
"tabview-page/button":{alias:a,
style:function(cT){var cV=new qx.ui.decoration.Double;
cV.setWidth(1);
cV.setInnerWidth(1);
cV.setColor([Y,
H,
H,
Y]);
cV.setInnerColor([X,
D,
D,
X]);
var cY=0,
da=0,
db=0,
dc=0;
if(cT.barTop||cT.barBottom){var dd=2,
de=2,
df=6,
dg=6;
}else{var dd=6,
de=6,
df=6,
dg=6;
}
if(cT.barTop){cV.setWidthBottom(0);
cV.setInnerWidthBottom(0);
}else if(cT.barRight){cV.setWidthLeft(0);
cV.setInnerWidthLeft(0);
}else if(cT.barBottom){cV.setWidthTop(0);
cV.setInnerWidthTop(0);
}else{cV.setWidthRight(0);
cV.setInnerWidthRight(0);
}
if(cT.checked){if(cT.barTop||cT.barBottom){df+=2;
dg+=2;
}else{dd+=2;
de+=2;
}}else{if(cT.barTop||cT.barBottom){db+=2;
cY+=2;
}else if(cT.barLeft||cT.barRight){da+=2;
dc+=2;
}}
if(cT.checked){if(!cT.firstTab){if(cT.barTop||cT.barBottom){dc=-4;
}else{cY=-4;
}}
if(!cT.lastTab){if(cT.barTop||cT.barBottom){da=-4;
}else{db=-4;
}}}return {zIndex:cT.checked?10:5,
backgroundColor:c,
decorator:cV,
iconPosition:cT.barLeft||cT.barRight?ck:cq,
padding:[dd,
dg,
de,
df],
margin:[cY,
da,
db,
dc]};
}},
"scrollbar":{},
"scrollbar/slider":{alias:cs,
style:function(cT){return {backgroundColor:N};
}},
"scrollbar/button":{alias:a,
include:a,
style:function(cT){var cW;
if(cT.up||cT.down){if(cT.pressed||cT.abandoned||cT.checked){cW=[5,
2,
3,
4];
}else{cW=[4,
3];
}}else{if(cT.pressed||cT.abandoned||cT.checked){cW=[4,
3,
2,
5];
}else{cW=[3,
4];
}}var cU=bX;
if(cT.left){cU+=cc;
}else if(cT.right){cU+=bN;
}else if(cT.up){cU+=bU;
}else{cU+=co;
}return {padding:cW,
icon:cU};
}},
"scrollbar/button-begin":T,
"scrollbar/button-end":T,
"slider":{style:function(cT){return {backgroundColor:N,
decorator:cT.focused?h:f};
}},
"slider/knob":{include:a,
style:function(cT){return {width:14,
height:14,
decorator:j};
}},
"folder-open-button":{style:function(cT){return {source:cT.opened?cH:cN};
}},
"tree-folder":{style:function(cT){return {padding:[2,
3,
2,
0],
icon:cM,
iconOpened:bm};
}},
"tree-folder-icon":{style:function(cT){return {padding:[0,
4,
0,
0]};
}},
"tree-folder-label":{style:function(cT){return {padding:[1,
2],
backgroundColor:cT.selected?Q:b,
textColor:cT.selected?w:b};
}},
"tree-file":{include:bM,
style:function(cT){return {icon:bO};
}},
"tree-file-icon":bs,
"tree-file-label":cB,
"tree":{include:s,
alias:s,
style:function(cT){return {contentPadding:[4,
4,
4,
4]};
}},
"window":{style:function(cT){return {backgroundColor:c,
decorator:cT.maximized?b:j};
}},
"window/pane":{},
"window/captionbar":{style:function(cT){return {padding:1,
backgroundColor:cT.active?bH:cw,
textColor:cT.active?bq:bS};
}},
"window/icon":{style:function(cT){return {marginRight:4};
}},
"window/title":{style:function(cT){return {cursor:F,
font:G,
marginRight:20,
alignY:i};
}},
"window/minimize-button":{include:a,
alias:a,
style:function(cT){return {icon:cm,
padding:cT.pressed||cT.abandoned?[2,
1,
0,
3]:[1,
2]};
}},
"window/restore-button":{include:a,
alias:a,
style:function(cT){return {icon:bP,
padding:cT.pressed||cT.abandoned?[2,
1,
0,
3]:[1,
2]};
}},
"window/maximize-button":{include:a,
alias:a,
style:function(cT){return {icon:cv,
padding:cT.pressed||cT.abandoned?[2,
1,
0,
3]:[1,
2]};
}},
"window/close-button":{include:a,
alias:a,
style:function(cT){return {marginLeft:2,
icon:cR,
padding:cT.pressed||cT.abandoned?[2,
1,
0,
3]:[1,
2]};
}},
"window/statusbar":{style:function(cT){return {decorator:v,
padding:[2,
6]};
}},
"window/statusbar-text":B,
"resizer":{style:function(cT){return {decorator:j};
}},
"splitpane":{},
"splitpane/splitter":{style:function(cT){return {backgroundColor:c};
}},
"splitpane/splitter/knob":{style:function(cT){return {source:cT.horizontal?cI:cz,
padding:2};
}},
"splitpane/slider":{style:function(cT){return {backgroundColor:H,
opacity:0.3};
}},
"selectbox":a,
"selectbox/atom":e,
"selectbox/popup":P,
"selectbox/list":s,
"selectbox/arrow":{style:function(cT){return {source:r,
paddingRight:4,
paddingLeft:5};
}},
"datechooser":{},
"datechooser/navigation-bar":{style:function(cT){return {backgroundColor:z,
padding:[2,
10]};
}},
"datechooser/last-year-button":y,
"datechooser/last-month-button":y,
"datechooser/next-year-button":y,
"datechooser/next-month-button":y,
"datechooser/button/icon":{},
"datechooser/button":{style:function(cT){var dh={width:17,
show:bE};
if(cT.lastYear){dh.icon=bw;
}else if(cT.lastMonth){dh.icon=bh;
}else if(cT.nextYear){dh.icon=cC;
}else if(cT.nextMonth){dh.icon=R;
}
if(cT.pressed||cT.checked||cT.abandoned){dh.decorator=v;
}else if(cT.hovered){dh.decorator=A;
}else{dh.decorator=b;
}
if(cT.pressed||cT.checked||cT.abandoned){dh.padding=[2,
0,
0,
2];
}else if(cT.hovered){dh.padding=1;
}else{dh.padding=2;
}return dh;
}},
"datechooser/month-year-label":{style:function(cT){return {font:G,
textAlign:x};
}},
"datechooser/date-pane":{style:function(cT){return {decorator:new qx.ui.decoration.Single().set({top:[1,
d,
m]}),
backgroundColor:z};
}},
"datechooser-weekday":{style:function(cT){var cX=new qx.ui.decoration.Single().set({bottom:[1,
d,
m]});
return {decorator:cX,
font:G,
textAlign:x,
textColor:cT.weekend?C:z,
backgroundColor:cT.weekend?z:C};
}},
"datechooser-day":{style:function(cT){return {textAlign:x,
decorator:cT.today?bi:b,
textColor:cT.selected?w:cT.otherMonth?n:b,
backgroundColor:cT.selected?cP:b,
padding:[2,
4]};
}},
"datechooser-week":{style:function(cT){if(cT.header){var cX=new qx.ui.decoration.Single().set({right:[1,
d,
m],
bottom:[1,
d,
m]});
}else{var cX=new qx.ui.decoration.Single().set({right:[1,
d,
m]});
}return {textAlign:x,
textColor:C,
padding:[2,
4],
decorator:cX};
}},
"combobox":{style:function(cT){return {decorator:cT.focused?h:f,
textColor:cT.disabled?n:b,
backgroundColor:O};
}},
"combobox/button":{alias:a,
include:a,
style:function(cT){return {icon:r,
backgroundColor:cT.hovered?t:a};
}},
"combobox/popup":P,
"combobox/list":s,
"combobox/textfield":{include:q,
style:function(cT){return {decorator:b,
padding:[2,
3]};
}},
"menu":{style:function(cT){var dh={backgroundColor:c,
decorator:j,
spacingX:6,
spacingY:1,
iconColumnWidth:16,
arrowColumnWidth:4,
padding:1};
if(cT.submenu){dh.position=ba;
dh.offset=[-2,
-3];
}return dh;
}},
"menu-separator":{style:function(cT){return {height:0,
decorator:cy,
marginTop:4,
marginBottom:4,
marginLeft:2,
marginRight:2};
}},
"menu-button":{alias:e,
style:function(cT){return {backgroundColor:cT.selected?Q:b,
textColor:cT.selected?w:b,
padding:[2,
6]};
}},
"menu-button/icon":{include:be,
style:function(cT){return {alignY:i};
}},
"menu-button/label":{include:B,
style:function(cT){return {alignY:i,
padding:1};
}},
"menu-button/shortcut":{include:B,
style:function(cT){return {alignY:i,
marginLeft:14,
padding:1};
}},
"menu-button/arrow":{style:function(cT){return {source:cT.selected?cf:R,
alignY:i};
}},
"menu-checkbox":{alias:l,
include:l,
style:function(cT){return {icon:!cT.checked?b:cT.selected?bQ:bv};
}},
"menu-radiobutton":{alias:l,
include:l,
style:function(cT){return {icon:!cT.checked?b:cT.selected?cr:bW};
}},
"colorselector":g,
"colorselector/cancle-button":a,
"colorselector/ok-button":a,
"colorselector/control-bar":g,
"colorselector/preset-field-set":p,
"colorselector/input-field-set":p,
"colorselector/preview-field-set":p,
"colorselector/hex-field":q,
"colorselector/rgb-spinner-red":k,
"colorselector/rgb-spinner-green":k,
"colorselector/rgb-spinner-blue":k,
"colorselector/hsb-spinner-hue":k,
"colorselector/hsb-spinner-saturation":k,
"colorselector/hsb-spinner-brightness":k,
"table":g,
"table/statusbar":{style:function(cT){return {decorator:new qx.ui.decoration.Single().set({top:[1,
d,
D]}),
paddingLeft:2,
paddingRight:2};
}},
"table/column-button":{alias:a,
style:function(cT){var cX,
cW;
if(cT.pressed||cT.checked||cT.abandoned){cX=v;
cW=[3,
2,
1,
4];
}else if(cT.hovered){cX=A;
cW=[2,
3];
}else{cX=b;
cW=[3,
4];
}return {decorator:cX,
padding:cW,
backgroundColor:cT.abandoned?M:a,
icon:ct};
}},
"table-column-reset-button":{extend:l,
alias:l,
style:function(){return {icon:cS};
}},
"table-scroller/scrollbar-x":u,
"table-scroller/scrollbar-y":u,
"table-scroller":g,
"table-scroller/header":{style:function(cT){return {decorator:new qx.ui.decoration.Single().set({bottom:[1,
d,
I]}),
backgroundColor:cO};
}},
"table-scroller/pane":{style:function(cT){return {backgroundColor:by};
}},
"table-scroller/focus-indicator":{style:function(cT){return {decorator:new qx.ui.decoration.Single(2,
d,
cJ)};
}},
"table-scroller/resize-line":{style:function(cT){return {backgroundColor:bt,
width:3};
}},
"table-header-cell":{alias:e,
style:function(cT){if(cT.hovered){deco=new qx.ui.decoration.Single().set({right:[1,
d,
I],
bottom:[2,
d,
bl]});
de=0;
backgroundColor=bG;
}else{deco=new qx.ui.decoration.Single().set({right:[1,
d,
I]});
de=2;
backgroundColor=bo;
}return {paddingLeft:2,
paddingRight:2,
paddingBottom:de,
decorator:deco,
backgroundColor:backgroundColor,
sortIcon:cT.sorted?(cT.sortedAscending?cL:bY):b};
}},
"table-header-cell/sort-icon":{style:function(cT){return {alignY:i};
}},
"table-editor-textfield":{include:q,
style:function(cT){return {decorator:b,
padding:[2,
2]};
}},
"table-editor-selectbox":{include:bd,
alias:bd,
style:function(cT){return {padding:[0,
2]};
}},
"table-editor-combobox":{include:J,
alias:J,
style:function(cT){return {decorator:b};
}}}});
})();
(function(){var a="Oxygen",
b="qx.theme.icon.Oxygen",
c="qx/icon/Oxygen";
qx.Theme.define(b,
{title:a,
resource:c,
icons:{}});
})();
(function(){var a="Classic Windows",
b="qx.theme.Classic";
qx.Theme.define(b,
{title:a,
meta:{color:qx.theme.classic.Color,
decoration:qx.theme.classic.Decoration,
font:qx.theme.classic.Font,
appearance:qx.theme.classic.Appearance,
icon:qx.theme.icon.Oxygen}});
})();
(function(){var a="source",
b="qx.html.Image",
c="img";
qx.Class.define(b,
{extend:qx.html.Element,
construct:function(){arguments.callee.base.call(this,
c);
},
members:{_applyProperty:function(d,
e){arguments.callee.base.call(this,
d,
e);
if(d==a){qx.bom.Image.setSource(this._element,
e);
}},
_createDomElement:function(){return qx.bom.Image.create(this._source);
},
setSource:function(e){this._setProperty(a,
e);
return this;
},
getSource:function(){return this._getProperty(a);
}}});
})();
(function(){var a="qx.bom.Image",
b="img";
qx.Class.define(a,
{statics:{create:function(c,
d){if(!d){d=window;
}var e=d.document.createElement(b);
if(c){e.src=c;
}return e;
},
setSource:function(f,
g){f.src=g;
},
getSource:function(f){return f.src;
}}});
})();
