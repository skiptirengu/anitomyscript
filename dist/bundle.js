(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.anitomyscript = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (process,Buffer,__dirname){

var anitomyscript = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(anitomyscript) {
  anitomyscript = anitomyscript || {};

var c;c||(c=typeof anitomyscript !== 'undefined' ? anitomyscript : {});var l={},m;for(m in c)c.hasOwnProperty(m)&&(l[m]=c[m]);c.arguments=[];c.thisProgram="./this.program";c.quit=function(a,b){throw b;};c.preRun=[];c.postRun=[];var r=!1,t=!1,u=!1,v=!1;r="object"===typeof window;t="function"===typeof importScripts;u="object"===typeof process&&"function"===typeof require&&!r&&!t;v=!r&&!u&&!t;var w="";
if(u){w=__dirname+"/";var x,aa;c.read=function(a,b){var d=y(a);d||(x||(x=require("fs")),aa||(aa=require("path")),a=aa.normalize(a),d=x.readFileSync(a));return b?d:d.toString()};c.readBinary=function(a){a=c.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};1<process.argv.length&&(c.thisProgram=process.argv[1].replace(/\\/g,"/"));c.arguments=process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof z))throw a;});process.on("unhandledRejection",A);c.quit=
function(a){process.exit(a)};c.inspect=function(){return"[Emscripten Module object]"}}else if(v)"undefined"!=typeof read&&(c.read=function(a){var b=y(a);return b?ba(b):read(a)}),c.readBinary=function(a){var b;if(b=y(a))return b;if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));b=read(a,"binary");assert("object"===typeof b);return b},"undefined"!=typeof scriptArgs?c.arguments=scriptArgs:"undefined"!=typeof arguments&&(c.arguments=arguments),"function"===typeof quit&&(c.quit=function(a){quit(a)});
else if(r||t)t?w=self.location.href:document.currentScript&&(w=document.currentScript.src),_scriptDir&&(w=_scriptDir),0!==w.indexOf("blob:")?w=w.substr(0,w.lastIndexOf("/")+1):w="",c.read=function(a){try{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText}catch(d){if(a=y(a))return ba(a);throw d;}},t&&(c.readBinary=function(a){try{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}catch(d){if(a=y(a))return a;
throw d;}}),c.readAsync=function(a,b,d){var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){if(200==e.status||0==e.status&&e.response)b(e.response);else{var f=y(a);f?b(f.buffer):d()}};e.onerror=d;e.send(null)},c.setWindowTitle=function(a){document.title=a};
var ca=c.print||("undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null),da=c.printErr||("undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||ca);for(m in l)l.hasOwnProperty(m)&&(c[m]=l[m]);l=void 0;var B=0,ea=!1;function assert(a,b){a||A("Assertion failed: "+b)}var fa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ha(a,b,d){var e=D;if(0<d){d=b+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var k=a.charCodeAt(++f);g=65536+((g&1023)<<10)|k&1023}if(127>=g){if(b>=d)break;e[b++]=g}else{if(2047>=g){if(b+1>=d)break;e[b++]=192|g>>6}else{if(65535>=g){if(b+2>=d)break;e[b++]=224|g>>12}else{if(b+3>=d)break;e[b++]=240|g>>18;e[b++]=128|g>>12&63}e[b++]=128|g>>6&63}e[b++]=128|g&63}}e[b]=0}}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");
var buffer,F,D,ia,ja,G,H,la,ma,na=c.TOTAL_MEMORY||16777216;5242880>na&&da("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+na+"! (TOTAL_STACK=5242880)");c.buffer?buffer=c.buffer:buffer=new ArrayBuffer(na);c.HEAP8=F=new Int8Array(buffer);c.HEAP16=ia=new Int16Array(buffer);c.HEAP32=G=new Int32Array(buffer);c.HEAPU8=D=new Uint8Array(buffer);c.HEAPU16=ja=new Uint16Array(buffer);c.HEAPU32=H=new Uint32Array(buffer);c.HEAPF32=la=new Float32Array(buffer);c.HEAPF64=ma=new Float64Array(buffer);
G[716]=5245776;function I(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var d=b.T;"number"===typeof d?void 0===b.S?c.dynCall_v(d):c.dynCall_vi(d,b.S):d(void 0===b.S?null:b.S)}}}var oa=[],pa=[],qa=[],ra=[],sa=!1;function ta(){var a=c.preRun.shift();oa.unshift(a)}var K=0,ua=null,L=null;c.preloadedImages={};c.preloadedAudios={};var M=null,N="data:application/octet-stream;base64,";pa.push({T:function(){va()}});M="data:application/octet-stream;base64,iAEAAPUEAAD0AQAAtgQAAAAAAAABAAAACAAAAAAAAAD0AQAAGwUAAAAAAAABAAAACAAAAAAAAAD0AQAAWgUAAAAAAAABAAAACAAAAAAAAACIAQAAmQUAAIgBAACsBQAAiAEAAMsFAACIAQAA6gUAAIgBAAAJBgAAiAEAACgGAACIAQAARwYAAIgBAABmBgAAiAEAAIUGAACIAQAApAYAAIgBAADDBgAAiAEAAOIGAACIAQAAAQcAALABAABzBwAA0AAAAAAAAACwAQAAIAcAAOAAAAAAAAAAiAEAAEEHAACwAQAATgcAAMAAAAAAAAAAsAEAAJUHAADQAAAAAAAAANgBAAC9BwAA2AEAAL8HAADYAQAAwQcAANgBAADDBwAA2AEAAMUHAADYAQAAxwcAANgBAADJBwAA2AEAAMsHAADYAQAAzQcAANgBAADPBwAA2AEAANEHAADYAQAA0wcAANgBAADVBwAAsAEAANcHAADAAAAAAAAAAAAAAADAAAAAAQAAAAIAAAADAAAABAAAAAEAAAABAAAAAQAAAAEAAAAAAAAA6AAAAAEAAAAFAAAAAwAAAAQAAAABAAAAAgAAAAIAAAACAAAAAAAAAPgAAAABAAAABgAAAAMAAAAEAAAAAgAAAAAAAABwAQAAAQAAAAcAAAADAAAABAAAAAEAAAADAAAAAwAAAAMAAABzdGQ6OmJhc2ljX3N0cmluZzx1bnNpZ25lZCBjaGFyPgBzdGQ6OndzdHJpbmcAZW1zY3JpcHRlbjo6dmFsAGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgc2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgaW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDE2X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQzMl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8ZmxvYXQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGRvdWJsZT4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZyBkb3VibGU+AE5TdDNfXzIxMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAE5TdDNfXzIyMV9fYmFzaWNfc3RyaW5nX2NvbW1vbklMYjFFRUUATlN0M19fMjEyYmFzaWNfc3RyaW5nSWhOU18xMWNoYXJfdHJhaXRzSWhFRU5TXzlhbGxvY2F0b3JJaEVFRUUATlN0M19fMjEyYmFzaWNfc3RyaW5nSXdOU18xMWNoYXJfdHJhaXRzSXdFRU5TXzlhbGxvY2F0b3JJd0VFRUUATjEwZW1zY3JpcHRlbjN2YWxFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWNFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lhRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaEVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXNFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0l0RUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJaUVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWpFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lsRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJbUVFAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWZFRQBOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lkRUUATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZUVFAE4xMF9fY3h4YWJpdjExNl9fc2hpbV90eXBlX2luZm9FAFN0OXR5cGVfaW5mbwBOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UATjEwX19jeHhhYml2MTE3X19jbGFzc190eXBlX2luZm9FAE4xMF9fY3h4YWJpdjEyM19fZnVuZGFtZW50YWxfdHlwZV9pbmZvRQB2AGIAYwBoAGEAcwB0AGkAagBsAG0AZgBkAE4xMF9fY3h4YWJpdjEyMV9fdm1pX2NsYXNzX3R5cGVfaW5mb0UAc3RkOjpzdHJpbmcAY2hhcgBzaWduZWQgY2hhcgB1bnNpZ25lZCBjaGFyAHNob3J0AHVuc2lnbmVkIHNob3J0AHZvaWQAYm9vbABpbnQAdW5zaWduZWQgaW50AGxvbmcAdW5zaWduZWQgbG9uZwBmbG9hdABkb3VibGU=";
function wa(){return!!wa.W}var xa=0,ya={};function O(){var a=xa;if(!a)return B=0;var b=ya[a],d=b.type;if(!d)return B=0,a|0;var e=Array.prototype.slice.call(arguments);c.___cxa_is_pointer_type(d);O.buffer||(O.buffer=za(4));G[O.buffer>>2]=a;a=O.buffer;for(var f=0;f<e.length;f++)if(e[f]&&c.___cxa_can_catch(e[f],d,a))return a=G[a>>2],b.X.push(a),B=e[f],a|0;a=G[a>>2];B=d;return a|0}
function P(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}function Aa(){for(var a=Array(256),b=0;256>b;++b)a[b]=String.fromCharCode(b);Ba=a}var Ba=void 0;function Q(a){for(var b="";D[a];)b+=Ba[D[a++]];return b}var R={},S={},Ca={};function Da(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function Ea(a,b){a=Da(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Fa(a,b){var d=Ea(b,function(a){this.name=b;this.message=a;a=Error(a).stack;void 0!==a&&(this.stack=this.toString()+"\n"+a.replace(/^Error(:[^\n]*)?\n/,""))});d.prototype=Object.create(a.prototype);d.prototype.constructor=d;d.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return d}var Ga=void 0;
function T(a){throw new Ga(a);}var Ha=void 0;function Ia(a){throw new Ha(a);}function U(a,b,d){d=d||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=b.name;a||T('type "'+e+'" must have a positive integer typeid pointer');if(S.hasOwnProperty(a)){if(d.U)return;T("Cannot register type '"+e+"' twice")}S[a]=b;delete Ca[a];R.hasOwnProperty(a)&&(b=R[a],delete R[a],b.forEach(function(a){a()}))}
var Ja=[],V=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ka(a){4<a&&0===--V[a].V&&(V[a]=void 0,Ja.push(a))}function La(){for(var a=0,b=5;b<V.length;++b)void 0!==V[b]&&++a;return a}function Ma(){for(var a=5;a<V.length;++a)if(void 0!==V[a])return V[a];return null}function Na(){c.count_emval_handles=La;c.get_first_emval=Ma}
function Oa(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Ja.length?Ja.pop():V.length;V[b]={V:1,value:a};return b}}function W(a){return this.fromWireType(H[a>>2])}function X(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Qa(a,b){switch(b){case 2:return function(a){return this.fromWireType(la[a>>2])};case 3:return function(a){return this.fromWireType(ma[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Ra(a,b,d){switch(b){case 0:return d?function(a){return F[a]}:function(a){return D[a]};case 1:return d?function(a){return ia[a>>1]}:function(a){return ja[a>>1]};case 2:return d?function(a){return G[a>>2]}:function(a){return H[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}function Sa(){A("OOM")}Aa();Ga=c.BindingError=Fa(Error,"BindingError");Ha=c.InternalError=Fa(Error,"InternalError");Na();var Ta=!1;
function ba(a){for(var b=[],d=0;d<a.length;d++){var e=a[d];255<e&&(Ta&&assert(!1,"Character code "+e+" ("+String.fromCharCode(e)+")  at offset "+d+" not in 0x00-0xFF."),e&=255);b.push(String.fromCharCode(e))}return b.join("")}
var Ua="function"===typeof atob?atob:function(a){var b="",d=0;a=a.replace(/[^A-Za-z0-9\+\/=]/g,"");do{var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));var k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));e=e<<2|f>>4;
f=(f&15)<<4|g>>2;var h=(g&3)<<6|k;b+=String.fromCharCode(e);64!==g&&(b+=String.fromCharCode(f));64!==k&&(b+=String.fromCharCode(h))}while(d<a.length);return b};
function y(a){if(String.prototype.startsWith?a.startsWith(N):0===a.indexOf(N)){a=a.slice(N.length);if("boolean"===typeof u&&u){try{var b=Buffer.from(a,"base64")}catch(g){b=new Buffer(a,"base64")}var d=new Uint8Array(b.buffer,b.byteOffset,b.byteLength)}else try{var e=Ua(a),f=new Uint8Array(e.length);for(b=0;b<e.length;++b)f[b]=e.charCodeAt(b);d=f}catch(g){throw Error("Converting base64 string to bytes failed.");}return d}}
var Va={Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array},Wa={a:A,b:function(a){B=a},c:function(){return B},d:wa,e:O,f:function(a){try{return Y(a)}catch(b){}},g:function(){},h:function(a){xa||(xa=a);throw a;},i:function(a){c.___errno_location&&(G[c.___errno_location()>>2]=a);return a},j:function(a,b,d,e,f){var g=P(d);b=Q(b);U(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?e:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===
d)var e=F;else if(2===d)e=ia;else if(4===d)e=G;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(e[a>>g])},R:null})},k:function(a,b){b=Q(b);U(a,{name:b,fromWireType:function(a){var b=V[a].value;Ka(a);return b},toWireType:function(a,b){return Oa(b)},argPackAdvance:8,readValueFromPointer:W,R:null})},l:function(a,b,d){d=P(d);b=Q(b);U(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+
X(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:Qa(b,d),R:null})},m:function(a,b,d,e,f){function g(a){return a}b=Q(b);-1===f&&(f=4294967295);var k=P(d);if(0===e){var h=32-8*d;g=function(a){return a<<h>>>h}}var E=-1!=b.indexOf("unsigned");U(a,{name:b,fromWireType:g,toWireType:function(a,d){if("number"!==typeof d&&"boolean"!==typeof d)throw new TypeError('Cannot convert "'+X(d)+'" to '+this.name);if(d<e||d>f)throw new TypeError('Passing a number "'+X(d)+'" from JS side to C/C++ side to an argument of type "'+
b+'", which is outside the valid range ['+e+", "+f+"]!");return E?d>>>0:d|0},argPackAdvance:8,readValueFromPointer:Ra(b,k,0!==e),R:null})},n:function(a,b,d){function e(a){a>>=2;return new f(H.buffer,H[a+1],H[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];d=Q(d);U(a,{name:d,fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{U:!0})},o:function(a,b){b=Q(b);var d="std::string"===b;U(a,{name:b,fromWireType:function(a){var b=H[a>>2];if(d){var e=
D[a+4+b],k=0;0!=e&&(k=e,D[a+4+b]=0);var h=a+4;for(e=0;e<=b;++e){var E=a+4+e;if(0==D[E]){if(h){for(var n=D,p=h+NaN,J=h;n[J]&&!(J>=p);)++J;if(16<J-h&&n.subarray&&fa)h=fa.decode(n.subarray(h,J));else{for(p="";h<J;){var q=n[h++];if(q&128){var ka=n[h++]&63;if(192==(q&224))p+=String.fromCharCode((q&31)<<6|ka);else{var Pa=n[h++]&63;q=224==(q&240)?(q&15)<<12|ka<<6|Pa:(q&7)<<18|ka<<12|Pa<<6|n[h++]&63;65536>q?p+=String.fromCharCode(q):(q-=65536,p+=String.fromCharCode(55296|q>>10,56320|q&1023))}}else p+=String.fromCharCode(q)}h=
p}}else h="";if(void 0===C)var C=h;else C+=String.fromCharCode(0),C+=h;h=E+1}}0!=k&&(D[a+4+b]=k)}else{C=Array(b);for(e=0;e<b;++e)C[e]=String.fromCharCode(D[a+4+e]);C=C.join("")}Y(a);return C},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var e="string"===typeof b;e||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||T("Cannot pass non-string to std::string");var f=(d&&e?function(){for(var a=0,d=0;d<b.length;++d){var e=b.charCodeAt(d);55296<=
e&&57343>=e&&(e=65536+((e&1023)<<10)|b.charCodeAt(++d)&1023);127>=e?++a:a=2047>=e?a+2:65535>=e?a+3:a+4}return a}:function(){return b.length})(),h=za(4+f+1);H[h>>2]=f;if(d&&e)ha(b,h+4,f+1);else if(e)for(e=0;e<f;++e){var E=b.charCodeAt(e);255<E&&(Y(h),T("String has UTF-16 code units that do not fit in 8 bits"));D[h+4+e]=E}else for(e=0;e<f;++e)D[h+4+e]=b[e];null!==a&&a.push(Y,h);return h},argPackAdvance:8,readValueFromPointer:W,R:function(a){Y(a)}})},p:function(a,b,d){d=Q(d);if(2===b){var e=function(){return ja};
var f=1}else 4===b&&(e=function(){return H},f=2);U(a,{name:d,fromWireType:function(a){for(var b=e(),d=H[a>>2],g=Array(d),n=a+4>>f,p=0;p<d;++p)g[p]=String.fromCharCode(b[n+p]);Y(a);return g.join("")},toWireType:function(a,d){var h=e(),g=d.length,n=za(4+g*b);H[n>>2]=g;for(var p=n+4>>f,k=0;k<g;++k)h[p+k]=d.charCodeAt(k);null!==a&&a.push(Y,n);return n},argPackAdvance:8,readValueFromPointer:W,R:function(a){Y(a)}})},q:function(a,b){b=Q(b);U(a,{Y:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},
r:Ka,s:Oa,t:X,u:function(){return F.length},v:function(a,b,d){D.set(D.subarray(b,b+d),a)},w:function(a){Sa(a)},x:Sa,y:La,z:Ea,A:Aa,B:Fa,C:Qa,D:P,E:Ma,F:Na,G:Ra,H:Da,I:Q,J:U,K:W,L:T,M:Ia,N:function(a,b,d){function e(b){b=d(b);b.length!==a.length&&Ia("Mismatched type converter count");for(var e=0;e<a.length;++e)U(a[e],b[e])}a.forEach(function(a){Ca[a]=b});var f=Array(b.length),g=[],k=0;b.forEach(function(a,b){S.hasOwnProperty(a)?f[b]=S[a]:(g.push(a),R.hasOwnProperty(a)||(R[a]=[]),R[a].push(function(){f[b]=
S[a];++k;k===g.length&&e(f)}))});0===g.length&&e(f)},O:2880,P:2864};// EMSCRIPTEN_START_ASM
var Z=(/** @suppress {uselessCode} */ function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer),b=new global.Int16Array(buffer),c=new global.Int32Array(buffer),d=new global.Uint8Array(buffer),e=new global.Uint16Array(buffer),f=env.O|0,g=env.P|0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0.0,p=env.a,q=env.b,r=env.c,s=env.d,t=env.e,u=env.f,v=env.g,w=env.h,x=env.i,y=env.j,z=env.k,A=env.l,B=env.m,C=env.n,D=env.o,E=env.p,F=env.q,G=env.r,H=env.s,I=env.t,J=env.u,K=env.v,L=env.w,M=env.x,N=env.y,O=env.z,P=env.A,Q=env.B,R=env.C,S=env.D,T=env.E,U=env.F,V=env.G,W=env.H,X=env.I,Y=env.J,Z=env.K,_=env.L,$=env.M,aa=env.N,ba=2896,ca=5245776,da=0.0;
// EMSCRIPTEN_START_FUNCS
function ja(a){a=a|0;var b=0;b=ba;ba=ba+a|0;ba=ba+15&-16;return b|0}function ka(){return ba|0}function la(a){a=a|0;ba=a}function ma(a,b){a=a|0;b=b|0;ba=a;ca=b}function na(a){a=a|0;return qa(c[a+4>>2]|0)|0}function oa(){F(264,2109);y(272,2114,1,1,0);B(280,2057,1,-128,127);B(296,2062,1,-128,127);B(288,2074,1,0,255);B(304,2088,2,-32768,32767);B(312,2094,2,0,65535);B(320,2119,4,-2147483648,2147483647);B(328,2123,4,0,-1);B(336,2136,4,-2147483648,2147483647);B(344,2141,4,0,-1);A(352,2155,4);A(360,2161,8);D(16,2045);D(40,532);E(64,4,565);z(88,578);C(96,0,594);C(104,0,624);C(112,1,661);C(120,2,700);C(128,3,731);C(136,4,771);C(144,5,800);C(152,4,838);C(160,5,868);C(104,0,907);C(112,1,939);C(120,2,972);C(128,3,1005);C(136,4,1039);C(144,5,1072);C(168,6,1106);C(176,7,1137);C(184,7,1169);return}function pa(b){b=b|0;var d=0,e=0,f=0;f=b;a:do if(!(f&3))e=5;else{d=f;while(1){if(!(a[b>>0]|0)){b=d;break a}b=b+1|0;d=b;if(!(d&3)){e=5;break}}}while(0);if((e|0)==5){while(1){d=c[b>>2]|0;if(!((d&-2139062144^-2139062144)&d+-16843009))b=b+4|0;else break}if((d&255)<<24>>24)do b=b+1|0;while((a[b>>0]|0)!=0)}return b-f|0}function qa(a){a=a|0;var b=0,c=0;b=(pa(a)|0)+1|0;c=ra(b)|0;if(!c)a=0;else a=Ua(c|0,a|0,b|0)|0;return a|0}function ra(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;t=ba;ba=ba+16|0;n=t;do if(a>>>0<245){k=a>>>0<11?16:a+11&-8;a=k>>>3;m=c[542]|0;d=m>>>a;if(d&3|0){b=(d&1^1)+a|0;a=2208+(b<<1<<2)|0;d=a+8|0;e=c[d>>2]|0;f=e+8|0;g=c[f>>2]|0;if((g|0)==(a|0))c[542]=m&~(1<<b);else{c[g+12>>2]=a;c[d>>2]=g}s=b<<3;c[e+4>>2]=s|3;s=e+s+4|0;c[s>>2]=c[s>>2]|1;s=f;ba=t;return s|0}l=c[544]|0;if(k>>>0>l>>>0){if(d|0){b=2<<a;b=d<<a&(b|0-b);b=(b&0-b)+-1|0;i=b>>>12&16;b=b>>>i;d=b>>>5&8;b=b>>>d;g=b>>>2&4;b=b>>>g;a=b>>>1&2;b=b>>>a;e=b>>>1&1;e=(d|i|g|a|e)+(b>>>e)|0;b=2208+(e<<1<<2)|0;a=b+8|0;g=c[a>>2]|0;i=g+8|0;d=c[i>>2]|0;if((d|0)==(b|0)){a=m&~(1<<e);c[542]=a}else{c[d+12>>2]=b;c[a>>2]=d;a=m}s=e<<3;h=s-k|0;c[g+4>>2]=k|3;f=g+k|0;c[f+4>>2]=h|1;c[g+s>>2]=h;if(l|0){e=c[547]|0;b=l>>>3;d=2208+(b<<1<<2)|0;b=1<<b;if(!(a&b)){c[542]=a|b;b=d;a=d+8|0}else{a=d+8|0;b=c[a>>2]|0}c[a>>2]=e;c[b+12>>2]=e;c[e+8>>2]=b;c[e+12>>2]=d}c[544]=h;c[547]=f;s=i;ba=t;return s|0}g=c[543]|0;if(g){d=(g&0-g)+-1|0;f=d>>>12&16;d=d>>>f;e=d>>>5&8;d=d>>>e;h=d>>>2&4;d=d>>>h;i=d>>>1&2;d=d>>>i;j=d>>>1&1;j=c[2472+((e|f|h|i|j)+(d>>>j)<<2)>>2]|0;d=j;i=j;j=(c[j+4>>2]&-8)-k|0;while(1){a=c[d+16>>2]|0;if(!a){a=c[d+20>>2]|0;if(!a)break}h=(c[a+4>>2]&-8)-k|0;f=h>>>0<j>>>0;d=a;i=f?a:i;j=f?h:j}h=i+k|0;if(h>>>0>i>>>0){f=c[i+24>>2]|0;b=c[i+12>>2]|0;do if((b|0)==(i|0)){a=i+20|0;b=c[a>>2]|0;if(!b){a=i+16|0;b=c[a>>2]|0;if(!b){d=0;break}}while(1){e=b+20|0;d=c[e>>2]|0;if(!d){e=b+16|0;d=c[e>>2]|0;if(!d)break;else{b=d;a=e}}else{b=d;a=e}}c[a>>2]=0;d=b}else{d=c[i+8>>2]|0;c[d+12>>2]=b;c[b+8>>2]=d;d=b}while(0);do if(f|0){b=c[i+28>>2]|0;a=2472+(b<<2)|0;if((i|0)==(c[a>>2]|0)){c[a>>2]=d;if(!d){c[543]=g&~(1<<b);break}}else{s=f+16|0;c[((c[s>>2]|0)==(i|0)?s:f+20|0)>>2]=d;if(!d)break}c[d+24>>2]=f;b=c[i+16>>2]|0;if(b|0){c[d+16>>2]=b;c[b+24>>2]=d}b=c[i+20>>2]|0;if(b|0){c[d+20>>2]=b;c[b+24>>2]=d}}while(0);if(j>>>0<16){s=j+k|0;c[i+4>>2]=s|3;s=i+s+4|0;c[s>>2]=c[s>>2]|1}else{c[i+4>>2]=k|3;c[h+4>>2]=j|1;c[h+j>>2]=j;if(l|0){e=c[547]|0;b=l>>>3;d=2208+(b<<1<<2)|0;b=1<<b;if(!(b&m)){c[542]=b|m;b=d;a=d+8|0}else{a=d+8|0;b=c[a>>2]|0}c[a>>2]=e;c[b+12>>2]=e;c[e+8>>2]=b;c[e+12>>2]=d}c[544]=j;c[547]=h}s=i+8|0;ba=t;return s|0}else m=k}else m=k}else m=k}else if(a>>>0<=4294967231){a=a+11|0;k=a&-8;e=c[543]|0;if(e){f=0-k|0;a=a>>>8;if(a)if(k>>>0>16777215)j=31;else{m=(a+1048320|0)>>>16&8;r=a<<m;i=(r+520192|0)>>>16&4;r=r<<i;j=(r+245760|0)>>>16&2;j=14-(i|m|j)+(r<<j>>>15)|0;j=k>>>(j+7|0)&1|j<<1}else j=0;d=c[2472+(j<<2)>>2]|0;a:do if(!d){d=0;a=0;r=61}else{a=0;i=k<<((j|0)==31?0:25-(j>>>1)|0);g=0;while(1){h=(c[d+4>>2]&-8)-k|0;if(h>>>0<f>>>0)if(!h){a=d;f=0;r=65;break a}else{a=d;f=h}r=c[d+20>>2]|0;d=c[d+16+(i>>>31<<2)>>2]|0;g=(r|0)==0|(r|0)==(d|0)?g:r;if(!d){d=g;r=61;break}else i=i<<1}}while(0);if((r|0)==61){if((d|0)==0&(a|0)==0){a=2<<j;a=(a|0-a)&e;if(!a){m=k;break}m=(a&0-a)+-1|0;h=m>>>12&16;m=m>>>h;g=m>>>5&8;m=m>>>g;i=m>>>2&4;m=m>>>i;j=m>>>1&2;m=m>>>j;d=m>>>1&1;a=0;d=c[2472+((g|h|i|j|d)+(m>>>d)<<2)>>2]|0}if(!d){i=a;h=f}else r=65}if((r|0)==65){g=d;while(1){m=(c[g+4>>2]&-8)-k|0;d=m>>>0<f>>>0;f=d?m:f;a=d?g:a;d=c[g+16>>2]|0;if(!d)d=c[g+20>>2]|0;if(!d){i=a;h=f;break}else g=d}}if(((i|0)!=0?h>>>0<((c[544]|0)-k|0)>>>0:0)?(l=i+k|0,l>>>0>i>>>0):0){g=c[i+24>>2]|0;b=c[i+12>>2]|0;do if((b|0)==(i|0)){a=i+20|0;b=c[a>>2]|0;if(!b){a=i+16|0;b=c[a>>2]|0;if(!b){b=0;break}}while(1){f=b+20|0;d=c[f>>2]|0;if(!d){f=b+16|0;d=c[f>>2]|0;if(!d)break;else{b=d;a=f}}else{b=d;a=f}}c[a>>2]=0}else{s=c[i+8>>2]|0;c[s+12>>2]=b;c[b+8>>2]=s}while(0);do if(g){a=c[i+28>>2]|0;d=2472+(a<<2)|0;if((i|0)==(c[d>>2]|0)){c[d>>2]=b;if(!b){e=e&~(1<<a);c[543]=e;break}}else{s=g+16|0;c[((c[s>>2]|0)==(i|0)?s:g+20|0)>>2]=b;if(!b)break}c[b+24>>2]=g;a=c[i+16>>2]|0;if(a|0){c[b+16>>2]=a;c[a+24>>2]=b}a=c[i+20>>2]|0;if(a){c[b+20>>2]=a;c[a+24>>2]=b}}while(0);b:do if(h>>>0<16){s=h+k|0;c[i+4>>2]=s|3;s=i+s+4|0;c[s>>2]=c[s>>2]|1}else{c[i+4>>2]=k|3;c[l+4>>2]=h|1;c[l+h>>2]=h;b=h>>>3;if(h>>>0<256){d=2208+(b<<1<<2)|0;a=c[542]|0;b=1<<b;if(!(a&b)){c[542]=a|b;b=d;a=d+8|0}else{a=d+8|0;b=c[a>>2]|0}c[a>>2]=l;c[b+12>>2]=l;c[l+8>>2]=b;c[l+12>>2]=d;break}b=h>>>8;if(b)if(h>>>0>16777215)d=31;else{r=(b+1048320|0)>>>16&8;s=b<<r;q=(s+520192|0)>>>16&4;s=s<<q;d=(s+245760|0)>>>16&2;d=14-(q|r|d)+(s<<d>>>15)|0;d=h>>>(d+7|0)&1|d<<1}else d=0;b=2472+(d<<2)|0;c[l+28>>2]=d;a=l+16|0;c[a+4>>2]=0;c[a>>2]=0;a=1<<d;if(!(a&e)){c[543]=a|e;c[b>>2]=l;c[l+24>>2]=b;c[l+12>>2]=l;c[l+8>>2]=l;break}b=c[b>>2]|0;c:do if((c[b+4>>2]&-8|0)!=(h|0)){e=h<<((d|0)==31?0:25-(d>>>1)|0);while(1){d=b+16+(e>>>31<<2)|0;a=c[d>>2]|0;if(!a)break;if((c[a+4>>2]&-8|0)==(h|0)){b=a;break c}else{e=e<<1;b=a}}c[d>>2]=l;c[l+24>>2]=b;c[l+12>>2]=l;c[l+8>>2]=l;break b}while(0);r=b+8|0;s=c[r>>2]|0;c[s+12>>2]=l;c[r>>2]=l;c[l+8>>2]=s;c[l+12>>2]=b;c[l+24>>2]=0}while(0);s=i+8|0;ba=t;return s|0}else m=k}else m=k}else m=-1;while(0);d=c[544]|0;if(d>>>0>=m>>>0){b=d-m|0;a=c[547]|0;if(b>>>0>15){s=a+m|0;c[547]=s;c[544]=b;c[s+4>>2]=b|1;c[a+d>>2]=b;c[a+4>>2]=m|3}else{c[544]=0;c[547]=0;c[a+4>>2]=d|3;s=a+d+4|0;c[s>>2]=c[s>>2]|1}s=a+8|0;ba=t;return s|0}h=c[545]|0;if(h>>>0>m>>>0){q=h-m|0;c[545]=q;s=c[548]|0;r=s+m|0;c[548]=r;c[r+4>>2]=q|1;c[s+4>>2]=m|3;s=s+8|0;ba=t;return s|0}if(!(c[660]|0)){c[662]=4096;c[661]=4096;c[663]=-1;c[664]=-1;c[665]=0;c[653]=0;c[660]=n&-16^1431655768;a=4096}else a=c[662]|0;i=m+48|0;j=m+47|0;g=a+j|0;f=0-a|0;k=g&f;if(k>>>0<=m>>>0){s=0;ba=t;return s|0}a=c[652]|0;if(a|0?(l=c[650]|0,n=l+k|0,n>>>0<=l>>>0|n>>>0>a>>>0):0){s=0;ba=t;return s|0}d:do if(!(c[653]&4)){e=c[548]|0;e:do if(e){a=2616;while(1){d=c[a>>2]|0;if(d>>>0<=e>>>0?(q=a+4|0,(d+(c[q>>2]|0)|0)>>>0>e>>>0):0)break;a=c[a+8>>2]|0;if(!a){r=128;break e}}b=g-h&f;if(b>>>0<2147483647){e=Wa(b|0)|0;if((e|0)==((c[a>>2]|0)+(c[q>>2]|0)|0)){if((e|0)!=(-1|0))break d}else r=136}else b=0}else r=128;while(0);do if((r|0)==128){a=Wa(0)|0;if((a|0)!=(-1|0)?(b=a,o=c[661]|0,p=o+-1|0,b=((p&b|0)==0?0:(p+b&0-o)-b|0)+k|0,o=c[650]|0,p=b+o|0,b>>>0>m>>>0&b>>>0<2147483647):0){q=c[652]|0;if(q|0?p>>>0<=o>>>0|p>>>0>q>>>0:0){b=0;break}e=Wa(b|0)|0;if((e|0)==(a|0)){e=a;break d}else r=136}else b=0}while(0);do if((r|0)==136){d=0-b|0;if(!(i>>>0>b>>>0&(b>>>0<2147483647&(e|0)!=(-1|0))))if((e|0)==(-1|0)){b=0;break}else break d;a=c[662]|0;a=j-b+a&0-a;if(a>>>0>=2147483647)break d;if((Wa(a|0)|0)==(-1|0)){Wa(d|0)|0;b=0;break}else{b=a+b|0;break d}}while(0);c[653]=c[653]|4;r=143}else{b=0;r=143}while(0);if((r|0)==143){if(k>>>0>=2147483647){s=0;ba=t;return s|0}e=Wa(k|0)|0;q=Wa(0)|0;a=q-e|0;d=a>>>0>(m+40|0)>>>0;if((e|0)==(-1|0)|d^1|e>>>0<q>>>0&((e|0)!=(-1|0)&(q|0)!=(-1|0))^1){s=0;ba=t;return s|0}else b=d?a:b}a=(c[650]|0)+b|0;c[650]=a;if(a>>>0>(c[651]|0)>>>0)c[651]=a;j=c[548]|0;f:do if(j){a=2616;while(1){d=c[a>>2]|0;f=a+4|0;g=c[f>>2]|0;if((e|0)==(d+g|0)){r=154;break}h=c[a+8>>2]|0;if(!h)break;else a=h}if(((r|0)==154?(c[a+12>>2]&8|0)==0:0)?e>>>0>j>>>0&d>>>0<=j>>>0:0){c[f>>2]=g+b;s=(c[545]|0)+b|0;q=j+8|0;q=(q&7|0)==0?0:0-q&7;r=j+q|0;q=s-q|0;c[548]=r;c[545]=q;c[r+4>>2]=q|1;c[j+s+4>>2]=40;c[549]=c[664];break}if(e>>>0<(c[546]|0)>>>0)c[546]=e;f=e+b|0;a=2616;while(1){if((c[a>>2]|0)==(f|0)){r=162;break}d=c[a+8>>2]|0;if(!d)break;else a=d}if((r|0)==162?(c[a+12>>2]&8|0)==0:0){c[a>>2]=e;l=a+4|0;c[l>>2]=(c[l>>2]|0)+b;l=e+8|0;l=e+((l&7|0)==0?0:0-l&7)|0;b=f+8|0;b=f+((b&7|0)==0?0:0-b&7)|0;k=l+m|0;i=b-l-m|0;c[l+4>>2]=m|3;g:do if((j|0)==(b|0)){s=(c[545]|0)+i|0;c[545]=s;c[548]=k;c[k+4>>2]=s|1}else{if((c[547]|0)==(b|0)){s=(c[544]|0)+i|0;c[544]=s;c[547]=k;c[k+4>>2]=s|1;c[k+s>>2]=s;break}a=c[b+4>>2]|0;if((a&3|0)==1){h=a&-8;e=a>>>3;h:do if(a>>>0<256){a=c[b+8>>2]|0;d=c[b+12>>2]|0;if((d|0)==(a|0)){c[542]=c[542]&~(1<<e);break}else{c[a+12>>2]=d;c[d+8>>2]=a;break}}else{g=c[b+24>>2]|0;a=c[b+12>>2]|0;do if((a|0)==(b|0)){d=b+16|0;e=d+4|0;a=c[e>>2]|0;if(!a){a=c[d>>2]|0;if(!a){a=0;break}}else d=e;while(1){f=a+20|0;e=c[f>>2]|0;if(!e){f=a+16|0;e=c[f>>2]|0;if(!e)break;else{a=e;d=f}}else{a=e;d=f}}c[d>>2]=0}else{s=c[b+8>>2]|0;c[s+12>>2]=a;c[a+8>>2]=s}while(0);if(!g)break;d=c[b+28>>2]|0;e=2472+(d<<2)|0;do if((c[e>>2]|0)!=(b|0)){s=g+16|0;c[((c[s>>2]|0)==(b|0)?s:g+20|0)>>2]=a;if(!a)break h}else{c[e>>2]=a;if(a|0)break;c[543]=c[543]&~(1<<d);break h}while(0);c[a+24>>2]=g;d=b+16|0;e=c[d>>2]|0;if(e|0){c[a+16>>2]=e;c[e+24>>2]=a}d=c[d+4>>2]|0;if(!d)break;c[a+20>>2]=d;c[d+24>>2]=a}while(0);b=b+h|0;f=h+i|0}else f=i;b=b+4|0;c[b>>2]=c[b>>2]&-2;c[k+4>>2]=f|1;c[k+f>>2]=f;b=f>>>3;if(f>>>0<256){d=2208+(b<<1<<2)|0;a=c[542]|0;b=1<<b;if(!(a&b)){c[542]=a|b;b=d;a=d+8|0}else{a=d+8|0;b=c[a>>2]|0}c[a>>2]=k;c[b+12>>2]=k;c[k+8>>2]=b;c[k+12>>2]=d;break}b=f>>>8;do if(!b)e=0;else{if(f>>>0>16777215){e=31;break}r=(b+1048320|0)>>>16&8;s=b<<r;q=(s+520192|0)>>>16&4;s=s<<q;e=(s+245760|0)>>>16&2;e=14-(q|r|e)+(s<<e>>>15)|0;e=f>>>(e+7|0)&1|e<<1}while(0);b=2472+(e<<2)|0;c[k+28>>2]=e;a=k+16|0;c[a+4>>2]=0;c[a>>2]=0;a=c[543]|0;d=1<<e;if(!(a&d)){c[543]=a|d;c[b>>2]=k;c[k+24>>2]=b;c[k+12>>2]=k;c[k+8>>2]=k;break}b=c[b>>2]|0;i:do if((c[b+4>>2]&-8|0)!=(f|0)){e=f<<((e|0)==31?0:25-(e>>>1)|0);while(1){d=b+16+(e>>>31<<2)|0;a=c[d>>2]|0;if(!a)break;if((c[a+4>>2]&-8|0)==(f|0)){b=a;break i}else{e=e<<1;b=a}}c[d>>2]=k;c[k+24>>2]=b;c[k+12>>2]=k;c[k+8>>2]=k;break g}while(0);r=b+8|0;s=c[r>>2]|0;c[s+12>>2]=k;c[r>>2]=k;c[k+8>>2]=s;c[k+12>>2]=b;c[k+24>>2]=0}while(0);s=l+8|0;ba=t;return s|0}a=2616;while(1){d=c[a>>2]|0;if(d>>>0<=j>>>0?(s=d+(c[a+4>>2]|0)|0,s>>>0>j>>>0):0)break;a=c[a+8>>2]|0}f=s+-47|0;a=f+8|0;a=f+((a&7|0)==0?0:0-a&7)|0;f=j+16|0;a=a>>>0<f>>>0?j:a;r=a+8|0;d=b+-40|0;p=e+8|0;p=(p&7|0)==0?0:0-p&7;q=e+p|0;p=d-p|0;c[548]=q;c[545]=p;c[q+4>>2]=p|1;c[e+d+4>>2]=40;c[549]=c[664];d=a+4|0;c[d>>2]=27;c[r>>2]=c[654];c[r+4>>2]=c[655];c[r+8>>2]=c[656];c[r+12>>2]=c[657];c[654]=e;c[655]=b;c[657]=0;c[656]=r;b=a+24|0;do{r=b;b=b+4|0;c[b>>2]=7}while((r+8|0)>>>0<s>>>0);if((a|0)!=(j|0)){g=a-j|0;c[d>>2]=c[d>>2]&-2;c[j+4>>2]=g|1;c[a>>2]=g;b=g>>>3;if(g>>>0<256){d=2208+(b<<1<<2)|0;a=c[542]|0;b=1<<b;if(!(a&b)){c[542]=a|b;b=d;a=d+8|0}else{a=d+8|0;b=c[a>>2]|0}c[a>>2]=j;c[b+12>>2]=j;c[j+8>>2]=b;c[j+12>>2]=d;break}b=g>>>8;if(b)if(g>>>0>16777215)e=31;else{r=(b+1048320|0)>>>16&8;s=b<<r;q=(s+520192|0)>>>16&4;s=s<<q;e=(s+245760|0)>>>16&2;e=14-(q|r|e)+(s<<e>>>15)|0;e=g>>>(e+7|0)&1|e<<1}else e=0;d=2472+(e<<2)|0;c[j+28>>2]=e;c[j+20>>2]=0;c[f>>2]=0;b=c[543]|0;a=1<<e;if(!(b&a)){c[543]=b|a;c[d>>2]=j;c[j+24>>2]=d;c[j+12>>2]=j;c[j+8>>2]=j;break}b=c[d>>2]|0;j:do if((c[b+4>>2]&-8|0)!=(g|0)){e=g<<((e|0)==31?0:25-(e>>>1)|0);while(1){d=b+16+(e>>>31<<2)|0;a=c[d>>2]|0;if(!a)break;if((c[a+4>>2]&-8|0)==(g|0)){b=a;break j}else{e=e<<1;b=a}}c[d>>2]=j;c[j+24>>2]=b;c[j+12>>2]=j;c[j+8>>2]=j;break f}while(0);r=b+8|0;s=c[r>>2]|0;c[s+12>>2]=j;c[r>>2]=j;c[j+8>>2]=s;c[j+12>>2]=b;c[j+24>>2]=0}}else{s=c[546]|0;if((s|0)==0|e>>>0<s>>>0)c[546]=e;c[654]=e;c[655]=b;c[657]=0;c[551]=c[660];c[550]=-1;c[555]=2208;c[554]=2208;c[557]=2216;c[556]=2216;c[559]=2224;c[558]=2224;c[561]=2232;c[560]=2232;c[563]=2240;c[562]=2240;c[565]=2248;c[564]=2248;c[567]=2256;c[566]=2256;c[569]=2264;c[568]=2264;c[571]=2272;c[570]=2272;c[573]=2280;c[572]=2280;c[575]=2288;c[574]=2288;c[577]=2296;c[576]=2296;c[579]=2304;c[578]=2304;c[581]=2312;c[580]=2312;c[583]=2320;c[582]=2320;c[585]=2328;c[584]=2328;c[587]=2336;c[586]=2336;c[589]=2344;c[588]=2344;c[591]=2352;c[590]=2352;c[593]=2360;c[592]=2360;c[595]=2368;c[594]=2368;c[597]=2376;c[596]=2376;c[599]=2384;c[598]=2384;c[601]=2392;c[600]=2392;c[603]=2400;c[602]=2400;c[605]=2408;c[604]=2408;c[607]=2416;c[606]=2416;c[609]=2424;c[608]=2424;c[611]=2432;c[610]=2432;c[613]=2440;c[612]=2440;c[615]=2448;c[614]=2448;c[617]=2456;c[616]=2456;s=b+-40|0;q=e+8|0;q=(q&7|0)==0?0:0-q&7;r=e+q|0;q=s-q|0;c[548]=r;c[545]=q;c[r+4>>2]=q|1;c[e+s+4>>2]=40;c[549]=c[664]}while(0);b=c[545]|0;if(b>>>0<=m>>>0){s=0;ba=t;return s|0}q=b-m|0;c[545]=q;s=c[548]|0;r=s+m|0;c[548]=r;c[r+4>>2]=q|1;c[s+4>>2]=m|3;s=s+8|0;ba=t;return s|0}function sa(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;if(!a)return;d=a+-8|0;f=c[546]|0;a=c[a+-4>>2]|0;b=a&-8;j=d+b|0;do if(!(a&1)){e=c[d>>2]|0;if(!(a&3))return;h=d+(0-e)|0;g=e+b|0;if(h>>>0<f>>>0)return;if((c[547]|0)==(h|0)){a=j+4|0;b=c[a>>2]|0;if((b&3|0)!=3){i=h;b=g;break}c[544]=g;c[a>>2]=b&-2;c[h+4>>2]=g|1;c[h+g>>2]=g;return}d=e>>>3;if(e>>>0<256){a=c[h+8>>2]|0;b=c[h+12>>2]|0;if((b|0)==(a|0)){c[542]=c[542]&~(1<<d);i=h;b=g;break}else{c[a+12>>2]=b;c[b+8>>2]=a;i=h;b=g;break}}f=c[h+24>>2]|0;a=c[h+12>>2]|0;do if((a|0)==(h|0)){b=h+16|0;d=b+4|0;a=c[d>>2]|0;if(!a){a=c[b>>2]|0;if(!a){a=0;break}}else b=d;while(1){e=a+20|0;d=c[e>>2]|0;if(!d){e=a+16|0;d=c[e>>2]|0;if(!d)break;else{a=d;b=e}}else{a=d;b=e}}c[b>>2]=0}else{i=c[h+8>>2]|0;c[i+12>>2]=a;c[a+8>>2]=i}while(0);if(f){b=c[h+28>>2]|0;d=2472+(b<<2)|0;if((c[d>>2]|0)==(h|0)){c[d>>2]=a;if(!a){c[543]=c[543]&~(1<<b);i=h;b=g;break}}else{i=f+16|0;c[((c[i>>2]|0)==(h|0)?i:f+20|0)>>2]=a;if(!a){i=h;b=g;break}}c[a+24>>2]=f;b=h+16|0;d=c[b>>2]|0;if(d|0){c[a+16>>2]=d;c[d+24>>2]=a}b=c[b+4>>2]|0;if(b){c[a+20>>2]=b;c[b+24>>2]=a;i=h;b=g}else{i=h;b=g}}else{i=h;b=g}}else{i=d;h=d}while(0);if(h>>>0>=j>>>0)return;a=j+4|0;e=c[a>>2]|0;if(!(e&1))return;if(!(e&2)){if((c[548]|0)==(j|0)){j=(c[545]|0)+b|0;c[545]=j;c[548]=i;c[i+4>>2]=j|1;if((i|0)!=(c[547]|0))return;c[547]=0;c[544]=0;return}if((c[547]|0)==(j|0)){j=(c[544]|0)+b|0;c[544]=j;c[547]=h;c[i+4>>2]=j|1;c[h+j>>2]=j;return}f=(e&-8)+b|0;d=e>>>3;do if(e>>>0<256){b=c[j+8>>2]|0;a=c[j+12>>2]|0;if((a|0)==(b|0)){c[542]=c[542]&~(1<<d);break}else{c[b+12>>2]=a;c[a+8>>2]=b;break}}else{g=c[j+24>>2]|0;a=c[j+12>>2]|0;do if((a|0)==(j|0)){b=j+16|0;d=b+4|0;a=c[d>>2]|0;if(!a){a=c[b>>2]|0;if(!a){d=0;break}}else b=d;while(1){e=a+20|0;d=c[e>>2]|0;if(!d){e=a+16|0;d=c[e>>2]|0;if(!d)break;else{a=d;b=e}}else{a=d;b=e}}c[b>>2]=0;d=a}else{d=c[j+8>>2]|0;c[d+12>>2]=a;c[a+8>>2]=d;d=a}while(0);if(g|0){a=c[j+28>>2]|0;b=2472+(a<<2)|0;if((c[b>>2]|0)==(j|0)){c[b>>2]=d;if(!d){c[543]=c[543]&~(1<<a);break}}else{e=g+16|0;c[((c[e>>2]|0)==(j|0)?e:g+20|0)>>2]=d;if(!d)break}c[d+24>>2]=g;a=j+16|0;b=c[a>>2]|0;if(b|0){c[d+16>>2]=b;c[b+24>>2]=d}a=c[a+4>>2]|0;if(a|0){c[d+20>>2]=a;c[a+24>>2]=d}}}while(0);c[i+4>>2]=f|1;c[h+f>>2]=f;if((i|0)==(c[547]|0)){c[544]=f;return}}else{c[a>>2]=e&-2;c[i+4>>2]=b|1;c[h+b>>2]=b;f=b}a=f>>>3;if(f>>>0<256){d=2208+(a<<1<<2)|0;b=c[542]|0;a=1<<a;if(!(b&a)){c[542]=b|a;a=d;b=d+8|0}else{b=d+8|0;a=c[b>>2]|0}c[b>>2]=i;c[a+12>>2]=i;c[i+8>>2]=a;c[i+12>>2]=d;return}a=f>>>8;if(a)if(f>>>0>16777215)e=31;else{h=(a+1048320|0)>>>16&8;j=a<<h;g=(j+520192|0)>>>16&4;j=j<<g;e=(j+245760|0)>>>16&2;e=14-(g|h|e)+(j<<e>>>15)|0;e=f>>>(e+7|0)&1|e<<1}else e=0;a=2472+(e<<2)|0;c[i+28>>2]=e;c[i+20>>2]=0;c[i+16>>2]=0;b=c[543]|0;d=1<<e;a:do if(!(b&d)){c[543]=b|d;c[a>>2]=i;c[i+24>>2]=a;c[i+12>>2]=i;c[i+8>>2]=i}else{a=c[a>>2]|0;b:do if((c[a+4>>2]&-8|0)!=(f|0)){e=f<<((e|0)==31?0:25-(e>>>1)|0);while(1){d=a+16+(e>>>31<<2)|0;b=c[d>>2]|0;if(!b)break;if((c[b+4>>2]&-8|0)==(f|0)){a=b;break b}else{e=e<<1;a=b}}c[d>>2]=i;c[i+24>>2]=a;c[i+12>>2]=i;c[i+8>>2]=i;break a}while(0);h=a+8|0;j=c[h>>2]|0;c[j+12>>2]=i;c[h>>2]=i;c[i+8>>2]=j;c[i+12>>2]=a;c[i+24>>2]=0}while(0);j=(c[550]|0)+-1|0;c[550]=j;if(j|0)return;a=2624;while(1){a=c[a>>2]|0;if(!a)break;else a=a+8|0}c[550]=-1;return}function ta(a){a=a|0;return}function ua(a){a=a|0;Ka(a);return}function va(a){a=a|0;return}function wa(a){a=a|0;return}function xa(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;h=ba;ba=ba+64|0;f=h;if(!(Ba(a,b)|0))if((b|0)!=0?(g=Fa(b)|0,(g|0)!=0):0){b=f+4|0;e=b+52|0;do{c[b>>2]=0;b=b+4|0}while((b|0)<(e|0));c[f>>2]=g;c[f+8>>2]=a;c[f+12>>2]=-1;c[f+48>>2]=1;ga[c[(c[g>>2]|0)+28>>2]&3](g,f,c[d>>2]|0,1);if((c[f+24>>2]|0)==1){c[d>>2]=c[f+16>>2];b=1}else b=0}else b=0;else b=1;ba=h;return b|0}function ya(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;if(Ba(a,c[b+8>>2]|0)|0)Ea(b,d,e,f);return}function za(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0;do if(!(Ba(b,c[d+8>>2]|0)|0)){if(Ba(b,c[d>>2]|0)|0){if((c[d+16>>2]|0)!=(e|0)?(h=d+20|0,(c[h>>2]|0)!=(e|0)):0){c[d+32>>2]=f;c[h>>2]=e;g=d+40|0;c[g>>2]=(c[g>>2]|0)+1;if((c[d+36>>2]|0)==1?(c[d+24>>2]|0)==2:0)a[d+54>>0]=1;c[d+44>>2]=4;break}if((f|0)==1)c[d+32>>2]=1}}else Da(d,e,f);while(0);return}function Aa(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if(Ba(a,c[b+8>>2]|0)|0)Ca(b,d,e);return}function Ba(a,b){a=a|0;b=b|0;return (a|0)==(b|0)|0}function Ca(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0;f=b+16|0;g=c[f>>2]|0;do if(g){if((g|0)!=(d|0)){e=b+36|0;c[e>>2]=(c[e>>2]|0)+1;c[b+24>>2]=2;a[b+54>>0]=1;break}b=b+24|0;if((c[b>>2]|0)==2)c[b>>2]=e}else{c[f>>2]=d;c[b+24>>2]=e;c[b+36>>2]=1}while(0);return}function Da(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;if((c[a+4>>2]|0)==(b|0)?(e=a+28|0,(c[e>>2]|0)!=1):0)c[e>>2]=d;return}function Ea(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0;a[b+53>>0]=1;do if((c[b+4>>2]|0)==(e|0)){a[b+52>>0]=1;g=b+16|0;e=c[g>>2]|0;if(!e){c[g>>2]=d;c[b+24>>2]=f;c[b+36>>2]=1;if(!((f|0)==1?(c[b+48>>2]|0)==1:0))break;a[b+54>>0]=1;break}if((e|0)!=(d|0)){f=b+36|0;c[f>>2]=(c[f>>2]|0)+1;a[b+54>>0]=1;break}g=b+24|0;e=c[g>>2]|0;if((e|0)==2){c[g>>2]=f;e=f}if((e|0)==1?(c[b+48>>2]|0)==1:0)a[b+54>>0]=1}while(0);return}function Fa(d){d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;q=ba;ba=ba+64|0;n=q;p=c[d>>2]|0;o=d+(c[p+-8>>2]|0)|0;p=c[p+-4>>2]|0;c[n>>2]=192;c[n+4>>2]=d;c[n+8>>2]=208;d=n+12|0;e=n+16|0;f=n+20|0;g=n+24|0;h=n+28|0;i=n+32|0;j=n+40|0;k=Ba(p,192)|0;l=d;m=l+40|0;do{c[l>>2]=0;l=l+4|0}while((l|0)<(m|0));b[d+40>>1]=0;a[d+42>>0]=0;a:do if(k){c[n+48>>2]=1;ia[c[(c[p>>2]|0)+20>>2]&3](p,n,o,o,1,0);d=(c[g>>2]|0)==1?o:0}else{ha[c[(c[p>>2]|0)+24>>2]&3](p,n,o,1,0);switch(c[n+36>>2]|0){case 0:{d=(c[j>>2]|0)==1&(c[h>>2]|0)==1&(c[i>>2]|0)==1?c[f>>2]|0:0;break a}case 1:break;default:{d=0;break a}}if((c[g>>2]|0)!=1?!((c[j>>2]|0)==0&(c[h>>2]|0)==1&(c[i>>2]|0)==1):0){d=0;break}d=c[e>>2]|0}while(0);ba=q;return d|0}function Ga(a){a=a|0;Ka(a);return}function Ha(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;if(Ba(a,c[b+8>>2]|0)|0)Ea(b,d,e,f);else{a=c[a+8>>2]|0;ia[c[(c[a>>2]|0)+20>>2]&3](a,b,d,e,f,g)}return}function Ia(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0;do if(!(Ba(b,c[d+8>>2]|0)|0)){if(!(Ba(b,c[d>>2]|0)|0)){i=c[b+8>>2]|0;ha[c[(c[i>>2]|0)+24>>2]&3](i,d,e,f,g);break}if((c[d+16>>2]|0)!=(e|0)?(h=d+20|0,(c[h>>2]|0)!=(e|0)):0){c[d+32>>2]=f;i=d+44|0;if((c[i>>2]|0)==4)break;f=d+52|0;a[f>>0]=0;j=d+53|0;a[j>>0]=0;b=c[b+8>>2]|0;ia[c[(c[b>>2]|0)+20>>2]&3](b,d,e,e,1,g);if(a[j>>0]|0)if(!(a[f>>0]|0)){f=1;b=11}else b=15;else{f=0;b=11}do if((b|0)==11){c[h>>2]=e;j=d+40|0;c[j>>2]=(c[j>>2]|0)+1;if((c[d+36>>2]|0)==1?(c[d+24>>2]|0)==2:0){a[d+54>>0]=1;if(f){b=15;break}else{f=4;break}}if(f)b=15;else f=4}while(0);if((b|0)==15)f=3;c[i>>2]=f;break}if((f|0)==1)c[d+32>>2]=1}else Da(d,e,f);while(0);return}function Ja(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;if(Ba(a,c[b+8>>2]|0)|0)Ca(b,d,e);else{a=c[a+8>>2]|0;ga[c[(c[a>>2]|0)+28>>2]&3](a,b,d,e)}return}function Ka(a){a=a|0;sa(a);return}function La(a){a=a|0;Ka(a);return}function Ma(a,b,c){a=a|0;b=b|0;c=c|0;return Ba(a,b)|0}function Na(a){a=a|0;Ka(a);return}function Oa(b,d,e,f,g,h){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;if(Ba(b,c[d+8>>2]|0)|0)Ea(d,e,f,g);else{p=d+52|0;i=a[p>>0]|0;j=d+53|0;k=a[j>>0]|0;o=c[b+12>>2]|0;l=b+16+(o<<3)|0;a[p>>0]=0;a[j>>0]=0;Sa(b+16|0,d,e,f,g,h);a:do if((o|0)>1){m=d+24|0;n=b+8|0;o=d+54|0;b=b+24|0;do{if(a[o>>0]|0)break a;if(!(a[p>>0]|0)){if(a[j>>0]|0?(c[n>>2]&1|0)==0:0)break a}else{if((c[m>>2]|0)==1)break a;if(!(c[n>>2]&2))break a}a[p>>0]=0;a[j>>0]=0;Sa(b,d,e,f,g,h);b=b+8|0}while(b>>>0<l>>>0)}while(0);a[p>>0]=i;a[j>>0]=k}return}function Pa(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;a:do if(!(Ba(b,c[d+8>>2]|0)|0)){if(!(Ba(b,c[d>>2]|0)|0)){p=c[b+12>>2]|0;k=b+16+(p<<3)|0;Ta(b+16|0,d,e,f,g);h=b+24|0;if((p|0)<=1)break;b=c[b+8>>2]|0;if((b&2|0)==0?(j=d+36|0,(c[j>>2]|0)!=1):0){if(!(b&1)){b=d+54|0;while(1){if(a[b>>0]|0)break a;if((c[j>>2]|0)==1)break a;Ta(h,d,e,f,g);h=h+8|0;if(h>>>0>=k>>>0)break a}}b=d+24|0;i=d+54|0;while(1){if(a[i>>0]|0)break a;if((c[j>>2]|0)==1?(c[b>>2]|0)==1:0)break a;Ta(h,d,e,f,g);h=h+8|0;if(h>>>0>=k>>>0)break a}}b=d+54|0;while(1){if(a[b>>0]|0)break a;Ta(h,d,e,f,g);h=h+8|0;if(h>>>0>=k>>>0)break a}}if((c[d+16>>2]|0)!=(e|0)?(o=d+20|0,(c[o>>2]|0)!=(e|0)):0){c[d+32>>2]=f;p=d+44|0;if((c[p>>2]|0)==4)break;i=c[b+12>>2]|0;j=b+16+(i<<3)|0;k=d+52|0;f=d+53|0;m=d+54|0;l=b+8|0;n=d+24|0;b:do if((i|0)>0){h=0;i=b+16|0;b=0;c:do{a[k>>0]=0;a[f>>0]=0;Sa(i,d,e,e,1,g);if(a[m>>0]|0)break;do if(a[f>>0]|0){if(!(a[k>>0]|0))if(!(c[l>>2]&1)){h=1;break c}else{h=1;break}if((c[n>>2]|0)==1){b=23;break b}if(!(c[l>>2]&2)){b=23;break b}else{h=1;b=1}}while(0);i=i+8|0}while(i>>>0<j>>>0);if(b)b=22;else b=19}else{h=0;b=19}while(0);if((b|0)==19){c[o>>2]=e;e=d+40|0;c[e>>2]=(c[e>>2]|0)+1;if((c[d+36>>2]|0)==1?(c[n>>2]|0)==2:0){a[m>>0]=1;if(h)b=23;else h=4}else b=22}if((b|0)==22)if(h)b=23;else h=4;if((b|0)==23)h=3;c[p>>2]=h;break}if((f|0)==1)c[d+32>>2]=1}else Da(d,e,f);while(0);return}function Qa(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;a:do if(!(Ba(b,c[d+8>>2]|0)|0)){h=c[b+12>>2]|0;g=b+16+(h<<3)|0;Ra(b+16|0,d,e,f);if((h|0)>1){h=d+54|0;b=b+24|0;do{Ra(b,d,e,f);if(a[h>>0]|0)break a;b=b+8|0}while(b>>>0<g>>>0)}}else Ca(d,e,f);while(0);return}function Ra(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;g=c[a+4>>2]|0;f=g>>8;if(g&1)f=c[(c[d>>2]|0)+f>>2]|0;a=c[a>>2]|0;ga[c[(c[a>>2]|0)+28>>2]&3](a,b,d+f|0,(g&2|0)==0?2:e);return}function Sa(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,i=0;i=c[a+4>>2]|0;h=i>>8;if(i&1)h=c[(c[e>>2]|0)+h>>2]|0;a=c[a>>2]|0;ia[c[(c[a>>2]|0)+20>>2]&3](a,b,d,e+h|0,(i&2|0)==0?2:f,g);return}function Ta(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;h=c[a+4>>2]|0;g=h>>8;if(h&1)g=c[(c[d>>2]|0)+g>>2]|0;a=c[a>>2]|0;ha[c[(c[a>>2]|0)+24>>2]&3](a,b,d+g|0,(h&2|0)==0?2:e,f);return}function Ua(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;if((e|0)>=8192){K(b|0,d|0,e|0)|0;return b|0}h=b|0;g=b+e|0;if((b&3)==(d&3)){while(b&3){if(!e)return h|0;a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}e=g&-4|0;f=e-64|0;while((b|0)<=(f|0)){c[b>>2]=c[d>>2];c[b+4>>2]=c[d+4>>2];c[b+8>>2]=c[d+8>>2];c[b+12>>2]=c[d+12>>2];c[b+16>>2]=c[d+16>>2];c[b+20>>2]=c[d+20>>2];c[b+24>>2]=c[d+24>>2];c[b+28>>2]=c[d+28>>2];c[b+32>>2]=c[d+32>>2];c[b+36>>2]=c[d+36>>2];c[b+40>>2]=c[d+40>>2];c[b+44>>2]=c[d+44>>2];c[b+48>>2]=c[d+48>>2];c[b+52>>2]=c[d+52>>2];c[b+56>>2]=c[d+56>>2];c[b+60>>2]=c[d+60>>2];b=b+64|0;d=d+64|0}while((b|0)<(e|0)){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0}}else{e=g-4|0;while((b|0)<(e|0)){a[b>>0]=a[d>>0]|0;a[b+1>>0]=a[d+1>>0]|0;a[b+2>>0]=a[d+2>>0]|0;a[b+3>>0]=a[d+3>>0]|0;b=b+4|0;d=d+4|0}}while((b|0)<(g|0)){a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0}return h|0}function Va(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;h=b+e|0;d=d&255;if((e|0)>=67){while(b&3){a[b>>0]=d;b=b+1|0}f=h&-4|0;i=d|d<<8|d<<16|d<<24;g=f-64|0;while((b|0)<=(g|0)){c[b>>2]=i;c[b+4>>2]=i;c[b+8>>2]=i;c[b+12>>2]=i;c[b+16>>2]=i;c[b+20>>2]=i;c[b+24>>2]=i;c[b+28>>2]=i;c[b+32>>2]=i;c[b+36>>2]=i;c[b+40>>2]=i;c[b+44>>2]=i;c[b+48>>2]=i;c[b+52>>2]=i;c[b+56>>2]=i;c[b+60>>2]=i;b=b+64|0}while((b|0)<(f|0)){c[b>>2]=i;b=b+4|0}}while((b|0)<(h|0)){a[b>>0]=d;b=b+1|0}return h-e|0}function Wa(a){a=a|0;var b=0,d=0,e=0;e=J()|0;d=c[g>>2]|0;b=d+a|0;if((a|0)>0&(b|0)<(d|0)|(b|0)<0){M(b|0)|0;x(12);return -1}if((b|0)>(e|0))if(!(L(b|0)|0)){x(12);return -1}c[g>>2]=b;return d|0}function Xa(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return ea[a&3](b|0,c|0,d|0)|0}function Ya(a,b){a=a|0;b=b|0;fa[a&7](b|0)}function Za(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;ga[a&3](b|0,c|0,d|0,e|0)}function _a(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;ha[a&3](b|0,c|0,d|0,e|0,f|0)}function $a(a,b,c,d,e,f,g){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;g=g|0;ia[a&3](b|0,c|0,d|0,e|0,f|0,g|0)}function ab(a,b,c){a=a|0;b=b|0;c=c|0;p(0);return 0}function bb(a){a=a|0;p(1)}function cb(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;p(2)}function db(a,b,c,d,e){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;p(3)}function eb(a,b,c,d,e,f){a=a|0;b=b|0;c=c|0;d=d|0;e=e|0;f=f|0;p(4)}

// EMSCRIPTEN_END_FUNCS
var ea=[ab,xa,Ma,ab];var fa=[bb,ta,ua,va,wa,Ga,La,Na];var ga=[cb,Aa,Ja,Qa];var ha=[db,za,Ia,Pa];var ia=[eb,ya,Ha,Oa];return{__GLOBAL__sub_I_bind_cpp:oa,___getTypeName:na,_free:sa,_malloc:ra,_memcpy:Ua,_memset:Va,_sbrk:Wa,dynCall_iiii:Xa,dynCall_vi:Ya,dynCall_viiii:Za,dynCall_viiiii:_a,dynCall_viiiiii:$a,establishStackSpace:ma,stackAlloc:ja,stackRestore:la,stackSave:ka}})


// EMSCRIPTEN_END_ASM
(Va,Wa,buffer),va=c.__GLOBAL__sub_I_bind_cpp=Z.__GLOBAL__sub_I_bind_cpp;c.___getTypeName=Z.___getTypeName;var Y=c._free=Z._free,za=c._malloc=Z._malloc;c._memcpy=Z._memcpy;c._memset=Z._memset;c._sbrk=Z._sbrk;c.establishStackSpace=Z.establishStackSpace;c.stackAlloc=Z.stackAlloc;c.stackRestore=Z.stackRestore;c.stackSave=Z.stackSave;c.dynCall_iiii=Z.dynCall_iiii;
c.dynCall_vi=Z.dynCall_vi;c.dynCall_viiii=Z.dynCall_viiii;c.dynCall_viiiii=Z.dynCall_viiiii;c.dynCall_viiiiii=Z.dynCall_viiiiii;c.asm=Z;
if(M){if(String.prototype.startsWith?!M.startsWith(N):0!==M.indexOf(N)){var Xa=M;M=c.locateFile?c.locateFile(Xa,w):w+Xa}if(u||v){var Ya=c.readBinary(M);D.set(Ya,8)}else{K++;c.monitorRunDependencies&&c.monitorRunDependencies(K);var Za=function(a){a.byteLength&&(a=new Uint8Array(a));D.set(a,8);c.memoryInitializerRequest&&delete c.memoryInitializerRequest.response;K--;c.monitorRunDependencies&&c.monitorRunDependencies(K);0==K&&(null!==ua&&(clearInterval(ua),ua=null),L&&(a=L,L=null,a()))},$a=function(){c.readAsync(M,
Za,function(){throw"could not load memory initializer "+M;})},ab=y(M);if(ab)Za(ab.buffer);else if(c.memoryInitializerRequest){var bb=function(){var a=c.memoryInitializerRequest,b=a.response;if(200!==a.status&&0!==a.status)if(b=y(c.memoryInitializerRequestURL))b=b.buffer;else{console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+a.status+", retrying "+M);$a();return}Za(b)};c.memoryInitializerRequest.response?setTimeout(bb,0):c.memoryInitializerRequest.addEventListener("load",
bb)}else $a()}}c.then=function(a){if(c.calledRun)a(c);else{var b=c.onRuntimeInitialized;c.onRuntimeInitialized=function(){b&&b();a(c)}}return c};function z(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}z.prototype=Error();z.prototype.constructor=z;L=function cb(){c.calledRun||db();c.calledRun||(L=cb)};
function db(){function a(){if(!c.calledRun&&(c.calledRun=!0,!ea)){sa||(sa=!0,I(pa));I(qa);if(c.onRuntimeInitialized)c.onRuntimeInitialized();if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var a=c.postRun.shift();ra.unshift(a)}I(ra)}}if(!(0<K)){if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)ta();I(oa);0<K||c.calledRun||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},
1);a()},1)):a())}}c.run=db;function A(a){if(c.onAbort)c.onAbort(a);void 0!==a?(ca(a),da(a),a=JSON.stringify(a)):a="";ea=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}c.abort=A;if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();c.noExitRuntime=!0;db();



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
    
}).call(this,require('_process'),require("buffer").Buffer,"/build")
},{"_process":8,"buffer":5,"fs":4,"path":7}],2:[function(require,module,exports){
'use strict';

var AnitomyNative = require('./build/anitomyscript');

var anitomy_native = new AnitomyNative();

function elementEntry(elements, key) {
  if (elements.count(key) > 1) {
    return newArrayFromStringVector(elements.get_all(key));
  } else {
    var val = elements.get(key);
    return val == '' ? undefined : val;
  }
}

function createObjectFromElements(elements) {
  var ret = {
    anime_season: elementEntry(elements, anitomy_native.ElementCategory.kElementAnimeSeason),
    season_prefix: elementEntry(elements, anitomy_native.ElementCategory.kElementAnimeSeasonPrefix),
    anime_title: elementEntry(elements, anitomy_native.ElementCategory.kElementAnimeTitle),
    anime_type: elementEntry(elements, anitomy_native.ElementCategory.kElementAnimeType),
    anime_year: elementEntry(elements, anitomy_native.ElementCategory.kElementAnimeYear),
    audio_term: elementEntry(elements, anitomy_native.ElementCategory.kElementAudioTerm),
    device_compatibility: elementEntry(elements, anitomy_native.ElementCategory.kElementDeviceCompatibility),
    episode_number: elementEntry(elements, anitomy_native.ElementCategory.kElementEpisodeNumber),
    episode_prefix: elementEntry(elements, anitomy_native.ElementCategory.kElementEpisodePrefix),
    episode_title: elementEntry(elements, anitomy_native.ElementCategory.kElementEpisodeTitle),
    file_checksum: elementEntry(elements, anitomy_native.ElementCategory.kElementFileChecksum),
    file_extension: elementEntry(elements, anitomy_native.ElementCategory.kElementFileExtension),
    file_name: elementEntry(elements, anitomy_native.ElementCategory.kElementFileName),
    language: elementEntry(elements, anitomy_native.ElementCategory.kElementLanguage),
    other: elementEntry(elements, anitomy_native.ElementCategory.kElementOther),
    release_group: elementEntry(elements, anitomy_native.ElementCategory.kElementReleaseGroup),
    release_information: elementEntry(elements, anitomy_native.ElementCategory.kElementReleaseInformation),
    release_version: elementEntry(elements, anitomy_native.ElementCategory.kElementReleaseVersion),
    source: elementEntry(elements, anitomy_native.ElementCategory.kElementSource),
    subtitles: elementEntry(elements, anitomy_native.ElementCategory.kElementSubtitles),
    video_resolution: elementEntry(elements, anitomy_native.ElementCategory.kElementVideoResolution),
    video_term: elementEntry(elements, anitomy_native.ElementCategory.kElementVideoTerm),
    volume_number: elementEntry(elements, anitomy_native.ElementCategory.kElementVolumeNumber),
    volume_prefix: elementEntry(elements, anitomy_native.ElementCategory.kElementVolumePrefix),
    unknown: elementEntry(elements, anitomy_native.ElementCategory.kElementUnknown)
  };
  elements["delete"]();
  return ret;
}

function mapVector(vector, cb) {
  var array = [];

  for (var i = 0; i < vector.size(); i++) {
    array.push(cb(vector.get(i)));
  }

  vector["delete"]();
  return array;
}

function newArrayFromElementVector(vector) {
  return mapVector(vector, function (val) {
    return createObjectFromElements(val);
  });
}

function newArrayFromStringVector(vector) {
  return mapVector(vector, function (val) {
    return val;
  });
}

function validateInput(value) {
  if (typeof value !== 'string' || !value) {
    throw new Error('value should be a non empty string');
  }
}

function newStringVector(array, validate) {
  var vec = new anitomy_native.VectorString_t();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      if (validate) {
        validateInput(value);
      }

      vec.push_back(value);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return vec;
}

function newAnitomyOptions(options) {
  var anitomyOpts = anitomy_native._createOptions();

  if (typeof options.allowed_delimiters === 'string') {
    anitomyOpts.allowed_delimiters = options.allowed_delimiters;
  }

  if (Array.isArray(options.ignored_strings)) {
    anitomyOpts.ignored_strings = newStringVector(options.ignored_strings, true);
  }

  if (options.parse_episode_number !== undefined) {
    anitomyOpts.parse_episode_number = !!options.parse_episode_number;
  }

  if (options.parse_episode_title !== undefined) {
    anitomyOpts.parse_episode_title = !!options.parse_episode_title;
  }

  if (options.parse_file_extension !== undefined) {
    anitomyOpts.parse_file_extension = !!options.parse_file_extension;
  }

  if (options.parse_release_group !== undefined) {
    anitomyOpts.parse_release_group = !!options.parse_release_group;
  }

  return anitomyOpts;
}

function parse(file, options) {
  var parsed;
  options = newAnitomyOptions(options || {});

  if (Array.isArray(file)) {
    var vector = newStringVector(file, true);
    parsed = anitomy_native._parseArray(vector, options);
    parsed = newArrayFromElementVector(parsed);
    vector["delete"]();
  } else {
    validateInput(file);
    parsed = anitomy_native._parseFile(file, options);
    parsed = createObjectFromElements(parsed);
  }

  return parsed;
}

module.exports = {
  parse: parse,
  AnitomyNative: AnitomyNative
};

},{"./build/anitomyscript":1}],3:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

},{"base64-js":3,"ieee754":6}],6:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],7:[function(require,module,exports){
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
},{"_process":8}],8:[function(require,module,exports){
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

},{}]},{},[2])(2)
});
