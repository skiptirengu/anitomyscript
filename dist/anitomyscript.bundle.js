(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.anitomyscript = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (process,__dirname){

var anitomyscript = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(anitomyscript) {
  anitomyscript = anitomyscript || {};

var e;e||(e=typeof anitomyscript !== 'undefined' ? anitomyscript : {});var n={},q;for(q in e)e.hasOwnProperty(q)&&(n[q]=e[q]);e.arguments=[];e.thisProgram="./this.program";e.quit=function(a,b){throw b;};e.preRun=[];e.postRun=[];var r=!1,t=!1,aa=!1,ba=!1;r="object"===typeof window;t="function"===typeof importScripts;aa="object"===typeof process&&"function"===typeof require&&!r&&!t;ba=!r&&!aa&&!t;var v="";
if(aa){v=__dirname+"/";var ca,da;e.read=function(a,b){ca||(ca=require("fs"));da||(da=require("path"));a=da.normalize(a);a=ca.readFileSync(a);return b?a:a.toString()};e.readBinary=function(a){a=e.read(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a};1<process.argv.length&&(e.thisProgram=process.argv[1].replace(/\\/g,"/"));e.arguments=process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof ea))throw a;});process.on("unhandledRejection",
w);e.quit=function(a){process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(ba)"undefined"!=typeof read&&(e.read=function(a){return read(a)}),e.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||w("Assertion failed: undefined");return a},"undefined"!=typeof scriptArgs?e.arguments=scriptArgs:"undefined"!=typeof arguments&&(e.arguments=arguments),"function"===typeof quit&&(e.quit=function(a){quit(a)});
else if(r||t)t?v=self.location.href:document.currentScript&&(v=document.currentScript.src),_scriptDir&&(v=_scriptDir),0!==v.indexOf("blob:")?v=v.substr(0,v.lastIndexOf("/")+1):v="",e.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(e.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),e.readAsync=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);
d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)},e.setWindowTitle=function(a){document.title=a};var fa=e.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),x=e.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||fa);for(q in n)n.hasOwnProperty(q)&&(e[q]=n[q]);n=void 0;
var ha={"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}};"object"!==typeof WebAssembly&&x("no native wasm support detected");var ia,ja=!1,ka="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function la(a){if(a){for(var b=y,c=a+void 0,d=a;b[d]&&!(d>=c);)++d;if(16<d-a&&b.subarray&&ka)a=ka.decode(b.subarray(a,d));else{for(c="";a<d;){var f=b[a++];if(f&128){var g=b[a++]&63;if(192==(f&224))c+=String.fromCharCode((f&31)<<6|g);else{var h=b[a++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|b[a++]&63;65536>f?c+=String.fromCharCode(f):(f-=65536,c+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else c+=String.fromCharCode(f)}a=c}}else a="";return a}
function ma(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0}}
function na(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,z,y,oa,pa,A,B,qa,ra,C=e.TOTAL_MEMORY||16777216;5242880>C&&x("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+C+"! (TOTAL_STACK=5242880)");
e.buffer?buffer=e.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(ia=new WebAssembly.Memory({initial:C/65536,maximum:C/65536}),buffer=ia.buffer):buffer=new ArrayBuffer(C);e.HEAP8=z=new Int8Array(buffer);e.HEAP16=oa=new Int16Array(buffer);e.HEAP32=A=new Int32Array(buffer);e.HEAPU8=y=new Uint8Array(buffer);e.HEAPU16=pa=new Uint16Array(buffer);e.HEAPU32=B=new Uint32Array(buffer);e.HEAPF32=qa=new Float32Array(buffer);e.HEAPF64=ra=new Float64Array(buffer);A[8904]=5278528;
function sa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.La;"number"===typeof c?void 0===b.Da?e.dynCall_v(c):e.dynCall_vi(c,b.Da):c(void 0===b.Da?null:b.Da)}}}var ta=[],ua=[],va=[],wa=[],xa=!1;function ya(){var a=e.preRun.shift();ta.unshift(a)}var D=0,za=null,F=null;e.preloadedImages={};e.preloadedAudios={};
function Aa(){var a=G;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var G="anitomyscript.wasm";if(!Aa()){var Ba=G;G=e.locateFile?e.locateFile(Ba,v):v+Ba}function Ca(){try{if(e.wasmBinary)return new Uint8Array(e.wasmBinary);if(e.readBinary)return e.readBinary(G);throw"both async and sync fetching of the wasm failed";}catch(a){w(a)}}
function Da(){return e.wasmBinary||!r&&!t||"function"!==typeof fetch?new Promise(function(a){a(Ca())}):fetch(G,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+G+"'";return a.arrayBuffer()}).catch(function(){return Ca()})}
function Ea(a){function b(a){e.asm=a.exports;D--;e.monitorRunDependencies&&e.monitorRunDependencies(D);0==D&&(null!==za&&(clearInterval(za),za=null),F&&(a=F,F=null,a()))}function c(a){b(a.instance)}function d(a){Da().then(function(a){return WebAssembly.instantiate(a,f)}).then(a,function(a){x("failed to asynchronously prepare wasm: "+a);w(a)})}var f={env:a,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ha};D++;e.monitorRunDependencies&&e.monitorRunDependencies(D);if(e.instantiateWasm)try{return e.instantiateWasm(f,
b)}catch(g){return x("Module.instantiateWasm callback failed with error: "+g),!1}e.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||Aa()||"function"!==typeof fetch?d(c):WebAssembly.instantiateStreaming(fetch(G,{credentials:"same-origin"}),f).then(c,function(a){x("wasm streaming compile failed: "+a);x("falling back to ArrayBuffer instantiation");d(c)});return{}}
e.asm=function(a,b){b.memory=ia;b.table=new WebAssembly.Table({initial:509,maximum:509,element:"anyfunc"});b.__memory_base=1024;b.__table_base=0;return Ea(b)};ua.push({La:function(){Fa()}});function Ga(a){e.___errno_location&&(A[e.___errno_location()>>2]=a);return a}var Ha=0;function Ia(){Ha+=4;return A[Ha-4>>2]}var Ja={};function Ka(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var La=void 0;
function H(a){for(var b="";y[a];)b+=La[y[a++]];return b}var I={},J={},Ma={};function Na(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Oa(a,b){a=Na(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Pa(a){var b=Error,c=Oa(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var K=void 0;function L(a){throw new K(a);}var Qa=void 0;function Ra(a){throw new Qa(a);}
function M(a,b,c){function d(b){b=c(b);b.length!==a.length&&Ra("Mismatched type converter count");for(var d=0;d<a.length;++d)N(a[d],b[d])}a.forEach(function(a){Ma[a]=b});var f=Array(b.length),g=[],h=0;b.forEach(function(a,b){J.hasOwnProperty(a)?f[b]=J[a]:(g.push(a),I.hasOwnProperty(a)||(I[a]=[]),I[a].push(function(){f[b]=J[a];++h;h===g.length&&d(f)}))});0===g.length&&d(f)}
function N(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||L('type "'+d+'" must have a positive integer typeid pointer');if(J.hasOwnProperty(a)){if(c.Oa)return;L("Cannot register type '"+d+"' twice")}J[a]=b;delete Ma[a];I.hasOwnProperty(a)&&(b=I[a],delete I[a],b.forEach(function(a){a()}))}function Sa(a){return{count:a.count,ua:a.ua,wa:a.wa,ha:a.ha,ia:a.ia,la:a.la,ma:a.ma}}
function Ta(a){L(a.fa.ia.ga.name+" instance already deleted")}var O=void 0,P=[];function Ua(){for(;P.length;){var a=P.pop();a.fa.ua=!1;a["delete"]()}}function Q(){}var Va={};function Wa(a,b,c){if(void 0===a[b].ka){var d=a[b];a[b]=function(){a[b].ka.hasOwnProperty(arguments.length)||L("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].ka+")!");return a[b].ka[arguments.length].apply(this,arguments)};a[b].ka=[];a[b].ka[d.ya]=d}}
function Xa(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].ka&&void 0!==e[a].ka[c])&&L("Cannot register public name '"+a+"' twice"),Wa(e,a,a),e.hasOwnProperty(c)&&L("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].ka[c]=b):(e[a]=b,void 0!==c&&(e[a].hb=c))}function Ya(a,b,c,d,f,g,h,m){this.name=a;this.constructor=b;this.va=c;this.sa=d;this.na=f;this.Ma=g;this.xa=h;this.Ka=m;this.Ra=[]}
function Za(a,b,c){for(;b!==c;)b.xa||L("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.xa(a),b=b.na;return a}function $a(a,b){if(null===b)return this.Ea&&L("null is not a valid "+this.name),0;b.fa||L('Cannot pass "'+S(b)+'" as a '+this.name);b.fa.ha||L("Cannot pass deleted object as a pointer of type "+this.name);return Za(b.fa.ha,b.fa.ia.ga,this.ga)}
function ab(a,b){if(null===b){this.Ea&&L("null is not a valid "+this.name);if(this.Aa){var c=this.Sa();null!==a&&a.push(this.sa,c);return c}return 0}b.fa||L('Cannot pass "'+S(b)+'" as a '+this.name);b.fa.ha||L("Cannot pass deleted object as a pointer of type "+this.name);!this.za&&b.fa.ia.za&&L("Cannot convert argument of type "+(b.fa.ma?b.fa.ma.name:b.fa.ia.name)+" to parameter type "+this.name);c=Za(b.fa.ha,b.fa.ia.ga,this.ga);if(this.Aa)switch(void 0===b.fa.la&&L("Passing raw pointer to smart pointer is illegal"),
this.Ua){case 0:b.fa.ma===this?c=b.fa.la:L("Cannot convert argument of type "+(b.fa.ma?b.fa.ma.name:b.fa.ia.name)+" to parameter type "+this.name);break;case 1:c=b.fa.la;break;case 2:if(b.fa.ma===this)c=b.fa.la;else{var d=b.clone();c=this.Ta(c,bb(function(){d["delete"]()}));null!==a&&a.push(this.sa,c)}break;default:L("Unsupporting sharing policy")}return c}
function cb(a,b){if(null===b)return this.Ea&&L("null is not a valid "+this.name),0;b.fa||L('Cannot pass "'+S(b)+'" as a '+this.name);b.fa.ha||L("Cannot pass deleted object as a pointer of type "+this.name);b.fa.ia.za&&L("Cannot convert argument of type "+b.fa.ia.name+" to parameter type "+this.name);return Za(b.fa.ha,b.fa.ia.ga,this.ga)}function db(a){return this.fromWireType(B[a>>2])}function eb(a,b,c){if(b===c)return a;if(void 0===c.na)return null;a=eb(a,b,c.na);return null===a?null:c.Ka(a)}
var T={};function fb(a,b){for(void 0===b&&L("ptr should not be undefined");a.na;)b=a.xa(b),a=a.na;return T[b]}function gb(a,b){b.ia&&b.ha||Ra("makeClassHandle requires ptr and ptrType");!!b.ma!==!!b.la&&Ra("Both smartPtrType and smartPtr must be specified");b.count={value:1};return Object.create(a,{fa:{value:b}})}
function U(a,b,c,d){this.name=a;this.ga=b;this.Ea=c;this.za=d;this.Aa=!1;this.sa=this.Ta=this.Sa=this.Ha=this.Ua=this.Qa=void 0;void 0!==b.na?this.toWireType=ab:(this.toWireType=d?$a:cb,this.oa=null)}function hb(a,b,c){e.hasOwnProperty(a)||Ra("Replacing nonexistant public symbol");void 0!==e[a].ka&&void 0!==c?e[a].ka[c]=b:(e[a]=b,e[a].ya=c)}
function V(a,b){a=H(a);if(void 0!==e["FUNCTION_TABLE_"+a])var c=e["FUNCTION_TABLE_"+a][b];else if("undefined"!==typeof FUNCTION_TABLE)c=FUNCTION_TABLE[b];else{c=e["dynCall_"+a];void 0===c&&(c=e["dynCall_"+a.replace(/f/g,"d")],void 0===c&&L("No dynCall invoker for signature: "+a));for(var d=[],f=1;f<a.length;++f)d.push("a"+f);f="return function "+("dynCall_"+a+"_"+b)+"("+d.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(d.length?", ":"")+d.join(", ")+");\n";c=(new Function("dynCall","rawFunction",
f+"};\n"))(c,b)}"function"!==typeof c&&L("unknown function pointer with signature "+a+": "+b);return c}var ib=void 0;function jb(a){a=kb(a);var b=H(a);W(a);return b}function lb(a,b){function c(a){f[a]||J[a]||(Ma[a]?Ma[a].forEach(c):(d.push(a),f[a]=!0))}var d=[],f={};b.forEach(c);throw new ib(a+": "+d.map(jb).join([", "]));}function mb(a,b){for(var c=[],d=0;d<a;d++)c.push(A[(b>>2)+d]);return c}function nb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}
function ob(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Oa(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function pb(a,b,c,d,f){var g=b.length;2>g&&L("argTypes array size mismatch! Must at least get return value and 'this' types!");var h=null!==b[1]&&null!==c,m=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].oa){m=!0;break}var p="void"!==b[0].name,k="",l="";for(c=0;c<g-2;++c)k+=(0!==c?", ":"")+"arg"+c,l+=(0!==c?", ":"")+"arg"+c+"Wired";a="return function "+Na(a)+"("+k+") {\nif (arguments.length !== "+(g-2)+") {\nthrowBindingError('function "+a+" called with ' + arguments.length + ' arguments, expected "+
(g-2)+" args!');\n}\n";m&&(a+="var destructors = [];\n");var u=m?"destructors":"null";k="throwBindingError invoker fn runDestructors retType classParam".split(" ");d=[L,d,f,nb,b[0],b[1]];h&&(a+="var thisWired = classParam.toWireType("+u+", this);\n");for(c=0;c<g-2;++c)a+="var arg"+c+"Wired = argType"+c+".toWireType("+u+", arg"+c+"); // "+b[c+2].name+"\n",k.push("argType"+c),d.push(b[c+2]);h&&(l="thisWired"+(0<l.length?", ":"")+l);a+=(p?"var rv = ":"")+"invoker(fn"+(0<l.length?", ":"")+l+");\n";if(m)a+=
"runDestructors(destructors);\n";else for(c=h?1:2;c<b.length;++c)g=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==b[c].oa&&(a+=g+"_dtor("+g+"); // "+b[c].name+"\n",k.push(g+"_dtor"),d.push(b[c].oa));p&&(a+="var ret = retType.fromWireType(rv);\nreturn ret;\n");k.push(a+"}\n");return ob(k).apply(null,d)}var qb=[],X=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function rb(a){4<a&&0===--X[a].Fa&&(X[a]=void 0,qb.push(a))}
function bb(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=qb.length?qb.pop():X.length;X[b]={Fa:1,value:a};return b}}function sb(a,b,c){switch(b){case 0:return function(a){return this.fromWireType((c?z:y)[a])};case 1:return function(a){return this.fromWireType((c?oa:pa)[a>>1])};case 2:return function(a){return this.fromWireType((c?A:B)[a>>2])};default:throw new TypeError("Unknown integer type: "+a);}}
function tb(a,b){var c=J[a];void 0===c&&L(b+" has unknown type "+jb(a));return c}function S(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function ub(a,b){switch(b){case 2:return function(a){return this.fromWireType(qa[a>>2])};case 3:return function(a){return this.fromWireType(ra[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function vb(a,b,c){switch(b){case 0:return c?function(a){return z[a]}:function(a){return y[a]};case 1:return c?function(a){return oa[a>>1]}:function(a){return pa[a>>1]};case 2:return c?function(a){return A[a>>2]}:function(a){return B[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var wb={};function Y(a){if(0===a)return 0;a=la(a);if(!wb.hasOwnProperty(a))return 0;Y.pa&&W(Y.pa);a=wb[a];var b=na(a)+1,c=xb(b);c&&ma(a,z,c,b);Y.pa=c;return Y.pa}
function Z(){Z.pa||(Z.pa=[]);Z.pa.push(yb());return Z.pa.length-1}function zb(){w("OOM")}function Ab(a){return 0===a%4&&(0!==a%100||0===a%400)}function Bb(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var Cb=[31,29,31,30,31,30,31,31,30,31,30,31],Db=[31,28,31,30,31,30,31,31,30,31,30,31];
function Eb(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Ab(a.getFullYear())?Cb:Db)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Fb(a,b,c,d){function f(a,b,c){for(a="number"===typeof a?a.toString():a||"";a.length<b;)a=c[0]+a;return a}function g(a,b){return f(a,b,"0")}function h(a,b){function c(a){return 0>a?-1:0<a?1:0}var d;0===(d=c(a.getFullYear()-b.getFullYear()))&&0===(d=c(a.getMonth()-b.getMonth()))&&(d=c(a.getDate()-b.getDate()));return d}function m(a){switch(a.getDay()){case 0:return new Date(a.getFullYear()-1,11,29);case 1:return a;case 2:return new Date(a.getFullYear(),0,3);case 3:return new Date(a.getFullYear(),
0,2);case 4:return new Date(a.getFullYear(),0,1);case 5:return new Date(a.getFullYear()-1,11,31);case 6:return new Date(a.getFullYear()-1,11,30)}}function p(a){a=Eb(new Date(a.ja+1900,0,1),a.Ca);var b=m(new Date(a.getFullYear()+1,0,4));return 0>=h(m(new Date(a.getFullYear(),0,4)),a)?0>=h(b,a)?a.getFullYear()+1:a.getFullYear():a.getFullYear()-1}var k=A[d+40>>2];d={Xa:A[d>>2],Wa:A[d+4>>2],Ba:A[d+8>>2],ta:A[d+12>>2],qa:A[d+16>>2],ja:A[d+20>>2],Ia:A[d+24>>2],Ca:A[d+28>>2],ib:A[d+32>>2],Va:A[d+36>>2],
Ya:k?la(k):""};c=la(c);k={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S"};for(var l in k)c=c.replace(new RegExp(l,"g"),k[l]);var u="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),R="January February March April May June July August September October November December".split(" ");k={"%a":function(a){return u[a.Ia].substring(0,3)},"%A":function(a){return u[a.Ia]},"%b":function(a){return R[a.qa].substring(0,
3)},"%B":function(a){return R[a.qa]},"%C":function(a){return g((a.ja+1900)/100|0,2)},"%d":function(a){return g(a.ta,2)},"%e":function(a){return f(a.ta,2," ")},"%g":function(a){return p(a).toString().substring(2)},"%G":function(a){return p(a)},"%H":function(a){return g(a.Ba,2)},"%I":function(a){a=a.Ba;0==a?a=12:12<a&&(a-=12);return g(a,2)},"%j":function(a){return g(a.ta+Bb(Ab(a.ja+1900)?Cb:Db,a.qa-1),3)},"%m":function(a){return g(a.qa+1,2)},"%M":function(a){return g(a.Wa,2)},"%n":function(){return"\n"},
"%p":function(a){return 0<=a.Ba&&12>a.Ba?"AM":"PM"},"%S":function(a){return g(a.Xa,2)},"%t":function(){return"\t"},"%u":function(a){return(new Date(a.ja+1900,a.qa+1,a.ta,0,0,0,0)).getDay()||7},"%U":function(a){var b=new Date(a.ja+1900,0,1),c=0===b.getDay()?b:Eb(b,7-b.getDay());a=new Date(a.ja+1900,a.qa,a.ta);return 0>h(c,a)?g(Math.ceil((31-c.getDate()+(Bb(Ab(a.getFullYear())?Cb:Db,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%V":function(a){var b=m(new Date(a.ja+1900,0,4)),c=m(new Date(a.ja+
1901,0,4)),d=Eb(new Date(a.ja+1900,0,1),a.Ca);return 0>h(d,b)?"53":0>=h(c,d)?"01":g(Math.ceil((b.getFullYear()<a.ja+1900?a.Ca+32-b.getDate():a.Ca+1-b.getDate())/7),2)},"%w":function(a){return(new Date(a.ja+1900,a.qa+1,a.ta,0,0,0,0)).getDay()},"%W":function(a){var b=new Date(a.ja,0,1),c=1===b.getDay()?b:Eb(b,0===b.getDay()?1:7-b.getDay()+1);a=new Date(a.ja+1900,a.qa,a.ta);return 0>h(c,a)?g(Math.ceil((31-c.getDate()+(Bb(Ab(a.getFullYear())?Cb:Db,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":
"00"},"%y":function(a){return(a.ja+1900).toString().substring(2)},"%Y":function(a){return a.ja+1900},"%z":function(a){a=a.Va;var b=0<=a;a=Math.abs(a)/60;return(b?"+":"-")+String("0000"+(a/60*100+a%60)).slice(-4)},"%Z":function(a){return a.Ya},"%%":function(){return"%"}};for(l in k)0<=c.indexOf(l)&&(c=c.replace(new RegExp(l,"g"),k[l](d)));l=Gb(c);if(l.length>b)return 0;z.set(l,a);return l.length-1}for(var Hb=Array(256),Ib=0;256>Ib;++Ib)Hb[Ib]=String.fromCharCode(Ib);La=Hb;K=e.BindingError=Pa("BindingError");
Qa=e.InternalError=Pa("InternalError");Q.prototype.isAliasOf=function(a){if(!(this instanceof Q&&a instanceof Q))return!1;var b=this.fa.ia.ga,c=this.fa.ha,d=a.fa.ia.ga;for(a=a.fa.ha;b.na;)c=b.xa(c),b=b.na;for(;d.na;)a=d.xa(a),d=d.na;return b===d&&c===a};Q.prototype.clone=function(){this.fa.ha||Ta(this);if(this.fa.wa)return this.fa.count.value+=1,this;var a=Object.create(Object.getPrototypeOf(this),{fa:{value:Sa(this.fa)}});a.fa.count.value+=1;a.fa.ua=!1;return a};
Q.prototype["delete"]=function(){this.fa.ha||Ta(this);this.fa.ua&&!this.fa.wa&&L("Object already scheduled for deletion");--this.fa.count.value;if(0===this.fa.count.value){var a=this.fa;a.la?a.ma.sa(a.la):a.ia.ga.sa(a.ha)}this.fa.wa||(this.fa.la=void 0,this.fa.ha=void 0)};Q.prototype.isDeleted=function(){return!this.fa.ha};Q.prototype.deleteLater=function(){this.fa.ha||Ta(this);this.fa.ua&&!this.fa.wa&&L("Object already scheduled for deletion");P.push(this);1===P.length&&O&&O(Ua);this.fa.ua=!0;return this};
U.prototype.Na=function(a){this.Ha&&(a=this.Ha(a));return a};U.prototype.Ga=function(a){this.sa&&this.sa(a)};U.prototype.argPackAdvance=8;U.prototype.readValueFromPointer=db;U.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
U.prototype.fromWireType=function(a){function b(){return this.Aa?gb(this.ga.va,{ia:this.Qa,ha:c,ma:this,la:a}):gb(this.ga.va,{ia:this,ha:a})}var c=this.Na(a);if(!c)return this.Ga(a),null;var d=fb(this.ga,c);if(void 0!==d){if(0===d.fa.count.value)return d.fa.ha=c,d.fa.la=a,d.clone();d=d.clone();this.Ga(a);return d}d=this.ga.Ma(c);d=Va[d];if(!d)return b.call(this);d=this.za?d.Ja:d.pointerType;var f=eb(c,this.ga,d.ga);return null===f?b.call(this):this.Aa?gb(d.ga.va,{ia:d,ha:f,ma:this,la:a}):gb(d.ga.va,
{ia:d,ha:f})};e.getInheritedInstanceCount=function(){return Object.keys(T).length};e.getLiveInheritedInstances=function(){var a=[],b;for(b in T)T.hasOwnProperty(b)&&a.push(T[b]);return a};e.flushPendingDeletes=Ua;e.setDelayFunction=function(a){O=a;P.length&&O&&O(Ua)};ib=e.UnboundTypeError=Pa("UnboundTypeError");e.count_emval_handles=function(){for(var a=0,b=5;b<X.length;++b)void 0!==X[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<X.length;++a)if(void 0!==X[a])return X[a];return null};
function Gb(a){var b=Array(na(a)+1);ma(a,b,0,b.length);return b}
var Kb=e.asm({},{d:w,H:function(){},C:function(){Ga(1);return-1},n:Ga,t:function(a,b){Ha=b;try{var c=Ia(),d=Ia(),f=Ja.Pa[c];if(!f)return 0;if(d===f.eb){var g=(void 0).bb(f.fd);Ja.$a(c,g,d,f.flags);(void 0).gb(g);Ja.Pa[c]=null;f.Za&&W(f.fb)}return 0}catch(h){return w(h),-h.ab}},m:function(){},s:function(a,b,c,d,f){var g=Ka(c);b=H(b);N(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?d:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===c)var d=z;else if(2===c)d=
oa;else if(4===c)d=A;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(d[a>>g])},oa:null})},l:function(a,b,c,d,f,g,h,m,p,k,l,u,R){l=H(l);g=V(f,g);m&&(m=V(h,m));k&&(k=V(p,k));R=V(u,R);var E=Na(l);Xa(E,function(){lb("Cannot construct "+l+" due to unbound types",[d])});M([a,b,c],d?[d]:[],function(b){b=b[0];if(d){var c=b.ga;var f=c.va}else f=Q.prototype;b=Oa(E,function(){if(Object.getPrototypeOf(this)!==h)throw new K("Use 'new' to construct "+l);if(void 0===p.ra)throw new K(l+
" has no accessible constructor");var a=p.ra[arguments.length];if(void 0===a)throw new K("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(p.ra).toString()+") parameters instead!");return a.apply(this,arguments)});var h=Object.create(f,{constructor:{value:b}});b.prototype=h;var p=new Ya(l,b,h,R,c,g,m,k);c=new U(l,p,!0,!1);f=new U(l+"*",p,!1,!1);var u=new U(l+" const*",p,!1,!0);Va[a]={pointerType:f,Ja:u};hb(E,b);return[c,f,u]})},j:function(a,
b,c,d,f,g){var h=mb(b,c);f=V(d,f);M([],[a],function(a){a=a[0];var c="constructor "+a.name;void 0===a.ga.ra&&(a.ga.ra=[]);if(void 0!==a.ga.ra[b-1])throw new K("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+a.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");a.ga.ra[b-1]=function(){lb("Cannot construct "+a.name+" due to unbound types",h)};M([],h,function(d){a.ga.ra[b-1]=function(){arguments.length!==
b-1&&L(c+" called with "+arguments.length+" arguments, expected "+(b-1));var a=[],h=Array(b);h[0]=g;for(var k=1;k<b;++k)h[k]=d[k].toWireType(a,arguments[k-1]);h=f.apply(null,h);nb(a);return d[0].fromWireType(h)};return[]});return[]})},f:function(a,b,c,d,f,g,h,m){var p=mb(c,d);b=H(b);g=V(f,g);M([],[a],function(a){function d(){lb("Cannot call "+f+" due to unbound types",p)}a=a[0];var f=a.name+"."+b;m&&a.ga.Ra.push(b);var k=a.ga.va,E=k[b];void 0===E||void 0===E.ka&&E.className!==a.name&&E.ya===c-2?(d.ya=
c-2,d.className=a.name,k[b]=d):(Wa(k,b,f),k[b].ka[c-2]=d);M([],p,function(d){d=pb(f,d,a,g,h);void 0===k[b].ka?(d.ya=c-2,k[b]=d):k[b].ka[c-2]=d;return[]});return[]})},G:function(a,b){b=H(b);N(a,{name:b,fromWireType:function(a){var b=X[a].value;rb(a);return b},toWireType:function(a,b){return bb(b)},argPackAdvance:8,readValueFromPointer:db,oa:null})},F:function(a,b,c,d){function f(){}c=Ka(c);b=H(b);f.values={};N(a,{name:b,constructor:f,fromWireType:function(a){return this.constructor.values[a]},toWireType:function(a,
b){return b.value},argPackAdvance:8,readValueFromPointer:sb(b,c,d),oa:null});Xa(b,f)},c:function(a,b,c){var d=tb(a,"enum");b=H(b);a=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Oa(d.name+"_"+b,function(){})}});a.values[c]=d;a[b]=d},r:function(a,b,c){c=Ka(c);b=H(b);N(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+S(b)+'" to '+this.name);return b},argPackAdvance:8,
readValueFromPointer:ub(b,c),oa:null})},q:function(a,b,c,d,f,g){var h=mb(b,c);a=H(a);f=V(d,f);Xa(a,function(){lb("Cannot call "+a+" due to unbound types",h)},b-1);M([],h,function(c){c=[c[0],null].concat(c.slice(1));hb(a,pb(a,c,null,f,g),b-1);return[]})},g:function(a,b,c,d,f){function g(a){return a}b=H(b);-1===f&&(f=4294967295);var h=Ka(c);if(0===d){var m=32-8*c;g=function(a){return a<<m>>>m}}var p=-1!=b.indexOf("unsigned");N(a,{name:b,fromWireType:g,toWireType:function(a,c){if("number"!==typeof c&&
"boolean"!==typeof c)throw new TypeError('Cannot convert "'+S(c)+'" to '+this.name);if(c<d||c>f)throw new TypeError('Passing a number "'+S(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return p?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:vb(b,h,0!==d),oa:null})},e:function(a,b,c){function d(a){a>>=2;return new f(B.buffer,B[a+1],B[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];
c=H(c);N(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{Oa:!0})},p:function(a,b){b=H(b);var c="std::string"===b;N(a,{name:b,fromWireType:function(a){var b=B[a>>2];if(c){var d=y[a+4+b],h=0;0!=d&&(h=d,y[a+4+b]=0);var m=a+4;for(d=0;d<=b;++d){var p=a+4+d;if(0==y[p]){m=la(m);if(void 0===k)var k=m;else k+=String.fromCharCode(0),k+=m;m=p+1}}0!=h&&(y[a+4+b]=h)}else{k=Array(b);for(d=0;d<b;++d)k[d]=String.fromCharCode(y[a+4+d]);k=k.join("")}W(a);return k},toWireType:function(a,b){b instanceof
ArrayBuffer&&(b=new Uint8Array(b));var d="string"===typeof b;d||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||L("Cannot pass non-string to std::string");var f=(c&&d?function(){return na(b)}:function(){return b.length})(),m=xb(4+f+1);B[m>>2]=f;if(c&&d)ma(b,y,m+4,f+1);else if(d)for(d=0;d<f;++d){var p=b.charCodeAt(d);255<p&&(W(m),L("String has UTF-16 code units that do not fit in 8 bits"));y[m+4+d]=p}else for(d=0;d<f;++d)y[m+4+d]=b[d];null!==a&&a.push(W,m);return m},
argPackAdvance:8,readValueFromPointer:db,oa:function(a){W(a)}})},E:function(a,b,c){c=H(c);if(2===b){var d=function(){return pa};var f=1}else 4===b&&(d=function(){return B},f=2);N(a,{name:c,fromWireType:function(a){for(var b=d(),c=B[a>>2],g=Array(c),k=a+4>>f,l=0;l<c;++l)g[l]=String.fromCharCode(b[k+l]);W(a);return g.join("")},toWireType:function(a,c){var g=d(),h=c.length,k=xb(4+h*b);B[k>>2]=h;for(var l=k+4>>f,u=0;u<h;++u)g[l+u]=c.charCodeAt(u);null!==a&&a.push(W,k);return k},argPackAdvance:8,readValueFromPointer:db,
oa:function(a){W(a)}})},D:function(a,b){b=H(b);N(a,{cb:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},B:rb,A:function(a){4<a&&(X[a].Fa+=1)},o:function(a,b){a=tb(a,"_emval_take_value");a=a.readValueFromPointer(b);return bb(a)},b:function(){e.abort()},z:function(){return z.length},y:function(a,b,c){y.set(y.subarray(b,b+c),a)},x:function(a){zb(a)},k:Y,i:function(a){var b=Z.pa[a];Z.pa.splice(a,1);Jb(b)},h:Z,w:function(){return 0},v:function(a,b,c,d){return Fb(a,b,c,d)},
u:zb,a:35616},buffer);e.asm=Kb;var kb=e.___getTypeName=function(){return e.asm.I.apply(null,arguments)},W=e._free=function(){return e.asm.J.apply(null,arguments)},xb=e._malloc=function(){return e.asm.K.apply(null,arguments)},Fa=e.globalCtors=function(){return e.asm.ca.apply(null,arguments)},Jb=e.stackRestore=function(){return e.asm.da.apply(null,arguments)},yb=e.stackSave=function(){return e.asm.ea.apply(null,arguments)};e.dynCall_i=function(){return e.asm.L.apply(null,arguments)};
e.dynCall_ii=function(){return e.asm.M.apply(null,arguments)};e.dynCall_iii=function(){return e.asm.N.apply(null,arguments)};e.dynCall_iiii=function(){return e.asm.O.apply(null,arguments)};e.dynCall_iiiii=function(){return e.asm.P.apply(null,arguments)};e.dynCall_iiiiid=function(){return e.asm.Q.apply(null,arguments)};e.dynCall_iiiiii=function(){return e.asm.R.apply(null,arguments)};e.dynCall_iiiiiid=function(){return e.asm.S.apply(null,arguments)};
e.dynCall_iiiiiii=function(){return e.asm.T.apply(null,arguments)};e.dynCall_iiiiiiii=function(){return e.asm.U.apply(null,arguments)};e.dynCall_iiiiiiiii=function(){return e.asm.V.apply(null,arguments)};e.dynCall_iiiiij=function(){return e.asm.W.apply(null,arguments)};e.dynCall_v=function(){return e.asm.X.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.Y.apply(null,arguments)};e.dynCall_vii=function(){return e.asm.Z.apply(null,arguments)};
e.dynCall_viii=function(){return e.asm._.apply(null,arguments)};e.dynCall_viiii=function(){return e.asm.$.apply(null,arguments)};e.dynCall_viiiii=function(){return e.asm.aa.apply(null,arguments)};e.dynCall_viiiiii=function(){return e.asm.ba.apply(null,arguments)};e.asm=Kb;e.then=function(a){if(e.calledRun)a(e);else{var b=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){b&&b();a(e)}}return e};
function ea(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}ea.prototype=Error();ea.prototype.constructor=ea;F=function Lb(){e.calledRun||Mb();e.calledRun||(F=Lb)};
function Mb(){function a(){if(!e.calledRun&&(e.calledRun=!0,!ja)){xa||(xa=!0,sa(ua));sa(va);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();wa.unshift(a)}sa(wa)}}if(!(0<D)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)ya();sa(ta);0<D||e.calledRun||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},
1);a()},1)):a())}}e.run=Mb;function w(a){if(e.onAbort)e.onAbort(a);void 0!==a?(fa(a),x(a),a=JSON.stringify(a)):a="";ja=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}e.abort=w;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();e.noExitRuntime=!0;Mb();


  return anitomyscript
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = anitomyscript;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return anitomyscript; });
    else if (typeof exports === 'object')
      exports["anitomyscript"] = anitomyscript;
    
}).call(this,require('_process'),"/build")
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
  _parse = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(file) {
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

  function AsyncIterator(generator) {
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
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
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
        return new Promise(function(resolve, reject) {
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
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
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
