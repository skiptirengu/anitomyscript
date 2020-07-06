(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.anitomyscript = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (process,__filename,__dirname){

var anitomyscript = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(anitomyscript) {
  anitomyscript = anitomyscript || {};


var e;e||(e=typeof anitomyscript !== 'undefined' ? anitomyscript : {});var aa;e.ready=new Promise(function(a){aa=a});var r={},w;for(w in e)e.hasOwnProperty(w)&&(r[w]=e[w]);var ba="./this.program",ca=!1,x=!1,da=!1,ea=!1;ca="object"===typeof window;x="function"===typeof importScripts;da="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ea=!ca&&!da&&!x;var y="",fa,A,ha,ia;
if(da)y=x?require("path").dirname(y)+"/":__dirname+"/",fa=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},A=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",B),e.inspect=function(){return"[Emscripten Module object]"};else if(ea)"undefined"!=
typeof read&&(fa=function(a){return read(a)}),A=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ca||x)x?y=self.location.href:document.currentScript&&(y=document.currentScript.src),_scriptDir&&(y=_scriptDir),0!==y.indexOf("blob:")?y=y.substr(0,
y.lastIndexOf("/")+1):y="",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},x&&(A=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ja=e.print||console.log.bind(console),C=e.printErr||console.warn.bind(console);for(w in r)r.hasOwnProperty(w)&&(e[w]=r[w]);r=null;e.thisProgram&&(ba=e.thisProgram);var ka;e.wasmBinary&&(ka=e.wasmBinary);var noExitRuntime;
e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&C("no native wasm support detected");var la,ma=new WebAssembly.Table({initial:406,maximum:406,element:"anyfunc"}),na=!1;function assert(a,b){a||B("Assertion failed: "+b)}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function pa(a,b){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&oa)return oa.decode(c.subarray(a,b));for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var l=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|l:(f&7)<<18|h<<12|l<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}
function qa(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h){var l=a.charCodeAt(++f);h=65536+((h&1023)<<10)|l&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function ta(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&ua[c];)++c;c<<=1;if(32<c-a&&sa)return sa.decode(D.subarray(a,c));c=0;for(d="";;){var f=E[a+2*c>>1];if(0==f||c==b/2)return d;++c;d+=String.fromCharCode(f)}}
function va(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var f=0;f<c;++f)E[b>>1]=a.charCodeAt(f),b+=2;E[b>>1]=0;return b-d}function wa(a){return 2*a.length}function xa(a,b){for(var c=0,d="";!(c>=b/4);){var f=F[a+4*c>>2];if(0==f)break;++c;65536<=f?(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023)):d+=String.fromCharCode(f)}return d}
function ya(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h){var l=a.charCodeAt(++f);h=65536+((h&1023)<<10)|l&1023}F[b>>2]=h;b+=4;if(b+4>c)break}F[b>>2]=0;return b-d}function za(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var Aa,G,D,E,ua,F,H,Ba,Ca,Da=e.INITIAL_MEMORY||16777216;
e.wasmMemory?la=e.wasmMemory:la=new WebAssembly.Memory({initial:Da/65536,maximum:Da/65536});la&&(Aa=la.buffer);Da=Aa.byteLength;var I=Aa;Aa=I;e.HEAP8=G=new Int8Array(I);e.HEAP16=E=new Int16Array(I);e.HEAP32=F=new Int32Array(I);e.HEAPU8=D=new Uint8Array(I);e.HEAPU16=ua=new Uint16Array(I);e.HEAPU32=H=new Uint32Array(I);e.HEAPF32=Ba=new Float32Array(I);e.HEAPF64=Ca=new Float64Array(I);F[8640]=5277600;
function Ea(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Fa;"number"===typeof c?void 0===b.ya?e.dynCall_v(c):e.dynCall_vi(c,b.ya):c(void 0===b.ya?null:b.ya)}}}var Fa=[],Ga=[],Ha=[],Ia=[];function Ja(){var a=e.preRun.shift();Fa.unshift(a)}var J=0,Ka=null,La=null;e.preloadedImages={};e.preloadedAudios={};function B(a){if(e.onAbort)e.onAbort(a);ja(a);C(a);na=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ma(a){var b=K;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Na(){return Ma("data:application/octet-stream;base64,")}var K="anitomyscript.wasm";if(!Na()){var Oa=K;K=e.locateFile?e.locateFile(Oa,y):y+Oa}function Pa(){try{if(ka)return new Uint8Array(ka);if(A)return A(K);throw"both async and sync fetching of the wasm failed";}catch(a){B(a)}}
function Qa(){return ka||!ca&&!x||"function"!==typeof fetch||Ma("file://")?new Promise(function(a){a(Pa())}):fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Pa()})}Ga.push({Fa:function(){Ra()}});var Sa={};function Ta(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ua=void 0;
function L(a){for(var b="";D[a];)b+=Ua[D[a++]];return b}var M={},N={},Va={};function Wa(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Xa(a,b){a=Wa(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Ya(a){var b=Error,c=Xa(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var O=void 0;function P(a){throw new O(a);}var Za=void 0;function $a(a){throw new Za(a);}
function Q(a,b,c){function d(k){k=c(k);k.length!==a.length&&$a("Mismatched type converter count");for(var q=0;q<a.length;++q)R(a[q],k[q])}a.forEach(function(k){Va[k]=b});var f=Array(b.length),h=[],l=0;b.forEach(function(k,q){N.hasOwnProperty(k)?f[q]=N[k]:(h.push(k),M.hasOwnProperty(k)||(M[k]=[]),M[k].push(function(){f[q]=N[k];++l;l===h.length&&d(f)}))});0===h.length&&d(f)}
function R(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||P('type "'+d+'" must have a positive integer typeid pointer');if(N.hasOwnProperty(a)){if(c.Ia)return;P("Cannot register type '"+d+"' twice")}N[a]=b;delete Va[a];M.hasOwnProperty(a)&&(b=M[a],delete M[a],b.forEach(function(f){f()}))}function ab(a){return{count:a.count,ma:a.ma,pa:a.pa,ba:a.ba,da:a.da,ga:a.ga,ha:a.ha}}
function bb(a){P(a.$.da.aa.name+" instance already deleted")}var cb=!1;function db(){}function eb(a){--a.count.value;0===a.count.value&&(a.ga?a.ha.la(a.ga):a.da.aa.la(a.ba))}
function fb(a){if("undefined"===typeof FinalizationGroup)return fb=function(b){return b},a;cb=new FinalizationGroup(function(b){for(var c=b.next();!c.done;c=b.next())c=c.value,c.ba?eb(c):console.warn("object already deleted: "+c.ba)});fb=function(b){cb.register(b,b.$,b.$);return b};db=function(b){cb.unregister(b.$)};return fb(a)}var gb=void 0,hb=[];function ib(){for(;hb.length;){var a=hb.pop();a.$.ma=!1;a["delete"]()}}function S(){}var jb={};
function kb(a,b,c){if(void 0===a[b].ea){var d=a[b];a[b]=function(){a[b].ea.hasOwnProperty(arguments.length)||P("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].ea+")!");return a[b].ea[arguments.length].apply(this,arguments)};a[b].ea=[];a[b].ea[d.sa]=d}}
function lb(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].ea&&void 0!==e[a].ea[c])&&P("Cannot register public name '"+a+"' twice"),kb(e,a,a),e.hasOwnProperty(c)&&P("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].ea[c]=b):(e[a]=b,void 0!==c&&(e[a].Wa=c))}function mb(a,b,c,d,f,h,l,k){this.name=a;this.constructor=b;this.na=c;this.la=d;this.ia=f;this.Ga=h;this.ra=l;this.Ea=k;this.Ka=[]}
function nb(a,b,c){for(;b!==c;)b.ra||P("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.ra(a),b=b.ia;return a}function ob(a,b){if(null===b)return this.za&&P("null is not a valid "+this.name),0;b.$||P('Cannot pass "'+T(b)+'" as a '+this.name);b.$.ba||P("Cannot pass deleted object as a pointer of type "+this.name);return nb(b.$.ba,b.$.da.aa,this.aa)}
function pb(a,b){if(null===b){this.za&&P("null is not a valid "+this.name);if(this.ua){var c=this.La();null!==a&&a.push(this.la,c);return c}return 0}b.$||P('Cannot pass "'+T(b)+'" as a '+this.name);b.$.ba||P("Cannot pass deleted object as a pointer of type "+this.name);!this.ta&&b.$.da.ta&&P("Cannot convert argument of type "+(b.$.ha?b.$.ha.name:b.$.da.name)+" to parameter type "+this.name);c=nb(b.$.ba,b.$.da.aa,this.aa);if(this.ua)switch(void 0===b.$.ga&&P("Passing raw pointer to smart pointer is illegal"),
this.Na){case 0:b.$.ha===this?c=b.$.ga:P("Cannot convert argument of type "+(b.$.ha?b.$.ha.name:b.$.da.name)+" to parameter type "+this.name);break;case 1:c=b.$.ga;break;case 2:if(b.$.ha===this)c=b.$.ga;else{var d=b.clone();c=this.Ma(c,qb(function(){d["delete"]()}));null!==a&&a.push(this.la,c)}break;default:P("Unsupporting sharing policy")}return c}
function rb(a,b){if(null===b)return this.za&&P("null is not a valid "+this.name),0;b.$||P('Cannot pass "'+T(b)+'" as a '+this.name);b.$.ba||P("Cannot pass deleted object as a pointer of type "+this.name);b.$.da.ta&&P("Cannot convert argument of type "+b.$.da.name+" to parameter type "+this.name);return nb(b.$.ba,b.$.da.aa,this.aa)}function sb(a){return this.fromWireType(H[a>>2])}function tb(a,b,c){if(b===c)return a;if(void 0===c.ia)return null;a=tb(a,b,c.ia);return null===a?null:c.Ea(a)}var ub={};
function vb(a,b){for(void 0===b&&P("ptr should not be undefined");a.ia;)b=a.ra(b),a=a.ia;return ub[b]}function wb(a,b){b.da&&b.ba||$a("makeClassHandle requires ptr and ptrType");!!b.ha!==!!b.ga&&$a("Both smartPtrType and smartPtr must be specified");b.count={value:1};return fb(Object.create(a,{$:{value:b}}))}
function U(a,b,c,d){this.name=a;this.aa=b;this.za=c;this.ta=d;this.ua=!1;this.la=this.Ma=this.La=this.Ca=this.Na=this.Ja=void 0;void 0!==b.ia?this.toWireType=pb:(this.toWireType=d?ob:rb,this.ja=null)}function xb(a,b,c){e.hasOwnProperty(a)||$a("Replacing nonexistant public symbol");void 0!==e[a].ea&&void 0!==c?e[a].ea[c]=b:(e[a]=b,e[a].sa=c)}
function V(a,b){a=L(a);var c=e["dynCall_"+a];for(var d=[],f=1;f<a.length;++f)d.push("a"+f);f="return function dynCall_"+(a+"_"+b)+"("+d.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(d.length?", ":"")+d.join(", ")+");\n";c=(new Function("dynCall","rawFunction",f+"};\n"))(c,b);"function"!==typeof c&&P("unknown function pointer with signature "+a+": "+b);return c}var yb=void 0;function zb(a){a=Ab(a);var b=L(a);Y(a);return b}
function Bb(a,b){function c(h){f[h]||N[h]||(Va[h]?Va[h].forEach(c):(d.push(h),f[h]=!0))}var d=[],f={};b.forEach(c);throw new yb(a+": "+d.map(zb).join([", "]));}function Cb(a,b){for(var c=[],d=0;d<a;d++)c.push(F[(b>>2)+d]);return c}function Db(a){for(;a.length;){var b=a.pop();a.pop()(b)}}
function Eb(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Xa(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function Hb(a,b,c,d,f){var h=b.length;2>h&&P("argTypes array size mismatch! Must at least get return value and 'this' types!");var l=null!==b[1]&&null!==c,k=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].ja){k=!0;break}var q="void"!==b[0].name,m="",n="";for(c=0;c<h-2;++c)m+=(0!==c?", ":"")+"arg"+c,n+=(0!==c?", ":"")+"arg"+c+"Wired";a="return function "+Wa(a)+"("+m+") {\nif (arguments.length !== "+(h-2)+") {\nthrowBindingError('function "+a+" called with ' + arguments.length + ' arguments, expected "+
(h-2)+" args!');\n}\n";k&&(a+="var destructors = [];\n");var u=k?"destructors":"null";m="throwBindingError invoker fn runDestructors retType classParam".split(" ");d=[P,d,f,Db,b[0],b[1]];l&&(a+="var thisWired = classParam.toWireType("+u+", this);\n");for(c=0;c<h-2;++c)a+="var arg"+c+"Wired = argType"+c+".toWireType("+u+", arg"+c+"); // "+b[c+2].name+"\n",m.push("argType"+c),d.push(b[c+2]);l&&(n="thisWired"+(0<n.length?", ":"")+n);a+=(q?"var rv = ":"")+"invoker(fn"+(0<n.length?", ":"")+n+");\n";if(k)a+=
"runDestructors(destructors);\n";else for(c=l?1:2;c<b.length;++c)h=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==b[c].ja&&(a+=h+"_dtor("+h+"); // "+b[c].name+"\n",m.push(h+"_dtor"),d.push(b[c].ja));q&&(a+="var ret = retType.fromWireType(rv);\nreturn ret;\n");m.push(a+"}\n");return Eb(m).apply(null,d)}var Ib=[],Z=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Jb(a){4<a&&0===--Z[a].Aa&&(Z[a]=void 0,Ib.push(a))}
function qb(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Ib.length?Ib.pop():Z.length;Z[b]={Aa:1,value:a};return b}}function Kb(a,b,c){switch(b){case 0:return function(d){return this.fromWireType((c?G:D)[d])};case 1:return function(d){return this.fromWireType((c?E:ua)[d>>1])};case 2:return function(d){return this.fromWireType((c?F:H)[d>>2])};default:throw new TypeError("Unknown integer type: "+a);}}
function Lb(a,b){var c=N[a];void 0===c&&P(b+" has unknown type "+zb(a));return c}function T(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Mb(a,b){switch(b){case 2:return function(c){return this.fromWireType(Ba[c>>2])};case 3:return function(c){return this.fromWireType(Ca[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Nb(a,b,c){switch(b){case 0:return c?function(d){return G[d]}:function(d){return D[d]};case 1:return c?function(d){return E[d>>1]}:function(d){return ua[d>>1]};case 2:return c?function(d){return F[d>>2]}:function(d){return H[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var Ob={};
function Pb(){if(!Qb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ba||"./this.program"},b;for(b in Ob)a[b]=Ob[b];var c=[];for(b in a)c.push(b+"="+a[b]);Qb=c}return Qb}var Qb;function Rb(a){return 0===a%4&&(0!==a%100||0===a%400)}function Sb(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}
var Tb=[31,29,31,30,31,30,31,31,30,31,30,31],Ub=[31,28,31,30,31,30,31,31,30,31,30,31];function Vb(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Rb(a.getFullYear())?Tb:Ub)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Wb(a,b,c,d){function f(g,p,v){for(g="number"===typeof g?g.toString():g||"";g.length<p;)g=v[0]+g;return g}function h(g,p){return f(g,p,"0")}function l(g,p){function v(W){return 0>W?-1:0<W?1:0}var z;0===(z=v(g.getFullYear()-p.getFullYear()))&&0===(z=v(g.getMonth()-p.getMonth()))&&(z=v(g.getDate()-p.getDate()));return z}function k(g){switch(g.getDay()){case 0:return new Date(g.getFullYear()-1,11,29);case 1:return g;case 2:return new Date(g.getFullYear(),0,3);case 3:return new Date(g.getFullYear(),
0,2);case 4:return new Date(g.getFullYear(),0,1);case 5:return new Date(g.getFullYear()-1,11,31);case 6:return new Date(g.getFullYear()-1,11,30)}}function q(g){g=Vb(new Date(g.fa+1900,0,1),g.xa);var p=new Date(g.getFullYear()+1,0,4),v=k(new Date(g.getFullYear(),0,4));p=k(p);return 0>=l(v,g)?0>=l(p,g)?g.getFullYear()+1:g.getFullYear():g.getFullYear()-1}var m=F[d+40>>2];d={Qa:F[d>>2],Pa:F[d+4>>2],va:F[d+8>>2],qa:F[d+12>>2],oa:F[d+16>>2],fa:F[d+20>>2],wa:F[d+24>>2],xa:F[d+28>>2],Xa:F[d+32>>2],Oa:F[d+
36>>2],Ra:m?m?pa(m,void 0):"":""};c=c?pa(c,void 0):"";m={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var n in m)c=c.replace(new RegExp(n,"g"),m[n]);var u="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
t="January February March April May June July August September October November December".split(" ");m={"%a":function(g){return u[g.wa].substring(0,3)},"%A":function(g){return u[g.wa]},"%b":function(g){return t[g.oa].substring(0,3)},"%B":function(g){return t[g.oa]},"%C":function(g){return h((g.fa+1900)/100|0,2)},"%d":function(g){return h(g.qa,2)},"%e":function(g){return f(g.qa,2," ")},"%g":function(g){return q(g).toString().substring(2)},"%G":function(g){return q(g)},"%H":function(g){return h(g.va,
2)},"%I":function(g){g=g.va;0==g?g=12:12<g&&(g-=12);return h(g,2)},"%j":function(g){return h(g.qa+Sb(Rb(g.fa+1900)?Tb:Ub,g.oa-1),3)},"%m":function(g){return h(g.oa+1,2)},"%M":function(g){return h(g.Pa,2)},"%n":function(){return"\n"},"%p":function(g){return 0<=g.va&&12>g.va?"AM":"PM"},"%S":function(g){return h(g.Qa,2)},"%t":function(){return"\t"},"%u":function(g){return g.wa||7},"%U":function(g){var p=new Date(g.fa+1900,0,1),v=0===p.getDay()?p:Vb(p,7-p.getDay());g=new Date(g.fa+1900,g.oa,g.qa);return 0>
l(v,g)?h(Math.ceil((31-v.getDate()+(Sb(Rb(g.getFullYear())?Tb:Ub,g.getMonth()-1)-31)+g.getDate())/7),2):0===l(v,p)?"01":"00"},"%V":function(g){var p=new Date(g.fa+1901,0,4),v=k(new Date(g.fa+1900,0,4));p=k(p);var z=Vb(new Date(g.fa+1900,0,1),g.xa);return 0>l(z,v)?"53":0>=l(p,z)?"01":h(Math.ceil((v.getFullYear()<g.fa+1900?g.xa+32-v.getDate():g.xa+1-v.getDate())/7),2)},"%w":function(g){return g.wa},"%W":function(g){var p=new Date(g.fa,0,1),v=1===p.getDay()?p:Vb(p,0===p.getDay()?1:7-p.getDay()+1);g=
new Date(g.fa+1900,g.oa,g.qa);return 0>l(v,g)?h(Math.ceil((31-v.getDate()+(Sb(Rb(g.getFullYear())?Tb:Ub,g.getMonth()-1)-31)+g.getDate())/7),2):0===l(v,p)?"01":"00"},"%y":function(g){return(g.fa+1900).toString().substring(2)},"%Y":function(g){return g.fa+1900},"%z":function(g){g=g.Oa;var p=0<=g;g=Math.abs(g)/60;return(p?"+":"-")+String("0000"+(g/60*100+g%60)).slice(-4)},"%Z":function(g){return g.Ra},"%%":function(){return"%"}};for(n in m)0<=c.indexOf(n)&&(c=c.replace(new RegExp(n,"g"),m[n](d)));n=
Xb(c);if(n.length>b)return 0;G.set(n,a);return n.length-1}for(var Yb=Array(256),Zb=0;256>Zb;++Zb)Yb[Zb]=String.fromCharCode(Zb);Ua=Yb;O=e.BindingError=Ya("BindingError");Za=e.InternalError=Ya("InternalError");S.prototype.isAliasOf=function(a){if(!(this instanceof S&&a instanceof S))return!1;var b=this.$.da.aa,c=this.$.ba,d=a.$.da.aa;for(a=a.$.ba;b.ia;)c=b.ra(c),b=b.ia;for(;d.ia;)a=d.ra(a),d=d.ia;return b===d&&c===a};
S.prototype.clone=function(){this.$.ba||bb(this);if(this.$.pa)return this.$.count.value+=1,this;var a=fb(Object.create(Object.getPrototypeOf(this),{$:{value:ab(this.$)}}));a.$.count.value+=1;a.$.ma=!1;return a};S.prototype["delete"]=function(){this.$.ba||bb(this);this.$.ma&&!this.$.pa&&P("Object already scheduled for deletion");db(this);eb(this.$);this.$.pa||(this.$.ga=void 0,this.$.ba=void 0)};S.prototype.isDeleted=function(){return!this.$.ba};
S.prototype.deleteLater=function(){this.$.ba||bb(this);this.$.ma&&!this.$.pa&&P("Object already scheduled for deletion");hb.push(this);1===hb.length&&gb&&gb(ib);this.$.ma=!0;return this};U.prototype.Ha=function(a){this.Ca&&(a=this.Ca(a));return a};U.prototype.Ba=function(a){this.la&&this.la(a)};U.prototype.argPackAdvance=8;U.prototype.readValueFromPointer=sb;U.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
U.prototype.fromWireType=function(a){function b(){return this.ua?wb(this.aa.na,{da:this.Ja,ba:c,ha:this,ga:a}):wb(this.aa.na,{da:this,ba:a})}var c=this.Ha(a);if(!c)return this.Ba(a),null;var d=vb(this.aa,c);if(void 0!==d){if(0===d.$.count.value)return d.$.ba=c,d.$.ga=a,d.clone();d=d.clone();this.Ba(a);return d}d=this.aa.Ga(c);d=jb[d];if(!d)return b.call(this);d=this.ta?d.Da:d.pointerType;var f=tb(c,this.aa,d.aa);return null===f?b.call(this):this.ua?wb(d.aa.na,{da:d,ba:f,ha:this,ga:a}):wb(d.aa.na,
{da:d,ba:f})};e.getInheritedInstanceCount=function(){return Object.keys(ub).length};e.getLiveInheritedInstances=function(){var a=[],b;for(b in ub)ub.hasOwnProperty(b)&&a.push(ub[b]);return a};e.flushPendingDeletes=ib;e.setDelayFunction=function(a){gb=a;hb.length&&gb&&gb(ib)};yb=e.UnboundTypeError=Ya("UnboundTypeError");e.count_emval_handles=function(){for(var a=0,b=5;b<Z.length;++b)void 0!==Z[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<Z.length;++a)if(void 0!==Z[a])return Z[a];return null};
function Xb(a){var b=Array(ra(a)+1);qa(a,b,0,b.length);return b}
var bc={t:function(){F[$b()>>2]=63;return-1},s:function(a,b){if(-1===(a|0)||0===b)a=-28;else{var c=Sa[a];c&&b===c.Ua&&(Sa[a]=null,c.Sa&&Y(c.Va));a=0}return a},x:function(a,b,c,d,f){var h=Ta(c);b=L(b);R(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,k){return k?d:f},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var k=G;else if(2===c)k=E;else if(4===c)k=F;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[l>>h])},ja:null})},g:function(a,
b,c,d,f,h,l,k,q,m,n,u,t){n=L(n);h=V(f,h);k&&(k=V(l,k));m&&(m=V(q,m));t=V(u,t);var g=Wa(n);lb(g,function(){Bb("Cannot construct "+n+" due to unbound types",[d])});Q([a,b,c],d?[d]:[],function(p){p=p[0];if(d){var v=p.aa;var z=v.na}else z=S.prototype;p=Xa(g,function(){if(Object.getPrototypeOf(this)!==W)throw new O("Use 'new' to construct "+n);if(void 0===X.ka)throw new O(n+" has no accessible constructor");var Fb=X.ka[arguments.length];if(void 0===Fb)throw new O("Tried to invoke ctor of "+n+" with invalid number of parameters ("+
arguments.length+") - expected ("+Object.keys(X.ka).toString()+") parameters instead!");return Fb.apply(this,arguments)});var W=Object.create(z,{constructor:{value:p}});p.prototype=W;var X=new mb(n,p,W,t,v,h,k,m);v=new U(n,X,!0,!1);z=new U(n+"*",X,!1,!1);var Gb=new U(n+" const*",X,!1,!0);jb[a]={pointerType:z,Da:Gb};xb(g,p);return[v,z,Gb]})},f:function(a,b,c,d,f,h){assert(0<b);var l=Cb(b,c);f=V(d,f);var k=[h],q=[];Q([],[a],function(m){m=m[0];var n="constructor "+m.name;void 0===m.aa.ka&&(m.aa.ka=[]);
if(void 0!==m.aa.ka[b-1])throw new O("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+m.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");m.aa.ka[b-1]=function(){Bb("Cannot construct "+m.name+" due to unbound types",l)};Q([],l,function(u){m.aa.ka[b-1]=function(){arguments.length!==b-1&&P(n+" called with "+arguments.length+" arguments, expected "+(b-1));q.length=0;k.length=b;for(var t=1;t<b;++t)k[t]=
u[t].toWireType(q,arguments[t-1]);t=f.apply(null,k);Db(q);return u[0].fromWireType(t)};return[]});return[]})},c:function(a,b,c,d,f,h,l,k){var q=Cb(c,d);b=L(b);h=V(f,h);Q([],[a],function(m){function n(){Bb("Cannot call "+u+" due to unbound types",q)}m=m[0];var u=m.name+"."+b;k&&m.aa.Ka.push(b);var t=m.aa.na,g=t[b];void 0===g||void 0===g.ea&&g.className!==m.name&&g.sa===c-2?(n.sa=c-2,n.className=m.name,t[b]=n):(kb(t,b,u),t[b].ea[c-2]=n);Q([],q,function(p){p=Hb(u,p,m,h,l);void 0===t[b].ea?(p.sa=c-2,
t[b]=p):t[b].ea[c-2]=p;return[]});return[]})},w:function(a,b){b=L(b);R(a,{name:b,fromWireType:function(c){var d=Z[c].value;Jb(c);return d},toWireType:function(c,d){return qb(d)},argPackAdvance:8,readValueFromPointer:sb,ja:null})},o:function(a,b,c,d){function f(){}c=Ta(c);b=L(b);f.values={};R(a,{name:b,constructor:f,fromWireType:function(h){return this.constructor.values[h]},toWireType:function(h,l){return l.value},argPackAdvance:8,readValueFromPointer:Kb(b,c,d),ja:null});lb(b,f)},b:function(a,b,c){var d=
Lb(a,"enum");b=L(b);a=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Xa(d.name+"_"+b,function(){})}});a.values[c]=d;a[b]=d},j:function(a,b,c){c=Ta(c);b=L(b);R(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,f){if("number"!==typeof f&&"boolean"!==typeof f)throw new TypeError('Cannot convert "'+T(f)+'" to '+this.name);return f},argPackAdvance:8,readValueFromPointer:Mb(b,c),ja:null})},l:function(a,b,c,d,f,h){var l=Cb(b,c);a=L(a);f=V(d,f);
lb(a,function(){Bb("Cannot call "+a+" due to unbound types",l)},b-1);Q([],l,function(k){k=[k[0],null].concat(k.slice(1));xb(a,Hb(a,k,null,f,h),b-1);return[]})},e:function(a,b,c,d,f){function h(m){return m}b=L(b);-1===f&&(f=4294967295);var l=Ta(c);if(0===d){var k=32-8*c;h=function(m){return m<<k>>>k}}var q=-1!=b.indexOf("unsigned");R(a,{name:b,fromWireType:h,toWireType:function(m,n){if("number"!==typeof n&&"boolean"!==typeof n)throw new TypeError('Cannot convert "'+T(n)+'" to '+this.name);if(n<d||
n>f)throw new TypeError('Passing a number "'+T(n)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return q?n>>>0:n|0},argPackAdvance:8,readValueFromPointer:Nb(b,l,0!==d),ja:null})},d:function(a,b,c){function d(h){h>>=2;return new f(Aa,H[h+1],H[h])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=L(c);R(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{Ia:!0})},
k:function(a,b){b=L(b);var c="std::string"===b;R(a,{name:b,fromWireType:function(d){var f=H[d>>2];if(c)for(var h=d+4,l=0;l<=f;++l){var k=d+4+l;if(0==D[k]||l==f){h=h?pa(h,k-h):"";if(void 0===q)var q=h;else q+=String.fromCharCode(0),q+=h;h=k+1}}else{q=Array(f);for(l=0;l<f;++l)q[l]=String.fromCharCode(D[d+4+l]);q=q.join("")}Y(d);return q},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var h="string"===typeof f;h||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof
Int8Array||P("Cannot pass non-string to std::string");var l=(c&&h?function(){return ra(f)}:function(){return f.length})(),k=ac(4+l+1);H[k>>2]=l;if(c&&h)qa(f,D,k+4,l+1);else if(h)for(h=0;h<l;++h){var q=f.charCodeAt(h);255<q&&(Y(k),P("String has UTF-16 code units that do not fit in 8 bits"));D[k+4+h]=q}else for(h=0;h<l;++h)D[k+4+h]=f[h];null!==d&&d.push(Y,k);return k},argPackAdvance:8,readValueFromPointer:sb,ja:function(d){Y(d)}})},h:function(a,b,c){c=L(c);if(2===b){var d=ta;var f=va;var h=wa;var l=
function(){return ua};var k=1}else 4===b&&(d=xa,f=ya,h=za,l=function(){return H},k=2);R(a,{name:c,fromWireType:function(q){for(var m=H[q>>2],n=l(),u,t=q+4,g=0;g<=m;++g){var p=q+4+g*b;if(0==n[p>>k]||g==m)t=d(t,p-t),void 0===u?u=t:(u+=String.fromCharCode(0),u+=t),t=p+b}Y(q);return u},toWireType:function(q,m){"string"!==typeof m&&P("Cannot pass non-string to C++ string type "+c);var n=h(m),u=ac(4+n+b);H[u>>2]=n>>k;f(m,u+4,n+b);null!==q&&q.push(Y,u);return u},argPackAdvance:8,readValueFromPointer:sb,
ja:function(q){Y(q)}})},y:function(a,b){b=L(b);R(a,{Ta:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},m:Jb,n:function(a){4<a&&(Z[a].Aa+=1)},i:function(a,b){a=Lb(a,"_emval_take_value");a=a.readValueFromPointer(b);return qb(a)},a:function(){B()},p:function(a,b,c){D.copyWithin(a,b,b+c)},q:function(){B("OOM")},u:function(a,b){var c=0;Pb().forEach(function(d,f){var h=b+c;f=F[a+4*f>>2]=h;for(h=0;h<d.length;++h)G[f++>>0]=d.charCodeAt(h);G[f>>0]=0;c+=d.length+1});return 0},
v:function(a,b){var c=Pb();F[a>>2]=c.length;var d=0;c.forEach(function(f){d+=f.length+1});F[b>>2]=d;return 0},memory:la,r:function(a,b,c,d){return Wb(a,b,c,d)},table:ma};
(function(){function a(f){e.asm=f.exports;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Ka&&(clearInterval(Ka),Ka=null),La&&(f=La,La=null,f()))}function b(f){a(f.instance)}function c(f){return Qa().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){C("failed to asynchronously prepare wasm: "+h);B(h)})}var d={a:bc};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return C("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(ka||"function"!==typeof WebAssembly.instantiateStreaming||Na()||Ma("file://")||"function"!==typeof fetch)return c(b);fetch(K,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){C("wasm streaming compile failed: "+h);C("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ra=e.___wasm_call_ctors=function(){return(Ra=e.___wasm_call_ctors=e.asm.z).apply(null,arguments)},ac=e._malloc=function(){return(ac=e._malloc=e.asm.A).apply(null,arguments)},Ab=e.___getTypeName=function(){return(Ab=e.___getTypeName=e.asm.B).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.C).apply(null,arguments)};
var $b=e.___errno_location=function(){return($b=e.___errno_location=e.asm.D).apply(null,arguments)},Y=e._free=function(){return(Y=e._free=e.asm.E).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.F).apply(null,arguments)};e.dynCall_ii=function(){return(e.dynCall_ii=e.asm.G).apply(null,arguments)};e.dynCall_vii=function(){return(e.dynCall_vii=e.asm.H).apply(null,arguments)};e.dynCall_viii=function(){return(e.dynCall_viii=e.asm.I).apply(null,arguments)};
e.dynCall_iii=function(){return(e.dynCall_iii=e.asm.J).apply(null,arguments)};e.dynCall_i=function(){return(e.dynCall_i=e.asm.K).apply(null,arguments)};e.dynCall_iiii=function(){return(e.dynCall_iiii=e.asm.L).apply(null,arguments)};e.dynCall_viiii=function(){return(e.dynCall_viiii=e.asm.M).apply(null,arguments)};e.dynCall_iiiii=function(){return(e.dynCall_iiiii=e.asm.N).apply(null,arguments)};e.dynCall_iidiiii=function(){return(e.dynCall_iidiiii=e.asm.O).apply(null,arguments)};
e.dynCall_iiiiii=function(){return(e.dynCall_iiiiii=e.asm.P).apply(null,arguments)};e.dynCall_iiiiiiiii=function(){return(e.dynCall_iiiiiiiii=e.asm.Q).apply(null,arguments)};e.dynCall_iiiiiii=function(){return(e.dynCall_iiiiiii=e.asm.R).apply(null,arguments)};e.dynCall_iiiiij=function(){return(e.dynCall_iiiiij=e.asm.S).apply(null,arguments)};e.dynCall_iiiiid=function(){return(e.dynCall_iiiiid=e.asm.T).apply(null,arguments)};
e.dynCall_iiiiijj=function(){return(e.dynCall_iiiiijj=e.asm.U).apply(null,arguments)};e.dynCall_iiiiiiii=function(){return(e.dynCall_iiiiiiii=e.asm.V).apply(null,arguments)};e.dynCall_iiiiiijj=function(){return(e.dynCall_iiiiiijj=e.asm.W).apply(null,arguments)};e.dynCall_viiiiii=function(){return(e.dynCall_viiiiii=e.asm.X).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Y).apply(null,arguments)};e.dynCall_viiiii=function(){return(e.dynCall_viiiii=e.asm.Z).apply(null,arguments)};
var cc;La=function dc(){cc||ec();cc||(La=dc)};
function ec(){function a(){if(!cc&&(cc=!0,e.calledRun=!0,!na)){Ea(Ga);Ea(Ha);aa(e);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var b=e.postRun.shift();Ia.unshift(b)}Ea(Ia)}}if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ja();Ea(Fa);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}
e.run=ec;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();noExitRuntime=!0;ec();


  return anitomyscript.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = anitomyscript;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return anitomyscript; });
    else if (typeof exports === 'object')
      exports["anitomyscript"] = anitomyscript;
    
}).call(this,require('_process'),"/build/anitomyscript.js","/build")
},{"_process":6,"fs":4,"path":5}],2:[function(require,module,exports){
'use strict';

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AnitomyNative = require('./build/anitomyscript');

var anitomyModule = undefined;

module.exports = function (file) {
  if (!Array.isArray(file) && typeof file !== 'string') {
    return Promise.reject(new Error('Input must be either an Array or a string'));
  }

  if (anitomyModule) {
    return parse(file);
  }

  return new Promise(function (resolve, reject) {
    try {
      AnitomyNative().then(function (actualModule) {
        anitomyModule = actualModule;
        parse(file).then(resolve)["catch"](reject);
      });
    } catch (err) {
      reject(err);
    }
  });
};

function parse(_x) {
  return _parse.apply(this, arguments);
}

function _parse() {
  _parse = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee(file) {
    var vector, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!Array.isArray(file)) {
              _context.next = 7;
              break;
            }

            vector = mapArray(file);
            result = mapVector(anitomyModule.parseMultiple(vector));
            vector["delete"]();
            return _context.abrupt("return", result.map(function (each) {
              return elements(each);
            }));

          case 7:
            return _context.abrupt("return", elements(anitomyModule.parseSingle(file)));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _parse.apply(this, arguments);
}

function elements(elements) {
  var returnObj = {
    anime_season: elementEntry(elements, anitomyModule.ElementCategory.kElementAnimeSeason),
    season_prefix: elementEntry(elements, anitomyModule.ElementCategory.kElementAnimeSeasonPrefix),
    anime_title: elementEntry(elements, anitomyModule.ElementCategory.kElementAnimeTitle),
    anime_type: elementEntry(elements, anitomyModule.ElementCategory.kElementAnimeType),
    anime_year: elementEntry(elements, anitomyModule.ElementCategory.kElementAnimeYear),
    audio_term: elementEntry(elements, anitomyModule.ElementCategory.kElementAudioTerm),
    device_compatibility: elementEntry(elements, anitomyModule.ElementCategory.kElementDeviceCompatibility),
    episode_number: elementEntry(elements, anitomyModule.ElementCategory.kElementEpisodeNumber),
    episode_prefix: elementEntry(elements, anitomyModule.ElementCategory.kElementEpisodePrefix),
    episode_title: elementEntry(elements, anitomyModule.ElementCategory.kElementEpisodeTitle),
    file_checksum: elementEntry(elements, anitomyModule.ElementCategory.kElementFileChecksum),
    file_extension: elementEntry(elements, anitomyModule.ElementCategory.kElementFileExtension),
    file_name: elementEntry(elements, anitomyModule.ElementCategory.kElementFileName),
    language: elementEntry(elements, anitomyModule.ElementCategory.kElementLanguage),
    other: elementEntry(elements, anitomyModule.ElementCategory.kElementOther),
    release_group: elementEntry(elements, anitomyModule.ElementCategory.kElementReleaseGroup),
    release_information: elementEntry(elements, anitomyModule.ElementCategory.kElementReleaseInformation),
    release_version: elementEntry(elements, anitomyModule.ElementCategory.kElementReleaseVersion),
    source: elementEntry(elements, anitomyModule.ElementCategory.kElementSource),
    subtitles: elementEntry(elements, anitomyModule.ElementCategory.kElementSubtitles),
    video_resolution: elementEntry(elements, anitomyModule.ElementCategory.kElementVideoResolution),
    video_term: elementEntry(elements, anitomyModule.ElementCategory.kElementVideoTerm),
    volume_number: elementEntry(elements, anitomyModule.ElementCategory.kElementVolumeNumber),
    volume_prefix: elementEntry(elements, anitomyModule.ElementCategory.kElementVolumePrefix),
    unknown: elementEntry(elements, anitomyModule.ElementCategory.kElementUnknown)
  };
  elements["delete"]();
  return returnObj;
}

function elementEntry(elements, key) {
  if (elements.count(key) > 1) {
    return mapVector(elements.get_all(key));
  } else {
    return elements.get(key) || undefined;
  }
}

function mapArray(array) {
  var vector = new anitomyModule.StringVector();
  array.forEach(function (element, index) {
    if (typeof element !== 'string') {
      throw new Error("Element at index ".concat(index, " is not a string"));
    }

    vector.push_back(element);
  });
  return vector;
}

function mapVector(vector) {
  var array = [];

  for (var index = 0; index < vector.size(); index++) {
    array.push(vector.get(index));
  }

  vector["delete"]();
  return array;
}

},{"./build/anitomyscript":1,"@babel/runtime/regenerator":3}],3:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":7}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
(function (process){
// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":6}],6:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],7:[function(require,module,exports){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}]},{},[2])(2)
});
